axios.defaults.headers.common['app-id'] = '63ce679debd414c08cdd7c9d';
let userTable = document.querySelector('.user-table')




//get request to fetch user-list
 function getUsers() {
    // const config = {
    //     headers:{
    //       'app-id': '63ce679debd414c08cdd7c9d',
    //     }
    //   };
    // let rows = '';
    
    
    return axios
    .get('https://dummyapi.io/data/v1/user?limit=5')
    .then(res => {
        console.log('getUsers',res.data.data)
        let id_array = res.data.data.map(function(obj) {
            return obj.id
        })
        // console.log(id_array);
        showOutput(res,id_array)

        // let rows = document.getElementsByClassName('user');
        // console.log('inside html collection:',rows)
        // let newArray = Array.from(rows);
        // console.log('Inside array:',newArray);
        // return newArray

    })
    .catch(err => console.log(err));

}

// let test = getUsers();

// console.log("outside html collection:",rows)

// console.log("outside Array:",test)


// Hide and show Form div
let addUserBtn = document.querySelector('.add-user')
addUserBtn.addEventListener('click', function() {
    document.querySelector('.form-div').classList.toggle('visible')
})





// console.log('final Array',getArray)




//get single user
function getSingleUser() {
    axios
    .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109d6')
    .then(res => {
        console.log(res)
        showSingleUser(res)
    })
    .catch(err => console.log(err));
}


//put request - update the single user
function updateUser() {
    axios
    .put('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109d7',{
        "id": "60d0fe4f5311236168a109d6",
        "firstName": "testing2",
        "lastName": "MTest2",
        "email": "some.one@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
       }
    )
    .then(res => console.log('updateUser',res))
    .catch(err => console.error(err)); 
    getUsers();
}


//post request - add the new user
function addUser() {
    axios
    .post('https://dummyapi.io/data/v1/user/create',{
        "id": "60d0fe4f5311236168a109d8",
        "firstName": "testing4",
        "lastName": "MTest4",
        "email": "some.ten@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
       })
    .then(res => console.log('addUser',res))
    .catch(err => console.log(err));
   getUsers();
}


//delete request  - delete existing user from the list
function deleteUser() {
    axios
      .delete('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ce')
      .then(res => {
        console.log('deletedUser',res)
        
    })
      .catch(err => console.log(err));
      
  }

getUsers();
// updateUser();
// addUser();
// deleteUser();
// getSingleUser();
// getUsers();


//function decides what to display in DOM

function showOutput(res,idArr) {
    // const userTable = document.querySelector('.user-table');
    
    let final_data = res.data.data;
    let output = `<tr class="header">
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>   
                     </tr>`;
           
                final_data.forEach(usr => {
                
                    output += `
                            <tr class="user">
                                <td class="avatar"><img class="avatar-img" src="${usr.picture}" alt="${usr.firstName}"></td>
                                <td>${usr.firstName}</td>
                                <td>${usr.lastName}</td>
                                <td><button class="delete-user">X</button></td>
                            </tr>
                            `;
                
                });
            
        userTable.innerHTML = output;

        let rows = document.getElementsByClassName('user');
        console.log('inside html collection:',rows)
        let newArray = Array.from(rows);
        console.log('Inside array:',newArray);
        
        let userArr = idArr.map(function(x,i) {
            
            return {id:x,user:newArray[i]}

        })
        console.log(userArr)
        // return newArray
        userArr.forEach(item => {
            console.log(item.user);
            item.user.addEventListener('click',function() {
                
                    document.querySelector('.form-div').classList.toggle('visible')
                    console.log(item.user.cells)
                    let current_row_arr = Array.from(item.user.cells)
                    console.log(current_row_arr)
                    let current_img = current_row_arr[0].firstChild['src']
                    let current_firstname = current_row_arr[1].firstChild.data
                    let current_lastname = current_row_arr[2].firstChild.data
                    let current_dlt_btn = current_row_arr[3].firstChild
                    
                    // console.log(current_img)
                    // console.log(current_firstname)
                    // console.log(current_lastname)
                    // console.log(current_dlt_btn)

                    let fname = document.getElementById('firstname')
                    let lname = document.getElementById('lastname')
                    let u_img = document.getElementById('img')
                    let submit = document.querySelector('#submit')
                    let form = document.querySelector('.user-details')
                    console.log('form',form)
                    fname.value = current_firstname
                    lname.value = current_lastname
                    u_img.value = current_img
                    userid.value =item.id
                    console.log(item.id)
                    
                    form.addEventListener('submit', function(e){
                        e.preventDefault()
                        //update user details
                            id = document.getElementById('userid').value
                            axios
                            .put('https://dummyapi.io/data/v1/user/'+id,{
                                "id": "60d0fe4f5311236168a109d6",
                                "firstName": "fname.value",
                                "lastName": "lname.value",
                                "email": "some.one@example.com",
                                "picture": "u_img.value"
                               }
                            )
                            .then(res => getUsers(res))
                            .catch(err => console.error(err)); 
                            // getUsers();
                       
                    })
            })
            
        })
}

function showSingleUser(res){
    let singleoutput = `<tr class="header">
                                <th>Avatar</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th></th>   
                            </tr>
                        <tr class="user">
                            <td class="avatar"><img class="avatar-img" src="${res.data.picture}" alt="${res.data.firstName}"></td>
                            <td>${res.data.firstName}</td>
                            <td>${res.data.lastName}</td>
                            <td><button class="delete-user">X</button></td>
                        </tr>   
                    `;
            userTable.innerHTML = singleoutput;
}



let fname = document.getElementById('firstname').value
let lname = document.getElementById('lastname').value
let u_img = document.getElementById('img').value
let submit = document.querySelector('#submit')

// let rows = document.getElementsByClassName('user');
// console.log(rows.length)
// let newArray = Array.from(rows);
// console.log(newArray);