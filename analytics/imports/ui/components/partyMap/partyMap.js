import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import './partyMap.html';

class PartyMap {
  constructor($scope) {
    'ngInject';

    this.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8,
      events: {
        click: (mapModel, eventName, originalEventArgs) => {
          this.setLocation(originalEventArgs[0].latLng.lat(), originalEventArgs[0].latLng.lng());
          $scope.$apply();
        }
      }
    };

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(),
      map: map
    });

    this.marker = {
      options: {
        draggable: true
      },
      events: {
        dragend: (marker, eventName, args) => {
          this.setLocation(marker.getPosition().lat(), marker.getPosition().lng());
          $scope.$apply();
        }
      }
    };
  }

  setLocation(latitude, longitude) {
    this.location = {
      latitude,
      longitude
    };
  }
}

const name = 'partyMap';

// create a module
export default angular.module(name, [
  angularMeteor,
  'nemLogging', // https://github.com/angular-ui/angular-google-maps/issues/1633
  'uiGmapgoogle-maps'
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  bindings: {
    location: '='
  },
  controller: PartyMap
});
