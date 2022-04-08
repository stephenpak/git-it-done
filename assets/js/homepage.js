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

//to make the above response more legible with json syntax
// var getUserRepos = function () {
//   fetch('https://api.github.com/users/octocat/repos').then(function (response) {
//     response.json().then(function (data) {
//       console.log(data);
//     });
//   });
// };

// getUserRepos();

//upto now, API requests were tested to make sure it works before incorporating to function
//now we can re write the function that everything was verified
var getUserRepos = function (user) {
  // format the github api url
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

getUserRepos();
