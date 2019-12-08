import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsComponent } from './hotel-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsModule } from 'src/app/comments/comments.module';

describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailsComponent ],
      imports: [SharedModule, CommentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
