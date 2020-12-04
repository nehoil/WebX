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
                        src: "https://images.unsplash.com/photo-1606336027462-405dcc8c3724?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
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
                        src: "https://images.unsplash.com/photo-1553678912-d3afb0b41d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
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
                        src: "https://images.unsplash.com/photo-1584505489914-89bfece45d2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
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
                        src: "https://images.unsplash.com/photo-1605898432127-472663aa3a72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80"
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
                        src: "https://images.unsplash.com/photo-1582188269299-909c3952762d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80"
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
        name: "header",
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
                                class: "header-hr-p",
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
                                class: "header-hr-btn",
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
]