import React from 'react';
import ComponentCard from '../ComponentCard/ComponentCard';
import '../../App.css';


export default function ComponentTypes(props) {
  const {features, updateFeature, selected} = props
  const cards = Object.keys(features)
    .map(key =>
      <ComponentCard
        key={key}
        features={features}
        selected={selected}
        updateFeture={updateFeature}
        cardTitle={key}
      />
    );
     
  return (
    <section className='main__form'>
      <h3>Customize your laptop</h3>
      {cards}
    </section>
  );
}


