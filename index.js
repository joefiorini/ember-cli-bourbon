var fs = require('fs');
var path = require('path');

function EmberCLIBourbon(project) {
  this.project = project;
  this.name = 'Ember CLI Bourbon';
}

EmberCLIBourbon.prototype.treeFor = function() {
  console.log('ARGS', arguments);
  var treePath = path.join('vendor/bourbon/dist');

  return treePath;
};

EmberCLIBourbon.prototype.included = function included(app) {
  fs.readdirSync('vendor/bourbon/dist').forEach(function(file) {
    var fullPath = path.join('vendor/bourbon/dist', file);
    var stat = fs.statSync(fullPath);
    if(stat.isFile()) {
      console.log('importing ', fullPath);
      app.import(fullPath);
    }
  });
};

module.exports = EmberCLIBourbon;
