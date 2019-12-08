import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  declarations: [CommentsComponent, CommentsListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
