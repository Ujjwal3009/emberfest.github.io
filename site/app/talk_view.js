Emberfest.TalkView = Ember.View.extend({
    templateName: 'talk',
    viewProposal: false,

    actions: {
        showProposal: function() {
            console.log('Show Proposal');
            this.set('viewProposal', true);
        },

        hideProposal: function() {
            console.log('Hide Proposal');
            this.set('viewProposal', false);
        }
    }
});