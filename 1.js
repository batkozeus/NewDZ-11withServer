// Task 1

const btnGetUsers = document.querySelector("#btnGetUsers"),
	  btnAddUser = document.querySelector("#btnAddUser"),
	  btnRemoveUser = document.querySelector("#btnRemoveUser"),
	  btnUpdateUser = document.querySelector("#btnUpdateUser");

const ourTable = document.querySelector("#table-row").textContent.trim();
const compiled = _.template(ourTable);

const basicUrl = 'http://fecore.net.ua/rest/';

const updateView = users => {
  let htmlString = "";

  users.forEach(user => {
    htmlString += compiled(user);
  });

  userTableBody.innerHTML = htmlString;
};


const getUser = () => 
	fetch(basicUrl)
		.then(response => {
			if (response.ok) return response.json();
			throw new Error("Error");
		})
		.then(data => {
			updateView(data);
		})
		.catch(error => {
			console.error("Error: ", error);
		});



btnGetUsers.addEventListener("click", getUser);


const AddUser = () => {

	let addUrl = `${basicUrl}?action=1&name=${document.querySelector("#userName").value}&score=${document.querySelector("#userScore").value}`;
	fetch(addUrl)
		.catch(error => {
			console.error("Error: ", error);
		}
	);
	document.querySelector("#user").reset();	

};

btnAddUser.addEventListener("click", AddUser);
btnAddUser.addEventListener("click", getUser);


const removeUser = () => {

	let removeUrl = `${basicUrl}?action=3&id=${document.querySelector("#removeId").value}`;
	fetch(removeUrl)
		.catch(error => {
			console.error("Error: ", error);
		}
	);
	document.querySelector("#remove").reset();	

};

btnRemoveUser.addEventListener("click", removeUser);
btnRemoveUser.addEventListener("click", getUser);


const updateUser = () => {

	let updateUrl = `${basicUrl}?action=2&id=${document.querySelector("#changeUserId").value}&name=${document.querySelector("#changeUserName").value}&score=${document.querySelector("#changeUserScore").value}`;
	fetch(updateUrl)
		.catch(error => {
			console.error("Error: ", error);
		}
	);
	document.querySelector("#change").reset();	

};

btnUpdateUser.addEventListener("click", updateUser);
btnUpdateUser.addEventListener("click", getUser);