import { useContext, useEffect } from "react";
import Cards from "../../components/Cards";
import { Ul } from "../../components/Cards/style";
import Header from "../../components/Header";
import LocationFilter from "../../components/LocationFilter";
import { AuthContext } from "../../contexts/AuthContext";

function Dashboard() {
  const { setIsPageDonate } = useContext(AuthContext);

  useEffect(() => {
    setIsPageDonate(true);
  }, []);

  return (
    <>
      <Header />
      <LocationFilter />
      <Ul>
        <Cards />
      </Ul>
    </>
  );
}

export default Dashboard;
