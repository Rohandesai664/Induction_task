let promise = fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")
promise.then((response) => { 
  return response.json()
}).then((employee_infos) => {
  console.log(employee_infos)
  let placeholder = document.getElementById("employees-information")
  let out = ""
  for (let info in employee_infos.data) {
    
    out += `
        <tr>
          <td>${employee_infos.data[info].name} </td>
          <td>${employee_infos.data[info].office} </td>
          <td>${employee_infos.data[info].position} </td>
          <td>${employee_infos.data[info].salary} </td>
        
          </tr>
    
    `

  }
  placeholder.outerHTML = out;
})