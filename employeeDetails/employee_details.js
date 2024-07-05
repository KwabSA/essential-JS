// Initialize employees array object
const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Java' },
      //... More employee records can be added here
    ];

console.log(employees);

// Display employees
const displayEmployees = () => {
    const employeesList = employees.map(employee => `<p>${employee.id}. ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join(''); 

    console.log(employeesList);
    
    document.getElementById('employeesDetails').innerHTML = `<br /><h2>List of Employees</h2> ${employeesList}`;
}

// Calculate all employees total salaries
const calculateTotalSalaries = () => {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);

    alert(`Total Salaries: $${totalSalaries}`);
}

// Display HR employees details
const displayHREmployees = () => {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDetails = hrEmployees.map((employee, index) => `<p> ${employee.id}. ${employee.name}: ${employee.department} - $${employee.salary} </p>`
    ).join(''); 

    document.getElementById('employeesDetails').innerHTML = `<br /><h2>List of HR Employees</h2> ${hrEmployeesDetails}`;
}

// Find employee by ID
const findEmployeeById = (employeeId) => {
    const searchEmployee = employees.find(employee => employee.id === employeeId);

    if (searchEmployee) {
        const foundEmployee = `<p> ${searchEmployee.id}. ${searchEmployee.name}: ${searchEmployee.department} - ${searchEmployee.salary} </p>`;
        document.getElementById('employeesDetails').innerHTML = foundEmployee;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'Employee ID does not exist';
    }
}

// Find employee by specialization
const findBySpecialization = (specialization) => {
    const searchSepcialization = employees.find(employee => employee.specialization === specialization)

    if (specialization) {
        const specialty = `<p> ${searchSepcialization.id}. ${searchSepcialization.name}: ${searchSepcialization.department} - ${searchSepcialization.specialization} </p>`;
        document.getElementById('employeesDetails').innerHTML = `<h2>Employees with ${specialization} Specialization </h2> ${specialty}`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'Specialization does not exist';
    }
}