import React from "react"
import { useGlobalContext } from "../contexts/globalContext"

export default function History() {
  const { transactionHistory } = useGlobalContext()
  const [...history] = transactionHistory()
  return (
    <div className="flex flex-col gap-4">
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item
        return (
          <div
            key={_id}
            className="flex items-center justify-between bg-gray-200 border-2 border-white shadow-[0_1px_15px_rgba(0,0,0,0.06)] p-4 rounded-md"
          >
            <p
              className={`${
                type === "expense" ? "text-red-500" : "text-green-500"
              }`}
            >
              {title}
            </p>
            <p
              className={`${
                type === "expense" ? "text-red-500" : "text-green-500"
              }`}
            >
              {type === "expense" ? `-${amount}` : `+${amount}`}
            </p>
          </div>
        )
      })}
    </div>
  )
}
