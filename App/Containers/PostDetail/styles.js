import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: { backgroundColor: Colors.background },
  content: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  commentsHeader: {
    width: '100%',
    paddingVertical: 2,
    paddingHorizontal: 12,
    backgroundColor: Colors.darkBackground,
  },
  commentCard: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: Colors.darkBackground,
  },
  textSeparation: {
    marginBottom: 10,
  },
  starIcon: {
    fontSize: 29,
    color: Colors.white,
  },
  isFavorite: {
    color: Colors.yellow,
  },
})
