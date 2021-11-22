import mongoose from "mongoose";

const expenseSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
