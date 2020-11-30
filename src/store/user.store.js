
import { utilService } from '../services/util-service.js'

// if (utilService.loadFromStorage('draft_db')) localDraftSite = utilService.loadFromStorage('draft_db')

import { templateService } from '@/services/template.service.js'

export const webStore = {
  state: {
    loggedinUser: null,
    templates: templateService.getTemplates()
  },
  getters: {
    templatesOfUser(state) {
      return state.templates.filter(site => site.createdBy.username === loggedinUser)
    }
  },
  mutations: {

  },
  actions: {

  }
};