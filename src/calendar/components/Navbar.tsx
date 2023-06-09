import { BsCalendarWeek } from "react-icons/bs";
import { useAuthStore } from "../../hooks";

export const Navbar = () => {

    const { startLogout, user } = useAuthStore()

    return (
        <nav className="bg-primary-600">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <div className="sm:ml-6">
                                <div className="flex space-x-4">

                                    <span className="bg-primary-900 text-white flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><BsCalendarWeek size={20} /> { user.name } </span>

                                    {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>

                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center gap-4">
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="flex rounded-ful text-sm focus:outline-none pointer-events-none select-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="Profile user" />
                                    </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="bg-red-600 text-white items-center gap-2 rounded-md px-3 py-2 flex text-sm font-medium"
                                onClick={ startLogout }
                            >
                                Salir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
