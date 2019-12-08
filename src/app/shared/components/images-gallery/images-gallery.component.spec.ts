import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesGalleryComponent } from './images-gallery.component';
import { SharedModule } from '../../shared.module';
import { SpinnerComponent } from '../spinner/spinner.component';

describe('ImagesGalleryComponent', () => {
  let component: ImagesGalleryComponent;
  let fixture: ComponentFixture<ImagesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesGalleryComponent, SpinnerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
