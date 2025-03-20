const getAllActivities = async (token) => {
  const res = await fetch(
    "https://f20d-103-19-109-29.ngrok-free.app/api/v1/activity/",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": 6024,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Fetch failed");
  }
  const { data } = await res.json();

  const dataGroupByDate = (activities) => {
    return activities.reduce((acc, activity) => {
      const dateKey = new Date(activity.start_time).toISOString().split("T")[0];
      acc[dateKey] = acc[dateKey] || [];
      acc[dateKey].push(activity);
      return acc;
    }, {});
  };
  console.log(data.activities);

  return dataGroupByDate(data.activities);
};

const getSortActivities = async (params, token) => {
  try {
    const res = await fetch(
      `https://f20d-103-19-109-29.ngrok-free.app/api/v1/activity/filter?sortBy=${params}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    if (!res.ok) throw new Error(res.ok);

    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

const verifyEmail = async (emailToken) => {
  console.log(emailToken);
  try {
    const res = await fetch(
      "https://f20d-103-19-109-29.ngrok-free.app/api/v1/user/verifyemail",
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ emailToken }),
      }
    );
    console.log(res);
    if (!res.ok) throw new Error(res.Error);
  } catch (err) {
    console.log(err);
  }
};

const resetPasword = async ({ newPassword, confirmPassword, resetToken }) => {
  try {
    const res = await fetch(
      "https://f20d-103-19-109-29.ngrok-free.app/api/v1/user/resetpassword",
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "ngrok-skip-browser-warning": 6024,
        },
        body: JSON.stringify({ newPassword, confirmPassword, resetToken }),
      }
    );

    console.log(res);
    if (!res.ok) throw new Error(res.Error);

    console.log(await res.json());
  } catch (err) {
    console.log(err);
  }
};

const getActivityById = async (uuid, token) => {
  try {
    const res = await fetch(
      `https://f20d-103-19-109-29.ngrok-free.app/api/v1/activity/${uuid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": 6024,
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    return data.activity;
  } catch (err) {
    console.log(err);
  }
};

const forgetPassword = async ({ email }) => {
  console.log(email);
  try {
    const res = await fetch(
      `https://f20d-103-19-109-29.ngrok-free.app/api/v1/user/forgotpassword`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "ngrok-skip-browser-warning": 6024,
        },
        body: JSON.stringify({ email }),
      }
    );
    console.log(res);

    if (!res.ok) throw new Error("Unable to fetch data");

    console.log(await res.json());
  } catch (err) {
    console.log(err);
  }
};

const deleteActivity = async (uuid, token) => {
  try {
    const res = await fetch(
      `https://f20d-103-19-109-29.ngrok-free.app/api/v1/activity/${uuid}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": 6024,
        },
      }
    );

    if (!res.ok) {
      throw new Error("failed to delete the data");
    }
  } catch (err) {
    console.log(err);
  }
};

const insertActivity = async (values, token) => {
  try {
    const res = await fetch(
      "https://f20d-103-19-109-29.ngrok-free.app/api/v1/activity/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": 6024,
        },
        body: JSON.stringify(values),
      }
    );
    if (!res.ok) {
      throw new Error("Creating Activity failed");
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const createNewUser = async ({ email, password, confirmPassword }) => {
  try {
    const res = await fetch(
      "https://f20d-103-19-109-29.ngrok-free.app/api/v1/user/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "ngrok-skip-browser-warning": 6024,
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      }
    );
    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to register the user");
    }

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllActivities,
  createNewUser,
  insertActivity,
  deleteActivity,
  getActivityById,
  forgetPassword,
  resetPasword,
  getSortActivities,
  verifyEmail,
};
