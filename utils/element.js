/** Easily create a string for complex elements */
Flame.Element = function(tag) {
    this.tag = tag;
    this.content = '';
};

Flame.Element.prototype.push = function(string) {
    this.content += string;
    return this;
};

Flame.Element.prototype.attr = function(name, value) {
    var attributes = this.attributes = (this.attributes || {});
    attributes[name] = value;
    return this;
};

Flame.Element.prototype.string = function() {
    var string = '<' + this.tag;
    var attributes = this.attributes;
    if (attributes) {
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                string += ' ' + attr + '="' + attributes[attr] + '"';
            }
        }
    }
    string += '>';
    string += this.content;
    string += '</' + this.tag + '>';
    return string;
};
