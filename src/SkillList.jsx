function SkillCard ({name}) {
    return (
        <div className="dark:bg-[#193755] dark:text-[#55d7d4]
                        bg-[#f0f7fc] text-[#007b83]
                        w-max px-4 py-1 rounded-full text-sm">
            {name}
        </div>
    );
}



function SkillList({skList}) {
    return (
      <div className="inline-flex flex-wrap gap-2.5 w-full">
            {skList.map((skill, index) => (
                <SkillCard key={index} name={skill}/>   
            ))}
        </div>
    );
}

export default SkillList