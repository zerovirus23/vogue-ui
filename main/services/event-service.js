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
require('./rxjs-operators');
var Observable_1 = require('rxjs/Observable');
var API_SERVER_BASE_URL = "http://localhost:8080";
var API_EVENT_URI = "/event";
var API_EVENT_TYPE_URI = "/utils/reportTypes";
var API_TASK_END_POINT = "/event/{eventId}/task";
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.eventEndPoint = API_SERVER_BASE_URL + API_EVENT_URI;
        this.eventTypeEndPoint = API_SERVER_BASE_URL + API_EVENT_TYPE_URI;
    }
    EventService.prototype.list = function (itemsByPage, requiredPage) {
        var options = new http_1.RequestOptions();
        var query = new http_1.URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;
        return this.http.get(this.eventEndPoint, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.listEventTypes = function () {
        return this.http.get(this.eventTypeEndPoint)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.find = function (id) {
        return this.http.get(this.eventEndPoint)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.create = function (event) {
        var body = JSON.stringify(event);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.eventEndPoint, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.delete = function (id) {
        console.log("::: Operation not implemented yet");
    };
    EventService.prototype.handleError = function (error) {
        console.error('::: EventService-ERROR: ', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event-service.js.map