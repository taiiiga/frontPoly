import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {api} from "../../api/config";
import axios from "axios";

export default function Records() {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const url = api + "/Record/list?email=" + user.email + "&password=" + user.password;
        axios.get(url).then((resp) => {
            setRecords(resp.data);
        }).catch((error) => {
            alert(error);
        });
    }, [setRecords]);

    const rows = records.map((record) => {
        return (
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {record.Id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {record.DoctorName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{record.Date}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{record.Time}</td>
                <td className="whitespace-nowrap px-4 py-2">
                    {record.Status ?
                    <strong
                        className="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-black-700"
                    >
                        В будущем
                    </strong> :
                    <strong
                        className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                    >
                        Архив
                    </strong>
                    }
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                    <a onClick={(e) => navigate(record.Id.toString())} className="text-sm font-medium text-blue-600 hover:underline">
                        Подробнее
                    </a>
                </td>
            </tr>
        );
    });

    return(
        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                <tr>
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
                            Врач

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
                            Дата

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
                            Время

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
                        Статус
                    </th>
                    <th className="px-4 py-2"></th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {rows}
                </tbody>
            </table>
        </div>
    );
}