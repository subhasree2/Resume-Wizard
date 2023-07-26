import { addEducation } from '../../store/Education';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';

const AddEducationModal = ({ onClose, isVisible }) => {
    const educationData = useSelector((state) => state.education.value);
    const dispatch = useDispatch();
    const [course,setCourse] = useState("");
    const [inst,setInst] = useState("");
    const [score,setScore] = useState(0);
    const [Duration,setDuration] = useState("");

    const AddDetails = () => {
        let id = 1;
        if(educationData.length!==0) id = educationData[educationData.length-1].id + 1;

        const newEdu = {
            id : id,
            Course : course,
            Institution : inst,
            Score : score,
            Duration : Duration
        }
        dispatch(addEducation(newEdu));
        setCourse(""); setDuration(""); setScore(0); setInst("");
    }

    if (!isVisible) return null;

    return (
        <div className="Titlemodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
          <div className="w-[700px]">
            <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
              <div className="Course">
                <div className="m-0 text-left">Course Name : </div>
                <input className="p-1 m-2" type="text" name="course" value={course} onChange={(e) => setCourse(e.target.value)}/>
              </div>
    
              <div className="Institution mt-3">
                <div className="m-0 text-left">Institution name : </div>
                <input className="p-1 m-2" name="inst" value={inst} onChange={(e) => setInst(e.target.value)}/>
              </div>

              <div className="Score mt-3">
                <div className="m-0 text-left">Score : </div>
                <input className="p-1 m-2" type="number" name="score" value={score} onChange={(e) => setScore(e.target.value)}/>
              </div>
  
              <div className="Duration mt-3">
                <div className="m-0 text-left">Duration : </div>
                <input className="p-1 m-2" name="duration" value={Duration} onChange={(e) => setDuration(e.target.value)}/>
              </div>
    
              <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {AddDetails();onClose(e);e.stopPropagation();}}>Save & Close</button>
            </div>
          </div>
        </div>
      );
};

export default AddEducationModal;
