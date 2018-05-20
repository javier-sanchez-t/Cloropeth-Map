webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-clorophet-map-component></app-clorophet-map-component>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clorophet_map_component_clorophet_map_component_component__ = __webpack_require__("./src/app/clorophet-map-component/clorophet-map-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__clorophet_map_component_clorophet_map_component_component__["a" /* ClorophetMapComponentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clorophet-map-component/clorophet-map-component.component.css":
/***/ (function(module, exports) {

module.exports = "#mapid { position: absolute; top: 0; right: 0; bottom: 0; left: 0;   }"

/***/ }),

/***/ "./src/app/clorophet-map-component/clorophet-map-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  clorophet-map-component works!\r\n</p>\r\n<div id=\"mapid\"></div>\r\n"

/***/ }),

/***/ "./src/app/clorophet-map-component/clorophet-map-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClorophetMapComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClorophetMapComponentComponent = /** @class */ (function () {
    function ClorophetMapComponentComponent(http) {
        this.http = http;
        this.map = null;
        this.infoFeature = L.control();
        this.GeoJSONZones = [];
        // CONFIG
        this.baseLocationGeoJSONFile = 'assets/cartography/';
        this.zoneType = 'mx_states';
        this.zoneid = '0';
        this.lon = 22.0768856;
        this.lat = -94.9989021;
        this.zoom = 5;
        this.geojson = null;
        // COLORS
        this.color_default = '#cc9900';
        this.color1 = '#00aaff'; // LIGHT BLUE
        this.color2 = '#009933'; // DARK GREEN
        this.color3 = '#8cff66'; // LIGHT GREEN
        this.color4 = '#ffff33'; // YELLOW
        this.color5 = '#ff9933'; // ORANGE
        this.color6 = '#ff471a'; // RED
        this.color7 = '#800000'; // MARRON
    }
    ClorophetMapComponentComponent.prototype.ngOnInit = function () {
        this.createBaseMap(this.lon, this.lat, this.zoom);
        this.getZonesFromGeoJSONFile(this.zoneType);
        this.createLegendOnMap();
        this.createCustomInfoOnMap();
    };
    ClorophetMapComponentComponent.prototype.createBaseMap = function (lon, lat, zoom) {
        this.map = L.map('mapid', {
            minZoom: zoom,
            maxZoom: zoom + 2
        }).setView([lon, lat], zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    };
    ClorophetMapComponentComponent.prototype.getZonesFromGeoJSONFile = function (zoneType) {
        var _this = this;
        this.http.get(this.baseLocationGeoJSONFile + zoneType + '.geojson').subscribe(function (features) {
            console.log(features);
            //this.createBaseZonesOnMap(features);
            _this.createCustomZonesOnMap(features);
        });
    };
    ClorophetMapComponentComponent.prototype.createBaseZonesOnMap = function (zones) {
        var color = this.color_default;
        var styleZone = function (feature) {
            return {
                fillColor: color,
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        };
        var geojson = L.geoJson(zones, {
            style: styleZone
        }).addTo(this.map);
    };
    ClorophetMapComponentComponent.prototype.createLegendOnMap = function () {
        var colorDefault = this.color_default;
        var color1 = this.color1;
        var color2 = this.color2;
        var color3 = this.color3;
        var color4 = this.color4;
        var color5 = this.color5;
        var color6 = this.color6;
        var color7 = this.color7;
        //let color5 = this.color5;
        var legend = L.control({ position: 'bottomright' });
        legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend');
            div.innerHTML += '<center><b>Legend<b></center>';
            div.innerHTML += '<i style=background:' + color1 + '> </i> 0 <br>';
            div.innerHTML += '<i style=background:' + color2 + '></i> >0 - 2,000,000 <br>';
            div.innerHTML += '<i style=background:' + color3 + '></i> >2,000,000 - 4,000,000 <br>';
            div.innerHTML += '<i style=background:' + color4 + '></i> >4,000,000 - 6,000,000 <br>';
            div.innerHTML += '<i style=background:' + color5 + '></i> >6,000,000 - 8,000,000 <br>';
            div.innerHTML += '<i style=background:' + color6 + '></i> >8,000,000 - 10,000,000 <br>';
            div.innerHTML += '<i style=background:' + color7 + '></i> >5,000,000 - 6,000,000 <br>';
            return div;
        };
        legend.addTo(this.map);
    };
    ClorophetMapComponentComponent.prototype.createCustomInfoOnMap = function () {
        this.infoFeature.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };
        this.infoFeature.update = function (props) {
            this._div.innerHTML = '<h4>Mexico pouplation density</h4>' + (props ?
                '<b>State code:</b> ' + props.state_code + '<br/>' +
                    '<b>State name:</b> ' + props.state_name + '<br/>' +
                    '<b>Population:</b> ' + props.population + '<br/>'
                : 'Select a state');
        };
        this.infoFeature.addTo(this.map);
    };
    ClorophetMapComponentComponent.prototype.createCustomZonesOnMap = function (GeoJSONZones) {
        var map = this.map;
        var infoFeature = this.infoFeature;
        var currentLayer = undefined;
        var highlightFeature = function (e) {
            var layer = e.target;
            // Si la capa es indefinida, esta se resetea (para borrar estilo "marcadp" sobre el elemnto clickeado)
            if (currentLayer !== undefined) {
                geojson.resetStyle(currentLayer);
            }
            currentLayer = e.target;
            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
            // Se actualiza la información del panel de detalles
            infoFeature.update(layer.feature.properties);
            /*
            var showModalWithDeyails = function () {
              //document.getElementById('pdfB').click();
              //console.log(layer.feature.properties.mun_code);
              idFeature = layer.feature.properties.mun_code;
              console.log(idFeature);
            }
            document.getElementById("moreDetails").addEventListener("click", showModalWithDeyails);
            */
        };
        var onEachFeature = function (feature, layer) {
            layer.on({
                click: highlightFeature
            });
        };
        var color_default = this.color_default;
        var color1 = this.color1;
        var color2 = this.color2;
        var color3 = this.color3;
        var color4 = this.color4;
        var color5 = this.color5;
        var color6 = this.color6;
        var color7 = this.color7;
        var styleZone = function (feature) {
            var population = feature.properties.population;
            var color = '';
            /*if (feature.properties.population !== undefined) {
              population = parseFloat(feature.properties.porcentajeAvance.slice(0, -1));
            }*/
            if (population > 0 && population <= 1000000) {
                color = color1;
            }
            else if (population > 1000000 && population <= 2000000) {
                color = color2;
            }
            else if (population > 2000000 && population <= 4000000) {
                color = color3;
            }
            else if (population > 4000000 && population <= 6000000) {
                color = color4;
            }
            else if (population > 6000000 && population <= 8000000) {
                color = color5;
            }
            else if (population > 8000000 && population <= 10000000) {
                color = color6;
            }
            else if (population > 10000000) {
                color = color7;
            }
            return {
                fillColor: color,
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        };
        // Creates GeoJSON layer on map
        var geojson = L.geoJson(GeoJSONZones, {
            style: styleZone,
            onEachFeature: onEachFeature
        }).addTo(this.map);
        // Adds print feature on map
        /*L.control.browserPrint({
          title: 'Imprimir mapa',
          documentTitle: 'Avance de promovidos',
          printModesNames: { Portrait: 'Vertical', Landscape: 'Horizontal', Auto: 'Automática', Custom: 'Personalizada' }
        }).addTo(this.map);*/
    };
    ClorophetMapComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-clorophet-map-component',
            template: __webpack_require__("./src/app/clorophet-map-component/clorophet-map-component.component.html"),
            styles: [__webpack_require__("./src/app/clorophet-map-component/clorophet-map-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClorophetMapComponentComponent);
    return ClorophetMapComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map