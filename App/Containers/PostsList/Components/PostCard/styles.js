import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  card: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.background,
  },
  text: {
    flex: 1,
  },
  dot: {
    height: 12,
    width: 12,
    marginRight: 12,
    borderRadius: 6,
    backgroundColor: Colors.blue,
  },
  star: {
    fontSize: 29,
    marginLeft: 12,
    color: Colors.yellow,
  },
})
