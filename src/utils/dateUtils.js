// a global current date-time fetching function
export async function fetchDate() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    const data = await response.json();
    const date = new Date(data.datetime);
    return date;
  } catch (error) {
    console.error("Error fetching the current date: ", error);
    return new Date(); // Fallback to the client’s local date
  }
}
