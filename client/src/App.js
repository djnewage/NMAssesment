import React, { useState, useEffect } from "react";
import SearchAppBar from "./Components/Search";
import { Container } from "./Components/style";
import CoinList from "./Components/CoinList";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [state, setState] = useState({
    coinData: []
  });
  const [isLoading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  // Shows coinData or filters based on state
  const renderData = coinData => {
    if (coinData.length && searchTerm.length) {
      return coinData.filter(({ name }) => searchResults.includes(name.trim()));
    }

    return coinData;
  };

  //Filters through the coinData in state for coinbase names
  useEffect(() => {
    const results = state.coinData
      .map(name => name.name)
      .filter(coin => coin.toLowerCase().includes(searchTerm));

    setSearchResults(results);
  }, [searchTerm]);

  //Fetches all of the bitcoin coinData from my server
  useEffect(() => {
    const fetchData = async () => {
      const coinData = await fetch("http://localhost:5000/api/data");
      const response = await coinData.json();
      setState({ coinData: response });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <SearchAppBar handleChange={handleChange} searchTerm={searchTerm} />
      <Container>
        {isLoading ? (
          <PacmanLoader
            size={25}
            //size={"150px"} this also works
            color={"#FFFF00"}
            loading={isLoading}
          />
        ) : (
          <CoinList coinData={renderData(state.coinData)} />
        )}
      </Container>
    </div>
  );
}

export default App;
