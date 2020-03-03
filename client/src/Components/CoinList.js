import React from "react";
import CryptoCard from "./CryptoCard";
import PropTypes from "prop-types";

const propTypes = {
  coinData: PropTypes.array
};

export default function CoinList({ coinData }) {
  //This function sort the array of cryptocurrencies according to their name
  const compare = (a, b) => {
    const coinNameA = a.name.toUpperCase();
    const coinNameB = b.name.toUpperCase();

    let comparison = 0;
    if (coinNameA > coinNameB) {
      comparison = 1;
    } else if (coinNameA < coinNameB) {
      comparison = -1;
    }
    return comparison;
  };

  return (
    <>
      {coinData.sort(compare).map((coinData, i) => (
        <CryptoCard
          key={i}
          name={coinData.name}
          quote={coinData.quote}
          symbol={coinData.symbol}
          id={coinData.id}
        />
      ))}
    </>
  );
}

CoinList.propTypes = propTypes;
