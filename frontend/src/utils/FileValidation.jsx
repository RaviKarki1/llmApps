
const validateFile = (file) => {
    const allowedtypes=[
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]
    return (allowedtypes.includes(file.type))
}

export default validateFile
