import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    // private _app: IonicApp
    this.nav = nav;
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
    console.log('afteviewinit');
    console.log(this);

  }
  goToSlide(slideIndex){
    this.slider.slider.slideTo(slideIndex);
  }
}
