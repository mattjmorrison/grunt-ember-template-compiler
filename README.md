# grunt-ember-template-compiler


## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ember-template-compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ember-template-compiler');
```

## Usage Example:

```js
emberhandlebars: {
  compile: {
    options: {
      templateName: function(sourceFile){
        var newSource = sourcefile.replace('src/templates/');
        return newSource.replace('.handlebars');
      }
    },
    files: [
      'src/templates/*.handlebars'
    ],
    dest: 'src/templates.js'
  }
}
```

## MultiTask Usage Example:

```js
emberhandlebars: {
  task_one: {
    options: {
      templateName: function(sourceFile){
        var newSource = sourcefile.replace('src/one/templates/');
        return newSource.replace('.handlebars');
      }
    },
    files: [
      'src/one/templates/*.handlebars'
    ],
    dest: 'src/one/templates.js'
  },
  task_two: {
    options: {
      templateName: function(sourceFile){
        var newSource = sourcefile.replace('src/two/templates/');
        return newSource.replace('.handlebars');
      }
    },
    files: [
      'src/two/templates/*.handlebars'
    ],
    dest: 'src/two/templates.js'
  }
}
```
