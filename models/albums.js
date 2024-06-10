const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");
// const Genre = require("./genre");
// const Artist = require("./artist");


const Album = sequelize.define( "Album",{
        AlbumID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Title : {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ReleaseDate : {
            type: DataTypes.DATE
        },
        Label : {
            type: DataTypes.TEXT
        },
        GenreID : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : { 
                model: "Genre",
                key: "GenreID"
            }
        },
        ArtistID : {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : { 
                model: "Artist",
                key: "ArtistID"
            }
        },

    }, {
        timestamps: false,
    }

);

// Define associations
// Album.belongsTo(Genre, { foreignKey: "GenreID" });
// Album.belongsTo(Artist, { foreignKey: "ArtistID" });

// module.exports = Album;
