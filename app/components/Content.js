import { useState } from "react";
import SummaryModal from "../Modals/SummaryModal";

function Content() {
    const [summary,setSummary] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos nam molestias autem, iure provident, maxime reiciendis repellendus, doloremque facere sint atque ratione ducimus. Impedit nulla sint earum accusamus eum?")
    const [modal,showModal] = useState(false);
    return (
        <div className="Content">
            <div className="Summary flex p-4 cursor-pointer" onClick={() => showModal(true)}>
                <SummaryModal summary={summary} setSummary={setSummary} onClose={() => showModal(false)} isVisible={modal} />
                <div className="pl-2">
                    <h2 className="font-bold">Summary</h2> <hr className="contenthr"/>
                    <p className="mt-2 text-justify">{summary}</p>
                </div>
            </div>
            <div className="Education p-4">
                <div className="pl-2">
                    <h2 className="font-bold">Education<button className="bg-yellow-500 text-white font-normal p-2 text-[10px] ml-[550px] mb-1">Add Education</button></h2> 
                    <hr className="contenthr" />
                </div>
            </div>
        </div>
    )
}

export default Content;