import { useState } from "react";
import SummaryModal from "../Modals/SummaryModal";
import Education from "./ContentComponents/Education";
import Project from "./ContentComponents/Project";

function Content() {
    const [summary, setSummary] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos nam molestias autem, iure provident, maxime reiciendis repellendus, doloremque facere sint atque ratione ducimus. Impedit nulla sint earum accusamus eum?")
    const [Summarymodal, showSummaryModal] = useState(false);

    return (
        <div className="Content">
            <div className="Summary flex p-4 cursor-pointer" onClick={() => showSummaryModal(true)}>
                <SummaryModal summary={summary} setSummary={setSummary} onClose={() => showSummaryModal(false)} isVisible={Summarymodal} />
                <div className="pl-2">
                    <h2 className="font-bold">Summary</h2>
                    <p className="mt-2 text-justify">{summary}</p>
                </div>
            </div>
            <Education />
            <Project />
        </div>
    )
}

export default Content;