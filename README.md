This module provides a basic interface to [Taginfo](http://taginfo.osm.org)'s API for node.js.

Methods
=======

The following table lists all the methods available through this module, and their respective arguments. Each method maps up to a section in [the taginfo docs](http://taginfo.openstreetmap.org/taginfo/apidoc). Look there for descriptions of each.

| Method                  | Arguments                      |
| ----------------------- | ------------------------------ |
| key.combinations        | key, callback, optional        |
| key.distribution.nodes  | key, callback                  |
| key.distribution.ways   | key, callback                  |
| key.projects            | key, callback, optional        |
| key.stats               | key, callback                  |
| key.values              | key, callback, optional        |
| key.wiki_pages          | key, callback                  |
| keys.all                | callback, optional             |
| keys.wiki_pages         | callback, optional             |
| keys.without_wiki_page  | callback, optional             |
| project.tags            | project, callback              |
| projects.all            | callback, optional             |
| relation.projects       | rtype, callback, optional      |
| relation.roles          | rtype, callback, optional      |
| relation.stats          | rtype, callback, optional      |
| relation.wiki_pages     | rtype, callback, optional      |
| relations.all           | callback, optional             |
| search.by_key_and_value | query, callback                |
| search.by_keyword       | query, callback                |
| search.by_role          | query, callback                |
| search.by_value         | query, callback                |
| site.info               | callback                       |
| site.sources            | callback                       |
| tag.combinations        | key, value, callback, optional |
| tag.distribution/nodes  | key, value, callback           |
| tag.distribution/ways   | key, value, callback           |
| tag.projects            | key, value, callback, optional |
| tag.stats               | key, value, callback           |
| tag.wiki_pages          | key, value, callback           |
| tags.popular            | callback, optional             |
| wiki.languages          | callback                       |