const userTable = document.querySelector('.user-table')

fetch('https://reqres.in/api/users?page=1&&per_page=15')
    .then(res => res.json())
    .then(data =>{
        let final_data = data.data;
        // console.log(data.data)
        let output = `<tr class="header">
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>`;
        final_data.forEach(usr => {
            output += `
            <tr class="user">
                <td class="avatar"><img class="avatar-img" src="${usr.avatar}" alt="${usr.first_name}"></td>
                <td>${usr.first_name}</td>
                <td>${usr.last_name}</td>
            </tr>
            `
        });
        userTable.innerHTML = output;
    })