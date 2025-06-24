import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import React from "react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <span>Multi Tenant Blog App</span>

      <div className="flex gap-3">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
