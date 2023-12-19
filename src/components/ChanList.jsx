import ChanCard from "./ChanCard"

export default function ChanList (){
    return (
        <main className="p-20 flex flex-wrap gap-20 text-white">
            <ChanCard channel_img="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg" title="Conversando" viewers="431.3 k" hashtag_1="IRL (vida real)" />
            <ChanCard channel_img="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg" title="Fortnite" viewers="158.9 k" hashtag_1="Shooter" hashtag_2="Juego de rol" />
            <ChanCard channel_img="https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg" title="Eventos especiales" viewers="38.5 k" hashtag_1="IRL (vida real)"/>
            <ChanCard channel_img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg" title="Minecraft" viewers="31.1 k" hashtag_1="Simulación"/>
        </main>
    )
}