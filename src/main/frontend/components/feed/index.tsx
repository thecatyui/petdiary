import React from 'react';

import useClass from 'classnames';

import Icon from '../icon';

type FeedProps = {
  children?: React.ReactNode;
};

const Feed: React.FC<FeedProps> = ({ children }) => (
    <div className={useClass('o-feed')}>
      <div className={useClass('o-feed__inner')}>
        <div className={useClass('o-feed__head')}>
          <div className={useClass('o-feed__head-info')}>
            <div className={useClass('o-feed__head-profile')}>
              <span className={useClass('o-feed__head-photo')}>Img</span>
              <span className={useClass('o-feed__head-name')}>John</span>
            </div>
            <span className={useClass('o-feed__head-date')}>2023.03.29</span>
          </div>
          <button className={useClass('o-feed__head-button')}>...</button>
        </div>
        <div className={useClass('o-feed__body')}>Feed Text</div>
        <div className={useClass('o-feed__foot')}>
          <button className={useClass('o-feed__foot-good')}>
            <Icon name={'paw'} />
            <span className={useClass('o-feed__foot-text')}>Good</span>
          </button>
          <button className={useClass('o-feed__foot-comment')}>
            <Icon name={'paw'} />
            <span className={useClass('o-feed__foot-text')}>Comment</span>
          </button>
        </div>
      </div>
      {children}
    </div>
  );

export default Feed;
