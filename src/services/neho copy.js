import { utilService } from '@/services/util-service.js'

export const nehoTemplates =     {
    type: "web-container",
    name: "card",
    id: "saas-card",
    class: "web-card-3-container",
    info: {
        dir: "row",
        cmps: [
            {
                id: utilService.makeId(10),
                type: "web-img",
                info: {
                    src: "https://i.ibb.co/dmScMv8/g24.png"
                },
                style: {
                },
            },
            {
            type: "web-div",
            name: "card",
            id: utilService.makeId(10),
            class: "web-card-3-div",
            info: {
                dir: "row",
                cmps: [
                    {
                        id: utilService.makeId(10),
                        type: "web-txt",
                        class: "web-card-3-title",
                        info: {
                            content: "Your Payment Process, Simplified."
                        },
                        style: {
                        },
                    },
                    {
                        id: utilService.makeId(10),
                        type: "web-txt",
                        class: "web-card-3-pa",
                        info: {
                            content: "You can finally customize everything on your website, easily and directly. Elementor is the editor for designers who want to fine-tune every last detail."
                        },
                        style: {
                        },
                    },
                ]
            },
            style: {
            },

        }]
    },
    style: {
    }
}