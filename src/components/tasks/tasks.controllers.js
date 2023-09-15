import Task from "../../models/tasks.model.js"

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(400).json(error)
    }
};

export { getAllTasks };