Ext.define('HSFapp.view.Main', {

	extend: 'Ext.tab.Panel',
	xtype: 'main',
	 requires: [
	 	'HSFapp.view.Media'
	 ],

	config: {

		tabBarPosition: 'bottom',
		tabBar: {
			ui: 'gray'
		},

		items: [
			{ xtype: 'home', iconCls: 'home'},
			{ xclass: 'HSFapp.view.session.Card' },
			{ xclass: 'HSFapp.view.speaker.Card' },
			{ xclass: 'HSFapp.view.Tweets'   },
			{ xtype: 'mediapanel', iconCls: 'photos2'},
			{ xclass: 'HSFapp.view.Location' },
			{ xclass: 'HSFapp.view.about.Card' },
			{ xtype: 'Resources', iconCls: 'doc_drawer' }
		]
	}
});
