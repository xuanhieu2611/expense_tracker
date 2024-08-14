import DashboardIcon from "./icons/DashboardIcon"
import TransactionIcon from "./icons/TransactionIcon"
import IncomeIcon from "./icons/IncomeIcon"
import ExpenseIcon from "./icons/ExpenseIcon"
import SignoutIcon from "./icons/SignoutIcon"
import { SignOutButton, UserButton, useUser } from "@clerk/clerk-react"
const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Transaction",
    icon: <TransactionIcon />,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Income",
    icon: <IncomeIcon />,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expense",
    icon: <ExpenseIcon />,
    link: "/dashboard",
  },
]

export default function Navigation({ active, setActive }) {
  const { user } = useUser()
  return (
    <div className="w-[200px] xl:w-[378px] h-[95vh] border-2 border-gray-700 rounded-xl bg-slate-100/80 backdrop-blur-sm flex flex-col justify-between p-5 items-center">
      <div className="flex items-center gap-4">
        <img
          src={user?.imageUrl}
          alt="Profile Avatar"
          className="w-10 h-10 xl:w-20 xl:h-20 rounded-full border-2 border-white object-cover bg-white shadow-[0_1px_17px_rgba(0,0,0,0.6)]"
        />
        <h2 className="text-center text-2xl font-bold min-w-20">
          {user?.firstName}
        </h2>
        {/* <p className="text-center">Your money</p> */}
      </div>
      <ul className="flex flex-1 flex-col gap-3 mr-4 mt-8 w-full">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`flex justify-center gap-2 xl:gap-5 w-full xl:ml-16 my-1 hover:cursor-pointer text-gray-600 hover:text-gray-950 ease-in-out transition-all duration-300 px-1 xl:px-5 py-1 ${
              active == item.id
                ? "font-bold border-l-4 rounded-sm border-gray-950 text-gray-950 outline-8"
                : ""
            }`}
            onClick={() => setActive(item.id)}
          >
            {item.icon}
            <span className="flex flex-1">{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 hover:text-pink-500 hover:scale-105">
        <SignoutIcon />
        <SignOutButton />
      </div>
    </div>
  )
}
