import { addLink } from '../../store/Links';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';

const AddLinkModal = ({ onClose, isVisible }) => {
    const LinkData = useSelector((state) => state.link.value);
    const dispatch = useDispatch();
    const [type,settype] = useState("");
    const [content,setcontent] = useState("");

    const AddDetails = () => {
        let id = 1;
        if(LinkData.length!==0) id = LinkData[LinkData.length-1].id + 1;

        const newlink = {
            id : id,
            type : type,
            content : content,
        }
        dispatch(addLink(newlink));
        setcontent(""); settype("");
    }

    if (!isVisible) return null;

    return (
        <div className="contentmodal fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
          <div className="w-[700px]">
            <div className="bg-white p-10 rounded-lg flex flex-col align-middle items-start innermodal">
              <div className="content">
                <div className="m-0 text-left">Link type : </div>
                <input className="p-1 m-2" type="text" name="content" value={type} onChange={(e) => settype(e.target.value)} required={true}/>
              </div>
    
              <div className="Description mt-3">
                <div className="m-0 text-left">Link : </div>
                <input className="p-1 m-2" name="Desc" value={content} onChange={(e) => setcontent(e.target.value)} required/>
              </div>
    
              <button className="rounded-md mt-2 p-2 pl-4 pr-4 bg-green-700 text-white" onClick={(e) => {AddDetails();onClose(e);e.stopPropagation();}}>Save & Close</button>
            </div>
          </div>
        </div>
      );
};

export default AddLinkModal;
