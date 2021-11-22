import mongoose from "mongoose";
import Expense from "../models/expenseSchema.js";

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const body = req.body;
  try {
    const newExpense = await Expense.create({
      name: body.name,
      cost: body.cost,
      category: body.category,
    });
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cost, category } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No Expense with that ID");
    }
    const expense = { name, cost, category, _id: id };
    await Expense.findByIdAndUpdate(id, expense, { new: true });
    res.json(expense);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No Expense with that ID");
    }
    await Expense.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
