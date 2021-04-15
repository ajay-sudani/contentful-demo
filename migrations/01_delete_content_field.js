module.exports = function (migration) {
    const item = migration.editContentType('item');
    item.deleteField('expiry');
}