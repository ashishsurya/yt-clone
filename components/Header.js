import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'twrnc';

const Header = () => {
  const iconStyle = tw`mx-2`;

  return (
    <View style={tw`flex flex-row items-center justify-between `}>
      <View style={tw`flex-1`}>
        <Image
          source={{
            uri: 'https://cdn.cultofmac.com/wp-content/uploads/2018/01/YouTube-dark.jpg',
          }}
          style={{ width: 150, height: 70, resizeMode: 'contain' }}
        />
      </View>

      <Icon name='cast' type='material' color='white' iconStyle={iconStyle} />
      <Icon
        name='notifications'
        type='material'
        color='white'
        iconStyle={iconStyle}
      />
      <TouchableOpacity>
        <Icon
          name='search'
          type='material'
          color='white'
          iconStyle={iconStyle}
        />
      </TouchableOpacity>

      <Avatar title={'S'} containerStyle={tw`bg-blue-900 rounded-full mx-2`} />
    </View>
  );
};

export default Header;
