/*
 * @Author: wangzhihao
 * @Date: 2021-12-02 16:47:49
 * @LastEditors: wangzhihao
 * @LastEditTime: 2021-12-03 12:46:23
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	globals: {}, // 全局变量
	extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 13, // 编译JavaScript版本
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.vue', '.js', '.ts', '.json'],
			},
		},
	},
	plugins: ['vue', 'prettier'],
	rules: {},
};
