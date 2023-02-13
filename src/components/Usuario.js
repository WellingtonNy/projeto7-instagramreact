import React from "react";
export default function Usuario(props) {

  const [img, setImg] = React.useState(props.imgUsuario);
  const [nome, setNome] = React.useState(props.nomeUsuario);

  function alterarNome() {
    const nome = prompt('Digite seu nome =^.^=');
    nome ? setNome(nome) : alert("Nome Inválido!");
  }

  function alterarFoto() {
    const foto = prompt('Insira o Url da foto');
    foto ? setImg(foto) : alert("Url Inválido");
  }

  return (
    <div class="usuario">
      <img onClick={alterarFoto} data-test="profile-image" src={img} alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong data-test="name">{nome}</strong>
          <ion-icon data-test="edit-name" onClick={alterarNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
};