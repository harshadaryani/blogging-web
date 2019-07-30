import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { BloggingService } from 'src/app/service/blogging.service';

@Component({
  selector: 'app-blogging-add',
  templateUrl: './blogging-add.component.html',
  styleUrls: ['./blogging-add.component.scss']
})
export class BloggingAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private bloggingService: BloggingService) 
  { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      date: ['', Validators.required],
      content: ['', Validators.required],
      keywords: ['', Validators.required]
    });
  }

  onSubmit() {
      this.bloggingService.post(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(["blogging-list"]);
      })
  }

}
