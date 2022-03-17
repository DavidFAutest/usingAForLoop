const Page = require('./page');

class addRemove extends Page {

get addElement() {
    return $('button=Add Element');
}

get deleteButton() {
    return $$('.added-manually*=Delete');
}

    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new addRemove();