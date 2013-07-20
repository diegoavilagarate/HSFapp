//
// -------------------- CARD -------------------- //
//
Ext.define('HSFapp.view.session.Card', {

    extend: 'Ext.NavigationView',
    xtype: 'sessionContainer',

    config: {

        title: 'Agenda',
        iconCls: 'time',

        autoDestroy: false,

        items: [
            {
                xtype: 'sessions',
                store: 'Sessions',
                grouped: true,
                pinHeaders: false
            }
        ]
    }
});

/*
//
// -------------------- DETAIL -------------------- //
//
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
                            location.href='http://m.google.com';
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
                            location.href='http://m.google.com';
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


//
// -------------------- INFO -------------------- //
//
Ext.define('HSFapp.view.session.Info', {

    extend: 'Ext.Container',
    xtype: 'sessionInfo',

    config: {

        cls: 'sessionInfo',

        tpl: Ext.create('Ext.XTemplate',
            '<h3>{title} <small>{room}</small></h3>',
            '<h4>{proposal_type} at {[this.formatTime(values.time)]}</h4>',
            '<p>{description}</p>',
            {
                formatTime: function(time) {
                    return ''; //Ext.Date.format(time, 'g:ia, m/d/Y')
                }
            }
        )
    }
});


//
// -------------------- LIST -------------------- //
//
Ext.define('HSFapp.view.session.List', {

    extend: 'Ext.List',
    requires: 'Ext.SegmentedButton',

    xtype: 'sessions',

    config: {
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'gray',

                items: [
                    {
                        width: '100%',
                        defaults: {
                            flex: 1
                        },
                        xtype: 'segmentedbutton',
                        allowDepress: false
                    }
                ]
            }
        ],
        variableHeights: true,
        useSimpleItems: true,
        itemTpl: [
            '<div class="session"><div class="title">{title}</div><div class="room">{room}</div></div>'
        ]
    },

    initialize: function() {
        this.config.title = HSFapp.app.title;
        this.callParent();

        var segmentedButton = this.down('segmentedbutton');

        Ext.Array.each(HSFapp.sessionDays, function(day) {
            segmentedButton.add(day);
        });
    }
});*/


