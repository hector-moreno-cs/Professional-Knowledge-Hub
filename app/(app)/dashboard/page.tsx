import { redirect } from "next/navigation";

import { auth } from "@/modules/auth/lib/auth";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
};

export default DashboardPage;