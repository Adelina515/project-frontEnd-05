import React from 'react';
import PropTypes from 'prop-types';
import sprite  from '../../img/sprite/symbol-defs.svg';

function Icon({ className, iconId }) {
  return (
    <svg className={className} width="98px" height="35px">
      <use href={`${sprite}#${iconId}`}/>
    </svg>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Icon;