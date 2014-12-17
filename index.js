var request = require('request')
, merge = require('merge')

//http://taginfo.openstreetmap.org/taginfo/apidoc#api_4_key_stats

var api_base_url = 'http://taginfo.openstreetmap.org/api/4/'

function query(url_endpoint, params, callback) {
  request({ "url": api_base_url + url_endpoint, "qs": params},
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(JSON.parse(body))
      }

    }
  )
}

module.exports = {
  "key": {
    "combinations": function(key, callback, optional) {
      return query("key/combinations", merge({"key": key}, optional), callback)
    },
    "distribution": {
      "nodes": function(key, callback) {
        return query("key/distribution/nodes", {"key": key}, callback)
      },
      "ways": function(key, callback) {
        return query("key/distribution/way", {"key": key}, callback)
      },
    },
    "projects": function(key, callback, optional) {
      return query("key/projects", merge({"key": key}, optional), callback)
    },
    "stats": function(key, callback) {
      return query("key/stats", {"key": key}, callback)
    },
    "values": function(key, callback, optional) {
      return query("key/values", merge({"key": key}, optional), callback)
    },
    "wiki_pages": function(key, callback) {
      return query("key/wiki_pages", {"key": key}, callback)
       }
  },
  "keys": {
    "all": function(callback, optional) {
      return query("keys/all", optional, callback)
    },
    "wiki_pages": function(callback, optional) {
      return query("keys/wiki_pages", optional, callback)
    },
    "without_wiki_page": function(callback, optional) {
      return query("keys/without_wiki_page", optional, callback)
       }
  },
  "project": {
    "tags": function(project, callback) {
      return query("project/tags", {"project": project}, callback)
       }
  },
  "projects": {
    "all": function(callback, optional) {
      return query("projects/all", optional, callback)
       }
  },
  "relation": {
    "projects": function(rtype, callback, optional) {
      return query("relation/projects", merge({"rtype": rtype}, optional), callback)
    },
    "roles": function(rtype, callback, optional) {
      return query("relation/roles", merge({"rtype": rtype}, optional), callback)
    },
    "stats": function(rtype, callback, optional) {
      return query("relation/stats", merge({"rtype": rtype}, optional), callback)
    },
    "wiki_pages": function(rtype, callback, optional) {
      return query("relation/wiki_pages", merge({"rtype": rtype}, optional), callback)
       }
  },
  "relations": {
    "all": function(callback, optional) {
      return query("relations/all", optional, callback)
       }
  },
  "search": {
    "by_key_and_value": function(query, callback) {
      return query("search/by_key_and_value", {"query": query}, callback)
    },
    "by_keyword": function(query, callback) {
      return query("search/by_keyword", {"query": query}, callback)
    },
    "by_role": function(query, callback) {
      return query("search/by_role", {"query": query}, callback)
    },
    "by_value": function(query, callback) {
      return query("search/by_value", {"query": query}, callback)
       }
  },
  "site": {
    "info": function(callback) {
      return query("site/info", {}, callback)
    },
    "sources": function(callback) {
      return query("site/sources", {}, callback)
       }
  },
  "tag": {
    "combinations": function(key, value, callback, optional) {
      return query("tag/combinations", merge({"key": key, "value": value}, optional), callback)
    },
    "distribution/nodes": function(key, value, callback) {
      return query("tag/distribution/nodes", {"key": key, "value": value}, callback)
    },
    "distribution/ways": function(key, value, callback) {
      return query("tag/distribution/ways", {"key": key, "value": value}, callback)
    },
    "projects": function(key, value, callback, optional) {
      return query("tag/projects", merge({"key": key, "value": value}, optional), callback)
    },
    "stats": function(key, value, callback) {
      return query("tag/stats", {"key": key, "value": value}, callback)
    },
    "wiki_pages": function(key, value, callback) {
      return query("tag/wiki_pages", {"key": key, "value": value}, callback)
       }
  },
  "tags": {
    "popular": function(callback, optional) {
      return query("tags/popular", optional, callback)
       }
  },
  "wiki": {
    "languages": function(callback) {
      return query("wiki/languages", {}, callback)
       }
  }
}
