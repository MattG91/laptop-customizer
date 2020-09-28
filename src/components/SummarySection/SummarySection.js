import React from 'react';
import PartSummary from '../PartSummary/PartSummary';
import Total from '../Total/Total';
import '../../App.css';

export default function SummarySection(props) {
  const {selected, USCurrencyFormat} = props
   const summaryCards = Object.keys(selected)
    .map(key =>
       <PartSummary
        key={key}
        selected={selected}
        partTitle={key}
      />
    )
  return (
    <section className='main__summary'>
      <h3> Review your cart</h3>
      {summaryCards}
      <Total 
        className='summary__total'
        selected={selected}
        USCurrencyFormat={USCurrencyFormat}
      />
    </section>
  )
}