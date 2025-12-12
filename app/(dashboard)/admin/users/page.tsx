import UsersTablePage from "@/components/modules/dashboard/admin/users/users-table-page";
import { SectionCards } from "@/components/section-cards";

function ManageUser() {
  return (
    <div className="py-4 md:py-6 flex flex-col ">
      <SectionCards />
      <UsersTablePage />
    </div>
  );
}

export default ManageUser;
