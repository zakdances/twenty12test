import { Component } from '@angular/core';
import { StubService } from './stub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(private stub: StubService) {

  }
}
