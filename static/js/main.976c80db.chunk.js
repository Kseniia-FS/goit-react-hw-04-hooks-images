(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},12:function(e,t,a){e.exports={Button:"Button_Button__3R1xi",wrapper:"Button_wrapper__1pHwk"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},24:function(e,t,a){},25:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(24),a(13)),u=a(6),i=a(4),s=(a(25),function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22576222-4c579c663b204aa5d73730e1c&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(e){return e.ok?e.json():Promise.reject(new Error("OOOps!"))}))}),m=a(14),h=a(15),b=a(19),j=a(18),d=a(5),f=a.n(d),p=(a(26),a(1)),O=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleInputChange=function(t){e.setState({value:t.currentTarget.value})},e.handleOnSubmit=function(t){t.preventDefault();var a=e.state.value;""!==a.trim()?(e.props.handleSubmit(a),e.setState({value:""}),e.clearInput(t)):i.b.error("Write correct query")},e.clearInput=function(e){e.currentTarget.input.value=""},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:f.a.Searchbar,children:Object(p.jsxs)("form",{className:f.a.SearchForm,onSubmit:this.handleOnSubmit,children:[Object(p.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(p.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{id:"input",className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange})]})})}}]),a}(n.Component),g=a(10),S=a.n(g),_=function(e){var t=e.tag,a=e.webformatURL,n=e.onSelect;return Object(p.jsx)("li",{onClick:n,className:S.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:a,alt:t,className:S.a.ImageGalleryItemImage})})},x=a(16),y=a.n(x),v=function(e){var t=e.images,a=e.onSelect;return Object(p.jsx)("ul",{className:y.a.ImageGallery,children:t&&t.map((function(e,t){var n=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(p.jsx)(_,{webformatURL:n,tag:r,onSelect:function(){return a(c)}},t)}))})},I=a(11),w=a.n(I),k=document.querySelector("#modal"),F=function(e){var t=e.closeModal,a=e.src;return window.addEventListener("keydown",(function e(a){"Escape"===a.code&&(t(),window.removeEventListener("keydown",e))})),Object(c.createPortal)(Object(p.jsx)("div",{className:w.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(p.jsx)("div",{className:w.a.Modal,children:Object(p.jsx)("img",{src:a,alt:""})})}),k)},B=a(17),C=a.n(B),G=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(C.a,{type:"heart",bgColor:"#8406ec",title:"heart",size:300})})},N=a(12),L=a.n(N),M=function(e){var t=e.handleClick;return Object(p.jsx)("div",{className:L.a.wrapper,children:Object(p.jsx)("button",{className:L.a.Button,type:"button",onClick:t,children:"Load more"})})},E=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),m=o[0],h=o[1],b=Object(n.useState)([]),j=Object(u.a)(b,2),d=j[0],f=j[1],g=Object(n.useState)(1),S=Object(u.a)(g,2),_=S[0],x=S[1],y=Object(n.useState)(!1),I=Object(u.a)(y,2),w=I[0],k=I[1];Object(n.useEffect)((function(){if(a){k(!0),s(a,_).then((function(e){0!==e.hits.length?f((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e.hits))})):i.b.error("Ooops, we cant't find such query! Try again.")})).then(B).catch((function(e){return console.log(e.message)})).finally((function(){return k(!1)}))}}),[a,_]);var B=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},C=d.length/_===12,N=d.length>0&&C;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{handleSubmit:function(e){e!==a&&(r(e),x(1),f([]))}}),Object(p.jsx)(v,{images:d,onSelect:function(e){h(e)}}),m&&Object(p.jsx)(F,{src:m,closeModal:function(){h(null)}}),w&&Object(p.jsx)(G,{}),N&&Object(p.jsx)(M,{handleClick:function(){x((function(e){return e+1}))}}),Object(p.jsx)(i.a,{autoClose:3e3})]})};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.976c80db.chunk.js.map