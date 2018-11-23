import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  showContent : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public  onClickExpansion(){
    this.showContent = true;
  }

}
