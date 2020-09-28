import React from 'react';
import ComponentCard from '../ComponentCard/ComponentCard';
import '../../App.css';


export default function Products(props) {
  const {features, updateFeature, selected} = props;
  const cards = Object.keys(features)
    .map(key =>
      <ComponentCard
        key={key}
        features={features[key]}
        selected={selected}
        updateFeature={updateFeature}
        cardTitle={key}
      />
    );
     
  return (
    <form className='main__form'>
      <h2>Customize your laptop</h2>
        {cards}
    </form>

  );
}


