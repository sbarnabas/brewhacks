import {Page, Storage, LocalStorage, NavController, NavParams, http} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";

@Page({
    templateUrl: 'build/pages/all-events/all-events.html'
})
export class AllEventsPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedEvent = navParams.get('event');
        this.events=[]
        this.getData();
        var favs=[]
        this.local = new Storage(LocalStorage);

        if (this.data.events && this.data.events.event) {
            try {
                for (var idx in this.data.events.event) {
                    var d = this.data.events.event[idx]
                    this.events.push({
                        id:             d.eventID,
                        fav:            favs.indexOf(d.eventID) > -1||d.eventID=="6574",
                        eventName:      d.eventName ? d.eventName : "(Untitled)",
                        eventImage:     d.eventImage ? d.eventImage : "",
                        eventVenueName: d.venueName ? d.venueName : "",
                        eventDate:      (Array.isArray(
                            d.eventDatesTimes)) ? d.eventDatesTimes[0].date : d.eventDatesTimes.datetime.date ? d.eventDatesTimes.datetime.date : "",
                        eventTime:      (Array.isArray(
                            d.eventDatesTimes)) ? d.eventDatesTimes[0].time : d.eventDatesTimes.datetime.time ? d.eventDatesTimes.datetime.time : "",
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

    }

    itemTapped(event, item) {
        this.nav.push(ItemDetailsPage, {
            event: item
        });
    }

    getData() {
        this.data = {
            "events": {
                "event": [{
                    "eventID":          "6574",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2016/03/primary-Milford-Theatre-Guilde-presents-The-Importance-of-Being-Earnest-1458072163.jpeg",
                    "eventName":        "Milford Theatre Guilde presents The Importance of Being Earnest",
                    "eventDateBegin":   "04-01-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Friday,Saturday,Sunday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "8:00 pm",
                            "timestamp":   "1460232000",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }
                    },
                    "orgID":            "",
                    "orgName":          "Milford Theatre Guilde",
                    "eventUrl":         "http://www.cincyartsguide.com/event/milford-theatre-guilde-presents-the-importance-of-being-earnest/",
                    "venueID":          "",
                    "venueName":        "Milford Theatre Guilde",
                    "venueAddress1":    "",
                    "venueAddress2":    "",
                    "venueCity":        "0",
                    "venueState":       "0",
                    "venueZip":         "0",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "For tickets, visit milfordtheatreguilde.org or call 513-575-9351rn$14 for Adults, $12 for Children/Seniors/Military",
                    "eventPhone1":      "513-476-2230",
                    "eventEmail":       "",
                    "eventTicketUrl":   "http://www.milfordtheatreguilde.org/",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Theatre",
                    "secondaryType":    "Comedy, Drama, Community Arts",
                    "eventSummary":     "In 1890s London, two friends use the same pseudonym (“Ernest”) for their on-the-sly activities. Hilarity and romance ensue!",
                    "eventDescription": "In 1890s London, two friends use the same pseudonym (“Ernest”) for their on-the-sly activities. Hilarity ensues.\n\nDirected by Ian Tinney\nProduced by R&amp;R Productions\n\nStephen Beck as Lane/Merriman\n\nStormi Bledsoe as Gwendolen Fairfax\n\nAdrianna Boris as Cecily Cardew\n\nNick Castle as Algernon “Algy” Montcrieff\n\nBecky Cole as Miss Prism\n\nKelly Geoppinger as Lady Bracknell\n\nMichael R. Kiser as John “Jack” Worthing\n\nKent F. Smith as Dr. Chasuble",
                    "datePosted":       "2016-03-16 14:41:21",
                    "link":             "http://www.cincyartsguide.com/event/milford-theatre-guilde-presents-the-importance-of-being-earnest/",
                    "guid":             "http://www.cincyartsguide.com/event/milford-theatre-guilde-presents-the-importance-of-being-earnest/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "4879",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/08/cam.jpg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/12/primary-Conservation-on-View--Zaragoza---s-Retablo-of-St--Peter-1450200426.jpeg",
                    "eventName":        "Conservation on View: Zaragoza’s Retablo of St. Peter",
                    "eventDateBegin":   "01-26-2016",
                    "eventDateEnd":     "04-24-2016",
                    "eventDays":        "Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
                    "ongoing":          "N",
                    "eventDatesTimes":  [{
                        "date":        "Sun-Apr-10-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1460286000",
                        "date_filter": "20160410",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Tue-Apr-12-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1460458800",
                        "date_filter": "20160412",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Wed-Apr-13-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1460545200",
                        "date_filter": "20160413",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Thu-Apr-14-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1460631600",
                        "date_filter": "20160414",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Fri-Apr-15-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1460718000",
                        "date_filter": "20160415",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sat-Apr-16-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1460804400",
                        "date_filter": "20160416",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sun-Apr-17-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1460890800",
                        "date_filter": "20160417",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Tue-Apr-19-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1461063600",
                        "date_filter": "20160419",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Wed-Apr-20-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1461150000",
                        "date_filter": "20160420",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Thu-Apr-21-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1461236400",
                        "date_filter": "20160421",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Fri-Apr-22-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1461322800",
                        "date_filter": "20160422",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sat-Apr-23-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1461409200",
                        "date_filter": "20160423",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sun-Apr-24-2016",
                        "time":        "11:00 am",
                        "timestamp":   "1461495600",
                        "date_filter": "20160424",
                        "end_time":    "5:00 pm",
                        "duration":    "21600"
                    }],
                    "orgID":            "93",
                    "orgName":          "Cincinnati Art Museum",
                    "eventUrl":         "http://www.cincyartsguide.com/event/conservation-on-view-zaragozas-retablo-of-st-peter/",
                    "venueID":          "97",
                    "venueName":        "Cincinnati Art Museum",
                    "venueAddress1":    "953 Eden Park Drive",
                    "venueAddress2":    [],
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    [],
                    "venueLongitude":   [],
                    "eventTicketInfo":  "Free admission. Parking at the Art Museum is $4, FREE for Art Museum Members. The Cincinnati Art Museum is open Tuesday - Sunday, 11 am - 5 pm.",
                    "eventPhone1":      "(513) 721-2787",
                    "eventEmail":       "media@cincyart.org",
                    "eventTicketUrl":   "http://www.cincinnatiartmuseum.org/",
                    "discountUrl":      [],
                    "eventStartTime":   [],
                    "eventType":        "Museums + Visual Art",
                    "secondaryType":    "Free Events",
                    "eventSummary":     [],
                    "eventDescription": "Cincinnati Art Museum&rsquo;s Chief Conservator and paintings conservator Serena Urry will be cleaning <em>The Retablo of St. Peter<\/em>. The Spanish altarpiece, attributed to Lorenzo Zaragoza, dates to around 1400. Its 18 painted panels show scenes from the life of St. Peter on a rich gilded background.&nbsp; Progress in the conservation treatment will be visible over the course of the exhibit. When Urry is not present, a video describing the cleaning will run. Free admission.",
                    "datePosted":       "2015-12-15 17:56:10",
                    "link":             "http://www.cincyartsguide.com/event/conservation-on-view-zaragozas-retablo-of-st-peter/",
                    "guid":             "http://www.cincyartsguide.com/event/conservation-on-view-zaragozas-retablo-of-st-peter/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2653",
                    "spotlight":        "true",
                    "featured":         "true",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/organization-featured-Contemporary-Arts-Center-1441828949.jpeg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/primary-Do-Ho-Suh--Passage-1441988485.png",
                    "eventName":        "Do Ho Suh: Passage",
                    "eventDateBegin":   "02-12-2016",
                    "eventDateEnd":     "09-11-2016",
                    "eventDays":        "Friday,Saturday,Sunday,Monday,Wednesday,Thursday",
                    "ongoing":          "Y",
                    "eventDatesTimes":  [{
                        "date":        "Sun-Apr-10-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460282400",
                        "date_filter": "20160410",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Mon-Apr-11-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460368800",
                        "date_filter": "20160411",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Wed-Apr-13-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460541600",
                        "date_filter": "20160413",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Thu-Apr-14-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460628000",
                        "date_filter": "20160414",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Fri-Apr-15-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460714400",
                        "date_filter": "20160415",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Sat-Apr-16-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460800800",
                        "date_filter": "20160416",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sun-Apr-17-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460887200",
                        "date_filter": "20160417",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Mon-Apr-18-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1460973600",
                        "date_filter": "20160418",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Wed-Apr-20-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461146400",
                        "date_filter": "20160420",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Thu-Apr-21-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461232800",
                        "date_filter": "20160421",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Fri-Apr-22-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461319200",
                        "date_filter": "20160422",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Sat-Apr-23-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461405600",
                        "date_filter": "20160423",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sun-Apr-24-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461492000",
                        "date_filter": "20160424",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Mon-Apr-25-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461578400",
                        "date_filter": "20160425",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Wed-Apr-27-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461751200",
                        "date_filter": "20160427",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Thu-Apr-28-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461837600",
                        "date_filter": "20160428",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Fri-Apr-29-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1461924000",
                        "date_filter": "20160429",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Sat-Apr-30-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462010400",
                        "date_filter": "20160430",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sun-May-1-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462096800",
                        "date_filter": "20160501",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Mon-May-2-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462183200",
                        "date_filter": "20160502",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Wed-May-4-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462356000",
                        "date_filter": "20160504",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Thu-May-5-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462442400",
                        "date_filter": "20160505",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Fri-May-6-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462528800",
                        "date_filter": "20160506",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Sat-May-7-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462615200",
                        "date_filter": "20160507",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sun-May-8-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462701600",
                        "date_filter": "20160508",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Mon-May-9-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462788000",
                        "date_filter": "20160509",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Wed-May-11-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1462960800",
                        "date_filter": "20160511",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Thu-May-12-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1463047200",
                        "date_filter": "20160512",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Fri-May-13-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1463133600",
                        "date_filter": "20160513",
                        "end_time":    "9:00 pm",
                        "duration":    "39600"
                    }, {
                        "date":        "Sat-May-14-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1463220000",
                        "date_filter": "20160514",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }, {
                        "date":        "Sun-May-15-2016",
                        "time":        "10:00 am",
                        "timestamp":   "1463306400",
                        "date_filter": "20160515",
                        "end_time":    "4:00 pm",
                        "duration":    "21600"
                    }],
                    "orgID":            "2521",
                    "orgName":          "Contemporary Arts Center",
                    "eventUrl":         "http://www.cincyartsguide.com/event/do-ho-suh-passage/",
                    "venueID":          "1906",
                    "venueName":        "Contemporary Arts Center",
                    "venueAddress1":    "44 E 6Th St",
                    "venueAddress2":    [],
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    [],
                    "venueLongitude":   [],
                    "eventTicketInfo":  "Gallery Admission\n\nAdults \n$7.50\n\nEducators, Seniors (60+) & Students\n$5.50\n\nMembers and Children under 5: \nFREE",
                    "eventPhone1":      "5133458429",
                    "eventEmail":       [],
                    "eventTicketUrl":   "http://www.contemporaryartscenter.org/visit",
                    "discountUrl":      [],
                    "eventStartTime":   [],
                    "eventType":        "Museums + Visual Art",
                    "secondaryType":    "Museums, Galleries, Museum, gallery, exhibition",
                    "eventSummary":     [],
                    "eventDescription": "Curated by Steven Matijcio\n\nARTIST(S) Do Ho Suh\n\nThe CAC will present a major survey exhibition of celebrated Korean-American artist Do Ho Suh in 2016. Suh moved to the United States in 1993 and every house he has lived in throughout his life serves as inspiration for remarkable meditations on the legacy of home, place and migration. Each abode becomes manifest in an ongoing series of life-size fabric replicas that float gently, but vividly in space – hovering like constructions of the mind. The CAC will present a number of Suh’s iconic installations in this exhibition, highlighting these hallucinatory structures as metaphors for the struggle of all peoples to reformulate historical notions of settlement. Suh’s work is intensely responsive to site, and in <em>Passage<\/em> he will propose a groundbreaking dialog with the now iconic architecture of Zaha Hadid – spoken through the movement of bodies through space. The CAC will also produce the first catalog on the artist to be conceptualized in the U.S.\n\n&nbsp;\n\nDo Ho Suh, Wielandstr. 18, 12159 Berlin, Germany - 3 Corridors, 2011. Image courtesy the Artist and Lehmann Maupin, New York.",
                    "datePosted":       "2015-09-11 21:40:12",
                    "link":             "http://www.cincyartsguide.com/event/do-ho-suh-passage/",
                    "guid":             "http://www.cincyartsguide.com/event/do-ho-suh-passage/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "6721",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/12/organization-featured-Kelly-O-Donnell-1449429127.jpeg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2016/03/primary-PRESENT-TENSE-IMPERFECT-1459107458.jpeg",
                    "eventName":        "PRESENT TENSE IMPERFECT",
                    "eventDateBegin":   "04-22-2016",
                    "eventDateEnd":     "04-23-2016",
                    "eventDays":        "Friday,Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  [{
                        "date":        "Fri-Apr-22-2016",
                        "time":        "8:00 pm",
                        "timestamp":   "1461355200",
                        "date_filter": "20160422",
                        "end_time":    "10:00 pm",
                        "duration":    "7200"
                    }, {
                        "date":        "Sat-Apr-23-2016",
                        "time":        "8:00 pm",
                        "timestamp":   "1461441600",
                        "date_filter": "20160423",
                        "end_time":    "10:00 pm",
                        "duration":    "7200"
                    }],
                    "orgID":            "4591",
                    "orgName":          "Alice F. and Harris K. Weston Art Gallery",
                    "eventUrl":         "http://www.cincyartsguide.com/event/present-tense-imperfect/",
                    "venueID":          "3063",
                    "venueName":        "Aronoff Center for the Arts",
                    "venueAddress1":    "650 Walnut St.",
                    "venueAddress2":    [],
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    [],
                    "venueLongitude":   [],
                    "eventTicketInfo":  "TICKET INFORMATION: $12 one night / $20 weekend pass. Available at the Aronoff Center Box Office (513) 621-2787, or online at www.westonartgallery.com.",
                    "eventPhone1":      "513-977-4170",
                    "eventEmail":       "westonartgallery@cincinnatiarts.org",
                    "eventTicketUrl":   "https://ev9.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=WAG&linkID=cinarts&shopperContext;=&caller;=&appCode;=&format=grpMenu&_ga=1.167344894.1937438569.1434467611",
                    "discountUrl":      [],
                    "eventStartTime":   [],
                    "eventType":        "Theatre",
                    "secondaryType":    "Music, Museums + Visual Art, Galleries, Film, Make + Learn, Lectures + Literature, Experimental",
                    "eventSummary":     "A two-day performance series of spoken word, film, and music presented in the Aronoff Center’s Fifth Third Bank Theater, organized by the award-winning writer and spoken word artist Mark Flanigan.",
                    "eventDescription": "On&nbsp;<strong>Friday, April 22,&nbsp;<\/strong>and&nbsp;<strong>Saturday, April 23, 2016<\/strong>, from&nbsp;<strong>8:00 to 10:00 p.m.<\/strong>, the&nbsp;<strong>Cincinnati Arts Association&#039;s Alice F. and Harris K. Weston Art Gallery in the Aronoff Center for the Arts<\/strong>&nbsp;will present&nbsp;<em><strong>Present Tense Imperfect<\/strong><\/em>, a two-day performance series of spoken word, film, and music presented in the<strong>&nbsp;Aronoff Center&rsquo;s Fifth Third Bank Theater<\/strong>. Organized by the award-winning writer and spoken word artist&nbsp;<strong>Mark Flanigan<\/strong>&nbsp;(Cincinnati, OH), this eclectic series represents a diverse selection of talented performers celebrating twenty years of programming at the Weston Art Gallery, which periodically featured intermedia and alternative performance.\n\nArtists include&nbsp;<strong>Jay Bolotin<\/strong>,&nbsp;<strong>Jack Burton Overdrive (JBO), Elese Daniel, Mark Flanigan, Matt Hart, Desirae Hosley (aka The Silent Poet) and the Teen Poets of WordPlay Cincy Scribes, The IdleAires, Yvette Nepper, Steven Proctor, Kathy Y. Wilson<\/strong>(all Cincinnati, OH), and&nbsp;<strong>Terri Ford<\/strong>&nbsp;(Minneapolis, MN). The weekend series will also feature excerpts from the late&nbsp;<strong>Aralee Strange&rsquo;s<\/strong>&nbsp;film project&nbsp;<em>The Peach Mountain Psalms<\/em>&nbsp;(formerly&nbsp;<em>This Train<\/em>)&nbsp;as a work-in-progress toward the final cut, introduced by editor, film score audio and mixing engineer, and longtime friend<strong>Owsley Manier&nbsp;<\/strong>(Nashville, TN).\n\n<strong>PERFORMANCE SCHEDULE<\/strong>\n\n<strong>Friday, April 22 (8 &ndash; 10 p.m.)<\/strong>\n\n<ul><li><strong>Mark Flanigan&nbsp;<\/strong><\/li><li><strong>Yvette Nepper<\/strong><\/li><li><strong>Desirae Hosley (aka The Silent Poet)&nbsp;<\/strong>and the&nbsp;<strong>Teen Poets of WordPlay Cincy Scribes<\/strong><\/li><li><strong>Jay Bolotin&nbsp;<\/strong><\/li><li><strong>Film Excerpts: Aralee Strange:&nbsp;<em>The Peach Mountain Psalms<\/em><\/strong>&nbsp;(formerly&nbsp;<em>This Train<\/em>) introduced by&nbsp;<strong>Owsley Manier<\/strong><\/li><li><strong>Elese Daniel<\/strong><\/li><li><strong>Jack Burton Overdrive (JBO)<\/strong><\/li><\/ul><strong>Saturday, April 23 (8 &ndash; 10 p.m.)<\/strong>\n\n<ul><li><strong>Steven Proctor&nbsp;<\/strong>and&nbsp;<strong>Mark Flanigan<\/strong><\/li><li><strong>Terri Ford<\/strong><\/li><li><strong>Desirae Hosley (aka The Silent Poet)&nbsp;<\/strong>and<strong>&nbsp;<\/strong>the&nbsp;<strong>Teen Poets of WordPlay Cincy Scribes<\/strong><\/li><li><strong>Matt Hart<\/strong><\/li><li><strong>Film Excerpts: Aralee Strange:<em>&nbsp;The Peach Mountain Psalms<\/em>&nbsp;<\/strong>(formerly&nbsp;<em>This Train<\/em>) introduced by<strong>&nbsp;Owsley Manier<\/strong><\/li><li><strong>Kathy Y. Wilson<\/strong><\/li><li><strong>The IdleAires<\/strong><\/li><\/ul><strong>TICKET INFORMATION: $12 one night / $20 weekend pass. Available at the Aronoff Center Box Office (513) 621-2787, or online at www.westonartgallery.com. &nbsp;<\/strong>",
                    "datePosted":       "2016-03-28 09:07:38",
                    "link":             "http://www.cincyartsguide.com/event/present-tense-imperfect/",
                    "guid":             "http://www.cincyartsguide.com/event/present-tense-imperfect/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2848",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/pops.jpg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/primary-Magical-Music-of-Broadway-with-Lea-Salonga---Cincinnati-Pops-Orchestra-1442344959.jpeg",
                    "eventName":        "Magical Music of Broadway with Lea Salonga - Cincinnati Pops Orchestra",
                    "eventDateBegin":   "04-22-2016",
                    "eventDateEnd":     "04-24-2016",
                    "eventDays":        "Friday,Saturday,Sunday",
                    "ongoing":          "N",
                    "eventDatesTimes":  [{
                        "date":        "Fri-Apr-22-2016",
                        "time":        "8:00 pm",
                        "timestamp":   "1461355200",
                        "date_filter": "20160422",
                        "end_time":    "11:59 pm",
                        "duration":    "7200"
                    }, {
                        "date":        "Sat-Apr-23-2016",
                        "time":        "8:00 pm",
                        "timestamp":   "1461441600",
                        "date_filter": "20160423",
                        "end_time":    "11:59 pm",
                        "duration":    "7200"
                    }, {
                        "date":        "Sun-Apr-24-2016",
                        "time":        "2:00 pm",
                        "timestamp":   "1461506400",
                        "date_filter": "20160424",
                        "end_time":    "11:59 pm",
                        "duration":    "7200"
                    }],
                    "orgID":            "2111",
                    "orgName":          "Cincinnati Pops Orchestra",
                    "eventUrl":         "http://www.cincyartsguide.com/event/magical-music-of-broadway-with-lea-salonga-cincinnati-pops-orchestra/",
                    "venueID":          "1796",
                    "venueName":        "Music Hall",
                    "venueAddress1":    "1241 Elm Street",
                    "venueAddress2":    [],
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    [],
                    "venueLongitude":   [],
                    "eventTicketInfo":  "Tickets start at $25 for adults/$10 for kids. Discounts available for students, seniors, military.",
                    "eventPhone1":      "(513) 744-3258",
                    "eventEmail":       "information@cincinnatipops.org",
                    "eventTicketUrl":   "http://www.cincinnatisymphony.org/concerts-plus-events/2015-16-pops-season-listing/magical-music-of-broadway-with-lea-salonga/",
                    "discountUrl":      [],
                    "eventStartTime":   [],
                    "eventType":        "Music",
                    "secondaryType":    "Classical + Symphonic, Opera + Vocal, Kids Family, Musicals, Music Hall, concerts, pops, jmr, Broadway, musicals, Disney, Cincinnati Pops Orchestra, John Morris Russell, Lea Salonga",
                    "eventSummary":     "From “Defying Gravity” to “Be Our Guest”, the Pops celebrates the bewitching magic of music!",
                    "eventDescription": "And who better to bring these songs to life than the singing voice behind Disney heroines Jasmine and Mulan? Let Tony-winning Broadway legend Lea Salonga (<em>Miss Saigon, Les Misérables<\/em>) and the Pops take you to <em>A Whole New World<\/em>!\n\nKIDS' TICKETS JUST $10",
                    "datePosted":       "2015-09-16 16:22:45",
                    "link":             "http://www.cincyartsguide.com/event/magical-music-of-broadway-with-lea-salonga-cincinnati-pops-orchestra/",
                    "guid":             "http://www.cincyartsguide.com/event/magical-music-of-broadway-with-lea-salonga-cincinnati-pops-orchestra/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "6759",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/10/organization-featured-Tom-Kent-1445017613.jpeg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2016/04/primary-Louder-Than-A-Bomb-Finals-1459726565.jpeg",
                    "eventName":        "Louder Than A Bomb Finals",
                    "eventDateBegin":   "04-09-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "6:00 pm",
                            "timestamp":   "1460224800",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }
                    },
                    "orgID":            "3096",
                    "orgName":          "Elementz Hip Hop Center for Youth",
                    "eventUrl":         "http://www.cincyartsguide.com/event/louder-than-a-bomb-finals/",
                    "venueID":          "1802",
                    "venueName":        "School of Creative and Performing Arts Corbett Theatre",
                    "venueAddress1":    "108 West Central Parkway",
                    "venueAddress2":    "",
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Free..........you must register for tickets here: https://www.eventbrite.com/e/2016-louder-than-a-bomb-finals-corbett-theater-scpa-tickets-22063384176",
                    "eventPhone1":      "513-721-5800",
                    "eventEmail":       "info@elementz.org",
                    "eventTicketUrl":   "https://www.eventbrite.com/e/2016-louder-than-a-bomb-finals-corbett-theater-scpa-tickets-22063384176",
                    "discountUrl":      "",
                    "eventStartTime":   "Doors Open at 5:30",
                    "eventType":        "Free Events",
                    "secondaryType":    "Theatre, Music, R&amp;B, Soul + Hip Hop, Culture, Heritage + Festivals, Young Professionals, Kids Family, For Kids, For Teens, ArtsPass Deals, Drama, CincYPerks Offers, Community Arts, #Elementzhiphop, #LTABCINCY, #hottestcollegeinamerica",
                    "eventSummary":     "Youth Spoken Word contest",
                    "eventDescription": "Join us for Louder Than A Bomb – Cincinnati, as we give voice and a platform to today's youth. Be a part of the largest poetry slam contest on the face of the earth and make a difference in the Queen City! Witness the hip hop spoken word, the stories, and the truth of Cincinnati.",
                    "datePosted":       "2016-04-04 15:46:17",
                    "link":             "http://www.cincyartsguide.com/event/louder-than-a-bomb-finals/",
                    "guid":             "http://www.cincyartsguide.com/event/louder-than-a-bomb-finals/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2330",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/organization-featured-Linton-Chamber-Music-1441903215.jpeg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/primary-Madcap-Music-Making---Peanut-Butter---Jam-Sessions-1441987268.jpeg",
                    "eventName":        "Madcap Music-Making - Peanut Butter...",
                    "eventDateBegin":   "04-09-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": [{
                            "date":        "Sat-Apr-9-2016",
                            "time":        "10:00 am",
                            "timestamp":   "1460196000",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }, {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "11:30 am",
                            "timestamp":   "1460201400",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }]
                    },
                    "orgID":            "1981",
                    "orgName":          "Linton Chamber Music",
                    "eventUrl":         "http://www.cincyartsguide.com/event/linton-musics-peanut-butter-jam-sessions-9/",
                    "venueID":          "2444",
                    "venueName":        "Heritage Presbyterian Church",
                    "venueAddress1":    "6546 S. Mason-Montgomery Rd",
                    "venueAddress2":    "",
                    "venueCity":        "Mason",
                    "venueState":       "OH",
                    "venueZip":         "45040",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "$5.00 per person or $15.00 for Flex-Book of 4 tickets good at any PB&J concert. Children under 2 are free!",
                    "eventPhone1":      "",
                    "eventEmail":       "info@lintonmusic.org",
                    "eventTicketUrl":   "http://lintonmusic.org",
                    "discountUrl":      "",
                    "eventStartTime":   "Each concert lasts approximately 40 minutes.",
                    "eventType":        "Kids Family",
                    "secondaryType":    "Music, Classical + Symphonic, For Kids, ArtsPass Deals, Family, Kids, Music, COncert, For Tots",
                    "eventSummary":     "Peanut Butter &amp; Jam Sessions Presents Madcap Music-Making: The Story of the Frog Prince - Our warm and fuzzy friends from Madcap Puppets help tell the story of The Frog Prince through the music of Brahms! Don’t miss the “ribbiting” music, storytelling, and fun!",
                    "eventDescription": "<strong>Peanut Butter &amp; Jam Sessions<\/strong> brings families together for a musical encounter that provides a friendly, educational, and enjoyable introduction to classical music. Designed for ages two to six, these interactive concerts will touch, teach, and enrich your child&rsquo;s life. During PB&amp;J performances, children are invited to sit on the floor, close to the performers, allowing them to be part of the action. To enhance the experience for young children, a music educator hosts each concert, leading movement, dances, beat patterns, songs, and Q&amp;A. At the end of the concert, families are invited to meet the performers and get an up-close introduction to their instruments. And thanks to Graeter&rsquo;s, each child receives a free cookie after the session! All PB&amp;J concerts (except where noted on the schedule) take place on Saturday mornings at 10:00am and 11:30am, and each concert lasts approximately 40 minutes.<br />&nbsp;<br />&nbsp;",
                    "datePosted":       "2015-09-09 14:31:14",
                    "link":             "http://www.cincyartsguide.com/event/linton-musics-peanut-butter-jam-sessions-9/",
                    "guid":             "http://www.cincyartsguide.com/event/linton-musics-peanut-butter-jam-sessions-9/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2535",
                    "spotlight":        "false",
                    "featured":         "true",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/08/cso.png",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/primary-Latin-Passion---Cincinnati-Symphony-Orchestra-1441829971.png",
                    "eventName":        "Latin Passion - Cincinnati Symphony Orchestra",
                    "eventDateBegin":   "04-08-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Friday,Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "8:00 pm",
                            "timestamp":   "1460232000",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }
                    },
                    "orgID":            "89",
                    "orgName":          "Cincinnati Symphony Orchestra",
                    "eventUrl":         "http://www.cincyartsguide.com/event/latin-passion-cincinnati-symphony-orchestra/",
                    "venueID":          "1796",
                    "venueName":        "Music Hall",
                    "venueAddress1":    "1241 Elm Street",
                    "venueAddress2":    "",
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Tickets start at $12. Discounted tickets available for seniors, under 30 & full-time students, and military.",
                    "eventPhone1":      "(513) 744-3258",
                    "eventEmail":       "information@cincinnatisymphony.org",
                    "eventTicketUrl":   "https://my.cincinnatisymphony.org/single/SelectSeating.aspx?p=5832",
                    "discountUrl":      "",
                    "eventStartTime":   "Classical Conversations begins at 7 PM in the Music Hall Auditorium prior to these performances.",
                    "eventType":        "Music",
                    "secondaryType":    "Classical + Symphonic, Opera + Vocal, Reggae + World Music, ArtsPass Deals, COncert, CSO, Orchestra, Classical Music, Symphony, May Festival Chorus, latin music, Pablo Villegas, guitar, Spanish guitar, Juanjo Mena",
                    "eventSummary":     "Juanjo Mena returns by popular demand to conduct Falla’s La vida breve (“The Brief Life”), featuring massive orchestral forces, flamenco dancing and a colorful score in what is sure to be one of the season’s can’t-miss highlights.",
                    "eventDescription": "The “soulful” Spanish guitarist Pablo Villegas, who was recently praised for his “thoughtful phrasing and gorgeous coloring” (<em>Pittsburgh Post-Gazette<\/em>), performs Rodrigo’s lighthearted and exceptionally lovely Fantasia for a Gentleman.\n\n<strong>Program<\/strong>\n\n<strong>RODRIGO<\/strong>: <em>Fantasía para un Gentilhombre<\/em>\n<strong>FALLA<\/strong>: <em>La vida breve<\/em>",
                    "datePosted":       "2015-09-09 20:30:50",
                    "link":             "http://www.cincyartsguide.com/event/latin-passion-cincinnati-symphony-orchestra/",
                    "guid":             "http://www.cincyartsguide.com/event/latin-passion-cincinnati-symphony-orchestra/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2838",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/Heads-Will-Roll-KYSO-pic1.jpg",
                    "eventName":        "Heads Will Roll",
                    "eventDateBegin":   "04-09-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "7:30 pm",
                            "timestamp":   "1460230200",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }
                    },
                    "orgID":            "2736",
                    "orgName":          "Kentucky Symphony Orchestra",
                    "eventUrl":         "http://www.cincyartsguide.com/event/heads-will-roll/",
                    "venueID":          "1810",
                    "venueName":        "Northern Kentucky University Greaves Concert Hall",
                    "venueAddress1":    "",
                    "venueAddress2":    "",
                    "venueCity":        "Highland Heights",
                    "venueState":       "KY",
                    "venueZip":         "41099",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Tickets are available online, by phone, or at the door. \nReserved seating tickets are $19-$35 (children ages 6-18 are 50% off)",
                    "eventPhone1":      "859-431-6216",
                    "eventEmail":       "info@kyso.org",
                    "eventTicketUrl":   "https://red.vendini.com/ticket-software.html?t=tix&e=74a1e8ba51393f44ee5c806de94202b6",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Music",
                    "secondaryType":    "Classical + Symphonic",
                    "eventSummary":     "",
                    "eventDescription": "Pleasing the party in power was good not only for business, but for one’s health in the USSR under Joseph Stalin. After Stalin’s death in 1953, composer Dimitri Shostakovich could write music without fear of reprisal and denunciation. In the spirit of artistic freedom, the evening will include a “dunk the dictator” tank on the Greaves Concert Hall commons during intermission and a post-concert vodka tasting / meet and greet.\n\n&nbsp;",
                    "datePosted":       "2015-09-16 13:54:20",
                    "link":             "http://www.cincyartsguide.com/event/heads-will-roll/",
                    "guid":             "http://www.cincyartsguide.com/event/heads-will-roll/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "6579",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "",
                    "eventImage":       "",
                    "eventName":        "Mountains Meet the Midwest: A Choral Collaboration",
                    "eventDateBegin":   "04-09-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "7:30 pm",
                            "timestamp":   "1460230200",
                            "date_filter": "20160409",
                            "end_time":    "9:00 pm",
                            "duration":    "5400"
                        }
                    },
                    "orgID":            "",
                    "orgName":          "Christ Church Cathedral",
                    "eventUrl":         "http://www.cincyartsguide.com/event/mountains-meet-the-midwest-a-choral-collaboration/",
                    "venueID":          "2935",
                    "venueName":        "Christ Church Cathedral",
                    "venueAddress1":    "318 E 4th Street",
                    "venueAddress2":    "",
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "No tickets required; suggested $10 donation",
                    "eventPhone1":      "513-621-1817",
                    "eventEmail":       "",
                    "eventTicketUrl":   "http://www.cincinnaticathedral.com",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Music",
                    "secondaryType":    "",
                    "eventSummary":     "Cincinnati Fusion Ensemble and Cantorum Chamber Choir to Perform at Christ Church Cathedral",
                    "eventDescription": "<strong>Cincinnati Fusion Ensemble and Cantorum Chamber Choir to Perform at Christ Church Cathedral<\/strong>\n\n<strong>Mountains Meet the Midwest: A Choral Collaboration<\/strong>. Cincinnati Fusion Ensemble and Cantorum Chamber Choir will perform at Christ Church Cathedral, Fourth &amp; Sycamore, downtown Cincinnati, on Saturday, April 9, at 7:30 p.m.\n\nCincinnati Fusion Ensemble joins Utah&rsquo;s premier early music ensemble Cantorum Chamber Choir and organist Raymond Nagem from the Cathedral of St. John the Divine in New York City for this performance. The choirs will celebrate their inaugural collaboration with a program of music highlighting a broad stylistic palette.\n\nNo tickets required; suggested $10 donation.\n\nFor more information, visit <a href=\"http://www.cincinnaticathedral.com\">www.cincinnaticathedral.com<\/a> or call 513-621-1817.\n\n###\n\n&nbsp;\n\n<!--[if gte mso 9]&gt;rn rn  Normalrn  0rn  rn  rn  rn  rn  falsern  falsern  falsern  rn  EN-USrn  X-NONErn  X-NONErn  rn   rn   rn   rn   rn   rn   rn   rn   rn   rn  rn  MicrosoftInternetExplorer4rn  rn   rn   rn   rn   rn   rn   rn   rn   rn   rn   rn   rn  rn&lt;![endif]--><!--[if gte mso 9]&gt;rn rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn rn&lt;![endif]--><!--[if gte mso 10]&gt;rnrn /* Style Definitions */rn table.MsoNormalTablern\t{mso-style-name:\"Table Normal\";rn\tmso-tstyle-rowband-size:0;rn\tmso-tstyle-colband-size:0;rn\tmso-style-noshow:yes;rn\tmso-style-priority:99;rn\tmso-style-parent:\"\";rn\tmso-padding-alt:0in 5.4pt 0in 5.4pt;rn\tmso-para-margin:0in;rn\tmso-para-margin-bottom:.0001pt;rn\tmso-pagination:widow-orphan;rn\tfont-size:10.0pt;rn\tfont-family:\"Times New Roman\",serif;}rnrn&lt;![endif]-->",
                    "datePosted":       "2016-03-22 15:25:58",
                    "link":             "http://www.cincyartsguide.com/event/mountains-meet-the-midwest-a-choral-collaboration/",
                    "guid":             "http://www.cincyartsguide.com/event/mountains-meet-the-midwest-a-choral-collaboration/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "5767",
                    "spotlight":        "true",
                    "featured":         "true",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/organization-featured-Shaun-Higgins-1441738560.jpeg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2016/02/primary-The-Museum-Gallery-Series-Presents--Artist-Lounge--Sharing-the-Visual-Language-of-Art-1455723732.png",
                    "eventName":        "The Museum Gallery Series Presents: Artist Lounge- Sharing the Visual Language of Art",
                    "eventDateBegin":   "03-18-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Friday,Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "12:00 pm",
                            "timestamp":   "1460203200",
                            "date_filter": "20160409",
                            "end_time":    "5:00 pm",
                            "duration":    "18000"
                        }
                    },
                    "orgID":            "2367",
                    "orgName":          "Pyramid Hill Sculpture Park &amp; Museum",
                    "eventUrl":         "http://www.cincyartsguide.com/event/the-museum-gallery-series-presents-artist-lounge-sharing-the-visual-language-of-art/",
                    "venueID":          "2380",
                    "venueName":        "Pyramid Hill Sculpture Park &amp; Museum",
                    "venueAddress1":    "1763 Hamilton Cleves Rd.",
                    "venueAddress2":    "",
                    "venueCity":        "Hamilton",
                    "venueState":       "OH",
                    "venueZip":         "45013",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Free Opening Reception to the public.\nDuring regular park hours it will be $8 admission for adults and $3 for children 6-12 to see the exhibition.",
                    "eventPhone1":      "",
                    "eventEmail":       "",
                    "eventTicketUrl":   "",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Museums + Visual Art",
                    "secondaryType":    "Museums, Galleries",
                    "eventSummary":     "",
                    "eventDescription": "<strong>Artist Lounge at Pyramid Hill<\/strong>\n\nOpening Reception: Friday March 18th\n\nThe exhibition is open March 18th- April 9th, 2016\n\nArt sparks creativity and innovation! Research has found a correlation between high concentrations of the arts and greater levels of civic engagement within communities. The Artist Lounge Group Show is involved in this engagement. The Artist Lounge is a local artist co-op filled with local Cincinnati area artists. There are two Artist Lounges in the area, with one in Hamilton and the original in Mason. The Artist Lounges are located inside Pop Revolution Galleries. In this exhibit, you will be able to enjoy artist diversity with the display of different mediums and styles of visual art.",
                    "datePosted":       "2016-02-17 14:04:19",
                    "link":             "http://www.cincyartsguide.com/event/the-museum-gallery-series-presents-artist-lounge-sharing-the-visual-language-of-art/",
                    "guid":             "http://www.cincyartsguide.com/event/the-museum-gallery-series-presents-artist-lounge-sharing-the-visual-language-of-art/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "5805",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/organization-featured-Shaun-Higgins-1441738560.jpeg",
                    "eventImage":       "",
                    "eventName":        "Slow Art Day at Pyramid Hill Sculpture Park&amp; Museum",
                    "eventDateBegin":   "04-09-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "10:00 am",
                            "timestamp":   "1460196000",
                            "date_filter": "20160409",
                            "end_time":    "1:00 pm",
                            "duration":    "10800"
                        }
                    },
                    "orgID":            "2367",
                    "orgName":          "Pyramid Hill Sculpture Park &amp; Museum",
                    "eventUrl":         "http://www.cincyartsguide.com/event/slow-art-day-at-pyramid-hill-sculpture-park-museum/",
                    "venueID":          "2380",
                    "venueName":        "Pyramid Hill Sculpture Park &amp; Museum",
                    "venueAddress1":    "1763 Hamilton Cleves Rd.",
                    "venueAddress2":    "",
                    "venueCity":        "Hamilton",
                    "venueState":       "OH",
                    "venueZip":         "45013",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "The programs is free with park admission; $8 for adults and $3 for children ages 5-12.",
                    "eventPhone1":      "",
                    "eventEmail":       "",
                    "eventTicketUrl":   "",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Kids Family",
                    "secondaryType":    "Museums + Visual Art, Art Walks + Public Art, observation, art study",
                    "eventSummary":     "",
                    "eventDescription": "<strong>Why slow?<\/strong>\n\nWhen people look slowly at a piece of art they make discoveries.\n\nThe most important discovery they make is that they can see and experience art without an expert (or expertise). And that’s an exciting discovery. It unlocks passion and creativity and helps to create more art fans.\n\n<strong> How Does It work?<\/strong>\n\nOne day each year – April 9 in 2016 – people all over the world visit local museums and galleries to look at art slowly. Participants look at five works of art for 10 minutes each and then meet together over lunch to talk about their experience. That’s it. Simple by design, the goal is to focus on the art and the art of seeing.\n\n&nbsp;\n\n&nbsp;\n<ul>\n\t<li>Pyramid Hill -10:00am – 1:00pm<\/li>\n\t<li>Meet at the visitor Center to receive a map to five pieces of sculpture and discussion questions.<\/li>\n\t<li>View each piece for 5-10 minutes, slowly.<\/li>\n\t<li>Meet to have lunch and discuss your experience.<\/li>\n\t<li>Judy Jarvis will be your host.<\/li>\n\t<li>Bring a brown-bag lunch. Water will be provided.<\/li>\n<\/ul>\nPlease go to our website to register!\n\nhttp://pyramidhill.org/slow-art-day/\n\n&nbsp;\n\n&nbsp;",
                    "datePosted":       "2016-02-19 09:34:12",
                    "link":             "http://www.cincyartsguide.com/event/slow-art-day-at-pyramid-hill-sculpture-park-museum/",
                    "guid":             "http://www.cincyartsguide.com/event/slow-art-day-at-pyramid-hill-sculpture-park-museum/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "3682",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2015/09/organization-featured-Sean-Mette-1441218913.jpeg",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2016/03/primary-Family-Performance-Series--Under-the-Bonsai-Tree---Madcap-Puppets-1458163347.jpeg",
                    "eventName":        "Family Performance Series: Under the Bonsai Tree - Madcap Puppets",
                    "eventDateBegin":   "04-09-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "7:00 pm",
                            "timestamp":   "1460228400",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }
                    },
                    "orgID":            "2071",
                    "orgName":          "Madcap Puppets",
                    "eventUrl":         "http://www.cincyartsguide.com/event/family-performance-series-under-the-bonsai-tree-madcap-puppets/",
                    "venueID":          "1887",
                    "venueName":        "Oxford Community Arts Center",
                    "venueAddress1":    "10 S College Ave",
                    "venueAddress2":    "",
                    "venueCity":        "Oxford",
                    "venueState":       "OH",
                    "venueZip":         "45056",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Freern",
                    "eventPhone1":      "513-524-8506",
                    "eventEmail":       "",
                    "eventTicketUrl":   "",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Kids Family",
                    "secondaryType":    "For Kids, Comedy, Oxford, puppets, Theater",
                    "eventSummary":     "When it’s time for Ko, a little beetle, to say goodbye to the safety and comfort under the bonsai, he must confront his fears of leaving the only home he has ever known.",
                    "eventDescription": "Welcome to the wonderful world of the bonsai tree! When it&rsquo;s time for Ko, a little beetle, to say goodbye to the safety and comfort under the bonsai, he must confront his fears of leaving the only home he has ever known. His caretaker, a tiny old woman named Hachi, reveals how strength and courage can come from the humblest of creatures. her captivating tales from the far east show Ko that even the power of dragons and emperors can be no match for the smallest and unlikeliest heroes. Stories include:&nbsp;The Magic Cooking Pot, Three Samurai Cats&nbsp;and&nbsp;Emperor and the Dragons.<br /><br />&nbsp;",
                    "datePosted":       "2015-09-25 06:23:36",
                    "link":             "http://www.cincyartsguide.com/event/family-performance-series-under-the-bonsai-tree-madcap-puppets/",
                    "guid":             "http://www.cincyartsguide.com/event/family-performance-series-under-the-bonsai-tree-madcap-puppets/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "5874",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "",
                    "eventImage":       "http://www.cincyartsguide.com/wp-content/uploads/sites/www.cincyartsguide.com/images/2016/02/primary-Cincinnati-Rollergirls-4th-Annual-Bullies-at-the-Bout-1456097794.jpeg",
                    "eventName":        "Cincinnati Rollergirls 4th Annual Bullies at the Bout",
                    "eventDateBegin":   "04-09-2016",
                    "eventDateEnd":     "04-09-2016",
                    "eventDays":        "Saturday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "6:00 pm",
                            "timestamp":   "1460224800",
                            "date_filter": "20160409",
                            "end_time":    "9:30 pm",
                            "duration":    "12600"
                        }
                    },
                    "orgID":            "",
                    "orgName":          "Cincinnati Rollergirls",
                    "eventUrl":         "http://www.cincyartsguide.com/event/cincinnati-rollergirls-4th-annual-bullies-at-the-bout/",
                    "venueID":          "",
                    "venueName":        "Cincinnati Gardens",
                    "venueAddress1":    "2250 Seymour Avenue",
                    "venueAddress2":    "",
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45212",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Adult general admission tickets: $12 in advance, $14 at the door\nAdult trackside tickets (18 and older only): $15 in advance, $17 at the door\nKids 7-12: $5 in advance, $6 at the door\nKids 6 and younger: Free",
                    "eventPhone1":      "",
                    "eventEmail":       "pr@cincinnatirollergirls.com",
                    "eventTicketUrl":   "http://www.ticketmaster.com/Cincinnati-Rollergirls-tickets/artist/1119002",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Community Arts",
                    "secondaryType":    "Kids Family, roller derby, derby, amateur sports, full contact, pit, pit bull, pet, dog, rescue, sport",
                    "eventSummary":     "The Cincinnati Rollergirls &amp; Cincinnati Pit Crew",
                    "eventDescription": "The Cincinnati Rollergirls' second game of the 2016 season at the Cincinnati Gardens will feature the <a href=\"http://www.cincinnatipitcrew.org/\" target=\"_blank\">Cincinnati Pit Crew's<\/a> fourth annual Bullies at the Bout event, with adoptable dogs, educational literature, merchandise and more. (Note: Personal dogs are not permitted at this event.)",
                    "datePosted":       "2016-03-02 13:10:40",
                    "link":             "http://www.cincyartsguide.com/event/cincinnati-rollergirls-4th-annual-bullies-at-the-bout/",
                    "guid":             "http://www.cincyartsguide.com/event/cincinnati-rollergirls-4th-annual-bullies-at-the-bout/",
                    "source":           "www.cincyartsguide.com"
                }]
            }
        };
    }

    onPageDidEnter() {
        console.log("here")

        this.local.getItem('favs').then(function(result) {
            var favs = result || [];
            this.events = [];
            console.log(favs);
            if (this.data.events && this.data.events.event) {
                try {
                    for (var idx in this.data.events.event) {
                        var d = this.data.events.event[idx]
                        this.events.push({
                            id:             d.eventID,
                            fav:            favs.indexOf(d.eventId) > -1,
                            eventName:      d.eventName ? d.eventName : "(Untitled)",
                            eventImage:     d.eventImage ? d.eventImage : "",
                            eventVenueName: d.venueName ? d.venueName : "",
                            eventDate:      (Array.isArray(
                                d.eventDatesTimes)) ? d.eventDatesTimes[0].date : d.eventDatesTimes.datetime.date ? d.eventDatesTimes.datetime.date : "",
                            eventTime:      (Array.isArray(
                                d.eventDatesTimes)) ? d.eventDatesTimes[0].time : d.eventDatesTimes.datetime.time ? d.eventDatesTimes.datetime.time : "",
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
        });

    }
}
