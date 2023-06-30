import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
  },
  buttonContainer: {
    padding: 8,
    paddingHorizontal : 12,
    margin: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  title: {
    marginBottom: 32,

    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
    maxWidth: 400,

    marginVertical: 16,
  },
  safeareaview: {
    flex: 1,
    backgroundColor: 'white',
  },
});
