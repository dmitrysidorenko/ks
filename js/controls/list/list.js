define(['knockout', 'BaseControl', 'BaseSource'], function(ko, BaseControl, BaseSource){
	function ListControl(options, dataContext){
		this.constructor.__super__.call(this, dataContext);

		this.source = new BaseSource(dataContext, {});

		this.addClass = options.addClass || '';
		this.itemTemplate = options.itemTemplate || "<a href='#' data-bind='text:value'></a>";

		if(ko.isObservable(options.selectedItem)){
			this.selectedItem = options.selectedItem;
		} else {
			this.selectedItem = ko.observable(options.selectedItem);
		}
	}

	BaseControl.extend(ListControl);

	ListControl.prototype.selectItem = function(data, index) {
		this.selectedItem(data);
	};

	return ListControl;
});