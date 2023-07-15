import { exec } from "child_process";
import path from "path";

const outputPath = path.join(path.resolve(), "/output");

export const execute = (filepath) => {
  // const jobId = path.basename(filepath).split(".")[0];
  // const outPath = path.join(outputPath, `${jobId}.exe`);
  
  // const oldCommand = `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.exe`;
  const oldCommand = `g++ prac.cpp -o prac.exe && prac.exe`;


  return new Promise((resolve, reject) => {
    exec(
      oldCommand,
      (error, stdout, stderr) => {
        // error && reject({ error, stderr });
        if (error) {
          if (error.code === 1) {
            resolve(stdout);
          } else {            
            reject(error);
          }
        } 
        stderr && reject(stderr);        
        resolve(stdout);
      }
      );
    });
  };
  
  // console.log("this is output: ",`g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.exe`);

const run=async()=>{
  try{
    const output=await execute("filepath");
    console.log("output is ",output);
    
  }
  catch(err){
console.log(err.message);

  }
}
run();