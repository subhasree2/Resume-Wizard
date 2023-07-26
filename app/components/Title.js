import { useState } from "react";
import TitleModal from "../Modals/TitleModal";

function Title() {
  const [name, setName] = useState("Emily Carter");
  const [desc, setDesc] = useState("Software Developer");
  const [modal, showModal] = useState(false);

  return (
    <div className="Title text-center p-6 mb-10 mt-5 cursor-pointer" onClick={() => showModal(true)}>
      <TitleModal name={name} setName={setName} desc={desc} setDesc={setDesc} onClose={() => showModal(false)} isVisible={modal}/>
      <div className="Name uppercase mb-3 text-2xl font-bold">{name}</div>
      <div className="Description uppercase font-semibold">{desc}</div>
    </div>
  );
}

export default Title;
