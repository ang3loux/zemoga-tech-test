import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import styles from './styles'
import { Images } from 'App/Theme'
import Header from 'App/Components/Header'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class Screen extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const { user, userIsLoading, userErrorMessage, fetchUser, liveInEurope } = this.props

    return (
      <React.Fragment>
        <Header />

        <View style={styles.container}>
          {userIsLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={Images.logo} resizeMode={'contain'} />
              </View>
              <Text style={styles.text}>To get started, edit App.js</Text>
              <Text style={styles.instructions}>{instructions}</Text>
              {userErrorMessage ? (
                <Text style={styles.error}>{userErrorMessage}</Text>
              ) : (
                <View>
                  <Text style={styles.result}>
                    {"I'm a fake user, my name is "}
                    {user.name}
                  </Text>
                  <Text style={styles.result}>
                    {liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                  </Text>
                </View>
              )}
              <Button onPress={fetchUser} title="Refresh" />
            </View>
          )}
        </View>
      </React.Fragment>
    )
  }
}

Screen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen)
