import { Component, Input } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { Blog } from 'src/interfaces/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs: Blog[] = [];
  page= 1
  constructor(private blogsService:BlogsService) {}

  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs(){
    this.blogsService.getAllBlogPosts(30).subscribe((res:Blog[]) => {
      this.blogs = res
    })
  }

  getPageFromService(page:any) {
    this.blogsService.getAllBlogPosts(page, 6).subscribe(response => {
      this.blogs = response;
    });
}
}
