import { connect } from "react-redux";
import Footer from "./Footer";
import { reset } from "../../data/actions";
import history from "../../history";

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
    history.push("/");
    dispatch(reset());
  },
});

export default connect(null, mapDispatchToProps)(Footer);
