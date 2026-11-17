import React, { useState, useEffect } from 'react';
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import KopiCard from "../components/KopiCard";
import axios from 'axios';

const Dashboard = () => {
  const [listKopi, setListKopi] = useState([]);
  const [jenis, setJenis] = useState("All");

  const fetchData = async () => {
    try {
    
      const response = await axios.get("http://127.0.0.0:3000");
      
      setListKopi(response.data.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let tempKopi;

  if (jenis === "All") {
    tempKopi = listKopi.map((item, index) => (
      <KopiCard key={item.id || index} nama={item.nama} deskripsi={item.deskripsi} gambar={item.gambar} />
    ));
  } else if (jenis === "Brew") {
    tempKopi = (
      <>
        {listKopi[6] && <KopiCard nama={listKopi[6].nama} deskripsi={listKopi[6].deskripsi} gambar={listKopi[6].gambar} />}
        {listKopi[7] && <KopiCard nama={listKopi[7].nama} deskripsi={listKopi[7].deskripsi} gambar={listKopi[7].gambar} />}
        {listKopi[2] && <KopiCard nama={listKopi[2].nama} deskripsi={listKopi[2].deskripsi} gambar={listKopi[2].gambar} />}
      </>
    );
  } else if (jenis === "Susu") {
    tempKopi = (
      <>
        {listKopi[1] && <KopiCard nama={listKopi[1].nama} deskripsi={listKopi[1].deskripsi} gambar={listKopi[1].gambar} />}
        {listKopi[3] && <KopiCard nama={listKopi[3].nama} deskripsi={listKopi[3].deskripsi} gambar={listKopi[3].gambar} />}
        {listKopi[5] && <KopiCard nama={listKopi[5].nama} deskripsi={listKopi[5].deskripsi} gambar={listKopi[5].gambar} />}
      </>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f0eb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <TopBar title="Dashboard Kopi" />

  <div
  style={{
    backgroundColor: "#f5f0eb",
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column"
  }}
>
  <TopBar title="Dashboard Kopi" />
  <div style={{ flexGrow: 1, overflowY: "auto" }}>
    <Container>
      {tempKopi}
    </Container>
  </div>
  
  <BottomBar active="dashboard" />
</div>
  );
};

export default Dashboard;
