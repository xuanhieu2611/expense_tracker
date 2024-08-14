import React, { useState } from "react"
import Navigation from "./Navigation"
import Orb from "./Orb"
import Dashboard from "./Dashboard"
import Transaction from "./Transaction"
import Income from "./Income"
import Expense from "./Expense"

export default function Home() {
  const displayClassName =
    "flex-1 h-[95vh] border-2 border-gray-700 rounded-xl bg-slate-100/80 backdrop-blur-sm overflow-auto overflow-x-hidden"
  const [active, setActive] = useState(1)
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard displayClassName={displayClassName} />
      case 2:
        return <Transaction displayClassName={displayClassName} />
      case 3:
        return <Income displayClassName={displayClassName} />
      case 4:
        return <Expense displayClassName={displayClassName} />
    }
  }

  return (
    <section className="min-h-screen text-gray-900 flex p-5 gap-5">
      <Orb />
      <Navigation active={active} setActive={setActive} />
      {displayData()}
    </section>
  )
}
