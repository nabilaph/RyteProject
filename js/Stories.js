function StoriesController ($scope){
    $scope.storiesList = (localStorage.getItem('storiesList') !== null)?
    JSON.parse(localStorage.getItem('storiesList')): [];
    localStorage.setItem('storiesList', JSON.stringify($scope.storiesList));

    $scope.userList = localStorage.getItem('userList');
    $scope.userLogin = localStorage.getItem('userLogin');

    $scope.likesCount = 0;
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
        let str = JSON.parse(localStorage.getItem('storiesList'));

        str.push({
            username: username,
            storiesContent : $scope.storiesContent,
            date : currentDate,
            likesCount : $scope.likesCount
        });
        localStorage.setItem("storiesList", JSON.stringify(str));
        alert("Your stores is posted!");
        $scope.storiesContent = "";
        viewAllStories();

    }


    $scope.viewMyStories = function(){

        let stories = [];
        let userDet = JSON.parse(localStorage.getItem('userLogin'));
        let uname = userDet[0].username; 
        let storiesDet = JSON.parse(localStorage.getItem('storiesList'));

        let item = storiesDet.find(i=> i.username === uname);

        if(item !== undefined){
        
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
            return true;
        }else{
            return false;
        }
    }

    $scope.deleteStories = function(x){
        var c = confirm('Are you sure want to delete this story?')
        if(c)
        {
            let oldStories = x;
            let cStories = JSON.parse(localStorage.getItem('storiesList'));
            let idx = cStories.findIndex(item => item.username === oldStories.username && item.storiesContent === oldStories.storiesContent
                && item.date === oldStories.date
                && item.likesCount === oldStories.likesCount);
            cStories.splice(idx,1);
            
            localStorage.setItem("storiesList", JSON.stringify(cStories));

            let contoh= JSON.parse(localStorage.getItem('storiesList'));
            console.log(oldStories);
            console.log(cStories);
            console.log(idx);

            alert("Story deleted.");
           
        }
	
    }

    $scope.likeStories = function(x){
        const likeBtn = document.querySelector('.fas.fa-heart');

        let likesdata = x;
        let cLikes = JSON.parse(localStorage.getItem('storiesList'));
        let idx = cLikes.findIndex(item => item.username === likesdata.username && item.storiesContent === likesdata.storiesContent
                && item.date === likesdata.date
                && item.likesCount === likesdata.likesCount);

        if(likeBtn.classList.contains('liked')){

            cLikes[idx].likesCount = cLikes[idx].likesCount - 1;
            localStorage.setItem("storiesList", JSON.stringify(cLikes));

            likeBtn.style.color = "#808080";
            likeBtn.classList.remove("liked");
            alert("You unlike the post :(");
        }else{
                            
            cLikes[idx].likesCount = cLikes[idx].likesCount + 1;
            localStorage.setItem("storiesList", JSON.stringify(cLikes));

            likeBtn.style.color = "red";
            likeBtn.classList.add("liked");
            alert("You like the post!");
        }
        
    }

    $scope.countInsight = function(){
        let stories = [];
        let likeCount = 0;
        let userDet = JSON.parse(localStorage.getItem('userLogin'));
        let uname = userDet[0].username; 
        let storiesDet = JSON.parse(localStorage.getItem('storiesList'));

        storiesDet.forEach((x)=>{
            if(x.username ===uname){
                stories.push({
                    username: x.username,
                    storiesContent : x.storiesContent,
                    date : x.date,
                    likesCount : x.likesCount
                });
                likeCount = likeCount + x.likesCount;
            }
        });

        $scope.likesCount = likeCount;
        $scope.postCount = stories.length;
    }
}