import React, { useState } from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';

const ProductTabs = () => {
  const [activeTab, setActiveTabs] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTabs(tab);
  };

  return (
    <div className="tabs">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => toggle('1')}
          >
            Description
          </NavLink>
        </NavItem>


      </Nav>
      <TabContent activeTab={activeTab} className="typography-message">
        <TabPane tabId="1">
          <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
            use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article
            concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you
            numerous securing. Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way
            unaffected expression for.
          </p>
          <p>His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as
            oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable
            cultivated admiration far.
          </p>
        </TabPane>
 
      </TabContent>
    </div>
  );
};

export default ProductTabs;
