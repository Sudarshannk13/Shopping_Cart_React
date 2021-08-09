import { connect } from "react-redux";
import Product from "./Product";
import { addToCart } from "../../data/actions";

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (item, quantity) => dispatch(addToCart(item, quantity)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
