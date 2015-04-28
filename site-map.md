---
layout: default
title: Site Map
permalink: /site-map/
---

<ul>
{% for category in site.navigation %}
  <li>
    <span>{{ category.name }}</span>
    <ul>
      {% for link in category.links %}
        <li><a href="{{ link.url | prepend: site.baseurl }}">{{ link.text }}</a></li>
      {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>
