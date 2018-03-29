webpackJsonp([3],{416:function(t,n,e){"use strict";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments[1],e=N[n.type];return e?e(t,n):t}Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"GET_ALL_APPLICATIONS",function(){return s}),e.d(n,"GET_OVERSEEN_APPLICATIONS",function(){return u}),e.d(n,"GET_APPLICANT_APPLICATIONS",function(){return p}),e.d(n,"GET_LOCATIONS_WITH_ALL_ANIMALS",function(){return d}),e.d(n,"GET_LOCATIONS_WITH_CITY",function(){return m}),e.d(n,"GET_LOCATIONS_WITH_ALL_BREEDS",function(){return f}),e.d(n,"RESEED_DB",function(){return h}),e.d(n,"QUERY_DELETE",function(){return A}),e.d(n,"getLocationsWithAllBreeds",function(){return v}),e.d(n,"getLocationsWithAllAnimals",function(){return E}),e.d(n,"getLocationsWithCity",function(){return _}),e.d(n,"queryDelete",function(){return y}),e.d(n,"reseedDB",function(){return L}),e.d(n,"actions",function(){return W}),n.default=a;var i,o=e(112),c=e.n(o),r=e(61),l=e.n(r),s="GET_ALL_APPLICATIONS",u="GET_OVERSEEN_APPLICATIONS",p="GET_APPLICANT_APPLICATIONS",d="GET_LOCATIONS_WITH_ALL_ANIMALS",m="GET_LOCATIONS_WITH_CITY",f="GET_LOCATIONS_WITH_ALL_BREEDS",h="RESEED_DB",A="QUERY_DELETE",v=function(){var t=l.a.post("/locations/allbreeds",{});return{type:f,payload:t}},E=function(){var t=l.a.post("/locations/allAnimals",{});return{type:d,payload:t}},_=function(t){var n=l.a.post("/locations/query",{cityName:t});return{type:m,payload:n}},y=function(t){var n=l.a.post("/animal/querydelete",{name:t});return{type:A,payload:n}},L=function(){var t=l.a.post("/reseed",{});return{type:h,payload:t}},W={getLocationsWithAllBreeds:v,getLocationsWithAllAnimals:E,getLocationsWithCity:_,reseedDB:L},N=(i={},c()(i,d,function(t,n){return Object.assign({},t,{locationsWithAllAnimals:n.payload.data?n.payload.data:t.locationsWithAllAnimals})}),c()(i,m,function(t,n){return Object.assign({},t,{locationsWithCity:n.payload.data?n.payload.data:t.locationsWithCity})}),c()(i,f,function(t,n){return Object.assign({},t,{locationsWithAllBreeds:n.payload.data?n.payload.data:t.locationsWithAllBreeds})}),i),I={locationsWithAllAnimals:[],locationsWithAllBreeds:[],locationsWithCity:[]}},420:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(433)),f=(e.n(m),e(447)),h=e(450),A=function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return d.a.createElement("div",{className:"AdvancedWrapper"},d.a.createElement(f.a,null),d.a.createElement(h.a,null))}}]),n}(p.Component);n.default=A},427:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(481)),f=(e.n(m),function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return console.log("render results",this.props),d.a.createElement("div",{className:"LocationCardWrapper"},d.a.createElement("div",{className:"LocationCardInner"},d.a.createElement("div",{className:"content"},d.a.createElement("div",{className:"title"},this.props.title))))}}]),n}(p.Component));n.a=f},430:function(t,n){},433:function(t,n){},434:function(t,n){},443:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(433)),f=(e.n(m),e(445),e(446)),h=e(444),A=(e(449),e(448)),v=function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return d.a.createElement("div",{className:"ApplicationsListWrapper"},d.a.createElement(f.a,{data:this.props.locationsWithCity,action:this.props.getLocationsWithCity}),d.a.createElement(h.a,{data:this.props.locationsWithAllBreeds,action:this.props.getLocationsWithAllBreeds}),d.a.createElement(A.a,{action:this.props.queryDelete}))}}]),n}(p.Component);n.a=v},444:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(430)),f=(e.n(m),e(427)),h=function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return console.log("all breeds",this.props.data),d.a.createElement("div",{className:"LocationsWithAllAnimalsWrapper"},d.a.createElement("div",{className:"LocationsWithAllAnimalsInner"},d.a.createElement("div",{className:"LocationsWithAllAnimalsButton",onClick:function(){t.props.action()}},"Get locations with all animal Breeds"),d.a.createElement("div",{className:"ListOfLocations"},this.props.data.map(function(t){return d.a.createElement(f.a,{title:t.name})}))))}}]),n}(p.Component);n.a=h},445:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(430)),f=(e.n(m),e(427));!function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return d.a.createElement("div",{className:"LocationsWithAllAnimalsWrapper"},d.a.createElement("div",{className:"LocationsWithAllAnimalsInner"},d.a.createElement("div",{className:"LocationsWithAllAnimalsButton",onClick:function(){t.props.action()}},"Get locations with all animals"),d.a.createElement("div",{className:"ListOfLocations"},this.props.data.forEach(function(t){d.a.createElement(f.a,{title:t})}))))}}])}(p.Component)},446:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(434)),f=(e.n(m),e(427)),h=function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return d.a.createElement("div",{className:"LocationsInCityWrapper"},d.a.createElement("div",{className:"LocationsInCityInner"},d.a.createElement("div",{className:"LocationInputWrapper"},d.a.createElement("div",{className:"LocationInputButton",onClick:function(){t.props.action(document.getElementById("Location-Input").value)}},"Get locations with this city"),d.a.createElement("input",{id:"Location-Input",className:"LocationInput"})),d.a.createElement("div",{className:"ListOfLocations"},this.props.data.map(function(t){return d.a.createElement(f.a,{title:t.name})}))))}}]),n}(p.Component);n.a=h},447:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=e(21),f=e(480),h=(e.n(f),function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return d.a.createElement("div",{className:"ApplicationsHeaderWrapper"},d.a.createElement("div",{className:"leftSide"},"Advanced"),d.a.createElement("div",{className:"rightSide"},d.a.createElement("div",{className:"viewApplicationsButton",onClick:function(){m.browserHistory.push("/search")}},"Search Animals"),d.a.createElement("div",{className:"viewApplicationsButton",onClick:function(){m.browserHistory.push("/account")}},"My Account")))}}]),n}(p.Component));n.a=h},448:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(434)),f=(e.n(m),function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return d.a.createElement("div",{className:"LocationsInCityWrapper"},d.a.createElement("div",{className:"LocationsInCityInner"},d.a.createElement("div",{className:"LocationInputWrapper"},d.a.createElement("div",{className:"LocationInputButton",onClick:function(){t.props.action(document.getElementById("QueryDelete-Input").value)}},"Delete Animals With This Name"),d.a.createElement("input",{id:"QueryDelete-Input",className:"LocationInput"}))))}}]),n}(p.Component));n.a=f},449:function(t,n,e){"use strict";var a=e(183),i=e.n(a),o=e(184),c=e.n(o),r=e(186),l=e.n(r),s=e(185),u=e.n(s),p=e(5),d=e.n(p),m=(e(21),e(430));e.n(m),e(427),function(t){function n(t){return i()(this,n),l()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}u()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this;return d.a.createElement("div",{className:"LocationsWithAllAnimalsWrapper"},d.a.createElement("div",{className:"LocationsWithAllAnimalsInner"},d.a.createElement("div",{className:"LocationsWithAllAnimalsButton",onClick:function(){t.props.action()}},"Reseed the Databse")))}}])}(p.Component)},450:function(t,n,e){"use strict";var a=e(60),i=e(416),o=e(443),c={getLocationsWithAllBreeds:function(){return e.i(i.getLocationsWithAllBreeds)()},getLocationsWithAllAnimals:function(){return e.i(i.getLocationsWithAllAnimals)()},getLocationsWithCity:function(t){return e.i(i.getLocationsWithCity)(t)},reseedDB:function(){return e.i(i.reseedDB)()},queryDelete:function(t){return e.i(i.queryDelete)(t)}},r=function(t){return{locationsWithAllAnimals:t.advanced.locationsWithAllAnimals,locationsWithAllBreeds:t.advanced.locationsWithAllBreeds,locationsWithCity:t.advanced.locationsWithCity}};n.a=e.i(a.connect)(r,c)(o.a)},480:function(t,n){},481:function(t,n){}});
//# sourceMappingURL=3.f3eb0eb700c5c7a49ac2.js.map