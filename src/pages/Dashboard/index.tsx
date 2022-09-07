import { useContext, useEffect } from "react";
import Cards from "../../components/Cards";
import { Ul } from "../../components/Cards/style";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";

function Dashboard() {
  const { setIsPageDonate } = useContext(AuthContext);

  useEffect(() => {
    setIsPageDonate(true);
  }, []);

  return (
    <>
      <Header />
      <Ul>
        <Cards />
      </Ul>
    </>
  );
}

export default Dashboard;
