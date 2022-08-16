import { useState } from "react";

import StudentNarrative from "./StudentNarrative.jsx";
import DashboardTable from "./DashboardTable.jsx";
import NotFound from "../../NotFound";

const DashboardContent = () => {
    const [type, setType] = useState("");

    const handleType = (e) => {
        setType(e.target.value);
        // console.log(type);
    };

    const renderDashboard = () => {
        console.log(type);

        switch (type) {
            case "narrative":
                return <StudentNarrative />;
            case "minted-credits":
                return <DashboardTable 
                        header1={"Date"}
                        header2={"Title"}
                        header3={"Discipline"}
                        header4={"Rubric"}
                        header5={"Status"}
                    />;
            case "staked-credits":
                return <DashboardTable 
                        header1={"Date"}
                        header2={"Title"}
                        header3={"Discipline"}
                        header4={"Rubric"}
                        header5={"Status"}
                    />;
            case "your-credits":
                return <DashboardTable 
                        header1={"Date"}
                        header2={"Title"}
                        header3={"Discipline"}
                        header4={"Rubric"}
                        header5={"Status"}
                    />;
            case "unaccepted-credits":
                return <DashboardTable 
                        header1={"Date"}
                        header2={"Title"}
                        header3={"Discipline"}
                        header4={"Rubric"}
                        header5={"Status"}
                    />;
            default:
                return <StudentNarrative />;
            }
    };

    return (
        <div className="bg-white mx-auto mt-4 w-11/12 h-96 rounded-3xl pt-6 px-12 font-semibold">
            <select className="bg-white text-2xl focus:outline-none" onChange={handleType}>
                <option value="narrative">Narrative</option>
                <option value="minted-credits">Minted Credits</option>
                <option value="staked-credits">Staked Credits</option>
                <option value="your-credits">Your Credits</option>
                <option value="unaccepted-credits">Unaccepted Credits</option>
            </select>

            {renderDashboard(type)}

        </div>
    )
};

export default DashboardContent;