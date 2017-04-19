'use strict';

import { TabNavigator } from 'react-navigation';

import ChatListScreen from './chat/ChatListScreen';
import WelcomeScreen from './welcome/WelcomeScreen';
import DemoScreen from './demo';

/**
 * Screen with tabs shown on app startup.
 */
const HomeScreenTabNavigator = TabNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Chats: {
    screen: ChatListScreen,
  },
  Demo: {
    screen: DemoScreen
  }
});

export default HomeScreenTabNavigator;
