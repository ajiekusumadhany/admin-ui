import Card from "../components/Elements/Card";
import MainLayout from "../components/layouts/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goal">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Goals" />
        <div className="md:col-span-2 text-primary">
          <Card
            title="&nbsp;"
            desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Mi adipiscing iaculis praesent himenaeos suscipit ad; nostra vehicula. Fusce nunc lectus faucibus porttitor orci gravida aliquam odio. Cras eu nisi blandit ac inceptos semper felis cursus proin."
          />
        </div>
      </div>

      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Expenses Goals by Category" />
        <Card title="&nbsp;" />
        <Card
          title="&nbsp;"
          desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Mi adipiscing iaculis praesent himenaeos suscipit ad; nostra vehicula. Fusce nunc lectus faucibus porttitor orci gravida aliquam odio. Cras eu nisi blandit ac inceptos semper felis cursus proin. "
        />
        <Card />
        <Card desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Mi adipiscing iaculis praesent himenaeos suscipit ad; nostra vehicula. Fusce nunc lectus faucibus porttitor orci gravida aliquam odio. Cras eu nisi blandit ac inceptos semper felis cursus proin." />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default GoalsPage;
