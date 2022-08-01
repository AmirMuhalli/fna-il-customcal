import WheelPicker from "react-simple-wheel-picker";

import React, { useEffect, useRef, useState } from "react";
import {
  selectYearId,
  selectYears,
  updateYears,
} from "../../slices/MonthlyBenefitSlice";
import { useDispatch, useSelector } from "react-redux";

export default function YRPicker(props) {
  const year = useSelector(selectYears);
  const initialId = useSelector(selectYearId);
  const initialYear = useSelector(selectYears);
  const [yearVal, setYearVal] = useState("");
  const yearRef = useRef("");

  const dispatch = useDispatch();

  const handleOnYrChange = (PickerData) => {
    if (yearRef.current !== PickerData) {
      setYearVal(year);
    }
    setYearVal(PickerData.value);
    dispatch(updateYears(PickerData.value));
  };

  useEffect(() => {
    props.yrChange(year);
    console.log("yearVal in YRPicker redux is>>", year);
    console.log("yearVal in YRPicker is >>>", yearVal);
  }, [yearVal, year]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // gap: "20.5px",
        textAlign: "center",
        placeItems: "center",
        color: "#ff0008",
        padding: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "#F5F5F5",
          width: "120%",
          height: "4rem",
          padding: "20px",
          color: "black",
        }}
      >
        <p1>PAYOUT PERIOD</p1>
      </div>
      <WheelPicker
        data={props.data}
        onChange={handleOnYrChange}
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
