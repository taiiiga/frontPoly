import {api} from "../../api/config";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function NewRecord() {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [user, setUser] = useState({});

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));

        const apiUrl = api + '/Doctor/list';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            console.log(resp.data);
            setDoctors(allPersons);
            setOption1(allPersons[0]);
        }).catch((error) => {
            alert(error);
        });
    }, [setDoctors]);

    const times = [
        "08:00",
        "08:15",
        "08:30",
        "08:45",
        "09:00",
        "09:15",
        "09:30",
        "09:45",
        "10:00",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "11:15",
        "11:30",
        "11:45",
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:15",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
        "17:00",
        "17:15",
        "17:30",
        "17:45",
        "18:00",
        "18:15",
        "18:30",
        "18:45",
    ];

    const options1 = [];
    for (let i = 0; i < doctors.length; i++) {
        options1.push(<option value={doctors[i].Id}>{doctors[i].DoctorName + ", " + doctors[i].Specialization}</option>);
    }

    const options2 = [];
    for (let i = 0; i < times.length; i++) {
        options2.push(<option value={times[i]}>{times[i]}</option>);
    }

    const [option1, setOption1] = useState({});
    const [option2, setOption2] = useState(times[0]);

    const handleChange1 = (e) => {
        setOption1(...option1, e.target.value);
    };

    const handleChange2 = (e) => {
        setOption2(e.target.value);
    };

    const recordToDoctor = (event) => {
        const apiUrl = 'http://localhost:5071/api/Record/create';
        const today = new Date();

        if (date <= today) {
            alert('Нельзя выбрать прошедшую дату');
            return;
        }

        axios.post(apiUrl, {
            "Id": 0,
            "CreatedAt": today,
            "UpdatedAt": today,
            "DeletedAt": null,
            "CreatedBy": null,
            "Email": email,
            "Password": "",
            "Date": date,
            "DoctorId": option1.Id,
            "ClientId": user.id,
            "Phone": phone,
            "Time": option2,
            "Name": name
        }).then((resp) => {
            alert("Запись на прием успешно оформлена!");
            navigate('/');
        }).catch(function (error) {
            if (error.response) {
                alert(error.response.data);
                alert(error.response.status);
                alert(error.response.headers);
            } else if (error.request) {
                alert(error.request);
            } else {
                alert('Ошибка!', error.message);
            }
        });
    };

    return (
        <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Запись к врачу!</h1>

                    <p class="mt-4 text-gray-500">
                        Выберите удобную для вас дату и время, специалиста и запишитесь на прием.
                    </p>
                </div>

                <div action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
                    {user ? "" : <>
                    <div>
                        <label htmlFor="name" className="sr-only">Имя</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Введите ваше имя (Пример: Иван Пугачев)"
                                onChange={(e) => setName(e.target.value)}
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                             </span>
                        </div>
                    </div>

                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative">
                            <input
                                type="email"
                                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Введите ваш email (Пример: ivan@mail.com)"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <span class="absolute inset-y-0 inline-flex items-center right-4">
                             </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="sr-only">Телефон</label>
                        <div className="relative">
                            <input
                                type="tel"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Введите ваш номер телефона (Пример: +7 999 999 99 99)"
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">

                            </span>
                        </div>
                    </div>
                    </>}
                    <div>
                        <label htmlFor="password" className="sr-only">Дата приема</label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Дата приема"
                                onChange={(e) => setDate(e.target.value)}
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">

                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select value={option1.Name} onChange={handleChange1} class="form-select appearance-none
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                {options1}
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select value={option2} onChange={handleChange2} class="form-select appearance-none
                                      block
                                      w-full
                                      px-3
                                      py-1.5
                                      text-base
                                      font-normal
                                      text-gray-700
                                      bg-white bg-clip-padding bg-no-repeat
                                      border border-solid border-gray-300
                                      rounded
                                      transition
                                      ease-in-out
                                      m-0
                                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                {options2}
                            </select>
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <button
                            type="button"
                            class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
                            onClick={recordToDoctor}
                        >
                            Записаться
                        </button>
                    </div>
                </div>
            </div>
    );
}