import WheelPicker from "react-simple-wheel-picker";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectId,
  selectMonthlyBenefitValue,
  selectTotal,
  updateValue,
} from "../../slices/MonthlyBenefitSlice";

export default function MBPicker(props) {
  const monthly = useSelector(selectMonthlyBenefitValue);
  const initialId = useSelector(selectId);
  const initialTotal = useSelector(selectTotal);

  const [totalVal, setTotalVal] = useState("");
  const totalRef = useRef("");

  const [monthlyVal, setMonthlyVal] = useState("");
  const monthRef = useRef("");

  const dispatch = useDispatch();

  const handleOnMonthChange = (valuePicker) => {
    if (monthRef.current !== valuePicker) {
      setMonthlyVal(monthly);
      setTotalVal(initialTotal);
    }
    setMonthlyVal(valuePicker.value);
    dispatch(updateValue(valuePicker.value));
  };

  useEffect(() => {
    props.monthChange(monthlyVal, totalVal);
    console.log("MBPicker redux is>>", monthly);
    console.log("MBPicker is >>>", monthlyVal);
    console.log("total in redux is>>", initialTotal);
    console.log("total in MBPicker is >>>", totalVal);
  }, [monthlyVal, monthly, initialTotal, totalVal]);

  return (
    <div
      style={{
        textAlign: "center",
        color: "#ff0008",
        placeItems: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "#F5F5F5",
          width: "110%",
          height: "4rem",
          padding: "10px",
          color: "black",
        }}
      >
        <p1>MONTHLY CASH BENEFIT</p1>
      </div>
      <WheelPicker
        data={props.data}
        onChange={handleOnMonthChange}
        fontSize={20}
        width={180}
        height={100}
        itemHeight={0.5}
        selectedID={initialId}
        color="#ffe7e8"
        activeColor="#ff0008"
        backgroundColor="#fff"
        shadowColor="none"
        marginTop={20}
      />
    </div>
  );
}
