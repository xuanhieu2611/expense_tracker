import { createContext, useContext, useState } from "react"
import axios from "axios"

const GlobalContext = createContext()

const BASE_URL = "http://localhost:5000/api/transactions/"

export const GlobalContextProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income)
      const _id = response.data?._id
      const add = { ...income, _id }
      setIncomes([add, ...incomes])
    } catch (error) {
      console.log(error?.response.data.message)
      setError(error?.response.data.message)
    }
  }

  const getIncomes = async () => {
    const response = await axios
      .get(`${BASE_URL}get-incomes`)
      .catch((error) => {
        console.log(error?.response.data.message)
        setError(error?.response.data.message)
      })
    setIncomes(response.data)
    console.log(response.data)
  }

  const deleteIncome = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
      const _id = response.data?._id
      setIncomes(incomes.filter((income) => income._id != _id))
    } catch (error) {
      console.log(error?.response.data.message)
      setError(error?.response.data.message)
    }
  }

  return (
    <GlobalContext.Provider
      value={{ incomes, addIncome, getIncomes, deleteIncome }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
