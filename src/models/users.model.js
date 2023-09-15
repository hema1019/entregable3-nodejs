import { DataTypes } from "sequelize";
import db from "../utils/database.js";

// el id se puede omitir
const User = db.define('users', {
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    timestamps: false,
} 
);

export default User;