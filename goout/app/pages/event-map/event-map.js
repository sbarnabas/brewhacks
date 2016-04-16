import {Page, NavController, NavParams} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";

@Page({
    templateUrl: 'build/pages/event-map/event-map.html'
})
export class EventMapPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
    
    }
}
