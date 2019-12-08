import { Component, OnInit, Input } from '@angular/core';
import { ReviewModel } from '../../interfaces/review.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  @Input() comment: ReviewModel;
  constructor() { }

  ngOnInit() {
  }

}
