function NavBar() {
    return (
        // TODO: Update on link to elements when navbar cover a part of it?
        <nav className="flex w-screen fixed top-0 bg-deepnavy h-10 justify-end pr-5 z-50" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <a href="#about-me" className="inline-flex items-center text-sm font-medium
                     text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <b>00.</b>&nbsp;About me</a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#work-experience" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2
                         dark:text-gray-400 dark:hover:text-white">
                         <b>01.</b> Experience</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#project" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2
                         dark:text-gray-400 dark:hover:text-white">
                            <b>02.</b> Project</a>                    
                    </div>
                </li>
            </ol>
        </nav>

    );
}

export default NavBar