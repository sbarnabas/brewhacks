import {Page, NavController, Platform} from "ionic-angular";
import {FbProvider} from "../../providers/fb-provider/fb-provider";
import {InterestsPage} from "../../pages/interests/interests";
import {DiscoverPage} from "../../pages/discover/discover";
import {BottomNavPage} from "../../pages/bottom-nav/bottom-nav";
import {AllEventsPage} from "../all-events/all-events";

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {

    goToInterests() {
        // push another page onto the history stack
        // causing the nav controller to animate the new page in
      //check interests
        if(false) {
            this.nav.push(InterestsPage);
        }
        else
        {
            this.nav.push(InterestsPage);
        }
    }

    static get parameters() {
        return [[Platform], [FbProvider], [NavController]];
    }

    constructor(platform, fbProvider, nav) {
        console.log(fbProvider);
        this.platform = platform;
        this.fb = fbProvider;
        this.email = '';
        this.name = '';
        this.id = '';
        this.nav = nav;
    };

    login() {
        //console.log(this.fb);
        this.fb.login().then(() => {
            this.goToInterests();
          

        });
    };
}
