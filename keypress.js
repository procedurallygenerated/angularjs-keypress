angular.module('keypress', [])
.directive('keypress', function(){
	return {
		restrict: 'A',
		link: function(scope, elem, attr, ctrl) {
			final_key_mappings={};
			var actions=attr.keypress.split(",");
			for(var i=0;i<actions.length;i++) {
				if(actions[i].trim()) {
					var key_mappings=actions[i].split(":");
					if(key_mappings.length==2 && key_mappings[0].trim() && key_mappings[1].trim()) {
						key=key_mappings[0].trim().split("||");
						if(key.length!=1) {
							for(var j=0;j<key.length;j++) {
								if(key[j].trim()) {
									final_key_mappings[key[j].trim()]=key_mappings[1].trim();			
								}
							}
						} else {
							final_key_mappings[key_mappings[0].trim()]=key_mappings[1].trim();	
						}
					}
				}
			}
			elem.bind('keydown', function(e){
				if(final_key_mappings[e.which]) {
					scope.$apply(function(s) {
						s.$eval(final_key_mappings[e.which]);
					});
				}
			});
		}
	};
});
