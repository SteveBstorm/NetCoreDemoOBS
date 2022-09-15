import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected! : boolean

  currentUser! : User
  stateSubject : Subject<boolean> = new Subject<boolean>()

  constructor() { }

  login() {
    this.isConnected = true
    this.stateSubject.next(this.isConnected)
  }

  logout(){
    this.isConnected = false
    this.stateSubject.next(this.isConnected)

  }
}


export interface User {
  id : number
  login : string
  role : number
}
