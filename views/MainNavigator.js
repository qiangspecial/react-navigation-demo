'use strict';

/**
 * This is an example React Native app demonstrates ListViews, text input and
 * navigation between a few screens.
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreenTabNavigator from './HomeScreenTabNavigator';
import ChatScreen from './chat/ChatScreen';
import DemoScreen from './demo';

/**
 * Top-level navigator. Renders the application UI.
 */
const MainNavigator = StackNavigator({
  Home: {
    screen: HomeScreenTabNavigator,
  },
  Chat: {
    screen: ChatScreen,
  },
  Demo: {
    screen: DemoScreen
  }
});

export default MainNavigator;
