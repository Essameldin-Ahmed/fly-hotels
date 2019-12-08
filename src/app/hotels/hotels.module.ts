import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels.component';
import { HotelRoutingModule } from './hotels-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { CommentsModule } from '../comments/comments.module';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@NgModule({
  declarations: [HotelsComponent,HotelsListComponent,HotelDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommentsModule,
    HotelRoutingModule
  ]
})
export class HotelsModule { }
