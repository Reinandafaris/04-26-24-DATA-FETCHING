export async function updateUserPlaces(places) {
  const response = await fetch(
    "http://localhost:3000/user-placeafawfwfwafawgawgs",
    {
      method: "PUT",
      body: JSON.stringify({ places }),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data");
  }

  return resData.message;
}
