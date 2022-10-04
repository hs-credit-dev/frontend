import { useState, useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";
import { isStudent, isTeacher } from 'util/api';
import * as students from 'api/students';
import * as teachers from 'api/teachers';
import { userInSession } from "App";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";
import Header from "components/Header";
import Spinner from "components/Spinner";
import NotFound from "pages/NotFound";


const Profile = () => {
  const [user] = useAtom(userInSession);
  const [searchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(true);
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    if (!user) {
      return navigate('/');
    }
  }, [user, navigate]);

  useEffect(() => {
    (async () => {
      const paramsId = searchParams.get('id');

      if (isStudent(user)) {
        const id = paramsId || user.studentId;
        const res = await students.get(id);
        const student = res?.data?.data?.student;
        setStudent(student);
      }
      else if (isTeacher(user)) {
        const id = paramsId || user.teacherId;
        const res = await teachers.get(id);
        const teacher = res?.data?.data?.teacher;
        setTeacher(teacher);
      }

      setIsSearching(false);
    })();
  }, [user, searchParams]);

  if (!user) {
    return <Navigate to="/" />;
  }

  if (isSearching)
    return (
      <>
        <div className="flex h-full justify-center items-center">
          <Spinner />
        </div>
      </>
    );

  return (
    <>
      <Header />
      {(() => {
        if (!student && !teacher) return <NotFound />

        if (isStudent(user)) {
          return <StudentProfile student={student} />;
        }
        else if (isTeacher(user)) {
          return <TeacherProfile teacher={teacher} />;
        }
        else {
          return <></>;
        }
      })()}
    </>
  );
};

export default Profile;
