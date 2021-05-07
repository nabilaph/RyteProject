function UserController ($scope){
    $scope.userList = (localStorage.getItem('userList') !== null)?
    JSON.parse(localStorage.getItem('userList')): [];
    localStorage.setItem('userList', JSON.stringify($scope.userList));

    $scope.userLogin = (localStorage.getItem('userLogin') !== null)?
    JSON.parse(localStorage.getItem('userLogin')): [];
    localStorage.setItem('userLogin', JSON.stringify($scope.userLogin));

    $scope.profileDet = [];

    $scope.addUser = function(){

        var usernameTyped = $scope.username;
        var usernameExisted = JSON.parse(localStorage.getItem('userList'));

        var item = usernameExisted.find(i=> i.username === usernameTyped);
        console.log(item);
            if(item !== undefined){
                alert("username already existed!");

            }else{
                $scope.userList.push({
                    fullname: $scope.fullname,
                    username: $scope.username,
                    email: $scope.email,
                    password: $scope.password
                });
                localStorage.setItem("userList", JSON.stringify($scope.userList));
                window.location.href = "loginpage.html";
              }            
        
    }

    $scope.checkUser = function(username, password){
        let usernameLogIn = username;
        let passwordLogIn = password;
        let dataExisted = JSON.parse(localStorage.getItem('userList'));

        let item = dataExisted.find(i=> i.username === usernameLogIn && i.password === passwordLogIn);

        // console.log(item.username);
        // console.log(item.password);
        console.log(item);

        if(item !== undefined){
            $scope.userLogin.push({
                username: username,
                password: password
            });
            localStorage.setItem("userLogin", JSON.stringify($scope.userLogin));
            window.location.href = "publicStories.html";
        }
        // else if (usernameLogIn !== item.username || passwordLogIn !== item.password){
        //     alert("Username or Password incorrect!")
        // }
        else{
            alert("You have to register first!")
        }

    }

    $scope.displayProfile = function () {
        let userDet = JSON.parse(localStorage.getItem('userList'));
        let logindet = JSON.parse(localStorage.getItem('userLogin'));

        let uname = logindet[0].username;
        let item = userDet.find(i=> i.username === uname);

        $scope.profileDet = item;
        $scope.fullname = $scope.profileDet.fullname;
        $scope.username = $scope.profileDet.username;
        $scope.email = $scope.profileDet.email;
        $scope.password = $scope.profileDet.password;
        
    }

    $scope.updateProfile = function(){
        var c = confirm('Are you sure want to update your profile?')
        if(c){
            let userdata = JSON.parse(localStorage.getItem('userLogin'));
            let cUsers = JSON.parse(localStorage.getItem('userList'));
            let idx = cUsers.findIndex(item => item.username === userdata[0].username && item.password === userdata[0].password);

            console.log($scope.fullname);
            console.log(userdata);
            console.log(idx);
            console.log(cUsers);


            cUsers[idx].fullname = $scope.fullname;
            cUsers[idx].username = $scope.username;
            cUsers[idx].email = $scope.email;
            cUsers[idx].password = $scope.password;

            localStorage.setItem("userList", JSON.stringify(cUsers));
            alert("Your Profile is successfully updated!");
            window.location.href = "pofile.html";
        }
        
    }

    $scope.logOut = function(){
        localStorage.removeItem("userLogin");
        window.location.href = "homepage.html";
    }
}