<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/">ВикПлан</router-link></li>
        <li class="is-active"><a href="#" aria-current="page">Выработка ресурсов</a></li>
      </ul>
    </nav>

    <h1 class="title" :class="{'is-2': !isMobile, 'is-4': isMobile}">Выработка ресурсов</h1>

    <div class="field has-addons prod-card">
      <div class="control">
        <div class="select">
          <select v-model="newProdType">
            <option value="food">Еда</option>
            <option value="lumber">Дерево</option>
            <option value="iron">Железо</option>
            <option value="stone">Камень</option>
            <option value="silver">Серебро</option>
          </select>
        </div>
      </div>
      <div class="control">
        <button type="submit" class="button is-primary" @click="addProd()">Добавить</button>
      </div>
    </div>
    <h2 class="title is-4">Мои наборы</h2>
    <div class="card prod-card" v-for="entry in productions" :key="entry.id">
      <!-- <header class="card-header">
                <p class="card-header-title">
                    {{ prodNames[entry.type] }}
                </p>
                <span class="card-header-icon">
                    {{ entry.prod | formatNumber }} / ч
                </span>
            </header>
            <div class="card-content">
                <div class="content">
                    {{ entry.note }}

                    <div class="level is-mobile">
                        <div class="level-left">
                        </div>
                        <div class="level-right">
                            <p class="level-item"><a class="button is-danger is-inverted">Удалить</a></p>
                            <p class="level-item">
                                <a class="button is-info is-inverted" @click="openEditor(entry.id)">
                                    Открыть
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
      </div>-->
      <div class="card-content">
        <p class="is-pulled-right has-text-right">{{ entry.prod | formatNumber }} / ч</p>
        <p class="title is-4">{{ prodNames[entry.type] }}</p>
        <p class="subtitle is-6">{{ entry.note }}</p>
        <div class="level is-mobile">
          <div class="level-left"></div>
          <div class="level-right">
            <p class="level-item">
              <a class="button is-danger is-inverted">Удалить</a>
            </p>
            <p class="level-item">
              <a class="button is-info is-inverted" @click="openEditor(entry.id)">Открыть</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      prodNames: {
        food: "Еда",
        lumber: "Дерево",
        iron: "Железо",
        stone: "Камень",
        silver: "Серебро"
      },
      newProdType: "food",
      description: 'Составить список сетов для выработки ресурсов в игре Vikings: War of Clans. ' +
        'Доступные ресурсы - еда, дерево, железо. камень, серебро.'
    };
  },
  computed: {
    productions() {
      return this.$store.getters["prod/getProdList"];
    },
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  metaInfo() {
    return {
      title: 'Выработка ресурсов',
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:title', content: 'Выработка ресурсов | Vikings Planner'},
        { property: 'og:url', content: this.$baseUrl + '/prod'}
      ]
    };
  },
  methods: {
    openEditor: function(id) {
      this.$router.push({ path: `/prod/${id}` });
    },
    addProd: function() {
      this.$store.commit("prod/addBonus", this.newProdType);
    }
  },
  mounted() {
    gtag('config', this.$gtag, {'page_path': '/prod'});
  }
};
</script>

<style lang="scss">
p.spaced {
  margin-bottom: 2rem;
}

.card.prod-card {
  margin-bottom: 1rem;
  max-width: 400px;
}

.prod-card .card-content {
  padding: 0.5rem 0.75rem 0;
}

.prod-card .subtitle {
  margin-bottom: 0;
}
</style>
