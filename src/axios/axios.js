import axios from 'axios';


export default function () {
  const token = localStorage.getItem('userToken');

  const instance = axios.create({
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
}


/* axios is not installed in dependencies
  and is giving some error, when installing it,
  but the invokation in actionCreators.js would look like:

  import axios from '../axios/axios';

  export const deleteQuoteAsync = id => dispatch => {
    dispatch(spinnerOn());
    // you need to INVOKE axios(), because you are creating an axios function
    // inside axios.js which you want to run in actionCreators.js
    axios().delete(`http://gabe.mockable.io/quotes/${id}`)
      .then(res => {
        dispatch(deleteQuote(res.data.id));
        dispatch(spinnerOff());
      });
  };

*/
