import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import TeacherItem from "../../components/TeacherItem";
import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="continer">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">Dia da Semana</label>
            <input type="text" id="week" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;
