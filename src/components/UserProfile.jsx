export default function UserProfile (props){
    return (
        <article className="flex">
                <img src={props.user_img} className="w-11 rounded-full" alt="MDN" />            
            <div className="ml-4 flex flex-col">
                <p className="font-bold">{props.user_name}</p>
                <p>{props.user_group}</p>
            </div>
            <div className="ml-4 flex">
                <p>.</p>
                <p>{props.number_users}</p>
            </div>
        </article>

    )
}