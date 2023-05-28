import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
import axios from "axios";
import AddButton from "@/components/AddButton";
import Add from "@/components/Add";
import { useState } from "react";

export default function Home({pizzaList, admin}) {

  const [close,setClose] = useState(true)
  return (
    <>
      <Head>
        <title>Pizza Restaurant in Da Nang</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton  setClose={setClose}/>}
      <PizzaList data={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
    </>
  );
}

export const getServerSideProps = async (ctx)=>{
  const myCookie = ctx.req?.cookies || ""
  let admin = false
  if(myCookie.token === process.env.TOKEN){
    admin = true
  }

  const res = await axios.get("http://localhost:3000/api/products")
  return {
    props: {
      pizzaList : res.data,
      admin
    }
  }
}