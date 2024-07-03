import { Component, OnInit } from '@angular/core';

// declare let turf: any
declare let L: any

@Component({
  selector: 'app-bearing-plot',
  templateUrl: './bearing-plot.component.html',
  styleUrls: ['./bearing-plot.component.css']
})
export class BearingPlotComponent implements OnInit {

  map: any;

  /**
   * Maps the clock direction to degrees
   */
  clockMap: any = {
    "12:00": 0,
    "12:30": 15,
    "1:00": 30,
    "1:30": 45,
    "2:00": 60,
    "2:30": 75,
    "3:00": 90,
    "3:30": 105,
    "4:00": 120,
    "4:30": 135,
    "5:00": 150,
    "5:30": 165,
    "6:00": 180,
    "6:30": 195,
    "7:00": 210,
    "7:30": 225,
    "8:00": 240,
    "8:30": 255,
    "9:00": 270,
    "9:30": 285,
    "10:00": 300,
    "10:30": 315,
    "11:00": 330,
    "11:30": 345
  };

  startPointLatLng = [-37.857108, 144.903473]

  targets = [
    {
      "bearing": "12:00",
      "distance": 20,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ship_diagram-numbers.svg/1920px-Ship_diagram-numbers.svg.png"
    },
    {
      "bearing": "7:30",
      "distance": 10,
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Amerigo_vespucci_1976_nyc_aufgetakelt.jpg"
    },
    {
      "bearing": "9:00",
      "distance": 30,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Motorboat_at_Kankaria_lake.JPG/1920px-Motorboat_at_Kankaria_lake.JPG"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    // map init
    this.map = L.map('map').setView(this.startPointLatLng, 18);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 25,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // add starting marker
    L.marker(this.startPointLatLng)
      .bindPopup('<b>You are here 😁</b>')
      .addTo(this.map);

    const targetsMapped = this.targets.map(t => ({
      bearing: t.bearing,
      distance: t.distance,
      img: t.img,
      latLng: this.calculateDestination(t.bearing, t.distance),
    }))
    
    // plot targets
    for (let t of targetsMapped) {
      const marker = L.marker(t.latLng)
        .on('click', this.renderLine.bind(null, this.map, this.startPointLatLng))
        .bindPopup(this.renderPopup(t))
        .addTo(this.map);

        marker.getPopup().on('remove', this.clearLines.bind(null, this.map));
    }
  }

  toRadians(degrees: any) {
    return degrees * Math.PI / 180;
  }

  toDegrees(radians: any) {
    return radians * 180 / Math.PI;
  }

  /**
   * Converts clockface notation to latlng coordinates. Used chatgpt to get the mathematical formulas right
   * @param bearing 
   * @param distance 
   * @returns array of latlng coordinates
   */
  calculateDestination(bearing: any, distance: any) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = this.toRadians(this.startPointLatLng[0]); // Convert latitude to radians
    const λ1 = this.toRadians(this.startPointLatLng[1]); // Convert longitude to radians
    const θ = this.toRadians(this.clockMap[bearing]); // Convert bearing to radians
    const δ = distance / R; // Angular distance in radians

    const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
    const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1), Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

    return [this.toDegrees(φ2), this.toDegrees(λ2)];
  }

  renderPopup(target: any) {
    return `
      <div><b>Bearing: </b>${target.bearing}</div>
      <div><b>Distance: </b>${target.distance}</div>
      <img style="height:120px;width:120px" src="${target.img}" >
    `
  }

  renderLine(map: any, startPoint: any, e: any) {
    L.polyline([startPoint, [e.latlng.lat, e.latlng.lng]]).addTo(map)
  }

  clearLines(map: any, e: any) {
    for(const i in map._layers) {
      if(map._layers[i]._path != undefined) {
        try {
          map.removeLayer(map._layers[i]);
        }
        catch(e) {
          console.log("problem with " + e + map._layers[i]);
        }
      }
    }
  }
}
