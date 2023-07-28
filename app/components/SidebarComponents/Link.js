import AddLinkModal from "../../Modals/Link/AddLink";
import UpdateLinkModal from "../../Modals/Link/UpdateLink";
import { useState } from "react";
import { useSelector } from "react-redux";

const Link = () => {
    const [addmodal,showaddmodal] = useState(false);
    const [updatemodal,showupdatemodal] = useState(false);
    const [temp,settemp] = useState({});
    const LinkData = useSelector((state) => state.link.value);

    const handleClick = (element) => {
        settemp(element);
        showupdatemodal(true);
    };

    return (
        <div className="links flex p-4 flex-col">
            <div className="flex">
                <AddLinkModal onClose={() => showaddmodal(false)} isVisible={addmodal} />
                {updatemodal && temp && (
                    <UpdateLinkModal element={temp} onClose={() => {showupdatemodal(false);showaddmodal(false);}} isVisible={updatemodal} />
                )}
                <div className="cursor-pointer" onClick={() => showaddmodal(true)}>
                    <h2 className="font-bold cursor-pointer">LINKS</h2>
                    <div className="flex flex-col flex-wrap">
                        {LinkData && 
                            LinkData.map((element) => {
                                return (
                                    <div key={element.id} className="linkelement mt-2 flex flex-row justify-between cursor-pointer" onClick={() => handleClick(element)}>
                                        <div className="display">
                                            <div className="font-medium">{element.type}</div> 
                                            <div>{element.content}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Link;