import React, { useContext } from "react"
import MoneyIcon from "./icons/MoneyIcon"
import CalendarIcon from "./icons/CalendarIcon"
import TrashIcon from "./icons/TrashIcon"
import { useGlobalContext } from "../contexts/globalContext"
import { dateFormat } from "../utils/dateFormat"

export default function Item({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    // switch (category) {
    //   case "example":
    //     return <p>Example</p>
    // }
    return <p>icon</p>
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
            {dateFormat(date)}
          </div>
          <p>{description}</p>
        </div>
        <button onClick={() => deleteItem(id)}>
          <TrashIcon className="h-10 w-10 p-2 bg-black rounded-full text-white" />
        </button>
      </div>
    </div>
  )
}
