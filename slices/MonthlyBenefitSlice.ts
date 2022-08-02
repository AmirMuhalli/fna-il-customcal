import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const MCBData = [
  {
    id: "1",
    total: 3000000,
    monthly: 1002,
    monthlyBenefit: 10000,
    value: "Php 10,000",
    cashBonus: 200000,
    recommended: false,
    years: 5,
  },
  {
    id: "2",
    total: 4800000,
    monthly: 1064,
    monthlyBenefit: 20000,
    value: "Php 20,000",
    cashBonus: 200000,
    recommended: true,
    years: 8,
  },
  {
    id: "3",
    total: 6000000,
    monthly: 1800,
    monthlyBenefit: 30000,
    value: "Php 30,000",
    cashBonus: 200000,
    recommended: false,
    years: 10,
  },
];

export const YRData = [
  {
    id: "1",
    value: "1 year",
    recommended: false,
  },
  {
    id: "2",
    value: "2 years",
    recommended: false,
  },
  {
    id: "3",
    value: "3 years",
    recommended: false,
  },
  {
    id: "4",
    value: "4 years",
    recommended: false,
  },
  {
    id: "5",
    value: "5 years",
    recommended: false,
  },
  {
    id: "6",
    value: "6 years",
    recommended: false,
  },
  {
    id: "7",
    value: "7 years",
    recommended: false,
  },
  {
    id: "8",
    value: "8 years",
    recommended: true,
  },
  {
    id: "9",
    value: "9 years",
    recommended: false,
  },
  {
    id: "10",
    value: "10 years",
    recommended: false,
  },
];

export interface MonthlyBenefitState {
  value: number;
  monthly: number;
  totalValue: number;
  years: number;
}

const initialState: MonthlyBenefitState = {
  value: MCBData.find((item) => item.recommended === true)?.monthlyBenefit || 0,
  monthly: MCBData.find((item) => item.recommended === true)?.monthly || 0,
  totalValue: MCBData.find((item) => item.recommended === true)?.total || 0,
  years: YRData.find((item) => item.recommended === true)?.value || 0,
};

export const monthlyBenefitSlice = createSlice({
  name: "monthlyBenefit",
  initialState,
  reducers: {
    updateValue: (state, action: { payload: number }) => {
      return {
        ...state,
        value: action.payload,
      };
    },
    updateTotalValue: (state, action: { payload: number }) => {
      return {
        ...state,
        totalValue: action.payload,
      };
    },
    updateYears: (state, action: { payload: number }) => {
      return {
        ...state,
        years: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateTotalValue, updateYears } =
  monthlyBenefitSlice.actions;

// refactor Rootstate
export const selectMonthlyBenefitValue = (state: RootState) =>
  state.monthlyBenefit.value;

export const selectMonthlyValue = (state: RootState) =>
  state.monthlyBenefit.monthly;

// id selector
export const selectId = (state: RootState) =>
  MCBData.find((item) => item.monthlyBenefit === state.monthlyBenefit.value)
    ?.id;

export const selectMonthly = (state: RootState) => state.monthlyBenefit.monthly;

export const selectTotal = (state: RootState) =>
  state.monthlyBenefit.totalValue;

export const selectYears = (state: RootState) => state.monthlyBenefit.years;

export const selectYearId = (state: RootState) =>
  YRData.find((item) => item.value === state.monthlyBenefit.years)?.id;

export default monthlyBenefitSlice.reducer;
