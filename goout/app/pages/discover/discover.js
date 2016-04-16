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
                        id:             d.eventID,
                        eventName:      d.eventName ? d.eventName : "(Untitled)",
                        eventImage:     d.eventImage ? d.eventImage : "",
                        eventVenueName: d.venueName ? d.venueName : "",
                        eventDate:      (Array.isArray(d.eventDatesTimes))? d.eventDatesTimes[0].date :d.eventDatesTimes.datetime.date ? d.eventDatesTimes.datetime.date : "",
                        eventTime:      (Array.isArray(d.eventDatesTimes))? d.eventDatesTimes[0].time :d.eventDatesTimes.datetime.time ? d.eventDatesTimes.datetime.time : "",
                        eventDescript:  d.eventDescription ? d.eventDescription : "",
                        eventLink:      d.link ? d.link : "",
                        eventType:      d.eventType ? d.eventType : "",
                        eventPhone:     d.eventPhone1 ? d.eventPhone1 : "",
                        eventEmail:     d.eventEmail ? d.eventEmail : "",
                        eventTicketUrl: d.eventTicketUrl ? d.eventTicketUrl : ""
                    });
                 
                }

            } catch (ex) {
                console.log(ex);
            }
        }

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
            "events": {
                "event": [	{
                    "eventID": "6574",
                    "spotlight": "false",
                    "featured": "false",
                    "orgImage": "",
                    "eventImage": "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2016\/03\/primary-Milford-Theatre-Guilde-presents-The-Importance-of-Being-Earnest-1458072163.jpeg",
                    "eventName": "Milford Theatre Guilde presents The Importance of Being Earnest",
                    "eventDateBegin": "04-01-2016",
                    "eventDateEnd": "04-09-2016",
                    "eventDays": "Friday,Saturday,Sunday",
                    "ongoing": "N",
                    "eventDatesTimes": {
                        "datetime": {
                            "date": "Sat-Apr-9-2016",
                            "time": "8:00 pm",
                            "timestamp": "1460232000",
                            "date_filter": "20160409",
                            "end_time": "11:59 pm",
                            "duration": "7200"
                        }
                    },
                    "orgID": "",
                    "orgName": "Milford Theatre Guilde",
                    "eventUrl": "http:\/\/www.cincyartsguide.com\/event\/milford-theatre-guilde-presents-the-importance-of-being-earnest\/",
                    "venueID": "",
                    "venueName": "Milford Theatre Guilde",
                    "venueAddress1": "",
                    "venueAddress2": "",
                    "venueCity": "0",
                    "venueState": "0",
                    "venueZip": "0",
                    "venueLatitude": "",
                    "venueLongitude": "",
                    "eventTicketInfo": "For tickets, visit milfordtheatreguilde.org or call 513-575-9351rn$14 for Adults, $12 for Children\/Seniors\/Military",
                    "eventPhone1": "513-476-2230",
                    "eventEmail": "",
                    "eventTicketUrl": "http:\/\/www.milfordtheatreguilde.org\/",
                    "discountUrl": "",
                    "eventStartTime": "",
                    "eventType": "Theatre",
                    "secondaryType": "Comedy, Drama, Community Arts",
                    "eventSummary": "In 1890s London, two friends use the same pseudonym (\u201cErnest\u201d) for their on-the-sly activities. Hilarity and romance ensue!",
                    "eventDescription": "In 1890s London, two friends use the same pseudonym (\u201cErnest\u201d) for their on-the-sly activities. Hilarity ensues.\n\nDirected by Ian Tinney\nProduced by R&amp;R Productions\n\nStephen Beck as Lane\/Merriman\n\nStormi Bledsoe as Gwendolen Fairfax\n\nAdrianna Boris as Cecily Cardew\n\nNick Castle as Algernon \u201cAlgy\u201d Montcrieff\n\nBecky Cole as Miss Prism\n\nKelly Geoppinger as Lady Bracknell\n\nMichael R. Kiser as John \u201cJack\u201d Worthing\n\nKent F. Smith as Dr. Chasuble",
                    "datePosted": "2016-03-16 14:41:21",
                    "link": "http:\/\/www.cincyartsguide.com\/event\/milford-theatre-guilde-presents-the-importance-of-being-earnest\/",
                    "guid": "http:\/\/www.cincyartsguide.com\/event\/milford-theatre-guilde-presents-the-importance-of-being-earnest\/",
                    "source": "www.cincyartsguide.com"
                },
                    {
                        "eventID": "4879",
                        "spotlight": "false",
                        "featured": "false",
                        "orgImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/08/cam.jpg",
                        "eventImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/12/primary-Conservation-on-View--Zaragoza---s-Retablo-of-St--Peter-1450200426.jpeg",
                        "eventName": "Conservation on View: Zaragoza’s Retablo of St. Peter",
                        "eventDateBegin": "01-26-2016",
                        "eventDateEnd": "04-24-2016",
                        "eventDays": "Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
                        "ongoing": "N",
                        "eventDatesTimes": [
                            {
                                "date": "Sun-Apr-10-2016",
                                "time": "11:00 am",
                                "timestamp": "1460286000",
                                "date_filter": "20160410",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Tue-Apr-12-2016",
                                "time": "11:00 am",
                                "timestamp": "1460458800",
                                "date_filter": "20160412",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Wed-Apr-13-2016",
                                "time": "11:00 am",
                                "timestamp": "1460545200",
                                "date_filter": "20160413",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Thu-Apr-14-2016",
                                "time": "11:00 am",
                                "timestamp": "1460631600",
                                "date_filter": "20160414",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Fri-Apr-15-2016",
                                "time": "11:00 am",
                                "timestamp": "1460718000",
                                "date_filter": "20160415",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sat-Apr-16-2016",
                                "time": "11:00 am",
                                "timestamp": "1460804400",
                                "date_filter": "20160416",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sun-Apr-17-2016",
                                "time": "11:00 am",
                                "timestamp": "1460890800",
                                "date_filter": "20160417",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Tue-Apr-19-2016",
                                "time": "11:00 am",
                                "timestamp": "1461063600",
                                "date_filter": "20160419",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Wed-Apr-20-2016",
                                "time": "11:00 am",
                                "timestamp": "1461150000",
                                "date_filter": "20160420",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Thu-Apr-21-2016",
                                "time": "11:00 am",
                                "timestamp": "1461236400",
                                "date_filter": "20160421",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Fri-Apr-22-2016",
                                "time": "11:00 am",
                                "timestamp": "1461322800",
                                "date_filter": "20160422",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sat-Apr-23-2016",
                                "time": "11:00 am",
                                "timestamp": "1461409200",
                                "date_filter": "20160423",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sun-Apr-24-2016",
                                "time": "11:00 am",
                                "timestamp": "1461495600",
                                "date_filter": "20160424",
                                "end_time": "5:00 pm",
                                "duration": "21600"
                            }
                        ],
                        "orgID": "93",
                        "orgName": "Cincinnati Art Museum",
                        "eventUrl": "http://www.cincyartsguide.com/event/conservation-on-view-zaragozas-retablo-of-st-peter/",
                        "venueID": "97",
                        "venueName": "Cincinnati Art Museum",
                        "venueAddress1": "953 Eden Park Drive",
                        "venueAddress2": [],
                        "venueCity": "Cincinnati",
                        "venueState": "OH",
                        "venueZip": "45202",
                        "venueLatitude": [],
                        "venueLongitude": [],
                        "eventTicketInfo": "Free admission. Parking at the Art Museum is $4, FREE for Art Museum Members. The Cincinnati Art Museum is open Tuesday - Sunday, 11 am - 5 pm.",
                        "eventPhone1": "(513) 721-2787",
                        "eventEmail": "media@cincyart.org",
                        "eventTicketUrl": "http://www.cincinnatiartmuseum.org/",
                        "discountUrl": [],
                        "eventStartTime": [],
                        "eventType": "Museums + Visual Art",
                        "secondaryType": "Free Events",
                        "eventSummary": [],
                        "eventDescription": "Cincinnati Art Museum&rsquo;s Chief Conservator and paintings conservator Serena Urry will be cleaning <em>The Retablo of St. Peter<\/em>. The Spanish altarpiece, attributed to Lorenzo Zaragoza, dates to around 1400. Its 18 painted panels show scenes from the life of St. Peter on a rich gilded background.&nbsp; Progress in the conservation treatment will be visible over the course of the exhibit. When Urry is not present, a video describing the cleaning will run. Free admission.",
                        "datePosted": "2015-12-15 17:56:10",
                        "link": "http://www.cincyartsguide.com/event/conservation-on-view-zaragozas-retablo-of-st-peter/",
                        "guid": "http://www.cincyartsguide.com/event/conservation-on-view-zaragozas-retablo-of-st-peter/",
                        "source": "www.cincyartsguide.com"
                    },
                    {
                        "eventID": "2653",
                        "spotlight": "true",
                        "featured": "true",
                        "orgImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/organization-featured-Contemporary-Arts-Center-1441828949.jpeg",
                        "eventImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/primary-Do-Ho-Suh--Passage-1441988485.png",
                        "eventName": "Do Ho Suh: Passage",
                        "eventDateBegin": "02-12-2016",
                        "eventDateEnd": "09-11-2016",
                        "eventDays": "Friday,Saturday,Sunday,Monday,Wednesday,Thursday",
                        "ongoing": "Y",
                        "eventDatesTimes": [
                            {
                                "date": "Sun-Apr-10-2016",
                                "time": "10:00 am",
                                "timestamp": "1460282400",
                                "date_filter": "20160410",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Mon-Apr-11-2016",
                                "time": "10:00 am",
                                "timestamp": "1460368800",
                                "date_filter": "20160411",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Wed-Apr-13-2016",
                                "time": "10:00 am",
                                "timestamp": "1460541600",
                                "date_filter": "20160413",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Thu-Apr-14-2016",
                                "time": "10:00 am",
                                "timestamp": "1460628000",
                                "date_filter": "20160414",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Fri-Apr-15-2016",
                                "time": "10:00 am",
                                "timestamp": "1460714400",
                                "date_filter": "20160415",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Sat-Apr-16-2016",
                                "time": "10:00 am",
                                "timestamp": "1460800800",
                                "date_filter": "20160416",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sun-Apr-17-2016",
                                "time": "10:00 am",
                                "timestamp": "1460887200",
                                "date_filter": "20160417",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Mon-Apr-18-2016",
                                "time": "10:00 am",
                                "timestamp": "1460973600",
                                "date_filter": "20160418",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Wed-Apr-20-2016",
                                "time": "10:00 am",
                                "timestamp": "1461146400",
                                "date_filter": "20160420",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Thu-Apr-21-2016",
                                "time": "10:00 am",
                                "timestamp": "1461232800",
                                "date_filter": "20160421",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Fri-Apr-22-2016",
                                "time": "10:00 am",
                                "timestamp": "1461319200",
                                "date_filter": "20160422",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Sat-Apr-23-2016",
                                "time": "10:00 am",
                                "timestamp": "1461405600",
                                "date_filter": "20160423",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sun-Apr-24-2016",
                                "time": "10:00 am",
                                "timestamp": "1461492000",
                                "date_filter": "20160424",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Mon-Apr-25-2016",
                                "time": "10:00 am",
                                "timestamp": "1461578400",
                                "date_filter": "20160425",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Wed-Apr-27-2016",
                                "time": "10:00 am",
                                "timestamp": "1461751200",
                                "date_filter": "20160427",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Thu-Apr-28-2016",
                                "time": "10:00 am",
                                "timestamp": "1461837600",
                                "date_filter": "20160428",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Fri-Apr-29-2016",
                                "time": "10:00 am",
                                "timestamp": "1461924000",
                                "date_filter": "20160429",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Sat-Apr-30-2016",
                                "time": "10:00 am",
                                "timestamp": "1462010400",
                                "date_filter": "20160430",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sun-May-1-2016",
                                "time": "10:00 am",
                                "timestamp": "1462096800",
                                "date_filter": "20160501",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Mon-May-2-2016",
                                "time": "10:00 am",
                                "timestamp": "1462183200",
                                "date_filter": "20160502",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Wed-May-4-2016",
                                "time": "10:00 am",
                                "timestamp": "1462356000",
                                "date_filter": "20160504",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Thu-May-5-2016",
                                "time": "10:00 am",
                                "timestamp": "1462442400",
                                "date_filter": "20160505",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Fri-May-6-2016",
                                "time": "10:00 am",
                                "timestamp": "1462528800",
                                "date_filter": "20160506",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Sat-May-7-2016",
                                "time": "10:00 am",
                                "timestamp": "1462615200",
                                "date_filter": "20160507",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sun-May-8-2016",
                                "time": "10:00 am",
                                "timestamp": "1462701600",
                                "date_filter": "20160508",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Mon-May-9-2016",
                                "time": "10:00 am",
                                "timestamp": "1462788000",
                                "date_filter": "20160509",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Wed-May-11-2016",
                                "time": "10:00 am",
                                "timestamp": "1462960800",
                                "date_filter": "20160511",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Thu-May-12-2016",
                                "time": "10:00 am",
                                "timestamp": "1463047200",
                                "date_filter": "20160512",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Fri-May-13-2016",
                                "time": "10:00 am",
                                "timestamp": "1463133600",
                                "date_filter": "20160513",
                                "end_time": "9:00 pm",
                                "duration": "39600"
                            },
                            {
                                "date": "Sat-May-14-2016",
                                "time": "10:00 am",
                                "timestamp": "1463220000",
                                "date_filter": "20160514",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            },
                            {
                                "date": "Sun-May-15-2016",
                                "time": "10:00 am",
                                "timestamp": "1463306400",
                                "date_filter": "20160515",
                                "end_time": "4:00 pm",
                                "duration": "21600"
                            }
                        ],
                        "orgID": "2521",
                        "orgName": "Contemporary Arts Center",
                        "eventUrl": "http://www.cincyartsguide.com/event/do-ho-suh-passage/",
                        "venueID": "1906",
                        "venueName": "Contemporary Arts Center",
                        "venueAddress1": "44 E 6Th St",
                        "venueAddress2": [],
                        "venueCity": "Cincinnati",
                        "venueState": "OH",
                        "venueZip": "45202",
                        "venueLatitude": [],
                        "venueLongitude": [],
                        "eventTicketInfo": "Gallery Admission\n\nAdults \n$7.50\n\nEducators, Seniors (60+) & Students\n$5.50\n\nMembers and Children under 5: \nFREE",
                        "eventPhone1": "5133458429",
                        "eventEmail": [],
                        "eventTicketUrl": "http://www.contemporaryartscenter.org/visit",
                        "discountUrl": [],
                        "eventStartTime": [],
                        "eventType": "Museums + Visual Art",
                        "secondaryType": "Museums, Galleries, Museum, gallery, exhibition",
                        "eventSummary": [],
                        "eventDescription": "Curated by Steven Matijcio\n\nARTIST(S) Do Ho Suh\n\nThe CAC will present a major survey exhibition of celebrated Korean-American artist Do Ho Suh in 2016. Suh moved to the United States in 1993 and every house he has lived in throughout his life serves as inspiration for remarkable meditations on the legacy of home, place and migration. Each abode becomes manifest in an ongoing series of life-size fabric replicas that float gently, but vividly in space – hovering like constructions of the mind. The CAC will present a number of Suh’s iconic installations in this exhibition, highlighting these hallucinatory structures as metaphors for the struggle of all peoples to reformulate historical notions of settlement. Suh’s work is intensely responsive to site, and in <em>Passage<\/em> he will propose a groundbreaking dialog with the now iconic architecture of Zaha Hadid – spoken through the movement of bodies through space. The CAC will also produce the first catalog on the artist to be conceptualized in the U.S.\n\n&nbsp;\n\nDo Ho Suh, Wielandstr. 18, 12159 Berlin, Germany - 3 Corridors, 2011. Image courtesy the Artist and Lehmann Maupin, New York.",
                        "datePosted": "2015-09-11 21:40:12",
                        "link": "http://www.cincyartsguide.com/event/do-ho-suh-passage/",
                        "guid": "http://www.cincyartsguide.com/event/do-ho-suh-passage/",
                        "source": "www.cincyartsguide.com"
                    },
                    {
                        "eventID": "6721",
                        "spotlight": "false",
                        "featured": "false",
                        "orgImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/12/organization-featured-Kelly-O-Donnell-1449429127.jpeg",
                        "eventImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2016/03/primary-PRESENT-TENSE-IMPERFECT-1459107458.jpeg",
                        "eventName": "PRESENT TENSE IMPERFECT",
                        "eventDateBegin": "04-22-2016",
                        "eventDateEnd": "04-23-2016",
                        "eventDays": "Friday,Saturday",
                        "ongoing": "N",
                        "eventDatesTimes": [
                            {
                                "date": "Fri-Apr-22-2016",
                                "time": "8:00 pm",
                                "timestamp": "1461355200",
                                "date_filter": "20160422",
                                "end_time": "10:00 pm",
                                "duration": "7200"
                            },
                            {
                                "date": "Sat-Apr-23-2016",
                                "time": "8:00 pm",
                                "timestamp": "1461441600",
                                "date_filter": "20160423",
                                "end_time": "10:00 pm",
                                "duration": "7200"
                            }
                        ],
                        "orgID": "4591",
                        "orgName": "Alice F. and Harris K. Weston Art Gallery",
                        "eventUrl": "http://www.cincyartsguide.com/event/present-tense-imperfect/",
                        "venueID": "3063",
                        "venueName": "Aronoff Center for the Arts",
                        "venueAddress1": "650 Walnut St.",
                        "venueAddress2": [],
                        "venueCity": "Cincinnati",
                        "venueState": "OH",
                        "venueZip": "45202",
                        "venueLatitude": [],
                        "venueLongitude": [],
                        "eventTicketInfo": "TICKET INFORMATION: $12 one night / $20 weekend pass. Available at the Aronoff Center Box Office (513) 621-2787, or online at www.westonartgallery.com.",
                        "eventPhone1": "513-977-4170",
                        "eventEmail": "westonartgallery@cincinnatiarts.org",
                        "eventTicketUrl": "https://ev9.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=WAG&linkID=cinarts&shopperContext;=&caller;=&appCode;=&format=grpMenu&_ga=1.167344894.1937438569.1434467611",
                        "discountUrl": [],
                        "eventStartTime": [],
                        "eventType": "Theatre",
                        "secondaryType": "Music, Museums + Visual Art, Galleries, Film, Make + Learn, Lectures + Literature, Experimental",
                        "eventSummary": "A two-day performance series of spoken word, film, and music presented in the Aronoff Center’s Fifth Third Bank Theater, organized by the award-winning writer and spoken word artist Mark Flanigan.",
                        "eventDescription": "On&nbsp;<strong>Friday, April 22,&nbsp;<\/strong>and&nbsp;<strong>Saturday, April 23, 2016<\/strong>, from&nbsp;<strong>8:00 to 10:00 p.m.<\/strong>, the&nbsp;<strong>Cincinnati Arts Association&#039;s Alice F. and Harris K. Weston Art Gallery in the Aronoff Center for the Arts<\/strong>&nbsp;will present&nbsp;<em><strong>Present Tense Imperfect<\/strong><\/em>, a two-day performance series of spoken word, film, and music presented in the<strong>&nbsp;Aronoff Center&rsquo;s Fifth Third Bank Theater<\/strong>. Organized by the award-winning writer and spoken word artist&nbsp;<strong>Mark Flanigan<\/strong>&nbsp;(Cincinnati, OH), this eclectic series represents a diverse selection of talented performers celebrating twenty years of programming at the Weston Art Gallery, which periodically featured intermedia and alternative performance.\n\nArtists include&nbsp;<strong>Jay Bolotin<\/strong>,&nbsp;<strong>Jack Burton Overdrive (JBO), Elese Daniel, Mark Flanigan, Matt Hart, Desirae Hosley (aka The Silent Poet) and the Teen Poets of WordPlay Cincy Scribes, The IdleAires, Yvette Nepper, Steven Proctor, Kathy Y. Wilson<\/strong>(all Cincinnati, OH), and&nbsp;<strong>Terri Ford<\/strong>&nbsp;(Minneapolis, MN). The weekend series will also feature excerpts from the late&nbsp;<strong>Aralee Strange&rsquo;s<\/strong>&nbsp;film project&nbsp;<em>The Peach Mountain Psalms<\/em>&nbsp;(formerly&nbsp;<em>This Train<\/em>)&nbsp;as a work-in-progress toward the final cut, introduced by editor, film score audio and mixing engineer, and longtime friend<strong>Owsley Manier&nbsp;<\/strong>(Nashville, TN).\n\n<strong>PERFORMANCE SCHEDULE<\/strong>\n\n<strong>Friday, April 22 (8 &ndash; 10 p.m.)<\/strong>\n\n<ul><li><strong>Mark Flanigan&nbsp;<\/strong><\/li><li><strong>Yvette Nepper<\/strong><\/li><li><strong>Desirae Hosley (aka The Silent Poet)&nbsp;<\/strong>and the&nbsp;<strong>Teen Poets of WordPlay Cincy Scribes<\/strong><\/li><li><strong>Jay Bolotin&nbsp;<\/strong><\/li><li><strong>Film Excerpts: Aralee Strange:&nbsp;<em>The Peach Mountain Psalms<\/em><\/strong>&nbsp;(formerly&nbsp;<em>This Train<\/em>) introduced by&nbsp;<strong>Owsley Manier<\/strong><\/li><li><strong>Elese Daniel<\/strong><\/li><li><strong>Jack Burton Overdrive (JBO)<\/strong><\/li><\/ul><strong>Saturday, April 23 (8 &ndash; 10 p.m.)<\/strong>\n\n<ul><li><strong>Steven Proctor&nbsp;<\/strong>and&nbsp;<strong>Mark Flanigan<\/strong><\/li><li><strong>Terri Ford<\/strong><\/li><li><strong>Desirae Hosley (aka The Silent Poet)&nbsp;<\/strong>and<strong>&nbsp;<\/strong>the&nbsp;<strong>Teen Poets of WordPlay Cincy Scribes<\/strong><\/li><li><strong>Matt Hart<\/strong><\/li><li><strong>Film Excerpts: Aralee Strange:<em>&nbsp;The Peach Mountain Psalms<\/em>&nbsp;<\/strong>(formerly&nbsp;<em>This Train<\/em>) introduced by<strong>&nbsp;Owsley Manier<\/strong><\/li><li><strong>Kathy Y. Wilson<\/strong><\/li><li><strong>The IdleAires<\/strong><\/li><\/ul><strong>TICKET INFORMATION: $12 one night / $20 weekend pass. Available at the Aronoff Center Box Office (513) 621-2787, or online at www.westonartgallery.com. &nbsp;<\/strong>",
                        "datePosted": "2016-03-28 09:07:38",
                        "link": "http://www.cincyartsguide.com/event/present-tense-imperfect/",
                        "guid": "http://www.cincyartsguide.com/event/present-tense-imperfect/",
                        "source": "www.cincyartsguide.com"
                    },
                    {
                        "eventID": "2848",
                        "spotlight": "false",
                        "featured": "false",
                        "orgImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/pops.jpg",
                        "eventImage": "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/primary-Magical-Music-of-Broadway-with-Lea-Salonga---Cincinnati-Pops-Orchestra-1442344959.jpeg",
                        "eventName": "Magical Music of Broadway with Lea Salonga - Cincinnati Pops Orchestra",
                        "eventDateBegin": "04-22-2016",
                        "eventDateEnd": "04-24-2016",
                        "eventDays": "Friday,Saturday,Sunday",
                        "ongoing": "N",
                        "eventDatesTimes": [
                            {
                                "date": "Fri-Apr-22-2016",
                                "time": "8:00 pm",
                                "timestamp": "1461355200",
                                "date_filter": "20160422",
                                "end_time": "11:59 pm",
                                "duration": "7200"
                            },
                            {
                                "date": "Sat-Apr-23-2016",
                                "time": "8:00 pm",
                                "timestamp": "1461441600",
                                "date_filter": "20160423",
                                "end_time": "11:59 pm",
                                "duration": "7200"
                            },
                            {
                                "date": "Sun-Apr-24-2016",
                                "time": "2:00 pm",
                                "timestamp": "1461506400",
                                "date_filter": "20160424",
                                "end_time": "11:59 pm",
                                "duration": "7200"
                            }
                        ],
                        "orgID": "2111",
                        "orgName": "Cincinnati Pops Orchestra",
                        "eventUrl": "http://www.cincyartsguide.com/event/magical-music-of-broadway-with-lea-salonga-cincinnati-pops-orchestra/",
                        "venueID": "1796",
                        "venueName": "Music Hall",
                        "venueAddress1": "1241 Elm Street",
                        "venueAddress2": [],
                        "venueCity": "Cincinnati",
                        "venueState": "OH",
                        "venueZip": "45202",
                        "venueLatitude": [],
                        "venueLongitude": [],
                        "eventTicketInfo": "Tickets start at $25 for adults/$10 for kids. Discounts available for students, seniors, military.",
                        "eventPhone1": "(513) 744-3258",
                        "eventEmail": "information@cincinnatipops.org",
                        "eventTicketUrl": "http://www.cincinnatisymphony.org/concerts-plus-events/2015-16-pops-season-listing/magical-music-of-broadway-with-lea-salonga/",
                        "discountUrl": [],
                        "eventStartTime": [],
                        "eventType": "Music",
                        "secondaryType": "Classical + Symphonic, Opera + Vocal, Kids Family, Musicals, Music Hall, concerts, pops, jmr, Broadway, musicals, Disney, Cincinnati Pops Orchestra, John Morris Russell, Lea Salonga",
                        "eventSummary": "From “Defying Gravity” to “Be Our Guest”, the Pops celebrates the bewitching magic of music!",
                        "eventDescription": "And who better to bring these songs to life than the singing voice behind Disney heroines Jasmine and Mulan? Let Tony-winning Broadway legend Lea Salonga (<em>Miss Saigon, Les Misérables<\/em>) and the Pops take you to <em>A Whole New World<\/em>!\n\nKIDS' TICKETS JUST $10",
                        "datePosted": "2015-09-16 16:22:45",
                        "link": "http://www.cincyartsguide.com/event/magical-music-of-broadway-with-lea-salonga-cincinnati-pops-orchestra/",
                        "guid": "http://www.cincyartsguide.com/event/magical-music-of-broadway-with-lea-salonga-cincinnati-pops-orchestra/",
                        "source": "www.cincyartsguide.com"
                    }]
            }
        };
    }
}
