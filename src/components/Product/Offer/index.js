import { connect } from "react-redux";
import Offer from "./Offer";

const mapStateToProps = ({ items, cart }, { id }) => ({
  item: items[id],
  cart,
});

export default connect(mapStateToProps)(Offer);
