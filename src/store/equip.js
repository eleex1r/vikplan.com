import _ from 'lodash';
import db from './db/equip';

const names = _.map(db, 'name');

const materialsTemplate = {
  'Веревка':  { req: 0, slug: 'm011' },
  'Хлопок':   { req: 0, slug: 'm012' },
  'Эссенция': { req: 0, slug: 'm013' },
  'Обломки':  { req: 0, slug: 'm021' },
  'Перо':     { req: 0, slug: 'm022' },
  'Шкура':    { req: 0, slug: 'm023' },
  'Гранит':   { req: 0, slug: 'm031' },
  'Кожа':     { req: 0, slug: 'm032' },
  'Стекло':   { req: 0, slug: 'm033' },
  'Алмаз':    { req: 0, slug: 'm041' },
  'Свинец':   { req: 0, slug: 'm042' },
  'Сталь':    { req: 0, slug: 'm043' },

  // гвардеец
  'Белая Кожа':      { req: 0, slug: 'm111' },
  'Заклепки':        { req: 0, slug: 'm112' },
  'Латные Элементы': { req: 0, slug: 'm113' },
  'Литая Сталь':     { req: 0, slug: 'm114' },
  'Навершие':        { req: 0, slug: 'm115' },

  // кельт
  'Глина':         { req: 0, slug: 'm121' },
  'Клевер':        { req: 0, slug: 'm122' },
  'Лезвие Секиры': { req: 0, slug: 'm123' },
  'Слиток Меди':   { req: 0, slug: 'm124' },
  'Струна':        { req: 0, slug: 'm125' },

  // хазарин
  'Древко Стрелы':  { req: 0, slug: 'm131' },
  'Крепкая Тетива': { req: 0, slug: 'm132' },
  'Кусок Войлока':  { req: 0, slug: 'm133' },
  'Кусок Кольчуги': { req: 0, slug: 'm134' },
  'Элемент Брони':  { req: 0, slug: 'm135' },

  // центурион
  'Гипс':            { req: 0, slug: 'm141' },
  'Лавровые Листья': { req: 0, slug: 'm142' },
  'Льняная Ткань':   { req: 0, slug: 'm143' },
  'Обрезки Кожи':    { req: 0, slug: 'm144' },
  'Слитки Бронзы':   { req: 0, slug: 'm145' },

  // змей
  'Зеленая Чешуя': { req: 0, slug: 'm211' },
  'Змеиный Язык':  { req: 0, slug: 'm212' },
  'Окаменелости':  { req: 0, slug: 'm213' },
  'Яд Змеи':       { req: 0, slug: 'm214' },
  'Ядовитые Зубы': { req: 0, slug: 'm215' },

  // канис
  'Клок Шерсти':   { req: 0, slug: 'm221' },
  'Клыки Каниса':  { req: 0, slug: 'm222' },
  'Коготь Каниса': { req: 0, slug: 'm223' },
  'Кость Каниса':  { req: 0, slug: 'm224' },
  'Сухожилие':     { req: 0, slug: 'm225' },

  // сарацин
  'Аркан':           { req: 0, slug: 'm231' },
  'Восточная Сталь': { req: 0, slug: 'm232' },
  'Парча':           { req: 0, slug: 'm233' },
  'Рукоять Меча':    { req: 0, slug: 'm234' },
  'Эмаль':           { req: 0, slug: 'm235' },

  // свора
  'Меховое Полотно': { req: 0, slug: 'm241' },
  'Потертая Кожа':   { req: 0, slug: 'm242' },
  'Ржавые Шипы':     { req: 0, slug: 'm243' },
  'Собачья Кость':   { req: 0, slug: 'm244' },
  'Стальная Цепь':   { req: 0, slug: 'm245' },

  // вепрь
  'Бурая Кровь':    { req: 0, slug: 'm311' },
  'Дубовые Доски':  { req: 0, slug: 'm312' },
  'Кабаний Ворс':   { req: 0, slug: 'm313' },
  'Пластины Стали': { req: 0, slug: 'm314' },
  'Сырая Кожа':     { req: 0, slug: 'm315' },

  // гриф
  'Выделанная Кожа': { req: 0, slug: 'm321' },
  'Кожаная Тесьма':  { req: 0, slug: 'm322' },
  'Короткое Древко': { req: 0, slug: 'm323' },
  'Лоскут Кольчуги': { req: 0, slug: 'm324' },
  'Перо Грифа':      { req: 0, slug: 'm325' },

  // лев
  'Белый Песок':     { req: 0, slug: 'm331' },
  'Львиная Шерсть':  { req: 0, slug: 'm332' },
  'Прочная Кожа':    { req: 0, slug: 'm333' },
  'Скальная Порода': { req: 0, slug: 'm334' },
  'Старый Коготь':   { req: 0, slug: 'm335' },

  // людоед
  'Грубая Щетина':  { req: 0, slug: 'm341' },
  'Кора Дуба':      { req: 0, slug: 'm342' },
  'Лесной Мох':     { req: 0, slug: 'm343' },
  'Медвежий Жир':   { req: 0, slug: 'm344' },
  'Медвежьи Кости': { req: 0, slug: 'm345' },

  // варвар
  'Бычьи Жилы':     { req: 0, slug: 'm411' },
  'Вековой Камень': { req: 0, slug: 'm412' },
  'Железная Цепь':  { req: 0, slug: 'm413' },
  'Овчина':         { req: 0, slug: 'm414' },
  'Смола':          { req: 0, slug: 'm415' },

  // гасконец
  'Железное Шило':   { req: 0, slug: 'm421' },
  'Каленая Сталь':   { req: 0, slug: 'm422' },
  'Крепкая Подошва': { req: 0, slug: 'm423' },
  'Отливка Серебра': { req: 0, slug: 'm424' },
  'Тонкая Кожа':     { req: 0, slug: 'm425' },

  // гунн
  'Изрубленный Щит': { req: 0, slug: 'm431' },
  'Обломки Стрел':   { req: 0, slug: 'm432' },
  'Порванная Ткань': { req: 0, slug: 'm433' },
  'Разбитый Колчан': { req: 0, slug: 'm434' },
  'Старый Ремень':   { req: 0, slug: 'm435' },

  // рысь
  'Дубовая Рукоять': { req: 0, slug: 'm441' },
  'Кожаные Ремешки': { req: 0, slug: 'm442' },
  'Мех Рыси':        { req: 0, slug: 'm443' },
  'Сыромятная Кожа': { req: 0, slug: 'm444' },
  'Щербатый Клинок': { req: 0, slug: 'm445' }
};

