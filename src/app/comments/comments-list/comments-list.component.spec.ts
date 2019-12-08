import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsListComponent } from './comments-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsService } from '../comments.service';
import { Subject } from 'rxjs';
import { ReviewModel } from 'src/app/shared/interfaces/review.model';


class CommentsServiceMock {
  commentsSubject: Subject<ReviewModel[]> = new Subject()
  getPageComments() {
    return null
  }
}

describe('CommentsListComponent', () => {
  let component: CommentsListComponent;
  let fixture: ComponentFixture<CommentsListComponent>;
  let service: CommentsService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsListComponent ],
      imports: [SharedModule],
      providers:[{provide: CommentsService, useClass: CommentsServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsListComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CommentsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to comments and get page comments on init', () => {
    spyOn(service, 'getPageComments').and.returnValue(null)
    component.ngOnInit();
    expect(service.getPageComments).toHaveBeenCalled()
  });
});
