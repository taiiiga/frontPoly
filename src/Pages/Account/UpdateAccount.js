import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {api} from "../../api/config";

export default function UpdateAccount() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        const url = api + "/User/get/" + id;
        axios.get(url).then(resp => {
            setUser(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    const updateAccount = () => {
        const url = api + "/User/update";
        axios.post(url, {
            "id": user.id,
            "email": user.email,
            "password": user.password,
            "roleId": user.roleId,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "phone": user.phone,
            "city": user.city,
            "photo": user.photo
        }).then(resp => {
            navigate('/accounts/' + id);
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    };

    return(
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
                <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Изменение профиля
                </h1>

                <form action="src/Pages/Account/UpdateAccount" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <div>
                        <label for="email" class="text-sm font-medium">Электронная почта</label>
                        <div class="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="mail@mail.com"
                                value={user.email}
                                onChange={e => setUser({...user, email: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label for="firstName" class="text-sm font-medium">Имя</label>
                        <div class="relative mt-1">
                            <input
                                type="text"
                                id="firstName"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="Иван"
                                value={user.firstName}
                                onChange={e => setUser({...user, firstName: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastName" className="text-sm font-medium">Фамилия</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="lastName"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="Иванов"
                                value={user.lastName}
                                onChange={e => setUser({...user, lastName: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="photo" className="text-sm font-medium">URL фотографии</label>
                        <div className="relative mt-1">
                            <input
                                type="url"
                                id="photo"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="http://5t54t43t3434r43r34r34"
                                value={user.photo}
                                onChange={e => setUser({...user, photo: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                        <div className="relative mt-1">
                            <input
                                type="tel"
                                id="phone"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="+79555555555"
                                value={user.phone}
                                onChange={e => setUser({...user, phone: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="city" className="text-sm font-medium">Город</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="city"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="Казань"
                                value={user.city}
                                onChange={e => setUser({...user, city: e.target.value})}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        onClick={updateAccount}
                    >
                        Изменить
                    </button>
                </form>
            </div>
        </div>
    );
}