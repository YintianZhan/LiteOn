import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Initializing', () => require('./Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  Navigation.registerComponent('PersonalProfile', () => require('./PersonalProfile').default);
  Navigation.registerComponent('Search', () => require('./Search').default);
  Navigation.registerComponent('CreateEvent', () => require('./CreateEvent').default);
  Navigation.registerComponent('OrgProfile', () => require('./OrgProfile').default);
  Navigation.registerComponent('EventProfile', () => require('./event/EventProfile').default);
  Navigation.registerComponent('OrgHome', () => require('./OrgHome').default);
  Navigation.registerComponent('Loading', () => require('./Loading').default);
}
