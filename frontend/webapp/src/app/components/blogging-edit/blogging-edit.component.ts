import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { BloggingService } from 'src/app/service/blogging.service';

@Component({
  selector: 'app-blogging-edit',
  templateUrl: './blogging-edit.component.html',
  styleUrls: ['./blogging-edit.component.scss']
})
export class BloggingEditComponent implements OnInit {

  blogId: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private activatedRoute: ActivatedRoute ,
    private bloggingService: BloggingService) 
  { }

  editForm: FormGroup;

  ngOnInit() {
    this.blogId = this.activatedRoute.snapshot.paramMap.get("id");
    if(!this.blogId) {
      alert("Invalid action. Blog ID not present!!")
      this.router.navigate(['blogging-list']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
      keywords: ['', Validators.required]
    });

    this.bloggingService.getById(this.blogId)
    .subscribe( response => {
      this.editForm.setValue(response);
    },
    err => {
      this.error = err.error.error;
        if(err.status == '401') {
          this.router.navigate(['login']);
        }
    })
  }

  onSubmit() {
      this.bloggingService.put(this.blogId, this.editForm.value)
      .subscribe( data => {
        this.router.navigate(["blogging-list"]);
      },
      err => {
        this.error = err.error.error;
        if(err.status == '401') {
          this.router.navigate(['login']);
        }
      })
  }

  cancel() {
    this.router.navigate(['blogging-list']);
  }

}
