// src/actions/userActions.js
import axios from '../axios';

export const fetchUserData = () => {
  return (dispatch) => {
    axios
      .get('movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
      .then((response) => {
        dispatch({ type: 'SET_USER', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };
};
