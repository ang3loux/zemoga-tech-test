import React from 'react'
import { Tabs, Tab } from 'native-base'
import { PropTypes } from 'prop-types'
import styles from './styles'

class Component extends React.PureComponent {
  render() {
    const { tabs, onTabChange } = this.props

    return (
      <Tabs locked style={styles.content} onChangeTab={onTabChange}>
        {tabs.map(({ title }, index) => (
          <Tab
            key={`tab${index}`}
            style={styles.content}
            tabStyle={styles.tabColor}
            activeTabStyle={styles.tabColor}
            textStyle={styles.textColor}
            heading={title}
          />
        ))}
      </Tabs>
    )
  }
}

Component.propTypes = {
  tabs: PropTypes.array.isRequired,
  onTabChange: PropTypes.func,
}

Component.defaultProps = {
  onTabChange: () => {},
}

export default Component
