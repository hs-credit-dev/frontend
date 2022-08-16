import React, { useState, useEffect } from "react";
// import axios from "axios";


const DashboardTable = (props) => {
    
    // const [data, setData] = useState("");

    // useEffect(() => {
    //     axios("api")
    //       .then((res) => {
    //         setData(res.data);
    //       })
    //       .catch((err) => console.log(err))
    // }, []);

    const data = [
        { id : 1, detail1: "5/13/22", detail2: "Intro to Biology", detail3: "Science", detail4: "n/a", detail5: "IP"},
        { id : 2, detail1: "7/7/22", detail2: "Chemistry", detail3: "Science", detail4: "n/a", detail5: "Complete"},
        { id : 3, detail1: "-", detail2: "-", detail3: "-", detail4: "-", detail5: "-"},
        { id : 4, detail1: "-", detail2: "-", detail3: "-", detail4: "-", detail5: "-"},
        { id : 5, detail1: "-", detail2: "-", detail3: "-", detail4: "-", detail5: "-"},
        { id : 6, detail1: "-", detail2: "-", detail3: "-", detail4: "-", detail5: "-"},
        { id : 7, detail1: "-", detail2: "-", detail3: "-", detail4: "-", detail5: "-"},
        { id : 8, detail1: "-", detail2: "-", detail3: "-", detail4: "-", detail5: "-"}
    ]

    const dark = (num) => {return !(num%2===0);}

    return (
        <>
            <table className='w-full mt-6'>
                <tr className='text-center bg-hsbeige'>
                    <th></th>
                    <th>{props.header1}</th>
                    <th>{props.header2}</th>
                    <th>{props.header3}</th>
                    <th>{props.header4}</th>
                    <th>{props.header5}</th>                    
                </tr>
                {data.map((row) => (
                    <tr className={`text-center font-normal
                        ${dark(row.id) ? "" : "bg-hsbeige"}
                    `}>
                        <td>{row.id}</td>
                        <td>{row.detail1}</td>
                        <td>{row.detail2}</td>
                        <td>{row.detail3}</td>
                        <td>{row.detail4}</td>
                        <td>{row.detail5}</td>
                    </tr>
                ))}
            </table>
        </>
    )

}

export default DashboardTable;