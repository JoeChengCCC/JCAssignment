const formApply = document.getElementById('card');
const roomOwner = document.getElementById('room-owner');
const roomEmail = document.getElementById('room-email');
const roomName = document.getElementById('room-name');
const roomColor = document.getElementById('room-color');
const roomComment = document.getElementById('room-comment');
const roomSubmitButton = document.getElementById('room-submit-button');

// function to check email pattern, contains @ and .
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function to check email pattern, contains @ and .
const isValidColor = (colortext) => {
    return /^#+[A-Za-z0-9]{6}-/.test(colortext);
}

//function to check input length
const Restrict10 = (text) => {
    return (text.length >10);
}

//function to check input length
const Restrict20 = (text) => {
    return (text.length >20);
}

//function to capitalize first letter in input text
const capitalize = (str) => {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}

const capitalizeALL = (str) => {
    return str.toUpperCase();
}

// Form validation
const validateInputs = () => {
    const ownerNameValue = capitalize(roomOwner.value.trim());
    const emailValue = roomEmail.value.trim();
    const roomNameValue = capitalize(roomName.value.trim());
    const roomColorValue = capitalizeALL(roomColor.value.trim());
    const roomCommentValue = roomComment.value.trim();


    // check input for Name/Avatar: 1 to 10 chars only
    if(ownerNameValue === '') {
        alert('Owner name cannot be blank.');
        roomOwner.focus();
        return false;
    }
    else if (Restrict10(ownerNameValue)) {
        alert('Your input for {Name/ Avatar} is : ' + roomOwner.value + 
        '\n Err - Sorry, we support MAX 10 chars only! \n'
        );
        roomOwner.focus();
        return false;
    }

    // check input for Email: follow email pattern, contain @ and .
    if(emailValue === '') {
        alert('Email cannot be blank.');
        roomEmail.focus();
        return false;
    } 
    else if (!isValidEmail(emailValue)) {
        alert('Your input for {Email} is : ' + roomEmail.value + 
        '\n Err - Please provide a valid email address. \n'
        );
        roomEmail.focus();
        return false;
    }

    // check input for Room Name: 1 to 20 chars only
    if(roomNameValue === '') {
        alert('Room Name cannot be blank.');
        roomName.focus();
        return false;
    }
    else if (Restrict20(roomNameValue)) {
        alert('Your input for {Room Name} is : ' + roomName.value + 
        '\n Err - Sorry, we support MAX 20 chars only! \n'
        );
        roomName.focus();
        return false;
    }

    // check input color, if entered. Pattern as: "#nnnnnn" (where n is 0..9)
    if (roomColorValue !== '' & !isValidColor(roomColorValue)) {
        alert('Your input for {Room Background Color} is : ' + roomColor.value + 
        '\n Err - Pattern can refer drop-down: "#"+"6 alphanumerics"+"-"+Color Desc(optional). \n'
        );
        roomColor.focus();
        return false;
    }

    // add remark default color applied, if no user input
    BKG_Remark="";
    if(roomColorValue === '') {
        BKG_Remark = "NIL input. (Default #FFFFFF White will be applied.)"
    }
    // add remark NIL, if no user input    
    REQ_Remark="";
    if(roomCommentValue === '') {
        REQ_Remark = "NIL input."
    }

    // if no error, display user filled-in details 
    alert('Your room application is submitted, details as follow: \n \n' + 
    'Name/Avatar: ' + ownerNameValue + '\n'+
    'Email: ' + emailValue + '\n'+
    'Room Name: ' + roomNameValue + '\n' +
    'Background Color: ' + roomColorValue + BKG_Remark + '\n' +
    'Additional request: ' + roomCommentValue + REQ_Remark+ '\n'
    )

    return true;
};

roomSubmitButton.addEventListener('click', validateInputs);

