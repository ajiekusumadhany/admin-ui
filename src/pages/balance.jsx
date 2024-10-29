import Card from "../components/Elements/Card";
import MainLayout from "../components/layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card />
        </div>
        <div className="sm:w-1/3">
          <Card />
        </div>
        <div className="sm:w-1/3">
          <Card />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <Card />
        </div>
        <div className="sm:w-2/3">
          <div className="mb-4">
            <Card />
          </div>
          <div className="mb-4">
            <Card />
          </div>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;
