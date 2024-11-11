let employees = [
    { name: "João", role: "Analista" },
    { name: "Maria", role: "Desenvolvedora" }
];


function renderEmployeeList() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ""; 

    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('container-crud');
        employeeDiv.innerHTML = `
            <p>${employee.name}</p>
            <p>${employee.role}</p>
            <span class="material-symbols-outlined" onclick="editEmployee(${index})">
                more_vert
            </span>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function addEmployee() {
    const nameInput = document.getElementById('new-name');
    const roleInput = document.getElementById('new-role');
    const name = nameInput.value.trim();
    const role = roleInput.value.trim();

    if (name && role) {
        employees.push({ name, role });
        nameInput.value = "";
        roleInput.value = "";
        renderEmployeeList();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}


function removeEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeList();
}

function editEmployee(index) {
    const newName = prompt("Digite o novo nome:", employees[index].name);
    const newRole = prompt("Digite o novo cargo:", employees[index].role);

    if (newName && newRole) {
        employees[index].name = newName;
        employees[index].role = newRole;
        renderEmployeeList();
    } else {
        alert("Os campos não podem estar vazios.");
    }
}

renderEmployeeList();
