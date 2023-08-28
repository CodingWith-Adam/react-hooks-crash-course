import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import UserNameContext from "./UserNameContext";

function HomePage() {
  return (
    <UserNameContext.Provider value="Adam">
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </UserNameContext.Provider>
  );
}

export default HomePage;
