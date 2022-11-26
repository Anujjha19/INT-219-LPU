import { Component } from '@angular/core';

import { FormGroup , FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeApp1';
  loginForm= new FormGroup({
    user:new FormControl(''),
    password: new FormControl(''),
  })
}
