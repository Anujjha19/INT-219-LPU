import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Book{
  name: string
  author: string
  image: string
  amount: number

}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  //isDisabled: boolean = true;
  name: string = 'Clean Code';
  author: string = 'anuj';
  src: string = 'https://source.unsplash.com/1600x900/?fire, water';


  books :Book[] = [
    {
      name: 'icon',
      author: 'jha ',
      image: 'https://source.unsplash.com/1600x900/?book, water',
      amount : 700
    },
    {
      name: 'youtube  ',
      author: 'doing ',
      image: 'https://source.unsplash.com/1600x900/?book, water',
      amount: 900
    },
  ];

  name1: string = 'fruit1';
  name2: string = 'fruit2';
  name3: string = 'fruit3';

  tittle = 'Angular Reactive Form';
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  loginUser() {
    //alert('Form Submitted');
  }

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    alert('lets work on ');
  }
  myName: string = '';
  handleInput(event: any) {
    this.myName = event.target.value;
  }

  isShowing: boolean = true;
  // toggleList(){
  //   this.isShowing = !this.isShowing;
  // }
}
