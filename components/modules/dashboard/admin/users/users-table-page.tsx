import { getUsers } from "@/actions/get-users";
import { AdminUsersColumns } from "./users-columns";
import { AdminUsersDataTable } from "./users-data-table";

async function UsersTablePage() {
  const res = await getUsers();

  return (
    <div className="px-2 md:px-6 my-6">
      <AdminUsersDataTable data={res.data} columns={AdminUsersColumns} />
    </div>
  );
}

export default UsersTablePage;
