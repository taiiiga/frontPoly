import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {api} from "../../api/config";

export default function UpdateDoctor() {
    const [doctor, setDoctor] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        const url = api + "/Doctor/get/" + id;
        axios.get(url).then(resp => {
            setDoctor(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    const updateDoctor = () => {
        const url = api + "/Doctor/update";
        axios.post(url, {
            "Id": doctor.Id,
            "specialization": doctor.Specialization,
            "experiance": doctor.Experiance,
            "userId": doctor.UserId
        }).then(resp => {
            navigate('/doctors/' + id);
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    };

    return(
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
                <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Изменение профиля врача
                </h1>

                <div class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <div>
                        <label htmlFor="specialization" className="text-sm font-medium">Специальность</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="specialization"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="Хирург"
                                value={doctor.Specialization}
                                onChange={e => setDoctor({...doctor, Specialization: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="experiance" className="text-sm font-medium">Стаж (лет)</label>
                        <div className="relative mt-1">
                            <input
                                type="number"
                                id="experiance"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="2"
                                value={doctor.Experiance}
                                onChange={e => setDoctor({...doctor, Experiance: e.target.value})}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        onClick={updateDoctor}
                    >
                        Изменить
                    </button>
                </div>
            </div>
        </div>
    );
}