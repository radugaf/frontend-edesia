import React, { useState } from 'react';
import {
  Card, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import showResults from './Show';
import ProfileSettings from './ProfileSettings';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('3');
  const initialValues = {
    username: 'Larry Boom',
    email: 'boom@mail.com',
  };

  const handleToggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Col md={12} lg={12} xl={8}>
      <Card>
        <div className="profile__card tabs tabs--bordered-bottom">
          <div className="tabs__wrap">
            <Nav tabs>
    
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => handleToggle('3')}
                >
                  Edit Profile
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="3">
                <ProfileSettings onSubmit={showResults} initialValues={initialValues} />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProfileTabs;
