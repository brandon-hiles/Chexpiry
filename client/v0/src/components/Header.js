import React from "react";
import PublicHeader from "./public/Header.js";
import PrivateHeader from "./auth/Header.js";

const Header = () => {
  if (sessionStorage.getItem("token")) {
    // logged in -> Display this header
    return <PrivateHeader />
 } else {
   // not logged in -> Display public
   return <PublicHeader />
 }
};

export default Header