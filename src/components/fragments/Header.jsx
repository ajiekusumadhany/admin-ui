const Header = () => {
  return (
    <header className="border-b-2 p-6 flex items-center justify-between">
      <div className="flex">
        <div className="font-bold text-lg">Username</div>
        <div className="ms-6 text-gray-03">Oct 17, 2024</div>
      </div>
      <div className="flex">
        <div>Icon</div>
        <div className="ms-10 hidden sm:block">Search Box</div>
      </div>
    </header>
  );
};
export default Header;
