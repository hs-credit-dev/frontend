import StripedTable from "../../components/StripedTable";
import { useAtom } from 'jotai';

import { userInSession } from "../../App";
import { credits } from "../../api_fake";

const HeaderField = ({ label, value }) => {
    return (
        <>
            <span className="flex items-center">
                <label className="font-bold mr-2">{label}:</label>
                <p>{value}</p>
            </span>
        </>
    );
};


const StudentProfile = ({ student }) => {
    const [user] = useAtom(userInSession);

    const data = credits.getAll(user.studentId)
        .filter(c => {
            return c.status.toLowerCase() === "minted";
        })
        .map(c => [new Date(c.dateStaked).toLocaleDateString("en-US"), c.title, c.discipline, '']);

    return <>
        <div className={`bg-hsbg py-8 px-16 flex flex-col min-h-full`}>
            <div className="flex mb-16">
                <div className="grid grid-cols-2 gap-x-8">
                    { }
                    <HeaderField
                        label="Name"
                        value={`${user.firstName} ${user.lastName}`}
                    />
                    <HeaderField label="School Name" value={student.schoolName} />
                    <HeaderField
                        label="DOB"
                        value={new Date(student.dob).toLocaleDateString()}
                    />
                    <HeaderField label="CEEB Code" value={student.ceebCode} />
                    <HeaderField label="ID" value={student.id} />
                </div>
                <div className="ml-auto"></div>
            </div>
            <h2 className="font-bold text-lg">Summary</h2>
            <div className="bg-white rounded-lg m-8 p-4 flex flex-col gap-2 text-xs">
                <p>
                    {student.narrative}
                </p>
            </div>
            <h2 className="font-bold text-lg mb-4">Minted Credits</h2>
            <div>
                <StripedTable
                    headers={["Date", "Title", "Field", "Skill set"]}
                    data={data}
                    className="w-full"
                />
            </div>
        </div>
    </>;
};

export default StudentProfile;