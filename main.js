const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.display = "block";
  statusTxt.style.color = "#0d6efd";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    // console.log(xhr.readyState);
    // console.log(xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      let result = xhr.response;
      if (
        result.indexOf("all fields are requiered!!") != -1 ||
        result.indexOf("enter a valide email address :(") ||
        result.indexOf("Sorry, failed to send your msg!!")
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerHTML = result;
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
