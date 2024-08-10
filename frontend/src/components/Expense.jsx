import React, { useEffect } from "react"
import { useGlobalContext } from "../contexts/globalContext"
import ExpenseForm from "./ExpenseForm"
import Item from "./Item"

export default function Expense({ displayClassName }) {
  const { expenses, totalExpense, deleteExpense } = useGlobalContext()

  return (
    <section className={`${displayClassName}`}>
      <h1>Expenses</h1>
      <h2 className="flex justify-center items-center bg-gray-200 border-2 border-white shadow-[0_1px_15px_rgba(0,0,0,0.06)] rounded-lg p-4 my-4 gap-2">
        Total Expense:{" "}
        <span className="text-red-500 font-extrabold text-xl">
          ${totalExpense()}
        </span>
      </h2>
      <div className="flex">
        <div className="p-3 relative">
          <ExpenseForm />
        </div>
        <div>
          {expenses &&
            expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense
              return (
                <Item
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  deleteItem={deleteExpense}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
