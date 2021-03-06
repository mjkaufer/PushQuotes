Template.layout.onRendered(function(){
	if (Meteor.userId()){
		Session.set('loggedIn', true); 
	} else {
		Session.set('loggedIn', false);
	}
})

Template.layout.events({
	'click .transition-link': function(e){
		e.preventDefault();
		var url = $(e.currentTarget).attr('href');

		if (url !== window.location.pathname){
			var page = $('.page');
			var pageTitle = Session.get('currentPageTitle');
			var animationSequence = PageAnimationSequences[pageTitle];

			_.each(animationSequence, function(element, index){
				AnimateItem($(element.item), element.animation);
			});
			// AnimateItem(page, Session.get('animateOut') || DefaultPageAnimateOut);

			var items = $('.item');

			_.each(items, function(item, index){
				$(item).velocity({
					opacity: 0,
					translateY: -20
				}, {duration: 1000, easing:[300, 20], delay: index * 50}); 
			})

			Meteor.setTimeout(function(){
				Router.go(url);
			}, 500);
		} else {
			return false;
		}
	}
})