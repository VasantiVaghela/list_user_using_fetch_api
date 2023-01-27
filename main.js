axios.defaults.headers.common['app-id'] = '63d3c0086ca47b28b2e2959c';
// let userTable = document.querySelector('.user-table')

// let fname = document.getElementById('firstname')
// let lname = document.getElementById('lastname')
// let u_img = document.getElementById('img')
// let submit = document.querySelector('#submit')
// let form = document.querySelector('.user-details')

// let f = fname.value 
// let l = lname.value 
// let i = u_img.value 
                    
                    

// //get request to fetch user-list
//  function getUsers() {
//     return axios
//     .get('https://dummyapi.io/data/v1/user')
//     .then(res => {
//         console.log('getUsers',res.data.data)
//         let id_array = res.data.data.map(function(obj) {
//             return obj.id
//         })
        
//         let x = showOutput(res,id_array)
//         return x

//     })
//     .catch(err => console.log(err));
  
// }

// getUsers().then(value => {
//     console.log('Value :' ,value)
//     let user_row_arr = value.map(function(item) {
//         return item.user 
//     })
   
//     console.log('User Row :',user_row_arr)   // getting user rows

//     document.querySelector('.header').addEventListener('click', function(){
//         document.querySelector('.form-div').classList.toggle('visible')
//     })
    
//    value.forEach(item => {
//     item.user.addEventListener('click',function(){
        
//     })
//    })
//     value.forEach(item => {
//         console.log(item.user);
//         item.user.addEventListener('click',function() {
            
//                 // document.querySelector('.form-div').classList.toggle('visible')
//                 console.log(item.user.cells)
//                 let current_row_arr = Array.from(item.user.cells)
//                 console.log(current_row_arr)
//                 let current_img = current_row_arr[0].firstChild['src']
//                 let current_firstname = current_row_arr[1].firstChild.data
//                 let current_lastname = current_row_arr[2].firstChild.data
//                 let current_dlt_btn = current_row_arr[3].firstChild
                 
//                 //DELETE THE USER
    
//                 current_dlt_btn.addEventListener('click',function() {
                    
//                     console.log('delete id',item.id)
//                     let dlturl ="https://dummyapi.io/data/v1/user/"+item.id
                    
//                     axios
//                     .delete(dlturl)
//                     .then(res => {
//                         console.log(res)
//                         showUpdatedOutput(res)
    
//                     })
//                     .catch(err => console.log(err));
//                     item.user.remove()

//                 })
                
            
//                 fname.value = current_firstname
//                 lname.value = current_lastname
//                 u_img.value = current_img
//                 console.log(item.id)

               
//                 console.log(item.id)
//                     form.addEventListener('submit', function(e){
//                         e.preventDefault();
//                         f = fname.value;
//                         l = lname.value;
//                         i = u_img.value;
                        
//                             let url ='https://dummyapi.io/data/v1/user/'+item.id
//                             console.log('url',url)
//                             axios({
//                                   method: 'put',
//                                   url : url,
//                                   data: {
//                                     "firstName" : f,
//                                     "lastName" : l,
//                                     "picture" : i
//                                   }
//                                 })
//                                 .then(res => {
//                                     console.log(res);
        
//                                     //getuser list
//                                     axios
//                                     .get('https://dummyapi.io/data/v1/user')
//                                     .then(res => {
                                
//                                         showUpdatedOutput(res)
                                
//                                     })
//                                     .catch(err => console.log(err))
//                                 })
//                             .catch(err => console.error(err));
//                        fname.value = '';
//                        lname.value = '';
//                        u_img.value = '';
                            
//                     })
                   
                
    
               
//         })
        
//     })

// });


 
// // Hide and show Form div
// let addUserBtn = document.querySelector('.add-user')
// addUserBtn.addEventListener('click', function() {
//     document.querySelector('.form-div').classList.toggle('visible')
//     // fname.value ='';
//     // lname.value = '';
//     // u_img.value = '';
    
//     form.addEventListener('submit', function(e){
//         e.preventDefault()
       
//         f = fname.value;
//         l = lname.value;
//         i = u_img.value;
//         console.log('post first name', f)
           
