function SkillCard ({name}) {
    return (
        <div className="bg-[#193755] text-[#55d7d4] w-max px-4 py-1.5 rounded-3xl mr-2.5 text-sm">
            {name}
        </div>
    );
}



function SkillList({skList}) {
    return (
      <div className="inline-flex flex-wrap">
            {skList.map((skill, index) => (
                <SkillCard key={index} name={skill}/>   
            ))}
        </div>
    );
}

export default SkillList