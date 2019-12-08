import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { HotelDetailsComponent } from '../hotels/hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    HotelCardComponent,
    ImagesGalleryComponent,
    CommentCardComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,

    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    HotelCardComponent,
    ImagesGalleryComponent,
    CommentCardComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
