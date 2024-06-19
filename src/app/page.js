"use client"
import { saveAs } from "file-saver"
import { useEffect } from "react"

const page = () => {
  
 
    const printFileLocation = "images/test.jpg"
    const randomFilename = `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`

    const saveAndPrintFile = () => {
    fetch(printFileLocation)
      .then((response) => response.blob())
      .then((blob) => {
        // Use FileSaver to save the file
        saveAs(blob, `${randomFilename}.jpg`)
      })
      .then(() => console.log("printed"))
    // Convert text to a Blob object
    
    // Generate a random filename
    
    // Save the Blob as a file with the random filename
  }

  useEffect(() => {
    saveAndPrintFile()

    // Interval to trigger saveAndPrintFile every 30 seconds (30000ms)
    const interval = setInterval(saveAndPrintFile, 30000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, []) // Empty dependency array ensures it runs only on mount

  return (
    <div>
      <h1>Test d'impression SUNMI</h1>
    </div>
  )
}


export default page
