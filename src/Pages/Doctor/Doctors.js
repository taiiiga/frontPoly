import React, {useEffect, useState} from "react";
import {api} from "../../api/config";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = api + '/Doctor/list';
        axios.get(apiUrl).then((resp) => {
            setDoctors(resp.data);
        }).catch((error) => {
            alert(error);
        });
    }, [setDoctors]);

    const rows = doctors.map((doctor) => {
        return (
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {doctor.Id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {doctor.DoctorName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{doctor.Specialization}</td>
                <td className="whitespace-nowrap px-4 py-2">
                    <a onClick={(e) => navigate(doctor.Id.toString())} className="text-sm font-medium text-blue-600 hover:underline">
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
                            Имя Фамилия

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
                            Специализация

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