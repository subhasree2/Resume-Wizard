import AddSkillModal from "../../Modals/Skill/AddSkill";
import UpdateSkillModal from "../../Modals/Skill/UpdateSkill";
import { useSelector } from "react-redux";
import { useState } from "react";

const Skill = () => {
    const [addmodal,showaddmodal] = useState(false);
    const [updatemodal,showupdatemodal] = useState(false);
    const [temp,settemp] = useState({});
    const SkillData = useSelector((state) => state.skill.value);

    const handleClick = (element) => {
        settemp(element);
        showupdatemodal(true);
    };

    return (
      <div className="skills flex pl-4 pr-4 pt-2 flex-col">
        <div className="flex">
          <AddSkillModal onClose={() => showaddmodal(false)} isVisible={addmodal} />
          {updatemodal && temp && (
            <UpdateSkillModal element={temp} onClose={() => {showupdatemodal(false);showaddmodal(false)}} isVisible={updatemodal} />
          )}
          <div className="cursor-pointer" onClick={() => showaddmodal(true)}>
            <h2 className="font-bold cursor-pointer">SKILLS</h2>
            <div className="flex flex-wrap w-[100%]">
              {SkillData && 
                  SkillData.map((element) => {
                      return (
                          <span key={element.id} className="skillelement mt-2 flex flex-row justify-between cursor-pointer mr-2" onClick={() => handleClick(element)}>
                              {element.content}
                          </span>
                      )
                  })
              }
            </div>
          </div>
        </div>
      </div>
    )
}

export default Skill;