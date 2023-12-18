document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');
import { initAll } from './govuk-frontend-5.0.0.min.js'
initAll()