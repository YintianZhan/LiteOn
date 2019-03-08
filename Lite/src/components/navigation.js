import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                // icon: require('./img/Signin.png')
              }
            }
          },
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
                // icon: require('./img/Signup.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    // stack: {
    //   id: 'App',
    //   children: [
    //     {
    //       component: {
    //         name: 'Home',
    //       }
    //     }
    // ],
    // }
    bottomTabs: {
      id: 'HomeBottomTabs',
      children: [
        {
          component: {
            name: 'Home',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Home',
                // icon: require('./img/Signin.png')
              }
            }
          },
        },
        {
          component: {
            name: 'Search',
            options: {
              bottomTab: {
                text: 'Search',
                fontSize: 12,
                // icon: require('./img/Signup.png')
              }
            }
          },
        },
        {
          component: {
            name: 'PersonalProfile',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Profile',
                // icon: require('./img/Signin.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const goHomeOrg = () => Navigation.setRoot({
  root: {
    // stack: {
    //   id: 'App',
    //   children: [
    //     {
    //       component: {
    //         name: 'Home',
    //       }
    //     }
    // ],
    // }
    bottomTabs: {
      id: 'HomeOrgBottomTabs',
      children: [
        {
          component: {
            name: 'Home',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Home',
                // icon: require('./img/Signin.png')
              }
            }
          },
        },
        {
          component: {
            name: 'Search',
            options: {
              bottomTab: {
                text: 'Search',
                fontSize: 12,
                // icon: require('./img/Signup.png')
              }
            }
          },
        },
        {
          component: {
            name: 'OrgProfile',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Profile',
                // icon: require('./img/Signin.png')
              }
            }
          },
        },
        {
          component: {
            name: 'CreateEvent',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'New Event',
                // icon: require('./img/Signin.png')
              }
            }
          },
        },
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
