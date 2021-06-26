import React from 'react'
import { Image } from 'react-native';

import { styles } from './styles';


export function GuildIcon() {
  const uri = 'https://w7.pngwing.com/pngs/159/401/png-transparent-discord-android-computer-icons-discord-video-game-smiley-online-chat.png';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
