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
  public title = 'Gray\s personal site';
  public services: Service[];
  public selectedHero: Service;

  constructor(private _serviceNav: ServiceNav) { }

  getServices() {
    this._serviceNav.getServices().then(services => this.services = services);
  }

  ngOnInit() {
    this.getServices();
  }

  onSelect(service: Service) { this.selectedService = service; }
}

@Component({
    selector: 'footer',
    templateUrl: '../views/footer.html'
})

export class FooterComponent {
	
}