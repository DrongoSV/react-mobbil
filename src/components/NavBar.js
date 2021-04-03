import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
      height: 70,
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#76587b',
      paddingBottom: 10,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
  });
  