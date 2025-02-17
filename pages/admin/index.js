import withRoleProtection from "@/app/components/withRoleProtection";

function AdminPage() {
  return <h1>Admin Dashboard - Only for Admins</h1>;
}

export default withRoleProtection(AdminPage, ["admin"]);
