import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products'
import SummarySection from './components/SummarySection/SummarySection';
import './App.css';



export default class AppTwo extends Component {
  state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }



  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const {features} = this.props;
    const selected = this.state.selected;
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return (
      <div className='App'>
        <Header />
        <main>
          <Products
            features={features}
            updateFeature={this.updateFeature}
            selected={selected} 
          />
          <SummarySection
            className="main__summary"
            selected={this.state.selected}
            USCurrencyFormat={USCurrencyFormat}
          />
        </main>
      </div>
    )
  }
}




