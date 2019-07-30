import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BloggingService } from 'src/app/service/blogging.service';
import { UserDetailDto } from 'src/app/models/user-detail-dto';

@Component({
  selector: 'app-blogging-detail',
  templateUrl: './blogging-detail.component.html',
  styleUrls: ['./blogging-detail.component.scss']
})
export class BloggingDetailComponent implements OnInit {
  blogId: string;
  blog: UserDetailDto;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bloggingService: BloggingService
    ) { }

  ngOnInit() {
    this.blogId = this.activatedRoute.snapshot.paramMap.get("id");
    if(!this.blogId) {
      alert("Invalid action. Blog ID not present!!")
      this.router.navigate(['blogging-list']);
      return;
    }

    this.bloggingService.getById(this.blogId)
    .subscribe( response => {
      this.blog = response;
      console.log(response);
    },
    err => {
      console.log(err);
    });
  }

  viewBlogList() {
    this.router.navigate(['blogging-list']);
  }

}
