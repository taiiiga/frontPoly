import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {api} from "../../api/config";
import axios from "axios";

export default function Account() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const authorizedUser = JSON.parse(localStorage.getItem('user'));
        const url = api + "/User/get/" + authorizedUser.id;
        axios.get(url).then(resp => {
            setUser(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }, [setUser]);

    return(
        <article className="rounded-xl border-2 border-gray-100 bg-white px-10">
            <div className="flex justify-between p-6">
                <div className="flex items-start">
                    <a className="block shrink-0">
                        <img
                            alt="Аватар врача"
                            src={user.photo === null && user.photo === "" && user.photo === undefined
                                ? ""
                                : "https://sun9-53.userapi.com/impg/3Ycus00P48p-7CdDXjDBa8VV7Y9UA7OEN3hFUw/ycUFs0umHN8.jpg?size=577x604&quality=96&sign=9d21cff9c84d1d8a17c56c89e17e443b&type=album"}
                            className="h-14 w-14 rounded-lg object-cover"
                        />
                    </a>

                    <div className="ml-4">
                        <strong className="font-medium sm:text-lg">
                            <a href="src/Pages/Account/Account#"
                               className="hover:underline">Id: {user.id} {user.firstName} {user.lastName}</a>
                        </strong>
                        <p className="text-sm text-gray-700 line-clamp-2">
                            {user.city ?? "Город не указан"}
                        </p>
                    </div>
                </div>

                <div>
                    <button
                        className="inline-block rounded border border-indigo-600 align-middle p-5 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                        onClick={() => {
                            navigate('edit');
                        }}
                    >
                        Редактировать аккаунт
                    </button>

                    <button
                        className="ml-4 inline-block rounded border border-indigo-600 align-middle p-5 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                        onClick={() => {
                            localStorage.removeItem('user');
                            navigate('/');
                            window.location.reload();
                        }}
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            </div>
        </article>
    );
}