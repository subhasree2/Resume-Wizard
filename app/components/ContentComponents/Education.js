import { useState } from "react";
import { useSelector } from "react-redux";
import AddEducationModal from "../../Modals/Education/AddEducationModal";
import UpdateEducationModal from "../../Modals/Education/UpdateEducation";

const Education = () => {
    const [Addmodal, showAddModal] = useState(false);
    const [updatemodal, showUpdateModal] = useState(false);
    const educationData = useSelector((state) => state.education.value);
    const [temp, settemp] = useState({});

    const handleClick = (element) => {
        settemp(element);
        showUpdateModal(true);
    };

    return (
        <div className="Education pl-4">
            <div className="pl-2">
                <h2 className="font-bold flex flex-row justify-between text-center cursor-pointer" onClick={() => showAddModal(true)}>Education</h2>
                <AddEducationModal onClose={() => showAddModal(false)} isVisible={Addmodal} />
                {updatemodal && temp && (
                    <UpdateEducationModal element={temp} onClose={() => showUpdateModal(false)} isVisible={updatemodal} />
                )}

                {educationData &&
                    educationData.map((element) => {
                        return (
                            <div key={element.id} className="Eduelement mt-2 flex flex-row justify-between cursor-pointer" onClick={() => handleClick(element)}>
                                <div className="display">
                                    <span className="font-medium">{element.Course} - {element.Institution}</span> <br />
                                    <span className="mr-10">Score : {element.Score}</span>
                                    <span>Duration : {element.Duration}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education;