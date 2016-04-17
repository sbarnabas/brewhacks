import {Page, NavController, NavParams, IonicApp} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";
import {NgZone} from "angular2/core";

@Page({
    templateUrl: 'build/pages/discover/discover.html'
})

export class DiscoverPage {
    static get parameters() {
        return [[NavController], [NavParams], [Http], [IonicApp]];
    }

    constructor(nav, navParams, http, app) {
        this.nav = nav;
        this.http = http;
        this._app = app;
        this.zone = new NgZone({enableLongStackTrace: false});
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
                            if (d.photos) {
                                this.zone.run(() => {
                                    this.items.push({
                                        id: d.place_id,
                                        icon: d.icon,
                                        lat: d.geometry.location.lat(),
                                        lng: d.geometry.location.lng(),
                                        name: d.name,
                                        offer: '$3 Rolling Rock',
                                        img: d.photos[0].getUrl({maxWidth: 400}),
                                        rating: d.rating,
                                        address: d.vicinity,
                                        timeleft: Math.floor(Math.random()*60)+1,
                                        swiper:null
                                    })
                                })
                            }

                        }

                        setTimeout(()=>{
                            for (var idx in this.items) {
                                this.items[idx].swiper = this._app.getComponent('my-slides-'+this.items[idx].id);
                                this.items[idx].swiper.slider.lockSwipes();
                            }
                        }, 100);

                    } catch (ex) {
                        console.log(ex);
                    }
                }

            }
        });

    }

    // ngAfterViewInit() {
    //     var swiper = this._app.getComponent('my-slides-'+this.items[0].id);
    //     console.log(swiper);
    //     swiper.lockSwipes();
    // }

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
        console.log("item got tapped");
        console.log(item);
        if(item.swiper.slider.activeIndex == 0) {
            item.swiper.slider.unlockSwipes();
            item.swiper.slider.slideNext();
            item.swiper.slider.lockSwipes();
        } else if(item.swiper.slider.activeIndex == 1) {
            item.swiper.slider.unlockSwipes();
            item.swiper.slider.slideNext();
        } else if(item.swiper.slider.activeIndex == 2) {
            //go to google maps
            console.log("go to maps");

        }

        // this.nav.push(ItemDetailsPage, {
        //     event: item
        // });

    }

    cancelQuestionScreen(event, item) {
        console.log("cancel question screen");
        console.log(item);
        item.swiper.slider.unlockSwipes();
        item.swiper.slider.slidePrev();
        item.swiper.slider.lockSwipes();
    }

    getData(callback) {
        let gkey = "AIzaSyBkPGJjjzrnXatExlJUxyEbg0pPqQWLwrI";
        let placeSearchUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
        let options = {timeout: 10000, enableHighAccuracy: true};

        navigator.geolocation.getCurrentPosition((position) => {
                let me = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let request = {
                    location: me, types: ['bar'], rankBy: google.maps.places.RankBy.DISTANCE
                };
                this.service.nearbySearch(request, callback)

            },

            (error) => {
                console.log(error);
            }, options);

    }
}
