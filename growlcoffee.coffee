{exec} = require('child_process')
coffeescript = require('coffee-script')

filename = (filepath)->
    filepath.split('/').slice(-1)

notify = (title, message, type)-> #TODO: show stderr
    exec("growlnotify #{title} -n 'CoffeeScript' -m '#{message}' --image '#{__dirname}/#{type}.png'")

coffeescript.on('failure', (error, task)->
    issue = "#{error}".split(',')[1].trim()
    notify(issue, filename(task.file), 'failure')
)

coffeescript.on('success', (task)->
    notify('Compiled', filename(task.file), 'success')
)
