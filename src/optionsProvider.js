'use strict';

module.exports = {
	getDevTag: function(argv) {
		return argv.devtag ||
			process.env[argv.devtagvar] ||
			process.env.npm_package_config_frauPublisher_devTag ||
			process.env[process.env.npm_package_config_frauPublisher_devTagVar];
	},
	getFiles: function(argv) {
		return argv.files ||
			process.env.npm_package_config_frauPublisher_files;
	},
	getKey: function(argv) {
		return argv.key ||
			process.env.npm_package_config_frauPublisher_creds_key;
	},
	getSecret: function(argv) {
		return argv.secret ||
			process.env[argv.secretvar] ||
			process.env.npm_package_config_frauPublisher_creds_secret ||
			process.env[process.env.npm_package_config_frauPublisher_creds_secretVar];
	},
	getModuleType: function(argv) {
		return argv.moduletype  ||
			process.env.npm_package_config_frauPublisher_moduleType;
	},
	getOptions: function(argv) {
		return {
			creds: {
				key: this.getKey(argv),
				secret: this.getSecret(argv)
			},
			devTag: this.getDevTag(argv),
			files: this.getFiles(argv),
			moduleType: this.getModuleType(argv),
			targetDirectory: this.getTargetDirectory(argv),
			version: this.getVersion(argv),
			appInventory: this.getAppInventory(argv)
		};
	},
	getTargetDirectory: function(argv) {
		return argv.targetdir ||
			process.env.npm_package_config_frauPublisher_targetDirectory;
	},
	getVersion: function(argv) {
		return argv.version ||
			process.env[argv.versionvar] ||
			process.env.npm_package_config_frauPublisher_version ||
			process.env[process.env.npm_package_config_frauPublisher_versionVar];
	},
	getAppInventory: function(argv) {
		return argv.appInventory ||
			{
				token: this.getCdnManagerToken(argv),
				version: this.getCdnManagerVersion(argv),
				build: this.getCdnManagerBuild(argv)
			};
	},
	getCdnManagerToken: function(argv) {
		return argv.cdnManagerToken ||
			process.env.npm_package_config_frauPublisher_appInventory_token;
	},
	getCdnManagerVersion: function(argv) {
		return argv.cdnManagerVersion ||
			process.env.npm_package_config_frauPublisher_appInventory_version;
	},
	getCdnManagerBuild: function(argv) {
		return argv.cdnManagerBuild ||
			process.env.npm_package_config_frauPublisher_appInventory_build ||
			this.getVersion(argv); //cdn 'build' refers to the specific package version
	}
};
