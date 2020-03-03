import React from "react";
import { Typography } from "@material-ui/core";
import { CardContainer } from "./style";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  market_cap: PropTypes.number,
  symbol: PropTypes.string,
  searchResults: PropTypes.string
};

export default function CryptoCard({
  name,
  id,
  quote: {
    USD: { price, market_cap }
  },
  symbol,
  searchResults
}) {
  function getImg(id) {
    return `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
  }
  return (
    <div style={{ marginTop: "10px" }}>
      <CardContainer>
        <div className="img-container">
          <img src={getImg(id)} alt="" />
        </div>
        <div className="card-content">
          <Typography>
            {name} ({symbol})
          </Typography>
          <div className="price">
            <Typography>
              Market Cap:{" "}
              <span className="dollar">${Math.round(market_cap)}</span>
            </Typography>
            <Typography>
              Price: <span className="dollar">${price}</span>
            </Typography>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

CryptoCard.propTypes = propTypes;
