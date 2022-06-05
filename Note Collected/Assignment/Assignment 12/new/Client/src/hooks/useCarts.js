import { useEffect, useState } from "react";

const useCarts = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(`https://etools-server.herokuapp.com/carts`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [carts]);
  // useEffect(() => {
  //   fetch(`https://etools-server.herokuapp.com/orders`)
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, [orders]);
  return [carts, setCarts];
};

export default useCarts;
