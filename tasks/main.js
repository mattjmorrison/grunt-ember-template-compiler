module.exports = function(grunt){
    var glob = require('glob');
    var fs = require('fs');
    var mkdirp = require('mkdirp');
    var compiler = require('ember-template-compiler');
    var dirname = require('path').dirname;

    grunt.registerMultiTask('emberhandlebars', 'Compile Ember Templates', function(){
        var files = this.data.files;
        var dest = this.data.dest;
        var formatName = this.data.options.templateName;

        var output = "";
        files.forEach(function(pattern){
            glob.sync(pattern).forEach(function(pathMatch){
                var contents = fs.readFileSync(pathMatch).toString();
                var compiled = compiler.precompile(contents).toString();
                output += "Ember.TEMPLATES['" + formatName(pathMatch) + "'] = Ember.Handlebars.template(" + compiled + ");";
            });
        });

        mkdirp(dirname(dest));
        fs.writeFileSync(dest, output);
    });
};
