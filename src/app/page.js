"use client"
import { saveAs } from "file-saver"
import { useEffect } from "react"

const page = () => {
  const printFileLocation = "images/test.png"

  const saveAndPrintFile = () => {
    // Fetch the file from the server
    fetch(printFileLocation)
      .then((response) => response.blob())
      .then((blob) => {
        // Use FileSaver to save the file
        saveAs(blob, "print.png")
      })
      .then(() => console.log("printed"))
  }

  useEffect(() => {
    // Interval to trigger saveAndPrintFile every minute (60000ms)
    const interval = setInterval(saveAndPrintFile, 60000)

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
