import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    name: { type: String, trim: true, index: true, unique: true, sparse: true, required: true },
    bestCode: { type: String, default: 'none' },
    bestScore: { type: Number, default: 0, required: true },
    bestName: { type: String, default: 'none' },
    img:
    {
        data: Buffer,
        contentType: String
    }
});
const ImageModel = mongoose.model('Image', ImageSchema);

const getImageInfoByName = async (name) => {
    return (({ name, bestScore, bestName }) => ({ name, bestScore, bestName }))(await ImageModel.findOne({ name: name }));
}

const updateScore = async (name, bestScore, bestCode, bestName) => {
    try {
        const update = await ImageModel.updateOne({ name: name }, { bestScore: bestScore, bestCode: bestCode, bestName: bestName });
        console.log(update);
        return update;
    } catch (e) {
        return e.message;
    }
}

const getImageInfos = async () => {
    try {
        const all = await ImageModel.find({})
        return all;
    } catch (e) {
        return e.message;
    }
}

export { ImageModel as default, getImageInfoByName, updateScore, getImageInfos };