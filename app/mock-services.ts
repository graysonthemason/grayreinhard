import {Service} from './service';

export var SERVICES: Service[] = [
	{
		"id":     	"left-brain", 
		"name": 	"Full Stack Web Developer", 
		"navlist": [
		{
			"label": "about",
			"content": `
			<p>&nbsp;&nbsp;&nbsp;&nbsp;Over the Summer of 2015, I decided to turn my attention fully towards a growing interest; Coding. I had built a few sites for bands I was in and an Architecture company I worked for right out of college, but it wasn't until enrolling in General Assembly's Web Immersive course that I was able to begin to take the discipline seriously.
			</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;After graduating in November that same year, I quickly got hired at Something Digital, a web solutions service agency in NY. At SD I quickly took on an account management role for multiple clients and gave myself a crash course on php and the Magento framework (e-commerce)
			</p>
			`
		}, 
		{
			"label": "portfolio",
			"content": `
			<p></p>
<h4>E-Commerce</h4>
<ul class="client-list">
<li><a href="http://www.soludos.com/"><img src="../assets/img/soludos.png"/></a></li>
<li><a href="https://www.caskers.com/"><img src="../assets/img/caskers.jpg"/></a></li>
<li><a href="http://www.dempseyandcarroll.com/"><img src="../assets/img/dandc.png"/></a></li>

<li><a href="http://www.oomphonline.com/"><img src="../assets/img/oomph.png"/></a></li>
<li><a href="http://www.olamspecialtycoffee.com/"><img src="../assets/img/olam.jpeg"/></a></li>
<li><a href="https://www.smartandsexy.com/"><img src="../assets/img/smartandsexy.jpg"/></a></li>
</ul>

<h4>Editorial</h4>
<ul class="client-list">
<li><a href="http://www.mas.org/"><img src="../assets/img/mas.jpg"/></a></li>
<li><a href="http://www.grandcentralpartnership.nyc/"><img src="../assets/img/gcp.png"/></a></li>
<li><a href="http://www.nydc.com/"><img src="../assets/img/nydc.png"/></a></li>
</ul>
			`
		}, 
		{
			"label": "skills",
			"content": `
			<h4>Backend Languages</h4>
<ul class="languages">
<li>PHP<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Ruby<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Python<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
</ul>
<h4>Frontend Languages</h4>
<ul class="languages">
<li>HTML 5<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>CSS 3<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>EC 6<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
</ul>
<h4>Database</h4>
<ul class="languages">
<li>MySQL<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>PostgreSQL<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Redis<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
</ul>
<h4>CMS</h4>
<ul class="languages">
<li>Magento<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>WordPress<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Joomla<i class="fa fa-star-o"></i></li>
</ul>
<h4>Libraries</h4>
<ul class="languages">
<li>Angular.js(2.0)<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>jQuery<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>UnderScore<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Sass<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Less<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
</ul>
<h4>VC</h4>
<ul class="languages">
<li>Github<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>SVN<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
</ul>
<h4>Other Software</h4>
<ul class="languages">
<li>Excel<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Adobe Photoshop<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Adobe Illustrator<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
<li>Adobe InDesign<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></li>
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
			<p>&nbsp;&nbsp;&nbsp;&nbsp;Gray Reinhard is a Jersey born keyboardist, guitarist, accordionist, vocalist, composer and studio engineer residing in Hoboken, NJ. In the past year Gray has performed in 21 countries across 4 continents. Some notable musical highlights included a performance with Bruce Springsteen at the Asbury Park Light of Day festival, a performances as a featured pianist with the Minnesota Orchestra, guest conducted by Doc Severinsen, international tours with New York legend Garland Jeffreys, associate music director and pit multi-instrumentalist for this past summer’s NYC Shakespeare in the Park serie’s new musical Love’s Lobour’s Lost (directed by Alex Timbers and music by Michael Friedman), a six week Central/South American tour on behalf of the US State Department’s American Music Abroad Program, and the release of Gray’s roots rock band’s debut album “Curtis & Reinhard Live at the Pigeon Club.” He also had the distinction of being one of a handful of Americans permitted to teach and perform in Turkmenistan on behalf of the State Department.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;In addition to touring Gray composes and produces music for TV and film as a co-founder of, Hearsay Productions. Credits include: ABC’s “One Life To Live,” NBC’s “The Voice,” Fox’s “So You Think You Can Dance,” and an MTV appearance with Alicia Keys and Nick Lachey.</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;In Gray’s spare time he is working on his first solo album due to be released sometime this year, writing for an upcoming Curtis & Reinhard album, and renovating his 1972 Hammond B3 organ/leslie combo.</p>
`
		}, 
		{
			"label": "music",
			"content": `


			`
		}, 
		{
			"label": "photos",
			"content": `
<div id='slider' class='swipe'>
  <div class='swipe-wrap'>
    <div><img src="../assets/img/gcp.png"/></div>
    <div></div>
    <div></div>
  </div>
</div>
<script>window.mySwipe = new Swipe(document.getElementById('slider'), {
  startSlide: 2,
  speed: 400,
  auto: 3000,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {}
});</script>

			`
		}], 
		"imgurl": 	"../assets/img/right.jpg"
	}
];
