
const transpileToSolidity = (jsCode) => {
    
    let solidityCode = jsCode.replace(/function/g, 'function');
    solidityCode = solidityCode.replace(/let/g, 'uint');
    
    
    if (!jsCode) {
      throw new Error('Input code is empty. Please provide JavaScript-like code.');
    }
  
    
    return solidityCode;
  };
  
  export default transpileToSolidity;
  
