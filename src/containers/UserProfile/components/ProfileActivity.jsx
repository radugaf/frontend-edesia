import React from 'react';
import PropTypes from 'prop-types';

const ProfileActivity = ({
  img, name, date, children,
}) => (
  <div className="profile__activity">
    <div>
      <p className="profile__activity-name">User Name
        <span className="profile__activity-date"> Date of activity</span>
      </p>
      What and when it happened ...
    </div>
  </div>
);

ProfileActivity.propTypes = {
  date: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

ProfileActivity.defaultProps = {
  date: '',
  img: '',
  name: '',
};

export default ProfileActivity;
