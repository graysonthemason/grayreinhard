import {Service} from './service';

export var SERVICES: Service[] = [
	{
		"id":     	"left-brain", 
		"name": 	"Full Stack Web Developer", 
		"navlist": [
			{
				"label": "about",
				"content": `
				<p>&nbsp;&nbsp;&nbsp;&nbsp;What can I say, I really like building stuff. Sometimes it’s furniture, sometimes it’s vintage keyboards, often it’s <a data-toggle="modal" data-target="#sandCastles">sandcastles</a> and <a data-toggle="modal" data-target="#pumpkins">pumpkin carvings</a>. Mostly though, it's web applications. I specialize in E-Commerce related apps, but like working on anything that poses a thought provoking problem. Check out 'clients' for sites I have contributed to and 'projects' for some side projects I am working on.
				<div id="sandCastles" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-body">
							<img src="../assets/img/sandcastle2.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle3.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle4.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle6.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle7.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle1.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle9.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle5.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle10.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle8.jpg" class="img-responsive">
							<img src="../assets/img/sandcastle11.jpg" class="img-responsive">
						</div>
					</div>
				  </div>
				</div>
				<div id="pumpkins" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-body">
							<img src="../assets/img/pumpkin4.jpg" class="img-responsive">
							<img src="../assets/img/pumpkin2.jpg" class="img-responsive">
							<img src="../assets/img/pumpkin3.jpg" class="img-responsive">
							<img src="../assets/img/pumpkin1.jpg" class="img-responsive">
						</div>
					</div>
				  </div>
				</div>
				<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>
								<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

				</p>`
			},
			{
				"label": "clients",
				"content": `
				<ul class="client-list">
					<li><a href="http://www.soludos.com/" target="_blank"><img src="../assets/img/soludos.jpg"/></a></li>
					<li><a href="http://www.olamspecialtycoffee.com/" target="_blank"><img src="../assets/img/olam.jpg" class="square-logo"/></a></li>
					<li><a href="http://www.dempseyandcarroll.com/" target="_blank"><img src="../assets/img/dandc.jpg" class="square-logo"/></a></li>
					<li><a href="http://www.oomphonline.com/" target="_blank"><img src="../assets/img/oomph.jpg"/></a></li>
					<li><a href="https://www.caskers.com/" target="_blank"><img src="../assets/img/caskers.jpg"/></a></li>
					<li><a href="https://www.smartandsexy.com/" target="_blank"><img src="../assets/img/smartandsexy.jpg"/></a></li>
					<li><a href="http://www.mas.org/" target="_blank"><img src="../assets/img/mas.jpg" class="square-logo"/></a></li>
					<li><a href="http://www.grandcentralpartnership.nyc/" target="_blank"><img src="../assets/img/gcp.jpg" class="square-logo"/></a></li>
					<li><a href="http://www.nydc.com/" target="_blank"><img src="../assets/img/nydc.jpg" class="square-logo"/></a></li>
					<li><a href="http://www.thefirefly.com/" target="_blank"><img src="../assets/img/firefly.jpg"/></a></li>
					<li><a href="http://www.papyrusonline.com/" target="_blank"><img src="../assets/img/papyrus.jpg"/></a></li>
					<li><a href="http://www.theodoraandcallum.com/" target="_blank"><img src="../assets/img/tandc.jpg"/></a></li>
					<li><a href="https://www.riteaid.com/" target="_blank"><img src="../assets/img/riteaid.jpg" class="square-logo"/></a></li>
					<li><a href="https://www.skadden.com/" target="_blank"><img src="../assets/img/skadden.jpg"/></a></li>
					<li><a href="https://us.robertocoin.com/" target="_blank"><img src="../assets/img/roco.jpg"/></a></li>
				</ul>`
			},
			{
				"label": "projects",
				"content": `
			<ul id="project-list">
				<li>
					<div class="project-container">
						<img src="../assets/img/secapp_ss.jpg"/>
						<a href="https://sec-for-analysts-staging.herokuapp.com/" target="_blank"><h4>SEC Filings For Analysts</h4></a>
						<div class="project-section">
						<h5>Overview</h5>
						<p>The Securities and Exchange Commission's mission is to protect investors, maintain fair, orderly and efficient markets, and facilitate capital formation. For the past few decades, however, they have continually failed to provide any effective online access to the public financial data necessary for making informed investment decisions. This has widened the gap between the every day investor and large firms by giving rise to expensive commercial services such as the Bloomberg Terminal for efficiently acquiring these data-sets. SEC-Filings-For-Analysts is a free service that curates this data and makes it usable and downloadable for any investor or analyst.</p>
						</div>
						<div class="project-section">
						<h5>Technology</h5>
						<p>This app is being built with Ruby on Rails and persisted on a PostgreSQL database. We also leveraged some Python scraping libraries to aid in seeding the database. All stock data is pulled from the Yahoo Finance API, and all filings data has been scraped off of the SEC's 'EDGAR' database. Many gems and libraries are being utilized...most notable D3, Nokogiri (gem), and Twitter Bootstrap.</p>
						</div>
					</div>
				</li>
				<hr>
				<li>
					<div class="project-container">
						<img src="../assets/img/make7_ss.jpg"/>
						<a href="https://make7.herokuapp.com/" target="_blank"><h4>Make 7</h4></a>
						<div class="project-section">
						<h5>Overview</h5>
						<p>Make7 is a two player turn based game where the object is to be the first player to have consecutive tiles that add up to 7 (vertically, horizontally, or diagonally).</p>
						</div>
						<div class="project-section">
						<h5>Technology</h5>
						<p>Make7 was built on the Sinatra framework (Ruby), and user/game data is persisted on a Redis database. The game itself is run entirely in the browser with javaScript, html, and css and the jQuery and especially jQueryUI libraries were leveraged to enhance interactivity.</p>
						</div>
					</div>
				</li>
				<hr>
				<li>
					<div class="project-container">
						<img src="../assets/img/splitit_ss.jpg"/>
						<a href="https://split--it.herokuapp.com" target="_blank"><h4>Split.It</h4></a>
						<div class="project-section">
						<h5>Overview</h5>
						<p>The purpose of this app is to provide a seamless experience in splitting up the costs of an event, be it a vacation, a convert, or a bachelorette party. Sign up, create your profile, and create an event! Once the event is created you can invite friends, add expenses and decide how they are to be broken up amongst your crew. The app will take in all expenses, people attending, how long they are attending, length of the event, and breakdown all costs according to how you want. This app was designed and built with the help of Erica Kantor, Aaron Gregory, and Evan Berg.</p>
						</div>
						<div class="project-section">
						<h5>Technology</h5>
						<p>Split.It was built with Ruby on Rails and persisted on a PostgreSQL database. On the frontend, SASS helped keep out styling organized, and jQuery saved us a whole lotta time.</p>
						</div>
					</div>
				</li>
			</ul>`
			},
			{
			"label": "languages",
			"content": `
			<p style="text-align: center">Below is what I work in regularly. The stars represent my level of proficiency in each.</p>
			<h4>Backend Languages</h4>
			<ul class="languages">
				<li>PHP
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span>
				</li>
				<li>Ruby
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>Python
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
			</ul>
			<h4>Frontend Languages</h4>
			<ul class="languages">
				<li>HTML 5
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>CSS 3
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>Javascript (ES 6)
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
			</ul>
			<h4>Database</h4>
			<ul class="languages">
				<li>MySQL
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>PostgreSQL
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>Redis
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
			</ul>
			<h4>CMS</h4>
			<ul class="languages">
				<li>Magento
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>WordPress
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>Joomla
				<span><i class="fa fa-star"></i>
				</span></li>
			</ul>
			<h4>Libraries</h4>
			<ul class="languages">
				<li>Angular.js (2.0)
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>jQuery
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>UnderScore
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>Sass
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
			</ul>
			<h4>VC</h4>
			<ul class="languages">
				<li>Github
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
				</span></li>
				<li>SVN
				<span><i class="fa fa-star"></i><i class="fa fa-star"></i></li>
				</span></li>
			</ul>`
		}],
		"imgurl": 	"../assets/img/left.jpg"
	},
	{
		"id": 		"right-brain", 
		"name": 	"Composer, Multi-Instrumentalist, Engineer", 
				"navlist": [
		{
			"label": "about",
			"content": `
			<p>&nbsp;&nbsp;&nbsp;&nbsp;Gray Reinhard is a Jersey born keyboardist, guitarist, accordionist, vocalist, composer and studio engineer. In the past few years, Gray’s performed in 22 countries across 4 continents. Some notable musical highlights included a performance with Bruce Springsteen at the Asbury Park Light of Day festival, a performance as a featured pianist with the Minnesota Orchestra, guest conducted by Doc Severinsen, international tours with New York legend Garland Jeffreys, associate music director and pit multi-instrumentalist for NYC Shakespeare in the Park Serie’s new musical Love’s Labour’s Lost (directed by Alex Timbers and music by Michael Friedman), a six week Central/South American tour on behalf of the US State Department’s American Music Abroad Program, and the release of Gray’s roots rock band’s debut album “Curtis & Reinhard Live at the Pigeon Club.” He also had the distinction of being one of a handful of Americans permitted to teach and perform in Turkmenistan on behalf of the State Department.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;In addition to touring Gray composes and produces music for TV and film as a co-founder of, <a href=“http://www.hearsayproductions.com/”>Hearsay Productions</a>. Credits include: ABC’s “One Life To Live,” NBC’s “The Voice,” Fox’s “So You Think You Can Dance,” and an MTV appearance with Alicia Keys and Nick Lachey.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;In Gray’s spare time he is working on a solo album, putting on the final touches for the upcoming <a href=“https://www.facebook.com/CurtisReinhard” target=“_blank”>Curtis & Reinhard</a> album, and renovating his 1972 Hammond B3 organ/leslie combo.</p>`
		}, 
		{
			"label": "music",
			"content": `
			<div class="music-wrapper">
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/244903312&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/244909722&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/244947148&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/244910628&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/45532891&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/45532888&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/127021800&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/139428608&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<iframe width="250px" height="250px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/15952545&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				<h4>Also check out some of my commercial music placements at <a href="http://www.hearsayproductions.com/" target="_blank">Hearsay Productions</a>.</h4><br>
			</div>`
		}, 
		{
			"label": "photos",
			"content": `
			<div class='img-wrapper'>
				<ul>
					<li onclick="imgClick('../assets/img/430649_465935903459749_2039347306_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/430649_465935903459749_2039347306_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/486482_465943130125693_762931888_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/486482_465943130125693_762931888_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/1002647_10102687609281259_1218441013_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/1002647_10102687609281259_1218441013_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/19315_10151520545518054_283791787_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/19315_10151520545518054_283791787_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/GRAY_PIANO.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/GRAY_PIANO.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/644668_10152328841076664_1689605301_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/644668_10152328841076664_1689605301_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/19974_299793999193_2744298_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/19974_299793999193_2744298_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/550484_465935736793099_1809641803_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/550484_465935736793099_1809641803_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/560149_10101726414677949_2046938762_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/560149_10101726414677949_2046938762_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/16550_927136030009_373312593_n.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/16550_927136030009_373312593_n.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/616901_10151294369248136_1365882163_o.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/616901_10151294369248136_1365882163_o.jpg')">
					</div></li>
					<li onclick="imgClick('../assets/img/966743_10152176483213054_389129707_o.jpg')"><div class="img-thumb" style="background-image: url('../assets/img/966743_10152176483213054_389129707_o.jpg')">
					</div></li>
				</ul>
			</div>

			<div class="overlay hidden" onclick="hideOverlay()">
				<div id="current-img"></div>
			</div>`
		}], 
		"imgurl": 	"../assets/img/right.jpg"
	}
];
