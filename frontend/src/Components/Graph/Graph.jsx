import React from 'react'
// import MonthlyBudgetChart from './MonthlyBudgetChart'
import ExpensesPieChart from './ExpensesPieChart'
import './graph.css'
import CategoryCurrentAmountBarChart from './CategoryCurrentAmountBarChart'

const Graph = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'grid', placeContent: 'center' }}>
            {/* <ExpensesPieChart /> */}
            <CategoryCurrentAmountBarChart />
        </div>
    )
}

export default Graph