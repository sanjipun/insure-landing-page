import React from "react";
import Header from "./Components/Header";
import Landing from "./Screens/Landing";
import "./styles.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Different from "./Screens/Different";
import Banner from "./Screens/Banner";
import Footer from "./Screens/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Different />
      <Banner />
      <Footer />
    </div>
  );
}
