import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isConnected! : boolean
  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    this.service.stateSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })
  }

}
