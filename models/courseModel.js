const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A course must have a name'],
            unique: true,
            trim: true,
            maxlength: [40, 'A course name must have less or equal then 40 characters'],
            minlength: [10, 'A course name must have more or equal then 10 characters']
        },
        duration: {
            type: Number,
            required: [true, 'A course must have a duration']
        },

        ratingsAverage: {
            type: Number,
            default: 4.5,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0'],
            set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
        },
        ratingsQuantity: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            trim: true
        },
        imageCover: {
            type: String,
            required: [true, 'A course must have a cover image']
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
