import React from 'react'
import CustomPieChart from '../../Charts/CustomPieChart'

const COLORS = ["#b9ea0e", "#2196F3", "#F44336"]



const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {

    const balanceData = [
        {name: "Total Balance", amount: totalBalance},
        {name: "Total Income", amount: totalIncome},
        {name: "Total Expense", amount: totalExpense},
    ]

  return (
    <div className='card bg-gradient-to-r from-[#f2e8cf] via-[#a7c957] to-[#a7c957] animated-background'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Financial Overview</h5>
        </div>

        <CustomPieChart
        data = {balanceData}
        label = "Current Balance"
        totalAmount={`₱ ${totalBalance}`}
        colors = {COLORS}
        showTextAnchor
        />

    </div>
  )
}

export default FinanceOverview