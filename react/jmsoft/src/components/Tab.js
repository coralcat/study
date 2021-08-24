import React, { Component } from "react"
import PropTypes from "prop-types"

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired
  }

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this

    let className

    if (activeTab === label) {
      className += "active"
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    )
  }
}

export default Tab