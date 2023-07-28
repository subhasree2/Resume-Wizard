import { addSkill } from '../../store/Skills';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';

const AddSkillModal = ({ onClose, isVisible }) => {
    const SkillData = useSelector((state) => state.skill.value);
    const dispatch = useDispatch();
    const [content,setcontent] = useState("");

    const AddDetails = () => {
        let id = 1;
        if(SkillData.length!==0) id = SkillData[SkillData.length-1].id + 1;

        const newSkill = {
            id : id,
            content : content,
        }
        dispatch(addSkill(newSkill));
        setcontent("");
    }

    if (!isVisible) return null;

    return (
        <div className="contentmodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
          <div className="w-[700px]">
            <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
              <div className="content">
                <div className="m-0 text-left">Skill : </div>
                <input className="p-1 m-2" type="text" name="content" value={content} onChange={(e) => setcontent(e.target.value)} required={true}/>
              </div>
    
              <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {AddDetails();onClose(e);e.stopPropagation();}}>Save & Close</button>
            </div>
          </div>
        </div>
      );
};

export default AddSkillModal;
