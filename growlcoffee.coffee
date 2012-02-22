{exec} = require('child_process')
coffee = require('coffee-script')

filename = (filepath)->
    filepath.split('/').slice(-1)

growl = (title, message, imagename)->
    exec("growlnotify #{title} -n 'CoffeeScript' -m '#{message}' --image '#{__dirname}/#{imagename}.png'")

coffee.on('failure', (error, task)->
    issue = error.message.split(',')[1].trim()
    growl(issue, filename(task.file), 'failure')
    console.error(error.message)
)

coffee.on('success', (task)->
    growl('Compiled', filename(task.file), 'success')
)
