import React from 'react';
import {Text, TextInput, View} from 'react-native';

export function Input(props) {
  let {centralize, editable, label, value, onChangeText, style, testID} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        testID={testID}
        editable={editable}
        keyboardType="numeric"
        style={[
          style,
          styles.input,
          centralize && styles.textCenter,
          !editable && styles.readOnly,
        ]}
        value={String(value)}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginBottom: 8,

    color: 'grey',
    fontSize: 16,
  },
  input: {
    width: 160,

    marginBottom: 18,
    padding: 8,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  readOnly: {
    backgroundColor: 'lightgreen',

    color: 'black',
  },
};
