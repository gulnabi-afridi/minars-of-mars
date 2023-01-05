import React from "react";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import {useRouter} from "next/router";
import Head from 'next/head'

function Layout({children}) {
  const Router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Miners Of Mars</title>
      </Head>
      <Header/>
      <main className={'font-walsheim relative z-[5] mb-[74px]'}>{children}</main>
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;
