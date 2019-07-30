import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloggingService } from 'src/app/service/blogging.service';
import { UserDetailDto } from 'src/app/models/user-detail-dto';

@Component({
  selector: 'app-blogging-list',
  templateUrl: './blogging-list.component.html',
  styleUrls: ['./blogging-list.component.scss']
})
export class BloggingListComponent implements OnInit {

  //sub = {};
  blog: UserDetailDto;

  constructor(private router: Router, private bloggingService: BloggingService) { }

  ngOnInit() {
    //this.sub = this.route.params.subscribe(data => console.log(data));
    this.bloggingService.get().subscribe(
      response => {
        this.blog = response;
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
     //this.sub.unsubscribe();
  }

  upsertBlog(id) {
    if(id) {
      this.router.navigate(['blogging-edit', id]);
    }
    else {
      this.router.navigate(['blogging-add']);
    }
  }

  viewBlog(id) {
    if(id) {
      this.router.navigate(['blogging-detail', id]);
    }
  }

  deleteBlog(id) {
    this.bloggingService.delete(id).subscribe(
      response => {
        this.blog = response;
        console.log(response);
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }

}
