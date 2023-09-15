import User from './users.model.js'
import Category from './categories.model.js'
import Task from './tasks.model.js'

const initModels = () => {
    User.hasMany(Task, {foreignKey: 'userId'});
    Task.belongsTo(User, {foreignKey: 'userId'});
    
    Category.hasMany(Task, {foreignKey: 'categoryId'});
    Task.belongsTo(Category, {foreignKey: 'categoryId'});
};

export default initModels;