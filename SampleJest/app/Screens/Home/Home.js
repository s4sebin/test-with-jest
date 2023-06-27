import React, {useEffect, useState} from 'react';
import {Alert, Pressable, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles.js';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.safeareaview}>
    <View style={styles.container}>
    <Pressable style={[styles.buttonContainer]} onPress={() => {
      navigation.navigate('Calculator');
    }}>
      <Text style={styles.title}>{"CALCULATOR"}</Text>
    </Pressable>
    </View>
    </SafeAreaView>
  );
}
