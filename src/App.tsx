import Navbar from "./components/core/navbar/Navbar";
import { Button } from "./components/ui/button";
import logo from "./assets/react.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Container from "./components/core/container/Container";

const queryClient = new QueryClient();

function App() {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "my self zod", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const image = {
    imageSrc: logo,
    size: "34",
    imgClassName: "rounded-1/2 ",
  };
  const dropDownMenu = {
    dropDownIcon: <GiHamburgerMenu />,
    dropDownIconSize: "20",
    dropItemClassName: "text-red-500",
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar
          navLinks={navLinks}
          img={image}
          bgColorName="bg-blue-400"
          isLoggedIn={true}
          linkClassName="text-white"
          dropDownMenu={dropDownMenu}
        />
        <Container>
          <h1> Hello World </h1>
        </Container>
        <Button variant="default"> Hello World </Button>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
