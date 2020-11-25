const gTemplates = []
const gCmps = []

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

