import { connect } from "react-redux";
import Till from "./Till";

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Till);
