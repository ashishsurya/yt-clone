import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

const VideoCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'Live',
    },
    {
      id: 3,
      title: 'PUBG',
    },
    {
      id: 4,
      title: 'Google',
    },
    {
      id: 5,
      title: 'React',
    },
    { id: 6, title: 'Firebase' },
  ];

  return (
    <View style={tw`flex flex-row px-2`}>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={categories}
        renderItem={({ item }) => (
          <Text style={tw`text-white p-2 px-4 rounded-full bg-gray-600 mx-1`}>
            {item.title}
          </Text>
        )}
      />
    </View>
  );
};

export default VideoCategories;
