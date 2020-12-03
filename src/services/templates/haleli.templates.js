import { utilService } from '@/services/util-service.js'

export const haleliTemplates = [
    {
        _id: "sys574575474543",
        name: "Vita",
        previewImg: "http://res.cloudinary.com/dksmeovlj/image/upload/v1606817513/screencapture-localhost-8081-2020-11-29-13-55-25_1_zjvftz.jpg",
        createdBy: {
            _id: null,
            username: null,
            userPicture: null
        },
        cmps: [
            {
                type: "web-container",
                name: "navbar",
                id: "nav003",
                class: "navbar-1",
                info: {
                    dir: "row",
                    cmps: [{
                        id: utilService.makeId(10),
                        type: "web-txt",
                        info: {
                            content: "VITA"
                        },
                        style: {
                            fontFamily: "robotomono",
                            fontSize: "1.5rem",
                            color: "#161d2e",
                            backgroundColor: "#fff",
                            lineHeight: "auto"
                        }
                    },
                    {
                        type: "web-div",
                        name: "card-tem-01",
                        class: "web-div",
                        id: utilService.makeId(10),
                        info: {
                            dir: "row",
                            cmps: [{
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "SHOP",
                                    linkTo: "#"
                                },
                                style: {

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "ABOUT",
                                    linkTo: "#"

                                },
                                style: {
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "CONTACT US",
                                    linkTo: "#"

                                },
                                style: {
                                }
                            }
                            ]
                        },
                        style: {
                            fontSize: "1rem",
                            color: "#161d2e",
                            backgroundColor: "#fff",
                        }
                    }
                    ]
                },
                style: {
                    fontSize: "1rem",
                    height: "4rem",
                    color: "#161d2e",
                    backgroundColor: "#fff",
                }
            },
            // header
            {
                type: "web-container",
                name: "header",
                id: "header004",
                class: "header-v",
                info: {
                    dir: "col",
                    cmps: [{
                        id: utilService.makeId(10),
                        type: "web-txt",
                        class: 'v-title',
                        info: {
                            content: "VITA; urban living"
                        },
                        style: {
                            textAlign: 'center',
                            fontFamily: "robotomono",
                            fontSize: "4rem",
                            letterSpacing: "3px",
                            margin: "0 auto",
                            color: "rgb(84, 84, 84)",
                        },
                    },
                    {
                        id: utilService.makeId(10),
                        type: "web-button",
                        class: "v-button",
                        info: {
                            content: "BRING NATURE HOME",
                            linkTo: "#"

                        },
                        style: {
                            fontFamily: "champagneLimousines",
                            fontWeight: "bold",
                            letterSpacing: "0.375rem",
                            padding: "5px 10px",
                            color: "#fff",
                            backgroundColor: "rgb(94,204,191)",
                            border: "2px solid #fff",
                            outline: "3px solid rgb(94,204,191)",
                        },

                    }
                    ]
                },
                style: {
                    paddingTop: '4rem',
                    padding: "15px",
                    backgroundImage: `url("http://res.cloudinary.com/dksmeovlj/image/upload/v1606596890/2179_1_yr7og7.jpg")`,
                    backgroundSize: 'contain'
                },


            },

            //  section
            {
                type: "web-container",
                name: "section",
                id: "v-section001",
                class: "section-v",
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
                                    content: "A week full of values.",
                                },
                                style: {
                                    display: "inline-block",
                                    fontFamily: "champagneLimousines",
                                    fontSize: "2rem",
                                    fontWeight: "unset",

                                    margin: "unset",
                                    padding: "unset",
                                    textTransform: "unset",
                                    color: "#unset",
                                    backgroundColor: "unset",
                                    borderShadow: "unset",
                                    border: "unset",
                                    borderRadius: "unset",
                                    width: "unset",
                                    height: "unset",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Let’s re-pot Black Friday into VITAweek. From 26 November until 01 December we’re all about sharing, inspiring, learning and connecting. Get access to the full experience with your VITA Account.",
                                },
                                style: {
                                    display: "inline-block",
                                    fontFamily: "champagneLimousines",
                                    fontSize: "1.4rem",
                                    fontWeight: "unset",

                                    margin: "unset",
                                    padding: "unset",
                                    textTransform: "unset",
                                    color: "unset",
                                    backgroundColor: "unset",
                                    borderShadow: "unset",
                                    border: "unset",
                                    borderRadius: "unset",
                                    width: "unset",
                                    height: "unset",
                                },
                            }
                            ]
                        }
                    },
                    {
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
                                    src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606636853/3911917-pdf_1_gfkso7.png"
                                },
                                style: {}
                            }]
                        },
                    },
                    ]
                },
                style: {
                    display: "flex",
                    backgroundColor: "#fff",
                    minHeight: "800px",
                },
            },
            // map
            {
                type: "web-container",
                name: "map",
                id: "section007",
                class: "map-v",
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
                                    src: "https://res.cloudinary.com/dksmeovlj/image/upload/v1606599449/taxi-sign-in_wzahtz.png"
                                },
                                style: {
                                    width: "70%"
                                }
                            }]
                        },
                    },
                    {
                        type: "web-div",
                        name: "card-tem-02",
                        class: "map-text-v",
                        id: utilService.makeId(10),
                        info: {
                            dir: "row",
                            cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "COME MEET US IN PERSON",
                                },
                                style: {
                                    fontFamily: "champagneLimousines",
                                    fontSize: "2rem",
                                    fontWeight: "unset",

                                    margin: "unset",
                                    padding: "unset",
                                    textTransform: "unset",
                                    color: "unset",
                                    backgroundColor: "#fff",
                                    borderShadow: "unset",
                                    border: "unset",
                                    borderRadius: "unset",
                                    width: "unset",
                                    height: "unset",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "(we don't bite)",
                                },
                                style: {
                                    fontFamily: "champagneLimousines",
                                    fontSize: "1rem",
                                    fontWeight: "unset",

                                    margin: "unset",
                                    padding: "unset",
                                    textTransform: "unset",
                                    color: "unset",
                                    backgroundColor: "#fff",
                                    borderShadow: "unset",
                                    border: "unset",
                                    borderRadius: "unset",
                                    width: "unset",
                                    height: "unset",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-map",
                                info: {
                                    title: "",
                                    lat: 52.377956,
                                    lng: 4.897070,
                                    zoom: 14,
                                    address: "Amsterdam"
                                },
                                style: {
                                    width: "unset",
                                    height: "100%",
                                    display: "block",
                                    margin: "0 auto"
                                }
                            }
                            ]
                        },
                        style: {
                            padding: "1rem",
                            textTransform: "unset",
                            color: "unset",
                            backgroundColor: "#fff",
                            borderShadow: "unset",
                            border: "unset",
                            borderRadius: "unset",
                            width: "unset",
                            height: "unset",
                        },
                    }
                    ]
                },
                style: {
                    display: "flex",
                    backgroundColor: "#fff"
                },
            },
            // 2nd section
            {
                type: "web-container",
                name: "section",
                id: "v-section002",
                class: "section-v",
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
                                    content: "48H DELIVERY",
                                },
                                style: {
                                    display: "inline-block",
                                    fontFamily: "champagneLimousines",
                                    fontSize: "2rem",
                                    fontWeight: "unset",

                                    margin: "unset",
                                    padding: "unset",
                                    textTransform: "unset",
                                    color: "#unset",
                                    backgroundColor: "unset",
                                    borderShadow: "unset",
                                    border: "unset",
                                    borderRadius: "unset",
                                    width: "unset",
                                    height: "unset",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "All members of the VITA's community will have their orders shipped on the day after their order is received, except Saturday and Sunday. If you are based in Italy or Austria these orders should arrive within one working day ",
                                },
                                style: {
                                    display: "inline-block",
                                    fontFamily: "champagneLimousines",
                                    fontSize: "1.4rem",
                                    fontWeight: "unset",

                                    margin: "unset",
                                    padding: "unset",
                                    textTransform: "unset",
                                    color: "unset",
                                    backgroundColor: "unset",
                                    borderShadow: "unset",
                                    border: "unset",
                                    borderRadius: "unset",
                                    width: "unset",
                                    height: "unset",
                                },
                            }
                            ]
                        }
                    },
                    {
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
                                    src: "http://res.cloudinary.com/dksmeovlj/image/upload/v1606637743/ON3VUV1_1_ehpfa3.png"
                                },
                                style: {}
                            }]
                        },
                    },

                    ]
                },
                style: {
                    display: "flex",
                    backgroundColor: "#fff",
                    minHeight: "800px",
                },
            },
            // logos
            {
                type: "web-container",
                name: "section",
                id: "v-section003",
                class: "section-v01",
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
                                    content: "OUR PARTNERS",
                                },
                                style: {
                                    display: "inline-block",
                                    fontFamily: "champagneLimousines",
                                    fontSize: "1.4rem",
                                    fontWeight: "bold",

                                    margin: "unset",
                                    padding: "unset",
                                    textTransform: "unset",
                                    color: "unset",
                                    backgroundColor: "unset",
                                    borderShadow: "unset",
                                    border: "unset",
                                    borderRadius: "unset",
                                    width: "unset",
                                    height: "unset",
                                },
                            }]
                        },
                    },
                    {
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
                                    src: "http://res.cloudinary.com/dksmeovlj/image/upload/v1606642458/gutwork-svg_j6sysy.svg"
                                },
                                style: {}
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "http://res.cloudinary.com/dksmeovlj/image/upload/v1606642449/covenant-svg_rwnlh5.svg"
                                },
                                style: {}

                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "http://res.cloudinary.com/dksmeovlj/image/upload/v1606642314/infinite-svg_cmi0to.svg"
                                },
                                style: {}
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "http://res.cloudinary.com/dksmeovlj/image/upload/v1606642479/grubspot-svg_ckulrr.svg"
                                },
                                style: {}
                            }
                            ]
                        },
                    },
                    ]
                },
                style: {
                    display: "flex",
                    backgroundColor: "#fff",
                    minHeight: "200px",
                },
            },
            // footer
            {
                type: "web-container",
                name: "footer",
                id: "footer-v",
                class: "footer-v  ",
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
                                    content: "shop"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginTop: "1rem",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "all plants"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "books and accessories"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
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
                                    content: "my account"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "manage your account"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "order history"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "save items"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
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
                                    content: "customer service"
                                },
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "FAQ"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "transport and delivery"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "return and recycle service"
                                },
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    backgroundColor: "#fff",
                                    lineHeight: "auto"
                                }
                            },
                            ]
                        },
                    }
                    ]
                }
            }
        ]
    },
    {
        _id: "sys576845956786r5",
        name: "Chateau du brunch",
        previewImg: "http://res.cloudinary.com/dksmeovlj/image/upload/v1606817524/screencapture-localhost-8081-2020-11-29-13-55-25_bauane.jpg",
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
                    type: "web-txt",
                    info: {
                        content: "CHÂTEAU DU BRUNCH"
                    },
                    style: {
                        fontFamily: "unset",
                        fontSize: "1.5rem",
                        fontWeight: "unset",

                        margin: "unset",
                        padding: "unset",
                        textTransform: "unset",
                        color: "#e3baba",
                        backgroundColor: "#161d2e",
                        borderShadow: "unset",
                        border: "unset",
                        borderRadius: "unset",
                        lineHeight: "auto"
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
                            style: {
                                fontFamily: "unset",
                                fontSize: "unset",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "unset",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-button",
                            info: {
                                content: "RESERVE TABLE",
                                linkTo: "#"

                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "unset",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "unset",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-button",
                            info: {
                                content: "CONTACT US",
                                linkTo: "#"

                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "unset",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "unset",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            }
                        }
                        ]
                    },
                    style: {
                        fontFamily: "unset",
                        fontSize: "1rem",
                        fontWeight: "unset",

                        margin: "unset",
                        padding: "unset",
                        textTransform: "unset",
                        color: "#fff",
                        backgroundColor: "#161d2e",
                        borderShadow: "unset",
                        border: "unset",
                        borderRadius: "unset",
                        lineHeight: "auto"
                    }
                }
                ]
            },
            style: {
                fontSize: "1rem",
                color: "#fff",
                backgroundColor: "#161d2e",
                lineHeight: "auto"
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
                                fontFamily: "unset",
                                fontSize: "2rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "CHÂTEAU/DU/BRUNCH",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "2rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "CHÂTEAU/DU/BRUNCH",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "2rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "CHÂTEAU/DU/BRUNCH",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "2rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "CHÂTEAU/DU/BRUNCH",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "2rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
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
                                src: "https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            },
                            style: {
                                borderRadius: "unset"
                            }
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
                                fontFamily: "unset",
                                fontSize: "2rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "THIS IS HOW IT GOES",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "1.5rem",
                                fontWeight: "unset",
                                letterSpacing: "3px",
                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#e3baba",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "You sit behind the bar, watch us making food porn just for you tummy. your food will be served by our muffin-dressed waitresses, yep, no joke. Cause Château du brunch stands with happiness, And happiness is muffins. and us.",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "1.1rem",
                                fontWeight: "unset",
                                letterSpacing: "1px",
                                margin: "unset",
                                padding: "5px",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
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
                                fontFamily: "unset",
                                fontSize: "2rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#e3baba",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
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
                                fontFamily: "unset",
                                fontSize: "1.4rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "HAHASHMAL 6, TLV",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "1.1rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "unset",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "Please, do not forget to rate us on Tripadvisor and our Facebook page. See you soon!",
                            },
                            style: {
                                fontFamily: "unset",
                                fontSize: "1.1rem",
                                fontWeight: "unset",

                                margin: "unset",
                                padding: "10px",
                                textTransform: "unset",
                                color: "#fff",
                                backgroundColor: "unset",
                                borderShadow: "unset",
                                border: "unset",
                                borderRadius: "unset",
                                width: "unset",
                                height: "unset",
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
                        lineHeight: "auto"
                    }
                }]
            },
        }
        ]
    }
]