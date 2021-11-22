import axios from "axios";

const url = "http://localhost:5000/expenses";

export const fetchExpenses = () => axios.get(url);
export const createExpense = (newExpense) => axios.post(url, newExpense);
export const updateExpense = (id, updatedExpense) =>
  axios.patch(`${url}/${id}`, updatedExpense);
export const deleteExpense = (id) => axios.delete(`${url}/${id}`);
