import {Fragment, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
    const [value, setValue] = useState(null);
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
        "19:00",
    ];
    const doctors = [
        "Венеролог",
        "Гастроэнтеролог",
        "Гематолог",
        "Гинеколог",
        "Дерматовенеролог",
        "Детский хирург",
        "Инфекционист",
        "Кардиолог",
        "Кардиохирург",
        "Колопроктолог",
        "Лор",
        "Невролог",
        "Нейрохирург",
        "Онколог",
        "Ортопед",
        "Офтальмолог",
        "Педиатр",
        "Пластический хирург",
        "Психиатр",
        "Пульмонолог",
        "Ревматолог",
        "Рентгенолог",
        "Репродуктолог",
        "Сексолог",
        "Стоматолог",
        "Терапевт",
        "Травматолог",
        "Уролог",
        "Фтизиатр",
        "Хирург",
        "Эндокринолог",
        "Эндоскопист",
        "Эпидемиолог",
        "Эпилептолог",
    ];

    const rows = [];

    if (props.type == 0) {
        for (let i = 0; i < times.length; i++) {
            rows.push(
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            onClick={() => setValue(times[i])}
                        >
                            {times[i]}
                        </a>
                    )}
                </Menu.Item>
            );
        }
    } else {
        for (let i = 0; i < doctors.length; i++) {
            rows.push(
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            onClick={() => setValue(doctors[i])}
                        >
                            {doctors[i]}
                        </a>
                    )}
                </Menu.Item>
            );
        }
    }


    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    {props.type == 0
                        ? value ? value : "Выберите время"
                        : value ? value : "Выберите специалиста"}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {rows}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
