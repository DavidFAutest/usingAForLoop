const Page = require('./page');

//Element info below:
//<button class="added-manually" onclick="deleteElement()">Delete</button>

class addRemove extends Page {
//finding 'Add Element' button by element selector
get addElement() {
    return $('button=Add Element');
}
//finding array of 5 delete buttons by class selector
get deleteButton() {
    return $$('.added-manually');
}
//finding 'Delete' button by idAndText selector
get deleteButton2() {
    return $('button=Delete');
}
    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new addRemove();