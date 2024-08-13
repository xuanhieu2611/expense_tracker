import React from "react"
import { useGlobalContext } from "../contexts/globalContext"
import { dateFormat } from "../utils/dateFormat"

export default function Transaction({ displayClassName }) {
  const { allTransactions } = useGlobalContext()
  const transactions = allTransactions()
  return (
    <div className={`${displayClassName}`}>
      <h1>Transactions</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border-r-4 border-white">Title</th>
            <th className="border-r-4 border-white">Type</th>
            <th className="border-r-4 border-white">Amount</th>
            <th className="border-r-4 border-white">Category</th>
            <th className="border-r-4 border-white">Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((item) => {
              return (
                <tr className="border-white border-2 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.2)] text-center">
                  <td className="p-2 rounded-lg">{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>{dateFormat(item.date)}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
