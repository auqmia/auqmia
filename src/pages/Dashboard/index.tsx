import Cards from "../../components/Cards";
import { Ul } from "../../components/Cards/style";
import Header from "../../components/Header";

function Dashboard() {
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
