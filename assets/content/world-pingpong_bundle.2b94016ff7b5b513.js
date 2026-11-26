var Xo=1;var qo=3,Ts=0,_r=1,Tt=2;var Yo=1;var Zo=100;var Jo=204,$o=205;var us=0,hs=1,ds=2,ir=3,fs=4,ps=5,ms=6,gs=7,Rs=0,Ko=1,jo=2;var Cs=1,Ps=2,Is=3,zs=4,Ls=5,Ds=6,Ns=7;var Fs=300;var Qo=302;var xs=1e3,oi=1001,ys=1002,ui=1003;var ea=1006;var ta=1008;var na=1009;var Us=1015;var ia=1023;var ra=1028;var sa=2200,oa=2201,aa=2202,hi=2300,rr=2301,Qi=2302,_s=2303,en=2400,tn=2401,di=2402,vr=2500,la=2501;var ca=0;var Os="",Oe="srgb",vs="srgb-linear",bs="linear",er="srgb";var tr=7680;var ua=519;var ha=35044;var ai=2e3,Ms=2001;function y0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var vo={},sr=null;function da(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ve(...s){s=da(s);let e="THREE."+s.shift();if(sr)sr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function pe(...s){s=da(s);let e="THREE."+s.shift();if(sr)sr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function nr(...s){let e=s.join(" ");e in vo||(vo[e]=!0,ve(...s))}var v0={[us]:us,[ds]:ms,[fs]:fs,[ir]:ps,[hs]:hs,[ms]:ds,[gs]:gs,[ps]:ir},wt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bo=1234567,fa=Math.PI/180,Bs=180/Math.PI;function on(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[e&255]+Re[e>>8&255]+"-"+Re[e>>16&15|64]+Re[e>>24&255]+"-"+Re[t&63|128]+Re[t>>8&255]+"-"+Re[t>>16&255]+Re[t>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Y(s,e,t){return Math.max(e,Math.min(t,s))}function ks(s,e){return(s%e+e)%e}function b0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function M0(s,e,t){return s!==e?(t-s)/(e-s):0}function ci(s,e,t){return(1-t)*s+t*e}function w0(s,e,t,n){return ci(s,e,1-Math.exp(-t*n))}function S0(s,e=1){return e-Math.abs(ks(s,e*2)-e)}function E0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function A0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function T0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function R0(s,e){return s+Math.random()*(e-s)}function C0(s){return s*(.5-Math.random())}function P0(s){s!==void 0&&(bo=s);let e=bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I0(s){return s*fa}function z0(s){return s*Bs}function L0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function D0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function N0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*u,a*c);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hs(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ma(s,e){if(e.constructor===Float32Array)return s;let t=Hs(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function ga(s,e){if(e.constructor===Float32Array)return s;let t=Hs(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Ht={DEG2RAD:fa,RAD2DEG:Bs,generateUUID:on,clamp:Y,euclideanModulo:ks,mapLinear:b0,inverseLerp:M0,lerp:ci,damp:w0,pingpong:S0,smoothstep:E0,smootherstep:A0,randInt:T0,randFloat:R0,randFloatSpread:C0,seededRandom:P0,degToRad:I0,radToDeg:z0,isPowerOfTwo:L0,ceilPowerOfTwo:D0,floorPowerOfTwo:pa,setQuaternionFromProperEuler:N0,normalize:ga,denormalize:ma},de=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Y(this.x,e.x,t.x),this.y=Y(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Y(this.x,e,t),this.y=Y(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Y(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Y(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],m=r[o+3];if(h!==m||l!==d||c!==f||u!==p){let _=l*d+c*f+u*p+h*m;_<0&&(d=-d,f=-f,p=-p,m=-m,_=-_);let y=1-a;if(_<.9995){let w=Math.acos(_),S=Math.sin(w);y=Math.sin(y*w)/S,a=Math.sin(a*w)/S,l=l*y+d*a,c=c*y+f*a,u=u*y+p*a,h=h*y+m*a}else{l=l*y+d*a,c=c*y+f*a,u=u*y+p*a,h=h*y+m*a;let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Y(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Y(this.x,e.x,t.x),this.y=Y(this.y,e.y,t.y),this.z=Y(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Y(this.x,e,t),this.y=Y(this.y,e,t),this.z=Y(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Y(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Y(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wr=new v,Mo=new me,q=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],m=i[0],_=i[3],y=i[6],w=i[1],S=i[4],b=i[7],E=i[2],P=i[5],C=i[8];return r[0]=o*m+a*w+l*E,r[3]=o*_+a*S+l*P,r[6]=o*y+a*b+l*C,r[1]=c*m+u*w+h*E,r[4]=c*_+u*S+h*P,r[7]=c*y+u*b+h*C,r[2]=d*m+f*w+p*E,r[5]=d*_+f*S+p*P,r[8]=d*y+f*b+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xr=new q,wo=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),So=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){let s={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===er&&(i.r=Mt(i.r),i.g=Mt(i.g),i.b=Mt(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===er&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Os?bs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vs]:{primaries:e,whitePoint:n,transfer:bs,toXYZ:wo,fromXYZ:So,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:e,whitePoint:n,transfer:er,toXYZ:wo,fromXYZ:So,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),s}var $e=F0();function Mt(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var _n,or=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_n===void 0&&(_n=ws("canvas")),_n.width=e.width,_n.height=e.height;let i=_n.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mt(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mt(t[n]/255)*255):t[n]=Mt(t[n]);return{data:t,width:e.width,height:e.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},U0=0,ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qr(i[o].image)):r.push(qr(i[o]))}else r=qr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function qr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?or.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var O0=0,Yr=new v,Bt=class s extends wt{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=oi,i=oi,r=ea,o=ta,a=ia,l=na,c=s.DEFAULT_ANISOTROPY,u=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=on(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Fs;Bt.DEFAULT_ANISOTROPY=1;var Ln=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],m=l[2],_=l[6],y=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(p+_)<.1&&Math.abs(c+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,b=(f+1)/2,E=(y+1)/2,P=(u+d)/4,C=(h+m)/4,L=(p+_)/4;return S>b&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=P/n,r=C/n):b>E?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=P/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=L/r),this.set(n,i,r,t),this}let w=Math.sqrt((_-p)*(_-p)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(_-p)/w,this.y=(h-m)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Y(this.x,e.x,t.x),this.y=Y(this.y,e.y,t.y),this.z=Y(this.z,e.z,t.z),this.w=Y(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Y(this.x,e,t),this.y=Y(this.y,e,t),this.z=Y(this.z,e,t),this.w=Y(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Y(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Te=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,p,m,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,m,_)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,m,_){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=r,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=d,y[3]=f,y[7]=p,y[11]=m,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/vn.setFromMatrixColumn(e,0).length(),r=1/vn.setFromMatrixColumn(e,1).length(),o=1/vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d+m*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,m=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-m*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,k0)}lookAt(e,t,n){let i=this.elements;return We.subVectors(e,t),We.lengthSq()===0&&(We.z=1),We.normalize(),Lt.crossVectors(n,We),Lt.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Lt.crossVectors(n,We)),Lt.normalize(),Ni.crossVectors(We,Lt),i[0]=Lt.x,i[4]=Ni.x,i[8]=We.x,i[1]=Lt.y,i[5]=Ni.y,i[9]=We.y,i[2]=Lt.z,i[6]=Ni.z,i[10]=We.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],m=n[6],_=n[10],y=n[14],w=n[3],S=n[7],b=n[11],E=n[15],P=i[0],C=i[4],L=i[8],A=i[12],N=i[1],I=i[5],U=i[9],V=i[13],W=i[2],k=i[6],ne=i[10],re=i[14],j=i[3],Q=i[7],ee=i[11],xe=i[15];return r[0]=o*P+a*N+l*W+c*j,r[4]=o*C+a*I+l*k+c*Q,r[8]=o*L+a*U+l*ne+c*ee,r[12]=o*A+a*V+l*re+c*xe,r[1]=u*P+h*N+d*W+f*j,r[5]=u*C+h*I+d*k+f*Q,r[9]=u*L+h*U+d*ne+f*ee,r[13]=u*A+h*V+d*re+f*xe,r[2]=p*P+m*N+_*W+y*j,r[6]=p*C+m*I+_*k+y*Q,r[10]=p*L+m*U+_*ne+y*ee,r[14]=p*A+m*V+_*re+y*xe,r[3]=w*P+S*N+b*W+E*j,r[7]=w*C+S*I+b*k+E*Q,r[11]=w*L+S*U+b*ne+E*ee,r[15]=w*A+S*V+b*re+E*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],m=e[7],_=e[11],y=e[15],w=l*f-c*d,S=a*f-c*h,b=a*d-l*h,E=o*f-c*u,P=o*d-l*u,C=o*h-a*u;return t*(m*w-_*S+y*b)-n*(p*w-_*E+y*P)+i*(p*S-m*E+y*C)-r*(p*b-m*P+_*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],m=e[13],_=e[14],y=e[15],w=t*a-n*o,S=t*l-i*o,b=t*c-r*o,E=n*l-i*a,P=n*c-r*a,C=i*c-r*l,L=u*m-h*p,A=u*_-d*p,N=u*y-f*p,I=h*_-d*m,U=h*y-f*m,V=d*y-f*_,W=w*V-S*U+b*I+E*N-P*A+C*L;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/W;return e[0]=(a*V-l*U+c*I)*k,e[1]=(i*U-n*V-r*I)*k,e[2]=(m*C-_*P+y*E)*k,e[3]=(d*P-h*C-f*E)*k,e[4]=(l*N-o*V-c*A)*k,e[5]=(t*V-i*N+r*A)*k,e[6]=(_*b-p*C-y*S)*k,e[7]=(u*C-d*b+f*S)*k,e[8]=(o*U-a*N+c*L)*k,e[9]=(n*N-t*U-r*L)*k,e[10]=(p*P-m*b+y*w)*k,e[11]=(h*b-u*P-f*w)*k,e[12]=(a*A-o*I-l*L)*k,e[13]=(t*I-n*A+i*L)*k,e[14]=(m*S-p*E-_*w)*k,e[15]=(u*E-h*S+d*w)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,m=o*u,_=o*h,y=a*h,w=l*c,S=l*u,b=l*h,E=n.x,P=n.y,C=n.z;return i[0]=(1-(m+y))*E,i[1]=(f+b)*E,i[2]=(p-S)*E,i[3]=0,i[4]=(f-b)*P,i[5]=(1-(d+y))*P,i[6]=(_+w)*P,i[7]=0,i[8]=(p+S)*C,i[9]=(_-w)*C,i[10]=(1-(d+m))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vn.set(i[0],i[1],i[2]).length(),a=vn.set(i[4],i[5],i[6]).length(),l=vn.set(i[8],i[9],i[10]).length();r<0&&(o=-o),it.copy(this);let c=1/o,u=1/a,h=1/l;return it.elements[0]*=c,it.elements[1]*=c,it.elements[2]*=c,it.elements[4]*=u,it.elements[5]*=u,it.elements[6]*=u,it.elements[8]*=h,it.elements[9]*=h,it.elements[10]*=h,t.setFromRotationMatrix(it),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=ai,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,m;if(l)p=r/(o-r),m=o*r/(o-r);else if(a===ai)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Ms)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ai,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,m;if(l)p=1/(o-r),m=o/(o-r);else if(a===ai)p=-2/(o-r),m=-(o+r)/(o-r);else if(a===Ms)p=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vn=new v,it=new Te,B0=new v(0,0,0),k0=new v(1,1,1),Lt=new v,Ni=new v,We=new v,Eo=new Te,Ao=new me,St=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Y(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Y(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Y(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Y(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Y(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Y(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};St.DEFAULT_ORDER="XYZ";var fi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H0=0,To=new v,bn=new me,xt=new Te,Fi=new v,ei=new v,G0=new v,V0=new me,Ro=new v(1,0,0),Co=new v(0,1,0),Po=new v(0,0,1),Io={type:"added"},W0={type:"removed"},Mn={type:"childadded",child:null},Zr={type:"childremoved",child:null},ot=class s extends wt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new v,t=new St,n=new me,i=new v(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new q}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(Ro,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ro,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fi.copy(e):Fi.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xt.lookAt(ei,Fi,this.up):xt.lookAt(Fi,ei,this.up),this.quaternion.setFromRotationMatrix(xt),i&&(xt.extractRotation(i.matrixWorld),bn.setFromRotationMatrix(xt),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Io),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(xt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Io),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ot.DEFAULT_UP=new v(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var at=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};var xa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Jr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=ks(e,1),t=Y(t,0,1),n=Y(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Jr(o,r,e+1/3),this.g=Jr(o,r,e),this.b=Jr(o,r,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oe){let n=xa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mt(e.r),this.g=Mt(e.g),this.b=Mt(e.b),this}copyLinearToSRGB(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return $e.workingToColorSpace(Ce.copy(this),e),Math.round(Y(Ce.r*255,0,255))*65536+Math.round(Y(Ce.g*255,0,255))*256+Math.round(Y(Ce.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ce.copy(this),t);let n=Ce.r,i=Ce.g,r=Ce.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ce.copy(this),t),e.r=Ce.r,e.g=Ce.g,e.b=Ce.b,e}getStyle(e=Oe){$e.workingToColorSpace(Ce.copy(this),e);let t=Ce.r,n=Ce.g,i=Ce.b;return e!==Oe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dt),this.setHSL(Dt.h+e,Dt.s+t,Dt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(Ui);let n=ci(Dt.h,Ui.h,t),i=ci(Dt.s,Ui.s,t),r=ci(Dt.l,Ui.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new oe;oe.NAMES=xa;var rt=new v,yt=new v,$r=new v,_t=new v,wn=new v,Sn=new v,zo=new v,Kr=new v,jr=new v,Qr=new v,es=new Ln,ts=new Ln,ns=new Ln,Ot=class s{constructor(e=new v,t=new v,n=new v){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rt.subVectors(e,t),i.cross(rt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rt.subVectors(i,t),yt.subVectors(n,t),$r.subVectors(e,t);let o=rt.dot(rt),a=rt.dot(yt),l=rt.dot($r),c=yt.dot(yt),u=yt.dot($r),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_t)===null?!1:_t.x>=0&&_t.y>=0&&_t.x+_t.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,_t)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_t.x),l.addScaledVector(o,_t.y),l.addScaledVector(a,_t.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return es.setScalar(0),ts.setScalar(0),ns.setScalar(0),es.fromBufferAttribute(e,t),ts.fromBufferAttribute(e,n),ns.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(es,r.x),o.addScaledVector(ts,r.y),o.addScaledVector(ns,r.z),o}static isFrontFacing(e,t,n,i){return rt.subVectors(n,t),yt.subVectors(e,t),rt.cross(yt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rt.subVectors(this.c,this.b),yt.subVectors(this.a,this.b),rt.cross(yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;wn.subVectors(i,n),Sn.subVectors(r,n),Kr.subVectors(e,n);let l=wn.dot(Kr),c=Sn.dot(Kr);if(l<=0&&c<=0)return t.copy(n);jr.subVectors(e,i);let u=wn.dot(jr),h=Sn.dot(jr);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(wn,o);Qr.subVectors(e,r);let f=wn.dot(Qr),p=Sn.dot(Qr);if(p>=0&&f<=p)return t.copy(r);let m=f*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Sn,a);let _=u*p-f*h;if(_<=0&&h-u>=0&&f-p>=0)return zo.subVectors(r,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(zo,a);let y=1/(_+m+d);return o=m*y,a=d*y,t.copy(n).addScaledVector(wn,o).addScaledVector(Sn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qe=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(st.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(st.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=st.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,st):st.fromBufferAttribute(r,o),st.applyMatrix4(e.matrixWorld),this.expandByPoint(st);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(e.matrixWorld),this.union(Oi)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,st),st.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ti),Bi.subVectors(this.max,ti),En.subVectors(e.a,ti),An.subVectors(e.b,ti),Tn.subVectors(e.c,ti),Nt.subVectors(An,En),Ft.subVectors(Tn,An),Kt.subVectors(En,Tn);let t=[0,-Nt.z,Nt.y,0,-Ft.z,Ft.y,0,-Kt.z,Kt.y,Nt.z,0,-Nt.x,Ft.z,0,-Ft.x,Kt.z,0,-Kt.x,-Nt.y,Nt.x,0,-Ft.y,Ft.x,0,-Kt.y,Kt.x,0];return!is(t,En,An,Tn,Bi)||(t=[1,0,0,0,1,0,0,0,1],!is(t,En,An,Tn,Bi))?!1:(ki.crossVectors(Nt,Ft),t=[ki.x,ki.y,ki.z],is(t,En,An,Tn,Bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,st).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(st).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vt=[new v,new v,new v,new v,new v,new v,new v,new v],st=new v,Oi=new qe,En=new v,An=new v,Tn=new v,Nt=new v,Ft=new v,Kt=new v,ti=new v,Bi=new v,ki=new v,jt=new v;function is(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){jt.fromArray(s,r);let a=i.x*Math.abs(jt.x)+i.y*Math.abs(jt.y)+i.z*Math.abs(jt.z),l=e.dot(jt),c=t.dot(jt),u=n.dot(jt);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var we=new v,Hi=new de,X0=0,ze=class extends wt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ha,this.updateRanges=[],this.gpuType=Us,this.version=0,this._normalizationScale=e!==void 0?Hs(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix3(e),this.setXY(t,Hi.x,Hi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.applyMatrix3(e),this.setXYZ(t,we.x,we.y,we.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.applyMatrix4(e),this.setXYZ(t,we.x,we.y,we.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.applyNormalMatrix(e),this.setXYZ(t,we.x,we.y,we.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.transformDirection(e),this.setXYZ(t,we.x,we.y,we.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ma(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ga(e,this.array)}};var lr=class extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var cr=class extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ge=class extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}},q0=new qe,ni=new v,rs=new v,nn=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):q0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ni.subVectors(e,this.center);let t=ni.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ni.copy(e.center).add(rs)),this.expandByPoint(ni.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Y0=0,Je=new Te,ss=new ot,Rn=new v,Xe=new qe,ii=new qe,Ee=new v,Le=class s extends wt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?cr:lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new q().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Je.makeRotationFromQuaternion(e),this.applyMatrix4(Je),this}rotateX(e){return Je.makeRotationX(e),this.applyMatrix4(Je),this}rotateY(e){return Je.makeRotationY(e),this.applyMatrix4(Je),this}rotateZ(e){return Je.makeRotationZ(e),this.applyMatrix4(Je),this}translate(e,t,n){return Je.makeTranslation(e,t,n),this.applyMatrix4(Je),this}scale(e,t,n){return Je.makeScale(e,t,n),this.applyMatrix4(Je),this}lookAt(e){return ss.lookAt(e),ss.updateMatrix(),this.applyMatrix4(ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rn).negate(),this.translate(Rn.x,Rn.y,Rn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Xe.min,ii.min),Xe.expandByPoint(Ee),Ee.addVectors(Xe.max,ii.max),Xe.expandByPoint(Ee)):(Xe.expandByPoint(ii.min),Xe.expandByPoint(ii.max))}Xe.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ee.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ee));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ee.fromBufferAttribute(a,c),l&&(Rn.fromBufferAttribute(e,c),Ee.add(Rn)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)a[A]=new v,l[A]=new v;let u=new v,h=new v,d=new v,f=new de,p=new de,m=new de,_=new v,y=new v;function w(A,N,I){c[A]=c[N]=c[I]=1,u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,I),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,I),h.sub(u),d.sub(u),p.sub(f),m.sub(f);let U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(U),y.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(U),a[A].add(_),a[N].add(_),a[I].add(_),l[A].add(y),l[N].add(y),l[I].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,N=S.length;A<N;++A){let I=S[A],U=I.start,V=I.count;for(let W=U,k=U+V;W<k;W+=3)w(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let b=new v,E=new v,P=new v,C=new v;function L(A){P.fromBufferAttribute(i,A),C.copy(P);let N=a[A];b.copy(N),b.sub(P.multiplyScalar(P.dot(N))).normalize(),E.crossVectors(C,N);let U=E.dot(l[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,U)}for(let A=0,N=n.count;A<N;++A)c[A]&&L(A);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new v,r=new v,o=new v,a=new v,l=new v,c=new v,u=new v,h=new v;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),m=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ee.fromBufferAttribute(e,t),Ee.normalize(),e.setXYZ(t,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let y=0;y<u;y++)d[p++]=c[f++]}return new ze(d,u,h)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var os=new v,Z0=new v,J0=new q,Dn=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=os.subVectors(n,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(os),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||J0.getNormalMatrix(e),i=this.coplanarPoint(os).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$0=0,pi=class extends wt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Yo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=$o,this.blendEquation=Zo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ve(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var bt=new v,as=new v,Gi=new v,Vi=new v,Nn=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bt.copy(this.origin).addScaledVector(this.direction,t),bt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){as.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(as);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Gi),a=Vi.dot(this.direction),l=-Vi.dot(Gi),c=Vi.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let m=1/u;h*=m,d*=m,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(as).addScaledVector(Gi,d),f}intersectSphere(e,t){if(e.radius<0)return null;bt.subVectors(e.center,this.origin);let n=bt.dot(this.direction),i=bt.dot(bt)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bt)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,m=t.y-o.y,_=t.z-o.z,y=n.x-o.x,w=n.y-o.y,S=n.z-o.z,b=Math.abs(l),E=Math.abs(c),P=Math.abs(u),C,L,A,N,I,U,V,W,k,ne,re,j;if(b>=E&&b>=P?(A=l,U=h,k=p,j=y,l>=0?(C=c,L=u,N=d,I=f,V=m,W=_,ne=w,re=S):(C=u,L=c,N=f,I=d,V=_,W=m,ne=S,re=w)):E>=P?(A=c,U=d,k=m,j=w,c>=0?(C=u,L=l,N=f,I=h,V=_,W=p,ne=S,re=y):(C=l,L=u,N=h,I=f,V=p,W=_,ne=y,re=S)):(A=u,U=f,k=_,j=S,u>=0?(C=l,L=c,N=h,I=d,V=p,W=m,ne=y,re=w):(C=c,L=l,N=d,I=h,V=m,W=p,ne=w,re=y)),A===0)return null;let Q=C/A,ee=L/A,xe=1/A,fe=N-Q*U,ae=I-ee*U,ke=V-Q*k,Ne=W-ee*k,je=ne-Q*j,Pe=re-ee*j,Ae=je*Ne-Pe*ke,Qe=fe*Pe-ae*je,et=ke*ae-Ne*fe;if(i){if(Ae<0||Qe<0||et<0)return null}else if((Ae<0||Qe<0||et<0)&&(Ae>0||Qe>0||et>0))return null;let He=Ae+Qe+et;if(He===0)return null;let Ge=xe*(Ae*U+Qe*k+et*j);return(He>0?Ge<0:Ge>0)?null:this.at(Ge/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=Rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lo=new Te,Qt=new Nn,Wi=new nn,Do=new v,Xi=new v,qi=new v,Yi=new v,ls=new v,Zi=new v,No=new v,Ji=new v,rn=class extends ot{constructor(e=new Le,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Zi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(ls.fromBufferAttribute(h,e),o?Zi.addScaledVector(ls,u):Zi.addScaledVector(ls.sub(t),u))}t.add(Zi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),Qt.copy(e.ray).recast(e.near),!(Wi.containsPoint(Qt.origin)===!1&&(Qt.intersectSphere(Wi,Do)===null||Qt.origin.distanceToSquared(Do)>(e.far-e.near)**2))&&(Lo.copy(r).invert(),Qt.copy(e.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&Qt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qt)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=d.length;p<m;p++){let _=d[p],y=o[_.materialIndex],w=Math.max(_.start,f.start),S=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let b=w,E=S;b<E;b+=3){let P=a.getX(b),C=a.getX(b+1),L=a.getX(b+2);i=$i(this,y,e,n,c,u,h,P,C,L),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let _=p,y=m;_<y;_+=3){let w=a.getX(_),S=a.getX(_+1),b=a.getX(_+2);i=$i(this,o,e,n,c,u,h,w,S,b),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=d.length;p<m;p++){let _=d[p],y=o[_.materialIndex],w=Math.max(_.start,f.start),S=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let b=w,E=S;b<E;b+=3){let P=b,C=b+1,L=b+2;i=$i(this,y,e,n,c,u,h,P,C,L),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let _=p,y=m;_<y;_+=3){let w=_,S=_+1,b=_+2;i=$i(this,o,e,n,c,u,h,w,S,b),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function K0(s,e,t,n,i,r,o,a){let l;if(e.side===_r?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ts,a),l===null)return null;Ji.copy(a),Ji.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ji);return c<t.near||c>t.far?null:{distance:c,point:Ji.clone(),object:s}}function $i(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Xi),s.getVertexPosition(l,qi),s.getVertexPosition(c,Yi);let u=K0(s,e,t,n,Xi,qi,Yi,No);if(u){let h=new v;Ot.getBarycoord(No,Xi,qi,Yi,h),i&&(u.uv=Ot.getInterpolatedAttribute(i,a,l,c,h,new de)),r&&(u.uv1=Ot.getInterpolatedAttribute(r,a,l,c,h,new de)),o&&(u.normal=Ot.getInterpolatedAttribute(o,a,l,c,h,new v),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new v,materialIndex:0};Ot.getNormal(Xi,qi,Yi,d.normal),u.face=d,u.barycoord=h}return u}var ur=class extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=ui,u=ui,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class extends ze{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cn=new Te,Fo=new Te,Ki=[],Uo=new qe,j0=new Te,ri=new rn,si=new nn,mi=class extends rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,j0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cn),Uo.copy(e.boundingBox).applyMatrix4(Cn),this.boundingBox.union(Uo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cn),si.copy(e.boundingSphere).applyMatrix4(Cn),this.boundingSphere.union(si)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ri.geometry=this.geometry,ri.material=this.material,ri.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),si.copy(this.boundingSphere),si.applyMatrix4(n),e.ray.intersectsSphere(si)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cn),Fo.multiplyMatrices(n,Cn),ri.matrixWorld=Fo,ri.raycast(e,Ki);for(let o=0,a=Ki.length;o<a;o++){let l=Ki[o];l.instanceId=r,l.object=this,t.push(l)}Ki.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(i*this.count),i,this.count,ra,Us));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};var gi=class extends Bt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var On=class s extends Le{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(h,2));function p(m,_,y,w,S,b,E,P,C,L,A){let N=b/C,I=E/L,U=b/2,V=E/2,W=P/2,k=C+1,ne=L+1,re=0,j=0,Q=new v;for(let ee=0;ee<ne;ee++){let xe=ee*I-V;for(let fe=0;fe<k;fe++){let ae=fe*N-U;Q[m]=ae*w,Q[_]=xe*S,Q[y]=W,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[_]=0,Q[y]=P>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(fe/C),h.push(1-ee/L),re+=1}}for(let ee=0;ee<L;ee++)for(let xe=0;xe<C;xe++){let fe=d+xe+k*ee,ae=d+xe+k*(ee+1),ke=d+(xe+1)+k*(ee+1),Ne=d+(xe+1)+k*ee;l.push(fe,ae,Ne),l.push(ae,ke,Ne),j+=6}a.addGroup(f,j,A),f+=j,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var xi=class s extends Le{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new v,u=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yi=class s extends Le{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,m=[],_=n/2,y=0;w(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function w(){let b=new v,E=new v,P=0,C=(t-e)/n;for(let L=0;L<=r;L++){let A=[],N=L/r,I=N*(t-e)+e;for(let U=0;U<=i;U++){let V=U/i,W=V*l+a,k=Math.sin(W),ne=Math.cos(W);E.x=I*k,E.y=-N*n+_,E.z=I*ne,h.push(E.x,E.y,E.z),b.set(k,C,ne).normalize(),d.push(b.x,b.y,b.z),f.push(V,1-N),A.push(p++)}m.push(A)}for(let L=0;L<i;L++)for(let A=0;A<r;A++){let N=m[A][L],I=m[A+1][L],U=m[A+1][L+1],V=m[A][L+1];(e>0||A!==0)&&(u.push(N,I,V),P+=3),(t>0||A!==r-1)&&(u.push(I,U,V),P+=3)}c.addGroup(y,P,0),y+=P}function S(b){let E=p,P=new de,C=new v,L=0,A=b===!0?e:t,N=b===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,_*N,0),d.push(0,N,0),f.push(.5,.5),p++;let I=p;for(let U=0;U<=i;U++){let W=U/i*l+a,k=Math.cos(W),ne=Math.sin(W);C.x=A*ne,C.y=_*N,C.z=A*k,h.push(C.x,C.y,C.z),d.push(0,N,0),P.x=k*.5+.5,P.y=ne*.5*N+.5,f.push(P.x,P.y),p++}for(let U=0;U<i;U++){let V=E+U,W=I+U;b===!0?u.push(W,W+1,V):u.push(W+1,W,V),L+=3}c.addGroup(y,L,b===!0?1:2),y+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sn=class s extends Le{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],m=[],_=[];for(let y=0;y<u;y++){let w=y*d-o;for(let S=0;S<c;S++){let b=S*h-r;p.push(b,-w,0),m.push(0,0,1),_.push(S/a),_.push(1-y/l)}}for(let y=0;y<l;y++)for(let w=0;w<a;w++){let S=w+c*y,b=w+c*(y+1),E=w+1+c*(y+1),P=w+1+c*y;f.push(S,b,P),f.push(b,E,P)}this.setIndex(f),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(m,3)),this.setAttribute("uv",new ge(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},dt=class s extends Le{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new v,p=new de;for(let m=0;m<=i;m++){for(let _=0;_<=n;_++){let y=r+_/n*o;f.x=h*Math.cos(y),f.y=h*Math.sin(y),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let m=0;m<i;m++){let _=m*(n+1);for(let y=0;y<n;y++){let w=y+_,S=w,b=w+n+1,E=w+n+2,P=w+1;a.push(S,b,P),a.push(b,E,P)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _i=class s extends Le{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new v,d=new v,f=[],p=[],m=[],_=[];for(let y=0;y<=n;y++){let w=[],S=y/n,b=o+S*a,E=e*Math.cos(b),P=Math.sqrt(e*e-E*E),C=0;y===0&&o===0?C=.5/t:y===n&&l===Math.PI&&(C=-.5/t);for(let L=0;L<=t;L++){let A=L/t,N=i+A*r;h.x=-P*Math.cos(N),h.y=E,h.z=P*Math.sin(N),p.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),_.push(A+C,1-S),w.push(c++)}u.push(w)}for(let y=0;y<n;y++)for(let w=0;w<t;w++){let S=u[y][w+1],b=u[y][w],E=u[y+1][w],P=u[y+1][w+1];(y!==0||o>0)&&f.push(S,b,P),(y!==n-1||l<Math.PI)&&f.push(b,E,P)}this.setIndex(f),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(m,3)),this.setAttribute("uv",new ge(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ya(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Oo(i))i.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Oo(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function De(s){let e={};for(let t=0;t<s.length;t++){let n=ya(s[t]);for(let i in n)e[i]=n[i]}return e}function Oo(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var vi=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ut(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function li(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Q0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bo(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function el(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var kt=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hr=class extends kt{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:en,endingEnd:en}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case tn:r=e,a=2*t-n;break;case di:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tn:o=e,l=2*n-t;break;case di:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),m=p*p,_=m*p,y=-d*_+2*d*m-d*p,w=(1+d)*_+(-1.5-2*d)*m+(-.5+d)*p+1,S=(-1-f)*_+(1.5+f)*m+.5*p,b=f*_-f*m;for(let E=0;E!==a;++E)r[E]=y*o[u+E]+w*o[c+E]+S*o[l+E]+b*o[h+E];return r}},bi=class extends kt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},dr=class extends kt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},fr=class extends kt{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),m=1-p;for(let _=0;_!==a;++_)r[_]=o[c+_]*m+o[l+_]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let m=o[c+p],_=o[l+p],y=f*d+p*2,w=h[y],S=h[y+1],b=e*d+p*2,E=u[b],P=u[b+1],C=nl(n,t,w,E,i);r[p]=_a(C,m,S,P,_)}return r}};function _a(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function tl(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function nl(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=_a(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=tl(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Be=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ut(t,this.TimeBufferType),this.values=Ut(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ut(e.times,Array),values:Ut(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),li(e.settings)&&(n.settings={inTangents:Ut(e.settings.inTangents,Array),outTangents:Ut(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hi:t=this.InterpolantFactoryMethodDiscrete;break;case rr:t=this.InterpolantFactoryMethodLinear;break;case Qi:t=this.InterpolantFactoryMethodSmooth;break;case _s:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hi;case this.InterpolantFactoryMethodLinear:return rr;case this.InterpolantFactoryMethodSmooth:return Qi;case this.InterpolantFactoryMethodBezier:return _s}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;li(this.settings)&&(ko(this.settings.inTangents,e),ko(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;li(this.settings)&&(Ho(this.settings.inTangents,e),Ho(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(pe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){pe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){pe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&_0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){pe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qi,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[d+p]||m!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,li(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ko(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Ho(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Be.prototype.ValueTypeName="";Be.prototype.TimeBufferType=Float32Array;Be.prototype.ValueBufferType=Float32Array;Be.prototype.DefaultInterpolation=rr;var Et=class extends Be{constructor(e,t,n){super(e,t,n)}};Et.prototype.ValueTypeName="bool";Et.prototype.ValueBufferType=Array;Et.prototype.DefaultInterpolation=hi;Et.prototype.InterpolantFactoryMethodLinear=void 0;Et.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends Be{constructor(e,t,n,i){super(e,t,n,i)}};Mi.prototype.ValueTypeName="color";var Bn=class extends Be{constructor(e,t,n,i){super(e,t,n,i)}};Bn.prototype.ValueTypeName="number";var pr=class extends kt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)me.slerpFlat(r,0,o,c-a,o,c,l);return r}},kn=class extends Be{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new pr(this.times,this.values,this.getValueSize(),e)}};kn.prototype.ValueTypeName="quaternion";kn.prototype.InterpolantFactoryMethodSmooth=void 0;var At=class extends Be{constructor(e,t,n){super(e,t,n)}};At.prototype.ValueTypeName="string";At.prototype.ValueBufferType=Array;At.prototype.DefaultInterpolation=hi;At.prototype.InterpolantFactoryMethodLinear=void 0;At.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends Be{constructor(e,t,n,i){super(e,t,n,i)}};wi.prototype.ValueTypeName="vector";var Si=class{constructor(e="",t=-1,n=[],i=vr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rl(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Be.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Q0(l);l=Bo(l,1,u),c=Bo(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Bn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function il(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bn;case"vector":case"vector2":case"vector3":case"vector4":return wi;case"color":return Mi;case"quaternion":return kn;case"bool":case"boolean":return Et;case"string":return At}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function rl(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=il(s.type);if(s.times===void 0){let n=[],i=[];el(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),li(s.settings)&&(t.settings={inTangents:Ut(s.settings.inTangents,Float32Array),outTangents:Ut(s.settings.outTangents,Float32Array)}),t}var mr=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},va=new mr,gr=class{constructor(e){this.manager=e!==void 0?e:va,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){me.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;me.multiplyQuaternionsFlat(e,o,e,t,e,n),me.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Gs="\\[\\]\\.:\\/",sl=new RegExp("["+Gs+"]","g"),Vs="[^"+Gs+"]",ol="[^"+Gs.replace("\\.","")+"]",al=/((?:WC+[\/:])*)/.source.replace("WC",Vs),ll=/(WCOD+)?/.source.replace("WCOD",ol),cl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vs),ul=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vs),hl=new RegExp("^"+al+ll+cl+ul+"$"),dl=["material","materials","bones","map"],Ss=class{constructor(e,t,n){let i=n||ce.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ce=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sl,"")}static parseTrackName(e){let t=hl.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);dl.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;pe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Ss;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yr=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:en,endingEnd:en};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=oa,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case la:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case vr:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===aa;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===sa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=tn,i.endingEnd=tn):(e?i.endingStart=this.zeroSlopeAtStart?tn:en:i.endingStart=di,t?i.endingEnd=this.zeroSlopeAtEnd?tn:en:i.endingEnd=di)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},fl=new Float32Array(1),Ei=class extends wt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let m=t&&t._propertyBindings[h].binding.parsedPath;p=new xr(ce.create(n,f,m),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new bi(new Float32Array(2),new Float32Array(2),1,fl),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Si.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vr),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new yr(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Si.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Go=new Te,Ai=class{constructor(e,t,n=0,i=1/0){this.ray=new Nn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Go),this}intersectObject(e,t=!0,n=[]){return Es(e,this,n,t),n.sort(Vo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Es(e[i],this,n,t);return n.sort(Vo),n}};function Vo(s,e){return s.distance-e.distance}function Es(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Es(r[o],e,t,!0)}}var As=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};var Wo=new v,ji=new v,Pn=new v,In=new v,cs=new v,pl=new v,ml=new v,Ti=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wo.subVectors(e,this.start),ji.subVectors(this.end,this.start);let n=ji.dot(ji);if(n===0)return 0;let r=ji.dot(Wo)/n;return t&&(r=Y(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=pl,n=ml){let i=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Pn.subVectors(c,a),In.subVectors(u,l),cs.subVectors(a,l);let h=Pn.dot(Pn),d=In.dot(In),f=In.dot(cs);if(h<=i&&d<=i)return t.copy(a),n.copy(l),t.distanceToSquared(n);if(h<=i)r=0,o=f/d,o=Y(o,0,1);else{let p=Pn.dot(cs);if(d<=i)o=0,r=Y(-p/h,0,1);else{let m=Pn.dot(In),_=h*d-m*m;_!==0?r=Y((m*f-p*d)/_,0,1):r=0,o=(m*r+f)/d,o<0?(o=0,r=Y(-p/h,0,1)):o>1&&(o=1,r=Y((m-p)/h,0,1))}}return t.copy(a).addScaledVector(Pn,r),n.copy(l).addScaledVector(In,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");var bl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ml=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,El=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Al=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Il=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ll=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ql=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$l="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ql=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ec=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ic=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ac=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yc=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_c=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mc=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ec=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ac=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dc=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$c=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K={alphahash_fragment:bl,alphahash_pars_fragment:Ml,alphamap_fragment:wl,alphamap_pars_fragment:Sl,alphatest_fragment:El,alphatest_pars_fragment:Al,aomap_fragment:Tl,aomap_pars_fragment:Rl,batching_pars_vertex:Cl,batching_vertex:Pl,begin_vertex:Il,beginnormal_vertex:zl,bsdfs:Ll,iridescence_fragment:Dl,bumpmap_pars_fragment:Nl,clipping_planes_fragment:Fl,clipping_planes_pars_fragment:Ul,clipping_planes_pars_vertex:Ol,clipping_planes_vertex:Bl,color_fragment:kl,color_pars_fragment:Hl,color_pars_vertex:Gl,color_vertex:Vl,common:Wl,defaultnormal_vertex:Xl,displacementmap_pars_vertex:ql,displacementmap_vertex:Yl,emissivemap_fragment:Zl,emissivemap_pars_fragment:Jl,colorspace_fragment:$l,colorspace_pars_fragment:Kl,envmap_fragment:jl,envmap_common_pars_fragment:Ql,envmap_pars_fragment:ec,envmap_pars_vertex:tc,envmap_physical_pars_fragment:dc,envmap_vertex:nc,fog_vertex:ic,fog_pars_vertex:rc,fog_fragment:sc,fog_pars_fragment:oc,gradientmap_pars_fragment:ac,lightmap_pars_fragment:lc,lights_lambert_fragment:cc,lights_lambert_pars_fragment:uc,lights_pars_begin:hc,lights_toon_fragment:fc,lights_toon_pars_fragment:pc,lights_phong_fragment:mc,lights_phong_pars_fragment:gc,lights_physical_fragment:xc,lights_physical_pars_fragment:yc,lights_fragment_begin:_c,lights_fragment_maps:vc,lights_fragment_end:bc,lightprobes_pars_fragment:Mc,logdepthbuf_fragment:wc,logdepthbuf_pars_fragment:Sc,logdepthbuf_pars_vertex:Ec,logdepthbuf_vertex:Ac,map_fragment:Tc,map_pars_fragment:Rc,map_particle_fragment:Cc,map_particle_pars_fragment:Pc,metalnessmap_fragment:Ic,metalnessmap_pars_fragment:zc,morphinstance_vertex:Lc,morphcolor_vertex:Dc,morphnormal_vertex:Nc,morphtarget_pars_vertex:Fc,morphtarget_vertex:Uc,normal_fragment_begin:Oc,normal_fragment_maps:Bc,normal_pars_fragment:kc,normal_pars_vertex:Hc,normal_vertex:Gc,normalmap_pars_fragment:Vc,clearcoat_normal_fragment_begin:Wc,clearcoat_normal_fragment_maps:Xc,clearcoat_pars_fragment:qc,iridescence_pars_fragment:Yc,opaque_fragment:Zc,packing:Jc,premultiplied_alpha_fragment:$c,project_vertex:Kc,dithering_fragment:jc,dithering_pars_fragment:Qc,roughnessmap_fragment:e1,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:r1,shadowmask_pars_fragment:s1,skinbase_vertex:o1,skinning_pars_vertex:a1,skinning_vertex:l1,skinnormal_vertex:c1,specularmap_fragment:u1,specularmap_pars_fragment:h1,tonemapping_fragment:d1,tonemapping_pars_fragment:f1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:x1,uv_vertex:y1,worldpos_vertex:_1,background_vert:v1,background_frag:b1,backgroundCube_vert:M1,backgroundCube_frag:w1,cube_vert:S1,cube_frag:E1,depth_vert:A1,depth_frag:T1,distance_vert:R1,distance_frag:C1,equirect_vert:P1,equirect_frag:I1,linedashed_vert:z1,linedashed_frag:L1,meshbasic_vert:D1,meshbasic_frag:N1,meshlambert_vert:F1,meshlambert_frag:U1,meshmatcap_vert:O1,meshmatcap_frag:B1,meshnormal_vert:k1,meshnormal_frag:H1,meshphong_vert:G1,meshphong_frag:V1,meshphysical_vert:W1,meshphysical_frag:X1,meshtoon_vert:q1,meshtoon_frag:Y1,points_vert:Z1,points_frag:J1,shadow_vert:$1,shadow_frag:K1,sprite_vert:j1,sprite_frag:Q1},D={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},ba={basic:{uniforms:De([D.common,D.specularmap,D.envmap,D.aomap,D.lightmap,D.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:De([D.common,D.specularmap,D.envmap,D.aomap,D.lightmap,D.emissivemap,D.bumpmap,D.normalmap,D.displacementmap,D.fog,D.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:De([D.common,D.specularmap,D.envmap,D.aomap,D.lightmap,D.emissivemap,D.bumpmap,D.normalmap,D.displacementmap,D.fog,D.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:De([D.common,D.envmap,D.aomap,D.lightmap,D.emissivemap,D.bumpmap,D.normalmap,D.displacementmap,D.roughnessmap,D.metalnessmap,D.fog,D.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:De([D.common,D.aomap,D.lightmap,D.emissivemap,D.bumpmap,D.normalmap,D.displacementmap,D.gradientmap,D.fog,D.lights,{emissive:{value:new oe(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:De([D.common,D.bumpmap,D.normalmap,D.displacementmap,D.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:De([D.points,D.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:De([D.common,D.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:De([D.common,D.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:De([D.common,D.bumpmap,D.normalmap,D.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:De([D.sprite,D.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:De([D.common,D.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:De([D.lights,D.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};ba.physical={uniforms:De([ba.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var e3=new q;e3.set(-1,0,0,0,1,0,0,0,1);var am={[Cs]:"LINEAR_TONE_MAPPING",[Ps]:"REINHARD_TONE_MAPPING",[Is]:"CINEON_TONE_MAPPING",[zs]:"ACES_FILMIC_TONE_MAPPING",[Ds]:"AGX_TONE_MAPPING",[Ns]:"NEUTRAL_TONE_MAPPING",[Ls]:"CUSTOM_TONE_MAPPING"};var lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);var hm={[Cs]:"Linear",[Ps]:"Reinhard",[Is]:"Cineon",[zs]:"ACESFilmic",[Ds]:"AgX",[Ns]:"Neutral",[Ls]:"Custom"};var dm={[Xo]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};var fm={[Qo]:"ENVMAP_MODE_REFRACTION"};var pm={[Rs]:"ENVMAP_BLENDING_MULTIPLY",[Ko]:"ENVMAP_BLENDING_MIX",[jo]:"ENVMAP_BLENDING_ADD"};var t3=new q;t3.set(-1,0,0,0,1,0,0,0,1);var mm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var z={x:-433,z:193,length:4.5,width:2.55,height:.8,net:.22,radius:.06},lt={x:z.x,z:z.z,w:11.2,d:6.8},Ma={x:z.x,z:z.z,w:4.5,d:3},Mr={x:z.x,z:198.15},Xs=[-436.6,-435.4,-430.6,-429.4].map(s=>({x:s,z:198.8})),qs=[...Xs,{x:z.x,z:200.05},{x:z.x,z:201.1}],wa=s=>s.z>=197.45&&qs.some(e=>Math.hypot(s.x-e.x,s.z-e.z)<=2.6);var Ys=["\uCD08\uAE09","\uC911\uAE09","\uC0C1\uAE09"],wr=3.5,Ri=z.height+z.radius,Ws=Ri+z.net,te=(s,e,t)=>Math.max(e,Math.min(t,s)),Sr=s=>s<2?-1:1,n3=s=>s<2?2:0,Gn=s=>({x:z.x+Sr(s)*3,z:z.z}),Zs=(s,e=0)=>{let t=(s.x-z.x)*Sr(e);return t>=2.699999&&t<=4.900001&&Math.abs(s.z-z.z)<=2.900001},Vn=s=>!!s&&Math.hypot(s.x-Mr.x,s.z-Mr.z)<=3.3,Sa=s=>!!s&&Math.hypot(s.x-lt.x,s.z-lt.z)<=25;var i3=s=>te(1+.03*(s-6),1,1.6);function Ea(){let s=null,e=[],t=null;return{now(n){return s===null?0:n+s},get count(){return e.length},seed(n,i){s===null&&Number.isSafeInteger(n)&&(s=n-i)},observe(n,i,r){let o=r-i;if(!Number.isSafeInteger(n)||!Number.isFinite(o)||o<=0||o>1e3)return!1;let a={offset:n-(i+r)/2,rtt:o,received:r};if(e=e.filter(l=>r>=l.received&&r-l.received<7e3),e.length&&Math.abs(a.offset-s)>400){if(!t||Math.abs(a.offset-t.offset)>150||r-t.received>6e3)return t=a,!1;e=[t]}return t=null,e.push(a),s=e.reduce((l,c)=>c.rtt<=l.rtt?c:l).offset,!0},reset(){s=null,e=[],t=null}}}function Js(s){let e=Math.abs(s);return e<=90?"Perfect":e<=180?"Good":e<=300?"Bad":s<0?"early":"miss"}function r3(s,e,t){let n=te((Math.abs(s)-90)/210*(t?2:1),0,1),i=1.5+(s<0?1.35:-.9)*n,r=e*(.825+(s<0?.525*n:0)),o=(t?.13:e?.325:.39)-(s>0?.585*n:0);return{depth:i,lateral:r,clearance:o,result:o<0?"net":i>2.25||Math.abs(r)>1.275?"out":"in"}}function Hn(s,e,t,n){let i=Math.hypot(e.x-s.x,e.z-s.z)/t;return{a:s,b:e,duration:i,gravity:n,vy:(e.y-s.y)/i+n*i/2,end:s.at+i*1e3}}function s3(s,e,t,n,i){let r=Math.hypot(e.x-s.x,e.z-s.z)/t,o=(n-s.x)/(e.x-s.x);return te(2*(i-s.y-(e.y-s.y)*o)/(r*r*o*(1-o)),5.2,26)}function o3(s,e,t,n){let i=z.x+3*Sr(t),r=s.z+(i-s.x)*(s.z-e.a.z)/(s.x-e.a.x),o=Math.hypot(i-s.x,r-s.z)/(n*.92),a=Math.abs(e.vy-e.gravity*e.duration)*.85,l=Math.max(.14,s.y+a*o-e.gravity*o*o/2),c=Hn(s,{x:i,y:l,z:r},n*.92,e.gravity),u=c.vy-c.gravity*c.duration,h=(u+Math.sqrt(u*u+2*c.gravity*(l-z.radius)))/c.gravity,d={x:i+(i-s.x)*h/o,y:z.radius,z:r+(r-s.z)*h/o},f=Hn({...c.b,at:c.end},d,n*.92,c.gravity);return{arrivesAt:c.end,arrival:{x:i,y:l,z:r},legs:[c,f]}}function Aa({incoming:s,time:e,launchAt:t=e,direction:n,smash:i,human:r=!1,multiplier:o=1,rally:a=0,id:l=s.id+1}){let c=s.target,u=n3(c),h=Sr(c),d=e-s.arrivesAt,f=Js(d),p=r&&f==="Bad",m=i?p?"return":"smash":n?"corner":"return",_=p?{depth:1.5,lateral:n*.4,clearance:.39,result:"in"}:r3(d,n,i),y=o*(p?4.8:(i?12:n?6.6:6)*i3(a)),w={...s.arrival,y:Math.max(.89,s.arrival.y),at:t},S={x:z.x-h*_.depth,y:Ri,z:z.z-h*_.lateral},b=s3(w,S,y,z.x,Ws+_.clearance),E=Hn(w,S,y,b);if(_.result==="net"){let L=(z.x-w.x)/(S.x-w.x),A={x:z.x,y:te(Ws+_.clearance,Ri,Ws),z:w.z+(S.z-w.z)*L},N=Hn(w,A,y,b),I=Hn({...A,at:N.end},{x:A.x+h*.45,y:Ri,z:A.z},2,12);return{id:l,from:c,target:u,kind:m,result:_.result,judgment:f,time:t,speed:y,drop:A,bounces:[],arrivesAt:I.end,arrival:I.b,segments:[N,I]}}if(_.result==="out"){let L=-E.vy+b*E.duration,A=(Math.sqrt(L*L+2*b*(Ri-z.radius))-L)/b,N={...S,at:E.end},I=1+A/E.duration,U={x:w.x+(S.x-w.x)*I,y:z.radius,z:w.z+(S.z-w.z)*I},V=Hn(N,U,y,b);return{id:l,from:c,target:u,kind:m,result:_.result,judgment:f,time:t,speed:y,drop:U,bounces:[],arrivesAt:V.end,arrival:U,segments:[E,V]}}let P={...S,at:E.end},C=o3(P,E,u,y);return{id:l,from:c,target:u,kind:m,result:_.result,judgment:f,time:t,speed:y,drop:S,bounces:[P],arrivesAt:C.arrivesAt,arrival:C.arrival,segments:[E,...C.legs]}}function Wn(s,e){let t=s.segments.find(r=>e<=r.end)||s.segments.at(-1),n=te((e-t.a.at)/1e3,0,t.duration),i=n/t.duration;return{x:t.a.x+(t.b.x-t.a.x)*i,y:t.a.y+t.vy*n-t.gravity*n*n/2,z:t.a.z+(t.b.z-t.a.z)*i}}function Er(s,e,t,n=z.z){let i={...Gn(2),z:n},r=e?.arrival.z??i.z;if(!s||!e)return i;let o=wr*Math.max(0,t-e.time-s.reaction)/1e3;return{...i,z:te(i.z+te(r-i.z,-o,o),z.z-2.9,z.z+2.9)}}function $s({type:s,down:e,up:t,dx:n,direction:i=0,swiped:r=!1,moved:o=!1}){let a=t-e,l=a>=450;s==="touch"&&(i=Math.abs(n)>=24||r&&Math.abs(n)>12?Math.sign(n):0);let c=a<=250&&(s!=="touch"||!r&&!o&&!i);return{direction:i,smash:l,time:c?e:t}}function Ar(s,e,t,n=0){let i=s.rotation||0,r=e-s.x,o=t-s.z,a=Math.cos(i),l=Math.sin(i),c=Math.abs(a*r-l*o)-s.w/2,u=Math.abs(l*r+a*o)-s.d/2;return Math.hypot(Math.max(0,c),Math.max(0,u))+Math.min(0,Math.max(c,u))-n}function Ta(s,e,t,n,i){let r=Ar(s,e,t,i);if(r>=0)return!1;let o=n?Ar(s,n.x,n.z,i):0;return o>=0||r<o-1e-4}function Ca(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Le;l.morphTargetsRelative=a;let c=0;for(let u=0;u<s.length;++u){let h=s[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Ra(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let m=0;m<o[u].length;++m)f.push(o[u][m][d]);let p=Ra(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Ra(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ze(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let m=u.getComponent(d,p);a.setComponent(d+h,p,m)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Pa(s){let e=new Map,t=new Map,n=s.clone();return Ia(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ia(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Ia(s.children[n],e.children[n],t)}var Gt={kickboard:{palms:{Left:[.207,.5828,-.041],Right:[-.207,.5828,.01]},feet:{Left:[.065,.101,0],Right:[-.065,.1,-.018]}},props:{racket:{kind:"procedural",grip:[0,0,0],up:[0,1,0],forward:[0,0,1]},chicken:{kind:"food",grip:[-864e-6,0,.002055],up:[0,1,0],forward:[0,0,1],base:[-864e-6,0,.002055],bounds:[[-.100005,0,-.090381],[.100005,.159214,.090381]],mobileBase:[27e-5,0,.001323],mobileBounds:[[-.100072,0,-.090144],[.100072,.159519,.090144]]},biscuit:{kind:"food",grip:[.00107,0,-.001679],up:[0,1,0],forward:[0,0,1],base:[.00107,0,-.001679],bounds:[[-.069949,0,-.070632],[.069949,.06964,.070632]],mobileBase:[.001381,0,-.001289],mobileBounds:[[-.06989,0,-.070433],[.06989,.069602,.070433]]},"yangnyeom-chicken":{kind:"food",grip:[-.001435,0,891e-6],up:[0,1,0],forward:[0,0,1],base:[-.001435,0,891e-6],bounds:[[-.099864,0,-.081812],[.099864,.139963,.081812]],mobileBase:[-457e-6,0,902e-6],mobileBounds:[[-.100041,0,-.081908],[.100041,.140089,.081908]]},dakgangjeong:{kind:"food",grip:[-639e-6,0,-414e-6],up:[0,1,0],forward:[0,0,1],base:[-639e-6,0,-414e-6],bounds:[[-.079793,0,-.07965],[.079793,.179995,.07965]],mobileBase:[583e-6,0,125e-6],mobileBounds:[[-.079311,0,-.0801],[.079311,.17954,.0801]]},nuggets:{kind:"food",grip:[-1e-5,0,.006507],up:[0,1,0],forward:[0,0,1],base:[-1e-5,0,.006507],bounds:[[-.069665,0,-.09],[.069665,.093226,.09]],mobileBase:[3e-6,0,.007133],mobileBounds:[[-.069707,0,-.090243],[.069707,.093572,.090243]]},fries:{kind:"food",grip:[278e-6,0,772e-6],up:[0,1,0],forward:[0,0,1],base:[278e-6,0,772e-6],bounds:[[-.052102,0,-.048074],[.052102,.159969,.048074]],mobileBase:[15e-6,0,914e-6],mobileBounds:[[-.052168,0,-.048341],[.052168,.160188,.048341]]},"cheese-balls":{kind:"food",grip:[.001336,0,596e-6],up:[0,1,0],forward:[0,0,1],base:[.001336,0,596e-6],bounds:[[-.076897,0,-.071375],[.076897,.159987,.071375]],mobileBase:[86e-5,0,677e-6],mobileBounds:[[-.076848,0,-.071666],[.076848,.160214,.071666]]},"chicken-burger":{kind:"food",grip:[-957e-6,0,686e-6],up:[0,1,0],forward:[0,0,1],base:[-957e-6,0,686e-6],bounds:[[-.068489,0,-.068189],[.068489,.120064,.068189]],mobileBase:[-922e-6,0,.003823],mobileBounds:[[-.069097,0,-.067977],[.069097,.119161,.067977]]},lemonade:{kind:"food",grip:[-.001444,0,181e-6],up:[0,1,0],forward:[0,0,1],base:[-.001444,0,181e-6],bounds:[[-.049416,0,-.048125],[.049416,.180021,.048125]],mobileBase:[-.001264,0,-562e-6],mobileBounds:[[-.049475,0,-.047519],[.049475,.179878,.047519]]},tteokbokki:{kind:"food",grip:[79e-6,0,82e-6],up:[0,1,0],forward:[0,0,1],base:[79e-6,0,82e-6],bounds:[[-.090033,0,-.089983],[.090033,.101933,.089983]],mobileBase:[-117e-6,0,151e-6],mobileBounds:[[-.089969,0,-.090018],[.089969,.101569,.090018]]},gimbap:{kind:"food",grip:[0,0,0],up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.086893,0,-.100037],[.086893,.074676,.100037]],mobileBase:[0,0,0],mobileBounds:[[-.086872,0,-.100353],[.086872,.074245,.100353]]},eomuk:{kind:"food",grip:[-771e-6,0,-56e-6],up:[0,1,0],forward:[0,0,1],base:[-771e-6,0,-56e-6],bounds:[[-.073271,0,-.072807],[.073271,.180026,.072807]],mobileBase:[-698e-6,0,-438e-6],mobileBounds:[[-.07324,0,-.072673],[.07324,.180375,.072673]]},sundae:{kind:"food",grip:[.001934,0,-338e-6],up:[0,1,0],forward:[0,0,1],base:[.001934,0,-338e-6],bounds:[[-.089989,0,-.089901],[.089989,.134291,.089901]],mobileBase:[-502e-6,0,-295e-6],mobileBounds:[[-.090112,0,-.089842],[.090112,.133786,.089842]]},twigim:{kind:"food",grip:[-.006532,0,.007335],up:[0,1,0],forward:[0,0,1],base:[-.006532,0,.007335],bounds:[[-.090088,0,-.075501],[.090088,.124514,.075501]],mobileBase:[-.005222,0,.00637],mobileBounds:[[-.089842,0,-.076004],[.089842,.123768,.076004]]},ramyeon:{kind:"food",grip:[84e-6,0,-.001861],up:[0,1,0],forward:[0,0,1],base:[84e-6,0,-.001861],bounds:[[-.120164,0,-.095121],[.120164,.099487,.095121]],mobileBase:[-.00446,0,-825e-6],mobileBounds:[[-.120521,0,-.094396],[.120521,.098606,.094396]]},hotdog:{kind:"food",grip:[.008588,0,-352e-6],up:[0,1,0],forward:[0,0,1],base:[.008588,0,-352e-6],bounds:[[-.109984,0,-.04565],[.109984,.093505,.04565]],mobileBase:[.007985,0,-617e-6],mobileBounds:[[-.110223,0,-.0457],[.110223,.093425,.0457]]},bungeoppang:{kind:"food",grip:[-263e-6,0,-.001062],up:[0,1,0],forward:[0,0,1],base:[-263e-6,0,-.001062],bounds:[[-.090894,0,-.070332],[.090894,.159942,.070332]],mobileBase:[-663e-6,0,-.002578],mobileBounds:[[-.09083,0,-.070192],[.09083,.159723,.070192]]},hotteok:{kind:"food",grip:[-41e-6,0,52e-5],up:[0,1,0],forward:[0,0,1],base:[-41e-6,0,52e-5],bounds:[[-.066303,0,-.08493],[.066303,.169977,.08493]],mobileBase:[182e-6,0,-15e-6],mobileBounds:[[-.066488,0,-.085076],[.066488,.170306,.085076]]},sikhye:{kind:"food",grip:[-113e-6,0,-72e-6],up:[0,1,0],forward:[0,0,1],base:[-113e-6,0,-72e-6],bounds:[[-.092383,0,-.092288],[.092383,.159993,.092288]],mobileBase:[-448e-6,0,266e-6],mobileBounds:[[-.092048,0,-.092101],[.092048,.15998,.092101]]},carrot:{kind:"tool",grip:[-.00223,.14495,-.06674],up:[0,1,0],forward:[0,0,1],rotation:[-.7523,.2292,0],scale:1,tip:[-.03,.012,.086],base:[-.026694,0,.08197],bounds:[[-.104667,0,-.130457],[.104667,.249986,.130457]],mobileBase:[-.025714,0,.080682],mobileBounds:[[-.104884,0,-.130682],[.104884,.250314,.130682]]},"hay-bale":{kind:"tool",grip:[-.00241,.44263,-.48185],up:[0,1,0],forward:[0,0,1],rotation:[-.14,-0,0],scale:.32,tip:[0,.44,.45],base:[-.009016,0,-.001438],bounds:[[-.498269,0,-.497713],[.498269,.954762,.497713]],mobileBase:[.016564,0,-.003199],mobileBounds:[[-.50079,0,-.495446],[.50079,.957598,.495446]]},hoe:{kind:"tool",grip:[.12096,.27107,-.07],up:[0,1,0],forward:[0,0,1],rotation:[.0169,1.1128,0],scale:2.1,tip:[-.098,.014,.04],base:[-.095339,0,.035718],bounds:[[-.175,0,-.116795],[.175,.317651,.116795]],mobileBase:[-.095651,0,.035813],mobileBounds:[[-.174936,0,-.116839],[.174936,.317905,.116839]]},"watering-can":{kind:"tool",grip:[.05932,.34701,-.0013],up:[0,1,0],forward:[0,0,1],rotation:[-.468,1.5321,0],scale:1,tip:[-.208,.243,.01],poses:{water:{rotation:[.102,1.5321,0],swing:{radians:.065,rate:3}}},base:[.035441,0,619e-6],bounds:[[-.240537,0,-.132372],[.240537,.349944,.132372]],mobileBase:[.036569,0,794e-6],mobileBounds:[[-.240625,0,-.132513],[.240625,.35013,.132513]]},bucket:{kind:"tool",grip:[0,.122,.177],up:[0,1,0],forward:[0,0,1],rotation:[0,3.1416,0],scale:1,tip:[0,.327,-.175],poses:{bath:{rotation:[0,0,-1.2],swing:{radians:.15,rate:3},contactLift:.18},horseWater:{rotation:[.6874,-3.1416,0]},lampOil:{rotation:[.5874,-3.1416,0]}},base:[.001132,0,-.018023],bounds:[[-.176637,0,-.191831],[.176637,.350078,.191831]],mobileBase:[643e-6,0,-.018128],mobileBounds:[[-.176824,0,-.191758],[.176824,.350029,.191758]]},shovel:{kind:"tool",grip:[.091654,.520159,-.086298],mobileGrip:[.094436,.520981,-.090548],up:[0,1,0],forward:[0,0,1],rotation:[0,0,0],scale:1,tip:[-.18965,.010464,.258766],base:[-.18965,0,.258766],mobileBase:[-.19328,0,.262697],bounds:[[-.310763,0,-.291545],[.310763,.8,.291545]],mobileBounds:[[-.310606,0,-.291284],[.310606,.800102,.291284]]},pitchfork:{kind:"tool",grip:[.05729,.62337,-.00312],up:[0,1,0],forward:[0,0,1],rotation:[-.272,.2742,0],scale:1,tip:[-.075,.05,.31],base:[-.069204,0,.285182],bounds:[[-.279133,0,-.395006],[.279133,1.200102,.395006]],mobileBase:[-.070523,0,.290128],mobileBounds:[[-.279706,0,-.394778],[.279706,1.200678,.394778]],mobileGrip:[.01794,.63522,.00819]},"grooming-brush":{kind:"tool",grip:[0,.12,0],up:[0,1,0],forward:[0,0,1],rotation:[1.5707963267948966,0,0],scale:1,tip:[0,0,0],base:[-291e-6,0,85e-5],bounds:[[-.109995,0,-.066345],[.109995,.120245,.066345]],mobileBase:[112e-6,0,199e-6],mobileBounds:[[-.110195,0,-.066766],[.110195,.120451,.066766]]},wheelbarrow:{kind:"tool",grip:[.50003,.65768,-.19592],up:[0,1,0],forward:[0,0,1],rotation:[0,1.5707963267948966,0],scale:1,tip:[.5,.66,-.18],leftGrip:[.5,.66,.18],base:[-.14454,0,.002523],bounds:[[-.599998,0,-.30894],[.599998,.731943,.30894]],mobileBase:[-.145023,0,.004338],mobileBounds:[[-.600465,0,-.310291],[.600465,.732126,.310291]]},"flower-planter":{kind:"tool",grip:[26e-5,.04962,-.00167],up:[0,1,0],forward:[0,0,1],rotation:[0,0,0],scale:.65,tip:[0,0,0],base:[-636e-6,0,-.002133],bounds:[[-.349987,0,-.178369],[.349987,.345052,.178369]],mobileBase:[-.001156,0,-.001244],mobileBounds:[[-.350097,0,-.179229],[.350097,.348138,.179229]]},"carrot-basket":{kind:"tool",grip:[44e-5,.5373,.00861],tip:[0,.065,.18],up:[0,1,0],forward:[0,0,1],rotation:[-.28,0,0],scale:.6,base:[.005,.518,0],mobileBase:[.005,.518,0],bounds:[[-.276,0,-.275],[.276,.542,.275]],mobileBounds:[[-.276,0,-.275],[.276,.542,.275]]},"lamp-post":{kind:"tool",grip:[-.54721,1.84606,-.06178],tip:[-.56,1.57,-.14],up:[0,1,0],forward:[0,0,1],rotation:[-.28,0,0],scale:.56,base:[-.56,1.83,-.14],mobileBase:[-.56,1.83,-.14],bounds:[[-.8,1.08,-.42],[-.32,1.9,.09]],mobileBounds:[[-.8,1.08,-.42],[-.32,1.9,.09]],mobileGrip:[-.5541,1.84435,-.07193]},hammer:{kind:"tool",grip:[-.00884,.17,-.02134],up:[0,1,0],forward:[0,0,1],rotation:[1.3208,-0,0],scale:1,tip:[0,.35,0],base:[0,0,0],bounds:[[-.09,0,-.04],[.09,.39,.04]]},"picnic-mat":{kind:"mat",grip:[0,.03,.9],base:[0,0,0],seat:[0,.03,0],size:[2.4,.03,1.8],up:[0,1,0],forward:[0,0,1]}},avatars:{"young-man":{approach:.055,pc:{arm:{shoulder:[-.1073,.9977,.017],length:.283},hands:{Left:{palm:[.001028,.026859,-.014244],up:[.07731,.025402,-.996683],forward:[-.004847,.999673,.025103]},Right:{palm:[-.004556,.030154,.01298],up:[-.27523,.022862,.961107],forward:[-.01969,.999373,-.029411]}},feet:{Left:{sole:[-.008613,.077847,-.018526]},Right:{sole:[-.013104,.0766,-.019699]}},faceFront:[.148031,.187985,-.012336],seatToHip:.177156,seat:[.054183,-.121047,-.037847]},mobile:{arm:{shoulder:[-.1073,.9975,.017],length:.2828},hands:{Left:{palm:[.001046,.026865,-.014471],up:[.07731,.025402,-.996683],forward:[-.004847,.999673,.025103]},Right:{palm:[-.004619,.030159,.013199],up:[-.27523,.022862,.961107],forward:[-.01969,.999373,-.029411]}},feet:{Left:{sole:[-.008622,.077861,-.018546]},Right:{sole:[-.013013,.076509,-.019561]}},faceFront:[.147967,.18798,-.01233],seatToHip:.169209,seat:[.028369,-.112981,.041112]}},girl:{approach:.04,pc:{arm:{shoulder:[-.1207,.9562,-.0101],length:.312},hands:{Left:{palm:[.002262,.026527,-.012545],up:[.080525,.009428,-.996708],forward:[.046169,.998847,.013178]},Right:{palm:[-.008729,.024844,-.011101],up:[-.52096,.022073,-.853296],forward:[-.046357,.997459,.054105]}},feet:{Left:{sole:[-.009742,.06055,-.017049]},Right:{sole:[-.009749,.060558,-.01706]}},faceFront:[.151134,.213331,-.012594],seatToHip:.187189,seat:[.048211,-.1263,-.018999]},mobile:{arm:{shoulder:[-.1207,.9565,-.0101],length:.3121},hands:{Left:{palm:[.002243,.026525,-.012312],up:[.080525,.009428,-.996708],forward:[.046169,.998847,.013178]},Right:{palm:[-.008865,.02485,-.011323],up:[-.52096,.022073,-.853296],forward:[-.046357,.997459,.054105]}},feet:{Left:{sole:[-.009684,.060483,-.016947]},Right:{sole:[-.009624,.060414,-.016842]}},faceFront:[.150559,.213283,-.012546],seatToHip:.185015,seat:[.040792,-.122106,-.022939]}},student:{approach:0,pc:{arm:{shoulder:[-.1278,1.0245,.0036],length:.3351},hands:{Left:{palm:[.001085,.031625,-.014347],up:[.128835,.02741,-.991287],forward:[-.028091,.999318,.023981]},Right:{palm:[.007408,.031023,-.011811],up:[.554773,.017948,-.831808],forward:[-.020505,.999759,.007896]}},feet:{Left:{sole:[-.012315,.0709,-.020038]},Right:{sole:[-.01379,.070935,-.019117]}},faceFront:[.11677,.226992,-.057504],seatToHip:.161562,seat:[.053864,-.111889,-.036028]},mobile:{arm:{shoulder:[-.1278,1.0248,.0036],length:.335},hands:{Left:{palm:[.00113,.031635,-.014697],up:[.128835,.02741,-.991287],forward:[-.028091,.999318,.023981]},Right:{palm:[.007298,.031019,-.011645],up:[.554773,.017948,-.831808],forward:[-.020505,.999759,.007896]}},feet:{Left:{sole:[-.012239,.070803,-.019914]},Right:{sole:[-.013869,.071024,-.019226]}},faceFront:[.116325,.226907,-.057421],seatToHip:.159632,seat:[.058323,-.111415,-.048363]}},office:{approach:.035,pc:{arm:{shoulder:[-.1411,1.0116,-.0029],length:.3027},hands:{Left:{palm:[.002987,.021474,-.014005],up:[.141778,.010466,-.989843],forward:[.043566,.998909,.016802]},Right:{palm:[.011848,.031576,.008624],up:[.772156,.013242,.635295],forward:[.007347,.99953,-.029765]}},feet:{Left:{sole:[-.007386,.079255,-.020632]},Right:{sole:[-.012819,.07925,-.017761]}},faceFront:[.128141,.24344,-.05129],seatToHip:.178552,seat:[.057319,-.125079,-.009336]},mobile:{arm:{shoulder:[-.1411,1.0114,-.0029],length:.3028},hands:{Left:{palm:[.002998,.021474,-.014078],up:[.141778,.010466,-.989843],forward:[.043566,.998909,.016802]},Right:{palm:[.011799,.031575,.008583],up:[.772156,.013242,.635295],forward:[.007347,.99953,-.029765]}},feet:{Left:{sole:[-.007349,.0792,-.020529]},Right:{sole:[-.012793,.079227,-.017724]}},faceFront:[.127663,.24338,-.05123],seatToHip:.166655,seat:[.058818,-.116785,-.034037]}},auntie:{approach:0,pc:{arm:{shoulder:[-.1004,.9768,.0721],length:.2892},hands:{Left:{palm:[.002977,.025065,-.012239],up:[.181205,.020968,-.983222],forward:[.024319,.999371,.025795]},Right:{palm:[.013855,.029339,.002289],up:[.960633,.0185,.277205],forward:[-.002114,.998238,-.059294]}},feet:{Left:{sole:[-.010771,.068093,-.016157]},Right:{sole:[-.010636,.06793,-.015954]}},faceFront:[.123368,.171796,-.054391],seatToHip:.188316,seat:[-.018495,-.103771,-.021681]},mobile:{arm:{shoulder:[-.1004,.9771,.0721],length:.2892},hands:{Left:{palm:[.002964,.025063,-.012168],up:[.181205,.020968,-.983222],forward:[.024319,.999371,.025795]},Right:{palm:[.013757,.029337,.002261],up:[.960633,.0185,.277205],forward:[-.002114,.998238,-.059294]}},feet:{Left:{sole:[-.010846,.068183,-.01627]},Right:{sole:[-.01063,.067923,-.015944]}},faceFront:[.123158,.171763,-.054359],seatToHip:.188096,seat:[-.019146,-.103225,-.024158]}},uncle:{approach:.1,pc:{arm:{shoulder:[-.182,1.0307,-.0244],length:.2721},hands:{Left:{palm:[.003234,.044638,-.014133],up:[.028324,.005298,-.999585],forward:[.063247,.997973,.007082]},Right:{palm:[.002224,.043365,-.013785],up:[.356054,.006933,-.93444],forward:[-.063454,.997844,-.016775]}},feet:{Left:{sole:[-.009468,.076449,-.017989]},Right:{sole:[-.009481,.076463,-.018013]}},faceFront:[.134897,.251869,-.057965],seatToHip:.17385,seat:[.058238,-.122956,-.004574]},mobile:{arm:{shoulder:[-.182,1.0309,-.0244],length:.2721},hands:{Left:{palm:[.003235,.044638,-.014188],up:[.028324,.005298,-.999585],forward:[.063247,.997973,.007082]},Right:{palm:[.002207,.043364,-.013741],up:[.356054,.006933,-.93444],forward:[-.063454,.997844,-.016775]}},feet:{Left:{sole:[-.009376,.076344,-.017814]},Right:{sole:[-.00946,.076439,-.017973]}},faceFront:[.134815,.251855,-.057952],seatToHip:.169628,seat:[.048385,-.118245,.012744]}},grandma:{approach:0,pc:{arm:{shoulder:[-.1345,1.0118,.0163],length:.3477},hands:{Left:{palm:[.00173,.022552,-.015886],up:[-.008212,.026753,-.999608],forward:[.084038,.996124,.025969]},Right:{palm:[-.015761,.024399,-.005005],up:[-.918675,.0221,-.394397],forward:[-.006255,.997495,.070465]}},feet:{Left:{sole:[-.012758,.07577,-.020039]},Right:{sole:[-.014096,.075717,-.019027]}},faceFront:[.173489,.235612,-.010205],seatToHip:.200665,seat:[.047213,-.133829,-.020404]},mobile:{arm:{shoulder:[-.1344,1.0121,.0163],length:.3477},hands:{Left:{palm:[.001731,.022548,-.015734],up:[-.008212,.026753,-.999608],forward:[.084038,.996124,.025969]},Right:{palm:[-.015752,.024399,-.005001],up:[-.918675,.0221,-.394397],forward:[-.006255,.997495,.070465]}},feet:{Left:{sole:[-.012639,.075618,-.019853]},Right:{sole:[-.014049,.075663,-.018962]}},faceFront:[.173323,.235602,-.010195],seatToHip:.195003,seat:[.053391,-.131742,-.032805]}},grandpa:{approach:0,pc:{arm:{shoulder:[-.1415,.9976,.0298],length:.3684},hands:{Left:{palm:[.001029,.032329,-.011278],up:[.144194,.018082,-.989384],forward:[-.021343,.999657,.015159]},Right:{palm:[-.007191,.036501,-.009892],up:[-.718103,.019313,-.695669],forward:[.0541,.998139,-.028134]}},feet:{Left:{sole:[-.01014,.07737,-.024796]},Right:{sole:[-.014943,.078449,-.022463]}},faceFront:[.156931,.234079,-.008718],seatToHip:.178361,seat:[.052999,-.122685,-.019546]},mobile:{arm:{shoulder:[-.1415,.9977,.0298],length:.3684},hands:{Left:{palm:[.001021,.032328,-.011222],up:[.144194,.018082,-.989384],forward:[-.021343,.999657,.015159]},Right:{palm:[-.007193,.036501,-.009893],up:[-.718103,.019313,-.695669],forward:[.0541,.998139,-.028134]}},feet:{Left:{sole:[-.010156,.077395,-.024836]},Right:{sole:[-.01485,.078356,-.022322]}},faceFront:[.157346,.234102,-.008741],seatToHip:.175782,seat:[.041946,-.117801,-.012738]}}},horses:{pony2:{pc:{mouth:{bone:"tripoHead_2",point:[-.2806,.005602,-.013961]},neck:{bone:"tripoHead_1",point:[.075735,.078493,-.176065]},back:{bone:"tripoSpine_0",point:[.184764,-.059576,.005627]},left:{bone:"tripoSpine_0",point:[.140108,-.024872,-.12511]},right:{bone:"tripoSpine_0",point:[.164206,.088206,.104099]}},mobile:{mouth:{bone:"tripoHead_2",point:[-.280606,.005603,-.013961]},neck:{bone:"tripoHead_1",point:[.075732,.078496,-.175992]},back:{bone:"tripoSpine_0",point:[.184485,-.059679,.005626]},left:{bone:"tripoSpine_0",point:[.142279,-.028613,-.124904]},right:{bone:"tripoSpine_0",point:[.158483,.088274,.106211]}}},racehorse2:{pc:{mouth:{bone:"tripoHead_2",point:[-.140889,.255553,.008743]},neck:{bone:"tripoHead_1",point:[.077608,.08192,-.083764]},back:{bone:"tripoSpine_0",point:[.073501,-.123497,.003206]},left:{bone:"tripoSpine_0",point:[.070769,-.068053,-.065406]},right:{bone:"tripoSpine_0",point:[.074504,-.065441,.060806]}},mobile:{mouth:{bone:"tripoHead_2",point:[-.140827,.25535,.008736]},neck:{bone:"tripoHead_1",point:[.077617,.081922,-.083977]},back:{bone:"tripoSpine_0",point:[.073082,-.123477,.003206]},left:{bone:"tripoSpine_0",point:[.071104,-.062831,-.064455]},right:{bone:"tripoSpine_0",point:[.067474,-.058758,.071531]}}}},houses:{"house-tier1":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[0,0,2.756388],footprint:[4.924164,4.467764],floorAreaM2:22,bounds:[[-2.462082,0,-2.233882],[2.462082,5.628008,2.233882]],mobileBase:[0,0,0],mobileBounds:[[-2.462082,0,-2.233882],[2.462082,5.628008,2.233882]]},"house-tier2":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-.856797,0,3.301237],footprint:[5.750316,5.564912],floorAreaM2:32,bounds:[[-2.875158,0,-2.782456],[2.875158,5.660423,2.782456]],mobileBase:[0,0,0],mobileBounds:[[-2.875158,0,-2.782456],[2.875158,5.660423,2.782456]]},"house-tier3":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-.435101,0,3.942986],footprint:[6.061922,6.928496],floorAreaM2:42,bounds:[[-3.030961,0,-3.464248],[3.030961,8.367333,3.464248]],mobileBase:[0,0,0],mobileBounds:[[-3.030961,0,-3.464248],[3.030961,8.367333,3.464248]]},"house-tier4":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[1.400806,0,4.203388],footprint:[7.247256,7.451096],floorAreaM2:54,bounds:[[-3.623628,0,-3.725548],[3.623628,6.825015,3.725548]],mobileBase:[0,0,0],mobileBounds:[[-3.623628,0,-3.725548],[3.623628,6.825015,3.725548]]},"house-tier5":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-.253743,0,3.807711],footprint:[8.749774,6.971608],floorAreaM2:61,bounds:[[-4.374887,0,-3.485804],[4.374887,8.356526,3.485804]],mobileBase:[0,0,0],mobileBounds:[[-4.374887,0,-3.485805],[4.374887,8.356526,3.485805]]},"house-tier6":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[.542665,0,4.352629],footprint:[10.23897,7.617954],floorAreaM2:78,bounds:[[-5.119485,0,-3.808977],[5.119485,8.398256,3.808977]],mobileBase:[0,0,0],mobileBounds:[[-5.119485,0,-3.808977],[5.119485,8.398256,3.808977]]}},shops:{"shop-bank":{kind:"shop",label:"\uC740\uD589",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[.036869,0,3.844138],doorHeightM:2.028,footprint:[7.8,7.586615],groundFootprint:[7.575183,7.335125],bounds:[[-3.947631,0,-3.919052],[3.852369,7.8,3.667562]],sign:{center:[.022786,5.126333,2.026204],size:[3.070167,.507],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-3.947631,0,-3.919052],[3.852369,7.8,3.667562]]},"shop-realestate":{kind:"shop",label:"\uBD80\uB3D9\uC0B0",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[1.440086,0,4.401905],doorHeightM:2.587,footprint:[7.3,8.071728],groundFootprint:[7.026306,7.865335],bounds:[[-3.602889,0,-3.986509],[3.697111,9.18445,4.085218]],sign:{center:[-.185051,5.406069,3.078678],size:[4.245257,.596989],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-3.602889,0,-3.986509],[3.697111,9.18445,4.085218]]},"shop-community":{kind:"shop",label:"\uC8FC\uBBFC\uC13C\uD130",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[0,0,3.498266],doorHeightM:2.196,footprint:[8,6.266586],groundFootprint:[7.483871,5.896531],bounds:[[-4,0,-3.31832],[4,9.967133,2.948266]],sign:{center:[.017996,3.671227,2.671248],size:[1.691644,.431909],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-4,0,-3.31832],[4,9.967133,2.948266]]},"shop-architect":{kind:"shop",label:"\uAC74\uCD95\uC0AC\uBB34\uC18C",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-1.247128,0,3.941946],doorHeightM:2.32,footprint:[7.6,6.783893],groundFootprint:[7.6,6.783893],bounds:[[-3.8,0,-3.391946],[3.8,8.031595,3.391946]],sign:{center:[.029003,4.306943,2.536985],size:[2.668274,.493051],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-3.8,0,-3.391946],[3.8,8.031595,3.391946]]}},garden:{"garden-fence":{kind:"fence",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.75,0,-.102223],[.75,.9,.102223]],footprint:[1.5,.204446],mobileBase:[0,0,0],mobileBounds:[[-.75,0,-.102223],[.75,.9,.102223]],joinPoints:{left:[-.75,0,0],right:[.75,0,0]}},"garden-gate":{kind:"gate",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.75,0,-.201881],[.75,1.192889,.201881]],footprint:[1.5,.403762],mobileBase:[0,0,0],mobileBounds:[[-.75,0,-.201881],[.75,1.192889,.201881]],joinPoints:{left:[-.75,0,0],right:[.75,0,0]}},"garden-bed":{kind:"bed",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.75,0,-.450828],[.75,.214512,.450828]],footprint:[1.5,.901656],mobileBase:[0,0,0],mobileBounds:[[-.75,0,-.450828],[.75,.214512,.450828]],plantingSlots:[[-.45,.15,-.125],[0,.15,-.125],[.45,.15,-.125],[-.45,.15,.125],[0,.15,.125],[.45,.15,.125]]},"garden-bush":{kind:"bush",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.485187,0,-.485187],[.485187,.758001,.485187]],footprint:[.970373,.970373],mobileBase:[0,0,0],mobileBounds:[[-.485187,0,-.485187],[.485187,.758001,.485187]],diameterM:1},"garden-stone":{kind:"stone",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.238007,0,-.249912],[.238007,.076606,.249912]],footprint:[.476014,.499823],mobileBase:[0,0,0],mobileBounds:[[-.238007,0,-.249912],[.238007,.076606,.249912]],diameterM:.5}}};var Ks=Object.freeze(Object.fromEntries(Object.entries(Gt.props).filter(([,s])=>s.kind!=="mat"&&s.kind!=="procedural"))),l3=new Set(Object.keys(Ks).filter(s=>Ks[s].kind==="food")),Sm=Object.freeze(Object.fromEntries(Object.entries(Gt.avatars).map(([s,e])=>[s,e.approach]))),c3={grip:[0,0,0],forward:[0,0,1],up:[0,1,0]};function js(s,e="Right"){let t;return s.traverse(n=>{n.isBone&&n.name.endsWith(e+"Hand")&&(t=n)}),t}function an(s,e){let t=new v(...s).normalize(),n=new v(...e).normalize(),i=t.clone().cross(n).normalize();return new me().setFromRotationMatrix(new Te().makeBasis(i,t,i.clone().cross(t)))}var u3=an([0,0,1],[0,1,0]),h3=an([0,-1,0],[0,0,1]),d3=an([0,0,1],[0,1,0]);function za(s,e,t,n){let i=t==="fishingRod"?c3:t==="racket"?Gt.props.racket:Ks[t];if(!i||!e)return null;let r=e.name.includes("Left")?"Left":"Right",o=s.mobile?"mobile":"pc",a=(Gt.avatars[s.avatar?.id]||Gt.avatars["young-man"])[o].hands[r],l=l3.has(t),c=new v(...l?s.mobile?i.mobileBase:i.base:s.mobile&&i.mobileGrip?i.mobileGrip:i.grip),u=an(a.forward,a.up).invert(),h=new v(...a.forward).cross(new v(...a.up)).normalize(),d=new at;if(d.name="hand-grip-"+t,e.add(d),d.position.fromArray(a.palm),n){d.add(n);let I=i.scale||1;n.scale.setScalar(I),n.quaternion.copy(d3).multiply(an(i.forward,i.up).invert()),n.position.copy(c).applyQuaternion(n.quaternion).multiplyScalar(-I)}let f=[];e.traverse(I=>{I.isBone&&/Hand(?:Index|Middle|Ring|Pinky|Thumb)[123]$/.test(I.name)&&f.push({bone:I,base:I.quaternion.clone()})});let p=o==="mobile"?i.mobileBounds:i.bounds,m=l?Ht.clamp(.76-3.2*(p[1][2]-p[0][2]),.15,.48):.65,_=l&&p[1][0]-p[0][0]>.13,y=new v,w=new me,S=new me,b=new me,E=new v,P=new v,C=new v,L=new v,A=new St,N=!1;return{holder:d,hand:e,key:t,update({rotation:I=i.rotation||[0,0,0],close:U=m,handOrientation:V=null}={}){if(!N){s.player.updateWorldMatrix(!0,!0),s.player.getWorldQuaternion(w),V?S.copy(V):S.copy(w).multiply(l?u3:h3),S.multiply(u),e.quaternion.copy(e.parent.getWorldQuaternion(b).invert().multiply(S)),e.updateWorldMatrix(!1,!0),e.getWorldScale(y),d.scale.set(1/y.x,1/y.y,1/y.z),S.copy(w).multiply(b.setFromEuler(A.set(...I))),d.quaternion.copy(e.getWorldQuaternion(b).invert().multiply(S)),L.copy(h).applyQuaternion(e.getWorldQuaternion(w));for(let{bone:W,base:k}of f){W.parent.getWorldQuaternion(b).invert(),C.copy(L).applyQuaternion(b);let ne=W.name.includes("Thumb")?_?-.32:U*.4:U;W.quaternion.copy(k).premultiply(S.setFromAxisAngle(C,ne)),W.updateWorldMatrix(!1,!0)}d.updateWorldMatrix(!0,!0)}},get info(){return d.getWorldPosition(E),n?P.copy(c).applyMatrix4(n.matrixWorld):P.copy(E),{key:t,palm:E.toArray(),contact:P.toArray(),error:P.distanceTo(E),fingerCount:f.length}},dispose(){if(N=!0,!s.avatar?.riding)for(let{bone:I,base:U}of f)I.quaternion.copy(U);d.removeFromParent()}}}var f3=Date.parse("2026-11-25T00:00:00+09:00");var p3=1440,m3=7*p3,Na=Date.parse("2026-11-16T00:00:00+09:00"),Am=6*36e5,g3=18*36e5,Tm=(f3-Na)/864e5,Fa=m3*6e4/g3;var x3=Date.parse("2026-11-20T00:00:00+09:00"),Rm=Date.parse("2026-11-20T08:15:00+09:00");var Ua=Object.freeze({4:14,5:10,6:10}),y3=Object.keys(Ua).map(Number),_3=21e4,v3=36e4;var b3=s=>Math.round(s*2e4/429),Cm=x3+_3,Pm=9*36e5,M3=[1200,1400,1600,1800],Qs=[0];for(let s of M3)Qs.push(Qs.at(-1)+b3(s)+v3);var Im=Qs.at(-1);var w3=[[[3,1200],[3,1200],[3,1400],[3,1200],[3,1400],[2,1200],[2,1400],[2,1600],[1,1800]],[[3,1200],[3,1200],[3,1400],[3,1200],[2,1200],[2,1400],[2,1600],[1,1600],[1,1800]]],La=[1140,1230,1320],S3=Object.freeze({raceWindows:Object.freeze(La.map((s,e)=>Object.freeze({session:e,start:s*7-24.5,end:(s+64)*7+31.5,floodlights:e>0}))),races:Object.freeze(La.flatMap((s,e)=>w3[Math.min(1,e)].map(([t,n],i)=>{let r=(s+i*8)*7;return Object.freeze({session:e,day:Math.floor(r/1440),minute:r%1440,number:i+1,grade:t,distance:n,special:e>0&&i===8})})))}),Oa=Object.freeze({name:"Run Park",epochMs:Na,epochGameMinute:0,dayNames:Object.freeze(["\uC6D4\uC694\uC77C","\uD654\uC694\uC77C","\uC218\uC694\uC77C","\uBAA9\uC694\uC77C","\uAE08\uC694\uC77C","\uD1A0\uC694\uC77C","\uC77C\uC694\uC77C"]),phases:Object.freeze({dawn:5,day:7,dusk:17,night:19}),weeklyFeature:Object.freeze({session:1,number:9,weekOffset:5,everyWeeks:7}),...S3});var Da={start:18,end:24},eo=Object.freeze({shell:{start:0,end:5,label:"\uB2E4\uC2AC\uAE30",icon:"creek/clam",target:"shell",fromMidnight:!0},dawn:{start:0,end:9,label:"\uC0C8\uBCBD \uD0D0\uC0C9",icon:"env/mushroom-stump",target:"dawn"},clam:{start:9,end:18,label:"\uC870\uAC1C \uCE90\uAE30",icon:"props/shovel",target:"clam",fromMidnight:!0},gardener:{start:9,end:18,label:"\uB0AE \uC77C\uD130",icon:"props/hoe",target:"gardener"},lamp:{...Da,label:"\uB4F1\uBD88\uC9C0\uAE30",icon:"props/lamp-post",target:"lamp"},firefly:{...Da,label:"\uBC18\uB527\uBD88",icon:"env/bird-house",target:"firefly"},forest:{start:19,end:5,label:"\uBC24\uB9C8\uC744 \uC232\uC9C0\uAE30",icon:"env/tree-pine",target:"forest"}});var Ba=y3.map(s=>Oa.dayNames[s][0]+" "+Ua[s]+":00").join(", ");var zm=Date.parse(new Date(Oa.epochMs+9*36e5).toISOString().slice(0,10)+"T00:00:00Z");var to={prices:[{category:"\uC791\uBB3C",name:"\uBAA9\uCD08 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:900,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uBAA9\uCD08 \uB0A9\uD488",unit:"\uBA39\uC774 1\uAC1C",won:0,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC790\uAC00\uC18C\uBE44",detail:"\uB9D0 \uBA39\uC774\uB85C \uC0AC\uC6A9. \uB9E4\uC785 \uC5C6\uC74C"},{category:"\uC791\uBB3C",name:"\uAE08\uBE5B \uBAA9\uCD08",unit:"\uD76C\uADC0 1\uAC1C",won:2700,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC218\uC9D1\uD488. \uC77C\uBC18 \uCD9C\uD558\uC5D0 \uCD94\uAC00, \uD574\uB2F9 \uC791\uBB3C \uD55C \uCE78\uB2F9 \uD655\uB960 1%"},{category:"\uC791\uBB3C",name:"\uB2F9\uADFC \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:1100,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uB2F9\uADFC \uB0A9\uD488",unit:"\uBA39\uC774 1\uAC1C",won:0,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC790\uAC00\uC18C\uBE44",detail:"\uB9D0 \uBA39\uC774\uB85C \uC0AC\uC6A9. \uB9E4\uC785 \uC5C6\uC74C"},{category:"\uC791\uBB3C",name:"\uAE08\uBE5B \uB2F9\uADFC",unit:"\uD76C\uADC0 1\uAC1C",won:19400,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC218\uC9D1\uD488. \uC77C\uBC18 \uCD9C\uD558\uC5D0 \uCD94\uAC00, \uD574\uB2F9 \uC791\uBB3C \uD55C \uCE78\uB2F9 \uD655\uB960 1%"},{category:"\uC791\uBB3C",name:"\uAC10\uC790 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:1800,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uAC10\uC790 \uB0A9\uD488",unit:"20kg 1\uC0C1\uC790",won:32e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC8FC\uAC04 \uC9C0\uC218 100\uC758 \uAC8C\uC784 \uAE30\uC900\uAC00. \uD604\uC2E4\uC758 \uD3EC\uC7A5 \uD06C\uAE30\uC640 \uC720\uD1B5 \uB2E8\uACC4\uB97C \uBC18\uC601\uD55C \uC81C\uC548\uC785\uB2C8\uB2E4."},{category:"\uC791\uBB3C",name:"\uAE08\uBE5B \uAC10\uC790",unit:"\uD76C\uADC0 1\uC0C1\uC790",won:96e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC218\uC9D1\uD488. \uC77C\uBC18 \uCD9C\uD558\uC5D0 \uCD94\uAC00, \uD574\uB2F9 \uC791\uBB3C \uD55C \uCE78\uB2F9 \uD655\uB960 1%"},{category:"\uC791\uBB3C",name:"\uB538\uAE30 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:3200,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uB538\uAE30 \uB0A9\uD488",unit:"2kg 1\uC0C1\uC790",won:22e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC8FC\uAC04 \uC9C0\uC218 100\uC758 \uAC8C\uC784 \uAE30\uC900\uAC00. \uD604\uC2E4\uC758 \uD3EC\uC7A5 \uD06C\uAE30\uC640 \uC720\uD1B5 \uB2E8\uACC4\uB97C \uBC18\uC601\uD55C \uC81C\uC548\uC785\uB2C8\uB2E4."},{category:"\uC791\uBB3C",name:"\uAE08\uBE5B \uB538\uAE30",unit:"\uD76C\uADC0 1\uC0C1\uC790",won:66e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC218\uC9D1\uD488. \uC77C\uBC18 \uCD9C\uD558\uC5D0 \uCD94\uAC00, \uD574\uB2F9 \uC791\uBB3C \uD55C \uCE78\uB2F9 \uD655\uB960 1%"},{category:"\uC791\uBB3C",name:"\uD638\uBC15 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:1800,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uD638\uBC15 \uB0A9\uD488",unit:"20kg 1\uC0C1\uC790",won:38e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC8FC\uAC04 \uC9C0\uC218 100\uC758 \uAC8C\uC784 \uAE30\uC900\uAC00. \uD604\uC2E4\uC758 \uD3EC\uC7A5 \uD06C\uAE30\uC640 \uC720\uD1B5 \uB2E8\uACC4\uB97C \uBC18\uC601\uD55C \uC81C\uC548\uC785\uB2C8\uB2E4."},{category:"\uC791\uBB3C",name:"\uAE08\uBE5B \uD638\uBC15",unit:"\uD76C\uADC0 1\uC0C1\uC790",won:114e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC218\uC9D1\uD488. \uC77C\uBC18 \uCD9C\uD558\uC5D0 \uCD94\uAC00, \uD574\uB2F9 \uC791\uBB3C \uD55C \uCE78\uB2F9 \uD655\uB960 1%"},{category:"\uC791\uBB3C",name:"\uBC30\uCD94 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:1e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uBC30\uCD94 \uB0A9\uD488",unit:"10kg 1\uC0C1\uC790",won:12e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC8FC\uAC04 \uC9C0\uC218 100\uC758 \uAC8C\uC784 \uAE30\uC900\uAC00. \uD604\uC2E4\uC758 \uD3EC\uC7A5 \uD06C\uAE30\uC640 \uC720\uD1B5 \uB2E8\uACC4\uB97C \uBC18\uC601\uD55C \uC81C\uC548\uC785\uB2C8\uB2E4."},{category:"\uC791\uBB3C",name:"\uACE0\uCD94 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:3e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uACE0\uCD94 \uB0A9\uD488",unit:"5kg 1\uC0C1\uC790",won:27500,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC8FC\uAC04 \uC9C0\uC218 100\uC758 \uAC8C\uC784 \uAE30\uC900\uAC00. \uD604\uC2E4\uC758 \uD3EC\uC7A5 \uD06C\uAE30\uC640 \uC720\uD1B5 \uB2E8\uACC4\uB97C \uBC18\uC601\uD55C \uC81C\uC548\uC785\uB2C8\uB2E4."},{category:"\uC791\uBB3C",name:"\uD1A0\uB9C8\uD1A0 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:2400,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uD1A0\uB9C8\uD1A0 \uB0A9\uD488",unit:"5kg 1\uC0C1\uC790",won:18e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC8FC\uAC04 \uC9C0\uC218 100\uC758 \uAC8C\uC784 \uAE30\uC900\uAC00. \uD604\uC2E4\uC758 \uD3EC\uC7A5 \uD06C\uAE30\uC640 \uC720\uD1B5 \uB2E8\uACC4\uB97C \uBC18\uC601\uD55C \uC81C\uC548\uC785\uB2C8\uB2E4."},{category:"\uC791\uBB3C",name:"\uC625\uC218\uC218 \uC528\uC557",unit:"\uD30C\uC885\uC6A9 1\uBD09",won:1400,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD55C \uCE78 \uD30C\uC885\uC6A9 \uC885\uC790 \uB610\uB294 \uBAA8\uC885 \uBB36\uC74C. \uBD09\uC218\uC640 \uBB3C\uB958 \uADDC\uACA9\uC740 \uAC8C\uC784 \uACAC\uC801"},{category:"\uC791\uBB3C",name:"\uC625\uC218\uC218 \uB0A9\uD488",unit:"10kg 1\uC0C1\uC790",won:23e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uB18D\uAC00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC8FC\uAC04 \uC9C0\uC218 100\uC758 \uAC8C\uC784 \uAE30\uC900\uAC00. \uD604\uC2E4\uC758 \uD3EC\uC7A5 \uD06C\uAE30\uC640 \uC720\uD1B5 \uB2E8\uACC4\uB97C \uBC18\uC601\uD55C \uC81C\uC548\uC785\uB2C8\uB2E4."},{category:"\uC18C\uBAA8\uD488",name:"\uBC2D \uAC70\uB984",unit:"1\uAC1C",won:400,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uBA39\uC774\uC6A9 \uB2F9\uADFC",unit:"1\uAC1C",won:800,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uBA39\uC774\uC6A9 \uBAA9\uCD08",unit:"1\uAC1C",won:1600,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uB9D0 \uBA39\uC774 \uD55C \uB07C",unit:"1\uAC1C",won:3200,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uAE54\uC9DA",unit:"1\uAC1C",won:8500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uBAA9\uC695 \uC0F4\uD478",unit:"1\uAC1C",won:1200,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uD3B8\uC790 \uC138\uD2B8",unit:"1\uAC1C",won:12e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uC9D1 \uC218\uB9AC \uC0C1\uC790",unit:"1\uAC1C",won:45e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uC2DD\uC218\uC640 \uAE38\uC5B4 \uC900 \uBB3C",unit:"1\uAC1C",won:0,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uB9D0 \uC9C4\uB8CC 10\uC810 \uD68C\uBCF5",unit:"1\uAC1C",won:35e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uACFC\uC218\uC6D0 \uBC30\uC591\uD1A0",unit:"1\uAC1C",won:2e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uB300\uB18D \uBC2D \uBE44\uB8CC",unit:"1\uAC1C",won:8e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uB9D0\uB18D\uC7A5 \uC0AC\uB8CC",unit:"1\uAC1C",won:5e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uC18C\uBAA8\uD488",name:"\uC870\uACBD\uC218 \uD1F4\uBE44",unit:"1\uAC1C",won:3e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD45C\uC2DC \uAC00\uACA9\uC740 \uC18C\uB9E4 \uACB0\uC81C\uC561. \uBA39\uC774 \uBB36\uC74C\uC740 \uB2F9\uADFC \uB450 \uAC1C\uC640 \uBAA9\uCD08 \uD55C \uAC1C. \uC0AC\uC6A9\uBD84\uB9CC \uACB0\uC81C"},{category:"\uCC44\uC9D1",name:"\uD754\uD55C \uBC84\uC12F",unit:"\uC120\uBCC4 1\uBC14\uAD6C\uB2C8",won:25e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC885\uB958\uBCC4 \uC218\uC9D1 \uB2E8\uC704 \uBC0F \uAC8C\uC784 \uC218\uC9D1\uD488 \uACAC\uC801. \uAE30\uC900 \uB3D9\uC120\uC758 \uC77C\uBC18 \uC138 \uD488\uBAA9 \uD3C9\uADE0 30,000\uC6D0"},{category:"\uCC44\uC9D1",name:"\uADC0\uD55C \uBC84\uC12F",unit:"\uC120\uBCC4 1\uBC14\uAD6C\uB2C8",won:145e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC885\uB958\uBCC4 \uC218\uC9D1 \uB2E8\uC704 \uBC0F \uAC8C\uC784 \uC218\uC9D1\uD488 \uACAC\uC801. \uAE30\uC900 \uB3D9\uC120\uC758 \uC77C\uBC18 \uC138 \uD488\uBAA9 \uD3C9\uADE0 30,000\uC6D0"},{category:"\uCC44\uC9D1",name:"\uC774\uC2AC \uBCD1",unit:"\uCC44\uC9D1 1\uBCD1",won:3e4,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC885\uB958\uBCC4 \uC218\uC9D1 \uB2E8\uC704 \uBC0F \uAC8C\uC784 \uC218\uC9D1\uD488 \uACAC\uC801. \uAE30\uC900 \uB3D9\uC120\uC758 \uC77C\uBC18 \uC138 \uD488\uBAA9 \uD3C9\uADE0 30,000\uC6D0"},{category:"\uCC44\uC9D1",name:"\uBB34\uC9C0\uAC1C \uC774\uC2AC",unit:"\uCC44\uC9D1 1\uBCD1",won:18e4,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC885\uB958\uBCC4 \uC218\uC9D1 \uB2E8\uC704 \uBC0F \uAC8C\uC784 \uC218\uC9D1\uD488 \uACAC\uC801. \uAE30\uC900 \uB3D9\uC120\uC758 \uC77C\uBC18 \uC138 \uD488\uBAA9 \uD3C9\uADE0 30,000\uC6D0"},{category:"\uCC44\uC9D1",name:"\uBC18\uB527\uBD88",unit:"1\uAC1C",won:4100,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uD669\uAE08 \uBC18\uB527\uBD88",unit:"1\uAC1C",won:49e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uB2E4\uC2AC\uAE30",unit:"\uC120\uBCC4 1\uB9DD",won:35e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC885\uB958\uBCC4 \uC218\uC9D1 \uB2E8\uC704 \uBC0F \uAC8C\uC784 \uC218\uC9D1\uD488 \uACAC\uC801. \uAE30\uC900 \uB3D9\uC120\uC758 \uC77C\uBC18 \uC138 \uD488\uBAA9 \uD3C9\uADE0 30,000\uC6D0"},{category:"\uCC44\uC9D1",name:"\uC9C4\uC8FC \uB2E4\uC2AC\uAE30",unit:"\uC120\uBCC4 1\uB9DD",won:22e4,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC885\uB958\uBCC4 \uC218\uC9D1 \uB2E8\uC704 \uBC0F \uAC8C\uC784 \uC218\uC9D1\uD488 \uACAC\uC801. \uAE30\uC900 \uB3D9\uC120\uC758 \uC77C\uBC18 \uC138 \uD488\uBAA9 \uD3C9\uADE0 30,000\uC6D0"},{category:"\uCC44\uC9D1",name:"\uBCC4 \uC870\uAC01",unit:"1\uAC1C",won:44e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uD070 \uBCC4 \uC870\uAC01",unit:"1\uAC1C",won:396e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uD53C\uB77C\uBBF8",unit:"1\uAC1C",won:1900,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uAC08\uACA8\uB2C8",unit:"1\uAC1C",won:3100,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uCC38\uBD95\uC5B4",unit:"1\uAC1C",won:5200,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uBC84\uB4E4\uCE58",unit:"1\uAC1C",won:8700,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uC3D8\uAC00\uB9AC",unit:"1\uAC1C",won:19600,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uCC44\uC9D1",name:"\uBBFC\uBB3C\uC870\uAC1C",unit:"1\uAC1C",won:3e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC8FC\uBBFC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uD604\uC7AC \uB9C8\uC744 \uB9E4\uC785 \uB2E8\uC704\uC640 \uC7A5\uBD80 \uBE44\uAD50. \uD76C\uADC0 \uC218\uC9D1\uD488\uC740 \uAC8C\uC784 \uB9E4\uC785\uAC00\uC774\uBA70 \uC2E4\uC81C \uBCF4\uD638 \uC57C\uC0DD\uC0DD\uBB3C \uAC70\uB798 \uC2DC\uC138\uC640 \uBB34\uAD00"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uD654\uB2E8",unit:"1\uC810",won:45e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAD00\uBAA9",unit:"1\uC810",won:35e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAF43\uC774 \uD540 \uAD00\uBAA9",unit:"1\uC810",won:45e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAF43 \uD654\uBD84",unit:"1\uC810",won:15e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAF43 \uC0C1\uC790",unit:"1\uC810",won:24e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAF43\uBC2D",unit:"1\uC810",won:65e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB4E4\uAF43",unit:"1\uC810",won:4e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAF43 \uD654\uD658",unit:"1\uC810",won:28e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB514\uB524\uB3CC",unit:"1\uC810",won:5e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC0AC\uACFC\uB098\uBB34",unit:"1\uC810",won:8e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uBC9A\uB098\uBB34",unit:"1\uC810",won:12e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC18C\uB098\uBB34",unit:"1\uC810",won:18e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uCC38\uB098\uBB34",unit:"1\uC810",won:1e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB2E8\uD48D\uB098\uBB34",unit:"1\uC810",won:15e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uBD84\uC7AC",unit:"1\uC810",won:75e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uBB18\uBAA9 \uD654\uBD84",unit:"1\uC810",won:12e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB098\uBB34 \uBCA4\uCE58",unit:"1\uC810",won:12e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC9DA \uBCA4\uCE58",unit:"1\uC810",won:45e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uD53C\uD06C\uB2C9 \uD0C1\uC790",unit:"1\uC810",won:24e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB098\uBB34 \uADF8\uB124",unit:"1\uC810",won:16e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC815\uC790",unit:"1\uC810",won:18e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB3CC \uC6B0\uBB3C",unit:"1\uC810",won:45e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uD48D\uCC28",unit:"1\uC810",won:24e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAC00\uB85C\uB4F1",unit:"1\uC810",won:28e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC6B0\uD3B8\uD568",unit:"1\uC810",won:38e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC0C8\uC9D1",unit:"1\uC810",won:18e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC774\uC815\uD45C",unit:"1\uC810",won:35e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAC8C\uC2DC\uD310",unit:"1\uC810",won:14e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB098\uBB34\uB2E4\uB9AC",unit:"1\uC810",won:12e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uD5C8\uC218\uC544\uBE44",unit:"1\uC810",won:32e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAC74\uCD08 \uB354\uBBF8",unit:"1\uC810",won:18e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAC74\uCD08 \uC190\uC218\uB808",unit:"1\uC810",won:75e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC0AC\uACFC \uC0C1\uC790",unit:"1\uC810",won:22e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB2F9\uADFC \uBC14\uAD6C\uB2C8",unit:"1\uC810",won:12e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uADC0\uB9AC \uC790\uB8E8",unit:"1\uC810",won:2e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uBC84\uC12F \uADF8\uB8E8\uD130\uAE30",unit:"1\uC810",won:16e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAC10\uC790",unit:"1\uC810",won:1e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB538\uAE30",unit:"1\uC810",won:3e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uD638\uBC15",unit:"1\uC810",won:5e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB9C8\uAD6C \uAC78\uC774",unit:"1\uC810",won:11e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC7A5\uC2DD\uC6A9 \uD3B8\uC790",unit:"1\uC810",won:15e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uAE08\uBE5B \uD3B8\uC790",unit:"1\uC810",won:25e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uC7A5\uC560\uBB3C \uD5C8\uB4E4",unit:"1\uC810",won:17e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uD6C8\uB828\uC6A9 \uACE0\uAE54",unit:"1\uC810",won:6e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9C8\uB2F9 \uAFB8\uBBF8\uAE30",name:"\uB9D0 \uC7A5\uB09C\uAC10 \uACF5",unit:"1\uC810",won:14e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uC874 \uC6D0\uD654 \uC815\uC6D0\uC6A9\uD488 \uB9E4\uC785\uAC00 \uC720\uC9C0. \uC2E4\uC0AC\uC6A9 \uC2DC\uC124 \uBC0F \uC0DD\uC0B0 \uC7AC\uACE0\uC640 \uBCC4\uB3C4"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uBC14\uC0AD \uCE58\uD0A8",unit:"1\uAC1C",won:21e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uBC84\uD130 \uBE44\uC2A4\uD0B7",unit:"1\uAC1C",won:2800,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC591\uB150\uCE58\uD0A8",unit:"1\uAC1C",won:23e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB2ED\uAC15\uC815",unit:"1\uAC1C",won:14e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uCE58\uD0A8\uB108\uAC9F",unit:"1\uAC1C",won:6e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uAC10\uC790\uD280\uAE40",unit:"1\uAC1C",won:3500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uCE58\uC988\uBCFC",unit:"1\uAC1C",won:4500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uCE58\uD0A8\uBC84\uAC70",unit:"1\uAC1C",won:6500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uD551\uD06C \uB808\uBAAC\uC5D0\uC774\uB4DC",unit:"1\uAC1C",won:4e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB5A1\uBCF6\uC774",unit:"1\uAC1C",won:5e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uAE40\uBC25",unit:"1\uAC1C",won:4e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC5B4\uBB35",unit:"1\uAC1C",won:1500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC21C\uB300",unit:"1\uAC1C",won:5500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uBAA8\uB460 \uD280\uAE40",unit:"1\uAC1C",won:5500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB77C\uBA74",unit:"1\uAC1C",won:4500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uD56B\uB3C4\uADF8",unit:"1\uAC1C",won:3e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uBD95\uC5B4\uBE75",unit:"1\uAC1C",won:1500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uD638\uB5A1",unit:"1\uAC1C",won:2e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC2DD\uD61C",unit:"1\uAC1C",won:2500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB3D7\uC790\uB9AC",unit:"1\uAC1C",won:15e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC790\uC804\uAC70",unit:"1\uAC1C",won:32e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC624\uD1A0\uBC14\uC774",unit:"1\uAC1C",won:28e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uD0A5\uBCF4\uB4DC \uB300\uC5EC",unit:"1\uAC1C",won:0,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uBE68\uAC04 \uC548\uC7A5",unit:"1\uAC1C",won:85e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uD30C\uB780 \uC548\uC7A5",unit:"1\uAC1C",won:85e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uAF43 \uD654\uAD00",unit:"1\uAC1C",won:35e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uAC08\uAE30 \uB9AC\uBCF8",unit:"1\uAC1C",won:15e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB9D0 \uB2F4\uC694",unit:"1\uAC1C",won:12e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC791\uC740 \uBAA8\uC790",unit:"1\uAC1C",won:35e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uBC29\uC6B8 \uBAA9\uAC78\uC774",unit:"1\uAC1C",won:45e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uAD74\uB808",unit:"1\uAC1C",won:15e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB2E4\uB9AC \uBCF4\uD638\uB300",unit:"1\uAC1C",won:9e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB098\uBB34 \uBA85\uD310",unit:"1\uAC1C",won:0,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uAF43 \uBA85\uD310",unit:"1\uAC1C",won:65e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uCCA0\uC81C \uBA85\uD310",unit:"1\uAC1C",won:12e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB3CC \uBA85\uD310",unit:"1\uAC1C",won:15e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB9D0\uAD7D \uBA85\uD310",unit:"1\uAC1C",won:8e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC78E\uC0AC\uADC0 \uBA85\uD310",unit:"1\uAC1C",won:65e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uB9AC\uBCF8 \uBA85\uD310",unit:"1\uAC1C",won:55e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uB9E4\uC810\uACFC \uC7A5\uBE44",name:"\uC678\uD615 \uBCC0\uACBD\uAD8C",unit:"1\uAC1C",won:3e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC18C\uB9E4 \uD55C \uC811\uC2DC, \uD0C8\uAC83 \uD55C \uB300 \uB610\uB294 \uC7A5\uBE44 \uD55C \uC810. \uC774\uC6A9\uD55C \uC8FC\uBBFC\uB9CC \uACB0\uC81C\uD558\uB294 \uAC8C\uC784 \uC18C\uB9E4 \uACAC\uC801"},{category:"\uC8FC\uD0DD",name:"\uD1B5\uB098\uBB34 \uC624\uB450\uB9C9",unit:"\uC2E0\uCD95 \uAC74\uBB3C 1\uCC44",won:0,flow:"\uC8FC\uBBFC \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uAC74\uBB3C \uBC14\uB2E5 22\u33A1 \xD7 1\uCE35 \xD7 \u33A1\uB2F9 2,000,000\uC6D0. \uD1A0\uC9C0\uC640 \uC870\uC131\uC740 \uBCC4\uB3C4. \uC624\uB450\uB9C9\uC740 \uD604\uBB3C"},{category:"\uC8FC\uD0DD",name:"\uBD84\uD64D \uC9C0\uBD95 \uCF54\uD2F0\uC9C0",unit:"\uC2E0\uCD95 \uAC74\uBB3C 1\uCC44",won:8e7,flow:"\uC8FC\uBBFC \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uAC74\uBB3C \uBC14\uB2E5 32\u33A1 \xD7 1\uCE35 \xD7 \u33A1\uB2F9 2,500,000\uC6D0. \uD1A0\uC9C0\uC640 \uC870\uC131\uC740 \uBCC4\uB3C4. \uC624\uB450\uB9C9\uC740 \uD604\uBB3C"},{category:"\uC8FC\uD0DD",name:"\uBCBD\uB3CC\uACFC \uB098\uBB34 2\uCE35 \uC9D1",unit:"\uC2E0\uCD95 \uAC74\uBB3C 1\uCC44",won:2268e5,flow:"\uC8FC\uBBFC \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uAC74\uBB3C \uBC14\uB2E5 42\u33A1 \xD7 2\uCE35 \xD7 \u33A1\uB2F9 2,700,000\uC6D0. \uD1A0\uC9C0\uC640 \uC870\uC131\uC740 \uBCC4\uB3C4. \uC624\uB450\uB9C9\uC740 \uD604\uBB3C"},{category:"\uC8FC\uD0DD",name:"\uD30C\uB780 \uC9C0\uBD95 2\uCE35 \uC9D1",unit:"\uC2E0\uCD95 \uAC74\uBB3C 1\uCC44",won:3132e5,flow:"\uC8FC\uBBFC \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uAC74\uBB3C \uBC14\uB2E5 54\u33A1 \xD7 2\uCE35 \xD7 \u33A1\uB2F9 2,900,000\uC6D0. \uD1A0\uC9C0\uC640 \uC870\uC131\uC740 \uBCC4\uB3C4. \uC624\uB450\uB9C9\uC740 \uD604\uBB3C"},{category:"\uC8FC\uD0DD",name:"\uD0D1 \uC9C0\uBD95 \uD070 \uC800\uD0DD",unit:"\uC2E0\uCD95 \uAC74\uBB3C 1\uCC44",won:427e6,flow:"\uC8FC\uBBFC \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uAC74\uBB3C \uBC14\uB2E5 61\u33A1 \xD7 2\uCE35 \xD7 \u33A1\uB2F9 3,500,000\uC6D0. \uD1A0\uC9C0\uC640 \uC870\uC131\uC740 \uBCC4\uB3C4. \uC624\uB450\uB9C9\uC740 \uD604\uBB3C"},{category:"\uC8FC\uD0DD",name:"3\uCE35 \uB300\uC800\uD0DD",unit:"\uC2E0\uCD95 \uAC74\uBB3C 1\uCC44",won:936e6,flow:"\uC8FC\uBBFC \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uAC74\uBB3C \uBC14\uB2E5 78\u33A1 \xD7 3\uCE35 \xD7 \u33A1\uB2F9 4,000,000\uC6D0. \uD1A0\uC9C0\uC640 \uC870\uC131\uC740 \uBCC4\uB3C4. \uC624\uB450\uB9C9\uC740 \uD604\uBB3C"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uCD94\uAC00 \uB18D\uC9C0",unit:"400\u33A1 1\uD544\uC9C0",won:55e6,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0 \uB610\uB294 \uC8FC\uBBFC\uC13C\uD130",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uB9C8\uC744 \uC811\uADFC\uB3C4\uB85C\uAC00 \uC788\uB294 \uAE30\uC874 \uD544\uC9C0 \uD638\uAC00. 400\u33A1 \xD7 137,500\uC6D0"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uB18D\uC9C0 \uC6A9\uB3C4\uBCC0\uACBD",unit:"400\u33A1 1\uD544\uC9C0",won:2e7,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0 \uB610\uB294 \uC8FC\uBBFC\uC13C\uD130",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBC30\uC218, \uC815\uC9C0, \uC9C4\uC785\uB85C \uB4F1 \uBD80\uC9C0\uC870\uC131 \uAC8C\uC784 \uACAC\uC801 \u33A1\uB2F9 50,000\uC6D0"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uB4F1\uAE30",unit:"400\u33A1 1\uD544\uC9C0",won:187e4,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0 \uB610\uB294 \uC8FC\uBBFC\uC13C\uD130",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC2E0\uADDC \uC77C\uBC18 \uB18D\uC9C0 \uCDE8\uB4DD\uAC00\uC758 3.4% \uC608\uC2DC. \uAE30\uC18C\uC720\uBD84\uC5D0 \uC7AC\uBD80\uACFC \uC5C6\uC74C"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uAE30\uBCF8 \uC9D1\uD130",unit:"1\uD68C",won:0,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0 \uB610\uB294 \uC8FC\uBBFC\uC13C\uD130",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uCCAB \uC9D1\uD130 1\uD544\uC9C0 \uD604\uBB3C \uC9C0\uAE09"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uAE30\uBCF8 \uB9C8\uC0AC",unit:"1\uD68C",won:0,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0 \uB610\uB294 \uC8FC\uBBFC\uC13C\uD130",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"1\uB2E8\uACC4 1\uACF3"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uCCAB \uB9DD\uC544\uC9C0",unit:"1\uD68C",won:0,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0 \uB610\uB294 \uC8FC\uBBFC\uC13C\uD130",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC815\uCC29 \uB54C \uD55C \uB9C8\uB9AC"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uAE30\uBCF8 \uBC2D 9\uCE78",unit:"1\uD68C",won:0,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0 \uB610\uB294 \uC8FC\uBBFC\uC13C\uD130",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC9D1\uD130\uC758 \uCD08\uAE30 \uD143\uBC2D"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 1\uB2E8\uACC4 \uC678\uD615",unit:"1\uC885",won:0,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 1\uB2E8\uACC4 \uAD00\uB9AC\uBE44",unit:"\uAC8C\uC784 1\uC77C",won:3500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 2\uB2E8\uACC4",unit:"\uB204\uC801",won:6e6,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 2\uB2E8\uACC4 \uC678\uD615",unit:"1\uC885",won:6e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 2\uB2E8\uACC4 \uAD00\uB9AC\uBE44",unit:"\uAC8C\uC784 1\uC77C",won:5500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 3\uB2E8\uACC4",unit:"\uB204\uC801",won:18e6,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 3\uB2E8\uACC4 \uC678\uD615",unit:"1\uC885",won:14e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 3\uB2E8\uACC4 \uAD00\uB9AC\uBE44",unit:"\uAC8C\uC784 1\uC77C",won:8500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 4\uB2E8\uACC4",unit:"\uB204\uC801",won:42e6,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 4\uB2E8\uACC4 \uC678\uD615",unit:"1\uC885",won:26e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uB9C8\uC0AC",name:"\uB9C8\uC0AC 4\uB2E8\uACC4 \uAD00\uB9AC\uBE44",unit:"\uAC8C\uC784 1\uC77C",won:12500,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC720\uB8CC \uC99D\uCD95\uC740 \uB204\uC801 \uB2E8\uACC4 \uCC28\uC561, \uC678\uD615\uC740 \uC790\uC7AC\uC640 \uB3C4\uC7A5, \uAD00\uB9AC\uBE44\uB294 \uAC00\uB3D9 \uAC8C\uC784\uC77C \uAE30\uC900"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 1\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:25e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 2\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:345e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 3\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:44e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 4\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:535e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 5\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:63e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 6\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:725e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 7\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:82e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 8\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:915e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 9\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:101e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 10\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:1105e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 11\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:12e5,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 12\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:1295e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 13\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:139e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 14\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:1485e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 15\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:158e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 16\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:1675e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 17\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:177e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 18\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:1865e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 19\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:196e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 20\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:2055e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 21\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:215e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 22\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:2245e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 23\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:234e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 24\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:2435e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 25\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:253e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 26\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:2625e3,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uBC2D \uD655\uC7A5",name:"\uC720\uB8CC \uBC2D 27\uBC88\uC9F8",unit:"\uC720\uB8CC 1\uCE78",won:272e4,flow:"\uC8FC\uBBFC \u2192 \uC0C1\uC810",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAE30\uBCF8 \uD1A0\uACF5 \uBC0F \uBC30\uC218 250,000\uC6D0 + \uAE30\uC874 \uC720\uB8CC \uCE78\uB2F9 \uBC30\uAD00 \uC5F0\uC7A5 95,000\uC6D0"},{category:"\uACF5\uACFC\uAE08",name:"\uAE30\uBCF8 \uC804\uAE30",unit:"\uAC8C\uC784 \uD55C \uB2EC",won:44900,flow:"\uC8FC\uBBFC \u2192 \uACF5\uACF5\uAE30\uAD00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC624\uB450\uB9C9 \uAC00\uAD6C \uAE30\uC900 \uBC0F \uB9C8\uC0AC \uB2E8\uACC4\uBCC4 \uCD94\uAC00 \uC694\uAE08. \uC8FC\uD0DD \uC804\uAE30\uC640 \uC218\uB3C4\uB294 \uC0C1\uC704 \uB2E8\uACC4\uB2F9 \uAC01\uAC01 7,500\uC6D0, 4,000\uC6D0 \uCD94\uAC00"},{category:"\uACF5\uACFC\uAE08",name:"\uAE30\uBCF8 \uC218\uB3C4",unit:"\uAC8C\uC784 \uD55C \uB2EC",won:29400,flow:"\uC8FC\uBBFC \u2192 \uACF5\uACF5\uAE30\uAD00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC624\uB450\uB9C9 \uAC00\uAD6C \uAE30\uC900 \uBC0F \uB9C8\uC0AC \uB2E8\uACC4\uBCC4 \uCD94\uAC00 \uC694\uAE08. \uC8FC\uD0DD \uC804\uAE30\uC640 \uC218\uB3C4\uB294 \uC0C1\uC704 \uB2E8\uACC4\uB2F9 \uAC01\uAC01 7,500\uC6D0, 4,000\uC6D0 \uCD94\uAC00"},{category:"\uACF5\uACFC\uAE08",name:"\uB9C8\uC0AC \uC804\uAE30",unit:"\uAC8C\uC784 \uD55C \uB2EC",won:5100,flow:"\uC8FC\uBBFC \u2192 \uACF5\uACF5\uAE30\uAD00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC624\uB450\uB9C9 \uAC00\uAD6C \uAE30\uC900 \uBC0F \uB9C8\uC0AC \uB2E8\uACC4\uBCC4 \uCD94\uAC00 \uC694\uAE08. \uC8FC\uD0DD \uC804\uAE30\uC640 \uC218\uB3C4\uB294 \uC0C1\uC704 \uB2E8\uACC4\uB2F9 \uAC01\uAC01 7,500\uC6D0, 4,000\uC6D0 \uCD94\uAC00"},{category:"\uACF5\uACFC\uAE08",name:"\uB9C8\uC0AC \uC218\uB3C4",unit:"\uAC8C\uC784 \uD55C \uB2EC",won:1800,flow:"\uC8FC\uBBFC \u2192 \uACF5\uACF5\uAE30\uAD00",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC624\uB450\uB9C9 \uAC00\uAD6C \uAE30\uC900 \uBC0F \uB9C8\uC0AC \uB2E8\uACC4\uBCC4 \uCD94\uAC00 \uC694\uAE08. \uC8FC\uD0DD \uC804\uAE30\uC640 \uC218\uB3C4\uB294 \uC0C1\uC704 \uB2E8\uACC4\uB2F9 \uAC01\uAC01 7,500\uC6D0, 4,000\uC6D0 \uCD94\uAC00"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uC7A1\uCD08 \uBF51\uAE30 \uD55C \uAC74",unit:"\uD45C\uC900 1\uD68C",won:63e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uBB3C \uC8FC\uAE30 \uD55C \uAC74",unit:"\uD45C\uC900 1\uD68C",won:63e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uC2EC\uAE30 \uD55C \uAC74",unit:"\uD45C\uC900 1\uD68C",won:63e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uB099\uC5FD \uD55C \uAC74",unit:"\uD45C\uC900 1\uD68C",won:69e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uC0AC\uACFC \uB530\uAE30 \uD55C \uAC74",unit:"\uD45C\uC900 1\uD68C",won:69e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uB4F1\uBD88\uC9C0\uAE30 \uC77C\uBC18",unit:"\uD45C\uC900 1\uD68C",won:63e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uB4F1\uBD88\uC9C0\uAE30 \uACE0\uC561 \uC77C\uBC18",unit:"\uD45C\uC900 1\uD68C",won:126e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uB4F1\uBD88\uC9C0\uAE30 \uD2B9\uBCC4",unit:"\uD45C\uC900 1\uD68C",won:63e4,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uAE30\uBCF8 \uB3CC\uBD04 \uC8FC\uAC04 \uAE30\uC900",unit:"\uD45C\uC900 1\uD68C",won:42e4,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uBA39\uC774 \uBC0F \uBB3C \uC218\uB2F9",unit:"\uD45C\uC900 1\uD68C",won:35e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uCCAD\uC18C \uC218\uB2F9",unit:"\uD45C\uC900 1\uD68C",won:25e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uB0AE\uACFC \uBC24 \uD45C\uC900 \uADFC\uBB34",unit:"\uD45C\uC900 1\uD68C",won:126e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uC8FC\uB85C \uC815\uBE44\uC640 \uB9E4\uC810 \uC9C1\uC6D0",unit:"\uD45C\uC900 1\uD68C",won:126e3,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uC77C\uD130\uC640 \uB3CC\uBD04",name:"\uBD09\uC0AC\uC640 \uC774\uC6C3 \uBB3C\uC8FC\uAE30",unit:"\uD45C\uC900 1\uD68C",won:0,flow:"\uC77C\uD130 \uB610\uB294 \uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC77C\uBC18 \uC77C\uAC10 \uD55C \uAC74\uC740 \uC555\uCD95\uB41C \uBC18\uB098\uC808 \uC77C\uAC70\uB9AC, 2\uAC74\uC740 \uD558\uB8E8 \uD488\uC0AF\uC5D0 \uD574\uB2F9. \uAE30\uC900 \uAD50\uB300 \uAE08\uC561\uACFC \uAC74\uBCC4 \uAE08\uC561\uC740 \uAC19\uC740 \uAE09\uC5EC, \uC911\uBCF5 \uC5C6\uC74C"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uAC00\uB85C\uB4F1 \uCF1C\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC18\uB527\uBD88 \uC7A1\uC544 \uB0A9\uD488\uD558\uAE30",unit:"1\uD68C",won:25e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC84\uC12F \uCE90\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC774\uC2AC \uBAA8\uC73C\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBCC4 \uC870\uAC01 \uC90D\uAE30",unit:"1\uD68C",won:25e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC7A0\uB4E0 \uB9D0 \uB3CC\uBCF4\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uACBD\uB9C8\uC7A5 \uAC04\uC2DD \uC0AC\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB3D7\uC790\uB9AC \uD3B4\uACE0 \uC549\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB178\uC810\uC5D0\uC11C \uC528\uC557 \uC0AC\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB178\uC810\uC5D0 \uB0A9\uD488\uD558\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC2D \uD55C \uCE78 \uB298\uB9AC\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uCCAB \uC2E0\uBC1C \uB0A0\uB9AC\uAE30",unit:"1\uD68C",won:0,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB2EC\uAD6C\uB2EC\uAD6C \uCCAB \uC5F0\uC8FC",unit:"1\uD68C",won:0,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uCCAB \uC5F0\uC2B5 \uACBD\uC8FC",unit:"1\uD68C",won:0,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uCC98\uC74C \uB09A\uC2DC",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB2E4\uC2AC\uAE30 \uC90D\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uCC98\uC74C \uC870\uAC1C \uCE90\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC548\uB0B4\uC6D0\uC5D0\uAC8C \uBB3C\uC5B4\uBCF4\uAE30",unit:"1\uD68C",won:2e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uAC00\uB85C\uB4F1 \uCF1C\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:5e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC18\uB527\uBD88 \uC7A1\uC544 \uB0A9\uD488\uD558\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:5e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC84\uC12F \uCE90\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:5e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC774\uC2AC \uBAA8\uC73C\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:2500,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBCC4 \uC870\uAC01 \uC90D\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:2500,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC7A0\uB4E0 \uB9D0 \uB3CC\uBCF4\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:5e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBB3C\uACE0\uAE30 \uC7A1\uC544 \uB0A9\uD488\uD558\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:2500,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC791\uBB3C \uD0A4\uC6CC \uB0A9\uD488\uD558\uAE30 \uBC18\uBCF5",unit:"1\uD68C",won:2500,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"1\uC7A5",unit:"1\uD68C",won:2e6,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"2\uC7A5",unit:"1\uD68C",won:4e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"3\uC7A5",unit:"1\uD68C",won:6e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"4\uC7A5",unit:"1\uD68C",won:6e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"6\uC7A5",unit:"1\uD68C",won:8e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"7\uC7A5",unit:"1\uD68C",won:1e5,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB9C8\uC744 \uB9D0 \uD0C0\uAE30",unit:"1\uD68C",won:4e4,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uCCAB \uACBD\uC8FC \uCD9C\uC804 \uBAA9\uD45C",unit:"1\uD68C",won:8e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB9C8\uC744 \uC815\uC6D0 100\uC810",unit:"1\uD68C",won:2e6,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB9C8\uC744 \uC815\uC6D0 250\uC810",unit:"1\uD68C",won:3e6,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uB9C8\uC744 \uC815\uC6D0 500\uC810",unit:"1\uD68C",won:5e6,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uB2EC\uBE5B \uC9D5\uAC80\uB3CC",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uBB34\uB108\uC9C4 \uC794\uAD50",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uC7A0\uAE30\uB294 \uC5F0\uC78E",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uBB3C\uB808\uBC29\uC544 \uB2E4\uB9AC",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uC624\uAC00\uB294 \uB5CF\uBAA9",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uAC08\uB300 \uBB3C\uAE38",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uBC18\uB527\uBD88 \uB2E4\uB9AC",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uCC30\uCE75 \uC218\uBB38",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC6B0\uBB3C \uBCC4\uBE5B \uC591\uC218\uC7A5",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC24\uB9C8\uC744 \uC232\uC9C0\uAE30 \uC0DD\uC874",unit:"1\uD68C",won:18e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC24\uB9C8\uC744 \uC232\uC9C0\uAE30 \uBAA8\uB2E5\uBD88",unit:"1\uD68C",won:6e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uBC24\uB9C8\uC744 \uC232\uC9C0\uAE30 \uC544\uC774 \uAD6C\uC870",unit:"1\uD68C",won:9e3,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"5\uC7A5 \uACBD\uB9C8\uC7A5 \uB458\uB7EC\uBCF4\uAE30",unit:"1\uD68C",won:0,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"8\uC7A5 \uCCAB \uD22C\uC790 \uC900\uBE44",unit:"1\uD68C",won:0,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uACC4\uC815 \uC2DC\uC791\uAE08",unit:"1\uD68C",won:1e6,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uCD08\uAE30\uD654 \uC120\uBB3C",unit:"1\uD68C",won:1e6,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC",unit:"1\uD68C",won:2e6,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC5F0\uC2B5 \uACBD\uC8FC\uC640 \uAD00\uB78C",unit:"1\uD68C",won:0,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uBD80\uD0C1\uACFC \uB180\uC774",name:"\uC0C1\uAE08 \uB9D0\uACFC \uB9AC\uBCF8",unit:"1\uD68C",won:0,flow:"\uD589\uC0AC \uC608\uC0B0 \u2192 \uC8FC\uBBFC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uB9C8\uC744 \uC6D0\uD654 \uC9C0\uAE09\uC561. 1\uC7A5\uACFC \uC815\uCC29 \uD29C\uD1A0\uB9AC\uC5BC\uC740 \uB3D9\uC77C \uAD8C\uB9AC. \uACF5\uB3D9\uC815\uC6D0 \uCC38\uC5EC \uBC0F \uBC18\uBCF5 \uBCF4\uC0C1\uC740 \uC644\uB8CC \uAC74\uC73C\uB85C \uACC4\uC0B0"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"3\uAD70 \uACBD\uC8FC \uCC38\uAC00\uBE44",unit:"1\uB450 1\uACBD\uAE30",won:16e4,flow:"\uB9C8\uC8FC \u2192 \uACBD\uC8FC\uD68C",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"3\uAD70 \uACBD\uC8FC 1\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:424e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"3\uAD70 \uACBD\uC8FC 2\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:176e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"3\uAD70 \uACBD\uC8FC 3\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:104e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"3\uAD70 \uACBD\uC8FC 4\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:56e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"3\uAD70 \uACBD\uC8FC 5\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:4e5,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"3\uAD70 \uACBD\uC8FC 6~12\uCC29 \uAC01",unit:"1\uB450 1\uACBD\uAE30",won:8e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"2\uAD70 \uACBD\uC8FC \uCC38\uAC00\uBE44",unit:"1\uB450 1\uACBD\uAE30",won:26e4,flow:"\uB9C8\uC8FC \u2192 \uACBD\uC8FC\uD68C",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"2\uAD70 \uACBD\uC8FC 1\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:689e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"2\uAD70 \uACBD\uC8FC 2\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:286e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"2\uAD70 \uACBD\uC8FC 3\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:169e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"2\uAD70 \uACBD\uC8FC 4\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:91e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"2\uAD70 \uACBD\uC8FC 5\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:65e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"2\uAD70 \uACBD\uC8FC 6~12\uCC29 \uAC01",unit:"1\uB450 1\uACBD\uAE30",won:13e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"1\uAD70 \uACBD\uC8FC \uCC38\uAC00\uBE44",unit:"1\uB450 1\uACBD\uAE30",won:44e4,flow:"\uB9C8\uC8FC \u2192 \uACBD\uC8FC\uD68C",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"1\uAD70 \uACBD\uC8FC 1\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:1166e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"1\uAD70 \uACBD\uC8FC 2\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:484e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"1\uAD70 \uACBD\uC8FC 3\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:286e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"1\uAD70 \uACBD\uC8FC 4\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:154e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"1\uAD70 \uACBD\uC8FC 5\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:11e5,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"1\uAD70 \uACBD\uC8FC 6~12\uCC29 \uAC01",unit:"1\uB450 1\uACBD\uAE30",won:22e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"\uB300\uC0C1 \uACBD\uC8FC \uCC38\uAC00\uBE44",unit:"1\uB450 1\uACBD\uAE30",won:84e4,flow:"\uB9C8\uC8FC \u2192 \uACBD\uC8FC\uD68C",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"\uB300\uC0C1 \uACBD\uC8FC 1\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:2226e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"\uB300\uC0C1 \uACBD\uC8FC 2\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:924e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"\uB300\uC0C1 \uACBD\uC8FC 3\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:546e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"\uB300\uC0C1 \uACBD\uC8FC 4\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:294e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"\uB300\uC0C1 \uACBD\uC8FC 5\uCC29",unit:"1\uB450 1\uACBD\uAE30",won:21e5,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uACF5\uC2DD \uACBD\uC8FC",name:"\uB300\uC0C1 \uACBD\uC8FC 6~12\uCC29 \uAC01",unit:"1\uB450 1\uACBD\uAE30",won:42e4,flow:"\uACBD\uC8FC\uD68C \u2192 \uC2E4\uC81C \uB9C8\uC8FC",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC2E0\uADDC \uACBD\uC8FC \uC0C1\uAE08 \uCD1D\uC561\uC758 53/22/13/7/5%\uB97C \uC785\uC0C1 \uB9C8\uC8FC\uC5D0\uAC8C \uC9C0\uAE09. \uADF8 \uBC16\uC758 \uC644\uC8FC \uC218\uB2F9 1%, \uCC38\uAC00\uBE44 2%. \uAE30\uC874 \uC811\uC218\uB294 \uC885\uC804 \uC57D\uC815"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uC2DC\uC124",unit:"\uC2E0\uCD95 1\uACF3",won:24e6,flow:"\uD22C\uC790\uC790 \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC2DC\uC124\uACFC \uC124\uBE44 \uACF5\uC0AC\uBE44. \uD1A0\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uC5F0\uAD6C\uC18C \uBCF4\uD1B5 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:63e4,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"180\uB2E8\uC704 \xD7 3,500\uC6D0"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uC5F0\uAD6C\uC18C \uAC1C\uB7C9 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:737460,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uBCF4\uD1B5 \uC7AC\uB8CC\uBE44\uC5D0 \uD76C\uADC0 \uD655\uB960 \uC99D\uAC00\uBD84 6%p\uC758 \uC6D0\uBB3C \uAC00\uCE58\uB97C \uB354\uD569\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uAC00\uB3D9\uBE44",unit:"\uAC00\uB3D9 \uAC8C\uC784\uC77C",won:43e3,flow:"\uD22C\uC790\uC790 \u2192 \uACF5\uAE09\uCC98",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uAD6C\uB9E4\uD55C \uC2DC\uC124\uBCC4 \uC18C\uBAA8\uD488\uACFC \uC6B4\uBC18 \uB4F1 \uD3EC\uD568"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uC2DC\uC124 \uC218\uC120 \uCDA9\uB2F9\uC561",unit:"1\uD68C\uCC28",won:12e4,flow:"\uD22C\uC790\uC790 \u2192 \uC218\uB9AC\uC5C5\uCCB4",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC0AC\uC6A9\uC73C\uB85C \uBC1C\uC0DD\uD55C \uC218\uB9AC \uBE44\uC6A9, \uB9E4\uB3C4 \uC2DC \uB0A8\uC740 \uC218\uB9AC\uBE44\uB9CC \uCC28\uAC10"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uC7AC\uBC30 \uAE30\uAC04 \uBCF4\uC720\uC138",unit:"1\uD68C\uCC28",won:7792,flow:"\uD22C\uC790\uC790 \u2192 \uAD6D\uACE0",pricing:"\uBCF4\uC720 \uAE30\uAC04",detail:"\uAC8C\uC784 \uC5F0 0.3%\uB97C \uBCF4\uC720\uC77C\uC218\uC5D0 \uB530\uB77C \uBC30\uBD84"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uBD80\uC9C4 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:54e4,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uBCF4\uD1B5 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:6072e3,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uACFC\uC218\uC6D0 \uD76C\uADC0 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:7863e3,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uC2DC\uC124",unit:"\uC2E0\uCD95 1\uACF3",won:38e6,flow:"\uD22C\uC790\uC790 \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC2DC\uC124\uACFC \uC124\uBE44 \uACF5\uC0AC\uBE44. \uD1A0\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uC5F0\uAD6C\uC18C \uBCF4\uD1B5 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:6e5,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"2,400\uB2E8\uC704 \xD7 250\uC6D0"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uC5F0\uAD6C\uC18C \uAC1C\uB7C9 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:780864,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uBCF4\uD1B5 \uC7AC\uB8CC\uBE44\uC5D0 \uD76C\uADC0 \uD655\uB960 \uC99D\uAC00\uBD84 6%p\uC758 \uC6D0\uBB3C \uAC00\uCE58\uB97C \uB354\uD569\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uAC00\uB3D9\uBE44",unit:"\uAC00\uB3D9 \uAC8C\uC784\uC77C",won:22e4,flow:"\uD22C\uC790\uC790 \u2192 \uACF5\uAE09\uCC98",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uAD6C\uB9E4\uD55C \uC2DC\uC124\uBCC4 \uC18C\uBAA8\uD488\uACFC \uC6B4\uBC18 \uB4F1 \uD3EC\uD568"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uC2DC\uC124 \uC218\uC120 \uCDA9\uB2F9\uC561",unit:"1\uD68C\uCC28",won:29e4,flow:"\uD22C\uC790\uC790 \u2192 \uC218\uB9AC\uC5C5\uCCB4",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC0AC\uC6A9\uC73C\uB85C \uBC1C\uC0DD\uD55C \uC218\uB9AC \uBE44\uC6A9, \uB9E4\uB3C4 \uC2DC \uB0A8\uC740 \uC218\uB9AC\uBE44\uB9CC \uCC28\uAC10"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uC7AC\uBC30 \uAE30\uAC04 \uBCF4\uC720\uC138",unit:"1\uD68C\uCC28",won:16685,flow:"\uD22C\uC790\uC790 \u2192 \uAD6D\uACE0",pricing:"\uBCF4\uC720 \uAE30\uAC04",detail:"\uAC8C\uC784 \uC5F0 0.3%\uB97C \uBCF4\uC720\uC77C\uC218\uC5D0 \uB530\uB77C \uBC30\uBD84"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uBD80\uC9C4 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:99e4,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uBCF4\uD1B5 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:11592e3,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB300\uB18D \uD76C\uADC0 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:14606400,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uC2DC\uC124",unit:"\uC2E0\uCD95 1\uACF3",won:85e6,flow:"\uD22C\uC790\uC790 \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC2DC\uC124\uACFC \uC124\uBE44 \uACF5\uC0AC\uBE44. \uD1A0\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uC5F0\uAD6C\uC18C \uBCF4\uD1B5 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:168e5,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"4\uB2E8\uC704 \xD7 4,200,000\uC6D0"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uC5F0\uAD6C\uC18C \uAC1C\uB7C9 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:18e6,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uBCF4\uD1B5 \uC7AC\uB8CC\uBE44\uC5D0 \uD76C\uADC0 \uD655\uB960 \uC99D\uAC00\uBD84 6%p\uC758 \uC6D0\uBB3C \uAC00\uCE58\uB97C \uB354\uD569\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uAC00\uB3D9\uBE44",unit:"\uAC00\uB3D9 \uAC8C\uC784\uC77C",won:34e4,flow:"\uD22C\uC790\uC790 \u2192 \uACF5\uAE09\uCC98",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uAD6C\uB9E4\uD55C \uC2DC\uC124\uBCC4 \uC18C\uBAA8\uD488\uACFC \uC6B4\uBC18 \uB4F1 \uD3EC\uD568"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uC2DC\uC124 \uC218\uC120 \uCDA9\uB2F9\uC561",unit:"1\uD68C\uCC28",won:35e4,flow:"\uD22C\uC790\uC790 \u2192 \uC218\uB9AC\uC5C5\uCCB4",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC0AC\uC6A9\uC73C\uB85C \uBC1C\uC0DD\uD55C \uC218\uB9AC \uBE44\uC6A9, \uB9E4\uB3C4 \uC2DC \uB0A8\uC740 \uC218\uB9AC\uBE44\uB9CC \uCC28\uAC10"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uC7AC\uBC30 \uAE30\uAC04 \uBCF4\uC720\uC138",unit:"1\uD68C\uCC28",won:36986,flow:"\uD22C\uC790\uC790 \u2192 \uAD6D\uACE0",pricing:"\uBCF4\uC720 \uAE30\uAC04",detail:"\uAC8C\uC784 \uC5F0 0.3%\uB97C \uBCF4\uC720\uC77C\uC218\uC5D0 \uB530\uB77C \uBC30\uBD84"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uBD80\uC9C4 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:1344e4,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uBCF4\uD1B5 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:6e7,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uB9D0\uB18D\uC7A5 \uD76C\uADC0 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:8e7,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uC2DC\uC124",unit:"\uC2E0\uCD95 1\uACF3",won:62e6,flow:"\uD22C\uC790\uC790 \u2192 \uAC74\uCD95\uC0AC\uBB34\uC18C",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC2DC\uC124\uACFC \uC124\uBE44 \uACF5\uC0AC\uBE44. \uD1A0\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uC5F0\uAD6C\uC18C \uBCF4\uD1B5 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:57e5,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uC811\uBAA9 \uBB18\uBAA9 60\uC8FC \xD7 95,000\uC6D0"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uC5F0\uAD6C\uC18C \uAC1C\uB7C9 \uC7AC\uB8CC",unit:"\uAC00\uB3D9 1\uD68C",won:6724380,flow:"\uD22C\uC790\uC790 \u2192 \uC5F0\uAD6C\uC18C",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uBCF4\uD1B5 \uC7AC\uB8CC\uBE44\uC5D0 \uD76C\uADC0 \uD655\uB960 \uC99D\uAC00\uBD84 6%p\uC758 \uC6D0\uBB3C \uAC00\uCE58\uB97C \uB354\uD569\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uAC00\uB3D9\uBE44",unit:"\uAC00\uB3D9 \uAC8C\uC784\uC77C",won:14e4,flow:"\uD22C\uC790\uC790 \u2192 \uACF5\uAE09\uCC98",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uAD6C\uB9E4\uD55C \uC2DC\uC124\uBCC4 \uC18C\uBAA8\uD488\uACFC \uC6B4\uBC18 \uB4F1 \uD3EC\uD568"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uC2DC\uC124 \uC218\uC120 \uCDA9\uB2F9\uC561",unit:"1\uD68C\uCC28",won:42e4,flow:"\uD22C\uC790\uC790 \u2192 \uC218\uB9AC\uC5C5\uCCB4",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uC0AC\uC6A9\uC73C\uB85C \uBC1C\uC0DD\uD55C \uC218\uB9AC \uBE44\uC6A9, \uB9E4\uB3C4 \uC2DC \uB0A8\uC740 \uC218\uB9AC\uBE44\uB9CC \uCC28\uAC10"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uC7AC\uBC30 \uAE30\uAC04 \uBCF4\uC720\uC138",unit:"1\uD68C\uCC28",won:39584,flow:"\uD22C\uC790\uC790 \u2192 \uAD6D\uACE0",pricing:"\uBCF4\uC720 \uAE30\uAC04",detail:"\uAC8C\uC784 \uC5F0 0.3%\uB97C \uBCF4\uC720\uC77C\uC218\uC5D0 \uB530\uB77C \uBC30\uBD84"},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uBD80\uC9C4 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:306e4,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uBCF4\uD1B5 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:4566e4,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uC0DD\uC0B0 \uD22C\uC790",name:"\uC870\uACBD\uC218 \uD76C\uADC0 \uB0A9\uD488",unit:"\uC218\uD655 \uC804\uB7C9",won:62733e3,flow:"\uB9E4\uC785\uCC98 \u2192 \uD22C\uC790\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uB4F1\uAE09\uBCC4 \uC2E4\uC81C \uC218\uB7C9\uC5D0 \uBB34\uC5ED\uC18C \uB2E8\uAC00\uB97C \uACF1\uD55C \uD55C \uD68C\uCC28\uC758 \uB9E4\uCD9C\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC7BC\uACF5\uC7A5 \uC9C1\uC6D0 \uC124\uBE44",unit:"\uC9C1\uC6D0 1\uBA85\uBD84",won:1002e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC124\uBE44 \uACF5\uAE09\uCC98",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 2\uBA85\uBD84, \uC774\uD6C4 1\uBA85 \uC99D\uC6D0\uB9C8\uB2E4 1\uAC1C \uCD94\uAC00. \uBD80\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC7BC\uACF5\uC7A5 \uACE0\uC6A9 \uC784\uAE08",unit:"\uC9C1\uC6D0 1\uBA85 1\uAC8C\uC784\uC6D4",won:315e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uACE0\uC6A9 \uC911 \uB9E4 \uAC8C\uC784\uC6D4 \uC9C0\uAE09. \uD734\uC5C5 \uC911\uC5D0\uB3C4 \uB3D9\uC77C"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC7BC\uACF5\uC7A5 \uD3EC\uC7A5\uACFC \uC790\uC7AC",unit:"\uC7BC 500g",won:1300,flow:"\uACF5\uC7A5\uC8FC \u2192 \uACF5\uAE09\uCC98 \uB610\uB294 \uC9C1\uC6D0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC2DC\uC124 \uBC0F \uC870\uC5C5 \uACAC\uC801. \uD1A0\uC9C0, \uAC00\uACF5\uB7C9, \uC6D0\uC7AC\uB8CC\uB294 \uACF5\uC7A5 \uD45C \uCC38\uC870"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC7BC\uACF5\uC7A5 \uBD80\uC9C4 \uC6D0\uB8CC \uC81C\uD488",unit:"\uC7BC 500g",won:5340,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC7BC\uACF5\uC7A5 \uBCF4\uD1B5 \uC6D0\uB8CC \uC81C\uD488",unit:"\uC7BC 500g",won:28500,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC7BC\uACF5\uC7A5 \uD76C\uADC0 \uC6D0\uB8CC \uC81C\uD488",unit:"\uC7BC 500g",won:48100,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uAE40\uCE58\uACF5\uC7A5 \uC9C1\uC6D0 \uC124\uBE44",unit:"\uC9C1\uC6D0 1\uBA85\uBD84",won:2213e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC124\uBE44 \uACF5\uAE09\uCC98",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 2\uBA85\uBD84, \uC774\uD6C4 1\uBA85 \uC99D\uC6D0\uB9C8\uB2E4 1\uAC1C \uCD94\uAC00. \uBD80\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uAE40\uCE58\uACF5\uC7A5 \uACE0\uC6A9 \uC784\uAE08",unit:"\uC9C1\uC6D0 1\uBA85 1\uAC8C\uC784\uC6D4",won:315e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uACE0\uC6A9 \uC911 \uB9E4 \uAC8C\uC784\uC6D4 \uC9C0\uAE09. \uD734\uC5C5 \uC911\uC5D0\uB3C4 \uB3D9\uC77C"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uAE40\uCE58\uACF5\uC7A5 \uD3EC\uC7A5\uACFC \uC790\uC7AC",unit:"\uAE40\uCE58 1kg",won:900,flow:"\uACF5\uC7A5\uC8FC \u2192 \uACF5\uAE09\uCC98 \uB610\uB294 \uC9C1\uC6D0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC2DC\uC124 \uBC0F \uC870\uC5C5 \uACAC\uC801. \uD1A0\uC9C0, \uAC00\uACF5\uB7C9, \uC6D0\uC7AC\uB8CC\uB294 \uACF5\uC7A5 \uD45C \uCC38\uC870"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uAE40\uCE58\uACF5\uC7A5 \uBD80\uC9C4 \uC6D0\uB8CC \uC81C\uD488",unit:"\uAE40\uCE58 1kg",won:3490,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uAE40\uCE58\uACF5\uC7A5 \uBCF4\uD1B5 \uC6D0\uB8CC \uC81C\uD488",unit:"\uAE40\uCE58 1kg",won:32e3,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uAE40\uCE58\uACF5\uC7A5 \uD76C\uADC0 \uC6D0\uB8CC \uC81C\uD488",unit:"\uAE40\uCE58 1kg",won:48100,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB9D0\uD6C8\uB828\uC18C \uC9C1\uC6D0 \uC124\uBE44",unit:"\uC9C1\uC6D0 1\uBA85\uBD84",won:1577e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC124\uBE44 \uACF5\uAE09\uCC98",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 2\uBA85\uBD84, \uC774\uD6C4 1\uBA85 \uC99D\uC6D0\uB9C8\uB2E4 1\uAC1C \uCD94\uAC00. \uBD80\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB9D0\uD6C8\uB828\uC18C \uACE0\uC6A9 \uC784\uAE08",unit:"\uC9C1\uC6D0 1\uBA85 1\uAC8C\uC784\uC6D4",won:315e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uACE0\uC6A9 \uC911 \uB9E4 \uAC8C\uC784\uC6D4 \uC9C0\uAE09. \uD734\uC5C5 \uC911\uC5D0\uB3C4 \uB3D9\uC77C"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB9D0\uD6C8\uB828\uC18C \uD3EC\uC7A5\uACFC \uC790\uC7AC",unit:"\uD6C8\uB828\uB9C8 1\uB450",won:25e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uACF5\uAE09\uCC98 \uB610\uB294 \uC9C1\uC6D0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC2DC\uC124 \uBC0F \uC870\uC5C5 \uACAC\uC801. \uD1A0\uC9C0, \uAC00\uACF5\uB7C9, \uC6D0\uC7AC\uB8CC\uB294 \uACF5\uC7A5 \uD45C \uCC38\uC870"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB9D0\uD6C8\uB828\uC18C \uBD80\uC9C4 \uC6D0\uB8CC \uC81C\uD488",unit:"\uD6C8\uB828\uB9C8 1\uB450",won:9e6,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB9D0\uD6C8\uB828\uC18C \uBCF4\uD1B5 \uC6D0\uB8CC \uC81C\uD488",unit:"\uD6C8\uB828\uB9C8 1\uB450",won:1026e5,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB9D0\uD6C8\uB828\uC18C \uD76C\uADC0 \uC6D0\uB8CC \uC81C\uD488",unit:"\uD6C8\uB828\uB9C8 1\uB450",won:2059e5,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB098\uBB34\uC740\uD589 \uC9C1\uC6D0 \uC124\uBE44",unit:"\uC9C1\uC6D0 1\uBA85\uBD84",won:1038e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC124\uBE44 \uACF5\uAE09\uCC98",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 2\uBA85\uBD84, \uC774\uD6C4 1\uBA85 \uC99D\uC6D0\uB9C8\uB2E4 1\uAC1C \uCD94\uAC00. \uBD80\uC9C0\uB294 \uBCC4\uB3C4"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB098\uBB34\uC740\uD589 \uACE0\uC6A9 \uC784\uAE08",unit:"\uC9C1\uC6D0 1\uBA85 1\uAC8C\uC784\uC6D4",won:315e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uACE0\uC6A9 \uC911 \uB9E4 \uAC8C\uC784\uC6D4 \uC9C0\uAE09. \uD734\uC5C5 \uC911\uC5D0\uB3C4 \uB3D9\uC77C"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB098\uBB34\uC740\uD589 \uD3EC\uC7A5\uACFC \uC790\uC7AC",unit:"\uAC80\uC218\uD55C \uC870\uACBD\uC218 1\uC8FC",won:28e3,flow:"\uACF5\uC7A5\uC8FC \u2192 \uACF5\uAE09\uCC98 \uB610\uB294 \uC9C1\uC6D0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC8C\uC784 \uC2DC\uC124 \uBC0F \uC870\uC5C5 \uACAC\uC801. \uD1A0\uC9C0, \uAC00\uACF5\uB7C9, \uC6D0\uC7AC\uB8CC\uB294 \uACF5\uC7A5 \uD45C \uCC38\uC870"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB098\uBB34\uC740\uD589 \uBD80\uC9C4 \uC6D0\uB8CC \uC81C\uD488",unit:"\uAC80\uC218\uD55C \uC870\uACBD\uC218 1\uC8FC",won:613e3,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB098\uBB34\uC740\uD589 \uBCF4\uD1B5 \uC6D0\uB8CC \uC81C\uD488",unit:"\uAC80\uC218\uD55C \uC870\uACBD\uC218 1\uC8FC",won:548e4,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB098\uBB34\uC740\uD589 \uD76C\uADC0 \uC6D0\uB8CC \uC81C\uD488",unit:"\uAC80\uC218\uD55C \uC870\uACBD\uC218 1\uC8FC",won:1496e4,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBB34\uC5ED\uC18C\uC5D0 \uC778\uB3C4\uD55C \uD574\uB2F9 \uB4F1\uAE09 \uC81C\uD488 1\uB2E8\uC704 \uAE30\uC900\uC785\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uBD84\uD64D \uC9C0\uBD95 \uCF54\uD2F0\uC9C0 \uC6D4\uC138",unit:"AI 1\uBA85, 1\uAC8C\uC784\uC6D4",won:588e3,flow:"\uC785\uC8FC\uD55C AI \u2192 \uC9D1\uC8FC\uC778",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC2E4\uC81C \uC785\uC8FC\uD55C \uC9C1\uC6D0 \uD55C \uBA85\uC758 \uC57D\uC815 \uC6D4\uC138\uC785\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uBD84\uD64D \uC9C0\uBD95 \uCF54\uD2F0\uC9C0 \uBCF4\uC99D\uAE08",unit:"AI 1\uBA85, \uC785\uC8FC \uC2DC",won:7056e3,flow:"\uC785\uC8FC \uB54C AI \u2192 \uC9D1\uC8FC\uC778, \uD1F4\uAC70 \uB54C \uC9D1\uC8FC\uC778 \u2192 AI",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC57D\uC815 \uC6D4\uC138 12\uAC1C\uC6D4\uBD84\uC785\uB2C8\uB2E4. \uC9D1\uC8FC\uC778\uC774 \uBC1B\uACE0 \uD1F4\uAC70 \uB54C \uBC18\uD658\uD569\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uBCBD\uB3CC\uACFC \uB098\uBB34 2\uCE35 \uC9D1 \uC6D4\uC138",unit:"AI 1\uBA85, 1\uAC8C\uC784\uC6D4",won:704e3,flow:"\uC785\uC8FC\uD55C AI \u2192 \uC9D1\uC8FC\uC778",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC2E4\uC81C \uC785\uC8FC\uD55C \uC9C1\uC6D0 \uD55C \uBA85\uC758 \uC57D\uC815 \uC6D4\uC138\uC785\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uBCBD\uB3CC\uACFC \uB098\uBB34 2\uCE35 \uC9D1 \uBCF4\uC99D\uAE08",unit:"AI 1\uBA85, \uC785\uC8FC \uC2DC",won:8448e3,flow:"\uC785\uC8FC \uB54C AI \u2192 \uC9D1\uC8FC\uC778, \uD1F4\uAC70 \uB54C \uC9D1\uC8FC\uC778 \u2192 AI",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC57D\uC815 \uC6D4\uC138 12\uAC1C\uC6D4\uBD84\uC785\uB2C8\uB2E4. \uC9D1\uC8FC\uC778\uC774 \uBC1B\uACE0 \uD1F4\uAC70 \uB54C \uBC18\uD658\uD569\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uD30C\uB780 \uC9C0\uBD95 2\uCE35 \uC9D1 \uC6D4\uC138",unit:"AI 1\uBA85, 1\uAC8C\uC784\uC6D4",won:651e3,flow:"\uC785\uC8FC\uD55C AI \u2192 \uC9D1\uC8FC\uC778",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC2E4\uC81C \uC785\uC8FC\uD55C \uC9C1\uC6D0 \uD55C \uBA85\uC758 \uC57D\uC815 \uC6D4\uC138\uC785\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uD30C\uB780 \uC9C0\uBD95 2\uCE35 \uC9D1 \uBCF4\uC99D\uAE08",unit:"AI 1\uBA85, \uC785\uC8FC \uC2DC",won:7812e3,flow:"\uC785\uC8FC \uB54C AI \u2192 \uC9D1\uC8FC\uC778, \uD1F4\uAC70 \uB54C \uC9D1\uC8FC\uC778 \u2192 AI",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC57D\uC815 \uC6D4\uC138 12\uAC1C\uC6D4\uBD84\uC785\uB2C8\uB2E4. \uC9D1\uC8FC\uC778\uC774 \uBC1B\uACE0 \uD1F4\uAC70 \uB54C \uBC18\uD658\uD569\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uD0D1 \uC9C0\uBD95 \uD070 \uC800\uD0DD \uC6D4\uC138",unit:"AI 1\uBA85, 1\uAC8C\uC784\uC6D4",won:747e3,flow:"\uC785\uC8FC\uD55C AI \u2192 \uC9D1\uC8FC\uC778",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC2E4\uC81C \uC785\uC8FC\uD55C \uC9C1\uC6D0 \uD55C \uBA85\uC758 \uC57D\uC815 \uC6D4\uC138\uC785\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uD0D1 \uC9C0\uBD95 \uD070 \uC800\uD0DD \uBCF4\uC99D\uAE08",unit:"AI 1\uBA85, \uC785\uC8FC \uC2DC",won:8964e3,flow:"\uC785\uC8FC \uB54C AI \u2192 \uC9D1\uC8FC\uC778, \uD1F4\uAC70 \uB54C \uC9D1\uC8FC\uC778 \u2192 AI",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC57D\uC815 \uC6D4\uC138 12\uAC1C\uC6D4\uBD84\uC785\uB2C8\uB2E4. \uC9D1\uC8FC\uC778\uC774 \uBC1B\uACE0 \uD1F4\uAC70 \uB54C \uBC18\uD658\uD569\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"3\uCE35 \uB300\uC800\uD0DD \uC6D4\uC138",unit:"AI 1\uBA85, 1\uAC8C\uC784\uC6D4",won:712e3,flow:"\uC785\uC8FC\uD55C AI \u2192 \uC9D1\uC8FC\uC778",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC2E4\uC81C \uC785\uC8FC\uD55C \uC9C1\uC6D0 \uD55C \uBA85\uC758 \uC57D\uC815 \uC6D4\uC138\uC785\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"3\uCE35 \uB300\uC800\uD0DD \uBCF4\uC99D\uAE08",unit:"AI 1\uBA85, \uC785\uC8FC \uC2DC",won:8544e3,flow:"\uC785\uC8FC \uB54C AI \u2192 \uC9D1\uC8FC\uC778, \uD1F4\uAC70 \uB54C \uC9D1\uC8FC\uC778 \u2192 AI",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC57D\uC815 \uC6D4\uC138 12\uAC1C\uC6D4\uBD84\uC785\uB2C8\uB2E4. \uC9D1\uC8FC\uC778\uC774 \uBC1B\uACE0 \uD1F4\uAC70 \uB54C \uBC18\uD658\uD569\uB2C8\uB2E4."},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uBCF4\uD1B5\uC608\uAE08 \uC57D\uC815\uC774\uC790",unit:"\uC6D0\uAE08 10\uB9CC \uC6D0, \uAC8C\uC784 1\uB144",won:3e3,flow:"\uC740\uD589 \u2192 \uC608\uAE08\uC790",pricing:"\uC6D4\uBCC4 \uC2E0\uADDC \uC57D\uC815",detail:"\uCD08\uAE30 \uC5F0 3%. \uC794\uC561\uACFC \uBCF4\uC720\uC77C\uC218 \uAE30\uC900"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC815\uAE30\uC801\uAE08 \uC57D\uC815\uC774\uC790",unit:"10\uB9CC \uC6D0 \uC804\uAE30\uAC04 \uC608\uCE58 \uD658\uC0B0",won:4e3,flow:"\uC740\uD589 \u2192 \uC801\uAE08\uC790",pricing:"\uC6D4\uBCC4 \uC2E0\uADDC \uC57D\uC815",detail:"\uCD08\uAE30 \uC5F0 4%. \uB0A9\uC785 \uAC74\uBCC4 \uACBD\uACFC\uC77C \uACC4\uC0B0"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC5B4\uB9B0\uC774 \uCCAB \uC801\uAE08 \uC57D\uC815\uC774\uC790",unit:"10\uB9CC \uC6D0 \uC804\uAE30\uAC04 \uC608\uCE58 \uD658\uC0B0",won:5e3,flow:"\uC740\uD589\uACFC \uAD6D\uACE0 \u2192 \uC5B4\uB9B0\uC774",pricing:"\uC6D4\uBCC4 \uC2E0\uADDC \uC57D\uC815",detail:"\uC5F0 5%. \uC6B0\uB300 1%p\uB294 \uC815\uCC45 \uC608\uC0B0. \uD55C \uBA85 \uD55C \uACC4\uC88C"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC885\uC7A3\uB3C8 \uC644\uC8FC \uC9C0\uC6D0",unit:"\uCCAB \uC644\uC8FC 1\uD68C",won:2e5,flow:"\uAD6D\uACE0 \u2192 \uC8FC\uBBFC",pricing:"\uAC00\uC785 \uB54C \uACE0\uC815",detail:"8\uAC8C\uC784\uC8FC\uAC04 \uB9E4\uC8FC 10\uB9CC \uC6D0 \uC774\uC0C1 \uB0A9\uC785\uD558\uBA74 \uC644\uC8FC \uC2DC \uC815\uCC45 \uC608\uC0B0\uC5D0\uC11C \uC9C0\uAE09"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC77C\uBC18 \uB300\uCD9C \uC774\uC790",unit:"\uC6D0\uAE08 10\uB9CC \uC6D0, \uAC8C\uC784 1\uB144",won:7e3,flow:"\uCC28\uC8FC \u2192 \uC740\uD589",pricing:"\uC6D4\uBCC4 \uC2E0\uADDC \uC57D\uC815",detail:"\uCD08\uAE30 \uC5F0 7%, \uC794\uC874 \uC6D0\uAE08 \uAE30\uC900"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uCC3D\uC5C5 \uB300\uCD9C \uD55C\uB3C4",unit:"\uB3C4\uB85C \uC778\uC811 \uB18D\uC9C0 1\uD544\uC9C0 \uC608\uC2DC",won:3025e4,flow:"\uC740\uD589 \u2192 \uB9E4\uB3C4\uC778",pricing:"\uCDE8\uB4DD \uB54C \uACE0\uC815",detail:"\uC2E0\uADDC \uD1A0\uC9C0\uC640 \uC2DC\uC124 \uB9E4\uC785\uC561\uC758 55%, \uC911\uBCF5 \uB2F4\uBCF4 \uC81C\uC678"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC8FC\uD0DD \uB300\uCD9C \uD55C\uB3C4",unit:"\uCF54\uD2F0\uC9C0 \uBC0F \uC870\uC131 \uB300\uC9C0",won:93e6,flow:"\uC740\uD589 \u2192 \uB9E4\uB3C4\uC778",pricing:"\uCDE8\uB4DD \uB54C \uACE0\uC815",detail:"\uC2E4\uC81C \uC8FC\uD0DD\uACFC \uC870\uC131 \uB300\uC9C0 \uD3C9\uAC00\uC561\uC758 60%"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC9C1\uAC70\uB798 \uC218\uC218\uB8CC",unit:"\uAC70\uB798 1\uAC74",won:0,flow:"\uC8FC\uBBFC \u2192 \uC8FC\uBBFC",pricing:"\uAC70\uB798 \uAE30\uC900",detail:"\uAD6C\uB9E4\uC790\uC640 \uD310\uB9E4\uC790 \uC794\uC561 \uAC04 \uC774\uB3D9"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC911\uAC1C \uAC70\uB798 \uC218\uC218\uB8CC",unit:"\uAC70\uB798 1\uB9CC \uC6D0",won:100,flow:"\uB9E4\uB3C4\uC778 \u2192 \uC911\uAC1C\uC18C",pricing:"\uAC70\uB798 \uAE30\uC900",detail:"\uC120\uD0DD \uC911\uAC1C \uC2DC \uD310\uB9E4\uC790 \uB300\uAE08\uC758 1%"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC6D4 \uC18C\uB4DD\uC138",unit:"\uC6D4 \uC21C\uC601\uC5C5\uC18C\uB4DD 1\uB9CC \uC6D0",won:500,flow:"\uC8FC\uBBFC \uB610\uB294 AI \u2192 \uAD6D\uACE0",pricing:"\uC6D4 \uC815\uC0B0",detail:"\uAE09\uC5EC\uB294 5% \uC6D0\uCC9C \uACF5\uC81C, \uC0AC\uC5C5\uC740 \uC190\uC2E4 \uC774\uC6D4 \uB4A4 \uC21C\uC775 5%, \uAC19\uC740 \uAE09\uC5EC \uC7AC\uACFC\uC138 \uC5C6\uC74C"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC608\uAE08 \uC774\uC790 \uC6D0\uCC9C\uACF5\uC81C",unit:"\uC774\uC790 1\uCC9C \uC6D0",won:50,flow:"\uC740\uD589 \u2192 \uAD6D\uACE0",pricing:"\uC774\uC790 \uC9C0\uAE09\uC77C",detail:"\uC774\uC790\uC18C\uB4DD 5%. \uC6D0\uAE08\uC5D0 \uC801\uC6A9\uD558\uC9C0 \uC54A\uC74C"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC784\uB300 \uC18C\uB4DD\uC138",unit:"\uC784\uB300 \uC21C\uC18C\uB4DD 1\uB9CC \uC6D0",won:500,flow:"\uC9D1\uC8FC\uC778 \u2192 \uAD6D\uACE0",pricing:"\uC6D4 \uC815\uC0B0",detail:"\uC218\uC785\uC5D0\uC11C \uBCF4\uC720\uC138, \uC218\uC120\uBE44\uC640 \uD574\uB2F9 \uC774\uC790 \uCC28\uAC10 \uB4A4 5%"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC7AC\uC0B0\uC138",unit:"\uD3C9\uAC00\uC561 10\uB9CC \uC6D0, \uAC8C\uC784 \uC5F0",won:300,flow:"\uC18C\uC720\uC790 \u2192 \uAD6D\uACE0",pricing:"\uBCF4\uC720 \uAE30\uAC04",detail:"\uC2E0\uADDC \uD3C9\uAC00\uC561 \xD7 \uAC8C\uC784 \uC5F0 0.3%. \uAE30\uBCF8 \uC624\uB450\uB9C9\uC758 \uD3C9\uAC00\uC561\uC740 44,000,000\uC6D0"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uAC70\uB798\uC138",unit:"\uC77C\uBC18 \uB18D\uC9C0 \uCDE8\uB4DD 1\uB9CC \uC6D0",won:340,flow:"\uB9E4\uC218\uC778 \u2192 \uAD6D\uACE0",pricing:"\uCDE8\uB4DD \uB54C",detail:"\uC77C\uBC18 \uB18D\uC9C0 3.4%, \uC790\uACBD \uAC10\uBA74 \uC790\uACA9 1.6%, \uC77C\uBC18 \uB300\uC9C0 4.6%\uB97C \uD604\uD589 \uAC8C\uC784 \uAE30\uC900\uC73C\uB85C \uC801\uC6A9"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC0C1\uC810 \uC138\uAE08\uACFC \uC0AC\uD68C\uBCF4\uD5D8",unit:"\uCD94\uAC00 \uBD80\uACFC\uC561",won:0,flow:"\uCD94\uAC00 \uBD80\uACFC \uC5C6\uC74C",pricing:"\uACE0\uC815",detail:"\uC0C1\uC810 \uD45C\uC2DC\uAC00\uB294 \uCD5C\uC885\uAC00. \uAC1C\uD3B8 \uBAA8\uD615\uC5D0\uC11C \uBCC4\uB3C4 \uBCF4\uD5D8\uB8CC \uBC0F \uBD80\uAC00\uC138 \uAC00\uC0B0 0\uC6D0"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uACC4\uC88C \uC774\uCCB4\uC640 \uC911\uB3C4\uC0C1\uD658",unit:"\uAC74\uB2F9",won:0,flow:"\uAC1C\uC778 \uACC4\uC88C \uAC04 \uC774\uC804",pricing:"\uACE0\uC815",detail:"\uC774\uCCB4, \uC6D0\uAE08\uC0C1\uD658 \uC218\uC218\uB8CC \uBB34\uB8CC"},{category:"\uC740\uD589\uACFC \uC138\uAE08",name:"\uC785\uC7A5 \uB610\uB294 \uAD00\uB78C, \uAC1C\uC778 \uCC3D\uACE0",unit:"1\uD68C",won:0,flow:"\uD574\uB2F9 \uC5C6\uC74C",pricing:"\uACE0\uC815",detail:"\uAD00\uB78C \uBB34\uB8CC, \uBCF4\uAD00\uB9CC\uC73C\uB85C \uC9C0\uAE09\uC774\uB098 \uC774\uC6A9\uB8CC \uC5C6\uC74C"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB178\uC810\uC5D0 \uCCAB \uB0A9\uD488",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC870\uAC1C \uCE90\uAE30",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uCCAB \uD22C\uC790 \uC2E0\uCCAD",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB9D0 \uBC30\uD2C0 \uCCAB \uCCB4\uD5D8",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB180\uC774\uD130 \uB098\uB4E4\uC774",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB2EC\uAD6C\uB2EC\uAD6C \uD55C \uACE1",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB2EC\uAD6C\uB2EC\uAD6C \uC810\uC218 \uB300\uACB0",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC27F! \uC800\uC218\uC9C0 \uCCAB \uBC29 \uAE68\uAE30",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC6B0\uBB3C\uAE38 \uBC1D\uD788\uAE30",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC232\uC5D0\uC11C \uCCAB \uBC24 \uBC84\uD2F0\uAE30",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC790\uC804\uAC70 \uCCAB \uC8FC\uD589",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC624\uD1A0\uBC14\uC774 \uCCAB \uC8FC\uD589",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB9D0 \uBCD1\uC6D0",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB9C8\uC0AC \uB113\uD788\uAE30",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uB9D0 \uC804\uC801 \uD45C\uC9C0\uD310",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC608\uAE08 \uD558\uB098 \uB354",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uC801\uAE08 \uD558\uB098 \uB354",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uC5F0\uACB0 \uD018\uC2A4\uD2B8",name:"\uD22C\uC790 \uB3CC\uBD04",unit:"\uC548\uB0B4 1\uD68C",won:0,flow:"\uAE30\uC874 \uBCF4\uC0C1 \uCC38\uC870",pricing:"\uACE0\uC815",detail:"\uC5F0\uACB0 \uC548\uB0B4 \uB610\uB294 \uAE30\uC874 \uBAA9\uD45C\uB85C \uC9C0\uAE09. \uBCC4\uB3C4 \uD604\uAE08 \uBCF4\uC0C1 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uC0C8 \uC791\uBB3C \uC2EC\uACE0 \uAC70\uB450\uAE30",unit:"\uAE30\uC900 1\uD68C",won:0,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uACE0\uC815",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uB9D0 \uD0C0\uACE0 \uB9C8\uC744 \uB098\uB4E4\uC774",unit:"\uAE30\uC900 1\uD68C",won:4e4,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uACE0\uC815",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uD22C\uC790 \uC2DC\uC124 \uC548\uB0B4\uC640 \uD604\uC7A5\uC2E4\uC2B5",unit:"\uAE30\uC900 1\uD68C",won:0,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uACE0\uC815",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uC219\uB828 \uAC00\uC0B0",unit:"\uAE30\uC900 1\uD68C",won:12600,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uC5F0\uC18D \uC131\uACF5 \uAC00\uC0B0",unit:"\uAE30\uC900 1\uD68C",won:6300,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uACF5\uB3D9 \uC815\uC6D0 \uC784\uAE08 \uAC00\uC0B0",unit:"\uAE30\uC900 1\uD68C",won:6300,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uCD08\uBCF4 \uCCAB \uC7AC\uBC30 \uAFB8\uB7EC\uBBF8",unit:"\uAE30\uC900 1\uD68C",won:0,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uACE0\uC815",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uACBD\uC8FC \uCDE8\uC18C \uD658\uBD88",unit:"3\uAD70 \uAE30\uB0A9\uBD80 \uCC38\uAC00\uBE44 \uC608\uC2DC",won:16e4,flow:"\uB2F4\uB2F9 \uAE30\uAD00 \u2192 \uCC38\uC5EC \uC8FC\uBBFC \uB610\uB294 \uC9C1\uC6D0",pricing:"\uACE0\uC815",detail:"\uC2E4\uC81C \uB0A9\uBD80\uD55C \uCC38\uAC00\uBE44\uB9CC \uD574\uB2F9 \uB9C8\uC8FC\uC5D0\uAC8C \uC804\uC561 \uBC18\uD658"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uC5F0\uAD6C\uC18C \uC9C1\uC6D0 \uC6D4\uAE09",unit:"\uC9C1\uC6D0 1\uBA85 1\uAC8C\uC784\uC6D4",won:315e4,flow:"\uAD6D\uACE0 \u2192 \uC5F0\uAD6C\uC18C \uC9C1\uC6D0",pricing:"\uC6D4\uD3C9\uADE0",detail:"\uAD6D\uAC00 \uC18C\uC18D \uACE0\uC815 \uC6D4\uAE09. \uC5F0\uAD6C\uC18C \uC7AC\uB8CC \uAD6C\uC785\uC790\uB294 \uC7AC\uB8CC \uB300\uAE08\uB9CC \uC9C0\uAE09"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uC608\uAE08 \uAC00\uC785 \uCD5C\uC18C\uC561",unit:"\uAE30\uC900 1\uD68C",won:1e5,flow:"\uC8FC\uBBFC \u2192 \uC740\uD589 \uB610\uB294 \uAD6D\uACE0",pricing:"\uACE0\uC815",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uC77C\uBC18 \uC801\uAE08 \uCD5C\uC18C \uB0A9\uC785",unit:"\uAE30\uC900 1\uD68C",won:1e4,flow:"\uC8FC\uBBFC \u2192 \uC740\uD589 \uB610\uB294 \uAD6D\uACE0",pricing:"\uACE0\uC815",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uAE30\uBCF8 \uC624\uB450\uB9C9 \uC7AC\uC0B0\uC138",unit:"\uAC8C\uC784 1\uB144",won:132e3,flow:"\uC8FC\uBBFC \u2192 \uC740\uD589 \uB610\uB294 \uAD6D\uACE0",pricing:"\uACE0\uC815",detail:"\uC624\uB450\uB9C9 \uAC74\uBB3C \uD3C9\uAC00\uC561 44,000,000\uC6D0 \xD7 \uAC8C\uC784 \uC5F0 0.3%. \uBB34\uB8CC \uAE30\uBCF8 \uC9D1\uD130\uB294 \uACFC\uC138 \uC608\uC2DC\uC5D0\uC11C \uC81C\uC678"},{category:"\uAE30\uD0C0 \uC815\uC0B0",name:"\uC5F0\uCCB4 \uC7AC\uC57D\uC815 \uC218\uC218\uB8CC",unit:"\uAE30\uC900 1\uD68C",won:0,flow:"\uC8FC\uBBFC \u2192 \uC740\uD589 \uB610\uB294 \uAD6D\uACE0",pricing:"\uACE0\uC815",detail:"\uC219\uB828 \uBC0F \uACF5\uB3D9 \uAC00\uC0B0 10%, 5%, 5%\uB294 \uAE30\uC900 \uC77C\uB2F9 126,000\uC6D0 \uC608\uC2DC. \uD658\uBD88\uC740 \uB0B8 \uCC38\uAC00\uBE44\uB9CC, \uC624\uB450\uB9C9 \uACFC\uC138\uB294 \uC0C8 \uD3C9\uAC00\uAC00, \uBB34\uB8CC \uD56D\uBAA9 0\uC6D0"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uACFC\uC218\uC6D0 \uBD80\uC9C0",unit:"400\u33A1",won:55e6,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uB3C4\uB85C \uC778\uC811 \uB18D\uC9C0 1\uD544\uC9C0. \uC774\uBBF8 \uBCF4\uC720\uD55C \uC801\uACA9 \uD1A0\uC9C0\uB294 \uCC28\uC561\uB9CC"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uB300\uB18D \uBD80\uC9C0",unit:"1200\u33A1",won:165e6,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uB3C4\uB85C \uC778\uC811 \uB18D\uC9C0 3\uD544\uC9C0. \uC774\uBBF8 \uBCF4\uC720\uD55C \uC801\uACA9 \uD1A0\uC9C0\uB294 \uCC28\uC561\uB9CC"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uB9D0\uB18D\uC7A5 \uBD80\uC9C0",unit:"1200\u33A1",won:165e6,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uB3C4\uB85C \uC778\uC811 \uB18D\uC9C0 3\uD544\uC9C0. \uC774\uBBF8 \uBCF4\uC720\uD55C \uC801\uACA9 \uD1A0\uC9C0\uB294 \uCC28\uC561\uB9CC"},{category:"\uB545\uACFC \uC2DC\uC124",name:"\uC870\uACBD\uC218 \uBD80\uC9C0",unit:"800\u33A1",won:11e7,flow:"\uC8FC\uBBFC \u2192 \uBD80\uB3D9\uC0B0",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uB3C4\uB85C \uC778\uC811 \uB18D\uC9C0 2\uD544\uC9C0. \uC774\uBBF8 \uBCF4\uC720\uD55C \uC801\uACA9 \uD1A0\uC9C0\uB294 \uCC28\uC561\uB9CC"},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB538\uAE30\uC7BC \uC77C\uBC18",unit:"500g 1\uBCD1",won:28500,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC19\uC740 \uADDC\uACA9\uC758 \uBCF4\uD1B5 \uC7BC 500g \uD55C \uBCD1\uC785\uB2C8\uB2E4. \uD55C \uC81C\uD488\uC758 \uB0A9\uD488\uC740 \uD55C \uBC88 \uC9C0\uAE09\uD569\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC870\uACBD\uC218 \uC6B4\uBC18 \uBC0F \uC2DD\uC7AC \uC2DC\uACF5",unit:"\uC815\uC0C1 \uC2DC\uACF5 1\uC8FC",won:548e4,flow:"\uAC8C\uC784 \uBB34\uC5ED\uC18C \u2192 \uACF5\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uB098\uBB34\uC740\uD589 \uBCF4\uD1B5 \uC644\uC81C\uD488\uC758 \uC2DC\uACF5 \uB300\uAE08\uACFC \uAC19\uC740 \uD56D\uBAA9\uC785\uB2C8\uB2E4. \uD55C \uBC88 \uC9C0\uAE09\uD569\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uD1B5\uB098\uBB34 \uC624\uB450\uB9C9 \uC6D4\uC138",unit:"AI 1\uBA85, 1\uAC8C\uC784\uC6D4",won:527e3,flow:"\uC785\uC8FC\uD55C AI \u2192 \uC9D1\uC8FC\uC778",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC2E4\uC81C \uC785\uC8FC\uD55C \uC9C1\uC6D0 \uD55C \uBA85\uC758 \uC57D\uC815 \uC6D4\uC138\uC785\uB2C8\uB2E4."},{category:"\uC6D4\uC138",name:"\uD1B5\uB098\uBB34 \uC624\uB450\uB9C9 \uBCF4\uC99D\uAE08",unit:"AI 1\uBA85, \uC785\uC8FC \uC2DC",won:6324e3,flow:"\uC785\uC8FC \uB54C AI \u2192 \uC9D1\uC8FC\uC778, \uD1F4\uAC70 \uB54C \uC9D1\uC8FC\uC778 \u2192 AI",pricing:"\uC785\uC8FC \uB54C \uACE0\uC815",detail:"\uC57D\uC815 \uC6D4\uC138 12\uAC1C\uC6D4\uBD84\uC785\uB2C8\uB2E4. \uC9D1\uC8FC\uC778\uC774 \uBC1B\uACE0 \uD1F4\uAC70 \uB54C \uBC18\uD658\uD569\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uC7BC\uACF5\uC7A5 \uACF5\uC6A9 \uAC74\uBB3C",unit:"1\uB3D9",won:12e7,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uACF5\uC0AC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 \uC2DC 1\uD68C. \uC9C1\uC6D0 \uC124\uBE44\uB294 \uBCC4\uB3C4"},{category:"\uC2DC\uC7A5 \uC6D0\uB8CC",name:"\uACFC\uC218\uC6D0 \uBCF4\uD1B5 \uC6D0\uB8CC \uC2DC\uC7A5 \uAD6C\uC785",unit:"\uACFC\uC77C 10kg \uC0C1\uC790",won:146500,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBD80\uC871\uD55C \uBCF4\uD1B5 \uC6D0\uB8CC\uB97C \uC218\uB7C9 \uC81C\uD55C \uC5C6\uC774 \uAD6C\uC785\uD569\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uAE40\uCE58\uACF5\uC7A5 \uACF5\uC6A9 \uAC74\uBB3C",unit:"1\uB3D9",won:21e7,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uACF5\uC0AC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 \uC2DC 1\uD68C. \uC9C1\uC6D0 \uC124\uBE44\uB294 \uBCC4\uB3C4"},{category:"\uC2DC\uC7A5 \uC6D0\uB8CC",name:"\uB300\uB18D \uBCF4\uD1B5 \uC6D0\uB8CC \uC2DC\uC7A5 \uAD6C\uC785",unit:"\uBC30\uCD94 20kg \uC0C1\uC790",won:211400,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBD80\uC871\uD55C \uBCF4\uD1B5 \uC6D0\uB8CC\uB97C \uC218\uB7C9 \uC81C\uD55C \uC5C6\uC774 \uAD6C\uC785\uD569\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB9D0\uD6C8\uB828\uC18C \uACF5\uC6A9 \uAC74\uBB3C",unit:"1\uB3D9",won:155e6,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uACF5\uC0AC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 \uC2DC 1\uD68C. \uC9C1\uC6D0 \uC124\uBE44\uB294 \uBCC4\uB3C4"},{category:"\uC2DC\uC7A5 \uC6D0\uB8CC",name:"\uB9D0\uB18D\uC7A5 \uBCF4\uD1B5 \uC6D0\uB8CC \uC2DC\uC7A5 \uAD6C\uC785",unit:"\uC790\uB780 \uB9D0 1\uB450",won:5643e4,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBD80\uC871\uD55C \uBCF4\uD1B5 \uC6D0\uB8CC\uB97C \uC218\uB7C9 \uC81C\uD55C \uC5C6\uC774 \uAD6C\uC785\uD569\uB2C8\uB2E4."},{category:"\uAC00\uACF5\uACFC \uB0A9\uD488",name:"\uB098\uBB34\uC740\uD589 \uACF5\uC6A9 \uAC74\uBB3C",unit:"1\uB3D9",won:11e7,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uACF5\uC0AC",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uAC1C\uC5C5 \uC2DC 1\uD68C. \uC9C1\uC6D0 \uC124\uBE44\uB294 \uBCC4\uB3C4"},{category:"\uC2DC\uC7A5 \uC6D0\uB8CC",name:"\uC870\uACBD\uC218 \uBCF4\uD1B5 \uC6D0\uB8CC \uC2DC\uC7A5 \uAD6C\uC785",unit:"\uADDC\uACA9 \uC870\uACBD\uC218 1\uC8FC",won:3056e3,flow:"\uACF5\uC7A5\uC8FC \u2192 \uC2DC\uC7A5",pricing:"\uC8FC\uAC04 \uBB3C\uAC00",detail:"\uBD80\uC871\uD55C \uBCF4\uD1B5 \uC6D0\uB8CC\uB97C \uC218\uB7C9 \uC81C\uD55C \uC5C6\uC774 \uAD6C\uC785\uD569\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uACFC\uC218\uC6D0 \uBCF4\uD1B5 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uACFC\uC77C 10kg \uC0C1\uC790",won:25300,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uACFC\uC218\uC6D0 \uBD80\uC9C4 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uACFC\uC77C 10kg \uC0C1\uC790",won:2250,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uACFC\uC218\uC6D0 \uD76C\uADC0 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uACFC\uC77C 10kg \uC0C1\uC790",won:85e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uB300\uB18D \uBCF4\uD1B5 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uBC30\uCD94 20kg \uC0C1\uC790",won:32200,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uB300\uB18D \uBD80\uC9C4 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uBC30\uCD94 20kg \uC0C1\uC790",won:2750,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uB300\uB18D \uD76C\uADC0 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uBC30\uCD94 20kg \uC0C1\uC790",won:95e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uB9D0\uB18D\uC7A5 \uBCF4\uD1B5 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uC790\uB780 \uB9D0 1\uB450",won:15e6,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uB9D0\uB18D\uC7A5 \uBD80\uC9C4 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uC790\uB780 \uB9D0 1\uB450",won:336e4,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uB9D0\uB18D\uC7A5 \uD76C\uADC0 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uC790\uB780 \uB9D0 1\uB450",won:35e6,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uC870\uACBD\uC218 \uBCF4\uD1B5 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uADDC\uACA9 \uC870\uACBD\uC218 1\uC8FC",won:761e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uC870\uACBD\uC218 \uBD80\uC9C4 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uADDC\uACA9 \uC870\uACBD\uC218 1\uC8FC",won:51e3,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{category:"\uC6D0\uB8CC \uB2E8\uAC00",name:"\uC870\uACBD\uC218 \uD76C\uADC0 \uC6D0\uB8CC \uB2E8\uAC00",unit:"\uADDC\uACA9 \uC870\uACBD\uC218 1\uC8FC",won:32e5,flow:"\uBB34\uC5ED\uC18C \u2192 \uC0DD\uC0B0\uC790",pricing:"\uC2DC\uC791 \uC2DC \uACE0\uC815",detail:"\uACF5\uC7A5\uC5D0 \uC0AC\uC6A9\uD558\uAC70\uB098 \uC6D0\uBB3C\uB85C \uC804\uB7C9 \uB0A9\uD488\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}],crops:[{name:"\uBAA9\uCD08",growMinutes:1120,yield:2,kg:0,seedWon:900,fertilizerBags:1,fertilizerWon:400,commonWon:0,rareWon:2700,costWon:1300,revenueWon:0,profitWon:-1300},{name:"\uB2F9\uADFC",growMinutes:47,yield:3,kg:0,seedWon:1100,fertilizerBags:1,fertilizerWon:400,commonWon:0,rareWon:19400,costWon:1500,revenueWon:0,profitWon:-1500},{name:"\uAC10\uC790",growMinutes:280,yield:3,kg:20,seedWon:1800,fertilizerBags:2,fertilizerWon:400,commonWon:32e3,rareWon:96e3,costWon:2600,revenueWon:96e3,profitWon:93400},{name:"\uB538\uAE30",growMinutes:560,yield:6,kg:2,seedWon:3200,fertilizerBags:3,fertilizerWon:400,commonWon:22e3,rareWon:66e3,costWon:4400,revenueWon:132e3,profitWon:127600},{name:"\uD638\uBC15",growMinutes:1680,yield:6,kg:20,seedWon:1800,fertilizerBags:4,fertilizerWon:400,commonWon:38e3,rareWon:114e3,costWon:3400,revenueWon:228e3,profitWon:224600},{name:"\uBC30\uCD94",growMinutes:480,yield:10,kg:10,seedWon:1e3,fertilizerBags:2,fertilizerWon:400,commonWon:12e3,rareWon:0,costWon:1800,revenueWon:12e4,profitWon:118200},{name:"\uACE0\uCD94",growMinutes:420,yield:4,kg:5,seedWon:3e3,fertilizerBags:2,fertilizerWon:400,commonWon:27500,rareWon:0,costWon:3800,revenueWon:11e4,profitWon:106200},{name:"\uD1A0\uB9C8\uD1A0",growMinutes:513,yield:7,kg:5,seedWon:2400,fertilizerBags:2,fertilizerWon:400,commonWon:18e3,rareWon:0,costWon:3200,revenueWon:126e3,profitWon:122800},{name:"\uC625\uC218\uC218",growMinutes:840,yield:8,kg:10,seedWon:1400,fertilizerBags:3,fertilizerWon:400,commonWon:23e3,rareWon:0,costWon:2600,revenueWon:184e3,profitWon:181400}]};var A3=to.prices,ka=to.crops,T3=new Map(A3.map(s=>[s.category+"/"+s.name,s]));function R3(s,e){let t=T3.get(s+"/"+e);if(!t)throw new Error("\uAC00\uACA9\uD45C\uC5D0\uC11C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. "+s+" / "+e);return t.won}var G=(s,e)=>R3(s,e)/100;var Fm=Object.fromEntries([["carrot","\uBA39\uC774\uC6A9 \uB2F9\uADFC",1,0],["hay","\uBA39\uC774\uC6A9 \uBAA9\uCD08",0,1],["meal","\uB9D0 \uBA39\uC774 \uD55C \uB07C",2,1]].map(([s,e,t,n])=>[s,{name:e,price:G("\uC18C\uBAA8\uD488",e),carrots:t,hay:n}]));var Tr=Object.freeze({care:1e4,jobRate:16,cropRate:11,legacyJob:2e3}),C3=Object.freeze({young:2,adult:5}),P3=Object.fromEntries([["\uD1B5\uB098\uBB34 \uC624\uB450\uB9C9",3e5,3e5],["\uBD84\uD64D \uC9C0\uBD95 \uCF54\uD2F0\uC9C0",6e5,23e5],["\uBCBD\uB3CC\uACFC \uB098\uBB34 2\uCE35 \uC9D1",12e5,63e5],["\uD30C\uB780 \uC9C0\uBD95 2\uCE35 \uC9D1",2e6,117e5],["\uD0D1 \uC9C0\uBD95 \uD070 \uC800\uD0DD",32e5,197e5],["3\uCE35 \uB300\uC800\uD0DD",5e6,318e5]].map(([s,e,t],n)=>{let i=n+1,r="house-tier"+i;return["tier"+i,Object.freeze({tier:i,name:s,price:t,previousPrice:e,model:r,floor:Gt.houses[r].floorAreaM2})]})),be=Object.freeze({version:2,start:{points:1e4,tutorialReward:2e4,giftCarrotSeeds:6,giftHay:5},prices:{carrotSeed:G("\uC791\uBB3C","\uB2F9\uADFC \uC528\uC557"),saleLimit:1e3,raceReward:3e3,saveIncreaseLimit:6e6,appearanceTicket:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC678\uD615 \uBCC0\uACBD\uAD8C"),plate:3e3,shop:{"saddle-red":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uBE68\uAC04 \uC548\uC7A5"),"saddle-blue":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uD30C\uB780 \uC548\uC7A5"),"horse-blanket":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB9D0 \uB2F4\uC694"),halter:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uAD74\uB808"),"leg-wraps":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB2E4\uB9AC \uBCF4\uD638\uB300"),"bell-collar":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uBC29\uC6B8 \uBAA9\uAC78\uC774"),"flower-crown":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uAF43 \uD654\uAD00"),"horse-hat":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC791\uC740 \uBAA8\uC790"),"mane-bow":G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uAC08\uAE30 \uB9AC\uBCF8")},stableVariant:Object.fromEntries([1,2,3,4].map(s=>[s,G("\uB9C8\uC0AC","\uB9C8\uC0AC "+s+"\uB2E8\uACC4 \uC678\uD615")])),stable:Object.fromEntries([2,3,4].map(s=>[s,G("\uB9C8\uC0AC","\uB9C8\uC0AC "+s+"\uB2E8\uACC4")-(s>2?G("\uB9C8\uC0AC","\uB9C8\uC0AC "+(s-1)+"\uB2E8\uACC4"):0)]))},hay:{name:"\uBAA9\uCD08",duration:72e5,yield:2,price:0,seed:3,level:1,sellable:!1,color:"#9bbf5a"},labor:{pay:{feedWater:Math.round(Tr.care*2/5),clean:Math.round(Tr.care/3),farming:Math.round(Tr.care*4/15)},carrots:6,hay:2,skillStep:.04,skillMax:2,lowConditionMult:.8},condition:{min:30,max:100,start:80,low:50,recoverAdd:15,recoverFloor:70,miss:{feed:10,water:5,clean:5},lowJackpotMult:.5},jobs:{list:{gardener:{name:"\uAD11\uC7A5 \uC815\uC6D0\uC0AC"},track:{name:"\uC8FC\uB85C \uC815\uBE44"},snack:{name:"\uB9E4\uC810 \uC9C1\uC6D0"}},shiftPay:Tr.legacyJob,shiftsPerDay:5,hourPay:1e3,minHours:1,maxHours:4},bank:{deposit:{terms:{3:.09,7:.28,14:.65},min:1e4,max:100,interestPrincipalCap:15e5},savings:{terms:{7:{rate:.17,bonus:.02},14:{rate:.36,bonus:.03}},minDaily:1e3,maxDaily:1e5,max:100},historyShown:100},loan:{dailyRate:.003,interestCapRatio:.2,ltv:{house:.7,rezone:.7,land:.5},lowGradeCut:.2,limitDays:140,limitMax:2e6,terms:[30,60],defaultTerm:60,autoRate:.3,arrearsAutoRate:.5,bigPurchase:1e5,noticeDays:[3,7,14,21,27].map(s=>s*7),gradeDropDays:49,recoverDays:98,forecloseDays:196,forecloseRate:.7},land:{price:2e5,maxExtra:2,holdDays:7,minFree:8,adjacentMaxDistance:24.5,lotFloor:24,pairFloor:48},rezone:{price:1e5},house:{types:{wood:{name:"\uBAA9\uC870\uC8FC\uD0DD",perPyeong:7500,minutes:{20:10,30:20,40:30,50:40},model:"house-wood"},steel:{name:"\uACBD\uB7C9\uCCA0\uACE8 \uC8FC\uD0DD",perPyeong:15e3,minutes:{20:30,30:45,40:60,50:75},model:"house-steel"},rc:{name:"\uCCA0\uADFC\uCF58\uD06C\uB9AC\uD2B8 \uC8FC\uD0DD",perPyeong:38e3,minutes:{20:90,30:135,40:180,50:225},model:"house-villa"}},sizes:[20,30,40,50],homeSizes:[20,30],lotSizes:[40,50],stableFloor:{1:5,2:6,3:8,4:9}},invest:{flower:{name:"\uC6D0\uC608",days:3,count:48,facility:5e4,facilityName:"\uBE44\uB2D0\uD558\uC6B0\uC2A4",principal:24e3,maxProfit:9e4,unitValue:2375,jackpot:{name:"\uD76C\uADC0 \uAF43 \uAD50\uBC30",bonus:235125,base:.01,max:.04}},farm:{name:"\uB300\uB18D",days:7,count:16,facility:8e4,facilityName:"\uAD00\uC218 \uC2DC\uC124\uACFC \uCC3D\uACE0",principal:48e3,maxProfit:220500,unitValue:16781,jackpot:{name:"\uB300\uD48D\uB144\uACFC \uD669\uAE08 \uC791\uBB3C",bonus:351561,base:.015,max:.06}},horse:{name:"\uB9D0\uB18D\uC7A5",days:14,count:2,facility:12e4,facilityName:"\uC6B8\uD0C0\uB9AC\uC640 \uB9DD\uC544\uC9C0 \uB9C8\uAD6C\uAC04",principal:16e4,maxProfit:462e3,unitValue:311e3,jackpot:{name:"\uBA85\uB9C8 \uD0C4\uC0DD",bonus:933e3,base:.0125,max:.05}},tree:{name:"\uC870\uACBD\uC218",days:30,count:12,facility:1e5,facilityName:"\uBB18\uD3EC\uC640 \uAD00\uC218",principal:24e4,maxProfit:1035e3,unitValue:106250,jackpot:{name:"\uBA85\uD488 \uC18C\uB098\uBB34",bonus:3293750,base:.0075,max:.03}}},investBaseShare:.4,unlock:{investLaborEarned:12e4,raceLaborDays:C3.adult}}),no=2e5,I3=Object.freeze({prices:{saleLimit:300,raceReward:300,raceRewardsPerDay:3},horseCare:{points:{feed:6,water:4,clean:5,pet:1,brush:2,bath:2},max:20,days:49,maxRise:3,maxDrop:20/7},job:{openHour:eo.gardener.start,closeHour:eo.gardener.end,slotMs:7500,slots:8192,firstSlot:160,sites:14,visible:7,nightSlotMs:1e4,nightVisible:8,expiresMs:8e4,tasks:[{type:"weed",share:40,base:G("\uC77C\uD130\uC640 \uB3CC\uBD04","\uC7A1\uCD08 \uBF51\uAE30 \uD55C \uAC74"),durationMs:2500},{type:"water",share:40,base:G("\uC77C\uD130\uC640 \uB3CC\uBD04","\uBB3C \uC8FC\uAE30 \uD55C \uAC74"),durationMs:2500},{type:"plant",share:20,base:G("\uC77C\uD130\uC640 \uB3CC\uBD04","\uC2EC\uAE30 \uD55C \uAC74"),durationMs:3e3},{type:"leaves",share:0,base:G("\uC77C\uD130\uC640 \uB3CC\uBD04","\uB099\uC5FD \uD55C \uAC74"),durationMs:2500},{type:"apple",share:0,base:G("\uC77C\uD130\uC640 \uB3CC\uBD04","\uC0AC\uACFC \uB530\uAE30 \uD55C \uAC74"),durationMs:2500}],rareChance:.01,rareRate:10,comboMs:8e3,comboMax:10,ratePerLevel:.09,realHours:[0,1,2,4,6,9,12,16,20,25],perMinute:8},tending:{slotMs:15e3,secondsPerDay:1200},house:{tiers:Object.freeze(P3),maxFloorM2:400*.2,constructionDays:Object.freeze({1:3,2:4,3:5,4:7,5:10,6:14})},land:{price:55e4,rezone:62e4,maxExtra:1/0},invest:{flower:{facility:8e4,constructionDays:1,gameDays:11,principal:5e4,dailyCost:1e3,maxProfit:425333,rarePrice:78571,legacyRarePrice:15e4,minChance:.006,maxChance:.025},farm:{facility:12e4,constructionDays:2,gameDays:25,principal:6e4,dailyCost:1050,maxProfit:1108163,rarePrice:179082,legacyRarePrice:351e3,minChance:.02,maxChance:.08},horse:{facility:2e5,constructionDays:4,gameDays:42,principal:34e4,dailyCost:2e3,maxProfit:3007714,rarePrice:831429,legacyRarePrice:194e4,minChance:.06,maxChance:.25},tree:{facility:17e4,constructionDays:7,gameDays:70,principal:7e5,dailyCost:1200,maxProfit:7068e3,rarePrice:1431667,legacyRarePrice:4295e3,minChance:.01,maxChance:.04}},settlementLoan:{limits:{flower:485e3,farm:51e4,horse:76e4,tree:99e4},dailyRate:.001,interestCap:.1,graceDays:49,autoTotalPercent:30},bank:{principalMax:15e5,longDeposit:{term:30,rate:1.8},seed:{target:no,minDaily:1e3,maxDaily:1e5,rate:.015,bonus:.005},free:{term:14,rate:.008},firstSeed:{target:16e4,payout:no,annualRate:.12,minimumDays:3},monthDeposit:{months:1,min:1e4,max:15e5,annualRate:1.68}},monthlyLoan:{annualRate:.156,settlementAnnualRate:.052,gradeDropMonths:2,forecloseMonths:7},race:{fieldSize:12,humanLimit:4,temperature:24,prizePool:{3:3e5,2:5e5,1:8e5,weekly:3e6},shares:[55,22,12,7,4],appearance:3e3,feeRate:2},bills:{propertyTaxRate:5e-4,horseDailyByLevel:[0,200,250,300,350],electricityPer10Pyeong:10,waterPer10Pyeong:5},unlock:{investOwnFunds:no}});var Hm=Math.round(be.bank.savings.minDaily/7),Gm=Math.round(be.bank.savings.maxDaily/7);var Vm=Object.freeze({wonPerPoint:100,startPoints:be.start.points,dailyBonus:0,dailyReward:0,saleLimit:be.prices.saleLimit,raceReward:be.prices.raceReward,dailyIncomeLimit:Number.MAX_SAFE_INTEGER}),Wm=Object.freeze({id:"appearance-ticket",name:"\uC678\uD615 \uBCC0\uACBD\uAD8C",price:be.prices.appearanceTicket}),Xm=be.prices.stable,qm={"wood-round":{name:"\uB098\uBB34 \uBA85\uD310",price:0},"wood-flower":{name:"\uAF43 \uBA85\uD310",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uAF43 \uBA85\uD310")},"iron-classic":{name:"\uCCA0\uC81C \uBA85\uD310",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uCCA0\uC81C \uBA85\uD310")},"stone-engraved":{name:"\uB3CC \uBA85\uD310",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB3CC \uBA85\uD310")},horseshoe:{name:"\uB9D0\uAD7D \uBA85\uD310",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB9D0\uAD7D \uBA85\uD310")},"leaf-green":{name:"\uC78E\uC0AC\uADC0 \uBA85\uD310",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC78E\uC0AC\uADC0 \uBA85\uD310")},"ribbon-pastel":{name:"\uB9AC\uBCF8 \uBA85\uD310",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB9AC\uBCF8 \uBA85\uD310")}},Ym=be.prices.stableVariant,Zm={"saddle-red":{name:"\uBE68\uAC04 \uC548\uC7A5",price:be.prices.shop["saddle-red"],slot:"back"},"saddle-blue":{name:"\uD30C\uB780 \uC548\uC7A5",price:be.prices.shop["saddle-blue"],slot:"back"},"flower-crown":{name:"\uAF43 \uD654\uAD00",price:be.prices.shop["flower-crown"],slot:"head"},"sky-mane-bow":{name:"\uD558\uB298\uBE5B \uAC08\uAE30 \uB9AC\uBCF8",price:be.prices.shop["mane-bow"],slot:"mane"},"violet-flower-crown":{name:"\uBCF4\uB77C \uAF43 \uD654\uAD00",price:be.prices.shop["flower-crown"],slot:"head"},"mint-bell-collar":{name:"\uBBFC\uD2B8 \uBC29\uC6B8 \uBAA9\uAC78\uC774",price:be.prices.shop["bell-collar"],slot:"neck"},"mane-bow":{name:"\uAC08\uAE30 \uB9AC\uBCF8",price:be.prices.shop["mane-bow"],slot:"mane"},"horse-blanket":{name:"\uB9D0 \uB2F4\uC694",price:be.prices.shop["horse-blanket"],slot:"blanket"},"horse-hat":{name:"\uC791\uC740 \uBAA8\uC790",price:be.prices.shop["horse-hat"],slot:"head"},"bell-collar":{name:"\uBC29\uC6B8 \uBAA9\uAC78\uC774",price:be.prices.shop["bell-collar"],slot:"neck"},halter:{name:"\uAD74\uB808",price:be.prices.shop.halter,slot:"face"},"leg-wraps":{name:"\uB2E4\uB9AC \uBCF4\uD638\uB300",price:be.prices.shop["leg-wraps"],slot:"legs"}},z3=[["hay",1,"#9bbf5a",2,72e5],["carrot",1,"#ed923e",3,3e5],["potato",1,"#b89964",2,18e5],["strawberry",2,"#d95970",4,36e5],["pumpkin",3,"#e9a72e",1,108e5],["cabbage",1,"#82a953"],["pepper",1,"#bf4136"],["tomato",2,"#d85a45"],["corn",2,"#eac652"]],L3=Object.fromEntries(ka.map((s,e)=>{let[t,n,i,r,o]=z3[e];return[t,{name:s.name,level:n,color:i,legacyYield:r,legacyDuration:o,growMinutes:s.growMinutes,duration:Math.round(s.growMinutes*6e4/Fa),icon:{cabbage:"\u{1F96C}",pepper:"\u{1F336}\uFE0F",tomato:"\u{1F345}",corn:"\u{1F33D}"}[t],yield:s.yield,kg:s.kg,seed:s.seedWon/100,price:s.commonWon/100,sellable:s.commonWon>0,fertilizer:s.fertilizerBags*s.fertilizerWon/100}]})),Jm=Object.fromEntries(Object.entries(L3).filter(([,s])=>s.sellable)),Xn={chicken:{shop:"papa",name:"\uBC14\uC0AD \uCE58\uD0A8",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uBC14\uC0AD \uCE58\uD0A8"),model:"chicken"},biscuit:{shop:"papa",name:"\uBC84\uD130 \uBE44\uC2A4\uD0B7",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uBC84\uD130 \uBE44\uC2A4\uD0B7"),model:"biscuit"},"yangnyeom-chicken":{shop:"papa",name:"\uC591\uB150\uCE58\uD0A8",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC591\uB150\uCE58\uD0A8"),model:"yangnyeom-chicken"},dakgangjeong:{shop:"papa",name:"\uB2ED\uAC15\uC815",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB2ED\uAC15\uC815"),model:"dakgangjeong"},nuggets:{shop:"papa",name:"\uCE58\uD0A8\uB108\uAC9F",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uCE58\uD0A8\uB108\uAC9F"),model:"nuggets"},fries:{shop:"papa",name:"\uAC10\uC790\uD280\uAE40",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uAC10\uC790\uD280\uAE40"),model:"fries"},"cheese-balls":{shop:"papa",name:"\uCE58\uC988\uBCFC",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uCE58\uC988\uBCFC"),model:"cheese-balls"},"chicken-burger":{shop:"papa",name:"\uCE58\uD0A8\uBC84\uAC70",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uCE58\uD0A8\uBC84\uAC70"),model:"chicken-burger"},lemonade:{shop:"lobby",name:"\uD551\uD06C \uB808\uBAAC\uC5D0\uC774\uB4DC",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uD551\uD06C \uB808\uBAAC\uC5D0\uC774\uB4DC"),model:"lemonade"},tteok:{shop:"bunsik",name:"\uB5A1\uBCF6\uC774",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB5A1\uBCF6\uC774"),model:"tteokbokki"},gimbap:{shop:"bunsik",name:"\uAE40\uBC25",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uAE40\uBC25"),model:"gimbap"},eomuk:{shop:"bunsik",name:"\uC5B4\uBB35",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC5B4\uBB35"),model:"eomuk"},sundae:{shop:"bunsik",name:"\uC21C\uB300",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC21C\uB300"),model:"sundae"},twigim:{shop:"bunsik",name:"\uBAA8\uB460 \uD280\uAE40",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uBAA8\uB460 \uD280\uAE40"),model:"twigim"},ramyeon:{shop:"bunsik",name:"\uB77C\uBA74",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB77C\uBA74"),model:"ramyeon"},hotdog:{shop:"bunsik",name:"\uD56B\uB3C4\uADF8",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uD56B\uB3C4\uADF8"),model:"hotdog"},bungeoppang:{shop:"lobby",name:"\uBD95\uC5B4\uBE75",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uBD95\uC5B4\uBE75"),model:"bungeoppang"},hotteok:{shop:"lobby",name:"\uD638\uB5A1",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uD638\uB5A1"),model:"hotteok"},sikhye:{shop:"lobby",name:"\uC2DD\uD61C",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC2DD\uD61C"),model:"sikhye"},mat:{shop:"lobby",name:"\uB3D7\uC790\uB9AC",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uB3D7\uC790\uB9AC")},bike:{shop:"plaza",name:"\uC790\uC804\uAC70",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC790\uC804\uAC70")},moto:{shop:"plaza",name:"\uC624\uD1A0\uBC14\uC774",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uC624\uD1A0\uBC14\uC774")},kick:{shop:"lobby",name:"\uD0A5\uBCF4\uB4DC \uB300\uC5EC",price:G("\uB9E4\uC810\uACFC \uC7A5\uBE44","\uD0A5\uBCF4\uB4DC \uB300\uC5EC")}};var Qm=35;var ue={version:3,evidence:{dimensions:"real size (1 unit = 1 m); course from official KRA diagram; buildings and spacing estimated from satellite imagery, not surveyed",topology:"official course diagram + official illustrated park map + Esri satellite + user satellite screenshots and photos",geographicOrientation:"local stand-relative coordinates; not georeferenced",sources:["https://race.kra.co.kr/images/sub/busan_racemap02.jpg","https://race.kra.co.kr/down/racetrackinfo/busan/racemap_busan15.jpg","https://park.kra.co.kr/static/images/busan/sub/guide/map_all.svg","https://park.kra.co.kr/cms/contents/kr/static/images/busan/sub/facilities/img_viewing.jpg","https://www.ngcc.go.kr/statis/facility.do"],stableGrid:"Game village: 20 x 20 m homes, at least 4 m between plots, 6 m promenades and 4 m lanes; original training oval retained"},geometry:{k:1,homeZ:0,goalX:28,goalBeforeEnd:40,straight:500,turnRadius:160,innerRadius:128,innerStraight:325,chute1600:150,chute1000:182,chute1000Angle:.873,crossLength:100,rightX:68,leftX:-432,cz:-160,backZ:-320,iHomeZ:-32,iBackZ:-288,iRightX:-107,crossEndX:-332},metresToUnits:1,lanePitch:1.4,railInnerLane:-1,railOuterLane:17.857,finish:{x:28,z:0},courses:{race:[[-432,0],[-431,0],[-430,0],[-429,0],[-428,0],[-427,0],[-426,0],[-425,0],[-424,0],[-423,0],[-422,0],[-421,0],[-420,0],[-419,0],[-418,0],[-417,0],[-416,0],[-415,0],[-414,0],[-413,0],[-412,0],[-411,0],[-410,0],[-409,0],[-408,0],[-407,0],[-406,0],[-405,0],[-404,0],[-403,0],[-402,0],[-401,0],[-400,0],[-399,0],[-398,0],[-397,0],[-396,0],[-395,0],[-394,0],[-393,0],[-392,0],[-391,0],[-390,0],[-389,0],[-388,0],[-387,0],[-386,0],[-385,0],[-384,0],[-383,0],[-382,0],[-381,0],[-380,0],[-379,0],[-378,0],[-377,0],[-376,0],[-375,0],[-374,0],[-373,0],[-372,0],[-371,0],[-370,0],[-369,0],[-368,0],[-367,0],[-366,0],[-365,0],[-364,0],[-363,0],[-362,0],[-361,0],[-360,0],[-359,0],[-358,0],[-357,0],[-356,0],[-355,0],[-354,0],[-353,0],[-352,0],[-351,0],[-350,0],[-349,0],[-348,0],[-347,0],[-346,0],[-345,0],[-344,0],[-343,0],[-342,0],[-341,0],[-340,0],[-339,0],[-338,0],[-337,0],[-336,0],[-335,0],[-334,0],[-333,0],[-332,0],[-331,0],[-330,0],[-329,0],[-328,0],[-327,0],[-326,0],[-325,0],[-324,0],[-323,0],[-322,0],[-321,0],[-320,0],[-319,0],[-318,0],[-317,0],[-316,0],[-315,0],[-314,0],[-313,0],[-312,0],[-311,0],[-310,0],[-309,0],[-308,0],[-307,0],[-306,0],[-305,0],[-304,0],[-303,0],[-302,0],[-301,0],[-300,0],[-299,0],[-298,0],[-297,0],[-296,0],[-295,0],[-294,0],[-293,0],[-292,0],[-291,0],[-290,0],[-289,0],[-288,0],[-287,0],[-286,0],[-285,0],[-284,0],[-283,0],[-282,0],[-281,0],[-280,0],[-279,0],[-278,0],[-277,0],[-276,0],[-275,0],[-274,0],[-273,0],[-272,0],[-271,0],[-270,0],[-269,0],[-268,0],[-267,0],[-266,0],[-265,0],[-264,0],[-263,0],[-262,0],[-261,0],[-260,0],[-259,0],[-258,0],[-257,0],[-256,0],[-255,0],[-254,0],[-253,0],[-252,0],[-251,0],[-250,0],[-249,0],[-248,0],[-247,0],[-246,0],[-245,0],[-244,0],[-243,0],[-242,0],[-241,0],[-240,0],[-239,0],[-238,0],[-237,0],[-236,0],[-235,0],[-234,0],[-233,0],[-232,0],[-231,0],[-230,0],[-229,0],[-228,0],[-227,0],[-226,0],[-225,0],[-224,0],[-223,0],[-222,0],[-221,0],[-220,0],[-219,0],[-218,0],[-217,0],[-216,0],[-215,0],[-214,0],[-213,0],[-212,0],[-211,0],[-210,0],[-209,0],[-208,0],[-207,0],[-206,0],[-205,0],[-204,0],[-203,0],[-202,0],[-201,0],[-200,0],[-199,0],[-198,0],[-197,0],[-196,0],[-195,0],[-194,0],[-193,0],[-192,0],[-191,0],[-190,0],[-189,0],[-188,0],[-187,0],[-186,0],[-185,0],[-184,0],[-183,0],[-182,0],[-181,0],[-180,0],[-179,0],[-178,0],[-177,0],[-176,0],[-175,0],[-174,0],[-173,0],[-172,0],[-171,0],[-170,0],[-169,0],[-168,0],[-167,0],[-166,0],[-165,0],[-164,0],[-163,0],[-162,0],[-161,0],[-160,0],[-159,0],[-158,0],[-157,0],[-156,0],[-155,0],[-154,0],[-153,0],[-152,0],[-151,0],[-150,0],[-149,0],[-148,0],[-147,0],[-146,0],[-145,0],[-144,0],[-143,0],[-142,0],[-141,0],[-140,0],[-139,0],[-138,0],[-137,0],[-136,0],[-135,0],[-134,0],[-133,0],[-132,0],[-131,0],[-130,0],[-129,0],[-128,0],[-127,0],[-126,0],[-125,0],[-124,0],[-123,0],[-122,0],[-121,0],[-120,0],[-119,0],[-118,0],[-117,0],[-116,0],[-115,0],[-114,0],[-113,0],[-112,0],[-111,0],[-110,0],[-109,0],[-108,0],[-107,0],[-106,0],[-105,0],[-104,0],[-103,0],[-102,0],[-101,0],[-100,0],[-99,0],[-98,0],[-97,0],[-96,0],[-95,0],[-94,0],[-93,0],[-92,0],[-91,0],[-90,0],[-89,0],[-88,0],[-87,0],[-86,0],[-85,0],[-84,0],[-83,0],[-82,0],[-81,0],[-80,0],[-79,0],[-78,0],[-77,0],[-76,0],[-75,0],[-74,0],[-73,0],[-72,0],[-71,0],[-70,0],[-69,0],[-68,0],[-67,0],[-66,0],[-65,0],[-64,0],[-63,0],[-62,0],[-61,0],[-60,0],[-59,0],[-58,0],[-57,0],[-56,0],[-55,0],[-54,0],[-53,0],[-52,0],[-51,0],[-50,0],[-49,0],[-48,0],[-47,0],[-46,0],[-45,0],[-44,0],[-43,0],[-42,0],[-41,0],[-40,0],[-39,0],[-38,0],[-37,0],[-36,0],[-35,0],[-34,0],[-33,0],[-32,0],[-31,0],[-30,0],[-29,0],[-28,0],[-27,0],[-26,0],[-25,0],[-24,0],[-23,0],[-22,0],[-21,0],[-20,0],[-19,0],[-18,0],[-17,0],[-16,0],[-15,0],[-14,0],[-13,0],[-12,0],[-11,0],[-10,0],[-9,0],[-8,0],[-7,0],[-6,0],[-5,0],[-4,0],[-3,0],[-2,0],[-1,0],[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],[28,0],[29,0],[30,0],[31,0],[32,0],[33,0],[34,0],[35,0],[36,0],[37,0],[38,0],[39,0],[40,0],[41,0],[42,0],[43,0],[44,0],[45,0],[46,0],[47,0],[48,0],[49,0],[50,0],[51,0],[52,0],[53,0],[54,0],[55,0],[56,0],[57,0],[58,0],[59,0],[60,0],[61,0],[62,0],[63,0],[64,0],[65,0],[66,0],[67,0],[68,0],[68.999,-.003],[69.999,-.012],[70.998,-.028],[71.997,-.05],[72.996,-.078],[73.994,-.112],[74.993,-.153],[75.991,-.2],[76.989,-.253],[77.987,-.312],[78.984,-.377],[79.981,-.449],[80.977,-.527],[81.973,-.611],[82.968,-.702],[83.962,-.798],[84.956,-.901],[85.95,-1.01],[86.942,-1.125],[87.934,-1.247],[88.925,-1.374],[89.916,-1.508],[90.905,-1.648],[91.894,-1.794],[92.881,-1.946],[93.868,-2.105],[94.854,-2.27],[95.838,-2.44],[96.822,-2.617],[97.804,-2.8],[98.786,-2.99],[99.766,-3.185],[100.744,-3.386],[101.722,-3.594],[102.698,-3.808],[103.673,-4.027],[104.646,-4.253],[105.618,-4.485],[106.589,-4.723],[107.558,-4.967],[108.526,-5.217],[109.491,-5.473],[110.456,-5.736],[111.418,-6.004],[112.379,-6.278],[113.339,-6.558],[114.296,-6.844],[115.252,-7.136],[116.206,-7.435],[117.158,-7.739],[118.108,-8.049],[119.056,-8.364],[120.002,-8.686],[120.946,-9.014],[121.888,-9.348],[122.828,-9.687],[123.765,-10.033],[124.701,-10.384],[125.634,-10.741],[126.565,-11.104],[127.494,-11.472],[128.421,-11.847],[129.345,-12.227],[130.266,-12.613],[131.186,-13.005],[132.103,-13.402],[133.017,-13.806],[133.929,-14.215],[134.838,-14.629],[135.745,-15.049],[136.649,-15.475],[137.55,-15.907],[138.449,-16.344],[139.344,-16.787],[140.238,-17.235],[141.128,-17.689],[142.015,-18.149],[142.9,-18.614],[143.781,-19.084],[144.66,-19.56],[145.536,-20.042],[146.408,-20.529],[147.278,-21.021],[148.144,-21.519],[149.008,-22.023],[149.868,-22.531],[150.725,-23.045],[151.578,-23.565],[152.429,-24.089],[153.276,-24.619],[154.12,-25.154],[154.961,-25.695],[155.798,-26.241],[156.631,-26.792],[157.462,-27.348],[158.288,-27.909],[159.112,-28.476],[159.931,-29.047],[160.747,-29.624],[161.56,-30.206],[162.369,-30.793],[163.174,-31.385],[163.975,-31.981],[164.773,-32.583],[165.567,-33.19],[166.357,-33.802],[167.143,-34.419],[167.926,-35.041],[168.704,-35.667],[169.479,-36.299],[170.249,-36.935],[171.016,-37.576],[171.779,-38.222],[172.537,-38.872],[173.292,-39.527],[174.042,-40.187],[174.788,-40.852],[175.53,-41.521],[176.268,-42.195],[177.002,-42.874],[177.731,-43.557],[178.456,-44.244],[179.177,-44.936],[179.894,-45.633],[180.606,-46.334],[181.314,-47.04],[182.017,-47.75],[182.716,-48.464],[183.41,-49.183],[184.1,-49.906],[184.785,-50.633],[185.466,-51.364],[186.142,-52.1],[186.814,-52.84],[187.481,-53.584],[188.143,-54.333],[188.801,-55.085],[189.454,-55.842],[190.102,-56.602],[190.745,-57.367],[191.384,-58.135],[192.018,-58.908],[192.647,-59.685],[193.271,-60.465],[193.89,-61.249],[194.504,-62.038],[195.114,-62.83],[195.718,-63.625],[196.318,-64.425],[196.912,-65.228],[197.501,-66.035],[198.086,-66.846],[198.665,-67.66],[199.239,-68.478],[199.808,-69.3],[200.372,-70.125],[200.931,-70.953],[201.485,-71.785],[202.033,-72.62],[202.576,-73.459],[203.114,-74.301],[203.646,-75.147],[204.174,-75.996],[204.696,-76.848],[205.212,-77.703],[205.724,-78.562],[206.23,-79.424],[206.73,-80.289],[207.225,-81.157],[207.715,-82.028],[208.199,-82.902],[208.678,-83.779],[209.152,-84.659],[209.619,-85.542],[210.082,-86.428],[210.538,-87.317],[210.99,-88.209],[211.435,-89.103],[211.875,-90],[212.31,-90.9],[212.738,-91.803],[213.161,-92.708],[213.579,-93.616],[213.991,-94.527],[214.397,-95.44],[214.797,-96.355],[215.192,-97.274],[215.581,-98.194],[215.964,-99.117],[216.341,-100.042],[216.713,-100.97],[217.078,-101.9],[217.438,-102.832],[217.793,-103.767],[218.141,-104.703],[218.483,-105.642],[218.82,-106.583],[219.151,-107.526],[219.475,-108.471],[219.794,-109.418],[220.107,-110.367],[220.414,-111.318],[220.715,-112.271],[221.01,-113.226],[221.3,-114.182],[221.583,-115.141],[221.86,-116.101],[222.131,-117.063],[222.396,-118.026],[222.655,-118.991],[222.908,-119.958],[223.156,-120.926],[223.397,-121.896],[223.632,-122.867],[223.86,-123.84],[224.083,-124.814],[224.3,-125.79],[224.511,-126.767],[224.715,-127.745],[224.913,-128.724],[225.106,-129.705],[225.292,-130.687],[225.472,-131.67],[225.646,-132.654],[225.813,-133.639],[225.975,-134.625],[226.13,-135.612],[226.28,-136.6],[226.423,-137.589],[226.56,-138.579],[226.69,-139.57],[226.815,-140.562],[226.933,-141.554],[227.045,-142.547],[227.151,-143.54],[227.251,-144.535],[227.344,-145.53],[227.432,-146.525],[227.513,-147.521],[227.587,-148.518],[227.656,-149.515],[227.718,-150.512],[227.775,-151.51],[227.824,-152.508],[227.868,-153.506],[227.906,-154.505],[227.937,-155.504],[227.962,-156.503],[227.98,-157.502],[227.993,-158.501],[227.999,-159.5],[227.999,-160.5],[227.993,-161.499],[227.98,-162.498],[227.962,-163.497],[227.937,-164.496],[227.906,-165.495],[227.868,-166.494],[227.824,-167.492],[227.775,-168.49],[227.718,-169.488],[227.656,-170.485],[227.587,-171.482],[227.513,-172.479],[227.432,-173.475],[227.344,-174.47],[227.251,-175.465],[227.151,-176.46],[227.045,-177.453],[226.933,-178.446],[226.815,-179.438],[226.69,-180.43],[226.56,-181.421],[226.423,-182.411],[226.28,-183.4],[226.13,-184.388],[225.975,-185.375],[225.813,-186.361],[225.646,-187.346],[225.472,-188.33],[225.292,-189.313],[225.106,-190.295],[224.913,-191.276],[224.715,-192.255],[224.511,-193.233],[224.3,-194.21],[224.083,-195.186],[223.86,-196.16],[223.632,-197.133],[223.397,-198.104],[223.156,-199.074],[222.908,-200.042],[222.655,-201.009],[222.396,-201.974],[222.131,-202.937],[221.86,-203.899],[221.583,-204.859],[221.3,-205.818],[221.01,-206.774],[220.715,-207.729],[220.414,-208.682],[220.107,-209.633],[219.794,-210.582],[219.475,-211.529],[219.151,-212.474],[218.82,-213.417],[218.483,-214.358],[218.141,-215.297],[217.793,-216.233],[217.438,-217.168],[217.078,-218.1],[216.713,-219.03],[216.341,-219.958],[215.964,-220.883],[215.581,-221.806],[215.192,-222.726],[214.797,-223.645],[214.397,-224.56],[213.991,-225.473],[213.579,-226.384],[213.161,-227.292],[212.738,-228.197],[212.31,-229.1],[211.875,-230],[211.435,-230.897],[210.99,-231.791],[210.538,-232.683],[210.082,-233.572],[209.619,-234.458],[209.152,-235.341],[208.678,-236.221],[208.199,-237.098],[207.715,-237.972],[207.225,-238.843],[206.73,-239.711],[206.23,-240.576],[205.724,-241.438],[205.212,-242.297],[204.696,-243.152],[204.174,-244.004],[203.646,-244.853],[203.114,-245.699],[202.576,-246.541],[202.033,-247.38],[201.485,-248.215],[200.931,-249.047],[200.372,-249.875],[199.808,-250.7],[199.239,-251.522],[198.665,-252.34],[198.086,-253.154],[197.501,-253.965],[196.912,-254.772],[196.318,-255.575],[195.718,-256.375],[195.114,-257.17],[194.504,-257.962],[193.89,-258.751],[193.271,-259.535],[192.647,-260.315],[192.018,-261.092],[191.384,-261.865],[190.745,-262.633],[190.102,-263.398],[189.454,-264.158],[188.801,-264.915],[188.143,-265.667],[187.481,-266.416],[186.814,-267.16],[186.142,-267.9],[185.466,-268.636],[184.785,-269.367],[184.1,-270.094],[183.41,-270.817],[182.716,-271.536],[182.017,-272.25],[181.314,-272.96],[180.606,-273.666],[179.894,-274.367],[179.177,-275.064],[178.456,-275.756],[177.731,-276.443],[177.002,-277.126],[176.268,-277.805],[175.53,-278.479],[174.788,-279.148],[174.042,-279.813],[173.292,-280.473],[172.537,-281.128],[171.779,-281.778],[171.016,-282.424],[170.249,-283.065],[169.479,-283.701],[168.704,-284.333],[167.926,-284.959],[167.143,-285.581],[166.357,-286.198],[165.567,-286.81],[164.773,-287.417],[163.975,-288.019],[163.174,-288.615],[162.369,-289.207],[161.56,-289.794],[160.747,-290.376],[159.931,-290.953],[159.112,-291.524],[158.288,-292.091],[157.462,-292.652],[156.631,-293.208],[155.798,-293.759],[154.961,-294.305],[154.12,-294.846],[153.276,-295.381],[152.429,-295.911],[151.578,-296.435],[150.725,-296.955],[149.868,-297.469],[149.008,-297.977],[148.144,-298.481],[147.278,-298.979],[146.408,-299.471],[145.536,-299.958],[144.66,-300.44],[143.781,-300.916],[142.9,-301.386],[142.015,-301.851],[141.128,-302.311],[140.238,-302.765],[139.344,-303.213],[138.449,-303.656],[137.55,-304.093],[136.649,-304.525],[135.745,-304.951],[134.838,-305.371],[133.929,-305.785],[133.017,-306.194],[132.103,-306.598],[131.186,-306.995],[130.266,-307.387],[129.345,-307.773],[128.421,-308.153],[127.494,-308.528],[126.565,-308.896],[125.634,-309.259],[124.701,-309.616],[123.765,-309.967],[122.828,-310.313],[121.888,-310.652],[120.946,-310.986],[120.002,-311.314],[119.056,-311.636],[118.108,-311.951],[117.158,-312.261],[116.206,-312.565],[115.252,-312.864],[114.296,-313.156],[113.339,-313.442],[112.379,-313.722],[111.418,-313.996],[110.456,-314.264],[109.491,-314.527],[108.526,-314.783],[107.558,-315.033],[106.589,-315.277],[105.618,-315.515],[104.646,-315.747],[103.673,-315.973],[102.698,-316.192],[101.722,-316.406],[100.744,-316.614],[99.766,-316.815],[98.786,-317.01],[97.804,-317.2],[96.822,-317.383],[95.838,-317.56],[94.854,-317.73],[93.868,-317.895],[92.881,-318.054],[91.894,-318.206],[90.905,-318.352],[89.916,-318.492],[88.925,-318.626],[87.934,-318.753],[86.942,-318.875],[85.95,-318.99],[84.956,-319.099],[83.962,-319.202],[82.968,-319.298],[81.973,-319.389],[80.977,-319.473],[79.981,-319.551],[78.984,-319.623],[77.987,-319.688],[76.989,-319.747],[75.991,-319.8],[74.993,-319.847],[73.994,-319.888],[72.996,-319.922],[71.997,-319.95],[70.998,-319.972],[69.999,-319.988],[68.999,-319.997],[68,-320],[67,-320],[66,-320],[65,-320],[64,-320],[63,-320],[62,-320],[61,-320],[60,-320],[59,-320],[58,-320],[57,-320],[56,-320],[55,-320],[54,-320],[53,-320],[52,-320],[51,-320],[50,-320],[49,-320],[48,-320],[47,-320],[46,-320],[45,-320],[44,-320],[43,-320],[42,-320],[41,-320],[40,-320],[39,-320],[38,-320],[37,-320],[36,-320],[35,-320],[34,-320],[33,-320],[32,-320],[31,-320],[30,-320],[29,-320],[28,-320],[27,-320],[26,-320],[25,-320],[24,-320],[23,-320],[22,-320],[21,-320],[20,-320],[19,-320],[18,-320],[17,-320],[16,-320],[15,-320],[14,-320],[13,-320],[12,-320],[11,-320],[10,-320],[9,-320],[8,-320],[7,-320],[6,-320],[5,-320],[4,-320],[3,-320],[2,-320],[1,-320],[0,-320],[-1,-320],[-2,-320],[-3,-320],[-4,-320],[-5,-320],[-6,-320],[-7,-320],[-8,-320],[-9,-320],[-10,-320],[-11,-320],[-12,-320],[-13,-320],[-14,-320],[-15,-320],[-16,-320],[-17,-320],[-18,-320],[-19,-320],[-20,-320],[-21,-320],[-22,-320],[-23,-320],[-24,-320],[-25,-320],[-26,-320],[-27,-320],[-28,-320],[-29,-320],[-30,-320],[-31,-320],[-32,-320],[-33,-320],[-34,-320],[-35,-320],[-36,-320],[-37,-320],[-38,-320],[-39,-320],[-40,-320],[-41,-320],[-42,-320],[-43,-320],[-44,-320],[-45,-320],[-46,-320],[-47,-320],[-48,-320],[-49,-320],[-50,-320],[-51,-320],[-52,-320],[-53,-320],[-54,-320],[-55,-320],[-56,-320],[-57,-320],[-58,-320],[-59,-320],[-60,-320],[-61,-320],[-62,-320],[-63,-320],[-64,-320],[-65,-320],[-66,-320],[-67,-320],[-68,-320],[-69,-320],[-70,-320],[-71,-320],[-72,-320],[-73,-320],[-74,-320],[-75,-320],[-76,-320],[-77,-320],[-78,-320],[-79,-320],[-80,-320],[-81,-320],[-82,-320],[-83,-320],[-84,-320],[-85,-320],[-86,-320],[-87,-320],[-88,-320],[-89,-320],[-90,-320],[-91,-320],[-92,-320],[-93,-320],[-94,-320],[-95,-320],[-96,-320],[-97,-320],[-98,-320],[-99,-320],[-100,-320],[-101,-320],[-102,-320],[-103,-320],[-104,-320],[-105,-320],[-106,-320],[-107,-320],[-108,-320],[-109,-320],[-110,-320],[-111,-320],[-112,-320],[-113,-320],[-114,-320],[-115,-320],[-116,-320],[-117,-320],[-118,-320],[-119,-320],[-120,-320],[-121,-320],[-122,-320],[-123,-320],[-124,-320],[-125,-320],[-126,-320],[-127,-320],[-128,-320],[-129,-320],[-130,-320],[-131,-320],[-132,-320],[-133,-320],[-134,-320],[-135,-320],[-136,-320],[-137,-320],[-138,-320],[-139,-320],[-140,-320],[-141,-320],[-142,-320],[-143,-320],[-144,-320],[-145,-320],[-146,-320],[-147,-320],[-148,-320],[-149,-320],[-150,-320],[-151,-320],[-152,-320],[-153,-320],[-154,-320],[-155,-320],[-156,-320],[-157,-320],[-158,-320],[-159,-320],[-160,-320],[-161,-320],[-162,-320],[-163,-320],[-164,-320],[-165,-320],[-166,-320],[-167,-320],[-168,-320],[-169,-320],[-170,-320],[-171,-320],[-172,-320],[-173,-320],[-174,-320],[-175,-320],[-176,-320],[-177,-320],[-178,-320],[-179,-320],[-180,-320],[-181,-320],[-182,-320],[-183,-320],[-184,-320],[-185,-320],[-186,-320],[-187,-320],[-188,-320],[-189,-320],[-190,-320],[-191,-320],[-192,-320],[-193,-320],[-194,-320],[-195,-320],[-196,-320],[-197,-320],[-198,-320],[-199,-320],[-200,-320],[-201,-320],[-202,-320],[-203,-320],[-204,-320],[-205,-320],[-206,-320],[-207,-320],[-208,-320],[-209,-320],[-210,-320],[-211,-320],[-212,-320],[-213,-320],[-214,-320],[-215,-320],[-216,-320],[-217,-320],[-218,-320],[-219,-320],[-220,-320],[-221,-320],[-222,-320],[-223,-320],[-224,-320],[-225,-320],[-226,-320],[-227,-320],[-228,-320],[-229,-320],[-230,-320],[-231,-320],[-232,-320],[-233,-320],[-234,-320],[-235,-320],[-236,-320],[-237,-320],[-238,-320],[-239,-320],[-240,-320],[-241,-320],[-242,-320],[-243,-320],[-244,-320],[-245,-320],[-246,-320],[-247,-320],[-248,-320],[-249,-320],[-250,-320],[-251,-320],[-252,-320],[-253,-320],[-254,-320],[-255,-320],[-256,-320],[-257,-320],[-258,-320],[-259,-320],[-260,-320],[-261,-320],[-262,-320],[-263,-320],[-264,-320],[-265,-320],[-266,-320],[-267,-320],[-268,-320],[-269,-320],[-270,-320],[-271,-320],[-272,-320],[-273,-320],[-274,-320],[-275,-320],[-276,-320],[-277,-320],[-278,-320],[-279,-320],[-280,-320],[-281,-320],[-282,-320],[-283,-320],[-284,-320],[-285,-320],[-286,-320],[-287,-320],[-288,-320],[-289,-320],[-290,-320],[-291,-320],[-292,-320],[-293,-320],[-294,-320],[-295,-320],[-296,-320],[-297,-320],[-298,-320],[-299,-320],[-300,-320],[-301,-320],[-302,-320],[-303,-320],[-304,-320],[-305,-320],[-306,-320],[-307,-320],[-308,-320],[-309,-320],[-310,-320],[-311,-320],[-312,-320],[-313,-320],[-314,-320],[-315,-320],[-316,-320],[-317,-320],[-318,-320],[-319,-320],[-320,-320],[-321,-320],[-322,-320],[-323,-320],[-324,-320],[-325,-320],[-326,-320],[-327,-320],[-328,-320],[-329,-320],[-330,-320],[-331,-320],[-332,-320],[-333,-320],[-334,-320],[-335,-320],[-336,-320],[-337,-320],[-338,-320],[-339,-320],[-340,-320],[-341,-320],[-342,-320],[-343,-320],[-344,-320],[-345,-320],[-346,-320],[-347,-320],[-348,-320],[-349,-320],[-350,-320],[-351,-320],[-352,-320],[-353,-320],[-354,-320],[-355,-320],[-356,-320],[-357,-320],[-358,-320],[-359,-320],[-360,-320],[-361,-320],[-362,-320],[-363,-320],[-364,-320],[-365,-320],[-366,-320],[-367,-320],[-368,-320],[-369,-320],[-370,-320],[-371,-320],[-372,-320],[-373,-320],[-374,-320],[-375,-320],[-376,-320],[-377,-320],[-378,-320],[-379,-320],[-380,-320],[-381,-320],[-382,-320],[-383,-320],[-384,-320],[-385,-320],[-386,-320],[-387,-320],[-388,-320],[-389,-320],[-390,-320],[-391,-320],[-392,-320],[-393,-320],[-394,-320],[-395,-320],[-396,-320],[-397,-320],[-398,-320],[-399,-320],[-400,-320],[-401,-320],[-402,-320],[-403,-320],[-404,-320],[-405,-320],[-406,-320],[-407,-320],[-408,-320],[-409,-320],[-410,-320],[-411,-320],[-412,-320],[-413,-320],[-414,-320],[-415,-320],[-416,-320],[-417,-320],[-418,-320],[-419,-320],[-420,-320],[-421,-320],[-422,-320],[-423,-320],[-424,-320],[-425,-320],[-426,-320],[-427,-320],[-428,-320],[-429,-320],[-430,-320],[-431,-320],[-432,-320],[-432.999,-319.997],[-433.999,-319.988],[-434.998,-319.972],[-435.997,-319.95],[-436.996,-319.922],[-437.994,-319.888],[-438.993,-319.847],[-439.991,-319.8],[-440.989,-319.747],[-441.987,-319.688],[-442.984,-319.623],[-443.981,-319.551],[-444.977,-319.473],[-445.973,-319.389],[-446.968,-319.298],[-447.962,-319.202],[-448.956,-319.099],[-449.95,-318.99],[-450.942,-318.875],[-451.934,-318.753],[-452.925,-318.626],[-453.916,-318.492],[-454.905,-318.352],[-455.894,-318.206],[-456.881,-318.054],[-457.868,-317.895],[-458.854,-317.73],[-459.838,-317.56],[-460.822,-317.383],[-461.804,-317.2],[-462.786,-317.01],[-463.766,-316.815],[-464.744,-316.614],[-465.722,-316.406],[-466.698,-316.192],[-467.673,-315.973],[-468.646,-315.747],[-469.618,-315.515],[-470.589,-315.277],[-471.558,-315.033],[-472.526,-314.783],[-473.491,-314.527],[-474.456,-314.264],[-475.418,-313.996],[-476.379,-313.722],[-477.339,-313.442],[-478.296,-313.156],[-479.252,-312.864],[-480.206,-312.565],[-481.158,-312.261],[-482.108,-311.951],[-483.056,-311.636],[-484.002,-311.314],[-484.946,-310.986],[-485.888,-310.652],[-486.828,-310.313],[-487.765,-309.967],[-488.701,-309.616],[-489.634,-309.259],[-490.565,-308.896],[-491.494,-308.528],[-492.421,-308.153],[-493.345,-307.773],[-494.266,-307.387],[-495.186,-306.995],[-496.103,-306.598],[-497.017,-306.194],[-497.929,-305.785],[-498.838,-305.371],[-499.745,-304.951],[-500.649,-304.525],[-501.55,-304.093],[-502.449,-303.656],[-503.344,-303.213],[-504.238,-302.765],[-505.128,-302.311],[-506.015,-301.851],[-506.9,-301.386],[-507.781,-300.916],[-508.66,-300.44],[-509.536,-299.958],[-510.408,-299.471],[-511.278,-298.979],[-512.144,-298.481],[-513.008,-297.977],[-513.868,-297.469],[-514.725,-296.955],[-515.578,-296.435],[-516.429,-295.911],[-517.276,-295.381],[-518.12,-294.846],[-518.961,-294.305],[-519.798,-293.759],[-520.631,-293.208],[-521.462,-292.652],[-522.288,-292.091],[-523.112,-291.524],[-523.931,-290.953],[-524.747,-290.376],[-525.56,-289.794],[-526.369,-289.207],[-527.174,-288.615],[-527.975,-288.019],[-528.773,-287.417],[-529.567,-286.81],[-530.357,-286.198],[-531.143,-285.581],[-531.926,-284.959],[-532.704,-284.333],[-533.479,-283.701],[-534.249,-283.065],[-535.016,-282.424],[-535.779,-281.778],[-536.537,-281.128],[-537.292,-280.473],[-538.042,-279.813],[-538.788,-279.148],[-539.53,-278.479],[-540.268,-277.805],[-541.002,-277.126],[-541.731,-276.443],[-542.456,-275.756],[-543.177,-275.064],[-543.894,-274.367],[-544.606,-273.666],[-545.314,-272.96],[-546.017,-272.25],[-546.716,-271.536],[-547.41,-270.817],[-548.1,-270.094],[-548.785,-269.367],[-549.466,-268.636],[-550.142,-267.9],[-550.814,-267.16],[-551.481,-266.416],[-552.143,-265.667],[-552.801,-264.915],[-553.454,-264.158],[-554.102,-263.398],[-554.745,-262.633],[-555.384,-261.865],[-556.018,-261.092],[-556.647,-260.315],[-557.271,-259.535],[-557.89,-258.751],[-558.504,-257.962],[-559.114,-257.17],[-559.718,-256.375],[-560.318,-255.575],[-560.912,-254.772],[-561.501,-253.965],[-562.086,-253.154],[-562.665,-252.34],[-563.239,-251.522],[-563.808,-250.7],[-564.372,-249.875],[-564.931,-249.047],[-565.485,-248.215],[-566.033,-247.38],[-566.576,-246.541],[-567.114,-245.699],[-567.646,-244.853],[-568.174,-244.004],[-568.696,-243.152],[-569.212,-242.297],[-569.724,-241.438],[-570.23,-240.576],[-570.73,-239.711],[-571.225,-238.843],[-571.715,-237.972],[-572.199,-237.098],[-572.678,-236.221],[-573.152,-235.341],[-573.619,-234.458],[-574.082,-233.572],[-574.538,-232.683],[-574.99,-231.791],[-575.435,-230.897],[-575.875,-230],[-576.31,-229.1],[-576.738,-228.197],[-577.161,-227.292],[-577.579,-226.384],[-577.991,-225.473],[-578.397,-224.56],[-578.797,-223.645],[-579.192,-222.726],[-579.581,-221.806],[-579.964,-220.883],[-580.341,-219.958],[-580.713,-219.03],[-581.078,-218.1],[-581.438,-217.168],[-581.793,-216.233],[-582.141,-215.297],[-582.483,-214.358],[-582.82,-213.417],[-583.151,-212.474],[-583.475,-211.529],[-583.794,-210.582],[-584.107,-209.633],[-584.414,-208.682],[-584.715,-207.729],[-585.01,-206.774],[-585.3,-205.818],[-585.583,-204.859],[-585.86,-203.899],[-586.131,-202.937],[-586.396,-201.974],[-586.655,-201.009],[-586.908,-200.042],[-587.156,-199.074],[-587.397,-198.104],[-587.632,-197.133],[-587.86,-196.16],[-588.083,-195.186],[-588.3,-194.21],[-588.511,-193.233],[-588.715,-192.255],[-588.913,-191.276],[-589.106,-190.295],[-589.292,-189.313],[-589.472,-188.33],[-589.646,-187.346],[-589.813,-186.361],[-589.975,-185.375],[-590.13,-184.388],[-590.28,-183.4],[-590.423,-182.411],[-590.56,-181.421],[-590.69,-180.43],[-590.815,-179.438],[-590.933,-178.446],[-591.045,-177.453],[-591.151,-176.46],[-591.251,-175.465],[-591.344,-174.47],[-591.432,-173.475],[-591.513,-172.479],[-591.587,-171.482],[-591.656,-170.485],[-591.718,-169.488],[-591.775,-168.49],[-591.824,-167.492],[-591.868,-166.494],[-591.906,-165.495],[-591.937,-164.496],[-591.962,-163.497],[-591.98,-162.498],[-591.993,-161.499],[-591.999,-160.5],[-591.999,-159.5],[-591.993,-158.501],[-591.98,-157.502],[-591.962,-156.503],[-591.937,-155.504],[-591.906,-154.505],[-591.868,-153.506],[-591.824,-152.508],[-591.775,-151.51],[-591.718,-150.512],[-591.656,-149.515],[-591.587,-148.518],[-591.513,-147.521],[-591.432,-146.525],[-591.344,-145.53],[-591.251,-144.535],[-591.151,-143.54],[-591.045,-142.547],[-590.933,-141.554],[-590.815,-140.562],[-590.69,-139.57],[-590.56,-138.579],[-590.423,-137.589],[-590.28,-136.6],[-590.13,-135.612],[-589.975,-134.625],[-589.813,-133.639],[-589.646,-132.654],[-589.472,-131.67],[-589.292,-130.687],[-589.106,-129.705],[-588.913,-128.724],[-588.715,-127.745],[-588.511,-126.767],[-588.3,-125.79],[-588.083,-124.814],[-587.86,-123.84],[-587.632,-122.867],[-587.397,-121.896],[-587.156,-120.926],[-586.908,-119.958],[-586.655,-118.991],[-586.396,-118.026],[-586.131,-117.063],[-585.86,-116.101],[-585.583,-115.141],[-585.3,-114.182],[-585.01,-113.226],[-584.715,-112.271],[-584.414,-111.318],[-584.107,-110.367],[-583.794,-109.418],[-583.475,-108.471],[-583.151,-107.526],[-582.82,-106.583],[-582.483,-105.642],[-582.141,-104.703],[-581.793,-103.767],[-581.438,-102.832],[-581.078,-101.9],[-580.713,-100.97],[-580.341,-100.042],[-579.964,-99.117],[-579.581,-98.194],[-579.192,-97.274],[-578.797,-96.355],[-578.397,-95.44],[-577.991,-94.527],[-577.579,-93.616],[-577.161,-92.708],[-576.738,-91.803],[-576.31,-90.9],[-575.875,-90],[-575.435,-89.103],[-574.99,-88.209],[-574.538,-87.317],[-574.082,-86.428],[-573.619,-85.542],[-573.152,-84.659],[-572.678,-83.779],[-572.199,-82.902],[-571.715,-82.028],[-571.225,-81.157],[-570.73,-80.289],[-570.23,-79.424],[-569.724,-78.562],[-569.212,-77.703],[-568.696,-76.848],[-568.174,-75.996],[-567.646,-75.147],[-567.114,-74.301],[-566.576,-73.459],[-566.033,-72.62],[-565.485,-71.785],[-564.931,-70.953],[-564.372,-70.125],[-563.808,-69.3],[-563.239,-68.478],[-562.665,-67.66],[-562.086,-66.846],[-561.501,-66.035],[-560.912,-65.228],[-560.318,-64.425],[-559.718,-63.625],[-559.114,-62.83],[-558.504,-62.038],[-557.89,-61.249],[-557.271,-60.465],[-556.647,-59.685],[-556.018,-58.908],[-555.384,-58.135],[-554.745,-57.367],[-554.102,-56.602],[-553.454,-55.842],[-552.801,-55.085],[-552.143,-54.333],[-551.481,-53.584],[-550.814,-52.84],[-550.142,-52.1],[-549.466,-51.364],[-548.785,-50.633],[-548.1,-49.906],[-547.41,-49.183],[-546.716,-48.464],[-546.017,-47.75],[-545.314,-47.04],[-544.606,-46.334],[-543.894,-45.633],[-543.177,-44.936],[-542.456,-44.244],[-541.731,-43.557],[-541.002,-42.874],[-540.268,-42.195],[-539.53,-41.521],[-538.788,-40.852],[-538.042,-40.187],[-537.292,-39.527],[-536.537,-38.872],[-535.779,-38.222],[-535.016,-37.576],[-534.249,-36.935],[-533.479,-36.299],[-532.704,-35.667],[-531.926,-35.041],[-531.143,-34.419],[-530.357,-33.802],[-529.567,-33.19],[-528.773,-32.583],[-527.975,-31.981],[-527.174,-31.385],[-526.369,-30.793],[-525.56,-30.206],[-524.747,-29.624],[-523.931,-29.047],[-523.112,-28.476],[-522.288,-27.909],[-521.462,-27.348],[-520.631,-26.792],[-519.798,-26.241],[-518.961,-25.695],[-518.12,-25.154],[-517.276,-24.619],[-516.429,-24.089],[-515.578,-23.565],[-514.725,-23.045],[-513.868,-22.531],[-513.008,-22.023],[-512.144,-21.519],[-511.278,-21.021],[-510.408,-20.529],[-509.536,-20.042],[-508.66,-19.56],[-507.781,-19.084],[-506.9,-18.614],[-506.015,-18.149],[-505.128,-17.689],[-504.238,-17.235],[-503.344,-16.787],[-502.449,-16.344],[-501.55,-15.907],[-500.649,-15.475],[-499.745,-15.049],[-498.838,-14.629],[-497.929,-14.215],[-497.017,-13.806],[-496.103,-13.402],[-495.186,-13.005],[-494.266,-12.613],[-493.345,-12.227],[-492.421,-11.847],[-491.494,-11.472],[-490.565,-11.104],[-489.634,-10.741],[-488.701,-10.384],[-487.765,-10.033],[-486.828,-9.687],[-485.888,-9.348],[-484.946,-9.014],[-484.002,-8.686],[-483.056,-8.364],[-482.108,-8.049],[-481.158,-7.739],[-480.206,-7.435],[-479.252,-7.136],[-478.296,-6.844],[-477.339,-6.558],[-476.379,-6.278],[-475.418,-6.004],[-474.456,-5.736],[-473.491,-5.473],[-472.526,-5.217],[-471.558,-4.967],[-470.589,-4.723],[-469.618,-4.485],[-468.646,-4.253],[-467.673,-4.027],[-466.698,-3.808],[-465.722,-3.594],[-464.744,-3.386],[-463.766,-3.185],[-462.786,-2.99],[-461.804,-2.8],[-460.822,-2.617],[-459.838,-2.44],[-458.854,-2.27],[-457.868,-2.105],[-456.881,-1.946],[-455.894,-1.794],[-454.905,-1.648],[-453.916,-1.508],[-452.925,-1.374],[-451.934,-1.247],[-450.942,-1.125],[-449.95,-1.01],[-448.956,-.901],[-447.962,-.798],[-446.968,-.702],[-445.973,-.611],[-444.977,-.527],[-443.981,-.449],[-442.984,-.377],[-441.987,-.312],[-440.989,-.253],[-439.991,-.2],[-438.993,-.153],[-437.994,-.112],[-436.996,-.078],[-435.997,-.05],[-434.998,-.028],[-433.999,-.012],[-432.999,-.003]],inner:[[-432,-32],[-431,-32],[-430,-32],[-429,-32],[-428,-32],[-427,-32],[-426,-32],[-425,-32],[-424,-32],[-423,-32],[-422,-32],[-421,-32],[-420,-32],[-419,-32],[-418,-32],[-417,-32],[-416,-32],[-415,-32],[-414,-32],[-413,-32],[-412,-32],[-411,-32],[-410,-32],[-409,-32],[-408,-32],[-407,-32],[-406,-32],[-405,-32],[-404,-32],[-403,-32],[-402,-32],[-401,-32],[-400,-32],[-399,-32],[-398,-32],[-397,-32],[-396,-32],[-395,-32],[-394,-32],[-393,-32],[-392,-32],[-391,-32],[-390,-32],[-389,-32],[-388,-32],[-387,-32],[-386,-32],[-385,-32],[-384,-32],[-383,-32],[-382,-32],[-381,-32],[-380,-32],[-379,-32],[-378,-32],[-377,-32],[-376,-32],[-375,-32],[-374,-32],[-373,-32],[-372,-32],[-371,-32],[-370,-32],[-369,-32],[-368,-32],[-367,-32],[-366,-32],[-365,-32],[-364,-32],[-363,-32],[-362,-32],[-361,-32],[-360,-32],[-359,-32],[-358,-32],[-357,-32],[-356,-32],[-355,-32],[-354,-32],[-353,-32],[-352,-32],[-351,-32],[-350,-32],[-349,-32],[-348,-32],[-347,-32],[-346,-32],[-345,-32],[-344,-32],[-343,-32],[-342,-32],[-341,-32],[-340,-32],[-339,-32],[-338,-32],[-337,-32],[-336,-32],[-335,-32],[-334,-32],[-333,-32],[-332,-32],[-331,-32],[-330,-32],[-329,-32],[-328,-32],[-327,-32],[-326,-32],[-325,-32],[-324,-32],[-323,-32],[-322,-32],[-321,-32],[-320,-32],[-319,-32],[-318,-32],[-317,-32],[-316,-32],[-315,-32],[-314,-32],[-313,-32],[-312,-32],[-311,-32],[-310,-32],[-309,-32],[-308,-32],[-307,-32],[-306,-32],[-305,-32],[-304,-32],[-303,-32],[-302,-32],[-301,-32],[-300,-32],[-299,-32],[-298,-32],[-297,-32],[-296,-32],[-295,-32],[-294,-32],[-293,-32],[-292,-32],[-291,-32],[-290,-32],[-289,-32],[-288,-32],[-287,-32],[-286,-32],[-285,-32],[-284,-32],[-283,-32],[-282,-32],[-281,-32],[-280,-32],[-279,-32],[-278,-32],[-277,-32],[-276,-32],[-275,-32],[-274,-32],[-273,-32],[-272,-32],[-271,-32],[-270,-32],[-269,-32],[-268,-32],[-267,-32],[-266,-32],[-265,-32],[-264,-32],[-263,-32],[-262,-32],[-261,-32],[-260,-32],[-259,-32],[-258,-32],[-257,-32],[-256,-32],[-255,-32],[-254,-32],[-253,-32],[-252,-32],[-251,-32],[-250,-32],[-249,-32],[-248,-32],[-247,-32],[-246,-32],[-245,-32],[-244,-32],[-243,-32],[-242,-32],[-241,-32],[-240,-32],[-239,-32],[-238,-32],[-237,-32],[-236,-32],[-235,-32],[-234,-32],[-233,-32],[-232,-32],[-231,-32],[-230,-32],[-229,-32],[-228,-32],[-227,-32],[-226,-32],[-225,-32],[-224,-32],[-223,-32],[-222,-32],[-221,-32],[-220,-32],[-219,-32],[-218,-32],[-217,-32],[-216,-32],[-215,-32],[-214,-32],[-213,-32],[-212,-32],[-211,-32],[-210,-32],[-209,-32],[-208,-32],[-207,-32],[-206,-32],[-205,-32],[-204,-32],[-203,-32],[-202,-32],[-201,-32],[-200,-32],[-199,-32],[-198,-32],[-197,-32],[-196,-32],[-195,-32],[-194,-32],[-193,-32],[-192,-32],[-191,-32],[-190,-32],[-189,-32],[-188,-32],[-187,-32],[-186,-32],[-185,-32],[-184,-32],[-183,-32],[-182,-32],[-181,-32],[-180,-32],[-179,-32],[-178,-32],[-177,-32],[-176,-32],[-175,-32],[-174,-32],[-173,-32],[-172,-32],[-171,-32],[-170,-32],[-169,-32],[-168,-32],[-167,-32],[-166,-32],[-165,-32],[-164,-32],[-163,-32],[-162,-32],[-161,-32],[-160,-32],[-159,-32],[-158,-32],[-157,-32],[-156,-32],[-155,-32],[-154,-32],[-153,-32],[-152,-32],[-151,-32],[-150,-32],[-149,-32],[-148,-32],[-147,-32],[-146,-32],[-145,-32],[-144,-32],[-143,-32],[-142,-32],[-141,-32],[-140,-32],[-139,-32],[-138,-32],[-137,-32],[-136,-32],[-135,-32],[-134,-32],[-133,-32],[-132,-32],[-131,-32],[-130,-32],[-129,-32],[-128,-32],[-127,-32],[-126,-32],[-125,-32],[-124,-32],[-123,-32],[-122,-32],[-121,-32],[-120,-32],[-119,-32],[-118,-32],[-117,-32],[-116,-32],[-115,-32],[-114,-32],[-113,-32],[-112,-32],[-111,-32],[-110,-32],[-109,-32],[-108,-32],[-107,-32],[-106.002,-32.004],[-105.004,-32.016],[-104.007,-32.035],[-103.009,-32.062],[-102.012,-32.097],[-101.015,-32.14],[-100.019,-32.191],[-99.023,-32.249],[-98.027,-32.315],[-97.032,-32.389],[-96.037,-32.47],[-95.044,-32.56],[-94.05,-32.657],[-93.058,-32.762],[-92.067,-32.874],[-91.076,-32.994],[-90.087,-33.122],[-89.098,-33.258],[-88.111,-33.401],[-87.124,-33.553],[-86.139,-33.711],[-85.155,-33.878],[-84.173,-34.052],[-83.192,-34.234],[-82.212,-34.423],[-81.234,-34.62],[-80.257,-34.825],[-79.282,-35.037],[-78.309,-35.257],[-77.337,-35.484],[-76.368,-35.719],[-75.4,-35.962],[-74.434,-36.212],[-73.47,-36.47],[-72.508,-36.735],[-71.548,-37.008],[-70.59,-37.288],[-69.635,-37.575],[-68.682,-37.87],[-67.731,-38.173],[-66.782,-38.482],[-65.836,-38.8],[-64.893,-39.124],[-63.952,-39.456],[-63.013,-39.795],[-62.077,-40.142],[-61.144,-40.496],[-60.214,-40.857],[-59.287,-41.225],[-58.362,-41.601],[-57.441,-41.983],[-56.522,-42.373],[-55.607,-42.77],[-54.695,-43.175],[-53.786,-43.586],[-52.88,-44.004],[-51.977,-44.43],[-51.078,-44.862],[-50.182,-45.302],[-49.29,-45.748],[-48.401,-46.201],[-47.515,-46.662],[-46.634,-47.129],[-45.756,-47.603],[-44.881,-48.084],[-44.011,-48.571],[-43.144,-49.066],[-42.281,-49.567],[-41.422,-50.075],[-40.567,-50.589],[-39.717,-51.11],[-38.87,-51.638],[-38.027,-52.173],[-37.189,-52.714],[-36.354,-53.261],[-35.524,-53.815],[-34.699,-54.375],[-33.878,-54.942],[-33.061,-55.515],[-32.249,-56.095],[-31.441,-56.681],[-30.638,-57.273],[-29.839,-57.871],[-29.046,-58.476],[-28.257,-59.087],[-27.472,-59.704],[-26.693,-60.327],[-25.918,-60.956],[-25.149,-61.591],[-24.384,-62.232],[-23.624,-62.879],[-22.87,-63.532],[-22.12,-64.191],[-21.376,-64.855],[-20.637,-65.526],[-19.903,-66.202],[-19.175,-66.883],[-18.451,-67.571],[-17.733,-68.264],[-17.021,-68.963],[-16.314,-69.667],[-15.613,-70.377],[-14.917,-71.092],[-14.227,-71.812],[-13.542,-72.538],[-12.863,-73.269],[-12.19,-74.006],[-11.522,-74.748],[-10.861,-75.494],[-10.205,-76.246],[-9.555,-77.004],[-8.911,-77.766],[-8.273,-78.533],[-7.641,-79.305],[-7.015,-80.082],[-6.395,-80.864],[-5.781,-81.65],[-5.173,-82.442],[-4.572,-83.238],[-3.976,-84.039],[-3.387,-84.844],[-2.804,-85.654],[-2.228,-86.469],[-1.658,-87.288],[-1.094,-88.111],[-.537,-88.939],[.013,-89.771],[.558,-90.607],[1.095,-91.448],[1.626,-92.293],[2.151,-93.141],[2.669,-93.994],[3.18,-94.851],[3.685,-95.712],[4.182,-96.577],[4.673,-97.446],[5.158,-98.318],[5.635,-99.194],[6.106,-100.074],[6.569,-100.958],[7.026,-101.845],[7.476,-102.735],[7.919,-103.63],[8.355,-104.527],[8.784,-105.428],[9.206,-106.332],[9.621,-107.24],[10.028,-108.15],[10.429,-109.064],[10.822,-109.981],[11.209,-110.901],[11.588,-111.824],[11.96,-112.75],[12.325,-113.679],[12.682,-114.611],[13.032,-115.545],[13.375,-116.482],[13.711,-117.422],[14.039,-118.364],[14.36,-119.309],[14.673,-120.256],[14.98,-121.206],[15.278,-122.158],[15.57,-123.112],[15.853,-124.069],[16.13,-125.028],[16.399,-125.989],[16.66,-126.951],[16.914,-127.916],[17.16,-128.883],[17.399,-129.852],[17.63,-130.823],[17.854,-131.795],[18.07,-132.769],[18.278,-133.745],[18.479,-134.723],[18.673,-135.702],[18.858,-136.682],[19.036,-137.664],[19.206,-138.647],[19.369,-139.632],[19.524,-140.617],[19.671,-141.604],[19.811,-142.592],[19.943,-143.581],[20.067,-144.571],[20.183,-145.562],[20.292,-146.554],[20.393,-147.547],[20.486,-148.54],[20.571,-149.535],[20.649,-150.529],[20.719,-151.525],[20.781,-152.521],[20.836,-153.517],[20.882,-154.514],[20.921,-155.511],[20.952,-156.508],[20.976,-157.506],[20.991,-158.503],[20.999,-159.501],[20.999,-160.499],[20.991,-161.497],[20.976,-162.494],[20.952,-163.492],[20.921,-164.489],[20.882,-165.486],[20.836,-166.483],[20.781,-167.479],[20.719,-168.475],[20.649,-169.471],[20.571,-170.465],[20.486,-171.46],[20.393,-172.453],[20.292,-173.446],[20.183,-174.438],[20.067,-175.429],[19.943,-176.419],[19.811,-177.408],[19.671,-178.396],[19.524,-179.383],[19.369,-180.368],[19.206,-181.353],[19.036,-182.336],[18.858,-183.318],[18.673,-184.298],[18.479,-185.277],[18.278,-186.255],[18.07,-187.231],[17.854,-188.205],[17.63,-189.177],[17.399,-190.148],[17.16,-191.117],[16.914,-192.084],[16.66,-193.049],[16.399,-194.011],[16.13,-194.972],[15.853,-195.931],[15.57,-196.888],[15.278,-197.842],[14.98,-198.794],[14.673,-199.744],[14.36,-200.691],[14.039,-201.636],[13.711,-202.578],[13.375,-203.518],[13.032,-204.455],[12.682,-205.389],[12.325,-206.321],[11.96,-207.25],[11.588,-208.176],[11.209,-209.099],[10.822,-210.019],[10.429,-210.936],[10.028,-211.85],[9.621,-212.76],[9.206,-213.668],[8.784,-214.572],[8.355,-215.473],[7.919,-216.37],[7.476,-217.265],[7.026,-218.155],[6.569,-219.042],[6.106,-219.926],[5.635,-220.806],[5.158,-221.682],[4.673,-222.554],[4.182,-223.423],[3.685,-224.288],[3.18,-225.149],[2.669,-226.006],[2.151,-226.859],[1.626,-227.707],[1.095,-228.552],[.558,-229.393],[.013,-230.229],[-.537,-231.061],[-1.094,-231.889],[-1.658,-232.712],[-2.228,-233.531],[-2.804,-234.346],[-3.387,-235.156],[-3.976,-235.961],[-4.572,-236.762],[-5.173,-237.558],[-5.781,-238.35],[-6.395,-239.136],[-7.015,-239.918],[-7.641,-240.695],[-8.273,-241.467],[-8.911,-242.234],[-9.555,-242.996],[-10.205,-243.754],[-10.861,-244.506],[-11.522,-245.252],[-12.19,-245.994],[-12.863,-246.731],[-13.542,-247.462],[-14.227,-248.188],[-14.917,-248.908],[-15.613,-249.623],[-16.314,-250.333],[-17.021,-251.037],[-17.733,-251.736],[-18.451,-252.429],[-19.175,-253.117],[-19.903,-253.798],[-20.637,-254.474],[-21.376,-255.145],[-22.12,-255.809],[-22.87,-256.468],[-23.624,-257.121],[-24.384,-257.768],[-25.149,-258.409],[-25.918,-259.044],[-26.693,-259.673],[-27.472,-260.296],[-28.257,-260.913],[-29.046,-261.524],[-29.839,-262.129],[-30.638,-262.727],[-31.441,-263.319],[-32.249,-263.905],[-33.061,-264.485],[-33.878,-265.058],[-34.699,-265.625],[-35.524,-266.185],[-36.354,-266.739],[-37.189,-267.286],[-38.027,-267.827],[-38.87,-268.362],[-39.717,-268.89],[-40.567,-269.411],[-41.422,-269.925],[-42.281,-270.433],[-43.144,-270.934],[-44.011,-271.429],[-44.881,-271.916],[-45.756,-272.397],[-46.634,-272.871],[-47.515,-273.338],[-48.401,-273.799],[-49.29,-274.252],[-50.182,-274.698],[-51.078,-275.138],[-51.977,-275.57],[-52.88,-275.996],[-53.786,-276.414],[-54.695,-276.825],[-55.607,-277.23],[-56.522,-277.627],[-57.441,-278.017],[-58.362,-278.399],[-59.287,-278.775],[-60.214,-279.143],[-61.144,-279.504],[-62.077,-279.858],[-63.013,-280.205],[-63.952,-280.544],[-64.893,-280.876],[-65.836,-281.2],[-66.782,-281.518],[-67.731,-281.827],[-68.682,-282.13],[-69.635,-282.425],[-70.59,-282.712],[-71.548,-282.992],[-72.508,-283.265],[-73.47,-283.53],[-74.434,-283.788],[-75.4,-284.038],[-76.368,-284.281],[-77.337,-284.516],[-78.309,-284.743],[-79.282,-284.963],[-80.257,-285.175],[-81.234,-285.38],[-82.212,-285.577],[-83.192,-285.766],[-84.173,-285.948],[-85.155,-286.122],[-86.139,-286.289],[-87.124,-286.447],[-88.111,-286.599],[-89.098,-286.742],[-90.087,-286.878],[-91.076,-287.006],[-92.067,-287.126],[-93.058,-287.238],[-94.05,-287.343],[-95.044,-287.44],[-96.037,-287.53],[-97.032,-287.611],[-98.027,-287.685],[-99.023,-287.751],[-100.019,-287.809],[-101.015,-287.86],[-102.012,-287.903],[-103.009,-287.938],[-104.007,-287.965],[-105.004,-287.984],[-106.002,-287.996],[-107,-288],[-108,-288],[-109,-288],[-110,-288],[-111,-288],[-112,-288],[-113,-288],[-114,-288],[-115,-288],[-116,-288],[-117,-288],[-118,-288],[-119,-288],[-120,-288],[-121,-288],[-122,-288],[-123,-288],[-124,-288],[-125,-288],[-126,-288],[-127,-288],[-128,-288],[-129,-288],[-130,-288],[-131,-288],[-132,-288],[-133,-288],[-134,-288],[-135,-288],[-136,-288],[-137,-288],[-138,-288],[-139,-288],[-140,-288],[-141,-288],[-142,-288],[-143,-288],[-144,-288],[-145,-288],[-146,-288],[-147,-288],[-148,-288],[-149,-288],[-150,-288],[-151,-288],[-152,-288],[-153,-288],[-154,-288],[-155,-288],[-156,-288],[-157,-288],[-158,-288],[-159,-288],[-160,-288],[-161,-288],[-162,-288],[-163,-288],[-164,-288],[-165,-288],[-166,-288],[-167,-288],[-168,-288],[-169,-288],[-170,-288],[-171,-288],[-172,-288],[-173,-288],[-174,-288],[-175,-288],[-176,-288],[-177,-288],[-178,-288],[-179,-288],[-180,-288],[-181,-288],[-182,-288],[-183,-288],[-184,-288],[-185,-288],[-186,-288],[-187,-288],[-188,-288],[-189,-288],[-190,-288],[-191,-288],[-192,-288],[-193,-288],[-194,-288],[-195,-288],[-196,-288],[-197,-288],[-198,-288],[-199,-288],[-200,-288],[-201,-288],[-202,-288],[-203,-288],[-204,-288],[-205,-288],[-206,-288],[-207,-288],[-208,-288],[-209,-288],[-210,-288],[-211,-288],[-212,-288],[-213,-288],[-214,-288],[-215,-288],[-216,-288],[-217,-288],[-218,-288],[-219,-288],[-220,-288],[-221,-288],[-222,-288],[-223,-288],[-224,-288],[-225,-288],[-226,-288],[-227,-288],[-228,-288],[-229,-288],[-230,-288],[-231,-288],[-232,-288],[-233,-288],[-234,-288],[-235,-288],[-236,-288],[-237,-288],[-238,-288],[-239,-288],[-240,-288],[-241,-288],[-242,-288],[-243,-288],[-244,-288],[-245,-288],[-246,-288],[-247,-288],[-248,-288],[-249,-288],[-250,-288],[-251,-288],[-252,-288],[-253,-288],[-254,-288],[-255,-288],[-256,-288],[-257,-288],[-258,-288],[-259,-288],[-260,-288],[-261,-288],[-262,-288],[-263,-288],[-264,-288],[-265,-288],[-266,-288],[-267,-288],[-268,-288],[-269,-288],[-270,-288],[-271,-288],[-272,-288],[-273,-288],[-274,-288],[-275,-288],[-276,-288],[-277,-288],[-278,-288],[-279,-288],[-280,-288],[-281,-288],[-282,-288],[-283,-288],[-284,-288],[-285,-288],[-286,-288],[-287,-288],[-288,-288],[-289,-288],[-290,-288],[-291,-288],[-292,-288],[-293,-288],[-294,-288],[-295,-288],[-296,-288],[-297,-288],[-298,-288],[-299,-288],[-300,-288],[-301,-288],[-302,-288],[-303,-288],[-304,-288],[-305,-288],[-306,-288],[-307,-288],[-308,-288],[-309,-288],[-310,-288],[-311,-288],[-312,-288],[-313,-288],[-314,-288],[-315,-288],[-316,-288],[-317,-288],[-318,-288],[-319,-288],[-320,-288],[-321,-288],[-322,-288],[-323,-288],[-324,-288],[-325,-288],[-326,-288],[-327,-288],[-328,-288],[-329,-288],[-330,-288],[-331,-288],[-332,-288],[-333,-288],[-334,-288],[-335,-288],[-336,-288],[-337,-288],[-338,-288],[-339,-288],[-340,-288],[-341,-288],[-342,-288],[-343,-288],[-344,-288],[-345,-288],[-346,-288],[-347,-288],[-348,-288],[-349,-288],[-350,-288],[-351,-288],[-352,-288],[-353,-288],[-354,-288],[-355,-288],[-356,-288],[-357,-288],[-358,-288],[-359,-288],[-360,-288],[-361,-288],[-362,-288],[-363,-288],[-364,-288],[-365,-288],[-366,-288],[-367,-288],[-368,-288],[-369,-288],[-370,-288],[-371,-288],[-372,-288],[-373,-288],[-374,-288],[-375,-288],[-376,-288],[-377,-288],[-378,-288],[-379,-288],[-380,-288],[-381,-288],[-382,-288],[-383,-288],[-384,-288],[-385,-288],[-386,-288],[-387,-288],[-388,-288],[-389,-288],[-390,-288],[-391,-288],[-392,-288],[-393,-288],[-394,-288],[-395,-288],[-396,-288],[-397,-288],[-398,-288],[-399,-288],[-400,-288],[-401,-288],[-402,-288],[-403,-288],[-404,-288],[-405,-288],[-406,-288],[-407,-288],[-408,-288],[-409,-288],[-410,-288],[-411,-288],[-412,-288],[-413,-288],[-414,-288],[-415,-288],[-416,-288],[-417,-288],[-418,-288],[-419,-288],[-420,-288],[-421,-288],[-422,-288],[-423,-288],[-424,-288],[-425,-288],[-426,-288],[-427,-288],[-428,-288],[-429,-288],[-430,-288],[-431,-288],[-432,-288],[-432.998,-287.996],[-433.996,-287.984],[-434.993,-287.965],[-435.991,-287.938],[-436.988,-287.903],[-437.985,-287.86],[-438.981,-287.809],[-439.977,-287.751],[-440.973,-287.685],[-441.968,-287.611],[-442.963,-287.53],[-443.956,-287.44],[-444.95,-287.343],[-445.942,-287.238],[-446.933,-287.126],[-447.924,-287.006],[-448.913,-286.878],[-449.902,-286.742],[-450.889,-286.599],[-451.876,-286.447],[-452.861,-286.289],[-453.845,-286.122],[-454.827,-285.948],[-455.808,-285.766],[-456.788,-285.577],[-457.766,-285.38],[-458.743,-285.175],[-459.718,-284.963],[-460.691,-284.743],[-461.663,-284.516],[-462.632,-284.281],[-463.6,-284.038],[-464.566,-283.788],[-465.53,-283.53],[-466.492,-283.265],[-467.452,-282.992],[-468.41,-282.712],[-469.365,-282.425],[-470.318,-282.13],[-471.269,-281.827],[-472.218,-281.518],[-473.164,-281.2],[-474.107,-280.876],[-475.048,-280.544],[-475.987,-280.205],[-476.923,-279.858],[-477.856,-279.504],[-478.786,-279.143],[-479.713,-278.775],[-480.638,-278.399],[-481.559,-278.017],[-482.478,-277.627],[-483.393,-277.23],[-484.305,-276.825],[-485.214,-276.414],[-486.12,-275.996],[-487.023,-275.57],[-487.922,-275.138],[-488.818,-274.698],[-489.71,-274.252],[-490.599,-273.799],[-491.485,-273.338],[-492.366,-272.871],[-493.244,-272.397],[-494.119,-271.916],[-494.989,-271.429],[-495.856,-270.934],[-496.719,-270.433],[-497.578,-269.925],[-498.433,-269.411],[-499.283,-268.89],[-500.13,-268.362],[-500.973,-267.827],[-501.811,-267.286],[-502.646,-266.739],[-503.476,-266.185],[-504.301,-265.625],[-505.122,-265.058],[-505.939,-264.485],[-506.751,-263.905],[-507.559,-263.319],[-508.362,-262.727],[-509.161,-262.129],[-509.954,-261.524],[-510.743,-260.913],[-511.528,-260.296],[-512.307,-259.673],[-513.082,-259.044],[-513.851,-258.409],[-514.616,-257.768],[-515.376,-257.121],[-516.13,-256.468],[-516.88,-255.809],[-517.624,-255.145],[-518.363,-254.474],[-519.097,-253.798],[-519.825,-253.117],[-520.549,-252.429],[-521.267,-251.736],[-521.979,-251.037],[-522.686,-250.333],[-523.387,-249.623],[-524.083,-248.908],[-524.773,-248.188],[-525.458,-247.462],[-526.137,-246.731],[-526.81,-245.994],[-527.478,-245.252],[-528.139,-244.506],[-528.795,-243.754],[-529.445,-242.996],[-530.089,-242.234],[-530.727,-241.467],[-531.359,-240.695],[-531.985,-239.918],[-532.605,-239.136],[-533.219,-238.35],[-533.827,-237.558],[-534.428,-236.762],[-535.024,-235.961],[-535.613,-235.156],[-536.196,-234.346],[-536.772,-233.531],[-537.342,-232.712],[-537.906,-231.889],[-538.463,-231.061],[-539.013,-230.229],[-539.558,-229.393],[-540.095,-228.552],[-540.626,-227.707],[-541.151,-226.859],[-541.669,-226.006],[-542.18,-225.149],[-542.685,-224.288],[-543.182,-223.423],[-543.673,-222.554],[-544.158,-221.682],[-544.635,-220.806],[-545.106,-219.926],[-545.569,-219.042],[-546.026,-218.155],[-546.476,-217.265],[-546.919,-216.37],[-547.355,-215.473],[-547.784,-214.572],[-548.206,-213.668],[-548.621,-212.76],[-549.028,-211.85],[-549.429,-210.936],[-549.822,-210.019],[-550.209,-209.099],[-550.588,-208.176],[-550.96,-207.25],[-551.325,-206.321],[-551.682,-205.389],[-552.032,-204.455],[-552.375,-203.518],[-552.711,-202.578],[-553.039,-201.636],[-553.36,-200.691],[-553.673,-199.744],[-553.98,-198.794],[-554.278,-197.842],[-554.57,-196.888],[-554.853,-195.931],[-555.13,-194.972],[-555.399,-194.011],[-555.66,-193.049],[-555.914,-192.084],[-556.16,-191.117],[-556.399,-190.148],[-556.63,-189.177],[-556.854,-188.205],[-557.07,-187.231],[-557.278,-186.255],[-557.479,-185.277],[-557.673,-184.298],[-557.858,-183.318],[-558.036,-182.336],[-558.206,-181.353],[-558.369,-180.368],[-558.524,-179.383],[-558.671,-178.396],[-558.811,-177.408],[-558.943,-176.419],[-559.067,-175.429],[-559.183,-174.438],[-559.292,-173.446],[-559.393,-172.453],[-559.486,-171.46],[-559.571,-170.465],[-559.649,-169.471],[-559.719,-168.475],[-559.781,-167.479],[-559.836,-166.483],[-559.882,-165.486],[-559.921,-164.489],[-559.952,-163.492],[-559.976,-162.494],[-559.991,-161.497],[-559.999,-160.499],[-559.999,-159.501],[-559.991,-158.503],[-559.976,-157.506],[-559.952,-156.508],[-559.921,-155.511],[-559.882,-154.514],[-559.836,-153.517],[-559.781,-152.521],[-559.719,-151.525],[-559.649,-150.529],[-559.571,-149.535],[-559.486,-148.54],[-559.393,-147.547],[-559.292,-146.554],[-559.183,-145.562],[-559.067,-144.571],[-558.943,-143.581],[-558.811,-142.592],[-558.671,-141.604],[-558.524,-140.617],[-558.369,-139.632],[-558.206,-138.647],[-558.036,-137.664],[-557.858,-136.682],[-557.673,-135.702],[-557.479,-134.723],[-557.278,-133.745],[-557.07,-132.769],[-556.854,-131.795],[-556.63,-130.823],[-556.399,-129.852],[-556.16,-128.883],[-555.914,-127.916],[-555.66,-126.951],[-555.399,-125.989],[-555.13,-125.028],[-554.853,-124.069],[-554.57,-123.112],[-554.278,-122.158],[-553.98,-121.206],[-553.673,-120.256],[-553.36,-119.309],[-553.039,-118.364],[-552.711,-117.422],[-552.375,-116.482],[-552.032,-115.545],[-551.682,-114.611],[-551.325,-113.679],[-550.96,-112.75],[-550.588,-111.824],[-550.209,-110.901],[-549.822,-109.981],[-549.429,-109.064],[-549.028,-108.15],[-548.621,-107.24],[-548.206,-106.332],[-547.784,-105.428],[-547.355,-104.527],[-546.919,-103.63],[-546.476,-102.735],[-546.026,-101.845],[-545.569,-100.958],[-545.106,-100.074],[-544.635,-99.194],[-544.158,-98.318],[-543.673,-97.446],[-543.182,-96.577],[-542.685,-95.712],[-542.18,-94.851],[-541.669,-93.994],[-541.151,-93.141],[-540.626,-92.293],[-540.095,-91.448],[-539.558,-90.607],[-539.013,-89.771],[-538.463,-88.939],[-537.906,-88.111],[-537.342,-87.288],[-536.772,-86.469],[-536.196,-85.654],[-535.613,-84.844],[-535.024,-84.039],[-534.428,-83.238],[-533.827,-82.442],[-533.219,-81.65],[-532.605,-80.864],[-531.985,-80.082],[-531.359,-79.305],[-530.727,-78.533],[-530.089,-77.766],[-529.445,-77.004],[-528.795,-76.246],[-528.139,-75.494],[-527.478,-74.748],[-526.81,-74.006],[-526.137,-73.269],[-525.458,-72.538],[-524.773,-71.812],[-524.083,-71.092],[-523.387,-70.377],[-522.686,-69.667],[-521.979,-68.963],[-521.267,-68.264],[-520.549,-67.571],[-519.825,-66.883],[-519.097,-66.202],[-518.363,-65.526],[-517.624,-64.855],[-516.88,-64.191],[-516.13,-63.532],[-515.376,-62.879],[-514.616,-62.232],[-513.851,-61.591],[-513.082,-60.956],[-512.307,-60.327],[-511.528,-59.704],[-510.743,-59.087],[-509.954,-58.476],[-509.161,-57.871],[-508.362,-57.273],[-507.559,-56.681],[-506.751,-56.095],[-505.939,-55.515],[-505.122,-54.942],[-504.301,-54.375],[-503.476,-53.815],[-502.646,-53.261],[-501.811,-52.714],[-500.973,-52.173],[-500.13,-51.638],[-499.283,-51.11],[-498.433,-50.589],[-497.578,-50.075],[-496.719,-49.567],[-495.856,-49.066],[-494.989,-48.571],[-494.119,-48.084],[-493.244,-47.603],[-492.366,-47.129],[-491.485,-46.662],[-490.599,-46.201],[-489.71,-45.748],[-488.818,-45.302],[-487.922,-44.862],[-487.023,-44.43],[-486.12,-44.004],[-485.214,-43.586],[-484.305,-43.175],[-483.393,-42.77],[-482.478,-42.373],[-481.559,-41.983],[-480.638,-41.601],[-479.713,-41.225],[-478.786,-40.857],[-477.856,-40.496],[-476.923,-40.142],[-475.987,-39.795],[-475.048,-39.456],[-474.107,-39.124],[-473.164,-38.8],[-472.218,-38.482],[-471.269,-38.173],[-470.318,-37.87],[-469.365,-37.575],[-468.41,-37.288],[-467.452,-37.008],[-466.492,-36.735],[-465.53,-36.47],[-464.566,-36.212],[-463.6,-35.962],[-462.632,-35.719],[-461.663,-35.484],[-460.691,-35.257],[-459.718,-35.037],[-458.743,-34.825],[-457.766,-34.62],[-456.788,-34.423],[-455.808,-34.234],[-454.827,-34.052],[-453.845,-33.878],[-452.861,-33.711],[-451.876,-33.553],[-450.889,-33.401],[-449.902,-33.258],[-448.913,-33.122],[-447.924,-32.994],[-446.933,-32.874],[-445.942,-32.762],[-444.95,-32.657],[-443.956,-32.56],[-442.963,-32.47],[-441.968,-32.389],[-440.973,-32.315],[-439.977,-32.249],[-438.981,-32.191],[-437.985,-32.14],[-436.988,-32.097],[-435.991,-32.062],[-434.993,-32.035],[-433.996,-32.016],[-432.998,-32.004]],chute1600:[[218,-320],[217,-320],[216,-320],[215,-320],[214,-320],[213,-320],[212,-320],[211,-320],[210,-320],[209,-320],[208,-320],[207,-320],[206,-320],[205,-320],[204,-320],[203,-320],[202,-320],[201,-320],[200,-320],[199,-320],[198,-320],[197,-320],[196,-320],[195,-320],[194,-320],[193,-320],[192,-320],[191,-320],[190,-320],[189,-320],[188,-320],[187,-320],[186,-320],[185,-320],[184,-320],[183,-320],[182,-320],[181,-320],[180,-320],[179,-320],[178,-320],[177,-320],[176,-320],[175,-320],[174,-320],[173,-320],[172,-320],[171,-320],[170,-320],[169,-320],[168,-320],[167,-320],[166,-320],[165,-320],[164,-320],[163,-320],[162,-320],[161,-320],[160,-320],[159,-320],[158,-320],[157,-320],[156,-320],[155,-320],[154,-320],[153,-320],[152,-320],[151,-320],[150,-320],[149,-320],[148,-320],[147,-320],[146,-320],[145,-320],[144,-320],[143,-320],[142,-320],[141,-320],[140,-320],[139,-320],[138,-320],[137,-320],[136,-320],[135,-320],[134,-320],[133,-320],[132,-320],[131,-320],[130,-320],[129,-320],[128,-320],[127,-320],[126,-320],[125,-320],[124,-320],[123,-320],[122,-320],[121,-320],[120,-320],[119,-320],[118,-320],[117,-320],[116,-320],[115,-320],[114,-320],[113,-320],[112,-320],[111,-320],[110,-320],[109,-320],[108,-320],[107,-320],[106,-320],[105,-320],[104,-320],[103,-320],[102,-320],[101,-320],[100,-320],[99,-320],[98,-320],[97,-320],[96,-320],[95,-320],[94,-320],[93,-320],[92,-320],[91,-320],[90,-320],[89,-320],[88,-320],[87,-320],[86,-320],[85,-320],[84,-320],[83,-320],[82,-320],[81,-320],[80,-320],[79,-320],[78,-320],[77,-320],[76,-320],[75,-320],[74,-320],[73,-320],[72,-320],[71,-320],[70,-320],[69,-320],[68,-320]],crossover:[[-432,-32],[-431.048,-31.991],[-430.095,-31.966],[-429.143,-31.923],[-428.19,-31.864],[-427.238,-31.789],[-426.286,-31.698],[-425.333,-31.592],[-424.381,-31.471],[-423.429,-31.335],[-422.476,-31.185],[-421.524,-31.02],[-420.571,-30.842],[-419.619,-30.65],[-418.667,-30.445],[-417.714,-30.227],[-416.762,-29.997],[-415.81,-29.755],[-414.857,-29.501],[-413.905,-29.236],[-412.952,-28.959],[-412,-28.672],[-411.048,-28.374],[-410.095,-28.066],[-409.143,-27.749],[-408.19,-27.422],[-407.238,-27.085],[-406.286,-26.74],[-405.333,-26.387],[-404.381,-26.025],[-403.429,-25.656],[-402.476,-25.279],[-401.524,-24.895],[-400.571,-24.504],[-399.619,-24.107],[-398.667,-23.704],[-397.714,-23.295],[-396.762,-22.88],[-395.81,-22.46],[-394.857,-22.035],[-393.905,-21.606],[-392.952,-21.173],[-392,-20.736],[-391.048,-20.295],[-390.095,-19.852],[-389.143,-19.405],[-388.19,-18.956],[-387.238,-18.505],[-386.286,-18.052],[-385.333,-17.598],[-384.381,-17.142],[-383.429,-16.686],[-382.476,-16.229],[-381.524,-15.771],[-380.571,-15.314],[-379.619,-14.858],[-378.667,-14.402],[-377.714,-13.948],[-376.762,-13.495],[-375.81,-13.044],[-374.857,-12.595],[-373.905,-12.148],[-372.952,-11.705],[-372,-11.264],[-371.048,-10.827],[-370.095,-10.394],[-369.143,-9.965],[-368.19,-9.54],[-367.238,-9.12],[-366.286,-8.705],[-365.333,-8.296],[-364.381,-7.893],[-363.429,-7.496],[-362.476,-7.105],[-361.524,-6.721],[-360.571,-6.344],[-359.619,-5.975],[-358.667,-5.613],[-357.714,-5.26],[-356.762,-4.915],[-355.81,-4.578],[-354.857,-4.251],[-353.905,-3.934],[-352.952,-3.626],[-352,-3.328],[-351.048,-3.041],[-350.095,-2.764],[-349.143,-2.499],[-348.19,-2.245],[-347.238,-2.003],[-346.286,-1.773],[-345.333,-1.555],[-344.381,-1.35],[-343.429,-1.158],[-342.476,-.98],[-341.524,-.815],[-340.571,-.665],[-339.619,-.529],[-338.667,-.408],[-337.714,-.302],[-336.762,-.211],[-335.81,-.136],[-334.857,-.077],[-333.905,-.034],[-332.952,-.009],[-332,0]],chute1000:[[-437.58,-402.266],[-443.429,-395.295],[-449.279,-388.324],[-455.128,-381.353],[-460.977,-374.382],[-466.827,-367.411],[-472.676,-360.44],[-478.525,-353.469],[-484.375,-346.498],[-490.224,-339.527],[-496.073,-332.556],[-501.923,-325.585],[-507.772,-318.614],[-513.622,-311.643],[-519.471,-304.672],[-525.32,-297.701],[-531.17,-290.73],[-537.019,-283.759],[-542.868,-276.788],[-548.718,-269.817],[-554.567,-262.846]]},grandstand:{x0:-77,x1:77,zFront:59,zBack:113,floors:[0,5.5,9.5,13.5,17.5,21.5],lobbyY:5.5,lobbyCeiling:13.5,canopy:{y:22.6,zFront:50},wall:.8,doors:{front:[[-50,-44],[-3,3],[44,50]],west:[[80,92]],back:[[-20,-14],[50,56]]},pillars:{xs:[-66,-54,-42,-30,-18,-6,6,18,30,42,54,66],zs:[72,86,100],size:1.2},terrace:{z0:47,rowDepth:1.5,rise:.6875,rows:8},seat:{x:10,z:55.25,row:5},kiosks:{betting:{x:-40,z:110.6,w:18,d:2.4},leaderboard:{x:30,z:110.6,w:16,d:2.4}},bridge:{x0:77,x1:116,z0:66,z1:106,statue:[106,86]},ramp:{x0:79,x1:90,z0:28,z1:66,westOpen:3.8},plazaStairs:{x0:116,x1:128,z0:66,z1:106,steps:8},backBalcony:{x0:-20,x1:77,z0:113,z1:120},paddockGallery:{r0:37,r1:45,a0:-.35,a1:3.491592653589793,connectors:[[-4.014,2.986,120,140.941],[73.014,80.014,120,140.941]]}},paddock:{x:38,z:153,radius:32,walkingRadius:25,exclusionRadius:35,stalls:{count:8,r:37,a0:.25,a1:2.891592653589793,colors:["#8b6fb3","#e2b53c","#c9443a","#3d8fc0","#3fa35f","#8a6a4b","#d96f9a","#7d68b8"]},screen:{x:38,z:202,width:20,height:10,base:9}},horseWalk:[[63,153],[66,150],[97,150],[97,30],[97,20]],horseWalkCorridor:{x0:92,x1:102,z0:23,z1:155,spurZ:[145,155],spurX0:63},pond:{x:-87,z:-174,rx:32,rz:40},wetland:{x:-303,z:-174,rx:104,rz:48},eastGarden:{x:-171,z:86,radius:24},plaza:{x:214,z:73,fountainRadius:16,gateX:264},counselCenter:{x:176,z:36,w:18,d:11},videoBoard:{x:-1,z:-18,width:48,height:16,base:9},stablePlots:[{id:"plot-001",x:-770,z:139,facing:0,width:20,depth:20},{id:"plot-002",x:-746,z:139,facing:0,width:20,depth:20},{id:"plot-003",x:-722,z:139,facing:0,width:20,depth:20},{id:"plot-004",x:-698,z:139,facing:0,width:20,depth:20},{id:"plot-005",x:-674,z:139,facing:0,width:20,depth:20},{id:"plot-006",x:-626,z:139,facing:0,width:20,depth:20},{id:"plot-007",x:-578,z:139,facing:0,width:20,depth:20},{id:"plot-008",x:-554,z:139,facing:0,width:20,depth:20},{id:"plot-009",x:-386,z:139,facing:0,width:20,depth:20},{id:"plot-010",x:-362,z:139,facing:0,width:20,depth:20},{id:"plot-011",x:-338,z:139,facing:0,width:20,depth:20},{id:"plot-012",x:-314,z:139,facing:0,width:20,depth:20},{id:"plot-013",x:-290,z:139,facing:0,width:20,depth:20},{id:"plot-014",x:-266,z:139,facing:0,width:20,depth:20},{id:"plot-015",x:-242,z:139,facing:0,width:20,depth:20},{id:"plot-016",x:-770,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-017",x:-746,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-018",x:-722,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-019",x:-698,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-020",x:-674,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-021",x:-626,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-022",x:-578,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-023",x:-554,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-024",x:-386,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-025",x:-362,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-026",x:-338,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-027",x:-314,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-028",x:-290,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-029",x:-266,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-030",x:-242,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-031",x:-770,z:189,facing:0,width:20,depth:20},{id:"plot-032",x:-746,z:189,facing:0,width:20,depth:20},{id:"plot-033",x:-722,z:189,facing:0,width:20,depth:20},{id:"plot-034",x:-698,z:189,facing:0,width:20,depth:20},{id:"plot-035",x:-674,z:189,facing:0,width:20,depth:20},{id:"plot-036",x:-626,z:189,facing:0,width:20,depth:20},{id:"plot-037",x:-578,z:189,facing:0,width:20,depth:20},{id:"plot-038",x:-554,z:189,facing:0,width:20,depth:20},{id:"plot-039",x:-386,z:189,facing:0,width:20,depth:20},{id:"plot-040",x:-362,z:189,facing:0,width:20,depth:20},{id:"plot-041",x:-338,z:189,facing:0,width:20,depth:20},{id:"plot-042",x:-314,z:189,facing:0,width:20,depth:20},{id:"plot-043",x:-290,z:189,facing:0,width:20,depth:20},{id:"plot-044",x:-266,z:189,facing:0,width:20,depth:20},{id:"plot-045",x:-242,z:189,facing:0,width:20,depth:20},{id:"plot-046",x:-770,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-047",x:-746,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-048",x:-722,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-049",x:-698,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-050",x:-674,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-051",x:-626,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-052",x:-578,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-053",x:-554,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-054",x:-530,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-055",x:-506,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-056",x:-482,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-057",x:-458,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-058",x:-434,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-059",x:-386,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-060",x:-362,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-061",x:-338,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-064",x:-266,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-065",x:-242,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-066",x:-770,z:239,facing:0,width:20,depth:20},{id:"plot-067",x:-746,z:239,facing:0,width:20,depth:20},{id:"plot-068",x:-722,z:239,facing:0,width:20,depth:20},{id:"plot-069",x:-698,z:239,facing:0,width:20,depth:20},{id:"plot-070",x:-674,z:239,facing:0,width:20,depth:20},{id:"plot-071",x:-626,z:239,facing:0,width:20,depth:20},{id:"plot-072",x:-578,z:239,facing:0,width:20,depth:20},{id:"plot-073",x:-554,z:239,facing:0,width:20,depth:20},{id:"plot-074",x:-458,z:239,facing:0,width:20,depth:20},{id:"plot-075",x:-434,z:239,facing:0,width:20,depth:20},{id:"plot-076",x:-386,z:239,facing:0,width:20,depth:20},{id:"plot-077",x:-362,z:239,facing:0,width:20,depth:20},{id:"plot-078",x:-338,z:239,facing:0,width:20,depth:20},{id:"plot-081",x:-266,z:239,facing:0,width:20,depth:20},{id:"plot-082",x:-242,z:239,facing:0,width:20,depth:20},{id:"plot-083",x:-770,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-084",x:-746,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-085",x:-722,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-086",x:-698,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-087",x:-674,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-088",x:-626,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-089",x:-578,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-090",x:-554,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-091",x:-458,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-092",x:-434,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-093",x:-386,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-094",x:-362,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-095",x:-338,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-096",x:-314,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-097",x:-290,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-098",x:-266,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-099",x:-242,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-100",x:-770,z:289,facing:0,width:20,depth:20},{id:"plot-101",x:-746,z:289,facing:0,width:20,depth:20},{id:"plot-102",x:-722,z:289,facing:0,width:20,depth:20},{id:"plot-103",x:-698,z:289,facing:0,width:20,depth:20},{id:"plot-104",x:-674,z:289,facing:0,width:20,depth:20},{id:"plot-105",x:-626,z:289,facing:0,width:20,depth:20},{id:"plot-106",x:-578,z:289,facing:0,width:20,depth:20},{id:"plot-107",x:-554,z:289,facing:0,width:20,depth:20},{id:"plot-108",x:-530,z:289,facing:0,width:20,depth:20},{id:"plot-109",x:-506,z:289,facing:0,width:20,depth:20},{id:"plot-110",x:-482,z:289,facing:0,width:20,depth:20},{id:"plot-111",x:-458,z:289,facing:0,width:20,depth:20},{id:"plot-112",x:-434,z:289,facing:0,width:20,depth:20},{id:"plot-113",x:-386,z:289,facing:0,width:20,depth:20},{id:"plot-114",x:-362,z:289,facing:0,width:20,depth:20},{id:"plot-115",x:-338,z:289,facing:0,width:20,depth:20},{id:"plot-116",x:-314,z:289,facing:0,width:20,depth:20},{id:"plot-117",x:-290,z:289,facing:0,width:20,depth:20},{id:"plot-118",x:-266,z:289,facing:0,width:20,depth:20},{id:"plot-119",x:-242,z:289,facing:0,width:20,depth:20}],villagePaths:[{x0:-787,x1:-539,z0:149,z1:155,width:6},{x0:-427,x1:-212,z0:149,z1:155,width:6},{x0:-787,x1:-212,z0:199,z1:205,width:6},{x0:-787,x1:-212,z0:249,z1:255,width:6},{x0:-787,x1:-212,z0:299,z1:305,width:6},{x0:-652,x1:-648,z0:124,z1:308,width:4},{x0:-412,x1:-408,z0:124,z1:308,width:4},{x0:-215,x1:-209,z0:116,z1:320,width:6},{x0:-215,x1:-168,z0:199,z1:205,width:6},{x0:-174,x1:-168,z0:112,z1:202,width:6},{x0:-793,x1:-787,z0:116,z1:320,width:6},{x0:-793,x1:-209,z0:116,z1:122,width:6},{x0:-793,x1:-209,z0:314,z1:320,width:6},{x0:-304,x1:-298,z0:202,z1:227,width:6}],villagePlaza:{x:-301,z:227,r:17},villageWater:{stream:{width:8,points:[[-403.4,171],[-403.3,151],[-403.3,135],[-404,122],[-404,111],[-394,100],[-369,97],[-340,101],[-318,99],[-285,95],[-257,100],[-233,99],[-212,104],[-201,112],[-199,127],[-202,135],[-211,139],[-218,143],[-224,150],[-224.7,168],[-221,182],[-220,193],[-220.6,198],[-222.1,200],[-224.2,203],[-224.9,206],[-224.9,210],[-222.6,215],[-220,219],[-212,226],[-202,231],[-185,232],[-169,236],[-157,243],[-154,270],[-166,284],[-182,291],[-193,303],[-204,313],[-218,313],[-230,323],[-239,337],[-260,343],[-268,352],[-280,359],[-295,363],[-307,356],[-316,338],[-343,339],[-365,344],[-390,342],[-403,331],[-403.3,316],[-403.3,300],[-403.3,267],[-403.4,242]]},bridges:[{x:-403.31,z:152,length:11,width:7.4,axis:"x"},{x:-223,z:152,length:13,width:7.4,axis:"x"},{x:-212,z:139.6,length:15,width:7.4,axis:"z"},{x:-222.75,z:202,length:16,width:7.4,axis:"x"},{x:-212,z:225.1,length:17,width:7.4,axis:"z"},{x:-212,z:313,length:11,width:7.4,axis:"z"},{x:-403.3,z:302,length:11,width:7.4,axis:"x"},{x:-403.36,z:252,length:11,width:7.4,axis:"x"}],ponds:[{x:-403.4,z:171,rx:4.4,rz:6},{x:-403.4,z:242,rx:4.4,rz:6}]},villageDecor:[{type:"wooden-bridge",x:-403.31,z:152,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-223,z:152,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-212,z:139.6,rot:0,scale:1},{type:"wooden-bridge",x:-222.75,z:202,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-212,z:225.1,rot:0,scale:1},{type:"wooden-bridge",x:-212,z:313,rot:0,scale:1},{type:"wooden-bridge",x:-403.3,z:302,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-403.36,z:252,rot:1.5707963267948966,scale:1},{type:"gazebo",x:-301,z:235,rot:0,scale:1},{type:"picnic-table",x:-292,z:237,rot:0,scale:1},{type:"picnic-table",x:-309,z:219,rot:0,scale:1},{type:"stone-well",x:-313,z:236,rot:0,scale:1},{type:"signpost",x:-220,z:207,rot:0,scale:1},{type:"rose-arch",x:-228,z:202,rot:1.5707963267948966,scale:1},{type:"windmill",x:-738,z:343,rot:0,scale:1.2},{type:"duck-family",x:-421.5,z:284,rot:0,scale:1},{type:"mushroom-stump",x:-415.5,z:310,rot:0,scale:1},{type:"wildflowers",x:-413.5,z:308,rot:0,scale:1},{type:"tree-pine",x:-774,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-774,z:110,rot:0,scale:.9},{type:"tree-pine",x:-750,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-750,z:110,rot:0,scale:.9},{type:"tree-pine",x:-726,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-726,z:110,rot:0,scale:.9},{type:"tree-pine",x:-702,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-702,z:110,rot:0,scale:.9},{type:"tree-pine",x:-678,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-678,z:110,rot:0,scale:.9},{type:"tree-pine",x:-654,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-654,z:110,rot:0,scale:.9},{type:"tree-pine",x:-630,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-630,z:110,rot:0,scale:.9},{type:"tree-pine",x:-606,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-606,z:110,rot:0,scale:.9},{type:"tree-pine",x:-582,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-582,z:110,rot:0,scale:.9},{type:"tree-pine",x:-558,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-558,z:110,rot:0,scale:.9},{type:"tree-pine",x:-534,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-534,z:110,rot:0,scale:.9},{type:"tree-pine",x:-510,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-510,z:110,rot:0,scale:.9},{type:"tree-pine",x:-486,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-486,z:110,rot:0,scale:.9},{type:"tree-pine",x:-462,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-462,z:110,rot:0,scale:.9},{type:"tree-pine",x:-438,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-438,z:110,rot:0,scale:.9},{type:"tree-pine",x:-414,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-414,z:110,rot:0,scale:.9},{type:"tree-pine",x:-390,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-390,z:110,rot:0,scale:.9},{type:"tree-pine",x:-366,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-366,z:110,rot:0,scale:.9},{type:"tree-pine",x:-342,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-342,z:110,rot:0,scale:.9},{type:"tree-pine",x:-318,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-318,z:110,rot:0,scale:.9},{type:"tree-pine",x:-294,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-294,z:110,rot:0,scale:.9},{type:"tree-pine",x:-270,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-270,z:110,rot:0,scale:.9},{type:"tree-pine",x:-246,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-246,z:110,rot:0,scale:.9},{type:"tree-pine",x:-222,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-222,z:110,rot:0,scale:.9},{type:"tree-oak",x:-798,z:138,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:180,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:222,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:264,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:306,rot:0,scale:1.2},{type:"flower-bed",x:-421.5,z:141,rot:0,scale:1},{type:"flower-bed",x:-416.5,z:273,rot:0,scale:1},{type:"flower-bed",x:-415.5,z:295,rot:0,scale:1},{type:"flower-bed",x:-313,z:241,rot:0,scale:1},{type:"flower-bed",x:-289,z:241,rot:0,scale:1},{type:"tree-apple",x:-417,z:146,rot:0,scale:.72},{type:"tree-oak",x:-417,z:169,rot:0,scale:.72},{type:"tree-pine",x:-417,z:187,rot:0,scale:.72},{type:"tree-oak",x:-417,z:227,rot:0,scale:.72},{type:"tree-apple",x:-417,z:266,rot:0,scale:.72},{type:"tree-blossom",x:-350,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-350,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-326,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-326,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-302,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-302,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-278,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-278,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:170,rot:0,scale:.5693571957260253},{type:"tree-apple",x:-350,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-350,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:194,rot:0,scale:.9119039947474329},{type:"tree-oak",x:-374,z:210,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-374,z:220,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-350,z:210,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-350,z:220,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:210,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:220,rot:0,scale:.4871569197392736},{type:"tree-blossom",x:-374,z:234,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-374,z:244,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-350,z:234,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-350,z:244,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:234,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:244,rot:0,scale:.5693571957260253},{type:"tree-apple",x:-350,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-350,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:270,rot:0,scale:.9119039947474329},{type:"tree-oak",x:-350,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-350,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-326,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-326,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-302,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-302,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-278,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-278,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:294,rot:0,scale:.4871569197392736}],plazaExcludedPlots:[{id:"plot-062",x:-314,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-063",x:-290,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-079",x:-314,z:239,facing:0,width:20,depth:20},{id:"plot-080",x:-290,z:239,facing:0,width:20,depth:20}],retiredPlaza:{x:-506,z:252,r:17},villageGate:{x:-402,z:202},stablePrecinct:[-787,-215,122,314],trainingRings:[{x:-483,z:158,rx:44,rz:24}],spawn:[225,95],publicBounds:[-800,330,-440,420],lobbyProps:[{type:"machine",x:-64,z:111.5,w:1.1,d:.8},{type:"machine",x:-62.4,z:111.5,w:1.1,d:.8},{type:"machine",x:-60.8,z:111.5,w:1.1,d:.8},{type:"machine",x:-59.2,z:111.5,w:1.1,d:.8},{type:"machine",x:-57.6,z:111.5,w:1.1,d:.8},{type:"machine",x:-56,z:111.5,w:1.1,d:.8},{type:"machine",x:-10,z:111.5,w:1.1,d:.8},{type:"machine",x:-8.4,z:111.5,w:1.1,d:.8},{type:"machine",x:-6.8,z:111.5,w:1.1,d:.8},{type:"machine",x:-5.199999999999999,z:111.5,w:1.1,d:.8},{type:"machine",x:-3.5999999999999996,z:111.5,w:1.1,d:.8},{type:"machine",x:-2,z:111.5,w:1.1,d:.8},{type:"machine",x:40,z:111.5,w:1.1,d:.8},{type:"machine",x:41.6,z:111.5,w:1.1,d:.8},{type:"machine",x:43.2,z:111.5,w:1.1,d:.8},{type:"machine",x:44.8,z:111.5,w:1.1,d:.8},{type:"machine",x:46.4,z:111.5,w:1.1,d:.8},{type:"machine",x:48,z:111.5,w:1.1,d:.8},{type:"machine",x:60,z:111.5,w:1.1,d:.8},{type:"machine",x:61.6,z:111.5,w:1.1,d:.8},{type:"machine",x:63.2,z:111.5,w:1.1,d:.8},{type:"machine",x:64.8,z:111.5,w:1.1,d:.8},{type:"machine",x:66.4,z:111.5,w:1.1,d:.8},{type:"machine",x:68,z:111.5,w:1.1,d:.8},{type:"desk",x:-60,z:79,w:3,d:1.2},{type:"desk",x:-36,z:79,w:3,d:1.2},{type:"desk",x:-12,z:79,w:3,d:1.2},{type:"desk",x:12,z:79,w:3,d:1.2},{type:"desk",x:36,z:79,w:3,d:1.2},{type:"desk",x:60,z:79,w:3,d:1.2},{type:"desk",x:-60,z:93,w:3,d:1.2},{type:"desk",x:-36,z:93,w:3,d:1.2},{type:"desk",x:-12,z:93,w:3,d:1.2},{type:"desk",x:12,z:93,w:3,d:1.2},{type:"desk",x:36,z:93,w:3,d:1.2},{type:"desk",x:60,z:93,w:3,d:1.2},{type:"bench",x:-70,z:63.5,w:4,d:.8},{type:"bench",x:-70,z:66.5,w:4,d:.8},{type:"bench",x:-65.5,z:63.5,w:4,d:.8},{type:"bench",x:-65.5,z:66.5,w:4,d:.8},{type:"bench",x:-61,z:63.5,w:4,d:.8},{type:"bench",x:-61,z:66.5,w:4,d:.8},{type:"bench",x:-38,z:63.5,w:4,d:.8},{type:"bench",x:-38,z:66.5,w:4,d:.8},{type:"bench",x:-33.5,z:63.5,w:4,d:.8},{type:"bench",x:-33.5,z:66.5,w:4,d:.8},{type:"bench",x:-29,z:63.5,w:4,d:.8},{type:"bench",x:-29,z:66.5,w:4,d:.8},{type:"bench",x:-24.5,z:63.5,w:4,d:.8},{type:"bench",x:-24.5,z:66.5,w:4,d:.8},{type:"bench",x:-20,z:63.5,w:4,d:.8},{type:"bench",x:-20,z:66.5,w:4,d:.8},{type:"bench",x:-15.5,z:63.5,w:4,d:.8},{type:"bench",x:-15.5,z:66.5,w:4,d:.8},{type:"bench",x:-11,z:63.5,w:4,d:.8},{type:"bench",x:-11,z:66.5,w:4,d:.8},{type:"bench",x:10,z:63.5,w:4,d:.8},{type:"bench",x:10,z:66.5,w:4,d:.8},{type:"bench",x:14.5,z:63.5,w:4,d:.8},{type:"bench",x:14.5,z:66.5,w:4,d:.8},{type:"bench",x:19,z:63.5,w:4,d:.8},{type:"bench",x:19,z:66.5,w:4,d:.8},{type:"bench",x:23.5,z:63.5,w:4,d:.8},{type:"bench",x:23.5,z:66.5,w:4,d:.8},{type:"bench",x:28,z:63.5,w:4,d:.8},{type:"bench",x:28,z:66.5,w:4,d:.8},{type:"bench",x:32.5,z:63.5,w:4,d:.8},{type:"bench",x:32.5,z:66.5,w:4,d:.8},{type:"bench",x:37,z:63.5,w:4,d:.8},{type:"bench",x:37,z:66.5,w:4,d:.8},{type:"bench",x:58,z:63.5,w:4,d:.8},{type:"bench",x:58,z:66.5,w:4,d:.8},{type:"bench",x:62.5,z:63.5,w:4,d:.8},{type:"bench",x:62.5,z:66.5,w:4,d:.8},{type:"bench",x:67,z:63.5,w:4,d:.8},{type:"bench",x:67,z:66.5,w:4,d:.8},{type:"info",x:0,z:69,w:6,d:1.6},{type:"snack",x:-71.5,z:100,w:2.4,d:10},{type:"plant",x:-6,z:62,w:1,d:1},{type:"plant",x:6,z:62,w:1,d:1},{type:"plant",x:-53,z:62,w:1,d:1},{type:"plant",x:-41,z:62,w:1,d:1},{type:"plant",x:41,z:62,w:1,d:1},{type:"plant",x:53,z:62,w:1,d:1},{type:"plant",x:-74,z:62,w:1,d:1},{type:"plant",x:74,z:62,w:1,d:1},{type:"plant",x:-23,z:110,w:1,d:1},{type:"plant",x:-11,z:105,w:1,d:1},{type:"plant",x:47,z:110,w:1,d:1},{type:"plant",x:59,z:105,w:1,d:1},{type:"monitor",x:-48,z:79,w:0,d:0,y:10.2},{type:"monitor",x:-24,z:79,w:0,d:0,y:10.2},{type:"monitor",x:0,z:79,w:0,d:0,y:10.2},{type:"monitor",x:24,z:79,w:0,d:0,y:10.2},{type:"monitor",x:48,z:79,w:0,d:0,y:10.2},{type:"monitor",x:-48,z:93,w:0,d:0,y:10.2},{type:"monitor",x:-24,z:93,w:0,d:0,y:10.2},{type:"monitor",x:0,z:93,w:0,d:0,y:10.2},{type:"monitor",x:24,z:93,w:0,d:0,y:10.2},{type:"monitor",x:48,z:93,w:0,d:0,y:10.2}],pois:{counsel:[176,58,3.141592653589793,22],overview:[205,120,.6,60],stand:[0,38,3.141592653589793,18],paddock:[38,194,3.141592653589793,30],path:[140,86,1.5707963267948966,22],track:[28,34,3.141592653589793,18],betting:[-40,104,0,10],plaza:[214,95,0,30]}};var so=ue.villageWater,{stream:Ci,ponds:Cr,bridges:Ha}=so,Vt=[],Ga=0;for(let s=1;s<Ci.points.length;s++){let[e,t]=Ci.points[s-1],[n,i]=Ci.points[s],r=n-e,o=i-t,a=Math.hypot(r,o);Vt.push({x:e,z:t,dx:r/a,dz:o/a,size:a,start:Ga}),Ga+=a}var ro=Ci.points.map(([s,e],t)=>{let n=Vt[Math.max(0,t-1)],i=Vt[Math.min(t,Vt.length-1)],o=(t===0?Cr[0].rx:t===Vt.length?Cr[1].rx:Ci.width/2)/(1+n.dx*i.dx+n.dz*i.dz),a=-(n.dz+i.dz)*o,l=(n.dx+i.dx)*o;return{center:{x:s,z:e},left:{x:s+a,z:e+l},right:{x:s-a,z:e-l}}});function Va(s,e,t){let{center:n}=ro[s],i=Vt[s===0?0:Vt.length-1];return Array.from({length:15},(r,o)=>{let a=(o+1)*Math.PI/16,l=t.rx*Math.cos(a),c=e*t.rz*Math.sin(a);return{x:n.x+c*i.dx-l*i.dz,z:n.z+c*i.dz+l*i.dx}})}var Wa=[Va(0,-1,Cr[0]),Va(Vt.length,1,Cr[1])],Rr=[...ro.map(s=>s.left),...Wa[1],...ro.map(s=>s.right).reverse(),...Wa[0].slice().reverse()],io=new Map;for(let s=0;s<Rr.length;s++){let e=Rr[s],t=Rr[(s+1)%Rr.length];for(let n=Math.floor(Math.min(e.z,t.z)/8);n<=Math.floor(Math.max(e.z,t.z)/8);n++)io.has(n)||io.set(n,[]),io.get(n).push([e,t])}var ig={x:Ha.at(-1).x+6.4,z:Ha.at(-1).z};var sg=Math.PI*2;function Xa(s){let e=s.k,t=s.turnRadius,n=s.straight,i=s.goalX+s.goalBeforeEnd,r=i-n,o=s.homeZ-t,a=s.innerRadius,l=s.innerStraight;return{...s,rightX:i,leftX:r,cz:o,backZ:s.homeZ-2*t,iHomeZ:o+a,iBackZ:o-a,iRightX:r+l,crossEndX:r+s.crossLength}}function qn(s,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e.x-s.x,e.z-s.z)/t));return Array.from({length:n+1},(i,r)=>({x:s.x+(e.x-s.x)*r/n,z:s.z+(e.z-s.z)*r/n}))}function Pr(s,e,t,n,i){let r=Math.max(2,Math.ceil(Math.abs(n-t)*e/i));return Array.from({length:r+1},(o,a)=>{let l=t+(n-t)*a/r;return{x:s.x+e*Math.cos(l),z:s.z+e*Math.sin(l)}})}function N3(s,e,t){let n=Math.max(2,Math.ceil(Math.hypot(e.x-s.x,e.z-s.z)/t));return Array.from({length:n+1},(i,r)=>{let o=r/n,a=o*o*(3-2*o);return{x:s.x+(e.x-s.x)*o,z:s.z+(e.z-s.z)*a}})}function Ir(...s){let e=[];for(let t of s)for(let n of t){let i=e.at(-1);(!i||Math.hypot(i.x-n.x,i.z-n.z)>1e-6)&&e.push(n)}return e}function F3(s,e=.5){let t=(n,i)=>({x:n,z:i});return{home:qn(t(s.leftX,s.homeZ),t(s.rightX,s.homeZ),e),homeFromCross:qn(t(s.crossEndX,s.homeZ),t(s.rightX,s.homeZ),e),rightTurn:Pr(t(s.rightX,s.cz),s.turnRadius,Math.PI/2,-Math.PI/2,e),back:qn(t(s.rightX,s.backZ),t(s.leftX,s.backZ),e),leftTurn:Pr(t(s.leftX,s.cz),s.turnRadius,-Math.PI/2,-Math.PI*1.5,e),chute1600:qn(t(s.rightX+s.chute1600,s.backZ),t(s.rightX,s.backZ),e),iHome:qn(t(s.leftX,s.iHomeZ),t(s.iRightX,s.iHomeZ),e),iRight:Pr(t(s.iRightX,s.cz),s.innerRadius,Math.PI/2,-Math.PI/2,e),iBack:qn(t(s.iRightX,s.iBackZ),t(s.leftX,s.iBackZ),e),iLeft:Pr(t(s.leftX,s.cz),s.innerRadius,-Math.PI/2,-Math.PI*1.5,e),cross:N3(t(s.leftX,s.iHomeZ),t(s.crossEndX,s.homeZ),e)}}function Pi(s,e=!1){let t=e&&Math.hypot(s[0].x-s.at(-1).x,s[0].z-s.at(-1).z)<1e-6?s.slice(0,-1):s,n=t.length,i=e?n:n-1,r=[0];for(let a=0;a<i;a++){let l=t[a],c=t[(a+1)%n];r.push(r.at(-1)+Math.hypot(c.x-l.x,c.z-l.z))}let o=t.map((a,l)=>{let c=t[e?(l-1+n)%n:Math.max(0,l-1)],u=t[e?(l+1)%n:Math.min(n-1,l+1)],h=u.x-c.x,d=u.z-c.z,f=Math.hypot(h,d)||1;return{x:-d/f,z:h/f}});return{points:t,lengths:r,normals:o,total:r.at(-1),closed:e}}function oo(s,e,t=0){let{points:n,lengths:i,normals:r,total:o,closed:a}=s,l=n.length,c=a?(e%o+o)%o:Math.max(0,Math.min(o,e)),u=0,h=i.length-1;for(;u+1<h;){let L=u+h>>1;i[L]<=c?u=L:h=L}let d=u,f=a?(d+1)%l:Math.min(l-1,d+1),p=n[d],m=n[f],_=i[d+1]-i[d]||1,y=Math.max(0,Math.min(1,(c-i[d])/_)),w=m.x-p.x,S=m.z-p.z,b=Math.hypot(w,S)||1,E=r[d].x+(r[f].x-r[d].x)*y,P=r[d].z+(r[f].z-r[d].z)*y,C=Math.hypot(E,P)||1;return E/=C,P/=C,{x:p.x+w*y+E*t,z:p.z+S*y+P*t,heading:Math.atan2(w,S)+Math.PI,nx:E,nz:P,s:c}}function zr(s,e){let t=1/0,n=0,{points:i,lengths:r,closed:o}=s,a=i.length,l=o?a:a-1;for(let c=0;c<l;c++){let u=i[c],h=i[(c+1)%a],d=h.x-u.x,f=h.z-u.z,p=d*d+f*f||1,m=Math.max(0,Math.min(1,((e.x-u.x)*d+(e.z-u.z)*f)/p)),_=u.x+d*m,y=u.z+f*m,w=(_-e.x)**2+(y-e.z)**2;w<t&&(t=w,n=r[c]+Math.sqrt(p)*m)}return n}function qa(s,e=.5){let t=F3(s,e),n=Pi(Ir(t.home,t.rightTurn,t.back,t.leftTurn),!0),i=Pi(Ir(t.iHome,t.iRight,t.iBack,t.iLeft),!0),r=Pi(Ir(t.chute1600,t.back,t.leftTurn,t.home,t.rightTurn)),o=Pi(Ir(t.iHome,t.iRight,t.iBack,t.iLeft,t.cross,t.homeFromCross,t.rightTurn)),a={x:s.goalX,z:s.homeZ};return{pieces:t,outerLoop:n,innerLoop:i,outer:{path:r,goalS:zr(r,a)},inner:{path:o,goalS:zr(o,a)}}}var Ya=Xa(ue.geometry),Lr=qa(Ya,.5),U3=ue.lanePitch;function O3(s){let e=1/0,t=-1/0;for(let i of s)e=Math.min(e,i.z),t=Math.max(t,i.z);let n=Array.from({length:Math.floor(t-e)+1},()=>[]);for(let i=0,r=s.length-1;i<s.length;r=i++){let o=s[i],a=s[r];for(let l=Math.floor(Math.min(o.z,a.z)-e);l<=Math.floor(Math.max(o.z,a.z)-e);l++)n[l].push(o,a)}return{z0:e,z1:t,bands:n}}var B3=(ue.railOuterLane+1)*U3,k3=Lr.outerLoop.points.map((s,e)=>oo(Lr.outerLoop,Lr.outerLoop.lengths[e],B3)),ug=O3(k3);var xg=Math.PI*2;var H3=ue.trainingRings[0],{x:ln,z:Wt,rx:co,rz:ft}=H3,G3=Object.freeze({x:ln,z:Wt+ft*.8}),Za=Object.freeze({id:"training-ring",name:"\uD6C8\uB828\uC18C",icon:"\u{1F3C7}",x:ln+5,z:Wt+ft+1,y:2.2,sign:{x:ln+5,z:Wt+ft+1},approach:{x:ln,z:Wt+ft+2}});var Ja=s=>Math.abs(s.x-ln)<4.6&&s.z>=Wt+ft-1.1&&s.z<=Wt+ft+5,V3=(s,e,t)=>((s.x-ln)/e)**2+((s.z-Wt)/t)**2,W3=s=>Math.abs(s.x-ln)<=co+1.8&&Math.abs(s.z-Wt)<=ft+5,uo=s=>W3(s)&&(V3(s,co+1.8,ft+1.8)<=1||Ja(s));var X3=co-ft*.2,q3=ft*.8,ao=360,lo=[0];for(let s=1;s<=ao;s++){let e=(s-1)*2*Math.PI/ao,t=s*2*Math.PI/ao;lo.push(lo[s-1]+Math.hypot(X3*(Math.sin(t)-Math.sin(e)),q3*(Math.cos(t)-Math.cos(e))))}var vg=lo.at(-1);var cn=Object.freeze({x:-301,z:227}),Y3=88.8,Z3=-421.5,J3=2.45,$a=Z3-J3,Ii=Object.freeze({id:"playground",name:"\uB180\uC774\uD130",closed:!1,x0:-492,x1:$a,z0:182,z1:223}),wg=Object.freeze({x:-466,z:188}),Sg=Object.freeze({x:-438,z:205}),Eg=Object.freeze([[-434,206],[-451,196],[-485,216]].map(([s,e])=>({x:s,z:e,rotation:0}))),Ag=Object.freeze({x:-443,z:212});function ho({x:s,z:e}){return s>=Ii.x0&&s<=Ii.x1&&e>=Ii.z0&&e<=Ii.z1}var $3=Object.freeze([{id:"west-bank",name:"\uAC1C\uC6B8 \uAC74\uB108",closed:!0,x0:-810,x1:$a,z0:86,z1:420},{id:"central-blocks",name:"\uC9D1\uD130 \uC0AC\uC774 \uACE8\uBAA9\uACFC \uC61B \uD6C8\uB828\uC7A5",closed:!0,x0:-599,x1:-426,z0:124,z1:312},Ii]),fo=$3.filter(s=>s.closed);function Dr({x:s,z:e},t=fo){return!ho({x:s,z:e})&&!uo({x:s,z:e})&&t.some(({x0:n,x1:i,z0:r,z1:o})=>s>=n&&s<=i&&e>=r&&e<=o)}var K3=Object.freeze(["plot-062","plot-063","plot-079","plot-080"]);function j3(s){return Math.hypot(s.x-cn.x,s.z-cn.z)}function Nr(s,e=[]){if(!s||ho(s)||Dr(s)||K3.includes(s.id))return!1;let t=e instanceof Set?e:new Set(e);return j3(s)<=Y3||t.has(s.id)}function Ka(s,e=[]){let t=e instanceof Set?e:new Set(e);return(s||[]).filter(n=>Nr(n,t))}function ja(s={},e=[]){let t=Ka(s.stablePlots||[],e),n=[],i=fo.find(r=>r.id==="west-bank");for(let r of s.villagePaths||[]){let o=r.x1-r.x0>r.z1-r.z0,a=o?r.x0:Math.abs((r.x0+r.x1)/2+171)<1?108:r.z0,l=o?r.x1:r.z1,c=o?(r.z0+r.z1)/2:(r.x0+r.x1)/2;if(o&&(c<124||c>310))continue;let u=Math.ceil((l-a)/4);for(let h=0;h<u;h++){let d=a+(l-a)*h/u,f=a+(l-a)*(h+1)/u,p=o?(d+f)/2:c,m=o?c:(d+f)/2,_=!o&&[-650,-410].some(E=>Math.abs(p-E)<1),y=o&&m>=149&&m<=305&&p>=-654&&p<=-406,w=o&&Math.abs(m-202)<1||p>=-223||_||y,S=(s.villageWater?.bridges||[]).some(E=>Math.abs(m-E.z)<(E.axis==="z"?E.length:E.width)/2+2&&Math.abs(p-E.x)<(E.axis==="x"?E.length:E.width)/2+2),b=t.some(E=>Math.abs(p-E.x)<22&&Math.abs(m-E.z)<22)||!!s.villagePlaza&&Math.hypot(p-s.villagePlaza.x,m-s.villagePlaza.z)<30;if(w||S||b)if(o&&Math.abs(m-202)<1&&i&&d<i.x1&&f>-442){let E=Math.max(d,-442);n.push({x:(E+f)/2,z:m,w:f-E+.025,d:r.z1-r.z0})}else o&&i&&m>=i.z0&&m<=i.z1&&d<=i.x1?f>i.x1&&n.push({x:(f+i.x1)/2,z:m,w:f-i.x1,d:r.z1-r.z0}):Dr({x:p,z:m})||n.push({x:p,z:m,w:o?f-d+.025:r.x1-r.x0,d:o?r.z1-r.z0:f-d+.025})}}return n}var Qa=[19339965,19339966,19347841,19347842,19347965,19347966,19355841,19355842,19532779,19532780,19532781,19540779,19540780,19540781,19595693,19603555,19603556,19603692,19603693,19603694,19611555,19611693,19611877,19611878,19619877,19619878,19628071,19628072,19636071,19636072,19692746,19692747,19700746,19795177,19803177,19835355,19835356,19843355,19843356,19947866,19947867,19955866,19955867,20019167,20019168,20027167,20027168,20244658,20244659,20251350,20251351,20252658,20252659,20259350,20363586,20363587,20371586,20371587,20403230,20403231,20411231,20572724,20572725,20579538,20579539,20580724,20580725,20611580,20611581,20611582,20619581,20899851,20899852,20907850,20907851,20907852,21180081,21180082,21180083,21188082,21235404,21243403,21243404,21491509,21499508,21499509,21499510,21507509,21588025,21596025,21596026,21604025,21731336,21731337,21739336,21739337,21859329,21859330,21867329,21867330,21900053,21908052,21908053,21923679,21923680,21931679,21931680,21987301,21987302,21995302,22203272,22203273,22203274,22211273,22283329,22291328,22291329,22323345,22323346,22331345,22331346,22363934,22363935,22371934,22371935,22667936,22667937,22675936,22675937,22683937,22875987,22875988,22883987,22883988,23036737,23044737,23444125,23452124,23452125,23452126,23460125,23588126,23588127,23596126,23596127,23660771,23660772,23668771,24035196,24035197,24043196,24043197,24203211,24203212,24211211,24211212,24732094,24732095,24740094,24740095,24908124,24908125,24908126,24916125,25124803,25124804,25163212,25371218,25371219,25379219,25556062,25556063,25564062,25564063,25667131,25667132,25675131,25675132,25827228,25827229,25835227,25835228,25835229,25964755,25972754,25972755,25972756,25980755,26204066,26204067,26212066,26212067,26316827,26316828,26324827,26324828,26388789,26388790,26396789,26468739,26468740,26476738,26476739,26476740,26812689,26812690,26820689,26820690,26844678,26844679,26844680,26852678,26852679,27484121,27484122,27492120,27492121,27492122,27500121,27844729,27844730,27844731,27852730,27852731,27947275,27947276,27955275,27955276,28035196,28035197,28043195,28043196,28043197,28051196,28123284,28123285,28131284,28131285,28372084,28372085,28380084,28380085,28451238,28451239,28459238,28459239,28459240,28467239,28516179,28516180,28524179,28524180,28564073,28564074,28572073,28572074,28668749,28668750,28676749,28676750,28708717,28716716,28716717,28724717,28740792,28740793,28740794,28748792,28748793,28748794,28820171,28820172,28828171,28828172,28868250,28868251,28876250,28876251,28948132,28948133,28948210,28948211,28956132,28956133,28956210,28956211,29084066,29084067,29092066,29092067,29124631,29124632,29132631,29132632,29188704,29188705,29196704,29196705,29260116,29260117,29260226,29260227,29268116,29268117,29268226,29268227,29300733,29300734,29308732,29308733,29308734,29316733,29420750,29428749,29428750,29436750,29572132,29572133,29572210,29572211,29580132,29580133,29580210,29580211,29700171,29700172,29708171,29708172,29740647,29740648,29748647,29748648,30460659,30460660,30460661,30468659,30468660,30468661,30500286,30500287,30508286,30508287,30643235,30643236,30651235,30651236,30764097,30764098,30764099,30764100,30764101,30764102,30764103,30764104,30764105,30764106,30764107,30764108,30764109,30764110,30764111,30764112,30764113,30764114,30764115,30764116,30764117,30764118,30764119,30764120,30764121,30764122,30764123,30764124,30764125,30764126,30764127,30764128,30764129,30764130,30764131,30764132,30764133,30764134,30764135,30764136,30764137,30764138,30764139,30764140,30764141,30764142,30764143,30764144,30764145,30764146,30764147,30764148,30764149,30764150,30764151,30764152,30764153,30764154,30764155,30764156,30764157,30764158,30764159,30764160,30764161,30764162,30764163,30764164,30764165,30764166,30764167,30764168,30764169,30764170,30764171,30764172,30764173,30764174,30764175,30764176,30764177,30764178,30764179,30764180,30764181,30764182,30764183,30764184,30764185,30764186,30764187,30764188,30764189,30764190,30764191,30764192,30764193,30764194,30764195,30764196,30764197,30764198,30764199,30764200,30764201,30764202,30764203,30764204,30764205,30764206,30764207,30764208,30764209,30764210,30764211,30764212,30764213,30764214,30764215,30764216,30764217,30764218,30764219,30764220,30764221,30764222,30764223,30764224,30764225,30772094,30772095,30772096,30772097,30772098,30772099,30772100,30772101,30772102,30772103,30772104,30772105,30772106,30772107,30772108,30772109,30772110,30772111,30772112,30772113,30772114,30772226,30780094,30780095,30780096,30780097,30780098,30780099,30780100,30780101,30780102,30780103,30780104,30780105,30780106,30780107,30780108,30780109,30780110,30780111,30780112,30780113,30780114,30780226,30788094,30788095,30788096,30788097,30788098,30788099,30788100,30788101,30788102,30788103,30788104,30788105,30788106,30788107,30788108,30788109,30788110,30788111,30788112,30788113,30788114,30788226,30795261,30795262,30796094,30796095,30796096,30796097,30796098,30796099,30796100,30796101,30796102,30796103,30796104,30796105,30796106,30796107,30796108,30796109,30796110,30796111,30796112,30796113,30796114,30796226,30803261,30804094,30804095,30804096,30804097,30804098,30804099,30804100,30804101,30804102,30804103,30804104,30804105,30804106,30804107,30804108,30804109,30804110,30804111,30804112,30804113,30804114,30804226,30812094,30812095,30812096,30812097,30812098,30812099,30812100,30812101,30812102,30812103,30812104,30812105,30812106,30812107,30812108,30812109,30812110,30812111,30812112,30812113,30812114,30812226,30820094,30820095,30820096,30820097,30820098,30820099,30820100,30820101,30820102,30820103,30820104,30820105,30820106,30820107,30820108,30820109,30820110,30820111,30820112,30820113,30820114,30820226,30828094,30828095,30828096,30828097,30828098,30828099,30828100,30828101,30828102,30828103,30828104,30828105,30828106,30828107,30828108,30828109,30828110,30828111,30828112,30828113,30828114,30828226,30836094,30836095,30836096,30836097,30836098,30836099,30836100,30836101,30836102,30836103,30836104,30836105,30836106,30836107,30836108,30836109,30836110,30836111,30836112,30836113,30836114,30836226,30844094,30844095,30844096,30844097,30844098,30844099,30844100,30844101,30844102,30844103,30844104,30844105,30844106,30844107,30844108,30844109,30844110,30844111,30844112,30844113,30844114,30844226,30852094,30852095,30852096,30852097,30852098,30852099,30852100,30852101,30852102,30852103,30852104,30852105,30852106,30852107,30852108,30852109,30852110,30852111,30852112,30852113,30852114,30852226,30860094,30860095,30860096,30860097,30860098,30860099,30860100,30860101,30860102,30860103,30860104,30860105,30860106,30860107,30860108,30860109,30860110,30860111,30860112,30860113,30860114,30860226,30868094,30868095,30868096,30868097,30868098,30868099,30868100,30868101,30868102,30868103,30868104,30868105,30868106,30868107,30868108,30868109,30868110,30868111,30868112,30868113,30868114,30868226,30868818,30876094,30876095,30876096,30876097,30876098,30876099,30876100,30876101,30876102,30876103,30876104,30876105,30876106,30876107,30876108,30876109,30876110,30876111,30876112,30876113,30876114,30876226,30876817,30876818,30884094,30884095,30884096,30884097,30884098,30884099,30884100,30884101,30884102,30884103,30884104,30884105,30884106,30884107,30884108,30884109,30884110,30884111,30884112,30884113,30884114,30884226,30884818,30892094,30892095,30892096,30892097,30892098,30892099,30892100,30892101,30892102,30892103,30892104,30892105,30892106,30892107,30892108,30892109,30892110,30892111,30892112,30892113,30892114,30892226,30900094,30900095,30900096,30900097,30900098,30900099,30900100,30900101,30900102,30900103,30900104,30900105,30900106,30900107,30900108,30900109,30900110,30900111,30900112,30900113,30900114,30900226,30908094,30908095,30908096,30908097,30908098,30908099,30908100,30908101,30908102,30908103,30908104,30908105,30908106,30908107,30908108,30908109,30908110,30908111,30908112,30908113,30908114,30908226,30916094,30916095,30916096,30916097,30916098,30916099,30916100,30916101,30916102,30916103,30916104,30916105,30916106,30916107,30916108,30916109,30916110,30916111,30916112,30916113,30916114,30916226,30924094,30924095,30924096,30924097,30924098,30924099,30924100,30924101,30924102,30924103,30924104,30924105,30924106,30924107,30924108,30924109,30924110,30924111,30924112,30924113,30924114,30924226,30932094,30932095,30932096,30932097,30932098,30932099,30932100,30932101,30932102,30932103,30932104,30932105,30932106,30932107,30932108,30932109,30932110,30932111,30932112,30932113,30932114,30932226,30939252,30939253,30940094,30940095,30940096,30940097,30940098,30940099,30940100,30940101,30940102,30940103,30940104,30940105,30940106,30940107,30940108,30940109,30940110,30940111,30940112,30940113,30940114,30940226,30947252,30947253,30948094,30948095,30948096,30948097,30948098,30948099,30948100,30948101,30948102,30948103,30948104,30948105,30948106,30948107,30948108,30948109,30948110,30948111,30948112,30948113,30948114,30948226,30956094,30956095,30956096,30956097,30956098,30956099,30956100,30956101,30956102,30956103,30956104,30956105,30956106,30956107,30956108,30956109,30956110,30956111,30956112,30956113,30956114,30956226,30964094,30964095,30964096,30964097,30964098,30964099,30964100,30964101,30964102,30964103,30964104,30964105,30964106,30964107,30964108,30964109,30964110,30964111,30964112,30964113,30964114,30964226,30972094,30972095,30972096,30972097,30972098,30972099,30972100,30972101,30972102,30972103,30972104,30972105,30972106,30972107,30972108,30972109,30972110,30972111,30972112,30972113,30972114,30972226,30980094,30980095,30980096,30980097,30980098,30980099,30980100,30980101,30980102,30980103,30980104,30980105,30980106,30980107,30980108,30980109,30980110,30980111,30980112,30980113,30980114,30980226,30988094,30988095,30988096,30988097,30988098,30988099,30988100,30988101,30988102,30988103,30988104,30988105,30988106,30988107,30988108,30988109,30988110,30988111,30988112,30988113,30988114,30988226,30996094,30996095,30996096,30996097,30996098,30996099,30996100,30996101,30996102,30996103,30996104,30996105,30996106,30996107,30996108,30996109,30996110,30996111,30996112,30996113,30996114,30996226,31004094,31004095,31004096,31004097,31004098,31004099,31004100,31004101,31004102,31004103,31004104,31004105,31004106,31004107,31004108,31004109,31004110,31004111,31004112,31004113,31004114,31004226,31012094,31012095,31012096,31012097,31012098,31012099,31012100,31012101,31012102,31012103,31012104,31012105,31012106,31012107,31012108,31012109,31012110,31012111,31012112,31012113,31012114,31012226,31020094,31020095,31020096,31020097,31020098,31020099,31020100,31020101,31020102,31020103,31020104,31020105,31020106,31020107,31020108,31020109,31020110,31020111,31020112,31020113,31020114,31020226,31028094,31028095,31028096,31028097,31028098,31028099,31028100,31028101,31028102,31028103,31028104,31028105,31028106,31028107,31028108,31028109,31028110,31028111,31028112,31028113,31028114,31028226,31036094,31036095,31036096,31036097,31036098,31036099,31036100,31036101,31036102,31036103,31036104,31036105,31036106,31036107,31036108,31036109,31036110,31036111,31036112,31036113,31036114,31036226,31044094,31044095,31044096,31044097,31044098,31044099,31044100,31044101,31044102,31044103,31044104,31044105,31044106,31044107,31044108,31044109,31044110,31044111,31044112,31044113,31044114,31044226,31052094,31052095,31052096,31052097,31052098,31052099,31052100,31052101,31052102,31052103,31052104,31052105,31052106,31052107,31052108,31052109,31052110,31052111,31052112,31052113,31052114,31052226,31060094,31060095,31060096,31060097,31060098,31060099,31060100,31060101,31060102,31060103,31060104,31060105,31060106,31060107,31060108,31060109,31060110,31060111,31060112,31060113,31060114,31060226,31068094,31068095,31068096,31068097,31068098,31068099,31068100,31068101,31068102,31068103,31068104,31068105,31068106,31068107,31068108,31068109,31068110,31068111,31068112,31068113,31068114,31068226,31076094,31076095,31076096,31076097,31076098,31076099,31076100,31076101,31076102,31076103,31076104,31076105,31076106,31076107,31076108,31076109,31076110,31076111,31076112,31076113,31076114,31076226,31084094,31084095,31084096,31084097,31084098,31084099,31084100,31084101,31084102,31084103,31084104,31084105,31084106,31084107,31084108,31084109,31084110,31084111,31084112,31084113,31084114,31084226,31092094,31092095,31092096,31092097,31092098,31092099,31092100,31092101,31092102,31092103,31092104,31092105,31092106,31092107,31092108,31092109,31092110,31092111,31092112,31092113,31092114,31092226,31100094,31100095,31100096,31100097,31100098,31100099,31100100,31100101,31100102,31100103,31100104,31100105,31100106,31100107,31100108,31100109,31100110,31100111,31100112,31100113,31100114,31100226,31108094,31108095,31108096,31108097,31108098,31108099,31108100,31108101,31108102,31108103,31108104,31108105,31108106,31108107,31108108,31108109,31108110,31108111,31108112,31108113,31108114,31108226,31116094,31116095,31116096,31116097,31116098,31116099,31116100,31116101,31116102,31116103,31116104,31116105,31116106,31116107,31116108,31116109,31116110,31116111,31116112,31116113,31116114,31116226,31124094,31124095,31124096,31124097,31124098,31124099,31124100,31124101,31124102,31124103,31124104,31124105,31124106,31124107,31124108,31124109,31124110,31124111,31124112,31124113,31124114,31124226,31132094,31132095,31132096,31132097,31132098,31132099,31132100,31132101,31132102,31132103,31132104,31132105,31132106,31132107,31132108,31132109,31132110,31132111,31132112,31132113,31132114,31132226,31140094,31140095,31140096,31140097,31140098,31140099,31140100,31140101,31140102,31140103,31140104,31140105,31140106,31140107,31140108,31140109,31140110,31140111,31140112,31140113,31140114,31140226,31148094,31148095,31148096,31148097,31148098,31148099,31148100,31148101,31148102,31148103,31148104,31148105,31148106,31148107,31148108,31148109,31148110,31148111,31148112,31148113,31148114,31148226,31156094,31156095,31156096,31156097,31156098,31156099,31156100,31156101,31156102,31156103,31156104,31156105,31156106,31156107,31156108,31156109,31156110,31156111,31156112,31156113,31156114,31156226,31164094,31164095,31164096,31164097,31164098,31164099,31164100,31164101,31164102,31164103,31164104,31164105,31164106,31164107,31164108,31164109,31164110,31164111,31164112,31164113,31164114,31164226,31172094,31172095,31172096,31172097,31172098,31172099,31172100,31172101,31172102,31172103,31172104,31172105,31172106,31172107,31172108,31172109,31172110,31172111,31172112,31172113,31172114,31172226,31179232,31179233,31180094,31180095,31180096,31180097,31180098,31180099,31180100,31180101,31180102,31180103,31180104,31180105,31180106,31180107,31180108,31180109,31180110,31180111,31180112,31180113,31180114,31180226,31187232,31187233,31188094,31188095,31188096,31188097,31188098,31188099,31188100,31188101,31188102,31188103,31188104,31188105,31188106,31188107,31188108,31188109,31188110,31188111,31188112,31188113,31188114,31188226,31196095,31196098,31196101,31196104,31196107,31196110,31196113,31196226,31204118,31204119,31204120,31204121,31204122,31204226,31212218,31212219,31212220,31212221,31212222,31212223,31212226,31220226,31228226,31236226,31244226,31252226,31259167,31259168,31260226,31267168,31268226,31268462,31276226,31276461,31276462,31276463,31284226,31284462,31292118,31292119,31292120,31292121,31292122,31292226,31300226,31308095,31308098,31308101,31308104,31308107,31308110,31308113,31308226,31316094,31316095,31316096,31316097,31316098,31316099,31316100,31316101,31316102,31316103,31316104,31316105,31316106,31316107,31316108,31316109,31316110,31316111,31316112,31316113,31316114,31316226,31324094,31324095,31324096,31324097,31324098,31324099,31324100,31324101,31324102,31324103,31324104,31324105,31324106,31324107,31324108,31324109,31324110,31324111,31324112,31324113,31324114,31324226,31332094,31332095,31332096,31332097,31332098,31332099,31332100,31332101,31332102,31332103,31332104,31332105,31332106,31332107,31332108,31332109,31332110,31332111,31332112,31332113,31332114,31332226,31340094,31340095,31340096,31340097,31340098,31340099,31340100,31340101,31340102,31340103,31340104,31340105,31340106,31340107,31340108,31340109,31340110,31340111,31340112,31340113,31340114,31340226,31348094,31348095,31348096,31348097,31348098,31348099,31348100,31348101,31348102,31348103,31348104,31348105,31348106,31348107,31348108,31348109,31348110,31348111,31348112,31348113,31348114,31348226,31356094,31356095,31356096,31356097,31356098,31356099,31356100,31356101,31356102,31356103,31356104,31356105,31356106,31356107,31356108,31356109,31356110,31356111,31356112,31356113,31356114,31356226,31364094,31364095,31364096,31364097,31364098,31364099,31364100,31364101,31364102,31364103,31364104,31364105,31364106,31364107,31364108,31364109,31364110,31364111,31364112,31364113,31364114,31364226,31372094,31372095,31372096,31372097,31372098,31372099,31372100,31372101,31372102,31372103,31372104,31372105,31372106,31372107,31372108,31372109,31372110,31372111,31372112,31372113,31372114,31372226,31380094,31380095,31380096,31380097,31380098,31380099,31380100,31380101,31380102,31380103,31380104,31380105,31380106,31380107,31380108,31380109,31380110,31380111,31380112,31380113,31380114,31380226,31388094,31388095,31388096,31388097,31388098,31388099,31388100,31388101,31388102,31388103,31388104,31388105,31388106,31388107,31388108,31388109,31388110,31388111,31388112,31388113,31388114,31388226,31396094,31396095,31396096,31396097,31396098,31396099,31396100,31396101,31396102,31396103,31396104,31396105,31396106,31396107,31396108,31396109,31396110,31396111,31396112,31396113,31396114,31396226,31404094,31404095,31404096,31404097,31404098,31404099,31404100,31404101,31404102,31404103,31404104,31404105,31404106,31404107,31404108,31404109,31404110,31404111,31404112,31404113,31404114,31404226,31412094,31412095,31412096,31412097,31412098,31412099,31412100,31412101,31412102,31412103,31412104,31412105,31412106,31412107,31412108,31412109,31412110,31412111,31412112,31412113,31412114,31412226,31420094,31420095,31420096,31420097,31420098,31420099,31420100,31420101,31420102,31420103,31420104,31420105,31420106,31420107,31420108,31420109,31420110,31420111,31420112,31420113,31420114,31420226,31428094,31428095,31428096,31428097,31428098,31428099,31428100,31428101,31428102,31428103,31428104,31428105,31428106,31428107,31428108,31428109,31428110,31428111,31428112,31428113,31428114,31428226,31436094,31436095,31436096,31436097,31436098,31436099,31436100,31436101,31436102,31436103,31436104,31436105,31436106,31436107,31436108,31436109,31436110,31436111,31436112,31436113,31436114,31436226,31444094,31444095,31444096,31444097,31444098,31444099,31444100,31444101,31444102,31444103,31444104,31444105,31444106,31444107,31444108,31444109,31444110,31444111,31444112,31444113,31444114,31444226,31452094,31452095,31452096,31452097,31452098,31452099,31452100,31452101,31452102,31452103,31452104,31452105,31452106,31452107,31452108,31452109,31452110,31452111,31452112,31452113,31452114,31452226,31460094,31460095,31460096,31460097,31460098,31460099,31460100,31460101,31460102,31460103,31460104,31460105,31460106,31460107,31460108,31460109,31460110,31460111,31460112,31460113,31460114,31460226,31468094,31468095,31468096,31468097,31468098,31468099,31468100,31468101,31468102,31468103,31468104,31468105,31468106,31468107,31468108,31468109,31468110,31468111,31468112,31468113,31468114,31468226,31476094,31476095,31476096,31476097,31476098,31476099,31476100,31476101,31476102,31476103,31476104,31476105,31476106,31476107,31476108,31476109,31476110,31476111,31476112,31476113,31476114,31476226,31484094,31484095,31484096,31484097,31484098,31484099,31484100,31484101,31484102,31484103,31484104,31484105,31484106,31484107,31484108,31484109,31484110,31484111,31484112,31484113,31484114,31484226,31492094,31492095,31492096,31492097,31492098,31492099,31492100,31492101,31492102,31492103,31492104,31492105,31492106,31492107,31492108,31492109,31492110,31492111,31492112,31492113,31492114,31492226,31500094,31500095,31500096,31500097,31500098,31500099,31500100,31500101,31500102,31500103,31500104,31500105,31500106,31500107,31500108,31500109,31500110,31500111,31500112,31500113,31500114,31500226,31508094,31508095,31508096,31508097,31508098,31508099,31508100,31508101,31508102,31508103,31508104,31508105,31508106,31508107,31508108,31508109,31508110,31508111,31508112,31508113,31508114,31508218,31508219,31508220,31508221,31508222,31508223,31508226,31516094,31516095,31516096,31516097,31516098,31516099,31516100,31516101,31516102,31516103,31516104,31516105,31516106,31516107,31516108,31516109,31516110,31516111,31516112,31516113,31516114,31516226,31524094,31524095,31524096,31524097,31524098,31524099,31524100,31524101,31524102,31524103,31524104,31524105,31524106,31524107,31524108,31524109,31524110,31524111,31524112,31524113,31524114,31524226,31532094,31532095,31532096,31532097,31532098,31532099,31532100,31532101,31532102,31532103,31532104,31532105,31532106,31532107,31532108,31532109,31532110,31532111,31532112,31532113,31532114,31532226,31540094,31540095,31540096,31540097,31540098,31540099,31540100,31540101,31540102,31540103,31540104,31540105,31540106,31540107,31540108,31540109,31540110,31540111,31540112,31540113,31540114,31540226,31548094,31548095,31548096,31548097,31548098,31548099,31548100,31548101,31548102,31548103,31548104,31548105,31548106,31548107,31548108,31548109,31548110,31548111,31548112,31548113,31548114,31548226,31556094,31556095,31556096,31556097,31556098,31556099,31556100,31556101,31556102,31556103,31556104,31556105,31556106,31556107,31556108,31556109,31556110,31556111,31556112,31556113,31556114,31556226,31564094,31564095,31564096,31564097,31564098,31564099,31564100,31564101,31564102,31564103,31564104,31564105,31564106,31564107,31564108,31564109,31564110,31564111,31564112,31564113,31564114,31564226,31572094,31572095,31572096,31572097,31572098,31572099,31572100,31572101,31572102,31572103,31572104,31572105,31572106,31572107,31572108,31572109,31572110,31572111,31572112,31572113,31572114,31572226,31580094,31580095,31580096,31580097,31580098,31580099,31580100,31580101,31580102,31580103,31580104,31580105,31580106,31580107,31580108,31580109,31580110,31580111,31580112,31580113,31580114,31580226,31588094,31588095,31588096,31588097,31588098,31588099,31588100,31588101,31588102,31588103,31588104,31588105,31588106,31588107,31588108,31588109,31588110,31588111,31588112,31588113,31588114,31588226,31596094,31596095,31596096,31596097,31596098,31596099,31596100,31596101,31596102,31596103,31596104,31596105,31596106,31596107,31596108,31596109,31596110,31596111,31596112,31596113,31596114,31596226,31604094,31604095,31604096,31604097,31604098,31604099,31604100,31604101,31604102,31604103,31604104,31604105,31604106,31604107,31604108,31604109,31604110,31604111,31604112,31604113,31604114,31604226,31612094,31612095,31612096,31612097,31612098,31612099,31612100,31612101,31612102,31612103,31612104,31612105,31612106,31612107,31612108,31612109,31612110,31612111,31612112,31612113,31612114,31612226,31620094,31620095,31620096,31620097,31620098,31620099,31620100,31620101,31620102,31620103,31620104,31620105,31620106,31620107,31620108,31620109,31620110,31620111,31620112,31620113,31620114,31620226,31628094,31628095,31628096,31628097,31628098,31628099,31628100,31628101,31628102,31628103,31628104,31628105,31628106,31628107,31628108,31628109,31628110,31628111,31628112,31628113,31628114,31628226,31636094,31636095,31636096,31636097,31636098,31636099,31636100,31636101,31636102,31636103,31636104,31636105,31636106,31636107,31636108,31636109,31636110,31636111,31636112,31636113,31636114,31636226,31644094,31644095,31644096,31644097,31644098,31644099,31644100,31644101,31644102,31644103,31644104,31644105,31644106,31644107,31644108,31644109,31644110,31644111,31644112,31644113,31644114,31644226,31652094,31652095,31652096,31652097,31652098,31652099,31652100,31652101,31652102,31652103,31652104,31652105,31652106,31652107,31652108,31652109,31652110,31652111,31652112,31652113,31652114,31652226,31660094,31660095,31660096,31660097,31660098,31660099,31660100,31660101,31660102,31660103,31660104,31660105,31660106,31660107,31660108,31660109,31660110,31660111,31660112,31660113,31660114,31660226,31668094,31668095,31668096,31668097,31668098,31668099,31668100,31668101,31668102,31668103,31668104,31668105,31668106,31668107,31668108,31668109,31668110,31668111,31668112,31668113,31668114,31668226,31676094,31676095,31676096,31676097,31676098,31676099,31676100,31676101,31676102,31676103,31676104,31676105,31676106,31676107,31676108,31676109,31676110,31676111,31676112,31676113,31676114,31676226,31676278,31684094,31684095,31684096,31684097,31684098,31684099,31684100,31684101,31684102,31684103,31684104,31684105,31684106,31684107,31684108,31684109,31684110,31684111,31684112,31684113,31684114,31684221,31684222,31684223,31684224,31684225,31684278,31684279,31692094,31692095,31692096,31692097,31692098,31692099,31692100,31692101,31692102,31692103,31692104,31692105,31692106,31692107,31692108,31692109,31692110,31692111,31692112,31692113,31692114,31692278,31700094,31700095,31700096,31700097,31700098,31700099,31700100,31700101,31700102,31700103,31700104,31700105,31700106,31700107,31700108,31700109,31700110,31700111,31700112,31700113,31700114,31708094,31708095,31708096,31708097,31708098,31708099,31708100,31708101,31708102,31708103,31708104,31708105,31708106,31708107,31708108,31708109,31708110,31708111,31708112,31708113,31708114,31716094,31716095,31716096,31716097,31716098,31716099,31716100,31716101,31716102,31716103,31716104,31716105,31716106,31716107,31716108,31716109,31716110,31716111,31716112,31716113,31716114,31724094,31724095,31724096,31724097,31724098,31724099,31724100,31724101,31724102,31724103,31724104,31724105,31724106,31724107,31724108,31724109,31724110,31724111,31724112,31724113,31724114,31732094,31732095,31732096,31732097,31732098,31732099,31732100,31732101,31732102,31732103,31732104,31732105,31732106,31732107,31732108,31732109,31732110,31732111,31732112,31732113,31732114,31740094,31740095,31740096,31740097,31740098,31740099,31740100,31740101,31740102,31740103,31740104,31740105,31740106,31740107,31740108,31740109,31740110,31740111,31740112,31740113,31740114,31748094,31748095,31748096,31748097,31748098,31748099,31748100,31748101,31748102,31748103,31748104,31748105,31748106,31748107,31748108,31748109,31748110,31748111,31748112,31748113,31748114,31756094,31756095,31756096,31756097,31756098,31756099,31756100,31756101,31756102,31756103,31756104,31756105,31756106,31756107,31756108,31756109,31756110,31756111,31756112,31756113,31756114,31764094,31764095,31764096,31764097,31764098,31764099,31764100,31764101,31764102,31764103,31764104,31764105,31764106,31764107,31764108,31764109,31764110,31764111,31764112,31764113,31764114,31772094,31772095,31772096,31772097,31772098,31772099,31772100,31772101,31772102,31772103,31772104,31772105,31772106,31772107,31772108,31772109,31772110,31772111,31772112,31772113,31772114,31772221,31772222,31772223,31772224,31772225,31772226,31780094,31780095,31780096,31780097,31780098,31780099,31780100,31780101,31780102,31780103,31780104,31780105,31780106,31780107,31780108,31780109,31780110,31780111,31780112,31780113,31780114,31780226,31788094,31788095,31788096,31788097,31788098,31788099,31788100,31788101,31788102,31788103,31788104,31788105,31788106,31788107,31788108,31788109,31788110,31788111,31788112,31788113,31788114,31788226,31796094,31796095,31796096,31796097,31796098,31796099,31796100,31796101,31796102,31796103,31796104,31796105,31796106,31796107,31796108,31796109,31796110,31796111,31796112,31796113,31796114,31796226,31804094,31804095,31804096,31804097,31804098,31804099,31804100,31804101,31804102,31804103,31804104,31804105,31804106,31804107,31804108,31804109,31804110,31804111,31804112,31804113,31804114,31804226,31812094,31812095,31812096,31812097,31812098,31812099,31812100,31812101,31812102,31812103,31812104,31812105,31812106,31812107,31812108,31812109,31812110,31812111,31812112,31812113,31812114,31812226,31820094,31820095,31820096,31820097,31820098,31820099,31820100,31820101,31820102,31820103,31820104,31820105,31820106,31820107,31820108,31820109,31820110,31820111,31820112,31820113,31820114,31820226,31827281,31827282,31828094,31828095,31828096,31828097,31828098,31828099,31828100,31828101,31828102,31828103,31828104,31828105,31828106,31828107,31828108,31828109,31828110,31828111,31828112,31828113,31828114,31828226,31835281,31835282,31836094,31836095,31836096,31836097,31836098,31836099,31836100,31836101,31836102,31836103,31836104,31836105,31836106,31836107,31836108,31836109,31836110,31836111,31836112,31836113,31836114,31836226,31844094,31844095,31844096,31844097,31844098,31844099,31844100,31844101,31844102,31844103,31844104,31844105,31844106,31844107,31844108,31844109,31844110,31844111,31844112,31844113,31844114,31844226,31852094,31852095,31852096,31852097,31852098,31852099,31852100,31852101,31852102,31852103,31852104,31852105,31852106,31852107,31852108,31852109,31852110,31852111,31852112,31852113,31852114,31852226,31860094,31860095,31860096,31860097,31860098,31860099,31860100,31860101,31860102,31860103,31860104,31860105,31860106,31860107,31860108,31860109,31860110,31860111,31860112,31860113,31860114,31860226,31868094,31868095,31868096,31868097,31868098,31868099,31868100,31868101,31868102,31868103,31868104,31868105,31868106,31868107,31868108,31868109,31868110,31868111,31868112,31868113,31868114,31868226,31876094,31876095,31876096,31876097,31876098,31876099,31876100,31876101,31876102,31876103,31876104,31876105,31876106,31876107,31876108,31876109,31876110,31876111,31876112,31876113,31876114,31876226,31884094,31884095,31884096,31884097,31884098,31884099,31884100,31884101,31884102,31884103,31884104,31884105,31884106,31884107,31884108,31884109,31884110,31884111,31884112,31884113,31884114,31884226,31892094,31892095,31892096,31892097,31892098,31892099,31892100,31892101,31892102,31892103,31892104,31892105,31892106,31892107,31892108,31892109,31892110,31892111,31892112,31892113,31892114,31892226,31900094,31900095,31900096,31900097,31900098,31900099,31900100,31900101,31900102,31900103,31900104,31900105,31900106,31900107,31900108,31900109,31900110,31900111,31900112,31900113,31900114,31900226,31908094,31908095,31908096,31908097,31908098,31908099,31908100,31908101,31908102,31908103,31908104,31908105,31908106,31908107,31908108,31908109,31908110,31908111,31908112,31908113,31908114,31908226,31908327,31908328,31916094,31916095,31916096,31916097,31916098,31916099,31916100,31916101,31916102,31916103,31916104,31916105,31916106,31916107,31916108,31916109,31916110,31916111,31916112,31916113,31916114,31916226,31916331,31916332,31924094,31924095,31924096,31924097,31924098,31924099,31924100,31924101,31924102,31924103,31924104,31924105,31924106,31924107,31924108,31924109,31924110,31924111,31924112,31924113,31924114,31924226,31924334,31924335,31932094,31932095,31932096,31932097,31932098,31932099,31932100,31932101,31932102,31932103,31932104,31932105,31932106,31932107,31932108,31932109,31932110,31932111,31932112,31932113,31932114,31932226,31932337,31932338,31940094,31940095,31940096,31940097,31940098,31940099,31940100,31940101,31940102,31940103,31940104,31940105,31940106,31940107,31940108,31940109,31940110,31940111,31940112,31940113,31940114,31940226,31940239,31940340,31948094,31948095,31948096,31948097,31948098,31948099,31948100,31948101,31948102,31948103,31948104,31948105,31948106,31948107,31948108,31948109,31948110,31948111,31948112,31948113,31948114,31948226,31948342,31956118,31956119,31956120,31956121,31956122,31956226,31956341,31956344,31956345,31963284,31963285,31964226,31964343,31964346,31971284,31971285,31972226,31972345,31972348,31980226,31980347,31980350,31988226,31988349,31988352,31996226,31996353,31996354,32004226,32004355,32012226,32012354,32012356,32012357,32020226,32020358,32028226,32028357,32028359,32036226,32036323,32036324,32036361,32044118,32044119,32044120,32044121,32044122,32044226,32044239,32044362,32052094,32052095,32052096,32052097,32052098,32052099,32052100,32052101,32052102,32052103,32052104,32052105,32052106,32052107,32052108,32052109,32052110,32052111,32052112,32052113,32052114,32052226,32052361,32052363,32060094,32060095,32060096,32060097,32060098,32060099,32060100,32060101,32060102,32060103,32060104,32060105,32060106,32060107,32060108,32060109,32060110,32060111,32060112,32060113,32060114,32060226,32060333,32060362,32060364,32068094,32068095,32068096,32068097,32068098,32068099,32068100,32068101,32068102,32068103,32068104,32068105,32068106,32068107,32068108,32068109,32068110,32068111,32068112,32068113,32068114,32068226,32068333,32068334,32068335,32076094,32076095,32076096,32076097,32076098,32076099,32076100,32076101,32076102,32076103,32076104,32076105,32076106,32076107,32076108,32076109,32076110,32076111,32076112,32076113,32076114,32076226,32076333,32076334,32076335,32076336,32076337,32084094,32084095,32084096,32084097,32084098,32084099,32084100,32084101,32084102,32084103,32084104,32084105,32084106,32084107,32084108,32084109,32084110,32084111,32084112,32084113,32084114,32084226,32084336,32084337,32084368,32092094,32092095,32092096,32092097,32092098,32092099,32092100,32092101,32092102,32092103,32092104,32092105,32092106,32092107,32092108,32092109,32092110,32092111,32092112,32092113,32092114,32092226,32092367,32092369,32100094,32100095,32100096,32100097,32100098,32100099,32100100,32100101,32100102,32100103,32100104,32100105,32100106,32100107,32100108,32100109,32100110,32100111,32100112,32100113,32100114,32100226,32100368,32100370,32108094,32108095,32108096,32108097,32108098,32108099,32108100,32108101,32108102,32108103,32108104,32108105,32108106,32108107,32108108,32108109,32108110,32108111,32108112,32108113,32108114,32108226,32108369,32108371,32108623,32108624,32116094,32116095,32116096,32116097,32116098,32116099,32116100,32116101,32116102,32116103,32116104,32116105,32116106,32116107,32116108,32116109,32116110,32116111,32116112,32116113,32116114,32116226,32116346,32116370,32116624,32124094,32124095,32124096,32124097,32124098,32124099,32124100,32124101,32124102,32124103,32124104,32124105,32124106,32124107,32124108,32124109,32124110,32124111,32124112,32124113,32124114,32124226,32132094,32132095,32132096,32132097,32132098,32132099,32132100,32132101,32132102,32132103,32132104,32132105,32132106,32132107,32132108,32132109,32132110,32132111,32132112,32132113,32132114,32132226,32140094,32140095,32140096,32140097,32140098,32140099,32140100,32140101,32140102,32140103,32140104,32140105,32140106,32140107,32140108,32140109,32140110,32140111,32140112,32140113,32140114,32140226,32140374,32148094,32148095,32148096,32148097,32148098,32148099,32148100,32148101,32148102,32148103,32148104,32148105,32148106,32148107,32148108,32148109,32148110,32148111,32148112,32148113,32148114,32148226,32148375,32156094,32156095,32156096,32156097,32156098,32156099,32156100,32156101,32156102,32156103,32156104,32156105,32156106,32156107,32156108,32156109,32156110,32156111,32156112,32156113,32156114,32156226,32156374,32156376,32164094,32164095,32164096,32164097,32164098,32164099,32164100,32164101,32164102,32164103,32164104,32164105,32164106,32164107,32164108,32164109,32164110,32164111,32164112,32164113,32164114,32164226,32164354,32164375,32164377,32172094,32172095,32172096,32172097,32172098,32172099,32172100,32172101,32172102,32172103,32172104,32172105,32172106,32172107,32172108,32172109,32172110,32172111,32172112,32172113,32172114,32172226,32172353,32172354,32172355,32180094,32180095,32180096,32180097,32180098,32180099,32180100,32180101,32180102,32180103,32180104,32180105,32180106,32180107,32180108,32180109,32180110,32180111,32180112,32180113,32180114,32180226,32180354,32180355,32180356,32180378,32188094,32188095,32188096,32188097,32188098,32188099,32188100,32188101,32188102,32188103,32188104,32188105,32188106,32188107,32188108,32188109,32188110,32188111,32188112,32188113,32188114,32188226,32188355,32188356,32188357,32188379,32196094,32196095,32196096,32196097,32196098,32196099,32196100,32196101,32196102,32196103,32196104,32196105,32196106,32196107,32196108,32196109,32196110,32196111,32196112,32196113,32196114,32196226,32196356,32196378,32196380,32204094,32204095,32204096,32204097,32204098,32204099,32204100,32204101,32204102,32204103,32204104,32204105,32204106,32204107,32204108,32204109,32204110,32204111,32204112,32204113,32204114,32204226,32204380,32212094,32212095,32212096,32212097,32212098,32212099,32212100,32212101,32212102,32212103,32212104,32212105,32212106,32212107,32212108,32212109,32212110,32212111,32212112,32212113,32212114,32212226,32212381,32220094,32220095,32220096,32220097,32220098,32220099,32220100,32220101,32220102,32220103,32220104,32220105,32220106,32220107,32220108,32220109,32220110,32220111,32220112,32220113,32220114,32220226,32220380,32220382,32228094,32228095,32228096,32228097,32228098,32228099,32228100,32228101,32228102,32228103,32228104,32228105,32228106,32228107,32228108,32228109,32228110,32228111,32228112,32228113,32228114,32228226,32228382,32236094,32236095,32236096,32236097,32236098,32236099,32236100,32236101,32236102,32236103,32236104,32236105,32236106,32236107,32236108,32236109,32236110,32236111,32236112,32236113,32236114,32236226,32236383,32244094,32244095,32244096,32244097,32244098,32244099,32244100,32244101,32244102,32244103,32244104,32244105,32244106,32244107,32244108,32244109,32244110,32244111,32244112,32244113,32244114,32244226,32252094,32252095,32252096,32252097,32252098,32252099,32252100,32252101,32252102,32252103,32252104,32252105,32252106,32252107,32252108,32252109,32252110,32252111,32252112,32252113,32252114,32252226,32252384,32260094,32260095,32260096,32260097,32260098,32260099,32260100,32260101,32260102,32260103,32260104,32260105,32260106,32260107,32260108,32260109,32260110,32260111,32260112,32260113,32260114,32260226,32260383,32268094,32268095,32268096,32268097,32268098,32268099,32268100,32268101,32268102,32268103,32268104,32268105,32268106,32268107,32268108,32268109,32268110,32268111,32268112,32268113,32268114,32268226,32268385,32276094,32276095,32276096,32276097,32276098,32276099,32276100,32276101,32276102,32276103,32276104,32276105,32276106,32276107,32276108,32276109,32276110,32276111,32276112,32276113,32276114,32276226,32276384,32284094,32284095,32284096,32284097,32284098,32284099,32284100,32284101,32284102,32284103,32284104,32284105,32284106,32284107,32284108,32284109,32284110,32284111,32284112,32284113,32284114,32284226,32284386,32292094,32292095,32292096,32292097,32292098,32292099,32292100,32292101,32292102,32292103,32292104,32292105,32292106,32292107,32292108,32292109,32292110,32292111,32292112,32292113,32292114,32292226,32292385,32292387,32300094,32300095,32300096,32300097,32300098,32300099,32300100,32300101,32300102,32300103,32300104,32300105,32300106,32300107,32300108,32300109,32300110,32300111,32300112,32300113,32300114,32300226,32300387,32308094,32308095,32308096,32308097,32308098,32308099,32308100,32308101,32308102,32308103,32308104,32308105,32308106,32308107,32308108,32308109,32308110,32308111,32308112,32308113,32308114,32308226,32308386,32316094,32316095,32316096,32316097,32316098,32316099,32316100,32316101,32316102,32316103,32316104,32316105,32316106,32316107,32316108,32316109,32316110,32316111,32316112,32316113,32316114,32316226,32316368,32316369,32316388,32324094,32324095,32324096,32324097,32324098,32324099,32324100,32324101,32324102,32324103,32324104,32324105,32324106,32324107,32324108,32324109,32324110,32324111,32324112,32324113,32324114,32324226,32324368,32324369,32324370,32324387,32332094,32332095,32332096,32332097,32332098,32332099,32332100,32332101,32332102,32332103,32332104,32332105,32332106,32332107,32332108,32332109,32332110,32332111,32332112,32332113,32332114,32332226,32332369,32332370,32332389,32340094,32340095,32340096,32340097,32340098,32340099,32340100,32340101,32340102,32340103,32340104,32340105,32340106,32340107,32340108,32340109,32340110,32340111,32340112,32340113,32340114,32340226,32340370,32340371,32348094,32348095,32348096,32348097,32348098,32348099,32348100,32348101,32348102,32348103,32348104,32348105,32348106,32348107,32348108,32348109,32348110,32348111,32348112,32348113,32348114,32348218,32348219,32348220,32348226,32348370,32348371,32348390,32356094,32356095,32356096,32356097,32356098,32356099,32356100,32356101,32356102,32356103,32356104,32356105,32356106,32356107,32356108,32356109,32356110,32356111,32356112,32356113,32356114,32356226,32356390,32364094,32364095,32364096,32364097,32364098,32364099,32364100,32364101,32364102,32364103,32364104,32364105,32364106,32364107,32364108,32364109,32364110,32364111,32364112,32364113,32364114,32364226,32372094,32372095,32372096,32372097,32372098,32372099,32372100,32372101,32372102,32372103,32372104,32372105,32372106,32372107,32372108,32372109,32372110,32372111,32372112,32372113,32372114,32372226,32372391,32380094,32380095,32380096,32380097,32380098,32380099,32380100,32380101,32380102,32380103,32380104,32380105,32380106,32380107,32380108,32380109,32380110,32380111,32380112,32380113,32380114,32380226,32380391,32388094,32388095,32388096,32388097,32388098,32388099,32388100,32388101,32388102,32388103,32388104,32388105,32388106,32388107,32388108,32388109,32388110,32388111,32388112,32388113,32388114,32388226,32396094,32396095,32396096,32396097,32396098,32396099,32396100,32396101,32396102,32396103,32396104,32396105,32396106,32396107,32396108,32396109,32396110,32396111,32396112,32396113,32396114,32396226,32396392,32404094,32404095,32404096,32404097,32404098,32404099,32404100,32404101,32404102,32404103,32404104,32404105,32404106,32404107,32404108,32404109,32404110,32404111,32404112,32404113,32404114,32404226,32404392,32412094,32412095,32412096,32412097,32412098,32412099,32412100,32412101,32412102,32412103,32412104,32412105,32412106,32412107,32412108,32412109,32412110,32412111,32412112,32412113,32412114,32412226,32412375,32420094,32420095,32420096,32420097,32420098,32420099,32420100,32420101,32420102,32420103,32420104,32420105,32420106,32420107,32420108,32420109,32420110,32420111,32420112,32420113,32420114,32420226,32428094,32428095,32428096,32428097,32428098,32428099,32428100,32428101,32428102,32428103,32428104,32428105,32428106,32428107,32428108,32428109,32428110,32428111,32428112,32428113,32428114,32428226,32428393,32428510,32428511,32436094,32436095,32436096,32436097,32436098,32436099,32436100,32436101,32436102,32436103,32436104,32436105,32436106,32436107,32436108,32436109,32436110,32436111,32436112,32436113,32436114,32436226,32436393,32436510,32436511,32444094,32444095,32444096,32444097,32444098,32444099,32444100,32444101,32444102,32444103,32444104,32444105,32444106,32444107,32444108,32444109,32444110,32444111,32444112,32444113,32444114,32444226,32452094,32452095,32452096,32452097,32452098,32452099,32452100,32452101,32452102,32452103,32452104,32452105,32452106,32452107,32452108,32452109,32452110,32452111,32452112,32452113,32452114,32452226,32460094,32460095,32460096,32460097,32460098,32460099,32460100,32460101,32460102,32460103,32460104,32460105,32460106,32460107,32460108,32460109,32460110,32460111,32460112,32460113,32460114,32460226,32460394,32468094,32468095,32468096,32468097,32468098,32468099,32468100,32468101,32468102,32468103,32468104,32468105,32468106,32468107,32468108,32468109,32468110,32468111,32468112,32468113,32468114,32468226,32468394,32476094,32476095,32476096,32476097,32476098,32476099,32476100,32476101,32476102,32476103,32476104,32476105,32476106,32476107,32476108,32476109,32476110,32476111,32476112,32476113,32476114,32476226,32476394,32484094,32484095,32484096,32484097,32484098,32484099,32484100,32484101,32484102,32484103,32484104,32484105,32484106,32484107,32484108,32484109,32484110,32484111,32484112,32484113,32484114,32484226,32492094,32492095,32492096,32492097,32492098,32492099,32492100,32492101,32492102,32492103,32492104,32492105,32492106,32492107,32492108,32492109,32492110,32492111,32492112,32492113,32492114,32492226,32492377,32492378,32492405,32492406,32492407,32500094,32500095,32500096,32500097,32500098,32500099,32500100,32500101,32500102,32500103,32500104,32500105,32500106,32500107,32500108,32500109,32500110,32500111,32500112,32500113,32500114,32500226,32500377,32500378,32500395,32500405,32500406,32500407,32508094,32508095,32508096,32508097,32508098,32508099,32508100,32508101,32508102,32508103,32508104,32508105,32508106,32508107,32508108,32508109,32508110,32508111,32508112,32508113,32508114,32508226,32508377,32508378,32508395,32508405,32508406,32508407,32516094,32516095,32516096,32516097,32516098,32516099,32516100,32516101,32516102,32516103,32516104,32516105,32516106,32516107,32516108,32516109,32516110,32516111,32516112,32516113,32516114,32516226,32516377,32516378,32516395,32524094,32524095,32524096,32524097,32524098,32524099,32524100,32524101,32524102,32524103,32524104,32524105,32524106,32524107,32524108,32524109,32524110,32524111,32524112,32524113,32524114,32524226,32524377,32524378,32524395,32532094,32532095,32532096,32532097,32532098,32532099,32532100,32532101,32532102,32532103,32532104,32532105,32532106,32532107,32532108,32532109,32532110,32532111,32532112,32532113,32532114,32532226,32532377,32532378,32532395,32540094,32540095,32540096,32540097,32540098,32540099,32540100,32540101,32540102,32540103,32540104,32540105,32540106,32540107,32540108,32540109,32540110,32540111,32540112,32540113,32540114,32540226,32548094,32548095,32548096,32548097,32548098,32548099,32548100,32548101,32548102,32548103,32548104,32548105,32548106,32548107,32548108,32548109,32548110,32548111,32548112,32548113,32548114,32548226,32556094,32556095,32556096,32556097,32556098,32556099,32556100,32556101,32556102,32556103,32556104,32556105,32556106,32556107,32556108,32556109,32556110,32556111,32556112,32556113,32556114,32556226,32564094,32564095,32564096,32564097,32564098,32564099,32564100,32564101,32564102,32564103,32564104,32564105,32564106,32564107,32564108,32564109,32564110,32564111,32564112,32564113,32564114,32564226,32572094,32572095,32572096,32572097,32572098,32572099,32572100,32572101,32572102,32572103,32572104,32572105,32572106,32572107,32572108,32572109,32572110,32572111,32572112,32572113,32572114,32572226,32580094,32580095,32580096,32580097,32580098,32580099,32580100,32580101,32580102,32580103,32580104,32580105,32580106,32580107,32580108,32580109,32580110,32580111,32580112,32580113,32580114,32580226,32580396,32588094,32588095,32588096,32588097,32588098,32588099,32588100,32588101,32588102,32588103,32588104,32588105,32588106,32588107,32588108,32588109,32588110,32588111,32588112,32588113,32588114,32588226,32588396,32596094,32596095,32596096,32596097,32596098,32596099,32596100,32596101,32596102,32596103,32596104,32596105,32596106,32596107,32596108,32596109,32596110,32596111,32596112,32596113,32596114,32596226,32596396,32604094,32604095,32604096,32604097,32604098,32604099,32604100,32604101,32604102,32604103,32604104,32604105,32604106,32604107,32604108,32604109,32604110,32604111,32604112,32604113,32604114,32604226,32604379,32604396,32612094,32612095,32612096,32612097,32612098,32612099,32612100,32612101,32612102,32612103,32612104,32612105,32612106,32612107,32612108,32612109,32612110,32612111,32612112,32612113,32612114,32612218,32612219,32612220,32612226,32612379,32612396,32620094,32620095,32620096,32620097,32620098,32620099,32620100,32620101,32620102,32620103,32620104,32620105,32620106,32620107,32620108,32620109,32620110,32620111,32620112,32620113,32620114,32620226,32620396,32628094,32628095,32628096,32628097,32628098,32628099,32628100,32628101,32628102,32628103,32628104,32628105,32628106,32628107,32628108,32628109,32628110,32628111,32628112,32628113,32628114,32628226,32628396,32636094,32636095,32636096,32636097,32636098,32636099,32636100,32636101,32636102,32636103,32636104,32636105,32636106,32636107,32636108,32636109,32636110,32636111,32636112,32636113,32636114,32636226,32636396,32644094,32644095,32644096,32644097,32644098,32644099,32644100,32644101,32644102,32644103,32644104,32644105,32644106,32644107,32644108,32644109,32644110,32644111,32644112,32644113,32644114,32644226,32652094,32652095,32652096,32652097,32652098,32652099,32652100,32652101,32652102,32652103,32652104,32652105,32652106,32652107,32652108,32652109,32652110,32652111,32652112,32652113,32652114,32652226,32660094,32660095,32660096,32660097,32660098,32660099,32660100,32660101,32660102,32660103,32660104,32660105,32660106,32660107,32660108,32660109,32660110,32660111,32660112,32660113,32660114,32660226,32668094,32668095,32668096,32668097,32668098,32668099,32668100,32668101,32668102,32668103,32668104,32668105,32668106,32668107,32668108,32668109,32668110,32668111,32668112,32668113,32668114,32668226,32676094,32676095,32676096,32676097,32676098,32676099,32676100,32676101,32676102,32676103,32676104,32676105,32676106,32676107,32676108,32676109,32676110,32676111,32676112,32676113,32676114,32676226,32684094,32684095,32684096,32684097,32684098,32684099,32684100,32684101,32684102,32684103,32684104,32684105,32684106,32684107,32684108,32684109,32684110,32684111,32684112,32684113,32684114,32684226,32684377,32684378,32684395,32692095,32692098,32692101,32692104,32692107,32692110,32692113,32692226,32692377,32692378,32692395,32700226,32700377,32700378,32700395,32708118,32708119,32708120,32708121,32708122,32708226,32708377,32708378,32708395,32708405,32708406,32708407,32716226,32716377,32716378,32716395,32716405,32716406,32716407,32724226,32724377,32724378,32724405,32724406,32724407,32732226,32740226,32740394,32748226,32748394,32756226,32756394,32764226,32772226,32780226,32780393,32788226,32788393,32796118,32796119,32796120,32796121,32796122,32796226,32804095,32804098,32804101,32804104,32804107,32804110,32804113,32804221,32804222,32804223,32804224,32804225,32804226,32804375,32812094,32812095,32812096,32812097,32812098,32812099,32812100,32812101,32812102,32812103,32812104,32812105,32812106,32812107,32812108,32812109,32812110,32812111,32812112,32812113,32812114,32812392,32820094,32820095,32820096,32820097,32820098,32820099,32820100,32820101,32820102,32820103,32820104,32820105,32820106,32820107,32820108,32820109,32820110,32820111,32820112,32820113,32820114,32820392,32828094,32828095,32828096,32828097,32828098,32828099,32828100,32828101,32828102,32828103,32828104,32828105,32828106,32828107,32828108,32828109,32828110,32828111,32828112,32828113,32828114,32836094,32836095,32836096,32836097,32836098,32836099,32836100,32836101,32836102,32836103,32836104,32836105,32836106,32836107,32836108,32836109,32836110,32836111,32836112,32836113,32836114,32836391,32844094,32844095,32844096,32844097,32844098,32844099,32844100,32844101,32844102,32844103,32844104,32844105,32844106,32844107,32844108,32844109,32844110,32844111,32844112,32844113,32844114,32844391,32852094,32852095,32852096,32852097,32852098,32852099,32852100,32852101,32852102,32852103,32852104,32852105,32852106,32852107,32852108,32852109,32852110,32852111,32852112,32852113,32852114,32860094,32860095,32860096,32860097,32860098,32860099,32860100,32860101,32860102,32860103,32860104,32860105,32860106,32860107,32860108,32860109,32860110,32860111,32860112,32860113,32860114,32860390,32868094,32868095,32868096,32868097,32868098,32868099,32868100,32868101,32868102,32868103,32868104,32868105,32868106,32868107,32868108,32868109,32868110,32868111,32868112,32868113,32868114,32868370,32868371,32868390,32876094,32876095,32876096,32876097,32876098,32876099,32876100,32876101,32876102,32876103,32876104,32876105,32876106,32876107,32876108,32876109,32876110,32876111,32876112,32876113,32876114,32876370,32876371,32884094,32884095,32884096,32884097,32884098,32884099,32884100,32884101,32884102,32884103,32884104,32884105,32884106,32884107,32884108,32884109,32884110,32884111,32884112,32884113,32884114,32884369,32884370,32884389,32892094,32892095,32892096,32892097,32892098,32892099,32892100,32892101,32892102,32892103,32892104,32892105,32892106,32892107,32892108,32892109,32892110,32892111,32892112,32892113,32892114,32892221,32892222,32892223,32892224,32892225,32892226,32892368,32892369,32892370,32892387,32900094,32900095,32900096,32900097,32900098,32900099,32900100,32900101,32900102,32900103,32900104,32900105,32900106,32900107,32900108,32900109,32900110,32900111,32900112,32900113,32900114,32900226,32900368,32900369,32900388,32908094,32908095,32908096,32908097,32908098,32908099,32908100,32908101,32908102,32908103,32908104,32908105,32908106,32908107,32908108,32908109,32908110,32908111,32908112,32908113,32908114,32908226,32908386,32916094,32916095,32916096,32916097,32916098,32916099,32916100,32916101,32916102,32916103,32916104,32916105,32916106,32916107,32916108,32916109,32916110,32916111,32916112,32916113,32916114,32916226,32916387,32924094,32924095,32924096,32924097,32924098,32924099,32924100,32924101,32924102,32924103,32924104,32924105,32924106,32924107,32924108,32924109,32924110,32924111,32924112,32924113,32924114,32924226,32924385,32924387,32932094,32932095,32932096,32932097,32932098,32932099,32932100,32932101,32932102,32932103,32932104,32932105,32932106,32932107,32932108,32932109,32932110,32932111,32932112,32932113,32932114,32932226,32932386,32940094,32940095,32940096,32940097,32940098,32940099,32940100,32940101,32940102,32940103,32940104,32940105,32940106,32940107,32940108,32940109,32940110,32940111,32940112,32940113,32940114,32940226,32940384,32948094,32948095,32948096,32948097,32948098,32948099,32948100,32948101,32948102,32948103,32948104,32948105,32948106,32948107,32948108,32948109,32948110,32948111,32948112,32948113,32948114,32948226,32948385,32956094,32956095,32956096,32956097,32956098,32956099,32956100,32956101,32956102,32956103,32956104,32956105,32956106,32956107,32956108,32956109,32956110,32956111,32956112,32956113,32956114,32956226,32956383,32964094,32964095,32964096,32964097,32964098,32964099,32964100,32964101,32964102,32964103,32964104,32964105,32964106,32964107,32964108,32964109,32964110,32964111,32964112,32964113,32964114,32964226,32964384,32972094,32972095,32972096,32972097,32972098,32972099,32972100,32972101,32972102,32972103,32972104,32972105,32972106,32972107,32972108,32972109,32972110,32972111,32972112,32972113,32972114,32972226,32980094,32980095,32980096,32980097,32980098,32980099,32980100,32980101,32980102,32980103,32980104,32980105,32980106,32980107,32980108,32980109,32980110,32980111,32980112,32980113,32980114,32980226,32980383,32988094,32988095,32988096,32988097,32988098,32988099,32988100,32988101,32988102,32988103,32988104,32988105,32988106,32988107,32988108,32988109,32988110,32988111,32988112,32988113,32988114,32988226,32988382,32996094,32996095,32996096,32996097,32996098,32996099,32996100,32996101,32996102,32996103,32996104,32996105,32996106,32996107,32996108,32996109,32996110,32996111,32996112,32996113,32996114,32996226,32996380,32996382,33004094,33004095,33004096,33004097,33004098,33004099,33004100,33004101,33004102,33004103,33004104,33004105,33004106,33004107,33004108,33004109,33004110,33004111,33004112,33004113,33004114,33004226,33004381,33012094,33012095,33012096,33012097,33012098,33012099,33012100,33012101,33012102,33012103,33012104,33012105,33012106,33012107,33012108,33012109,33012110,33012111,33012112,33012113,33012114,33012226,33012380,33020094,33020095,33020096,33020097,33020098,33020099,33020100,33020101,33020102,33020103,33020104,33020105,33020106,33020107,33020108,33020109,33020110,33020111,33020112,33020113,33020114,33020226,33020356,33020378,33020380,33028094,33028095,33028096,33028097,33028098,33028099,33028100,33028101,33028102,33028103,33028104,33028105,33028106,33028107,33028108,33028109,33028110,33028111,33028112,33028113,33028114,33028226,33028355,33028356,33028357,33028379,33036094,33036095,33036096,33036097,33036098,33036099,33036100,33036101,33036102,33036103,33036104,33036105,33036106,33036107,33036108,33036109,33036110,33036111,33036112,33036113,33036114,33036226,33036354,33036355,33036356,33036378,33044094,33044095,33044096,33044097,33044098,33044099,33044100,33044101,33044102,33044103,33044104,33044105,33044106,33044107,33044108,33044109,33044110,33044111,33044112,33044113,33044114,33044226,33044353,33044354,33044355,33052094,33052095,33052096,33052097,33052098,33052099,33052100,33052101,33052102,33052103,33052104,33052105,33052106,33052107,33052108,33052109,33052110,33052111,33052112,33052113,33052114,33052226,33052354,33052375,33052377,33060094,33060095,33060096,33060097,33060098,33060099,33060100,33060101,33060102,33060103,33060104,33060105,33060106,33060107,33060108,33060109,33060110,33060111,33060112,33060113,33060114,33060226,33060374,33060376,33068094,33068095,33068096,33068097,33068098,33068099,33068100,33068101,33068102,33068103,33068104,33068105,33068106,33068107,33068108,33068109,33068110,33068111,33068112,33068113,33068114,33068226,33068375,33076094,33076095,33076096,33076097,33076098,33076099,33076100,33076101,33076102,33076103,33076104,33076105,33076106,33076107,33076108,33076109,33076110,33076111,33076112,33076113,33076114,33076226,33076374,33084094,33084095,33084096,33084097,33084098,33084099,33084100,33084101,33084102,33084103,33084104,33084105,33084106,33084107,33084108,33084109,33084110,33084111,33084112,33084113,33084114,33084226,33092094,33092095,33092096,33092097,33092098,33092099,33092100,33092101,33092102,33092103,33092104,33092105,33092106,33092107,33092108,33092109,33092110,33092111,33092112,33092113,33092114,33092226,33100094,33100095,33100096,33100097,33100098,33100099,33100100,33100101,33100102,33100103,33100104,33100105,33100106,33100107,33100108,33100109,33100110,33100111,33100112,33100113,33100114,33100226,33100346,33100370,33108094,33108095,33108096,33108097,33108098,33108099,33108100,33108101,33108102,33108103,33108104,33108105,33108106,33108107,33108108,33108109,33108110,33108111,33108112,33108113,33108114,33108226,33108369,33108371,33116094,33116095,33116096,33116097,33116098,33116099,33116100,33116101,33116102,33116103,33116104,33116105,33116106,33116107,33116108,33116109,33116110,33116111,33116112,33116113,33116114,33116226,33116368,33116370,33124094,33124095,33124096,33124097,33124098,33124099,33124100,33124101,33124102,33124103,33124104,33124105,33124106,33124107,33124108,33124109,33124110,33124111,33124112,33124113,33124114,33124226,33124367,33124369,33132094,33132095,33132096,33132097,33132098,33132099,33132100,33132101,33132102,33132103,33132104,33132105,33132106,33132107,33132108,33132109,33132110,33132111,33132112,33132113,33132114,33132226,33132336,33132337,33132368,33140094,33140095,33140096,33140097,33140098,33140099,33140100,33140101,33140102,33140103,33140104,33140105,33140106,33140107,33140108,33140109,33140110,33140111,33140112,33140113,33140114,33140226,33140333,33140334,33140335,33140336,33140337,33148094,33148095,33148096,33148097,33148098,33148099,33148100,33148101,33148102,33148103,33148104,33148105,33148106,33148107,33148108,33148109,33148110,33148111,33148112,33148113,33148114,33148226,33148333,33148334,33148335,33156094,33156095,33156096,33156097,33156098,33156099,33156100,33156101,33156102,33156103,33156104,33156105,33156106,33156107,33156108,33156109,33156110,33156111,33156112,33156113,33156114,33156226,33156289,33156333,33156362,33156364,33164094,33164095,33164096,33164097,33164098,33164099,33164100,33164101,33164102,33164103,33164104,33164105,33164106,33164107,33164108,33164109,33164110,33164111,33164112,33164113,33164114,33164226,33164289,33164361,33164363,33172094,33172095,33172096,33172097,33172098,33172099,33172100,33172101,33172102,33172103,33172104,33172105,33172106,33172107,33172108,33172109,33172110,33172111,33172112,33172113,33172114,33172226,33172239,33172289,33172310,33172362,33180094,33180095,33180096,33180097,33180098,33180099,33180100,33180101,33180102,33180103,33180104,33180105,33180106,33180107,33180108,33180109,33180110,33180111,33180112,33180113,33180114,33180226,33180289,33180310,33180323,33180324,33180361,33188094,33188095,33188096,33188097,33188098,33188099,33188100,33188101,33188102,33188103,33188104,33188105,33188106,33188107,33188108,33188109,33188110,33188111,33188112,33188113,33188114,33188226,33188310,33188357,33188359,33196094,33196095,33196096,33196097,33196098,33196099,33196100,33196101,33196102,33196103,33196104,33196105,33196106,33196107,33196108,33196109,33196110,33196111,33196112,33196113,33196114,33196160,33196183,33196226,33196310,33196358,33204094,33204095,33204096,33204097,33204098,33204099,33204100,33204101,33204102,33204103,33204104,33204105,33204106,33204107,33204108,33204109,33204110,33204111,33204112,33204113,33204114,33204160,33204183,33204226,33204354,33204356,33204357,33212094,33212095,33212096,33212097,33212098,33212099,33212100,33212101,33212102,33212103,33212104,33212105,33212106,33212107,33212108,33212109,33212110,33212111,33212112,33212113,33212114,33212160,33212183,33212226,33212355,33220094,33220095,33220096,33220097,33220098,33220099,33220100,33220101,33220102,33220103,33220104,33220105,33220106,33220107,33220108,33220109,33220110,33220111,33220112,33220113,33220114,33220160,33220183,33220226,33220353,33220354,33228094,33228095,33228096,33228097,33228098,33228099,33228100,33228101,33228102,33228103,33228104,33228105,33228106,33228107,33228108,33228109,33228110,33228111,33228112,33228113,33228114,33228160,33228183,33228349,33228352,33236097,33236098,33236099,33236100,33236101,33236102,33236103,33236104,33236105,33236106,33236107,33236108,33236109,33236110,33236111,33236112,33236113,33236114,33236115,33236116,33236117,33236118,33236119,33236120,33236121,33236122,33236123,33236124,33236125,33236126,33236127,33236128,33236129,33236130,33236131,33236133,33236134,33236135,33236136,33236137,33236138,33236139,33236140,33236141,33236142,33236143,33236144,33236145,33236146,33236147,33236148,33236149,33236150,33236151,33236152,33236153,33236154,33236155,33236156,33236157,33236158,33236159,33236160,33236183,33236184,33236185,33236186,33236187,33236188,33236189,33236190,33236191,33236192,33236193,33236194,33236195,33236196,33236197,33236198,33236199,33236200,33236201,33236202,33236203,33236204,33236205,33236206,33236207,33236208,33236209,33236210,33236212,33236213,33236214,33236215,33236216,33236217,33236218,33236219,33236220,33236221,33236222,33236223,33236224,33236225,33236347,33236350,33244195,33244196,33244197,33244198,33244199,33244345,33244348,33252195,33252196,33252197,33252198,33252199,33252343,33252346,33260064,33260065,33260066,33260067,33260068,33260069,33260070,33260071,33260072,33260073,33260074,33260075,33260076,33260077,33260078,33260079,33260080,33260081,33260082,33260083,33260084,33260085,33260086,33260087,33260088,33260089,33260090,33260091,33260092,33260093,33260094,33260095,33260096,33260097,33260098,33260099,33260100,33260101,33260102,33260103,33260104,33260105,33260106,33260107,33260108,33260109,33260110,33260111,33260112,33260113,33260114,33260115,33260116,33260117,33260118,33260119,33260120,33260121,33260122,33260123,33260124,33260125,33260126,33260127,33260128,33260129,33260130,33260131,33260194,33260195,33260196,33260197,33260198,33260199,33260200,33260201,33260202,33260203,33260204,33260205,33260341,33260344,33260345,33268055,33268132,33268342,33276340,33284337,33284338,33292191,33292192,33292207,33292208,33292334,33292335,33300331,33300332,33308327,33308328,33316289,33324289,33332289,33332310,33340157,33340158,33340185,33340186,33340289,33340310,33348157,33348158,33348185,33348186,33348289,33348310,33356156,33356157,33356158,33356159,33356184,33356185,33356186,33356187,33356289,33356310,33364289,33364310,33372289,33372310,33380289,33380310,33388289,33388310,33396289,33396310,33404289,33404310,33404781,33404782,33412289,33412310,33412781,33412782,33420209,33420289,33420310,33428209,33428289,33428310,33436055,33436132,33436289,33436310,33444056,33444057,33444058,33444059,33444060,33444061,33444062,33444063,33444064,33444065,33444066,33444067,33444068,33444069,33444070,33444071,33444072,33444073,33444074,33444075,33444076,33444077,33444078,33444079,33444080,33444081,33444082,33444083,33444084,33444085,33444086,33444087,33444088,33444089,33444090,33444091,33444092,33444093,33444094,33444095,33444096,33444097,33444098,33444099,33444100,33444101,33444102,33444103,33444104,33444105,33444106,33444107,33444108,33444109,33444110,33444111,33444112,33444113,33444114,33444115,33444116,33444117,33444118,33444119,33444120,33444121,33444122,33444123,33444124,33444125,33444126,33444127,33444128,33444129,33444130,33444131,33444289,33444310,33452289,33452310,33460134,33460289,33460310,33468050,33468051,33468052,33468053,33468054,33468055,33468056,33468057,33468058,33468059,33468060,33468061,33468062,33468063,33468064,33468065,33468066,33468067,33468068,33468069,33468070,33468071,33468072,33468073,33468074,33468075,33468076,33468077,33468078,33468079,33468080,33468081,33468082,33468083,33468084,33468085,33468086,33468087,33468088,33468089,33468090,33468091,33468092,33468093,33468094,33468095,33468096,33468097,33468098,33468099,33468100,33468101,33468102,33468103,33468104,33468105,33468106,33468107,33468108,33468109,33468110,33468111,33468112,33468113,33468114,33468115,33468116,33468117,33468118,33468119,33468120,33468121,33468122,33468123,33468124,33468125,33468126,33468127,33468128,33468129,33468130,33468131,33468134,33468212,33468213,33468214,33468215,33468216,33468217,33468218,33468219,33468220,33468221,33468222,33468223,33468224,33468225,33468226,33468227,33468228,33468229,33468230,33468231,33468232,33468233,33468234,33468235,33468236,33468237,33468238,33468239,33468240,33468241,33468242,33468243,33468244,33468245,33468246,33468247,33468248,33468249,33468250,33468251,33468252,33468253,33468254,33468255,33468256,33468257,33468258,33468259,33468260,33468261,33468262,33468263,33468264,33468265,33468266,33468267,33468268,33468269,33468270,33468271,33468272,33468273,33468274,33468275,33468276,33468277,33468278,33468279,33468280,33468281,33468282,33468283,33468284,33468285,33468286,33468287,33468288,33468289,33468310,33468311,33476310,33476311,33484310,33492310,33500310,33508310,33516310,33524310,33532310,33540310,33548134,33548209,33548310,33556310,33564310,33572310,33580310,33588310,33596310,33603273,33603274,33604310,33611273,33611274,33612310,33620310,33628310,33628311,33628781,33628782,33635272,33636046,33636047,33636048,33636049,33636050,33636051,33636052,33636053,33636054,33636055,33636056,33636057,33636058,33636059,33636060,33636061,33636062,33636063,33636064,33636065,33636066,33636067,33636068,33636069,33636070,33636071,33636072,33636073,33636074,33636075,33636076,33636077,33636078,33636079,33636080,33636081,33636082,33636083,33636084,33636085,33636086,33636087,33636088,33636089,33636090,33636091,33636092,33636093,33636094,33636095,33636096,33636097,33636098,33636099,33636100,33636101,33636102,33636103,33636104,33636105,33636106,33636107,33636108,33636109,33636110,33636111,33636112,33636113,33636114,33636115,33636116,33636117,33636118,33636119,33636120,33636121,33636122,33636123,33636124,33636125,33636126,33636127,33636128,33636129,33636130,33636131,33636212,33636213,33636214,33636215,33636216,33636217,33636218,33636219,33636220,33636221,33636222,33636223,33636224,33636225,33636226,33636227,33636228,33636229,33636230,33636231,33636232,33636233,33636234,33636235,33636236,33636237,33636238,33636239,33636240,33636241,33636242,33636243,33636244,33636245,33636246,33636247,33636248,33636249,33636250,33636251,33636252,33636253,33636254,33636255,33636256,33636257,33636258,33636259,33636260,33636261,33636262,33636263,33636264,33636265,33636266,33636267,33636268,33636269,33636270,33636271,33636272,33636273,33636274,33636275,33636276,33636277,33636278,33636279,33636280,33636281,33636282,33636283,33636284,33636285,33636286,33636287,33636288,33636289,33636290,33636291,33636292,33636293,33636294,33636295,33636296,33636297,33636298,33636299,33636300,33636301,33636302,33636303,33636304,33636305,33636306,33636307,33636308,33636309,33636310,33636311,33636781,33636782,33643271,33643272,33643273,33651272,33660169,33660170,33660171,33660172,33660173,33660174,33668134,33668169,33668174,33668209,33676169,33676174,33684169,33684174,33692169,33692174,33700169,33700174,33708169,33708174,33716169,33716174,33724169,33724174,33732169,33732170,33732171,33732172,33732173,33732174,33788134,33788209,33796134,33796209,33860131,33860212,33868131,33868212,33876131,33876212,33884131,33884212,33892131,33892212,33900131,33900212,33908131,33908212,33916131,33916212,33924131,33924212,33932131,33932212,33940131,33940212,33940387,33940388,33948131,33948212,33948387,33948388,33956131,33956212,33964131,33964212,33972131,33972212,33980131,33980212,33988131,33988212,33996131,33996212,34004131,34004212,34012131,34012212,34020131,34020212,34028131,34028212,34036131,34036212,34044131,34044212,34084796,34092795,34092796,34092797,34100796,34108217,34108218,34116217,34116218,34236497,34236498,34244497,34244498,34324735,34324736,34331132,34331133,34332735,34332736,34339132,34339133,34340735,34492817,34492818,34500818,34667363,34675363,34683363,34691363,34699363,34707363,34715363,34723363,34731363,34739363,34747363,34755363,34763363,34771363,34779363,34780161,34780162,34787363,34788161,34795363,34803363,34811363,34819363,34827363,34835363,34843363,34851363,34859363,34867363,34875363,34876099,34876100,34876269,34876270,34883363,34884099,34884100,34884269,34884270,34891266,34891267,34891363,34899266,34899267,34899363,34900533,34900534,34907363,34908534,34915363,34923363,34931363,34939363,34947363,34948485,34948486,34955363,34956369,34956370,34956485,34956486,34963363,34964369,34964370,34971363,34979363,34980731,34987363,34988731,34988732,34995363,34996731,35003363,35011363,35019363,35027363,35028126,35028127,35028128,35028163,35028164,35028165,35035363,35036124,35036125,35036126,35036127,35036128,35036129,35036162,35036163,35036164,35036165,35036166,35036167,35043363,35044122,35044123,35044124,35044125,35044126,35044127,35044164,35044165,35044166,35044167,35044168,35044169,35051363,35052123,35052124,35052125,35052166,35052167,35052168,35052213,35052214,35059363,35060213,35060214,35067363,35075363,35083363,35091363,35099363,35100774,35100775,35107363,35108774,35115363,35123363,35124757,35124758,35131363,35132758,35139363,35147363,35155363,35163363,35171363,35172325,35172326,35179363,35180325,35187363,35195363,35203363,35211363,35219363,35227363,35235363,35236098,35236193,35243363,35244098,35244099,35244192,35244193,35251363,35252097,35252098,35252099,35252192,35252193,35252194,35259363,35260097,35260098,35260099,35260192,35260193,35260194,35267363,35268096,35268097,35268098,35268193,35268194,35268195,35275363,35276096,35276097,35276098,35276193,35276194,35276195,35283363,35284096,35284097,35284194,35284195,35291363,35292065,35292097,35292194,35299363,35300064,35300065,35300066,35307363,35315363,35323363,35331363,35339363,35347363,35355363,35363363,35363956,35371363,35371956,35379363,35387363,35395363,35403363,35411363,35419363,35427363,35435363,35443363,35451363,35459363,35467363,35475363,35483363,35491363,35492500,35492501,35499934,35499935,35500500,35500501,35507933,35507934,35507935,35548225,35548226,35556097,35556194,35556226,35564096,35564097,35564194,35564195,35572096,35572097,35572098,35572193,35572194,35572195,35580096,35580097,35580098,35580193,35580194,35580195,35580459,35580460,35588097,35588098,35588099,35588192,35588193,35588194,35588459,35588460,35596097,35596098,35596099,35596192,35596193,35596194,35604098,35604099,35604192,35604193,35612098,35612193,35644728,35644729,35652728,35652729,35788077,35788078,35796078,35796123,35796124,35796125,35796166,35796167,35796168,35804122,35804123,35804124,35804125,35804126,35804127,35804164,35804165,35804166,35804167,35804168,35804169,35812124,35812125,35812126,35812127,35812128,35812129,35812162,35812163,35812164,35812165,35812166,35812167,35820126,35820127,35820128,35820163,35820164,35820165,35876341,35876342,35884341,35884342,35964191,35964192,35972191,35972192,36043553,36043554,36051553,36051554,36060130,36068129,36068130,36076130,36196116,36196117,36196174,36196175,36204116,36204117,36204174,36204175,36220065,36220066,36220067,36220068,36220069,36220070,36220071,36220072,36220073,36220074,36220075,36220076,36220077,36220078,36220079,36220080,36220081,36220082,36220083,36220084,36220085,36220086,36220087,36220088,36220089,36220090,36220091,36220092,36220093,36220094,36220095,36220096,36220097,36220098,36220099,36220100,36220101,36220102,36220103,36220104,36220105,36220106,36220107,36220108,36220109,36220110,36220111,36220112,36220113,36220114,36220115,36220118,36220119,36220120,36220121,36220123,36220124,36220125,36220126,36220128,36220129,36220130,36220131,36220133,36220134,36220135,36220136,36220137,36220138,36220139,36220140,36220141,36220142,36220143,36220144,36220145,36220147,36220148,36220149,36220150,36220152,36220153,36220154,36220155,36220157,36220158,36220159,36220160,36220161,36220162,36220163,36220164,36220165,36220166,36220167,36220168,36220169,36220171,36220172,36220173,36220174,36220175,36220176,36220177,36220178,36220179,36220180,36220181,36220182,36220183,36220184,36220185,36220186,36220187,36220188,36220189,36220190,36220191,36220192,36220193,36220194,36220195,36220196,36220197,36220198,36220199,36220200,36220201,36220202,36220203,36220204,36220205,36220206,36220207,36220208,36220209,36220210,36220211,36220212,36220213,36220214,36220215,36220216,36220217,36220218,36220219,36220220,36220221,36220222,36220223,36220224,36220225,36228065,36228066,36228067,36228068,36228069,36228070,36228071,36228072,36228073,36228074,36228075,36228076,36228077,36228078,36228079,36228080,36228081,36228082,36228083,36228084,36228085,36228086,36228087,36228088,36228089,36228090,36228091,36228092,36228093,36228094,36228095,36228096,36228097,36228098,36228099,36228100,36228101,36228102,36228103,36228104,36228105,36228106,36228107,36228108,36228109,36228110,36228111,36228112,36228113,36228114,36228115,36228118,36228119,36228120,36228121,36228123,36228124,36228125,36228126,36228128,36228129,36228130,36228131,36228133,36228134,36228135,36228136,36228137,36228138,36228139,36228140,36228141,36228142,36228143,36228144,36228145,36228147,36228148,36228149,36228150,36228152,36228153,36228154,36228155,36228157,36228158,36228159,36228160,36228161,36228162,36228163,36228164,36228165,36228166,36228167,36228168,36228169,36228171,36228172,36228173,36228174,36228175,36228176,36228177,36228178,36228179,36228180,36228181,36228182,36228183,36228184,36228185,36228186,36228187,36228188,36228189,36228190,36228191,36228192,36228193,36228194,36228195,36228196,36228197,36228198,36228199,36228200,36228201,36228202,36228203,36228204,36228205,36228206,36228207,36228208,36228209,36228210,36228211,36228212,36228213,36228214,36228215,36228216,36228217,36228218,36228219,36228220,36228221,36228222,36228223,36228224,36228225,36260116,36260117,36260174,36260175,36268116,36268117,36268174,36268175,36347806,36347807,36355806,36355807,36411890,36419889,36419890,36419891,36427890,36508783,36516782,36516783,36516784,36524783,36627893,36627894,36635894,36763969,36763970,36771969,36804721,36812721,36812722,36843330,36843331,36851330,36883711,36883712,36883713,36891712,36924578,36924579,36932578,36932579,36932580,36940579,36980753,36988752,36988753,36988754,37012544,37012545,37020544,37020545];var Dg=Object.keys(Xn).filter(s=>Xn[s].model),Ng=Object.fromEntries(Object.entries(Xn).map(([s,e])=>[s,e.price]));var eu=ue.grandstand;var tu=[],nu=[],iu=[];function ru(s=[]){iu=ja(ue,s);let e=new Set(s);tu=ue.stablePlots.filter(t=>Nr(t,e)),nu=ue.stablePlots.filter(t=>!Nr(t,e))}ru();var Kg=new Set(Qa);var e0=[{id:"papa",name:"\uD30C\uD30C\uB2ED",x:-68,z:31,w:6,d:3.2,colors:["#d8402b","#f6b23a"]},{id:"bunsik",name:"\uB450\uAE08\uBD84\uC2DD",x:68,z:31,w:6,d:3.2,colors:["#2f7d55","#f2d16b"]}];var su={...ue.lobbyProps.find(s=>s.type==="snack"),id:"lobby",name:"\uB85C\uBE44 \uB9E4\uC810"},jg=[...e0,su];var Qg={x0:-62,x1:62,z0:34,z1:eu.terrace.z0-1,y:.05};var{x0:ou,x1:au,zFront:lu,zBack:r4,terrace:cu,doors:t0}=ue.grandstand,s4=Object.freeze({id:"village-entrance",name:"\uB9C8\uC744 \uC785\uAD6C",icon:"\u{1F3E1}",x:-171,z:202,y:2.8,sign:{x:-171,z:206}}),o4=Object.freeze({id:"race-entrance",name:"\uACBD\uB9C8\uC7A5 \uC785\uAD6C",icon:"\u{1F3DF}\uFE0F",x:(t0.front[0][0]+t0.front[0][1])/2,z:cu.z0-3,y:2.8,sign:{x:-52,z:46}});var Fr=Za.approach,a4=Object.freeze({id:"training-office",name:"\uD6C8\uB828\uC0AC",icon:"\u{1F3C7}",x:Fr.x+7,z:Fr.z+4,y:2.4,approach:{x:Fr.x+7,z:Fr.z+6}});var uu={x:(ou+au)/2,z:lu-3};var Ur=ue.grandstand,m4=[Ur.bridge,Ur.ramp,Ur.plazaStairs,Ur.backBalcony];var po=ue.geometry,g4=po.straight/2+po.turnRadius+(ue.railOuterLane+1)*ue.lanePitch,fu=po.cz-Math.min(...ue.courses.chute1000.map(s=>s[1])),pu=Math.tan(Ht.degToRad(23)),x4=fu*1.1/pu;var Xt=ue.grandstand,T4=[...Xt.doors.front.map(([s,e])=>({x:(s+e)/2+2.5,z:Xt.terrace.z0-2})),{x:Xt.ramp.x0-2,z:Xt.ramp.z0+Xt.ramp.westOpen+1.8},{x:Xt.plazaStairs.x1+2,z:(Xt.plazaStairs.z0+Xt.plazaStairs.z1)/2+2.5}];var F4=ue.villageDecor.find(s=>s.type==="stone-well");function n0(s){let e=new Map,t=new Map;return s.traverse(n=>{if(!n.isMesh)return;e.set(n,n.material);let i=r=>{if(!t.has(r)){let o=r.clone();o.transparent=!0,o.depthWrite=!1,o.onBeforeCompile=r.onBeforeCompile,o.customProgramCacheKey=r.customProgramCacheKey,t.set(r,o)}return t.get(r)};n.material=Array.isArray(n.material)?n.material.map(i):i(n.material)}),{set(n){for(let[i,r]of t)r.opacity=i.opacity*n},dispose(){for(let[n,i]of e)n.material=i;for(let n of t.values())n.dispose()}}}var Or={Perfect:{freeze:52,scale:.78,recover:65,light:4,tail:.26,color:16768899},Good:{freeze:33,scale:.86,recover:48,light:2,tail:.18,color:16773834},Bad:{freeze:17,scale:.94,recover:34,light:1,tail:.1,color:16760992}},gu={Perfect:72,Good:48,Bad:24},i0=new v(0,1,0);function r0(s){let e=new at,t=s.ground.height(z.x,z.z);e.name="playground-pingpong",e.position.set(z.x,t,z.z),s.scene.add(e);let n=new Set,i=new Set,r=new Set,o=(g,T=.85)=>new vi({color:g,roughness:T}),a=(g,T)=>new Fn({color:g,...T}),l=(g,T,R=e)=>{n.add(g),i.add(T);let F=new rn(g,T);return R.add(F),F},c=new Map;function u(g,T,R,F,O,B,H){let X=new On(g,T,R).translate(F,O,B);c.has(H)||c.set(H,[]),c.get(H).push(X)}let h=o(13875343,.94),d=o(2652533),f=o(16774361),p=o(7950902,.94),m=o(2443083);u(lt.w,.024,lt.d,0,.004,0,h),u(z.length,.1,z.width,0,.75,0,d);for(let g of[-1,1]){for(let T of[-1,1])u(.095,.71,.095,g*1.9,.355,T*1.02,p);u(.025,.005,z.width,g*(z.length/2-.02),.802,0,f),u(z.length,.005,.025,0,.802,g*(z.width/2-.02),f),u(.035,.22,.035,0,.91,g*1.48,m),u(.025,.008,lt.d,g*(lt.w/2-.05),.02,0,f),u(lt.w,.008,.025,0,.02,g*(lt.d/2-.05),f)}u(z.length,.004,.018,0,.801,0,f),u(.027,.023,3,0,1.013,0,f);for(let[g,T]of c){let R=l(Ca(T),g);R.receiveShadow=!0,T.forEach(F=>F.dispose())}let _=document.createElement("canvas");_.width=64,_.height=32;let y=_.getContext("2d");y.fillStyle="#25474b";for(let g=0;g<64;g+=4)y.fillRect(g,0,1,32);for(let g=0;g<32;g+=4)y.fillRect(0,g,64,1);let w=new gi(_);w.colorSpace=Oe,w.magFilter=ui,r.add(w);let S=l(new sn(3,.195),a(16777215,{map:w,alphaTest:.45,side:Tt}));S.position.y=.903,S.rotation.y=Math.PI/2;let b=new at;e.add(b),b.visible=!1,b.name="pingpong-ball";let E=l(new _i(z.radius,10,6),a(16775400),b);l(E.geometry,a(4998711,{side:_r}),b).scale.setScalar(1.12);let C=l(new xi(1,18),a(4998711,{transparent:!0,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.visible=!1;let L=l(new dt(.125,.146,24),a(16774361,{transparent:!0,opacity:.85,side:Tt,depthWrite:!1}));L.rotation.x=-Math.PI/2,L.visible=!1;let A=new at;e.add(A),A.visible=!1,A.name="pingpong-target";let N=[l(new dt(.186,.21,38),a(16777215,{depthTest:!1,depthWrite:!1}),A),l(new dt(.19,.21,38),a(16777215,{depthTest:!1,depthWrite:!1}),A)];for(let g of N)g.renderOrder=5;let I=l(new dt(.12,.19,5),a(16769945,{transparent:!0,opacity:.72,side:Tt}));I.visible=!1,I.rotation.x=-Math.PI/2;let U=Array.from({length:3},(g,T)=>{let R=l(new sn(2.18,.825),a(16769945,{transparent:!0,depthWrite:!1,opacity:.07}));return R.rotation.x=-Math.PI/2,R.position.set(1.135,.809,(T-1)*.85),R.visible=!1,R}),V=l(new dt(.09,.11,18),a(16768899,{side:Tt,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.visible=!1;let W=new yi(.125,.125,.018,20).rotateX(Math.PI/2).scale(1,1.1,1).translate(0,.145,0),k=W.clone().scale(.96,.96,.6).translate(0,0,-.008),ne=new On(.038,.11,.032).translate(0,-.006,0),re=o(11882051),j=o(3422519);function Q(){let g=new at;return l(W,re,g),l(k,j,g),l(ne,p,g),g}let ee=new dt(.111,.125,20).scale(1,1.1,1).translate(0,.145,0),xe=[0,1].map(()=>l(ee,a(16768899,{transparent:!0,depthWrite:!1,side:Tt}),s.scene)),fe=new sn(.055,.055).rotateZ(Math.PI/4),ae=new mi(fe,a(16768899,{side:Tt,transparent:!0,depthWrite:!1}),4);n.add(fe),i.add(ae.material),e.add(ae),ae.visible=!1,ae.frustumCulled=!1;let ke=new Le,Ne=new ze(new Float32Array(36),3),je=new ze(new Float32Array(48),4),Pe=[];for(let g=0;g<5;g++)Pe.push(g*2,g*2+1,g*2+2,g*2+1,g*2+3,g*2+2);ke.setAttribute("position",Ne),ke.setAttribute("color",je),ke.setIndex(Pe);let Ae=l(ke,a(16777215,{transparent:!0,vertexColors:!0,depthWrite:!1,side:Tt,opacity:.63}));Ae.frustumCulled=!1,Ae.visible=!1;let Qe=new Ai,et=new Dn(new v(0,1,0),-t-.8),He=new v(z.x+1.5,t+.8,z.z),Ge=new de,Ye=new ot,J=new me,un=new me,qt=new me,Yt=new oe,hn=new oe,dn=new oe,pt=new me,Rt=new v,Se=new v,mt=new v,Fe=new v,gt=new v,ie=new v,fn=new v,pn=new v,Yn=new v,Zn=new me,Zt=null,Ct=0,Pt=new Ti,It=new v,Ve=new v,zt=new Map,ye=null,he=null,Jn=null,mn=!1,Ze=z.z;function $n(g,T){let R=js(g),F=Q(),O=za({player:g,mobile:s.mobile,avatar:{id:T}},R,"racket",F);return O?{grip:O,model:F,avatar:T,bones:[R.parent,R.parent.parent,R],before:[]}:null}function gn(g){g?.before.length&&(g.bones.forEach((T,R)=>T.quaternion.copy(g.before[R])),g.before=[])}function zi(g,T,R,F,O){g.getWorldPosition(fn),T.getWorldPosition(pn).sub(fn).normalize(),Yn.set(R,F,O).normalize().applyQuaternion(J);let B=g.parent.getWorldQuaternion(Zn).invert();pn.applyQuaternion(B),Yn.applyQuaternion(B),g.quaternion.premultiply(un.setFromUnitVectors(pn,Yn))}function Li(g,T,R,F,O,B){if(!g)return;g.before=g.bones.map(Ue=>Ue.quaternion.clone());let H=F?Math.max(0,O-B):0,X=F?Math.max(0,1-H/(F.smash?420:310)):R*.68,le=F?.backhand?-1:1;T.getWorldQuaternion(J);let[$,se,_e]=g.bones;zi(se,$,-.85,-.65,.15+X*.25),zi($,_e,-1,.12+X*.15,.15+X*.4),pt.copy(J).multiply(an([0,-.3,1],[0,1,.3])).multiply(un.setFromAxisAngle(i0,le*X*.72)),g.grip.update({handOrientation:pt,rotation:[.25,-le*(.2+X*.5),.82+X*.18]})}function kr(){Jn||(Jn=s.asset("/assets/avatars-farm/girl.glb").then(g=>{if(mn)return;let T=new at,R=Pa(g.scene);T.add(R),s.scene.add(T),T.visible=!1,T.name="pingpong-computer",T.rotation.y=-Math.PI/2;let F=new Ei(R),O=g.animations.find($=>$.name==="idle"),B=g.animations.find($=>$.name==="walk"),H=[O&&F.clipAction(O),B&&F.clipAction(B)];H[0]?.play(),F.update(.01),R.traverse($=>{$.isSkinnedMesh&&$.computeBoundingBox()});let X=new qe().setFromObject(R),le=X.max.y-X.min.y;le>.1&&(R.scale.setScalar(1.75/le),R.position.y=-X.min.y*R.scale.y+.012),he={actor:T,model:R,mixer:F,actions:H,action:0,arm:$n(T,"girl"),tossArm:js(T,"Left")?.parent?.parent}}).catch(()=>{Jn=null}))}function Hr(g,T,R,F,O,B,H){g&&kr(),T&&(!ye||ye.avatar!==s.avatar.id)&&(ye?.grip.dispose(),ye=$n(s.player,s.avatar.id)),!T&&ye&&(gn(ye),ye.grip.dispose(),ye=null);let X=B?performance.now()-B.at:1/0,le=Or[B?.grade]??Or.Good,$=H.freeze?B?.smash?gu[B.grade]??48:le.freeze:0,se=X<450?B:null;ye&&Li(ye,s.player,O,se,X,$);for(let ht=0;ht<xe.length;ht++){let Z=xe[ht],Me=B?.smash?80:45;Z.visible=!!ye&&H.ghost&&X>=ht*14&&X<Me&&(ht===0||B?.smash),Z.visible&&((!Z.userData.hit||Z.userData.hit!==B||!Z.userData.captured)&&(ye.model.getWorldPosition(Z.position),ye.model.getWorldQuaternion(Z.quaternion),Z.rotateY(-.18*(ht+1)),Z.userData.hit=B,Z.userData.captured=!0),Z.material.opacity=.43*(1-X/Me))}if(!he)return;let{actor:_e,mixer:Ue,actions:tt,arm:ct}=he;if(_e.visible=!!g,!g)return;gn(ct),he.tossRest&&(he.tossArm.quaternion.copy(he.tossRest),he.tossRest=null);let Ie=Er(g.cpu,g.shot,R,g.cpuZ),jn=Ze;Ze+=te(Ie.z-Ze,-F*3.5,F*3.5);let ut=Gn(2),yn=+(Math.abs(Ze-jn)>.005);he.action!==yn&&tt[yn]&&(tt[he.action]?.fadeOut(.12),tt[yn].reset().fadeIn(.12).play(),he.action=yn),Ue.update(F),_e.position.set(ut.x,s.ground.height(ut.x,Ze)+.024,Ze);let Qn=g.shot?.from===2&&R>=g.shot.time&&R-g.shot.time<350,Jt=g.phase==="serve"&&g.serve===2?te(1-(g.deadline-R)/500,0,1):0;Jt>0&&he.tossArm&&(he.tossRest=he.tossArm.quaternion.clone(),he.tossArm.rotateX(-.35-.75*Math.sin(Math.PI*Jt))),Li(ct,_e,Jt>0?Jt:g.cpu?.miss?0:.28,Qn?{smash:g.shot.kind==="smash"}:null,R-(g.shot?.time??0),0)}function xn(g){if(g>500)return;let T=te(1-g/500,0,1);b.visible=!0,b.position.set(3,1.18+.64*Math.sin(Math.PI*T),Ze-z.z+.16*(1-T)),b.quaternion.identity(),b.scale.setScalar(1)}function Gr(g,T,R,F,O){if(b.visible=C.visible=!!g,L.visible=!!g?.bounces.some(Z=>Z.at>T),Ae.visible=!!g&&F.tail,ae.visible=!1,!g){Zt=null;return}let B=g.segments[0],H=g.bounces.at(-1);function X(Z){let Me=Z===2?he?.arm:ye;return Me?(Me.model.localToWorld(ie.set(0,.145,0)),ie.y-=t,!0):!1}if(Zt!==g.id&&(Zt=g.id,Ct=Math.max(T,g.time),Fe.set(0,0,0),Ct<B.end&&X(g.from))){let Z=Wn(g,Ct);Fe.set(ie.x-Z.x,ie.y-Z.y,ie.z-Z.z),g.from===0&&R?.where&&Object.assign(R.where,{x:ie.x,y:ie.y,z:ie.z})}gt.set(0,0,0);let le=g.target===0?s.player.position.z:Ze;g.result==="in"&&Math.abs(le-g.arrival.z)<=1.5&&X(g.target)&&gt.set(ie.x-g.arrival.x,ie.y-g.arrival.y,ie.z-g.arrival.z);function $(Z){let Me=Wn(g,Z),nt=Ct<B.end?te((B.end-Z)/(B.end-Ct),0,1):0,$t=H?te((Z-H.at)/(g.arrivesAt-H.at),0,1)*te(1-(Z-g.arrivesAt)/Math.max(1,g.segments.at(-1).end-g.arrivesAt),0,1):0;return Me.x+=nt*Fe.x+$t*gt.x,Me.y+=nt*Fe.y+$t*gt.y,Me.z+=nt*Fe.z+$t*gt.z,Me}let se=$(T),_e=$(T-16),Ue=$(T+16),tt=R?performance.now()-R.at:1/0,ct=Or[R?.grade]||Or.Good,Ie=R?.smash,jn=Ie?74:ct.recover,ut=F.squash?te(1-tt/jn,0,1):0,yn=(Z,Me)=>Math.abs(Z-z.x)<=z.length/2&&Math.abs(Me-z.z)<=z.width/2?.805:.022;if(Rt.set(se.x-z.x,se.y,se.z-z.z),O){let Z=te(1-(performance.now()-O.at)/150,0,1);Rt.addScaledVector(O.delta,Z)}let Qn=te(s.camera.position.distanceTo(Se.set(se.x,se.y+t,se.z))*Math.tan(s.camera.fov*Math.PI/360)*9/(Math.max(1,s.renderer.domElement.clientHeight)*z.radius),1,2.2);b.position.copy(Rt),Se.set(Ue.x-_e.x,Ue.y-_e.y,Ue.z-_e.z),Se.lengthSq()>1e-6&&b.quaternion.setFromUnitVectors(i0,Se.normalize()),b.scale.set(Qn*(1+ut*.15),Qn*(1-ut*(1-(Ie?.7:ct.scale))),Qn*(1+ut*.15)),C.position.set(Rt.x,yn(se.x,se.z),Rt.z);let Jt=te((se.y-C.position.y)*.7,0,1);C.material.opacity=.46-.28*Jt,C.scale.setScalar(.075+.06*Jt);let ht=g.bounces.find(Z=>Z.at>T);if(ht&&L.position.set(ht.x-z.x,.81,ht.z-z.z),Ae.visible){let Z=g.kind==="smash"?.48:ct.tail;Yt.set(g.kind==="smash"?16775400:16773834),hn.set(g.kind==="smash"?14652247:13150585),mt.set(-(Ue.z-_e.z),0,Ue.x-_e.x).normalize();for(let Me=0;Me<6;Me++){let nt=Me/5,$t=$(T-Z/g.speed*1e3*nt),xo=.031*(1-nt)+.001;dn.copy(Yt).lerp(hn,nt);for(let Di=0;Di<2;Di++){let yo=Di?1:-1,_o=Me*2+Di;Ne.setXYZ(_o,$t.x-z.x+mt.x*xo*yo,$t.y,$t.z-z.z+mt.z*xo*yo),je.setXYZW(_o,dn.r,dn.g,dn.b,1-nt)}}Ne.needsUpdate=!0,je.needsUpdate=!0}if(F.light&&R?.where&&tt<(Ie?110:100)){ae.visible=!0,ae.count=Ie?2:ct.light,ae.material.color.setHex(Ie?14652247:ct.color),ae.material.opacity=1-tt/(Ie?110:100),s.camera.getWorldQuaternion(qt);for(let Z=0;Z<ae.count;Z++){let Me=Z*Math.PI*2/ae.count+Math.PI/4,nt=tt/(Ie?110:100)*(Ie?.2:.12);Ye.position.set(R.where.x-z.x+Math.cos(Me)*nt,R.where.y+Math.sin(Me)*nt,R.where.z-z.z),Ye.quaternion.copy(qt),Ye.scale.set(Ie?1.75:1,Ie?.45:1,1),Ye.updateMatrix(),ae.setMatrixAt(Z,Ye.matrix)}ae.instanceMatrix.needsUpdate=!0}}function Vr(g,T,R){if(A.visible=!!g&&R,I.visible=!!g&&!R,!g)return;let{arrival:F,arrivesAt:O}=g,B=O-T;A.position.set(F.x-z.x,F.y,F.z-z.z).add(gt),ye||(A.position.y=Math.max(.55,F.y)),s.camera.getWorldQuaternion(A.quaternion),N[1].scale.setScalar(1+2*te(B/Math.min(800,Math.max(250,O-g.time)),0,1));for(let H of N)H.material.color.setHex(Math.abs(B)<=90?10878928:B<400?16768899:16777215);I.position.set(F.x-z.x,.026,F.z-z.z)}function Kn(g){let T=s.scene.getObjectByName("world_other_players"),R=s.camera,F=[b,A].filter(B=>B.visible),O=new Set;if(g&&F.length)for(let B of T?.children??[]){if(!B.visible||!B.isGroup||B.position.distanceToSquared(s.player.position)>81)continue;F.some(X=>(X.getWorldPosition(Se),[[0,0],[-.21,0],[.21,0],[0,-.21],[0,.21]].some(([le,$])=>(Pt.start.copy(R.position),Pt.end.copy(Se),Pt.end.z+=le,Pt.end.y+=$,[1.02,1.52].some(se=>{Ve.copy(B.position),Ve.y+=se;let _e=Pt.closestPointToPointParameter(Ve,!0);return _e>=.985?!1:Pt.at(_e,It).distanceToSquared(Ve)<.26**2})))))&&O.add(B)}for(let B of O)if(!zt.has(B)){let H=n0(B);H.set(.45),zt.set(B,H)}for(let[B,H]of zt)O.has(B)||(H.dispose(),zt.delete(B))}function x(g,T){let R=s.renderer.domElement.getBoundingClientRect();return Ge.set((g-R.left)/R.width*2-1,1-(T-R.top)/R.height*2),Qe.setFromCamera(Ge,s.camera),Qe.ray.intersectPlane(et,He)?He.z>z.z+.425?1:He.z<z.z-.425?-1:0:0}function M(g,T,R){for(let[F,O]of U.entries())O.visible=T,O.material.opacity=g===F-1?.29:.08;V.visible=T,V.position.set(R?te(He.x-z.x,.07,2.18):1.5,.812,R?te(He.z-z.z,-1.2,1.2):g*.825)}return{root:e,base:t,updateActors:Hr,drawBall:Gr,drawServeToss:xn,drawTarget:Vr,aimAt:x,aim:M,fadeOccluders:Kn,restorePlayer:()=>gn(ye),dispose(){Kn(!1),mn=!0,gn(ye),ye?.grip.dispose(),he?.arm?.grip.dispose(),he&&(he.mixer.stopAllAction(),he.mixer.uncacheRoot(he.model),he.model.traverse(g=>{g.isSkinnedMesh&&g.skeleton.dispose()}),he.actor.removeFromParent()),e.removeFromParent();for(let g of xe)g.removeFromParent();ae.dispose();for(let g of n)g.dispose();for(let g of i)g.dispose();for(let g of r)g.dispose()}}}var s0={freeze:"\uB77C\uCF13 \uBA48\uCDA4",squash:"\uACF5 \uBCC0\uD615",ghost:"\uB77C\uCF13 \uC794\uC0C1",tail:"\uACF5 \uAF2C\uB9AC",light:"\uD0C0\uACA9 \uD6A8\uACFC",camera:"\uCE74\uBA54\uB77C \uD6A8\uACFC",beats:"\uD0C0\uC774\uBC0D \uC18C\uB9AC",sound:"\uD0C0\uACA9\uC74C",buzz:"\uC9C4\uB3D9"};function o0(s){let e=Object.fromEntries(Object.keys(s0).map(a=>[a,!0])),t=new URLSearchParams(location.search);e.diagnostic=t.get("pingpong")==="1"&&t.get("debug")==="1";let n=document.createElement("section"),i=document.createElement("style");n.id="pingpong-hud",n.ariaLabel="\uD0C1\uAD6C",n.hidden=!0,n.classList.toggle("pingpong-touch",s.mobile),n.innerHTML=`
  <div class="pp-guide"><span>7\uC810 \uBA3C\uC800</span><strong data-guide>\uC6D0\uC774 \uB9DE\uC744 \uB54C \uD1A1</strong></div>
  <output class="pp-score" aria-label="\uC810\uC218" data-score><span>\uB098<b data-score-a></b></span><span>\uC0C1\uB300<b data-score-b></b></span><i aria-hidden="true"></i></output>
  <div class="pp-corner"><button type="button" data-leave>\uB098\uAC00\uAE30</button><output data-rtt aria-label="\uC655\uBCF5 \uC2DC\uAC04">\u2014 ms</output></div>
  <output class="pp-cpu" data-cpu aria-label="\uC0C1\uB300 \uC120\uC218"></output>
  <output class="pp-rally" data-rally hidden></output>
  <span class="pp-serve-ball" data-serve-ball hidden aria-hidden="true"></span>
  <strong class="pp-serve-text" data-serve-text hidden></strong>
  <output class="pp-diagnostic" data-diagnostic hidden></output>
  <span class="pp-judgment" data-grade hidden></span><span class="pp-mark" data-mark hidden></span>
  <button id="pingpong-hit" type="button" class="pp-hit" data-hit aria-label="\uCE58\uAE30"><span aria-hidden="true">\u{1F3D3}</span></button>
  <div class="pp-result" data-result hidden><strong data-winner></strong><output data-final></output>
   <p data-summary></p><button type="button" data-again>\uB2E4\uC2DC</button></div>
  <details class="pp-effects"><summary>\uD6A8\uACFC \uC124\uC815</summary><div>
   ${Object.entries(s0).map(([a,l])=>`<label><input type="checkbox" data-effect="${a}" checked>${l}</label>`).join("")}
   <label><input type="checkbox" data-diagnostic-toggle>\uD0C0\uACA9 \uC9C4\uB2E8</label>
  </div></details>`,i.textContent=`
  body.pingpong-playing #hud>:not(#world-joystick),body.pingpong-playing #world-jump,
  body.pingpong-playing :is(#world-pc-frame,#world-quest-fold,#world-minimap,#world-avatar-emotes,#farm-world-panel,#village-contribution,.farm-world-toolbar,.world-interact-prompt){visibility:hidden!important}
  body.pingpong-playing #world-pc-frame{display:none!important}
  body.world-page.pingpong-playing #world{inset:0!important;border:0!important;border-radius:0!important}
  body.world-page.pingpong-playing #world canvas{border-radius:0!important}
  #pingpong-hud{position:fixed;inset:0;z-index:18;pointer-events:none;color:#fff7e4;font:700 17px/1.15 Gaegu,system-ui,sans-serif}
  #pingpong-hud button,#pingpong-hud details{pointer-events:auto}
  .pp-score,.pp-rally,.pp-cpu,.pp-corner output{background:#203b3ce8;border-radius:12px;padding:6px 12px}
  .pp-score{position:absolute;top:calc(env(safe-area-inset-top) + 12px);left:50%;translate:-50% 0;
   box-sizing:border-box;width:116px;display:grid;grid-template-columns:1fr 1fr;text-align:center;font-size:14px}
  .pp-score b{display:block;font-size:24px}
  .pp-score i,.pp-serve-ball{width:10px;height:10px;border-radius:50%;background:#fff8e8;box-shadow:0 0 0 2px #d6a34d}
  .pp-score i{position:absolute;top:11px;left:11px;transition:left .24s ease}
  .pp-score[data-server="2"] i{left:101px}
  .pp-serve-ball{position:absolute;translate:-50% -50%;width:17px;height:17px}
  .pp-serve-text{position:absolute;top:48%;left:50%;translate:-50% -50%;background:#203b3ce8;border-radius:14px;
   font-size:clamp(24px,5vw,34px);padding:5px 15px;white-space:nowrap}
  .pp-diagnostic{position:absolute;bottom:calc(env(safe-area-inset-bottom) + 154px);left:max(12px,env(safe-area-inset-left));
   width:max-content;max-width:calc(100% - 24px);padding:4px 8px;border-radius:7px;background:#203b3cf2;font:12px/1.35 system-ui}
  .pp-guide{position:absolute;left:max(12px,env(safe-area-inset-left));top:calc(env(safe-area-inset-top) + 12px);display:grid;gap:3px;background:#fff4d9ed;color:#203b3c;padding:7px 9px;border-radius:9px}
  .pp-guide span{font-size:.79em}
  .pp-corner{position:absolute;right:max(12px,env(safe-area-inset-right));top:calc(env(safe-area-inset-top) + 10px);display:grid;justify-items:end;gap:5px}
  .pp-corner output{font:12px system-ui;padding:3px 7px}
  .pp-cpu{position:absolute;font-size:15px;translate:-50% -100%;white-space:nowrap;padding:3px 9px}
  .pp-rally{position:absolute;bottom:calc(env(safe-area-inset-bottom) + 26px);left:50%;translate:-50% 0}
  .pp-judgment,.pp-mark{position:absolute;white-space:nowrap;translate:-50% -100%;font:700 22px system-ui;-webkit-text-stroke:1px #203b3c;paint-order:stroke fill;text-shadow:0 1px 2px #203b3c}
  .pp-judgment[data-grade="Perfect"]{font-size:26px;color:#ffdf83}
  .pp-judgment[data-grade="Good"]{color:#ade7cd}
  .pp-judgment[data-grade="Bad"],.pp-mark{font-size:20px;color:#ffc0a0}
  #pingpong-hud:not(.pingpong-touch,[data-my-serve]) .pp-hit{display:none}
  #pingpong-hud #pingpong-hit{position:absolute;bottom:calc(env(safe-area-inset-bottom) + 28px);right:calc(env(safe-area-inset-right) + 28px);
   width:116px;height:116px;border-radius:50%!important;padding:8px;border:0!important;box-shadow:none!important;
   background:conic-gradient(#dc7f39 var(--charge,0%),#385650 var(--charge,0%))!important;touch-action:none}
  .pp-hit span{width:100%;height:100%;display:grid;place-items:center;border-radius:50%;background:#fff0d5;font-size:45px}
  .pp-hit[data-fallback] span{outline:2px solid #ff9d49;outline-offset:-3px}
  .pp-hit[data-held]::before,.pp-hit[data-held]::after{position:absolute;top:40%;font:700 21px system-ui;color:#ffedb0;text-shadow:0 1px 3px #203b3c}
  .pp-hit[data-held]::before{content:'\u2039';left:-12px}.pp-hit[data-held]::after{content:'\u203A';right:-12px}
  .pp-hit[data-direction="-1"]::before,.pp-hit[data-direction="1"]::after{color:#ffb75b;scale:1.3}
  .pp-hit[data-ready] span{background:#ffd89c}
  .pp-hit[data-ready] span::after{content:'\u03DF';position:absolute;right:14px;top:9px;color:#ae471e;font:700 24px system-ui}
  #pingpong-hud[data-my-serve] .pp-hit span{animation:pp-serve-pulse .8s ease-in-out infinite alternate}
  @keyframes pp-serve-pulse{to{background:#ffd16e}}
  @media(prefers-reduced-motion:reduce){#pingpong-hud[data-my-serve] .pp-hit span{animation:none;background:#ffd16e}.pp-score i{transition:none}}
  .pp-result{position:absolute;top:46%;left:50%;translate:-50% -50%;text-align:center;min-width:200px;padding:14px 20px;background:#203b3cf2;border:2px solid #ffe399;border-radius:18px;pointer-events:auto}
  .pp-result strong,.pp-result output{display:block;font-size:30px}.pp-result p{margin:5px 0 12px}
  .pp-effects{position:absolute;top:calc(env(safe-area-inset-top) + 85px);right:max(12px,env(safe-area-inset-right));font:13px system-ui;background:#203b3cf2;border-radius:9px;padding:6px}
  .pp-effects summary{cursor:pointer}.pp-effects div{display:grid;gap:3px;padding:6px 2px 1px}.pp-effects label{display:flex;gap:6px;align-items:center}
  body.pingpong-playing #world-joystick{visibility:visible!important}
  @media(pointer:coarse){body.pingpong-playing #world-joystick{display:block!important;bottom:calc(env(safe-area-inset-bottom) + 28px)!important}}
  @media(max-height:500px){.pp-score{top:calc(env(safe-area-inset-top) + 5px);padding:4px 12px;font-size:13px}.pp-score b{font-size:20px;line-height:1}.pp-score i{top:8px}}
  @media(max-width:460px){.pp-guide{box-sizing:border-box;max-width:calc(50vw - 77px)}}
  @media(max-width:365px){.pp-guide span{display:none}}
 `,document.head.append(i),document.body.append(n);let r=new Map,o=a=>(r.has(a)||r.set(a,n.querySelector(`[data-${a}]`)),r.get(a));return n.addEventListener("change",a=>{a.target.dataset.effect in e&&(e[a.target.dataset.effect]=a.target.checked)}),o("diagnostic-toggle").checked=e.diagnostic,o("diagnostic-toggle").onchange=a=>{e.diagnostic=a.target.checked},{ui:n,by:o,settings:e,dispose(){n.remove(),i.remove()}}}var xu=Object.freeze({ko:"\uCF69\uCF69\uD325\uD325",en:"\uCF69\uCF69\uD325\uD325"});var yu="dr_farm_options_v1",T6=Object.freeze({quality:"auto",music:65,effects:80,vibration:!0,musicMuted:!1,effectsMuted:!1,sensitivity:1,view:"follow",textSize:"normal",reducedMotion:!1,realClock:!1,miniMap:!0,practiceInvites:!0,timedActivities:!0,horseFollow:!0}),mo=(s,e,t,n)=>Number.isFinite(s)?Math.max(e,Math.min(t,s)):n;function c0(s={}){return{quality:["auto","high","normal"].includes(s.quality)?s.quality:"auto",music:mo(s.music,0,100,65),effects:mo(s.effects,0,100,80),vibration:s.vibration!==!1,musicMuted:s.musicMuted===!0,effectsMuted:s.effectsMuted===!0,sensitivity:mo(s.sensitivity,.4,2,1),view:["follow","overhead"].includes(s.view)?s.view:"follow",textSize:s.textSize==="large"?"large":"normal",reducedMotion:s.reducedMotion===!0,realClock:s.realClock===!0,miniMap:s.miniMap!==!1,practiceInvites:s.practiceInvites!==!1,timedActivities:s.timedActivities!==!1,horseFollow:s.horseFollow!==!1}}function u0(s){let e="auto";try{s??=globalThis.localStorage,e=s?.getItem("dr_quality")||"auto";let t=s?.getItem(yu),n=t?JSON.parse(t):{};return c0({...n,quality:e})}catch{return c0({quality:e})}}var h0=-1/0,d0=0;function go(s=12){let e=globalThis.navigator,t=performance.now(),n=Array.isArray(s)?s.reduce((i,r,o)=>i+(o%2===0?r:0),0):s;if(typeof e?.vibrate!="function"||t-h0<100&&n<=d0||!u0().vibration)return!1;try{if(e.vibrate(s)!==!1)return h0=t,d0=n,!0}catch{}return!1}function f0(s){return document.body.classList.contains("pc-frame")?s?.isContentEditable||s?.closest?.("textarea,input:not([type=button],[type=checkbox],[type=color],[type=file],[type=image],[type=radio],[type=range],[type=reset],[type=submit])"):s?.closest?.("input,textarea,select,[contenteditable]")}var p0=4;var vu=20;var N6=[{id:"kickboard",name:"\uD0A5\uBCF4\uB4DC",icon:"\u{1F6F4}",speed:14},{id:"bike",name:"\uC790\uC804\uAC70",icon:"\u{1F6B2}",speed:17,x:cn.x+5,z:cn.z+8},{id:"moto",name:"\uC624\uD1A0\uBC14\uC774",icon:"\u{1F3CD}\uFE0F",speed:21,x:cn.x+8,z:cn.z+6},{id:"horse",name:"\uB0B4 \uB9D0",icon:"\u{1F3C7}",speed:vu}];function m0(s,e,t,n,{radius:i=.23,body:r,yaw:o=0}={}){if(!r)return Ta(s,e,t,n,i);let{front:a,back:l,side:c=0,radius:u}=r.shape,h=r.root.scale.x,d=Math.cos(o),f=Math.sin(o),p=(_,y)=>{let w=1/0;for(let S=0;S<=5;S++){let b=l+(a-l)*S/5;w=Math.min(w,Ar(s,_+(d*c+f*b)*h,y+(-f*c+d*b)*h,(u+.02)*h))}return w},m=p(e,t);return m<0&&(!n||m<p(n.x,n.z)-1e-4)}var bu={Perfect:420,Good:320,Bad:300,\uB193\uCE68:300},Mu={Perfect:"\u2726 Perfect",Good:"\u2713 Good",Bad:"\u27CB Bad",\uB193\uCE68:"\uB193\uCE68"},wu={early:"\uB108\uBB34 \uC77C\uCC0D \uB20C\uB800\uC2B5\uB2C8\uB2E4",miss:"\uB2A6\uAC8C \uB20C\uB800\uC2B5\uB2C8\uB2E4",future:"\uC11C\uBC84\uBCF4\uB2E4 \uC55E\uC120 \uC2DC\uAC01",late:"\uC11C\uBC84\uC5D0 \uB2A6\uAC8C \uB3C4\uCC29",reach:"\uACF5\uC774 \uB2FF\uB294 \uBC94\uC704 \uBC16",position:"\uC11C\uBC84 \uC704\uCE58\uC640 \uCC28\uC774",turn:"\uBC1B\uC744 \uACF5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",input:"\uC774\uC804 \uACF5 \uB610\uB294 \uC798\uBABB\uB41C \uC785\uB825",send:"\uC804\uC1A1\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",timeout:"\uC11C\uBC84 \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"},g0={ready:[[520,520,0,.045,.035]],turn:[[520,520,0,.045,.035],[690,690,.05,.045,.04]],beat1:[[420,420,0,.025,.035]],beat2:[[540,540,0,.025,.035]],Perfect:[[1120,550,0,.072,.16,"triangle"],[1680,1510,.007,.042,.026]],Good:[[840,410,0,.055,.14,"triangle"],[1200,1200,0,.005,.035,"sine",!0]],Bad:[[480,250,0,.04,.09,"triangle"]],bounce:[[1e3,640,0,.036,.08],[1350,1350,0,.004,.025,"sine",!0]],net:[[650,650,0,.042,.07,"sine",!0]],out:[[240,175,0,.085,.08,"triangle"]],point:[[660,660,0,.07,.12],[880,880,.07,.09,.095]],win:[[523,523,0,.12,.12],[659,659,.12,.12,.1],[784,784,.24,.12,.1]]};function W6(s){let e=r0(s),{ui:t,by:n,settings:i,dispose:r}=o0(s),o=s.player,a=s.renderer.domElement,l=n("hit"),c=new v,u=new v,h=new v,d=new v,f=null,p=!1,m=null,_=!1,y=!1,w=0,S=0,b=0,E=0,P=null,C=null,L=null,A=null,N=0,I=null,U=0,V=0,W=!1,k=null,ne=null,re=null,j=null,Q=null,ee=0,xe=-1/0,fe=null,ae=null,ke=[],Ne=0,je=0,Pe=null,Ae=!1,Qe=performance.now(),et=-1/0,He=!1,Ge=Ea(),Ye=null,J=null,un=0,qt=!1,Yt=!1,hn=0,dn=0,pt=(x=performance.now())=>Ge.now(x),Rt=()=>Math.round(pt()-Date.now()),Se=(x,M)=>s.presence?.pingpong(x,M);function mt(){if(!p||Yt)return;qt=!0;let x=performance.now();x<hn||(hn=x+250,Se("activity")&&(Yt=!0,qt=!1))}let Fe=(x,M=1)=>{!i.sound&&x!=="beat1"&&x!=="beat2"||!g0[x]||s.audio?.pingpongTone(...g0[x].map(([g,T,R,F,O,...B])=>[g,T,R,F,O*M,...B]))},gt=[];function ie(x,M,g,T){x.addEventListener(M,g,T),gt.push(()=>x.removeEventListener(M,g,T))}function fn(){return s.jumpAt||s.fishing||s.pendingFishing||s.inWorldActing||s.actionBusy||s.uiBlocked||s.forest?.active||s.splash?.active||s.rhythm?.playing||s.shoe?.playing||s.trainingActive||s.isBroadcasting||s.homeEditing}function pn(){let x=performance.now();if(C&&x>=C.at&&x-C.at<=1e3){b=C.at+1100;return}let M=++dn;b=x+1100,Se("ping",M)&&(C={token:M,at:x},b=x+(Ge.count>=3?3e3:1100))}function Yn(){if(!(p||_||fn()||!Vn(o.position))){if(!s.presence.rhythmReady){s.notify("\uD0C1\uAD6C \uC5F0\uACB0\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC2ED\uC2DC\uC624.");return}s.stop(),_=!0,y=!1,w=performance.now(),P===null?C||pn():Zn()}}function Zn(){y||(y=Se("join","single"))}function Zt(x){o.position.set(x.x,s.ground.height(x.x,x.z),x.z)}function Ct(){s.input.clear(),s.emit("pingpong:clear-joystick")}function Pt(x){if(fn()||!Vn(o.position))return Se("leave","entry-refused"),!1;let M=s.districts.get("village");if(s.stop(),Ct(),s.emotes?.cancel(),o.position.z<197.5){let g=s.ground.placePerson(z.x,198.3);g&&Zt(g)}return He=s.avatar.rideCode===p0,s.avatar.setRiding(!1),M?.parkHorseForPingpong(Xs.map(g=>({...g,z:200.15}))),p=!0,L=s.cameraController.captureView(),o.userData.contactRadius=.45,W=!1,U=0,I=null,N=0,Zt(x.entry??Gn(0)),o.rotation.y=Math.PI/2,t.hidden=!1,document.body.classList.add("pingpong-playing"),a.focus({preventScroll:!0}),!0}function It(){A=null,l.removeAttribute("data-held")}function Ve(x=null){if(x&&(m=x,et=performance.now(),Se("leave",x)),qt=!1,Yt=!1,_=!1,It(),k=null,ne=null,re=null,j=null,Pe=null,Ye=null,J=null,!p)return;p=!1,t.hidden=!0,document.body.classList.remove("pingpong-playing"),o.userData.contactRadius=.23,t.querySelector("details").open=!1,L?.(),L=null,s.stop(),Ct();let M=s.presence.mapPlayers?.().filter(g=>!g.own)||[];for(let g of qs){let T=s.ground.placePerson(g.x,g.z);if(!(!T||!wa(T)||M.some(R=>Math.hypot(R.x-T.x,R.z-T.z)<.55))){Zt(T),o.rotation.y=0;break}}He&&s.districts.get("village")?.resumeHorseAfterPingpong(),He=!1}function zt(x,M){j={value:x,where:M,at:performance.now()},x==="Perfect"?ee++:ee=0}function ye(x,M){let g=x.judgment??"Good",T=x.kind==="smash",R=M?1:.7;Fe(g,R*(T?.65:1)),T&&i.sound&&s.audio?.pingpongTone([220,105,0,.085,.075*R,"triangle"],[1600,1600,0,.012,.015*R,"sine",!0]),M&&i.buzz&&(T||g==="Perfect")&&!go(T?[18,18,28]:18)&&(l.setAttribute("data-fallback",""),setTimeout(()=>l.removeAttribute("data-fallback"),70))}function he(x){if(!p||!f||s.uiBlocked||m)return;if(mt(),!x.frame&&f.phase==="serve"&&f.serve===0){if(Ae)return;Ae=Se("serve",x.direction),Ae?re={at:performance.now(),grade:"Good",smash:!1}:s.notify("\uC5F0\uACB0\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC2DC \uCCD0 \uC8FC\uC2ED\uC2DC\uC624.");return}let M=f.shot,g=performance.now();if(f.phase!=="rally"||M?.result!=="in"||M.target!==0||k||J?.waiting||g<un||x.frame&&x.frame.id!==M.id||J?.id===M.id&&J.result==="hit")return;let T=x.frame??{id:M.id,time:pt(g),x:o.position.x,z:o.position.z},R=Math.floor(T.time),F=R-M.arrivesAt,O=Js(F);if(J?.id===M.id&&J.result==="pending"&&O==="early")return;let{direction:B,smash:H}=x,{x:X,z:le}=T,$=Se("hit",[T.id,R,B,Number(H),X,le,Rt(),Ge.count]);if(J={id:M.id,time:R,at:g,local:Math.round(F),waiting:$&&O!=="early",result:$?"pending":"send"},!$||(un=g+150,O==="early"||O==="miss"||Math.abs(M.arrival.z-le)>1.8))return;J.previousStreak=ee;let se=Aa({incoming:M,time:R,direction:B,smash:H,human:!0,multiplier:f.multiplier,rally:f.rally+1});k={shot:se,source:M.id,at:performance.now()},re={at:performance.now(),grade:O,smash:se.kind==="smash",where:{...M.arrival},backhand:M.arrival.z<le},zt(O,re.where),ye(se,!0)}function Jn({kind:x,data:M}){if(x==="idle"){s.notify("\uB450 \uD310 \uB3D9\uC548 \uC870\uC791\uC774 \uC5C6\uC5B4 \uB9C8\uC744\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4.");return}if(x==="closed"){f=null,Ge.reset(),P=null,C=null,_=!1,m=null,b=0,E=0,Ve();return}if(x==="pong"&&C?.token===M?.[0]){let H=performance.now(),X=H-C.at;Ge.observe(M[2],C.at,H)?(P=Math.round(X),p&&ke.push(P)):b=Math.min(b,H+1e3),Se("ack",M[1]),C=null,_&&!p&&w&&Zn();return}if(x==="error"){_=!1,s.notify(M),J?.result==="pending"&&(J=null,k=null);return}if(x==="rejected"||x==="impact"){if(J?.result!=="pending"||J.id!==M?.id||(M.inputAt!==void 0?M.inputAt!==J.time:M.error!==J.local)||(Object.assign(J,{waiting:!1,server:M.error,grade:M.grade,result:M.result,rejected:x==="rejected"}),x==="impact"))return;k?.source===M.id&&(k=null,ne=null),M.result==="turn"?(J.previousStreak!==void 0&&(ee=J.previousStreak,j=null,re=null),J=null):M.result!=="early"&&f?.shot?.id===M.id&&zt("\uB193\uCE68",f.shot.arrival);return}if(x!=="state")return;if(S=performance.now(),!M){f=null,m=null,p&&Ve();return}if(Ge.seed(M.now,S),Math.abs(pt(S)-M.now)>450&&(b=Math.min(b,S+100)),m&&M.mine||(p&&!M.mine&&Ve(),M.mine&&!p&&!Pt(M)))return;let g=f,T=!g||g.id!==M.id,R=T||g?.shot?.id!==M.shot?.id;if((T||g.phase!==M.phase||g.since!==M.since)&&(Ae=!1),T&&p&&(It(),ke=[],Ne=0,je=0,ee=0,J=null,ae=S,Yt=!1,hn=0,un=0),_=!1,f=M,R)if(Ye=null,fe=null,J?.result==="pending"&&(J=null),k){let H=k.shot,X=M.shot;if(p&&X?.from===0&&X.id===H.id){Ne++,H.kind==="corner"&&je++,X.judgment!==H.judgment&&zt(X.judgment,re?.where);let le=pt(),$=Wn(H,le),se=Wn(X,le);d.set($.x-se.x,$.y-se.y,$.z-se.z),ne=d.lengthSq()>1e-6?{delta:d,at:S}:null}k=null}else p&&M.shot&&ye(M.shot,M.shot.from===0);if(!p)return;if(M.phase==="serve"&&(g?.phase!=="serve"||T)&&(g&&g.serve!==M.serve?Fe("turn"):i.beats&&Fe("ready"),M.serve===0&&(Pe={at:S,x:o.position.x,z:o.position.z})),(M.phase==="point"||M.phase==="end")&&(g?.since!==M.since||T)){xe=S,Pe=null,Fe(M.phase==="end"&&M.winner===0?"win":"point"),i.buzz&&go(24);let H=M.pointResult?.reason,X=M.shot;X&&(H==="net"||H==="out")&&(Q={reason:H,where:X.drop,at:S},Fe(H))}let[F,O]=M.score;n("score").dataset.server=String(M.serve),n("score").setAttribute("aria-label",`\uB098 ${F}, \uC0C1\uB300 ${O}, ${M.serve===0?"\uB0B4 \uC11C\uBE0C":"\uC0C1\uB300 \uC11C\uBE0C"}`),n("score-a").textContent=F,n("score-b").textContent=O,n("cpu").textContent="\uCEF4\uD4E8\uD130 "+Ys[M.level];let B=M.pointResult?.rally??M.rally;n("rally").hidden=B<3,n("rally").textContent=B+" \uB7A0\uB9AC",n("result").hidden=M.phase!=="end",M.phase==="end"&&(n("winner").textContent=M.winner===0?"\uB0B4\uAC00 \uC774\uACBC\uC2B5\uB2C8\uB2E4":"\uCEF4\uD4E8\uD130\uAC00 \uC774\uACBC\uC2B5\uB2C8\uB2E4",n("final").textContent=`${F} : ${O}`,n("summary").textContent=`\uCD5C\uC7A5 \uB7A0\uB9AC ${M.longest}\uD68C \xB7 \uB2E4\uC74C ${Ys[M.nextLevel]}`)}function mn(x,M,g=0,T=0){return!p||A||f?.phase==="end"?!1:(A={type:x,id:M,down:performance.now(),frame:Ye,x:g,y:T,dx:0,swiped:!1,moved:!1},l.setAttribute("data-held",""),!0)}function Ze(x,M,g,T=0){if(A?.type!==x||A.id!==M)return;let R=A;It();let F=$s({...R,up:performance.now(),dx:g-R.x,direction:N,moved:R.moved||Math.hypot(g-R.x,T-R.y)>24});he({...F,frame:F.time===R.down?R.frame:Ye})}let $n=()=>A?.type==="touch"?$s({...A,up:performance.now()}).direction:N;ie(window,"pointerdown",mt,!0),ie(document,"visibilitychange",()=>{p&&!document.hidden&&(S=performance.now(),C=null,b=0,E=0,Se("sync"))}),ie(l,"pointerdown",x=>{x.button!==0||!mn(x.pointerType,x.pointerId,x.clientX,x.clientY)||(l.setPointerCapture(x.pointerId),x.preventDefault())}),ie(l,"pointermove",x=>{A?.id===x.pointerId&&(A.dx=x.clientX-A.x,A.swiped||=Math.abs(A.dx)>=24,A.moved||=Math.hypot(A.dx,x.clientY-A.y)>24)}),ie(l,"pointerup",x=>Ze(x.pointerType,x.pointerId,x.clientX,x.clientY));for(let x of["pointercancel","lostpointercapture"])ie(l,x,M=>{A?.id===M.pointerId&&It()});ie(l,"click",x=>{x.detail===0&&x.pointerType!=="touch"&&he({direction:0,smash:!1,frame:Ye})}),ie(a,"pointerdown",x=>{!p||x.button!==0||(x.pointerType==="touch"?x.clientX>=a.getBoundingClientRect().left+a.getBoundingClientRect().width/2&&(I={id:x.pointerId,x:x.clientX,yaw:U},a.setPointerCapture(x.pointerId)):(N=e.aimAt(x.clientX,x.clientY),mn("mouse",x.pointerId,x.clientX)&&a.setPointerCapture(x.pointerId)),x.preventDefault(),x.stopImmediatePropagation())},!0),ie(a,"pointermove",x=>{p&&(x.pointerType!=="touch"&&(N=e.aimAt(x.clientX,x.clientY)),I?.id===x.pointerId&&(U=te(I.yaw+(x.clientX-I.x)*.005,-Math.PI/6,Math.PI/6)))}),ie(a,"pointerup",x=>{p&&(I?.id===x.pointerId?(I=null,V=performance.now()+1500):Ze("mouse",x.pointerId,x.clientX),x.stopImmediatePropagation())},!0);for(let x of["pointercancel","lostpointercapture"])ie(a,x,M=>{I?.id===M.pointerId&&(I=null,V=performance.now()+1500),A?.id===M.pointerId&&It()});ie(window,"keydown",x=>{!p||x.defaultPrevented||x.isComposing||f0(x.target)||x.ctrlKey||x.altKey||x.metaKey||["KeyF","Escape","KeyC","KeyV","KeyM"].includes(x.code)&&(x.preventDefault(),x.stopImmediatePropagation(),!x.repeat&&(x.code==="Escape"&&Ve("escape"),x.code==="KeyF"&&(mt(),mn("key","F"))))},!0),ie(window,"keyup",x=>{x.code==="KeyF"&&A?.id==="F"&&(x.preventDefault(),x.stopImmediatePropagation(),Ze("key","F",0))},!0),ie(window,"blur",()=>{It(),I=null,V=performance.now()+1500}),ie(n("leave"),"click",()=>Ve("button")),ie(t,"keydown",x=>{x.key==="Enter"&&x.repeat&&x.target.closest("[data-hit],[data-again]")&&x.preventDefault()}),ie(n("again"),"click",()=>{p&&!m&&f?.phase==="end"&&!Ae&&(Ae=Se("again"))});let gn=s.on("pingpong:message",Jn),zi=s.on("camera:updated",()=>e.fadeOccluders(p)),Li=s.on("interact:targets",x=>{if(p||m||fn()||!Vn(o.position))return;let M={...Mr,y:e.base+.78};x({id:"pingpong",point:M,range:3.3,icon:"\u{1F3D3}",label:"\uD0C1\uAD6C \uB2E8\uC2DD",hideRing:!0,touchRelease:!0,objects:[e.root],run:Yn})}),kr=s.ground.addColliders(e.root,[{blocks(x,M,g,T){return m0(Ma,x,M,g,T)||!!f&&!p&&m0(lt,x,M,g,T)}}]);function Hr(x,M,g){if(Math.abs(x)+Math.abs(M)>.01&&mt(),Pe){let T=te((performance.now()-Pe.at)/300,0,1),R=Gn(0);if(Math.abs(x)+Math.abs(M)>.01)Pe=null;else{let F=Br(Pe.x,R.x,T)-o.position.x,O=Br(Pe.z,R.z,T)-o.position.z;s.ground.move(o.position,F,O,{canOccupy:Zs,manual:!0}),T===1&&(Pe=null)}}(x||M)&&s.ground.move(o.position,x*g*wr,M*g*wr,{canOccupy:Zs,manual:!0}),o.rotation.y=Math.PI/2}function xn(x,M,g,T,R=0,F=0){h.set(M,g+e.base,T).project(s.camera);let O=a.getBoundingClientRect();x.style.left=O.left+(h.x+1)*O.width/2+R+"px",x.style.top=O.top+(1-h.y)*O.height/2+F+"px"}function Gr(x,M,g){n("rtt").textContent=P===null?"\u2014 ms":P+" ms",n("guide").textContent=f.phase==="rally"&&g?Ne>=3&&je<2&&s.mobile?"\u2190 \uBC00\uBA74 \uBAA8\uC11C\uB9AC \u2192":je>=2&&s.mobile?"\uAFB9 = \uC2A4\uB9E4\uC2DC":s.mobile?"\u261D \uC6D0\uC774 \uB9DE\uC744 \uB54C \uD1A1":"\uC6D0\uC774 \uB9DE\uC744 \uB54C \uD074\uB9AD":"";let T=Er(f.cpu,f.shot,x,f.cpuZ);xn(n("cpu"),T.x,1.96,T.z);let R=f.phase==="serve",F=R&&f.serve===0,O=f.serve===0?o.position:T,B=n("serve-ball"),H=n("serve-text");B.hidden=H.hidden=!R;let X=innerHeight<=500&&f.serve===2;R&&xn(B,O.x,f.serve===0?2.02:X?1.96:2.26,O.z,X?55:0,X?-11:0);let le=F?"\uB0B4 \uC11C\uBE0C":"\uC0C1\uB300 \uC11C\uBE0C";H.textContent!==le&&(H.textContent=le),t.toggleAttribute("data-my-serve",F);let $=n("diagnostic");if($.hidden=!i.diagnostic,i.diagnostic){let Ie=ut=>Number.isFinite(ut)?`${ut>0?"+":""}${ut} ms`:"\u2014",jn=J?.grade??(J?.rejected?"\uAC70\uC808":J?.result==="pending"?"\uC751\uB2F5 \uB300\uAE30":"\u2014");$.textContent=`\uC2DC\uACC4 ${Ie(Rt())} | \uC655\uBCF5 ${P??"\u2014"} ms | ${wu[J?.result]??jn} ${Ie(J?.server??J?.local)}`}let se=j?M-j.at:1/0,_e=n("grade");_e.hidden=!j?.where||se>=bu[j.value],_e.hidden||(_e.dataset.grade=j.value,_e.textContent=Mu[j.value]+(j.value==="Perfect"&&ee>=2?" \xD7"+ee:""),_e.style.scale=String(j.value==="Perfect"&&se<160?1+.12*Math.sin(Math.PI*se/160):1),xn(_e,j.where.x,j.where.y+.46,j.where.z));let Ue=n("mark");Ue.hidden=!Q||M-Q.at>(Q.reason==="net"?240:1200),Ue.hidden||(Ue.textContent=Q.reason==="out"?"\xD7 \uC544\uC6C3":"\uFE4F",xn(Ue,Q.where.x,Q.where.y+.04,Q.where.z));let tt=A?te((M-A.down)/450,0,1):0,ct=F?te((f.deadline-x)/3e3,0,1):tt;l.style.setProperty("--charge",ct*100+"%"),l.toggleAttribute("data-ready",tt===1),l.dataset.direction=$n(),l.hidden=f.phase==="end"}let Vr=s.on("update",()=>{let x=performance.now(),M=pt(x),g=x-Qe,T=te(g/1e3,0,.05);Qe=x,(g<0||g>750)&&(b=x);let R=Sa(o.position);if(s.started&&R&&s.presence.rhythmReady&&((p||Vn(o.position))&&x>=b&&pn(),!_&&x>=E&&x-S>=5e3&&Se("sync")&&(E=x+5e3)),_&&(x-w>4e3?(_=!1,s.notify("\uC785\uAD6C\uC5D0\uC11C \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC2ED\uC2DC\uC624.")):!y&&(P!==null||x-w>1300)&&Zn()),p&&!s.started&&Ve("world-stopped"),p&&!document.hidden&&x-S>1e4&&Ve("state-timeout"),qt&&mt(),m&&x-et>1e3&&(et=x,Se("leave",m)),!p&&f&&(!R||x-S>1e4)&&(f=null),e.root.visible=R||Math.hypot(o.position.x-z.x,o.position.z-z.z)<100,!e.root.visible&&!f)return;J?.result==="pending"&&x-J.at>=1050&&(J.waiting=!1,J.result="timeout"),k&&x-k.at>=1050&&(k=null);let F=k?.shot??f?.shot,O=f?.phase==="rally"?F:null,B=p&&!k&&O?.target===0&&O.result==="in"?O:null,H=B&&M<B.arrivesAt+300?B:null;Ye=B?{id:B.id,time:M,x:o.position.x,z:o.position.z}:null;let X=H&&Math.abs(o.position.z-H.arrival.z)<=1.8,le=A?te((x-A.down)/450,0,1):H&&H.arrivesAt-M<400?.5:0;if(e.updateActors(f,p,M,T,le,re,i),e.drawBall(O,M,re,i,ne),f?.phase==="serve"&&f.serve===2&&e.drawServeToss(f.deadline-M),e.drawTarget(H,M,X),e.aim($n(),p&&f?.phase!=="end"&&(!s.mobile||!!A),!s.mobile),!!p){if(O&&fe?.id!==O.id&&(fe={id:O.id,bounces:0,beats:0}),O){for(;fe.bounces<O.bounces.length&&M>=O.bounces[fe.bounces].at;){let $=O.bounces[fe.bounces++];M-$.at<130&&Fe("bounce",fe.bounces===2?.7:1)}if(i.beats&&H&&X){let $=H.arrivesAt-M;$<=240&&$>120&&fe.beats===0&&(fe.beats=1,Fe("beat1")),$<=120&&$>0&&fe.beats<2&&(fe.beats=2,Fe("beat2"))}}Gr(M,x,H)}}),Kn=()=>i.camera&&!s.reducedMotion;return{get active(){return p},get usesSocket(){return p||_||Vn(o.position)},get info(){return{state:f,rtt:P,samples:ke.slice(),acceptedHits:Ne,diagnostic:J,elapsed:ae&&performance.now()-ae,now:pt()}},move:Hr,restorePlayer:e.restorePlayer,cameraShot(x){if(!p)return null;let M=s.mobile&&innerHeight>innerWidth,g=M?7.25:7,T=performance.now(),R=re?.smash&&Kn()?T-re.at:1/0,F=R<110?.04*(1-R/110):0,O=R<65?.012*Math.sin(R/65*Math.PI*2)*(1-R/65):0;!I&&T>V&&(U*=Math.exp(-x*13));let B=te((o.position.z-z.z)*.5,-.85,.85),H=z.x-Math.cos(U)*(g-F),X=z.z+B+Math.sin(U)*g+O,le=W?1-Math.exp(-x*14):1;return c.set(Br(c.x,H,le),e.base+(M?5.25:4.8),Br(c.z,X,le)),u.set(z.x+.2,e.base+.8,z.z),W=!0,{camera:c,look:u,fov:(M?54:42)-(Kn()?te(1-(T-xe)/180,0,1):0)}},dispose(){Ve(),gn(),zi(),Li(),Vr(),kr();for(let x of gt)x();e.dispose(),r()}}}var Br=Ht.lerp;export{m0 as courtBlocks,W6 as mountPingpong};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
