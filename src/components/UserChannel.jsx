import UserProfile from "./UserProfile"

const usersProfile = [
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMy3TkBM4cXqXZXqPh6Lz4GDlMh8YGFsXxXw&usqp=CAU",
        name:"Aldo_geo",
        group:"Minecraft",
        viewers:"2.3"
    }
]

const recommmendedChannel=[
    {
        img:"https://marketplace.canva.com/EAEjwVtGaFM/2/0/800w/canva-azul-y-negro-limpio-minimalista-imagen-de-perfil-de-twitch-YdQKB7enCPI.jpg",
        name:"Emikukis",
        group:"Conversando",
        viewers:"11.2"
    }
]


export default function UserChannels(){
    return (
        <aside className="p-1 text-white bg-gray-900">
            <article>
                <h2 className="font-bold">FOR YOU</h2>
                <h3 className="mt-4 font-bold">Followed Channels</h3>
                {usersProfile.map((usersProfile) => {
                        return (
                                <UserProfile
                                    key={usersProfile.name}
                                    img={usersProfile.img}
                                    name={usersProfile.name}
                                    group={usersProfile.group}
                                    viewers={usersProfile.viewers}
                                />
                                );
                    })}
            </article>

            <article className="mt-10">
                <h2 className="font-bold">Recommended Channels</h2>
                {recommmendedChannel.map((recommmendedChannel) => {
                        return (
                                <UserProfile
                                    key={recommmendedChannel.name}
                                    img={recommmendedChannel.img}
                                    name={recommmendedChannel.name}
                                    group={recommmendedChannel.group}
                                    viewers={recommmendedChannel.viewers}
                                />
                                );
                    })}
            </article>
        </aside>
    )
}