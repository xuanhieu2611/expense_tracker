import React, { useContext } from "react"
import MoneyIcon from "../components/icons/MoneyIcon"
import CalendarIcon from "../components/icons/CalendarIcon"
import TrashIcon from "../components/icons/TrashIcon"
import { useGlobalContext } from "../contexts/globalContext"

export default function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  indicatorColor,
  type,
}) {
  const { getIncomes, deleteIncome } = useGlobalContext()
  const categoryIcon = () => {
    // switch (category) {
    //   case "example":
    //     return <p>Example</p>
    // }
    return <p>icon</p>
  }

  const handleDelete = async (id) => {
    deleteIncome(id)
  }

  return (
    <div className="bg-gray-700 flex items-center gap-4 border-2 border-white shadow_[0_1px_15px_rgba(0,0,0,0.06)] rounded-lg p-2 mb-4">
      <div>{categoryIcon()}</div>
      <div className="flex flex-col items-center justify-around">
        <h5>{title}</h5>
        <div className="flex">
          <div className="flex">
            <MoneyIcon />
            {amount}
          </div>
          <div className="flex">
            <CalendarIcon />
            {date}
          </div>
          <p>{description}</p>
        </div>
        <button onClick={() => handleDelete(id)}>
          <TrashIcon className="h-10 w-10 p-2 bg-black rounded-full text-white" />
        </button>
      </div>
    </div>
  )
}
