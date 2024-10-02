const ROUT_PAHT = {

  AUTH: {
    DEFAULTS: 'auth',
    LOGIN: {
      DEFAULT: 'login'
    },
    NEW: {
      DEFAULT: 'new-account'
    }
  },
  HEROS: {
    DEFAULTS: 'heroes',
    NEW_HERO: {
      LIST: 'new-hero'
    },
    SEARCH: {
      LIST: 'search'
    },
    EDIT: {
      DEFAULT: 'edit',
      ID: 'id'
    },
    LIST: {
      DEFAULT: 'list'
    },
    ID:{
      DEFAULTS: ':id'
    }

  }
}

const {AUTH, HEROS} = ROUT_PAHT;
const {DEFAULTS, NEW_HERO, SEARCH, EDIT, LIST} = HEROS;

export const INTERNAL_ROUTES = {
  /**
   * Estas rutas pertenecen al modulo de auth
   */
  MODULE_AUTH_DEFAULT:  `${AUTH.DEFAULTS}`,
  PAGE_AUTH_LOGIN:      `${AUTH.LOGIN.DEFAULT}`,
  PAGE_AUTH_NEW_ACCOUNT:`${AUTH.NEW.DEFAULT}`,

  /**
   * Estas rutas pertenecen al modulo de heroes
   */

  MODULE_HEROS_DEFAULT: `${HEROS.DEFAULTS}`,
  PAGE_HERO_NEW_HERO:   `${HEROS.NEW_HERO.LIST}`,
  PAGE_SEARCH_HERO:     `${HEROS.SEARCH.LIST}`,
  PAGE_HERO_EDIT:       `${HEROS.EDIT.DEFAULT}/:${HEROS.EDIT.ID}`,
  PAGE_HERO_LIST:       `${HEROS.LIST.DEFAULT}`,
  PAGE_HERO_ID:         `${HEROS.ID.DEFAULTS}`,
  PAGE_HERO_LIST_ID:    `${HEROS.DEFAULTS}/${HEROS.LIST.DEFAULT}`,
}
