{basename} = require('path')
{exec} = require('child_process')
coffee = require('coffee-script')

growl = (title, message, imagename)->
    exec("growlnotify '#{title}' -n 'CoffeeScript' -m '#{message}' --image '#{__dirname}/#{imagename}.png'")

coffee.on('failure', (error, task)->
    issue = error.message.split(',')[1].trim()
    growl(issue, basename(task.file), 'failure')
    console.error(error.message)
)

coffee.on('success', (task)->
    growl('Compiled', basename(task.file), 'success')
)
