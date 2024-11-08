import Card from "../components/Elements/Card";
import MainLayout from "../components/layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />

        <Card
          title="Goals"
          desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
        />
        <Card title="Upcoming Bill" />
        <div className="md:col-span-1">
          <Card
            title="Recent Transaction"
            desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
