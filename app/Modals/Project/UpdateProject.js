import { updateProject } from '../../store/Project';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const UpdateProjectModal = ({ element, onClose, isVisible }) => {
    const dispatch = useDispatch();
    const [title,settitle] = useState(element.title);
    const [description,setdescription] = useState(element.description);
    const [techStack,settechStack] = useState(element.techStack);
    const [link,setlink] = useState(element.link);

    const updateDetails = () => {
        const updateproj = {
            id : element.id,
            title : title,
            description : description,
            techStack : techStack,
            link : link
        }
        dispatch(updateProject(updateproj));
    }

    if (!isVisible) return null;

    return (
        <div className="Titlemodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
          <div className="w-[700px]">
            <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
              <div className="title">
                <div className="m-0 text-left">Project title : </div>
                <input className="p-1 m-2" type="text" name="title" value={title} onChange={(e) => settitle(e.target.value)}/>
              </div>
    
              <div className="descriptionitution mt-3">
                <div className="m-0 text-left">Project description : </div>
                <input className="p-1 m-2" name="description" value={description} onChange={(e) => setdescription(e.target.value)}/>
              </div>

              <div className="techsettechStack mt-3">
                <div className="m-0 text-left">TechStack : </div>
                <input className="p-1 m-2" type="text" name="techStack" value={techStack} onChange={(e) => settechStack(e.target.value)}/>
              </div>
  
              <div className="link mt-3">
                <div className="m-0 text-left">Project link : </div>
                <input className="p-1 m-2" name="duration" value={link} onChange={(e) => setlink(e.target.value)}/>
              </div>
    
              <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {updateDetails();onClose(e);e.stopPropagation();}}>Save & Close</button>
            </div>
          </div>
        </div>
      );
};

export default UpdateProjectModal;
