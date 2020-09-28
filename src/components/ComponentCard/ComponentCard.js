import React from 'react';
import PartButton from '../PartButton/PartButton';
import '../../App.css';

export default function ComponentCard(props) {
  const {features, selected, updateFeature, cardTitle} = props
  const parts = features.map((item, index) => 
    <PartButton
      key={index}
      features={features}
      selected={selected}
      updateFeature={updateFeature}
      item={item}
      cardTitle={cardTitle}
    />
  )

  return (
    <fieldset className='feature'>
      <legend className='feature_name'>
        <h3>{cardTitle}</h3>
      </legend>
      {parts}
    </fieldset>
  )
}