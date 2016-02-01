System.register(['./mock-services', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_services_1, core_1;
    var ServiceNav;
    return {
        setters:[
            function (mock_services_1_1) {
                mock_services_1 = mock_services_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ServiceNav = (function () {
                function ServiceNav() {
                }
                ServiceNav.prototype.getServices = function () {
                    return Promise.resolve(mock_services_1.SERVICES);
                };
                // See the "Take it slow" appendix
                ServiceNav.prototype.getServicesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_services_1.SERVICES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                ServiceNav = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ServiceNav);
                return ServiceNav;
            })();
            exports_1("ServiceNav", ServiceNav);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=service.nav.js.map