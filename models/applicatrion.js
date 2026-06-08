const moongoose = require("mongoose");
const applicationSchema = new moongoose.Schema({
    artistaId: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, gestoreId: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    }, gigId: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Gig",
        required: true,
    },proposta: {
    type: String,
    required: true,
    maxlength: 1000,
    },
     stato: {
    type: String, enum: ["in attesa", "accettata", "rifiutata"],
    default: "in attesa"
    }},{ 
        timestamps: true
});

module.exports = moongoose.model("Application", applicationSchema);
