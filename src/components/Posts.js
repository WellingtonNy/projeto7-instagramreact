import Post from "./Post";
export default function Posts(){


  const dadosPosts=[
    {imgUsuario:"assets/img/meowed.svg",
    nomeUsuario:"meowed",
    imgPost:"assets/img/gato-telefone.svg",
    nomePost:"gato-telefone",
    imgCurtir:"assets/img/respondeai.svg",
    nomeCurtir:"respondeai",
    curtidas:101523},

    {imgUsuario:"assets/img/barked.svg",
    nomeUsuario:"barked",
    imgPost:"assets/img/dog.svg",
    nomePost:"dog",
    imgCurtir:"assets/img/adorable_animals.svg",
    nomeCurtir:"adorable_animals",
    curtidas:99159
    },

    {imgUsuario:"assets/img/9gag.svg",
    nomeUsuario:"9gag",
    imgPost:"assets/img/post3.jpg",
    nomePost:"Rainbow Dash",
    imgCurtir:"assets/img/respondeai.svg",
    nomeCurtir:"respondeai",
    curtidas:133742}
  ];


    return(
        <div class="posts">
            {dadosPosts.map((p)=> <Post imgUser={p.imgUsuario}   nomeUser={p.nomeUsuario}
            imgPost={p.imgPost}   nomePost={p.nomePost}   imgLike={p.imgCurtir}
            nomeLike={p.nomeCurtir}   numLike={p.curtidas} />)}
          </div>
    );
}