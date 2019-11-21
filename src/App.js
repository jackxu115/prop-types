import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({
  ingredients = 9,
  steps = 2,
  title = '[untitled recipe]'
}) => (
  <div className="summary">
    <h1>{title}</h1>
    <p>
      <span>{ingredients} Ingredients | </span>
      <span>{steps} Steps</span>
    </p>
  </div>
);

Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) =>
    typeof props[propName] !== 'string'
      ? new Error('A title must be a string')
      : props[propName].length > 20
      ? new Error('title is over 20 characters')
      : null
};

const App = () => <Summary title={'Apple Juice'} />;

export default App;
