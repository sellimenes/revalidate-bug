"use client";

import { changeSettings } from "@/lib/actionsSettings";
import React from "react";
import Link from "next/link";

type Props = {};

const ChangeSettingsPage = (props: Props) => {
  const [websiteName, setWebsiteName] = React.useState("");
  const handleSubmit = () => {
    changeSettings({ WebsiteName: websiteName });
  };
  return (
    <div className="flex flex-col gap-2">
      <Link href="/" className="text-blue-500 underline">
        Main Page
      </Link>
      <input
        type="text"
        placeholder="Website Name"
        onChange={(e) => setWebsiteName(e.target.value)}
        className="p-2 border border-gray-300 rounded-md text-black"
      />
      <button onClick={handleSubmit} className="bg-blue-500 p-2 ">
        Change Settings
      </button>
    </div>
  );
};

export default ChangeSettingsPage;
