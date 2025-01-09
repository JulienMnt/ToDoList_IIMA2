import supabase from "./../init.js";
import user from "./../login.js";
 
const getUser = async (id: string) => {
  const userLogged = await user;
  if (!userLogged) {
    return false;
  }
 
  const { data, error } = await supabase
    .from("user")
    .select("id")
    .eq("id", id)
    .limit(1);
 
  if (error) {
    console.error(error);
    return false;
  }
 
  console.log(data);
  return data;
};




const insertTask = async (title: string, description: string, userId: string) => {
    const userLogged = await user;
    if (!userLogged) {
      return false;
    }

    const dbUser = await getUser(userId);

    if (!dbUser || dbUser.length === 0) {
      return false;
    }

    const { error } = await supabase.from("task").insert({
      title: title,
      description: description,
      state: false,
      user: dbUser[0].id,
    });

    if (error) {
      console.error(error);
      return false;
    }

    return true;
  };

  const commentInserted = insertTask(
    "Hello World",
    "This is a test",
    "e463c682-a1a0-4c55-89b4-9ec655e1624c"
  );