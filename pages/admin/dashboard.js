import withRole from "@/utils/withRole";

function AdminDashboard() {
  return <h1>Welcome, Admin!</h1>;
}

export default withRole(AdminDashboard, ["admin"]);
