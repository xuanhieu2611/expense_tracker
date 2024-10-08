const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async (req, res) => {
  const { userID, title, amount, category, description, date } = req.body
  const expense = ExpenseSchema({
    userID,
    title,
    amount,
    category,
    description,
    date,
  })

  try {
    if (!title || !category || !description || !amount || !date) {
      return res.status(400).json({ message: "Some fields are missing" })
    }
    if (amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" })
    }
    const response = await expense.save()
    return res
      .status(200)
      .json({ message: "Expense added", _id: response?._id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Failed to add expense" })
  }
}

exports.getExpenses = async (req, res) => {
  try {
    const { id } = req.params // User ID
    const expenses = await ExpenseSchema.find({ userID: id }).sort({
      createdAt: -1,
    })
    return res.status(200).json(expenses)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Failed to get all expenses" })
  }
}

exports.deleteExpense = async (req, res) => {
  const { id } = req.params // Object ID
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      return res
        .status(200)
        .json({ message: "Expense deleted", _id: expense._id })
    })
    .catch((err) => {
      return res.status(500).json({ message: "Failed to delete an expense" })
    })
}
