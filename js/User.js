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
        var usernameLogIn = username;
        var passwordLogIn = password;
        var dataExisted = JSON.parse(localStorage.getItem('userList'));

        var item = dataExisted.find(i=> i.username === usernameLogIn && i.password === passwordLogIn);
        if(item !== undefined){
            $scope.userLogin.push({
                username: username,
                password: password
            });
            localStorage.setItem("userLogin", JSON.stringify($scope.userLogin));
            window.location.href = "publicStories.html";
        }else{
            alert("You have to register first!")
        }

    }

    $scope.displayProfile = function () {
        let userDet = JSON.parse(localStorage.getItem('userList'));
        let logindet = JSON.parse(localStorage.getItem('userLogin'));

        let uname = logindet[0].username;
        let item = userDet.find(i=> i.username === uname);

        console.log(logindet[0]);
        console.log(uname);
        console.log(item);

        $scope.profileDet = item;
        
    }

    $scope.updateProfile = function(){
        
    }

    $scope.logOut = function(){
        localStorage.removeItem("userLogin");
        window.location.href = "homepage.html";
    }
}