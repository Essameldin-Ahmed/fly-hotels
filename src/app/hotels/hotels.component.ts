import { Component, OnInit } from '@angular/core';
import { HotelsService } from './hotels.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  nightsCount = 1;
  submittedCount = 1;
  subscription: Subscription


  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {

  }

  changeNights() {
    this.submittedCount = this.nightsCount
    this.hotelsService.setNightsCount(this.nightsCount);
  }


}
