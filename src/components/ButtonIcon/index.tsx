import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native'

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

const ButtonIcon = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity 
    style={styles.container}
    {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export { ButtonIcon }
