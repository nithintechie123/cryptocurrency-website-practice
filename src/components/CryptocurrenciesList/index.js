import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    console.log(data)
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({cryptoData: formattedData, isLoading: false})

    console.log(formattedData)
  }

  renderCryptoList() {
    const {cryptoData} = this.state
    console.log(cryptoData)

    return (
      <div className="crypto-list-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <ul className="crypto-items-container">
          <div className="headings-container">
            <h1 className="coin-type-currency-heading">Coin Type</h1>
            <div className="usd-euro-container">
              <h1 className="coin-type-currency-heading margin-right">USD</h1>
              <h1 className="coin-type-currency-heading">EURO</h1>
            </div>
          </div>
          {cryptoData.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              cryptoItemDetails={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader" className="loader-container">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      this.renderCryptoList()
    )
  }
}

export default CryptocurrenciesList
