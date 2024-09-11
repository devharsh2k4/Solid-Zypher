import React, { useState } from 'react';
import transpileToSolidity from './utils/transpiler'; // Import the transpiler function from your utility file

const Transpiler = () => {
  const [jsCode, setJsCode] = useState('');
  const [solidityCode, setSolidityCode] = useState('');

  const handleTranspile = () => {
    try {
      const output = transpileToSolidity(jsCode);
      setSolidityCode(output);
    } catch (error) {
      setSolidityCode(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">JavaScript to Solidity Transpiler</h1>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter your JavaScript-like code here..."
        value={jsCode}
        onChange={(e) => setJsCode(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleTranspile}
      >
        Transpile to Solidity
      </button>
      {solidityCode && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Transpiled Solidity Code</h2>
          <pre className="bg-gray-100 p-4 border border-gray-300 rounded">
            {solidityCode}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Transpiler;
