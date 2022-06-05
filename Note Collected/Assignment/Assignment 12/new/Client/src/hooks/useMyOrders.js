import { useEffect, useState } from "react";

const useMyOrders = (email) => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://etools-server.herokuapp.com/my-orders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders]);
  return [myOrders, setMyOrders];
};

export default useMyOrders;
