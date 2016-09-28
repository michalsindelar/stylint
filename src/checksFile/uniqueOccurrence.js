'use strict'


/**
 * @description disallows multiple usage of media queries
 * @param {string} [file] whole file
 * @return {boolean} true if multiple usage found, false if not
 */
var uniqueOccurrence = function( file ) {
	// TODO: Not very nice
	if (file.indexOf('@stylint ignore') !== -1) {
		return false
	}

	// Array of unique string in this.state.conf

	var self = this
	this.state.conf.map(function( query ) {
		var queryCount = (escape(file).match(new RegExp(escape(query), 'g') ) || []).length
		var maximalCount = 1

		if (queryCount > maximalCount) {
			self.msg(
				'Found ' + queryCount + ' occurrences of \"' + query + '\" , ' +
				'but only ' + maximalCount + ' occurrence allowed.'
			)

			return true
		}
	})

	return false
}

module.exports = uniqueOccurrence
