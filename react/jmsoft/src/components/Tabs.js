import React, { Component } from "react"
import PropTypes from "prop-types"
import Tab from "./Tab"


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.childeren[0].props.label
    }
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this

    return (
      <ul className="tabs">
        {children.map(child => {
          const { label } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              onClick={onClickTabItem}
            />
          )
        })
        }
      </ul>
    )
  }
}