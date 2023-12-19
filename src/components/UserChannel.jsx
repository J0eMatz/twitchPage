import UserProfile from "./UserProfile"

export default function UserChannels(){
    return (
        <aside className="p-1 text-white bg-gray-900">
            <article>
                <h2 className="font-bold">FOR YOU</h2>
                <h3 className="mt-4 font-bold">Followed Channels</h3>
                <UserProfile user_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMy3TkBM4cXqXZXqPh6Lz4GDlMh8YGFsXxXw&usqp=CAU" user_name="aldo_geo" user_group="Minecraft" number_users="2.3K"/>
            </article>

            <article className="mt-10">
                <h2 className="font-bold">Recommended Channels</h2>
                <UserProfile user_img="https://marketplace.canva.com/EAEjwVtGaFM/2/0/800w/canva-azul-y-negro-limpio-minimalista-imagen-de-perfil-de-twitch-YdQKB7enCPI.jpg" user_name="Emikukis" user_group="Conversando" number_users="11.2K"/>
            </article>
        </aside>
    )
}