import expensesBreakdowns from "../../../data/expenses";
import Card from "../../Elements/Card";
import { Icon } from "../../Elements/Icon";

const CardExpenseBreakdown = () => {
    const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
        <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
            <div className="flex">
                <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
                    {expensesBreakdown.icon}
                </div>
                <div className="ms-4">
                    <span className="text-gray-02">{expensesBreakdown.category}</span>
                    <br />
                    <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
                    <div className="flex">
                        <span className="text-gray-02">
                            {expensesBreakdown.percentage}%*
                        </span>{" "}
                        {expensesBreakdown.arrow}
                    </div>
                </div>
            </div>
            <div className="flex place-content-center flex-col me-8">
                <Icon.ArrowRight />
            </div>
        </div>
    ));

    return (
        <Card variant="md:col-span-2" title="Expenses Breakdown" desc={<div className="h-full md:grid md:grid-cols-3">{expenseCard}</div>} />

    )
}

export default CardExpenseBreakdown