import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsListComponent } from './hotels-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { of, Subject } from 'rxjs';
import { HotelsService } from '../hotels.service';

describe('HotelsListComponent', () => {
  let component: HotelsListComponent;
  let fixture: ComponentFixture<HotelsListComponent>;

  class HotelsServiceMock {
    nightsCountSubject: Subject<number> = new Subject();
    getHotelsList() {
      return of([])
    }

    setNightsCount() {

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsListComponent ],
      imports: [SharedModule],
      providers:[{provide: HotelsService, useClass: HotelsServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
