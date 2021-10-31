import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Video from './Video';
import tw from 'twrnc';

const data = [
  {
    id: 1,
    title:
      'Joe Rogan: Conversations, Ideas, Love, Freedom & the Joe Rogan Experience | Lex Fridman Podcast #127',
    image:
      'https://i.ytimg.com/vi/DTohHXHxe7U/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBp2qR9cMQsyFAPBmaU2-l6Ai42XA',
    time: '1:49',
    provider: 'Lex Freidman',
    postedOn: '1 year ago',
    views: '2.1M',
    providerLogo:
      'https://yt3.ggpht.com/ytc/AKedOLRFlH5XnTHG1Qcz8nNycMIUSou2kuE-EQzrI8LYzY4=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: 'JD Intro Theme | Master Mash-up | Thalapathy',
    image:
      'https://i.ytimg.com/vi/nrebb6pxPrk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD6iJsPbPQ2sCq8Z5wLyRETlgBSqA',
    time: '1:49',
    provider: 'Sony Music South.',
    postedOn: '7 months ago',
    views: '6.2M',
    providerLogo:
      'https://yt3.ggpht.com/ytc/AKedOLRSu0SoelpGmqyAj7H-l9AvN_a4GiV145VwyF4yqA=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    title:
      'Roar Of RRR - RRR Making | NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli',
    image:
      'https://i.ytimg.com/vi/n2RNcPRtAiY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmc39D641_JzoVwjZFMlFcpXdX8w',
    time: '1:49',
    provider: 'Marqus Brownlee',
    postedOn: '5 months ago',
    views: '3.2M',
    providerLogo:
      'https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    title:
      'Roar Of RRR - RRR Making | NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli',
    image:
      'https://i.ytimg.com/vi/hdQlgy4px6M/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCouQD6CZ4rmFAxl-OHg2EUEKzBFw',
    time: '1:49',
    provider: 'DVV Entertainments',
    postedOn: '3 months ago',
    views: '15M',
    providerLogo:
      'https://yt3.ggpht.com/ytc/AKedOLRfTN01bgbEBpJJHQdDuSHcZeu0tFwH2Eo4Du18PA=s68-c-k-c0x00ffffff-no-rj',
  },
];

const VideoList = () => (
  <FlatList
    style={tw`mt-4`}
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Video {...item} />}
  />
);
export default VideoList;
