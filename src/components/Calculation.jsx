import React, { useState } from 'react';

function Calculation() {
    const [fromUnits, setFromUnits] = useState('');
    const [toUnits, setToUnits] = useState('');
    const [billAmount, setBillAmount] = useState(null);

    // Function to calculate the electricity bill
    const calculateBill = (units) => {
        let billAmount = 0;

        if (units <= 500) {
            if (units <= 100) {
                billAmount = 0;
            } else if (units <= 200) {
                billAmount = (units - 100) * 2.35;
            } else if (units <= 400) {
                billAmount = 100 * 2.35 + (units - 200) * 4.70;
            } else {
                billAmount = 100 * 2.35 + 200 * 4.70 + (units - 400) * 6.30;
            }
        } else {
            if (units <= 600) {
                billAmount = (300 * 4.70) + ((units - 400) * 6.30);
            } else if (units <= 800) {
                billAmount = (300 * 4.70) + (100 * 6.30) + ((units - 500) * 8.40);
            } else if (units <= 1000) {
                billAmount = (300 * 4.70) + (100 * 6.30) + (100 * 8.40) + ((units - 600) * 9.45);
            } else {
                billAmount = (300 * 4.70) + (100 * 6.30) + (100 * 8.40) + (200 * 9.45) + ((units - 1000) * 10.50);
            }
        }

        return billAmount.toFixed(2);  // Round to 2 decimal places
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const unitsUsed = Number(toUnits) - Number(fromUnits);

        if (unitsUsed > 0) {
            const result = calculateBill(unitsUsed);
            setBillAmount(result);
        } else {
            setBillAmount("Invalid input. Please enter correct values.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white print:bg-transparent print:border-none print:shadow-none">
            <h1 className="text-2xl font-bold text-center mb-6 print:text-black">TN EB Calculation</h1>

            <form onSubmit={handleSubmit} className="print:text-black">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 print:text-black">
                        Units From
                    </label>
                    <input 
                        type="number" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 print:border-black"
                        placeholder="Enter start units"
                        value={fromUnits}
                        onChange={(e) => setFromUnits(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 print:text-black">
                        To Units
                    </label>
                    <input 
                        type="number" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 print:border-black"
                        placeholder="Enter end units"
                        value={toUnits}
                        onChange={(e) => setToUnits(e.target.value)}
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-200 print:hidden"
                >
                    Calculate
                </button>
            </form>

            {billAmount !== null && (
                <div className="mt-6 p-4 border border-green-500 rounded-lg bg-green-100 text-green-800 print:border-black print:text-black">
                    <h2 className="text-lg font-semibold">Total Bill Amount:</h2>
                    <p className="text-2xl font-bold">₹ {billAmount}</p>
                </div>
            )}
        </div>
    );
}

export default Calculation;
