let userRole = 'admin';
let accessLevel;

if (userRole === 'admin') {
    accessLevel = 'Full access granted';
} else if (userRole === 'manager') {
    accessLevel = 'Limited access granted';
} else {
    accessLevel = 'No access granted';
}

console.log('Access Level: ', accessLevel)

// Defining varaiables and nested if else statements
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = 'Welcome Admin!';
    } else {
        userMessage = 'Welcome User!';
    }
} else {
    userMessage = "Please login to access the system";
}

console.log('User Message: ', userMessage);

// Defining variables and switch statement for User Type and User Category
let userType = 'subscriber';
let userCategory;

switch (userType) {
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}

console.log('User Category: ', userCategory);

// Using Ternary Operator for isAuthenticated and authenticationStatus
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? 'Authenticated' : 'Not Authenticated';

console.log('Authentication Status: ', authenticationStatus);

// Practice Test: Dietary Services Program Eligibility 
let userStatus = 'Employee';
let eligibility;

if (userStatus === 'Employee') {
    eligibility = "You're eligible to the Dietary Services";
} else if (userStatus === 'Enrolled Member') {
    eligibility = "You're eligible to Dietary Services and one-on-one interaction with a Dietician";
} else if (userStatus === 'Subscriber') {
    eligibility = "You're eligible to partial Dietary Services";
} else {
    eligibility = "Please subscribe to our Dietary Services for more";

}

console.log(`Hello ${userStatus}, ${eligibility}`);