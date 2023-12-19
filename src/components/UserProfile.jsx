export default function UserProfile (props){
    return (
        <article className="grid grid-cols-[2rem_auto_3rem] items-center gap-1 px-2 hover:bg-white/5 cursor-pointer py-1 ">
            
            <img src={props.img} className="w-9 rounded-full" alt="MDN" />     
                       
            <div className="ml-4 flex flex-col">
                <p className="font-bold capitalize text-sm">{props.name}</p>
                <p className="text-xs text-white/60 capitalize">{props.group}</p>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
            {props.isLive === true ? (
                <>
                    <figure className="bg-red-600 w-2 h-2 rounded-full"></figure>
                    <span className="text-xs">{props.viewers || 0} k</span>
                </>) : 
                (<p className="text-white/30">offline</p>)}
            </div>

        </article>

    )
}