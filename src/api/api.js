const fetchActivityById = async (id) => {
  const res = await fetch("/dummyData.json");

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  const data = await res.json();
  const filteredData = data.activities.find((activity) => activity.id == id);

  return filteredData;
};

export { fetchActivityById };
