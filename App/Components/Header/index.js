import React from 'react'
import { Header, Title, Button, Icon, Left, Right, Body } from 'native-base'
import styles from './styles'
import Colors from 'App/Theme/Colors'

class Component extends React.Component {
  render() {
    return (
      <Header
        style={styles.header}
        androidStatusBarColor={Colors.primary}
        iosBarStyle="light-content"
      >
        <Left>
          <Button transparent onPress={() => {}}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => {}}>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    )
  }
}

export default Component
