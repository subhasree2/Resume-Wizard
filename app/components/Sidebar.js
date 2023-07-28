import { useState } from "react";
import InfoModal from "../Modals/InfoModal";
import AddLinkModal from "../Modals/Link/AddLink";
import UpdateLinkModal from "../Modals/Link/UpdateLink";
import AddSkillModal from "../Modals/Skill/AddSkill";
import UpdateSkillModal from "../Modals/Skill/UpdateSkill";
import { useSelector } from "react-redux";

function Sidebar() {
  const [Addr, setAddr] = useState(
    "1515 Pacific Ave,Los Angeles, CA 90291, United States"
  );
  const [Email, setEmail] = useState("email@gmail.com");
  const [phNo, setphNo] = useState("9999999999");
  const [modal, showModal] = useState(false);

  const [addLinkmodal,showaddLinkmodal] = useState(false);
  const [updateLinkmodal,showupdateLinkmodal] = useState(false);
  const [addSkillmodal,showaddSkillmodal] = useState(false);
  const [updateSkillmodal,showupdateSkillmodal] = useState(false);
  const [temp,settemp] = useState({});

  const LinkData = useSelector((state) => state.link.value);
  const SkillData = useSelector((state) => state.skill.value);

  const handleLinkClick = (element) => {
    settemp(element);
    showupdateLinkmodal(true);
  };

  const handleSkillClick = (element) => {
    settemp(element);
    showupdateSkillmodal(true);
  };

  return (
    <div className="w-[30%] Sidebar flex flex-col">
      <div className="info flex p-4">
        <InfoModal Addr={Addr} setAddr={setAddr} Email={Email} setEmail={setEmail} phNo={phNo} setphNo={setphNo} onClose={() => showModal(false)} isVisible={modal} />
        <div className="cursor-pointer" onClick={() => showModal(true)}>
          <h2 className="font-bold">INFO</h2>
          <h3 className="mt-3 font-semibold">Address</h3> <p className="">{Addr}</p>
          <h3 className="mt-3 font-semibold">Email</h3> <p>{Email}</p>
          <h3 className="mt-3 font-semibold">Phone number</h3> <p>{phNo}</p>
        </div>
      </div>
      <div className="links flex p-4 flex-col">
        <div className="flex">
          <AddLinkModal onClose={() => showaddLinkmodal(false)} isVisible={addLinkmodal} />
          {updateLinkmodal && temp && (
              <UpdateLinkModal element={temp} onClose={() => {showupdateLinkmodal(false);showaddLinkmodal(false);}} isVisible={updateLinkmodal} />
          )}
          <div className="cursor-pointer" onClick={() => showaddLinkmodal(true)}>
            <h2 className="font-bold cursor-pointer">LINKS</h2>
            <div className="flex flex-col flex-wrap">
            {LinkData && 
                LinkData.map((element) => {
                    return (
                        <div key={element.id} className="linkelement mt-2 flex flex-row justify-between cursor-pointer" onClick={() => handleLinkClick(element)}>
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
      <div className="skills flex p-4 flex-col">
        <div className="flex">
          <AddSkillModal onClose={() => showaddSkillmodal(false)} isVisible={addSkillmodal} />
          {updateSkillmodal && temp && (
            <UpdateSkillModal element={temp} onClose={() => {showupdateSkillmodal(false);showaddSkillmodal(false)}} isVisible={updateSkillmodal} />
          )}
          <div className="cursor-pointer" onClick={() => showaddSkillmodal(true)}>
            <h2 className="font-bold cursor-pointer">SKILLS</h2>
            <div className="flex flex-wrap w-[100%]">
              {SkillData && 
                  SkillData.map((element) => {
                      return (
                          <span key={element.id} className="skillelement mt-2 flex flex-row justify-between cursor-pointer mr-2" onClick={() => handleSkillClick(element)}>
                              {element.content}
                          </span>
                      )
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
