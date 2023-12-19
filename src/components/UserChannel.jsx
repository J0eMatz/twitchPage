import UserProfile from "./UserProfile"

const usersProfile = [
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMy3TkBM4cXqXZXqPh6Lz4GDlMh8YGFsXxXw&usqp=CAU",
        name:"Aldo_geo",
        isLive:true,
        group:"Minecraft",
        viewers:"2.3"
    },
    {
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/c1ebdeac-7d56-49e6-8d61-7580d41790f8-profile_image-70x70.png",
        name:"Nat_ki",
        isLive:true,
        group:"CallofDuty",
        viewers:"3.3"
    }
]

const recommmendedChannel=[
    {
        img:"https://marketplace.canva.com/EAEjwVtGaFM/2/0/800w/canva-azul-y-negro-limpio-minimalista-imagen-de-perfil-de-twitch-YdQKB7enCPI.jpg",
        name:"Emikukis",
        isLive:true,
        group:"Conversando",
        viewers:"11.2"
    },
    {
        img:"https://static-cdn.jtvnw.net/jtv_user_pictures/3ecade58-a91d-4399-9b2e-d6da8957d5f9-profile_image-70x70.png",
        name:"Mym_Alkapone",
        isLive:true,
        group:"Transmitiendo",
        viewers:"22.2"
    }
]


export default function UserChannels(){
    return (
        <aside className="p-1 text-white bg-[#202022]">
            <article>
                <h2 className="font-bold">FOR YOU</h2>
                <h3 className="mt-4 font-bold">Followed Channels</h3>
                {usersProfile.map((usersProfile) => {
                        return (
                                <UserProfile
                                    key={usersProfile.name}
                                    img={usersProfile.img}
                                    name={usersProfile.name}
                                    isLive={usersProfile.isLive}
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
                                    isLive={recommmendedChannel.isLive}
                                    recommmendedChannele={recommmendedChannel.isLive}
                                    group={recommmendedChannel.group}
                                    viewers={recommmendedChannel.viewers}
                                />
                                );
                    })}
            </article>
        </aside>
    )
}