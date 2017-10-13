import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model'
import { Router } from '@angular/router'

import { QuestionService } from '../../services/question.service'
import { AuthService } from '../../services/auth.service'

import { FileUploader } from 'ng2-file-upload/ng2-file-upload.js'
import { environment } from '../../../environments/environment'

const URL = environment.apiUrl + '/auth/upload';

@Component({
  selector: 'app-pages-profile',
  templateUrl: './pages-profile.component.html',
  styleUrls: ['./pages-profile.component.css']
})
export class PagesProfileComponent implements OnInit, OnDestroy {
  user: User;
  subscriptions = [];
  saving = false;
  apiUrl = environment.apiUrl
  editUser = new User;
  userData: User;
  file: any;
  picUrl = environment.apiUrl;
  userQuestions: any;

  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;

  constructor(private auth: AuthService, private router: Router, private questionService: QuestionService) { }

  // Set the user and get users questions
  ngOnInit() {
    this.user = this.auth.getUser();
    if (this.user) {
      this.questionService.getUserQuestions(this.user.id)
        .subscribe((questions) => {
          this.userQuestions = questions;
        })
    }
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };
    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    }
    let subscription = this.auth.userChange$.subscribe((user) => {
      this.user = user
      this.questionService.getUserQuestions(this.user.id)
        .subscribe((questions) => {
          this.userQuestions = questions;
        })
    });
    this.subscriptions.push(subscription);
  }

  // Save uploaded photo
  private submit() {
    this.saving = true;
    this.auth.updateUser(this.editUser).subscribe(() => {
      this.saving = false;
    })
  }

  // Destroy the subscriptions
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  // Handle the updated photo form
  handleUpdateUserForm(myForm) {
    const files = this.uploader.getNotUploadedItems();
    if (files.length) {
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item, response) => {
        let data = JSON.parse(response);
        this.editUser.pic_path = data.userFileName;
        this.submit();
      };
    }
    else {
      this.submit();
    }
  }

}
