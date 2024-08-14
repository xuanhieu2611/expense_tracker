import { useState } from "react"
import { useGlobalContext } from "../contexts/globalContext"
import { useUser } from "@clerk/clerk-react"

export default function IncomeForm() {
  const { addIncome } = useGlobalContext()

  const { user } = useUser()
  const [inputState, setinputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  })

  const { title, amount, date, category, description } = inputState

  const handleInput = (name) => (e) => {
    setinputState({ ...inputState, [name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newIncome = { ...inputState, userID: user.id }
    await addIncome(newIncome)
    setinputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    })
  }
  return (
    <form className="flex flex-col items-start gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        name="title"
        placeholder="Salary"
        onChange={handleInput("title")}
        className="p-2 rounded-md border-4 border-white bg-transparent shadow-[0_1px_10px_rgba(0,0,0,0.2)] text-gray-800"
      />
      <input
        type="number"
        value={amount}
        name="amount"
        placeholder="1000"
        onChange={handleInput("amount")}
        className="p-2 rounded-md border-4 border-white bg-transparent shadow-[0_1px_10px_rgba(0,0,0,0.2)] text-gray-800"
      />
      <input
        type="date"
        value={date}
        name="date"
        placeholder="2024-08-10"
        onChange={handleInput("date")}
        className="p-2 rounded-md border-4 border-white bg-transparent shadow-[0_1px_10px_rgba(0,0,0,0.2)] text-gray-800"
      />
      <div className="flex justify-end">
        <select
          required
          value={category}
          id="category"
          name="category"
          onChange={handleInput("category")}
          className="p-2 rounded-md border-4 border-white bg-transparent shadow-[0_1px_10px_rgba(0,0,0,0.2)] text-gray-800"
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investment">Investment</option>
          <option value="family">Family</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <input
        type="text"
        value={description}
        name="description"
        placeholder="Monthly salary"
        onChange={handleInput("description")}
        className="p-2 rounded-md border-4 border-white bg-transparent shadow-[0_1px_10px_rgba(0,0,0,0.2)] text-gray-800"
      />
      <button className="p-3 border-2 border-white rounded-xl bg-green-300 hover:bg-green-500">
        Add income
      </button>
    </form>
  )
}
