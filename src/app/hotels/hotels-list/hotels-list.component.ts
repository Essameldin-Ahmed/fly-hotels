import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HotelCardModel } from 'src/app/shared/interfaces/hotel-card.model';
import { HotelsService } from '../hotels.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MainService } from 'src/app/core/services/main.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit, OnDestroy {
  nightsCount: number;
  subscription: Subscription
  hotelsList: HotelCardModel[];
  activeHotelId;
  @ViewChild('target', {static: true}) target; 
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.subscription = this.hotelsService.getHotelsList().pipe(
      switchMap((hotelsListResp: HotelCardModel[]) => {
        this.hotelsList = hotelsListResp;
        return this.hotelsService.nightsCountSubject
      })
    ).subscribe(
      (count) => {
        this.nightsCount = count
      }
    )
  }

  handleCardClicked(hotelID: number) {
    this.activeHotelId = hotelID;
    this.hotelsService.selectHotel(hotelID)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
