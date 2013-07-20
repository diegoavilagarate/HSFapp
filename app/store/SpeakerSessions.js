Ext.define('HSFapp.store.SpeakerSessions', {
	extend: 'Ext.data.Store',

    config: {
        model: 'HSFapp.model.Session',

        sorters: [
            {
                property: 'time',
                direction: 'ASC'
            }
        ]
    }
});
