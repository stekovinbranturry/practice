import React, { Component } from 'react';
import navLogo from './../resource/nav-logo.png';
import navBeta from './../resource/nav-beta.png';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="width-limit">
					<a className="logo" href="/">
						<img src={navLogo} alt="Nav logo" />
					</a>

					<a className="btn write-btn" target="_blank" href="/">
						<i className="iconfont ic-write" />
						写文章
					</a>
					<a className="btn sign-up" id="sign_up" href="/">
						注册
					</a>
					<a className="btn log-in" id="sign_in" href="/">
						登录
					</a>

					<div className="beta">
						<a href="/">
							<img src={navBeta} alt="beta" />
						</a>
					</div>

					<div className="style-mode">
						<a className="style-mode-btn" href="/">
							<i className="iconfont ic-navigation-mode" />
						</a>
					</div>
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed">
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</button>
						</div>
						<div className="collapse navbar-collapse" id="menu">
							<ul className="nav navbar-nav">
								<li className="tab active">
									<a href="/">
										<span className="menu-text">首页</span>
										<i className="iconfont ic-navigation-discover menu-icon" />
									</a>
								</li>
								<li className="tab ">
									<a
										id="web-nav-app-download-btn"
										className="app-download-btn"
										href="/apps?utm_medium=desktop&amp;utm_source=navbar-apps"
									>
										<span className="menu-text">下载App</span>
										<i className="iconfont ic-navigation-download menu-icon" />
									</a>
								</li>
								<li className="search">
									<form target="_blank" action="/search" method="get">
										<input name="utf8" type="hidden" value="✓" />
										<input
											type="text"
											name="q"
											id="q"
											placeholder="搜索"
											className="search-input"
										/>
										<a className="search-btn" href="/">
											<i className="iconfont ic-search" />
										</a>
									</form>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
