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


// Get User List
getUsers()

function getUsers() {
    axios
        .get('https://reqres.in/api/users?page=2')
        .then(({data:{data}}) => {
            console.log(data)  // User Data List
            showOutput(data)
        })
        .catch(err => console.log(err));
}    
//    ----------------------------------------------------------

    // //Fetch User Rows
    // console.log('User Rows :',userRows)  // fetch user rows

    
    // let usersRowArray = Array.from(userRows);    // User Rows Array
    // console.log('Users Row Array :',usersRowArray)
    
    // let NewArrayWithDetails = usersRowArray.map(user_item => {
    //     // console.log('User Cells :',user_item.cells)
    //     let userCellArray = Array.from(user_item.cells) // User Row Cell Array
    //     // console.log('User Cell Array :',userCellArray)  
    //     let userCellValuesArray = [];
    //     userCellValuesArray[0] = userCellArray[0].firstChild['src'];
    //     userCellValuesArray[1] = userCellArray[1].firstChild.data;
    //     userCellValuesArray[2] = userCellArray[2].firstChild.data;
    //     userCellValuesArray[3] = userCellArray[3].firstChild;
        
    //     console.log('User Cell Values Array :',userCellValuesArray)
    //     return userCellValuesArray
    // })
    
    // let idArr = data.map(function(dataItem) {
    //     return dataItem.id
    // })
    // // console.log('idArr :',idArr)
    // NewArrayWithDetails.map((newarrwithdetail,idx) =>{
        
    //     newarrwithdetail.unshift(idArr[idx])
        
    // })
    // NewArrayWithDetails.map((item,idx) => {
    //     item.push(usersRowArray[idx])
    // })
    // let userObjectArray = NewArrayWithDetails.map(item => {
    //     let obj = {}
    //     obj.id = item[0]
    //     obj.picture = item[1]
    //     obj.firstName = item[2]
    //     obj.lastName = item[3]
    //     obj.deleteBtn = item[4]
    //     obj.row = item[5]
    //     return obj
    // })
    // console.log('New Array With Details :', NewArrayWithDetails) 
    // console.log('User Object Array :',userObjectArray) 

    // NewArrayWithDetails.forEach(item => {
    //     item[4].addEventListener('click',function() {
    //         deleteUser(item[0])                                    //DELETE THE USER
    //         item[5].remove()
    //     })
    // })

    // NewArrayWithDetails.forEach(item => {
    //     item[5].addEventListener('click', function() {
    //         fname.value = item[2]
    //         lname.value = item[3]
    //         u_img.value = item[1]
    //         form.addEventListener('submit', function(e){
    //             e.preventDefault()
    //             updateUser(item[0])                            //UPDATE THE USER
    //             fname.value = ''
    //             lname.value = ''
    //             u_img.value = ''
    //         }) 
    //     })
    // })


//ADD NEW USER
addUserBtn.addEventListener('click', function() {
    
    fname.setAttribute('placeholder','FirstName')
    lname.setAttribute('placeholder','LastName')
    u_img.setAttribute('placeholder','Picture')
        
    // document.querySelector('.form-div').classList.add('visible')
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        let f = fname.value
        let l = lname.value
        let i = u_img.value
        addUser(f,l,i)                                  //ADD NEW USER
        fname.value = ''
        lname.value = ''
        u_img.value = ''
    
    })
});

// ----------------------------------------------------------------------------------------
//Delete the User
function deleteUser(id) {
    axios
      .delete('https://reqres.in/api/users/'+id)
      .then(res => {
        console.log('deletedUser',res)
        
    })
      .catch(err => console.log(err));
}
  
//Update the User
function updateUser(id) {
    let f = fname.value
    let l = lname.value
    let i = u_img.value
    axios
    .put('https://reqres.in/api/users/'+id,{
        "firstName": f,
        "lastName": l,
        "picture": i
       }
    )
    .then(res => {
        console.log('updateUser',res)
        
    })
    .catch(err => console.error(err)); 
    
}

//Add New User
function addUser(firstName,lastName,picture) {
    
    firstName= fname.value
    lastName = lname.value
    avatar = u_img.value
    axios
    .post('https://reqres.in/api/users',{
        "first_name": firstName,
        "last_name": lastName,
        "avatar" : picture
    })
    .then(res => {
        console.log('addUser',res)
        let x= createNewUserRow(res.data)
        // console.log('X',x)
        
    })
    .catch(err => console.log(err));
    
}

//Function to display data in DOM
function showOutput(data) {
     // Display Data in DOM
     let output = `<tr class="header">
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>   
                    </tr>`;
    data.forEach (user => {
        output += `<tr class="user">
                    <td class="avatar"><img class="avatar-img" src="${user.avatar}" alt="${user.first_name}"></td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td><button class="delete-user" onClick="deleteUser(${user.id})">X</button></td>
                </tr>`;

        userTable.innerHTML = output;
        //Show and Hide Form
        let tableHeader = document.querySelector('.header')
        tableHeader.addEventListener('click', function() {
            document.querySelector('.form-div').classList.toggle('visible')
        });

        
    });
    //Fetch User Rows
    console.log('User Rows :',userRows)  // fetch user rows
    let userRowArray = Array.from(userRows)
    console.log(userRowArray)
    userRowArray.forEach(row => {
        row.addEventListener('click',function() {
            console.log("CELLS :",row.cells)
        })
    })

}


function createNewUserRow(data) {
    const newUserRow = document.createElement('tr')
    newUserRow.classList.add('user')
    newUserRow.innerHTML = `
                <td class="avatar"><img class="avatar-img" src="${data.avatar}" alt="${data.first_name}"></td>
                <td>${data.first_name}</td>
                <td>${data.last_name}</td>
                <td><button class="delete-user">X</button></td>
                `;
    
    // userTable.appendChild(newUserRow)
    userTable.getElementsByTagName('tbody')[0].appendChild(newUserRow)
    return newUserRow
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