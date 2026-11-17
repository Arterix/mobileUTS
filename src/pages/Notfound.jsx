import React from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import KopiCard from "../components/KopiCard";
import BoxInfo from "../components/BoxInfo";
import { Button, Container } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";


const Notfound = () => {

  return (
    <Container>
      <BoxInfo title="404 - Not Found"></BoxInfo>
      
    </Container>
  );
};

export default Notfound;
