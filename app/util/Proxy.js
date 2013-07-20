Ext.define('HSFapp.util.Proxy', {

	singleton: true,

	requires: ['Ext.data.proxy.JsonP'],

	process: function(url, callback) {

		var sessionStore = Ext.getStore('Sessions'),
		    speakerStore = Ext.getStore('Speakers'),
		    sessionSpeakerStore = Ext.getStore('SessionSpeakers'),
		    speakerSessionStore = Ext.getStore('SpeakerSessions'),
		    sessionIds, proposalModel, speakerModel, speakerSessions = {}, sessionId, speaker, sessionDays = {};

		Ext.data.JsonP.request({
		    url: 'http://young-dawn-6579.herokuapp.com/conferences/1.js',
		    callbackName: 'feedCb',

		    success: function(data) {

		        Ext.Array.each(data.proposals, function(proposal) {

		            proposal.speakerIds = [];
		            proposalModel = Ext.create('HSFapp.model.Session', proposal);

		            Ext.Array.each(proposal.speakers, function(speaker) {
		                proposal.speakerIds.push(speaker.id);

		                speakerModel = Ext.create('HSFapp.model.Speaker', speaker);
		                speakerStore.add(speakerModel);
		                sessionSpeakerStore.add(speakerModel);

		                speakerSessions[speaker.id] = speakerSessions[speaker.id] || [];
		                speakerSessions[speaker.id].push(proposal.id);
		            });

		            if (proposal.date) {
		                sessionDays[proposal.date] = {
		                    day: proposalModel.get('time').getDate(),
		                    text: Ext.Date.format(proposalModel.get('time'), 'm/d'),
		                    time: proposalModel.get('time')
		                };
		            }

		            sessionStore.add(proposalModel);
		            speakerSessionStore.add(proposalModel);
		        });

		        for (var speakerId in speakerSessions) {
		            speaker = speakerStore.findRecord('id', speakerId);
		            if (speaker) {
		                speaker.set('sessionIds', speakerSessions[speakerId]);
		            }
		        }

		        HSFapp.sessionDays = Ext.Array.sort(Ext.Object.getValues(sessionDays), function(a, b) {
		            return a.time < b.time ? -1 : 1;
		        });

		        callback();
		    }
		});

	}
});
