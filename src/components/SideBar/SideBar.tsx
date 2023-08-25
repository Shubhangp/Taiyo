import { useState } from "react";
import { Link } from "react-router-dom";


const SideBar = () => {

    const [clicked, setClicked] = useState(false); 

    return(
        <div>
            <aside className={clicked? "fixed top-0 left-0 z-50 w-64 h-screen transition-transform translate-x-0"
                              :"fixed top-0 left-0 md:block hidden z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"}
            >
                <div className="h-full overflow-y-auto bg-gray-50 pb-4">
                    <ul className="font-sans font-semibold text-base text-gray-800">
                        <Link to="/">
                            <li className="bg-gray-100 border-b border-gray-200 py-3 px-2" onClick={() => setClicked(false)}>Contact</li>
                        </Link>
                        <Link to="/chart&map">
                            <li className="bg-gray-100 py-3 px-2" onClick={() => setClicked(false)}>Charts and Maps</li>
                        </Link>
                    </ul>
                </div>
            </aside>
            {!clicked?
                (<div className="absolute z-10 left-0 top-6 md:hidden cursor-pointer" onClick={() => setClicked(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
                    </svg>
                </div>)
                :(<div className="absolute z-10 left-64 top-6 md:hidden  bg-gray-200 p-1 rounded-full cursor-pointer" onClick={() => setClicked(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/>
                    </svg>
                </div>)
            }
        </div>
    )
}

export default SideBar;