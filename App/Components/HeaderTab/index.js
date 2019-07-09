import React from 'react'
import { Tabs, Tab } from 'native-base'
import { PropTypes } from 'prop-types'
import styles from './styles'

class Component extends React.PureComponent {
  render() {
    const { tabs } = this.props

    return (
      <Tabs locked>
        {tabs.map(({ title, content }, index) => (
          <Tab
            key={`tab${index}`}
            style={styles.content}
            tabStyle={styles.tabColor}
            activeTabStyle={styles.tabColor}
            textStyle={styles.textColor}
            heading={title}
          >
            {content}
          </Tab>
        ))}
      </Tabs>
    )
  }
}

Component.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default Component
