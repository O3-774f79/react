import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../src/components/Home'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()
