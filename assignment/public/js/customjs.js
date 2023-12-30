// custom JavaScript

const deleteTask = async (id) => {
  let taskID = Number(id);
  await fetch(`/${taskID}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  const card = document.getElementById(id);
  card.remove();
};
