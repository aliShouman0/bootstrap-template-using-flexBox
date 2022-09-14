// tags
const navbar = document.querySelector("#nav");
const send = document.querySelector("#send");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const name_input = document.querySelector("#name");
const message = document.querySelector("#message");
const error = document.querySelector("#error");

send.addEventListener("click", (e) => {
  e.preventDefault();
  let nameValue = name_input.value;
  let emailValue = email.value;
  let phoneValue = phone.value;
  let messageValue = message.value;
  removeError();
  if (nameValue.length < 5) {
    makeError("Names should be a minimum of 5 characters");
  } else if (!emailMatch(emailValue)) {
    makeError(
      "Email  must be minimum of 3 characters before the @ and 5 characters after the @"
    );
  } else if (!phoneMatch(phoneValue)) {
    makeError(
      "phone must be as +961(3|70|71|76|78|79|81) followed  by 6 digits"
    );
  } else if (messageValue.length < 100) {
    makeError("Message should be a minimum of 100 characters.");
  } else {
    name_input.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
    sendMessage(nameValue, emailValue, phoneValue, messageValue);
  }
});

// isend messag to data base
function sendMessage(name, email, phone, message) {
  let data = new FormData();
  data.append("fullName", name);
  data.append("email", email);
  data.append("phone", phone);
  data.append("message", message);

  fetch("http://localhost:3000/backend/insertData.php", {
    method: "POST",
    body: data,
  }).then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        if (data.done) {
          window.location.href = "../html/data.html";
        }
      });
    }
  });
}

// test if email match
function emailMatch(em) {
  let pattern = "^[a-zA-Z0-9+_.-]{3,}@[a-zA-Z]{5}";
  return em.match(pattern) == null ? false : true;
}

// test if phone match
function phoneMatch(phone) {
  let pattern = /^\+961(3|70|71|76|78|79|81)[0-9]{6}/;
  return phone.match(pattern) == null ? false : true;
}

// add error meassage
function makeError(mess) {
  error.classList.remove("d-none");
  error.textContent = mess;
}

//remove error meassage
function removeError() {
  error.classList.add("d-none");
}

//scroll
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.padding = "20px 40px";
  } else {
    navbar.style.padding = "30px 85px";
  }
};
