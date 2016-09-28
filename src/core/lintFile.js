'use strict'


/**
 * @description runs tests according to config ( or all if strict is true )
 * @return {Function | undefined} undefined if just calling the method, function is linting over
 */
var lintFile = function(file) {
	var checks = Object.getPrototypeOf( this ).lintFileMethods

	var method = ''
	for ( method in checks ) {
		if ( checks.hasOwnProperty( method ) ) {
			this.state.conf = this.config[method].expect || this.config[method]
			checks[method].call( this, file.toString())
		}
	}
}

module.exports = lintFile
