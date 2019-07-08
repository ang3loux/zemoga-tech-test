import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Colors.accent,
  },
})