//             let url ='https://dummyapi.io/data/v1/user/create'
//             console.log('url',url)
//             let email = `someone${Math.floor(Math.random() * 100)}@example.com`
//             axios({
//                 method: 'post',
//                 url: 'https://dummyapi.io/data/v1/user/create',
//                 data: {
                    
//                     "firstName": f ,
//                     "lastName": l,
//                     "picture": i,
//                     "email": email
//                 }
//               })
//             .then(res => {
//                 console.log(res)

//                 //getuser list
//                 axios
//                 .get('https://dummyapi.io/data/v1/user')
//                 .then(res => {
               
//                     showUpdatedOutput(res)
            
//                 })
//                 .catch(err => console.log(err));
//             })
//             .catch(err => console.log(err)); 
    
//     })
// })


// //get single user
// function getSingleUser() {
//     axios
//     .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109d6')
//     .then(res => {
//         console.log(res)
//         showSingleUser(res)
//     })
//     .catch(err => console.log(err));
// }


// //put request - update the single user
// function updateUser() {
//     axios
//     .put('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109d7',{
//         "id": "60d0fe4f5311236168a109d6",
//         "firstName": "testing2",
//         "lastName": "MTest2",
//         "email": "some.one@example.com",
//         "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
//        }
//     )
//     .then(res => console.log('updateUser',res))
//     .catch(err => console.error(err)); 
//     getUsers();
// }


//post request - add the new user
// function addUser() {
//     axios
//     .post('https://dummyapi.io/data/v1/user/create',{
//         "id": "60d0fe4f5311236168a109d8",
//         "firstName": "testing4",
//         "lastName": "MTest4",
//         "email": "some.ten@example.com",
//         "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
//        })
//     .then(res => console.log('addUser',res))
//     .catch(err => console.log(err));
//    getUsers();
// }


// //delete request  - delete existing user from the list
// function deleteUser() {
//     axios
//       .delete('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ce')
//       .then(res => {
//         console.log('deletedUser',res)
        
//     })
//       .catch(err => console.log(err));
      
//   }

// // getUsers();
// // updateUser();
// // addUser();
// // deleteUser();
// // getSingleUser();
// // getUsers();


// //function decides what to display in DOM

// function showOutput(res,idArr) {
    
//     let final_data = res.data.data;
//     let output = `<tr class="header">
//                         <th>Avatar</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Action</th>   
//                      </tr>`;
           
//                 final_data.forEach(usr => {
                
//                     output += `
//                             <tr class="user">
//                                 <td class="avatar"><img class="avatar-img" src="${usr.picture}" alt="${usr.firstName}"></td>
//                                 <td>${usr.firstName}</td>
//                                 <td>${usr.lastName}</td>
//                                 <td><button class="delete-user">X</button></td>
//                             </tr>
//                             `;
                
//                 });
            
//         userTable.innerHTML = output;

//         let rows = document.getElementsByClassName('user');
//         console.log('inside html collection:',rows)
//         let newArray = Array.from(rows);
//         console.log('Inside array:',newArray);
        
//         let userArr = idArr.map(function(x,i) {
            
//             return {id:x,user:newArray[i]}

//         })
//         console.log(userArr)
//         return userArr
// }

// // --------------------------------------------------------------------------







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


// function showUpdatedOutput(res) {
//     let final_data = res.data.data;
//     let output = `<tr class="header">
//                         <th>Avatar</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Action</th>   
//                      </tr>`;
           
//                 final_data.forEach(usr => {
                
//                     output += `
//                             <tr class="user">
//                                 <td class="avatar"><img class="avatar-img" src="${usr.picture}" alt="${usr.firstName}"></td>
//                                 <td>${usr.firstName}</td>
//                                 <td>${usr.lastName}</td>
//                                 <td><button class="delete-user">X</button></td>
//                             </tr>
//                             `;
                
//                 });
            
//         userTable.innerHTML = output;
// }




const userTable = document.querySelector('.user-table')
const userRows = document.getElementsByClassName('user')
let fname = document.getElementById('firstname')
let lname = document.getElementById('lastname')
let u_img = document.getElementById('img')
let submit = document.querySelector('#submit')
let form = document.querySelector('.user-details')
let addUserBtn = document.querySelector('.add-user')





