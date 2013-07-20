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
<<<<<<< HEAD
			{ xtype: 'mediapanel', iconCls: 'photos2'},
=======
>>>>>>> 7a94a50d22187b80dc9d86f3c63369de94a6aabb
			{ xclass: 'HSFapp.view.Location' },
			{ xclass: 'HSFapp.view.about.Card' },
			{ xtype: 'Resources', iconCls: 'doc_drawer' }
		]
	}
});
