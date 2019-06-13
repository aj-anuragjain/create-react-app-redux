import React from 'react'
import { Link } from 'react-router-dom'

import {
  HOME_PAGE_URL,
  ABOUT_PAGE_URL,
  ANTD_DEMO_PAGE_URL
} from '../../constants/url'

const Header = () => (
  <header>
    <Link to={HOME_PAGE_URL}>Home </Link>
    <Link to={ABOUT_PAGE_URL}>About </Link>
    <Link to={ANTD_DEMO_PAGE_URL}>Ant.Design Demo </Link>
  </header>
)

export default Header
