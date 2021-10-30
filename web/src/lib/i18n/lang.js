import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './langPack/en'
import tw from './langPack/tw'

Vue.use(VueI18n);

const messages={ en, tw };

const i18n = new VueI18n({
    locale: 'tw',
    messages
});

export default i18n