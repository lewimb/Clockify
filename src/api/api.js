const fetchActivityById = async (id) => {
  const res = await fetch("/dummyData.json");

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  const data = await res.json();
  const filteredData = data.activities.find((activity) => activity.id == id);

  return filteredData;
};

const createNewUser = async ({ email, password }) => {
  try {
    const res = await fetch(
      "https://light-master-eagle.ngrok-free.app/api/v1/user/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to register the user");
    }

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export { fetchActivityById, createNewUser };
