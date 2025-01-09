import supabase from "./init.js";
import user from "./login.js";
import { hashPassword } from "./hash.js";
 
const updateUser = async () => {
  const userLogged = await user;
  if (!userLogged) {
    return false;
  }
 
  const pwd = await hashPassword("plainPassword");
  const { data, error } = await supabase
    .from("user")
    .update({
      password: pwd,
    })
    .eq("id", "6b749609-8cf3-4611-a6d9-91a6c339b3b8")
    .select();
 
  if (error) {
    console.error(error);
    return false;
  }
 
  console.log(data);
  return true;
};
 
const userUpdated = updateUser();