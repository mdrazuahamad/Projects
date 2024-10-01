const { Schema, model } = require('mongoose');

const adminAttendanceSchema = new Schema({
    timeLimit: Number,
    status: String,
    creatAt: Date
})
const AdminAttendance = model ('AdminAttendance', adminAttendanceSchema);

module.exports = AdminAttendance