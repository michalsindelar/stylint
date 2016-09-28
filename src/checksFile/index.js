var stampit = require( 'stampit' )

// group together all the checks in this folder
var linterMethodsFile = stampit().methods( {
	lintFileMethods: {
		uniqueOccurrence: require( './uniqueOccurrence' ),
	},
} )

module.exports = linterMethodsFile
