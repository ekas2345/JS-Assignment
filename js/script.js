function userForm() {
    
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let province = document.getElementById('province').value;
    
    let membership = document.querySelector('input[name="membership"]:checked').value;

    let fullName = `${fname} ${lname}`;

    let outputHTML = `
        <h3 style="color: var(--primary-color); margin-bottom:10px;">✅ Registration Successful</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
        <p><strong>Plan:</strong> <span style="background:var(--accent-color); color:#fff; padding:2px 6px; border-radius:4px;">${membership}</span></p>
    `;

    let outputDiv = document.getElementById('output');
    outputDiv.style.display = "block"; 
    outputDiv.innerHTML = outputHTML;

    return false;
}

function myExcelFuns() {
    let numberStr = document.getElementById('numbers').value;

    if (numberStr == null || numberStr.trim() === "") {
        alert("⚠️ Error: Please enter numbers separated by spaces.");
        return; 
    } 
    else {
        let rawArr = numberStr.trim().split(" ");
        let finalNumericArray = [];

        for (let i = 0; i < rawArr.length; i++) {
            if (rawArr[i] !== "") {
                let num = Number(rawArr[i]);
                if (!isNaN(num)) {
                    finalNumericArray.push(num);
                }
            }
        }

        let result;

        if (document.getElementById('sum').checked) {
            let total = 0;
            for (let n of finalNumericArray) {
                total += n;
            }
            result = total;
        } 
        else if (document.getElementById('avg').checked) {
            let total = 0;
            for (let n of finalNumericArray) {
                total += n;
            }
            result = (total / finalNumericArray.length).toFixed(2);
        } 
        else if (document.getElementById('max').checked) {
            result = Math.max(...finalNumericArray);
        } 
        else {
            result = Math.min(...finalNumericArray);
        }

        document.getElementById('excel-output').innerHTML = `Result: <span style="font-size:1.5em">${result}</span>`;
    }
}

function toggleTheme() {
    let body = document.body;
    let btn = document.getElementById('theme-btn');
    
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Day Mode";
    } else {
        btn.innerHTML = "🌙 Night Mode";
    }
}
