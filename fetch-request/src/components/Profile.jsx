import React, { useEffect, useState } from 'react';
import Bio from './Bio.jsx';
import PropTypes from 'prop-types';

const Profile = ({ delay }) => {
  const [imageURL, setImageURL] = useState(null);
  const [bioText, setBioText] = useState('Loading...');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(error));
    }, delay);

    setTimeout(() => {
      setBioText('I like long walks on the beach and JavaScript');
    }, delay + 1000); // Adjust the delay to match your requirements
  }, [delay]);

  return (
    (imageURL && (
      <div>
        <h3>Username</h3>
        <img src={imageURL} alt="profile" />
        <Bio delay={1000} bioText={bioText} />
      </div>
    )) || <h1>Loading...</h1>
  );
};

Profile.propTypes = {
  delay: PropTypes.number.isRequired,
};

export default Profile;

