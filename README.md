![landing page](https://raw.githubusercontent.com/ZhengTzer/loginPage/master/public/images/loginPage.png)

# Login Page
A simple log in page without db connection for testing

## Features
- Check if information doesn't match, return error
- Else, bring the person first name into welcome page as success indicator
- Upon success, set signed cookie
- check for cookie upon return
- remove cookie when logout

## To be developed
- [X] set cookie
- [X] remove cookie
- [ ] db connection
- [ ] forgot password sending out email to remind user

## Installation
step 1: git clone  
```https://github.com/ZhengTzer/loginPage.git```  

step 2: cd to the folder  

step 3: install related modules in git bash  
```npm install```  

step 4: install nodemon if your local doesn't install before  
```npm i nodemon -g```  

step 5: start the app by key in command as below  
```npm run dev```  

step 6: open url as below in browser  
```http://localhost:3000/```
