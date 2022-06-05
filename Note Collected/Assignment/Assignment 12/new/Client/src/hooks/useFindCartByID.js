import { useEffect, useState } from "react";

const useFindCartByID = (id) => {
  const [cartGetByID, setCartGetByID] = useState([]);
  useEffect(() => {
    fetch(`https://etools-server.herokuapp.com/single-cart/${id}`)
      .then((res) => res.json())
      .then((data) => setCartGetByID(data));
  }, [cartGetByID]);
  return [cartGetByID, setCartGetByID];
};

export default useFindCartByID;
