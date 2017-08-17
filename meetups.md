---
layout: page
title: Meetups
subtitle: Check out our past and future meetups!
permalink: /meetups
custom_js:
 - format-google-calendar.min
 - jquery-3.1.1.min
---

<ul id="events-upcoming">
</ul>
<ul id="events-past">
</ul>

<script>
formatGoogleCalendar.init({
        calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/dsciknx%40gmail.com/events?timeMin=2015-06-03T10%3A00%3A00-04%3A00&key=AIzaSyC39nF_t-bAogVVXR9dLGLiSEDywUt7Fgc',
        past: true,
        upcoming: true,
        sameDayTimes: true,
        pastTopN: 1,
        upcomingTopN: -1,
        itemsTagName: 'li',
        upcomingSelector: '#events-upcoming',
        pastSelector: '#events-past',
        upcomingHeading: '<h2>Upcoming events</h2>',
        pastHeading: '<h2>Past events</h2>',
        format: ['*date*', ': ', '*summary*', ' <br/> ', '*description*', '<ol>', '*location*', '</ol>']
});
</script>
