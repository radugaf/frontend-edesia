import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const rows = [
  {
    id: 'img', disablePadding: false, label: 'Image',
  },

  {
    id: 'name', disablePadding: true, label: 'Produs',
  },
  {
    id: 'supplier', disablePadding: false, label: 'Furnizor',
  },
  {
    id: 'price', disablePadding: false, label: 'Pret',
  },
  {
    id: 'um', disablePadding: false, label: 'U.M.',
  },
  {
    id: 'cota_tva', disablePadding: false, label: 'Cota TVA%',
  },
  {
    id: 'desired_qty', disablePadding: false, label: 'Cantitate Dorita',
  },
  {
    id: 'available_qty', disablePadding: false, label: 'Total Estimativ',
  },
  
  
];

const createSortHandler = (property, onRequestSort) => (event) => {
  onRequestSort(event, property);
};

const MatTableHead = ({
  onSelectAllClick, order, orderBy, numSelected, rowCount, rtl, onRequestSort,
}) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          className={`material-table__checkbox ${numSelected === rowCount && 'material-table__checkbox--checked'}`}
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount}
          onChange={onSelectAllClick}
        />
      </TableCell>
      {rows.map(row => (
        <TableCell
          className="material-table__cell material-table__cell--sort material-table__cell-right"
          key={row.id}
          align={rtl.direction === 'rtl' ? 'right' : 'left'}
          padding={row.disablePadding ? 'none' : 'default'}
          sortDirection={orderBy === row.id ? order : false}
        >
          <TableSortLabel
            active={orderBy === row.id}
            direction={order}
            onClick={createSortHandler(row.id, onRequestSort)}
            className="material-table__sort-label"
            dir="ltr"
          >
            {row.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

MatTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(MatTableHead);
