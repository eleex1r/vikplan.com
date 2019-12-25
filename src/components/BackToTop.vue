<template>
    <div id="backtotop" :class="{visible: visible}" @click="backToTop"><a href="#"></a></div>
</template>

<script>
export default {
    name: 'BackToTop',
    props: {
        visibleoffset: {
            type: [String, Number],
            default: 200
        }
    },
    data () {
        return {
            visible: false
        }
    },
    mounted () {
        window.smoothscroll = () => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
            if (currentScroll > 0) {
                window.requestAnimationFrame(window.smoothscroll)
                window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
            }
        }
        window.addEventListener('scroll', this.catchScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.catchScroll)
    },
    methods: {
        catchScroll () {
            this.visible = (window.pageYOffset > parseInt(this.visibleoffset))
        },
        backToTop () {
            window.smoothscroll()
        }
    }
}
</script>

<style lang="scss">

#backtotop {
    position: fixed;
    right: 0;
    opacity: 0;
    visibility: hidden;
    bottom: 25px;
    margin: 0 25px 0 0;
    z-index: 9999;
    transition: 0.35s;
    transform: scale(0.7);
    transition: all 0.5s;
}

#backtotop.visible {
    opacity: 1;
    visibility: visible;
    transform: scale(1);

}

#backtotop.visible a:hover {
    outline: none;
    opacity: 0.9;
    background:  #0084c4; //$secondary;
}

#backtotop a {
    outline: none;
    text-decoration: none;
    border: 0 none;
    display: block;
    width: 46px;
    height: 46px;
    background-color: #66676b; //$medium-grey;
    opacity: 1;
    transition: all 0.3s;
    border-radius: 50%;
    text-align: center;
    font-size: 26px
}

body #backtotop a {
    outline: none;
    color: #fff;
}

#backtotop a:after {
    outline: none;
    content: "\f106";
    font-family: "FontAwesome";
    position: relative;
    display: block;
    top: 50%;
    -webkit-transform: translateY(-55%);
    transform: translateY(-55%);
}

</style>

