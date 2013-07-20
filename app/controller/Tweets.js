Ext.define('HSFapp.controller.Tweets', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			title: 'tweets titlebar'
		},
		control: {
			tweets: {
				activate: 'onActivate'
			}
		}
	},

	onActivate: function() {
		if (!this.loadedTweets) {

			this.getTitle().setTitle(HSFapp.app.twitterSearch);

			Ext.getStore('Tweets').getProxy().setExtraParams({
				q: HSFapp.app.twitterSearch
			});
			Ext.getStore('Tweets').load();

			this.loadedTweets = true;
		}
	}

});
