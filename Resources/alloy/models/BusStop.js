exports.definition = {
    config: {
        columns: {
            title: "TEXT",
            directions: "TEXT"
        },
        defaults: {},
        adapter: {
            type: "sql",
            collection_name: "BusStops",
            migration: 20130417200059
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("BusStop", exports.definition, [ function(migration) {
    migration.name = "BusStop";
    migration.id = "20130417200059";
    migration.up = function(migrator) {
        migrator.db.execute("ALTER TABLE " + migrator.table + " ADD COLUMN directions TEXT;");
    };
} ]);

collection = Alloy.C("BusStop", exports.definition, model);

exports.Model = model;

exports.Collection = collection;