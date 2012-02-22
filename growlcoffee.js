(function() {
  var coffee, exec, filename, growl;
  exec = require('child_process').exec;
  coffee = require('coffee-script');
  filename = function(filepath) {
    return filepath.split('/').slice(-1)[0];
  };
  growl = function(title, message, imagename) {
    console.log(title, message, imagename);
    return exec("growlnotify '" + title + "' -n 'CoffeeScript' -m '" + message + "' --image '" + __dirname + "/" + imagename + ".png'");
  };
  coffee.on('failure', function(error, task) {
    var issue;
    issue = error.message.split(',')[1].trim();
    growl(issue, filename(task.file), 'failure');
    return console.error(error.message);
  });
  coffee.on('success', function(task) {
    return growl('Compiled', filename(task.file), 'success');
  });
}).call(this);
