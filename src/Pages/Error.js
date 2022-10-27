import { useNavigate } from 'react-router-dom';


export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <section className="text-white bg-gray-900">
            <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        Ошибка 404.
                        <span className="sm:block">Страница не найдена.</span>
                    </h1>

                    <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                        Возможно, эту страницу удалил разработчик либо вы неправильно ввели адрес.
                    </p>

                    <div className="flex flex-wrap justify-center mt-8 gap-4">
                        <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                           onClick={() => navigate(-1)}>
                            Вернуться назад
                        </a>

                        <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring"
                           href="https://ru.wikipedia.org/wiki/%D0%9E%D1%88%D0%B8%D0%B1%D0%BA%D0%B0_404">
                            Узнать больше
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}