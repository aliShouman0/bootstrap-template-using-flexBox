// tags
const insert = document.querySelector("#insert");

// get data
fetch("http://localhost:3000/backend/getData.php").then((res) => {
  if (res.ok) {
    res.json().then((data) => {
      data.forEach((element) => {
        //create elements as below * nb of message
        //   <tr class="data">
        //   <td>Ali</td>
        //   <td> asdasdas</td>
        //   <td> 34343</td>
        //   <td>sadasdasd</td>
        // </tr>
        let tr = document.createElement("tr");
        let name = document.createElement("td");
        let phone = document.createElement("td");
        let email = document.createElement("td");
        let meassage = document.createElement("td");
        name.textContent = element["fullName"];
        phone.textContent = element["email"];
        email.textContent = element["phone"];
        meassage.textContent = element["message"];
        tr.appendChild(name);
        tr.appendChild(phone);
        tr.appendChild(email);
        tr.appendChild(meassage);
        tr.classList.add("data");
        insert.append(tr);
      });
    });
  }
});
