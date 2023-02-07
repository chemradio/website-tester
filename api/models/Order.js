const mongoose = require('mongoose')

const { Schema } = mongoose

const OrderSchema = new Schema({
    status: String,

    stage: String,

    link: {
        type: String,
        required: true,
    },

    order_creation_end_timestamp: Date,

    audio_enabled: Boolean,

    quote_enabled: Boolean,

    audio_name: String,

    quote_text: String,

    quote_author_text: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order
