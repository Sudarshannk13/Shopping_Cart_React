import { HashRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Till from "./components/Till";
import Shop from "./components/Shop";
import Message from "./components/Message/Message";
import PayNow from "./components/PayNow/PayNow";
import Footer from "./components/Footer/";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <Layout>
          <Shop />
          <Till />
          <PayNow />
        </Layout>
      </Route>
      <Route path="/pay">
        <Layout>
          <Message />
          <Till />
        </Layout>
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
