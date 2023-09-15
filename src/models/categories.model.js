import { DataTypes } from "sequelize";
import db from "../utils/database.js";

// el id se puede omitir
const Category = db.define('categories', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(60),
    },
},
{
    timestamps: false,
} 
);

export default Category;