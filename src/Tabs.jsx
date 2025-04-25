import { useState } from "react";

function SkillCard ({label, imageadr}){
    return (
        <div className="w-28 h-28 border rounded-2xl flex flex-col items-center justify-center mr-4 shadow-md shadow-cyan-500/50">
            <img src={imageadr} alt={label + " logo"} className="w-12 h-12 mb-2" />
            {label}
        </div>
    );
}

function Tabs(){
    const [activeTab, setActiveTab] = useState("tab1")

    const tabs = [
        {id: "tab1", label: "Front-end"},
        {id: "tab2", label: "Back-end"},
        {id: "tab3", label: "Databases"},
        {id: "tab4", label: "Tools"},
    ]

    const tabContent = {
        tab1: (
            <>
                <SkillCard label="React" imageadr="/icon/react.svg" />
                <SkillCard label="JavaScript" imageadr="/icon/javascript.svg" />
                <SkillCard label="Tailwind" imageadr="/icon/tailwindcss.svg" />
                <SkillCard label="CSS" imageadr="/icon/css.svg" />
                <SkillCard label="HTML" imageadr="/icon/html.svg" />
            </>
            
        ),
        tab2: (
            <>
                <SkillCard label="Python" imageadr="/icon/python.svg" />
                <SkillCard label="Java" imageadr="/icon/java.svg" />
                <SkillCard label="Flask" imageadr="/icon/flask.svg" />
            </>

        ),
        tab3: (
            <>
                <SkillCard label="SQL Dev" imageadr="/icon/sqldev.svg" />
                <SkillCard label="SQLite 3" imageadr="/icon/sqlite.svg" />
                <SkillCard label="Mongo.db" imageadr="/icon/mongodb.svg" />
                <SkillCard label="Elasticsearch" imageadr="/icon/elasticsearch.svg" />
            </>
        ),
        tab4: (
            <>
                <SkillCard label="Git" imageadr="/icon/git.svg" />
                <SkillCard label="Vite" imageadr="/icon/vite.svg" />
            </>
        )
    }


    return (
        <>
            <div id="tabs-wrapper" className="mb-5">
                <div id="tabs" className="flex flex-wrap border-b">
                    {tabs.map((tab) => (
                        <button key={tab.id}
                        className={`px-4 py-2 font-semibold ${
                            activeTab === tab.id ? "border-b-2 border-cyan text-cyan"
                            : "hover:text-cyan"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                        >
                        {tab.label}
                        </button>

                    ))}
                </div>

                <div id="tabs-content" className="flex mt-4">
                    {tabContent[activeTab]}
                </div>
            </div>
        </>
    );
}

export default Tabs