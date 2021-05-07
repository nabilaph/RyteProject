function StoriesController ($scope){
    $scope.storiesList = (localStorage.getItem('storiesList') !== null)?
    JSON.parse(localStorage.getItem('storiesList')): [];
    localStorage.setItem('storiesList', JSON.stringify($scope.storiesList));

    $scope.userList = localStorage.getItem('userList');
    $scope.userLogin = localStorage.getItem('userLogin');

    $scope.likesCount = 0;
    $scope.followersCount = 0;
    $scope.postCount = 0;

    $scope.myStories = [];

    $scope.viewAllStories = function(){

        if($scope.storiesList !== undefined){
            $scope.storiesList = JSON.parse(localStorage.getItem('storiesList'));
            return true;
        }else{
            return false;
        }

    }

    $scope.addStories = function(){
        var userDet = JSON.parse(localStorage.getItem('userLogin'));
        var username = userDet[0].username;

        var currentDate = new Date();
        // var cDate = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');

        console.log(username);

        $scope.storiesList.push({
            username: username,
            storiesContent : $scope.storiesContent,
            date : currentDate,
            likesCount : $scope.likesCount
        });
        localStorage.setItem("storiesList", JSON.stringify($scope.storiesList));
        alert("Your stores is posted!");
        // window.location.href = "publicStories.html";
        viewAllStories();

    }


    $scope.viewMyStories = function(){

        let stories = [];
        let userDet = JSON.parse(localStorage.getItem('userLogin'));
        let uname = userDet[0].username; 
        let storiesDet = JSON.parse(localStorage.getItem('storiesList'));

        let item = storiesDet.find(i=> i.username === uname);

        console.log(uname);

        if(item !== undefined){
        //    storiesDet.forEach(i => {
        //         let items = storiesDet.find(i => i.username === uname);
        //         stories.add(items[i]);
        //       });
        //       $scope.myStories = stories;
        //       console.log($scope.myStories);

            storiesDet.forEach((x)=>{
                if(x.username ===uname){
                    stories.push({
                        username: x.username,
                        storiesContent : x.storiesContent,
                        date : x.date,
                        likesCount : x.likesCount
                    });
                }
            });
            $scope.myStories = stories;
            console.log($scope.myStories);
            return true;
        }else{
            return false;
        }
    }

    $scope.editStories = function(){
        let userlogin = JSON.parse(localStorage.getItem('userLogin'));
        let userdet =JSON.parse(localStorage.getItem('userList'));
        let uname = userlogin[0].username; 
        let userDet = userdet.find(i => i.username === uname);
        let selected_index =  $(this).userDet("id"); 
        let storiesSelected = storiesList.find(i => i.username === uname);
        $scope.storiesList[selected_index] = JSON.stringify({
			username: $scope.username,
            storiesContent : $scope.storiesContent,
            date : currentDate,
            likesCount : $scope.likesCount
            });//Edit Data Yang Dipilih
        localStorage.setItem("storiesList", JSON.stringify(storiesList));
        alert("The data was edited.")
    }

    $scope.getIndex = function(){

    }

    $scope.deleteStories = function(){
        var c = confirm('Apakah Yakin Data Ini Akan Di Hapus?')
        if(c)
        {
            let selected_index =  $(this).data("id");
            $scope.storiesList.splice(selected_index, 1);
            localStorage.setItem("storiesList", JSON.stringify($scope.storiesList));
            alert("Stroy deleted.");
            viewMyStories();
        }
	
    }
}