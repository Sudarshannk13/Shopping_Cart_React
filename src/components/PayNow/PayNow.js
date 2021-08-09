import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PayNow = ({ cart }) => {
  let cartEmpty = cart.cart.length === 0;
  return !cartEmpty ? (
    <Link to={"/pay"} className={"btn-paynow"}>
      checkout
    </Link>
  ) : (
    <div disabled className={"btn-paynow"}>
      checkout
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(PayNow);
