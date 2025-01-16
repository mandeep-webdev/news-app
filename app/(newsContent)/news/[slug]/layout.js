import React from "react";

const Layout = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default Layout;
