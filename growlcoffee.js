(function() {
  var coffeescript, exec, filename, notify;
  exec = require('child_process').exec;
  coffeescript = require('coffee-script');
  filename = function(filepath) {
    return filepath.split('/').slice(-1);
  };
  notify = function(title, message, type) {
    return exec("growlnotify " + title + " -n 'CoffeeScript' -m '" + message + "' --image '" + __dirname + "/" + type + ".png'");
  };
  coffeescript.on('failure', function(error, task) {
    var issue;
    issue = ("" + error).split(',')[1].trim();
    return notify(issue, filename(task.file), 'failure');
  });
  coffeescript.on('success', function(task) {
    return notify('Compiled', filename(task.file), 'success');
  });
}).call(this);
