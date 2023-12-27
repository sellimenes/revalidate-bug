"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const getSettings = async () => {
  const res = await fetch(
    "https://shadecom-backend-production.up.railway.app/api/settings",
    {
      next: {
        tags: ["settings"],
      },
    }
  );
  const data = await res.json();
  return data;
};

export const revalidateSettings = () => {
  revalidateTag("settings");
  console.log("revalidate settings");
};

export const changeSettings = async (settings: any) => {
  const res = await fetch(
    "https://shadecom-backend-production.up.railway.app/api/settings",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    }
  );
  revalidateTag("settings");
  //   revalidatePath("/", "layout");
  const data = await res.json();
  return data;
};
