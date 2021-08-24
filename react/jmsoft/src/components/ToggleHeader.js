import React from "react";
import { Link, NavLink } from 'react-router-dom'

class ToggleHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    return (
      <header
        onClick={this.handleClick}
        className={this.state.isToggleOn ? "active" : null}
      >
        <div>
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <div className="hamburger-menu">
            <svg viewBox="0 0 100 100" width="80">
              <path d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
              <path d="m 30,50 h 40" />
              <path d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
            </svg>
          </div>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" activeClassName="active">
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" activeClassName="active">
              Support
            </NavLink>
          </li>
          {/* <li><NavLink to="/support" activeStyle={activeStyle}>Support</NavLink></li> */}
        </ul>
      </header>
    );
  }
}

export default ToggleHeader;