// Get User List
getUsers()

async function getUsers() {
    const {data:{data}}= await axios
                        .get('https://dummyapi.io/data/v1/user')
                        .catch(err => console.log(err));
    console.log(data)  // User Data List
    showOutput(data)
//    ----------------------------------------------------------

    //Show and Hide Form
    let tableHeader = document.querySelector('.header')
    tableHeader.addEventListener('click', function() {
        document.querySelector('.form-div').classList.toggle('visible')
    });

    //Fetch User Rows
    console.log('User Rows :',userRows)  // fetch user rows

    
    let usersRowArray = Array.from(userRows);    // User Rows Array
    console.log('Users Row Array :',usersRowArray)
    
    let NewArrayWithDetails = usersRowArray.map(user_item => {
        // console.log('User Cells :',user_item.cells)
        let userCellArray = Array.from(user_item.cells) // User Row Cell Array
        // console.log('User Cell Array :',userCellArray)  
        let userCellValuesArray = [];
        userCellValuesArray[0] = userCellArray[0].firstChild['src'];
        userCellValuesArray[1] = userCellArray[1].firstChild.data;
        userCellValuesArray[2] = userCellArray[2].firstChild.data;
        userCellValuesArray[3] = userCellArray[3].firstChild;
        
        console.log('User Cell Values Array :',userCellValuesArray)
        return userCellValuesArray
    })
    
    let idArr = data.map(function(dataItem) {
        return dataItem.id
    })
    // console.log('idArr :',idArr)
    NewArrayWithDetails.map((newarrwithdetail,idx) =>{
        
        newarrwithdetail.unshift(idArr[idx])
        
    })
    NewArrayWithDetails.map((item,idx) => {
        item.push(usersRowArray[idx])
    })
    let userObjectArray = NewArrayWithDetails.map(item => {
        let obj = {}
        obj.id = item[0]
        obj.picture = item[1]
        obj.firstName = item[2]
        obj.lastName = item[3]
        obj.deleteBtn = item[4]
        obj.row = item[5]
        return obj
    })
    console.log('New Array With Details :', NewArrayWithDetails) 
    console.log('User Object Array :',userObjectArray) 

    
    NewArrayWithDetails.forEach(item => {
        item[4].addEventListener('click',function() {
            deleteUser(item[0])                                    //DELETE THE USER
            item[5].remove()
        })
    })

    NewArrayWithDetails.forEach(item => {
        item[5].addEventListener('click', function() {
            fname.value = item[2]
            lname.value = item[3]
            u_img.value = item[1]
            form.addEventListener('submit', function(e){
                e.preventDefault()
                updateUser(item[0])                            //UPDATE THE USER
            }) 
        })
    })
    
    addUserBtn.addEventListener('click', function() {
        fname.value = ''
        lname.value = ''
        u_img.value = ''
        document.querySelector('.form-div').classList.toggle('visible')
        form.addEventListener('submit', function(e) {
            e.preventDefault()
            let f = fname.value
            let l = lname.value
            let i = u_img.value
            addUser(f,l,i)
        })
    });
}

// ----------------------------------------------------------------------------------------
//Delete the User
function deleteUser(id) {
    axios
      .delete('https://dummyapi.io/data/v1/user/'+id)
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
    .put('https://dummyapi.io/data/v1/user/'+id,{
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
    picture = u_img.value
    // let ui = u_img.value
    email = `someone${Math.floor(Math.random() * 10000000000)}@example.com`
    axios
    .post('https://dummyapi.io/data/v1/user/create',{
        "firstName": firstName,
        "lastName": lastName,
        "email": email ,
        "picture" : picture
    })
    .then(res => {
        console.log('addUser',res)
    })
    .catch(err => console.log(err));
}


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
     <td class="avatar"><img class="avatar-img" src="${user.picture}" alt="${user.firstName}"></td>
     <td>${user.firstName}</td>
     <td>${user.lastName}</td>
     <td><button class="delete-user">X</button></td>
 </tr>`;

userTable.innerHTML = output;
});
}

