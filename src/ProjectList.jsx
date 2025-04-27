import SkillList from "./SkillList";
import Projects from "./data/project.json"

function ProjectCard ({prj}){
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm
            dark:bg-[#192942] dark:border-gray-700
            "
        >
            <a href={prj.link} target="_blank">
                <h5 className="mb-2 text-base font-semibold tracking-tight hover:text-cyan hover:underline text-gray-900 dark:text-white">{prj.name}</h5>
            </a>
            <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">{prj.description}</p>
            <SkillList skList={prj.skills}/>
            <a href={prj.gitrepo} target="_blank" className="inline-flex font-medium items-center
            text-blue-600 hover:underline
            mt-3
            ">
                GitHub Repo
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
            </a>
        </div>
    );

}


function ProjectList() {
    const data = Object.entries(Projects)
    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map(([key, value]) => (
                <ProjectCard key={key} prj={value} />
            ))}
        </div>
    );
}

export default ProjectList