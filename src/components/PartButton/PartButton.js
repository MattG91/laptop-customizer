import React from 'react';
import '../../App.css';

export default function PartButton(props) {
  const {item, cardTitle, updateFeature} = props;
  console.log(cardTitle, item);
  return (
    <div className='feature__item'>
      <label type='button' className='feature__label' onClick={() => updateFeature(cardTitle, item)}>
      {item.name} ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        .format(item.cost)})
      </label>
    </div>
  );
}