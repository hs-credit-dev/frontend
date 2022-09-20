/**
 * Table with alternating colors & numbered rows.
 * 'data' in props must be a 2 dimensional array.
 * the first row in 'data' are the headers.
 */
const StripedTable = ({ headers, data, className, trParams }) => {
  return (
    <>
      <div className={`flex ${className}`}>
        <table>
          <thead>
            <tr>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {[...Array(data.length + 1)].map((_, i) => (
              <tr key={i}>
                <td className="p-2">{i === 0 ? " " : i}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className={`text-center w-full`}>
          <thead className="bg-hsbeige">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="p-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                {...trParams}
                className={`font-normal ${i % 2 === 0 ? "bg-white" : "bg-hsbeige"
                  } ${trParams?.className}`
                }
              >
                {row.map((d, j) => (
                  <td key={j} className="p-2">
                    {d}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StripedTable;
