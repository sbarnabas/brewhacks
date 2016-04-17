import {Page, NavController, NavParams} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Page({
    templateUrl: 'build/pages/discover/discover.html'
})

export class DiscoverPage {
    static get parameters() {
        return [[NavController], [NavParams], [Http]];
    }

    constructor(nav, navParams, http) {
        this.nav = nav;
        this.http = http;

        // If we navigated to this page, we will have an item available as a nav param

        this.service = new google.maps.places.PlacesService($('#footer').get(0));
        this.items = [];
        this.getData((results, status) => {

            if (status == google.maps.places.PlacesServiceStatus.OK) {
                this.data = results;
                console.log(this.data);
                if (this.data) {
                    try {
                        for (var idx in this.data) {
                            var d = this.data[idx]
                            this.items.push({
                                id: d.place_id,
                                lat: '',
                                lng: '',
                                name: d.name,
                                offer: 'text #4',
                                img: '',
                                rating: '',
                                raw: d,
                            })

                        }

                    } catch (ex) {
                        console.log(ex);
                    }
                }

                this.nav.tabBadge = this.items.length;
            }
        });

    }

    itemRemove(event, item, discard) {
        var idx = this.items.indexOf(item);
        if (idx > -1) {
            this.items.splice(idx, 1);
            this.nav.tabBadge = this.items.length;
        }
        if (this.items.length == 0) {
            this.nav.tabBadge = 0;
            this.nav.tabBadgeStyle = "";
        }
        if (!discard) {
            console.log("Saved", item.id);
            this.favs.push(item.id);
            this.local.set('favs', JSON.stringify(this.favs));

        }
    }

    itemTapped(event, item) {
        this.nav.push(ItemDetailsPage, {
            event: item
        });

    }

    getData(callback) {
        let gkey = "AIzaSyBkPGJjjzrnXatExlJUxyEbg0pPqQWLwrI";
        let placeSearchUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
        let options = {timeout: 10000, enableHighAccuracy: true};

        navigator.geolocation.getCurrentPosition((position) => {
                let me = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let request = {
                    location: me, radius: '500', types: ['bar']
                };
                this.service.nearbySearch(request, callback)

            },

            (error) => {
                console.log(error);
            }, options);

    }
}
