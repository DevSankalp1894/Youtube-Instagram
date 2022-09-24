



class User {

    constructor() {

    }



    async signUp(n,e,u,p,m,d) {
       
      let isValidated = this.#checkUsername(u) && this.#checkPassword(p);
      
      if(isValidated) {

          this.name= n;
          this.email=e;
          this.username=u;
          this.password=p;
          this.mobile=m;
          this.description=d;


       let actual_data = JSON.stringify(this);

       let res = await fetch ('https://masai-api-mocker.herokuapp.com/auth/register' , {

         method : 'POST',

         body : actual_data,

         headers : {

          'Content-Type' :'application/json',

         },


       })

       let data =await res.json();

       console.log(data);
       console.log('Shi hai Bhai');

      }                                             

    }

    #checkUsername(username) {

        let value = username.includes('#') ? false : true;

          return value;
    }

    #checkPassword(password) {

      let value = password.length < 8 ? false : true;

        return value;
  }

  
      async logIn(LuserName,Lpassword) {

      let data = {
             username : LuserName,
             password : Lpassword,
      }

        console.log(data);

      let deta = JSON.stringify(data);

      let res = await fetch ('https://masai-api-mocker.herokuapp.com/auth/login' , {

         method : 'POST',

         body : deta,

         headers : {
          'Content-Type' :'application/json',
         }
      })

       let logindata= await res. json();

       console.log(logindata);

       this.getProfile(data.username,logindata.token);
        
  }

         async getProfile(username,token){

          let url =`https://masai-api-mocker.herokuapp.com/user/${username}`;

          let res = await  fetch(url ,{
                
           
              headers : {
                  'Content-Type' :'application/json',

              

              Authorization:` Bearer ${token}`,

              },
           
          })

          let gData = await res .json();

            console.log(gData);

            localStorage.setItem('you',JSON.stringify(gData));

    }

      }

  let u1 = new User();

  function Register(){
       let name=document.getElementById('name').value;
       let email=document.getElementById('email').value;
       let username=document.getElementById('username').value;
       let password=document.getElementById('password').value;
       let mobile=document.getElementById('mobile').value;
       let desc=document.getElementById('description').value;

       u1.signUp(name,email,username,password,mobile,desc);
  }

  function logIn() {
       
      let luser=document.getElementById('login-username').value;
      let lpass =document.getElementById('login-password').value;

       u1.logIn(luser,lpass);

     
  }