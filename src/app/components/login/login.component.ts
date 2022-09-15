import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isConnected! : boolean

  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    this.service.stateSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })
  }

  login(){
    this.service.login()
  }

  logout(){
    this.service.logout()
  }

}
