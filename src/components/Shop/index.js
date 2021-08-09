import { connect } from "react-redux";
import Shop from "./Shop";

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(Shop);
