---
layout: page
title: About
subtitle: Data Science Meetup in Knoxville, TN covering Machine Learning to advanced visualizations
permalink: /about
custom_js:
    - leaflet
    - leaflet.ajax.min
    - about_map
---

__KnoxData__ is for anyone interested in the multidisciplinary field of data science. The group is open to novices and experts from the business and academic worlds that have an interest in anything data science-y: 

- uses
- analysis 
- mathematics, 
- methodologies, 
- tools, 
- visualizations.

The aim is to maintain a forum for connecting people around data science specific topics such as tutorials and their applications, local success stories, discussions of new technologies, and best practices. All are welcome to attend, network, and present!

Join us on [Meetup!](http://www.meetup.com/DSci-KNX) and [join](http://knoxdevs-slackin.herokuapp.com/) the `#data` channel on the [KnoxDevs](http://knoxdevs.org) Slack group!

## Location

We host meetups at the [Technology Cooperative](http://techco.org/) usually the third Thursday of every month, in Emory Place, across the street from the Crafty Bastard Brewery. After meetups, we generally walk across the street to continue on the great conversations from the evening.

<style>
/*
 * These CSS rules affect the tooltips within maps with the custom-popup
 * class. See the full CSS for all customizable options:
 * https://github.com/mapbox/mapbox.js/blob/001754177f3985c0e6b4a26e3c869b0c66162c99/theme/style.css#L321-L366
*/
.custom-popup .leaflet-popup-content-wrapper {
  background:#673AB7;
  color:#fff;
  font-size:16px;
  line-height:24px;
  }
.custom-popup .leaflet-popup-content-wrapper a {
  color:rgba(255,255,255,0.5);
  }
.custom-popup .leaflet-popup-tip-container {
  width:30px;
  height:15px;
  }
.custom-popup .leaflet-popup-tip {
  border-left:15px solid transparent;
  border-right:15px solid transparent;
  border-top:15px solid #673AB7;
  }
</style>
<div class='custom-popup' id="mapid"></div>