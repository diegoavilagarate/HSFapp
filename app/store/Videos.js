Ext.define('HSFapp.store.Videos', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['thumbnail', 'title'],

        proxy: {
            type: 'jsonp',

            reader: {
                type: 'json',
                rootProperty: 'data.items',
                record: 'video'
            }
        }
    }
});
