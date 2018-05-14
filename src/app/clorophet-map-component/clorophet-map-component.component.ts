import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var L: any;

@Component({
  selector: 'app-clorophet-map-component',
  templateUrl: './clorophet-map-component.component.html',
  styleUrls: ['./clorophet-map-component.component.css']
})
export class ClorophetMapComponentComponent implements OnInit {
  map: any = null;
  infoFeature = L.control();
  GeoJSONZones: any = [];

  // CONFIG
  baseLocationGeoJSONFile = 'assets/cartography/';
  zoneType = 'mx_states';
  zoneid = '0';
  lon = 22.0768856;
  lat = -94.9989021;
  zoom = 5;
  geojson = null;

  // COLORS
  color_default = '#cc9900';
  color1 = '#00aaff'; // LIGHT BLUE
  color2 = '#009933'; // DARK GREEN
  color3 = '#8cff66'; // LIGHT GREEN
  color4 = '#ffff33'; // YELLOW
  color5 = '#ff9933'; // ORANGE
  color6 = '#ff471a'; // RED
  color7 = '#800000'; // MARRON


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.createBaseMap(this.lon, this.lat, this.zoom);
    this.getZonesFromGeoJSONFile(this.zoneType);
    this.createLegendOnMap();
    this.createCustomInfoOnMap();
  }

  createBaseMap(lon: number, lat: number, zoom: number) {
    this.map = L.map('mapid', {
      minZoom: zoom,
      maxZoom: zoom + 2
    }).setView([lon, lat], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  getZonesFromGeoJSONFile(zoneType: string) {
    this.http.get(this.baseLocationGeoJSONFile + zoneType + '.geojson').subscribe(features => {
      console.log(features);
      //this.createBaseZonesOnMap(features);
      this.createCustomZonesOnMap(features);
    });
  }

  createBaseZonesOnMap(zones: any) {
    const color = this.color_default;
    const styleZone = function (feature) {
      return {
        fillColor: color,
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    };

    let geojson = L.geoJson(zones, {
      style: styleZone
    }).addTo(this.map);
  }

  createLegendOnMap() {
    let colorDefault = this.color_default;
    let color1 = this.color1;
    let color2 = this.color2;
    let color3 = this.color3;
    let color4 = this.color4;
    let color5 = this.color5;
    let color6 = this.color6;
    let color7 = this.color7;

    //let color5 = this.color5;
    let legend = L.control({ position: 'bottomright' });
    legend.onAdd = function (map) {
      const div = L.DomUtil.create('div', 'info legend');
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
  }

  createCustomInfoOnMap() {
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
  }

  createCustomZonesOnMap(GeoJSONZones: any) {
    const map = this.map;
    let infoFeature = this.infoFeature;
    let currentLayer = undefined;

    const highlightFeature = function (e) {
      const layer = e.target;

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

    const onEachFeature = function (feature, layer) {
      layer.on({
        click: highlightFeature
      });
    };

    const color_default = this.color_default;
    const color1 = this.color1;
    const color2 = this.color2;
    const color3 = this.color3;
    const color4 = this.color4;
    const color5 = this.color5;
    const color6 = this.color6;
    const color7 = this.color7;

    const styleZone = function (feature) {
      let population = feature.properties.population;
      let color = '';
      /*if (feature.properties.population !== undefined) {
        population = parseFloat(feature.properties.porcentajeAvance.slice(0, -1));
      }*/

      if (population > 0 && population <= 1000000) {
        color = color1;
      } else if (population > 1000000 && population <= 2000000) {
        color = color2;
      } else if (population > 2000000 && population <= 4000000) {
        color = color3;
      } else if (population > 4000000 && population <= 6000000) {
        color = color4;
      } else if (population > 6000000 && population <= 8000000) {
        color = color5;
      } else if (population > 8000000 && population <= 10000000) {
        color = color6;
      } else if (population > 10000000) {
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
    const geojson = L.geoJson(GeoJSONZones, {
      style: styleZone,
      onEachFeature: onEachFeature
    }).addTo(this.map);

    // Adds print feature on map
    /*L.control.browserPrint({
      title: 'Imprimir mapa',
      documentTitle: 'Avance de promovidos',
      printModesNames: { Portrait: 'Vertical', Landscape: 'Horizontal', Auto: 'Automática', Custom: 'Personalizada' }
    }).addTo(this.map);*/

  }
}
