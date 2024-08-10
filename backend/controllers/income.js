const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body
  const income = IncomeSchema({
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
    const response = await income.save()
    return res.status(200).json({ message: "Income added", _id: response?._id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Failed to add income" })
  }
}

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
    return res.status(200).json(incomes)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Failed to get all incomes" })
  }
}

exports.deleteIncome = async (req, res) => {
  const { id } = req.params
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      return res
        .status(200)
        .json({ message: "Income deleted", _id: income._id })
    })
    .catch((err) => {
      return res.status(500).json({ message: "Failed to delete an income" })
    })
}
