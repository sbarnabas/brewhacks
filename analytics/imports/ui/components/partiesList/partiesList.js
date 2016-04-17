import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import { Counts } from 'meteor/tmeasday:publish-counts';

import './partiesList.html';
import { Parties } from '../../../api/parties';
import { name as PartiesSort } from '../partiesSort/partiesSort';
import { name as PartiesMap } from '../partiesMap/partiesMap';
import { name as PartyAddButton } from '../partyAddButton/partyAddButton';
import { name as PartyRemove } from '../partyRemove/partyRemove';
import { name as PartyCreator } from '../partyCreator/partyCreator';
import { name as PartyRsvp } from '../partyRsvp/partyRsvp';
import { name as PartyRsvpsList } from '../partyRsvpsList/partyRsvpsList';
import { name as PartyImage } from '../partyImage/partyImage';

class PartiesList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.perPage = 3;
    this.page = 1;
    this.sort = {
      name: 1
    };
    this.searchText = '';

    this.subscribe('parties', () => [{
        limit: parseInt(this.perPage),
        skip: parseInt((this.getReactively('page') - 1) * this.perPage),
        sort: this.getReactively('sort')
      }, this.getReactively('searchText')
    ]);

    this.subscribe('users');
    this.subscribe('images');

    this.startDate = new Date(new Date().getTime() - 2592000000);
    this.endDate = new Date();
    this.gender = "1";

    this.helpers({
      parties() {
        return Parties.find({}, {
          sort : this.getReactively('sort')
        });
      },
      partiesCount() {
        return Counts.get('numberOfParties');
      },
      isLoggedIn() {
        return !!Meteor.userId();
      },
      currentUserId() {
        return Meteor.userId();
      }
    });

    this.items = ['Single', 'Date', 'Friends', 'Family', 'Meal', 'Sports', 'Work'];
    this.selected = [];
  }

  toggle(item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
      list.splice(idx, 1);
    }
    else {
      list.push(item);
    }
  };

  exists(item, list) {
    return list.indexOf(item) > -1;
  };

  isIndeterminate() {
    return (this.selected.length !== 0 &&
        this.selected.length !== this.items.length);
  };

  isChecked() {
    return this.selected.length === this.items.length;
  };

  toggleAll() {
    if (this.selected.length === this.items.length) {
      this.selected = [];
    } else if (this.selected.length === 0 || this.selected.length > 0) {
      this.selected = this.items.slice(0);
    }
  };

  isOwner(party) {
    return this.isLoggedIn && party.owner === this.currentUserId;
  }

  pageChanged(newPage) {
    this.page = newPage;
  }

  sortChanged(sort) {
    this.sort = sort;
  }
}

const name = 'partiesList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  utilsPagination,
  PartiesSort,
  PartiesMap,
  PartyAddButton,
  PartyRemove,
  PartyCreator,
  PartyRsvp,
  PartyRsvpsList,
  PartyImage
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: PartiesList
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('parties', {
      url: '/parties',
      template: '<parties-list></parties-list>'
    });
}
