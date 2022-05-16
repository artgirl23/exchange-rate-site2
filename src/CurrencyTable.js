import React from 'react';
import { Link } from "react-router-dom";

const CurrencyTable = (props) => {
  const { base, rates } = props;
  if (!rates) {
    return null;
  }
  return (
    <table className="table table-sm table table-striped bg-light mt-4">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" className="text-right pr-4 py-2">1.00 {base}</th>
        </tr>
      </thead>
      <tbody>
        {rates.map(currency =>
          <tr key={currency.acronym}>
            <td className="pl-4 py-2">{currency.name} <small>({currency.acronym})</small></td>
            <td className="text-right pr-4 py-2"><Link to={`/currencyconverter?base=${base}&quote=${currency.acronym}`}>{currency.rate.toFixed(6)}</Link></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default CurrencyTable