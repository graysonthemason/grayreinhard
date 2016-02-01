import {Component} from 'angular2/core';
import {Service} from './service';

@Component({
  selector: 'my-service-detail',
  templateUrl: '../views/details.html',
  inputs: ['service']
})
export class ServiceDetailComponent {
  public service: Service;
  onNavSelect(navlist: Navlist) { 
    this.selectedNav = navlist;
    document.getElementById("description-wrapper").innerHTML = navlist.content;
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
