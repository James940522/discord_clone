"use client"
import { X } from "lucide-react"
import Image from "next/image"

import { UploadDropzone } from "@/lib/uploadthing"

import "@uploadthing/react/styles.css"

interface FileUploadProps {
  onChange: (url?: string) => void
  value: string
  endPoint: "messageFile" | "serverImage"
}

export const FileUpload = ({ onChange, value, endPoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop()

  if (value && fileType !== "pdf") {
    return (
      <div className='relative flex justify-center items-center h-20 w-20'>
        <Image fill src={value} alt='Upload' className='rounded-full' />
      </div>
    )
  }

  return (
    <UploadDropzone
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => {
        console.log(error)
      }}
    />
  )
}
