import React, { useEffect } from "react"
import Chart from "./Chart"
import { useGlobalContext } from "../contexts/globalContext"

export default function Dashboard({ displayClassName }) {
  const { totalIncome, totalExpense, getIncomes, getExpenses, totalBalance } =
    useGlobalContext()

  useEffect(() => {
    getExpenses()
    getIncomes()
  }, [])

  return (
    <div className={`${displayClassName}`}>
      <h1>All Transactiosn</h1>
      <div>
        <div>
          <Chart />
          <div>
            <div>
              <h2>Total Income</h2>
              <p>${totalIncome()}</p>
            </div>
            <div>
              <h2>Total Expenses</h2>
              <p>${totalExpense()}</p>
            </div>
            <div>
              <h2>Tottal Balance</h2>
              <p>${totalBalance()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
