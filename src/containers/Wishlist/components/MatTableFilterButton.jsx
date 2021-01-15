import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from 'mdi-react/FilterListIcon';

const MatTableFilterButton = ({ onRequestSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = property => (event) => {
    onRequestSort(event, property);
    handleClose();
  };

  return (
    <div>
      <IconButton
        className="material-table__toolbar-button"
        aria-owns={anchorEl ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="material-table__filter-menu"
      >
        <MenuItem onClick={handleSort('name')} className="material-table__filter-menu-item">Produs</MenuItem>
        <MenuItem onClick={handleSort('desired_qty')} className="material-table__filter-menu-item">Cantitate</MenuItem>
        <MenuItem onClick={handleSort('price')} className="material-table__filter-menu-item">Pret</MenuItem>
        <MenuItem onClick={handleSort('um')} className="material-table__filter-menu-item">U.M.</MenuItem>
        <MenuItem onClick={handleSort('supplier')} className="material-table__filter-menu-item">Furnizor</MenuItem>
        <MenuItem onClick={handleSort('cota_tva')} className="material-table__filter-menu-item">TVA</MenuItem>
        <MenuItem onClick={handleSort('available_qty')} className="material-table__filter-menu-item">Total Estimativ</MenuItem>
      </Menu>
    </div>
  );
};

MatTableFilterButton.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
};

export default MatTableFilterButton;
