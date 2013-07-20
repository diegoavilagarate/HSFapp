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
			{ xtype: 'home', iconCls: 'home'},		// Home icon
			{ xclass: 'HSFapp.view.session.Card' },	// Agenda/Conference schedule
			{ xclass: 'HSFapp.view.speaker.Card' },	// Speakers (potentially generalize to "people" --> speakers + attendees")
			{ xclass: 'HSFapp.view.Tweets'   },		// Twitter feed / social network
			{ xtype: 'mediapanel', iconCls: 'photos2'}, // Media (photo or video)
			{ xclass: 'HSFapp.view.Location' },		// Maps / floor plans / directions
			{ xclass: 'HSFapp.view.about.Card' },	// Info / About tab
			{ xtype: 'Resources', iconCls: 'doc_drawer' }	// Documents+Resources
		]

	}
});
