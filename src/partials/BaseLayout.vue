<template>
    <section class="section">
        <h1 class="title" :class="{'is-2': !isMobile, 'is-4': isMobile}">
            <slot name="title"></slot>
        </h1>
        <slot></slot>
    </section>
</template>

<script>

export default {
    data: function() {
        return {
            isActive: false
        }
    },
    computed: {
        isMobile () {
            return this.$store.state.isMobile;
        },
    },
    methods: {
        toggleMenu: function() {
            this.isActive = !this.isActive;
        }
    }
}

</script>

<style lang="scss">
// .navbar-burger {
//   margin-left: 0;
// }

// .navbar.is-fixed-top .navbar-brand {
//   justify-content: space-between;
// }

.section {
    padding-top: 1.5rem;
}
</style>