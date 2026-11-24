import React, { useState, useEffect } from 'react';
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import KopiCard from "../components/KopiCard";
import axios from 'axios';

const Dashboard = () => {
  const [listKopi, setListKopi] = useState([]);
  
  useEffect(() => {
    axios.get("http://cofflow.my.id/api/menus")
    .then((response) => {
      console.log(response.data.data);
      setListKopi(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, {});

  const [jenis, setJenis] = React.useState("All");

  // console.log(data.data.id)

  let tempKopi;

  if (jenis === "All") {
    tempKopi = listKopi.map((item, index) => <KopiCard key={index} nama={item.name} deskripsi={item.description} gambar={item.gambar} onClick={() => navigate(`/menu/${data.id}`)}/>);
  } else if (jenis === "Brew") {
    tempKopi = (
      <>
        <KopiCard nama={listKopi[6].name} deskripsi={listKopi[6].description}  />
        <KopiCard nama={listKopi[7].name} deskripsi={listKopi[7].description}  />
        <KopiCard nama={listKopi[2].name} deskripsi={listKopi[2].description}  />
      </>
    );
  } else if (jenis === "Susu") {
    tempKopi = (
      <>
        <KopiCard nama={listKopi[1].nama} deskripsi={listKopi[1].deskripsi} gambar={listKopi[1].gambar} />
        <KopiCard nama={listKopi[3].nama} deskripsi={listKopi[3].deskripsi} gambar={listKopi[3].gambar} />
        <KopiCard nama={listKopi[5].nama} deskripsi={listKopi[5].deskripsi} gambar={listKopi[5].gambar} />
      </>
    );
  }

  return (
  <div
  style={{
    backgroundColor: "#f5f0eb",
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  }}
>
  <TopBar title="Dashboard Kopi" />
  <div style={{
    flexGrow: 1, 
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    }}>
    
      {tempKopi}
    
  </div>
  
  <BottomBar active="dashboard" />
</div>

  );
};

export default Dashboard;
