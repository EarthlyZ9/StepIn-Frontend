module.exports = {
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	rules: {
		'react/no-unescaped-entities': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'no-unused-vars': 'off',
		'object-curly-spacing': [
			'error',
			'always',
			{ objectsInObjects: false },
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-namespace': 'off',
	},
};
