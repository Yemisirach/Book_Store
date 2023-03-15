import React from 'react';
import PropTypes from 'prop-types';

const AddBtn = ({ handleAdd }) => (
  <button onClick={handleAdd} type="submit">
    Add book
  </button>
);
const removeBtn = ({ onClick }) => (
  <button onClick={onClick} type="button">
    remove
  </button>
);

export default { AddBtn, removeBtn };
AddBtn.propTypes = { handleAdd: PropTypes.func.isRequired };
removeBtn.propTypes = { onClick: PropTypes.func.isRequired };
