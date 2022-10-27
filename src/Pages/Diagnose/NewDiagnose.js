import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {api} from "../../api/config";

export default function NewDiagnose() {
    const [diagnose, setDiagnose] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    console.log(useParams());
    console.log(useNavigate());
    console.log(useLocation());
    console.log(location.state);

    const createDiagnose = () => {
        const url = api + "/Diagnose/create";
        const today = new Date();
        axios.post(url, {
            "description": diagnose.Description,
            "diagnosis": diagnose.Diagnosis,
            "dateTime": today,
            "recordId": location.state
        }).then(resp => {
            navigate('/records');
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    };

    return(
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
                <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Добавление диагноза
                </h1>

                <div class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <div>
                        <label htmlFor="specialization" className="text-sm font-medium">Направление</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="specialization"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="Пить тримедат 3 раза в день"
                                value={diagnose.Description}
                                onChange={e => setDiagnose({...diagnose, Description: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="experiance" className="text-sm font-medium">Диагноз</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="experiance"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm border-2"
                                placeholder="Гастрит"
                                value={diagnose.Diagnosis}
                                onChange={e => setDiagnose({...diagnose, Diagnosis: e.target.value})}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        onClick={createDiagnose}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
}