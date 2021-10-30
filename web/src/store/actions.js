import * as types from './mutations_type.js'
// import axios from 'axios';

export const updateLang = ({ commit }, lang) => {
    commit( types.UPDATE_LANG, lang );
}
