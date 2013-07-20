//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'HSFapp': 'app'
});
//</debug>

Ext.require('HSFapp.util.Proxy');

Ext.application({
    // Change the values below to re-configure the app for a different conference.

    title:   'HSF Conference',
    dataUrl: 'http://young-dawn-6579.herokuapp.com/conferences/1.json',

    twitterSearch: '#HSFNews',

    mapCenter: [33.858996, -118.303175],
    mapText: 'Legen<br /><small> wait for it ... <br /> dary <br /> asdasd </small>',

    aboutPages: [
        {

            title: 'Overview',
            xtype: 'htmlPage',
            url: 'data/about.html'
        },
        {
            title: 'Videos',
            xtype: 'videoList',
            playlistId: '2737D508F656CCF8',
            hideText: 'HSF Conference '
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
        
    ],

    // App namespace

    name: 'HSFapp',

    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@72.png'
    },

    // Dependencies

    requires: ['HSFapp.util.Proxy'],

    models: [
        'Session',
        'Speaker'
    ],

    views: [
        'Main',

        'session.Card',
        'session.List',
        'session.Detail',
        'session.Info',

        'speaker.Card',
        'speaker.List',
        'speaker.Detail',
        'speaker.Info',

        'Tweets',
        'Location',

        'about.Card',
        'about.List',
        'about.HtmlPage',
        'about.VideoList'
    ],

    controllers: [
        'Sessions',
        'Speakers',
        'Tweets',
        'About'
    ],

    stores: [
        'Sessions',
        'SpeakerSessions',
        'Speakers',
        'SessionSpeakers',
        'Tweets',
        'Videos'
    ],

    launch: function() {

        Ext.Viewport.setMasked({ xtype: 'loadmask' });

        HSFapp.util.Proxy.process('data/feed.js', function() {
            Ext.Viewport.add({ xtype: 'main' });
            Ext.Viewport.setMasked(false);
        });

        // setInterval(function(){
        //     Ext.DomQuery.select('link')[0].href = "resources/css/oreilly.css?" + Math.ceil(Math.random() * 100000000)
        // }, 1000);
    }

});
