import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import BottomTabs from '../components/BottomTabs';
import Header from '../components/Header';
import Video from '../components/Video';
import VideoCategories from '../components/VideoCategories';
import VideoList from '../components/VideoList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <StatusBar style='light' />
      <Header />
      <VideoCategories />
      <VideoList />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;
