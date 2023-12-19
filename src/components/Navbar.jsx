export default function Navbar () {

    const URL_Logo="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png"

    return (
        <nav className="bg-[#18181a] h-12 p-0 flex flex-row text-white gap-10 sticky top-0">
            <img src={URL_Logo} alt="MDN" />
            <div className="flex items-center  hover:text-fuchsia-600 text-lg font-bold">Explorar</div>
            <div>...</div>
             <label className="relative block gap-12">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input className="placeholder:italic block bg-[#18181a] w-full border border-slate-50 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-violet-600 focus:ring sm:text-sm" placeholder="Buscar" type="text" name="search"/>
            </label>
        </nav>
    )

}