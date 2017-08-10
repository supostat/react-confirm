import React from 'react';
import ReactDOM from 'react-dom';

const createConfirmation = (Component) => {
  return (props) => {
    const wrapper = document.body.appendChild(document.createElement('div'));

    function dispose() {
      ReactDOM.unmountComponentAtNode(wrapper);
      setTimeout(() => wrapper.remove());
    }

    return () => {
      return new Promise((resolve, reject) => {
        try {
          ReactDOM.render(
            <Component
              reject={reject}
              resolve={resolve}
              dispose={dispose}
              {...props}
            />,
            wrapper
          );
        } catch (e) {
          console.error(e);
          throw e;
        }
      });
    }
  }
}

export default createConfirmation;
