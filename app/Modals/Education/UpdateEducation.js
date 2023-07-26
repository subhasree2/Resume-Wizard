import { updateEducation } from '../../store/Education';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const UpdateEducationModal = ({ element, onClose, isVisible }) => {
    const dispatch = useDispatch();
    const [course,setCourse] = useState(element.Course);
    const [inst,setInst] = useState(element.Institution);
    const [score,setScore] = useState(element.Score);
    const [Duration,setDuration] = useState(element.Duration);

    const updateDetails = () => {
        const updateEdu = {
            id : element.id,
            Course : course,
            Institution : inst,
            Score : score,
            Duration : Duration
        }
        dispatch(updateEducation(updateEdu));
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
    
              <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {updateDetails();onClose(e);e.stopPropagation();}}>Save & Close</button>
            </div>
          </div>
        </div>
      );
};

export default UpdateEducationModal;
