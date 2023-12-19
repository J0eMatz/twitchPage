export default function UserProfile (props){
    return (
        <article className="flex">
                <img src={props.img} className="w-11 rounded-full" alt="MDN" />            
            <div className="ml-4 flex flex-col">
                <p className="font-bold">{props.name}</p>
                <p>{props.group}</p>
            </div>
            <div className="ml-4 flex">
                <p>.</p>
                <p>{props.viewers}</p>
            </div>
        </article>

    )
}