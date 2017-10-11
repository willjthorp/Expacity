export class User {
  id: string;
  username: string;
  email: string;
  pic_path: string

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
