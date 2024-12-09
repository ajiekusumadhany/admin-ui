import Card from "../components/Elements/Card";
import MainLayout from "../components/layouts/MainLayout";
import { Icon } from "../components/Elements/Icon";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expenses";
import transactions from "../data/transactions";
import React, { useState } from "react";
import CardBill from "../components/fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/fragments/Dashboard/CardTransaction";
import CardBalance from "../components/fragments/Dashboard/CardBalance";
import CardStatistic from "../components/fragments/Dashboard/CardStatistic";
import CardGoal from "../components/fragments/Dashboard/CardGoals";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"];

  const [trxs, setTrx] = useState(transactions);
  const [activeTab, setActivgeTab] = useState("All");

  function handleClick(e) {
    const transactionsFiltered =
      e.target.value != "All"
        ? transactions.filter(({ type }) => type == e.target.value)
        : transactions;

    setActivgeTab(e.target.value);
    setTrx(transactionsFiltered);
  }

  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div className="">
          <img className="h-6" src={`/images/${bill.logo}`} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));
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
  const transactionCard = trxs.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <CardGoal />
        <CardBill />
        <CardTransaction />
        <div className="md:col-span-2 flex flex-col flex-1">
          <CardStatistic />
          <CardExpenseBreakdown />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
