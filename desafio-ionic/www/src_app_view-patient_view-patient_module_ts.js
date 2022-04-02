"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view-patient_view-patient_module_ts"],{

/***/ 4592:
/*!*************************************************************!*\
  !*** ./src/app/view-patient/view-patient-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPatientPageRoutingModule": () => (/* binding */ ViewPatientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_patient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-patient.page */ 7203);




const routes = [
    {
        path: '',
        component: _view_patient_page__WEBPACK_IMPORTED_MODULE_0__.ViewPatientPage
    }
];
let ViewPatientPageRoutingModule = class ViewPatientPageRoutingModule {
};
ViewPatientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPatientPageRoutingModule);



/***/ }),

/***/ 6990:
/*!*****************************************************!*\
  !*** ./src/app/view-patient/view-patient.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPatientPageModule": () => (/* binding */ ViewPatientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _view_patient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-patient.page */ 7203);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_patient_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-patient-routing.module */ 4592);







let ViewPatientPageModule = class ViewPatientPageModule {
};
ViewPatientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_patient_routing_module__WEBPACK_IMPORTED_MODULE_1__.ViewPatientPageRoutingModule
        ],
        declarations: [_view_patient_page__WEBPACK_IMPORTED_MODULE_0__.ViewPatientPage]
    })
], ViewPatientPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_view-patient_view-patient_module_ts.js.map