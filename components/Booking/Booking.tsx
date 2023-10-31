import React from "react";
import AutoCompleteAddress from "./AutoCompleteAddress";
import InputItem from "../InputItem";

function Booking() {
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className={`border-[1px] p-5 rounded-md min-h-[600px]`}>
        <InputItem label={'Where From'}/>
        <InputItem label={'Where To'}/>
      </div>
    </div>
  );
};

export default Booking;
