(function(){
	ko.bindingHandlers.addClass = {
		init:function(el, valueAccessor, allBindingsAccessor, viewModel, bindingContext){
			var options = ko.utils.unwrapObservable(valueAccessor);
			$(el).addClass(options);
		}
	};
})();