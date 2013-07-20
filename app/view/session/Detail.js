Ext.define('HSFapp.view.session.Detail', {

	extend: 'Ext.Container',
	xtype: 'session',

	config: {

		layout: 'vbox',
		title: '',

		items: [
			{
                flex: 1,
                layout: 'fit',
                scrollable: 'vertical',
				xtype: 'sessionInfo'
			},
            {
                xtype: 'component',
                cls: 'dark',
                html: 'Speakers'
            },
			{
                flex: 2,
				xtype: 'speakers',
				store: 'SessionSpeakers'

			},
			{
				dockedItems:[
					{
						docked: 'left',
						xtype: 'button', 
						text: 'Register',
						iconCls: 'download', 
						layout: 'fit',
						iconMask: true,
						layout: {
							type: 'vbox',
							pack: 'justify'
						},
						handler: function() 
						{
							location.href='https://accounts.google.com/Login?service=profiles';
						} 
						},

						{
						docked: 'left', 
						layout: 'fit',
						xtype: 'button', 
						text: 'Related documents',
						iconCls: 'bookmarks', 
						iconMask: true,
						handler: function() 
						{
							location.href='https://drive.google.com/‎';
						} 
					},
					{
						docked: 'left', 
						layout: 'fit',
						xtype: 'button', 
						text: 'Share',
						iconCls: 'bookmarks', 
						iconMask: true,
						handler: function() 
						{
							location.href='http://m.google.com';
						} 
					}
				]
			}
		]

	}
});
