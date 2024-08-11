import React, { useEffect } from "react"
import { useGlobalContext } from "../contexts/globalContext"
import IncomeForm from "./IncomeForm"
import Item from "./Item"

export default function Income({ displayClassName }) {
  const { incomes, totalIncome, deleteIncome } = useGlobalContext()

  return (
    <section className={`${displayClassName} p-5`}>
      <h1 className="font-bold text-2xl">Income</h1>
      <h2 className="flex justify-center items-center bg-gray-200 border-2 border-white shadow-[0_1px_15px_rgba(0,0,0,0.06)] rounded-lg p-4 my-4 gap-2">
        Total Income:{" "}
        <span className="text-green-500 font-extrabold text-xl">
          ${totalIncome()}
        </span>
      </h2>
      <div className="flex justify-between gap-10">
        <div className="p-3 relative">
          <IncomeForm />
        </div>
        <div className="w-full">
          {incomes &&
            incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income
              return (
                <Item
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  deleteItem={deleteIncome}
                  category={category}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
