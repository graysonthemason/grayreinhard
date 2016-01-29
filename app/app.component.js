System.register(['angular2/core', './service-detail.component', './service.nav'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_detail_component_1, service_nav_1;
    var HeaderComponent, AppComponent, FooterComponent;
    function eventFire(el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        }
        else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_detail_component_1_1) {
                service_detail_component_1 = service_detail_component_1_1;
            },
            function (service_nav_1_1) {
                service_nav_1 = service_nav_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: '../views/header.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
            AppComponent = (function () {
                function AppComponent(_serviceNav) {
                    this._serviceNav = _serviceNav;
                    this.title = 'Gray\s personal site';
                }
                AppComponent.prototype.getServices = function () {
                    var _this = this;
                    this._serviceNav.getServices().then(function (services) { return _this.services = services; });
                };
                AppComponent.prototype.getSuggestion = function () {
                    var query = window.location.search;
                    if (query.indexOf("developer") > -1) {
                        console.log("success developer");
                        $("#suggestion").html("Looks like you know Gray as a developer. Click on the left brain.");
                    }
                    else if (query.indexOf("musician") > -1) {
                        $("#suggestion").html("Looks like you know Gray as a musician...rock on! Click on the right brain.");
                    }
                };
                ;
                AppComponent.prototype.ngOnInit = function () {
                    this.getServices();
                };
                AppComponent.prototype.onSelect = function (service) {
                    this.selectedService = service;
                    this.selectedNav = this.selectedService.navlist[0];
                    document.getElementById("description-wrapper").innerHTML = this.selectedNav.content;
                    $(document).ready(function () {
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '../views/main.html',
                        directives: [service_detail_component_1.ServiceDetailComponent],
                        providers: [service_nav_1.ServiceNav]
                    }), 
                    __metadata('design:paramtypes', [service_nav_1.ServiceNav])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        templateUrl: '../views/footer.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            })();
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map