import { Fragment } from "react";
import MerchSummary from "./MerchSummary";
import AvailableMerch from "./AvailableMerch";

const Merch = () => {
  return (
    <Fragment>
      <MerchSummary />
      <AvailableMerch />
    </Fragment>
  );
};

export default Merch;
