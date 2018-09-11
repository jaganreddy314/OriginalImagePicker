var exec = require('cordova/exec');

module.exports.getPictures = function (success, fail, options)
{
    var params = {
		maximumImagesCount: options.maximumImagesCount ? options.maximumImagesCount : 15,
		width: options.width ? options.width : 0,
		height: options.height ? options.height : 0,
		quality: options.quality ? options.quality : 100,
		allow_video: options.allow_video ? options.allow_video : false,
		title: options.title ? options.title : 'Select an Album', // the default is the message of the old plugin impl
		message: options.message ? options.message : null, // the old plugin impl didn't have it, so passing null by default
		outputType: options.outputType ? options.outputType : this.OutputType.FILE_URI,
		disable_popover: options.disable_popover ? options.disable_popover : false // Disable the iOS popover as seen on iPad
	};

	return cordova.exec(success, fail, "ImagePicker", "getPictures", [params]);
}