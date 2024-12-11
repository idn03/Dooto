import React from 'react';
import { Image, StyleSheet, ImageStyle } from 'react-native';

interface IconProps {
    source?: { uri: string } | number;
    style?: ImageStyle;
}

const Icon: React.FC<IconProps> = ({ source, style }) => {
    return <Image source={source} style={[styles.icon, style]} />;
};

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
    },
});

export default Icon;
