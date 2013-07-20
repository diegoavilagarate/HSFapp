Ext.define('HSFapp.view.about.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'aboutContainer',

	config: {

		title: 'About',
        iconCls: 'info',

        autoDestroy: false,

		items: [
			{
				xtype: 'aboutList'
			}
		]
	}
});