const outfits = [
  {
    name: 'МС спец',
    items: [
      'Шлем Уббы',
      'Клинок Уббы',
      'Чешуя Уббы',
      'Сапоги Уббы',
      'Вегвизир Уббы',
      'Вегвизир Уббы'
    ]
  },
  {
    name: 'МС шаман',
    items: [
      'Маска Затворника',
      'Каленый Тесак',
      'Северный Доспех',
      'Высокие Сапоги',
      'Янтарное Ожерелье',
      'Янтарное Ожерелье'
    ]
  },
  {
    name: 'ПЕХОТА спец новый',
    troops: 'melee',
    items: [
      'Корона Хальфдана',
      'Меч Хальфдана',
      'Плащ Хальфдана',
      'Поножи Хальфдана',
      'Фибула Хальфдана',
      'Фибула Хальфдана'
    ]
  },
  {
    name: 'ПЕХОТА спец старый',
    troops: 'melee',
    items: [
      'Шлем Олафа',
      'Кольчуга Рагнара',
      'Топор Рагнара',
      'Сапоги Рагнара',
      'Знамя Рагнара',
      'Знамя Рагнара'
    ]
  },
  {
    name: 'ПЕХОТА шаман',
    troops: 'melee',
    items: [
      'Шапка Топей',
      'Кривой Посох',
      'Облегченный Ламелляр',
      'Клепаные Сапоги',
      'Оленья Подвеска',
      'Оленья Подвеска'
    ]
  },
  {
    name: 'ОСАДА спец новый',
    troops: 'siege',
    items: [
      'Шлем Реггвида',
      'Хауберк Реггвида',
      'Клевец Реггвида',
      'Сапоги Реггвида',
      'Амулет Реггвида',
      'Амулет Реггвида'
    ]
  },
  {
    name: 'ОСАДА спец старый',
    troops: 'siege',
    items: [
      'Шлем Лейфа',
      'Бродекс Лейфа',
      'Жилет Лейфа',
      'Поножи Свена',
      'Карта Лейфа',
      'Карта Лейфа'
    ]
  },
  {
    name: 'ОСАДА шаман',
    troops: 'siege',
    items: [
      'Маска из Древа',
      'Кованый Кинжал',
      'Плетеный Доспех',
      'Расшитые Ботинки',
      'Каменные Привески',
      'Каменные Привески'
    ]
  },
  {
    name: 'КОНИ спец новый',
    troops: 'cavalry',
    items: [
      'Шлем Роллона',
      'Молот Роллона',
      'Кольчуга Роллона',
      'Сапоги Роллона',
      'Монета Роллона',
      'Монета Роллона'
    ]
  },
  {
    name: 'КОНИ спец старый',
    troops: 'cavalry',
    items: [
      'Корона Харальда',
      'Ангон Олафа',
      'Нагрудник Харальда',
      'Поножи Харальда',
      'Зуб Харальда',
      'Зуб Харальда'
    ]
  },
  {
    name: 'КОНИ шаман',
    troops: 'cavalry',
    items: [
      'Грива Слейпнира',
      'Ярость Слейпнира',
      'Накидка Слейпнира',
      'Полет Слейпнира',
      'Судьба Слейпнира',
      'Судьба Слейпнира'
    ]
  },
  {
    name: 'СТРЕЛКИ спец новый',
    troops: 'ranged',
    items: [
      'Шапка Гутрума',
      'Копье Гутрума',
      'Нагрудник Гутрума',
      'Сапоги Гутрума',
      'Умбон Гутрума',
      'Умбон Гутрума'
    ]
  },
  {
    name: 'СТРЕЛКИ спец старый',
    troops: 'ranged',
    items: [
      'Шапка Ивара',
      'Лук Ивара',
      'Кольчуга Свена',
      'Башмаки Ивара',
      'Браслет Ивара',
      'Браслет Ивара'
    ]
  },
  {
    name: 'СТРЕЛКИ шаман',
    troops: 'ranged',
    items: [
      'Прозорливость Мунина',
      'Перо Мунина',
      'Покров Мунина',
      'Ветер Мунина',
      'Клюв Мунина',
      'Клюв Мунина'
    ]
  },
  {
    name: 'УБИЙЦЫ спец новый',
    troops: 'killer',
    items: [
      'Шлем Кнуда',
      'Секира Кнуда',
      'Жилет Кнуда',
      'Поножи Кнуда',
      'Кубок Кнуда',
      'Кубок Кнуда'
    ]
  },
  {
    name: 'УБИЙЦЫ спец старый',
    troops: 'killer',
    items: [
      'Шлем Эйрика',
      'Скрамасакс Хакона',
      'Броня Эйрика',
      'Сапоги Эйрика',
      'Рог Эйрика',
      'Рог Эйрика'
    ]
  },
  {
    name: 'УБИЙЦЫ шаман',
    troops: 'killer',
    items: [
      'Лик Гарма',
      'Величие Гарма',
      'Облачение Гарма',
      'Безумие Гарма',
      'Клык Гарма',
      'Клык Гарма'
    ]
  },
  {
    name: 'ШПИОНЫ спец новый',
    troops: 'scout',
    items: [
      'Шлем Бродира',
      'Кистень Бродира',
      'Ламелляр Бродира',
      'Сапоги Бродира',
      'Гребень Бродира',
      'Гребень Бродира'
    ]
  },
  {
    name: 'ШПИОНЫ спец старый',
    troops: 'scout',
    items: [
      'Шапка Свена',
      'Меч Сигурда',
      'Накидка Сигурда',
      'Ботинки Сигурда',
      'Уроборос Сигурда',
      'Уроборос Сигурда'
    ]
  },
  {
    name: 'ШПИОНЫ шаман',
    troops: 'scout',
    items: [
      'Бусинный Капюшон',
      'Древний Кинжал',
      'Костяная Куртка',
      'Перевязанные Сапоги',
      'Совиная Подвеска',
      'Совиная Подвеска'
    ]
  }
];

