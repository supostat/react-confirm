import React from 'react';
import confirm from 'util/confirm';

const handleOnClick = () => {
  confirm('Are you sure?').then(({value, hideModal}) => {
    console.log(value);
    setTimeout(() => {
      hideModal();
    }, 5000);

  }, () => {
    console.log('cancel!');
  });
}

const App = () => {
  return <button onClick={handleOnClick}>save</button>;
}

export default App;
