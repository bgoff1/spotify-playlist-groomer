(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),i=n.n(s),l=(n(16),n(1)),o=n.n(l),c=n(2),u=n(5),m=n(6),d=n(8),h=n(7),p=n(9),f=(n(18),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={user:"",playlists:[],auth:"",dupes:[],selected:""},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(window.location.hash){var t={access_token:"",token_type:"",expires_in:"",state:""};window.location.hash.substring(1).split("&").forEach(function(e){var n=e.split("=");t[n[0]]=n[1]}),fetch("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"".concat(t.token_type," ").concat(t.access_token)}}).then(function(e){return e.json()}).then(function(n){var a=n.href.indexOf("https://api.spotify.com/v1/users/")+"https://api.spotify.com/v1/users/".length,r=n.href.lastIndexOf("/");e.setState({user:n.href.substring(a,a+(r-a)),playlists:n.items,auth:"".concat(t.token_type," ").concat(t.access_token)})})}}},{key:"handleClick",value:function(){var e=Object(c.a)(o.a.mark(function e(t){var n=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({dupes:[]}),e.next=3,fetch(t.href,{headers:{Authorization:this.state.auth}}).then(function(){var e=Object(c.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(function(){var e=Object(c.a)(o.a.mark(function e(t){var a,r,s,i,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({selected:t.name}),a=t.tracks.items,r=new Map,s=[],n.checkForDuplicateItems(a,r,s),console.log(r),console.log(s),i=t.tracks.next;case 8:if(null===i){e.next=18;break}return e.next=11,fetch(i,{headers:{Authorization:n.state.auth}}).then(function(e){return e.json()});case 11:l=e.sent,console.log(l),l&&l.items&&(console.log("in response"),n.checkForDuplicateItems(l.items,r,s)),console.log(l),i=l.next,e.next=8;break;case 18:s.length>0&&n.setState({dupes:s});case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"checkForDuplicateItems",value:function(e,t,n){var a=!0,r=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var o=i.value.track,c=o.name,u=1===o.artists.length?o.artists[0].name:this.findArtistName(o.artists),m="".concat(c," by ").concat(u),d=o.album.name;t.has(m)?n.push({old:{indexName:m,name:t.get(m)?t.get(m).name:t.get(m),artist:t.get(m)?t.get(m).artist:t.get(m),album:t.get(m)?t.get(m).album:t.get(m)},new:{indexName:m,name:c,album:d,artist:u}}):t.set(m,{album:d,name:c,artist:u})}}catch(h){r=!0,s=h}finally{try{a||null==l.return||l.return()}finally{if(r)throw s}}}},{key:"findArtistName",value:function(e){for(var t="",n=0;n<e.length;n++)t+=e[n].name,n+1<e.length&&(n+2<e.length?t+=", ":t+=" and ");return t}},{key:"render",value:function(){var e=this;return window.location.hash?r.a.createElement("div",null,this.state.user,r.a.createElement("ul",null,this.state.playlists.map(function(t,n){return r.a.createElement("li",{key:"playlist name "+t.name,onClick:function(){return e.handleClick(t)}},t.name)})),r.a.createElement("hr",null),this.state.selected?r.a.createElement("span",null,r.a.createElement("h3",null,"Dupliates for ",this.state.selected),0===this.state.dupes.length?"None":r.a.createElement("div",null,this.state.dupes.map(function(e){var t=e.old.indexName.split(" by "),n=r.a.createElement("span",null,r.a.createElement("i",null,t[0])," by ",r.a.createElement("strong",null,t[1]));return r.a.createElement("span",{key:e.old.indexName},r.a.createElement("span",null,n),r.a.createElement("div",{style:{paddingBottom:"2em"}},r.a.createElement("div",{style:{paddingLeft:"2em"}},"Old:",r.a.createElement("div",{style:{paddingLeft:"2em"}},r.a.createElement("div",null,"Name: ",e.old.name),r.a.createElement("div",null,"Album: ",e.old.album),r.a.createElement("div",null,"Artist(s): ",e.old.artist))),r.a.createElement("div",{style:{paddingLeft:"2em"}},"New:",r.a.createElement("div",{style:{paddingLeft:"2em"}},r.a.createElement("div",null,"Name: ",e.new.name),r.a.createElement("div",null,"Album: ",e.new.album),r.a.createElement("div",null,"Artist(s): ",e.new.artist)))))}))):""):(window.location.replace("https://accounts.spotify.com/authorize"+"?response_type=token&client_id=".concat("0a85ee7f3e4a4855bf688d8191a1edf9")+"&scope=".concat(encodeURIComponent("user-read-private user-read-email"))+"&redirect_uri=".concat(encodeURIComponent("http://localhost:3000/"),"&state=123"),{credentials:"include"}),null)}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.f39032d6.chunk.js.map