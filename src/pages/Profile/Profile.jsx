import { useState, useEffect } from "react";
import { useAtom } from "jotai";

import { students } from "../../api";
import { userInSession } from "./../../App";
import { Navigate } from "react-router-dom";
import StripedTable from "./../../components/StripedTable";
import TopNavBar from "./../../components/NavBars/TopNavBar";
import Spinner from "./../../components/Spinner";

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

const Profile = () => {
  const [user] = useAtom(userInSession);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    (async () => {
      if (!user) return;

      const { studentId } = user;
      const res = await students.get(studentId);
      const { student } = res.data.data;
      setStudent(student);
    })();
  }, [user]);

  if (user && !student)
    return (
      <>
        <div className="flex h-full justify-center items-center">
          <Spinner />
        </div>
      </>
    );

  return (
    <>
      {!user ? (
        <Navigate to="/" />
      ) : (
        <>
          <TopNavBar />
          <div className={`bg-hsbg py-8 px-16 flex flex-col min-h-full`}>
            <div className="flex mb-16">
              <div className="grid grid-cols-2">
                {}
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
                HS.CREDIT uses an inverted credit and assessment model to
                incentivize critical thinking in our high schools as well as to
                prepare students for a digital society. The word “inverted” here
                is used in the same sense that the internet inverted publishing,
                allowing any user to distribute content globally without first
                being approved by a major publisher. Or the way bitcoin has
                inverted banking, allowing users to become their own banks.
              </p>
              <p>
                Inversion turns the top-down, corporate chain of command on its
                head, putting a “crowd” of end-users in charge. Instead of
                trusting a central authority to design and produce products,
                inverted platforms allow anyone to contribute. Using search and
                sort algorithms, the platform is able to match these
                user-generated assets with interested consumers.
              </p>
              <p>
                HS.CREDIT uses an inverted credit and assessment model to
                incentivize critical thinking in our high schools as well as to
                prepare students for a digital society. The word “inverted” here
                is used in the same sense that the internet inverted publishing,
                allowing any user to distribute content globally without first
                being approved by a major publisher. Or the way bitcoin has
                inverted banking, allowing users to become their own banks.
              </p>
              <p>
                Inversion turns the top-down, corporate chain of command on its
                head, putting a “crowd” of end-users in charge. Instead of
                trusting a central authority to design and produce products,
                inverted platforms allow anyone to contribute. Using search and
                sort algorithms, the platform is able to match these
                user-generated assets with interested consumers.
              </p>
            </div>
            <h2 className="font-bold text-lg mb-4">Minted Credits</h2>
            <div>
              <StripedTable
                headers={["Date", "Title", "Field", "Skill set"]}
                data={[
                  ["12/20/22", "Intro to Biology", "Science", "AP"],
                  ["12/20/22", "Chemistry", "Science", "AP"],
                  ["5/7/23", "Civil Engineering", "Engineering", ""],
                ]}
                className="w-full"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
