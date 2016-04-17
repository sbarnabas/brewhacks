import {Page, NavController, NavParams, IonicApp} from "ionic-angular";

@Page({
    templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
    static get parameters() {
        return [[NavController], [NavParams], [IonicApp]];
    }

    constructor(nav, navParams, app) {
        // private _app: IonicApp
        this.nav = nav;
        this._app = app;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedEvent = navParams.get('event');

        // var mySwiper = new Swiper('.swiper-container', {
        //   speed: 400,
        //   spaceBetween: 100,
        //   allowSwipeToNext : false
        // });

        // mySwiper.allowSwipeToNext = false;

    }

    ngAfterViewInit() {
        var swiper = this._app.getComponent('my-slides');
       
    }

    goToSlide(slideIndex) {
        this.slider.slider.slideTo(slideIndex);
    }
}
