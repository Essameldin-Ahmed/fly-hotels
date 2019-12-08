import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HotelCardModel } from '../shared/interfaces/hotel-card.model';
import { environment } from 'src/environments/environment';
import { HotelModel } from '../shared/interfaces/hotel.model';
import { MainService } from '../core/services/main.service';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  hotelsCardList: HotelCardModel[];

  hotelsDetails = {}

  nightsCountSubject: BehaviorSubject<number> = new BehaviorSubject(1)
  constructor(private http: HttpClient, private mainService: MainService) { 
  }

  selectedHotelSubject: Subject<any> = new Subject

  setNightsCount(count: number) {
    this.nightsCountSubject.next(count);
  }

  getHotelsList() {
    if (this.hotelsCardList) {
      return of(this.hotelsCardList);
    } else {
      return this.fetchHotelsList()
    }
  }
  private fetchHotelsList() {
    return this.http.get(`${environment.baseURI}/hotels`).pipe(
      map((hotelsCardListResp: HotelCardModel[]) => this.hotelsCardList = hotelsCardListResp)
    )
  }

  selectHotel(hotelID: number) {
    if (this.hotelsDetails[hotelID]) {
      this.selectedHotelSubject.next(this.hotelsDetails[hotelID]);
    } else {
      this.fetchHotelDetails(hotelID)
    }
  }

  private fetchHotelDetails(hotelID: number) {
    this.mainService.startLoading();
    return this.http.get(`${environment.baseURI}/hotelDetails/${hotelID}`).subscribe((hotelDetails: HotelModel) => {
      const mappedHotelDetails = {...hotelDetails, pricePerNight: this.hotelsCardList.find((item)=> item.id === hotelID).pricePerNight }
      this.hotelsDetails[hotelID] = mappedHotelDetails
      this.selectedHotelSubject.next(mappedHotelDetails);
      this.mainService.stopLoading();
    })
  }
}
