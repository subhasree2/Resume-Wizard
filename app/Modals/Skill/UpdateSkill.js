import { updateSkill,deleteSkill } from '../../store/Skills';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const UpdateSkillModal = ({ element, onClose, isVisible }) => {
    const dispatch = useDispatch();
    const [content,setcontent] = useState(element.content);

    const updateDetails = () => {
        const updateskill = {
            id : element.id,
            content : content
        }
        dispatch(updateSkill(updateskill));
    }

    const deleteDetails = () => {
      dispatch(deleteSkill({id : element.id}));
    }

    if (!isVisible) return null;

    return (
        <div className="Titlemodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
          <div className="w-[700px]">
            <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
            <div className="content">
                <div className="m-0 text-left">Skill : </div>
                <input className="p-1 m-2" type="text" name="content" value={content} onChange={(e) => setcontent(e.target.value)} required={true}/>
              </div>
    
              <div className='ml-auto mr-auto mt-2 Buttons'>
                <button className="Savebtn rounded-md mr-10 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {updateDetails();onClose(e);e.stopPropagation();}}>Save</button>
                <button className="rounded-md p-2 pl-4 pr-4 bg-red-700 text-white" onClick={(e) => {deleteDetails();onClose(e);e.stopPropagation();}}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default UpdateSkillModal;
