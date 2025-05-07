import { useEffect, useState, Fragment } from "react";


function ThemeSwitchButton (){
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Check for user preferences of theme
    useEffect(() => {
        const savedPreference = localStorage.getItem("color-theme");
        if (savedPreference === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []) //Empty array ensures effect runs ONCE

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
            return newMode;
        });
    };
    return (
        <button 
            type="button" 
            onClick={toggleDarkMode} 
            className="flex items-center w-7 h-7 justify-center text-xs font-medium rounded-lg
            text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
            {isDarkMode ? (
                <svg data-toggle-icon="sun" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                </svg>
            ) : (
                <svg data-toggle-icon="moon" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                </svg>
            )}
            <span className="sr-only">Toggle dark/light mode</span>
        </button>
    );
}

const navTabs = [
    {
        "label": "About me",
        "href": "#about-me"
    },
    {
        "label": "Experience",
        "href": "#work-experience"
    },
    {
        "label": "Project",
        "href": "#project"
    },

]

const Arrow = (
    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    </svg>
)

function NavBar() {
    return (
        <nav 
            className="flex w-screen fixed top-0 h-10 justify-end pr-1.5 md:pr-5 z-50
            bg-ivory dark:bg-deepnavy" 
            aria-label="Breadcrumb"
        >
            <div className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {navTabs.map((tab, index) => (
                    <Fragment key={tab.label}>
                        <a href={tab.href} className="ms-1 text-xs md:text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2
                            dark:text-gray-400 dark:hover:text-white">
                            <b>0{index}.</b> {tab.label}
                        </a>
                        {index < navTabs.length - 1 && Arrow}
                    </Fragment>
                ))}
                <ThemeSwitchButton />
            </div>
        </nav>

    );
}

export default NavBar