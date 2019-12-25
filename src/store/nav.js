export default {
  namespaced: true,
  state: {
    isSideNav: false,
    isMenu: false,
    sideMenu: 2,
    sideSubMenu: 1
  },
  getters: {
    getSidePosition(state) {
      return state.sideMenu + "_" + state.sideSubMenu;
    }
  },
  mutations: {
    toggleSideNav(state, value) {
      state.isSideNav = value;
    },
    toggleMenu(state) {
      state.isMenu = !state.isMenu;
    },
    setSideMenu(state, value) {
      state.sideMenu = value;
    },
    toggleSideSubMenu(state, value) {
      state.sideSubMenu = state.sideSubMenu === value ? -1 : value;
    },
    closeSideNav(state) {
      state.isSideNav = false;
    }
  }
};
