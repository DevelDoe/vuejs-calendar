<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-08T14:01:22+01:00
@Email:  andreeray@live.com
@Filename: CalenderDay.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-09T13:10:57+01:00
-->
<template>
    <div :class="classObject" @click="onClick">
        {{ day.format('D') }}
        <ul class="event-list">
            <li v-for="event in events">{{ event.description }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'day' ],
    computed: {
        events () {
            return this.$store.state.events.filter(event => event.date.isSame(this.day, 'day'))
        },
        classObject() {
            let today = this.day.isSame(this.$moment(), 'day')
            let eventFormDate = this.$store.state.eventFormDate
            let eventFormActive = this.$store.state.eventFormActive
            return {
                day: true,
                today,
                past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
                active: eventFormDate.isSame(this.day, 'day') && eventFormActive
            }
        }
    },
    methods: {
        onClick (event) {
            this.$store.commit('eventFormPos', { x: event.clientX, y: event.clientY })
            this.$store.commit('eventFormActive', true)
            this.$store.commit('eventFormDate', this.day)
        }
    }
}
</script>
