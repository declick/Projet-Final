import React, { useEffect } from 'react'

const Reserver = ({ url }) => {
  useEffect(() => {
    window.location.href = 'http://www.google.com'
  }, []);

  return <h5>Redirecting...</h5>
};

export default Reserver

