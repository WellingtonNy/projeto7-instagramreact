import React from "react"
export default function Usuario(props) {

  const [img, setImg] = React.useState(props.imgUsuario)
  const [nome, setNome] = React.useState(props.nomeUsuario)

  function alterarNome() {
    let nome = prompt('Digite seu nome =^.^=');
    nome ? setNome(nome) : alert("Nome Inválido!");
  }

  function alterarFoto() {
    let foto = prompt('Insira o Url da foto');
    foto ? setImg(foto) : alert("Url Inválido");
  }

  return (
    <div class="usuario">
      <img onClick={alterarFoto} src={img} alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong>{nome}</strong>
          <ion-icon onClick={alterarNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}