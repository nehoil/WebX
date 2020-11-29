
// nav
{
    type: "web-container",
        name: "navbar",
            id: "nav003",
                class: "navbar-1",
                    info: {
        dir: "row",
            cmps: [
                {
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "VITA"
                    },
                    style: {
                        fontFamily: "robotomono",
                        fontSize: "1.5rem",
                        fontWeight: "unset",
                        letterSpacing: "unset",
                        margin: "unset",
                        padding: "unset",
                        textTransform: "unset",
                        color: "#161d2e",
                        backgroundColor: "#fff",
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
                        cmps: [
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "SHOP",
                                    linkTo: "#"
                                },
                                style: {
                                    fontFamily: "unset",
                                    fontSize: "unset",
                                    fontWeight: "unset",
                                    letterSpacing: "unset",
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
                                    content: "ABOUT",
                                    linkTo: "#"

                                },
                                style: {
                                    fontFamily: "unset",
                                    fontSize: "unset",
                                    fontWeight: "unset",
                                    letterSpacing: "unset",
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
                                    letterSpacing: "unset",
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
                        letterSpacing: "unset",
                        margin: "unset",
                        padding: "unset",
                        textTransform: "unset",
                        color: "#161d2e",
                        backgroundColor: "#fff",
                        borderShadow: "unset",
                        border: "unset",
                        borderRadius: "unset",
                        lineHeight: "auto"
                    }
                }]
    },
    style: {
        fontFamily: "unset",
            fontSize: "1rem",
                fontWeight: "unset",
                    letterSpacing: "unset",
                        margin: "unset",
                            height: "4rem",
                                padding: "unset",
                                    textTransform: "unset",
                                        color: "#161d2e",
                                            backgroundColor: "#fff",
                                                borderShadow: "unset",
                                                    border: "unset",
                                                        borderRadius: "unset",
                                                            lineHeight: "auto"
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
            cmps: [
                {
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
                        fontWeight: "unset",
                        letterSpacing: "3px",
                        margin: "0 auto",
                        padding: "unset",
                        textTransform: "unset",
                        color: "rgb(84, 84, 84)",
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
                    class: "v-button",
                    info: {
                        content: "BRING NATURE HOME",
                        linkTo: "#"

                    },
                    style: {
                        fontFamily: "champagneLimousines",
                        fontSize: "unset",
                        fontWeight: "bold",
                        letterSpacing: "0.375rem",
                        margin: "unset",
                        padding: "5px 10px",
                        textTransform: "unset",
                        color: "#fff",
                        backgroundColor: "rgb(94,204,191)",
                        borderShadow: "unset",
                        border: "2px solid #fff",
                        outline: "3px solid rgb(94,204,191)",
                        borderRadius: "unset",
                        width: "unset",
                        height: "unset",
                    },

                }]
    },
    style: {
        paddingTop: '4rem',
            fontFamily: "unset",
                fontSize: "unset",
                    fontWeight: "unset",
                        letterSpacing: "unset",
                            padding: "15px",
                                backgroundColor: "unset",
                                    borderRadius: "unset",
                                        height: "unset",
                                            backgroundImage: `url("http://res.cloudinary.com/dksmeovlj/image/upload/v1606596890/2179_1_yr7og7.jpg")`,
                                                backgroundSize: 'contain'
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
            cmps: [
                {
                    type: "web-div",
                    name: "card-tem-03",
                    class: "card-image",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [
                            {
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
                        cmps: [
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "COME MEET US IN PERSON",
                                },
                                style: {
                                    fontFamily: "champagneLimousines",
                                    fontSize: "2rem",
                                    fontWeight: "unset",
                                    letterSpacing: "unset",
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
                                    letterSpacing: "unset",
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
            fontFamily: "unset",
                fontSize: "unset",
                    fontWeight: "unset",
                        letterSpacing: "unset",
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
//  section
{
    type: "web-container",
        name: "section",
            id: "v-section001",
                class: "section-v",
                    info: {
        dir: "row",
            cmps: [
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
                                content: "A week full of values.",
                            },
                            style: {
                                display: "inline-block",
                                fontFamily: "champagneLimousines",
                                fontSize: "2rem",
                                fontWeight: "unset",
                                letterSpacing: "unset",
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
                                letterSpacing: "unset",
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
            fontFamily: "unset",
                fontSize: "unset",
                    fontWeight: "unset",
                        letterSpacing: "unset",
                            margin: "unset",
                                padding: "unset",
                                    textTransform: "unset",
                                        color: "unset",
                                            backgroundColor: "#fff",
                                                borderShadow: "unset",
                                                    border: "unset",
                                                        borderRadius: "unset",
                                                            width: "unset",
                                                                minHeight: "800px",
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
            cmps: [
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
                                content: "48H DELIVERY",
                            },
                            style: {
                                display: "inline-block",
                                fontFamily: "champagneLimousines",
                                fontSize: "2rem",
                                fontWeight: "unset",
                                letterSpacing: "unset",
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
                                letterSpacing: "unset",
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
            fontFamily: "unset",
                fontSize: "unset",
                    fontWeight: "unset",
                        letterSpacing: "unset",
                            margin: "unset",
                                padding: "unset",
                                    textTransform: "unset",
                                        color: "unset",
                                            backgroundColor: "#fff",
                                                borderShadow: "unset",
                                                    border: "unset",
                                                        borderRadius: "unset",
                                                            width: "unset",
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
            cmps: [
                {
                    type: "web-div",
                    name: "card-tem-02",
                    class: "card-text",
                    id: utilService.makeId(10),
                    info: {
                        dir: "row",
                        cmps: [
                            {
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
                                    letterSpacing: "unset",
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
                        }]
                    },
                },
            ]
    },
    style: {
        display: "flex",
            fontFamily: "unset",
                fontSize: "unset",
                    fontWeight: "unset",
                        letterSpacing: "unset",
                            margin: "unset",
                                padding: "unset",
                                    textTransform: "unset",
                                        color: "unset",
                                            backgroundColor: "#fff",
                                                borderShadow: "unset",
                                                    border: "unset",
                                                        borderRadius: "unset",
                                                            width: "unset",
                                                                minHeight: "200px",
        },
},
// footer
{
    type: "web-container",
        name: "footer",
            id: "footer-v",
                class: "footer-v",
                    info: {
        dir: "row",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-txt",
                info: {
                    content: "shop"
                },
                style: {
                    fontFamily: "unset",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    marginTop: "1rem",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
                    lineHeight: "auto"
                }
            },
            {
                id: utilService.makeId(10),
                type: "web-txt",
                class: "footer-v-02",
                info: {
                    content: "my account"
                },
                style: {
                    fontFamily: "unset",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    letterSpacing: "unset",
                    marginTop: "1rem",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",

                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
                    lineHeight: "auto"
                }
            },
            {
                id: utilService.makeId(10),
                type: "web-txt",
                class: "footer-v-02",
                info: {
                    content: "customer service"
                },
                style: {
                    fontFamily: "unset",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    letterSpacing: "unset",
                    marginTop: "1rem",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",

                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
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
                    fontFamily: "unset",
                    fontSize: "0.9rem",
                    fontWeight: "unset",
                    letterSpacing: "unset",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "unset",
                    textTransform: "unset",
                    color: "unset",
                    backgroundColor: "#fff",
                    borderShadow: "unset",
                    border: "unset",
                    borderRadius: "unset",
                    lineHeight: "auto"
                }
            },
            ]
    },
}