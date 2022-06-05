import { useEffect, useState } from "react";

const useTeams = () => {

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://etools-server.herokuapp.com/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, [teams]);
  return [teams, setTeams];
};

export default useTeams;