/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-07T19:15:29+01:00
 * @Email:  andreeray@live.com
 * @Filename: web.entry.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-08T17:26:47+01:00
 */



import Vue from 'vue'
import './style.scss'

import store from './store'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment} })

import App from './components/App.vue'

new Vue({
    el: '#app',
    data: {
        moment
    },
    components: {
        App
    },
    store
});
