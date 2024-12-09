import { expensesStatistics } from "../../../data/expenses";
import BarsDataset from "../../Elements/BarChart";
import Card from "../../Elements/Card";

const CardStatistic = () => {
  return (
    <Card
      variant="md:col-span-2 min-h-max"
      title="Statistics"
      desc={
        <div className="h-72">
          <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
            <option>Weekly Comparison</option>
          </select>
          <BarsDataset desc={expensesStatistics} />
        </div>
      }
    />
  );
};

export default CardStatistic;
