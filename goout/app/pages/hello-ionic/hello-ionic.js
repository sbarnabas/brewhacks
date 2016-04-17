import {Page, NavController, Platform} from "ionic-angular";
import {FbProvider} from "../../providers/fb-provider/fb-provider";
import {TabsPage} from "../../pages/tabs/tabs";

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {

    goToInterests() {
        this.nav.push(TabsPage);

    }

    static get parameters() {
        return [[Platform], [FbProvider], [NavController]];
    }

    constructor(platform, fbProvider, nav) {

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
