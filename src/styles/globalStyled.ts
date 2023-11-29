import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&family=Roboto:wght@300;400&display=swap');

	* {
		margin: 0%;
		padding: 0%;
		list-style: none;
		text-decoration: none;
		font-family: "Roboto", sans-serif;

		button {
			border: none;
			display: flex;
			cursor: pointer;
			align-items: center;
			justify-content: center;
		}
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		&::-webkit-scrollbar {
			background-color: #545454;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #898989;
		}
	}
`

export default GlobalStyled
