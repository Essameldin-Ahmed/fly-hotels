import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HotelCardModel } from '../../interfaces/hotel-card.model';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() nightsCount: number
  @Input() hotelCard: HotelCardModel;
  @Input() activeHotelID: number;
  @Output() cardClicked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onCardClicked() {
    this.cardClicked.emit(this.hotelCard.id);
  }
}
