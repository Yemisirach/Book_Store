import React from 'react';
import PropTypes from 'prop-types';

const addBtn = ({ handleAdd }) => (
  <button onClick={handleAdd} type="submit">
    Add book
  </button>
);
const removeBtn = ({ onClick }) => (
  <button onClick={onClick} type="button">
    remove
  </button>
);

export default { addBtn, removeBtn };
addBtn.propTypes = { handleAdd: PropTypes.func.isRequired };
removeBtn.propTypes = { onClick: PropTypes.func.isRequired };
