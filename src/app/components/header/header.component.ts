import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
