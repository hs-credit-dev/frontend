import { useState } from "react";
import { NavLink } from 'react-router-dom';

import { credits } from "../../../api_fake";

import Narrative from "./Narrative.jsx";
import Table from "../../../components/StripedTable";
import { useAtom } from 'jotai';
import { userInSession } from './../../../App';

const types = {
    "narrative": { value: "narrative", html: <>Narrative</> },
    "minted": { value: "minted", html: <>Minted Credits</>, to: "/mint" },
    "staked": { value: "staked", html: <>Staked Credits</>, to: "/stake" },
    "all": { value: "all", html: <>Your Credits</>, to: "/stake" },
    "unaccepted": { value: "unaccepted", html: <>Unaccepted Credits</>, to: "/stake" },
};

const DashboardContent = () => {
    const [user] = useAtom(userInSession);
    const [type, setType] = useState("narrative");

    const handleType = (e) => {
        setType(e.target.value);
    };

    const renderDashboard = () => {
        switch (type) {
            case "narrative":
                return <Narrative />;
            default:
                const data = credits.getAll(user.studentId)
                    .filter(c => {
                        if (type.toLocaleLowerCase() === "all") return true;
                        return c.status.toLowerCase() === type.toLocaleLowerCase();
                    })
                    .map(c => [new Date(c.dateStaked).toLocaleDateString("en-US"), c.title, c.discipline, c.rubric, c.status]);

                return <Table
                    headers={["Date", "Title", "Discipline", "Rubric", "Status"]}
                    data={[
                        ...data,
                        [<></>, <></>, <NavLink to={types[type].to ? types[type].to : "/stake"} className="text-hsblue">Click to Initiate Credit</NavLink>, <></>, <></>],
                    ]}
                    className="w-full "
                />;
        }
    };

    return (
        <div className="w-full bg-white rounded-3xl font-semibold flex flex-col gap-4 pb-5 items-start">
            <select className="bg-transparent text-2xl focus:outline-none m-8 mb-4" onChange={handleType}>
                {
                    Object.values(types).map((t, i) => <option value={t.value} key={i}>{t.html}</option>)
                }
            </select>
            {renderDashboard(type)}

        </div>
    )
};

export default DashboardContent;