import React, { Component } from 'react';
import navLogo from './../resource/nav-logo.png';
import navBeta from './../resource/nav-beta.png';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="width-limit">
					<div className="logo">
						<img src={navLogo} alt="Nav logo" />
					</div>

					<button className="btn write-btn">
						<i className="iconfont ic-write" />
						写文章
					</button>
					<button className="btn sign-up" id="sign_up">
						注册
					</button>
					<button className="btn log-in" id="sign_in">
						登录
					</button>

					<div className="beta">
						<span>
							<img src={navBeta} alt="beta" />
						</span>
					</div>

					<div className="style-mode">
						<span className="style-mode-btn">
							<i className="iconfont ic-navigation-mode" />
						</span>
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
										<span className="search-btn">
											<i className="iconfont ic-search" />
										</span>
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
