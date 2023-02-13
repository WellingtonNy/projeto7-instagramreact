import { useState } from "react"
export default function Post(props){
  const [salvo, setSalvo] = useState(false)
  const [like, setLike] = useState(false)

    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imgUser} alt={props.nomeUser}/>
                  {props.nomeUser}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>
        
              <div class="conteudo">
                <img onClick={()=>setLike(true)} src={props.imgPost} alt={props.nomePost}/>
              </div>
        
              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon onClick={()=>setLike(!like)} class={like? "colorRed" : ""} name={like? "heart-sharp":"heart-outline" }></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon onClick={()=>setSalvo(!salvo)} name={salvo ? "bookmark-sharp" : "bookmark-outline"}></ion-icon>
                  </div>
                </div>
        
                <div class="curtidas">
                  <img src={props.imgLike} alt={props.nomeLike}/>
                  <div class="texto">
                    Curtido por <strong>{props.nomeLike}</strong> e <strong>outras {like ? ((props.numLike)+1).toLocaleString('pt-BR') : props.numLike.toLocaleString('pt-BR')} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}