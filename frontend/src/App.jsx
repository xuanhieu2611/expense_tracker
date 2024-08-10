import Navigation from "./components/Navigation"
import Orb from "./components/Orb"
import { useState } from "react"
import Dashboard from "./components/Dashboard"
import Transaction from "./components/Transaction"
import Income from "./components/Income"
import Expense from "./components/Expense"

function App() {
  const displayClassName =
    "flex-1 h-full border-2 border-gray-700 rounded-xl bg-slate-100/80 backdrop-blur-sm overflow-auto overflow-x-hidden"
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
    <main className="h-screen text-gray-900 flex p-5 gap-5">
      <Orb />
      <Navigation active={active} setActive={setActive} />
      {displayData()}
    </main>
  )
}

export default App
