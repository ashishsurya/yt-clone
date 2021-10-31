import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const BottomTabs = () => {
  return (
    <View style={tw`flex-row py-3 px-4 justify-between`}>
      <Icon type='material' name='home' color='white' size={35} />
      <Icon type='material' name='videocam' color='white' size={35}/>
      <Icon type='material' name='add' color='white' size={35}/>
      <Icon type='material' name='subscriptions' color='white' size={35}/>
      <Icon type='material' name='history' color='white' size={35}/>
    </View>
  );
};

export default BottomTabs;
