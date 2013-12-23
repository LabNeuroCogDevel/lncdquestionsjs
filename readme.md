# Fill out survy's without an internet connection

# count all completed
questioneers.map(function(o){ return o.sections.map(function(s){return _.filter(s.questions.map(function(q){ return q.value }),function(x){return x} ).length }) }) 
