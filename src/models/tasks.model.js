import { DataTypes } from "sequelize";
import db from "../utils/database.js";

// el id se puede omitir
const Task = db.define('tasks', {
    title: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(80),
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }, 
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: false,
} 
);

export default Task;