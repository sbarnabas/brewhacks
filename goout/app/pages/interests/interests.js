import {Page, NavController, NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {ProfilePage} from "../../pages/profile/profile";
import {BottomNavPage} from "../../pages/bottom-nav/bottom-nav";



@Page({
  templateUrl: 'build/pages/interests/interests.html'
})
export class InterestsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  
  saveInterests() {
	  console.log("Saved your interests");
	  this.nav.push(BottomNavPage);
  };

  constructor(nav, navParams) {
    this.nav = nav;

    this.interests = [
                     {"name":"Painting", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color47/Arts_Center.png", "colorValue" : "F7941E"}, 
                     {"name":"Theatre", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color48/Theatre.png", "colorValue" : "6CB33F"}, 
                     {"name":"Dance", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color46/Dance.png", "colorValue" : "552988"}, 
                     {"name":"Museum", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color45/Museum.png", "colorValue" : "00AEEF"}, 
                     {"name":"Music", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color47/Music.png", "colorValue" : "F7941E"}, 
                     {"name":"Culinary", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color2/Restaurant.png", "colorValue" : "EE3524"}, 
                     {"name":"Hiking", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color2/cincy_perks.png", "colorValue" : "EE3524"}, 
                     {"name":"3D Art", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color46/Retail.png", "colorValue" : "552988"}, 
                     {"name":"Sports", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color2/hot.png", "colorValue" : "EE3524"}
                 ];

  }
}
