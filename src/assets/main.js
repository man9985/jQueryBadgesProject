$(function() {

	$.ajax({
    	url: 'https://www.codeschool.com/users/man9985.json',
    	dataType: 'jsonp',
    	success: function(response) {
      		completedCourses(response.courses.completed); //returning only my completed courses
    }
  });
  
	function completedCourses(courses) { //courses array

		var $badges = $('#badges'); //created 'jQueryfied' variable referencing the id #badges in index.html

		courses.forEach(function(course) { //for each completed course, we are creating these elements 

			var $course = $('<div />', { //creating div elements using jQuery
				'class': 'course'	//'class is in string due to it being a reserved word in JS and could cause issue in certain browsers'
			}).appendTo($badges);

			$('<h3 />', { //creating h3 elements & appending to the created divs
				text: course.title
			}).appendTo($course); //append to the div created by var $course

			$('<img />', { 	//adding images
				src: course.badge
			}).appendTo($course);

			$('<a />', { 	//adding anchor tags/links
				'class': 'btn btn-primary',
				target: '_blank',
				href: course.url,
				text: 'See Course'
			}).appendTo($course);
		})
	}

});
