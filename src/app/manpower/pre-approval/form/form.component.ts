import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newlt_no='';
  constructor() { }

  ngOnInit() {
  }
  onAddlt_no(){
    this.newlt_no = 'mero post';
  }

}
