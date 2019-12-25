<template>
  <section class="section equipment">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">ВикПлан</router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">Вещи и материалы</a>
        </li>
      </ul>
    </nav>

    <h1 class="title" :class="{'is-2': !isMobile, 'is-4': isMobile}">Наборы вещей и материалы</h1>

    <equipment-planner></equipment-planner>

    <div style="margin-bottom: 10px;">
      <label class="checkbox">
        <input type="checkbox" v-model="showStorage">
        Показывать цветом собранные материалы (с помощью клика по материалу)
      </label>
    </div>

    <table class="table is-bordered is-narrow">
      <tbody>
        <tr v-if="isMobile">
          <th colspan="12">Обычные материалы</th>
        </tr>
        <tr>
          <th v-if="!isMobile" rowspan="2">Обычные материалы</th>
          <th class="is-img">
            <span class="img m041 w30" title="Алмаз" style="width:24px;"></span>
          </th>
          <th class="is-img">
            <span class="img m011 w30" title="Веревка"></span>
          </th>
          <th class="is-img">
            <span class="img m031 w30" title="Гранит"></span>
          </th>
          <th class="is-img">
            <span class="img m032 w30" title="Кожа"></span>
          </th>
          <th class="is-img">
            <span class="img m021 w30" title="Обломки"></span>
          </th>
          <th class="is-img">
            <span class="img m022 w30" title="Перо"></span>
          </th>
          <th class="is-img" v-if="!isMobile">
            <span class="img m042 w30" title="Свинец"></span>
          </th>
          <th class="is-img" v-if="!isMobile">
            <span class="img m043 w30" title="Сталь"></span>
          </th>
          <th class="is-img" v-if="!isMobile">
            <span class="img m033 w30" title="Стекло"></span>
          </th>
          <th class="is-img" v-if="!isMobile">
            <span class="img m012 w30" title="Хлопок"></span>
          </th>
          <th class="is-img" v-if="!isMobile">
            <span class="img m023 w30" title="Шкура"></span>
          </th>
          <th class="is-img" v-if="!isMobile">
            <span class="img m013 w30" title="Эссенция"></span>
          </th>
        </tr>
        <tr class="is-center">
          <td>{{ materials['Алмаз'].req }}</td>
          <td>{{ materials['Веревка'].req }}</td>
          <td>{{ materials['Гранит'].req }}</td>
          <td>{{ materials['Кожа'].req }}</td>
          <td>{{ materials['Обломки'].req }}</td>
          <td>{{ materials['Перо'].req }}</td>
          <td v-if="!isMobile">{{ materials['Свинец'].req }}</td>
          <td v-if="!isMobile">{{ materials['Сталь'].req }}</td>
          <td v-if="!isMobile">{{ materials['Стекло'].req }}</td>
          <td v-if="!isMobile">{{ materials['Хлопок'].req }}</td>
          <td v-if="!isMobile">{{ materials['Шкура'].req }}</td>
          <td v-if="!isMobile">{{ materials['Эссенция'].req }}</td>
        </tr>
        <tr v-if="isMobile">
          <th class="is-img">
            <span class="img m042 w30" title="Свинец"></span>
          </th>
          <th class="is-img">
            <span class="img m043 w30" title="Сталь"></span>
          </th>
          <th class="is-img">
            <span class="img m033 w30" title="Стекло"></span>
          </th>
          <th class="is-img">
            <span class="img m012 w30" title="Хлопок"></span>
          </th>
          <th class="is-img">
            <span class="img m023 w30" title="Шкура"></span>
          </th>
          <th class="is-img">
            <span class="img m013 w30" title="Эссенция"></span>
          </th>
        </tr>
        <tr class="is-center" v-if="isMobile">
          <td>{{ materials['Свинец'].req }}</td>
          <td>{{ materials['Сталь'].req }}</td>
          <td>{{ materials['Стекло'].req }}</td>
          <td>{{ materials['Хлопок'].req }}</td>
          <td>{{ materials['Шкура'].req }}</td>
          <td>{{ materials['Эссенция'].req }}</td>
        </tr>
      </tbody>
    </table>
    <div class="columns">
      <div class="column is-narrow">
        <table class="table is-bordered is-narrow">
          <tbody>
            <tr>
              <th rowspan="8" class="is-center">Аварин</th>
              <th rowspan="2" :class="{'is-ready': storage['m11']}">Гвардеец</th>
              <th class="is-img" @click="onMaterialClick('Белая Кожа')">
                <!-- <img src="../assets/vik/materials/m111.png" width="30" title="Белая Кожа"> -->
                <span class="img m111 w30" title="Белая Кожа"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Заклепки')">
                <!-- <img src="../assets/vik/materials/m112.png" width="30" title="Заклепки"> -->
                <span class="img m112 w30" title="Заклепки"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Латные Элементы')">
                <!-- <img src="../assets/vik/materials/m113.png" width="30" title="Латные Элементы"> -->
                <span class="img m113 w30" title="Латные Элементы"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Литая Сталь')">
                <!-- <img src="../assets/vik/materials/m114.png" width="30" title="Литая Сталь"> -->
                <span class="img m114 w30" title="Литая Сталь"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Навершие')">
                <!-- <img src="../assets/vik/materials/m115.png" width="30" title="Навершие"> -->
                <span class="img m115 w30" title="Навершие"></span>
              </th>
            </tr>
            <tr class="is-center">
              <!-- <td>{{ materials['Белая Кожа'].req }}</td>
              <td>{{ materials['Заклепки'].req }}</td>
              <td>{{ materials['Латные Элементы'].req }}</td>
              <td>{{ materials['Литая Сталь'].req }}</td>
              <td>{{ materials['Навершие'].req }}</td> -->
              <td
                :class="{'is-ready': storage['Белая Кожа']}"
                @click="onMaterialClick('Белая Кожа')"
              >{{ materials['Белая Кожа'].req }}</td>
              <td
                :class="{'is-ready': storage['Заклепки']}"
                @click="onMaterialClick('Заклепки')"
              >{{ materials['Заклепки'].req }}</td>
              <td
                :class="{'is-ready': storage['Латные Элементы']}"
                @click="onMaterialClick('Латные Элементы')"
              >{{ materials['Латные Элементы'].req }}</td>
              <td
                :class="{'is-ready': storage['Литая Сталь']}"
                @click="onMaterialClick('Литая Сталь')"
              >{{ materials['Литая Сталь'].req }}</td>
              <td
                :class="{'is-ready': storage['Навершие']}"
                @click="onMaterialClick('Навершие')"
              >{{ materials['Навершие'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m12']}">Кельт</th>
              <th class="is-img" @click="onMaterialClick('Глина')">
                <!-- <img src="../assets/vik/materials/m121.png" width="30" title="Глина"> -->
                <span class="img m121 w30" title="Глина"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Клевер')">
                <!-- <img src="../assets/vik/materials/m122.png" width="30" title="Клевер"> -->
                <span class="img m122 w30" title="Клевер"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Лезвие Секиры')">
                <!-- <img src="../assets/vik/materials/m123.png" width="30" title="Лезвие Секиры"> -->
                <span class="img m123 w30" title="Лезвие Секиры"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Слиток Меди')">
                <!-- <img src="../assets/vik/materials/m124.png" width="30" title="Слиток Меди"> -->
                <span class="img m124 w30" title="Слиток Меди"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Струна')">
                <!-- <img src="../assets/vik/materials/m125.png" width="30" title="Струна"> -->
                <span class="img m125 w30" title="Струна"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Глина']}"
                @click="onMaterialClick('Глина')"
              >{{ materials['Глина'].req }}</td>
              <td
                :class="{'is-ready': storage['Клевер']}"
                @click="onMaterialClick('Клевер')"
              >{{ materials['Клевер'].req }}</td>
              <td
                :class="{'is-ready': storage['Лезвие Секиры']}"
                @click="onMaterialClick('Лезвие Секиры')"
              >{{ materials['Лезвие Секиры'].req }}</td>
              <td
                :class="{'is-ready': storage['Слиток Меди']}"
                @click="onMaterialClick('Слиток Меди')"
              >{{ materials['Слиток Меди'].req }}</td>
              <td
                :class="{'is-ready': storage['Струна']}"
                @click="onMaterialClick('Струна')"
              >{{ materials['Струна'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m13']}">Хазарин</th>
              <th class="is-img" @click="onMaterialClick('Древко Стрелы')">
                <!-- <img src="../assets/vik/materials/m131.png" width="30" title="Древко Стрелы"> -->
                <span class="img m131 w30" title="Древко Стрелы"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Крепкая Тетива')">
                <!-- <img src="../assets/vik/materials/m132.png" width="30" title="Крепкая Тетива"> -->
                <span class="img m132 w30" title="Крепкая Тетива"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Кусок Войлока')">
                <!-- <img src="../assets/vik/materials/m133.png" width="30" title="Кусок Войлока"> -->
                <span class="img m133 w30" title="Кусок Войлока"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Кусок Кольчуги')">
                <!-- <img src="../assets/vik/materials/m134.png" width="30" title="Кусок Кольчуги"> -->
                <span class="img m134 w30" title="Кусок Кольчуги"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Элемент Брони')">
                <!-- <img src="../assets/vik/materials/m135.png" width="30" title="Элемент Брони"> -->
                <span class="img m135 w30" title="Элемент Брони"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Древко Стрелы']}"
                @click="onMaterialClick('Древко Стрелы')"
              >{{ materials['Древко Стрелы'].req }}</td>
              <td
                :class="{'is-ready': storage['Крепкая Тетива']}"
                @click="onMaterialClick('Крепкая Тетива')"
              >{{ materials['Крепкая Тетива'].req }}</td>
              <td
                :class="{'is-ready': storage['Кусок Войлока']}"
                @click="onMaterialClick('Кусок Войлока')"
              >{{ materials['Кусок Войлока'].req }}</td>
              <td
                :class="{'is-ready': storage['Кусок Кольчуги']}"
                @click="onMaterialClick('Кусок Кольчуги')"
              >{{ materials['Кусок Кольчуги'].req }}</td>
              <td
                :class="{'is-ready': storage['Элемент Брони']}"
                @click="onMaterialClick('Элемент Брони')"
              >{{ materials['Элемент Брони'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m14']}">Центурион</th>
              <th class="is-img" @click="onMaterialClick('Гипс')">
                <!-- <img src="../assets/vik/materials/m141.png" width="30" title="Гипс"> -->
                <span class="img m141 w30" title="Гипс"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Лавровые Листья')">
                <!-- <img src="../assets/vik/materials/m142.png" width="30" title="Лавровые Листья"> -->
                <span class="img m142 w30" title="Лавровые Листья"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Льняная Ткань')">
                <!-- <img src="../assets/vik/materials/m143.png" width="30" title="Льняная Ткань"> -->
                <span class="img m143 w30" title="Льняная Ткань"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Обрезки Кожи')">
                <!-- <img src="../assets/vik/materials/m144.png" width="30" title="Обрезки Кожи"> -->
                <span class="img m144 w30" title="Обрезки Кожи"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Слитки Бронзы')">
                <!-- <img src="../assets/vik/materials/m145.png" width="30" title="Слитки Бронзы"> -->
                <span class="img m145 w30" title="Слитки Бронзы"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Гипс']}"
                @click="onMaterialClick('Гипс')"
              >{{ materials['Гипс'].req }}</td>
              <td
                :class="{'is-ready': storage['Лавровые Листья']}"
                @click="onMaterialClick('Лавровые Листья')"
              >{{ materials['Лавровые Листья'].req }}</td>
              <td
                :class="{'is-ready': storage['Льняная Ткань']}"
                @click="onMaterialClick('Льняная Ткань')"
              >{{ materials['Льняная Ткань'].req }}</td>
              <td
                :class="{'is-ready': storage['Обрезки Кожи']}"
                @click="onMaterialClick('Обрезки Кожи')"
              >{{ materials['Обрезки Кожи'].req }}</td>
              <td
                :class="{'is-ready': storage['Слитки Бронзы']}"
                @click="onMaterialClick('Слитки Бронзы')"
              >{{ materials['Слитки Бронзы'].req }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="table is-bordered is-narrow">
          <tbody>
            <tr>
              <th rowspan="8" class="is-center">Гепид</th>
              <th rowspan="2" :class="{'is-ready': storage['m41']}">Варвар</th>
              <th class="is-img" @click="onMaterialClick('Бычьи Жилы')">
                <!-- <img src="../assets/vik/materials/m411.png" width="30" title="Бычьи Жилы"> -->
                <span class="img m411 w30" title="Бычьи Жилы"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Вековой Камень')">
                <!-- <img src="../assets/vik/materials/m412.png" width="30" title="Вековой Камень"> -->
                <span class="img m412 w30" title="Вековой Камень"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Железная Цепь')">
                <!-- <img src="../assets/vik/materials/m413.png" width="30" title="Железная Цепь"> -->
                <span class="img m413 w30" title="Железная Цепь"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Овчина')">
                <!-- <img src="../assets/vik/materials/m414.png" width="30" title="Овчина"> -->
                <span class="img m414 w30" title="Овчина"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Смола')">
                <!-- <img src="../assets/vik/materials/m415.png" width="30" title="Смола"> -->
                <span class="img m415 w30" title="Смола"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Бычьи Жилы']}"
                @click="onMaterialClick('Бычьи Жилы')"
              >{{ materials['Бычьи Жилы'].req }}</td>
              <td
                :class="{'is-ready': storage['Вековой Камень']}"
                @click="onMaterialClick('Вековой Камень')"
              >{{ materials['Вековой Камень'].req }}</td>
              <td
                :class="{'is-ready': storage['Железная Цепь']}"
                @click="onMaterialClick('Железная Цепь')"
              >{{ materials['Железная Цепь'].req }}</td>
              <td
                :class="{'is-ready': storage['Овчина']}"
                @click="onMaterialClick('Овчина')"
              >{{ materials['Овчина'].req }}</td>
              <td
                :class="{'is-ready': storage['Смола']}"
                @click="onMaterialClick('Смола')"
              >{{ materials['Смола'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m42']}">Гасконец</th>
              <th class="is-img" @click="onMaterialClick('Железное Шило')">
                <!-- <img src="../assets/vik/materials/m421.png" width="30" title="Железное Шило"> -->
                <span class="img m421 w30" title="Железное Шило"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Каленая Сталь')">
                <!-- <img src="../assets/vik/materials/m422.png" width="30" title="Каленая Сталь"> -->
                <span class="img m422 w30" title="Каленая Сталь"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Крепкая Подошва')">
                <!-- <img src="../assets/vik/materials/m423.png" width="30" title="Крепкая Подошва"> -->
                <span class="img m423 w30" title="Крепкая Подошва"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Отливка Серебра')">
                <!-- <img src="../assets/vik/materials/m424.png" width="30" title="Отливка Серебра"> -->
                <span class="img m424 w30" title="Отливка Серебра"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Тонкая Кожа')">
                <!-- <img src="../assets/vik/materials/m425.png" width="30" title="Тонкая Кожа"> -->
                <span class="img m425 w30" title="Тонкая Кожа"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Железное Шило']}"
                @click="onMaterialClick('Железное Шило')"
              >{{ materials['Железное Шило'].req }}</td>
              <td
                :class="{'is-ready': storage['Каленая Сталь']}"
                @click="onMaterialClick('Каленая Сталь')"
              >{{ materials['Каленая Сталь'].req }}</td>
              <td
                :class="{'is-ready': storage['Крепкая Подошва']}"
                @click="onMaterialClick('Крепкая Подошва')"
              >{{ materials['Крепкая Подошва'].req }}</td>
              <td
                :class="{'is-ready': storage['Отливка Серебра']}"
                @click="onMaterialClick('Отливка Серебра')"
              >{{ materials['Отливка Серебра'].req }}</td>
              <td
                :class="{'is-ready': storage['Тонкая Кожа']}"
                @click="onMaterialClick('Тонкая Кожа')"
              >{{ materials['Тонкая Кожа'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m43']}">Гунн</th>
              <th class="is-img" @click="onMaterialClick('Изрубленный Щит')">
                <!-- <img src="../assets/vik/materials/m431.png" width="30" title="Изрубленный Щит"> -->
                <span class="img m431 w30" title="Изрубленный Щит"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Обломки Стрел')">
                <!-- <img src="../assets/vik/materials/m432.png" width="30" title="Обломки Стрел"> -->
                <span class="img m432 w30" title="Обломки Стрел"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Порванная Ткань')">
                <!-- <img src="../assets/vik/materials/m433.png" width="30" title="Порванная Ткань"> -->
                <span class="img m433 w30" title="Порванная Ткань"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Разбитый Колчан')">
                <!-- <img src="../assets/vik/materials/m434.png" width="30" title="Разбитый Колчан"> -->
                <span class="img m434 w30" title="Разбитый Колчан"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Старый Ремень')">
                <!-- <img src="../assets/vik/materials/m435.png" width="30" title="Старый Ремень"> -->
                <span class="img m435 w30" title="Старый Ремень"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Изрубленный Щит']}"
                @click="onMaterialClick('Изрубленный Щит')"
              >{{ materials['Изрубленный Щит'].req }}</td>
              <td
                :class="{'is-ready': storage['Обломки Стрел']}"
                @click="onMaterialClick('Обломки Стрел')"
              >{{ materials['Обломки Стрел'].req }}</td>
              <td
                :class="{'is-ready': storage['Порванная Ткань']}"
                @click="onMaterialClick('Порванная Ткань')"
              >{{ materials['Порванная Ткань'].req }}</td>
              <td
                :class="{'is-ready': storage['Разбитый Колчан']}"
                @click="onMaterialClick('Разбитый Колчан')"
              >{{ materials['Разбитый Колчан'].req }}</td>
              <td
                :class="{'is-ready': storage['Старый Ремень']}"
                @click="onMaterialClick('Старый Ремень')"
              >{{ materials['Старый Ремень'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m44']}">Рысь</th>
              <th class="is-img" @click="onMaterialClick('Дубовая Рукоять')">
                <!-- <img src="../assets/vik/materials/m441.png" width="30" title="Дубовая Рукоять"> -->
                <span class="img m441 w30" title="Дубовая Рукоять"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Кожаные Ремешки')">
                <!-- <img src="../assets/vik/materials/m442.png" width="30" title="Кожаные Ремешки"> -->
                <span class="img m442 w30" title="Кожаные Ремешки"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Мех Рыси')">
                <!-- <img src="../assets/vik/materials/m443.png" width="30" title="Мех Рыси"> -->
                <span class="img m443 w30" title="Мех Рыси"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Сыромятная Кожа')">
                <!-- <img src="../assets/vik/materials/m444.png" width="30" title="Сыромятная Кожа"> -->
                <span class="img m444 w30" title="Сыромятная Кожа"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Щербатый Клинок')">
                <!-- <img src="../assets/vik/materials/m445.png" width="30" title="Щербатый Клинок"> -->
                <span class="img m445 w30" title="Щербатый Клинок"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Дубовая Рукоять']}"
                @click="onMaterialClick('Дубовая Рукоять')"
              >{{ materials['Дубовая Рукоять'].req }}</td>
              <td
                :class="{'is-ready': storage['Кожаные Ремешки']}"
                @click="onMaterialClick('Кожаные Ремешки')"
              >{{ materials['Кожаные Ремешки'].req }}</td>
              <td
                :class="{'is-ready': storage['Мех Рыси']}"
                @click="onMaterialClick('Мех Рыси')"
              >{{ materials['Мех Рыси'].req }}</td>
              <td
                :class="{'is-ready': storage['Сыромятная Кожа']}"
                @click="onMaterialClick('Сыромятная Кожа')"
              >{{ materials['Сыромятная Кожа'].req }}</td>
              <td
                :class="{'is-ready': storage['Щербатый Клинок']}"
                @click="onMaterialClick('Щербатый Клинок')"
              >{{ materials['Щербатый Клинок'].req }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="columns">
      <div class="column is-narrow">
        <table class="table is-bordered is-narrow">
          <tbody>
            <tr>
              <th rowspan="8" class="is-center">Лангобард</th>
              <th rowspan="2" :class="{'is-ready': storage['m31']}">Вепрь</th>
              <th class="is-img" @click="onMaterialClick('Бурая Кровь')">
                <!-- <img src="../assets/vik/materials/m311.png" width="30" title="Бурая Кровь"> -->
                <span class="img m311 w30" title="Бурая Кровь"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Дубовые Доски')">
                <!-- <img src="../assets/vik/materials/m312.png" width="30" title="Дубовые Доски"> -->
                <span class="img m312 w30" title="Дубовые Доски"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Кабаний Ворс')">
                <!-- <img src="../assets/vik/materials/m313.png" width="30" title="Кабаний Ворс"> -->
                <span class="img m313 w30" title="Кабаний Ворс"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Пластины Стали')">
                <!-- <img src="../assets/vik/materials/m314.png" width="30" title="Пластины Стали"> -->
                <span class="img m314 w30" title="Пластины Стали"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Сырая Кожа')">
                <!-- <img src="../assets/vik/materials/m315.png" width="30" title="Сырая Кожа"> -->
                <span class="img m315 w30" title="Сырая Кожа"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Бурая Кровь']}"
                @click="onMaterialClick('Бурая Кровь')"
              >{{ materials['Бурая Кровь'].req }}</td>
              <td
                :class="{'is-ready': storage['Дубовые Доски']}"
                @click="onMaterialClick('Дубовые Доски')"
              >{{ materials['Дубовые Доски'].req }}</td>
              <td
                :class="{'is-ready': storage['Кабаний Ворс']}"
                @click="onMaterialClick('Кабаний Ворс')"
              >{{ materials['Кабаний Ворс'].req }}</td>
              <td
                :class="{'is-ready': storage['Пластины Стали']}"
                @click="onMaterialClick('Пластины Стали')"
              >{{ materials['Пластины Стали'].req }}</td>
              <td
                :class="{'is-ready': storage['Сырая Кожа']}"
                @click="onMaterialClick('Сырая Кожа')"
              >{{ materials['Сырая Кожа'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m32']}">Гриф</th>
              <th class="is-img" @click="onMaterialClick('Выделанная Кожа')">
                <!-- <img src="../assets/vik/materials/m321.png" width="30" title="Выделанная Кожа"> -->
                <span class="img m321 w30" title="Выделанная Кожа"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Кожаная Тесьма')">
                <!-- <img src="../assets/vik/materials/m322.png" width="30" title="Кожаная Тесьма"> -->
                <span class="img m322 w30" title="Кожаная Тесьма"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Короткое Древко')">
                <!-- <img src="../assets/vik/materials/m323.png" width="30" title="Короткое Древко"> -->
                <span class="img m323 w30" title="Короткое Древко"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Лоскут Кольчуги')">
                <!-- <img src="../assets/vik/materials/m324.png" width="30" title="Лоскут Кольчуги"> -->
                <span class="img m324 w30" title="Лоскут Кольчуги"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Перо Грифа')">
                <!-- <img src="../assets/vik/materials/m325.png" width="30" title="Перо Грифа"> -->
                <span class="img m325 w30" title="Перо Грифа"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Выделанная Кожа']}"
                @click="onMaterialClick('Выделанная Кожа')"
              >{{ materials['Выделанная Кожа'].req }}</td>
              <td
                :class="{'is-ready': storage['Кожаная Тесьма']}"
                @click="onMaterialClick('Кожаная Тесьма')"
              >{{ materials['Кожаная Тесьма'].req }}</td>
              <td
                :class="{'is-ready': storage['Короткое Древко']}"
                @click="onMaterialClick('Короткое Древко')"
              >{{ materials['Короткое Древко'].req }}</td>
              <td
                :class="{'is-ready': storage['Лоскут Кольчуги']}"
                @click="onMaterialClick('Лоскут Кольчуги')"
              >{{ materials['Лоскут Кольчуги'].req }}</td>
              <td
                :class="{'is-ready': storage['Перо Грифа']}"
                @click="onMaterialClick('Перо Грифа')"
              >{{ materials['Перо Грифа'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m33']}">Лев</th>
              <th class="is-img" @click="onMaterialClick('Белый Песок')">
                <!-- <img src="../assets/vik/materials/m331.png" width="30" title="Белый Песок"> -->
                <span class="img m331 w30" title="Белый Песок"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Львиная Шерсть')">
                <!-- <img src="../assets/vik/materials/m332.png" width="30" title="Львиная Шерсть"> -->
                <span class="img m332 w30" title="Львиная Шерсть"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Прочная Кожа')">
                <!-- <img src="../assets/vik/materials/m333.png" width="30" title="Прочная Кожа"> -->
                <span class="img m333 w30" title="Прочная Кожа"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Скальная Порода')">
                <!-- <img src="../assets/vik/materials/m334.png" width="30" title="Скальная Порода"> -->
                <span class="img m334 w30" title="Скальная Порода"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Старый Коготь')">
                <!-- <img src="../assets/vik/materials/m335.png" width="30" title="Старый Коготь"> -->
                <span class="img m335 w30" title="Старый Коготь"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Белый Песок']}"
                @click="onMaterialClick('Белый Песок')"
              >{{ materials['Белый Песок'].req }}</td>
              <td
                :class="{'is-ready': storage['Львиная Шерсть']}"
                @click="onMaterialClick('Львиная Шерсть')"
              >{{ materials['Львиная Шерсть'].req }}</td>
              <td
                :class="{'is-ready': storage['Прочная Кожа']}"
                @click="onMaterialClick('Прочная Кожа')"
              >{{ materials['Прочная Кожа'].req }}</td>
              <td
                :class="{'is-ready': storage['Скальная Порода']}"
                @click="onMaterialClick('Скальная Порода')"
              >{{ materials['Скальная Порода'].req }}</td>
              <td
                :class="{'is-ready': storage['Старый Коготь']}"
                @click="onMaterialClick('Старый Коготь')"
              >{{ materials['Старый Коготь'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m34']}">Людоед</th>
              <th class="is-img" @click="onMaterialClick('Грубая Щетина')">
                <!-- <img src="../assets/vik/materials/m341.png" width="30" title="Грубая Щетина"> -->
                <span class="img m341 w30" title="Грубая Щетина"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Кора Дуба')">
                <!-- <img src="../assets/vik/materials/m342.png" width="30" title="Кора Дуба"> -->
                <span class="img m342 w30" title="Кора Дуба"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Лесной Мох')">
                <!-- <img src="../assets/vik/materials/m343.png" width="30" title="Лесной Мох"> -->
                <span class="img m343 w30" title="Лесной Мох"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Медвежий Жир')">
                <!-- <img src="../assets/vik/materials/m344.png" width="30" title="Медвежий Жир"> -->
                <span class="img m344 w30" title="Медвежий Жир"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Медвежьи Кости')">
                <!-- <img src="../assets/vik/materials/m345.png" width="30" title="Медвежьи Кости"> -->
                <span class="img m345 w30" title="Медвежьи Кости"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Грубая Щетина']}"
                @click="onMaterialClick('Грубая Щетина')"
              >{{ materials['Грубая Щетина'].req }}</td>
              <td
                :class="{'is-ready': storage['Кора Дуба']}"
                @click="onMaterialClick('Кора Дуба')"
              >{{ materials['Кора Дуба'].req }}</td>
              <td
                :class="{'is-ready': storage['Лесной Мох']}"
                @click="onMaterialClick('Лесной Мох')"
              >{{ materials['Лесной Мох'].req }}</td>
              <td
                :class="{'is-ready': storage['Медвежий Жир']}"
                @click="onMaterialClick('Медвежий Жир')"
              >{{ materials['Медвежий Жир'].req }}</td>
              <td
                :class="{'is-ready': storage['Медвежьи Кости']}"
                @click="onMaterialClick('Медвежьи Кости')"
              >{{ materials['Медвежьи Кости'].req }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="table is-bordered is-narrow">
          <tbody>
            <tr>
              <th rowspan="8" class="is-center">Пикт</th>
              <th rowspan="2" :class="{'is-ready': storage['m21']}">Змей</th>
              <th class="is-img" @click="onMaterialClick('Зеленая Чешуя')">
                <!-- <img src="../assets/vik/materials/m211.png" width="30" title="Зеленая Чешуя"> -->
                <span class="img m211 w30" title="Зеленая Чешуя"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Змеиный Язык')">
                <!-- <img src="../assets/vik/materials/m212.png" width="30" title="Змеиный Язык"> -->
                <span class="img m212 w30" title="Змеиный Язык"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Окаменелости')">
                <!-- <img src="../assets/vik/materials/m213.png" width="30" title="Окаменелости"> -->
                <span class="img m213 w30" title="Окаменелости"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Яд Змеи')">
                <!-- <img src="../assets/vik/materials/m214.png" width="30" title="Яд Змеи"> -->
                <span class="img m214 w30" title="Яд Змеи"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Ядовитые Зубы')">
                <!-- <img src="../assets/vik/materials/m215.png" width="30" title="Ядовитые Зубы"> -->
                <span class="img m215 w30" title="Ядовитые Зубы"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Зеленая Чешуя']}"
                @click="onMaterialClick('Зеленая Чешуя')"
              >{{ materials['Зеленая Чешуя'].req }}</td>
              <td
                :class="{'is-ready': storage['Змеиный Язык']}"
                @click="onMaterialClick('Змеиный Язык')"
              >{{ materials['Змеиный Язык'].req }}</td>
              <td
                :class="{'is-ready': storage['Окаменелости']}"
                @click="onMaterialClick('Окаменелости')"
              >{{ materials['Окаменелости'].req }}</td>
              <td
                :class="{'is-ready': storage['Яд Змеи']}"
                @click="onMaterialClick('Яд Змеи')"
              >{{ materials['Яд Змеи'].req }}</td>
              <td
                :class="{'is-ready': storage['Ядовитые Зубы']}"
                @click="onMaterialClick('Ядовитые Зубы')"
              >{{ materials['Ядовитые Зубы'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m22']}">Канис</th>
              <th class="is-img" @click="onMaterialClick('Клок Шерсти')">
                <!-- <img src="../assets/vik/materials/m221.png" width="30" title="Клок Шерсти"> -->
                <span class="img m221 w30" title="Клок Шерсти"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Клыки Каниса')">
                <!-- <img src="../assets/vik/materials/m222.png" width="30" title="Клыки Каниса"> -->
                <span class="img m222 w30" title="Клыки Каниса"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Коготь Каниса')">
                <!-- <img src="../assets/vik/materials/m223.png" width="30" title="Коготь Каниса"> -->
                <span class="img m223 w30" title="Коготь Каниса"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Кость Каниса')">
                <!-- <img src="../assets/vik/materials/m224.png" width="30" title="Кость Каниса"> -->
                <span class="img m224 w30" title="Кость Каниса"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Сухожилие')">
                <!-- <img src="../assets/vik/materials/m225.png" width="30" title="Сухожилие"> -->
                <span class="img m225 w30" title="Сухожилие"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Клок Шерсти']}"
                @click="onMaterialClick('Клок Шерсти')"
              >{{ materials['Клок Шерсти'].req }}</td>
              <td
                :class="{'is-ready': storage['Клыки Каниса']}"
                @click="onMaterialClick('Клыки Каниса')"
              >{{ materials['Клыки Каниса'].req }}</td>
              <td
                :class="{'is-ready': storage['Коготь Каниса']}"
                @click="onMaterialClick('Коготь Каниса')"
              >{{ materials['Коготь Каниса'].req }}</td>
              <td
                :class="{'is-ready': storage['Кость Каниса']}"
                @click="onMaterialClick('Кость Каниса')"
              >{{ materials['Кость Каниса'].req }}</td>
              <td
                :class="{'is-ready': storage['Сухожилие']}"
                @click="onMaterialClick('Сухожилие')"
              >{{ materials['Сухожилие'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m23']}">Сарацин</th>
              <th class="is-img" @click="onMaterialClick('Аркан')">
                <!-- <img src="../assets/vik/materials/m231.png" width="30" title="Аркан"> -->
                <span class="img m231 w30" title="Аркан"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Восточная Сталь')">
                <!-- <img src="../assets/vik/materials/m232.png" width="30" title="Восточная Сталь"> -->
                <span class="img m232 w30" title="Восточная Сталь"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Парча')">
                <!-- <img src="../assets/vik/materials/m233.png" width="30" title="Парча"> -->
                <span class="img m233 w30" title="Парча"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Рукоять Меча')">
                <!-- <img src="../assets/vik/materials/m234.png" width="30" title="Рукоять Меча"> -->
                <span class="img m234 w30" title="Рукоять Меча"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Эмаль')">
                <!-- <img src="../assets/vik/materials/m235.png" width="30" title="Эмаль"> -->
                <span class="img m235 w30" title="Эмаль"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Аркан']}"
                @click="onMaterialClick('Аркан')"
              >{{ materials['Аркан'].req }}</td>
              <td
                :class="{'is-ready': storage['Восточная Сталь']}"
                @click="onMaterialClick('Восточная Сталь')"
              >{{ materials['Восточная Сталь'].req }}</td>
              <td
                :class="{'is-ready': storage['Парча']}"
                @click="onMaterialClick('Парча')"
              >{{ materials['Парча'].req }}</td>
              <td
                :class="{'is-ready': storage['Рукоять Меча']}"
                @click="onMaterialClick('Рукоять Меча')"
              >{{ materials['Рукоять Меча'].req }}</td>
              <td
                :class="{'is-ready': storage['Эмаль']}"
                @click="onMaterialClick('Эмаль')"
              >{{ materials['Эмаль'].req }}</td>
            </tr>
            <tr>
              <th rowspan="2" :class="{'is-ready': storage['m24']}">Свора</th>
              <th class="is-img" @click="onMaterialClick('Меховое Полотно')">
                <!-- <img src="../assets/vik/materials/m241.png" width="30" title="Меховое Полотно"> -->
                <span class="img m241 w30" title="Меховое Полотно"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Потертая Кожа')">
                <!-- <img src="../assets/vik/materials/m242.png" width="30" title="Потертая Кожа"> -->
                <span class="img m242 w30" title="Потертая Кожа"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Ржавые Шипы')">
                <!-- <img src="../assets/vik/materials/m243.png" width="30" title="Ржавые Шипы"> -->
                <span class="img m243 w30" title="Ржавые Шипы"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Собачья Кость')">
                <!-- <img src="../assets/vik/materials/m244.png" width="30" title="Собачья Кость"> -->
                <span class="img m244 w30" title="Собачья Кость"></span>
              </th>
              <th class="is-img" @click="onMaterialClick('Стальная Цепь')">
                <!-- <img src="../assets/vik/materials/m245.png" width="30" title="Стальная Цепь"> -->
                <span class="img m245 w30" title="Стальная Цепь"></span>
              </th>
            </tr>
            <tr class="is-center">
              <td
                :class="{'is-ready': storage['Меховое Полотно']}"
                @click="onMaterialClick('Меховое Полотно')"
              >{{ materials['Меховое Полотно'].req }}</td>
              <td
                :class="{'is-ready': storage['Потертая Кожа']}"
                @click="onMaterialClick('Потертая Кожа')"
              >{{ materials['Потертая Кожа'].req }}</td>
              <td
                :class="{'is-ready': storage['Ржавые Шипы']}"
                @click="onMaterialClick('Ржавые Шипы')"
              >{{ materials['Ржавые Шипы'].req }}</td>
              <td
                :class="{'is-ready': storage['Собачья Кость']}"
                @click="onMaterialClick('Собачья Кость')"
              >{{ materials['Собачья Кость'].req }}</td>
              <td
                :class="{'is-ready': storage['Стальная Цепь']}"
                @click="onMaterialClick('Стальная Цепь')"
              >{{ materials['Стальная Цепь'].req }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash';

import EquipmentPlanner from '../components/EquipmentPlanner.vue';

export default {
  components: {
    EquipmentPlanner
  },
  data: function() {
    return {
      description:
        'Рекомендации по выбору вещей для героя и шамана. ' +
        'Сколько нужно для них материалов. Каких уберов и захватчиков бить.'
    };
  },
  computed: {
    // id () {
    //     return this.$route.params.id;
    // },
    isMobile() {
      return this.$store.state.isMobile;
    },
    materials() {
      return this.$store.getters['equip/getMaterials'];
    },
    showStorage: {
      get: function() {
        return this.$store.state.equip.showStorage;
      },
      set: function(value) {
        this.$store.commit('equip/toggleShowStorage', value);
      }
    },
    storage() {
      if (!this.showStorage) return {};

      const storage = this.$store.getters['equip/getStorage'];
      let diff = {};
      _.forEach(this.materials, (params, name) => {
        diff[name] = this.materials[name].req <= storage[name].req;
        diff[params.slug] = diff[name];
      });

      // set readyness for invaders
      for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
          diff['m' + i + j] =
            diff['m' + i + j + '1'] &&
            diff['m' + i + j + '2'] &&
            diff['m' + i + j + '3'] &&
            diff['m' + i + j + '4'] &&
            diff['m' + i + j + '5'];
        }
      }

      return diff;
    }
  },
  metaInfo() {
    return {
      title: 'Вещи и материалы',
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:title', content: 'Вещи и материалы | Vikings Planner' },
        { property: 'og:url', content: this.$baseUrl + '/equip' }
      ]
    };
  },
  methods: {
    onMaterialClick: function(materialName) {
      this.$store.commit('equip/onChangeStorage', {
        name: materialName,
        quantity: this.materials[materialName].req
      });
    }
  },
  mounted() {
    gtag('config', this.$gtag, { page_path: '/equip' });
  }
};
</script>

<style lang="scss">
.equipment .is-ready {
  background-color: rgb(124, 233, 162);
  //border-color: transparent;
  // color: #fff;
}
.equipment td,
.equipment th {
  cursor: pointer;
}
</style>
