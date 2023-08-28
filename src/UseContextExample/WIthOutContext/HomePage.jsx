import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function HomePage() {
  const [userName, setUserName] = useState("Adam");
  return (
    <div>
      <Header userName={userName} />
      <Content userName={userName} />
      <Footer userName={userName} />
    </div>
  );
}

export default HomePage;
