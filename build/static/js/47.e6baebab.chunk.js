(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{2037:function(e,a,l){},2135:function(e,a,l){"use strict";l.r(a);l(55);var t,n=l(20),c=l.n(n),i=l(258),r=l(10),o=l(11),s=l(15),h=l(13),u=l(14),p=l(0),m=l.n(p),d=l(100),b=(l(2037),l(256)),D=l(1),k=l.n(D),y=l(1126),C=l(1202),E=l.n(C),v=l(2038),f=l.n(v),N=l(2041),j=l.n(N),w=l(2042),g=l.n(w),O=l(1123),x=l.n(O),R=l(2043),P=l.n(R),S=Object(d.connect)()(t=function(e){function a(){var e,l;Object(r.a)(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(l=Object(s.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={chipData:[{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]},l.handleDelete2=function(e){return function(){"React"!==e.label?l.setState(function(a){var l=Object(i.a)(a.chipData),t=l.indexOf(e);return l.splice(t,1),{chipData:l}}):alert("Why would you want to delete React?! :)")}},l.handleDelete=function(){alert("You clicked the delete icon.")},l.handleClick=function(){alert("You clicked the Chip.")},l}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return m.a.createElement(c.a,{className:"full-layout crud-page"},m.a.createElement("div",{className:a.root},m.a.createElement(f.a,{label:"Basic Chip",className:a.chip,variant:"outlined"}),m.a.createElement(f.a,{avatar:m.a.createElement(E.a,null,"MB"),label:"Clickable Chip",onClick:this.handleClick,className:a.chip,variant:"outlined"}),m.a.createElement(f.a,{avatar:m.a.createElement(E.a,{alt:"Natacha",src:"/static/images/avatar/1.jpg"}),label:"Deletable Chip",onDelete:this.handleDelete,className:a.chip,variant:"outlined"}),m.a.createElement(f.a,{avatar:m.a.createElement(E.a,null,m.a.createElement(j.a,null)),label:"Clickable Deletable Chip",onClick:this.handleClick,onDelete:this.handleDelete,className:a.chip,variant:"outlined"}),m.a.createElement(f.a,{icon:m.a.createElement(j.a,null),label:"Clickable Deletable Chip",onClick:this.handleClick,onDelete:this.handleDelete,className:a.chip,variant:"outlined"}),m.a.createElement(f.a,{label:"Custom delete icon Chip",onClick:this.handleClick,onDelete:this.handleDelete,className:a.chip,deleteIcon:m.a.createElement(g.a,null),variant:"outlined"}),m.a.createElement(f.a,{label:"Clickable Link Chip",className:a.chip,component:"a",href:"#chip",clickable:!0,variant:"outlined"}),m.a.createElement(f.a,{avatar:m.a.createElement(E.a,null,"MB"),label:"Primary Clickable Chip",clickable:!0,className:a.chip,color:"primary",onDelete:this.handleDelete,deleteIcon:m.a.createElement(g.a,null),variant:"outlined"}),m.a.createElement(f.a,{icon:m.a.createElement(j.a,null),label:"Primary Clickable Chip",clickable:!0,className:a.chip,color:"primary",onDelete:this.handleDelete,deleteIcon:m.a.createElement(g.a,null),variant:"outlined"}),m.a.createElement(f.a,{label:"Deletable Primary Chip",onDelete:this.handleDelete,className:a.chip,color:"primary",variant:"outlined"}),m.a.createElement(f.a,{avatar:m.a.createElement(E.a,null,m.a.createElement(j.a,null)),label:"Deletable Secondary Chip",onDelete:this.handleDelete,className:a.chip,color:"secondary",variant:"outlined"}),m.a.createElement(f.a,{icon:m.a.createElement(j.a,null),label:"Deletable Secondary Chip",onDelete:this.handleDelete,className:a.chip,color:"secondary",variant:"outlined"})),m.a.createElement(x.a,{className:a.root2},this.state.chipData.map(function(l){var t=null;return"React"===l.label&&(t=m.a.createElement(P.a,null)),m.a.createElement(f.a,{key:l.key,icon:t,label:l.label,onDelete:e.handleDelete2(l),className:a.chip2})})))}}]),a}(b.a))||t;S.propTypes={classes:k.a.object.isRequired},a.default=Object(y.withStyles)(function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap"},chip:{margin:e.spacing.unit},root2:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:e.spacing.unit/2},chip2:{margin:e.spacing.unit/2}}})(S)}}]);
//# sourceMappingURL=47.e6baebab.chunk.js.map