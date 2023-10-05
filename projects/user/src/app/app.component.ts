import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class UserComponent {
  title = 'user';
  data !: any

  constructor(private service: UserService) {
    this.service.getDataUser().subscribe(res => {
      this.data = res
      console.log('res', res);
    })
  }
}
