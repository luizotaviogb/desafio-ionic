"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _patient_patient_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patient/patient.module */ 2158);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _patient_patient_module__WEBPACK_IMPORTED_MODULE_2__.PatientComponentModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_patient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/patient.model */ 3822);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);








let HomePage = class HomePage {
    constructor(dataService, alertController, httpClient) {
        this.dataService = dataService;
        this.alertController = alertController;
        this.httpClient = httpClient;
        this.patients = [];
        this.search = false;
        this.loading = true;
        this.skeletons = Array(15).fill(15).map((x, i) => i);
        this.page = 1;
        this.take = 50;
        this.gender = null;
        this.nat = null;
        this.loadingPage = true;
    }
    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }
    ngOnInit() {
        this.getPatients();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.loadingPage = false;
        }, 2000);
    }
    getPatients(ionRefresher = null, ionInfiniteScroll = null) {
        if (ionRefresher !== null ||
            (ionRefresher == null && ionInfiniteScroll == null) ||
            this.searchValue) {
            this.resetList();
        }
        this.dataService.getPatients(this.gender, this.nat).subscribe(response => {
            this.patients = this.patients.concat(response['results'].map(patient => new _models_patient_model__WEBPACK_IMPORTED_MODULE_2__.Patient(patient)));
            this.page++;
            if (ionInfiniteScroll) {
                ionInfiniteScroll.target.complete();
            }
            if (ionRefresher) {
                ionRefresher.target.complete();
            }
            this.loading = false;
            this.loading = false;
        });
    }
    resetList() {
        this.patients = [];
        this.page = 1;
    }
    toggleSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Filters',
                subHeader: 'Gender',
                inputs: [
                    {
                        name: 'male',
                        type: 'radio',
                        label: 'Male',
                        value: 'male',
                        handler: () => {
                            this.gender = "male";
                        },
                    },
                    {
                        name: 'female',
                        type: 'radio',
                        label: 'Female',
                        value: 'female',
                        handler: () => {
                            this.gender = "female";
                        }
                    },
                    {
                        name: 'any',
                        type: 'radio',
                        label: 'Any',
                        value: 'Any',
                        handler: () => {
                            this.gender = "";
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.gender = "";
                            console.log(this.gender);
                        }
                    }, {
                        text: 'Filter',
                        handler: () => {
                            this.loading = true;
                            this.getPatients();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    applySearch(event) {
        var query = event.target.value.toLowerCase();
        console.log(query);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 3822:
/*!*****************************************!*\
  !*** ./src/app/models/patient.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Patient": () => (/* binding */ Patient)
/* harmony export */ });
/* harmony import */ var _serializable_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializable.model */ 9389);

class Patient extends _serializable_model__WEBPACK_IMPORTED_MODULE_0__.Serializable {
    constructor(data = {}) {
        super();
        this.gender = null;
        this.name = null;
        this.location = null;
        this.email = null;
        this.dob = null;
        this.phone = null;
        this.id = null;
        this.picture = null;
        this.nat = null;
        this.fullName = null;
        this.serialize(data);
    }
}


/***/ }),

/***/ 9389:
/*!**********************************************!*\
  !*** ./src/app/models/serializable.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Serializable": () => (/* binding */ Serializable)
/* harmony export */ });
class Serializable {
    constructor() { }
    serialize(data = {}, include_null_values = false) {
        var keys = Object.keys(data);
        keys.forEach(property => {
            if (include_null_values) {
                if (data[property] === undefined) {
                    return;
                }
            }
            else {
                if (data[property] === null || data[property] === undefined) {
                    return;
                }
            }
            if (this.propertyIsDeclared(property)) {
                if (this.relationshipExists(property)) {
                    this.setRelationship(property, data[property]);
                }
                else {
                    this.set(property, data[property]);
                }
            }
        }, this);
    }
    propertyIsDeclared(property) {
        return !!Object.getOwnPropertyDescriptor(this, property);
    }
    relationshipExists(property) {
        return (Object.keys(this.relationships).indexOf(property) > -1) && (this.relationships[property] !== null);
    }
    set(property, value) {
        this[property] = value;
    }
    setRelationship(property, value) {
        var constructor = this.relationships[property];
        if (Array.isArray(value)) {
            this[property] = value.map(item => new constructor(item));
        }
        else {
            this[property] = new constructor(value);
        }
    }
    /**
     * Define o tipo de propriedades que devem ser serializadas
     * recursivamente, segundo exemplo:
     *
     * user: User
     *
     * A propriedade "user" será usada para instanciar uma nova classe "User".
     *
     * @return Object
     */
    get relationships() {
        return {};
    }
    /**
     * Retorna dados que serão enviados para o servidor
     * a fim de persistência no banco de dados
     *
     * @return Object
     */
    get http_data() {
        return {};
    }
}


/***/ }),

/***/ 2405:
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientComponent": () => (/* binding */ PatientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _patient_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient.component.html?ngResource */ 8500);
/* harmony import */ var _patient_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient.component.scss?ngResource */ 7239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_patient_view_patient_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-patient/view-patient.page */ 7203);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ 9527);







