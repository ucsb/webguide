---
layout: default
title: Site Map
permalink: /site-map/
---

<ul>
{% for categoryGroup in site.navigation %}
  {% for category in categoryGroup.categories %}
    <li>
      <span>{{ category.name }}</span>
      <ul>
        {% for link in category.links %}
          <li><a href="{{ link.url | relative_url }}">{{ link.text }}</a></li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
{% endfor %}
</ul>
