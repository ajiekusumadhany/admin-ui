import Card from "../components/Elements/Card";
import MainLayout from "../components/layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card
          title="&nbsp;"
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" />
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;
