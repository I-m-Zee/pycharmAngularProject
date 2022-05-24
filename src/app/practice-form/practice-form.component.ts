import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css']
})
export class PracticeFormComponent implements OnInit {

  public form:FormGroup;
  constructor(fb:FormBuilder) {
    this.form=fb.group({
      userName:[null,Validators.required]
    })
   }

  ngOnInit(): void {
  }

}
