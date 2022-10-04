import { useState, forwardRef, useEffect } from "react";
import qr from "qrcode";
import { Typography } from "@material-tailwind/react";

import * as credits from "api/credits";

import StripedTable from "components/StripedTable";

import background from "../assets/transcript-bg.svg";
import logo from "../../../assets/svg/hsc-logo-no-text.svg";

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

const FooterElement = ({ children, className, ...props }) => {
  return (
    <>
      <Typography className={`text-xs font-bold ${className}`} {...props}>
        {children}
      </Typography>
    </>
  );
};

/**
 * Printable Transcript component
 */
const Transcript = forwardRef(({ user, student, className }, ref) => {
  const [qrCode, setQrCode] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {

    (async () => {
      const res = await credits.getMine();
      const data = res.data.data;
      setData(data?.filter(c => {
        return c.status?.toLowerCase() === "minted";
      })
        ?.map(c => [new Date(c.dateStaked).toLocaleDateString("en-US"), c.title, c.discipline, '']));
    })();
  }, []);

  if (!user || !student) return <></>;

  const { firstName, lastName } = user;
  const { schoolName, dob, ceebCode, id } = student;

  if (!qrCode) {
    qr.toDataURL(`${window.location.origin}/profile?id=${id}`).then(code => {
      setQrCode(code);
    })
  }

  return (
    <div
      ref={ref}
      className={`bg-hsbg py-8 px-16 flex flex-col min-h-full  ${className}`}
    >
      <img
        src={background}
        alt=""
        className="opacity-5 absolute left-0 top-0 w-screen h-screen"
      />
      <h1 className="self-center text-lg font-bold mb-16">
        Permanent Transcript
      </h1>
      <div className="flex mb-16">
        <div className="grid grid-cols-2 gap-x-8">
          <HeaderField label="Name" value={`${firstName} ${lastName}`} />
          <HeaderField label="School Name" value={schoolName} />
          <HeaderField label="DOB" value={new Date(dob).toLocaleDateString()} />
          <HeaderField label="CEEB Code" value={ceebCode} />
          <HeaderField label="ID" value={id} />
        </div>
        <div className="ml-auto">
          <img src={qrCode} alt="qr code" className="w-20" />
        </div>
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
      <div className={`flex items-center gap-x-2 pt-8 mt-auto`}>
        <img src={logo} alt="logo" className="h-9" />
        <FooterElement>Powered by hs.credit</FooterElement>
        <FooterElement>|</FooterElement>
        <FooterElement>
          <a href="http://www.hs.credit">www.hs.credit</a>
        </FooterElement>
        <FooterElement>|</FooterElement>
        <FooterElement>© 2022 Academic Capital Foundation, Inc.</FooterElement>
      </div>
    </div>
  );
});

export default Transcript;
