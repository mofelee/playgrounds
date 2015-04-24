## Resources
http://build-podcast.com/mocha/ 

## Steps
- create indexSpec.js 
- run `mocha indexSpec*.js`

## mocha
- see [indexSpecMocha.js]
- defines tests and modules
	- describe()
		- it()

## Assertion libraries
- provide expect, assert, ... functions
- chai
	- see [indexSpecMochaChai.js]
	- expect(x).to.equal('foo')
	- expect(x).to.be.a('string')
	- expect(x).to.not.be.a('number')
	- expect(x).to.contain('fo')
	- ...