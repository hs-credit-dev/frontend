import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { credits } from "../../../api_fake";
import disciplines from "../../../data/disciplines";


import Narrative from "./Narrative.jsx";
import Table from "../../../components/StripedTable";
import { useAtom } from 'jotai';
import { userInSession } from './../../../App';

import { ReactComponent as SortedTriangle } from '../assets/triangle.svg';

const Content = ({ type }) => {
    const [user] = useAtom(userInSession);
    const navigate = useNavigate();
    const [data, setData] = useState(credits.getAll(user.studentId)
        .map(c => [new Date(c.dateStaked).toLocaleDateString("en-US"), c.title, disciplines[c.discipline].name, c.rubric, c.status, <span className="hidden">{c.id}</span>]));

    const [dateSorted, setDateSorted] = useState(null);
    const [titleSorted, setTitleSorted] = useState(null);
    const [disciplineSorted, setDisciplineSorted] = useState(null);
    const [rubricSorted, setRubricSorted] = useState(null);
    const [statusSorted, setStatusSorted] = useState(null);

    if (!user) return <></>;

    switch (type) {
        case "credits":
            {
                return <Table
                    headers={[
                        <span onClick={() => {
                            if (!dateSorted) {
                                setData(data.sort((a, b) => new Date(a[0]) - new Date(b[0])));
                            } else {
                                setData(data.sort((a, b) => new Date(a[0]) - new Date(b[0])).reverse());
                            }
                            setDateSorted(!dateSorted);
                            setTitleSorted(null);
                            setDisciplineSorted(null);
                            setRubricSorted(null);
                            setStatusSorted(null);
                        }}
                            className='cursor-pointer select-none flex items-center place-content-center gap-2'>Date {dateSorted !== null && (dateSorted ? <SortedTriangle className="rotate-180" /> : <SortedTriangle />)}</span>,
                        <span onClick={() => {
                            if (!disciplineSorted) {
                                setData(data.sort((a, b) => a[2].localeCompare(b[2])));
                            } else {
                                setData(data.sort((a, b) => a[2].localeCompare(b[2])).reverse());
                            }
                            setDisciplineSorted(!disciplineSorted);
                            setDateSorted(null);
                            setTitleSorted(null);
                            setRubricSorted(null);
                            setStatusSorted(null);
                        }}
                            className='cursor-pointer select-none flex items-center place-content-center gap-2'>Discipline {disciplineSorted !== null && (disciplineSorted ? <SortedTriangle className="rotate-180" /> : <SortedTriangle />)}</span>,
                        <span onClick={() => {
                            if (!rubricSorted) {
                                setData(data.sort((a, b) => a[3]?.localeCompare(b[3])));
                            } else {
                                setData(data.sort((a, b) => a[3]?.localeCompare(b[3])).reverse());
                            }
                            setRubricSorted(!rubricSorted);
                            setDateSorted(null);
                            setTitleSorted(null);
                            setDisciplineSorted(null);
                            setStatusSorted(null);
                        }}
                            className='cursor-pointer select-none flex items-center place-content-center gap-2'>Rubric {rubricSorted !== null && (rubricSorted ? <SortedTriangle className="rotate-180" /> : <SortedTriangle />)}</span>,
                        <span onClick={() => {
                            if (!titleSorted) {
                                setData(data.sort((a, b) => a[1]?.localeCompare(b[1])));
                            } else {
                                setData(data.sort((a, b) => a[1]?.localeCompare(b[1])).reverse());
                            }
                            setTitleSorted(!titleSorted);
                            setDateSorted(null);
                            setDisciplineSorted(null);
                            setRubricSorted(null);
                            setStatusSorted(null);
                        }}
                            className='cursor-pointer select-none flex items-center place-content-center gap-2'>Title {titleSorted !== null && (titleSorted ? <SortedTriangle className="rotate-180" /> : <SortedTriangle />)}</span>,
                        <span onClick={() => {
                            if (!statusSorted) {
                                setData(data.sort((a, b) => a[4].localeCompare(b[4])));
                            } else {
                                setData(data.sort((a, b) => a[4].localeCompare(b[4])).reverse());
                            }
                            setStatusSorted(!statusSorted);
                            setDateSorted(null);
                            setTitleSorted(null);
                            setDisciplineSorted(null);
                            setRubricSorted(null);
                        }}
                            className='cursor-pointer select-none flex items-center place-content-center gap-2'>Status {statusSorted !== null && (statusSorted ? <SortedTriangle className="rotate-180" /> : <SortedTriangle />)}</span>,
                        ""]}
                    data={[
                        ...data,
                        [<></>, <></>, <p className="text-hsblue">Click to Initiate Credit</p>, <></>, <></>],
                    ]}
                    className="w-full"
                    trParams={{
                        className: "hover:bg-hsblue hover:cursor-pointer transition-colors",
                        onClick: (e) => {
                            const idElement = e.target.parentNode.children[5];
                            if (!idElement) {
                                navigate('/stake');
                                return;
                            }
                            const creditId = idElement.children[0].innerHTML;
                            navigate(`/credit?id=${creditId}`);
                        },
                    }}
                />;
            }
        case "narrative":
            {
                return <Narrative />;
            }
        default:
            {
                return <></>;
            }
    }
}

const DashboardContent = () => {
    const [type, setType] = useState("credits");

    const options = {
        credits: { value: "credits", html: <>Your Credits</> },
        narrative: { value: "narrative", html: <>Narrative</> },
    };

    return (
        <div className="w-full bg-white rounded-3xl font-semibold flex flex-col gap-4 pb-5 items-start">
            <select className="bg-transparent text-2xl focus:outline-none m-8 mb-4" onChange={(e) => { setType(e.target.value); }}>
                {
                    Object.values(options).map((t, i) => <option value={t.value} key={i}>{t.html}</option>)
                }
            </select>
            <Content type={type} />
        </div>
    )
};

export default DashboardContent;