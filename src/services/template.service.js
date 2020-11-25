const gTemplates = []
const gCmps = [

    {
        id: "wc02-txt",
        type: "web-container",
        info: {
            dir: "column",
            cmps: [{
                id: "wc07",
                type: "web-txt",
                info: {
                    content: "This is a sample text"
                }
            }, ]
        },

    },
    {
        id: "wc05-txt",
        type: "web-container",
        info: {
            dir: "column",
            cmps: [{
                    id: "wc08",
                    type: "web-txt",
                    info: {
                        content: "This is a different sample text@#$"
                    },

                },
                {
                    id: "wc03",
                    type: "web-button",
                    info: {
                        content: "Click here",
                        linkTo: "/home"
                    },

                }
            ]
        },

    },
    {
        id: "wc06-map",
        type: "web-container",
        info: {
            dir: "column",
            cmps: [{
                    id: "wc09",
                    type: "web-txt",
                    info: {
                        content: "This is a map"
                    },

                },
                {
                    id: "wc04",
                    type: "web-map",
                    info: {
                        title: "",
                        lat: 46332,
                        lng: 63464,
                        zoom: 2,
                        address: "Paris"
                    },

                }
            ]
        },

    },
    // {
    //     "id": "wc02",
    //     "type": "web-container",
    //     "info": {
    //         "dir": "column",
    //         "cmps": [
    //             {
    //                 "id": "wc05",
    //                 "type": "web-img",
    //                 "info": {
    //                     "content": "http://serverless.css-tricks.com/img/food.svg"
    //                 },

    //             },
    //             {
    //                 "id": "wc06",
    //                 "type": "web-video",
    //                 "info": {
    //                     "content": "https://www.youtube.com/embed/L6X0PqIWfzQ",
    //                     "title": "watch this video!"
    //                 },

    //             }
    //         ]
    //     },

    // },
    // {
    //     "id": "wc02",
    //     "type": "web-container",
    //     "info": {
    //         "dir": "column",
    //         "cmps": [
    //             {
    //                 "id": "wc08",
    //                 "type": "web-list",
    //                 "info": {
    //                     "content": "This is a ul/ol list",
    //                     "li-txt": {
    //                         "1": "I am li - 1",
    //                         "2": "I am li - 2",
    //                         "3": "I am li - 3"
    //                     }
    //                 },

    //             },
    //             {
    //                 "id": "wc06",
    //                 "type": "web-video",
    //                 "info": {
    //                     "content": "https://www.youtube.com/embed/L6X0PqIWfzQ",
    //                     "title": "watch this video!"
    //                 },

    //             }
    //         ]
    //     },

    // },
    // {
    //     "id": "wc02",
    //     "type": "web-container",
    //     "info": {
    //         "dir": "column",
    //         "cmps": [
    //             {
    //                 "id": "wc05",
    //                 "type": "web-img",
    //                 "info": {
    //                     "content": "https://serverless.css-tricks.com/img/food.svg"
    //                 },

    //             },
    //             {
    //                 "id": "wc07",
    //                 "type": "web-form",
    //                 "info": {
    //                     "content": [
    //                         {
    //                             "placeHolder": "Title",
    //                             "type": "text"
    //                         },
    //                         {
    //                             "placeHolder": "Email",
    //                             "type": "email"
    //                         },
    //                         {
    //                             "placeHolder": "Subject",
    //                             "type": "text"
    //                         }
    //                     ],
    //                     "cmps": [
    //                         {
    //                             "type": "web-button",
    //                             "info": {
    //                                 "title": "",
    //                                 "linkTo": ""
    //                             },

    //                         }
    //                     ]
    //                 }
    //             }
    //         ]
    //     },

    // }
]


export const templateService = {
    getEmptyTemplate,
    getCmpsByType,
    getTemplateById,
    getCmpById
}

function getEmptyTemplate() {
    return {
        _id: null,
        name: null,
        previewImg: null,
        createdBy: {
            _id: null,
            username: null,
            userPicture: null
        },
        cmps: []
    }
}


function getCmpsByType(type) {
    return gCmps.filter(cmps => cmps.type === type)
}

function getTemplateById(id) {
    return gTemplates.filter(template => template.id === id)
}

function getCmpById(id) {
    return gCmps.filter(cmp => cmp.id === id)
}