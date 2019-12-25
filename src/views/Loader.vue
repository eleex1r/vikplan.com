<template>
  <section class="section">
    <!-- <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/">ВикПлан</router-link></li>
        <li class="is-active"><a href="#" aria-current="page">Тест</a></li>
      </ul>
    </nav>

    <h1 class="title" :class="{'is-2': !isMobile, 'is-4': isMobile}">Тест</h1>

    <button class="button is-success" @click="loadData">Load</button>-->
    <h2 class="is-loading" v-show="isLoading">Загружаем прокачку...</h2>

    <div class="container" v-show="!isLoading">
      <div class="content is-medium">
        <h4>Прокачка не найдена. Возможно, ссылка устарела. </h4>

        <p>
          <router-link to="/research">Обзор знаний</router-link>
        </p>
        <p>
          <router-link to="/research/warfare">
            <span class="img research-warfare w20"></span>
            Знания - Военные
          </router-link>
        </p>
        <p>
          <router-link to="/research/invaders">
            <span class="img research-invaders w20"></span>
            Знания - Захватчики
          </router-link>
        </p>
        <p>
          <router-link to="/research/hero">
            <span class="img research-hero w20"></span>
            Знания - Герой
          </router-link>
        </p>
        <p>
          <router-link to="/research/tier6">
            <span class="img research-tier6 w20"></span>
            Знания - Тир 6
          </router-link>
        </p>
        <p>
          <router-link to="/research/tier7">
            <span class="img research-tier7 w20"></span>
            Знания - Тир 7
          </router-link>
        </p>
        <p>
          <router-link to="/research/shaman">
            <span class="img research-shaman w20"></span>
            Знания - Шаманы
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      isLoading: true
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    name() {
      return this.$route.params.name;
    }
  },
  metaInfo() {
    return {
      title: 'Загрузчик',
    };
  },
  methods: {
    // loadData: function() {
    //   var docRef = firestore.collection('research').doc('1001');
    //   docRef.get().then(doc => {
    //     if (doc.exists) {
    //       console.log(doc.data());
    //     }
    //   });
    // }
  },
  mounted() {
    //console.log('mounted', this.researchType);
    gtag('config', this.$gtag, { page_path: '/shared' });

    this.$store.dispatch('firestore/load', this.name).then(result => {
      if (result) {
        this.$router.replace('/research');
      } else {
        this.isLoading = false;
      }
    });
  }
};
</script>

<style lang="scss">
</style>
