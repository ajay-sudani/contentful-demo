module.exports = function (migration) {
    const item = migration.editContentType('item');
    item.editField('expiry', {
        name: 'Expiry Updated',
    });
}