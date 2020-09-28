// class names summary__option__label summary__option__value summary__option__cost
import React from 'react';
import '../../App.css';

export default function PartSummary(props) {
  const {partTitle, selected} = props;
  return (
    <div className='summary__option'>
      <div className='summary__option__label'>{partTitle}</div>
      <div className='summary__option__value'>{selected[partTitle].name}</div>
      <div className='summary__option__cost'>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(selected[partTitle].cost)}
      </div>
    </div>
  )
}