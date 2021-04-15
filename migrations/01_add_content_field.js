module.exports = function (migration) {
    const item = migration.editContentType('item');
    item.createField('expiry', {
        name: 'Expiry',
        type: 'Date',
    });
}