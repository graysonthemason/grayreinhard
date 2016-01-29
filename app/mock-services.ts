import {Service} from './service';

export var SERVICES: Service[] = [
	{
		"id":     	"left-brain", 
		"name": 	"Full Stack Web Developer", 
		"navlist": [
		{
			"label": "about",
			"content": `
			<p>&nbsp;&nbsp;&nbsp;&nbsp;In the Spring of 2014, I decided to fully turn my attention towards a growing interest; coding. I had built sites for bands, friends, and a few small companies, but it wasn't until enrolling in General Assembly's Web Immersive course that I got serious about full stack web development.
			</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;After graduating from General Assembly in November that same year, I quickly got hired at Something Digital, a NY based web service agency. At SD I took on an account management role for multiple clients specializing in E-Commerce related web-apps. While I spend the majority of my time at SD working in Magento (a php based E-Commerce platform), my diverse list of clients and even more diverse role allows me to work in all sorts of languages, platforms and frameworks and tackle all sorts of problems.
			</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;Please reach out if you have any interesting projects in mind…I’m always looking for something new to get into.
			</p>
			`
		}, 
		{
			"label": "portfolio",
			"content": `
			<p></p>
<h4>E-Commerce</h4>
<ul class="client-list">
<li><a href="http://www.soludos.com/" target="_blank"><img src="../assets/img/soludos.png"/></a></li>
<li><a href="https://www.caskers.com/" target="_blank"><img src="../assets/img/caskers.jpg"/></a></li>
<li><a href="http://www.dempseyandcarroll.com/" target="_blank"><img src="../assets/img/dandc.png"/></a></li>

<li><a href="http://www.oomphonline.com/" target="_blank"><img src="../assets/img/oomph.png"/></a></li>
<li><a href="http://www.olamspecialtycoffee.com/" target="_blank"><img src="../assets/img/olam.jpeg"/></a></li>
<li><a href="https://www.smartandsexy.com/" target="_blank"><img src="../assets/img/smartandsexy.jpg"/></a></li>
</ul>

<h4>Editorial</h4>
<ul class="client-list">
<li><a href="http://www.mas.org/" target="_blank"><img src="../assets/img/mas.jpg"/></a></li>
<li><a href="http://www.grandcentralpartnership.nyc/" target="_blank"><img src="../assets/img/gcp.png"/></a></li>
<li><a href="http://www.nydc.com/" target="_blank"><img src="../assets/img/nydc.png"/></a></li>
</ul>
			`
		}, 
		{
			"label": "skills",
			"content": `
			<p style="text-align: center">Below are skills I work with regularly. The stars represent the percentage of time I've spent in each.</p>
			<h4>Backend Languages</h4>
<ul class="languages">
<li>PHP
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span>
</li>
<li>Ruby
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>Python
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
</ul>
<h4>Frontend Languages</h4>
<ul class="languages">
<li>HTML 5
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>CSS 3
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>EC 6
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
</ul>
<h4>Database</h4>
<ul class="languages">
<li>MySQL
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>PostgreSQL
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>Redis
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
</ul>
<h4>CMS</h4>
<ul class="languages">
<li>Magento
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>WordPress
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>Joomla
<span id="shimmer"><i class="fa fa-star-o"></i>
</span></li>
</ul>
<h4>Libraries</h4>
<ul class="languages">
<li>Angular.js(2.0)
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>jQuery
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>UnderScore
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>Sass
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
</ul>
<h4>VC</h4>
<ul class="languages">
<li>Github
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>
</span></li>
<li>SVN
<span id="shimmer"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
</span></li>
</ul>
			`
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
			<p>&nbsp;&nbsp;&nbsp;&nbsp;Gray Reinhard is a Jersey born keyboardist, guitarist, accordionist, vocalist, composer and studio engineer. In the past few years, Gray’s performed in 22 countries across 4 continents. Some notable musical highlights included a performance with Bruce Springsteen at the Asbury Park Light of Day festival, a performances as a featured pianist with the Minnesota Orchestra, guest conducted by Doc Severinsen, international tours with New York legend Garland Jeffreys, associate music director and pit multi-instrumentalist for NYC Shakespeare in the Park Serie’s new musical Love’s Labour’s Lost (directed by Alex Timbers and music by Michael Friedman), a six week Central/South American tour on behalf of the US State Department’s American Music Abroad Program, and the release of Gray’s roots rock band’s debut album “Curtis & Reinhard Live at the Pigeon Club.” He also had the distinction of being one of a handful of Americans permitted to teach and perform in Turkmenistan on behalf of the State Department.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;In addition to touring Gray composes and produces music for TV and film as a co-founder of, <a href=“http://www.hearsayproductions.com/” target=“_blank”>Hearsay Productions</a>. Credits include: ABC’s “One Life To Live,” NBC’s “The Voice,” Fox’s “So You Think You Can Dance,” and an MTV appearance with Alicia Keys and Nick Lachey.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;In Gray’s spare time he is working on a solo album, putting on the final touches for the upcoming <a href=“https://www.facebook.com/CurtisReinhard” target=“_blank”>Curtis & Reinhard</a> album, and renovating his 1972 Hammond B3 organ/leslie combo.</p>
`
		}, 
		{
			"label": "music",
			"content": `
			<div class="music-wrapper">
			<h3><em>Coming Soon I promise!</em></h3>
			<p>For now checkout some Curtis & Reinhard tracks <a href="https://soundcloud.com/curtisreinhard" target="_blank">here</a>.</p>
			<p>Also check out some of my commercial music placements at <a href="http://www.hearsayproductions.com/" target="_blank">Hearsay Productions</a>.</p>
			</div>
			`
		}, 
		{
			"label": "photos",
			"content": `
<div class='img-wrapper'>
<ul>
<li><div class="img-thumb" style="background-image: url('../assets/img/16550_927136030009_373312593_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/19315_10151520545518054_283791787_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/19974_299793999193_2744298_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/644668_10152328841076664_1689605301_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/19974_299794019193_7152603_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/399253_10101532825028159_874781070_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/430649_465935903459749_2039347306_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/486482_465943130125693_762931888_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/550484_465935736793099_1809641803_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/560149_10101726414677949_2046938762_n.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/616901_10151294369248136_1365882163_o.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/774830_10151172078361319_1971293305_o.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/885349_439129642834915_926287000_o.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/966743_10152176483213054_389129707_o.jpg')">
</div></li>
<li><div class="img-thumb" style="background-image: url('../assets/img/1002647_10102687609281259_1218441013_n.jpg')">
</div></li>

</ul>
</div>

			`
		}], 
		"imgurl": 	"../assets/img/right.jpg"
	}
];
