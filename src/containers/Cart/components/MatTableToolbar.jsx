import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MatTableFilterButton from './MatTableFilterButton';

const MatTableToolbar = ({ numSelected, handleDeleteSelected, onRequestSort }) => (
  <div className="material-table__toolbar-wrap">
    <Toolbar className="material-table__toolbar">
      <div>
        {numSelected > 0 && (
        <h5 className="material-table__toolbar-selected">{numSelected} <span>selected</span></h5>
        )}
      </div>
      <div>
        {numSelected > 0 ? (
          
        <Button variant="contained" color="primary">
          Order Now
        </Button>
        
        
        ) : (
          <MatTableFilterButton onRequestSort={onRequestSort} />
        )}
      </div>
    </Toolbar>
  </div>
);

MatTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default MatTableToolbar;
