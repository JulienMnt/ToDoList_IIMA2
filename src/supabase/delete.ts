import supabase from "./init.js";
import user from "./login.js";
 
const deleteUser = async () => {
  const userLogged = await user;
  if (!userLogged) {
    return false;
  }
 
  const response = await supabase
    .from("user")
    .delete()
    .eq("id", "6b749609-8cf3-4611-a6d9-91a6c339b3b8");
 
  return response;
};
 
const userDeleted = deleteUser();