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
    <div className="bg-gray-200 flex items-center justify-between gap-4 border-2 border-white shadow-[0_1px_10px_rgba(0,0,0,0.2)] rounded-lg py-2 px-4 mb-4">
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
      </div>
      <button onClick={() => deleteItem(id)}>
        <TrashIcon className="h-10 w-10 p-2 bg-black rounded-full text-white" />
      </button>
    </div>
  )
}
