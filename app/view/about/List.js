Ext.define('HSFapp.view.about.List', {

	extend: 'Ext.List',
	xtype: 'aboutList',

	config: {
		title: 'Media',
		ui: 'round',
		itemTpl: [ '{title}' ]
	},

	initialize: function() {
		this.callParent();
		this.setData(HSFapp.app.aboutPages);
	}
});
