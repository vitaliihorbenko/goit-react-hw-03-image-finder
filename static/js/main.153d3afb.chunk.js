(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),o=a.n(c),i=(a(25),a(9)),s=a(4),l=a(5),u=a(7),h=a(6),d=(a(26),a(0)),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})})}}]),a}(n.Component),j=a(19),m=a.n(j),b=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(m.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})},p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:e,alt:""})})})}}]),a}(n.Component),f=a(20),y=a.n(f),O=function(e,t){return y.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(e,"&key=").concat("18864505-6c3c7593910f8166537b8d98b","&image_type=photo&orientation=horizontal&per_page=12\n        ")).then((function(e){return e.data}))},v=function(e){var t=e.onClick;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})})},x=function(e){var t=e.onData,a=e.openModal;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:n,alt:r,className:"ImageGalleryItem-image",onClick:a,"data-large":c})},t)}))})},w=function(e){var t=e.children;return Object(d.jsx)("ul",{className:"ImageGallery",children:t})},S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],currentPage:1,searchQuery:"",isLoading:!1,largeImageURL:null,showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){e.toggleModal();var a=t.target.dataset.large;e.setState({largeImageURL:a})},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,data:[]})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n=t.searchQuery;e.setState({isLoading:!0}),O(a,n).then((function(t){e.setState((function(e){return{data:[].concat(Object(i.a)(e.data),Object(i.a)(t.hits)),currentPage:e.currentPage+1}}))})).catch((function(e){return console.log(e)})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.showModal,r=e.largeImageURL;return Object(d.jsxs)("div",{className:"App",children:[n&&Object(d.jsx)(p,{onClose:this.toggleModal,largeImageURL:r}),Object(d.jsx)(g,{onSubmit:this.onChangeQuery}),Object(d.jsx)(w,{children:Object(d.jsx)(x,{onData:t,openModal:this.openModal})}),a&&Object(d.jsx)(b,{}),t.length>0&&!a&&Object(d.jsx)(v,{onClick:this.fetchImages})]})}}]),a}(n.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.153d3afb.chunk.js.map