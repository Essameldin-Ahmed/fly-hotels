import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ReviewModel } from '../../shared/interfaces/review.model';
import { CommentsService } from '../comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit, OnDestroy {
  viewdList: ReviewModel[];
  configuration;
  orderTop: boolean;
  orderBottom: boolean;
  subscribtion: Subscription;
  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.subscribtion = this.commentsService.commentsSubject.subscribe(
      (coments: ReviewModel[]) => {
        this.viewdList = coments;
        this.configuration = {
          commentsPerPage: 3,
          items: this.commentsService.originalComments
        };
        this.orderTop = false;
        this.orderBottom = false;
      }
    );
    this.commentsService.getPageComments()
  }

  changePage(pageNumber) {
    this.commentsService.getPageComments(pageNumber);
  }

  changeOrder(orderTop) {
    if (orderTop && this.orderTop || !orderTop && this.orderBottom) {
      return
    }
    this.orderTop = orderTop
    this.orderBottom = !orderTop
    this.commentsService.changeOrder(orderTop)

  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }
}
