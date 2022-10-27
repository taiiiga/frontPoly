import {Link} from "react-router-dom";
import React from "react";

export default function Home() {
    return(
        <section>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
                    >
                        <img
                            alt="Party"
                            src="https://ic.pics.livejournal.com/palatov/12599607/202769/202769_original.jpg"
                            className="absolute inset-0 object-cover w-full h-full"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Пора лечиться!</h2>

                        <p className="mt-4 text-gray-600">
                            Чего не излечивает лекарство, излечивает нож, чего не излечивает нож, излечивает огонь; чего не излечивает огонь, то надо считать неизлечимым <br/> (C) Гипократ
                        </p>
                        <Link to={`records/new`}>
                        <a
                            href="#"
                            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                        >

                                <span className="text-sm font-medium">Записаться</span>

                                <svg
                                    className="w-5 h-5 ml-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>

                        </a></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}