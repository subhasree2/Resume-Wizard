import { useState } from "react";
import SummaryModal from "../Modals/SummaryModal";
import AddEducationModal from "../Modals/Education/AddEducationModal";
import AddProjectModal from "../Modals/Project/AddProject";
import { useSelector } from "react-redux";
import UpdateEducationModal from "../Modals/Education/UpdateEducation";
import UpdateProjectModal from "../Modals/Project/UpdateProject";

function Content() {
    const [summary,setSummary] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos nam molestias autem, iure provident, maxime reiciendis repellendus, doloremque facere sint atque ratione ducimus. Impedit nulla sint earum accusamus eum?")
    const [Summarymodal,showSummaryModal] = useState(false);

    const [AddEducationmodal,showAddEducationModal] = useState(false);
    const [updateEducationmodal,showUpdateEducationModal] = useState(false);
    const educationData = useSelector((state) => state.education.value);

    const [AddProjectmodal,showAddProjectModal] = useState(false);
    const [updateProjectmodal,showUpdateProjectModal] = useState(false);
    const projectData = useSelector((state) => state.project.value);

    return (
        <div className="Content">
            <div className="Summary flex p-4 cursor-pointer" onClick={() => showSummaryModal(true)}>
                <SummaryModal summary={summary} setSummary={setSummary} onClose={() => showSummaryModal(false)} isVisible={Summarymodal} />
                <div className="pl-2">
                    <h2 className="font-bold">Summary</h2>
                    <p className="mt-2 text-justify">{summary}</p>
                </div>
            </div>
            <div className="Education pl-4">
                <div className="pl-2">
                    <h2 className="font-bold flex flex-row justify-between">Education<button className="bg-blue-500 text-white font-normal p-2 pr-6 pl-6 rounded-md text-[10px] mb-1" onClick={() => showAddEducationModal(true)}>Add Education</button></h2> 
                    <AddEducationModal onClose={() => showAddEducationModal(false)} isVisible={AddEducationmodal} />
                    {educationData && 
                        educationData.map((element) => {
                            return (
                                <div key={element.id} className="Eduelement mt-2 flex flex-row justify-between cursor-pointer" onClick={() => showUpdateEducationModal(true)}>
                                    <UpdateEducationModal element={element} onClose={() => showUpdateEducationModal(false)} isVisible={updateEducationmodal}/>
                                    <div className="display">
                                        <span className="font-medium">{element.Course} - {element.Institution}</span> <br/>
                                        <span className="mr-10">Score : {element.Score}</span>
                                        <span>Duration : {element.Duration}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="Project pl-4 mt-3">
                <div className="pl-2">
                    <h2 className="font-bold flex flex-row justify-between">Projects<button className="bg-blue-500 text-white font-normal p-2 pr-8 pl-8 rounded-md text-[10px] mb-1" onClick={() => showAddProjectModal(true)}>Add Project</button></h2> 
                    <AddProjectModal onClose={() => showAddProjectModal(false)} isVisible={AddProjectmodal} />
                    {projectData && 
                        projectData.map((element) => {
                            return (
                                <div key={element.id} className="projelement mt-2 flex flex-row justify-between cursor-pointer" onClick={() => showUpdateProjectModal(true)}>
                                    <UpdateProjectModal element={element} onClose={() => showUpdateProjectModal(false)} isVisible={updateProjectmodal}/>
                                    <div className="display text-justify">
                                        <div className="font-semibold">{element.title} - {element.techStack}</div> 
                                        <div className="text-justify">{element.description} </div>
                                        <div className="">{element.link}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;