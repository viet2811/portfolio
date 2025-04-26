import { useState, useRef, useEffect } from 'react';
import Experiences from './experience.json'
import SkillList from './SkillList';


function ExperienceCard ({exp, isExpanded, setIsExpanded}){
    return (
        <div className='flex items-center w-full space-x-3'>
            <div id="time_period" className='text-right leading-5 ml-2.5'>
                {exp.startDate} -<br></br> {exp.endDate}
            </div>
            <div id="timeline-graph" className='flex flex-col items-center'>
                <div className="border-l-2 border-solid border-[#8f99b6] h-12"></div>
                <div className={`border-2 border-solid border-[#8f99b6] rounded-full h-5 w-5
                                group-hover:bg-[#8f99b6] ${
                                    isExpanded ? "bg-[#8f99b6]" : ""
                                }`}></div>
                <div className="border-l-2 border-solid border-[#8f99b6] h-12"></div>
            </div>
            <div className='flex-col leading-4 flex ml-4'>
                <h3 className='text-base group-hover:!text-cyan'>{exp.position}</h3>
                <div className='mb-2'>at {exp.company}</div>
                <SkillList skList={exp.skills}/>
            </div>
            <div id="collapse_indicator"
            className={`text-2xl ml-auto mr-4 cursor-pointer ${
                isExpanded ? "-rotate-90" : "rotate-90"
            } transition-transform duration-500 ease-in`}
            onClick={() => setIsExpanded(!isExpanded)}>
            {">"}</div>
        </div>

    );
}

function ExpandContent ({exp, isExpanded}) {
    const contentRef = useRef(null); // Reference to the expandable content
    const [maxHeight, setMaxHeight] = useState("0px");

    const handleTransition = () => {
        if (isExpanded) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight("0px");
        }
    };

    // Trigger height calculation when `isExpanded` changes
    useEffect(() => {
        handleTransition();
    }, [isExpanded]);

    return (
        <div id="expand-content" ref={contentRef} 
             style={{ maxHeight }}
             className="border-l-2 border-solid border-gray-border pl-9.25 ml-25.35
                        overflow-hidden transition-[max-height] duration-600 ease-out">
            <div className="flex space-x-11">
                <span><b>Location:</b> {exp.location}</span>
                <span><b>Type:</b> {exp.workType}</span>
            </div>
            <div className='mt-1.5'>
                <b>Description: </b>
                <ul className='pb-4 list-disc list-inside'>
                    {exp.description.map((bp, index) => (
                        <li key={index} className='w-4/5 text-sm'>{bp}</li>
                    ))}

                </ul>
            </div>

        </div>

    );
}



function Accordion({workID}) {
    const exp = Experiences[workID];
    const [isExpand, setIsExpanded] = useState(false);

    return (
        <div className='-ml-2.5 rounded-2xl hover:bg-[#192942] group'>
            <ExperienceCard exp={exp} isExpanded={isExpand} setIsExpanded={setIsExpanded}/>   
            <ExpandContent exp={exp} isExpanded={isExpand}/>  
        </div>
    );    
}

export default Accordion