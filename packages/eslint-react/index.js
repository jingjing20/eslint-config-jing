/*
 * @Author: wangzhihao
 * @Date: 2021-12-03 13:09:55
 * @LastEditors: wangzhihao
 * @LastEditTime: 2021-12-03 13:11:16
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {},
};
