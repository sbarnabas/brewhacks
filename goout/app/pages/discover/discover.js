import {Page,Storage,LocalStorage, NavController, NavParams} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";

@Page({
    templateUrl: 'build/pages/discover/discover.html'
})


export class DiscoverPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items = [];
        this.getData();
        this.local=new Storage(LocalStorage);
        this.favs = [];
        this.local.set('favs',this.favs);
        if (this.data.events && this.data.events.event) {
            try {
                for (var idx in this.data.events.event) {
                    var d = this.data.events.event[idx]
                    this.items.push({
                        lat: '',
                        lng: '',
                        name:'Bar',
                        offer:'text #4',


                    });
                 
                }

            } catch (ex) {
                console.log(ex);
            }
        }

        this.items.push({
            lat: '',
            lng: '',
            name:'Bar',
            offer:'text #4',


        });
        this.nav.tabBadge=this.items.length;


    }
    itemRemove(event, item,discard) {
        var idx = this.items.indexOf(item);
        if (idx > -1) {
            this.items.splice(idx, 1);
            this.nav.tabBadge=this.items.length;
        }
        if (this.items.length == 0) {
            this.nav.tabBadge=0;
            this.nav.tabBadgeStyle="";
        }
        if(!discard){
            console.log("Saved",item.id);
            this.favs.push(item.id);
            this.local.set('favs',JSON.stringify(this.favs));

        }
    }

    itemTapped(event, item) {
        this.nav.push(ItemDetailsPage, {
            event: item
        });

    }

    getData() {
        this.data = {

        };
    }
}
