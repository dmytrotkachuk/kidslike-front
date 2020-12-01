import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import Header from '../Header';

import Slider from '../IformationOnChild_(sidebar)/InformationList';

import './ChildTaskPage.css';

export default class MainPosition extends Component {
  state = {};

  render() {
    return (
      <div className="taskcontainer">
        <header className="taskheader">
          <Header />
        </header>

        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && <div className="tasksinfo"></div>}
              {matches.medium && <div className="tasksinfo"></div>}
              {matches.large && (
                <div className="taskmain">
                  <div className="familynfo">
                    <Slider></Slider>
                  </div>
                  <div className="tasksinfo"></div>
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
