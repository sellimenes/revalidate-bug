import { getSettings } from "@/lib/actionsSettings";
import Link from "next/link";

export default async function Home() {
  const settings = await getSettings();
  return (
    <div>
      <div>Website Name: {settings.WebsiteName}</div>
      <Link href="/change-settings" className="text-blue-500 underline">
        Change Settings
      </Link>
    </div>
  );
}
