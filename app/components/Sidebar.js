import { useState } from "react";
import InfoModal from "../Modals/InfoModal";
import Link from "./SidebarComponents/Link";
import Skill from "./SidebarComponents/Skill";

function Sidebar() {
  const [Addr, setAddr] = useState(
    "1515 Pacific Ave,Los Angeles, CA 90291, United States"
  );
  const [Email, setEmail] = useState("email@gmail.com");
  const [phNo, setphNo] = useState("9999999999");
  const [modal, showModal] = useState(false);

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
      
      <Link />
      <Skill />
    </div>
  );
}

export default Sidebar;
