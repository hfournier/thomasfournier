const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			aspectRatio: {
				'4/6': '4 / 6',
				'6/4': '6 / 4'
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
