import Vue from 'vue';
import Vuex from 'vuex';
import { AppState } from '@/store/modules/app';

Vue.use(Vuex);

/** @interface */
export interface RootState {
  app: AppState;
}

export default new Vuex.Store<RootState>({});
