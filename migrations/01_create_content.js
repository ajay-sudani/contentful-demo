module.exports = function (migration) {
    const item = migration.createContentType('item', {
        name: 'Item',
        description: 'item description'
    });

    item.createField('title', {
        name: 'title',
        type: 'Symbol',
        required: true,
    });
    
    item.createField('name', {
        name: 'name',
        type: 'Symbol',
        required: true,
        validations: [{ size: {min: 2, max: 10}}]
    });
    
    item.createField('description', {
        name: 'description',
        type: 'Symbol',
        required: true,
    });

    item.createField('price', {
        name: 'price',
        type: 'Number',
        required: true,
        validations: [{ range: {min: 1, max: 100}}]
    });

    item.createField('tag', {
        name: 'tag',
        type: 'Symbol',
        validations: [{ in: ["tag-1", "tag-2"]}]
    });

    item.createField('assetLink', {
        name: 'assetLink',
        type: 'Link',
        linkType: 'Asset',
    });

    item.createField('entryLink', {
        name: 'entryLink',
        type: 'Link',
        linkType: 'Entry',
        validations: [{"linkContentType": ['user']}]
    });
}