import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import tw from 'twrnc';

const Video = ({
  id,
  title,
  image,
  time,
  provider,
  postedOn,
  views,
  providerLogo,
}) => {
  return (
    <View style={tw`flex`}>
      <Image
        source={{ uri: image }}
        style={{ width: '100%', aspectRatio: 16 / 9 }}
      />
      <View style={tw`p-2 pb-4 flex-row items-center bg-gray-800`}>
        <Avatar rounded source={{ uri: providerLogo }} />
        <View style={tw`text-white pl-2 flex-1`}>
          <Text style={tw`text-white w-80`} numberOfLines={2}>
            {title}
          </Text>
          <Text style={tw`text-gray-400 text-xs`}>
            {provider} : {views} views : {postedOn}
          </Text>
        </View>
        
      </View>
    </View>
  );
};

export default Video;
