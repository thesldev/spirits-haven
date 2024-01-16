import AdminNav from "../components/admin/AdminNav";
import AdminNavItem from "../components/admin/AdminNavItem";

export const metadata = {
  title: "SPIRIT-HAVEN Admin",
  description: "SPIRIT~HAVEN Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
