(function() {
  var basename, coffee, exec, growl;
  basename = require('path').basename;
  exec = require('child_process').exec;
  coffee = require('coffee-script');
  growl = function(title, message, imagename) {
    return exec("growlnotify '" + title + "' -n 'CoffeeScript' -m '" + message + "' --image '" + __dirname + "/" + imagename + ".png'");
  };
  coffee.on('failure', function(error, task) {
    var issue;
    issue = error.message.split(',')[1].trim();
    growl(issue, basename(task.file), 'failure');
    return console.error(error.message);
  });
  coffee.on('success', function(task) {
    return growl('Compiled', basename(task.file), 'success');
  });
}).call(this);
