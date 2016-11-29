import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

class Footer extends Component {
  static propTypes = {}

  render() {
    const location = this.props.location; 
    
    const settingsClass = classNames({
      'nav-item': true, 
      'active': location === '/settings' 
    });

    const performanceClass = classNames({
      'nav-item': true, 
      'active': location === '/performance' 
    });

    const alarmsClass = classNames({
      'nav-item': true, 
      'active': location === '/alarms' 
    });

    return (
      <div className="Footer container-fluid">
        <nav className="navbar navbar-light bg-faded Footer">
          <a className="Footer-Copyright" href="#">© SnapRoute 2016</a>
          <ul className="nav navbar-nav pull-md-right">
            <li className="nav-item">
              <Link className="nav-link" to="/docs">Docs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(state => ({ 
  
}), 
{

})(Footer)




