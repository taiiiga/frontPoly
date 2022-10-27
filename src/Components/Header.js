import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Header() {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [setUser]);

    return(
        <header className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-4">
                        <Link to="/" className=""><b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">Поликлиника Вестерна</b></Link>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        {
                            user && user.roleId === 1 ?
                            <>
                                <Link to="doctors" className="">Список врачей</Link>
                                <span
                                    aria-hidden="true"
                                    className="block w-px h-6 bg-gray-200 rounded-full"
                                    >
                                </span>
                            </> : ""
                        }
                        {user ?
                            <>
                                <Link to="records" className="">Записи к врачу</Link>
                                <span
                                    aria-hidden="true"
                                    className="block w-px h-6 bg-gray-200 rounded-full"
                                ></span>
                               <Link to={`accounts/` + user.id} className="block shrink-0">
                                    <img
                                        alt="Man"
                                        src={user.photo === null && user.photo === "" && user.photo === undefined
                                            ? ""
                                            : "https://sun9-53.userapi.com/impg/3Ycus00P48p-7CdDXjDBa8VV7Y9UA7OEN3hFUw/ycUFs0umHN8.jpg?size=577x604&quality=96&sign=9d21cff9c84d1d8a17c56c89e17e443b&type=album"}
                                        className="object-cover w-10 h-10 rounded-full"
                                    />
                                </Link>
                            </>
                            :   <Link to="login" className="block shrink-0">
                                    Авторизация
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}