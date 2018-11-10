//http-GET/POST/PUT/DELETE

const postUrl = 'http://dct-api-data.herokuapp.com/tickets?api_key=225f8a61e32a6357';

const tableHandle = document.getElementById('tickets');
const formHandle = document.getElementById('addTicket');
const nameHandle = document.getElementById('name');
const departmentHandle = document.getElementById('department');
const priorityHandle = document.getElementById('priority');
const messageHandle = document.getElementById('message');

formHandle.addEventListener('submit',function(e){
    e.preventDefault();
    let formData = {
        name: nameHandle.value,
        department: departmentHandle.value,
        priority: priorityHandle.value,
        message: messageHandle.value
    };
    //console.log(formData);

fetch(postUrl,{method:'post',headers:{"content-type":"application/json;charset=utf-8;"},body:JSON.stringify(formData)}).then((data) => {
    data.json().then((myJson) =>{
        let ticket = myJson;
        console.log(ticket);
        console.log(ticket.ticket_code);
        tableHandle.innerHTML +=
        `<tr><td> ${ticket.ticket_code} </td>
             <td> ${ticket.name} </td>
             <td> ${ticket.priority} </td>
             <td> ${ticket.department} </td>
             <td> ${ticket.message} </td>
        </tr>`
    })
    })
            
    formHandle.reset();
        })
