import{M as i,r as o}from"./entry.906b53e0.js";function u(){return i("googleApiStore",()=>{const s=o("");o("593691061710-og346hl8vl4t2ukkgl5uolqicaapmtvs.apps.googleusercontent.com"),o(""),o(""),o(!1);function t(e){s.value=e}async function a(e="sessionStorage"){if(e==="sessionStorage"){s.value=sessionStorage.getItem("google_api_key")||"AIzaSyDzuZgo-pF-4be2-vA_Y0VmGUpO5WPNBgA";return}}async function g(e,n="sessionStorage"){if(s.value=e,n==="sessionStorage"){sessionStorage.setItem("google_api_key",e);return}}return{apiKey:s,setGoogleApiKey:t,loadGoogleApiKey:a,updateGoogleApiKey:g}}).value}export{u};
