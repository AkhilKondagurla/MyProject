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
       
       
      
  return (
    <div>Restapi</div>
  )
}

export default Restapi