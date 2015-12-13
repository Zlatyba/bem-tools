var install = require('../lib/install');

module.exports = function() {
    this
        .title('Install a plugin').helpful()
        .arg()
            .name('name').title('Name')
            .end()
        .act(function(opts, args) {
            install.install(args.name);
        })
    .end();
};
