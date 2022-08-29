var ffmpeg = require("./ffmpeg");

module.exports.SetBinPath = (path) => ffmpeg.bin = path;
