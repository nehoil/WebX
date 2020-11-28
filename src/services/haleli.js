import { utilService } from '@/services/util-service.js'

export const nehoTemplates = {
        type: "web-container",
        name: "footer",
        id: "footer001",
        class: "footer-1",
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
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "https://i.pinimg.com/originals/d2/e5/35/d2e5359f8402cb8d3d7b22c463f9013b.png"

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
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "data:image/png;base64,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"

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
                                    content: "",
                                    linkTo: "#",
                                    imgUrl: "data:image/png;base64,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"

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
                            }
                        ]
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
            ]

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