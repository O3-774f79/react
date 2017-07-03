import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'

const AppRoutes = (
  <Router history={hashHistory}>
		<Route path='/' component={Page1}>
			<IndexRoute component={Page1} />
			<Route path='main'>
				<Route path='page2' component={Page2} />
        <Route path='page3' component={Page3} />
        <Route path='page4' component={Page4} />
			</Route>
		</Route>
		<Route path='*' component={NotFound} />
	</Router>
)
export default AppRoutes