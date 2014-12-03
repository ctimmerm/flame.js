/** @private */
Flame._Set = Ember.Object.extend({
    init: function() {
        this._super();
        this.keys = {};
    },

    add: function(item) {
        this.keys[Ember.guidFor(item)] = true;
    },

    remove: function(item) {
        delete this.keys[Ember.guidFor(item)];
    },

    contains: function(item) {
        return !!this.keys[Ember.guidFor(item)];
    }
});
