import React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage } : Props) {
  const { secondary70, secondary100 } = theme.colors;
  return (
   <LinearGradient
    style={styles.container}
    colors={[secondary70, secondary100]}
   >
     <Image 
      source={{ uri: urlImage }}
      style={styles.avatar}
    />
   </LinearGradient>
  )
}
