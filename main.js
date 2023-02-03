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
let closeModal = document.querySelector('close-modal')

let result;

// Get User List
getUsers()

//ADD NEW USER
addUserBtn.addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'block';
    console.log('RESULT FROM ADDUSER', result)
    fname.value=''
    lname.value=''
    u_img.value=''
    fname.setAttribute('placeholder','FirstName')
    lname.setAttribute('placeholder','LastName')
    u_img.setAttribute('placeholder','Picture')
    // document.querySelector('.form-div').classList.add('visible')
     
}); 

addNewUserBtn.addEventListener('click', function() {
    
    addUser()                 //ADD NEW USER
    fname.value=''
    lname.value=''
    u_img.value=''
   
    document.querySelector('.modal').style.display = 'none';
})

closeModal.addEventListener('click', function() {
    document.querySelector('.modal').getElementsByClassName.display = 'none';
})

// addNewUserBtn.addEventListener('click', function() {
//     addUser()                            //ADD NEW USER
// })

function getUsers() {
    axios
        .get('https://reqres.in/api/users')
        .then(({data:{data}}) => {
            result = data
            console.log("data",data)  // User Data List
            console.log('RESULT FROM GETUSER :',result)
            showOutput(data)

        })
        .catch(err => console.log(err));
}   
// -----------------------------------------------------------------
//Delete the User
function deleteUser(id) {
    console.log('RESULT BEFORE FROM DELETE',result )
    axios
      .delete('https://reqres.in/api/users/'+id)
      .then(res => {
        console.log('deletedUser',res.data)
        let newResult = result.filter(user => {
            if(id !== user.id){
                return user
            }
         })
        result = [...newResult]
        console.log('RESULT FROM DELETE',result)
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
        "avatar": u_img.value,
       
       }
    )
    .then(res => {
        console.log('updateUser',res.data)
        console.log('RESULT BEFORE UPDATE',result)
        let index = result.findIndex((user) => {
            return user.id == id
         })
         if( index !== -1) {
            result[index].first_name = res.data.first_name
            result[index].last_name = res.data.last_name
            result[index].avatar = res.data.avatar
         }
        
        console.log('index ::',index)
        console.log('result ::',result)
        // let newResult = result
        showOutput(result)
    })
    .catch(err => console.error(err)); 
}

//Add New User
function addUser() {
    console.log('RESULT BEFORE ADD REQUEST',result)
    let email =  `someone${Math.floor(Math.random() * 10000000000)}@example.com`
   return axios
    .post('https://reqres.in/api/users',{
        "id" : Math.floor(Math.random() * 1000000),
        "first_name": fname.value,
        "last_name": lname.value,
        "avatar" : u_img.value,
        "email" : email
    })
    .then(res => {
        console.log('addUser',res)
        console.log('addUser data',res.data)
        result.unshift(res.data)
        // console.log('RESULT OF ADD REQUEST',result)
        showOutput(result)  
        return getUsers
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
        output += `<tr class="user" id="${user.id}" onClick ="showTableDataInForm()">
                    <td class="avatar"><img class="avatar-img" src="${user.avatar}" alt="${user.first_name}"></td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td><button class="delete-user" onClick="deleteUser(${user.id})"><i class="fa-solid fa-trash-can"></i></button></td>
                </tr>`;

        userTable.innerHTML = output;
            //Show and Hide Form
            let tableHeader = document.querySelector('.header')    
            tableHeader.addEventListener('click', function() {
                document.querySelector('.form-div').classList.toggle('visible')
            });
    });

}

function showTableDataInForm() {
    console.log('User Rows :',userRows)  // fetch user rows
    let userRowArray = Array.from(userRows)
    // console.log(userRowArray)

    userRowArray.map(row => {
        
        row.addEventListener('click',function() {
            document.querySelector('.modal').style.display = 'block';
            ID = row.getAttribute('id')
            console.log('ID',ID)
            let cellsArray = Array.from(row.cells)
            // console.log(cellsArray[0].firstChild)
            u_img.value = cellsArray[0].firstChild['src']
            fname.value = cellsArray[1].firstChild.data
            lname.value = cellsArray[2].firstChild.data
        })
        form.addEventListener('submit', function(e) {
            e.preventDefault()
            updateUser(ID)
            ID = undefined
           
            fname.value=''
            lname.value=''
            u_img.value=''
            document.querySelector('.modal').style.display = 'none';
        })
       
    })
}
    
