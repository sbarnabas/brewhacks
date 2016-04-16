import {Modal, Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/about/about.html'
})

export class AboutPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    console.log("loading about");
    this.nav = nav;

    this.contributors = [
                         {"name":"Teresa Martinez", "avatarImage":"teresa.jpg", "quote":"I honestly didn't know algorithmically was a word", "role" : "The Pitcher"}, 
                         {"name":"Sandy Barnabas", "avatarImage":"sandy.jpg", "quote":"I don't know what art is. But I think I know it when I see it.", "role" : "Lead Drinker/Developer"},
                         {"name":"Rich Hill", "avatarImage":"rich.jpg", "quote":"Coffee is for closers!", "role" : "Beer Supplier, Architect"}, 
                         {"name":"Kaleb McKelvey", "avatarImage":"kaleb.jpg", "quote":"Music is life.", "role" : "Developer"}, 
                         {"name":"Stephen Pestian", "avatarImage":"stephen.jpg", "quote":"FUTURE.", "role" : "UX / DJ / Wine Merchant"},
                         {"name":"Melinda Hershey", "avatarImage":"melinda.jpg", "quote":"Teamwork makes dreamwork", "role" : "Lord of the Slides"}, 
                         {"name":"Mary Kate Genis", "avatarImage":"mary_kate.jpg", "quote":"No. Monet!", "role" : "Mock Master"}, 
                         {"name":"Tiffany White", "avatarImage":"tiffany.jpg", "quote":"Team no breaks!", "role" : "Jack of All Trades"}
                     ];
  }
}
