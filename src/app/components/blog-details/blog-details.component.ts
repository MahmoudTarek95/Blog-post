import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsService } from 'src/app/services/blogs.service';
import { Blog } from 'src/interfaces/blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit, OnDestroy {
  id: number;
  routerSubs: Subscription;
  blog:Blog;
  constructor(private activatedRoute: ActivatedRoute, private blogServices:BlogsService) {}

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id']
      console.log(this.id)
        this.getBlogDetails(this.id)
    // this.routerSubs = this.activatedRoute.params.subscribe((params) => {
    // });
  }

  getBlogDetails(id:number){
    this.blogServices.getBlogById(this.id).subscribe((res:Blog) => {
      this.blog = res
    })
  }

  ngOnDestroy(): void {
    this.routerSubs.unsubscribe();
  }
}
