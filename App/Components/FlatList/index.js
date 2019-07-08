import React from 'react'
import { FlatList } from 'react-native'
import { PropTypes } from 'prop-types'
import _ from 'lodash'
import styles from './styles'

const INITIAL_LIST = {
  items: [],
  paginatedItems: [],
  page: 0,
  lastPage: 0,
}

class Component extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_LIST }
  }

  componentDidMount() {
    const { data } = this.props
    this.initializeList(data)
  }

  componentDidUpdate(prevProps, prevState) {
    const { data: prevData } = prevProps
    const { data } = this.props
    const shouldUpdate = !_.isEmpty(_.xorWith(prevData, data, _.isEqual))

    if (shouldUpdate) {
      this.updateList(data)
    }
  }

  paginate(array = [], pageNumber = 0, pageSize = 20) {
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
  }

  initializeList(data) {
    const items = [...data]
    const paginatedItems = [...this.paginate(items)]
    const page = 0
    const lastPage = Math.floor(items.length / 20)

    this.setState({ items, paginatedItems, page, lastPage })
  }

  updateList(data) {
    const { paginatedItems } = this.state
    const items = [...data]
    const _paginatedItems = paginatedItems.reduce((array, paginatedItem) => {
      const _item = items.find((item) => item.id === paginatedItem.id)
      return _item ? [...array, _item] : [...array]
    }, [])
    const page = Math.floor(_paginatedItems.length / 20)
    const lastPage = Math.floor(items.length / 20)

    this.setState({ items, paginatedItems: _paginatedItems, page, lastPage })
  }

  getMoreData() {
    const { items, paginatedItems, page, lastPage } = this.state
    if (page < lastPage) {
      const _page = page + 1
      const _paginatedItems = [...paginatedItems, ...this.paginate(items, _page, 20)]

      this.setState({ ...this.state, paginatedItems: _paginatedItems, page: _page })
    }
  }

  render() {
    const {
      style,
      contentContainerStyle,
      itemsPerPage,
      renderHeader,
      renderItem,
      renderFooter,
    } = this.props
    const { paginatedItems } = this.state

    return (
      <FlatList
        data={paginatedItems}
        style={{ ...styles.container, ...style }}
        contentContainerStyle={{ ...styles.contentContainer, ...contentContainerStyle }}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        initialNumToRender={itemsPerPage}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        removeClippedSubviews
        keyExtractor={(item, index) => `item-${index}`}
        // getItemLayout={(data, index) => ({
        //   length: 110,
        //   offset: index * 110,
        //   index,
        // })}
        onEndReachedThreshold={0.7}
        onEndReached={this.getMoreData.bind(this)}
      />
    )
  }
}

Component.propTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  contentContainerStyle: PropTypes.object,
  itemsPerPage: PropTypes.number,
  renderHeader: PropTypes.func,
  renderItem: PropTypes.func,
  renderFooter: PropTypes.func,
}

Component.defaultProps = {
  data: [],
  style: {},
  contentContainerStyle: {},
  itemsPerPage: 20,
  renderHeader: () => null,
  renderItem: () => null,
  renderFooter: () => null,
}

export default Component
