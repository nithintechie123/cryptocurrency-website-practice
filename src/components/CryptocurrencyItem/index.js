import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItemDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoItemDetails
  return (
    <li className="each-crypto-item-container">
      <div className="logo-currency-name-container">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="currency-type-logo"
        />
        <p className="list-item-labels">{currencyName}</p>
      </div>
      <div className="currency-values-container">
        <p className="list-item-labels margin-right">{euroValue}</p>
        <p className="list-item-labels">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
