import * as api from "../api";

export const getExpenses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExpenses();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createExpense = (expense) => async (dispatch) => {
  try {
    const { data } = await api.createExpense(expense);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateExpense = (id, expense) => async (dispatch) => {
  try {
    const { data } = await api.updateExpense(id, expense);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  try {
    await api.deleteExpense(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
