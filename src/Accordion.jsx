import { useState, useRef, useEffect } from 'react';
import Experiences from './data/experience.json';
import SkillList from './SkillList';

function ExperienceCard({ exp, isExpanded, setIsExpanded, setExpandMarginLeft}) {
    const summaryRef = useRef(null); // Ref for the work summary section
    const lineRef = useRef(null); // Ref for the line in timeline graph
    const parentRef = useRef(null); // Ref for parent
    const [lineHeight, setLineHeight] = useState(0); // State to store the dynamic height
    
    useEffect(() => {
        const calculateOffsets = () => {
            if (summaryRef.current) {
            // Set the height of the lines based on the height of the work summary section
            setLineHeight(summaryRef.current.offsetHeight / 2 + 10); // Divide by 2 for top and bottom lines
            }

            if (lineRef.current) {
                // Get the exact pixel distance of the "line" from the left
                const lineOffsetLeft = lineRef.current.getBoundingClientRect().left;
                // Distance to the parent, since main has padding
                const parentOffsetLeft = parentRef.current.getBoundingClientRect().left;
                // The margin is from parent to line, so subtract
                setExpandMarginLeft(lineOffsetLeft - parentOffsetLeft);
            }
    };
        // Calculate initially when web loaded
        calculateOffsets();
        // Change on resize
        window.addEventListener("resize", calculateOffsets);
        
        // return in useEffect here is a cleanup function, telling React what to do
        // the cleanup runs when component unmount or the effect is re-run
        return () => {
            window.removeEventListener("resize", calculateOffsets)
        };

    }, []); 

    return (
        <div className="flex items-center w-full space-x-1 md:space-x-3" ref={parentRef}>
            {/* Work period */}
            <div className="text-xs md:text-sm text-right w-14 md:w-20">
                {exp.startDate} -<br /> {exp.endDate}
            </div>
            {/* Timeline graph */}
            <div className="flex flex-col items-center w-4">
                <div
                    id="line1"
                    className="border-l-2 border-solid dark:border-gray border-gray-600"
                    style={{ height: `${lineHeight}px` }}
                    ref={lineRef} // Dynamically set height
                ></div>
                <div
                    className={`w-full aspect-square rounded-full border-2 border-solid border-gray-600 group-hover:bg-gray-600 
                                dark:group-hover:bg-gray dark:border-gray ${
                                    isExpanded ? 'dark:bg-gray bg-gray-600' : ''
                                }`}
                ></div>
                <div
                    id="line2"
                    className="border-l-2 border-solid dark:border-gray border-gray-600"
                    style={{ height: `${lineHeight}px` }} // Dynamically set height
                ></div>
            </div>
            {/* Work summary */}
            <div className="flex-1 ml-1.5" ref={summaryRef}>
                <h3 className="text-base dark:group-hover:!text-cyan group-hover:!text-blue-500">{exp.position}</h3>
                <div className="text-sm mb-1.5 -mt-1">at {exp.company}</div>
                <SkillList skList={exp.skills} className={'text-xs md:text-sm !px-3 md:!px-4'} />
            </div>
            {/* Collapse button */}
            <div id="collapse_indicator"
            className={`text-base md:text-xl lg:text-2xl ml-auto md:mr-4 cursor-pointer z-10 ${
                isExpanded ? "-rotate-90" : "rotate-90"
            } transition-transform duration-500 ease-in`}
            onClick={() => setIsExpanded(!isExpanded)}>
            {">"}</div>
        </div>
    );
}

function ExpandContent({ exp, isExpanded, expandMarginLeft }) {
    const contentRef = useRef(null); // Reference to the expandable content
    const [maxHeight, setMaxHeight] = useState("0px");

    // Set maxheight: max-content(sort of) when expanded for smooth transition 
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
        <div ref={contentRef}
             id='expand-content'
             className='border-l-2 border-solid border-gray-600 dark:border-gray ml-19
             pl-4 md:pl-6 text-xs md:text-sm lg:text-base overflow-hidden transition-[max-height] duration-600 ease-out'
             style={{
                maxHeight,
                marginLeft: `${expandMarginLeft}px`
             }}
        >
            <div className="flex flex-wrap space-x-11">
                <span><b>Location:</b> {exp.location}</span>
                <span><b>Type:</b> {exp.workType}</span>
            </div>
            <div className='mt-1.5'>
                <b>Description: </b>
                <ul className='pb-4 list-disc list-inside'>
                    {exp.description.map((bp, index) => (
                        <li key={index} className='w-9/10 text-sm md:text-base'>{bp}</li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

function Accordion({ workID }) {
    const exp = Experiences[workID];
    const [isExpand, setIsExpanded] = useState(false);
    const [expandMarginLeft, setExpandMarginLeft] = useState(0);

    return (
        <div className="-ml-2.5 rounded-2xl dark:hover:bg-[#192942] hover:bg-white group">
            <ExperienceCard 
                exp={exp} 
                isExpanded={isExpand} 
                setIsExpanded={setIsExpanded}
                setExpandMarginLeft={setExpandMarginLeft} />
            <ExpandContent 
                exp={exp} 
                isExpanded={isExpand}
                expandMarginLeft={expandMarginLeft} />
        </div>
    );
}

export default Accordion;