"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var API_SERVER_BASE_URL = "http://localhost:8080";
var API_EVENT_URI = "/event";
var API_EMPLOYEE_END_POINT = "/employee";
var API_AREA_END_POINT = "/area";
var API_TASK_END_POINT = "/event/{eventId}/task";
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.event_end_point = API_SERVER_BASE_URL + API_EVENT_URI;
    }
    EventService.prototype.list = function () {
        return this.http.get(this.event_end_point)
            .toPromise()
            .then(function (response) { return response.json().content; })
            .catch(this.handleError);
    };
    EventService.prototype.find = function (id) {
        return this.http.get(this.event_end_point)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.handleError = function (error) {
        console.error('::: EventService-ERROR: ', error);
        return Promise.reject(error.message || error);
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event-service.js.map