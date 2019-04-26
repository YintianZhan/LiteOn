import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Home from './Home';
import Initialising from './Initializing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PersonalProfile from './PersonalProfile';
import Search from './Search';
import CreateEvent from './CreateEvent';
import OrgProfile from './OrgProfile';
import EventProfile from './event/EventProfile'
import OrgHome from './OrgHome'

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
  // Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Home', () => gestureHandlerRootHOC(Home));
  Navigation.registerComponent('Initializing', () => gestureHandlerRootHOC(Initialising));
  Navigation.registerComponent('SignIn', () => gestureHandlerRootHOC(SignIn));
  Navigation.registerComponent('SignUp', () => gestureHandlerRootHOC(SignUp));
  Navigation.registerComponent('PersonalProfile', () => gestureHandlerRootHOC(PersonalProfile));
  Navigation.registerComponent('Search', () => gestureHandlerRootHOC(Search));
  Navigation.registerComponent('CreateEvent', () => gestureHandlerRootHOC(CreateEvent));
  Navigation.registerComponent('OrgProfile', () => gestureHandlerRootHOC(OrgProfile));
  Navigation.registerComponent('EventProfile', () => gestureHandlerRootHOC(EventProfile));
  Navigation.registerComponent('OrgHome', () => gestureHandlerRootHOC(OrgHome));
  // Navigation.registerComponent('Initializing', () => require('./Initializing').default);
  // Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  // Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  // Navigation.registerComponent('PersonalProfile', () => require('./PersonalProfile').default);
  // Navigation.registerComponent('Search', () => require('./Search').default);
  // Navigation.registerComponent('CreateEvent', () => require('./CreateEvent').default);
  // Navigation.registerComponent('OrgProfile', () => require('./OrgProfile').default);
  // Navigation.registerComponent('EventProfile', () => require('./event/EventProfile').default);
  // Navigation.registerComponent('OrgHome', () => require('./OrgHome').default);

}
