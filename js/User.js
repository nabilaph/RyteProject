function UserController ($scope){
    $scope.userList = (localStorage.getItem('userList') !== null)?
    JSON.parse(localStorage.getItem('userList')): [];

    localStorage.setItem('userList', JSON.stringify($scope.userList));

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
            
        }

    }
}