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

const TeacherProfile = ({ teacher }) => {
    return <>
        <div className="m-8">
            <div className="grid grid-cols-2 gap-x-8">
                <HeaderField
                    label="School Name"
                    value={`${teacher.schoolName}`}
                />
                <HeaderField
                    label="CEEB Code"
                    value={`${teacher.ceebCode}`}
                />
                <HeaderField
                    label="School Website"
                    value={`${teacher.schoolWebsite}`}
                />
            </div>
        </div>
    </>;
};

export default TeacherProfile;