import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  tel: boolean;
  cel: boolean;
  email: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
