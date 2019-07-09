import React from 'react'
import { Header, Title, Button, Icon, Left, Right, Body } from 'native-base'
import { PropTypes } from 'prop-types'
import NavigationService from 'App/Services/NavigationService'
import styles from './styles'
import Colors from 'App/Theme/Colors'

class Component extends React.PureComponent {
  render() {
    const { hasTabs, LeftCustomComponent, showBackButton, title, RightCustomComponent } = this.props

    return (
      <Header
        style={styles.headerColor}
        androidStatusBarColor={Colors.darkPrimary}
        iosBarStyle="light-content"
        noLeft={!LeftCustomComponent && !showBackButton}
        hasTabs={hasTabs}
      >
        <Left>
          {LeftCustomComponent && <LeftCustomComponent />}

          {showBackButton && (
            <Button transparent onPress={NavigationService.goBack}>
              <Icon name="arrow-back" />
            </Button>
          )}
        </Left>

        <Body>
          <Title>{title}</Title>
        </Body>

        <Right>{RightCustomComponent && <RightCustomComponent />}</Right>
      </Header>
    )
  }
}

Component.propTypes = {
  hasTabs: PropTypes.bool,
  LeftCustomComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.element]),
  showBackButton: PropTypes.bool,
  title: PropTypes.string,
  RightCustomComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.element]),
}

Component.defaultProps = {
  hasTabs: false,
  showBackButton: false,
  title: ' ',
}

export default Component
