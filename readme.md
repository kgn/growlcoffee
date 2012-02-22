# Growl notifications for CoffeeScript

![screenshot](https://github.com/kgn/growlcoffee/raw/master/screenshot.png)

## Setup

First you'll need to have [Growl](http://growl.info/) and [growlnotify](http://growl.info/extras.php#growlnotify) installed.

Next install `growlcoffee` with: 

    npm -g install growlcoffee

Last add `-r growlcoffee` to your `coffee` commands. For example here is the commend to watch and compile the coffeescript files in the current directory:

    coffee -r growlcoffee -w -c .

Whenever a file is updated a growl notification will occur letting you know if the compilation was successful or if there was a problem.

## License

growlcoffee is distributed under the [MIT License](https://github.com/kgn/growlcoffee/blob/master/license).
