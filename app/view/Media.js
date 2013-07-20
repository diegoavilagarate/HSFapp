Ext.define('HSFapp.view.Media', {
    extend: 'Ext.Panel',
    xtype: 'mediapanel',

    config: {
        title: 'Media',
        store: 'Videos'
    },

    initialize: function() {
    	this.callParent();
    	items: [
    		{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Speakers'
            }
    	]
    }


});