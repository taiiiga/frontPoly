import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {api} from "../../api/config";

export default function Doctor() {
    const [doctor, setDoctor] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        const apiUrl = api + '/Doctor/get/' + id;
        axios.get(apiUrl).then((resp) => {
            setDoctor(resp.data);
        }).catch((error) => {
            alert(error);
        });
    }, [setDoctor]);

    return(
        <article class="rounded-xl border-2 border-gray-100 bg-white px-10">
            <div class="flex justify-between p-6">
                <div class="flex items-start">
                    <a className="block shrink-0">
                        <img
                            alt="Аватар"
                            src={doctor.Photo ?? "https://sun9-53.userapi.com/impg/3Ycus00P48p-7CdDXjDBa8VV7Y9UA7OEN3hFUw/ycUFs0umHN8.jpg?size=577x604&quality=96&sign=9d21cff9c84d1d8a17c56c89e17e443b&type=album"}
                            className="h-14 w-14 rounded-lg object-cover"
                        />
                    </a>

                    <div className="ml-4">
                        <strong className="font-medium sm:text-lg">
                            <a href="src/Pages/Doctor/Doctor#"
                               className="hover:underline">Id: {doctor.Id} {doctor.DoctorName}</a>
                        </strong>
                        <p className="text-sm text-gray-700 line-clamp-2">
                            {doctor.Specialization ?? "Город не указан"}{doctor.Experiance ? ", стаж: " + doctor.Experiance + " лет" : ""}
                        </p>
                    </div>
                </div>
                <button
                    className="inline-block rounded border border-indigo-600 align-middle p-5 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                    onClick={() => {
                        navigate('edit');
                    }}
                >
                    Редактировать врача
                </button>
            </div>
        </article>
    );
}