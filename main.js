// axios.defaults.headers.common['app-id'] = '63d3c0086ca47b28b2e2959c';

const userTable = document.querySelector('.user-table')
const tbody = document.getElementsByTagName('tbody')
const userRows = document.getElementsByClassName('user')
let fname = document.getElementById('firstname')
let lname = document.getElementById('lastname')
let u_img = document.getElementById('img')
let submit = document.querySelector('#submit')
let form = document.querySelector('.user-details')
let addUserBtn = document.querySelector('.add-user')
let addNewUserBtn = document.querySelector('.add-new-user')
let tableHeader = document.querySelector('.header')
let result;

// Get User List
getUsers()



function getUsers() {
    axios
        .get('https://reqres.in/api/users?page=2')
        .then(({data:{data}}) => {
            result = data
            console.log("data",data)  // User Data List
            showOutput(data)
        })
        .catch(err => console.log(err));
}   

//ADD NEW USER
addUserBtn.addEventListener('click', function() {
    console.log('RESULT FROM ADDUSER', result)
    fname.value=''
    lname.value=''
    u_img.value=''
    fname.setAttribute('placeholder','FirstName')
    lname.setAttribute('placeholder','LastName')
    u_img.setAttribute('placeholder','Picture')
});      
    // document.querySelector('.form-div').classList.add('visible')
    addNewUserBtn.addEventListener('click', function(e) {
        e.preventDefault()
        addUser()                       
})

// --------------------------------------------------------------------------
//Delete the User
function deleteUser(id) {
    console.log('RESULT FROM DELETE',result )
    axios
      .delete('https://reqres.in/api/users/'+id)
      .then(res => {
        console.log('deletedUser',res)
        let newResult = result.filter(user => {
            if(id !== user.id){
                return user
            }
         })
        result = [...newResult]
        console.log(result)
        showOutput(result)
        
    })
      .catch(err => console.log(err));
}
  
//Update the User
function updateUser(id) {

    axios
    .put('https://reqres.in/api/users/'+id,{
        "first_name": fname.value,
        "last_name": lname.value,
        "avatar": u_img.value
       }
    )
    .then(res => {
        console.log('updateUser',res.data)
        // console.log(result.indexOf(id))
        result.filter((user) => {
            if(id === user.id){
                
                user.first_name = res.data.first_name
                user.last_name = res.data.last_name
                user.avatar = res.data.avatar
                return user
            }
         })
        
        console.log('result ::',result)
        // let newResult = result
        showOutput(result)
    })
    .catch(err => console.error(err)); 
    
}


//Add New User
function addUser() {
    axios
    .post('https://reqres.in/api/users',{
        "first_name": fname.value,
        "last_name": lname.value,
        "avatar" : u_img.value
    })
    .then(res => {
        console.log('addUser',res)
        console.log('addUser data',res.data)
        result.unshift(res.data)
        console.log(result)
        showOutput(result)
       
    })
    .catch(err => console.log(err));
    
}

//Function to display data in DOM
function showOutput(data) {
     // Display Data in DOM
     let output = `<tr class="header" >
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>   
                    </tr>`;
    data.forEach (user => {
        output += `<tr class="user" id="${user.id}" onClick ="showTableDataInForm()">
                    <td class="avatar"><img class="avatar-img" src="${user.avatar}" alt="${user.first_name}"></td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td><button class="delete-user" onClick="deleteUser(${user.id})">X</button></td>
                </tr>`;

        userTable.innerHTML = output;
        //Show and Hide Form
        
        // tableHeader.addEventListener('click', function() {
        //     document.querySelector('.form-div').classList.toggle('visible')
        // });

        
    });
    // Fetch User Rows
    // console.log('User Rows :',userRows)  // fetch user rows
    // let userRowArray = Array.from(userRows)
    // console.log(userRowArray)
    // userRowArray.forEach(row => {
    //     row.addEventListener('click',function() {
    //         let cellsArray = Array.from(row.cells)
    //         // console.log(cellsArray[0].firstChild)
    //         u_img.value = cellsArray[0].firstChild['src']
    //         fname.value = cellsArray[1].firstChild.data
    //         lname.value = cellsArray[2].firstChild.data

    //         submit.addEventListener('click', function() {

    //             updateUser()
    //         })
    //     })
    // })

}

// function showSingleUser(res){
//     let singleoutput = `<tr class="header">
//                                 <th>Avatar</th>
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                                 <th></th>   
//                             </tr>
//                         <tr class="user">
//                             <td class="avatar"><img class="avatar-img" src="${res.data.picture}" alt="${res.data.firstName}"></td>
//                             <td>${res.data.firstName}</td>
//                             <td>${res.data.lastName}</td>
//                             <td><button class="delete-user">X</button></td>
//                         </tr>   
//                     `;
//             userTable.innerHTML = singleoutput;
// }

function showTableDataInForm() {
    console.log('User Rows :',userRows)  // fetch user rows
    let userRowArray = Array.from(userRows)
    // console.log(userRowArray)

    userRowArray.forEach(row => {
        row.addEventListener('click',function() {
            let cellsArray = Array.from(row.cells)
            // console.log(cellsArray[0].firstChild)
            u_img.value = cellsArray[0].firstChild['src']
            fname.value = cellsArray[1].firstChild.data
            lname.value = cellsArray[2].firstChild.data
            
        })
    })
}
    // form.addEventListener('submit',function(e) {
    //     e.preventDefault()

    //     updateUser(id)
    // })
    
// }
