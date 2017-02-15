import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
	background-color: #e5e5e5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #myClosetbox {
    min-height: 100%;
    min-width: 100%;
  }

  h1 {
    font-size: 3em;
	margin-top: 0px;
  }

  p, label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input:focus {
	  outline: none;
	  box-shadow: 0 0 10px #fc6f61;
  }

  label {
	display: block;
	font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-size: 18px;
	font-weight: 300;
	color: #696868;
  }

  input[type="text"], input[type="password"] {
    width: 400px;
	height: 50px;
	border: none;
	margin-bottom: 15px;
	font-size: 24px;
  }
`;
