"use client"
import { saveAs } from "file-saver"
import { useEffect } from "react"

const page = () => {
  const textToPrint = "Is this the real life ?"
  
  const saveAndPrintText = () => {
    // Convert text to a Blob object
    const blob = new Blob([textToPrint], { type: "text/plain;charset=utf-8" })
    
    // Generate a random filename
    const randomFilename = `${Math.random().toString(36).substr(2, 9)}-${Date.now()}.png`
    
    // Save the Blob as a file with the random filename
    saveAs(blob, randomFilename)
  }

  useEffect(() => {
    saveAndPrintText()

    // Interval to trigger saveAndPrintFile every 30 seconds (30000ms)
    const interval = setInterval(saveAndPrintText, 30000)

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
