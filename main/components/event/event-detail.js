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
var event_1 = require('../../model/event');
var event_service_1 = require('../../services/event-service');
var area_service_1 = require('../../services/area-service');
var EventDetailComponent = (function () {
    function EventDetailComponent(eventService, areaService) {
        this.eventService = eventService;
        this.areaService = areaService;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        this.loadEventTypes();
        this.loadAreas();
    };
    EventDetailComponent.prototype.save = function () {
        var _this = this;
        this.eventService.create(this.event).subscribe(function (event) { return _this.event = event; });
    };
    EventDetailComponent.prototype.cancel = function () {
        this.event = null;
    };
    EventDetailComponent.prototype.loadEventTypes = function () {
        var _this = this;
        this.eventService.listEventTypes().subscribe(function (eventTypes) { return _this.eventTypes = eventTypes; });
    };
    EventDetailComponent.prototype.loadAreas = function () {
        var _this = this;
        this.areaService.listAll().subscribe(function (areas) { return _this.areas = areas; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', event_1.Event)
    ], EventDetailComponent.prototype, "event", void 0);
    EventDetailComponent = __decorate([
        core_1.Component({
            selector: "event-detail",
            templateUrl: "event-detail.html",
            providers: [event_service_1.EventService, area_service_1.AreaService],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, area_service_1.AreaService])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-detail.js.map