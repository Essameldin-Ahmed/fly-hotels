import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { Subscription } from 'rxjs';
import { HotelModel } from 'src/app/shared/interfaces/hotel.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit, OnDestroy {
  @Input() nightsCount;
  hotelDetails
  subscription: Subscription
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.subscription = this.hotelsService.selectedHotelSubject.subscribe(
      (hotel: HotelModel)=> {
        this.hotelDetails = hotel;
      }
    )
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
