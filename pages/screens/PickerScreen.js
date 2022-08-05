import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MBPicker from "../pickers/MBPicker";
import YRPicker from "../pickers/YRPicker";
import {
  selectMonthly,
  selectMonthlyBenefitValue,
  selectTotal,
  selectYears,
  MCBData,
  YRData,
} from "../../slices/MonthlyBenefitSlice";

export default function PickerScreen() {
  const monthlyBenefitValue = useSelector(selectMonthlyBenefitValue);
  const monthlyValue = useSelector(selectMonthly);
  const year = useSelector(selectYears);
  const initialTotal = useSelector(selectTotal);
  const [totalVal, setTotalVal] = useState("");
  const [monthlyBenefitVal, setMonthlyBenefitVal] = useState("");
  const [monthlyVal, setMonthlyVal] = useState(monthlyValue);
  const [yearVal, setYearVal] = useState("");
  const [newTotalVal, setNewTotalVal] = useState("");

  const monthChange = (monthlyBenefitTarget, totalTarget) => {
    setMonthlyBenefitVal(monthlyBenefitTarget);
    setTotalVal(totalTarget);
  };

  const yrChange = (yearTarget) => {
    setYearVal(yearTarget);
  };

  // removing all the alphabetical characters from yearVal and MonthlyBenefitVal
  const yearValNoAlpha = yearVal.replace(/[^0-9]/g, "");
  const monthlyBenefitValNoAlpha = monthlyBenefitVal.replace(/[^0-9]/g, "");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const computeProceeds = () => {
    const total = yearValNoAlpha * 12 * monthlyBenefitValNoAlpha;
    const totalCurrency = total.toLocaleString("en-US", {
      style: "currency",
      currency: "Php",
      minimumFractionDigits: 2,
    });
    return totalCurrency;
  };

  useEffect(() => {
    setNewTotalVal(computeProceeds());
    setTotalVal(computeProceeds());
    console.log("total is >>>", newTotalVal);
    console.log("monthlyVal in PickerScreen >>>", monthlyBenefitValue);
    console.log("totalVal in PickerScreen >>>", totalVal);
    console.log("year in PickerScreen >>>", yearValNoAlpha);
  }, [
    monthlyBenefitVal,
    monthlyBenefitValue,
    totalVal,
    newTotalVal,
    yearValNoAlpha,
    yearVal,
    computeProceeds,
  ]);

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem" }}>Customize your coverage.</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "15px",
          marginTop: "2rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <MBPicker monthChange={monthChange} data={MCBData} />
          <YRPicker yrChange={yrChange} data={YRData} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "15px",
          marginTop: "2rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h1
            style={{ textAlign: "center", color: "black", fontSize: "1.8rem" }}
          >
            Total: {""}
            <span style={{ color: "#ff0008" }}>
              {newTotalVal !== "" ? newTotalVal : totalVal}
            </span>
          </h1>
          <h2
            style={{
              textAlign: "center",
              color: "black",
              fontSize: "1.25rem",
            }}
          >
            Monthly Cash Benefit:{" "}
            <span style={{ color: "#ff0008" }}>{monthlyBenefitVal}</span>
            <br />
            Payout Period: <span style={{ color: "#ff0008" }}>{yearVal}</span>
          </h2>
          <h4
            style={{
              textAlign: "center",
            }}
          >
            For Only{" "}
            <span style={{ color: "#ff0008" }}>
              {monthlyVal.toLocaleString("en-US", {
                style: "currency",
                currency: "Php",
                minimumFractionDigits: 2,
              })}
              /month
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}
