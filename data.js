var data = {"nodes":[
  {"id":"1", "label":"Node 1"}
  ,{"id":"2", "label":"Node 2\nline 2"}
  ,{"id":"3", "label":"Node 3"}
  ,{"id":"4", "label":"Node 4"}
  ,{"id":"5", "label":"Node 5"}
],
"edges":[
  {"from":"1", "to":"2", "label":"apples"}
  ,{"from":"1", "to":"3", "label":"bananas"}
  ,{"from":"2", "to":"4", "label":"cherries"}
  ,{"from":"2", "to":"5", "label":"dates"}
  ,{"from":"2", "to":"3", "label":"EAGLES!", "color":{"color":"green", "highlight":"blue"}, "arrows":{"to":{"scaleFactor":"1.25", "type":"circle"}}}
]
}
var container = document.getElementById('mynetwork');
var network = new vis.Network(container, data, options);
