import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import "./styles.css";



function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/28624923?s=460&u=d9f68520fc0f566afa4415bf154efd8315cfdab6&v=4"
          alt="Igor Machado"
        />
        <div>
          <strong>Igor Machado</strong>
          <span>DevOps</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> <br />
        Vestibulum posuere vehicula augue. Fusce pretium condimentum vehicula.
        Sed semper elit quam, ut elementum felis consectetur malesuada.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp icone" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
