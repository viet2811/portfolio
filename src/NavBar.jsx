function NavBar() {
    return (
        <nav className="w-screen fixed top-0 bg-[#0a192f] overflow-hidden max-h-15">
            <a href="#" className="float-right text-[#8f99b6] 
                                   decoration-0 p-3.5 hover:text-[#f5f5f5]">
                <b className="text-[#5ae1d4]">02.</b> Project
            </a>
            <a href="#" className="float-right text-[#8f99b6] 
                                   decoration-0 p-3.5 hover:text-[#f5f5f5]">
                <b className="text-[#5ae1d4]">01.</b> Work Experience
            </a>
            <a href="#" className="float-right text-[#8f99b6] 
                                   decoration-0 p-3.5 hover:text-[#f5f5f5]">
                <b className="text-[#5ae1d4]">00.</b> About me
            </a>
        </nav>
    );
}

export default NavBar