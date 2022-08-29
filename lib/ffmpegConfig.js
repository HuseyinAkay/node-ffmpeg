var ffmpeg = require("./ffmpeg");

module.exports.setBinPath = (path) => ffmpeg.bin = path;
module.exports.getBinPath = () => ffmpeg.bin;
