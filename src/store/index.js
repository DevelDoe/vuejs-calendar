/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-08T17:23:39+01:00
 * @Email:  andreeray@live.com
 * @Filename: index.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-09T13:06:16+01:00
 */
import Vue from 'vue'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')

import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentYear: 2018,
        currentMonth: 1,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        eventFormDate: moment(),
        events: [
            { description: 'Random Event 1', date: moment('2018-01-01', 'YYYY-MM-DD')},
            { description: 'Random Event 2', date: moment('2018-01-13', 'YYYY-MM-DD')},
            { description: 'Random Event 3', date: moment('2018-02-12', 'YYYY-MM-DD')}
        ]
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x
            state.eventFormPosY = payload.y
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload
        },
        addEvent(state, payload) {
            state.events.push({
                description: payload,
                date: state.eventFormDate
            })
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload
        }
    }
})
