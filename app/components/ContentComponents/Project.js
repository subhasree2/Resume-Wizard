import UpdateProjectModal from "../../Modals/Project/UpdateProject";
import AddProjectModal from "../../Modals/Project/AddProject";
import { useSelector } from "react-redux";
import { useState } from "react";

const Project = () => {
    const [temp, settemp] = useState({});
    const [Addmodal, showAddModal] = useState(false);
    const [updatemodal, showUpdateModal] = useState(false);
    const projectData = useSelector((state) => state.project.value);

    const handleClick = (element) => {
        settemp(element);
        showUpdateModal(true);
    }

    return (
        <div className="Project pl-4 mt-3">
            <div className="pl-2">
                <h2 className="font-bold flex flex-row justify-between cursor-pointer" onClick={() => showAddModal(true)}>Projects</h2>
                <AddProjectModal onClose={() => showAddModal(false)} isVisible={Addmodal} />
                {updatemodal && temp && (
                    <UpdateProjectModal element={temp} onClose={() => showUpdateModal(false)} isVisible={updatemodal} />
                )}
                {projectData &&
                    projectData.map((element) => {
                        return (
                            <div key={element.id} className="projelement mt-2 flex flex-row justify-between cursor-pointer" onClick={() => handleClick(element)}>
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
    )
}

export default Project;