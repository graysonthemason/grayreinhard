import {Component, OnInit} from 'angular2/core';
import {Service} from './service';
import {ServiceDetailComponent} from './service-detail.component';
import {ServiceNav} from './service.nav';

@Component({
	selector: 'header',
	templateUrl: '../views/header.html'
})

export class HeaderComponent { }

@Component({
    selector: 'my-app',
    templateUrl: '../views/main.html',
    directives: [ServiceDetailComponent],
    providers: [ServiceNav]
})

export class AppComponent implements OnInit {
  public title = 'Gray\'s personal site';
  public services: Service[];
  public selectedService: Service;

  constructor(private _serviceNav: ServiceNav) { }

  getServices() {
    this._serviceNav.getServices().then(services => this.services = services);
  }
  getSuggestion () {
      var query = window.location.search;
      if (query.indexOf("developer") > -1){
        $("#suggestion").html("Looks like you know Gray as a developer.<br>Click the left side of the brain.")
      }
      else if (query.indexOf("musician") > -1){
        $("#suggestion").html("Looks like you know Gray as a musician...rock on!<br>Click the right side of the brain.")
      }
      else if (query.indexOf("spotify") > -1){
        $("#job-container").show();
        $("#job-container").html(`
          <h4><em>
          <p>Thanks for looking into me! Just wanted to take this chance to reiterate why I think I'd be a great fit at Spotify.</p>
          <p>As a developer, and also as a former composer, there is nothing in the world that excites me more than being on the front lines of <strong>the</strong> most progressive music portal. Click on the left brain for further info on me as a developer, and the right side if you're interested in my experiences as a composer/musician.</p></em></h4>
        `);
      }
    };

  ngOnInit() {
    this.getServices();
  };

  onSelect(service: Service) { this.selectedService = service;
      this.selectedNav = this.selectedService.navlist[0];
    document.getElementById("description-wrapper").innerHTML = this.selectedNav.content;
    $("#suggestion").addClass("hidden");
  }
}

@Component({
    selector: 'footer',
    templateUrl: '../views/footer.html'
})

export class FooterComponent {
	
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}