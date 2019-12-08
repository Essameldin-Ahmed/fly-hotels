import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsComponent } from './hotels.component';
import { SharedModule } from '../shared/shared.module';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsService } from './hotels.service';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { CommentsModule } from '../comments/comments.module';
import { of, Subject } from 'rxjs';

describe('HotelsComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;

  class HotelsServiceMock {
    nightsCountSubject: Subject<number> = new Subject()
    selectedHotelSubject: Subject<any> = new Subject()
    getHotelsList() {
      return of([])
    }

    setNightsCount() {

    }
  }

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsComponent, HotelsListComponent, HotelDetailsComponent ],
      imports: [SharedModule, CommentsModule],
      providers:[{provide: HotelsService, useClass: HotelsServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