let PatientComponent = class PatientComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.name = null;
        this.formattedDate = null;
    }
    ngOnInit() {
        this.formattedDate = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.fromISO(this.patient.dob.date).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.DATE_SHORT);
        this.patient.fullName = this.patient.name.first + " " + this.patient.name.last;
    }
    isIos() {
        const win = window;
        return win && win.Ionic && win.Ionic.mode === 'ios';
    }
    showPatientProfile(patient) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_patient_view_patient_page__WEBPACK_IMPORTED_MODULE_2__.ViewPatientPage,
                componentProps: {
                    patient: patient
                },
                breakpoints: [0, 0.2, 0.5, 1],
                initialBreakpoint: 0.8,
            });
            yield modal.present();
        });
    }
};
PatientComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
PatientComponent.propDecorators = {
    patient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
PatientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-patient',
        template: _patient_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_patient_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PatientComponent);



/***/ }),

/***/ 2158:
/*!*******************************************!*\
  !*** ./src/app/patient/patient.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientComponentModule": () => (/* binding */ PatientComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient.component */ 2405);







let PatientComponentModule = class PatientComponentModule {
};
PatientComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_patient_component__WEBPACK_IMPORTED_MODULE_0__.PatientComponent],
        exports: [_patient_component__WEBPACK_IMPORTED_MODULE_0__.PatientComponent]
    })
], PatientComponentModule);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);



let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPatients(gender = null, nat = null) {
        return this.httpClient.get('https://randomuser.me/api?results=50&' + "gender=" + gender + "&nat=" + nat)
            .pipe();
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7239:
/*!***********************************************************!*\
  !*** ./src/app/patient/patient.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n  margin: 0;\n}\n\nion-item p {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 95%;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  color: #c9c9ca;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 8px;\n  font-weight: normal;\n}\n\nion-item ion-note.md {\n  margin-right: 14px;\n}\n\n.dot {\n  display: block;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  align-self: start;\n  margin: 16px 10px 16px 16px;\n}\n\n.dot-unread {\n  background: var(--ion-color-primary);\n}\n\nion-footer ion-title {\n  font-size: 11px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Nb2JpbGUlMjBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9VVEZQUi0yMDIyL0RFViUyME1PQklMRS9kZXNhZmlvLWlvbmljL2Rlc2FmaW8taW9uaWMvc3JjL2FwcC9wYXRpZW50L3BhdGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoicGF0aWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taXRlbSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0gcCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogOTUlO1xufVxuXG5pb24taXRlbSAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogI2M5YzljYTtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pb24taXRlbSBpb24tbm90ZS5tZCB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cblxuLmRvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW46IDE2cHggMTBweCAxNnB4IDE2cHg7XG59XG5cbi5kb3QtdW5yZWFkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tZm9vdGVyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iLCJpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuaW9uLWl0ZW0gaDIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1pdGVtIHAge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDk1JTtcbn1cblxuaW9uLWl0ZW0gLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICNjOWM5Y2E7XG59XG5cbmlvbi1pdGVtIGlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUubWQge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG59XG5cbi5kb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgbWFyZ2luOiAxNnB4IDEwcHggMTZweCAxNnB4O1xufVxuXG4uZG90LXVucmVhZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWZvb3RlciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!DOCTYPE html>\n<html>\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Patients\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-img *ngIf=\"loadingPage\" [src]=\"'./assets/logo.png'\"></ion-img>\n\n<ion-content *ngIf=\"!loadingPage\" [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">\n        Patients\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-searchbar [(ngModel)]=\"searchValue\"> </ion-searchbar>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" size=\"large\" (click)=\"toggleSearch()\">\n        <ion-icon name=\"filter\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ng-container *ngIf=\"loading\">\n      <ion-item *ngFor=\"let skeleton of skeletons\">\n        <ion-skeleton-text animated style=\"width: 100%; height: 50%;\"></ion-skeleton-text>\n      </ion-item>\n    </ng-container>\n    <app-patient *ngFor=\"let patient of patients | filter:searchValue\" [patient]=\"patient\"></app-patient>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"30px\" (ionInfinite)=\"getPatients(null , $event )\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n</html>";

/***/ }),

/***/ 8500:
/*!***********************************************************!*\
  !*** ./src/app/patient/patient.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-item *ngIf=\"patient\" (click)=\"showPatientProfile(patient)\" [detail]=\"false\">\n  <div slot=\"start\"></div>\n  <ion-item style=\"margin:10px\">\n    <ion-label class=\"ion-text-wrap\">\n      <ion-avatar>\n        <ion-img [src]=\"patient.picture.medium\"> </ion-img>\n      </ion-avatar>\n    </ion-label>\n  </ion-item>\n  <ion-label class=\"ion-text-wrap\">\n    <h2>\n      {{patient.fullName}}\n      <span class=\"date\">\n        <ion-note>{{this.formattedDate}}</ion-note>\n        <ion-icon name=\"chevron-forward\" size=\"small\" *ngIf=\"isIos()\"></ion-icon>\n      </span>\n    </h2>\n    <h3>{{ patient.gender }}</h3>\n  </ion-label>\n</ion-item>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map