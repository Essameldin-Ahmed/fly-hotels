import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsService } from './comments.service';
import { Subject } from 'rxjs';
import { ReviewModel } from '../shared/interfaces/review.model';

class CommentsServiceMock {
  originalComments = []
  commentsSubject: Subject<ReviewModel[]> = new Subject()
  getPageComments() {
    return null
  }
}

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsComponent, CommentsListComponent ],
      imports: [SharedModule],
      providers:[{provide: CommentsService, useClass: CommentsServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
