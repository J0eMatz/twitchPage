export default function ChanCard (props){
    return (
        <article className="border-2">
            <img src={props.channel_img} alt="MDN"/>
            <h3>{props.title}</h3>
            <p>{props.viewers} espectadores</p>
            <article className="channel-hashtags">
                <p>{props.hashtag_1}</p>
                <p>{props.hashtag_2}</p>
            </article>
            
        </article>
    )
}