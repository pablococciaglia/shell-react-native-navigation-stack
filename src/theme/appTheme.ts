import {StyleSheet} from 'react-native';

export const colors = StyleSheet.create({
  backgroundRed: {
    backgroundColor: 'red',
  },
  backgroundBlue: {
    backgroundColor: 'blue',
  },
  backgroundGreen: {
    backgroundColor: 'green',
  },
});

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 30,
    borderColor: 'gold',
    borderWidth: 3,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  menuText: {
    fontSize: 20,
    color: 'grey',
  },
  menuButton: {
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'lightgrey',
    paddingLeft: 20,
    paddingVertical: 3,
    marginTop: 10,
  },
});
