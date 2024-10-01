const { Schema, model } = require('mongoose');

const studentAttendanceSchema = new Schema({
    creatAt: Date,
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    adminAttendance: {
        type:Schema.Types.ObjectId,
        ref:'AdminAttendance'
    },
})
const StudentAttendance = model   ('AdminAttendance', studentAttendanceSchema);

module.exports = StudentAttendance