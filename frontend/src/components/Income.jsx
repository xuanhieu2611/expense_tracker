import React, { useEffect } from "react"
import { useGlobalContext } from "../contexts/globalContext"
import Form from "./Form"
import IncomeItem from "./IncomeItem"

export default function Income({ displayClassName }) {
  const { addIncome, incomes, getIncomes } = useGlobalContext()

  useEffect(() => {
    getIncomes()
  }, [])

  return (
    <section className={`${displayClassName}`}>
      <h1>Income</h1>
      <div className="flex">
        <div className="p-3 relative">
          <Form />
        </div>
        <div>
          {incomes &&
            incomes.map((income) => {
              const { _id, title, amount, date, category, description } = income
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
