function Table() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800">
          TN Eb Calculation Table
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Subheader */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600">
            Consumption Upto 400 Units
          </h2>
        </div>

        {/* Table */}
        <table className="w-full table-auto border-collapse border border-slate-500">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-slate-600 px-4 py-2 text-left">
                Units From
              </th>
              <th className="border border-slate-600 px-4 py-2 text-left">
                To Units
              </th>
              <th className="border border-slate-600 px-4 py-2 text-left">
                Units Cost / KWH
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">1</td>
              <td className="border border-slate-600 px-4 py-2">100</td>
              <td className="border border-slate-600 px-4 py-2">0</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">101</td>
              <td className="border border-slate-600 px-4 py-2">200</td>
              <td className="border border-slate-600 px-4 py-2">2.25</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">201</td>
              <td className="border border-slate-600 px-4 py-2">400</td>
              <td className="border border-slate-600 px-4 py-2">4.50</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">401</td>
              <td className="border border-slate-600 px-4 py-2">500</td>
              <td className="border border-slate-600 px-4 py-2">6.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Subheader */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-600">
            Consumption Above 500 Units
          </h2>
        </div>

        {/* Table */}
        <table className="w-full table-auto border-collapse border border-slate-500">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-slate-600 px-4 py-2 text-left">
                Units From
              </th>
              <th className="border border-slate-600 px-4 py-2 text-left">
                To Units
              </th>
              <th className="border border-slate-600 px-4 py-2 text-left">
                Units Cost / KWH
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">1</td>
              <td className="border border-slate-600 px-4 py-2">100</td>
              <td className="border border-slate-600 px-4 py-2">0</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">101</td>
              <td className="border border-slate-600 px-4 py-2">400</td>
              <td className="border border-slate-600 px-4 py-2">4.50</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">401</td>
              <td className="border border-slate-600 px-4 py-2">500</td>
              <td className="border border-slate-600 px-4 py-2">6.00</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">501</td>
              <td className="border border-slate-600 px-4 py-2">600</td>
              <td className="border border-slate-600 px-4 py-2">8.00</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">601</td>
              <td className="border border-slate-600 px-4 py-2">800</td>
              <td className="border border-slate-600 px-4 py-2">9.00</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-slate-600 px-4 py-2">801</td>
              <td className="border border-slate-600 px-4 py-2">1000</td>
              <td className="border border-slate-600 px-4 py-2">10.00</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <th
                className="border border-slate-600 px-4 py-2 text-left"
                colSpan="2"
              >
                Above 1000 Units
              </th>
              <td className="border border-slate-600 px-4 py-2">11.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
