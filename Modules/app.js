(function (){
  'use strict'
  angular.module('app',[])
    .component('paulsReddit', {
      controller:
      function($scope) {

// keep your variables up here!
      const vm = this;
      vm.newPostVis = false;
      vm.commentsVis =false;
      vm.fields = ['votes', 'date', 'title'];
      vm.posts =[
        {
        title: "titlechange!",
        author: "Linus Lane",
        image: "https://scontent-lga3-1.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/11809944_1676694042554573_495250395_n.jpg",
        body: "Hey, hey, we're the Monkees, and people say we monkey around. But we're too busy singing to put anybody down. We're just tryin' to be friendly, come and watch us sing and play. We're the young gneration, and we've got something to say.",
        time: new date(),
        counter:5,
        comments: [
        {comment:"monkeys are awesome but not as cool as birds"}
        ]},
        {title: "Monkey costumes are totally in this season",
      author: "Linus Lane",
      image: "https://scontent-lga3-1.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/11809944_1676694042554573_495250395_n.jpg",
      body: "Hey, hey, we're the Monkees, and people say we monkey around. But we're too busy singing to put anybody down. We're just tryin' to be friendly, come and watch us sing and play. We're the young gneration, and we've got something to say.",
      time: ' yesterday',
      counter:0,
      comments: [{
        comment:"I don't like monkeys!"
      },
      {comment:"monkeys are awesome but not as cool as birds"}]
        }
      ]




// mah functions!
      vm.toggleNewPost = function(){
        // console.log("linked!");
        vm.newPostVis = !vm.newPostVis;
        //  $scope.newPostVis ? true : false;
      }
      vm.toggleComments = function(post){
        // console.log("linked!");
        post.commentsVis = !post.commentsVis;
        //  $scope.newPostVis ? true : false;
      }

      //need to do something to prevent get request- a good ol' prevendefault?
      vm.createNewPost = function(){

        vm.newPostForm.$setPristine();
        vm.newPost.time = new Date ();
        vm.newPost.counter = 0;
        vm.newPost.comments = [];
        /*the lines below are commented out...I was trying to refine the date...something to come back to in the refactoriing process! */
        // var roughTime = new Date ();
        // vm.newPost.time = roughTime.slice(0,10);
        console.log(vm.newPost);
        console.log(vm.posts);
        vm.posts.push(vm.newPost);

        delete vm.newPost
      }
      vm.createNewComment= function(post){
        var cObj = {comment: vm.newComment}

        console.log("linked!", post.comments)
        post.comments.push(cObj);
        console.log(vm.posts);
        delete vm.newComment;
      }

      vm.increment = function(post) {

        //  console.log(post.counter)
         post.counter++;
      }
      vm.decrement = function(post) {
        // console.log(post.counter)
        if (post.counter > 0) {
          post.counter--;
        }

      }
      vm.orderByVal = function(category) {
        console.log('linked!', category)

        vm.orderByVal = category;

      }

    },
    templateUrl:'../htmlTemplates/everything.html'

    })
})()
