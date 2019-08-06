import { Component, OnInit } from '@angular/core';
// declare var edu1:any;

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent {
  constructor(){
    var education: [string,string,string,number][];

  }


   
  education = [["Btech","JNTU-K", "95.6",2019], ["Inter","BOARD OF INTERMEDIATE EDUCATION", "98.1",2015], ["Tenth","BOARD OF SECONDARY EDUCATION", "9.8(CGPA)",2013]];

}
