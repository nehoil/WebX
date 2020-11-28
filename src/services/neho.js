import { utilService } from '@/services/util-service.js'

export const nehoTemplates =     {
    type: "web-container",
    name: "card",
    id: "new-card",
    class: "web-card-3-container",
    info: {
        dir: "row",
        cmps: [{
            type: "web-div",
            name: "card",
            id: utilService.makeId(10),
            class: "web-card-3-div",
            info: {
                dir: "row",
                cmps: [{
                        id: utilService.makeId(10),
                        type: "web-img",
                        info: {
                            src: "https://i.ibb.co/dmScMv8/g24.png"
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
                        type: "web-txt",
                        info: {
                            content: "This is card txt"
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
                            content: "This is button text",
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
                    }
                ]
            },
            style: {
                fontFamily: "unset",
                fontSize: "unset",
                fontWeight: "unset",
                letterSpacing: "unset",
                padding: "15px",
                backgroundColor: "unset",
                borderRadius: "unset",
                width: "100%",
                minHeight: "unset",
                height: "unset",
                backgroundImage: "unset"
            },

        }]
    },
    style: {
        fontFamily: "unset",
        fontSize: "unset",
        fontWeight: "unset",
        letterSpacing: "unset",
        padding: "15px",
        backgroundColor: "unset",
        borderRadius: "unset",
        width: "100%",
        minHeight: "unset",
        height: "unset",
        backgroundImage: "unset"
    }
}