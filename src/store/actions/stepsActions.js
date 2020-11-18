//Action Creator
import { NEW_STEP } from "./actionTypes";
export function changeStep(newStep) {
  return {
    type: NEW_STEP,
    payload: newStep,
  };
}
