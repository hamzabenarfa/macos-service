"use client"
//@ts-ignore
const MacBookTable = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="">
          <th className="py-2 px-2 border-b">Attribute</th>
          <th className="py-2 px-2 border-b">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key} className="">
            <td className="py-1 px-2 border-b font-semibold w-1/3">{key}</td>
            
            <td className="py-1 px-2 border-b w-2/3">{value as React.ReactNode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default MacBookTable;
