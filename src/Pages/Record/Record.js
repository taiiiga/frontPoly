import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../../api/config";
import axios from "axios";

export default function Record() {
    const [diagnoses, setDiagnoses] = useState([]);
    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const url = api + "/Diagnose/list?id=" + id;
        axios.get(url).then((resp) => {
            setDiagnoses(resp.data);
        }).catch((error) => {
            alert(error);
        });
    }, [setDiagnoses]);

    const rows = diagnoses.map((record) => {
        return (
            <tr>
                <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
                    <label className="sr-only" htmlFor="Row1">Запись</label>

                    <input
                        className="h-5 w-5 rounded border-gray-200"
                        type="checkbox"
                        id="Row1"
                    />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {record.Id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {record.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{record.diagnosis}</td>
            </tr>
        );
    });

    return(
        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
            <div className="w-full text-center justify-center my-4">
                <button
                    className="inline-block rounded border border-indigo-600 align-middle  p-5 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                    onClick={() => {
                        navigate('/diagnoses/new', { state: id });
                    }}
                >
                    Добавить диагноз
                </button>
            </div>

            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                <tr>
                    <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
                        <p>Удалить</p>
                    </th>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-2">
                            ID

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-700"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-2">
                            Направление

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-700"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-2">
                            Диагноз

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-700"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {rows}
                </tbody>
            </table>
        </div>
    );
}