import React, { useEffect } from "react"
import Chart from "./Chart"
import { useGlobalContext } from "../contexts/globalContext"
import History from "./History"

export default function Dashboard({ displayClassName }) {
  const {
    incomes,
    expenses,
    totalIncome,
    totalExpense,
    getIncomes,
    getExpenses,
    totalBalance,
  } = useGlobalContext()

  return (
    <div className={`${displayClassName} p-5`}>
      <h1 className="text-center text-2xl mb-5">All Transactions</h1>
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-full gap-10">
          <Chart />
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-lg border-2 border-white text-green-500 text-center font-bold text-xl">
              <h2>Total Income</h2>
              <p>${totalIncome()}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg border-2 border-white text-red-500 text-center font-bold text-xl">
              <h2>Total Expenses</h2>
              <p>${totalExpense()}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg border-2 border-white text-purple-500 text-center font-bold text-xl">
              <h2>Tottal Balance</h2>
              <p>${totalBalance()}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="mb-10">
            <History />
          </div>
          <h2 className="flex justify-between text-xl font-bold">
            Min <span>Salary</span> Max
          </h2>
          <div className="flex justify-between mb-5">
            <p>
              {incomes.length > 0
                ? Math.min(...incomes.map((item) => item.amount))
                : 0}
            </p>
            <p>
              {incomes.length > 0
                ? Math.max(...incomes.map((item) => item.amount))
                : 0}
            </p>
          </div>
          <h2 className="flex justify-between text-xl font-bold">
            Min <span>Expense</span> Max
          </h2>
          <div className="flex justify-between">
            <p>{Math.min(...expenses.map((item) => item.amount))}</p>
            <p>{Math.max(...expenses.map((item) => item.amount))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
