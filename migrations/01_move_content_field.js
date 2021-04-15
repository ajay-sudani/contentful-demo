module.exports = function (migration) {
    const item = migration.editContentType('item');
    // item.moveField('expiry').toTheTop();
    item.moveField('expiry').beforeField('price');
}