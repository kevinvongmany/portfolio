import Navbar from "./Navbar";


export default function Header() {
return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-black dark:text-gray-400">
            <h1 className="text-2xl">Kevin Vongmany</h1>
            <Navbar />
        </div>
    </header>
)
}