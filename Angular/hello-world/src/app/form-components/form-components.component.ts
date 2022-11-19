import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css']
})
// export class FormComponentsComponent implements OnInit {
    export class FormComponentsComponent   {

  constructor() { }

    submit(login: any){
      console.log("Form Submitted !!! " , login)
    }
  /* ngOnInit(): void {
  }
 */
}
