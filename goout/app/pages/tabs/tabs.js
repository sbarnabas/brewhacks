import {Page, NavController, Platform} from "ionic-angular";

import {DiscoverPage} from "../../pages/discover/discover";
import {AllEventsPage} from "../all-events/all-events";
import {EventMapPage} from "../event-map/event-map"
@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {
    constructor() {
        this.tab1 = DiscoverPage;
        this.tab2 = AllEventsPage;
        this.tab3=EventMapPage;
        this.tabBarElement = document.querySelector('ion-navbar-section');

    }

    onPageDidEnter()
    {

        this.tabBarElement.style.display = 'none';

    }

    onPageWillLeave()
    {

        this.tabBarElement.style.display = 'block';

    }
}