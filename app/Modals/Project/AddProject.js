import { addProject } from '../../store/Project';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';

const AddProjectModal = ({ onClose, isVisible }) => {
    const ProjectData = useSelector((state) => state.project.value);
    const dispatch = useDispatch();
    const [title,setTitle] = useState("");
    const [Desc,setDesc] = useState("");
    const [techStack,settechStack] = useState("");
    const [link,setlink] = useState("");

    const AddDetails = () => {
        let id = 1;
        if(ProjectData.length!==0) id = ProjectData[ProjectData.length-1].id + 1;

        const newproj = {
            id : id,
            title : title,
            description : Desc,
            techStack : techStack,
            link : link
        }
        dispatch(addProject(newproj));
        setTitle(""); setlink(""); settechStack(""); setDesc("");
    }

    if (!isVisible) return null;

    return (
        <div className="Titlemodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
          <div className="w-[700px]">
            <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
              <div className="title">
                <div className="m-0 text-left">Project Title : </div>
                <input className="p-1 m-2" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
              </div>
    
              <div className="Description mt-3">
                <div className="m-0 text-left">Project Description : </div>
                <input className="p-1 m-2" name="Desc" value={Desc} onChange={(e) => setDesc(e.target.value)}/>
              </div>

              <div className="techStack mt-3">
                <div className="m-0 text-left">TechStack : </div>
                <input className="p-1 m-2" type="text" name="techStack" value={techStack} onChange={(e) => settechStack(e.target.value)}/>
              </div>
  
              <div className="link mt-3">
                <div className="m-0 text-left">Project link : </div>
                <input className="p-1 m-2" name="link" value={link} onChange={(e) => setlink(e.target.value)}/>
              </div>
    
              <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {AddDetails();onClose(e);e.stopPropagation();}}>Save & Close</button>
            </div>
          </div>
        </div>
      );
};

export default AddProjectModal;
