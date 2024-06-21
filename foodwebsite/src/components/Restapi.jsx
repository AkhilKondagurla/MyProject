import React from 'react'

const Restapi = () => {

    const onSubmitUser = async (e) => {
        e.preventDefault();
        if (editUser) {
          updateUser();
          setEditUser('');
        } else {
          try {
            if (
              !form.username || form.username.length === 0 ||
              !form.password || form.password.length === 0 ||
              !form.email || form.email.length === 0 ||
              !form.mobile || form.mobile.length === 0 ||
              !form.name || form.name.length === 0 ||
              !form.address || form.address.length === 0
            ) {
              setErrorMes(true);
              return;
            }
            const FormData = {
              username: form.username,
              password: form.password,
              email: form.email,
              mobile: form.mobile,
              name: form.name,
              address: form.address,
              userlevel: 2, // userLevel 2 is sub admin only....!
              loginUsername: GlobalUserName
            };
      
            const response = await fetch('/api/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(FormData)
            });
      
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
      
            const data = await response.json();
      
            // Optionally, handle refetching data or state updates
            // fetchUsersData(); // Example function to refetch user data
      
            setForm({
              username: "",
              mobile: "",
              password: "",
              email: "",
              name: "",
              address: ""
            });
            setHasError(false);
            setHasTouchedEmail(false);
            setErrorMes(false);
            showMessage("User Created Successfully", "success", toast);
            handleClose();
          } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
          }
        }
      };


      // Genarate Random Password

      const generateRandomPassword = (length) => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;"<>,.?/';
         let password = '';
         for (let i = 0; i < length; i++) {
           const randomIndex = Math.floor(Math.random() * charset.length);
           password += charset[randomIndex];
         }
         return password
       }
         
         const newPassword = generateRandomPassword(12);
         console.log("Genarated password",newPassword)
           
           
       // find one value and push ento one array
       const arrayData = [{
           username:"akhil",
           password:"",
           mobile:"9999999999",
           address:"hyderabd",
           des:"jr.System Engneer",
           pin:500045
       },
       {
           username:"siva",
           password:"",
           mobile:"8888888888",
           address:"Mumbai",
           des:"jr.System Engneer",
           pin:500045
       }
       ]
       
       let findOne
       if( arrayData){
        findOne = arrayData.find(each=>(each.username === "siva"))
       }
       
       if (findOne) {
         findOne.password = newPassword;
         console.log("Username:", findOne.username);
         console.log("Password:", newPassword);
         console.log("Updated Password:", findOne.password);
       } else {
         console.log("User not found");
       }
       
       console.log("array Data:",findOne);


       const array = [8,6, 3, 6, 8,6,5,2, 9,4,7];

const gg = array.sort()
console.log("sorting array", gg)

//Remove duplicates in array
const g1 = [... new Set(gg)]
console.log("Remove duplicates in array",g1);

// filter duplicates in aray
const aa = gg.filter((value, index,self)=> self.indexOf(value) === index)

console.log("filter duplicates in aray",aa)

// spliceing this array
const bb = gg.splice(2,3)
console.log("Rmoved this array",bb,"Rmaining values" , gg)

//Rest Api Pdate methos
const updateVendor = async () => {
    try {
      const response = await fetch('https://yourapiurl.com/vendors/' + editId, {
        method: 'PUT', // or 'PATCH' if your API supports it  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${yourAuthToken}`, // Include this if your API requires authentication
        },
        body: JSON.stringify({
          company: form.company,
          contactPerson: form.contactPerson,
          email: form.email,
          contactNumber: form.contactNumber,
          address: form.address,
          username: globalUserName
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
  
      const data = await response.json();
  
      // Optionally refetch data here if needed using another fetch call
      await fetchVendors(); // Define fetchVendors to refetch the vendor list
  
      showMessage("Update successfully", "success");
      handleClose();
    } catch (error) {
      console.log(error);
      showMessage("Something went wrong", "error");
    }
  };

  // Revers a String 

const reverseString = (data) => {
  return data.split('').reverse().join('');     // if you give more space it will print revers word
                                                 // Output:- not? are office today come Pratap
}

const originalString = "Pratap come today office are not?";
const reversedString = reverseString(originalString);
console.log(reversedString);  // Output: "? ton era eciffo yadot emoc patarP"

// checking given string palindrom are not?
const isPalindrom=(data)=>{
  const convertString = data.toString()
  const reversedStr = convertString.split('').reverse().join('')
  return data === reversedStr 
}

const originalStringData = "a man can kind heart"
const checkingCondition = isPalindrom(originalStringData)
console.log(checkingCondition)

  return (
    <div>Restapi</div>
  )
}

export default Restapi