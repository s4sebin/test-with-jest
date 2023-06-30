import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles.js';
import { Input } from '../../components/Input.js';

const OperationsConst = {
  SUM: 'SUM',
  SUBTRACTION: 'SUBTRACTION',
  MULTIPLICATION: 'MULTIPLICATION',
  DIVISION: 'DIVISION',
};

export default function Calculator() {
  function clearResult() {
    setResult(0);
  }

  function handleSum() {
    setResult(Number(firstValue) + Number(secondValue));
  }

  function handleSubtraction() {
    setResult(Number(firstValue) - Number(secondValue));
  }

  function handleMultiplication() {
    setResult(Number(firstValue) * Number(secondValue));
  }

  function handleDivision() {
    if (secondValue === 0) {
      Alert.alert('Errorr! Number cannot divided by 0');
    } else {
      setResult(Number(firstValue) / Number(secondValue));
    }
  }

  let [firstValue, setFirstValue] = useState(0);
  let [secondValue, setSecondValue] = useState(0);
  let [result, setResult] = useState(0);

  useEffect(() => {
    clearResult();
  }, [firstValue, secondValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULATOR</Text>

      <Input
        testID="testPrimaryValue"
        editable={true}
        label="PRIMARY VALUE"
        value={firstValue}
        onChangeText={text => setFirstValue(text)}
      />

      <Input
        testID="testSecondaryValue"
        editable={true}
        label="SECONDARY VALUE"
        value={secondValue}
        onChangeText={text => setSecondValue(text)}
      />

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSum}
          testID="sumButton">
          <Text>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubtraction}
          testID="subButton">
          <Text>Sub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleMultiplication}
          testID="mulButton">
          <Text>Mul</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          testID="divButton"
          onPress={handleDivision}>
          <Text>Div</Text>
        </TouchableOpacity>
      </View>

      <Input
        centralize={true}
        testID="resultValue"
        editable={false}
        label="RESULT"
        value={result}
      />
    </View>
  );
}
