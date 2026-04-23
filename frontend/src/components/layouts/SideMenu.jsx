import React, { useContext } from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../../Cards/CharAvatar';


const SideMenu = ({activeMenu}) => {

    const {user, clearUser} = useContext (UserContext);

    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout();
            return;
        }
        navigate (route);
    }

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    }

    console.log("User from context:", user);
    console.log(user?.name)

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white/70 backdrop-blur-xl border-r border-slate-200/50 p-6 sticky top-[60px] z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className='flex flex-col items-center justify-center mt-4 mb-8'>
            {user?.profileImageUrl ? (
                <img 
                src={user?.profileImageUrl || ""}
                alt='Profile Image'
                className='w-24 h-24 rounded-2xl bg-slate-200 object-cover shadow-sm ring-4 ring-white' />) : (
                    <CharAvatar 
                    name = {user?.name}
                    width = "w-24"
                    height = "h-24"
                    style ="text-2xl ring-4 ring-white shadow-sm"
                    />
                )}

                <h5 className='text-slate-800 font-semibold tracking-tight leading-6 mt-4 text-lg'> {user?.name}</h5>
        </div>

        {SIDE_MENU_DATA.map((item, index) => (
            <button
                key={`menu${index}`}
                className={`w-full flex items-center gap-4 text-[15px] font-medium transition-all duration-300 ${
                activeMenu === item.label ? "text-white bg-emerald-500 shadow-md shadow-emerald-500/20" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                } py-3.5 px-6 rounded-xl mb-3 cursor-pointer`}
                onClick={() => handleClick(item.path)}
            >
                <item.icon className="text-xl" />
                {item.label}
            </button>
            ))}
    </div>
  )
}

export default SideMenu