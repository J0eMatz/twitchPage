import ChanCard from "./ChanCard"

const Category = [
    {
      isNew:true,
      img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg",
      title:"Fornite",
      viewers: "354",
      hashtag_1: "Juego de Rol",
      hashtag_2:"Shooter"
    },
    {
      isNew:false,
      img:"https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg",
      title:"Call of Duty: Warzone",
      viewers: "854",
      hashtag_1: "Shooter"
    },
    {
      isNew:false,
      img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg",
      title:"Rust",
      viewers: "765 ",
      hashtag_1: "Primera Persona"
    },
    {
      isNew:false,
      img:"https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg",
      title:"EA Sports FC24",
      viewers: "234 ",
      hashtag_1: "Deportes",
      hashtag_2:"Simulación"
    },
    {
      isNew:false,
      img:"https://static-cdn.jtvnw.net/ttv-boxart/512818_IGDB-285x380.jpg",
      title:"Call of duty Mobile",
      viewers: "456 ",
      hashtag_1: "Primera Persona",
      hashtag_2: "Movil"
    },
    {
      isNew:false,
      img:"https://static-cdn.jtvnw.net/ttv-boxart/1068239917_IGDB-285x380.jpg",
      title:"Mario Party Superstars",
      viewers: "975 ",
      hashtag_1: "Juego Cartas",
      hashtag_2: "Juego de Rol"
    }
  ]



export default function ChanList (){
    return (
        <main className="p-20 flex flex-wrap gap-20 text-white">
            {Category.map((Category) => {
                        return (
                                <ChanCard
                                    key={Category.name}
                                    img={Category.img}
                                    name={Category.name}
                                    group={Category.group}
                                    viewers={Category.viewers}
                                    hashtag_1={Category.hashtag_1}
                                    hashtag_2={Category.hashtag_2}
                                />
                                );
                    })}
        </main>
    )
}