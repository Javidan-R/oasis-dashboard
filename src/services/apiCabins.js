import supabase from "./supabase";

export async function getCabins() {
  try {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Cabins could not be loaded");
    }

    console.log("Cabins data:", data);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    throw new Error("Cabins could not be loaded");
  }
}