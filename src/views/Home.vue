<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Vikings Planner</h1>
          <h2 class="subtitle">Планируй свое развитие в игре Vikings: War of Clans</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content is-medium">

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <router-link to="/research" title="Перейти в раздел Знания">
                  <img src="../assets/promo/promo_research.jpg" alt="Знания" v-if="!isMobile">

                  <nav class="level is-mobile" v-else>
                    <div class="level-left">
                      <div class="level-item"><p class="title is-4">Знания</p></div>
                    </div>

                    <div class="level-right">
                      <p class="level-item">
                        <span class="icon">
                          <i class="fa fa-chevron-right"></i>
                        </span>
                      </p>
                    </div>
                  </nav>
                </router-link>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <router-link to="/buildings" title="Перейти в раздел Здания">
                  <img src="../assets/promo/promo_buildings.jpg" alt="Здания" v-if="!isMobile">

                  <nav class="level is-mobile" v-else>
                    <div class="level-left">
                      <div class="level-item"><p class="title is-4">Здания</p></div>
                    </div>

                    <div class="level-right">
                      <p class="level-item">
                        <span class="icon">
                          <i class="fa fa-chevron-right"></i>
                        </span>
                      </p>
                    </div>
                  </nav>
                </router-link>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <router-link to="/equip" title="Перейти в раздел Вещи">
                  <img src="../assets/promo/promo_materials.jpg" alt="Материалы для вещей" v-if="!isMobile">

                  <nav class="level is-mobile" v-else>
                    <div class="level-left">
                      <div class="level-item"><p class="title is-4">Вещи</p></div>
                    </div>

                    <div class="level-right">
                      <p class="level-item">
                        <span class="icon">
                          <i class="fa fa-chevron-right"></i>
                        </span>
                      </p>
                    </div>
                  </nav>
                </router-link>
              </div>
            </div>
          </div>

          <h2>Зачем этот сайт</h2>
          <p>
            Здесь собраны инструменты для планирования своего развития в игре
            <strong>Vikings: War of Clans</strong>.
            Упор сделан на удобство использования - максимум информации при минимуме действий.
            Доступны следующие разделы:
          </p>
          <h3>Знания</h3>

          <p>
            Ученье - свет! Узнай, сколько нужно ресурсов и ускорений для выбранных знаний,
            сколько ускоров можно сэкономить, если дождаться выгодного дня, набивать ли руны для знаний.
            А поможет в этом:
          </p>
          <ul>
            <li>
              выделение всех требуемых знаний в
              <strong>один клик</strong>;
            </li>
            <li>
              <strong>несколько уровней</strong> планирования - можно задать текущие знания, планируемые на день кача и
              планируемые в итоге;
              для каждого уровня будет своя статистика;
            </li>
            <li>
              <strong>точное время</strong> исследований - с учетом всех бонусов и помощи клана.
            </li>
          </ul>
          <p>
            <router-link to="/research/warfare">
              <!-- <img src="../assets/vik/research/warfare.png" width="20" alt="icon"> -->
              <span class="img research-warfare w20"></span>
              Знания - Военные
            </router-link>
          </p>
          <p>
            <router-link to="/research/invaders">
              <!-- <img src="../assets/vik/research/invaders.png" width="20" alt="icon"> -->
              <span class="img research-invaders w20"></span>
              Знания - Захватчики
            </router-link>
          </p>
          <p>
            <router-link to="/research/hero">
              <!-- <img src="../assets/vik/research/hero.png" width="20" alt="icon"> -->
              <span class="img research-hero w20"></span>
              Знания - Герой
            </router-link>
          </p>
          <p>
            <router-link to="/research/tier6">
              <!-- <img src="../assets/vik/research/tier6.png" width="20" alt="icon"> -->
              <span class="img research-tier6 w20"></span>
              Знания - Тир 6
            </router-link>
          </p>
          <p>
            <router-link to="/research/tier7">
              <!-- <img src="../assets/vik/research/tier6.png" width="20" alt="icon"> -->
              <span class="img research-tier7 w20"></span>
              Знания - Тир 7
              <span class="tag is-success">Новое</span>
            </router-link>
          </p>
          <p>
            <router-link to="/research/shaman">
              <!-- <img src="../assets/vik/research/shaman.png" width="20" alt="icon"> -->
              <span class="img research-shaman w20"></span>
              Знания - Шаманы
            </router-link>
          </p>
          <p>
            <router-link to="/help/research">Как пользоваться разделом Знания</router-link>
          </p>
          <h3>Здания</h3>
          <p>
            Такой же удобный калькулятор для развития замка, как и для знаний.
          </p>
          <p>
            <router-link to="/buildings">Перейти к зданиям</router-link>
          </p>
          <h3>Вещи</h3>
          <p>
            Даже с малым могуществом можно весьма неприятно удивить соперника, подобрав правильную
            экипировку. Этот раздел поможет узнать, сколько и каких нужно материалов для крафта
            всего необходимого. Каких уберов бить и бить ли их вообще или переключиться на обычных
            захватчиков - ответы на эти вопросы в этом разделе.
          </p>
          <ul>
            <li>
              добавление популярных сетов в
              <strong>один клик</strong>;
            </li>
            <li>
              <strong>удобная</strong> таблица материалов;
            </li>
            <li>
              возможность помечать
              <strong>собранные компоненты</strong> - всегда актуальный список материалов.
            </li>
          </ul>
          <p>
            <router-link to="/equip">Перейти к вещам</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      description: 'Инструменты для планирования своего развития в игре Vikings: War of Clans. ' +
        'Калькуляторы для знаний, зданий, вещам/экипировке и материалам для них.'
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  metaInfo() {
    return {
      title: 'Главная',
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:title', content: 'Главная | Vikings Planner'},
        { property: 'og:url', content: this.$baseUrl + '/'}
      ]
    };
  },
  mounted() {
    gtag('config', this.$gtag, {'page_path': '/'});
  }
};
</script>

<style lang="scss"></style>
