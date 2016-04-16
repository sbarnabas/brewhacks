import {Page, NavController, NavParams} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";

@Page({
    templateUrl: 'build/pages/my-events/my-events.html'
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
        if (this.data.events && this.data.events.event) {
            try {
                for (var idx in this.data.events.event) {
                    var d = this.data.events.event[idx]
                    this.items.push({
                        title: d.eventName ? d.eventName : "(Untitled)",
                        image: d.eventImage ? d.eventImage : "",
                        note:  d.eventDescription ? d.eventDescription : "None"
                    });
                }

            } catch (ex) {
                console.log(ex);
            }
        }
    }

    itemRemove(event, item) {
        var idx = this.items.indexOf(item);
        if (idx > -1) {
            this.items.splice(idx, 1);
        }
    }

    itemTapped(event, item) {
        this.nav.push(ItemDetailsPage, {
            item: item
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
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2016\/03\/primary-Milford-Theatre-Guilde-presents-The-Importance-of-Being-Earnest-1458072163.jpeg",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/milford-theatre-guilde-presents-the-importance-of-being-earnest\/",
                    "venueID":          "",
                    "venueName":        "",
                    "venueAddress1":    "",
                    "venueAddress2":    "",
                    "venueCity":        "0",
                    "venueState":       "0",
                    "venueZip":         "0",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "For tickets, visit milfordtheatreguilde.org or call 513-575-9351rn$14 for Adults, $12 for Children\/Seniors\/Military",
                    "eventPhone1":      "513-476-2230",
                    "eventEmail":       "",
                    "eventTicketUrl":   "http:\/\/www.milfordtheatreguilde.org\/",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Theatre",
                    "secondaryType":    "Comedy, Drama, Community Arts",
                    "eventSummary":     "In 1890s London, two friends use the same pseudonym (\u201cErnest\u201d) for their on-the-sly activities. Hilarity and romance ensue!",
                    "eventDescription": "In 1890s London, two friends use the same pseudonym (\u201cErnest\u201d) for their on-the-sly activities. Hilarity ensues.\n\nDirected by Ian Tinney\nProduced by R&amp;R Productions\n\nStephen Beck as Lane\/Merriman\n\nStormi Bledsoe as Gwendolen Fairfax\n\nAdrianna Boris as Cecily Cardew\n\nNick Castle as Algernon \u201cAlgy\u201d Montcrieff\n\nBecky Cole as Miss Prism\n\nKelly Geoppinger as Lady Bracknell\n\nMichael R. Kiser as John \u201cJack\u201d Worthing\n\nKent F. Smith as Dr. Chasuble",
                    "datePosted":       "2016-03-16 14:41:21",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/milford-theatre-guilde-presents-the-importance-of-being-earnest\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/milford-theatre-guilde-presents-the-importance-of-being-earnest\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "6759",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/10\/organization-featured-Tom-Kent-1445017613.jpeg",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2016\/04\/primary-Louder-Than-A-Bomb-Finals-1459726565.jpeg",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/louder-than-a-bomb-finals\/",
                    "venueID":          "1802",
                    "venueName":        "School of Creative and Performing Arts Corbett Theatre",
                    "venueAddress1":    "108 West Central Parkway",
                    "venueAddress2":    "",
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Free..........you must register for tickets here: https:\/\/www.eventbrite.com\/e\/2016-louder-than-a-bomb-finals-corbett-theater-scpa-tickets-22063384176",
                    "eventPhone1":      "513-721-5800",
                    "eventEmail":       "info@elementz.org",
                    "eventTicketUrl":   "https:\/\/www.eventbrite.com\/e\/2016-louder-than-a-bomb-finals-corbett-theater-scpa-tickets-22063384176",
                    "discountUrl":      "",
                    "eventStartTime":   "Doors Open at 5:30",
                    "eventType":        "Free Events",
                    "secondaryType":    "Theatre, Music, R&amp;B, Soul + Hip Hop, Culture, Heritage + Festivals, Young Professionals, Kids Family, For Kids, For Teens, ArtsPass Deals, Drama, CincYPerks Offers, Community Arts, #Elementzhiphop, #LTABCINCY, #hottestcollegeinamerica",
                    "eventSummary":     "Youth Spoken Word contest",
                    "eventDescription": "Join us for Louder Than A Bomb \u2013 Cincinnati, as we give voice and a platform to today's youth. Be a part of the largest poetry slam contest on the face of the earth and make a difference in the Queen City! Witness the hip hop spoken word, the stories, and the truth of Cincinnati.",
                    "datePosted":       "2016-04-04 15:46:17",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/louder-than-a-bomb-finals\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/louder-than-a-bomb-finals\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2330",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/organization-featured-Linton-Chamber-Music-1441903215.jpeg",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/primary-Madcap-Music-Making---Peanut-Butter---Jam-Sessions-1441987268.jpeg",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/linton-musics-peanut-butter-jam-sessions-9\/",
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
                    "eventTicketUrl":   "http:\/\/lintonmusic.org",
                    "discountUrl":      "",
                    "eventStartTime":   "Each concert lasts approximately 40 minutes.",
                    "eventType":        "Kids Family",
                    "secondaryType":    "Music, Classical + Symphonic, For Kids, ArtsPass Deals, Family, Kids, Music, COncert, For Tots",
                    "eventSummary":     "Peanut Butter &amp; Jam Sessions Presents Madcap Music-Making: The Story of the Frog Prince - Our warm and fuzzy friends from Madcap Puppets help tell the story of The Frog Prince through the music of Brahms! Don\u2019t miss the \u201cribbiting\u201d music, storytelling, and fun!",
                    "eventDescription": "<strong>Peanut Butter &amp; Jam Sessions<\/strong> brings families together for a musical encounter that provides a friendly, educational, and enjoyable introduction to classical music. Designed for ages two to six, these interactive concerts will touch, teach, and enrich your child&rsquo;s life. During PB&amp;J performances, children are invited to sit on the floor, close to the performers, allowing them to be part of the action. To enhance the experience for young children, a music educator hosts each concert, leading movement, dances, beat patterns, songs, and Q&amp;A. At the end of the concert, families are invited to meet the performers and get an up-close introduction to their instruments. And thanks to Graeter&rsquo;s, each child receives a free cookie after the session! All PB&amp;J concerts (except where noted on the schedule) take place on Saturday mornings at 10:00am and 11:30am, and each concert lasts approximately 40 minutes.<br \/>&nbsp;<br \/>&nbsp;",
                    "datePosted":       "2015-09-09 14:31:14",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/linton-musics-peanut-butter-jam-sessions-9\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/linton-musics-peanut-butter-jam-sessions-9\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2535",
                    "spotlight":        "false",
                    "featured":         "true",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/08\/cso.png",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/primary-Latin-Passion---Cincinnati-Symphony-Orchestra-1441829971.png",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/latin-passion-cincinnati-symphony-orchestra\/",
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
                    "eventTicketUrl":   "https:\/\/my.cincinnatisymphony.org\/single\/SelectSeating.aspx?p=5832",
                    "discountUrl":      "",
                    "eventStartTime":   "Classical Conversations begins at 7 PM in the Music Hall Auditorium prior to these performances.",
                    "eventType":        "Music",
                    "secondaryType":    "Classical + Symphonic, Opera + Vocal, Reggae + World Music, ArtsPass Deals, COncert, CSO, Orchestra, Classical Music, Symphony, May Festival Chorus, latin music, Pablo Villegas, guitar, Spanish guitar, Juanjo Mena",
                    "eventSummary":     "Juanjo Mena returns by popular demand to conduct Falla\u2019s La vida breve (\u201cThe Brief Life\u201d), featuring massive orchestral forces, flamenco dancing and a colorful score in what is sure to be one of the season\u2019s can\u2019t-miss highlights.",
                    "eventDescription": "The \u201csoulful\u201d Spanish guitarist Pablo Villegas, who was recently praised for his \u201cthoughtful phrasing and gorgeous coloring\u201d (<em>Pittsburgh Post-Gazette<\/em>), performs Rodrigo\u2019s lighthearted and exceptionally lovely Fantasia for a Gentleman.\n\n<strong>Program<\/strong>\n\n<strong>RODRIGO<\/strong>: <em>Fantas\u00eda para un Gentilhombre<\/em>\n<strong>FALLA<\/strong>: <em>La vida breve<\/em>",
                    "datePosted":       "2015-09-09 20:30:50",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/latin-passion-cincinnati-symphony-orchestra\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/latin-passion-cincinnati-symphony-orchestra\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2838",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/Heads-Will-Roll-KYSO-pic1.jpg",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/heads-will-roll\/",
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
                    "eventTicketUrl":   "https:\/\/red.vendini.com\/ticket-software.html?t=tix&e=74a1e8ba51393f44ee5c806de94202b6",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Music",
                    "secondaryType":    "Classical + Symphonic",
                    "eventSummary":     "",
                    "eventDescription": "Pleasing the party in power was good not only for business, but for one\u2019s health in the USSR under Joseph Stalin. After Stalin\u2019s death in 1953, composer Dimitri Shostakovich could write music without fear of reprisal and denunciation. In the spirit of artistic freedom, the evening will include a \u201cdunk the dictator\u201d tank on the Greaves Concert Hall commons during intermission and a post-concert vodka tasting \/ meet and greet.\n\n&nbsp;",
                    "datePosted":       "2015-09-16 13:54:20",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/heads-will-roll\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/heads-will-roll\/",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/mountains-meet-the-midwest-a-choral-collaboration\/",
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
                    "eventTicketUrl":   "http:\/\/www.cincinnaticathedral.com",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Music",
                    "secondaryType":    "",
                    "eventSummary":     "Cincinnati Fusion Ensemble and Cantorum Chamber Choir to Perform at Christ Church Cathedral",
                    "eventDescription": "<strong>Cincinnati Fusion Ensemble and Cantorum Chamber Choir to Perform at Christ Church Cathedral<\/strong>\n\n<strong>Mountains Meet the Midwest: A Choral Collaboration<\/strong>. Cincinnati Fusion Ensemble and Cantorum Chamber Choir will perform at Christ Church Cathedral, Fourth &amp; Sycamore, downtown Cincinnati, on Saturday, April 9, at 7:30 p.m.\n\nCincinnati Fusion Ensemble joins Utah&rsquo;s premier early music ensemble Cantorum Chamber Choir and organist Raymond Nagem from the Cathedral of St. John the Divine in New York City for this performance. The choirs will celebrate their inaugural collaboration with a program of music highlighting a broad stylistic palette.\n\nNo tickets required; suggested $10 donation.\n\nFor more information, visit <a href=\"http:\/\/www.cincinnaticathedral.com\">www.cincinnaticathedral.com<\/a> or call 513-621-1817.\n\n###\n\n&nbsp;\n\n<!--[if gte mso 9]&gt;rn rn  Normalrn  0rn  rn  rn  rn  rn  falsern  falsern  falsern  rn  EN-USrn  X-NONErn  X-NONErn  rn   rn   rn   rn   rn   rn   rn   rn   rn   rn  rn  MicrosoftInternetExplorer4rn  rn   rn   rn   rn   rn   rn   rn   rn   rn   rn   rn   rn  rn&lt;![endif]--><!--[if gte mso 9]&gt;rn rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn  rn rn&lt;![endif]--><!--[if gte mso 10]&gt;rnrn \/* Style Definitions *\/rn table.MsoNormalTablern\t{mso-style-name:\"Table Normal\";rn\tmso-tstyle-rowband-size:0;rn\tmso-tstyle-colband-size:0;rn\tmso-style-noshow:yes;rn\tmso-style-priority:99;rn\tmso-style-parent:\"\";rn\tmso-padding-alt:0in 5.4pt 0in 5.4pt;rn\tmso-para-margin:0in;rn\tmso-para-margin-bottom:.0001pt;rn\tmso-pagination:widow-orphan;rn\tfont-size:10.0pt;rn\tfont-family:\"Times New Roman\",serif;}rnrn&lt;![endif]-->",
                    "datePosted":       "2016-03-22 15:25:58",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/mountains-meet-the-midwest-a-choral-collaboration\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/mountains-meet-the-midwest-a-choral-collaboration\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "5767",
                    "spotlight":        "true",
                    "featured":         "true",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/organization-featured-Shaun-Higgins-1441738560.jpeg",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2016\/02\/primary-The-Museum-Gallery-Series-Presents--Artist-Lounge--Sharing-the-Visual-Language-of-Art-1455723732.png",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/the-museum-gallery-series-presents-artist-lounge-sharing-the-visual-language-of-art\/",
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
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/the-museum-gallery-series-presents-artist-lounge-sharing-the-visual-language-of-art\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/the-museum-gallery-series-presents-artist-lounge-sharing-the-visual-language-of-art\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "5805",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/organization-featured-Shaun-Higgins-1441738560.jpeg",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/slow-art-day-at-pyramid-hill-sculpture-park-museum\/",
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
                    "eventDescription": "<strong>Why slow?<\/strong>\n\nWhen people look slowly at a piece of art they make discoveries.\n\nThe most important discovery they make is that they can see and experience art without an expert (or expertise). And that\u2019s an exciting discovery. It unlocks passion and creativity and helps to create more art fans.\n\n<strong> How Does It work?<\/strong>\n\nOne day each year \u2013 April 9 in 2016 \u2013 people all over the world visit local museums and galleries to look at art slowly. Participants look at five works of art for 10 minutes each and then meet together over lunch to talk about their experience. That\u2019s it. Simple by design, the goal is to focus on the art and the art of seeing.\n\n&nbsp;\n\n&nbsp;\n<ul>\n\t<li>Pyramid Hill -10:00am \u2013 1:00pm<\/li>\n\t<li>Meet at the visitor Center to receive a map to five pieces of sculpture and discussion questions.<\/li>\n\t<li>View each piece for 5-10 minutes, slowly.<\/li>\n\t<li>Meet to have lunch and discuss your experience.<\/li>\n\t<li>Judy Jarvis will be your host.<\/li>\n\t<li>Bring a brown-bag lunch. Water will be provided.<\/li>\n<\/ul>\nPlease go to our website to register!\n\nhttp:\/\/pyramidhill.org\/slow-art-day\/\n\n&nbsp;\n\n&nbsp;",
                    "datePosted":       "2016-02-19 09:34:12",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/slow-art-day-at-pyramid-hill-sculpture-park-museum\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/slow-art-day-at-pyramid-hill-sculpture-park-museum\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "3682",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/organization-featured-Sean-Mette-1441218913.jpeg",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2016\/03\/primary-Family-Performance-Series--Under-the-Bonsai-Tree---Madcap-Puppets-1458163347.jpeg",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/family-performance-series-under-the-bonsai-tree-madcap-puppets\/",
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
                    "eventSummary":     "When it\u2019s time for Ko, a little beetle, to say goodbye to the safety and comfort under the bonsai, he must confront his fears of leaving the only home he has ever known.",
                    "eventDescription": "Welcome to the wonderful world of the bonsai tree! When it&rsquo;s time for Ko, a little beetle, to say goodbye to the safety and comfort under the bonsai, he must confront his fears of leaving the only home he has ever known. His caretaker, a tiny old woman named Hachi, reveals how strength and courage can come from the humblest of creatures. her captivating tales from the far east show Ko that even the power of dragons and emperors can be no match for the smallest and unlikeliest heroes. Stories include:&nbsp;The Magic Cooking Pot, Three Samurai Cats&nbsp;and&nbsp;Emperor and the Dragons.<br \/><br \/>&nbsp;",
                    "datePosted":       "2015-09-25 06:23:36",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/family-performance-series-under-the-bonsai-tree-madcap-puppets\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/family-performance-series-under-the-bonsai-tree-madcap-puppets\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "5874",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2016\/02\/primary-Cincinnati-Rollergirls-4th-Annual-Bullies-at-the-Bout-1456097794.jpeg",
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
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/cincinnati-rollergirls-4th-annual-bullies-at-the-bout\/",
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
                    "eventTicketUrl":   "http:\/\/www.ticketmaster.com\/Cincinnati-Rollergirls-tickets\/artist\/1119002",
                    "discountUrl":      "",
                    "eventStartTime":   "",
                    "eventType":        "Community Arts",
                    "secondaryType":    "Kids Family, roller derby, derby, amateur sports, full contact, pit, pit bull, pet, dog, rescue, sport",
                    "eventSummary":     "The Cincinnati Rollergirls &amp; Cincinnati Pit Crew",
                    "eventDescription": "The Cincinnati Rollergirls' second game of the 2016 season at the Cincinnati Gardens will feature the <a href=\"http:\/\/www.cincinnatipitcrew.org\/\" target=\"_blank\">Cincinnati Pit Crew's<\/a> fourth annual Bullies at the Bout event, with adoptable dogs, educational literature, merchandise and more. (Note: Personal dogs are not permitted at this event.)",
                    "datePosted":       "2016-03-02 13:10:40",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/cincinnati-rollergirls-4th-annual-bullies-at-the-bout\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/cincinnati-rollergirls-4th-annual-bullies-at-the-bout\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2229",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/organization-featured-Clifton-Cultural-Arts-Center-1441914538.png",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/primary-Second-Sunday-Family-Showtime-1441218482.png",
                    "eventName":        "Second Sunday Family Showtime",
                    "eventDateBegin":   "04-10-2016",
                    "eventDateEnd":     "04-10-2016",
                    "eventDays":        "Sunday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": {
                            "date":        "Sun-Apr-10-2016",
                            "time":        "2:00 pm",
                            "timestamp":   "1460296800",
                            "date_filter": "20160410",
                            "end_time":    "3:00 pm",
                            "duration":    "3600"
                        }
                    },
                    "orgID":            "1965",
                    "orgName":          "Clifton Cultural Arts Center",
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/second-sunday-family-showtime-8\/",
                    "venueID":          "1888",
                    "venueName":        "Clifton Cultural Arts Center",
                    "venueAddress1":    "3711 Clifton Ave",
                    "venueAddress2":    "",
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45220",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Free for kids and just $5 per adult.",
                    "eventPhone1":      "513-497-2860",
                    "eventEmail":       "info@cliftonculturalarts.org",
                    "eventTicketUrl":   "http:\/\/cliftonculturalarts.org",
                    "discountUrl":      "",
                    "eventStartTime":   "Show is 2 - 3pm, followed by a community reception.",
                    "eventType":        "Theatre",
                    "secondaryType":    "Culture, Heritage + Festivals, Kids Family, For Kids, clifton, Cincinnati, Community Arts, theatre, family activities, kids theatre, local arts",
                    "eventSummary":     "Join us for kid's theatre the second Sunday of each month, followed by a free community reception!",
                    "eventDescription": "Bring the family and come have some fun at Second Sunday Family Showtime!&nbsp; Shows are the second sunday of every month at 2 p.m., October through May.&nbsp; FREE for kids and just $5 per adult, payable at the door - followed by a free community reception after the show! This month&#039;s performance of <strong>Puss in Boots<\/strong> is presented by Lexington Children&#039;s Theatre.\n\nSome may say that a cat is just a cat &ndash; \u2028But I, my friends, I am much more than that! \u2028With a feather in my cap and boots on my feet, \u2028I can wheel, I can deal, I can trick, I can treat. \u2028So join me today &ndash; I&rsquo;m the cat with a plan, \u2028And if you don&rsquo;t, then catch me if you can! Adapted for Lexington Children&rsquo;s Theatre by Jeremy Kisling.&nbsp; Recommended for ages 4 and up.",
                    "datePosted":       "2015-09-03 14:03:57",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/second-sunday-family-showtime-8\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/second-sunday-family-showtime-8\/",
                    "source":           "www.cincyartsguide.com"
                }, {
                    "eventID":          "2639",
                    "spotlight":        "false",
                    "featured":         "false",
                    "orgImage":         "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/organization-featured-Amy-Janowiecki-1441122747.jpeg",
                    "eventImage":       "http:\/\/www.cincyartsguide.com\/wp-content\/uploads\/sites\/www.cincyartsguide.com\/images\/2015\/09\/primary-Annapurna-1441987250.jpeg",
                    "eventName":        "Annapurna",
                    "eventDateBegin":   "03-22-2016",
                    "eventDateEnd":     "04-10-2016",
                    "eventDays":        "Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
                    "ongoing":          "N",
                    "eventDatesTimes":  {
                        "datetime": [{
                            "date":        "Sat-Apr-9-2016",
                            "time":        "2:00 pm",
                            "timestamp":   "1460210400",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }, {
                            "date":        "Sat-Apr-9-2016",
                            "time":        "8:00 pm",
                            "timestamp":   "1460232000",
                            "date_filter": "20160409",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }, {
                            "date":        "Sun-Apr-10-2016",
                            "time":        "2:00 pm",
                            "timestamp":   "1460296800",
                            "date_filter": "20160410",
                            "end_time":    "11:59 pm",
                            "duration":    "7200"
                        }]
                    },
                    "orgID":            "2101",
                    "orgName":          "Ensemble Theatre Cincinnati",
                    "eventUrl":         "http:\/\/www.cincyartsguide.com\/event\/annapurna\/",
                    "venueID":          "1939",
                    "venueName":        "Ensemble Theatre Cincinnati",
                    "venueAddress1":    "1127 Vine St",
                    "venueAddress2":    "",
                    "venueCity":        "Cincinnati",
                    "venueState":       "OH",
                    "venueZip":         "45202",
                    "venueLatitude":    "",
                    "venueLongitude":   "",
                    "eventTicketInfo":  "Adult tickets are $28 for preview performances and $44 for all other performances. Children\u2019s tickets are $18.\nCurrent subscribers receive $8 off each ticket.\n\nFor the 2015-2016 season, ETC will continue its popular half-price rush tickets for all performances, which are available two hours prior to show time and may be purchased by phone or in person at the box office. Tickets and seating subject to availability.",
                    "eventPhone1":      "(513) 421-3555",
                    "eventEmail":       "info@ensemblecincinnati.org",
                    "eventTicketUrl":   "https:\/\/apps.vendini.com\/ticket-software.html?t=tix&w=c3a9d18357135b10c9250fa9e258d0ca&vqitq=f234e63e-f4ff-4cf5-92ea-7f973ec732d8&vqitp=03c91c19-989c-4006-a99a-7e9fc59a4c56&vqitts=1441982621&vqitc=vendini&vqite=itl&vqitrt=Safetynet&vqith=31f902353122537b762c764300d57b99",
                    "discountUrl":      "",
                    "eventStartTime":   "PLAY\/Back Discussion following performances on March 31 and April 7, 2016. Teen Scene Matinee Performance on April 2, 2016. ASL-interpreted Performance on April 6, 2016.",
                    "eventType":        "Theatre",
                    "secondaryType":    "ArtsPass Deals, Comedy, Drama",
                    "eventSummary":     "Ulysses unexpectedly finds his wife, Emma, at his trailer door, 20 years after their marriage was torn apart by a horrific event that he can't remember...and she can't forget.",
                    "eventDescription": "What if you had experienced the defining moment of your life\u2014but couldn't remember it? Twenty years ago, Emma walked out on her husband, cowboy-poet Ulysses, in the middle of the night. Now, hearing he\u2019s in dire straits, she tracks him down to the wilds of Colorado in a grungy trailer. He\u2019s working on his magnum opus, hooked to an oxygen tank, and cooking breakfast in the buff. Their reunion, charged by rage and compassion, is a story that rides the fine line between tragedy and comedy.",
                    "datePosted":       "2015-09-11 16:19:32",
                    "link":             "http:\/\/www.cincyartsguide.com\/event\/annapurna\/",
                    "guid":             "http:\/\/www.cincyartsguide.com\/event\/annapurna\/",
                    "source":           "www.cincyartsguide.com"

                }]
            }
        };

    }
}
