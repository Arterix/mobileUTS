import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import KopiCard from '../components/KopiCard';

const Detail = (props) => {
  const navigate = useNavigate();
  const { kodeMenu } = useParams();
  const level = props.level;

  const [dataWilayah, setDataWilayah] = useState("")

  let url = "";
  let backUrl = "";
  if (level === "kota") {
    url = `https://wilayah.id/api/regencies/${kodeProv}.json`;
    backUrl = "/province";
  } else if (level === "kecamatan"){
    url = `https://wilayah.id/api/districts/${kodeKota}.json`;
    backUrl = `/kota/${kodeProv}`;
  } else {
    url = `https://wilayah.id/api/villages/${kodeCamat}.json`
    backUrl = `/kecamatan/${kodeProv}/${kodeKota}`
  }
  url = `http://127.0.0.1:3000/${kodeMenu}`

  const [listKopi, setListKopi] = useState([]);
  
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/${")
    .then((response) => {
      console.log(response.data.data);
      setListKopi(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, {});


  const buttonBack = () => {
    navigate(backUrl);
  };

  return (
    <div style={{overflow:"auto", height:"100vh", textAlign:"center"}}>
      <button onClick={(e) => buttonBack(e)}>← Kembali</button>
      <KopiCard name={data.name} kode={data.code} ></KopiCard>
      {dataWilayah ? dataWilayah.map((data, key) => {
        return <div key={key}>
        </div>
      }):""}
    </div>       
  );
};

export default Detail;
