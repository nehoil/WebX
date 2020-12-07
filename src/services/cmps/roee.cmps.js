import { utilService } from '@/services/util-service.js'

export const roeeCmps = [{
        type: "web-container",
        name: "image",
        id: "img004-grid gallery",
        class: "web-img-gallery-4",
        previewImg: 'https://i.ibb.co/mq580B5/img-gallery004.jpg',
        info: {
            dir: "row",
            cmps: [{

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-1',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1606077938095-6f0d071b94d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                    },
                    style: {

                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-2',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1580579026987-a06c0f0ea1ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"
                    },
                    style: {

                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-3',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    },
                    style: {

                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-4',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1488153074946-0d3b1bcd029c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    },
                    style: {
                        width: "100%",
                    }
                },
                {

                    id: utilService.makeId(10),
                    class: 'grid-gallery-1-img-5',
                    type: "web-img",
                    info: {
                        src: "https://images.unsplash.com/photo-1605141345147-40ca4889e29f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    },
                    style: {
                        width: "100%",
                    }
                },
            ]
        }
    },

    //HR template
    {
        type: "web-container",
        name: "header1",
        id: "header-hr",
        class: "web-header-hr",
        // previewImg: 'https://i.ibb.co/09X6T9w/preview-header-basic001.jpg',
        info: {
            dir: "row",
            cmps: [{
                    type: "web-div",
                    name: "header-hr",
                    class: "header-hr-div",
                    id: utilService.makeId(10),
                    info: {
                        dir: "column",
                        cmps: [{
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "header-hr-h1",
                                info: {
                                    content: "Every strong headline"
                                },
                                style: {
                                    fontSize: "2.8125rem",
                                    fontWeight: "bold",
                                    letterSpacing: "0.125rem",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "header-hr-sub-h1",
                                info: {
                                    content: "Has a strong subheading"
                                },
                                style: {
                                    fontSize: "2.8125rem",
                                    marginBottom: " 40px",

                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-txt",
                                class: "header-hr-p",
                                info: {
                                    content: "The single letter does not survive the translation from language to language, nor does the word."
                                },
                                style: {

                                    maxWidth: "80ch",
                                },
                            },
                            {
                                id: utilService.makeId(10),
                                type: "web-button",
                                class: "header-hr-btn",
                                info: {
                                    content: "Show Me",
                                    linkTo: "#"
                                },
                                style: {
                                    borderRadius: "2em",
                                },
                            }

                        ]
                    }
                },


            ]
        },
        style: {


        }
    },
]