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
var router_1 = require('@angular/router');
var db_statistics_component_1 = require('../db-statistics/db-statistics.component');
var db_hot_event_component_1 = require('../db-hot-event/db-hot-event.component');
var db_hot_task_component_1 = require('../db-hot-task/db-hot-task.component');
var event_list_1 = require('../event/event-list');
var DashBoardComponent = (function () {
    function DashBoardComponent() {
    }
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: "vogue-dashboard",
            templateUrl: "dashboard.template.html",
            directives: [event_list_1.EventListComponent, db_statistics_component_1.DashboardStatistics,
                db_hot_event_component_1.DashboardHotEvent, db_hot_task_component_1.DashboardHotTask, router_1.ROUTER_DIRECTIVES],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map