import DelayedComponentPage from "./popup";

const Header = () => {
  return (
    <header className="bg-blue-100 h-24">
      <DelayedComponentPage />
      <img className="h-full m-auto" src="/images/nirog.png" alt="" />
    </header>
  );
};

export default Header;
