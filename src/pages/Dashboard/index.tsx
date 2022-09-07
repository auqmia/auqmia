import Cards from "../../components/Cards";
import { Ul } from "../../components/Cards/style";
import Header from "../../components/Header";
import LocationFilter from "../../components/LocationFilter";

function Dashboard() {
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
