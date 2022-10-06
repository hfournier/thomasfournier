const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			aspectRatio: {
				'4/6': '4 / 6',
				'6/4': '6 / 4',
				'9/16': '9 / 16',
				'16/9': '16 / 9'
			},
			fontFamily: {
				josefin: "'Josefin Sans', sans-serif",
				montserrat: "'Montserrat', sans-serif"
			}
		}
	},

	plugins: []
};

module.exports = config;
