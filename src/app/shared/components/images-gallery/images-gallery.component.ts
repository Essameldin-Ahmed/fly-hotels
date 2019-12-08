import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss']
})
export class ImagesGalleryComponent implements OnInit, OnChanges {

  @Input() gallery: { thumbnail: string; photo: string }[]
  originalGallery: { thumbnail: string; photo: string }[]
  selectedImage: { thumbnail: string; photo: string }
  loading: boolean
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.gallery != this.originalGallery ) {
      this.originalGallery = this.gallery;
      this.loading = true
      this.selectedImage = this.gallery[0]
    }
  }

  imgLoaded() {
    this.loading = false
  }
}
