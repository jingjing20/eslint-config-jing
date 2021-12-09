/*
 * @Author: wangzhihao
 * @Date: 2021-12-09 21:37:03
 * @LastEditors: wangzhihao
 * @LastEditTime: 2021-12-09 21:39:47
 */
module.exports = {
	// 继承已经集成好的标准
	// stylelint-config-rational-order 用于按照以下顺序将相关属性声明进行分组来对它们进行排序
	// 1.Positioning   2.Box Model    3.Typography    4.Visual    5.Animation    6.Misc
	extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
	plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
	rules: {
		'comment-empty-line-before': null,
		'declaration-empty-line-before': null,
		'function-name-case': 'lower',
		'no-descending-specificity': null,
		'no-invalid-double-slash-comments': null,
		'block-no-empty': null,
		'value-keyword-case': null,
		'rule-empty-line-before': [
			'always',
			{ severity: 'warning', except: ['after-single-line-comment', 'first-nested'] },
		],
		'selector-class-pattern': null,
		'font-family-no-missing-generic-family-keyword': null,
	},
	ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*'],
};