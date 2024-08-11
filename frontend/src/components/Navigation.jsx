import DashboardIcon from "./icons/DashboardIcon"
import TransactionIcon from "./icons/TransactionIcon"
import IncomeIcon from "./icons/IncomeIcon"
import ExpenseIcon from "./icons/ExpenseIcon"
import SignoutIcon from "./icons/SignoutIcon"
import avatar from "../assets/avatar.svg"

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
  return (
    <div className="w-[378px] h-full border-2 border-gray-700 rounded-xl bg-slate-100/80 backdrop-blur-sm flex flex-col justify-between p-5 items-center">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt="Profile Avatar"
          className="w-20 h-20 rounded-full border-2 border-white object-cover bg-white shadow-[0_1px_17px_rgba(0,0,0,0.6)]"
        />
        <h2 className="text-center text-2xl font-bold min-w-20">Hieu</h2>
        {/* <p className="text-center">Your money</p> */}
      </div>
      <ul className="flex flex-1 flex-col gap-3 mr-4 mt-8 w-full">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`flex justify-center gap-5 w-full ml-16 my-1 hover:cursor-pointer text-gray-600 hover:text-gray-950 ease-in-out transition-all duration-300 px-5 py-1 ${
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
      <button className="flex items-center gap-2">
        <SignoutIcon />
        <span>Sign Out</span>
      </button>
    </div>
  )
}
