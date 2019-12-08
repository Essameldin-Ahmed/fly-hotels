import { Component, OnInit } from '@angular/core';
import { MainService } from './core/services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fly365-dimo';
  isLoading$
  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.isLoading$ =this.mainService.loadingSubject
  }
}
