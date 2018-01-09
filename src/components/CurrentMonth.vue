<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-08T15:02:27+01:00
@Email:  andreeray@live.com
@Filename: currentMonth.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-08T17:42:06+01:00
-->
<template>
    <div class="">
        <div>{{ formatedDate }}</div>
        <button type="button" name="button" @click="dec">-</button>
        <button type="button" name="button" @click="inc">+</button>
    </div>
</template>

<script>
export default {
    computed: {
        year() { return this.$store.state.currentYear },
        month() { return this.$store.state.currentMonth },
        formatedDate() { return  this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format('MMMM YYYY') }
    },
    methods: {
        dec () {
            if (this.month === 1) {
                this.$store.commit('setCurrentMonth', 12)
                this.$store.commit('setCurrentYear', this.year - 1)
            } else {
                this.$store.commit('setCurrentMonth', this.month - 1)
            }
        },
        inc () {
            if (this.month === 12) {
                this.$store.commit('setCurrentMonth', 1)
                this.$store.commit('setCurrentYear', this.year + 1)
            } else {
                this.$store.commit('setCurrentMonth', this.month + 1)
            }
        }
    }
}
</script>
