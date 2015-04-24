/*!
 * A LESS driven Bootstrap boilerplate integrated with Grunt, Bower, Jasmine, Istanbul & Karma
 * https://github.com/arvindr21/bootstrapBoilerPlate
 *
 * author : Arvind Ravulavaru
 * purpose : A sample source file consiting of couple of function to demo the placeholder for testing source
 * 
 */

'use strict';

/*
 * All logic needs to be isolated and written in such a way that each piece of the logic can be tested.
*/

function helloWorld() {
    return 'Hello world!';
};

// onkeyup handler
$("#add_a,#add_b").on("keyup", function(){
	var a = $.trim($("#add_a").val()), // trim, just to be safe, yes, you can add a test case for this too.
		b = $.trim($("#add_b").val());
	$("#add_c").val(Calculator.add(a,b));
});

// onkeyup handler
$("#sub_a,#sub_b").on("keyup", function(){
	var a = $.trim($("#sub_a").val()), // trim, just to be safe, yes, you can add a test case for this too.
		b = $.trim($("#sub_b").val());
	$("#sub_c").val(Calculator.substract(a,b));
});