import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/interfaces/blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input('blog') blog:Blog

  constructor(private router:Router){}

  goToDetails(id:number){
    this.router.navigate([`/blog/${id}`])
  }
}
