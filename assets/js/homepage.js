// var getUserRepos = function () {
//   console.log('function was called');
// };

// var getUserRepos = function () {
//   fetch('https://api.github.com/users/octocat/repos');
// };

// var getUserRepos = function () {
//   var response = fetch('https://api.github.com/users/octocat/repos');
//   console.log(response);
// };

//deming asynchronous communication showing that second console log is processed first
// var getUserRepos = function () {
//   fetch('https://api.github.com/users/octocat/repos').then(function (response) {
//     //console.log('inside', response);
//     console.log(response);
//   });
// };

// getUserRepos();

//to make the above json response more legible
var getUserRepos = function () {
  fetch('https://api.github.com/users/octocat/repos').then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

getUserRepos();
