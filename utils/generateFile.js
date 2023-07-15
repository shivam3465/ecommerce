import fs from 'fs';

export const generateFile= async (code,language,filePath)=>{

    fs.writeFile(filePath,code,(err,result)=>{
        if(err){
            console.log(err);
            return err;
        }    
      return filePath
    });
}