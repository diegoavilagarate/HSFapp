Ext.define('HSFapp.view.Media', {
    extend: 'Ext.Panel',
    xtype: 'mediapanel',

    config: {
        title: 'About'
    },

    
    	items: [
    		        {
            title: 'Overview',
            xtype: 'htmlPage',
            url: 'data/about.html'
        },
        {
            title: 'Sponsors',
            xtype: 'htmlPage',
            url: 'data/sponsors.html'
        },
        {
            title: 'Credits',
            xtype: 'htmlPage',
            url: 'data/credits.html'
        }
    	]
    


});