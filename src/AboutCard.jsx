import avatar from "./assets/avatar.jpg";

function AboutCard (){
    return (
        <div className="max-w-screen h-auto border rounded-lg md:flex md:items-center
                      border-gray-300 bg-white shadow-md 
                      dark:border-gray-600 dark:bg-[#192942]"
        >
            <img 
                src={avatar} 
                className="rounded-full w-32 h-32 m-6 float-left md:float-none" 
                alt="Profile picture"
            />
            <div className="p-4">
                <h2 className="text-lg md:text-xl font-bold">About me</h2>
                <p>
                    I'm a motivated <b>Level 5 BSc Computer Science</b> student at University of Hertfordshire with strong fundamentals in <b className="dark:text-cyan text-blue-500">Python, Java and web development.</b>  <br></br>
                    <br></br>
                    Technology is the field I'm incredibly passionate about, and I'm eager to embrace on emerging technologies and hoping to gain vital knowledge through solving real-world problems.</p>
                <p>
                    <br></br>Currently working as <span className="dark:text-cyan text-blue-500 font-semibold">Student Tech Mentor</span>  providing technical support to staffs and students. Actively looking for an opportunity in the field of software development to gain industrial knowledge
                </p>
            </div>
        </div>
    );
}

export default AboutCard;