
import Jimp from 'jimp';

const compareImgDiff = async (path1, path2) => {
    // console.log(path1, path2)
    const img1 = await Jimp.read(path1);
    const img2 = await Jimp.read(path2);
    // console.log(img1)
    // console.log(img1, img2)
    const percentage = Jimp.diff(img1, img2).percent
    // console.log(`diff.percent   ${percentage}\n`);
    return percentage;
}

export default compareImgDiff;