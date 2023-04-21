import mongoose from "../utils/mongoose.js";

const answerSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
    user: {
        type: String,
        required: false,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
});

const Answer = mongoose.model("Answer", answerSchema);

export default Answer;