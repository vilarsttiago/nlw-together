import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface ButtonProps extends RectButtonProps{
  title: string;
}

const ButtonIcon = ({ title, ...rest }: ButtonProps) => {
  return (
    <RectButton 
    style={styles.container}
    rippleColor={theme.colors.line}
    {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}

export { ButtonIcon }
