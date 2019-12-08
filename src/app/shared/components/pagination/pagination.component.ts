import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() configuration: { commentsPerPage: number, items: any[] };
  @Output() pageNumberChanged: EventEmitter<number> = new EventEmitter();

  itemsArr = []
  currentPage = 1;
  pagesCount: number
  showPagination = false;
  cachedItems;
  constructor() { }
  ngOnInit() {
    if (this.configuration) {
      this.showPagination = this.configuration.items.length > this.configuration.commentsPerPage;
      this.cachedItems = this.configuration.items
    }
  }

  ngOnChanges() {
    if (this.cachedItems === this.configuration.items) {
      return
    }
    this.cachedItems = this.configuration.items;
    this.currentPage = 1
    this.showPagination = this.configuration.items.length > this.configuration.commentsPerPage;
  }

  getItemsArray() {
    this.itemsArr = [];
    this.pagesCount = Math.ceil(this.configuration.items.length / this.configuration.commentsPerPage);
    for (let i = 0; i < this.pagesCount; i++) {
      this.itemsArr.push(i + 1);
    }
    return this.itemsArr;
  }

  navigateTo(pageNumber) {
    if (pageNumber < 1 || pageNumber > this.pagesCount || pageNumber === this.currentPage) {
      return;
    }
    this.currentPage = pageNumber;
    this.pageNumberChanged.emit(pageNumber)
  }

}
