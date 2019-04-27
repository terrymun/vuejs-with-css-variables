import Vue from 'vue';
import Vuex from 'vuex';
import { AppStore } from './modules/app';

Vue.use(Vuex);

/** @interface */
export interface Store {
  app: AppStore;
}

export default new Vuex.Store<Store>({});
