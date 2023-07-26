import { useState } from "react";
import SummaryModal from "../Modals/SummaryModal";
import AddEducationModal from "../Modals/Education/AddEducationModal";
import { useSelector,useDispatch } from "react-redux";
import { deleteEducation } from "../store/Education";
import UpdateEducationModal from "../Modals/Education/UpdateEducation";

function Content() {
    const [summary,setSummary] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos nam molestias autem, iure provident, maxime reiciendis repellendus, doloremque facere sint atque ratione ducimus. Impedit nulla sint earum accusamus eum?")
    const [Summarymodal,showSummaryModal] = useState(false);
    const [AddEducationmodal,showAddEducationModal] = useState(false);
    const [updateEducationmodal,showUpdateEducationModal] = useState(false);
    const dispatch = useDispatch();
    const educationData = useSelector((state) => state.education.value);
    console.log(educationData);

    return (
        <div className="Content">
            <div className="Summary flex p-4 cursor-pointer" onClick={() => showSummaryModal(true)}>
                <SummaryModal summary={summary} setSummary={setSummary} onClose={() => showSummaryModal(false)} isVisible={Summarymodal} />
                <div className="pl-2">
                    <h2 className="font-bold">Summary</h2> <hr className="contenthr"/>
                    <p className="mt-2 text-justify">{summary}</p>
                </div>
            </div>
            <div className="Education p-4">
                <div className="pl-2">
                    <h2 className="font-bold flex flex-row justify-between">Education<button className="bg-blue-500 text-white font-normal p-2 pr-6 pl-6 rounded-md text-[10px] mb-1" onClick={() => showAddEducationModal(true)}>Add Education</button></h2> 
                    <AddEducationModal onClose={() => showAddEducationModal(false)} isVisible={AddEducationmodal} />
                    <hr className="contenthr" />
                    {educationData && 
                        educationData.map((element) => {
                            return (
                                <div key={element.id} className="Eduelement mt-2 flex flex-row justify-between">
                                    <UpdateEducationModal element={element} onClose={() => showUpdateEducationModal(false)} isVisible={updateEducationmodal}/>
                                    <div className="display">
                                        <span className="font-medium">{element.Course} - {element.Institution}</span> <br/>
                                        <span className="mr-10">Score : {element.Score}</span>
                                        <span>Duration : {element.Duration}</span>
                                    </div>
                                    <div>
                                        <button className="bg-green-500 text-white font-normal p-2 pr-4 pl-4 rounded-md text-[10px] mb-1 mr-4" onClick={() => showUpdateEducationModal(true)}>Update</button>
                                        <button className="bg-red-500 text-white font-normal p-2 pr-4 pl-4 rounded-md text-[10px] mb-1" onClick={() => dispatch(deleteEducation({ id : element.id }))}>Delete</button>
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