import { Component, OnInit } from '@angular/core';

// import * as $ from 'jquery';



// declare var $;

// declare global {
//   interface JQuery {
//     cycle(options?: any): any;
//   }

  
// }

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})


export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //$('.jersey').cycle({fx : 'fade'});
       
      //  console.log($('.jersey'));
      // console.log($('.jersey').cycle('fade'));

  }

  
}
