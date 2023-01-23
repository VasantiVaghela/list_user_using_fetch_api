axios.defaults.headers.common['app-id'] = '63ce679debd414c08cdd7c9d';
// const userTable = document.querySelector('.user-table')
// const user_row = document.querySelector('.user');
// const button = document.querySelector('button')
// user_row.addEventListener('click',updateUser);
// button.addEventListener('click',deleteUser);
// fetch('https://reqres.in/api/users?page=1&&per_page=15')
//     .then(res => res.json())
//     .then(data =>{
//         let final_data = data.data;
//         // console.log(data.data)
//         let output = `<tr class="header">
//                         <th>Avatar</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th></th>   
//                     </tr>`;
//         final_data.forEach(usr => {
//             output += `
//             <tr class="user">
//                 <td class="avatar"><img class="avatar-img" src="${usr.avatar}" alt="${usr.first_name}"></td>
//                 <td>${usr.first_name}</td>
//                 <td>${usr.last_name}</td>
//                 <td><button class="delete-user">X</button></td>
//             </tr>
//             `
//         });
//         userTable.innerHTML = output;
//     })


//get request
function getUsers() {
    // const config = {
    //     headers:{
    //       'app-id': '63ce679debd414c08cdd7c9d',
    //     }
    //   };

    axios
    .get('https://dummyapi.io/data/v1/user/')
    .then(res => {
        console.log(res)
        showOutput(res)
    })
    .catch(err => console.log(err));

}



function showOutput(res) {
    const userTable = document.querySelector('.user-table');
    let final_data = res.data.data;
    let output = `<tr class="header">
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>   
                     </tr>`;
            final_data.forEach(usr => {
            output += `
            <tr class="user">
                <td class="avatar"><img class="avatar-img" src="${usr.picture}" alt="${usr.firstName}"></td>
                <td>${usr.firstName}</td>
                <td>${usr.lastName}</td>
                <td><button class="delete-user">X</button></td>
            </tr>
            `
        });
        userTable.innerHTML = output;
}

//put request - update the single user
function updateUser() {
    axios
    .put('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca',{
        "id": "60d0fe4f5311236168a109d6",
        "firstName": "testing2",
        "lastName": "MTest2",
        "email": "some.one@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
       }
       )
    .then(res => console.log(res))
    .catch(err => console.error(err)); 
}

function addUser() {
    axios
    .post('https://dummyapi.io/data/v1/user/create', {
        "id": "60d0fe4f5311236168a109d6",
        "firstName": "testing2",
        "lastName": "MTest2",
        "email": "some.one@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
       })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}


//delete request
function deleteUser() {
    axios
      .delete('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca')
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }

getUsers();
// updateUser();
addUser();
// deleteUser();
