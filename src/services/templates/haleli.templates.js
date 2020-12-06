import { utilService } from '@/services/util-service.js'

export const haleliTemplates = [
    // {
    //     _id: "sys574575474543",
    //     name: "Vita",
    //     previewImg: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606994532/screencapture-localhost-8081-2020-11-29-13-55-25_3_s4wxab.jpg",
    //     createdBy: {
    //         _id: null,
    //         username: null,
    //         userPicture: null
    //     },
    //     cmps: [{
    //             type: "web-container",
    //             name: "navbar",
    //             id: "nav003",
    //             class: "navbar-1",
    //             info: {
    //                 dir: "row",
    //                 cmps: [{
    //                         id: utilService.makeId(10),
    //                         type: "web-button",
    //                         info: {
    //                             content: "VITA"
    //                         },
    //                         style: {
    //                             fontFamily: "robotomono",
    //                             fontSize: "1.5rem",
    //                             color: "#161d2e",
    //                             backgroundColor: "#fff",

    //                         }
    //                     },
    //                     {
    //                         type: "web-div",
    //                         name: "card-tem-01",
    //                         class: "web-div",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-button",
    //                                     info: {
    //                                         content: "SHOP",
    //                                         linkTo: "#"
    //                                     },
    //                                     style: {

    //                                     },
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-button",
    //                                     info: {
    //                                         content: "ABOUT",
    //                                         linkTo: "#"

    //                                     },
    //                                     style: {},
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-button",
    //                                     info: {
    //                                         content: "CONTACT US",
    //                                         linkTo: "#"

    //                                     },
    //                                     style: {}
    //                                 }
    //                             ]
    //                         },
    //                         style: {
    //                             fontSize: "1rem",
    //                             color: "#161d2e",
    //                             backgroundColor: "#fff",
    //                         }
    //                     }
    //                 ]
    //             },
    //             style: {
    //                 fontSize: "1rem",
    //                 height: "4rem",
    //                 color: "#161d2e",
    //                 backgroundColor: "#fff",
    //                 width: "100%"
    //             }
    //         },
    //         // header
    //         {
    //             type: "web-container",
    //             name: "header",
    //             id: "header004",
    //             class: "header-v",
    //             info: {
    //                 dir: "col",
    //                 cmps: [{
    //                         id: utilService.makeId(10),
    //                         type: "web-txt",
    //                         class: 'v-title',
    //                         info: {
    //                             content: "VITA urban living"
    //                         },
    //                         style: {
    //                             textAlign: 'center',
    //                             fontFamily: "romantika",
    //                             fontSize: "6rem",
    //                             letterSpacing: "3px",
    //                             margin: "0 auto",
    //                             color: "rgb(84, 84, 84)",
    //                         },
    //                     },
    //                     {
    //                         id: utilService.makeId(10),
    //                         type: "web-button",
    //                         class: "v-button",
    //                         info: {
    //                             content: "BRING NATURE HOME",
    //                             linkTo: "#"

    //                         },
    //                         style: {
    //                             fontFamily: "champagneLimousines",
    //                             fontWeight: "bold",
    //                             letterSpacing: "0.375rem",
    //                             padding: "5px 10px",
    //                             color: "#fff",
    //                             backgroundColor: "rgb(94,204,191)",
    //                             border: "2px solid #fff",
    //                             outline: "3px solid rgb(94,204,191)",
    //                         },

    //                     }
    //                 ]
    //             },
    //             style: {
    //                 paddingTop: '4rem',
    //                 padding: "15px",
    //                 backgroundImage: `url("https://res.cloudinary.com/dksmeovlj/image/upload/v1606596890/2179_1_yr7og7.jpg")`,
    //                 backgroundSize: 'contain'
    //             },


    //         },

    //         //  section
    //         {
    //             type: "web-container",
    //             name: "section",
    //             id: "v-section001",
    //             class: "section-v",
    //             info: {
    //                 dir: "row",
    //                 cmps: [{
    //                         type: "web-div",
    //                         name: "card-tem-02",
    //                         class: "card-text",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "A week full of values.",
    //                                     },
    //                                     style: {
    //                                         display: "inline-block",
    //                                         fontFamily: "champagneLimousines",
    //                                         fontSize: "2rem",
    //                                     },
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "Let’s re-pot Black Friday into VITAweek. From 26 November until 01 December we’re all about sharing, inspiring, learning and connecting. Get access to the full experience with your VITA Account.",
    //                                     },
    //                                     style: {
    //                                         display: "inline-block",
    //                                         fontFamily: "champagneLimousines",
    //                                         fontSize: "1.4rem",
    //                                     },
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         type: "web-div",
    //                         name: "card-tem-03",
    //                         class: "card-image",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                 id: utilService.makeId(10),
    //                                 type: "web-img",
    //                                 info: {
    //                                     src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606636853/3911917-pdf_1_gfkso7.png"
    //                                 },
    //                                 style: {}
    //                             }]
    //                         },
    //                     },
    //                 ]
    //             },
    //             style: {
    //                 display: "flex",
    //                 backgroundColor: "#fff",
    //                 minHeight: "50rem",
    //             },
    //         },
    //         // map
    //         {
    //             type: "web-container",
    //             name: "map",
    //             id: "section007",
    //             class: "map-v",
    //             info: {
    //                 dir: "row",
    //                 cmps: [{
    //                         type: "web-div",
    //                         name: "card-tem-03",
    //                         class: "card-image",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                 id: utilService.makeId(10),
    //                                 type: "web-img",
    //                                 info: {
    //                                     src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606599449/taxi-sign-in_wzahtz.png"
    //                                 },
    //                                 style: {
    //                                     width: "70%"
    //                                 }
    //                             }]
    //                         },
    //                     },
    //                     {
    //                         type: "web-div",
    //                         name: "card-tem-02",
    //                         class: "map-text-v",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "COME MEET US IN PERSON",
    //                                     },
    //                                     style: {
    //                                         fontFamily: "champagneLimousines",
    //                                         fontSize: "2rem",
    //                                         backgroundColor: "#fff",
    //                                     },
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "(we don't bite)",
    //                                     },
    //                                     style: {
    //                                         fontFamily: "champagneLimousines",
    //                                         fontSize: "1rem",
    //                                         backgroundColor: "#fff",
    //                                     },
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-map",
    //                                     info: {
    //                                         title: "",
    //                                         lat: 52.377956,
    //                                         lng: 4.897070,
    //                                         zoom: 14,
    //                                         address: "Amsterdam"
    //                                     },
    //                                     style: {
    //                                         height: "100%",
    //                                         display: "block",
    //                                         margin: "0 auto"
    //                                     }
    //                                 }
    //                             ]
    //                         },
    //                         style: {
    //                             padding: "1rem",
    //                             backgroundColor: "#fff",
    //                         },
    //                     }
    //                 ]
    //             },
    //             style: {
    //                 display: "flex",
    //                 backgroundColor: "#fff"
    //             },
    //         },
    //         // 2nd section
    //         {
    //             type: "web-container",
    //             name: "section",
    //             id: "v-section002",
    //             class: "section-v",
    //             info: {
    //                 dir: "row",
    //                 cmps: [{
    //                         type: "web-div",
    //                         name: "card-tem-02",
    //                         class: "card-text",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "48H DELIVERY",
    //                                     },
    //                                     style: {
    //                                         display: "inline-block",
    //                                         fontFamily: "champagneLimousines",
    //                                         fontSize: "2rem",
    //                                     },
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "All members of the VITA's community will have their orders shipped on the day after their order is received, except Saturday and Sunday. If you are based in Italy or Austria these orders should arrive within one working day ",
    //                                     },
    //                                     style: {
    //                                         display: "inline-block",
    //                                         fontFamily: "champagneLimousines",
    //                                         fontSize: "1.4rem",
    //                                     },
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         type: "web-div",
    //                         name: "card-tem-03",
    //                         class: "card-image",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                 id: utilService.makeId(10),
    //                                 type: "web-img",
    //                                 info: {
    //                                     src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606637743/ON3VUV1_1_ehpfa3.png"
    //                                 },
    //                                 style: {}
    //                             }]
    //                         },
    //                     },

    //                 ]
    //             },
    //             style: {
    //                 display: "flex",
    //                 backgroundColor: "#fff",
    //                 minHeight: "50rem",
    //             },
    //         },
    //         // logos
    //         {
    //             type: "web-container",
    //             name: "section",
    //             id: "v-section003",
    //             class: "section-v01",
    //             info: {
    //                 dir: "row",
    //                 cmps: [{
    //                         type: "web-div",
    //                         name: "card-tem-02",
    //                         class: "card-text",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                 id: utilService.makeId(10),
    //                                 type: "web-txt",
    //                                 info: {
    //                                     content: "OUR PARTNERS",
    //                                 },
    //                                 style: {
    //                                     display: "inline-block",
    //                                     fontFamily: "champagneLimousines",
    //                                     fontSize: "1.4rem",
    //                                     fontWeight: "bold",
    //                                 },
    //                             }]
    //                         },
    //                     },
    //                     {
    //                         type: "web-div",
    //                         name: "card-tem-03",
    //                         class: "card-image",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-img",
    //                                     info: {
    //                                         src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606642458/gutwork-svg_j6sysy.svg"
    //                                     },
    //                                     style: {}
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-img",
    //                                     info: {
    //                                         src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606642449/covenant-svg_rwnlh5.svg"
    //                                     },
    //                                     style: {}

    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-img",
    //                                     info: {
    //                                         src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606642314/infinite-svg_cmi0to.svg"
    //                                     },
    //                                     style: {}
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-img",
    //                                     info: {
    //                                         src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606642479/grubspot-svg_ckulrr.svg"
    //                                     },
    //                                     style: {}
    //                                 }
    //                             ]
    //                         },
    //                     },
    //                 ]
    //             },
    //             style: {
    //                 display: "flex",
    //                 backgroundColor: "#fff",
    //                 minHeight: "12.5rem",
    //             },
    //         },
    //         // footer
    //         {
    //             type: "web-container",
    //             name: "footer",
    //             id: "footer-v",
    //             class: "footer-v  ",
    //             info: {
    //                 dir: "row",
    //                 cmps: [{
    //                         type: "web-div",
    //                         name: "",
    //                         class: "div-v",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "shop"
    //                                     },
    //                                     style: {
    //                                         fontSize: "1rem",
    //                                         fontWeight: "bold",
    //                                         textAlign: "center",
    //                                         marginTop: "1rem",
    //                                         backgroundColor: "#fff",
    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "all plants"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",
    //                                         //   
    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "books and accessories"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 }
    //                             ]
    //                         },
    //                     },
    //                     {
    //                         type: "web-div",
    //                         name: "",
    //                         class: "div-v",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     class: "footer-v-02",
    //                                     info: {
    //                                         content: "my account"
    //                                     },
    //                                     style: {
    //                                         fontSize: "1rem",
    //                                         fontWeight: "bold",
    //                                         marginTop: "1rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "manage your account"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "order history"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "save items"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 }
    //                             ]
    //                         }
    //                     },
    //                     {
    //                         type: "web-div",
    //                         name: "",
    //                         class: "div-v",
    //                         id: utilService.makeId(10),
    //                         info: {
    //                             dir: "row",
    //                             cmps: [{
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     class: "footer-v-02",
    //                                     info: {
    //                                         content: "customer service"
    //                                     },
    //                                     style: {
    //                                         fontSize: "1rem",
    //                                         fontWeight: "bold",
    //                                         marginTop: "1rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "FAQ"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "transport and delivery"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 },
    //                                 {
    //                                     id: utilService.makeId(10),
    //                                     type: "web-txt",
    //                                     info: {
    //                                         content: "return and recycle service"
    //                                     },
    //                                     style: {
    //                                         fontSize: "0.9rem",
    //                                         margin: "0 auto",
    //                                         textAlign: "center",
    //                                         backgroundColor: "#fff",

    //                                     }
    //                                 },
    //                             ]
    //                         },
    //                     }
    //                 ]
    //             }
    //         }
    //     ]
    // },
    {
        _id: "sys576845956786r5",
        name: "Chateau du brunch",
        previewImg: "https://res.cloudinary.com/dksmeovlj/image/upload/v1607026945/screencapture-localhost-8081-2020-11-29-13-55-25_7_jpemq4.jpg",
        createdBy: {
            _id: null,
            username: null,
            userPicture: null
        },
        cmps: [{
                type: "web-container",
                name: "navbar",
                id: "nav002",
                class: "navbar-1",
                info: {
                    dir: "row",
                    cmps: [{
                            id: utilService.makeId(10),
                            type: "web-button",
                            info: {
                                content: "CHÂTEAU DU BRUNCH"
                            },
                            style: {
                                fontSize: "1.5rem",
                                color: "#e3baba",
                                backgroundColor: "#161d2e",

                            }
                        },
                        {
                            type: "web-div",
                            name: "card-tem-01",
                            class: "",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-button",
                                        info: {
                                            content: "ABOUT",
                                            linkTo: "#"
                                        },
                                        style: {},
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-button",
                                        info: {
                                            content: "RESERVE TABLE",
                                            linkTo: "#"

                                        },
                                        style: {},
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-button",
                                        info: {
                                            content: "CONTACT US",
                                            linkTo: "#"

                                        },
                                        style: {}
                                    }
                                ]
                            },
                            style: {
                                fontSize: "1rem",
                                color: "#fff",
                                backgroundColor: "#161d2e",

                            }
                        }
                    ]
                },
                style: {
                    fontSize: "1rem",
                    color: "#fff",
                    backgroundColor: "#161d2e",

                }
            },
            // first section
            {
                type: "web-container",
                name: "header",
                id: "header002",
                class: "first-section-cdb",
                info: {
                    dir: "row",
                    cmps: [{
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-text",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "CHÂTEAU/DU/BRUNCH",
                                        },
                                        style: {
                                            display: "inline-block",
                                            fontSize: "3.1rem",
                                            color: "#fff",
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "It's always brunch o'clock",
                                        },
                                        style: {
                                            fontSize: "2rem",
                                            color: 'rgb(227, 186, 186)',
                                        },
                                    },
                                ]
                            },
                        },
                        {
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-image",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                    id: utilService.makeId(10),
                                    type: "web-img",
                                    info: {
                                        src: "https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                    },
                                    style: {}
                                }]
                            },
                        }
                    ]
                },
                style: {
                    display: "flex",
                    color: "#fff",
                    backgroundColor: "#161d2e",
                },
            },

            // second section
            {
                type: "web-container",
                name: "section",
                id: "section002",
                class: "second-section-cdb",
                info: {
                    dir: "row",
                    cmps: [{
                            type: "web-div",
                            name: "card-tem-03",
                            class: "card-image",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                    id: utilService.makeId(10),
                                    type: "web-img",
                                    info: {
                                        src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=1253&q=80"
                                    },
                                    style: {}
                                }]
                            },
                        },
                        {
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-text",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "CHÂTEAU DU BRUNCH",
                                        },
                                        style: {
                                            display: "inline-block",
                                            fontSize: "2rem",
                                            color: "#e3baba",
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "SINCE 1992",
                                        },
                                        style: {
                                            display: "inline-block",
                                            fontSize: "1.4rem",
                                            color: "#fff"
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "We do not serve dinner. We do not serve lunch. Chateau du brunch is all around the most important meal of the day, at any time of the day. Our offer for you is simple: With us, every day is Sunday. So if you are the kind of person who knows how he wants to live his life to the best: Come free, leave freeier, enjoy life, eat brunch.",
                                        },
                                        style: {
                                            fontSize: "1.1rem",
                                            color: "#fff",
                                        },
                                    },
                                ]
                            },
                        }
                    ]
                },
                style: {
                    display: "flex",
                    color: "#fff",
                    backgroundColor: "#161d2e",
                },
            },
            // third section
            {
                type: "web-container",
                name: "section",
                id: "section003",
                class: "third-section-cdb",
                info: {
                    dir: "row",
                    cmps: [{
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-text",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "MAIN CONCEPT",
                                        },
                                        style: {
                                            display: "inline-block",
                                            fontSize: "2rem",
                                            color: "#fff",
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "THIS IS HOW IT GOES",
                                        },
                                        style: {
                                            fontSize: "1.5rem",
                                            letterSpacing: "3px",
                                            color: "#e3baba",
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "You sit behind the bar, watch us making food porn just for you tummy. your food will be served by our muffin-dressed waitresses, yep, no joke. Cause Château du brunch stands with happiness, And happiness is muffins. and us.",
                                        },
                                        style: {
                                            fontSize: "1.1rem",
                                            letterSpacing: "1px",
                                            color: "#fff",
                                        },
                                    }
                                ]
                            },
                        },
                        {
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-image",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                    id: utilService.makeId(10),
                                    type: "web-img",
                                    info: {
                                        src: "https://images.unsplash.com/photo-1516213335993-159eca2981af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                    },
                                    style: {}
                                }]
                            },
                        }
                    ]
                },
                style: {
                    display: "flex",
                    color: "#fff",
                    backgroundColor: "#161d2e",
                },
            },
            // forth section
            {
                type: "web-container",
                name: "section",
                id: "section004",
                class: "fourth-section-cdb",
                info: {
                    dir: "row",
                    cmps: [{
                            type: "web-div",
                            name: "card-tem-03",
                            class: "card-image",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                    id: utilService.makeId(10),
                                    type: "web-img",
                                    info: {
                                        src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1287&q=80"
                                    },
                                    style: {}
                                }]
                            },
                        },
                        {
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-text",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "WE ARE OPEN",
                                        },
                                        style: {
                                            display: "inline-block",
                                            fontSize: "2rem",
                                            color: "#e3baba",
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "always. 24/7",
                                        },
                                        style: {
                                            display: "inline-block",
                                            fontSize: "1.4rem",
                                            color: "#fff",
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "HAHASHMAL 6, TLV",
                                        },
                                        style: {
                                            fontSize: "1.1rem",
                                            color: "#fff",
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Please, do not forget to rate us on Tripadvisor and our Facebook page. See you soon!",
                                        },
                                        style: {
                                            fontSize: "1.1rem",
                                            color: "#fff",
                                        },
                                    },
                                ]
                            },
                        }
                    ]
                },
                style: {
                    display: "flex",
                    color: "#fff",
                    backgroundColor: "#161d2e"
                },
            },

            // footer
            {
                type: "web-container",
                name: "footer",
                id: "footer002",
                class: "footer-cdb",
                info: {
                    dir: "row",
                    cmps: [{
                        id: utilService.makeId(10),
                        type: "web-txt",
                        info: {
                            content: "ALL RIGHTS RESERVED TO CHÂTEAU DU BRUNCH (C) MAY YOUR LIFE BE FILLED WITH BRUNCHES"
                        },
                        style: {
                            fontSize: "1.1rem",
                            margin: "0 auto",
                            textAlign: "center",
                            color: "#e3baba",
                            backgroundColor: "#161d2e",

                        }
                    }]
                },
            }
        ]
    },

    {
        _id: "sys574324256786r5",
        name: "Medellin",
        previewImg: "https://res.cloudinary.com/dksmeovlj/image/upload/v1607004232/screencapture-localhost-8081-2020-11-29-13-55-25_4_trcahh.jpg",
        createdBy: {
            _id: null,
            username: null,
            userPicture: null
        },
        cmps: [{
                // header
                type: "web-container",
                name: "header",
                id: "header006",
                class: "test",
                info: {
                    dir: "row",
                    cmps: [{
                            type: "web-div",
                            class: "md-nav",
                            id: utilService.makeId(8),
                            info: {
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-button",
                                        class: "md-nav-title",
                                        info: {
                                            content: "Medellin"
                                        },
                                        style: {
                                            fontSize: "1.8rem",
                                            color: "#fff"
                                        }
                                    },
                                    {
                                        type: "web-div",
                                        name: "card-tem-01",
                                        class: "md-nav-btns",
                                        id: utilService.makeId(10),
                                        info: {
                                            dir: "row",
                                            cmps: [{
                                                    id: utilService.makeId(10),
                                                    type: "web-button",
                                                    info: {
                                                        content: "Portfolio",
                                                        linkTo: "#"
                                                    },
                                                    style: {
                                                        color: "#fff"
                                                    },
                                                },
                                                {
                                                    id: utilService.makeId(10),
                                                    type: "web-button",
                                                    info: {
                                                        content: "Elements",
                                                        linkTo: "#"

                                                    },
                                                    style: {},
                                                },
                                                {
                                                    id: utilService.makeId(10),
                                                    type: "web-button",
                                                    info: {
                                                        content: "Get in touch",
                                                        linkTo: "#"

                                                    },
                                                    style: {}
                                                }
                                            ]
                                        },
                                        style: {
                                            fontSize: "1rem",
                                            color: "#fff",
                                        }
                                    }
                                ]
                            },
                        },
                        {
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-text",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Get Creative",
                                        },
                                        style: {
                                            fontSize: "6rem",
                                            color: "#fff",
                                            fontFamily: 'assistantBold',
                                            textAlign: 'center'
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        class: "mb1",
                                        info: {
                                            content: "Strategic thinking. compelling design.",
                                        },
                                        style: {
                                            fontSize: "2rem",
                                            color: "#fff",
                                            fontFamily: 'assistantLight',
                                            textAlign: 'center'
                                        },
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-button",
                                        info: {
                                            content: "Get Started",
                                        },
                                        style: {
                                            fontSize: "1.3rem",
                                            color: "#fff",
                                            fontFamily: 'assistantLight',
                                            textAlign: 'center',
                                            backgroundColor: "#26c4e5",
                                            borderRadius: '48px',
                                            padding: "0.5rem 2rem !important"
                                        },
                                    }
                                ]
                            },
                            style: {
                                textAlign: 'center',
                            }
                        },
                    ]
                },
                style: {
                    display: "flex",
                    color: "#fff",
                    backgroundImage: "url(\"https://res.cloudinary.com/dksmeovlj/image/upload/v1606995796/New_Project_pdn1zl.png\")",
                    minHeight: "50rem"
                },
            },
            // testimonials
            {
                type: "web-container",
                name: "section",
                id: "md-section001",
                class: "section-md",
                info: {
                    dir: "row",
                    cmps: [{
                            type: "web-div",
                            name: "card-tem-02",
                            class: "card-text-md",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                    id: utilService.makeId(10),
                                    type: "web-txt",
                                    class: "txt-md",
                                    info: {
                                        content: "Loved by businesses, and individuals across the globe.",
                                    },
                                    style: {
                                        display: "inline-block",
                                        fontSize: "2.3rem",
                                        color: "#051441",
                                        textAlign: "left"
                                    },
                                }, ]
                            }
                        },
                        {
                            type: "web-div",
                            name: "card-tem-03",
                            class: "card-image-md",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                    id: utilService.makeId(10),
                                    type: "web-txt",
                                    info: {
                                        content: "Medellin gave us the best platform to grow and show our creation and skills! thank you guys, you are the best in the field."
                                    },
                                    style: {
                                        fontSize: "1.5rem",
                                        textAlign: "center",
                                        color: "#fff"
                                    }
                                }],
                            },
                            style: {
                                backgroundImage: "url(\"https://res.cloudinary.com/dksmeovlj/image/upload/v1607001661/testimonial_bg_two_bwonsx.png\")",
                            }
                        },
                    ]
                },
                style: {
                    display: "flex",
                    backgroundColor: "#fff",
                    minHeight: "50rem",
                },
            },
            // form
            {
                type: "web-container",
                name: "form",
                id: "form002",
                class: "web-form-2",
                info: {
                    dir: "column",
                    cmps: [{
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "Don't be a stranger"
                            },
                            style: {
                                fontSize: "3.1rem",
                                textAlign: "center",
                                fontFamily: "assistantLight",
                                color: "rgb(150, 150, 150)",
                                lineHeight: "auto"
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-form",
                            info: {},
                            style: {

                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-button",
                            info: {
                                content: "Submit",
                                linkTo: "#"

                            },
                            style: {
                                color: "rgb(150, 150, 150)",
                                border: "1px solid rgb(150, 150, 150)",
                                borderRadius: "48px",
                                backgroundColor: "#fff",
                                padding: "0.5rem 2rem !important",
                            },
                        }
                    ]
                },
                style: {
                    backgroundImage: "url(\"https://res.cloudinary.com/dksmeovlj/image/upload/v1607000866/testimonial_bg_shap_etvxsx.png\")",
                    textAlign: "center",
                    padding: "15px",
                    width: "100%",
                    minHeight: "30rem"

                }
            },
            // footer
            {
                type: "web-container",
                name: "footer",
                id: "footer-md",
                class: "footer-md  ",
                info: {
                    dir: "row",
                    cmps: [{
                            type: "web-div",
                            name: "",
                            class: "div-v",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Portfolio"
                                        },
                                        style: {
                                            fontSize: "1rem",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            color: "#fff",
                                            marginTop: "1rem",
                                            lineHeight: "auto"
                                        }
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Visual design"
                                        },
                                        style: {
                                            fontSize: "0.9rem",
                                            margin: "0 auto",
                                            textAlign: "center",
                                            color: "#fff",
                                            lineHeight: "auto"
                                        }
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Creative"
                                        },
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                            margin: "0 auto",
                                            textAlign: "center",
                                            lineHeight: "auto"
                                        }
                                    }
                                ]
                            },
                        },
                        {
                            type: "web-div",
                            name: "",
                            class: "div-v",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        class: "footer-v-02",
                                        info: {
                                            content: "Elements"
                                        },
                                        style: {
                                            fontSize: "1rem",
                                            fontWeight: "bold",
                                            marginTop: "1rem",
                                            margin: "0 auto",
                                            color: "#fff",
                                            textAlign: "center",
                                            lineHeight: "auto"
                                        }
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Developing"
                                        },
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                            margin: "0 auto",
                                            textAlign: "center",
                                            lineHeight: "auto"
                                        }
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Maintenance"
                                        },
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                            margin: "0 auto",
                                            textAlign: "center",
                                            lineHeight: "auto"
                                        }
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Upgrading"
                                        },
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "#fff",
                                            margin: "0 auto",
                                            textAlign: "center",
                                            lineHeight: "auto"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            type: "web-div",
                            name: "",
                            class: "div-v",
                            id: utilService.makeId(10),
                            info: {
                                dir: "row",
                                cmps: [{
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        class: "footer-v-02",
                                        info: {
                                            content: "Find us in"
                                        },
                                        style: {
                                            fontSize: "1rem",
                                            fontWeight: "bold",
                                            marginTop: "1rem",
                                            margin: "0 auto",
                                            textAlign: "center",
                                            color: "#fff",
                                            lineHeight: "auto"
                                        }
                                    },
                                    {
                                        id: utilService.makeId(10),
                                        type: "web-txt",
                                        info: {
                                            content: "Above Bar St, Southampton SO14 7DQ, UK"
                                        },
                                        style: {
                                            fontSize: "0.9rem",
                                            margin: "0 auto",
                                            textAlign: "center",
                                            color: "#fff",
                                            lineHeight: "auto"
                                        }
                                    },
                                ]
                            },
                        }
                    ]
                },
                style: {
                    backgroundColor: "#07112d",
                    minHeight: "10rem"
                }
            },
        ]
    }
]