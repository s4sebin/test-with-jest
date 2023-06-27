import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles.js';
import {Input} from '../components/Input.js';

const OperationsConst = {
  SUM: 'SUM',
  SUBTRACTION: 'SUBTRACTION',
  MULTIPLICATION: 'MULTIPLICATION',
  DIVISION: 'DIVISION',
};

export default function Calculator() {
  function clearResult() {
    setOperation(null);
    setResult(0);
  }

  function handleSum() {
    setOperation(OperationsConst.SUM);
    setResult(Number(firstValue) + Number(secondValue));
  }

  function handleSubtraction() {
    setOperation(OperationsConst.SUBTRACTION);
    setResult(Number(firstValue) - Number(secondValue));
  }

  function handleMultiplication() {
    setOperation(OperationsConst.MULTIPLICATION);
    setResult(Number(firstValue) * Number(secondValue));
  }

  function handleDivision() {
    setOperation(OperationsConst.DIVISION);

    if (secondValue === 0) {
      Alert.alert('Aviso', 'Não pode fazer divisão por 0 (zero)!!!');
    } else {
      setResult(Number(firstValue) / Number(secondValue));
    }
  }

  let [firstValue, setFirstValue] = useState(0);
  let [secondValue, setSecondValue] = useState(0);
  let [result, setResult] = useState(0);
  let [operation, setOperation] = useState(null);

  useEffect(() => {
    clearResult();
  }, [firstValue, secondValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULATOR</Text>

      <Input
        editable={true}
        label="PRIMARY VALUE"
        value={firstValue}
        onChangeText={text => setFirstValue(text)}
      />

      <Input
        editable={true}
        label="SECONDARY VALUE"
        value={secondValue}
        onChangeText={text => setSecondValue(text)}
      />

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSum} testID="sumButton">
          <Text>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubtraction}>
          <Text>Sub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleMultiplication}>
          <Text>Mul</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleDivision}>
          <Text>Div</Text>
        </TouchableOpacity>
      </View>

      <Input centralize={true} editable={false} label="RESULT" value={result} />
    </View>
  );
}
