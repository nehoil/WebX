import { utilService } from '@/services/util-service.js'

export const savedCmps = [{
        type: "web-container",
        name: "header",
        id: "head001",
        class: "web-header-1",
        previewImg: 'https://i.ibb.co/09X6T9w/preview-header-basic001.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "header-1",
                    class: "header-1-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "header-1-h1",
                                info: {
                                    content: "This is a sample H1 text"
                                },
                                style: {
                                    fontSize: "4.1875rem",
                                    margin: "0 50px",
                                    color: "#fff",

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "web-header-1-p",
                                info: {
                                    content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph. The single letter does not survive the translation from language to language, nor does the word."
                                },
                                style: {

                                    color: "#fff",
                                    maxWidth: "80ch",
                                    textAlign: "left"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                class: "header-1-btn",
                                info: {
                                    content: "Get Started",
                                    linkTo: "#"
                                },
                                style: {
                                    fontSize: "1.2em",
                                    fontWeight: "100",
                                    margin: "50px",
                                    padding: "20px",
                                    color: "#333",
                                    backgroundColor: "#fff",
                                    borderRadius: "2em",
                                },
                            }

                        ]
                    }
                },


            ]
        },
        style: {
            padding: "15px",
        }
    },
    {
        type: "web-container",
        name: "text",
        id: "txt001",
        class: "web-txt-1",
        previewImg: 'https://i.ibb.co/H7v2V2C/txt001.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-txt",
                info: {
                    content: "I'm a title, click on me to edit"
                },
                style: {
                    fontFamily: "assistantLight",
                    fontSize: "3.125rem",
                    textAlign: "center",
                },
            }]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },
    {
        type: "web-container",
        name: "text",
        id: "txt002",
        class: "web-txt-2",
        previewImg: 'https://i.ibb.co/bKj6Lvg/txt002.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-txt",
                info: {
                    content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph. The single letter does not survive the translation from language to language, nor does the word. Often, a word in one language will be translated into several words in another language, and vice versa."
                },
                style: {
                    fontSize: "0.875rem",
                    textAlign: "center",
                    margin: "0 auto",
                    width: "80ch",
                },
            }]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },

    {
        type: "web-container",
        name: "text",
        id: "txt003",
        class: "web-txt-3",
        previewImg: 'https://i.ibb.co/7GcGmdq/txt003.jpg',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "I'm a title, click on me to edit"
                    },
                    style: {
                        fontSize: "1.5625rem",
                        margin: "0 auto",
                        width: "fit-content",
                        textAlign: "center",
                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph."
                    },
                    style: {

                    },
                },

            ]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },
    {
        type: "web-container",
        name: "video",
        id: "vid001",
        class: "web-video-1",
        previewImg: 'https://i.ibb.co/6JXCsB4/vid001.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-video",
                info: {
                    content: "https://www.youtube.com/embed/qKlUpmZwsyw",
                    title: "watch this video!"
                },
                style: {

                }
            }]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },
    {
        type: "web-container",
        name: "video",
        id: "vid002",
        class: "web-video-2",
        previewImg: 'https://i.ibb.co/xFGt4dM/vid002.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-video",
                    info: {
                        content: "https://www.youtube.com/embed/CVa_IZVzUoc",
                        title: "watch this video!"
                    },
                    style: {

                    }
                },

                {
                    type: "web-div",
                    name: "video-002",
                    class: "vid-txt-container",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",

                                info: {
                                    content: "This is a video title"
                                },
                                style: {
                                    fontSize: "3.2rem",
                                    textAlign: "left",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "video-2-p",
                                info: {
                                    content: "Video technology was first developed for mechanical television systems, which were quickly replaced by cathode ray tube (CRT) television systems, but several new technologies for video display devices have since been invented. Video was originally exclusively a live technology. Charles Ginsburg led an Ampex research team developing one of the first practical video tape recorder (VTR)"
                                },
                                style: {
                                    fontSize: "1.1em",
                                    textAlign: "left",
                                    width: "70ch",
                                },
                            }
                        ]
                    }
                },
            ]
        },
        style: {
            padding: "15px",
            width: "100%",
        }
    },
    {
        type: "web-container",
        name: "image",
        id: "img001",
        class: "web-img-1",
        previewImg: 'https://i.ibb.co/dtmHF0y/001.jpg',
        info: {
            dir: "column",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-img",
                info: {
                    src: "https://images.unsplash.com/photo-1606201518145-30fa691f4065?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1354&q=80"
                },
                style: {
                    width: "100%",
                },
            }]
        },
        style: {
            width: "100%",
        }
    },
    {
        type: "web-container",
        name: "image",
        id: "img002-gallery",
        class: "web-img-gallery-1",
        previewImg: 'https://i.ibb.co/mBnc1hf/img-gallery002.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606422135475-eaba95301e6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    },
                    style: {

                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606694582797-0324662ab736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1326&q=80"
                    },
                    style: {

                    },
                }, {
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606383042401-a67a07641d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80"
                    },
                    style: {

                    },
                }
            ]
        },
        style: {
            padding: "15px",
            width: "100%",

        }
    },
    {
        type: "web-container",
        name: "card",
        id: "card001-column",
        class: "card-1-col",
        previewImg: 'https://i.ibb.co/KW9dpYr/card001-col.jpg',
        info: {
            dir: "column",
            cmps: [{
                type: "web-div",
                name: "card",
                class: "web-card-1-col",
                id: utilService.makeId(10),
                info: {
                    dir: "row",
                    cmps: [{
                            id: utilService.makeId(10),
                            type: "web-img",
                            info: {
                                src: "https://images.unsplash.com/photo-1584670618308-e88b87710b38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
                            },
                            style: {
                                objectFit: "cover",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "Allow yourself to create without worries"
                            },
                            style: {
                                fontSize: "3.125rem",
                            },
                        },
                        {
                            id: utilService.makeId(10),
                            type: "web-txt",
                            info: {
                                content: "The smallest unit that has \"organizational\" meaning in the book is the paragraph."
                            },
                            style: {
                                fontSize: "1rem",
                            },
                        },

                    ]
                },
                style: {
                    padding: "15px",
                    width: "100%",
                    textAlign: "center",

                },

            }]
        },
        style: {
            padding: "15px",
        }
    },
    {
        type: "web-container",
        name: "card",
        id: "card002-row",
        class: "web-card-1-row",
        previewImg: 'https://i.ibb.co/z8j61kB/card002-row.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1524335397764-f98987c51095?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1300&q=80"
                    },
                    style: {},
                },
                {
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1-div",
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "web-card-1-title",
                                info: {
                                    content: "There is no limit to the imagination"
                                },
                                style: {
                                    fontSize: "3em",
                                    textAlign: "left"
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "web-card-1-pa",
                                info: {
                                    content: "You can finally customize everything on your website, easily and directly. Elementor is the editor for designers who want to fine-tune every last detail."
                                },
                                style: {
                                    textAlign: "left"

                                },
                            },
                        ]
                    },
                    style: {},

                }
            ]
        },
        style: {}
    },
    {
        type: "web-container",
        name: "section",
        id: "sec001-cards trio",
        class: "web-sec-cards-1",
        previewImg: 'https://i.ibb.co/58Sx1JK/sections001-crds-trio.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                                },
                                style: {
                                    margin: "0 0 1rem 0",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Relaxing Zen design everywhere"
                                },
                                style: {
                                    fontSize: "1.3125rem",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Read More"
                                },
                                style: {

                                    textTransform: "uppercase",
                                    backgroundColor: "#fff",
                                    border: "1px solid gainsboro",
                                    borderRadius: "20px",

                                },
                            }
                        ]
                    },
                    style: {
                        padding: "15px",
                        width: "100%",
                    },

                },
                {
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
                                },
                                style: {
                                    margin: "0 0 1rem 0",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Collaborative work complexes"
                                },
                                style: {
                                    fontSize: "1.3125rem",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Read More"
                                },
                                style: {

                                    textTransform: "uppercase",
                                    backgroundColor: "#fff",
                                    border: "1px solid gainsboro",
                                    borderRadius: "20px",

                                },
                            }
                        ]
                    },
                    style: {
                        padding: "15px",

                        width: "100%",

                    },

                },
                {
                    type: "web-div",
                    name: "card",
                    id: utilService.makeId(10),
                    class: "web-card-1",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80"
                                },
                                style: {

                                    margin: "0 0 1rem 0",

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                info: {
                                    content: "Track your progress from anywhere"
                                },
                                style: {
                                    fontSize: "1.3125rem",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Read More"
                                },
                                style: {

                                    textTransform: "uppercase",
                                    backgroundColor: "#fff",
                                    border: "1px solid gainsboro",
                                    borderRadius: "20px",

                                },
                            }
                        ]
                    },
                    style: {

                        padding: "15px",
                        width: "100%",

                    },

                }
            ]
        },
        style: {

            padding: "15px",
            width: "100%",

        }
    },
    {
        id: "map001",
        type: "web-container",
        name: "map",
        class: "web-map-1",
        previewImg: 'https://i.ibb.co/PDx5LRw/map002.jpg',
        info: {
            dir: "row",
            cmps: [{
                id: utilService.makeId(10),
                type: "web-map",
                info: {
                    title: "",
                    lat: 40.706005,
                    lng: -74.008827,
                    zoom: 10,
                    address: "Rome"
                },
                style: {
                    height: "100%",
                    display: "block",
                    margin: "0 auto"
                }
            }]
        },
        style: {
            padding: "15px",

            width: "100%",

        }
    },
    {
        type: "web-container",
        name: "form",
        id: "form001",
        class: "web-form-1",
        previewImg: 'https://i.ibb.co/X2SYCJY/form001.jpg',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-img",
                    info: {
                        src: "https://lh3.googleusercontent.com/proxy/sxRTNOhVdjk7yx1zdIjS3CEJd1iP50Gu_0L_3rqq7UwstBfgC1oN9Q_naWKGKMycvI7ReGSkjCXOEeS4H5xp4gtGaxvBAIpyPb45EI1PTsSE7jXC0A"
                    },
                    style: {

                    },
                },
                {
                    id: utilService.makeId(10),
                    type: "web-form",
                    info: {
                        content: "This is form title text"
                    },
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

                        margin: "15px 0 0 0",
                        padding: "3px 8px",
                        color: "gray",
                        border: "1px solid gainsboro",

                    },
                }
            ]
        },
        style: {

            textAlign: "center",
            padding: "15px",
            width: "100%",

        }
    },
    {
        type: "web-container",
        name: "navbar",
        id: "nav001",
        class: "navbar-1",
        previewImg: 'https://i.ibb.co/mzq5Y41/basic-nav.jpg',
        info: {
            dir: "row",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-button",
                    info: {
                        content: "Logo"
                    },
                    style: {
                        fontFamily: "assistantLight",
                        fontSize: "3.375rem",
                        lineHeight: "auto",
                        padding: "15px",
                    }
                },


                {
                    type: "web-div",
                    name: "nav-btns",
                    id: utilService.makeId(10),
                    class: "web-div-nav-btns",
                    info: {
                        dir: "row",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Home",
                                    linkTo: "#"
                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Services",
                                    linkTo: "#"

                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",


                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "Gallery",
                                    linkTo: "#"

                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "About us  ",
                                    linkTo: "#"

                                },
                                style: {
                                    fontFamily: "assistantLight",
                                    fontWeight: "bold",
                                },
                            },
                        ]
                    }
                },


                {
                    id: utilService.makeId(10),
                    type: "web-hamburger",
                    class: "hamburger",
                    info: {
                        content: "",
                        linkTo: ""
                    },
                    style: {


                    },
                },

            ]
        },
        style: {

        }
    },
    {
        type: "web-container",
        name: "footer",
        id: "footer001",
        class: "footer-1",
        previewImg: 'https://i.ibb.co/2W3fSc9/footer-basic001.jpg',
        info: {
            dir: "column",
            cmps: [{
                    id: utilService.makeId(10),
                    type: "web-txt",
                    info: {
                        content: "All right reserved to WebX©"
                    },
                    style: {
                        fontFamily: "assistantLight",
                        fontSize: "1.0625rem",
                    },
                },
                {
                    type: "web-div",
                    name: "social-btns-container",
                    id: utilService.makeId(10),
                    class: "social-btns-container",
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"

                                },
                                style: {

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "https://i.pinimg.com/originals/d2/e5/35/d2e5359f8402cb8d3d7b22c463f9013b.png"

                                },
                                style: {

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "data:image/png;base64,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"

                                },
                                style: {

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                info: {
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "data:image/png;base64,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"

                                },
                                style: {

                                },
                            }
                        ]
                    },
                    style: {

                    },
                },
            ]

        },
        style: {

        }
    },
    {
        type: "web-container",
        name: "image",
        id: "img003-gallery",
        class: "web-img-gallery-3",
        previewImg: 'https://i.ibb.co/5sbMzdC/img-gallery003.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "img-gallery-3-div",
                    class: "img-gallery-3-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1603924147107-81e7a2b3051e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1606942790567-5783bab8d944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1604676983704-2f2c09b12f93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                },
                                style: {

                                    width: "100%",
                                },
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "img-gallery-3-div",
                    class: "img-gallery-3-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1601758176559-76c75ead317a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1603558766284-2271e4005ec3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1603827598524-03bc7f6d66f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1290&q=80"
                                },
                                style: {

                                    width: "100%",
                                },
                            }
                        ]
                    },
                },
                {
                    type: "web-div",
                    name: "img-gallery-3-div",
                    class: "img-gallery-3-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1606049503117-f219981aafac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1271&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1574708006722-49b864e787b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                                },
                                style: {

                                    width: "100%",
                                }
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-img",
                                info: {
                                    src: "https://images.unsplash.com/photo-1606942095201-bd139f63b2e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80"
                                },
                                style: {

                                    width: "100%",
                                },
                            }
                        ]
                    },
                },



            ]
        },
        style: {

            padding: "15px",
            width: "100%",

        }
    }
]