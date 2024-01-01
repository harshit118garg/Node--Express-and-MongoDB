// custom JavaScript

const deleteTask = async (id) => {
  const confirmation = confirm("You really want to delete this task...?");
  if (confirmation) {
    let taskID = Number(id);
    await fetch(`/${taskID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    const card = document.getElementById(id);
    card.remove();
  }
};
