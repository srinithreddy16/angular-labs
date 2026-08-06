import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  comment_api = 'https://jsonplaceholder.typicode.com/comments';

  httpClient = inject(HttpClient);
  commentList!: Observable<Comment[]>;
  // Increases readability and maintainability

  ngOnInit() {
    // httpClient.get() returns Observable
    this.commentList = this.httpClient.get<Comment[]>(this.comment_api);
    console.log(this.commentList);
  }
}