function createItem(name) {
  let item = {
    name: name,
    isReady: false,
    isExpand: false,
    grade: 'material',
    items: []
  };

  if (typeof materialsTemplate[name] === 'undefined') {
    // it's an equipment
    let dbItem = _.find(db, entry => entry.name == name);
    let items = dbItem.parts.split(',');
    item.grade = dbItem.grade;
    item.items = _.map(items, entry => createItem(entry));
  }

  return item;
}

export default {
  namespaced: true,
  state: {
    items: [],
    storage: _.cloneDeep(materialsTemplate),
    showStorage: false
  },
  getters: {
    getAllNames: () => {
      return names;
    },
    getItems: state => {
      return state.items;
    },
    getOutfits: () => {
      return outfits;
    },
    getStorage: state => {
      return state.storage;
    },
    getSlugsByName: () => {
      let slugs = {};
      _.forOwn(materialsTemplate, (item, name) => {
        slugs[name] = item.slug;
      });
      return slugs;
    },
    getMaterials: state => {
      let baseItems = state.items,
        newItems,
        components;
      let materials = _.cloneDeep(materialsTemplate);

      while (baseItems.length) {
        newItems = [];
        _.forEach(baseItems, item => {
          if (item.isReady) return;
          if (item.items.length) {
            // it's equipment
            components = _.filter(item.items, comp => !comp.isReady);
            newItems = newItems.concat(components);
          } else {
            materials[item.name].req += 1;
          }
        });
        baseItems = newItems;
      }

      return materials;
    }
  },
  mutations: {
    addItem(state, name) {
      let item = createItem(name);
      state.items.push(item);
    },
    removeItem(state, index) {
      state.items.splice(index, 1);
    },
    addOutfit(state, outfit) {
      _.forEach(outfit.items, name => {
        let item = createItem(name);
        state.items.push(item);
      });
    },
    toggleItemReady(state, indexArray) {
      let idx = indexArray;
      if (idx.length === 1) {
        state.items[indexArray[0]].isReady = !state.items[indexArray[0]]
          .isReady;
      } else if (idx.length === 2) {
        state.items[idx[0]].items[idx[1]].isReady = !state.items[idx[0]].items[
          idx[1]
        ].isReady;
      } else if (idx.length === 3) {
        state.items[idx[0]].items[idx[1]].items[idx[2]].isReady = !state.items[
          idx[0]
        ].items[idx[1]].items[idx[2]].isReady;
      } else if (idx.length === 4) {
        state.items[idx[0]].items[idx[1]].items[idx[2]].items[
          idx[3]
        ].isReady = !state.items[idx[0]].items[idx[1]].items[idx[2]].items[
          idx[3]
        ].isReady;
      } else if (idx.length === 5) {
        state.items[idx[0]].items[idx[1]].items[idx[2]].items[
          idx[3]
        ].items[idx[4]].isReady = !state.items[idx[0]].items[idx[1]].items[idx[2]].items[
          idx[3]
        ].items[idx[4]].isReady;
      }
    },
    toggleItemExpand(state, indexArray) {
      let idx = indexArray;
      if (idx.length === 1) {
        state.items[indexArray[0]].isExpand = !state.items[indexArray[0]]
          .isExpand;
      } else if (idx.length === 2) {
        state.items[idx[0]].items[idx[1]].isExpand = !state.items[idx[0]].items[
          idx[1]
        ].isExpand;
      } else if (idx.length === 3) {
        state.items[idx[0]].items[idx[1]].items[idx[2]].isExpand = !state.items[
          idx[0]
        ].items[idx[1]].items[idx[2]].isExpand;
      } else if (idx.length === 4) {
        state.items[idx[0]].items[idx[1]].items[idx[2]].items[
          idx[3]
        ].isExpand = !state.items[idx[0]].items[idx[1]].items[idx[2]].items[
          idx[3]
        ].isExpand;
      }
    },
    onChangeStorage(state, params) {
      const name = params.name,
        oldVal = state.storage[name].req,
        newVal = params.quantity;

      if (oldVal < newVal) {
        state.storage[name].req = newVal;
      } else {
        state.storage[name].req = 0;
      }
    },
    toggleShowStorage(state, value) {
      state.showStorage = value;
    }
  }
};
