function FileUploadBox({label, onFileSelect}){
    return(
       <div>
        <label>{label}</label>
        <input 
            type="file"
            accept=".pdf, .docx"
            onChange={(e) => {
                if(e.target.files && e.target.files[0]){
                    onFileSelect(e.target.files[0])
                }
            }}
        />
       </div>
    )
}

export default FileUploadBox;