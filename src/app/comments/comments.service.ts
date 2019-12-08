import { Injectable } from '@angular/core';
import { ReviewModel } from '../shared/interfaces/review.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentsCount = 3
  commentsSubject: Subject<ReviewModel[]> = new Subject()

  private _originalCommentsList: ReviewModel[]
  constructor() { }

  set originalComments(comments: ReviewModel[]) {
    this._originalCommentsList = comments;
    this.getPageComments()
  };

  get originalComments() {
    return this._originalCommentsList
  }
  getListCount() {
    let count = this._originalCommentsList.length
    return count
  }

  changeOrder(orderTop: boolean) {
    if(orderTop) {
      this._originalCommentsList.sort((a, b) => (a.score > b.score) ? -1 : 1);
    } else {
      this._originalCommentsList.sort((a, b) => (a.score > b.score) ? 1 : -1);
    }
   
    this.getPageComments()
  }


  getPageComments(pageNumber = 1) {
    if(!this._originalCommentsList && pageNumber >= 1 && pageNumber <= (this.getListCount() / this.commentsCount ) ) {
      return null
    }
    let startIndex = (pageNumber - 1) * this.commentsCount
    const commentsList = [... this._originalCommentsList]
    this.commentsSubject.next(commentsList.slice(startIndex, startIndex + this.commentsCount))
  }



}
