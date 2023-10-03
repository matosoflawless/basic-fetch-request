import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Bio = ({ delay, bioText }) => {
  const [isBioVisible, setIsBioVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBioVisible(true);
    }, delay);
  }, [delay]);

  return (
    isBioVisible && (
      <p>{bioText}</p>
    )
  );
};

Bio.propTypes = {
  delay: PropTypes.number.isRequired,
  bioText: PropTypes.string.isRequired,
};

export default Bio;
