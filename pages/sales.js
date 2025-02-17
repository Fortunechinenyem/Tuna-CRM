import withRoleProtection from "@/app/components/withRoleProtection";

function SalesPage() {
  return <h1>Sales Dashboard - Only for Sales Team</h1>;
}

export default withRoleProtection(SalesPage, ["sales", "admin"]);
