import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { ThemeName } from '@/themes/theme.types';
import store from '@/store';

/** @interface */
export interface AppStore {
  theme: ThemeName;
}

@Module({ dynamic: true, store, name: 'App '})
class App extends VuexModule implements AppStore {
  public theme: ThemeName = ThemeName.LIGHT;

  @Action({ commit: 'SET_THEME' })
  public setTheme(theme: ThemeName): ThemeName {
    return theme;
  }

  @Mutation
  private SET_THEME(theme: ThemeName): void {
    this.theme = theme;
  }
}

export const appStore = getModule(App)