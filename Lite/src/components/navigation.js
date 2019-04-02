import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Auth',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              topBar: {
                visible: false
              }
            }
          }
        }
    ],}
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'User',
      children: [
        {
          component: {
            name: 'Home',
            options: {
              topBar: {
                visible: false
              }
            }
          }
        }
    ],
    }
  }
});

export const goHomeOrg = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Org',
      children: [
        {
          component: {
            name: 'OrgHome',
            options: {
              topBar: {
                visible: false
              }
            }
          }
        }
    ],
    }
  }
});

export const goToEvent = (item) => Navigation.setRoot({
  root: {
    stack: {
      id: 'EventProfile',
      children: [
        {
          component: {
            name: 'EventProfile',
          }
        }
    ],
    }
  }
});
