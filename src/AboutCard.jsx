import avatar from "./assets/avatar.jpg";

function AboutCard (){
    return (
        <div
            className="max-w-screen h-auto border border-gray-600 rounded-lg bg-[#192942] flex items-center "
        >
            <img src={avatar} className="rounded-full w-32 h-32 m-6" />
            <div className="p-4">
                <h2 className="text-xl font-bold">About me</h2>
                <p>
                    I am a motivated <b>Level 5 BSc Computer Science</b> student at University of Hertfordshire with strong fundamentals in <b className="text-cyan">Python, Java and web development.</b>  <br></br>
                    <br></br>
                    Technology is the field I'm incredibly passionate about, and I'm eager to embrace on emerging technologies and hoping to gain vital knowledge through solving real-world problems.</p>

                <p><br></br>Currently working as <span className="text-cyan">Student Tech Mentor</span>  providing technical support to staffs and students. Actively looking for an opportunity in the field of software development to gain industrial knowledge</p>
            </div>
        </div>
    );
}

export default AboutCard;