"use client"
import Navbar from "@/app/components/Navbar"
import React from "react"

const Organization = () => {
  const [blogTitle, setBlogTitle] = React.useState("")
  const [blogContent, setBlogContent] = React.useState("")
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      Organization

      <input
        onChange={(e) => setBlogTitle(e.target.value)}
        className="border border-black w-xl"
        placeholder="Blog title"
      />
      <textarea
      value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
        className="border border-black w-xl"
        placeholder="Blog content"
      />
      <button className="bg-black p-2 rounded-md text-white mt-2">
        Create Blog
      </button>
    </div>
  )
}

export default Organization
