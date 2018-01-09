<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-08T18:04:21+01:00
@Email:  andreeray@live.com
@Filename: EventForm.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-09T12:54:40+01:00
-->
<template>
    <div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
        <h4>Add Event</h4>
        <div class="text">
            <input v-focus type="text" v-model="description" placeholder="Add Event" @keyup.enter="create">
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
        <button id="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: ''
        }
    },
    methods: {
        close () {
            this.$store.commit('eventFormActive', false)
        },
        create () {
            if (this.description.length > 0) {
                this.$store.commit('addEvent', this.description),
                this.description = '',
                this.$store.commit('eventFormActive', false)
            }
        }
    },
    computed: {
        active () {
            return this.$store.state.eventFormActive
        },
        top () {
            return `${this.$store.state.eventFormPosY}px`
        },
        left () {
            return `${this.$store.state.eventFormPosX}px`
        }
    },
    directives: {
        focus: {
            update (el) {
                el.focus()
            }
        }
    }
}
</script>
