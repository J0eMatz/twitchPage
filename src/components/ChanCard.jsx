export default function ChanCard (props){
    return (
        <article className="flex-1">
            <figure className="w-full max-w-[195px] h-full max-h-[250px] min-w-[180px] relative">
            {props.isNew === true && (
                <p className="absolute bg-pink-500 top-0 right-0 m-2  py-1 px-2 text-xs rounded-lg text-black font-bold">
                     NEW
                </p>)}
            <img src={props.img} className="object-cover bg-center h-full" alt="MDN"/>
            </figure>         
            <h3>{props.title || "desconocido"}</h3>
            <p>{props.viewers || 0}K espectadores</p>
            <article className="flex flex-row items-center gap-3">
                <p className="bg-[#222323] rounded-full text-xs hover:bg-[#1a1c1c] cursor-pointer py-1">{props.hashtag_1}</p>
                <p className="bg-[#222323] rounded-full text-xs hover:bg-[#1a1c1c] cursor-pointer py-1">{props.hashtag_2}</p>
            </article>
            
        </article>
    )
}