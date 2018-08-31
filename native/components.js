import React from 'react';
import { Text, View } from 'react-native';

const centeredStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
};

export const CenteredView = props => (
    <View style={centeredStyle}>
        {props.children}
    </View>
);

export const Label = ({ text }) => <Text>{text}</Text>;
