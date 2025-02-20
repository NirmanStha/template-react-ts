import Navbar from "./components/core/navbar/Navbar";
import { Button } from "./components/ui/button";
import logo from "./assets/react.svg";
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const image = {
    imageSrc: logo,
    size: "12",
    imgClassName: "rounded-1/2 ",
  };
  const dropDownMenu = {
    dropDownIcon: <GiHamburgerMenu />,
    dropDownIconSize: "40",
    dropItemClassName: "text-red-500",
  };
  return (
    <>
      <Navbar
        navLinks={navLinks}
        img={image}
        bgColorName="bg-blue-400"
        isLoggedIn={false}
        linkClassName="text-white"
        dropDownMenu={dropDownMenu}
      />
      <Button variant="default"> Hello World </Button>
    </>
  );
}

export default App;
