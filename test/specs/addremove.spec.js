const addRemove = require('../pageobjects/addremove.page');

describe('My Login application', () => {
    it('should click the Add Element button 5 times', async () => {
        await addRemove.open();
        for (let i = 0; i < 5; i++) {
            await addRemove.addElement.click();
        }
        await browser.pause(2000);
    });
    
    it('should have five "Delete" elements', async () => {
        await expect(addRemove.deleteButton).toBeElementsArrayOfSize(5)
    });

    it('should delete two "Delete" elements', async () => {

    });
});
