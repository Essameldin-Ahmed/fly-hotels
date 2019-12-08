import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ReviewModel } from '../shared/interfaces/review.model';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnChanges {

  @Input() commentsList: ReviewModel[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
   
  }

  ngOnChanges() {
    if (this.commentsList) {
      this.commentsService.originalComments = this.commentsList;
    }
  }

}
