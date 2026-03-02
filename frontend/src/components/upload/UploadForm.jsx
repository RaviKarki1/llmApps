import { useState } from "react";
import FileUploadBox from "./FileUploadBox";
import validateFile   from "../../utils/fileValidation";

function UploadForm(){
    const [resume, setResume] = useState(null);
    const [jobdescription, seetJobDescription] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!resume || ! jobdescription){
            alert("Please upload both the files");
            return;
        }

        console.log("Resume: ", resume)
        console.log("jobDescription: ", jobdescription)
    }


    return(
        <form onSubmit={handleSubmit}>
            <FileUploadBox
                label="upload your resume (PDF/DOCX)"
                onFileSelect={(file) => {
                    if(validateFile(file)){
                        setResume(file);
                    }else{
                        alert("Invalid file type")
                    }
                }}
            />

            <FileUploadBox
                label="upload the job description"
                onFileSelect={(file) => {
                    if(validateFile(file)){
                        seetJobDescription(file)
                    }else{
                        alert("Invalid file type")
                    }
                }}
            />

            <button type="submit" >Submit</button>
        </form>
    )
}

export default UploadForm;