import { Component, OnInit } from '@angular/core';
declare var cpp: any;
declare var unity: any;
declare var java: any;
declare var web:any;
@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {

  constructor() { }
  button: string = "c++";
  allImagesWithMesurments: any;

  ngOnInit() {
  }
  onClick() {
    let allImages = cpp();
    //console.log(allImages);
    this.allImagesWithMesurments = allImages;
  }
  onClick1() {
    let allImages = unity();
    //console.log(allImages);
    this.allImagesWithMesurments = allImages;
  }
  onClick2() {
    let allImages = java();
    //console.log(allImages);
    this.allImagesWithMesurments = allImages;
  }
  onClick3() {
    let allImages = web();
   // console.log(allImages);
    this.allImagesWithMesurments = allImages;
  }
  
}
