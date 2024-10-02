import {environments} from "@environments/environments";


const BASE_URL = {
  HEROS: {
    DEFAULTS: `${environments.urlBase}`,

  },
  BACKEND_AUTH: {
    DEFAULTS: `${environments.urlBackend}`
  }
}
export const HERO = {


  GET_HEROS: `${BASE_URL.HEROS.DEFAULTS}/heros`,
  GET_HERO_ID: (id: string) => `${BASE_URL.HEROS.DEFAULTS}/hero/${id}`,
  GET_HERO_SUGGESTION: (query: string) => `${BASE_URL.HEROS.DEFAULTS}/suggestions?q=${encodeURIComponent(query)}`,
  UPDATE_HERO: `${BASE_URL.HEROS.DEFAULTS}/update`,
  DELETE_HERO_ID: (id: string) => `${BASE_URL.HEROS.DEFAULTS}/delete/${id}`,
}

export const AUTH = {

  GET_LOGIN: `${BASE_URL.HEROS.DEFAULTS}/users/1 `,
  POST_LOGIN_USER: `${BASE_URL.BACKEND_AUTH.DEFAULTS}/auth/login`,
  POST_REGISTER_USER: `${BASE_URL.BACKEND_AUTH.DEFAULTS}/auth/register`
}
