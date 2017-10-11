import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

import { FileUploader } from 'ng2-file-upload/ng2-file-upload.js'
import { environment } from '../../../environments/environment'

const URL = environment.apiUrl + '/auth/upload'

@Component({
  selector: 'app-pages-profile',
  templateUrl: './pages-profile.component.html',
  styleUrls: ['./pages-profile.component.css']
})
export class PagesProfileComponent implements OnInit, OnDestroy {
  user: any;
  subscriptions = [];
  saving = false;
  apiUrl = environment.apiUrl
  editUser = new User;
  userData: User;
  file: any;

  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    }

    this.user = this.auth.userChange$.subscribe((user) => this.user = user)
    let subscription = this.auth.userChange$.subscribe((user) => {
      this.user = user
      console.log(this.user)
    });
    this.subscriptions.push(subscription);
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/home'])
    });
  }

  private submit() {
    this.saving = true;
    this.auth.updateUser(this.editUser).subscribe(() => {
      this.saving = false;
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

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
