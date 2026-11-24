var Ro=1;var Co=3,pr=0,rs=1,Mt=2;var Po=1;var Io=100;var Lo=204,zo=205;var Ks=0,js=1,Qs=2,Vi=3,er=4,tr=5,nr=6,ir=7,mr=0,Do=1,No=2;var gr=1,xr=2,_r=3,yr=4,vr=5,br=6,Mr=7;var Sr=300;var Fo=302;var sr=1e3,Wn=1001,rr=1002,Zn=1003;var Uo=1006;var Oo=1008;var Bo=1009;var wr=1015;var ko=1023;var Ho=1028;var Go=2200,Vo=2201,Wo=2202,Jn=2300,Wi=2301,Bi=2302,or=2303,Zt=2400,Jt=2401,$n=2402,os=2500,Xo=2501;var qo=0;var Er="",Le="srgb",ar="srgb-linear",lr="linear",ki="srgb";var Hi=7680;var Yo=519;var Zo=35044;var Xn=2e3,cr=2001;function e0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function t0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var no={},Xi=null;function Jo(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function me(...r){r=Jo(r);let e="THREE."+r.shift();if(Xi)Xi("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ue(...r){r=Jo(r);let e="THREE."+r.shift();if(Xi)Xi("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Gi(...r){let e=r.join(" ");e in no||(no[e]=!0,me(...r))}var n0={[Ks]:Ks,[Qs]:nr,[er]:er,[Vi]:tr,[js]:js,[nr]:Qs,[ir]:ir,[tr]:Vi},_t=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=1234567,$o=Math.PI/180,Ar=180/Math.PI;function Qt(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[r&255]+Se[r>>8&255]+Se[r>>16&255]+Se[r>>24&255]+"-"+Se[e&255]+Se[e>>8&255]+"-"+Se[e>>16&15|64]+Se[e>>24&255]+"-"+Se[t&63|128]+Se[t>>8&255]+"-"+Se[t>>16&255]+Se[t>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function W(r,e,t){return Math.max(e,Math.min(t,r))}function Tr(r,e){return(r%e+e)%e}function i0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function s0(r,e,t){return r!==e?(t-r)/(e-r):0}function Yn(r,e,t){return(1-t)*r+t*e}function r0(r,e,t,n){return Yn(r,e,1-Math.exp(-t*n))}function o0(r,e=1){return e-Math.abs(Tr(r,e*2)-e)}function a0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function l0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function c0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function u0(r,e){return r+Math.random()*(e-r)}function h0(r){return r*(.5-Math.random())}function d0(r){r!==void 0&&(io=r);let e=io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function f0(r){return r*$o}function p0(r){return r*Ar}function m0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function g0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ko(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function x0(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*u,a*c);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rr(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jo(r,e){if(e.constructor===Float32Array)return r;let t=Rr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Qo(r,e){if(e.constructor===Float32Array)return r;let t=Rr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var zt={DEG2RAD:$o,RAD2DEG:Ar,generateUUID:Qt,clamp:W,euclideanModulo:Tr,mapLinear:i0,inverseLerp:s0,lerp:Yn,damp:r0,pingpong:o0,smoothstep:a0,smootherstep:l0,randInt:c0,randFloat:u0,randFloatSpread:h0,seededRandom:d0,degToRad:f0,radToDeg:p0,isPowerOfTwo:m0,ceilPowerOfTwo:g0,floorPowerOfTwo:Ko,setQuaternionFromProperEuler:x0,normalize:Qo,denormalize:jo},ae=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(h!==g||l!==d||c!==f||u!==p){let _=l*d+c*f+u*p+h*g;_<0&&(d=-d,f=-f,p=-p,g=-g,_=-_);let y=1-a;if(_<.9995){let b=Math.acos(_),E=Math.sin(b);y=Math.sin(y*b)/E,a=Math.sin(a*b)/E,l=l*y+d*a,c=c*y+f*a,u=u*y+p*a,h=h*y+g*a}else{l=l*y+d*a,c=c*y+f*a,u=u*y+p*a,h=h*y+g*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},v=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Is=new v,so=new fe,V=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],g=i[0],_=i[3],y=i[6],b=i[1],E=i[4],M=i[7],w=i[2],T=i[5],C=i[8];return s[0]=o*g+a*b+l*w,s[3]=o*_+a*E+l*T,s[6]=o*y+a*M+l*C,s[1]=c*g+u*b+h*w,s[4]=c*_+u*E+h*T,s[7]=c*y+u*M+h*C,s[2]=d*g+f*b+p*w,s[5]=d*_+f*E+p*T,s[8]=d*y+f*M+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ls.makeScale(e,t)),this}rotate(e){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ls.makeRotation(-e)),this}translate(e,t){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ls=new V,ro=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oo=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _0(){let r={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ki&&(i.r=xt(i.r),i.g=xt(i.g),i.b=xt(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ki&&(i.r=bn(i.r),i.g=bn(i.g),i.b=bn(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Er?lr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ar]:{primaries:e,whitePoint:n,transfer:lr,toXYZ:ro,fromXYZ:oo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:e,whitePoint:n,transfer:ki,toXYZ:ro,fromXYZ:oo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),r}var Ze=_0();function xt(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ln,qi=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ln===void 0&&(ln=ur("canvas")),ln.width=e.width,ln.height=e.height;let i=ln.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ln}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=xt(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xt(t[n]/255)*255):t[n]=xt(t[n]);return{data:t,width:e.width,height:e.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,Yi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Qt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zs(i[o].image)):s.push(zs(i[o]))}else s=zs(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function zs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qi.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}var v0=0,Ds=new v,It=class r extends _t{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Wn,i=Wn,s=Uo,o=Oo,a=ko,l=Bo,c=r.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Qt(),this.name="",this.source=new Yi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ds).x}get height(){return this.source.getSize(Ds).y}get depth(){return this.source.getSize(Ds).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Sr;It.DEFAULT_ANISOTROPY=1;var Mn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],g=l[2],_=l[6],y=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+_)<.1&&Math.abs(c+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(f+1)/2,w=(y+1)/2,T=(u+d)/4,C=(h+g)/4,I=(p+_)/4;return E>M&&E>w?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=T/n,s=C/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=I/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=I/s),this.set(n,i,s,t),this}let b=Math.sqrt((_-p)*(_-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(_-p)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var ve=class r{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,p,g,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,g,_)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,p,g,_){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=d,y[3]=f,y[7]=p,y[11]=g,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/cn.setFromMatrixColumn(e,0).length(),s=1/cn.setFromMatrixColumn(e,1).length(),o=1/cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,M0)}lookAt(e,t,n){let i=this.elements;return Oe.subVectors(e,t),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Et.crossVectors(n,Oe),Et.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Et.crossVectors(n,Oe)),Et.normalize(),bi.crossVectors(Oe,Et),i[0]=Et.x,i[4]=bi.x,i[8]=Oe.x,i[1]=Et.y,i[5]=bi.y,i[9]=Oe.y,i[2]=Et.z,i[6]=bi.z,i[10]=Oe.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],g=n[6],_=n[10],y=n[14],b=n[3],E=n[7],M=n[11],w=n[15],T=i[0],C=i[4],I=i[8],A=i[12],F=i[1],D=i[5],O=i[9],G=i[13],H=i[2],U=i[6],K=i[10],ne=i[14],Z=i[3],J=i[7],j=i[11],de=i[15];return s[0]=o*T+a*F+l*H+c*Z,s[4]=o*C+a*D+l*U+c*J,s[8]=o*I+a*O+l*K+c*j,s[12]=o*A+a*G+l*ne+c*de,s[1]=u*T+h*F+d*H+f*Z,s[5]=u*C+h*D+d*U+f*J,s[9]=u*I+h*O+d*K+f*j,s[13]=u*A+h*G+d*ne+f*de,s[2]=p*T+g*F+_*H+y*Z,s[6]=p*C+g*D+_*U+y*J,s[10]=p*I+g*O+_*K+y*j,s[14]=p*A+g*G+_*ne+y*de,s[3]=b*T+E*F+M*H+w*Z,s[7]=b*C+E*D+M*U+w*J,s[11]=b*I+E*O+M*K+w*j,s[15]=b*A+E*G+M*ne+w*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],_=e[11],y=e[15],b=l*f-c*d,E=a*f-c*h,M=a*d-l*h,w=o*f-c*u,T=o*d-l*u,C=o*h-a*u;return t*(g*b-_*E+y*M)-n*(p*b-_*w+y*T)+i*(p*E-g*w+y*C)-s*(p*M-g*T+_*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],_=e[14],y=e[15],b=t*a-n*o,E=t*l-i*o,M=t*c-s*o,w=n*l-i*a,T=n*c-s*a,C=i*c-s*l,I=u*g-h*p,A=u*_-d*p,F=u*y-f*p,D=h*_-d*g,O=h*y-f*g,G=d*y-f*_,H=b*G-E*O+M*D+w*F-T*A+C*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/H;return e[0]=(a*G-l*O+c*D)*U,e[1]=(i*O-n*G-s*D)*U,e[2]=(g*C-_*T+y*w)*U,e[3]=(d*T-h*C-f*w)*U,e[4]=(l*F-o*G-c*A)*U,e[5]=(t*G-i*F+s*A)*U,e[6]=(_*M-p*C-y*E)*U,e[7]=(u*C-d*M+f*E)*U,e[8]=(o*O-a*F+c*I)*U,e[9]=(n*F-t*O-s*I)*U,e[10]=(p*T-g*M+y*b)*U,e[11]=(h*M-u*T-f*b)*U,e[12]=(a*A-o*D-l*I)*U,e[13]=(t*D-n*A+i*I)*U,e[14]=(g*E-p*w-_*b)*U,e[15]=(u*w-h*E+d*b)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,g=o*u,_=o*h,y=a*h,b=l*c,E=l*u,M=l*h,w=n.x,T=n.y,C=n.z;return i[0]=(1-(g+y))*w,i[1]=(f+M)*w,i[2]=(p-E)*w,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+y))*T,i[6]=(_+b)*T,i[7]=0,i[8]=(p+E)*C,i[9]=(_-b)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=cn.set(i[0],i[1],i[2]).length(),a=cn.set(i[4],i[5],i[6]).length(),l=cn.set(i[8],i[9],i[10]).length();s<0&&(o=-o),tt.copy(this);let c=1/o,u=1/a,h=1/l;return tt.elements[0]*=c,tt.elements[1]*=c,tt.elements[2]*=c,tt.elements[4]*=u,tt.elements[5]*=u,tt.elements[6]*=u,tt.elements[8]*=h,tt.elements[9]*=h,tt.elements[10]*=h,t.setFromRotationMatrix(tt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Xn,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===Xn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Xn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===Xn)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===cr)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cn=new v,tt=new ve,b0=new v(0,0,0),M0=new v(1,1,1),Et=new v,bi=new v,Oe=new v,ao=new ve,lo=new fe,yt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-W(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(W(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yt.DEFAULT_ORDER="XYZ";var Kn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},S0=0,co=new v,un=new fe,dt=new ve,Mi=new v,On=new v,w0=new v,E0=new fe,uo=new v(1,0,0),ho=new v(0,1,0),fo=new v(0,0,1),po={type:"added"},A0={type:"removed"},hn={type:"childadded",child:null},Ns={type:"childremoved",child:null},st=class r extends _t{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new v,t=new yt,n=new fe,i=new v(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new V}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(uo,e)}rotateY(e){return this.rotateOnAxis(ho,e)}rotateZ(e){return this.rotateOnAxis(fo,e)}translateOnAxis(e,t){return co.copy(e).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uo,e)}translateY(e){return this.translateOnAxis(ho,e)}translateZ(e){return this.translateOnAxis(fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mi.copy(e):Mi.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dt.lookAt(On,Mi,this.up):dt.lookAt(Mi,On,this.up),this.quaternion.setFromRotationMatrix(dt),i&&(dt.extractRotation(i.matrixWorld),un.setFromRotationMatrix(dt),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(po),hn.child=e,this.dispatchEvent(hn),hn.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dt.multiply(e.parent.matrixWorld)),e.applyMatrix4(dt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(po),hn.child=e,this.dispatchEvent(hn),hn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};st.DEFAULT_UP=new v(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rt=class extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}};var ea={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},At={h:0,s:0,l:0},Si={h:0,s:0,l:0};function Fs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Tr(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fs(o,s,e+1/3),this.g=Fs(o,s,e),this.b=Fs(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Le){function n(s){s!==void 0&&parseFloat(s)<1&&me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=ea[e.toLowerCase()];return n!==void 0?this.setHex(n,t):me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}copyLinearToSRGB(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return Ze.workingToColorSpace(we.copy(this),e),Math.round(W(we.r*255,0,255))*65536+Math.round(W(we.g*255,0,255))*256+Math.round(W(we.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(we.copy(this),t);let n=we.r,i=we.g,s=we.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(we.copy(this),t),e.r=we.r,e.g=we.g,e.b=we.b,e}getStyle(e=Le){Ze.workingToColorSpace(we.copy(this),e);let t=we.r,n=we.g,i=we.b;return e!==Le?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(At),this.setHSL(At.h+e,At.s+t,At.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(At),e.getHSL(Si);let n=Yn(At.h,Si.h,t),i=Yn(At.s,Si.s,t),s=Yn(At.l,Si.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new ee;ee.NAMES=ea;var nt=new v,ft=new v,Us=new v,pt=new v,dn=new v,fn=new v,mo=new v,Os=new v,Bs=new v,ks=new v,Hs=new Mn,Gs=new Mn,Vs=new Mn,Pt=class r{constructor(e=new v,t=new v,n=new v){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nt.subVectors(e,t),i.cross(nt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){nt.subVectors(i,t),ft.subVectors(n,t),Us.subVectors(e,t);let o=nt.dot(nt),a=nt.dot(ft),l=nt.dot(Us),c=ft.dot(ft),u=ft.dot(Us),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pt)===null?!1:pt.x>=0&&pt.y>=0&&pt.x+pt.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,pt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pt.x),l.addScaledVector(o,pt.y),l.addScaledVector(a,pt.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Hs.setScalar(0),Gs.setScalar(0),Vs.setScalar(0),Hs.fromBufferAttribute(e,t),Gs.fromBufferAttribute(e,n),Vs.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Hs,s.x),o.addScaledVector(Gs,s.y),o.addScaledVector(Vs,s.z),o}static isFrontFacing(e,t,n,i){return nt.subVectors(n,t),ft.subVectors(e,t),nt.cross(ft).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nt.subVectors(this.c,this.b),ft.subVectors(this.a,this.b),nt.cross(ft).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;dn.subVectors(i,n),fn.subVectors(s,n),Os.subVectors(e,n);let l=dn.dot(Os),c=fn.dot(Os);if(l<=0&&c<=0)return t.copy(n);Bs.subVectors(e,i);let u=dn.dot(Bs),h=fn.dot(Bs);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(dn,o);ks.subVectors(e,s);let f=dn.dot(ks),p=fn.dot(ks);if(p>=0&&f<=p)return t.copy(s);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(fn,a);let _=u*p-f*h;if(_<=0&&h-u>=0&&f-p>=0)return mo.subVectors(s,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(mo,a);let y=1/(_+g+d);return o=g*y,a=d*y,t.copy(n).addScaledVector(dn,o).addScaledVector(fn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ke=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(it.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(it.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=it.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,it):it.fromBufferAttribute(s,o),it.applyMatrix4(e.matrixWorld),this.expandByPoint(it);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wi.copy(n.boundingBox)),wi.applyMatrix4(e.matrixWorld),this.union(wi)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,it),it.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bn),Ei.subVectors(this.max,Bn),pn.subVectors(e.a,Bn),mn.subVectors(e.b,Bn),gn.subVectors(e.c,Bn),Tt.subVectors(mn,pn),Rt.subVectors(gn,mn),Xt.subVectors(pn,gn);let t=[0,-Tt.z,Tt.y,0,-Rt.z,Rt.y,0,-Xt.z,Xt.y,Tt.z,0,-Tt.x,Rt.z,0,-Rt.x,Xt.z,0,-Xt.x,-Tt.y,Tt.x,0,-Rt.y,Rt.x,0,-Xt.y,Xt.x,0];return!Ws(t,pn,mn,gn,Ei)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,pn,mn,gn,Ei))?!1:(Ai.crossVectors(Tt,Rt),t=[Ai.x,Ai.y,Ai.z],Ws(t,pn,mn,gn,Ei))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,it).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(it).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mt=[new v,new v,new v,new v,new v,new v,new v,new v],it=new v,wi=new ke,pn=new v,mn=new v,gn=new v,Tt=new v,Rt=new v,Xt=new v,Bn=new v,Ei=new v,Ai=new v,qt=new v;function Ws(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){qt.fromArray(r,s);let a=i.x*Math.abs(qt.x)+i.y*Math.abs(qt.y)+i.z*Math.abs(qt.z),l=e.dot(qt),c=t.dot(qt),u=n.dot(qt);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var xe=new v,Ti=new ae,T0=0,Te=class extends _t{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=wr,this.version=0,this._normalizationScale=e!==void 0?Rr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ti.fromBufferAttribute(this,t),Ti.applyMatrix3(e),this.setXY(t,Ti.x,Ti.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xe.fromBufferAttribute(this,t),xe.applyMatrix3(e),this.setXYZ(t,xe.x,xe.y,xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xe.fromBufferAttribute(this,t),xe.applyMatrix4(e),this.setXYZ(t,xe.x,xe.y,xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xe.fromBufferAttribute(this,t),xe.applyNormalMatrix(e),this.setXYZ(t,xe.x,xe.y,xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xe.fromBufferAttribute(this,t),xe.transformDirection(e),this.setXYZ(t,xe.x,xe.y,xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):jo(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qo(e,this.array)}};var Zi=class extends Te{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ji=class extends Te{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var he=class extends Te{constructor(e,t,n){super(new Float32Array(e),t,n)}},R0=new ke,kn=new v,Xs=new v,$t=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kn.subVectors(e,this.center);let t=kn.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(kn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kn.copy(e.center).add(Xs)),this.expandByPoint(kn.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},C0=0,Ye=new ve,qs=new st,xn=new v,Be=new ke,Hn=new ke,_e=new v,Re=class r extends _t{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?Ji:Zi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new V().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ye.makeRotationFromQuaternion(e),this.applyMatrix4(Ye),this}rotateX(e){return Ye.makeRotationX(e),this.applyMatrix4(Ye),this}rotateY(e){return Ye.makeRotationY(e),this.applyMatrix4(Ye),this}rotateZ(e){return Ye.makeRotationZ(e),this.applyMatrix4(Ye),this}translate(e,t,n){return Ye.makeTranslation(e,t,n),this.applyMatrix4(Ye),this}scale(e,t,n){return Ye.makeScale(e,t,n),this.applyMatrix4(Ye),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xn).negate(),this.translate(xn.x,xn.y,xn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Be.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Hn.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Be.min,Hn.min),Be.expandByPoint(_e),_e.addVectors(Be.max,Hn.max),Be.expandByPoint(_e)):(Be.expandByPoint(Hn.min),Be.expandByPoint(Hn.max))}Be.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_e.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_e));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_e.fromBufferAttribute(a,c),l&&(xn.fromBufferAttribute(e,c),_e.add(xn)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)a[A]=new v,l[A]=new v;let u=new v,h=new v,d=new v,f=new ae,p=new ae,g=new ae,_=new v,y=new v;function b(A,F,D){c[A]=c[F]=c[D]=1,u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,D),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,F),g.fromBufferAttribute(s,D),h.sub(u),d.sub(u),p.sub(f),g.sub(f);let O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(O),y.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(O),a[A].add(_),a[F].add(_),a[D].add(_),l[A].add(y),l[F].add(y),l[D].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let A=0,F=E.length;A<F;++A){let D=E[A],O=D.start,G=D.count;for(let H=O,U=O+G;H<U;H+=3)b(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let M=new v,w=new v,T=new v,C=new v;function I(A){T.fromBufferAttribute(i,A),C.copy(T);let F=a[A];M.copy(F),M.sub(T.multiplyScalar(T.dot(F))).normalize(),w.crossVectors(C,F);let O=w.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,O)}for(let A=0,F=n.count;A<F;++A)c[A]&&I(A);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Te(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new v,s=new v,o=new v,a=new v,l=new v,c=new v,u=new v,h=new v;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),g=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_e.fromBufferAttribute(e,t),_e.normalize(),e.setXYZ(t,_e.x,_e.y,_e.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let y=0;y<u;y++)d[p++]=c[f++]}return new Te(d,u,h)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ys=new v,P0=new v,I0=new V,Sn=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ys.subVectors(n,t).cross(P0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ys),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||I0.getNormalMatrix(e),i=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},L0=0,jn=class extends _t{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Qt(),this.name="",this.type="Material",this.blending=Po,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=zo,this.blendEquation=Io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){me(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var gt=new v,Zs=new v,Ri=new v,Ci=new v,wn=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gt.copy(this.origin).addScaledVector(this.direction,t),gt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zs.copy(e).add(t).multiplyScalar(.5),Ri.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Zs);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ri),a=Ci.dot(this.direction),l=-Ci.dot(Ri),c=Ci.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){let g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Zs).addScaledVector(Ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;gt.subVectors(e.center,this.origin);let n=gt.dot(this.direction),i=gt.dot(gt)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gt)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,g=t.y-o.y,_=t.z-o.z,y=n.x-o.x,b=n.y-o.y,E=n.z-o.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(u),C,I,A,F,D,O,G,H,U,K,ne,Z;if(M>=w&&M>=T?(A=l,O=h,U=p,Z=y,l>=0?(C=c,I=u,F=d,D=f,G=g,H=_,K=b,ne=E):(C=u,I=c,F=f,D=d,G=_,H=g,K=E,ne=b)):w>=T?(A=c,O=d,U=g,Z=b,c>=0?(C=u,I=l,F=f,D=h,G=_,H=p,K=E,ne=y):(C=l,I=u,F=h,D=f,G=p,H=_,K=y,ne=E)):(A=u,O=f,U=_,Z=E,u>=0?(C=l,I=c,F=h,D=d,G=p,H=g,K=y,ne=b):(C=c,I=l,F=d,D=h,G=g,H=p,K=b,ne=y)),A===0)return null;let J=C/A,j=I/A,de=1/A,le=F-J*O,ie=D-j*O,De=G-J*U,Pe=H-j*U,$e=K-J*Z,Ee=ne-j*Z,Ne=$e*Pe-Ee*De,He=le*Ee-ie*$e,Ke=De*ie-Pe*le;if(i){if(Ne<0||He<0||Ke<0)return null}else if((Ne<0||He<0||Ke<0)&&(Ne>0||He>0||Ke>0))return null;let Ie=Ne+He+Ke;if(Ie===0)return null;let Ge=de*(Ne*O+He*U+Ke*Z);return(Ie>0?Ge<0:Ge>0)?null:this.at(Ge/Ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.combine=mr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},go=new ve,Yt=new wn,Pi=new $t,xo=new v,Ii=new v,Li=new v,zi=new v,Js=new v,Di=new v,_o=new v,Ni=new v,Kt=class extends st{constructor(e=new Re,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Di.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Js.fromBufferAttribute(h,e),o?Di.addScaledVector(Js,u):Di.addScaledVector(Js.sub(t),u))}t.add(Di)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(s),Yt.copy(e.ray).recast(e.near),!(Pi.containsPoint(Yt.origin)===!1&&(Yt.intersectSphere(Pi,xo)===null||Yt.origin.distanceToSquared(xo)>(e.far-e.near)**2))&&(go.copy(s).invert(),Yt.copy(e.ray).applyMatrix4(go),!(n.boundingBox!==null&&Yt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yt)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let _=d[p],y=o[_.materialIndex],b=Math.max(_.start,f.start),E=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let M=b,w=E;M<w;M+=3){let T=a.getX(M),C=a.getX(M+1),I=a.getX(M+2);i=Fi(this,y,e,n,c,u,h,T,C,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=p,y=g;_<y;_+=3){let b=a.getX(_),E=a.getX(_+1),M=a.getX(_+2);i=Fi(this,o,e,n,c,u,h,b,E,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let _=d[p],y=o[_.materialIndex],b=Math.max(_.start,f.start),E=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let M=b,w=E;M<w;M+=3){let T=M,C=M+1,I=M+2;i=Fi(this,y,e,n,c,u,h,T,C,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let _=p,y=g;_<y;_+=3){let b=_,E=_+1,M=_+2;i=Fi(this,o,e,n,c,u,h,b,E,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function z0(r,e,t,n,i,s,o,a){let l;if(e.side===rs?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===pr,a),l===null)return null;Ni.copy(a),Ni.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Ni);return c<t.near||c>t.far?null:{distance:c,point:Ni.clone(),object:r}}function Fi(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ii),r.getVertexPosition(l,Li),r.getVertexPosition(c,zi);let u=z0(r,e,t,n,Ii,Li,zi,_o);if(u){let h=new v;Pt.getBarycoord(_o,Ii,Li,zi,h),i&&(u.uv=Pt.getInterpolatedAttribute(i,a,l,c,h,new ae)),s&&(u.uv1=Pt.getInterpolatedAttribute(s,a,l,c,h,new ae)),o&&(u.normal=Pt.getInterpolatedAttribute(o,a,l,c,h,new v),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new v,materialIndex:0};Pt.getNormal(Ii,Li,zi,d.normal),u.face=d,u.barycoord=h}return u}var $i=class extends It{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Zn,u=Zn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class extends Te{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_n=new ve,yo=new ve,Ui=[],vo=new ke,D0=new ve,Gn=new Kt,Vn=new $t,Qn=class extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new An(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,D0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ke),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_n),vo.copy(e.boundingBox).applyMatrix4(_n),this.boundingBox.union(vo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_n),Vn.copy(e.boundingSphere).applyMatrix4(_n),this.boundingSphere.union(Vn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Gn.geometry=this.geometry,Gn.material=this.material,Gn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vn.copy(this.boundingSphere),Vn.applyMatrix4(n),e.ray.intersectsSphere(Vn)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_n),yo.multiplyMatrices(n,_n),Gn.matrixWorld=yo,Gn.raycast(e,Ui);for(let o=0,a=Ui.length;o<a;o++){let l=Ui[o];l.instanceId=s,l.object=this,t.push(l)}Ui.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new An(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(i*this.count),i,this.count,Ho,wr));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};var ei=class extends It{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tn=class r extends Re{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(h,2));function p(g,_,y,b,E,M,w,T,C,I,A){let F=M/C,D=w/I,O=M/2,G=w/2,H=T/2,U=C+1,K=I+1,ne=0,Z=0,J=new v;for(let j=0;j<K;j++){let de=j*D-G;for(let le=0;le<U;le++){let ie=le*F-O;J[g]=ie*b,J[_]=de*E,J[y]=H,c.push(J.x,J.y,J.z),J[g]=0,J[_]=0,J[y]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(le/C),h.push(1-j/I),ne+=1}}for(let j=0;j<I;j++)for(let de=0;de<C;de++){let le=d+de+U*j,ie=d+de+U*(j+1),De=d+(de+1)+U*(j+1),Pe=d+(de+1)+U*j;l.push(le,ie,Pe),l.push(ie,De,Pe),Z+=6}a.addGroup(f,Z,A),f+=Z,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ti=class r extends Re{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new v,u=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ni=class r extends Re{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],d=[],f=[],p=0,g=[],_=n/2,y=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function b(){let M=new v,w=new v,T=0,C=(t-e)/n;for(let I=0;I<=s;I++){let A=[],F=I/s,D=F*(t-e)+e;for(let O=0;O<=i;O++){let G=O/i,H=G*l+a,U=Math.sin(H),K=Math.cos(H);w.x=D*U,w.y=-F*n+_,w.z=D*K,h.push(w.x,w.y,w.z),M.set(U,C,K).normalize(),d.push(M.x,M.y,M.z),f.push(G,1-F),A.push(p++)}g.push(A)}for(let I=0;I<i;I++)for(let A=0;A<s;A++){let F=g[A][I],D=g[A+1][I],O=g[A+1][I+1],G=g[A][I+1];(e>0||A!==0)&&(u.push(F,D,G),T+=3),(t>0||A!==s-1)&&(u.push(D,O,G),T+=3)}c.addGroup(y,T,0),y+=T}function E(M){let w=p,T=new ae,C=new v,I=0,A=M===!0?e:t,F=M===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,_*F,0),d.push(0,F,0),f.push(.5,.5),p++;let D=p;for(let O=0;O<=i;O++){let H=O/i*l+a,U=Math.cos(H),K=Math.sin(H);C.x=A*K,C.y=_*F,C.z=A*U,h.push(C.x,C.y,C.z),d.push(0,F,0),T.x=U*.5+.5,T.y=K*.5*F+.5,f.push(T.x,T.y),p++}for(let O=0;O<i;O++){let G=w+O,H=D+O;M===!0?u.push(H,H+1,G):u.push(H+1,H,G),I+=3}c.addGroup(y,I,M===!0?1:2),y+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jt=class r extends Re{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],g=[],_=[];for(let y=0;y<u;y++){let b=y*d-o;for(let E=0;E<c;E++){let M=E*h-s;p.push(M,-b,0),g.push(0,0,1),_.push(E/a),_.push(1-y/l)}}for(let y=0;y<l;y++)for(let b=0;b<a;b++){let E=b+c*y,M=b+c*(y+1),w=b+1+c*(y+1),T=b+1+c*y;f.push(E,M,T),f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(g,3)),this.setAttribute("uv",new he(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},lt=class r extends Re{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new v,p=new ae;for(let g=0;g<=i;g++){for(let _=0;_<=n;_++){let y=s+_/n*o;f.x=h*Math.cos(y),f.y=h*Math.sin(y),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let g=0;g<i;g++){let _=g*(n+1);for(let y=0;y<n;y++){let b=y+_,E=b,M=b+n+1,w=b+n+2,T=b+1;a.push(E,M,T),a.push(M,w,T)}}this.setIndex(a),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ii=class r extends Re{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new v,d=new v,f=[],p=[],g=[],_=[];for(let y=0;y<=n;y++){let b=[],E=y/n,M=o+E*a,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w),C=0;y===0&&o===0?C=.5/t:y===n&&l===Math.PI&&(C=-.5/t);for(let I=0;I<=t;I++){let A=I/t,F=i+A*s;h.x=-T*Math.cos(F),h.y=w,h.z=T*Math.sin(F),p.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),_.push(A+C,1-E),b.push(c++)}u.push(b)}for(let y=0;y<n;y++)for(let b=0;b<t;b++){let E=u[y][b+1],M=u[y][b],w=u[y+1][b],T=u[y+1][b+1];(y!==0||o>0)&&f.push(E,M,T),(y!==n-1||l<Math.PI)&&f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(g,3)),this.setAttribute("uv",new he(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ta(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(bo(i))i.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(bo(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ce(r){let e={};for(let t=0;t<r.length;t++){let n=ta(r[t]);for(let i in n)e[i]=n[i]}return e}function bo(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}var si=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ct(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function qn(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function N0(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mo(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function F0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}var Lt=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ki=class extends Lt{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zt,endingEnd:Zt}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jt:s=e,a=2*t-n;break;case $n:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jt:o=e,l=2*n-t;break;case $n:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),g=p*p,_=g*p,y=-d*_+2*d*g-d*p,b=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*p+1,E=(-1-f)*_+(1.5+f)*g+.5*p,M=f*_-f*g;for(let w=0;w!==a;++w)s[w]=y*o[u+w]+b*o[c+w]+E*o[l+w]+M*o[h+w];return s}},ri=class extends Lt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},ji=class extends Lt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qi=class extends Lt{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),g=1-p;for(let _=0;_!==a;++_)s[_]=o[c+_]*g+o[l+_]*p;return s}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let g=o[c+p],_=o[l+p],y=f*d+p*2,b=h[y],E=h[y+1],M=e*d+p*2,w=u[M],T=u[M+1],C=O0(n,t,b,w,i);s[p]=na(C,g,E,T,_)}return s}};function na(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function U0(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function O0(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=na(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=U0(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ze=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ct(t,this.TimeBufferType),this.values=Ct(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ct(e.times,Array),values:Ct(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),qn(e.settings)&&(n.settings={inTangents:Ct(e.settings.inTangents,Array),outTangents:Ct(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ri(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ki(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Jn:t=this.InterpolantFactoryMethodDiscrete;break;case Wi:t=this.InterpolantFactoryMethodLinear;break;case Bi:t=this.InterpolantFactoryMethodSmooth;break;case or:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jn;case this.InterpolantFactoryMethodLinear:return Wi;case this.InterpolantFactoryMethodSmooth:return Bi;case this.InterpolantFactoryMethodBezier:return or}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;qn(this.settings)&&(So(this.settings.inTangents,e),So(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;qn(this.settings)&&(wo(this.settings.inTangents,e),wo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(ue("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ue("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ue("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&t0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ue("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bi,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[d+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,qn(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function So(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function wo(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}ze.prototype.ValueTypeName="";ze.prototype.TimeBufferType=Float32Array;ze.prototype.ValueBufferType=Float32Array;ze.prototype.DefaultInterpolation=Wi;var vt=class extends ze{constructor(e,t,n){super(e,t,n)}};vt.prototype.ValueTypeName="bool";vt.prototype.ValueBufferType=Array;vt.prototype.DefaultInterpolation=Jn;vt.prototype.InterpolantFactoryMethodLinear=void 0;vt.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends ze{constructor(e,t,n,i){super(e,t,n,i)}};oi.prototype.ValueTypeName="color";var Rn=class extends ze{constructor(e,t,n,i){super(e,t,n,i)}};Rn.prototype.ValueTypeName="number";var es=class extends Lt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)fe.slerpFlat(s,0,o,c-a,o,c,l);return s}},Cn=class extends ze{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new es(this.times,this.values,this.getValueSize(),e)}};Cn.prototype.ValueTypeName="quaternion";Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var bt=class extends ze{constructor(e,t,n){super(e,t,n)}};bt.prototype.ValueTypeName="string";bt.prototype.ValueBufferType=Array;bt.prototype.DefaultInterpolation=Jn;bt.prototype.InterpolantFactoryMethodLinear=void 0;bt.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends ze{constructor(e,t,n,i){super(e,t,n,i)}};ai.prototype.ValueTypeName="vector";var li=class{constructor(e="",t=-1,n=[],i=os){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(k0(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(ze.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=N0(l);l=Mo(l,1,u),c=Mo(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Rn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function B0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rn;case"vector":case"vector2":case"vector3":case"vector4":return ai;case"color":return oi;case"quaternion":return Cn;case"bool":case"boolean":return vt;case"string":return bt}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function k0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=B0(r.type);if(r.times===void 0){let n=[],i=[];F0(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),qn(r.settings)&&(t.settings={inTangents:Ct(r.settings.inTangents,Float32Array),outTangents:Ct(r.settings.outTangents,Float32Array)}),t}var ts=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ia=new ts,ns=class{constructor(e){this.manager=e!==void 0?e:ia,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){fe.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;fe.multiplyQuaternionsFlat(e,o,e,t,e,n),fe.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Cr="\\[\\]\\.:\\/",H0=new RegExp("["+Cr+"]","g"),Pr="[^"+Cr+"]",G0="[^"+Cr.replace("\\.","")+"]",V0=/((?:WC+[\/:])*)/.source.replace("WC",Pr),W0=/(WCOD+)?/.source.replace("WCOD",G0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pr),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pr),Y0=new RegExp("^"+V0+W0+X0+q0+"$"),Z0=["material","materials","bones","map"],hr=class{constructor(e,t,n){let i=n||se.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},se=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H0,"")}static parseTrackName(e){let t=Y0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Z0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;ue("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=hr;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ss=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Zt,endingEnd:Zt};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Vo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xo:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case os:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===Wo;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Go){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Jt,i.endingEnd=Jt):(e?i.endingStart=this.zeroSlopeAtStart?Jt:Zt:i.endingStart=$n,t?i.endingEnd=this.zeroSlopeAtEnd?Jt:Zt:i.endingEnd=$n)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},J0=new Float32Array(1),ci=class extends _t{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=i[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let g=t&&t._propertyBindings[h].binding.parsedPath;p=new is(se.create(n,f,g),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ri(new Float32Array(2),new Float32Array(2),1,J0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?li.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=os),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new ss(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?li.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Eo=new ve,ui=class{constructor(e,t,n=0,i=1/0){this.ray=new wn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Kn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eo),this}intersectObject(e,t=!0,n=[]){return dr(e,this,n,t),n.sort(Ao),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)dr(e[i],this,n,t);return n.sort(Ao),n}};function Ao(r,e){return r.distance-e.distance}function dr(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)dr(s[o],e,t,!0)}}var fr=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};var To=new v,Oi=new v,yn=new v,vn=new v,$s=new v,$0=new v,K0=new v,hi=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){To.subVectors(e,this.start),Oi.subVectors(this.end,this.start);let n=Oi.dot(Oi);if(n===0)return 0;let s=Oi.dot(To)/n;return t&&(s=W(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=$0,n=K0){let i=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;yn.subVectors(c,a),vn.subVectors(u,l),$s.subVectors(a,l);let h=yn.dot(yn),d=vn.dot(vn),f=vn.dot($s);if(h<=i&&d<=i)return t.copy(a),n.copy(l),t.distanceToSquared(n);if(h<=i)s=0,o=f/d,o=W(o,0,1);else{let p=yn.dot($s);if(d<=i)o=0,s=W(-p/h,0,1);else{let g=yn.dot(vn),_=h*d-g*g;_!==0?s=W((g*f-p*d)/_,0,1):s=0,o=(g*s+f)/d,o<0?(o=0,s=W(-p/h,0,1)):o>1&&(o=1,s=W((g-p)/h,0,1))}}return t.copy(a).addScaledVector(yn,s),n.copy(l).addScaledVector(vn,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");var il=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sl=`#ifdef USE_ALPHAHASH
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
#endif`,rl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ol=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,al=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ll=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cl=`#ifdef USE_AOMAP
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
#endif`,ul=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hl=`#ifdef USE_BATCHING
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
#endif`,dl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ml=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gl=`#ifdef USE_IRIDESCENCE
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
#endif`,xl=`#ifdef USE_BUMPMAP
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
#endif`,_l=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ml=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,El=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Al=`#define PI 3.141592653589793
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
} // validated`,Tl=`vec3 transformedNormal = objectNormal;
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
#endif`,Rl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Il=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ll="gl_FragColor = linearToOutputTexel( gl_FragColor );",zl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dl=`#ifdef USE_ENVMAP
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
#endif`,Nl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fl=`#ifdef USE_ENVMAP
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
#endif`,Ul=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ol=`#ifdef USE_ENVMAP
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
#endif`,Bl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vl=`#ifdef USE_GRADIENTMAP
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
}`,Wl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ql=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yl=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zl=`#ifdef USE_ENVMAP
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
#endif`,Jl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$l=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ql=`PhysicalMaterial material;
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
#endif`,ec=`uniform sampler2D dfgLUT;
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
}`,tc=`
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
#endif`,nc=`#if defined( RE_IndirectDiffuse )
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
#endif`,ic=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sc=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,rc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ac=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dc=`#if defined( USE_POINTS_UV )
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
#endif`,fc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gc=`#if defined( USE_MORPHCOLORS )
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
#endif`,xc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_c=`#ifdef USE_MORPHTARGETS
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
#endif`,yc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ec=`#ifdef USE_NORMALMAP
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
#endif`,Ac=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ic=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hc=`float getShadowMask() {
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
}`,Gc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vc=`#ifdef USE_SKINNING
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
#endif`,Wc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xc=`#ifdef USE_SKINNING
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
#endif`,qc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$c=`#ifdef USE_TRANSMISSION
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
#endif`,Kc=`#ifdef USE_TRANSMISSION
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
#endif`,jc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform float backgroundBlurriness;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,u1=`#define DISTANCE
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
}`,h1=`#define DISTANCE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,x1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,y1=`#define LAMBERT
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
}`,v1=`#define MATCAP
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
}`,b1=`#define MATCAP
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
}`,M1=`#define NORMAL
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
}`,S1=`#define NORMAL
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
}`,w1=`#define PHONG
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
}`,E1=`#define PHONG
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
}`,A1=`#define STANDARD
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
}`,T1=`#define STANDARD
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
}`,R1=`#define TOON
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
}`,C1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,I1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,z1=`uniform vec3 color;
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
}`,D1=`uniform float rotation;
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
}`,N1=`uniform vec3 diffuse;
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
}`,Y={alphahash_fragment:il,alphahash_pars_fragment:sl,alphamap_fragment:rl,alphamap_pars_fragment:ol,alphatest_fragment:al,alphatest_pars_fragment:ll,aomap_fragment:cl,aomap_pars_fragment:ul,batching_pars_vertex:hl,batching_vertex:dl,begin_vertex:fl,beginnormal_vertex:pl,bsdfs:ml,iridescence_fragment:gl,bumpmap_pars_fragment:xl,clipping_planes_fragment:_l,clipping_planes_pars_fragment:yl,clipping_planes_pars_vertex:vl,clipping_planes_vertex:bl,color_fragment:Ml,color_pars_fragment:Sl,color_pars_vertex:wl,color_vertex:El,common:Al,defaultnormal_vertex:Tl,displacementmap_pars_vertex:Rl,displacementmap_vertex:Cl,emissivemap_fragment:Pl,emissivemap_pars_fragment:Il,colorspace_fragment:Ll,colorspace_pars_fragment:zl,envmap_fragment:Dl,envmap_common_pars_fragment:Nl,envmap_pars_fragment:Fl,envmap_pars_vertex:Ul,envmap_physical_pars_fragment:Zl,envmap_vertex:Ol,fog_vertex:Bl,fog_pars_vertex:kl,fog_fragment:Hl,fog_pars_fragment:Gl,gradientmap_pars_fragment:Vl,lightmap_pars_fragment:Wl,lights_lambert_fragment:Xl,lights_lambert_pars_fragment:ql,lights_pars_begin:Yl,lights_toon_fragment:Jl,lights_toon_pars_fragment:$l,lights_phong_fragment:Kl,lights_phong_pars_fragment:jl,lights_physical_fragment:Ql,lights_physical_pars_fragment:ec,lights_fragment_begin:tc,lights_fragment_maps:nc,lights_fragment_end:ic,lightprobes_pars_fragment:sc,logdepthbuf_fragment:rc,logdepthbuf_pars_fragment:oc,logdepthbuf_pars_vertex:ac,logdepthbuf_vertex:lc,map_fragment:cc,map_pars_fragment:uc,map_particle_fragment:hc,map_particle_pars_fragment:dc,metalnessmap_fragment:fc,metalnessmap_pars_fragment:pc,morphinstance_vertex:mc,morphcolor_vertex:gc,morphnormal_vertex:xc,morphtarget_pars_vertex:_c,morphtarget_vertex:yc,normal_fragment_begin:vc,normal_fragment_maps:bc,normal_pars_fragment:Mc,normal_pars_vertex:Sc,normal_vertex:wc,normalmap_pars_fragment:Ec,clearcoat_normal_fragment_begin:Ac,clearcoat_normal_fragment_maps:Tc,clearcoat_pars_fragment:Rc,iridescence_pars_fragment:Cc,opaque_fragment:Pc,packing:Ic,premultiplied_alpha_fragment:Lc,project_vertex:zc,dithering_fragment:Dc,dithering_pars_fragment:Nc,roughnessmap_fragment:Fc,roughnessmap_pars_fragment:Uc,shadowmap_pars_fragment:Oc,shadowmap_pars_vertex:Bc,shadowmap_vertex:kc,shadowmask_pars_fragment:Hc,skinbase_vertex:Gc,skinning_pars_vertex:Vc,skinning_vertex:Wc,skinnormal_vertex:Xc,specularmap_fragment:qc,specularmap_pars_fragment:Yc,tonemapping_fragment:Zc,tonemapping_pars_fragment:Jc,transmission_fragment:$c,transmission_pars_fragment:Kc,uv_pars_fragment:jc,uv_pars_vertex:Qc,uv_vertex:e1,worldpos_vertex:t1,background_vert:n1,background_frag:i1,backgroundCube_vert:s1,backgroundCube_frag:r1,cube_vert:o1,cube_frag:a1,depth_vert:l1,depth_frag:c1,distance_vert:u1,distance_frag:h1,equirect_vert:d1,equirect_frag:f1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:x1,meshlambert_vert:_1,meshlambert_frag:y1,meshmatcap_vert:v1,meshmatcap_frag:b1,meshnormal_vert:M1,meshnormal_frag:S1,meshphong_vert:w1,meshphong_frag:E1,meshphysical_vert:A1,meshphysical_frag:T1,meshtoon_vert:R1,meshtoon_frag:C1,points_vert:P1,points_frag:I1,shadow_vert:L1,shadow_frag:z1,sprite_vert:D1,sprite_frag:N1},z={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},sa={basic:{uniforms:Ce([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Ce([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.fog,z.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Ce([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.fog,z.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Ce([z.common,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.roughnessmap,z.metalnessmap,z.fog,z.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Ce([z.common,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.gradientmap,z.fog,z.lights,{emissive:{value:new ee(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Ce([z.common,z.bumpmap,z.normalmap,z.displacementmap,z.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Ce([z.points,z.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Ce([z.common,z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Ce([z.common,z.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Ce([z.common,z.bumpmap,z.normalmap,z.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Ce([z.sprite,z.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Ce([z.common,z.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Ce([z.lights,z.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};sa.physical={uniforms:Ce([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var F1=new V;F1.set(-1,0,0,0,1,0,0,0,1);var Fp={[gr]:"LINEAR_TONE_MAPPING",[xr]:"REINHARD_TONE_MAPPING",[_r]:"CINEON_TONE_MAPPING",[yr]:"ACES_FILMIC_TONE_MAPPING",[br]:"AGX_TONE_MAPPING",[Mr]:"NEUTRAL_TONE_MAPPING",[vr]:"CUSTOM_TONE_MAPPING"};var Up=new Float32Array(16),Op=new Float32Array(9),Bp=new Float32Array(4);var kp={[gr]:"Linear",[xr]:"Reinhard",[_r]:"Cineon",[yr]:"ACESFilmic",[br]:"AgX",[Mr]:"Neutral",[vr]:"Custom"};var Hp={[Ro]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};var Gp={[Fo]:"ENVMAP_MODE_REFRACTION"};var Vp={[mr]:"ENVMAP_BLENDING_MULTIPLY",[Do]:"ENVMAP_BLENDING_MIX",[No]:"ENVMAP_BLENDING_ADD"};var U1=new V;U1.set(-1,0,0,0,1,0,0,0,1);var Wp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var L={x:-433,z:193,length:4.5,width:2.55,height:.8,net:.22,radius:.06},ot={x:L.x,z:L.z,w:11.2,d:6.8},ra={x:L.x,z:L.z,w:4.5,d:3},ls={x:L.x,z:198.15},Lr=[-436.6,-435.4,-430.6,-429.4].map(r=>({x:r,z:198.8})),zr=[...Lr,{x:L.x,z:200.05},{x:L.x,z:201.1}],oa=r=>r.z>=197.45&&zr.some(e=>Math.hypot(r.x-e.x,r.z-e.z)<=2.6);var Dr=["\uCD08\uAE09","\uC911\uAE09","\uC0C1\uAE09"],cs=3.5,di=L.height+L.radius,Ir=di+L.net,te=(r,e,t)=>Math.max(e,Math.min(t,r)),us=r=>r<2?-1:1,O1=r=>r<2?2:0,In=r=>({x:L.x+us(r)*3,z:L.z}),Nr=(r,e=0)=>{let t=(r.x-L.x)*us(e);return t>=2.699999&&t<=4.900001&&Math.abs(r.z-L.z)<=2.900001},Ln=r=>!!r&&Math.hypot(r.x-ls.x,r.z-ls.z)<=3.3,aa=r=>!!r&&Math.hypot(r.x-ot.x,r.z-ot.z)<=25;var B1=r=>te(1+.03*(r-6),1,1.6);function la(){let r=null;return{now(e,t){return r===null?t:e+r},observe(e,t){Number.isFinite(e)&&(r=Math.max(r??-1/0,e-t))},reset(){r=null}}}function fi(r){let e=Math.abs(r);return e<=90?"Perfect":e<=180?"Good":e<=300?"Bad":r<0?"early":"miss"}function k1(r,e,t){let n=te((Math.abs(r)-90)/210*(t?2:1),0,1),i=1.5+(r<0?1.35:-.9)*n,s=e*(.825+(r<0?.525*n:0)),o=(t?.13:e?.325:.39)-(r>0?.585*n:0);return{depth:i,lateral:s,clearance:o,result:o<0?"net":i>2.25||Math.abs(s)>1.275?"out":"in"}}function Pn(r,e,t,n){let i=Math.hypot(e.x-r.x,e.z-r.z)/t;return{a:r,b:e,duration:i,gravity:n,vy:(e.y-r.y)/i+n*i/2,end:r.at+i*1e3}}function H1(r,e,t,n,i){let s=Math.hypot(e.x-r.x,e.z-r.z)/t,o=(n-r.x)/(e.x-r.x);return te(2*(i-r.y-(e.y-r.y)*o)/(s*s*o*(1-o)),5.2,26)}function G1(r,e,t,n){let i=L.x+3*us(t),s=r.z+(i-r.x)*(r.z-e.a.z)/(r.x-e.a.x),o=Math.hypot(i-r.x,s-r.z)/(n*.92),a=Math.abs(e.vy-e.gravity*e.duration)*.85,l=Math.max(.14,r.y+a*o-e.gravity*o*o/2),c=Pn(r,{x:i,y:l,z:s},n*.92,e.gravity),u=c.vy-c.gravity*c.duration,h=(u+Math.sqrt(u*u+2*c.gravity*(l-L.radius)))/c.gravity,d={x:i+(i-r.x)*h/o,y:L.radius,z:s+(s-r.z)*h/o},f=Pn({...c.b,at:c.end},d,n*.92,c.gravity);return{arrivesAt:c.end,arrival:{x:i,y:l,z:s},legs:[c,f]}}function ca({incoming:r,time:e,launchAt:t=e,direction:n,smash:i,multiplier:s=1,rally:o=0,id:a=r.id+1}){let l=r.target,c=O1(l),u=us(l),h=e-r.arrivesAt,d=i?"smash":n?"corner":"return",f=k1(h,n,i),p=(i?12:n?6.6:6)*s*B1(o),g={...r.arrival,y:Math.max(.89,r.arrival.y),at:t},_={x:L.x-u*f.depth,y:di,z:L.z-u*f.lateral},y=H1(g,_,p,L.x,Ir+f.clearance),b=Pn(g,_,p,y);if(f.result==="net"){let w=(L.x-g.x)/(_.x-g.x),T={x:L.x,y:te(Ir+f.clearance,di,Ir),z:g.z+(_.z-g.z)*w},C=Pn(g,T,p,y),I=Pn({...T,at:C.end},{x:T.x+u*.45,y:di,z:T.z},2,12);return{id:a,from:l,target:c,kind:d,result:f.result,judgment:fi(h),time:t,speed:p,drop:T,bounces:[],arrivesAt:I.end,arrival:I.b,segments:[C,I]}}if(f.result==="out"){let w=-b.vy+y*b.duration,T=(Math.sqrt(w*w+2*y*(di-L.radius))-w)/y,C={..._,at:b.end},I=1+T/b.duration,A={x:g.x+(_.x-g.x)*I,y:L.radius,z:g.z+(_.z-g.z)*I},F=Pn(C,A,p,y);return{id:a,from:l,target:c,kind:d,result:f.result,judgment:fi(h),time:t,speed:p,drop:A,bounces:[],arrivesAt:F.end,arrival:A,segments:[b,F]}}let E={..._,at:b.end},M=G1(E,b,c,p);return{id:a,from:l,target:c,kind:d,result:f.result,judgment:fi(h),time:t,speed:p,drop:_,bounces:[E],arrivesAt:M.arrivesAt,arrival:M.arrival,segments:[b,...M.legs]}}function Dt(r,e){let t=r.segments.find(s=>e<=s.end)||r.segments.at(-1),n=te((e-t.a.at)/1e3,0,t.duration),i=n/t.duration;return{x:t.a.x+(t.b.x-t.a.x)*i,y:t.a.y+t.vy*n-t.gravity*n*n/2,z:t.a.z+(t.b.z-t.a.z)*i}}function hs(r,e,t,n=L.z){let i={...In(2),z:n},s=e?.arrival.z??i.z;if(!r||!e)return i;let o=cs*Math.max(0,t-e.time-r.reaction)/1e3;return{...i,z:te(i.z+te(s-i.z,-o,o),L.z-2.9,L.z+2.9)}}function Fr({type:r,down:e,up:t,dx:n,direction:i=0,swiped:s=!1,moved:o=!1}){let a=t-e,l=a>=450;r==="touch"&&(i=Math.abs(n)>=24||s&&Math.abs(n)>12?Math.sign(n):0);let c=a<=250&&(r!=="touch"||!s&&!o&&!i);return{direction:i,smash:l,time:c?e:t}}function ds(r,e,t,n=0){let i=r.rotation||0,s=e-r.x,o=t-r.z,a=Math.cos(i),l=Math.sin(i),c=Math.abs(a*s-l*o)-r.w/2,u=Math.abs(l*s+a*o)-r.d/2;return Math.hypot(Math.max(0,c),Math.max(0,u))+Math.min(0,Math.max(c,u))-n}function ua(r,e,t,n,i){let s=ds(r,e,t,i);if(s>=0)return!1;let o=n?ds(r,n.x,n.z,i):0;return o>=0||s<o-1e-4}function da(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Re;l.morphTargetsRelative=a;let c=0;for(let u=0;u<r.length;++u){let h=r[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==r[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=r[d].attributes.position.count}l.setIndex(h)}for(let u in s){let h=ha(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let g=0;g<o[u].length;++g)f.push(o[u][g][d]);let p=ha(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function ha(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new Te(o,t,n),l=0;for(let c=0;c<r.length;++c){let u=r[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let g=u.getComponent(d,p);a.setComponent(d+h,p,g)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function fa(r){let e=new Map,t=new Map,n=r.clone();return pa(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function pa(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)pa(r.children[n],e.children[n],t)}var Nt={kickboard:{palms:{Left:[.207,.5828,-.041],Right:[-.207,.5828,.01]},feet:{Left:[.065,.101,0],Right:[-.065,.1,-.018]}},props:{racket:{kind:"procedural",grip:[0,0,0],up:[0,1,0],forward:[0,0,1]},chicken:{kind:"food",grip:[-864e-6,0,.002055],up:[0,1,0],forward:[0,0,1],base:[-864e-6,0,.002055],bounds:[[-.100005,0,-.090381],[.100005,.159214,.090381]],mobileBase:[27e-5,0,.001323],mobileBounds:[[-.100072,0,-.090144],[.100072,.159519,.090144]]},biscuit:{kind:"food",grip:[.00107,0,-.001679],up:[0,1,0],forward:[0,0,1],base:[.00107,0,-.001679],bounds:[[-.069949,0,-.070632],[.069949,.06964,.070632]],mobileBase:[.001381,0,-.001289],mobileBounds:[[-.06989,0,-.070433],[.06989,.069602,.070433]]},"yangnyeom-chicken":{kind:"food",grip:[-.001435,0,891e-6],up:[0,1,0],forward:[0,0,1],base:[-.001435,0,891e-6],bounds:[[-.099864,0,-.081812],[.099864,.139963,.081812]],mobileBase:[-457e-6,0,902e-6],mobileBounds:[[-.100041,0,-.081908],[.100041,.140089,.081908]]},dakgangjeong:{kind:"food",grip:[-639e-6,0,-414e-6],up:[0,1,0],forward:[0,0,1],base:[-639e-6,0,-414e-6],bounds:[[-.079793,0,-.07965],[.079793,.179995,.07965]],mobileBase:[583e-6,0,125e-6],mobileBounds:[[-.079311,0,-.0801],[.079311,.17954,.0801]]},nuggets:{kind:"food",grip:[-1e-5,0,.006507],up:[0,1,0],forward:[0,0,1],base:[-1e-5,0,.006507],bounds:[[-.069665,0,-.09],[.069665,.093226,.09]],mobileBase:[3e-6,0,.007133],mobileBounds:[[-.069707,0,-.090243],[.069707,.093572,.090243]]},fries:{kind:"food",grip:[278e-6,0,772e-6],up:[0,1,0],forward:[0,0,1],base:[278e-6,0,772e-6],bounds:[[-.052102,0,-.048074],[.052102,.159969,.048074]],mobileBase:[15e-6,0,914e-6],mobileBounds:[[-.052168,0,-.048341],[.052168,.160188,.048341]]},"cheese-balls":{kind:"food",grip:[.001336,0,596e-6],up:[0,1,0],forward:[0,0,1],base:[.001336,0,596e-6],bounds:[[-.076897,0,-.071375],[.076897,.159987,.071375]],mobileBase:[86e-5,0,677e-6],mobileBounds:[[-.076848,0,-.071666],[.076848,.160214,.071666]]},"chicken-burger":{kind:"food",grip:[-957e-6,0,686e-6],up:[0,1,0],forward:[0,0,1],base:[-957e-6,0,686e-6],bounds:[[-.068489,0,-.068189],[.068489,.120064,.068189]],mobileBase:[-922e-6,0,.003823],mobileBounds:[[-.069097,0,-.067977],[.069097,.119161,.067977]]},lemonade:{kind:"food",grip:[-.001444,0,181e-6],up:[0,1,0],forward:[0,0,1],base:[-.001444,0,181e-6],bounds:[[-.049416,0,-.048125],[.049416,.180021,.048125]],mobileBase:[-.001264,0,-562e-6],mobileBounds:[[-.049475,0,-.047519],[.049475,.179878,.047519]]},tteokbokki:{kind:"food",grip:[79e-6,0,82e-6],up:[0,1,0],forward:[0,0,1],base:[79e-6,0,82e-6],bounds:[[-.090033,0,-.089983],[.090033,.101933,.089983]],mobileBase:[-117e-6,0,151e-6],mobileBounds:[[-.089969,0,-.090018],[.089969,.101569,.090018]]},gimbap:{kind:"food",grip:[0,0,0],up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.086893,0,-.100037],[.086893,.074676,.100037]],mobileBase:[0,0,0],mobileBounds:[[-.086872,0,-.100353],[.086872,.074245,.100353]]},eomuk:{kind:"food",grip:[-771e-6,0,-56e-6],up:[0,1,0],forward:[0,0,1],base:[-771e-6,0,-56e-6],bounds:[[-.073271,0,-.072807],[.073271,.180026,.072807]],mobileBase:[-698e-6,0,-438e-6],mobileBounds:[[-.07324,0,-.072673],[.07324,.180375,.072673]]},sundae:{kind:"food",grip:[.001934,0,-338e-6],up:[0,1,0],forward:[0,0,1],base:[.001934,0,-338e-6],bounds:[[-.089989,0,-.089901],[.089989,.134291,.089901]],mobileBase:[-502e-6,0,-295e-6],mobileBounds:[[-.090112,0,-.089842],[.090112,.133786,.089842]]},twigim:{kind:"food",grip:[-.006532,0,.007335],up:[0,1,0],forward:[0,0,1],base:[-.006532,0,.007335],bounds:[[-.090088,0,-.075501],[.090088,.124514,.075501]],mobileBase:[-.005222,0,.00637],mobileBounds:[[-.089842,0,-.076004],[.089842,.123768,.076004]]},ramyeon:{kind:"food",grip:[84e-6,0,-.001861],up:[0,1,0],forward:[0,0,1],base:[84e-6,0,-.001861],bounds:[[-.120164,0,-.095121],[.120164,.099487,.095121]],mobileBase:[-.00446,0,-825e-6],mobileBounds:[[-.120521,0,-.094396],[.120521,.098606,.094396]]},hotdog:{kind:"food",grip:[.008588,0,-352e-6],up:[0,1,0],forward:[0,0,1],base:[.008588,0,-352e-6],bounds:[[-.109984,0,-.04565],[.109984,.093505,.04565]],mobileBase:[.007985,0,-617e-6],mobileBounds:[[-.110223,0,-.0457],[.110223,.093425,.0457]]},bungeoppang:{kind:"food",grip:[-263e-6,0,-.001062],up:[0,1,0],forward:[0,0,1],base:[-263e-6,0,-.001062],bounds:[[-.090894,0,-.070332],[.090894,.159942,.070332]],mobileBase:[-663e-6,0,-.002578],mobileBounds:[[-.09083,0,-.070192],[.09083,.159723,.070192]]},hotteok:{kind:"food",grip:[-41e-6,0,52e-5],up:[0,1,0],forward:[0,0,1],base:[-41e-6,0,52e-5],bounds:[[-.066303,0,-.08493],[.066303,.169977,.08493]],mobileBase:[182e-6,0,-15e-6],mobileBounds:[[-.066488,0,-.085076],[.066488,.170306,.085076]]},sikhye:{kind:"food",grip:[-113e-6,0,-72e-6],up:[0,1,0],forward:[0,0,1],base:[-113e-6,0,-72e-6],bounds:[[-.092383,0,-.092288],[.092383,.159993,.092288]],mobileBase:[-448e-6,0,266e-6],mobileBounds:[[-.092048,0,-.092101],[.092048,.15998,.092101]]},carrot:{kind:"tool",grip:[-.00223,.14495,-.06674],up:[0,1,0],forward:[0,0,1],rotation:[-.7523,.2292,0],scale:1,tip:[-.03,.012,.086],base:[-.026694,0,.08197],bounds:[[-.104667,0,-.130457],[.104667,.249986,.130457]],mobileBase:[-.025714,0,.080682],mobileBounds:[[-.104884,0,-.130682],[.104884,.250314,.130682]]},"hay-bale":{kind:"tool",grip:[-.00241,.44263,-.48185],up:[0,1,0],forward:[0,0,1],rotation:[-.14,-0,0],scale:.32,tip:[0,.44,.45],base:[-.009016,0,-.001438],bounds:[[-.498269,0,-.497713],[.498269,.954762,.497713]],mobileBase:[.016564,0,-.003199],mobileBounds:[[-.50079,0,-.495446],[.50079,.957598,.495446]]},hoe:{kind:"tool",grip:[.12096,.27107,-.07],up:[0,1,0],forward:[0,0,1],rotation:[.0169,1.1128,0],scale:2.1,tip:[-.098,.014,.04],base:[-.095339,0,.035718],bounds:[[-.175,0,-.116795],[.175,.317651,.116795]],mobileBase:[-.095651,0,.035813],mobileBounds:[[-.174936,0,-.116839],[.174936,.317905,.116839]]},"watering-can":{kind:"tool",grip:[.05932,.34701,-.0013],up:[0,1,0],forward:[0,0,1],rotation:[-.468,1.5321,0],scale:1,tip:[-.208,.243,.01],poses:{water:{rotation:[.102,1.5321,0],swing:{radians:.065,rate:3}}},base:[.035441,0,619e-6],bounds:[[-.240537,0,-.132372],[.240537,.349944,.132372]],mobileBase:[.036569,0,794e-6],mobileBounds:[[-.240625,0,-.132513],[.240625,.35013,.132513]]},bucket:{kind:"tool",grip:[0,.122,.177],up:[0,1,0],forward:[0,0,1],rotation:[0,3.1416,0],scale:1,tip:[0,.327,-.175],poses:{bath:{rotation:[0,0,-1.2],swing:{radians:.15,rate:3},contactLift:.18},horseWater:{rotation:[.6874,-3.1416,0]},lampOil:{rotation:[.5874,-3.1416,0]}},base:[.001132,0,-.018023],bounds:[[-.176637,0,-.191831],[.176637,.350078,.191831]],mobileBase:[643e-6,0,-.018128],mobileBounds:[[-.176824,0,-.191758],[.176824,.350029,.191758]]},pitchfork:{kind:"tool",grip:[.05729,.62337,-.00312],up:[0,1,0],forward:[0,0,1],rotation:[-.272,.2742,0],scale:1,tip:[-.075,.05,.31],base:[-.069204,0,.285182],bounds:[[-.279133,0,-.395006],[.279133,1.200102,.395006]],mobileBase:[-.070523,0,.290128],mobileBounds:[[-.279706,0,-.394778],[.279706,1.200678,.394778]],mobileGrip:[.01794,.63522,.00819]},"grooming-brush":{kind:"tool",grip:[0,.12,0],up:[0,1,0],forward:[0,0,1],rotation:[1.5707963267948966,0,0],scale:1,tip:[0,0,0],base:[-291e-6,0,85e-5],bounds:[[-.109995,0,-.066345],[.109995,.120245,.066345]],mobileBase:[112e-6,0,199e-6],mobileBounds:[[-.110195,0,-.066766],[.110195,.120451,.066766]]},wheelbarrow:{kind:"tool",grip:[.50003,.65768,-.19592],up:[0,1,0],forward:[0,0,1],rotation:[0,1.5707963267948966,0],scale:1,tip:[.5,.66,-.18],leftGrip:[.5,.66,.18],base:[-.14454,0,.002523],bounds:[[-.599998,0,-.30894],[.599998,.731943,.30894]],mobileBase:[-.145023,0,.004338],mobileBounds:[[-.600465,0,-.310291],[.600465,.732126,.310291]]},"flower-planter":{kind:"tool",grip:[26e-5,.04962,-.00167],up:[0,1,0],forward:[0,0,1],rotation:[0,0,0],scale:.65,tip:[0,0,0],base:[-636e-6,0,-.002133],bounds:[[-.349987,0,-.178369],[.349987,.345052,.178369]],mobileBase:[-.001156,0,-.001244],mobileBounds:[[-.350097,0,-.179229],[.350097,.348138,.179229]]},"carrot-basket":{kind:"tool",grip:[44e-5,.5373,.00861],tip:[0,.065,.18],up:[0,1,0],forward:[0,0,1],rotation:[-.28,0,0],scale:.6,base:[.005,.518,0],mobileBase:[.005,.518,0],bounds:[[-.276,0,-.275],[.276,.542,.275]],mobileBounds:[[-.276,0,-.275],[.276,.542,.275]]},"lamp-post":{kind:"tool",grip:[-.54721,1.84606,-.06178],tip:[-.56,1.57,-.14],up:[0,1,0],forward:[0,0,1],rotation:[-.28,0,0],scale:.56,base:[-.56,1.83,-.14],mobileBase:[-.56,1.83,-.14],bounds:[[-.8,1.08,-.42],[-.32,1.9,.09]],mobileBounds:[[-.8,1.08,-.42],[-.32,1.9,.09]],mobileGrip:[-.5541,1.84435,-.07193]},hammer:{kind:"tool",grip:[-.00884,.17,-.02134],up:[0,1,0],forward:[0,0,1],rotation:[1.3208,-0,0],scale:1,tip:[0,.35,0],base:[0,0,0],bounds:[[-.09,0,-.04],[.09,.39,.04]]},"picnic-mat":{kind:"mat",grip:[0,.03,.9],base:[0,0,0],seat:[0,.03,0],size:[2.4,.03,1.8],up:[0,1,0],forward:[0,0,1]}},avatars:{"young-man":{approach:.055,pc:{arm:{shoulder:[-.1073,.9977,.017],length:.283},hands:{Left:{palm:[.001028,.026859,-.014244],up:[.07731,.025402,-.996683],forward:[-.004847,.999673,.025103]},Right:{palm:[-.004556,.030154,.01298],up:[-.27523,.022862,.961107],forward:[-.01969,.999373,-.029411]}},feet:{Left:{sole:[-.008613,.077847,-.018526]},Right:{sole:[-.013104,.0766,-.019699]}},faceFront:[.148031,.187985,-.012336],seatToHip:.177156,seat:[.054183,-.121047,-.037847]},mobile:{arm:{shoulder:[-.1073,.9975,.017],length:.2828},hands:{Left:{palm:[.001046,.026865,-.014471],up:[.07731,.025402,-.996683],forward:[-.004847,.999673,.025103]},Right:{palm:[-.004619,.030159,.013199],up:[-.27523,.022862,.961107],forward:[-.01969,.999373,-.029411]}},feet:{Left:{sole:[-.008622,.077861,-.018546]},Right:{sole:[-.013013,.076509,-.019561]}},faceFront:[.147967,.18798,-.01233],seatToHip:.169209,seat:[.028369,-.112981,.041112]}},girl:{approach:.04,pc:{arm:{shoulder:[-.1207,.9562,-.0101],length:.312},hands:{Left:{palm:[.002262,.026527,-.012545],up:[.080525,.009428,-.996708],forward:[.046169,.998847,.013178]},Right:{palm:[-.008729,.024844,-.011101],up:[-.52096,.022073,-.853296],forward:[-.046357,.997459,.054105]}},feet:{Left:{sole:[-.009742,.06055,-.017049]},Right:{sole:[-.009749,.060558,-.01706]}},faceFront:[.151134,.213331,-.012594],seatToHip:.187189,seat:[.048211,-.1263,-.018999]},mobile:{arm:{shoulder:[-.1207,.9565,-.0101],length:.3121},hands:{Left:{palm:[.002243,.026525,-.012312],up:[.080525,.009428,-.996708],forward:[.046169,.998847,.013178]},Right:{palm:[-.008865,.02485,-.011323],up:[-.52096,.022073,-.853296],forward:[-.046357,.997459,.054105]}},feet:{Left:{sole:[-.009684,.060483,-.016947]},Right:{sole:[-.009624,.060414,-.016842]}},faceFront:[.150559,.213283,-.012546],seatToHip:.185015,seat:[.040792,-.122106,-.022939]}},student:{approach:0,pc:{arm:{shoulder:[-.1278,1.0245,.0036],length:.3351},hands:{Left:{palm:[.001085,.031625,-.014347],up:[.128835,.02741,-.991287],forward:[-.028091,.999318,.023981]},Right:{palm:[.007408,.031023,-.011811],up:[.554773,.017948,-.831808],forward:[-.020505,.999759,.007896]}},feet:{Left:{sole:[-.012315,.0709,-.020038]},Right:{sole:[-.01379,.070935,-.019117]}},faceFront:[.11677,.226992,-.057504],seatToHip:.161562,seat:[.053864,-.111889,-.036028]},mobile:{arm:{shoulder:[-.1278,1.0248,.0036],length:.335},hands:{Left:{palm:[.00113,.031635,-.014697],up:[.128835,.02741,-.991287],forward:[-.028091,.999318,.023981]},Right:{palm:[.007298,.031019,-.011645],up:[.554773,.017948,-.831808],forward:[-.020505,.999759,.007896]}},feet:{Left:{sole:[-.012239,.070803,-.019914]},Right:{sole:[-.013869,.071024,-.019226]}},faceFront:[.116325,.226907,-.057421],seatToHip:.159632,seat:[.058323,-.111415,-.048363]}},office:{approach:.035,pc:{arm:{shoulder:[-.1411,1.0116,-.0029],length:.3027},hands:{Left:{palm:[.002987,.021474,-.014005],up:[.141778,.010466,-.989843],forward:[.043566,.998909,.016802]},Right:{palm:[.011848,.031576,.008624],up:[.772156,.013242,.635295],forward:[.007347,.99953,-.029765]}},feet:{Left:{sole:[-.007386,.079255,-.020632]},Right:{sole:[-.012819,.07925,-.017761]}},faceFront:[.128141,.24344,-.05129],seatToHip:.178552,seat:[.057319,-.125079,-.009336]},mobile:{arm:{shoulder:[-.1411,1.0114,-.0029],length:.3028},hands:{Left:{palm:[.002998,.021474,-.014078],up:[.141778,.010466,-.989843],forward:[.043566,.998909,.016802]},Right:{palm:[.011799,.031575,.008583],up:[.772156,.013242,.635295],forward:[.007347,.99953,-.029765]}},feet:{Left:{sole:[-.007349,.0792,-.020529]},Right:{sole:[-.012793,.079227,-.017724]}},faceFront:[.127663,.24338,-.05123],seatToHip:.166655,seat:[.058818,-.116785,-.034037]}},auntie:{approach:0,pc:{arm:{shoulder:[-.1004,.9768,.0721],length:.2892},hands:{Left:{palm:[.002977,.025065,-.012239],up:[.181205,.020968,-.983222],forward:[.024319,.999371,.025795]},Right:{palm:[.013855,.029339,.002289],up:[.960633,.0185,.277205],forward:[-.002114,.998238,-.059294]}},feet:{Left:{sole:[-.010771,.068093,-.016157]},Right:{sole:[-.010636,.06793,-.015954]}},faceFront:[.123368,.171796,-.054391],seatToHip:.188316,seat:[-.018495,-.103771,-.021681]},mobile:{arm:{shoulder:[-.1004,.9771,.0721],length:.2892},hands:{Left:{palm:[.002964,.025063,-.012168],up:[.181205,.020968,-.983222],forward:[.024319,.999371,.025795]},Right:{palm:[.013757,.029337,.002261],up:[.960633,.0185,.277205],forward:[-.002114,.998238,-.059294]}},feet:{Left:{sole:[-.010846,.068183,-.01627]},Right:{sole:[-.01063,.067923,-.015944]}},faceFront:[.123158,.171763,-.054359],seatToHip:.188096,seat:[-.019146,-.103225,-.024158]}},uncle:{approach:.1,pc:{arm:{shoulder:[-.182,1.0307,-.0244],length:.2721},hands:{Left:{palm:[.003234,.044638,-.014133],up:[.028324,.005298,-.999585],forward:[.063247,.997973,.007082]},Right:{palm:[.002224,.043365,-.013785],up:[.356054,.006933,-.93444],forward:[-.063454,.997844,-.016775]}},feet:{Left:{sole:[-.009468,.076449,-.017989]},Right:{sole:[-.009481,.076463,-.018013]}},faceFront:[.134897,.251869,-.057965],seatToHip:.17385,seat:[.058238,-.122956,-.004574]},mobile:{arm:{shoulder:[-.182,1.0309,-.0244],length:.2721},hands:{Left:{palm:[.003235,.044638,-.014188],up:[.028324,.005298,-.999585],forward:[.063247,.997973,.007082]},Right:{palm:[.002207,.043364,-.013741],up:[.356054,.006933,-.93444],forward:[-.063454,.997844,-.016775]}},feet:{Left:{sole:[-.009376,.076344,-.017814]},Right:{sole:[-.00946,.076439,-.017973]}},faceFront:[.134815,.251855,-.057952],seatToHip:.169628,seat:[.048385,-.118245,.012744]}},grandma:{approach:0,pc:{arm:{shoulder:[-.1345,1.0118,.0163],length:.3477},hands:{Left:{palm:[.00173,.022552,-.015886],up:[-.008212,.026753,-.999608],forward:[.084038,.996124,.025969]},Right:{palm:[-.015761,.024399,-.005005],up:[-.918675,.0221,-.394397],forward:[-.006255,.997495,.070465]}},feet:{Left:{sole:[-.012758,.07577,-.020039]},Right:{sole:[-.014096,.075717,-.019027]}},faceFront:[.173489,.235612,-.010205],seatToHip:.200665,seat:[.047213,-.133829,-.020404]},mobile:{arm:{shoulder:[-.1344,1.0121,.0163],length:.3477},hands:{Left:{palm:[.001731,.022548,-.015734],up:[-.008212,.026753,-.999608],forward:[.084038,.996124,.025969]},Right:{palm:[-.015752,.024399,-.005001],up:[-.918675,.0221,-.394397],forward:[-.006255,.997495,.070465]}},feet:{Left:{sole:[-.012639,.075618,-.019853]},Right:{sole:[-.014049,.075663,-.018962]}},faceFront:[.173323,.235602,-.010195],seatToHip:.195003,seat:[.053391,-.131742,-.032805]}},grandpa:{approach:0,pc:{arm:{shoulder:[-.1415,.9976,.0298],length:.3684},hands:{Left:{palm:[.001029,.032329,-.011278],up:[.144194,.018082,-.989384],forward:[-.021343,.999657,.015159]},Right:{palm:[-.007191,.036501,-.009892],up:[-.718103,.019313,-.695669],forward:[.0541,.998139,-.028134]}},feet:{Left:{sole:[-.01014,.07737,-.024796]},Right:{sole:[-.014943,.078449,-.022463]}},faceFront:[.156931,.234079,-.008718],seatToHip:.178361,seat:[.052999,-.122685,-.019546]},mobile:{arm:{shoulder:[-.1415,.9977,.0298],length:.3684},hands:{Left:{palm:[.001021,.032328,-.011222],up:[.144194,.018082,-.989384],forward:[-.021343,.999657,.015159]},Right:{palm:[-.007193,.036501,-.009893],up:[-.718103,.019313,-.695669],forward:[.0541,.998139,-.028134]}},feet:{Left:{sole:[-.010156,.077395,-.024836]},Right:{sole:[-.01485,.078356,-.022322]}},faceFront:[.157346,.234102,-.008741],seatToHip:.175782,seat:[.041946,-.117801,-.012738]}}},horses:{pony2:{pc:{mouth:{bone:"tripoHead_2",point:[-.2806,.005602,-.013961]},neck:{bone:"tripoHead_1",point:[.075735,.078493,-.176065]},back:{bone:"tripoSpine_0",point:[.184764,-.059576,.005627]},left:{bone:"tripoSpine_0",point:[.140108,-.024872,-.12511]},right:{bone:"tripoSpine_0",point:[.164206,.088206,.104099]}},mobile:{mouth:{bone:"tripoHead_2",point:[-.280606,.005603,-.013961]},neck:{bone:"tripoHead_1",point:[.075732,.078496,-.175992]},back:{bone:"tripoSpine_0",point:[.184485,-.059679,.005626]},left:{bone:"tripoSpine_0",point:[.142279,-.028613,-.124904]},right:{bone:"tripoSpine_0",point:[.158483,.088274,.106211]}}},racehorse2:{pc:{mouth:{bone:"tripoHead_2",point:[-.140889,.255553,.008743]},neck:{bone:"tripoHead_1",point:[.077608,.08192,-.083764]},back:{bone:"tripoSpine_0",point:[.073501,-.123497,.003206]},left:{bone:"tripoSpine_0",point:[.070769,-.068053,-.065406]},right:{bone:"tripoSpine_0",point:[.074504,-.065441,.060806]}},mobile:{mouth:{bone:"tripoHead_2",point:[-.140827,.25535,.008736]},neck:{bone:"tripoHead_1",point:[.077617,.081922,-.083977]},back:{bone:"tripoSpine_0",point:[.073082,-.123477,.003206]},left:{bone:"tripoSpine_0",point:[.071104,-.062831,-.064455]},right:{bone:"tripoSpine_0",point:[.067474,-.058758,.071531]}}}},houses:{"house-tier1":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[0,0,2.756388],footprint:[4.924164,4.467764],floorAreaM2:22,bounds:[[-2.462082,0,-2.233882],[2.462082,5.628008,2.233882]],mobileBase:[0,0,0],mobileBounds:[[-2.462082,0,-2.233882],[2.462082,5.628008,2.233882]]},"house-tier2":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-.856797,0,3.301237],footprint:[5.750316,5.564912],floorAreaM2:32,bounds:[[-2.875158,0,-2.782456],[2.875158,5.660423,2.782456]],mobileBase:[0,0,0],mobileBounds:[[-2.875158,0,-2.782456],[2.875158,5.660423,2.782456]]},"house-tier3":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-.435101,0,3.942986],footprint:[6.061922,6.928496],floorAreaM2:42,bounds:[[-3.030961,0,-3.464248],[3.030961,8.367333,3.464248]],mobileBase:[0,0,0],mobileBounds:[[-3.030961,0,-3.464248],[3.030961,8.367333,3.464248]]},"house-tier4":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[1.400806,0,4.203388],footprint:[7.247256,7.451096],floorAreaM2:54,bounds:[[-3.623628,0,-3.725548],[3.623628,6.825015,3.725548]],mobileBase:[0,0,0],mobileBounds:[[-3.623628,0,-3.725548],[3.623628,6.825015,3.725548]]},"house-tier5":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-.253743,0,3.807711],footprint:[8.749774,6.971608],floorAreaM2:61,bounds:[[-4.374887,0,-3.485804],[4.374887,8.356526,3.485804]],mobileBase:[0,0,0],mobileBounds:[[-4.374887,0,-3.485805],[4.374887,8.356526,3.485805]]},"house-tier6":{kind:"house",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[.542665,0,4.352629],footprint:[10.23897,7.617954],floorAreaM2:78,bounds:[[-5.119485,0,-3.808977],[5.119485,8.398256,3.808977]],mobileBase:[0,0,0],mobileBounds:[[-5.119485,0,-3.808977],[5.119485,8.398256,3.808977]]}},shops:{"shop-bank":{kind:"shop",label:"\uC740\uD589",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[.036869,0,3.844138],doorHeightM:2.028,footprint:[7.8,7.586615],groundFootprint:[7.575183,7.335125],bounds:[[-3.947631,0,-3.919052],[3.852369,7.8,3.667562]],sign:{center:[.022786,5.126333,2.026204],size:[3.070167,.507],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-3.947631,0,-3.919052],[3.852369,7.8,3.667562]]},"shop-realestate":{kind:"shop",label:"\uBD80\uB3D9\uC0B0",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[1.440086,0,4.401905],doorHeightM:2.587,footprint:[7.3,8.071728],groundFootprint:[7.026306,7.865335],bounds:[[-3.602889,0,-3.986509],[3.697111,9.18445,4.085218]],sign:{center:[-.185051,5.406069,3.078678],size:[4.245257,.596989],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-3.602889,0,-3.986509],[3.697111,9.18445,4.085218]]},"shop-community":{kind:"shop",label:"\uC8FC\uBBFC\uC13C\uD130",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[0,0,3.498266],doorHeightM:2.196,footprint:[8,6.266586],groundFootprint:[7.483871,5.896531],bounds:[[-4,0,-3.31832],[4,9.967133,2.948266]],sign:{center:[.017996,3.671227,2.671248],size:[1.691644,.431909],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-4,0,-3.31832],[4,9.967133,2.948266]]},"shop-architect":{kind:"shop",label:"\uAC74\uCD95\uC0AC\uBB34\uC18C",up:[0,1,0],forward:[0,0,1],base:[0,0,0],door:[-1.247128,0,3.941946],doorHeightM:2.32,footprint:[7.6,6.783893],groundFootprint:[7.6,6.783893],bounds:[[-3.8,0,-3.391946],[3.8,8.031595,3.391946]],sign:{center:[.029003,4.306943,2.536985],size:[2.668274,.493051],normal:[0,0,1]},mobileBase:[0,0,0],mobileBounds:[[-3.8,0,-3.391946],[3.8,8.031595,3.391946]]}},garden:{"garden-fence":{kind:"fence",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.75,0,-.102223],[.75,.9,.102223]],footprint:[1.5,.204446],mobileBase:[0,0,0],mobileBounds:[[-.75,0,-.102223],[.75,.9,.102223]],joinPoints:{left:[-.75,0,0],right:[.75,0,0]}},"garden-gate":{kind:"gate",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.75,0,-.201881],[.75,1.192889,.201881]],footprint:[1.5,.403762],mobileBase:[0,0,0],mobileBounds:[[-.75,0,-.201881],[.75,1.192889,.201881]],joinPoints:{left:[-.75,0,0],right:[.75,0,0]}},"garden-bed":{kind:"bed",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.75,0,-.450828],[.75,.214512,.450828]],footprint:[1.5,.901656],mobileBase:[0,0,0],mobileBounds:[[-.75,0,-.450828],[.75,.214512,.450828]],plantingSlots:[[-.45,.15,-.125],[0,.15,-.125],[.45,.15,-.125],[-.45,.15,.125],[0,.15,.125],[.45,.15,.125]]},"garden-bush":{kind:"bush",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.485187,0,-.485187],[.485187,.758001,.485187]],footprint:[.970373,.970373],mobileBase:[0,0,0],mobileBounds:[[-.485187,0,-.485187],[.485187,.758001,.485187]],diameterM:1},"garden-stone":{kind:"stone",up:[0,1,0],forward:[0,0,1],base:[0,0,0],bounds:[[-.238007,0,-.249912],[.238007,.076606,.249912]],footprint:[.476014,.499823],mobileBase:[0,0,0],mobileBounds:[[-.238007,0,-.249912],[.238007,.076606,.249912]],diameterM:.5}}};var Ur=Object.freeze(Object.fromEntries(Object.entries(Nt.props).filter(([,r])=>r.kind!=="mat"&&r.kind!=="procedural"))),W1=new Set(Object.keys(Ur).filter(r=>Ur[r].kind==="food")),Qp=Object.freeze(Object.fromEntries(Object.entries(Nt.avatars).map(([r,e])=>[r,e.approach]))),X1={grip:[0,0,0],forward:[0,0,1],up:[0,1,0]};function Or(r,e="Right"){let t;return r.traverse(n=>{n.isBone&&n.name.endsWith(e+"Hand")&&(t=n)}),t}function en(r,e){let t=new v(...r).normalize(),n=new v(...e).normalize(),i=t.clone().cross(n).normalize();return new fe().setFromRotationMatrix(new ve().makeBasis(i,t,i.clone().cross(t)))}var q1=en([0,0,1],[0,1,0]),Y1=en([0,-1,0],[0,0,1]),Z1=en([0,0,1],[0,1,0]);function ma(r,e,t,n){let i=t==="fishingRod"?X1:t==="racket"?Nt.props.racket:Ur[t];if(!i||!e)return null;let s=e.name.includes("Left")?"Left":"Right",o=r.mobile?"mobile":"pc",a=(Nt.avatars[r.avatar?.id]||Nt.avatars["young-man"])[o].hands[s],l=W1.has(t),c=new v(...l?r.mobile?i.mobileBase:i.base:r.mobile&&i.mobileGrip?i.mobileGrip:i.grip),u=en(a.forward,a.up).invert(),h=new v(...a.forward).cross(new v(...a.up)).normalize(),d=new rt;if(d.name="hand-grip-"+t,e.add(d),d.position.fromArray(a.palm),n){d.add(n);let D=i.scale||1;n.scale.setScalar(D),n.quaternion.copy(Z1).multiply(en(i.forward,i.up).invert()),n.position.copy(c).applyQuaternion(n.quaternion).multiplyScalar(-D)}let f=[];e.traverse(D=>{D.isBone&&/Hand(?:Index|Middle|Ring|Pinky|Thumb)[123]$/.test(D.name)&&f.push({bone:D,base:D.quaternion.clone()})});let p=o==="mobile"?i.mobileBounds:i.bounds,g=l?zt.clamp(.76-3.2*(p[1][2]-p[0][2]),.15,.48):.65,_=l&&p[1][0]-p[0][0]>.13,y=new v,b=new fe,E=new fe,M=new fe,w=new v,T=new v,C=new v,I=new v,A=new yt,F=!1;return{holder:d,hand:e,key:t,update({rotation:D=i.rotation||[0,0,0],close:O=g,handOrientation:G=null}={}){if(!F){r.player.updateWorldMatrix(!0,!0),r.player.getWorldQuaternion(b),G?E.copy(G):E.copy(b).multiply(l?q1:Y1),E.multiply(u),e.quaternion.copy(e.parent.getWorldQuaternion(M).invert().multiply(E)),e.updateWorldMatrix(!1,!0),e.getWorldScale(y),d.scale.set(1/y.x,1/y.y,1/y.z),E.copy(b).multiply(M.setFromEuler(A.set(...D))),d.quaternion.copy(e.getWorldQuaternion(M).invert().multiply(E)),I.copy(h).applyQuaternion(e.getWorldQuaternion(b));for(let{bone:H,base:U}of f){H.parent.getWorldQuaternion(M).invert(),C.copy(I).applyQuaternion(M);let K=H.name.includes("Thumb")?_?-.32:O*.4:O;H.quaternion.copy(U).premultiply(E.setFromAxisAngle(C,K)),H.updateWorldMatrix(!1,!0)}d.updateWorldMatrix(!0,!0)}},get info(){return d.getWorldPosition(w),n?T.copy(c).applyMatrix4(n.matrixWorld):T.copy(w),{key:t,palm:w.toArray(),contact:T.toArray(),error:T.distanceTo(w),fingerCount:f.length}},dispose(){if(F=!0,!r.avatar?.riding)for(let{bone:D,base:O}of f)D.quaternion.copy(O);d.removeFromParent()}}}var J1=Date.parse("2026-11-25T00:00:00+09:00");var $1=1440,K1=7*$1,_a=Date.parse("2026-11-16T00:00:00+09:00"),tm=6*36e5,j1=18*36e5,nm=(J1-_a)/864e5,im=K1*6e4/j1;var Q1=Date.parse("2026-11-20T00:00:00+09:00"),sm=Date.parse("2026-11-20T08:15:00+09:00");var ya=Object.freeze({4:14,5:10,6:10}),e3=Object.keys(ya).map(Number),t3=21e4,n3=36e4;var i3=r=>Math.round(r*2e4/429),rm=Q1+t3,om=9*36e5,s3=[1200,1400,1600,1800],Br=[0];for(let r of s3)Br.push(Br.at(-1)+i3(r)+n3);var am=Br.at(-1);var r3=[[[3,1200],[3,1200],[3,1400],[3,1200],[3,1400],[2,1200],[2,1400],[2,1600],[1,1800]],[[3,1200],[3,1200],[3,1400],[3,1200],[2,1200],[2,1400],[2,1600],[1,1600],[1,1800]]],ga=[1140,1230,1320],o3=Object.freeze({raceWindows:Object.freeze(ga.map((r,e)=>Object.freeze({session:e,start:r*7-24.5,end:(r+64)*7+31.5,floodlights:e>0}))),races:Object.freeze(ga.flatMap((r,e)=>r3[Math.min(1,e)].map(([t,n],i)=>{let s=(r+i*8)*7;return Object.freeze({session:e,day:Math.floor(s/1440),minute:s%1440,number:i+1,grade:t,distance:n,special:e>0&&i===8})})))}),va=Object.freeze({name:"Run Park",epochMs:_a,epochGameMinute:0,dayNames:Object.freeze(["\uC6D4\uC694\uC77C","\uD654\uC694\uC77C","\uC218\uC694\uC77C","\uBAA9\uC694\uC77C","\uAE08\uC694\uC77C","\uD1A0\uC694\uC77C","\uC77C\uC694\uC77C"]),phases:Object.freeze({dawn:5,day:7,dusk:17,night:19}),weeklyFeature:Object.freeze({session:1,number:9,weekOffset:5,everyWeeks:7}),...o3});var xa={start:18,end:24},kr=Object.freeze({shell:{start:0,end:5,label:"\uB2E4\uC2AC\uAE30",icon:"creek/clam",target:"shell",fromMidnight:!0},dawn:{start:0,end:9,label:"\uC0C8\uBCBD \uD0D0\uC0C9",icon:"env/mushroom-stump",target:"dawn"},clam:{start:9,end:18,label:"\uC870\uAC1C \uCE90\uAE30",icon:"props/shovel",target:"clam",fromMidnight:!0},gardener:{start:9,end:18,label:"\uB0AE \uC77C\uD130",icon:"props/hoe",target:"gardener"},lamp:{...xa,label:"\uB4F1\uBD88\uC9C0\uAE30",icon:"props/lamp-post",target:"lamp"},firefly:{...xa,label:"\uBC18\uB527\uBD88",icon:"env/bird-house",target:"firefly"},forest:{start:19,end:5,label:"\uBC24\uB9C8\uC744 \uC232\uC9C0\uAE30",icon:"env/tree-pine",target:"forest"}});var ba=e3.map(r=>va.dayNames[r][0]+" "+ya[r]+":00").join(", ");var lm=Date.parse(new Date(va.epochMs+9*36e5).toISOString().slice(0,10)+"T00:00:00Z");var Ft=Object.freeze({care:1e4,jobRate:16,cropRate:11,legacyJob:2e3}),a3=Object.freeze({young:2,adult:5}),l3=Object.fromEntries([["\uD1B5\uB098\uBB34 \uC624\uB450\uB9C9",3e5,3e5],["\uBD84\uD64D \uC9C0\uBD95 \uCF54\uD2F0\uC9C0",6e5,23e5],["\uBCBD\uB3CC\uACFC \uB098\uBB34 2\uCE35 \uC9D1",12e5,63e5],["\uD30C\uB780 \uC9C0\uBD95 2\uCE35 \uC9D1",2e6,117e5],["\uD0D1 \uC9C0\uBD95 \uD070 \uC800\uD0DD",32e5,197e5],["3\uCE35 \uB300\uC800\uD0DD",5e6,318e5]].map(([r,e,t],n)=>{let i=n+1,s="house-tier"+i;return["tier"+i,Object.freeze({tier:i,name:r,price:t,previousPrice:e,model:s,floor:Nt.houses[s].floorAreaM2})]})),re=Object.freeze({version:2,start:{points:1e4,tutorialReward:2e4,giftCarrotSeeds:6,giftHay:5},prices:{carrotSeed:2,saleLimit:1e3,raceReward:3e3,saveIncreaseLimit:6e6,appearanceTicket:3e4,plate:3e3,shop:{"saddle-red":8e3,"saddle-blue":8e3,"horse-blanket":1500,halter:1200,"leg-wraps":1e3,"bell-collar":800,"flower-crown":500,"horse-hat":500,"mane-bow":300},stableVariant:{1:2e4,2:5e4,3:1e5,4:2e5},stable:{2:5e4,3:15e4,4:4e5}},hay:{name:"\uBAA9\uCD08",duration:72e5,yield:2,price:0,seed:3,level:1,sellable:!1,color:"#9bbf5a"},labor:{pay:{feedWater:Math.round(Ft.care*2/5),clean:Math.round(Ft.care/3),farming:Math.round(Ft.care*4/15)},carrots:6,hay:2,strawberryAs:2,skillStep:.04,skillMax:2,lowConditionMult:.8},condition:{min:30,max:100,start:80,low:50,recoverAdd:15,recoverFloor:70,miss:{feed:10,water:5,clean:5},lowJackpotMult:.5},jobs:{list:{gardener:{name:"\uAD11\uC7A5 \uC815\uC6D0\uC0AC"},track:{name:"\uC8FC\uB85C \uC815\uBE44"},snack:{name:"\uB9E4\uC810 \uC9C1\uC6D0"}},shiftPay:Ft.legacyJob,shiftsPerDay:5,hourPay:1e3,minHours:1,maxHours:4},bank:{deposit:{terms:{3:.09,7:.28,14:.65},min:1e4,max:100,interestPrincipalCap:15e5},savings:{terms:{7:{rate:.17,bonus:.02},14:{rate:.36,bonus:.03}},minDaily:1e3,maxDaily:1e5,max:100},historyShown:100},loan:{dailyRate:.003,interestCapRatio:.2,ltv:{house:.7,rezone:.7,land:.5},lowGradeCut:.2,limitDays:140,limitMax:2e6,terms:[30,60],defaultTerm:60,autoRate:.3,arrearsAutoRate:.5,bigPurchase:1e5,noticeDays:[3,7,14,21,27].map(r=>r*7),gradeDropDays:49,recoverDays:98,forecloseDays:196,forecloseRate:.7},land:{price:2e5,maxExtra:2,holdDays:7,minFree:8,adjacentMaxDistance:24.5,lotFloor:24,pairFloor:48},rezone:{price:1e5},house:{types:{wood:{name:"\uBAA9\uC870\uC8FC\uD0DD",perPyeong:7500,minutes:{20:10,30:20,40:30,50:40},model:"house-wood"},steel:{name:"\uACBD\uB7C9\uCCA0\uACE8 \uC8FC\uD0DD",perPyeong:15e3,minutes:{20:30,30:45,40:60,50:75},model:"house-steel"},rc:{name:"\uCCA0\uADFC\uCF58\uD06C\uB9AC\uD2B8 \uC8FC\uD0DD",perPyeong:38e3,minutes:{20:90,30:135,40:180,50:225},model:"house-villa"}},sizes:[20,30,40,50],homeSizes:[20,30],lotSizes:[40,50],stableFloor:{1:5,2:6,3:8,4:9}},invest:{flower:{name:"\uC6D0\uC608",days:3,count:48,facility:5e4,facilityName:"\uBE44\uB2D0\uD558\uC6B0\uC2A4",principal:24e3,maxProfit:9e4,unitValue:2375,jackpot:{name:"\uD76C\uADC0 \uAF43 \uAD50\uBC30",bonus:235125,base:.01,max:.04}},farm:{name:"\uB300\uB18D",days:7,count:16,facility:8e4,facilityName:"\uAD00\uC218 \uC2DC\uC124\uACFC \uCC3D\uACE0",principal:48e3,maxProfit:220500,unitValue:16781,jackpot:{name:"\uB300\uD48D\uB144\uACFC \uD669\uAE08 \uC791\uBB3C",bonus:351561,base:.015,max:.06}},horse:{name:"\uB9D0\uB18D\uC7A5",days:14,count:2,facility:12e4,facilityName:"\uC6B8\uD0C0\uB9AC\uC640 \uB9DD\uC544\uC9C0 \uB9C8\uAD6C\uAC04",principal:16e4,maxProfit:462e3,unitValue:311e3,jackpot:{name:"\uBA85\uB9C8 \uD0C4\uC0DD",bonus:933e3,base:.0125,max:.05}},tree:{name:"\uC870\uACBD\uC218",days:30,count:12,facility:1e5,facilityName:"\uBB18\uD3EC\uC640 \uAD00\uC218",principal:24e4,maxProfit:1035e3,unitValue:106250,jackpot:{name:"\uBA85\uD488 \uC18C\uB098\uBB34",bonus:3293750,base:.0075,max:.03}}},investBaseShare:.4,unlock:{investLaborEarned:12e4,raceLaborDays:a3.adult}}),Hr=2e5,c3=Object.freeze({prices:{saleLimit:300,raceReward:300,raceRewardsPerDay:3},horseCare:{points:{feed:6,water:4,clean:5,pet:1,brush:2,bath:2},max:20,days:49,maxRise:3,maxDrop:20/7},job:{openHour:kr.gardener.start,closeHour:kr.gardener.end,slotMs:7500,slots:8192,firstSlot:160,sites:14,visible:7,nightSlotMs:1e4,nightVisible:8,expiresMs:8e4,tasks:[{type:"weed",share:40,base:30,durationMs:2500},{type:"water",share:40,base:30,durationMs:2500},{type:"plant",share:20,base:30,durationMs:3e3},{type:"leaves",share:0,base:33,durationMs:2500},{type:"apple",share:0,base:33,durationMs:2500}],rareChance:.01,rareRate:10,comboMs:8e3,comboMax:10,ratePerLevel:.09,realHours:[0,1,2,4,6,9,12,16,20,25],perMinute:8},tending:{slotMs:15e3,secondsPerDay:1200},house:{tiers:Object.freeze(l3),maxFloorM2:400*.2,constructionDays:Object.freeze({1:3,2:4,3:5,4:7,5:10,6:14})},land:{price:55e4,rezone:62e4},invest:{flower:{facility:8e4,constructionDays:1,principal:5e4,dailyCost:1e3,maxProfit:812e3,rarePrice:15e4,minChance:.006,maxChance:.025},farm:{facility:12e4,constructionDays:2,principal:6e4,dailyCost:1050,maxProfit:2172e3,rarePrice:351e3,minChance:.02,maxChance:.08},horse:{facility:2e5,constructionDays:4,principal:34e4,dailyCost:2e3,maxProfit:7018e3,rarePrice:194e4,minChance:.06,maxChance:.25},tree:{facility:17e4,constructionDays:7,principal:7e5,dailyCost:1200,maxProfit:21204e3,rarePrice:4295e3,minChance:.01,maxChance:.04}},settlementLoan:{limits:{flower:485e3,farm:51e4,horse:76e4,tree:99e4},dailyRate:.001,interestCap:.1,graceDays:49,autoRate:.3},bank:{principalMax:15e5,longDeposit:{term:30,rate:1.8},seed:{target:Hr,minDaily:1e3,maxDaily:1e5,rate:.015,bonus:.005},free:{term:14,rate:.008},firstSeed:{target:16e4,payout:Hr,annualRate:.12,minimumDays:3},monthDeposit:{months:1,min:1e4,max:15e5,annualRate:1.68}},monthlyLoan:{annualRate:.156,settlementAnnualRate:.052,gradeDropMonths:2,forecloseMonths:7},race:{fieldSize:12,humanLimit:4,temperature:24,prizePool:{3:3e5,2:5e5,1:8e5,weekly:3e6},shares:[55,22,12,7,4],appearance:3e3,feeRate:2},bills:{propertyTaxRate:5e-4,horseDailyByLevel:[0,200,250,300,350],electricityPer10Pyeong:10,waterPer10Pyeong:5},unlock:{investOwnFunds:Hr}});var dm=Math.round(re.bank.savings.minDaily/7),fm=Math.round(re.bank.savings.maxDaily/7);var pm=Object.freeze({wonPerPoint:100,startPoints:re.start.points,dailyBonus:0,dailyReward:0,saleLimit:re.prices.saleLimit,raceReward:re.prices.raceReward,dailyIncomeLimit:Number.MAX_SAFE_INTEGER}),mm=Object.freeze({id:"appearance-ticket",name:"\uC678\uD615 \uBCC0\uACBD\uAD8C",price:re.prices.appearanceTicket}),gm=re.prices.stable,xm={"wood-round":{name:"\uB098\uBB34 \uBA85\uD310",price:0},"wood-flower":{name:"\uAF43 \uBA85\uD310",price:re.prices.plate},"iron-classic":{name:"\uCCA0\uC81C \uBA85\uD310",price:re.prices.plate},"stone-engraved":{name:"\uB3CC \uBA85\uD310",price:re.prices.plate},horseshoe:{name:"\uB9D0\uAD7D \uBA85\uD310",price:re.prices.plate},"leaf-green":{name:"\uC78E\uC0AC\uADC0 \uBA85\uD310",price:re.prices.plate},"ribbon-pastel":{name:"\uB9AC\uBCF8 \uBA85\uD310",price:re.prices.plate}},_m=re.prices.stableVariant,ym={"saddle-red":{name:"\uBE68\uAC04 \uC548\uC7A5",price:re.prices.shop["saddle-red"],slot:"back"},"saddle-blue":{name:"\uD30C\uB780 \uC548\uC7A5",price:re.prices.shop["saddle-blue"],slot:"back"},"flower-crown":{name:"\uAF43 \uD654\uAD00",price:re.prices.shop["flower-crown"],slot:"head"},"mane-bow":{name:"\uAC08\uAE30 \uB9AC\uBCF8",price:re.prices.shop["mane-bow"],slot:"mane"},"horse-blanket":{name:"\uB9D0 \uB2F4\uC694",price:re.prices.shop["horse-blanket"],slot:"blanket"},"horse-hat":{name:"\uC791\uC740 \uBAA8\uC790",price:re.prices.shop["horse-hat"],slot:"head"},"bell-collar":{name:"\uBC29\uC6B8 \uBAA9\uAC78\uC774",price:re.prices.shop["bell-collar"],slot:"neck"},halter:{name:"\uAD74\uB808",price:re.prices.shop.halter,slot:"face"},"leg-wraps":{name:"\uB2E4\uB9AC \uBCF4\uD638\uB300",price:re.prices.shop["leg-wraps"],slot:"legs"}},vm={hay:re.hay,carrot:{name:"\uB2F9\uADFC",duration:3e5,yield:3,price:6*Ft.cropRate,seed:re.prices.carrotSeed,level:1,color:"#ed923e"},potato:{name:"\uAC10\uC790",duration:18e5,yield:2,price:24*Ft.cropRate,seed:10,level:1,color:"#b89964"},strawberry:{name:"\uB538\uAE30",duration:36e5,yield:4,price:30*Ft.cropRate,seed:20,level:2,color:"#d95970"},pumpkin:{name:"\uD638\uBC15",duration:108e5,yield:1,price:290*Ft.cropRate,seed:40,level:3,color:"#e9a72e"}},zn={chicken:{shop:"papa",name:"\uBC14\uC0AD \uCE58\uD0A8",price:150,model:"chicken"},biscuit:{shop:"papa",name:"\uBC84\uD130 \uBE44\uC2A4\uD0B7",price:75,model:"biscuit"},"yangnyeom-chicken":{shop:"papa",name:"\uC591\uB150\uCE58\uD0A8",price:150,model:"yangnyeom-chicken"},dakgangjeong:{shop:"papa",name:"\uB2ED\uAC15\uC815",price:125,model:"dakgangjeong"},nuggets:{shop:"papa",name:"\uCE58\uD0A8\uB108\uAC9F",price:100,model:"nuggets"},fries:{shop:"papa",name:"\uAC10\uC790\uD280\uAE40",price:75,model:"fries"},"cheese-balls":{shop:"papa",name:"\uCE58\uC988\uBCFC",price:100,model:"cheese-balls"},"chicken-burger":{shop:"papa",name:"\uCE58\uD0A8\uBC84\uAC70",price:125,model:"chicken-burger"},lemonade:{shop:"lobby",name:"\uD551\uD06C \uB808\uBAAC\uC5D0\uC774\uB4DC",price:75,model:"lemonade"},tteok:{shop:"bunsik",name:"\uB5A1\uBCF6\uC774",price:100,model:"tteokbokki"},gimbap:{shop:"bunsik",name:"\uAE40\uBC25",price:75,model:"gimbap"},eomuk:{shop:"bunsik",name:"\uC5B4\uBB35",price:50,model:"eomuk"},sundae:{shop:"bunsik",name:"\uC21C\uB300",price:100,model:"sundae"},twigim:{shop:"bunsik",name:"\uBAA8\uB460 \uD280\uAE40",price:100,model:"twigim"},ramyeon:{shop:"bunsik",name:"\uB77C\uBA74",price:100,model:"ramyeon"},hotdog:{shop:"bunsik",name:"\uD56B\uB3C4\uADF8",price:75,model:"hotdog"},bungeoppang:{shop:"lobby",name:"\uBD95\uC5B4\uBE75",price:50,model:"bungeoppang"},hotteok:{shop:"lobby",name:"\uD638\uB5A1",price:50,model:"hotteok"},sikhye:{shop:"lobby",name:"\uC2DD\uD61C",price:75,model:"sikhye"},mat:{shop:"lobby",name:"\uB3D7\uC790\uB9AC",price:150},bike:{shop:"plaza",name:"\uC790\uC804\uAC70",price:3e3},moto:{shop:"plaza",name:"\uC624\uD1A0\uBC14\uC774",price:12e3},kick:{shop:"lobby",name:"\uD0A5\uBCF4\uB4DC \uB300\uC5EC",price:0}};var wm=35;var oe={version:3,evidence:{dimensions:"real size (1 unit = 1 m); course from official KRA diagram; buildings and spacing estimated from satellite imagery, not surveyed",topology:"official course diagram + official illustrated park map + Esri satellite + user satellite screenshots and photos",geographicOrientation:"local stand-relative coordinates; not georeferenced",sources:["https://race.kra.co.kr/images/sub/busan_racemap02.jpg","https://race.kra.co.kr/down/racetrackinfo/busan/racemap_busan15.jpg","https://park.kra.co.kr/static/images/busan/sub/guide/map_all.svg","https://park.kra.co.kr/cms/contents/kr/static/images/busan/sub/facilities/img_viewing.jpg","https://www.ngcc.go.kr/statis/facility.do"],stableGrid:"Game village: 20 x 20 m homes, at least 4 m between plots, 6 m promenades and 4 m lanes; original training oval retained"},geometry:{k:1,homeZ:0,goalX:28,goalBeforeEnd:40,straight:500,turnRadius:160,innerRadius:128,innerStraight:325,chute1600:150,chute1000:182,chute1000Angle:.873,crossLength:100,rightX:68,leftX:-432,cz:-160,backZ:-320,iHomeZ:-32,iBackZ:-288,iRightX:-107,crossEndX:-332},metresToUnits:1,lanePitch:1.4,railInnerLane:-1,railOuterLane:17.857,finish:{x:28,z:0},courses:{race:[[-432,0],[-431,0],[-430,0],[-429,0],[-428,0],[-427,0],[-426,0],[-425,0],[-424,0],[-423,0],[-422,0],[-421,0],[-420,0],[-419,0],[-418,0],[-417,0],[-416,0],[-415,0],[-414,0],[-413,0],[-412,0],[-411,0],[-410,0],[-409,0],[-408,0],[-407,0],[-406,0],[-405,0],[-404,0],[-403,0],[-402,0],[-401,0],[-400,0],[-399,0],[-398,0],[-397,0],[-396,0],[-395,0],[-394,0],[-393,0],[-392,0],[-391,0],[-390,0],[-389,0],[-388,0],[-387,0],[-386,0],[-385,0],[-384,0],[-383,0],[-382,0],[-381,0],[-380,0],[-379,0],[-378,0],[-377,0],[-376,0],[-375,0],[-374,0],[-373,0],[-372,0],[-371,0],[-370,0],[-369,0],[-368,0],[-367,0],[-366,0],[-365,0],[-364,0],[-363,0],[-362,0],[-361,0],[-360,0],[-359,0],[-358,0],[-357,0],[-356,0],[-355,0],[-354,0],[-353,0],[-352,0],[-351,0],[-350,0],[-349,0],[-348,0],[-347,0],[-346,0],[-345,0],[-344,0],[-343,0],[-342,0],[-341,0],[-340,0],[-339,0],[-338,0],[-337,0],[-336,0],[-335,0],[-334,0],[-333,0],[-332,0],[-331,0],[-330,0],[-329,0],[-328,0],[-327,0],[-326,0],[-325,0],[-324,0],[-323,0],[-322,0],[-321,0],[-320,0],[-319,0],[-318,0],[-317,0],[-316,0],[-315,0],[-314,0],[-313,0],[-312,0],[-311,0],[-310,0],[-309,0],[-308,0],[-307,0],[-306,0],[-305,0],[-304,0],[-303,0],[-302,0],[-301,0],[-300,0],[-299,0],[-298,0],[-297,0],[-296,0],[-295,0],[-294,0],[-293,0],[-292,0],[-291,0],[-290,0],[-289,0],[-288,0],[-287,0],[-286,0],[-285,0],[-284,0],[-283,0],[-282,0],[-281,0],[-280,0],[-279,0],[-278,0],[-277,0],[-276,0],[-275,0],[-274,0],[-273,0],[-272,0],[-271,0],[-270,0],[-269,0],[-268,0],[-267,0],[-266,0],[-265,0],[-264,0],[-263,0],[-262,0],[-261,0],[-260,0],[-259,0],[-258,0],[-257,0],[-256,0],[-255,0],[-254,0],[-253,0],[-252,0],[-251,0],[-250,0],[-249,0],[-248,0],[-247,0],[-246,0],[-245,0],[-244,0],[-243,0],[-242,0],[-241,0],[-240,0],[-239,0],[-238,0],[-237,0],[-236,0],[-235,0],[-234,0],[-233,0],[-232,0],[-231,0],[-230,0],[-229,0],[-228,0],[-227,0],[-226,0],[-225,0],[-224,0],[-223,0],[-222,0],[-221,0],[-220,0],[-219,0],[-218,0],[-217,0],[-216,0],[-215,0],[-214,0],[-213,0],[-212,0],[-211,0],[-210,0],[-209,0],[-208,0],[-207,0],[-206,0],[-205,0],[-204,0],[-203,0],[-202,0],[-201,0],[-200,0],[-199,0],[-198,0],[-197,0],[-196,0],[-195,0],[-194,0],[-193,0],[-192,0],[-191,0],[-190,0],[-189,0],[-188,0],[-187,0],[-186,0],[-185,0],[-184,0],[-183,0],[-182,0],[-181,0],[-180,0],[-179,0],[-178,0],[-177,0],[-176,0],[-175,0],[-174,0],[-173,0],[-172,0],[-171,0],[-170,0],[-169,0],[-168,0],[-167,0],[-166,0],[-165,0],[-164,0],[-163,0],[-162,0],[-161,0],[-160,0],[-159,0],[-158,0],[-157,0],[-156,0],[-155,0],[-154,0],[-153,0],[-152,0],[-151,0],[-150,0],[-149,0],[-148,0],[-147,0],[-146,0],[-145,0],[-144,0],[-143,0],[-142,0],[-141,0],[-140,0],[-139,0],[-138,0],[-137,0],[-136,0],[-135,0],[-134,0],[-133,0],[-132,0],[-131,0],[-130,0],[-129,0],[-128,0],[-127,0],[-126,0],[-125,0],[-124,0],[-123,0],[-122,0],[-121,0],[-120,0],[-119,0],[-118,0],[-117,0],[-116,0],[-115,0],[-114,0],[-113,0],[-112,0],[-111,0],[-110,0],[-109,0],[-108,0],[-107,0],[-106,0],[-105,0],[-104,0],[-103,0],[-102,0],[-101,0],[-100,0],[-99,0],[-98,0],[-97,0],[-96,0],[-95,0],[-94,0],[-93,0],[-92,0],[-91,0],[-90,0],[-89,0],[-88,0],[-87,0],[-86,0],[-85,0],[-84,0],[-83,0],[-82,0],[-81,0],[-80,0],[-79,0],[-78,0],[-77,0],[-76,0],[-75,0],[-74,0],[-73,0],[-72,0],[-71,0],[-70,0],[-69,0],[-68,0],[-67,0],[-66,0],[-65,0],[-64,0],[-63,0],[-62,0],[-61,0],[-60,0],[-59,0],[-58,0],[-57,0],[-56,0],[-55,0],[-54,0],[-53,0],[-52,0],[-51,0],[-50,0],[-49,0],[-48,0],[-47,0],[-46,0],[-45,0],[-44,0],[-43,0],[-42,0],[-41,0],[-40,0],[-39,0],[-38,0],[-37,0],[-36,0],[-35,0],[-34,0],[-33,0],[-32,0],[-31,0],[-30,0],[-29,0],[-28,0],[-27,0],[-26,0],[-25,0],[-24,0],[-23,0],[-22,0],[-21,0],[-20,0],[-19,0],[-18,0],[-17,0],[-16,0],[-15,0],[-14,0],[-13,0],[-12,0],[-11,0],[-10,0],[-9,0],[-8,0],[-7,0],[-6,0],[-5,0],[-4,0],[-3,0],[-2,0],[-1,0],[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0],[20,0],[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],[28,0],[29,0],[30,0],[31,0],[32,0],[33,0],[34,0],[35,0],[36,0],[37,0],[38,0],[39,0],[40,0],[41,0],[42,0],[43,0],[44,0],[45,0],[46,0],[47,0],[48,0],[49,0],[50,0],[51,0],[52,0],[53,0],[54,0],[55,0],[56,0],[57,0],[58,0],[59,0],[60,0],[61,0],[62,0],[63,0],[64,0],[65,0],[66,0],[67,0],[68,0],[68.999,-.003],[69.999,-.012],[70.998,-.028],[71.997,-.05],[72.996,-.078],[73.994,-.112],[74.993,-.153],[75.991,-.2],[76.989,-.253],[77.987,-.312],[78.984,-.377],[79.981,-.449],[80.977,-.527],[81.973,-.611],[82.968,-.702],[83.962,-.798],[84.956,-.901],[85.95,-1.01],[86.942,-1.125],[87.934,-1.247],[88.925,-1.374],[89.916,-1.508],[90.905,-1.648],[91.894,-1.794],[92.881,-1.946],[93.868,-2.105],[94.854,-2.27],[95.838,-2.44],[96.822,-2.617],[97.804,-2.8],[98.786,-2.99],[99.766,-3.185],[100.744,-3.386],[101.722,-3.594],[102.698,-3.808],[103.673,-4.027],[104.646,-4.253],[105.618,-4.485],[106.589,-4.723],[107.558,-4.967],[108.526,-5.217],[109.491,-5.473],[110.456,-5.736],[111.418,-6.004],[112.379,-6.278],[113.339,-6.558],[114.296,-6.844],[115.252,-7.136],[116.206,-7.435],[117.158,-7.739],[118.108,-8.049],[119.056,-8.364],[120.002,-8.686],[120.946,-9.014],[121.888,-9.348],[122.828,-9.687],[123.765,-10.033],[124.701,-10.384],[125.634,-10.741],[126.565,-11.104],[127.494,-11.472],[128.421,-11.847],[129.345,-12.227],[130.266,-12.613],[131.186,-13.005],[132.103,-13.402],[133.017,-13.806],[133.929,-14.215],[134.838,-14.629],[135.745,-15.049],[136.649,-15.475],[137.55,-15.907],[138.449,-16.344],[139.344,-16.787],[140.238,-17.235],[141.128,-17.689],[142.015,-18.149],[142.9,-18.614],[143.781,-19.084],[144.66,-19.56],[145.536,-20.042],[146.408,-20.529],[147.278,-21.021],[148.144,-21.519],[149.008,-22.023],[149.868,-22.531],[150.725,-23.045],[151.578,-23.565],[152.429,-24.089],[153.276,-24.619],[154.12,-25.154],[154.961,-25.695],[155.798,-26.241],[156.631,-26.792],[157.462,-27.348],[158.288,-27.909],[159.112,-28.476],[159.931,-29.047],[160.747,-29.624],[161.56,-30.206],[162.369,-30.793],[163.174,-31.385],[163.975,-31.981],[164.773,-32.583],[165.567,-33.19],[166.357,-33.802],[167.143,-34.419],[167.926,-35.041],[168.704,-35.667],[169.479,-36.299],[170.249,-36.935],[171.016,-37.576],[171.779,-38.222],[172.537,-38.872],[173.292,-39.527],[174.042,-40.187],[174.788,-40.852],[175.53,-41.521],[176.268,-42.195],[177.002,-42.874],[177.731,-43.557],[178.456,-44.244],[179.177,-44.936],[179.894,-45.633],[180.606,-46.334],[181.314,-47.04],[182.017,-47.75],[182.716,-48.464],[183.41,-49.183],[184.1,-49.906],[184.785,-50.633],[185.466,-51.364],[186.142,-52.1],[186.814,-52.84],[187.481,-53.584],[188.143,-54.333],[188.801,-55.085],[189.454,-55.842],[190.102,-56.602],[190.745,-57.367],[191.384,-58.135],[192.018,-58.908],[192.647,-59.685],[193.271,-60.465],[193.89,-61.249],[194.504,-62.038],[195.114,-62.83],[195.718,-63.625],[196.318,-64.425],[196.912,-65.228],[197.501,-66.035],[198.086,-66.846],[198.665,-67.66],[199.239,-68.478],[199.808,-69.3],[200.372,-70.125],[200.931,-70.953],[201.485,-71.785],[202.033,-72.62],[202.576,-73.459],[203.114,-74.301],[203.646,-75.147],[204.174,-75.996],[204.696,-76.848],[205.212,-77.703],[205.724,-78.562],[206.23,-79.424],[206.73,-80.289],[207.225,-81.157],[207.715,-82.028],[208.199,-82.902],[208.678,-83.779],[209.152,-84.659],[209.619,-85.542],[210.082,-86.428],[210.538,-87.317],[210.99,-88.209],[211.435,-89.103],[211.875,-90],[212.31,-90.9],[212.738,-91.803],[213.161,-92.708],[213.579,-93.616],[213.991,-94.527],[214.397,-95.44],[214.797,-96.355],[215.192,-97.274],[215.581,-98.194],[215.964,-99.117],[216.341,-100.042],[216.713,-100.97],[217.078,-101.9],[217.438,-102.832],[217.793,-103.767],[218.141,-104.703],[218.483,-105.642],[218.82,-106.583],[219.151,-107.526],[219.475,-108.471],[219.794,-109.418],[220.107,-110.367],[220.414,-111.318],[220.715,-112.271],[221.01,-113.226],[221.3,-114.182],[221.583,-115.141],[221.86,-116.101],[222.131,-117.063],[222.396,-118.026],[222.655,-118.991],[222.908,-119.958],[223.156,-120.926],[223.397,-121.896],[223.632,-122.867],[223.86,-123.84],[224.083,-124.814],[224.3,-125.79],[224.511,-126.767],[224.715,-127.745],[224.913,-128.724],[225.106,-129.705],[225.292,-130.687],[225.472,-131.67],[225.646,-132.654],[225.813,-133.639],[225.975,-134.625],[226.13,-135.612],[226.28,-136.6],[226.423,-137.589],[226.56,-138.579],[226.69,-139.57],[226.815,-140.562],[226.933,-141.554],[227.045,-142.547],[227.151,-143.54],[227.251,-144.535],[227.344,-145.53],[227.432,-146.525],[227.513,-147.521],[227.587,-148.518],[227.656,-149.515],[227.718,-150.512],[227.775,-151.51],[227.824,-152.508],[227.868,-153.506],[227.906,-154.505],[227.937,-155.504],[227.962,-156.503],[227.98,-157.502],[227.993,-158.501],[227.999,-159.5],[227.999,-160.5],[227.993,-161.499],[227.98,-162.498],[227.962,-163.497],[227.937,-164.496],[227.906,-165.495],[227.868,-166.494],[227.824,-167.492],[227.775,-168.49],[227.718,-169.488],[227.656,-170.485],[227.587,-171.482],[227.513,-172.479],[227.432,-173.475],[227.344,-174.47],[227.251,-175.465],[227.151,-176.46],[227.045,-177.453],[226.933,-178.446],[226.815,-179.438],[226.69,-180.43],[226.56,-181.421],[226.423,-182.411],[226.28,-183.4],[226.13,-184.388],[225.975,-185.375],[225.813,-186.361],[225.646,-187.346],[225.472,-188.33],[225.292,-189.313],[225.106,-190.295],[224.913,-191.276],[224.715,-192.255],[224.511,-193.233],[224.3,-194.21],[224.083,-195.186],[223.86,-196.16],[223.632,-197.133],[223.397,-198.104],[223.156,-199.074],[222.908,-200.042],[222.655,-201.009],[222.396,-201.974],[222.131,-202.937],[221.86,-203.899],[221.583,-204.859],[221.3,-205.818],[221.01,-206.774],[220.715,-207.729],[220.414,-208.682],[220.107,-209.633],[219.794,-210.582],[219.475,-211.529],[219.151,-212.474],[218.82,-213.417],[218.483,-214.358],[218.141,-215.297],[217.793,-216.233],[217.438,-217.168],[217.078,-218.1],[216.713,-219.03],[216.341,-219.958],[215.964,-220.883],[215.581,-221.806],[215.192,-222.726],[214.797,-223.645],[214.397,-224.56],[213.991,-225.473],[213.579,-226.384],[213.161,-227.292],[212.738,-228.197],[212.31,-229.1],[211.875,-230],[211.435,-230.897],[210.99,-231.791],[210.538,-232.683],[210.082,-233.572],[209.619,-234.458],[209.152,-235.341],[208.678,-236.221],[208.199,-237.098],[207.715,-237.972],[207.225,-238.843],[206.73,-239.711],[206.23,-240.576],[205.724,-241.438],[205.212,-242.297],[204.696,-243.152],[204.174,-244.004],[203.646,-244.853],[203.114,-245.699],[202.576,-246.541],[202.033,-247.38],[201.485,-248.215],[200.931,-249.047],[200.372,-249.875],[199.808,-250.7],[199.239,-251.522],[198.665,-252.34],[198.086,-253.154],[197.501,-253.965],[196.912,-254.772],[196.318,-255.575],[195.718,-256.375],[195.114,-257.17],[194.504,-257.962],[193.89,-258.751],[193.271,-259.535],[192.647,-260.315],[192.018,-261.092],[191.384,-261.865],[190.745,-262.633],[190.102,-263.398],[189.454,-264.158],[188.801,-264.915],[188.143,-265.667],[187.481,-266.416],[186.814,-267.16],[186.142,-267.9],[185.466,-268.636],[184.785,-269.367],[184.1,-270.094],[183.41,-270.817],[182.716,-271.536],[182.017,-272.25],[181.314,-272.96],[180.606,-273.666],[179.894,-274.367],[179.177,-275.064],[178.456,-275.756],[177.731,-276.443],[177.002,-277.126],[176.268,-277.805],[175.53,-278.479],[174.788,-279.148],[174.042,-279.813],[173.292,-280.473],[172.537,-281.128],[171.779,-281.778],[171.016,-282.424],[170.249,-283.065],[169.479,-283.701],[168.704,-284.333],[167.926,-284.959],[167.143,-285.581],[166.357,-286.198],[165.567,-286.81],[164.773,-287.417],[163.975,-288.019],[163.174,-288.615],[162.369,-289.207],[161.56,-289.794],[160.747,-290.376],[159.931,-290.953],[159.112,-291.524],[158.288,-292.091],[157.462,-292.652],[156.631,-293.208],[155.798,-293.759],[154.961,-294.305],[154.12,-294.846],[153.276,-295.381],[152.429,-295.911],[151.578,-296.435],[150.725,-296.955],[149.868,-297.469],[149.008,-297.977],[148.144,-298.481],[147.278,-298.979],[146.408,-299.471],[145.536,-299.958],[144.66,-300.44],[143.781,-300.916],[142.9,-301.386],[142.015,-301.851],[141.128,-302.311],[140.238,-302.765],[139.344,-303.213],[138.449,-303.656],[137.55,-304.093],[136.649,-304.525],[135.745,-304.951],[134.838,-305.371],[133.929,-305.785],[133.017,-306.194],[132.103,-306.598],[131.186,-306.995],[130.266,-307.387],[129.345,-307.773],[128.421,-308.153],[127.494,-308.528],[126.565,-308.896],[125.634,-309.259],[124.701,-309.616],[123.765,-309.967],[122.828,-310.313],[121.888,-310.652],[120.946,-310.986],[120.002,-311.314],[119.056,-311.636],[118.108,-311.951],[117.158,-312.261],[116.206,-312.565],[115.252,-312.864],[114.296,-313.156],[113.339,-313.442],[112.379,-313.722],[111.418,-313.996],[110.456,-314.264],[109.491,-314.527],[108.526,-314.783],[107.558,-315.033],[106.589,-315.277],[105.618,-315.515],[104.646,-315.747],[103.673,-315.973],[102.698,-316.192],[101.722,-316.406],[100.744,-316.614],[99.766,-316.815],[98.786,-317.01],[97.804,-317.2],[96.822,-317.383],[95.838,-317.56],[94.854,-317.73],[93.868,-317.895],[92.881,-318.054],[91.894,-318.206],[90.905,-318.352],[89.916,-318.492],[88.925,-318.626],[87.934,-318.753],[86.942,-318.875],[85.95,-318.99],[84.956,-319.099],[83.962,-319.202],[82.968,-319.298],[81.973,-319.389],[80.977,-319.473],[79.981,-319.551],[78.984,-319.623],[77.987,-319.688],[76.989,-319.747],[75.991,-319.8],[74.993,-319.847],[73.994,-319.888],[72.996,-319.922],[71.997,-319.95],[70.998,-319.972],[69.999,-319.988],[68.999,-319.997],[68,-320],[67,-320],[66,-320],[65,-320],[64,-320],[63,-320],[62,-320],[61,-320],[60,-320],[59,-320],[58,-320],[57,-320],[56,-320],[55,-320],[54,-320],[53,-320],[52,-320],[51,-320],[50,-320],[49,-320],[48,-320],[47,-320],[46,-320],[45,-320],[44,-320],[43,-320],[42,-320],[41,-320],[40,-320],[39,-320],[38,-320],[37,-320],[36,-320],[35,-320],[34,-320],[33,-320],[32,-320],[31,-320],[30,-320],[29,-320],[28,-320],[27,-320],[26,-320],[25,-320],[24,-320],[23,-320],[22,-320],[21,-320],[20,-320],[19,-320],[18,-320],[17,-320],[16,-320],[15,-320],[14,-320],[13,-320],[12,-320],[11,-320],[10,-320],[9,-320],[8,-320],[7,-320],[6,-320],[5,-320],[4,-320],[3,-320],[2,-320],[1,-320],[0,-320],[-1,-320],[-2,-320],[-3,-320],[-4,-320],[-5,-320],[-6,-320],[-7,-320],[-8,-320],[-9,-320],[-10,-320],[-11,-320],[-12,-320],[-13,-320],[-14,-320],[-15,-320],[-16,-320],[-17,-320],[-18,-320],[-19,-320],[-20,-320],[-21,-320],[-22,-320],[-23,-320],[-24,-320],[-25,-320],[-26,-320],[-27,-320],[-28,-320],[-29,-320],[-30,-320],[-31,-320],[-32,-320],[-33,-320],[-34,-320],[-35,-320],[-36,-320],[-37,-320],[-38,-320],[-39,-320],[-40,-320],[-41,-320],[-42,-320],[-43,-320],[-44,-320],[-45,-320],[-46,-320],[-47,-320],[-48,-320],[-49,-320],[-50,-320],[-51,-320],[-52,-320],[-53,-320],[-54,-320],[-55,-320],[-56,-320],[-57,-320],[-58,-320],[-59,-320],[-60,-320],[-61,-320],[-62,-320],[-63,-320],[-64,-320],[-65,-320],[-66,-320],[-67,-320],[-68,-320],[-69,-320],[-70,-320],[-71,-320],[-72,-320],[-73,-320],[-74,-320],[-75,-320],[-76,-320],[-77,-320],[-78,-320],[-79,-320],[-80,-320],[-81,-320],[-82,-320],[-83,-320],[-84,-320],[-85,-320],[-86,-320],[-87,-320],[-88,-320],[-89,-320],[-90,-320],[-91,-320],[-92,-320],[-93,-320],[-94,-320],[-95,-320],[-96,-320],[-97,-320],[-98,-320],[-99,-320],[-100,-320],[-101,-320],[-102,-320],[-103,-320],[-104,-320],[-105,-320],[-106,-320],[-107,-320],[-108,-320],[-109,-320],[-110,-320],[-111,-320],[-112,-320],[-113,-320],[-114,-320],[-115,-320],[-116,-320],[-117,-320],[-118,-320],[-119,-320],[-120,-320],[-121,-320],[-122,-320],[-123,-320],[-124,-320],[-125,-320],[-126,-320],[-127,-320],[-128,-320],[-129,-320],[-130,-320],[-131,-320],[-132,-320],[-133,-320],[-134,-320],[-135,-320],[-136,-320],[-137,-320],[-138,-320],[-139,-320],[-140,-320],[-141,-320],[-142,-320],[-143,-320],[-144,-320],[-145,-320],[-146,-320],[-147,-320],[-148,-320],[-149,-320],[-150,-320],[-151,-320],[-152,-320],[-153,-320],[-154,-320],[-155,-320],[-156,-320],[-157,-320],[-158,-320],[-159,-320],[-160,-320],[-161,-320],[-162,-320],[-163,-320],[-164,-320],[-165,-320],[-166,-320],[-167,-320],[-168,-320],[-169,-320],[-170,-320],[-171,-320],[-172,-320],[-173,-320],[-174,-320],[-175,-320],[-176,-320],[-177,-320],[-178,-320],[-179,-320],[-180,-320],[-181,-320],[-182,-320],[-183,-320],[-184,-320],[-185,-320],[-186,-320],[-187,-320],[-188,-320],[-189,-320],[-190,-320],[-191,-320],[-192,-320],[-193,-320],[-194,-320],[-195,-320],[-196,-320],[-197,-320],[-198,-320],[-199,-320],[-200,-320],[-201,-320],[-202,-320],[-203,-320],[-204,-320],[-205,-320],[-206,-320],[-207,-320],[-208,-320],[-209,-320],[-210,-320],[-211,-320],[-212,-320],[-213,-320],[-214,-320],[-215,-320],[-216,-320],[-217,-320],[-218,-320],[-219,-320],[-220,-320],[-221,-320],[-222,-320],[-223,-320],[-224,-320],[-225,-320],[-226,-320],[-227,-320],[-228,-320],[-229,-320],[-230,-320],[-231,-320],[-232,-320],[-233,-320],[-234,-320],[-235,-320],[-236,-320],[-237,-320],[-238,-320],[-239,-320],[-240,-320],[-241,-320],[-242,-320],[-243,-320],[-244,-320],[-245,-320],[-246,-320],[-247,-320],[-248,-320],[-249,-320],[-250,-320],[-251,-320],[-252,-320],[-253,-320],[-254,-320],[-255,-320],[-256,-320],[-257,-320],[-258,-320],[-259,-320],[-260,-320],[-261,-320],[-262,-320],[-263,-320],[-264,-320],[-265,-320],[-266,-320],[-267,-320],[-268,-320],[-269,-320],[-270,-320],[-271,-320],[-272,-320],[-273,-320],[-274,-320],[-275,-320],[-276,-320],[-277,-320],[-278,-320],[-279,-320],[-280,-320],[-281,-320],[-282,-320],[-283,-320],[-284,-320],[-285,-320],[-286,-320],[-287,-320],[-288,-320],[-289,-320],[-290,-320],[-291,-320],[-292,-320],[-293,-320],[-294,-320],[-295,-320],[-296,-320],[-297,-320],[-298,-320],[-299,-320],[-300,-320],[-301,-320],[-302,-320],[-303,-320],[-304,-320],[-305,-320],[-306,-320],[-307,-320],[-308,-320],[-309,-320],[-310,-320],[-311,-320],[-312,-320],[-313,-320],[-314,-320],[-315,-320],[-316,-320],[-317,-320],[-318,-320],[-319,-320],[-320,-320],[-321,-320],[-322,-320],[-323,-320],[-324,-320],[-325,-320],[-326,-320],[-327,-320],[-328,-320],[-329,-320],[-330,-320],[-331,-320],[-332,-320],[-333,-320],[-334,-320],[-335,-320],[-336,-320],[-337,-320],[-338,-320],[-339,-320],[-340,-320],[-341,-320],[-342,-320],[-343,-320],[-344,-320],[-345,-320],[-346,-320],[-347,-320],[-348,-320],[-349,-320],[-350,-320],[-351,-320],[-352,-320],[-353,-320],[-354,-320],[-355,-320],[-356,-320],[-357,-320],[-358,-320],[-359,-320],[-360,-320],[-361,-320],[-362,-320],[-363,-320],[-364,-320],[-365,-320],[-366,-320],[-367,-320],[-368,-320],[-369,-320],[-370,-320],[-371,-320],[-372,-320],[-373,-320],[-374,-320],[-375,-320],[-376,-320],[-377,-320],[-378,-320],[-379,-320],[-380,-320],[-381,-320],[-382,-320],[-383,-320],[-384,-320],[-385,-320],[-386,-320],[-387,-320],[-388,-320],[-389,-320],[-390,-320],[-391,-320],[-392,-320],[-393,-320],[-394,-320],[-395,-320],[-396,-320],[-397,-320],[-398,-320],[-399,-320],[-400,-320],[-401,-320],[-402,-320],[-403,-320],[-404,-320],[-405,-320],[-406,-320],[-407,-320],[-408,-320],[-409,-320],[-410,-320],[-411,-320],[-412,-320],[-413,-320],[-414,-320],[-415,-320],[-416,-320],[-417,-320],[-418,-320],[-419,-320],[-420,-320],[-421,-320],[-422,-320],[-423,-320],[-424,-320],[-425,-320],[-426,-320],[-427,-320],[-428,-320],[-429,-320],[-430,-320],[-431,-320],[-432,-320],[-432.999,-319.997],[-433.999,-319.988],[-434.998,-319.972],[-435.997,-319.95],[-436.996,-319.922],[-437.994,-319.888],[-438.993,-319.847],[-439.991,-319.8],[-440.989,-319.747],[-441.987,-319.688],[-442.984,-319.623],[-443.981,-319.551],[-444.977,-319.473],[-445.973,-319.389],[-446.968,-319.298],[-447.962,-319.202],[-448.956,-319.099],[-449.95,-318.99],[-450.942,-318.875],[-451.934,-318.753],[-452.925,-318.626],[-453.916,-318.492],[-454.905,-318.352],[-455.894,-318.206],[-456.881,-318.054],[-457.868,-317.895],[-458.854,-317.73],[-459.838,-317.56],[-460.822,-317.383],[-461.804,-317.2],[-462.786,-317.01],[-463.766,-316.815],[-464.744,-316.614],[-465.722,-316.406],[-466.698,-316.192],[-467.673,-315.973],[-468.646,-315.747],[-469.618,-315.515],[-470.589,-315.277],[-471.558,-315.033],[-472.526,-314.783],[-473.491,-314.527],[-474.456,-314.264],[-475.418,-313.996],[-476.379,-313.722],[-477.339,-313.442],[-478.296,-313.156],[-479.252,-312.864],[-480.206,-312.565],[-481.158,-312.261],[-482.108,-311.951],[-483.056,-311.636],[-484.002,-311.314],[-484.946,-310.986],[-485.888,-310.652],[-486.828,-310.313],[-487.765,-309.967],[-488.701,-309.616],[-489.634,-309.259],[-490.565,-308.896],[-491.494,-308.528],[-492.421,-308.153],[-493.345,-307.773],[-494.266,-307.387],[-495.186,-306.995],[-496.103,-306.598],[-497.017,-306.194],[-497.929,-305.785],[-498.838,-305.371],[-499.745,-304.951],[-500.649,-304.525],[-501.55,-304.093],[-502.449,-303.656],[-503.344,-303.213],[-504.238,-302.765],[-505.128,-302.311],[-506.015,-301.851],[-506.9,-301.386],[-507.781,-300.916],[-508.66,-300.44],[-509.536,-299.958],[-510.408,-299.471],[-511.278,-298.979],[-512.144,-298.481],[-513.008,-297.977],[-513.868,-297.469],[-514.725,-296.955],[-515.578,-296.435],[-516.429,-295.911],[-517.276,-295.381],[-518.12,-294.846],[-518.961,-294.305],[-519.798,-293.759],[-520.631,-293.208],[-521.462,-292.652],[-522.288,-292.091],[-523.112,-291.524],[-523.931,-290.953],[-524.747,-290.376],[-525.56,-289.794],[-526.369,-289.207],[-527.174,-288.615],[-527.975,-288.019],[-528.773,-287.417],[-529.567,-286.81],[-530.357,-286.198],[-531.143,-285.581],[-531.926,-284.959],[-532.704,-284.333],[-533.479,-283.701],[-534.249,-283.065],[-535.016,-282.424],[-535.779,-281.778],[-536.537,-281.128],[-537.292,-280.473],[-538.042,-279.813],[-538.788,-279.148],[-539.53,-278.479],[-540.268,-277.805],[-541.002,-277.126],[-541.731,-276.443],[-542.456,-275.756],[-543.177,-275.064],[-543.894,-274.367],[-544.606,-273.666],[-545.314,-272.96],[-546.017,-272.25],[-546.716,-271.536],[-547.41,-270.817],[-548.1,-270.094],[-548.785,-269.367],[-549.466,-268.636],[-550.142,-267.9],[-550.814,-267.16],[-551.481,-266.416],[-552.143,-265.667],[-552.801,-264.915],[-553.454,-264.158],[-554.102,-263.398],[-554.745,-262.633],[-555.384,-261.865],[-556.018,-261.092],[-556.647,-260.315],[-557.271,-259.535],[-557.89,-258.751],[-558.504,-257.962],[-559.114,-257.17],[-559.718,-256.375],[-560.318,-255.575],[-560.912,-254.772],[-561.501,-253.965],[-562.086,-253.154],[-562.665,-252.34],[-563.239,-251.522],[-563.808,-250.7],[-564.372,-249.875],[-564.931,-249.047],[-565.485,-248.215],[-566.033,-247.38],[-566.576,-246.541],[-567.114,-245.699],[-567.646,-244.853],[-568.174,-244.004],[-568.696,-243.152],[-569.212,-242.297],[-569.724,-241.438],[-570.23,-240.576],[-570.73,-239.711],[-571.225,-238.843],[-571.715,-237.972],[-572.199,-237.098],[-572.678,-236.221],[-573.152,-235.341],[-573.619,-234.458],[-574.082,-233.572],[-574.538,-232.683],[-574.99,-231.791],[-575.435,-230.897],[-575.875,-230],[-576.31,-229.1],[-576.738,-228.197],[-577.161,-227.292],[-577.579,-226.384],[-577.991,-225.473],[-578.397,-224.56],[-578.797,-223.645],[-579.192,-222.726],[-579.581,-221.806],[-579.964,-220.883],[-580.341,-219.958],[-580.713,-219.03],[-581.078,-218.1],[-581.438,-217.168],[-581.793,-216.233],[-582.141,-215.297],[-582.483,-214.358],[-582.82,-213.417],[-583.151,-212.474],[-583.475,-211.529],[-583.794,-210.582],[-584.107,-209.633],[-584.414,-208.682],[-584.715,-207.729],[-585.01,-206.774],[-585.3,-205.818],[-585.583,-204.859],[-585.86,-203.899],[-586.131,-202.937],[-586.396,-201.974],[-586.655,-201.009],[-586.908,-200.042],[-587.156,-199.074],[-587.397,-198.104],[-587.632,-197.133],[-587.86,-196.16],[-588.083,-195.186],[-588.3,-194.21],[-588.511,-193.233],[-588.715,-192.255],[-588.913,-191.276],[-589.106,-190.295],[-589.292,-189.313],[-589.472,-188.33],[-589.646,-187.346],[-589.813,-186.361],[-589.975,-185.375],[-590.13,-184.388],[-590.28,-183.4],[-590.423,-182.411],[-590.56,-181.421],[-590.69,-180.43],[-590.815,-179.438],[-590.933,-178.446],[-591.045,-177.453],[-591.151,-176.46],[-591.251,-175.465],[-591.344,-174.47],[-591.432,-173.475],[-591.513,-172.479],[-591.587,-171.482],[-591.656,-170.485],[-591.718,-169.488],[-591.775,-168.49],[-591.824,-167.492],[-591.868,-166.494],[-591.906,-165.495],[-591.937,-164.496],[-591.962,-163.497],[-591.98,-162.498],[-591.993,-161.499],[-591.999,-160.5],[-591.999,-159.5],[-591.993,-158.501],[-591.98,-157.502],[-591.962,-156.503],[-591.937,-155.504],[-591.906,-154.505],[-591.868,-153.506],[-591.824,-152.508],[-591.775,-151.51],[-591.718,-150.512],[-591.656,-149.515],[-591.587,-148.518],[-591.513,-147.521],[-591.432,-146.525],[-591.344,-145.53],[-591.251,-144.535],[-591.151,-143.54],[-591.045,-142.547],[-590.933,-141.554],[-590.815,-140.562],[-590.69,-139.57],[-590.56,-138.579],[-590.423,-137.589],[-590.28,-136.6],[-590.13,-135.612],[-589.975,-134.625],[-589.813,-133.639],[-589.646,-132.654],[-589.472,-131.67],[-589.292,-130.687],[-589.106,-129.705],[-588.913,-128.724],[-588.715,-127.745],[-588.511,-126.767],[-588.3,-125.79],[-588.083,-124.814],[-587.86,-123.84],[-587.632,-122.867],[-587.397,-121.896],[-587.156,-120.926],[-586.908,-119.958],[-586.655,-118.991],[-586.396,-118.026],[-586.131,-117.063],[-585.86,-116.101],[-585.583,-115.141],[-585.3,-114.182],[-585.01,-113.226],[-584.715,-112.271],[-584.414,-111.318],[-584.107,-110.367],[-583.794,-109.418],[-583.475,-108.471],[-583.151,-107.526],[-582.82,-106.583],[-582.483,-105.642],[-582.141,-104.703],[-581.793,-103.767],[-581.438,-102.832],[-581.078,-101.9],[-580.713,-100.97],[-580.341,-100.042],[-579.964,-99.117],[-579.581,-98.194],[-579.192,-97.274],[-578.797,-96.355],[-578.397,-95.44],[-577.991,-94.527],[-577.579,-93.616],[-577.161,-92.708],[-576.738,-91.803],[-576.31,-90.9],[-575.875,-90],[-575.435,-89.103],[-574.99,-88.209],[-574.538,-87.317],[-574.082,-86.428],[-573.619,-85.542],[-573.152,-84.659],[-572.678,-83.779],[-572.199,-82.902],[-571.715,-82.028],[-571.225,-81.157],[-570.73,-80.289],[-570.23,-79.424],[-569.724,-78.562],[-569.212,-77.703],[-568.696,-76.848],[-568.174,-75.996],[-567.646,-75.147],[-567.114,-74.301],[-566.576,-73.459],[-566.033,-72.62],[-565.485,-71.785],[-564.931,-70.953],[-564.372,-70.125],[-563.808,-69.3],[-563.239,-68.478],[-562.665,-67.66],[-562.086,-66.846],[-561.501,-66.035],[-560.912,-65.228],[-560.318,-64.425],[-559.718,-63.625],[-559.114,-62.83],[-558.504,-62.038],[-557.89,-61.249],[-557.271,-60.465],[-556.647,-59.685],[-556.018,-58.908],[-555.384,-58.135],[-554.745,-57.367],[-554.102,-56.602],[-553.454,-55.842],[-552.801,-55.085],[-552.143,-54.333],[-551.481,-53.584],[-550.814,-52.84],[-550.142,-52.1],[-549.466,-51.364],[-548.785,-50.633],[-548.1,-49.906],[-547.41,-49.183],[-546.716,-48.464],[-546.017,-47.75],[-545.314,-47.04],[-544.606,-46.334],[-543.894,-45.633],[-543.177,-44.936],[-542.456,-44.244],[-541.731,-43.557],[-541.002,-42.874],[-540.268,-42.195],[-539.53,-41.521],[-538.788,-40.852],[-538.042,-40.187],[-537.292,-39.527],[-536.537,-38.872],[-535.779,-38.222],[-535.016,-37.576],[-534.249,-36.935],[-533.479,-36.299],[-532.704,-35.667],[-531.926,-35.041],[-531.143,-34.419],[-530.357,-33.802],[-529.567,-33.19],[-528.773,-32.583],[-527.975,-31.981],[-527.174,-31.385],[-526.369,-30.793],[-525.56,-30.206],[-524.747,-29.624],[-523.931,-29.047],[-523.112,-28.476],[-522.288,-27.909],[-521.462,-27.348],[-520.631,-26.792],[-519.798,-26.241],[-518.961,-25.695],[-518.12,-25.154],[-517.276,-24.619],[-516.429,-24.089],[-515.578,-23.565],[-514.725,-23.045],[-513.868,-22.531],[-513.008,-22.023],[-512.144,-21.519],[-511.278,-21.021],[-510.408,-20.529],[-509.536,-20.042],[-508.66,-19.56],[-507.781,-19.084],[-506.9,-18.614],[-506.015,-18.149],[-505.128,-17.689],[-504.238,-17.235],[-503.344,-16.787],[-502.449,-16.344],[-501.55,-15.907],[-500.649,-15.475],[-499.745,-15.049],[-498.838,-14.629],[-497.929,-14.215],[-497.017,-13.806],[-496.103,-13.402],[-495.186,-13.005],[-494.266,-12.613],[-493.345,-12.227],[-492.421,-11.847],[-491.494,-11.472],[-490.565,-11.104],[-489.634,-10.741],[-488.701,-10.384],[-487.765,-10.033],[-486.828,-9.687],[-485.888,-9.348],[-484.946,-9.014],[-484.002,-8.686],[-483.056,-8.364],[-482.108,-8.049],[-481.158,-7.739],[-480.206,-7.435],[-479.252,-7.136],[-478.296,-6.844],[-477.339,-6.558],[-476.379,-6.278],[-475.418,-6.004],[-474.456,-5.736],[-473.491,-5.473],[-472.526,-5.217],[-471.558,-4.967],[-470.589,-4.723],[-469.618,-4.485],[-468.646,-4.253],[-467.673,-4.027],[-466.698,-3.808],[-465.722,-3.594],[-464.744,-3.386],[-463.766,-3.185],[-462.786,-2.99],[-461.804,-2.8],[-460.822,-2.617],[-459.838,-2.44],[-458.854,-2.27],[-457.868,-2.105],[-456.881,-1.946],[-455.894,-1.794],[-454.905,-1.648],[-453.916,-1.508],[-452.925,-1.374],[-451.934,-1.247],[-450.942,-1.125],[-449.95,-1.01],[-448.956,-.901],[-447.962,-.798],[-446.968,-.702],[-445.973,-.611],[-444.977,-.527],[-443.981,-.449],[-442.984,-.377],[-441.987,-.312],[-440.989,-.253],[-439.991,-.2],[-438.993,-.153],[-437.994,-.112],[-436.996,-.078],[-435.997,-.05],[-434.998,-.028],[-433.999,-.012],[-432.999,-.003]],inner:[[-432,-32],[-431,-32],[-430,-32],[-429,-32],[-428,-32],[-427,-32],[-426,-32],[-425,-32],[-424,-32],[-423,-32],[-422,-32],[-421,-32],[-420,-32],[-419,-32],[-418,-32],[-417,-32],[-416,-32],[-415,-32],[-414,-32],[-413,-32],[-412,-32],[-411,-32],[-410,-32],[-409,-32],[-408,-32],[-407,-32],[-406,-32],[-405,-32],[-404,-32],[-403,-32],[-402,-32],[-401,-32],[-400,-32],[-399,-32],[-398,-32],[-397,-32],[-396,-32],[-395,-32],[-394,-32],[-393,-32],[-392,-32],[-391,-32],[-390,-32],[-389,-32],[-388,-32],[-387,-32],[-386,-32],[-385,-32],[-384,-32],[-383,-32],[-382,-32],[-381,-32],[-380,-32],[-379,-32],[-378,-32],[-377,-32],[-376,-32],[-375,-32],[-374,-32],[-373,-32],[-372,-32],[-371,-32],[-370,-32],[-369,-32],[-368,-32],[-367,-32],[-366,-32],[-365,-32],[-364,-32],[-363,-32],[-362,-32],[-361,-32],[-360,-32],[-359,-32],[-358,-32],[-357,-32],[-356,-32],[-355,-32],[-354,-32],[-353,-32],[-352,-32],[-351,-32],[-350,-32],[-349,-32],[-348,-32],[-347,-32],[-346,-32],[-345,-32],[-344,-32],[-343,-32],[-342,-32],[-341,-32],[-340,-32],[-339,-32],[-338,-32],[-337,-32],[-336,-32],[-335,-32],[-334,-32],[-333,-32],[-332,-32],[-331,-32],[-330,-32],[-329,-32],[-328,-32],[-327,-32],[-326,-32],[-325,-32],[-324,-32],[-323,-32],[-322,-32],[-321,-32],[-320,-32],[-319,-32],[-318,-32],[-317,-32],[-316,-32],[-315,-32],[-314,-32],[-313,-32],[-312,-32],[-311,-32],[-310,-32],[-309,-32],[-308,-32],[-307,-32],[-306,-32],[-305,-32],[-304,-32],[-303,-32],[-302,-32],[-301,-32],[-300,-32],[-299,-32],[-298,-32],[-297,-32],[-296,-32],[-295,-32],[-294,-32],[-293,-32],[-292,-32],[-291,-32],[-290,-32],[-289,-32],[-288,-32],[-287,-32],[-286,-32],[-285,-32],[-284,-32],[-283,-32],[-282,-32],[-281,-32],[-280,-32],[-279,-32],[-278,-32],[-277,-32],[-276,-32],[-275,-32],[-274,-32],[-273,-32],[-272,-32],[-271,-32],[-270,-32],[-269,-32],[-268,-32],[-267,-32],[-266,-32],[-265,-32],[-264,-32],[-263,-32],[-262,-32],[-261,-32],[-260,-32],[-259,-32],[-258,-32],[-257,-32],[-256,-32],[-255,-32],[-254,-32],[-253,-32],[-252,-32],[-251,-32],[-250,-32],[-249,-32],[-248,-32],[-247,-32],[-246,-32],[-245,-32],[-244,-32],[-243,-32],[-242,-32],[-241,-32],[-240,-32],[-239,-32],[-238,-32],[-237,-32],[-236,-32],[-235,-32],[-234,-32],[-233,-32],[-232,-32],[-231,-32],[-230,-32],[-229,-32],[-228,-32],[-227,-32],[-226,-32],[-225,-32],[-224,-32],[-223,-32],[-222,-32],[-221,-32],[-220,-32],[-219,-32],[-218,-32],[-217,-32],[-216,-32],[-215,-32],[-214,-32],[-213,-32],[-212,-32],[-211,-32],[-210,-32],[-209,-32],[-208,-32],[-207,-32],[-206,-32],[-205,-32],[-204,-32],[-203,-32],[-202,-32],[-201,-32],[-200,-32],[-199,-32],[-198,-32],[-197,-32],[-196,-32],[-195,-32],[-194,-32],[-193,-32],[-192,-32],[-191,-32],[-190,-32],[-189,-32],[-188,-32],[-187,-32],[-186,-32],[-185,-32],[-184,-32],[-183,-32],[-182,-32],[-181,-32],[-180,-32],[-179,-32],[-178,-32],[-177,-32],[-176,-32],[-175,-32],[-174,-32],[-173,-32],[-172,-32],[-171,-32],[-170,-32],[-169,-32],[-168,-32],[-167,-32],[-166,-32],[-165,-32],[-164,-32],[-163,-32],[-162,-32],[-161,-32],[-160,-32],[-159,-32],[-158,-32],[-157,-32],[-156,-32],[-155,-32],[-154,-32],[-153,-32],[-152,-32],[-151,-32],[-150,-32],[-149,-32],[-148,-32],[-147,-32],[-146,-32],[-145,-32],[-144,-32],[-143,-32],[-142,-32],[-141,-32],[-140,-32],[-139,-32],[-138,-32],[-137,-32],[-136,-32],[-135,-32],[-134,-32],[-133,-32],[-132,-32],[-131,-32],[-130,-32],[-129,-32],[-128,-32],[-127,-32],[-126,-32],[-125,-32],[-124,-32],[-123,-32],[-122,-32],[-121,-32],[-120,-32],[-119,-32],[-118,-32],[-117,-32],[-116,-32],[-115,-32],[-114,-32],[-113,-32],[-112,-32],[-111,-32],[-110,-32],[-109,-32],[-108,-32],[-107,-32],[-106.002,-32.004],[-105.004,-32.016],[-104.007,-32.035],[-103.009,-32.062],[-102.012,-32.097],[-101.015,-32.14],[-100.019,-32.191],[-99.023,-32.249],[-98.027,-32.315],[-97.032,-32.389],[-96.037,-32.47],[-95.044,-32.56],[-94.05,-32.657],[-93.058,-32.762],[-92.067,-32.874],[-91.076,-32.994],[-90.087,-33.122],[-89.098,-33.258],[-88.111,-33.401],[-87.124,-33.553],[-86.139,-33.711],[-85.155,-33.878],[-84.173,-34.052],[-83.192,-34.234],[-82.212,-34.423],[-81.234,-34.62],[-80.257,-34.825],[-79.282,-35.037],[-78.309,-35.257],[-77.337,-35.484],[-76.368,-35.719],[-75.4,-35.962],[-74.434,-36.212],[-73.47,-36.47],[-72.508,-36.735],[-71.548,-37.008],[-70.59,-37.288],[-69.635,-37.575],[-68.682,-37.87],[-67.731,-38.173],[-66.782,-38.482],[-65.836,-38.8],[-64.893,-39.124],[-63.952,-39.456],[-63.013,-39.795],[-62.077,-40.142],[-61.144,-40.496],[-60.214,-40.857],[-59.287,-41.225],[-58.362,-41.601],[-57.441,-41.983],[-56.522,-42.373],[-55.607,-42.77],[-54.695,-43.175],[-53.786,-43.586],[-52.88,-44.004],[-51.977,-44.43],[-51.078,-44.862],[-50.182,-45.302],[-49.29,-45.748],[-48.401,-46.201],[-47.515,-46.662],[-46.634,-47.129],[-45.756,-47.603],[-44.881,-48.084],[-44.011,-48.571],[-43.144,-49.066],[-42.281,-49.567],[-41.422,-50.075],[-40.567,-50.589],[-39.717,-51.11],[-38.87,-51.638],[-38.027,-52.173],[-37.189,-52.714],[-36.354,-53.261],[-35.524,-53.815],[-34.699,-54.375],[-33.878,-54.942],[-33.061,-55.515],[-32.249,-56.095],[-31.441,-56.681],[-30.638,-57.273],[-29.839,-57.871],[-29.046,-58.476],[-28.257,-59.087],[-27.472,-59.704],[-26.693,-60.327],[-25.918,-60.956],[-25.149,-61.591],[-24.384,-62.232],[-23.624,-62.879],[-22.87,-63.532],[-22.12,-64.191],[-21.376,-64.855],[-20.637,-65.526],[-19.903,-66.202],[-19.175,-66.883],[-18.451,-67.571],[-17.733,-68.264],[-17.021,-68.963],[-16.314,-69.667],[-15.613,-70.377],[-14.917,-71.092],[-14.227,-71.812],[-13.542,-72.538],[-12.863,-73.269],[-12.19,-74.006],[-11.522,-74.748],[-10.861,-75.494],[-10.205,-76.246],[-9.555,-77.004],[-8.911,-77.766],[-8.273,-78.533],[-7.641,-79.305],[-7.015,-80.082],[-6.395,-80.864],[-5.781,-81.65],[-5.173,-82.442],[-4.572,-83.238],[-3.976,-84.039],[-3.387,-84.844],[-2.804,-85.654],[-2.228,-86.469],[-1.658,-87.288],[-1.094,-88.111],[-.537,-88.939],[.013,-89.771],[.558,-90.607],[1.095,-91.448],[1.626,-92.293],[2.151,-93.141],[2.669,-93.994],[3.18,-94.851],[3.685,-95.712],[4.182,-96.577],[4.673,-97.446],[5.158,-98.318],[5.635,-99.194],[6.106,-100.074],[6.569,-100.958],[7.026,-101.845],[7.476,-102.735],[7.919,-103.63],[8.355,-104.527],[8.784,-105.428],[9.206,-106.332],[9.621,-107.24],[10.028,-108.15],[10.429,-109.064],[10.822,-109.981],[11.209,-110.901],[11.588,-111.824],[11.96,-112.75],[12.325,-113.679],[12.682,-114.611],[13.032,-115.545],[13.375,-116.482],[13.711,-117.422],[14.039,-118.364],[14.36,-119.309],[14.673,-120.256],[14.98,-121.206],[15.278,-122.158],[15.57,-123.112],[15.853,-124.069],[16.13,-125.028],[16.399,-125.989],[16.66,-126.951],[16.914,-127.916],[17.16,-128.883],[17.399,-129.852],[17.63,-130.823],[17.854,-131.795],[18.07,-132.769],[18.278,-133.745],[18.479,-134.723],[18.673,-135.702],[18.858,-136.682],[19.036,-137.664],[19.206,-138.647],[19.369,-139.632],[19.524,-140.617],[19.671,-141.604],[19.811,-142.592],[19.943,-143.581],[20.067,-144.571],[20.183,-145.562],[20.292,-146.554],[20.393,-147.547],[20.486,-148.54],[20.571,-149.535],[20.649,-150.529],[20.719,-151.525],[20.781,-152.521],[20.836,-153.517],[20.882,-154.514],[20.921,-155.511],[20.952,-156.508],[20.976,-157.506],[20.991,-158.503],[20.999,-159.501],[20.999,-160.499],[20.991,-161.497],[20.976,-162.494],[20.952,-163.492],[20.921,-164.489],[20.882,-165.486],[20.836,-166.483],[20.781,-167.479],[20.719,-168.475],[20.649,-169.471],[20.571,-170.465],[20.486,-171.46],[20.393,-172.453],[20.292,-173.446],[20.183,-174.438],[20.067,-175.429],[19.943,-176.419],[19.811,-177.408],[19.671,-178.396],[19.524,-179.383],[19.369,-180.368],[19.206,-181.353],[19.036,-182.336],[18.858,-183.318],[18.673,-184.298],[18.479,-185.277],[18.278,-186.255],[18.07,-187.231],[17.854,-188.205],[17.63,-189.177],[17.399,-190.148],[17.16,-191.117],[16.914,-192.084],[16.66,-193.049],[16.399,-194.011],[16.13,-194.972],[15.853,-195.931],[15.57,-196.888],[15.278,-197.842],[14.98,-198.794],[14.673,-199.744],[14.36,-200.691],[14.039,-201.636],[13.711,-202.578],[13.375,-203.518],[13.032,-204.455],[12.682,-205.389],[12.325,-206.321],[11.96,-207.25],[11.588,-208.176],[11.209,-209.099],[10.822,-210.019],[10.429,-210.936],[10.028,-211.85],[9.621,-212.76],[9.206,-213.668],[8.784,-214.572],[8.355,-215.473],[7.919,-216.37],[7.476,-217.265],[7.026,-218.155],[6.569,-219.042],[6.106,-219.926],[5.635,-220.806],[5.158,-221.682],[4.673,-222.554],[4.182,-223.423],[3.685,-224.288],[3.18,-225.149],[2.669,-226.006],[2.151,-226.859],[1.626,-227.707],[1.095,-228.552],[.558,-229.393],[.013,-230.229],[-.537,-231.061],[-1.094,-231.889],[-1.658,-232.712],[-2.228,-233.531],[-2.804,-234.346],[-3.387,-235.156],[-3.976,-235.961],[-4.572,-236.762],[-5.173,-237.558],[-5.781,-238.35],[-6.395,-239.136],[-7.015,-239.918],[-7.641,-240.695],[-8.273,-241.467],[-8.911,-242.234],[-9.555,-242.996],[-10.205,-243.754],[-10.861,-244.506],[-11.522,-245.252],[-12.19,-245.994],[-12.863,-246.731],[-13.542,-247.462],[-14.227,-248.188],[-14.917,-248.908],[-15.613,-249.623],[-16.314,-250.333],[-17.021,-251.037],[-17.733,-251.736],[-18.451,-252.429],[-19.175,-253.117],[-19.903,-253.798],[-20.637,-254.474],[-21.376,-255.145],[-22.12,-255.809],[-22.87,-256.468],[-23.624,-257.121],[-24.384,-257.768],[-25.149,-258.409],[-25.918,-259.044],[-26.693,-259.673],[-27.472,-260.296],[-28.257,-260.913],[-29.046,-261.524],[-29.839,-262.129],[-30.638,-262.727],[-31.441,-263.319],[-32.249,-263.905],[-33.061,-264.485],[-33.878,-265.058],[-34.699,-265.625],[-35.524,-266.185],[-36.354,-266.739],[-37.189,-267.286],[-38.027,-267.827],[-38.87,-268.362],[-39.717,-268.89],[-40.567,-269.411],[-41.422,-269.925],[-42.281,-270.433],[-43.144,-270.934],[-44.011,-271.429],[-44.881,-271.916],[-45.756,-272.397],[-46.634,-272.871],[-47.515,-273.338],[-48.401,-273.799],[-49.29,-274.252],[-50.182,-274.698],[-51.078,-275.138],[-51.977,-275.57],[-52.88,-275.996],[-53.786,-276.414],[-54.695,-276.825],[-55.607,-277.23],[-56.522,-277.627],[-57.441,-278.017],[-58.362,-278.399],[-59.287,-278.775],[-60.214,-279.143],[-61.144,-279.504],[-62.077,-279.858],[-63.013,-280.205],[-63.952,-280.544],[-64.893,-280.876],[-65.836,-281.2],[-66.782,-281.518],[-67.731,-281.827],[-68.682,-282.13],[-69.635,-282.425],[-70.59,-282.712],[-71.548,-282.992],[-72.508,-283.265],[-73.47,-283.53],[-74.434,-283.788],[-75.4,-284.038],[-76.368,-284.281],[-77.337,-284.516],[-78.309,-284.743],[-79.282,-284.963],[-80.257,-285.175],[-81.234,-285.38],[-82.212,-285.577],[-83.192,-285.766],[-84.173,-285.948],[-85.155,-286.122],[-86.139,-286.289],[-87.124,-286.447],[-88.111,-286.599],[-89.098,-286.742],[-90.087,-286.878],[-91.076,-287.006],[-92.067,-287.126],[-93.058,-287.238],[-94.05,-287.343],[-95.044,-287.44],[-96.037,-287.53],[-97.032,-287.611],[-98.027,-287.685],[-99.023,-287.751],[-100.019,-287.809],[-101.015,-287.86],[-102.012,-287.903],[-103.009,-287.938],[-104.007,-287.965],[-105.004,-287.984],[-106.002,-287.996],[-107,-288],[-108,-288],[-109,-288],[-110,-288],[-111,-288],[-112,-288],[-113,-288],[-114,-288],[-115,-288],[-116,-288],[-117,-288],[-118,-288],[-119,-288],[-120,-288],[-121,-288],[-122,-288],[-123,-288],[-124,-288],[-125,-288],[-126,-288],[-127,-288],[-128,-288],[-129,-288],[-130,-288],[-131,-288],[-132,-288],[-133,-288],[-134,-288],[-135,-288],[-136,-288],[-137,-288],[-138,-288],[-139,-288],[-140,-288],[-141,-288],[-142,-288],[-143,-288],[-144,-288],[-145,-288],[-146,-288],[-147,-288],[-148,-288],[-149,-288],[-150,-288],[-151,-288],[-152,-288],[-153,-288],[-154,-288],[-155,-288],[-156,-288],[-157,-288],[-158,-288],[-159,-288],[-160,-288],[-161,-288],[-162,-288],[-163,-288],[-164,-288],[-165,-288],[-166,-288],[-167,-288],[-168,-288],[-169,-288],[-170,-288],[-171,-288],[-172,-288],[-173,-288],[-174,-288],[-175,-288],[-176,-288],[-177,-288],[-178,-288],[-179,-288],[-180,-288],[-181,-288],[-182,-288],[-183,-288],[-184,-288],[-185,-288],[-186,-288],[-187,-288],[-188,-288],[-189,-288],[-190,-288],[-191,-288],[-192,-288],[-193,-288],[-194,-288],[-195,-288],[-196,-288],[-197,-288],[-198,-288],[-199,-288],[-200,-288],[-201,-288],[-202,-288],[-203,-288],[-204,-288],[-205,-288],[-206,-288],[-207,-288],[-208,-288],[-209,-288],[-210,-288],[-211,-288],[-212,-288],[-213,-288],[-214,-288],[-215,-288],[-216,-288],[-217,-288],[-218,-288],[-219,-288],[-220,-288],[-221,-288],[-222,-288],[-223,-288],[-224,-288],[-225,-288],[-226,-288],[-227,-288],[-228,-288],[-229,-288],[-230,-288],[-231,-288],[-232,-288],[-233,-288],[-234,-288],[-235,-288],[-236,-288],[-237,-288],[-238,-288],[-239,-288],[-240,-288],[-241,-288],[-242,-288],[-243,-288],[-244,-288],[-245,-288],[-246,-288],[-247,-288],[-248,-288],[-249,-288],[-250,-288],[-251,-288],[-252,-288],[-253,-288],[-254,-288],[-255,-288],[-256,-288],[-257,-288],[-258,-288],[-259,-288],[-260,-288],[-261,-288],[-262,-288],[-263,-288],[-264,-288],[-265,-288],[-266,-288],[-267,-288],[-268,-288],[-269,-288],[-270,-288],[-271,-288],[-272,-288],[-273,-288],[-274,-288],[-275,-288],[-276,-288],[-277,-288],[-278,-288],[-279,-288],[-280,-288],[-281,-288],[-282,-288],[-283,-288],[-284,-288],[-285,-288],[-286,-288],[-287,-288],[-288,-288],[-289,-288],[-290,-288],[-291,-288],[-292,-288],[-293,-288],[-294,-288],[-295,-288],[-296,-288],[-297,-288],[-298,-288],[-299,-288],[-300,-288],[-301,-288],[-302,-288],[-303,-288],[-304,-288],[-305,-288],[-306,-288],[-307,-288],[-308,-288],[-309,-288],[-310,-288],[-311,-288],[-312,-288],[-313,-288],[-314,-288],[-315,-288],[-316,-288],[-317,-288],[-318,-288],[-319,-288],[-320,-288],[-321,-288],[-322,-288],[-323,-288],[-324,-288],[-325,-288],[-326,-288],[-327,-288],[-328,-288],[-329,-288],[-330,-288],[-331,-288],[-332,-288],[-333,-288],[-334,-288],[-335,-288],[-336,-288],[-337,-288],[-338,-288],[-339,-288],[-340,-288],[-341,-288],[-342,-288],[-343,-288],[-344,-288],[-345,-288],[-346,-288],[-347,-288],[-348,-288],[-349,-288],[-350,-288],[-351,-288],[-352,-288],[-353,-288],[-354,-288],[-355,-288],[-356,-288],[-357,-288],[-358,-288],[-359,-288],[-360,-288],[-361,-288],[-362,-288],[-363,-288],[-364,-288],[-365,-288],[-366,-288],[-367,-288],[-368,-288],[-369,-288],[-370,-288],[-371,-288],[-372,-288],[-373,-288],[-374,-288],[-375,-288],[-376,-288],[-377,-288],[-378,-288],[-379,-288],[-380,-288],[-381,-288],[-382,-288],[-383,-288],[-384,-288],[-385,-288],[-386,-288],[-387,-288],[-388,-288],[-389,-288],[-390,-288],[-391,-288],[-392,-288],[-393,-288],[-394,-288],[-395,-288],[-396,-288],[-397,-288],[-398,-288],[-399,-288],[-400,-288],[-401,-288],[-402,-288],[-403,-288],[-404,-288],[-405,-288],[-406,-288],[-407,-288],[-408,-288],[-409,-288],[-410,-288],[-411,-288],[-412,-288],[-413,-288],[-414,-288],[-415,-288],[-416,-288],[-417,-288],[-418,-288],[-419,-288],[-420,-288],[-421,-288],[-422,-288],[-423,-288],[-424,-288],[-425,-288],[-426,-288],[-427,-288],[-428,-288],[-429,-288],[-430,-288],[-431,-288],[-432,-288],[-432.998,-287.996],[-433.996,-287.984],[-434.993,-287.965],[-435.991,-287.938],[-436.988,-287.903],[-437.985,-287.86],[-438.981,-287.809],[-439.977,-287.751],[-440.973,-287.685],[-441.968,-287.611],[-442.963,-287.53],[-443.956,-287.44],[-444.95,-287.343],[-445.942,-287.238],[-446.933,-287.126],[-447.924,-287.006],[-448.913,-286.878],[-449.902,-286.742],[-450.889,-286.599],[-451.876,-286.447],[-452.861,-286.289],[-453.845,-286.122],[-454.827,-285.948],[-455.808,-285.766],[-456.788,-285.577],[-457.766,-285.38],[-458.743,-285.175],[-459.718,-284.963],[-460.691,-284.743],[-461.663,-284.516],[-462.632,-284.281],[-463.6,-284.038],[-464.566,-283.788],[-465.53,-283.53],[-466.492,-283.265],[-467.452,-282.992],[-468.41,-282.712],[-469.365,-282.425],[-470.318,-282.13],[-471.269,-281.827],[-472.218,-281.518],[-473.164,-281.2],[-474.107,-280.876],[-475.048,-280.544],[-475.987,-280.205],[-476.923,-279.858],[-477.856,-279.504],[-478.786,-279.143],[-479.713,-278.775],[-480.638,-278.399],[-481.559,-278.017],[-482.478,-277.627],[-483.393,-277.23],[-484.305,-276.825],[-485.214,-276.414],[-486.12,-275.996],[-487.023,-275.57],[-487.922,-275.138],[-488.818,-274.698],[-489.71,-274.252],[-490.599,-273.799],[-491.485,-273.338],[-492.366,-272.871],[-493.244,-272.397],[-494.119,-271.916],[-494.989,-271.429],[-495.856,-270.934],[-496.719,-270.433],[-497.578,-269.925],[-498.433,-269.411],[-499.283,-268.89],[-500.13,-268.362],[-500.973,-267.827],[-501.811,-267.286],[-502.646,-266.739],[-503.476,-266.185],[-504.301,-265.625],[-505.122,-265.058],[-505.939,-264.485],[-506.751,-263.905],[-507.559,-263.319],[-508.362,-262.727],[-509.161,-262.129],[-509.954,-261.524],[-510.743,-260.913],[-511.528,-260.296],[-512.307,-259.673],[-513.082,-259.044],[-513.851,-258.409],[-514.616,-257.768],[-515.376,-257.121],[-516.13,-256.468],[-516.88,-255.809],[-517.624,-255.145],[-518.363,-254.474],[-519.097,-253.798],[-519.825,-253.117],[-520.549,-252.429],[-521.267,-251.736],[-521.979,-251.037],[-522.686,-250.333],[-523.387,-249.623],[-524.083,-248.908],[-524.773,-248.188],[-525.458,-247.462],[-526.137,-246.731],[-526.81,-245.994],[-527.478,-245.252],[-528.139,-244.506],[-528.795,-243.754],[-529.445,-242.996],[-530.089,-242.234],[-530.727,-241.467],[-531.359,-240.695],[-531.985,-239.918],[-532.605,-239.136],[-533.219,-238.35],[-533.827,-237.558],[-534.428,-236.762],[-535.024,-235.961],[-535.613,-235.156],[-536.196,-234.346],[-536.772,-233.531],[-537.342,-232.712],[-537.906,-231.889],[-538.463,-231.061],[-539.013,-230.229],[-539.558,-229.393],[-540.095,-228.552],[-540.626,-227.707],[-541.151,-226.859],[-541.669,-226.006],[-542.18,-225.149],[-542.685,-224.288],[-543.182,-223.423],[-543.673,-222.554],[-544.158,-221.682],[-544.635,-220.806],[-545.106,-219.926],[-545.569,-219.042],[-546.026,-218.155],[-546.476,-217.265],[-546.919,-216.37],[-547.355,-215.473],[-547.784,-214.572],[-548.206,-213.668],[-548.621,-212.76],[-549.028,-211.85],[-549.429,-210.936],[-549.822,-210.019],[-550.209,-209.099],[-550.588,-208.176],[-550.96,-207.25],[-551.325,-206.321],[-551.682,-205.389],[-552.032,-204.455],[-552.375,-203.518],[-552.711,-202.578],[-553.039,-201.636],[-553.36,-200.691],[-553.673,-199.744],[-553.98,-198.794],[-554.278,-197.842],[-554.57,-196.888],[-554.853,-195.931],[-555.13,-194.972],[-555.399,-194.011],[-555.66,-193.049],[-555.914,-192.084],[-556.16,-191.117],[-556.399,-190.148],[-556.63,-189.177],[-556.854,-188.205],[-557.07,-187.231],[-557.278,-186.255],[-557.479,-185.277],[-557.673,-184.298],[-557.858,-183.318],[-558.036,-182.336],[-558.206,-181.353],[-558.369,-180.368],[-558.524,-179.383],[-558.671,-178.396],[-558.811,-177.408],[-558.943,-176.419],[-559.067,-175.429],[-559.183,-174.438],[-559.292,-173.446],[-559.393,-172.453],[-559.486,-171.46],[-559.571,-170.465],[-559.649,-169.471],[-559.719,-168.475],[-559.781,-167.479],[-559.836,-166.483],[-559.882,-165.486],[-559.921,-164.489],[-559.952,-163.492],[-559.976,-162.494],[-559.991,-161.497],[-559.999,-160.499],[-559.999,-159.501],[-559.991,-158.503],[-559.976,-157.506],[-559.952,-156.508],[-559.921,-155.511],[-559.882,-154.514],[-559.836,-153.517],[-559.781,-152.521],[-559.719,-151.525],[-559.649,-150.529],[-559.571,-149.535],[-559.486,-148.54],[-559.393,-147.547],[-559.292,-146.554],[-559.183,-145.562],[-559.067,-144.571],[-558.943,-143.581],[-558.811,-142.592],[-558.671,-141.604],[-558.524,-140.617],[-558.369,-139.632],[-558.206,-138.647],[-558.036,-137.664],[-557.858,-136.682],[-557.673,-135.702],[-557.479,-134.723],[-557.278,-133.745],[-557.07,-132.769],[-556.854,-131.795],[-556.63,-130.823],[-556.399,-129.852],[-556.16,-128.883],[-555.914,-127.916],[-555.66,-126.951],[-555.399,-125.989],[-555.13,-125.028],[-554.853,-124.069],[-554.57,-123.112],[-554.278,-122.158],[-553.98,-121.206],[-553.673,-120.256],[-553.36,-119.309],[-553.039,-118.364],[-552.711,-117.422],[-552.375,-116.482],[-552.032,-115.545],[-551.682,-114.611],[-551.325,-113.679],[-550.96,-112.75],[-550.588,-111.824],[-550.209,-110.901],[-549.822,-109.981],[-549.429,-109.064],[-549.028,-108.15],[-548.621,-107.24],[-548.206,-106.332],[-547.784,-105.428],[-547.355,-104.527],[-546.919,-103.63],[-546.476,-102.735],[-546.026,-101.845],[-545.569,-100.958],[-545.106,-100.074],[-544.635,-99.194],[-544.158,-98.318],[-543.673,-97.446],[-543.182,-96.577],[-542.685,-95.712],[-542.18,-94.851],[-541.669,-93.994],[-541.151,-93.141],[-540.626,-92.293],[-540.095,-91.448],[-539.558,-90.607],[-539.013,-89.771],[-538.463,-88.939],[-537.906,-88.111],[-537.342,-87.288],[-536.772,-86.469],[-536.196,-85.654],[-535.613,-84.844],[-535.024,-84.039],[-534.428,-83.238],[-533.827,-82.442],[-533.219,-81.65],[-532.605,-80.864],[-531.985,-80.082],[-531.359,-79.305],[-530.727,-78.533],[-530.089,-77.766],[-529.445,-77.004],[-528.795,-76.246],[-528.139,-75.494],[-527.478,-74.748],[-526.81,-74.006],[-526.137,-73.269],[-525.458,-72.538],[-524.773,-71.812],[-524.083,-71.092],[-523.387,-70.377],[-522.686,-69.667],[-521.979,-68.963],[-521.267,-68.264],[-520.549,-67.571],[-519.825,-66.883],[-519.097,-66.202],[-518.363,-65.526],[-517.624,-64.855],[-516.88,-64.191],[-516.13,-63.532],[-515.376,-62.879],[-514.616,-62.232],[-513.851,-61.591],[-513.082,-60.956],[-512.307,-60.327],[-511.528,-59.704],[-510.743,-59.087],[-509.954,-58.476],[-509.161,-57.871],[-508.362,-57.273],[-507.559,-56.681],[-506.751,-56.095],[-505.939,-55.515],[-505.122,-54.942],[-504.301,-54.375],[-503.476,-53.815],[-502.646,-53.261],[-501.811,-52.714],[-500.973,-52.173],[-500.13,-51.638],[-499.283,-51.11],[-498.433,-50.589],[-497.578,-50.075],[-496.719,-49.567],[-495.856,-49.066],[-494.989,-48.571],[-494.119,-48.084],[-493.244,-47.603],[-492.366,-47.129],[-491.485,-46.662],[-490.599,-46.201],[-489.71,-45.748],[-488.818,-45.302],[-487.922,-44.862],[-487.023,-44.43],[-486.12,-44.004],[-485.214,-43.586],[-484.305,-43.175],[-483.393,-42.77],[-482.478,-42.373],[-481.559,-41.983],[-480.638,-41.601],[-479.713,-41.225],[-478.786,-40.857],[-477.856,-40.496],[-476.923,-40.142],[-475.987,-39.795],[-475.048,-39.456],[-474.107,-39.124],[-473.164,-38.8],[-472.218,-38.482],[-471.269,-38.173],[-470.318,-37.87],[-469.365,-37.575],[-468.41,-37.288],[-467.452,-37.008],[-466.492,-36.735],[-465.53,-36.47],[-464.566,-36.212],[-463.6,-35.962],[-462.632,-35.719],[-461.663,-35.484],[-460.691,-35.257],[-459.718,-35.037],[-458.743,-34.825],[-457.766,-34.62],[-456.788,-34.423],[-455.808,-34.234],[-454.827,-34.052],[-453.845,-33.878],[-452.861,-33.711],[-451.876,-33.553],[-450.889,-33.401],[-449.902,-33.258],[-448.913,-33.122],[-447.924,-32.994],[-446.933,-32.874],[-445.942,-32.762],[-444.95,-32.657],[-443.956,-32.56],[-442.963,-32.47],[-441.968,-32.389],[-440.973,-32.315],[-439.977,-32.249],[-438.981,-32.191],[-437.985,-32.14],[-436.988,-32.097],[-435.991,-32.062],[-434.993,-32.035],[-433.996,-32.016],[-432.998,-32.004]],chute1600:[[218,-320],[217,-320],[216,-320],[215,-320],[214,-320],[213,-320],[212,-320],[211,-320],[210,-320],[209,-320],[208,-320],[207,-320],[206,-320],[205,-320],[204,-320],[203,-320],[202,-320],[201,-320],[200,-320],[199,-320],[198,-320],[197,-320],[196,-320],[195,-320],[194,-320],[193,-320],[192,-320],[191,-320],[190,-320],[189,-320],[188,-320],[187,-320],[186,-320],[185,-320],[184,-320],[183,-320],[182,-320],[181,-320],[180,-320],[179,-320],[178,-320],[177,-320],[176,-320],[175,-320],[174,-320],[173,-320],[172,-320],[171,-320],[170,-320],[169,-320],[168,-320],[167,-320],[166,-320],[165,-320],[164,-320],[163,-320],[162,-320],[161,-320],[160,-320],[159,-320],[158,-320],[157,-320],[156,-320],[155,-320],[154,-320],[153,-320],[152,-320],[151,-320],[150,-320],[149,-320],[148,-320],[147,-320],[146,-320],[145,-320],[144,-320],[143,-320],[142,-320],[141,-320],[140,-320],[139,-320],[138,-320],[137,-320],[136,-320],[135,-320],[134,-320],[133,-320],[132,-320],[131,-320],[130,-320],[129,-320],[128,-320],[127,-320],[126,-320],[125,-320],[124,-320],[123,-320],[122,-320],[121,-320],[120,-320],[119,-320],[118,-320],[117,-320],[116,-320],[115,-320],[114,-320],[113,-320],[112,-320],[111,-320],[110,-320],[109,-320],[108,-320],[107,-320],[106,-320],[105,-320],[104,-320],[103,-320],[102,-320],[101,-320],[100,-320],[99,-320],[98,-320],[97,-320],[96,-320],[95,-320],[94,-320],[93,-320],[92,-320],[91,-320],[90,-320],[89,-320],[88,-320],[87,-320],[86,-320],[85,-320],[84,-320],[83,-320],[82,-320],[81,-320],[80,-320],[79,-320],[78,-320],[77,-320],[76,-320],[75,-320],[74,-320],[73,-320],[72,-320],[71,-320],[70,-320],[69,-320],[68,-320]],crossover:[[-432,-32],[-431.048,-31.991],[-430.095,-31.966],[-429.143,-31.923],[-428.19,-31.864],[-427.238,-31.789],[-426.286,-31.698],[-425.333,-31.592],[-424.381,-31.471],[-423.429,-31.335],[-422.476,-31.185],[-421.524,-31.02],[-420.571,-30.842],[-419.619,-30.65],[-418.667,-30.445],[-417.714,-30.227],[-416.762,-29.997],[-415.81,-29.755],[-414.857,-29.501],[-413.905,-29.236],[-412.952,-28.959],[-412,-28.672],[-411.048,-28.374],[-410.095,-28.066],[-409.143,-27.749],[-408.19,-27.422],[-407.238,-27.085],[-406.286,-26.74],[-405.333,-26.387],[-404.381,-26.025],[-403.429,-25.656],[-402.476,-25.279],[-401.524,-24.895],[-400.571,-24.504],[-399.619,-24.107],[-398.667,-23.704],[-397.714,-23.295],[-396.762,-22.88],[-395.81,-22.46],[-394.857,-22.035],[-393.905,-21.606],[-392.952,-21.173],[-392,-20.736],[-391.048,-20.295],[-390.095,-19.852],[-389.143,-19.405],[-388.19,-18.956],[-387.238,-18.505],[-386.286,-18.052],[-385.333,-17.598],[-384.381,-17.142],[-383.429,-16.686],[-382.476,-16.229],[-381.524,-15.771],[-380.571,-15.314],[-379.619,-14.858],[-378.667,-14.402],[-377.714,-13.948],[-376.762,-13.495],[-375.81,-13.044],[-374.857,-12.595],[-373.905,-12.148],[-372.952,-11.705],[-372,-11.264],[-371.048,-10.827],[-370.095,-10.394],[-369.143,-9.965],[-368.19,-9.54],[-367.238,-9.12],[-366.286,-8.705],[-365.333,-8.296],[-364.381,-7.893],[-363.429,-7.496],[-362.476,-7.105],[-361.524,-6.721],[-360.571,-6.344],[-359.619,-5.975],[-358.667,-5.613],[-357.714,-5.26],[-356.762,-4.915],[-355.81,-4.578],[-354.857,-4.251],[-353.905,-3.934],[-352.952,-3.626],[-352,-3.328],[-351.048,-3.041],[-350.095,-2.764],[-349.143,-2.499],[-348.19,-2.245],[-347.238,-2.003],[-346.286,-1.773],[-345.333,-1.555],[-344.381,-1.35],[-343.429,-1.158],[-342.476,-.98],[-341.524,-.815],[-340.571,-.665],[-339.619,-.529],[-338.667,-.408],[-337.714,-.302],[-336.762,-.211],[-335.81,-.136],[-334.857,-.077],[-333.905,-.034],[-332.952,-.009],[-332,0]],chute1000:[[-437.58,-402.266],[-443.429,-395.295],[-449.279,-388.324],[-455.128,-381.353],[-460.977,-374.382],[-466.827,-367.411],[-472.676,-360.44],[-478.525,-353.469],[-484.375,-346.498],[-490.224,-339.527],[-496.073,-332.556],[-501.923,-325.585],[-507.772,-318.614],[-513.622,-311.643],[-519.471,-304.672],[-525.32,-297.701],[-531.17,-290.73],[-537.019,-283.759],[-542.868,-276.788],[-548.718,-269.817],[-554.567,-262.846]]},grandstand:{x0:-77,x1:77,zFront:59,zBack:113,floors:[0,5.5,9.5,13.5,17.5,21.5],lobbyY:5.5,lobbyCeiling:13.5,canopy:{y:22.6,zFront:50},wall:.8,doors:{front:[[-50,-44],[-3,3],[44,50]],west:[[80,92]],back:[[-20,-14],[50,56]]},pillars:{xs:[-66,-54,-42,-30,-18,-6,6,18,30,42,54,66],zs:[72,86,100],size:1.2},terrace:{z0:47,rowDepth:1.5,rise:.6875,rows:8},seat:{x:10,z:55.25,row:5},kiosks:{betting:{x:-40,z:110.6,w:18,d:2.4},leaderboard:{x:30,z:110.6,w:16,d:2.4}},bridge:{x0:77,x1:116,z0:66,z1:106,statue:[106,86]},ramp:{x0:79,x1:90,z0:28,z1:66,westOpen:3.8},plazaStairs:{x0:116,x1:128,z0:66,z1:106,steps:8},backBalcony:{x0:-20,x1:77,z0:113,z1:120},paddockGallery:{r0:37,r1:45,a0:-.35,a1:3.491592653589793,connectors:[[-4.014,2.986,120,140.941],[73.014,80.014,120,140.941]]}},paddock:{x:38,z:153,radius:32,walkingRadius:25,exclusionRadius:35,stalls:{count:8,r:37,a0:.25,a1:2.891592653589793,colors:["#8b6fb3","#e2b53c","#c9443a","#3d8fc0","#3fa35f","#8a6a4b","#d96f9a","#7d68b8"]},screen:{x:38,z:202,width:20,height:10,base:9}},horseWalk:[[63,153],[66,150],[97,150],[97,30],[97,20]],horseWalkCorridor:{x0:92,x1:102,z0:23,z1:155,spurZ:[145,155],spurX0:63},pond:{x:-87,z:-174,rx:32,rz:40},wetland:{x:-303,z:-174,rx:104,rz:48},eastGarden:{x:-171,z:86,radius:24},plaza:{x:214,z:73,fountainRadius:16,gateX:264},counselCenter:{x:176,z:36,w:18,d:11},videoBoard:{x:-1,z:-18,width:48,height:16,base:9},stablePlots:[{id:"plot-001",x:-770,z:139,facing:0,width:20,depth:20},{id:"plot-002",x:-746,z:139,facing:0,width:20,depth:20},{id:"plot-003",x:-722,z:139,facing:0,width:20,depth:20},{id:"plot-004",x:-698,z:139,facing:0,width:20,depth:20},{id:"plot-005",x:-674,z:139,facing:0,width:20,depth:20},{id:"plot-006",x:-626,z:139,facing:0,width:20,depth:20},{id:"plot-007",x:-578,z:139,facing:0,width:20,depth:20},{id:"plot-008",x:-554,z:139,facing:0,width:20,depth:20},{id:"plot-009",x:-386,z:139,facing:0,width:20,depth:20},{id:"plot-010",x:-362,z:139,facing:0,width:20,depth:20},{id:"plot-011",x:-338,z:139,facing:0,width:20,depth:20},{id:"plot-012",x:-314,z:139,facing:0,width:20,depth:20},{id:"plot-013",x:-290,z:139,facing:0,width:20,depth:20},{id:"plot-014",x:-266,z:139,facing:0,width:20,depth:20},{id:"plot-015",x:-242,z:139,facing:0,width:20,depth:20},{id:"plot-016",x:-770,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-017",x:-746,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-018",x:-722,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-019",x:-698,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-020",x:-674,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-021",x:-626,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-022",x:-578,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-023",x:-554,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-024",x:-386,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-025",x:-362,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-026",x:-338,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-027",x:-314,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-028",x:-290,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-029",x:-266,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-030",x:-242,z:165,facing:3.141592653589793,width:20,depth:20},{id:"plot-031",x:-770,z:189,facing:0,width:20,depth:20},{id:"plot-032",x:-746,z:189,facing:0,width:20,depth:20},{id:"plot-033",x:-722,z:189,facing:0,width:20,depth:20},{id:"plot-034",x:-698,z:189,facing:0,width:20,depth:20},{id:"plot-035",x:-674,z:189,facing:0,width:20,depth:20},{id:"plot-036",x:-626,z:189,facing:0,width:20,depth:20},{id:"plot-037",x:-578,z:189,facing:0,width:20,depth:20},{id:"plot-038",x:-554,z:189,facing:0,width:20,depth:20},{id:"plot-039",x:-386,z:189,facing:0,width:20,depth:20},{id:"plot-040",x:-362,z:189,facing:0,width:20,depth:20},{id:"plot-041",x:-338,z:189,facing:0,width:20,depth:20},{id:"plot-042",x:-314,z:189,facing:0,width:20,depth:20},{id:"plot-043",x:-290,z:189,facing:0,width:20,depth:20},{id:"plot-044",x:-266,z:189,facing:0,width:20,depth:20},{id:"plot-045",x:-242,z:189,facing:0,width:20,depth:20},{id:"plot-046",x:-770,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-047",x:-746,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-048",x:-722,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-049",x:-698,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-050",x:-674,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-051",x:-626,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-052",x:-578,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-053",x:-554,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-054",x:-530,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-055",x:-506,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-056",x:-482,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-057",x:-458,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-058",x:-434,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-059",x:-386,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-060",x:-362,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-061",x:-338,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-064",x:-266,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-065",x:-242,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-066",x:-770,z:239,facing:0,width:20,depth:20},{id:"plot-067",x:-746,z:239,facing:0,width:20,depth:20},{id:"plot-068",x:-722,z:239,facing:0,width:20,depth:20},{id:"plot-069",x:-698,z:239,facing:0,width:20,depth:20},{id:"plot-070",x:-674,z:239,facing:0,width:20,depth:20},{id:"plot-071",x:-626,z:239,facing:0,width:20,depth:20},{id:"plot-072",x:-578,z:239,facing:0,width:20,depth:20},{id:"plot-073",x:-554,z:239,facing:0,width:20,depth:20},{id:"plot-074",x:-458,z:239,facing:0,width:20,depth:20},{id:"plot-075",x:-434,z:239,facing:0,width:20,depth:20},{id:"plot-076",x:-386,z:239,facing:0,width:20,depth:20},{id:"plot-077",x:-362,z:239,facing:0,width:20,depth:20},{id:"plot-078",x:-338,z:239,facing:0,width:20,depth:20},{id:"plot-081",x:-266,z:239,facing:0,width:20,depth:20},{id:"plot-082",x:-242,z:239,facing:0,width:20,depth:20},{id:"plot-083",x:-770,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-084",x:-746,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-085",x:-722,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-086",x:-698,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-087",x:-674,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-088",x:-626,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-089",x:-578,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-090",x:-554,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-091",x:-458,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-092",x:-434,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-093",x:-386,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-094",x:-362,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-095",x:-338,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-096",x:-314,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-097",x:-290,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-098",x:-266,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-099",x:-242,z:265,facing:3.141592653589793,width:20,depth:20},{id:"plot-100",x:-770,z:289,facing:0,width:20,depth:20},{id:"plot-101",x:-746,z:289,facing:0,width:20,depth:20},{id:"plot-102",x:-722,z:289,facing:0,width:20,depth:20},{id:"plot-103",x:-698,z:289,facing:0,width:20,depth:20},{id:"plot-104",x:-674,z:289,facing:0,width:20,depth:20},{id:"plot-105",x:-626,z:289,facing:0,width:20,depth:20},{id:"plot-106",x:-578,z:289,facing:0,width:20,depth:20},{id:"plot-107",x:-554,z:289,facing:0,width:20,depth:20},{id:"plot-108",x:-530,z:289,facing:0,width:20,depth:20},{id:"plot-109",x:-506,z:289,facing:0,width:20,depth:20},{id:"plot-110",x:-482,z:289,facing:0,width:20,depth:20},{id:"plot-111",x:-458,z:289,facing:0,width:20,depth:20},{id:"plot-112",x:-434,z:289,facing:0,width:20,depth:20},{id:"plot-113",x:-386,z:289,facing:0,width:20,depth:20},{id:"plot-114",x:-362,z:289,facing:0,width:20,depth:20},{id:"plot-115",x:-338,z:289,facing:0,width:20,depth:20},{id:"plot-116",x:-314,z:289,facing:0,width:20,depth:20},{id:"plot-117",x:-290,z:289,facing:0,width:20,depth:20},{id:"plot-118",x:-266,z:289,facing:0,width:20,depth:20},{id:"plot-119",x:-242,z:289,facing:0,width:20,depth:20}],villagePaths:[{x0:-787,x1:-539,z0:149,z1:155,width:6},{x0:-427,x1:-212,z0:149,z1:155,width:6},{x0:-787,x1:-212,z0:199,z1:205,width:6},{x0:-787,x1:-212,z0:249,z1:255,width:6},{x0:-787,x1:-212,z0:299,z1:305,width:6},{x0:-652,x1:-648,z0:124,z1:308,width:4},{x0:-412,x1:-408,z0:124,z1:308,width:4},{x0:-215,x1:-209,z0:116,z1:320,width:6},{x0:-215,x1:-168,z0:199,z1:205,width:6},{x0:-174,x1:-168,z0:112,z1:202,width:6},{x0:-793,x1:-787,z0:116,z1:320,width:6},{x0:-793,x1:-209,z0:116,z1:122,width:6},{x0:-793,x1:-209,z0:314,z1:320,width:6},{x0:-304,x1:-298,z0:202,z1:227,width:6}],villagePlaza:{x:-301,z:227,r:17},villageWater:{stream:{width:8,points:[[-403.4,171],[-403.3,151],[-403.3,135],[-404,122],[-404,111],[-394,100],[-369,97],[-340,101],[-318,99],[-285,95],[-257,100],[-233,99],[-212,104],[-201,112],[-199,127],[-202,135],[-211,139],[-218,143],[-224,150],[-224.7,168],[-221,182],[-220,193],[-220.6,198],[-222.1,200],[-224.2,203],[-224.9,206],[-224.9,210],[-222.6,215],[-220,219],[-212,226],[-202,231],[-185,232],[-169,236],[-157,243],[-154,270],[-166,284],[-182,291],[-193,303],[-204,313],[-218,313],[-230,323],[-239,337],[-260,343],[-268,352],[-280,359],[-295,363],[-307,356],[-316,338],[-343,339],[-365,344],[-390,342],[-403,331],[-403.3,316],[-403.3,300],[-403.3,267],[-403.4,242]]},bridges:[{x:-403.31,z:152,length:11,width:7.4,axis:"x"},{x:-223,z:152,length:13,width:7.4,axis:"x"},{x:-212,z:139.6,length:15,width:7.4,axis:"z"},{x:-222.75,z:202,length:16,width:7.4,axis:"x"},{x:-212,z:225.1,length:17,width:7.4,axis:"z"},{x:-212,z:313,length:11,width:7.4,axis:"z"},{x:-403.3,z:302,length:11,width:7.4,axis:"x"},{x:-403.36,z:252,length:11,width:7.4,axis:"x"}],ponds:[{x:-403.4,z:171,rx:4.4,rz:6},{x:-403.4,z:242,rx:4.4,rz:6}]},villageDecor:[{type:"wooden-bridge",x:-403.31,z:152,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-223,z:152,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-212,z:139.6,rot:0,scale:1},{type:"wooden-bridge",x:-222.75,z:202,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-212,z:225.1,rot:0,scale:1},{type:"wooden-bridge",x:-212,z:313,rot:0,scale:1},{type:"wooden-bridge",x:-403.3,z:302,rot:1.5707963267948966,scale:1},{type:"wooden-bridge",x:-403.36,z:252,rot:1.5707963267948966,scale:1},{type:"gazebo",x:-301,z:235,rot:0,scale:1},{type:"picnic-table",x:-292,z:237,rot:0,scale:1},{type:"picnic-table",x:-309,z:219,rot:0,scale:1},{type:"stone-well",x:-313,z:236,rot:0,scale:1},{type:"signpost",x:-220,z:207,rot:0,scale:1},{type:"rose-arch",x:-228,z:202,rot:1.5707963267948966,scale:1},{type:"windmill",x:-738,z:343,rot:0,scale:1.2},{type:"duck-family",x:-421.5,z:284,rot:0,scale:1},{type:"mushroom-stump",x:-415.5,z:310,rot:0,scale:1},{type:"wildflowers",x:-413.5,z:308,rot:0,scale:1},{type:"tree-pine",x:-774,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-774,z:110,rot:0,scale:.9},{type:"tree-pine",x:-750,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-750,z:110,rot:0,scale:.9},{type:"tree-pine",x:-726,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-726,z:110,rot:0,scale:.9},{type:"tree-pine",x:-702,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-702,z:110,rot:0,scale:.9},{type:"tree-pine",x:-678,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-678,z:110,rot:0,scale:.9},{type:"tree-pine",x:-654,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-654,z:110,rot:0,scale:.9},{type:"tree-pine",x:-630,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-630,z:110,rot:0,scale:.9},{type:"tree-pine",x:-606,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-606,z:110,rot:0,scale:.9},{type:"tree-pine",x:-582,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-582,z:110,rot:0,scale:.9},{type:"tree-pine",x:-558,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-558,z:110,rot:0,scale:.9},{type:"tree-pine",x:-534,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-534,z:110,rot:0,scale:.9},{type:"tree-pine",x:-510,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-510,z:110,rot:0,scale:.9},{type:"tree-pine",x:-486,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-486,z:110,rot:0,scale:.9},{type:"tree-pine",x:-462,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-462,z:110,rot:0,scale:.9},{type:"tree-pine",x:-438,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-438,z:110,rot:0,scale:.9},{type:"tree-pine",x:-414,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-414,z:110,rot:0,scale:.9},{type:"tree-pine",x:-390,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-390,z:110,rot:0,scale:.9},{type:"tree-pine",x:-366,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-366,z:110,rot:0,scale:.9},{type:"tree-pine",x:-342,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-342,z:110,rot:0,scale:.9},{type:"tree-pine",x:-318,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-318,z:110,rot:0,scale:.9},{type:"tree-pine",x:-294,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-294,z:110,rot:0,scale:.9},{type:"tree-pine",x:-270,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-270,z:110,rot:0,scale:.9},{type:"tree-pine",x:-246,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-246,z:110,rot:0,scale:.9},{type:"tree-pine",x:-222,z:328,rot:0,scale:1.1},{type:"tree-apple",x:-222,z:110,rot:0,scale:.9},{type:"tree-oak",x:-798,z:138,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:180,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:222,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:264,rot:0,scale:1.2},{type:"tree-oak",x:-798,z:306,rot:0,scale:1.2},{type:"flower-bed",x:-421.5,z:141,rot:0,scale:1},{type:"flower-bed",x:-416.5,z:273,rot:0,scale:1},{type:"flower-bed",x:-415.5,z:295,rot:0,scale:1},{type:"flower-bed",x:-313,z:241,rot:0,scale:1},{type:"flower-bed",x:-289,z:241,rot:0,scale:1},{type:"tree-apple",x:-417,z:146,rot:0,scale:.72},{type:"tree-oak",x:-417,z:169,rot:0,scale:.72},{type:"tree-pine",x:-417,z:187,rot:0,scale:.72},{type:"tree-oak",x:-417,z:227,rot:0,scale:.72},{type:"tree-apple",x:-417,z:266,rot:0,scale:.72},{type:"tree-blossom",x:-350,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-350,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-326,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-326,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-302,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-302,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-278,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-278,z:170,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:160,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:170,rot:0,scale:.5693571957260253},{type:"tree-apple",x:-350,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-350,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:194,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:184,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:194,rot:0,scale:.9119039947474329},{type:"tree-oak",x:-374,z:210,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-374,z:220,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-350,z:210,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-350,z:220,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:210,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:220,rot:0,scale:.4871569197392736},{type:"tree-blossom",x:-374,z:234,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-374,z:244,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-350,z:234,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-350,z:244,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:234,rot:0,scale:.5693571957260253},{type:"tree-blossom",x:-254,z:244,rot:0,scale:.5693571957260253},{type:"tree-apple",x:-350,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-350,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-326,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-302,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-278,z:270,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:260,rot:0,scale:.9119039947474329},{type:"tree-apple",x:-254,z:270,rot:0,scale:.9119039947474329},{type:"tree-oak",x:-350,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-350,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-326,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-326,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-302,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-302,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-278,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-278,z:294,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:284,rot:0,scale:.4871569197392736},{type:"tree-oak",x:-254,z:294,rot:0,scale:.4871569197392736}],plazaExcludedPlots:[{id:"plot-062",x:-314,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-063",x:-290,z:215,facing:3.141592653589793,width:20,depth:20},{id:"plot-079",x:-314,z:239,facing:0,width:20,depth:20},{id:"plot-080",x:-290,z:239,facing:0,width:20,depth:20}],retiredPlaza:{x:-506,z:252,r:17},villageGate:{x:-402,z:202},stablePrecinct:[-787,-215,122,314],trainingRings:[{x:-483,z:158,rx:44,rz:24}],spawn:[225,95],publicBounds:[-800,330,-440,420],lobbyProps:[{type:"machine",x:-64,z:111.5,w:1.1,d:.8},{type:"machine",x:-62.4,z:111.5,w:1.1,d:.8},{type:"machine",x:-60.8,z:111.5,w:1.1,d:.8},{type:"machine",x:-59.2,z:111.5,w:1.1,d:.8},{type:"machine",x:-57.6,z:111.5,w:1.1,d:.8},{type:"machine",x:-56,z:111.5,w:1.1,d:.8},{type:"machine",x:-10,z:111.5,w:1.1,d:.8},{type:"machine",x:-8.4,z:111.5,w:1.1,d:.8},{type:"machine",x:-6.8,z:111.5,w:1.1,d:.8},{type:"machine",x:-5.199999999999999,z:111.5,w:1.1,d:.8},{type:"machine",x:-3.5999999999999996,z:111.5,w:1.1,d:.8},{type:"machine",x:-2,z:111.5,w:1.1,d:.8},{type:"machine",x:40,z:111.5,w:1.1,d:.8},{type:"machine",x:41.6,z:111.5,w:1.1,d:.8},{type:"machine",x:43.2,z:111.5,w:1.1,d:.8},{type:"machine",x:44.8,z:111.5,w:1.1,d:.8},{type:"machine",x:46.4,z:111.5,w:1.1,d:.8},{type:"machine",x:48,z:111.5,w:1.1,d:.8},{type:"machine",x:60,z:111.5,w:1.1,d:.8},{type:"machine",x:61.6,z:111.5,w:1.1,d:.8},{type:"machine",x:63.2,z:111.5,w:1.1,d:.8},{type:"machine",x:64.8,z:111.5,w:1.1,d:.8},{type:"machine",x:66.4,z:111.5,w:1.1,d:.8},{type:"machine",x:68,z:111.5,w:1.1,d:.8},{type:"desk",x:-60,z:79,w:3,d:1.2},{type:"desk",x:-36,z:79,w:3,d:1.2},{type:"desk",x:-12,z:79,w:3,d:1.2},{type:"desk",x:12,z:79,w:3,d:1.2},{type:"desk",x:36,z:79,w:3,d:1.2},{type:"desk",x:60,z:79,w:3,d:1.2},{type:"desk",x:-60,z:93,w:3,d:1.2},{type:"desk",x:-36,z:93,w:3,d:1.2},{type:"desk",x:-12,z:93,w:3,d:1.2},{type:"desk",x:12,z:93,w:3,d:1.2},{type:"desk",x:36,z:93,w:3,d:1.2},{type:"desk",x:60,z:93,w:3,d:1.2},{type:"bench",x:-70,z:63.5,w:4,d:.8},{type:"bench",x:-70,z:66.5,w:4,d:.8},{type:"bench",x:-65.5,z:63.5,w:4,d:.8},{type:"bench",x:-65.5,z:66.5,w:4,d:.8},{type:"bench",x:-61,z:63.5,w:4,d:.8},{type:"bench",x:-61,z:66.5,w:4,d:.8},{type:"bench",x:-38,z:63.5,w:4,d:.8},{type:"bench",x:-38,z:66.5,w:4,d:.8},{type:"bench",x:-33.5,z:63.5,w:4,d:.8},{type:"bench",x:-33.5,z:66.5,w:4,d:.8},{type:"bench",x:-29,z:63.5,w:4,d:.8},{type:"bench",x:-29,z:66.5,w:4,d:.8},{type:"bench",x:-24.5,z:63.5,w:4,d:.8},{type:"bench",x:-24.5,z:66.5,w:4,d:.8},{type:"bench",x:-20,z:63.5,w:4,d:.8},{type:"bench",x:-20,z:66.5,w:4,d:.8},{type:"bench",x:-15.5,z:63.5,w:4,d:.8},{type:"bench",x:-15.5,z:66.5,w:4,d:.8},{type:"bench",x:-11,z:63.5,w:4,d:.8},{type:"bench",x:-11,z:66.5,w:4,d:.8},{type:"bench",x:10,z:63.5,w:4,d:.8},{type:"bench",x:10,z:66.5,w:4,d:.8},{type:"bench",x:14.5,z:63.5,w:4,d:.8},{type:"bench",x:14.5,z:66.5,w:4,d:.8},{type:"bench",x:19,z:63.5,w:4,d:.8},{type:"bench",x:19,z:66.5,w:4,d:.8},{type:"bench",x:23.5,z:63.5,w:4,d:.8},{type:"bench",x:23.5,z:66.5,w:4,d:.8},{type:"bench",x:28,z:63.5,w:4,d:.8},{type:"bench",x:28,z:66.5,w:4,d:.8},{type:"bench",x:32.5,z:63.5,w:4,d:.8},{type:"bench",x:32.5,z:66.5,w:4,d:.8},{type:"bench",x:37,z:63.5,w:4,d:.8},{type:"bench",x:37,z:66.5,w:4,d:.8},{type:"bench",x:58,z:63.5,w:4,d:.8},{type:"bench",x:58,z:66.5,w:4,d:.8},{type:"bench",x:62.5,z:63.5,w:4,d:.8},{type:"bench",x:62.5,z:66.5,w:4,d:.8},{type:"bench",x:67,z:63.5,w:4,d:.8},{type:"bench",x:67,z:66.5,w:4,d:.8},{type:"info",x:0,z:69,w:6,d:1.6},{type:"snack",x:-71.5,z:100,w:2.4,d:10},{type:"plant",x:-6,z:62,w:1,d:1},{type:"plant",x:6,z:62,w:1,d:1},{type:"plant",x:-53,z:62,w:1,d:1},{type:"plant",x:-41,z:62,w:1,d:1},{type:"plant",x:41,z:62,w:1,d:1},{type:"plant",x:53,z:62,w:1,d:1},{type:"plant",x:-74,z:62,w:1,d:1},{type:"plant",x:74,z:62,w:1,d:1},{type:"plant",x:-23,z:110,w:1,d:1},{type:"plant",x:-11,z:105,w:1,d:1},{type:"plant",x:47,z:110,w:1,d:1},{type:"plant",x:59,z:105,w:1,d:1},{type:"monitor",x:-48,z:79,w:0,d:0,y:10.2},{type:"monitor",x:-24,z:79,w:0,d:0,y:10.2},{type:"monitor",x:0,z:79,w:0,d:0,y:10.2},{type:"monitor",x:24,z:79,w:0,d:0,y:10.2},{type:"monitor",x:48,z:79,w:0,d:0,y:10.2},{type:"monitor",x:-48,z:93,w:0,d:0,y:10.2},{type:"monitor",x:-24,z:93,w:0,d:0,y:10.2},{type:"monitor",x:0,z:93,w:0,d:0,y:10.2},{type:"monitor",x:24,z:93,w:0,d:0,y:10.2},{type:"monitor",x:48,z:93,w:0,d:0,y:10.2}],pois:{counsel:[176,58,3.141592653589793,22],overview:[205,120,.6,60],stand:[0,38,3.141592653589793,18],paddock:[38,194,3.141592653589793,30],path:[140,86,1.5707963267948966,22],track:[28,34,3.141592653589793,18],betting:[-40,104,0,10],plaza:[214,95,0,30]}};var Wr=oe.villageWater,{stream:pi,ponds:ps,bridges:Ma}=Wr,Ut=[],Sa=0;for(let r=1;r<pi.points.length;r++){let[e,t]=pi.points[r-1],[n,i]=pi.points[r],s=n-e,o=i-t,a=Math.hypot(s,o);Ut.push({x:e,z:t,dx:s/a,dz:o/a,size:a,start:Sa}),Sa+=a}var Vr=pi.points.map(([r,e],t)=>{let n=Ut[Math.max(0,t-1)],i=Ut[Math.min(t,Ut.length-1)],o=(t===0?ps[0].rx:t===Ut.length?ps[1].rx:pi.width/2)/(1+n.dx*i.dx+n.dz*i.dz),a=-(n.dz+i.dz)*o,l=(n.dx+i.dx)*o;return{center:{x:r,z:e},left:{x:r+a,z:e+l},right:{x:r-a,z:e-l}}});function wa(r,e,t){let{center:n}=Vr[r],i=Ut[r===0?0:Ut.length-1];return Array.from({length:15},(s,o)=>{let a=(o+1)*Math.PI/16,l=t.rx*Math.cos(a),c=e*t.rz*Math.sin(a);return{x:n.x+c*i.dx-l*i.dz,z:n.z+c*i.dz+l*i.dx}})}var Ea=[wa(0,-1,ps[0]),wa(Ut.length,1,ps[1])],fs=[...Vr.map(r=>r.left),...Ea[1],...Vr.map(r=>r.right).reverse(),...Ea[0].slice().reverse()],Gr=new Map;for(let r=0;r<fs.length;r++){let e=fs[r],t=fs[(r+1)%fs.length];for(let n=Math.floor(Math.min(e.z,t.z)/8);n<=Math.floor(Math.max(e.z,t.z)/8);n++)Gr.has(n)||Gr.set(n,[]),Gr.get(n).push([e,t])}var Rm={x:Ma.at(-1).x+6.4,z:Ma.at(-1).z};var Pm=Math.PI*2;function Aa(r){let e=r.k,t=r.turnRadius,n=r.straight,i=r.goalX+r.goalBeforeEnd,s=i-n,o=r.homeZ-t,a=r.innerRadius,l=r.innerStraight;return{...r,rightX:i,leftX:s,cz:o,backZ:r.homeZ-2*t,iHomeZ:o+a,iBackZ:o-a,iRightX:s+l,crossEndX:s+r.crossLength}}function Dn(r,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e.x-r.x,e.z-r.z)/t));return Array.from({length:n+1},(i,s)=>({x:r.x+(e.x-r.x)*s/n,z:r.z+(e.z-r.z)*s/n}))}function ms(r,e,t,n,i){let s=Math.max(2,Math.ceil(Math.abs(n-t)*e/i));return Array.from({length:s+1},(o,a)=>{let l=t+(n-t)*a/s;return{x:r.x+e*Math.cos(l),z:r.z+e*Math.sin(l)}})}function h3(r,e,t){let n=Math.max(2,Math.ceil(Math.hypot(e.x-r.x,e.z-r.z)/t));return Array.from({length:n+1},(i,s)=>{let o=s/n,a=o*o*(3-2*o);return{x:r.x+(e.x-r.x)*o,z:r.z+(e.z-r.z)*a}})}function gs(...r){let e=[];for(let t of r)for(let n of t){let i=e.at(-1);(!i||Math.hypot(i.x-n.x,i.z-n.z)>1e-6)&&e.push(n)}return e}function d3(r,e=.5){let t=(n,i)=>({x:n,z:i});return{home:Dn(t(r.leftX,r.homeZ),t(r.rightX,r.homeZ),e),homeFromCross:Dn(t(r.crossEndX,r.homeZ),t(r.rightX,r.homeZ),e),rightTurn:ms(t(r.rightX,r.cz),r.turnRadius,Math.PI/2,-Math.PI/2,e),back:Dn(t(r.rightX,r.backZ),t(r.leftX,r.backZ),e),leftTurn:ms(t(r.leftX,r.cz),r.turnRadius,-Math.PI/2,-Math.PI*1.5,e),chute1600:Dn(t(r.rightX+r.chute1600,r.backZ),t(r.rightX,r.backZ),e),iHome:Dn(t(r.leftX,r.iHomeZ),t(r.iRightX,r.iHomeZ),e),iRight:ms(t(r.iRightX,r.cz),r.innerRadius,Math.PI/2,-Math.PI/2,e),iBack:Dn(t(r.iRightX,r.iBackZ),t(r.leftX,r.iBackZ),e),iLeft:ms(t(r.leftX,r.cz),r.innerRadius,-Math.PI/2,-Math.PI*1.5,e),cross:h3(t(r.leftX,r.iHomeZ),t(r.crossEndX,r.homeZ),e)}}function mi(r,e=!1){let t=e&&Math.hypot(r[0].x-r.at(-1).x,r[0].z-r.at(-1).z)<1e-6?r.slice(0,-1):r,n=t.length,i=e?n:n-1,s=[0];for(let a=0;a<i;a++){let l=t[a],c=t[(a+1)%n];s.push(s.at(-1)+Math.hypot(c.x-l.x,c.z-l.z))}let o=t.map((a,l)=>{let c=t[e?(l-1+n)%n:Math.max(0,l-1)],u=t[e?(l+1)%n:Math.min(n-1,l+1)],h=u.x-c.x,d=u.z-c.z,f=Math.hypot(h,d)||1;return{x:-d/f,z:h/f}});return{points:t,lengths:s,normals:o,total:s.at(-1),closed:e}}function Xr(r,e,t=0){let{points:n,lengths:i,normals:s,total:o,closed:a}=r,l=n.length,c=a?(e%o+o)%o:Math.max(0,Math.min(o,e)),u=0,h=i.length-1;for(;u+1<h;){let I=u+h>>1;i[I]<=c?u=I:h=I}let d=u,f=a?(d+1)%l:Math.min(l-1,d+1),p=n[d],g=n[f],_=i[d+1]-i[d]||1,y=Math.max(0,Math.min(1,(c-i[d])/_)),b=g.x-p.x,E=g.z-p.z,M=Math.hypot(b,E)||1,w=s[d].x+(s[f].x-s[d].x)*y,T=s[d].z+(s[f].z-s[d].z)*y,C=Math.hypot(w,T)||1;return w/=C,T/=C,{x:p.x+b*y+w*t,z:p.z+E*y+T*t,heading:Math.atan2(b,E)+Math.PI,nx:w,nz:T,s:c}}function xs(r,e){let t=1/0,n=0,{points:i,lengths:s,closed:o}=r,a=i.length,l=o?a:a-1;for(let c=0;c<l;c++){let u=i[c],h=i[(c+1)%a],d=h.x-u.x,f=h.z-u.z,p=d*d+f*f||1,g=Math.max(0,Math.min(1,((e.x-u.x)*d+(e.z-u.z)*f)/p)),_=u.x+d*g,y=u.z+f*g,b=(_-e.x)**2+(y-e.z)**2;b<t&&(t=b,n=s[c]+Math.sqrt(p)*g)}return n}function Ta(r,e=.5){let t=d3(r,e),n=mi(gs(t.home,t.rightTurn,t.back,t.leftTurn),!0),i=mi(gs(t.iHome,t.iRight,t.iBack,t.iLeft),!0),s=mi(gs(t.chute1600,t.back,t.leftTurn,t.home,t.rightTurn)),o=mi(gs(t.iHome,t.iRight,t.iBack,t.iLeft,t.cross,t.homeFromCross,t.rightTurn)),a={x:r.goalX,z:r.homeZ};return{pieces:t,outerLoop:n,innerLoop:i,outer:{path:s,goalS:xs(s,a)},inner:{path:o,goalS:xs(o,a)}}}var Ra=Aa(oe.geometry),_s=Ta(Ra,.5),f3=oe.lanePitch;function p3(r){let e=1/0,t=-1/0;for(let i of r)e=Math.min(e,i.z),t=Math.max(t,i.z);let n=Array.from({length:Math.floor(t-e)+1},()=>[]);for(let i=0,s=r.length-1;i<r.length;s=i++){let o=r[i],a=r[s];for(let l=Math.floor(Math.min(o.z,a.z)-e);l<=Math.floor(Math.max(o.z,a.z)-e);l++)n[l].push(o,a)}return{z0:e,z1:t,bands:n}}var m3=(oe.railOuterLane+1)*f3,g3=_s.outerLoop.points.map((r,e)=>Xr(_s.outerLoop,_s.outerLoop.lengths[e],m3)),Nm=p3(g3);var Gm=Math.PI*2;var x3=oe.trainingRings[0],{x:tn,z:Ot,rx:Zr,rz:ct}=x3,_3=Object.freeze({x:tn,z:Ot+ct*.8}),Ca=Object.freeze({id:"training-ring",name:"\uD6C8\uB828\uC18C",icon:"\u{1F3C7}",x:tn+5,z:Ot+ct+1,y:2.2,sign:{x:tn+5,z:Ot+ct+1},approach:{x:tn,z:Ot+ct+2}});var Pa=r=>Math.abs(r.x-tn)<4.6&&r.z>=Ot+ct-1.1&&r.z<=Ot+ct+5,y3=(r,e,t)=>((r.x-tn)/e)**2+((r.z-Ot)/t)**2,v3=r=>Math.abs(r.x-tn)<=Zr+1.8&&Math.abs(r.z-Ot)<=ct+5,Jr=r=>v3(r)&&(y3(r,Zr+1.8,ct+1.8)<=1||Pa(r));var b3=Zr-ct*.2,M3=ct*.8,qr=360,Yr=[0];for(let r=1;r<=qr;r++){let e=(r-1)*2*Math.PI/qr,t=r*2*Math.PI/qr;Yr.push(Yr[r-1]+Math.hypot(b3*(Math.sin(t)-Math.sin(e)),M3*(Math.cos(t)-Math.cos(e))))}var Xm=Yr.at(-1);var nn=Object.freeze({x:-301,z:227}),S3=88.8,w3=-421.5,E3=2.45,Ia=w3-E3,gi=Object.freeze({id:"playground",name:"\uB180\uC774\uD130",closed:!1,x0:-492,x1:Ia,z0:182,z1:223}),Zm=Object.freeze({x:-466,z:188}),Jm=Object.freeze({x:-438,z:205}),$m=Object.freeze([[-434,206],[-451,196],[-485,216]].map(([r,e])=>({x:r,z:e,rotation:0}))),Km=Object.freeze({x:-443,z:212});function $r({x:r,z:e}){return r>=gi.x0&&r<=gi.x1&&e>=gi.z0&&e<=gi.z1}var A3=Object.freeze([{id:"west-bank",name:"\uAC1C\uC6B8 \uAC74\uB108",closed:!0,x0:-810,x1:Ia,z0:86,z1:420},{id:"central-blocks",name:"\uC9D1\uD130 \uC0AC\uC774 \uACE8\uBAA9\uACFC \uC61B \uD6C8\uB828\uC7A5",closed:!0,x0:-599,x1:-426,z0:124,z1:312},gi]),Kr=A3.filter(r=>r.closed);function ys({x:r,z:e},t=Kr){return!$r({x:r,z:e})&&!Jr({x:r,z:e})&&t.some(({x0:n,x1:i,z0:s,z1:o})=>r>=n&&r<=i&&e>=s&&e<=o)}var T3=Object.freeze(["plot-062","plot-063","plot-079","plot-080"]);function R3(r){return Math.hypot(r.x-nn.x,r.z-nn.z)}function vs(r,e=[]){if(!r||$r(r)||ys(r)||T3.includes(r.id))return!1;let t=e instanceof Set?e:new Set(e);return R3(r)<=S3||t.has(r.id)}function La(r,e=[]){let t=e instanceof Set?e:new Set(e);return(r||[]).filter(n=>vs(n,t))}function za(r={},e=[]){let t=La(r.stablePlots||[],e),n=[],i=Kr.find(s=>s.id==="west-bank");for(let s of r.villagePaths||[]){let o=s.x1-s.x0>s.z1-s.z0,a=o?s.x0:Math.abs((s.x0+s.x1)/2+171)<1?108:s.z0,l=o?s.x1:s.z1,c=o?(s.z0+s.z1)/2:(s.x0+s.x1)/2;if(o&&(c<124||c>310))continue;let u=Math.ceil((l-a)/4);for(let h=0;h<u;h++){let d=a+(l-a)*h/u,f=a+(l-a)*(h+1)/u,p=o?(d+f)/2:c,g=o?c:(d+f)/2,_=!o&&[-650,-410].some(w=>Math.abs(p-w)<1),y=o&&g>=149&&g<=305&&p>=-654&&p<=-406,b=o&&Math.abs(g-202)<1||p>=-223||_||y,E=(r.villageWater?.bridges||[]).some(w=>Math.abs(g-w.z)<(w.axis==="z"?w.length:w.width)/2+2&&Math.abs(p-w.x)<(w.axis==="x"?w.length:w.width)/2+2),M=t.some(w=>Math.abs(p-w.x)<22&&Math.abs(g-w.z)<22)||!!r.villagePlaza&&Math.hypot(p-r.villagePlaza.x,g-r.villagePlaza.z)<30;if(b||E||M)if(o&&Math.abs(g-202)<1&&i&&d<i.x1&&f>-442){let w=Math.max(d,-442);n.push({x:(w+f)/2,z:g,w:f-w+.025,d:s.z1-s.z0})}else o&&i&&g>=i.z0&&g<=i.z1&&d<=i.x1?f>i.x1&&n.push({x:(f+i.x1)/2,z:g,w:f-i.x1,d:s.z1-s.z0}):ys({x:p,z:g})||n.push({x:p,z:g,w:o?f-d+.025:s.x1-s.x0,d:o?s.z1-s.z0:f-d+.025})}}return n}var Da=[19339965,19339966,19347841,19347842,19347965,19347966,19355841,19355842,19532779,19532780,19532781,19540779,19540780,19540781,19595693,19603555,19603556,19603692,19603693,19603694,19611555,19611693,19611877,19611878,19619877,19619878,19628071,19628072,19636071,19636072,19692746,19692747,19700746,19795177,19803177,19835355,19835356,19843355,19843356,19947866,19947867,19955866,19955867,20019167,20019168,20027167,20027168,20244658,20244659,20251350,20251351,20252658,20252659,20259350,20363586,20363587,20371586,20371587,20403230,20403231,20411231,20572724,20572725,20579538,20579539,20580724,20580725,20611580,20611581,20611582,20619581,20899851,20899852,20907850,20907851,20907852,21180081,21180082,21180083,21188082,21235404,21243403,21243404,21491509,21499508,21499509,21499510,21507509,21588025,21596025,21596026,21604025,21731336,21731337,21739336,21739337,21859329,21859330,21867329,21867330,21900053,21908052,21908053,21923679,21923680,21931679,21931680,21987301,21987302,21995302,22203272,22203273,22203274,22211273,22283329,22291328,22291329,22323345,22323346,22331345,22331346,22363934,22363935,22371934,22371935,22667936,22667937,22675936,22675937,22683937,22875987,22875988,22883987,22883988,23036737,23044737,23444125,23452124,23452125,23452126,23460125,23588126,23588127,23596126,23596127,23660771,23660772,23668771,24035196,24035197,24043196,24043197,24203211,24203212,24211211,24211212,24732094,24732095,24740094,24740095,24908124,24908125,24908126,24916125,25124803,25124804,25163212,25371218,25371219,25379219,25556062,25556063,25564062,25564063,25667131,25667132,25675131,25675132,25827228,25827229,25835227,25835228,25835229,25964755,25972754,25972755,25972756,25980755,26204066,26204067,26212066,26212067,26316827,26316828,26324827,26324828,26388789,26388790,26396789,26468739,26468740,26476738,26476739,26476740,26812689,26812690,26820689,26820690,26844678,26844679,26844680,26852678,26852679,27484121,27484122,27492120,27492121,27492122,27500121,27844729,27844730,27844731,27852730,27852731,27947275,27947276,27955275,27955276,28035196,28035197,28043195,28043196,28043197,28051196,28123284,28123285,28131284,28131285,28372084,28372085,28380084,28380085,28451238,28451239,28459238,28459239,28459240,28467239,28516179,28516180,28524179,28524180,28564073,28564074,28572073,28572074,28668749,28668750,28676749,28676750,28708717,28716716,28716717,28724717,28740792,28740793,28740794,28748792,28748793,28748794,28820171,28820172,28828171,28828172,28868250,28868251,28876250,28876251,28948132,28948133,28948210,28948211,28956132,28956133,28956210,28956211,29084066,29084067,29092066,29092067,29124631,29124632,29132631,29132632,29188704,29188705,29196704,29196705,29260116,29260117,29260226,29260227,29268116,29268117,29268226,29268227,29300733,29300734,29308732,29308733,29308734,29316733,29420750,29428749,29428750,29436750,29572132,29572133,29572210,29572211,29580132,29580133,29580210,29580211,29700171,29700172,29708171,29708172,29740647,29740648,29748647,29748648,30460659,30460660,30460661,30468659,30468660,30468661,30500286,30500287,30508286,30508287,30643235,30643236,30651235,30651236,30764097,30764098,30764099,30764100,30764101,30764102,30764103,30764104,30764105,30764106,30764107,30764108,30764109,30764110,30764111,30764112,30764113,30764114,30764115,30764116,30764117,30764118,30764119,30764120,30764121,30764122,30764123,30764124,30764125,30764126,30764127,30764128,30764129,30764130,30764131,30764132,30764133,30764134,30764135,30764136,30764137,30764138,30764139,30764140,30764141,30764142,30764143,30764144,30764145,30764146,30764147,30764148,30764149,30764150,30764151,30764152,30764153,30764154,30764155,30764156,30764157,30764158,30764159,30764160,30764161,30764162,30764163,30764164,30764165,30764166,30764167,30764168,30764169,30764170,30764171,30764172,30764173,30764174,30764175,30764176,30764177,30764178,30764179,30764180,30764181,30764182,30764183,30764184,30764185,30764186,30764187,30764188,30764189,30764190,30764191,30764192,30764193,30764194,30764195,30764196,30764197,30764198,30764199,30764200,30764201,30764202,30764203,30764204,30764205,30764206,30764207,30764208,30764209,30764210,30764211,30764212,30764213,30764214,30764215,30764216,30764217,30764218,30764219,30764220,30764221,30764222,30764223,30764224,30764225,30772094,30772095,30772096,30772097,30772098,30772099,30772100,30772101,30772102,30772103,30772104,30772105,30772106,30772107,30772108,30772109,30772110,30772111,30772112,30772113,30772114,30772226,30780094,30780095,30780096,30780097,30780098,30780099,30780100,30780101,30780102,30780103,30780104,30780105,30780106,30780107,30780108,30780109,30780110,30780111,30780112,30780113,30780114,30780226,30788094,30788095,30788096,30788097,30788098,30788099,30788100,30788101,30788102,30788103,30788104,30788105,30788106,30788107,30788108,30788109,30788110,30788111,30788112,30788113,30788114,30788226,30795261,30795262,30796094,30796095,30796096,30796097,30796098,30796099,30796100,30796101,30796102,30796103,30796104,30796105,30796106,30796107,30796108,30796109,30796110,30796111,30796112,30796113,30796114,30796226,30803261,30804094,30804095,30804096,30804097,30804098,30804099,30804100,30804101,30804102,30804103,30804104,30804105,30804106,30804107,30804108,30804109,30804110,30804111,30804112,30804113,30804114,30804226,30812094,30812095,30812096,30812097,30812098,30812099,30812100,30812101,30812102,30812103,30812104,30812105,30812106,30812107,30812108,30812109,30812110,30812111,30812112,30812113,30812114,30812226,30820094,30820095,30820096,30820097,30820098,30820099,30820100,30820101,30820102,30820103,30820104,30820105,30820106,30820107,30820108,30820109,30820110,30820111,30820112,30820113,30820114,30820226,30828094,30828095,30828096,30828097,30828098,30828099,30828100,30828101,30828102,30828103,30828104,30828105,30828106,30828107,30828108,30828109,30828110,30828111,30828112,30828113,30828114,30828226,30836094,30836095,30836096,30836097,30836098,30836099,30836100,30836101,30836102,30836103,30836104,30836105,30836106,30836107,30836108,30836109,30836110,30836111,30836112,30836113,30836114,30836226,30844094,30844095,30844096,30844097,30844098,30844099,30844100,30844101,30844102,30844103,30844104,30844105,30844106,30844107,30844108,30844109,30844110,30844111,30844112,30844113,30844114,30844226,30852094,30852095,30852096,30852097,30852098,30852099,30852100,30852101,30852102,30852103,30852104,30852105,30852106,30852107,30852108,30852109,30852110,30852111,30852112,30852113,30852114,30852226,30860094,30860095,30860096,30860097,30860098,30860099,30860100,30860101,30860102,30860103,30860104,30860105,30860106,30860107,30860108,30860109,30860110,30860111,30860112,30860113,30860114,30860226,30868094,30868095,30868096,30868097,30868098,30868099,30868100,30868101,30868102,30868103,30868104,30868105,30868106,30868107,30868108,30868109,30868110,30868111,30868112,30868113,30868114,30868226,30868818,30876094,30876095,30876096,30876097,30876098,30876099,30876100,30876101,30876102,30876103,30876104,30876105,30876106,30876107,30876108,30876109,30876110,30876111,30876112,30876113,30876114,30876226,30876817,30876818,30884094,30884095,30884096,30884097,30884098,30884099,30884100,30884101,30884102,30884103,30884104,30884105,30884106,30884107,30884108,30884109,30884110,30884111,30884112,30884113,30884114,30884226,30884818,30892094,30892095,30892096,30892097,30892098,30892099,30892100,30892101,30892102,30892103,30892104,30892105,30892106,30892107,30892108,30892109,30892110,30892111,30892112,30892113,30892114,30892226,30900094,30900095,30900096,30900097,30900098,30900099,30900100,30900101,30900102,30900103,30900104,30900105,30900106,30900107,30900108,30900109,30900110,30900111,30900112,30900113,30900114,30900226,30908094,30908095,30908096,30908097,30908098,30908099,30908100,30908101,30908102,30908103,30908104,30908105,30908106,30908107,30908108,30908109,30908110,30908111,30908112,30908113,30908114,30908226,30916094,30916095,30916096,30916097,30916098,30916099,30916100,30916101,30916102,30916103,30916104,30916105,30916106,30916107,30916108,30916109,30916110,30916111,30916112,30916113,30916114,30916226,30924094,30924095,30924096,30924097,30924098,30924099,30924100,30924101,30924102,30924103,30924104,30924105,30924106,30924107,30924108,30924109,30924110,30924111,30924112,30924113,30924114,30924226,30932094,30932095,30932096,30932097,30932098,30932099,30932100,30932101,30932102,30932103,30932104,30932105,30932106,30932107,30932108,30932109,30932110,30932111,30932112,30932113,30932114,30932226,30939252,30939253,30940094,30940095,30940096,30940097,30940098,30940099,30940100,30940101,30940102,30940103,30940104,30940105,30940106,30940107,30940108,30940109,30940110,30940111,30940112,30940113,30940114,30940226,30947252,30947253,30948094,30948095,30948096,30948097,30948098,30948099,30948100,30948101,30948102,30948103,30948104,30948105,30948106,30948107,30948108,30948109,30948110,30948111,30948112,30948113,30948114,30948226,30956094,30956095,30956096,30956097,30956098,30956099,30956100,30956101,30956102,30956103,30956104,30956105,30956106,30956107,30956108,30956109,30956110,30956111,30956112,30956113,30956114,30956226,30964094,30964095,30964096,30964097,30964098,30964099,30964100,30964101,30964102,30964103,30964104,30964105,30964106,30964107,30964108,30964109,30964110,30964111,30964112,30964113,30964114,30964226,30972094,30972095,30972096,30972097,30972098,30972099,30972100,30972101,30972102,30972103,30972104,30972105,30972106,30972107,30972108,30972109,30972110,30972111,30972112,30972113,30972114,30972226,30980094,30980095,30980096,30980097,30980098,30980099,30980100,30980101,30980102,30980103,30980104,30980105,30980106,30980107,30980108,30980109,30980110,30980111,30980112,30980113,30980114,30980226,30988094,30988095,30988096,30988097,30988098,30988099,30988100,30988101,30988102,30988103,30988104,30988105,30988106,30988107,30988108,30988109,30988110,30988111,30988112,30988113,30988114,30988226,30996094,30996095,30996096,30996097,30996098,30996099,30996100,30996101,30996102,30996103,30996104,30996105,30996106,30996107,30996108,30996109,30996110,30996111,30996112,30996113,30996114,30996226,31004094,31004095,31004096,31004097,31004098,31004099,31004100,31004101,31004102,31004103,31004104,31004105,31004106,31004107,31004108,31004109,31004110,31004111,31004112,31004113,31004114,31004226,31012094,31012095,31012096,31012097,31012098,31012099,31012100,31012101,31012102,31012103,31012104,31012105,31012106,31012107,31012108,31012109,31012110,31012111,31012112,31012113,31012114,31012226,31020094,31020095,31020096,31020097,31020098,31020099,31020100,31020101,31020102,31020103,31020104,31020105,31020106,31020107,31020108,31020109,31020110,31020111,31020112,31020113,31020114,31020226,31028094,31028095,31028096,31028097,31028098,31028099,31028100,31028101,31028102,31028103,31028104,31028105,31028106,31028107,31028108,31028109,31028110,31028111,31028112,31028113,31028114,31028226,31036094,31036095,31036096,31036097,31036098,31036099,31036100,31036101,31036102,31036103,31036104,31036105,31036106,31036107,31036108,31036109,31036110,31036111,31036112,31036113,31036114,31036226,31044094,31044095,31044096,31044097,31044098,31044099,31044100,31044101,31044102,31044103,31044104,31044105,31044106,31044107,31044108,31044109,31044110,31044111,31044112,31044113,31044114,31044226,31052094,31052095,31052096,31052097,31052098,31052099,31052100,31052101,31052102,31052103,31052104,31052105,31052106,31052107,31052108,31052109,31052110,31052111,31052112,31052113,31052114,31052226,31060094,31060095,31060096,31060097,31060098,31060099,31060100,31060101,31060102,31060103,31060104,31060105,31060106,31060107,31060108,31060109,31060110,31060111,31060112,31060113,31060114,31060226,31068094,31068095,31068096,31068097,31068098,31068099,31068100,31068101,31068102,31068103,31068104,31068105,31068106,31068107,31068108,31068109,31068110,31068111,31068112,31068113,31068114,31068226,31076094,31076095,31076096,31076097,31076098,31076099,31076100,31076101,31076102,31076103,31076104,31076105,31076106,31076107,31076108,31076109,31076110,31076111,31076112,31076113,31076114,31076226,31084094,31084095,31084096,31084097,31084098,31084099,31084100,31084101,31084102,31084103,31084104,31084105,31084106,31084107,31084108,31084109,31084110,31084111,31084112,31084113,31084114,31084226,31092094,31092095,31092096,31092097,31092098,31092099,31092100,31092101,31092102,31092103,31092104,31092105,31092106,31092107,31092108,31092109,31092110,31092111,31092112,31092113,31092114,31092226,31100094,31100095,31100096,31100097,31100098,31100099,31100100,31100101,31100102,31100103,31100104,31100105,31100106,31100107,31100108,31100109,31100110,31100111,31100112,31100113,31100114,31100226,31108094,31108095,31108096,31108097,31108098,31108099,31108100,31108101,31108102,31108103,31108104,31108105,31108106,31108107,31108108,31108109,31108110,31108111,31108112,31108113,31108114,31108226,31116094,31116095,31116096,31116097,31116098,31116099,31116100,31116101,31116102,31116103,31116104,31116105,31116106,31116107,31116108,31116109,31116110,31116111,31116112,31116113,31116114,31116226,31124094,31124095,31124096,31124097,31124098,31124099,31124100,31124101,31124102,31124103,31124104,31124105,31124106,31124107,31124108,31124109,31124110,31124111,31124112,31124113,31124114,31124226,31132094,31132095,31132096,31132097,31132098,31132099,31132100,31132101,31132102,31132103,31132104,31132105,31132106,31132107,31132108,31132109,31132110,31132111,31132112,31132113,31132114,31132226,31140094,31140095,31140096,31140097,31140098,31140099,31140100,31140101,31140102,31140103,31140104,31140105,31140106,31140107,31140108,31140109,31140110,31140111,31140112,31140113,31140114,31140226,31148094,31148095,31148096,31148097,31148098,31148099,31148100,31148101,31148102,31148103,31148104,31148105,31148106,31148107,31148108,31148109,31148110,31148111,31148112,31148113,31148114,31148226,31156094,31156095,31156096,31156097,31156098,31156099,31156100,31156101,31156102,31156103,31156104,31156105,31156106,31156107,31156108,31156109,31156110,31156111,31156112,31156113,31156114,31156226,31164094,31164095,31164096,31164097,31164098,31164099,31164100,31164101,31164102,31164103,31164104,31164105,31164106,31164107,31164108,31164109,31164110,31164111,31164112,31164113,31164114,31164226,31172094,31172095,31172096,31172097,31172098,31172099,31172100,31172101,31172102,31172103,31172104,31172105,31172106,31172107,31172108,31172109,31172110,31172111,31172112,31172113,31172114,31172226,31179232,31179233,31180094,31180095,31180096,31180097,31180098,31180099,31180100,31180101,31180102,31180103,31180104,31180105,31180106,31180107,31180108,31180109,31180110,31180111,31180112,31180113,31180114,31180226,31187232,31187233,31188094,31188095,31188096,31188097,31188098,31188099,31188100,31188101,31188102,31188103,31188104,31188105,31188106,31188107,31188108,31188109,31188110,31188111,31188112,31188113,31188114,31188226,31196095,31196098,31196101,31196104,31196107,31196110,31196113,31196226,31204118,31204119,31204120,31204121,31204122,31204226,31212218,31212219,31212220,31212221,31212222,31212223,31212226,31220226,31228226,31236226,31244226,31252226,31259167,31259168,31260226,31267168,31268226,31268462,31276226,31276461,31276462,31276463,31284226,31284462,31292118,31292119,31292120,31292121,31292122,31292226,31300226,31308095,31308098,31308101,31308104,31308107,31308110,31308113,31308226,31316094,31316095,31316096,31316097,31316098,31316099,31316100,31316101,31316102,31316103,31316104,31316105,31316106,31316107,31316108,31316109,31316110,31316111,31316112,31316113,31316114,31316226,31324094,31324095,31324096,31324097,31324098,31324099,31324100,31324101,31324102,31324103,31324104,31324105,31324106,31324107,31324108,31324109,31324110,31324111,31324112,31324113,31324114,31324226,31332094,31332095,31332096,31332097,31332098,31332099,31332100,31332101,31332102,31332103,31332104,31332105,31332106,31332107,31332108,31332109,31332110,31332111,31332112,31332113,31332114,31332226,31340094,31340095,31340096,31340097,31340098,31340099,31340100,31340101,31340102,31340103,31340104,31340105,31340106,31340107,31340108,31340109,31340110,31340111,31340112,31340113,31340114,31340226,31348094,31348095,31348096,31348097,31348098,31348099,31348100,31348101,31348102,31348103,31348104,31348105,31348106,31348107,31348108,31348109,31348110,31348111,31348112,31348113,31348114,31348226,31356094,31356095,31356096,31356097,31356098,31356099,31356100,31356101,31356102,31356103,31356104,31356105,31356106,31356107,31356108,31356109,31356110,31356111,31356112,31356113,31356114,31356226,31364094,31364095,31364096,31364097,31364098,31364099,31364100,31364101,31364102,31364103,31364104,31364105,31364106,31364107,31364108,31364109,31364110,31364111,31364112,31364113,31364114,31364226,31372094,31372095,31372096,31372097,31372098,31372099,31372100,31372101,31372102,31372103,31372104,31372105,31372106,31372107,31372108,31372109,31372110,31372111,31372112,31372113,31372114,31372226,31380094,31380095,31380096,31380097,31380098,31380099,31380100,31380101,31380102,31380103,31380104,31380105,31380106,31380107,31380108,31380109,31380110,31380111,31380112,31380113,31380114,31380226,31388094,31388095,31388096,31388097,31388098,31388099,31388100,31388101,31388102,31388103,31388104,31388105,31388106,31388107,31388108,31388109,31388110,31388111,31388112,31388113,31388114,31388226,31396094,31396095,31396096,31396097,31396098,31396099,31396100,31396101,31396102,31396103,31396104,31396105,31396106,31396107,31396108,31396109,31396110,31396111,31396112,31396113,31396114,31396226,31404094,31404095,31404096,31404097,31404098,31404099,31404100,31404101,31404102,31404103,31404104,31404105,31404106,31404107,31404108,31404109,31404110,31404111,31404112,31404113,31404114,31404226,31412094,31412095,31412096,31412097,31412098,31412099,31412100,31412101,31412102,31412103,31412104,31412105,31412106,31412107,31412108,31412109,31412110,31412111,31412112,31412113,31412114,31412226,31420094,31420095,31420096,31420097,31420098,31420099,31420100,31420101,31420102,31420103,31420104,31420105,31420106,31420107,31420108,31420109,31420110,31420111,31420112,31420113,31420114,31420226,31428094,31428095,31428096,31428097,31428098,31428099,31428100,31428101,31428102,31428103,31428104,31428105,31428106,31428107,31428108,31428109,31428110,31428111,31428112,31428113,31428114,31428226,31436094,31436095,31436096,31436097,31436098,31436099,31436100,31436101,31436102,31436103,31436104,31436105,31436106,31436107,31436108,31436109,31436110,31436111,31436112,31436113,31436114,31436226,31444094,31444095,31444096,31444097,31444098,31444099,31444100,31444101,31444102,31444103,31444104,31444105,31444106,31444107,31444108,31444109,31444110,31444111,31444112,31444113,31444114,31444226,31452094,31452095,31452096,31452097,31452098,31452099,31452100,31452101,31452102,31452103,31452104,31452105,31452106,31452107,31452108,31452109,31452110,31452111,31452112,31452113,31452114,31452226,31460094,31460095,31460096,31460097,31460098,31460099,31460100,31460101,31460102,31460103,31460104,31460105,31460106,31460107,31460108,31460109,31460110,31460111,31460112,31460113,31460114,31460226,31468094,31468095,31468096,31468097,31468098,31468099,31468100,31468101,31468102,31468103,31468104,31468105,31468106,31468107,31468108,31468109,31468110,31468111,31468112,31468113,31468114,31468226,31476094,31476095,31476096,31476097,31476098,31476099,31476100,31476101,31476102,31476103,31476104,31476105,31476106,31476107,31476108,31476109,31476110,31476111,31476112,31476113,31476114,31476226,31484094,31484095,31484096,31484097,31484098,31484099,31484100,31484101,31484102,31484103,31484104,31484105,31484106,31484107,31484108,31484109,31484110,31484111,31484112,31484113,31484114,31484226,31492094,31492095,31492096,31492097,31492098,31492099,31492100,31492101,31492102,31492103,31492104,31492105,31492106,31492107,31492108,31492109,31492110,31492111,31492112,31492113,31492114,31492226,31500094,31500095,31500096,31500097,31500098,31500099,31500100,31500101,31500102,31500103,31500104,31500105,31500106,31500107,31500108,31500109,31500110,31500111,31500112,31500113,31500114,31500226,31508094,31508095,31508096,31508097,31508098,31508099,31508100,31508101,31508102,31508103,31508104,31508105,31508106,31508107,31508108,31508109,31508110,31508111,31508112,31508113,31508114,31508218,31508219,31508220,31508221,31508222,31508223,31508226,31516094,31516095,31516096,31516097,31516098,31516099,31516100,31516101,31516102,31516103,31516104,31516105,31516106,31516107,31516108,31516109,31516110,31516111,31516112,31516113,31516114,31516226,31524094,31524095,31524096,31524097,31524098,31524099,31524100,31524101,31524102,31524103,31524104,31524105,31524106,31524107,31524108,31524109,31524110,31524111,31524112,31524113,31524114,31524226,31532094,31532095,31532096,31532097,31532098,31532099,31532100,31532101,31532102,31532103,31532104,31532105,31532106,31532107,31532108,31532109,31532110,31532111,31532112,31532113,31532114,31532226,31540094,31540095,31540096,31540097,31540098,31540099,31540100,31540101,31540102,31540103,31540104,31540105,31540106,31540107,31540108,31540109,31540110,31540111,31540112,31540113,31540114,31540226,31548094,31548095,31548096,31548097,31548098,31548099,31548100,31548101,31548102,31548103,31548104,31548105,31548106,31548107,31548108,31548109,31548110,31548111,31548112,31548113,31548114,31548226,31556094,31556095,31556096,31556097,31556098,31556099,31556100,31556101,31556102,31556103,31556104,31556105,31556106,31556107,31556108,31556109,31556110,31556111,31556112,31556113,31556114,31556226,31564094,31564095,31564096,31564097,31564098,31564099,31564100,31564101,31564102,31564103,31564104,31564105,31564106,31564107,31564108,31564109,31564110,31564111,31564112,31564113,31564114,31564226,31572094,31572095,31572096,31572097,31572098,31572099,31572100,31572101,31572102,31572103,31572104,31572105,31572106,31572107,31572108,31572109,31572110,31572111,31572112,31572113,31572114,31572226,31580094,31580095,31580096,31580097,31580098,31580099,31580100,31580101,31580102,31580103,31580104,31580105,31580106,31580107,31580108,31580109,31580110,31580111,31580112,31580113,31580114,31580226,31588094,31588095,31588096,31588097,31588098,31588099,31588100,31588101,31588102,31588103,31588104,31588105,31588106,31588107,31588108,31588109,31588110,31588111,31588112,31588113,31588114,31588226,31596094,31596095,31596096,31596097,31596098,31596099,31596100,31596101,31596102,31596103,31596104,31596105,31596106,31596107,31596108,31596109,31596110,31596111,31596112,31596113,31596114,31596226,31604094,31604095,31604096,31604097,31604098,31604099,31604100,31604101,31604102,31604103,31604104,31604105,31604106,31604107,31604108,31604109,31604110,31604111,31604112,31604113,31604114,31604226,31612094,31612095,31612096,31612097,31612098,31612099,31612100,31612101,31612102,31612103,31612104,31612105,31612106,31612107,31612108,31612109,31612110,31612111,31612112,31612113,31612114,31612226,31620094,31620095,31620096,31620097,31620098,31620099,31620100,31620101,31620102,31620103,31620104,31620105,31620106,31620107,31620108,31620109,31620110,31620111,31620112,31620113,31620114,31620226,31628094,31628095,31628096,31628097,31628098,31628099,31628100,31628101,31628102,31628103,31628104,31628105,31628106,31628107,31628108,31628109,31628110,31628111,31628112,31628113,31628114,31628226,31636094,31636095,31636096,31636097,31636098,31636099,31636100,31636101,31636102,31636103,31636104,31636105,31636106,31636107,31636108,31636109,31636110,31636111,31636112,31636113,31636114,31636226,31644094,31644095,31644096,31644097,31644098,31644099,31644100,31644101,31644102,31644103,31644104,31644105,31644106,31644107,31644108,31644109,31644110,31644111,31644112,31644113,31644114,31644226,31652094,31652095,31652096,31652097,31652098,31652099,31652100,31652101,31652102,31652103,31652104,31652105,31652106,31652107,31652108,31652109,31652110,31652111,31652112,31652113,31652114,31652226,31660094,31660095,31660096,31660097,31660098,31660099,31660100,31660101,31660102,31660103,31660104,31660105,31660106,31660107,31660108,31660109,31660110,31660111,31660112,31660113,31660114,31660226,31668094,31668095,31668096,31668097,31668098,31668099,31668100,31668101,31668102,31668103,31668104,31668105,31668106,31668107,31668108,31668109,31668110,31668111,31668112,31668113,31668114,31668226,31676094,31676095,31676096,31676097,31676098,31676099,31676100,31676101,31676102,31676103,31676104,31676105,31676106,31676107,31676108,31676109,31676110,31676111,31676112,31676113,31676114,31676226,31676278,31684094,31684095,31684096,31684097,31684098,31684099,31684100,31684101,31684102,31684103,31684104,31684105,31684106,31684107,31684108,31684109,31684110,31684111,31684112,31684113,31684114,31684221,31684222,31684223,31684224,31684225,31684278,31684279,31692094,31692095,31692096,31692097,31692098,31692099,31692100,31692101,31692102,31692103,31692104,31692105,31692106,31692107,31692108,31692109,31692110,31692111,31692112,31692113,31692114,31692278,31700094,31700095,31700096,31700097,31700098,31700099,31700100,31700101,31700102,31700103,31700104,31700105,31700106,31700107,31700108,31700109,31700110,31700111,31700112,31700113,31700114,31708094,31708095,31708096,31708097,31708098,31708099,31708100,31708101,31708102,31708103,31708104,31708105,31708106,31708107,31708108,31708109,31708110,31708111,31708112,31708113,31708114,31716094,31716095,31716096,31716097,31716098,31716099,31716100,31716101,31716102,31716103,31716104,31716105,31716106,31716107,31716108,31716109,31716110,31716111,31716112,31716113,31716114,31724094,31724095,31724096,31724097,31724098,31724099,31724100,31724101,31724102,31724103,31724104,31724105,31724106,31724107,31724108,31724109,31724110,31724111,31724112,31724113,31724114,31732094,31732095,31732096,31732097,31732098,31732099,31732100,31732101,31732102,31732103,31732104,31732105,31732106,31732107,31732108,31732109,31732110,31732111,31732112,31732113,31732114,31740094,31740095,31740096,31740097,31740098,31740099,31740100,31740101,31740102,31740103,31740104,31740105,31740106,31740107,31740108,31740109,31740110,31740111,31740112,31740113,31740114,31748094,31748095,31748096,31748097,31748098,31748099,31748100,31748101,31748102,31748103,31748104,31748105,31748106,31748107,31748108,31748109,31748110,31748111,31748112,31748113,31748114,31756094,31756095,31756096,31756097,31756098,31756099,31756100,31756101,31756102,31756103,31756104,31756105,31756106,31756107,31756108,31756109,31756110,31756111,31756112,31756113,31756114,31764094,31764095,31764096,31764097,31764098,31764099,31764100,31764101,31764102,31764103,31764104,31764105,31764106,31764107,31764108,31764109,31764110,31764111,31764112,31764113,31764114,31772094,31772095,31772096,31772097,31772098,31772099,31772100,31772101,31772102,31772103,31772104,31772105,31772106,31772107,31772108,31772109,31772110,31772111,31772112,31772113,31772114,31772221,31772222,31772223,31772224,31772225,31772226,31780094,31780095,31780096,31780097,31780098,31780099,31780100,31780101,31780102,31780103,31780104,31780105,31780106,31780107,31780108,31780109,31780110,31780111,31780112,31780113,31780114,31780226,31788094,31788095,31788096,31788097,31788098,31788099,31788100,31788101,31788102,31788103,31788104,31788105,31788106,31788107,31788108,31788109,31788110,31788111,31788112,31788113,31788114,31788226,31796094,31796095,31796096,31796097,31796098,31796099,31796100,31796101,31796102,31796103,31796104,31796105,31796106,31796107,31796108,31796109,31796110,31796111,31796112,31796113,31796114,31796226,31804094,31804095,31804096,31804097,31804098,31804099,31804100,31804101,31804102,31804103,31804104,31804105,31804106,31804107,31804108,31804109,31804110,31804111,31804112,31804113,31804114,31804226,31812094,31812095,31812096,31812097,31812098,31812099,31812100,31812101,31812102,31812103,31812104,31812105,31812106,31812107,31812108,31812109,31812110,31812111,31812112,31812113,31812114,31812226,31820094,31820095,31820096,31820097,31820098,31820099,31820100,31820101,31820102,31820103,31820104,31820105,31820106,31820107,31820108,31820109,31820110,31820111,31820112,31820113,31820114,31820226,31827281,31827282,31828094,31828095,31828096,31828097,31828098,31828099,31828100,31828101,31828102,31828103,31828104,31828105,31828106,31828107,31828108,31828109,31828110,31828111,31828112,31828113,31828114,31828226,31835281,31835282,31836094,31836095,31836096,31836097,31836098,31836099,31836100,31836101,31836102,31836103,31836104,31836105,31836106,31836107,31836108,31836109,31836110,31836111,31836112,31836113,31836114,31836226,31844094,31844095,31844096,31844097,31844098,31844099,31844100,31844101,31844102,31844103,31844104,31844105,31844106,31844107,31844108,31844109,31844110,31844111,31844112,31844113,31844114,31844226,31852094,31852095,31852096,31852097,31852098,31852099,31852100,31852101,31852102,31852103,31852104,31852105,31852106,31852107,31852108,31852109,31852110,31852111,31852112,31852113,31852114,31852226,31860094,31860095,31860096,31860097,31860098,31860099,31860100,31860101,31860102,31860103,31860104,31860105,31860106,31860107,31860108,31860109,31860110,31860111,31860112,31860113,31860114,31860226,31868094,31868095,31868096,31868097,31868098,31868099,31868100,31868101,31868102,31868103,31868104,31868105,31868106,31868107,31868108,31868109,31868110,31868111,31868112,31868113,31868114,31868226,31876094,31876095,31876096,31876097,31876098,31876099,31876100,31876101,31876102,31876103,31876104,31876105,31876106,31876107,31876108,31876109,31876110,31876111,31876112,31876113,31876114,31876226,31884094,31884095,31884096,31884097,31884098,31884099,31884100,31884101,31884102,31884103,31884104,31884105,31884106,31884107,31884108,31884109,31884110,31884111,31884112,31884113,31884114,31884226,31892094,31892095,31892096,31892097,31892098,31892099,31892100,31892101,31892102,31892103,31892104,31892105,31892106,31892107,31892108,31892109,31892110,31892111,31892112,31892113,31892114,31892226,31900094,31900095,31900096,31900097,31900098,31900099,31900100,31900101,31900102,31900103,31900104,31900105,31900106,31900107,31900108,31900109,31900110,31900111,31900112,31900113,31900114,31900226,31908094,31908095,31908096,31908097,31908098,31908099,31908100,31908101,31908102,31908103,31908104,31908105,31908106,31908107,31908108,31908109,31908110,31908111,31908112,31908113,31908114,31908226,31908327,31908328,31916094,31916095,31916096,31916097,31916098,31916099,31916100,31916101,31916102,31916103,31916104,31916105,31916106,31916107,31916108,31916109,31916110,31916111,31916112,31916113,31916114,31916226,31916331,31916332,31924094,31924095,31924096,31924097,31924098,31924099,31924100,31924101,31924102,31924103,31924104,31924105,31924106,31924107,31924108,31924109,31924110,31924111,31924112,31924113,31924114,31924226,31924334,31924335,31932094,31932095,31932096,31932097,31932098,31932099,31932100,31932101,31932102,31932103,31932104,31932105,31932106,31932107,31932108,31932109,31932110,31932111,31932112,31932113,31932114,31932226,31932337,31932338,31940094,31940095,31940096,31940097,31940098,31940099,31940100,31940101,31940102,31940103,31940104,31940105,31940106,31940107,31940108,31940109,31940110,31940111,31940112,31940113,31940114,31940226,31940239,31940340,31948094,31948095,31948096,31948097,31948098,31948099,31948100,31948101,31948102,31948103,31948104,31948105,31948106,31948107,31948108,31948109,31948110,31948111,31948112,31948113,31948114,31948226,31948342,31956118,31956119,31956120,31956121,31956122,31956226,31956341,31956344,31956345,31963284,31963285,31964226,31964343,31964346,31971284,31971285,31972226,31972345,31972348,31980226,31980347,31980350,31988226,31988349,31988352,31996226,31996353,31996354,32004226,32004355,32012226,32012354,32012356,32012357,32020226,32020358,32028226,32028357,32028359,32036226,32036323,32036324,32036361,32044118,32044119,32044120,32044121,32044122,32044226,32044239,32044362,32052094,32052095,32052096,32052097,32052098,32052099,32052100,32052101,32052102,32052103,32052104,32052105,32052106,32052107,32052108,32052109,32052110,32052111,32052112,32052113,32052114,32052226,32052361,32052363,32060094,32060095,32060096,32060097,32060098,32060099,32060100,32060101,32060102,32060103,32060104,32060105,32060106,32060107,32060108,32060109,32060110,32060111,32060112,32060113,32060114,32060226,32060333,32060362,32060364,32068094,32068095,32068096,32068097,32068098,32068099,32068100,32068101,32068102,32068103,32068104,32068105,32068106,32068107,32068108,32068109,32068110,32068111,32068112,32068113,32068114,32068226,32068333,32068334,32068335,32076094,32076095,32076096,32076097,32076098,32076099,32076100,32076101,32076102,32076103,32076104,32076105,32076106,32076107,32076108,32076109,32076110,32076111,32076112,32076113,32076114,32076226,32076333,32076334,32076335,32076336,32076337,32084094,32084095,32084096,32084097,32084098,32084099,32084100,32084101,32084102,32084103,32084104,32084105,32084106,32084107,32084108,32084109,32084110,32084111,32084112,32084113,32084114,32084226,32084336,32084337,32084368,32092094,32092095,32092096,32092097,32092098,32092099,32092100,32092101,32092102,32092103,32092104,32092105,32092106,32092107,32092108,32092109,32092110,32092111,32092112,32092113,32092114,32092226,32092367,32092369,32100094,32100095,32100096,32100097,32100098,32100099,32100100,32100101,32100102,32100103,32100104,32100105,32100106,32100107,32100108,32100109,32100110,32100111,32100112,32100113,32100114,32100226,32100368,32100370,32108094,32108095,32108096,32108097,32108098,32108099,32108100,32108101,32108102,32108103,32108104,32108105,32108106,32108107,32108108,32108109,32108110,32108111,32108112,32108113,32108114,32108226,32108369,32108371,32108623,32108624,32116094,32116095,32116096,32116097,32116098,32116099,32116100,32116101,32116102,32116103,32116104,32116105,32116106,32116107,32116108,32116109,32116110,32116111,32116112,32116113,32116114,32116226,32116346,32116370,32116624,32124094,32124095,32124096,32124097,32124098,32124099,32124100,32124101,32124102,32124103,32124104,32124105,32124106,32124107,32124108,32124109,32124110,32124111,32124112,32124113,32124114,32124226,32132094,32132095,32132096,32132097,32132098,32132099,32132100,32132101,32132102,32132103,32132104,32132105,32132106,32132107,32132108,32132109,32132110,32132111,32132112,32132113,32132114,32132226,32140094,32140095,32140096,32140097,32140098,32140099,32140100,32140101,32140102,32140103,32140104,32140105,32140106,32140107,32140108,32140109,32140110,32140111,32140112,32140113,32140114,32140226,32140374,32148094,32148095,32148096,32148097,32148098,32148099,32148100,32148101,32148102,32148103,32148104,32148105,32148106,32148107,32148108,32148109,32148110,32148111,32148112,32148113,32148114,32148226,32148375,32156094,32156095,32156096,32156097,32156098,32156099,32156100,32156101,32156102,32156103,32156104,32156105,32156106,32156107,32156108,32156109,32156110,32156111,32156112,32156113,32156114,32156226,32156374,32156376,32164094,32164095,32164096,32164097,32164098,32164099,32164100,32164101,32164102,32164103,32164104,32164105,32164106,32164107,32164108,32164109,32164110,32164111,32164112,32164113,32164114,32164226,32164354,32164375,32164377,32172094,32172095,32172096,32172097,32172098,32172099,32172100,32172101,32172102,32172103,32172104,32172105,32172106,32172107,32172108,32172109,32172110,32172111,32172112,32172113,32172114,32172226,32172353,32172354,32172355,32180094,32180095,32180096,32180097,32180098,32180099,32180100,32180101,32180102,32180103,32180104,32180105,32180106,32180107,32180108,32180109,32180110,32180111,32180112,32180113,32180114,32180226,32180354,32180355,32180356,32180378,32188094,32188095,32188096,32188097,32188098,32188099,32188100,32188101,32188102,32188103,32188104,32188105,32188106,32188107,32188108,32188109,32188110,32188111,32188112,32188113,32188114,32188226,32188355,32188356,32188357,32188379,32196094,32196095,32196096,32196097,32196098,32196099,32196100,32196101,32196102,32196103,32196104,32196105,32196106,32196107,32196108,32196109,32196110,32196111,32196112,32196113,32196114,32196226,32196356,32196378,32196380,32204094,32204095,32204096,32204097,32204098,32204099,32204100,32204101,32204102,32204103,32204104,32204105,32204106,32204107,32204108,32204109,32204110,32204111,32204112,32204113,32204114,32204226,32204380,32212094,32212095,32212096,32212097,32212098,32212099,32212100,32212101,32212102,32212103,32212104,32212105,32212106,32212107,32212108,32212109,32212110,32212111,32212112,32212113,32212114,32212226,32212381,32220094,32220095,32220096,32220097,32220098,32220099,32220100,32220101,32220102,32220103,32220104,32220105,32220106,32220107,32220108,32220109,32220110,32220111,32220112,32220113,32220114,32220226,32220380,32220382,32228094,32228095,32228096,32228097,32228098,32228099,32228100,32228101,32228102,32228103,32228104,32228105,32228106,32228107,32228108,32228109,32228110,32228111,32228112,32228113,32228114,32228226,32228382,32236094,32236095,32236096,32236097,32236098,32236099,32236100,32236101,32236102,32236103,32236104,32236105,32236106,32236107,32236108,32236109,32236110,32236111,32236112,32236113,32236114,32236226,32236383,32244094,32244095,32244096,32244097,32244098,32244099,32244100,32244101,32244102,32244103,32244104,32244105,32244106,32244107,32244108,32244109,32244110,32244111,32244112,32244113,32244114,32244226,32252094,32252095,32252096,32252097,32252098,32252099,32252100,32252101,32252102,32252103,32252104,32252105,32252106,32252107,32252108,32252109,32252110,32252111,32252112,32252113,32252114,32252226,32252384,32260094,32260095,32260096,32260097,32260098,32260099,32260100,32260101,32260102,32260103,32260104,32260105,32260106,32260107,32260108,32260109,32260110,32260111,32260112,32260113,32260114,32260226,32260383,32268094,32268095,32268096,32268097,32268098,32268099,32268100,32268101,32268102,32268103,32268104,32268105,32268106,32268107,32268108,32268109,32268110,32268111,32268112,32268113,32268114,32268226,32268385,32276094,32276095,32276096,32276097,32276098,32276099,32276100,32276101,32276102,32276103,32276104,32276105,32276106,32276107,32276108,32276109,32276110,32276111,32276112,32276113,32276114,32276226,32276384,32284094,32284095,32284096,32284097,32284098,32284099,32284100,32284101,32284102,32284103,32284104,32284105,32284106,32284107,32284108,32284109,32284110,32284111,32284112,32284113,32284114,32284226,32284386,32292094,32292095,32292096,32292097,32292098,32292099,32292100,32292101,32292102,32292103,32292104,32292105,32292106,32292107,32292108,32292109,32292110,32292111,32292112,32292113,32292114,32292226,32292385,32292387,32300094,32300095,32300096,32300097,32300098,32300099,32300100,32300101,32300102,32300103,32300104,32300105,32300106,32300107,32300108,32300109,32300110,32300111,32300112,32300113,32300114,32300226,32300387,32308094,32308095,32308096,32308097,32308098,32308099,32308100,32308101,32308102,32308103,32308104,32308105,32308106,32308107,32308108,32308109,32308110,32308111,32308112,32308113,32308114,32308226,32308386,32316094,32316095,32316096,32316097,32316098,32316099,32316100,32316101,32316102,32316103,32316104,32316105,32316106,32316107,32316108,32316109,32316110,32316111,32316112,32316113,32316114,32316226,32316368,32316369,32316388,32324094,32324095,32324096,32324097,32324098,32324099,32324100,32324101,32324102,32324103,32324104,32324105,32324106,32324107,32324108,32324109,32324110,32324111,32324112,32324113,32324114,32324226,32324368,32324369,32324370,32324387,32332094,32332095,32332096,32332097,32332098,32332099,32332100,32332101,32332102,32332103,32332104,32332105,32332106,32332107,32332108,32332109,32332110,32332111,32332112,32332113,32332114,32332226,32332369,32332370,32332389,32340094,32340095,32340096,32340097,32340098,32340099,32340100,32340101,32340102,32340103,32340104,32340105,32340106,32340107,32340108,32340109,32340110,32340111,32340112,32340113,32340114,32340226,32340370,32340371,32348094,32348095,32348096,32348097,32348098,32348099,32348100,32348101,32348102,32348103,32348104,32348105,32348106,32348107,32348108,32348109,32348110,32348111,32348112,32348113,32348114,32348218,32348219,32348220,32348226,32348370,32348371,32348390,32356094,32356095,32356096,32356097,32356098,32356099,32356100,32356101,32356102,32356103,32356104,32356105,32356106,32356107,32356108,32356109,32356110,32356111,32356112,32356113,32356114,32356226,32356390,32364094,32364095,32364096,32364097,32364098,32364099,32364100,32364101,32364102,32364103,32364104,32364105,32364106,32364107,32364108,32364109,32364110,32364111,32364112,32364113,32364114,32364226,32372094,32372095,32372096,32372097,32372098,32372099,32372100,32372101,32372102,32372103,32372104,32372105,32372106,32372107,32372108,32372109,32372110,32372111,32372112,32372113,32372114,32372226,32372391,32380094,32380095,32380096,32380097,32380098,32380099,32380100,32380101,32380102,32380103,32380104,32380105,32380106,32380107,32380108,32380109,32380110,32380111,32380112,32380113,32380114,32380226,32380391,32388094,32388095,32388096,32388097,32388098,32388099,32388100,32388101,32388102,32388103,32388104,32388105,32388106,32388107,32388108,32388109,32388110,32388111,32388112,32388113,32388114,32388226,32396094,32396095,32396096,32396097,32396098,32396099,32396100,32396101,32396102,32396103,32396104,32396105,32396106,32396107,32396108,32396109,32396110,32396111,32396112,32396113,32396114,32396226,32396392,32404094,32404095,32404096,32404097,32404098,32404099,32404100,32404101,32404102,32404103,32404104,32404105,32404106,32404107,32404108,32404109,32404110,32404111,32404112,32404113,32404114,32404226,32404392,32412094,32412095,32412096,32412097,32412098,32412099,32412100,32412101,32412102,32412103,32412104,32412105,32412106,32412107,32412108,32412109,32412110,32412111,32412112,32412113,32412114,32412226,32412375,32420094,32420095,32420096,32420097,32420098,32420099,32420100,32420101,32420102,32420103,32420104,32420105,32420106,32420107,32420108,32420109,32420110,32420111,32420112,32420113,32420114,32420226,32428094,32428095,32428096,32428097,32428098,32428099,32428100,32428101,32428102,32428103,32428104,32428105,32428106,32428107,32428108,32428109,32428110,32428111,32428112,32428113,32428114,32428226,32428393,32428510,32428511,32436094,32436095,32436096,32436097,32436098,32436099,32436100,32436101,32436102,32436103,32436104,32436105,32436106,32436107,32436108,32436109,32436110,32436111,32436112,32436113,32436114,32436226,32436393,32436510,32436511,32444094,32444095,32444096,32444097,32444098,32444099,32444100,32444101,32444102,32444103,32444104,32444105,32444106,32444107,32444108,32444109,32444110,32444111,32444112,32444113,32444114,32444226,32452094,32452095,32452096,32452097,32452098,32452099,32452100,32452101,32452102,32452103,32452104,32452105,32452106,32452107,32452108,32452109,32452110,32452111,32452112,32452113,32452114,32452226,32460094,32460095,32460096,32460097,32460098,32460099,32460100,32460101,32460102,32460103,32460104,32460105,32460106,32460107,32460108,32460109,32460110,32460111,32460112,32460113,32460114,32460226,32460394,32468094,32468095,32468096,32468097,32468098,32468099,32468100,32468101,32468102,32468103,32468104,32468105,32468106,32468107,32468108,32468109,32468110,32468111,32468112,32468113,32468114,32468226,32468394,32476094,32476095,32476096,32476097,32476098,32476099,32476100,32476101,32476102,32476103,32476104,32476105,32476106,32476107,32476108,32476109,32476110,32476111,32476112,32476113,32476114,32476226,32476394,32484094,32484095,32484096,32484097,32484098,32484099,32484100,32484101,32484102,32484103,32484104,32484105,32484106,32484107,32484108,32484109,32484110,32484111,32484112,32484113,32484114,32484226,32492094,32492095,32492096,32492097,32492098,32492099,32492100,32492101,32492102,32492103,32492104,32492105,32492106,32492107,32492108,32492109,32492110,32492111,32492112,32492113,32492114,32492226,32492377,32492378,32492405,32492406,32492407,32500094,32500095,32500096,32500097,32500098,32500099,32500100,32500101,32500102,32500103,32500104,32500105,32500106,32500107,32500108,32500109,32500110,32500111,32500112,32500113,32500114,32500226,32500377,32500378,32500395,32500405,32500406,32500407,32508094,32508095,32508096,32508097,32508098,32508099,32508100,32508101,32508102,32508103,32508104,32508105,32508106,32508107,32508108,32508109,32508110,32508111,32508112,32508113,32508114,32508226,32508377,32508378,32508395,32508405,32508406,32508407,32516094,32516095,32516096,32516097,32516098,32516099,32516100,32516101,32516102,32516103,32516104,32516105,32516106,32516107,32516108,32516109,32516110,32516111,32516112,32516113,32516114,32516226,32516377,32516378,32516395,32524094,32524095,32524096,32524097,32524098,32524099,32524100,32524101,32524102,32524103,32524104,32524105,32524106,32524107,32524108,32524109,32524110,32524111,32524112,32524113,32524114,32524226,32524377,32524378,32524395,32532094,32532095,32532096,32532097,32532098,32532099,32532100,32532101,32532102,32532103,32532104,32532105,32532106,32532107,32532108,32532109,32532110,32532111,32532112,32532113,32532114,32532226,32532377,32532378,32532395,32540094,32540095,32540096,32540097,32540098,32540099,32540100,32540101,32540102,32540103,32540104,32540105,32540106,32540107,32540108,32540109,32540110,32540111,32540112,32540113,32540114,32540226,32548094,32548095,32548096,32548097,32548098,32548099,32548100,32548101,32548102,32548103,32548104,32548105,32548106,32548107,32548108,32548109,32548110,32548111,32548112,32548113,32548114,32548226,32556094,32556095,32556096,32556097,32556098,32556099,32556100,32556101,32556102,32556103,32556104,32556105,32556106,32556107,32556108,32556109,32556110,32556111,32556112,32556113,32556114,32556226,32564094,32564095,32564096,32564097,32564098,32564099,32564100,32564101,32564102,32564103,32564104,32564105,32564106,32564107,32564108,32564109,32564110,32564111,32564112,32564113,32564114,32564226,32572094,32572095,32572096,32572097,32572098,32572099,32572100,32572101,32572102,32572103,32572104,32572105,32572106,32572107,32572108,32572109,32572110,32572111,32572112,32572113,32572114,32572226,32580094,32580095,32580096,32580097,32580098,32580099,32580100,32580101,32580102,32580103,32580104,32580105,32580106,32580107,32580108,32580109,32580110,32580111,32580112,32580113,32580114,32580226,32580396,32588094,32588095,32588096,32588097,32588098,32588099,32588100,32588101,32588102,32588103,32588104,32588105,32588106,32588107,32588108,32588109,32588110,32588111,32588112,32588113,32588114,32588226,32588396,32596094,32596095,32596096,32596097,32596098,32596099,32596100,32596101,32596102,32596103,32596104,32596105,32596106,32596107,32596108,32596109,32596110,32596111,32596112,32596113,32596114,32596226,32596396,32604094,32604095,32604096,32604097,32604098,32604099,32604100,32604101,32604102,32604103,32604104,32604105,32604106,32604107,32604108,32604109,32604110,32604111,32604112,32604113,32604114,32604226,32604379,32604396,32612094,32612095,32612096,32612097,32612098,32612099,32612100,32612101,32612102,32612103,32612104,32612105,32612106,32612107,32612108,32612109,32612110,32612111,32612112,32612113,32612114,32612218,32612219,32612220,32612226,32612379,32612396,32620094,32620095,32620096,32620097,32620098,32620099,32620100,32620101,32620102,32620103,32620104,32620105,32620106,32620107,32620108,32620109,32620110,32620111,32620112,32620113,32620114,32620226,32620396,32628094,32628095,32628096,32628097,32628098,32628099,32628100,32628101,32628102,32628103,32628104,32628105,32628106,32628107,32628108,32628109,32628110,32628111,32628112,32628113,32628114,32628226,32628396,32636094,32636095,32636096,32636097,32636098,32636099,32636100,32636101,32636102,32636103,32636104,32636105,32636106,32636107,32636108,32636109,32636110,32636111,32636112,32636113,32636114,32636226,32636396,32644094,32644095,32644096,32644097,32644098,32644099,32644100,32644101,32644102,32644103,32644104,32644105,32644106,32644107,32644108,32644109,32644110,32644111,32644112,32644113,32644114,32644226,32652094,32652095,32652096,32652097,32652098,32652099,32652100,32652101,32652102,32652103,32652104,32652105,32652106,32652107,32652108,32652109,32652110,32652111,32652112,32652113,32652114,32652226,32660094,32660095,32660096,32660097,32660098,32660099,32660100,32660101,32660102,32660103,32660104,32660105,32660106,32660107,32660108,32660109,32660110,32660111,32660112,32660113,32660114,32660226,32668094,32668095,32668096,32668097,32668098,32668099,32668100,32668101,32668102,32668103,32668104,32668105,32668106,32668107,32668108,32668109,32668110,32668111,32668112,32668113,32668114,32668226,32676094,32676095,32676096,32676097,32676098,32676099,32676100,32676101,32676102,32676103,32676104,32676105,32676106,32676107,32676108,32676109,32676110,32676111,32676112,32676113,32676114,32676226,32684094,32684095,32684096,32684097,32684098,32684099,32684100,32684101,32684102,32684103,32684104,32684105,32684106,32684107,32684108,32684109,32684110,32684111,32684112,32684113,32684114,32684226,32684377,32684378,32684395,32692095,32692098,32692101,32692104,32692107,32692110,32692113,32692226,32692377,32692378,32692395,32700226,32700377,32700378,32700395,32708118,32708119,32708120,32708121,32708122,32708226,32708377,32708378,32708395,32708405,32708406,32708407,32716226,32716377,32716378,32716395,32716405,32716406,32716407,32724226,32724377,32724378,32724405,32724406,32724407,32732226,32740226,32740394,32748226,32748394,32756226,32756394,32764226,32772226,32780226,32780393,32788226,32788393,32796118,32796119,32796120,32796121,32796122,32796226,32804095,32804098,32804101,32804104,32804107,32804110,32804113,32804221,32804222,32804223,32804224,32804225,32804226,32804375,32812094,32812095,32812096,32812097,32812098,32812099,32812100,32812101,32812102,32812103,32812104,32812105,32812106,32812107,32812108,32812109,32812110,32812111,32812112,32812113,32812114,32812392,32820094,32820095,32820096,32820097,32820098,32820099,32820100,32820101,32820102,32820103,32820104,32820105,32820106,32820107,32820108,32820109,32820110,32820111,32820112,32820113,32820114,32820392,32828094,32828095,32828096,32828097,32828098,32828099,32828100,32828101,32828102,32828103,32828104,32828105,32828106,32828107,32828108,32828109,32828110,32828111,32828112,32828113,32828114,32836094,32836095,32836096,32836097,32836098,32836099,32836100,32836101,32836102,32836103,32836104,32836105,32836106,32836107,32836108,32836109,32836110,32836111,32836112,32836113,32836114,32836391,32844094,32844095,32844096,32844097,32844098,32844099,32844100,32844101,32844102,32844103,32844104,32844105,32844106,32844107,32844108,32844109,32844110,32844111,32844112,32844113,32844114,32844391,32852094,32852095,32852096,32852097,32852098,32852099,32852100,32852101,32852102,32852103,32852104,32852105,32852106,32852107,32852108,32852109,32852110,32852111,32852112,32852113,32852114,32860094,32860095,32860096,32860097,32860098,32860099,32860100,32860101,32860102,32860103,32860104,32860105,32860106,32860107,32860108,32860109,32860110,32860111,32860112,32860113,32860114,32860390,32868094,32868095,32868096,32868097,32868098,32868099,32868100,32868101,32868102,32868103,32868104,32868105,32868106,32868107,32868108,32868109,32868110,32868111,32868112,32868113,32868114,32868370,32868371,32868390,32876094,32876095,32876096,32876097,32876098,32876099,32876100,32876101,32876102,32876103,32876104,32876105,32876106,32876107,32876108,32876109,32876110,32876111,32876112,32876113,32876114,32876370,32876371,32884094,32884095,32884096,32884097,32884098,32884099,32884100,32884101,32884102,32884103,32884104,32884105,32884106,32884107,32884108,32884109,32884110,32884111,32884112,32884113,32884114,32884369,32884370,32884389,32892094,32892095,32892096,32892097,32892098,32892099,32892100,32892101,32892102,32892103,32892104,32892105,32892106,32892107,32892108,32892109,32892110,32892111,32892112,32892113,32892114,32892221,32892222,32892223,32892224,32892225,32892226,32892368,32892369,32892370,32892387,32900094,32900095,32900096,32900097,32900098,32900099,32900100,32900101,32900102,32900103,32900104,32900105,32900106,32900107,32900108,32900109,32900110,32900111,32900112,32900113,32900114,32900226,32900368,32900369,32900388,32908094,32908095,32908096,32908097,32908098,32908099,32908100,32908101,32908102,32908103,32908104,32908105,32908106,32908107,32908108,32908109,32908110,32908111,32908112,32908113,32908114,32908226,32908386,32916094,32916095,32916096,32916097,32916098,32916099,32916100,32916101,32916102,32916103,32916104,32916105,32916106,32916107,32916108,32916109,32916110,32916111,32916112,32916113,32916114,32916226,32916387,32924094,32924095,32924096,32924097,32924098,32924099,32924100,32924101,32924102,32924103,32924104,32924105,32924106,32924107,32924108,32924109,32924110,32924111,32924112,32924113,32924114,32924226,32924385,32924387,32932094,32932095,32932096,32932097,32932098,32932099,32932100,32932101,32932102,32932103,32932104,32932105,32932106,32932107,32932108,32932109,32932110,32932111,32932112,32932113,32932114,32932226,32932386,32940094,32940095,32940096,32940097,32940098,32940099,32940100,32940101,32940102,32940103,32940104,32940105,32940106,32940107,32940108,32940109,32940110,32940111,32940112,32940113,32940114,32940226,32940384,32948094,32948095,32948096,32948097,32948098,32948099,32948100,32948101,32948102,32948103,32948104,32948105,32948106,32948107,32948108,32948109,32948110,32948111,32948112,32948113,32948114,32948226,32948385,32956094,32956095,32956096,32956097,32956098,32956099,32956100,32956101,32956102,32956103,32956104,32956105,32956106,32956107,32956108,32956109,32956110,32956111,32956112,32956113,32956114,32956226,32956383,32964094,32964095,32964096,32964097,32964098,32964099,32964100,32964101,32964102,32964103,32964104,32964105,32964106,32964107,32964108,32964109,32964110,32964111,32964112,32964113,32964114,32964226,32964384,32972094,32972095,32972096,32972097,32972098,32972099,32972100,32972101,32972102,32972103,32972104,32972105,32972106,32972107,32972108,32972109,32972110,32972111,32972112,32972113,32972114,32972226,32980094,32980095,32980096,32980097,32980098,32980099,32980100,32980101,32980102,32980103,32980104,32980105,32980106,32980107,32980108,32980109,32980110,32980111,32980112,32980113,32980114,32980226,32980383,32988094,32988095,32988096,32988097,32988098,32988099,32988100,32988101,32988102,32988103,32988104,32988105,32988106,32988107,32988108,32988109,32988110,32988111,32988112,32988113,32988114,32988226,32988382,32996094,32996095,32996096,32996097,32996098,32996099,32996100,32996101,32996102,32996103,32996104,32996105,32996106,32996107,32996108,32996109,32996110,32996111,32996112,32996113,32996114,32996226,32996380,32996382,33004094,33004095,33004096,33004097,33004098,33004099,33004100,33004101,33004102,33004103,33004104,33004105,33004106,33004107,33004108,33004109,33004110,33004111,33004112,33004113,33004114,33004226,33004381,33012094,33012095,33012096,33012097,33012098,33012099,33012100,33012101,33012102,33012103,33012104,33012105,33012106,33012107,33012108,33012109,33012110,33012111,33012112,33012113,33012114,33012226,33012380,33020094,33020095,33020096,33020097,33020098,33020099,33020100,33020101,33020102,33020103,33020104,33020105,33020106,33020107,33020108,33020109,33020110,33020111,33020112,33020113,33020114,33020226,33020356,33020378,33020380,33028094,33028095,33028096,33028097,33028098,33028099,33028100,33028101,33028102,33028103,33028104,33028105,33028106,33028107,33028108,33028109,33028110,33028111,33028112,33028113,33028114,33028226,33028355,33028356,33028357,33028379,33036094,33036095,33036096,33036097,33036098,33036099,33036100,33036101,33036102,33036103,33036104,33036105,33036106,33036107,33036108,33036109,33036110,33036111,33036112,33036113,33036114,33036226,33036354,33036355,33036356,33036378,33044094,33044095,33044096,33044097,33044098,33044099,33044100,33044101,33044102,33044103,33044104,33044105,33044106,33044107,33044108,33044109,33044110,33044111,33044112,33044113,33044114,33044226,33044353,33044354,33044355,33052094,33052095,33052096,33052097,33052098,33052099,33052100,33052101,33052102,33052103,33052104,33052105,33052106,33052107,33052108,33052109,33052110,33052111,33052112,33052113,33052114,33052226,33052354,33052375,33052377,33060094,33060095,33060096,33060097,33060098,33060099,33060100,33060101,33060102,33060103,33060104,33060105,33060106,33060107,33060108,33060109,33060110,33060111,33060112,33060113,33060114,33060226,33060374,33060376,33068094,33068095,33068096,33068097,33068098,33068099,33068100,33068101,33068102,33068103,33068104,33068105,33068106,33068107,33068108,33068109,33068110,33068111,33068112,33068113,33068114,33068226,33068375,33076094,33076095,33076096,33076097,33076098,33076099,33076100,33076101,33076102,33076103,33076104,33076105,33076106,33076107,33076108,33076109,33076110,33076111,33076112,33076113,33076114,33076226,33076374,33084094,33084095,33084096,33084097,33084098,33084099,33084100,33084101,33084102,33084103,33084104,33084105,33084106,33084107,33084108,33084109,33084110,33084111,33084112,33084113,33084114,33084226,33092094,33092095,33092096,33092097,33092098,33092099,33092100,33092101,33092102,33092103,33092104,33092105,33092106,33092107,33092108,33092109,33092110,33092111,33092112,33092113,33092114,33092226,33100094,33100095,33100096,33100097,33100098,33100099,33100100,33100101,33100102,33100103,33100104,33100105,33100106,33100107,33100108,33100109,33100110,33100111,33100112,33100113,33100114,33100226,33100346,33100370,33108094,33108095,33108096,33108097,33108098,33108099,33108100,33108101,33108102,33108103,33108104,33108105,33108106,33108107,33108108,33108109,33108110,33108111,33108112,33108113,33108114,33108226,33108369,33108371,33116094,33116095,33116096,33116097,33116098,33116099,33116100,33116101,33116102,33116103,33116104,33116105,33116106,33116107,33116108,33116109,33116110,33116111,33116112,33116113,33116114,33116226,33116368,33116370,33124094,33124095,33124096,33124097,33124098,33124099,33124100,33124101,33124102,33124103,33124104,33124105,33124106,33124107,33124108,33124109,33124110,33124111,33124112,33124113,33124114,33124226,33124367,33124369,33132094,33132095,33132096,33132097,33132098,33132099,33132100,33132101,33132102,33132103,33132104,33132105,33132106,33132107,33132108,33132109,33132110,33132111,33132112,33132113,33132114,33132226,33132336,33132337,33132368,33140094,33140095,33140096,33140097,33140098,33140099,33140100,33140101,33140102,33140103,33140104,33140105,33140106,33140107,33140108,33140109,33140110,33140111,33140112,33140113,33140114,33140226,33140333,33140334,33140335,33140336,33140337,33148094,33148095,33148096,33148097,33148098,33148099,33148100,33148101,33148102,33148103,33148104,33148105,33148106,33148107,33148108,33148109,33148110,33148111,33148112,33148113,33148114,33148226,33148333,33148334,33148335,33156094,33156095,33156096,33156097,33156098,33156099,33156100,33156101,33156102,33156103,33156104,33156105,33156106,33156107,33156108,33156109,33156110,33156111,33156112,33156113,33156114,33156226,33156289,33156333,33156362,33156364,33164094,33164095,33164096,33164097,33164098,33164099,33164100,33164101,33164102,33164103,33164104,33164105,33164106,33164107,33164108,33164109,33164110,33164111,33164112,33164113,33164114,33164226,33164289,33164361,33164363,33172094,33172095,33172096,33172097,33172098,33172099,33172100,33172101,33172102,33172103,33172104,33172105,33172106,33172107,33172108,33172109,33172110,33172111,33172112,33172113,33172114,33172226,33172239,33172289,33172310,33172362,33180094,33180095,33180096,33180097,33180098,33180099,33180100,33180101,33180102,33180103,33180104,33180105,33180106,33180107,33180108,33180109,33180110,33180111,33180112,33180113,33180114,33180226,33180289,33180310,33180323,33180324,33180361,33188094,33188095,33188096,33188097,33188098,33188099,33188100,33188101,33188102,33188103,33188104,33188105,33188106,33188107,33188108,33188109,33188110,33188111,33188112,33188113,33188114,33188226,33188310,33188357,33188359,33196094,33196095,33196096,33196097,33196098,33196099,33196100,33196101,33196102,33196103,33196104,33196105,33196106,33196107,33196108,33196109,33196110,33196111,33196112,33196113,33196114,33196160,33196183,33196226,33196310,33196358,33204094,33204095,33204096,33204097,33204098,33204099,33204100,33204101,33204102,33204103,33204104,33204105,33204106,33204107,33204108,33204109,33204110,33204111,33204112,33204113,33204114,33204160,33204183,33204226,33204354,33204356,33204357,33212094,33212095,33212096,33212097,33212098,33212099,33212100,33212101,33212102,33212103,33212104,33212105,33212106,33212107,33212108,33212109,33212110,33212111,33212112,33212113,33212114,33212160,33212183,33212226,33212355,33220094,33220095,33220096,33220097,33220098,33220099,33220100,33220101,33220102,33220103,33220104,33220105,33220106,33220107,33220108,33220109,33220110,33220111,33220112,33220113,33220114,33220160,33220183,33220226,33220353,33220354,33228094,33228095,33228096,33228097,33228098,33228099,33228100,33228101,33228102,33228103,33228104,33228105,33228106,33228107,33228108,33228109,33228110,33228111,33228112,33228113,33228114,33228160,33228183,33228349,33228352,33236097,33236098,33236099,33236100,33236101,33236102,33236103,33236104,33236105,33236106,33236107,33236108,33236109,33236110,33236111,33236112,33236113,33236114,33236115,33236116,33236117,33236118,33236119,33236120,33236121,33236122,33236123,33236124,33236125,33236126,33236127,33236128,33236129,33236130,33236131,33236133,33236134,33236135,33236136,33236137,33236138,33236139,33236140,33236141,33236142,33236143,33236144,33236145,33236146,33236147,33236148,33236149,33236150,33236151,33236152,33236153,33236154,33236155,33236156,33236157,33236158,33236159,33236160,33236183,33236184,33236185,33236186,33236187,33236188,33236189,33236190,33236191,33236192,33236193,33236194,33236195,33236196,33236197,33236198,33236199,33236200,33236201,33236202,33236203,33236204,33236205,33236206,33236207,33236208,33236209,33236210,33236212,33236213,33236214,33236215,33236216,33236217,33236218,33236219,33236220,33236221,33236222,33236223,33236224,33236225,33236347,33236350,33244195,33244196,33244197,33244198,33244199,33244345,33244348,33252195,33252196,33252197,33252198,33252199,33252343,33252346,33260064,33260065,33260066,33260067,33260068,33260069,33260070,33260071,33260072,33260073,33260074,33260075,33260076,33260077,33260078,33260079,33260080,33260081,33260082,33260083,33260084,33260085,33260086,33260087,33260088,33260089,33260090,33260091,33260092,33260093,33260094,33260095,33260096,33260097,33260098,33260099,33260100,33260101,33260102,33260103,33260104,33260105,33260106,33260107,33260108,33260109,33260110,33260111,33260112,33260113,33260114,33260115,33260116,33260117,33260118,33260119,33260120,33260121,33260122,33260123,33260124,33260125,33260126,33260127,33260128,33260129,33260130,33260131,33260194,33260195,33260196,33260197,33260198,33260199,33260200,33260201,33260202,33260203,33260204,33260205,33260341,33260344,33260345,33268055,33268132,33268342,33276340,33284337,33284338,33292191,33292192,33292207,33292208,33292334,33292335,33300331,33300332,33308327,33308328,33316289,33324289,33332289,33332310,33340157,33340158,33340185,33340186,33340289,33340310,33348157,33348158,33348185,33348186,33348289,33348310,33356156,33356157,33356158,33356159,33356184,33356185,33356186,33356187,33356289,33356310,33364289,33364310,33372289,33372310,33380289,33380310,33388289,33388310,33396289,33396310,33404289,33404310,33404781,33404782,33412289,33412310,33412781,33412782,33420209,33420289,33420310,33428209,33428289,33428310,33436055,33436132,33436289,33436310,33444056,33444057,33444058,33444059,33444060,33444061,33444062,33444063,33444064,33444065,33444066,33444067,33444068,33444069,33444070,33444071,33444072,33444073,33444074,33444075,33444076,33444077,33444078,33444079,33444080,33444081,33444082,33444083,33444084,33444085,33444086,33444087,33444088,33444089,33444090,33444091,33444092,33444093,33444094,33444095,33444096,33444097,33444098,33444099,33444100,33444101,33444102,33444103,33444104,33444105,33444106,33444107,33444108,33444109,33444110,33444111,33444112,33444113,33444114,33444115,33444116,33444117,33444118,33444119,33444120,33444121,33444122,33444123,33444124,33444125,33444126,33444127,33444128,33444129,33444130,33444131,33444289,33444310,33452289,33452310,33460134,33460289,33460310,33468050,33468051,33468052,33468053,33468054,33468055,33468056,33468057,33468058,33468059,33468060,33468061,33468062,33468063,33468064,33468065,33468066,33468067,33468068,33468069,33468070,33468071,33468072,33468073,33468074,33468075,33468076,33468077,33468078,33468079,33468080,33468081,33468082,33468083,33468084,33468085,33468086,33468087,33468088,33468089,33468090,33468091,33468092,33468093,33468094,33468095,33468096,33468097,33468098,33468099,33468100,33468101,33468102,33468103,33468104,33468105,33468106,33468107,33468108,33468109,33468110,33468111,33468112,33468113,33468114,33468115,33468116,33468117,33468118,33468119,33468120,33468121,33468122,33468123,33468124,33468125,33468126,33468127,33468128,33468129,33468130,33468131,33468134,33468212,33468213,33468214,33468215,33468216,33468217,33468218,33468219,33468220,33468221,33468222,33468223,33468224,33468225,33468226,33468227,33468228,33468229,33468230,33468231,33468232,33468233,33468234,33468235,33468236,33468237,33468238,33468239,33468240,33468241,33468242,33468243,33468244,33468245,33468246,33468247,33468248,33468249,33468250,33468251,33468252,33468253,33468254,33468255,33468256,33468257,33468258,33468259,33468260,33468261,33468262,33468263,33468264,33468265,33468266,33468267,33468268,33468269,33468270,33468271,33468272,33468273,33468274,33468275,33468276,33468277,33468278,33468279,33468280,33468281,33468282,33468283,33468284,33468285,33468286,33468287,33468288,33468289,33468310,33468311,33476310,33476311,33484310,33492310,33500310,33508310,33516310,33524310,33532310,33540310,33548134,33548209,33548310,33556310,33564310,33572310,33580310,33588310,33596310,33603273,33603274,33604310,33611273,33611274,33612310,33620310,33628310,33628311,33628781,33628782,33635272,33636046,33636047,33636048,33636049,33636050,33636051,33636052,33636053,33636054,33636055,33636056,33636057,33636058,33636059,33636060,33636061,33636062,33636063,33636064,33636065,33636066,33636067,33636068,33636069,33636070,33636071,33636072,33636073,33636074,33636075,33636076,33636077,33636078,33636079,33636080,33636081,33636082,33636083,33636084,33636085,33636086,33636087,33636088,33636089,33636090,33636091,33636092,33636093,33636094,33636095,33636096,33636097,33636098,33636099,33636100,33636101,33636102,33636103,33636104,33636105,33636106,33636107,33636108,33636109,33636110,33636111,33636112,33636113,33636114,33636115,33636116,33636117,33636118,33636119,33636120,33636121,33636122,33636123,33636124,33636125,33636126,33636127,33636128,33636129,33636130,33636131,33636212,33636213,33636214,33636215,33636216,33636217,33636218,33636219,33636220,33636221,33636222,33636223,33636224,33636225,33636226,33636227,33636228,33636229,33636230,33636231,33636232,33636233,33636234,33636235,33636236,33636237,33636238,33636239,33636240,33636241,33636242,33636243,33636244,33636245,33636246,33636247,33636248,33636249,33636250,33636251,33636252,33636253,33636254,33636255,33636256,33636257,33636258,33636259,33636260,33636261,33636262,33636263,33636264,33636265,33636266,33636267,33636268,33636269,33636270,33636271,33636272,33636273,33636274,33636275,33636276,33636277,33636278,33636279,33636280,33636281,33636282,33636283,33636284,33636285,33636286,33636287,33636288,33636289,33636290,33636291,33636292,33636293,33636294,33636295,33636296,33636297,33636298,33636299,33636300,33636301,33636302,33636303,33636304,33636305,33636306,33636307,33636308,33636309,33636310,33636311,33636781,33636782,33643271,33643272,33643273,33651272,33660169,33660170,33660171,33660172,33660173,33660174,33668134,33668169,33668174,33668209,33676169,33676174,33684169,33684174,33692169,33692174,33700169,33700174,33708169,33708174,33716169,33716174,33724169,33724174,33732169,33732170,33732171,33732172,33732173,33732174,33788134,33788209,33796134,33796209,33860131,33860212,33868131,33868212,33876131,33876212,33884131,33884212,33892131,33892212,33900131,33900212,33908131,33908212,33916131,33916212,33924131,33924212,33932131,33932212,33940131,33940212,33940387,33940388,33948131,33948212,33948387,33948388,33956131,33956212,33964131,33964212,33972131,33972212,33980131,33980212,33988131,33988212,33996131,33996212,34004131,34004212,34012131,34012212,34020131,34020212,34028131,34028212,34036131,34036212,34044131,34044212,34084796,34092795,34092796,34092797,34100796,34108217,34108218,34116217,34116218,34236497,34236498,34244497,34244498,34324735,34324736,34331132,34331133,34332735,34332736,34339132,34339133,34340735,34492817,34492818,34500818,34667363,34675363,34683363,34691363,34699363,34707363,34715363,34723363,34731363,34739363,34747363,34755363,34763363,34771363,34779363,34780161,34780162,34787363,34788161,34795363,34803363,34811363,34819363,34827363,34835363,34843363,34851363,34859363,34867363,34875363,34876099,34876100,34876269,34876270,34883363,34884099,34884100,34884269,34884270,34891266,34891267,34891363,34899266,34899267,34899363,34900533,34900534,34907363,34908534,34915363,34923363,34931363,34939363,34947363,34948485,34948486,34955363,34956369,34956370,34956485,34956486,34963363,34964369,34964370,34971363,34979363,34980731,34987363,34988731,34988732,34995363,34996731,35003363,35011363,35019363,35027363,35028126,35028127,35028128,35028163,35028164,35028165,35035363,35036124,35036125,35036126,35036127,35036128,35036129,35036162,35036163,35036164,35036165,35036166,35036167,35043363,35044122,35044123,35044124,35044125,35044126,35044127,35044164,35044165,35044166,35044167,35044168,35044169,35051363,35052123,35052124,35052125,35052166,35052167,35052168,35052213,35052214,35059363,35060213,35060214,35067363,35075363,35083363,35091363,35099363,35100774,35100775,35107363,35108774,35115363,35123363,35124757,35124758,35131363,35132758,35139363,35147363,35155363,35163363,35171363,35172325,35172326,35179363,35180325,35187363,35195363,35203363,35211363,35219363,35227363,35235363,35236098,35236193,35243363,35244098,35244099,35244192,35244193,35251363,35252097,35252098,35252099,35252192,35252193,35252194,35259363,35260097,35260098,35260099,35260192,35260193,35260194,35267363,35268096,35268097,35268098,35268193,35268194,35268195,35275363,35276096,35276097,35276098,35276193,35276194,35276195,35283363,35284096,35284097,35284194,35284195,35291363,35292065,35292097,35292194,35299363,35300064,35300065,35300066,35307363,35315363,35323363,35331363,35339363,35347363,35355363,35363363,35363956,35371363,35371956,35379363,35387363,35395363,35403363,35411363,35419363,35427363,35435363,35443363,35451363,35459363,35467363,35475363,35483363,35491363,35492500,35492501,35499934,35499935,35500500,35500501,35507933,35507934,35507935,35548225,35548226,35556097,35556194,35556226,35564096,35564097,35564194,35564195,35572096,35572097,35572098,35572193,35572194,35572195,35580096,35580097,35580098,35580193,35580194,35580195,35580459,35580460,35588097,35588098,35588099,35588192,35588193,35588194,35588459,35588460,35596097,35596098,35596099,35596192,35596193,35596194,35604098,35604099,35604192,35604193,35612098,35612193,35644728,35644729,35652728,35652729,35788077,35788078,35796078,35796123,35796124,35796125,35796166,35796167,35796168,35804122,35804123,35804124,35804125,35804126,35804127,35804164,35804165,35804166,35804167,35804168,35804169,35812124,35812125,35812126,35812127,35812128,35812129,35812162,35812163,35812164,35812165,35812166,35812167,35820126,35820127,35820128,35820163,35820164,35820165,35876341,35876342,35884341,35884342,35964191,35964192,35972191,35972192,36043553,36043554,36051553,36051554,36060130,36068129,36068130,36076130,36196116,36196117,36196174,36196175,36204116,36204117,36204174,36204175,36220065,36220066,36220067,36220068,36220069,36220070,36220071,36220072,36220073,36220074,36220075,36220076,36220077,36220078,36220079,36220080,36220081,36220082,36220083,36220084,36220085,36220086,36220087,36220088,36220089,36220090,36220091,36220092,36220093,36220094,36220095,36220096,36220097,36220098,36220099,36220100,36220101,36220102,36220103,36220104,36220105,36220106,36220107,36220108,36220109,36220110,36220111,36220112,36220113,36220114,36220115,36220118,36220119,36220120,36220121,36220123,36220124,36220125,36220126,36220128,36220129,36220130,36220131,36220133,36220134,36220135,36220136,36220137,36220138,36220139,36220140,36220141,36220142,36220143,36220144,36220145,36220147,36220148,36220149,36220150,36220152,36220153,36220154,36220155,36220157,36220158,36220159,36220160,36220161,36220162,36220163,36220164,36220165,36220166,36220167,36220168,36220169,36220171,36220172,36220173,36220174,36220175,36220176,36220177,36220178,36220179,36220180,36220181,36220182,36220183,36220184,36220185,36220186,36220187,36220188,36220189,36220190,36220191,36220192,36220193,36220194,36220195,36220196,36220197,36220198,36220199,36220200,36220201,36220202,36220203,36220204,36220205,36220206,36220207,36220208,36220209,36220210,36220211,36220212,36220213,36220214,36220215,36220216,36220217,36220218,36220219,36220220,36220221,36220222,36220223,36220224,36220225,36228065,36228066,36228067,36228068,36228069,36228070,36228071,36228072,36228073,36228074,36228075,36228076,36228077,36228078,36228079,36228080,36228081,36228082,36228083,36228084,36228085,36228086,36228087,36228088,36228089,36228090,36228091,36228092,36228093,36228094,36228095,36228096,36228097,36228098,36228099,36228100,36228101,36228102,36228103,36228104,36228105,36228106,36228107,36228108,36228109,36228110,36228111,36228112,36228113,36228114,36228115,36228118,36228119,36228120,36228121,36228123,36228124,36228125,36228126,36228128,36228129,36228130,36228131,36228133,36228134,36228135,36228136,36228137,36228138,36228139,36228140,36228141,36228142,36228143,36228144,36228145,36228147,36228148,36228149,36228150,36228152,36228153,36228154,36228155,36228157,36228158,36228159,36228160,36228161,36228162,36228163,36228164,36228165,36228166,36228167,36228168,36228169,36228171,36228172,36228173,36228174,36228175,36228176,36228177,36228178,36228179,36228180,36228181,36228182,36228183,36228184,36228185,36228186,36228187,36228188,36228189,36228190,36228191,36228192,36228193,36228194,36228195,36228196,36228197,36228198,36228199,36228200,36228201,36228202,36228203,36228204,36228205,36228206,36228207,36228208,36228209,36228210,36228211,36228212,36228213,36228214,36228215,36228216,36228217,36228218,36228219,36228220,36228221,36228222,36228223,36228224,36228225,36260116,36260117,36260174,36260175,36268116,36268117,36268174,36268175,36347806,36347807,36355806,36355807,36411890,36419889,36419890,36419891,36427890,36508783,36516782,36516783,36516784,36524783,36627893,36627894,36635894,36763969,36763970,36771969,36804721,36812721,36812722,36843330,36843331,36851330,36883711,36883712,36883713,36891712,36924578,36924579,36932578,36932579,36932580,36940579,36980753,36988752,36988753,36988754,37012544,37012545,37020544,37020545];var i4=Object.keys(zn).filter(r=>zn[r].model),s4=Object.fromEntries(Object.entries(zn).map(([r,e])=>[r,e.price]));var P3=oe.grandstand;var I3=[],L3=[],z3=[];function D3(r=[]){z3=za(oe,r);let e=new Set(r);I3=oe.stablePlots.filter(t=>vs(t,e)),L3=oe.stablePlots.filter(t=>!vs(t,e))}D3();var v4=new Set(Da);var Na=[{id:"papa",name:"\uD30C\uD30C\uB2ED",x:-68,z:31,w:6,d:3.2,colors:["#d8402b","#f6b23a"]},{id:"bunsik",name:"\uB450\uAE08\uBD84\uC2DD",x:68,z:31,w:6,d:3.2,colors:["#2f7d55","#f2d16b"]}];var N3={...oe.lobbyProps.find(r=>r.type==="snack"),id:"lobby",name:"\uB85C\uBE44 \uB9E4\uC810"},b4=[...Na,N3];var M4={x0:-62,x1:62,z0:34,z1:P3.terrace.z0-1,y:.05};var{x0:F3,x1:U3,zFront:O3,zBack:T4,terrace:B3,doors:Fa}=oe.grandstand,R4=Object.freeze({id:"village-entrance",name:"\uB9C8\uC744 \uC785\uAD6C",icon:"\u{1F3E1}",x:-171,z:202,y:2.8,sign:{x:-171,z:206}}),C4=Object.freeze({id:"race-entrance",name:"\uACBD\uB9C8\uC7A5 \uC785\uAD6C",icon:"\u{1F3DF}\uFE0F",x:(Fa.front[0][0]+Fa.front[0][1])/2,z:B3.z0-3,y:2.8,sign:{x:-52,z:46}});var bs=Ca.approach,P4=Object.freeze({id:"training-office",name:"\uD6C8\uB828\uC0AC",icon:"\u{1F3C7}",x:bs.x+7,z:bs.z+4,y:2.4,approach:{x:bs.x+7,z:bs.z+6}});var k3={x:(F3+U3)/2,z:O3-3};var Ms=oe.grandstand,O4=[Ms.bridge,Ms.ramp,Ms.plazaStairs,Ms.backBalcony];var jr=oe.geometry,B4=jr.straight/2+jr.turnRadius+(oe.railOuterLane+1)*oe.lanePitch,V3=jr.cz-Math.min(...oe.courses.chute1000.map(r=>r[1])),W3=Math.tan(zt.degToRad(23)),k4=V3*1.1/W3;var Bt=oe.grandstand,$4=[...Bt.doors.front.map(([r,e])=>({x:(r+e)/2+2.5,z:Bt.terrace.z0-2})),{x:Bt.ramp.x0-2,z:Bt.ramp.z0+Bt.ramp.westOpen+1.8},{x:Bt.plazaStairs.x1+2,z:(Bt.plazaStairs.z0+Bt.plazaStairs.z1)/2+2.5}];var r6=oe.villageDecor.find(r=>r.type==="stone-well");function Ua(r){let e=new Map,t=new Map;return r.traverse(n=>{if(!n.isMesh)return;e.set(n,n.material);let i=s=>{if(!t.has(s)){let o=s.clone();o.transparent=!0,o.depthWrite=!1,o.onBeforeCompile=s.onBeforeCompile,o.customProgramCacheKey=s.customProgramCacheKey,t.set(s,o)}return t.get(s)};n.material=Array.isArray(n.material)?n.material.map(i):i(n.material)}),{set(n){for(let[i,s]of t)s.opacity=i.opacity*n},dispose(){for(let[n,i]of e)n.material=i;for(let n of t.values())n.dispose()}}}var Ss={Perfect:{freeze:52,scale:.78,recover:65,light:4,tail:.26,color:16768899},Good:{freeze:33,scale:.86,recover:48,light:2,tail:.18,color:16773834},Bad:{freeze:17,scale:.94,recover:34,light:1,tail:.1,color:16760992}},q3={Perfect:72,Good:48,Bad:24},Oa=new v(0,1,0);function Ba(r){let e=new rt,t=r.ground.height(L.x,L.z);e.name="playground-pingpong",e.position.set(L.x,t,L.z),r.scene.add(e);let n=new Set,i=new Set,s=new Set,o=(m,x=.85)=>new si({color:m,roughness:x}),a=(m,x)=>new En({color:m,...x}),l=(m,x,S=e)=>{n.add(m),i.add(x);let R=new Kt(m,x);return S.add(R),R},c=new Map;function u(m,x,S,R,N,P,B){let k=new Tn(m,x,S).translate(R,N,P);c.has(B)||c.set(B,[]),c.get(B).push(k)}let h=o(13875343,.94),d=o(2652533),f=o(16774361),p=o(7950902,.94),g=o(2443083);u(ot.w,.024,ot.d,0,.004,0,h),u(L.length,.1,L.width,0,.75,0,d);for(let m of[-1,1]){for(let x of[-1,1])u(.095,.71,.095,m*1.9,.355,x*1.02,p);u(.025,.005,L.width,m*(L.length/2-.02),.802,0,f),u(L.length,.005,.025,0,.802,m*(L.width/2-.02),f),u(.035,.22,.035,0,.91,m*1.48,g),u(.025,.008,ot.d,m*(ot.w/2-.05),.02,0,f),u(ot.w,.008,.025,0,.02,m*(ot.d/2-.05),f)}u(L.length,.004,.018,0,.801,0,f),u(.027,.023,3,0,1.013,0,f);for(let[m,x]of c){let S=l(da(x),m);S.receiveShadow=!0,x.forEach(R=>R.dispose())}let _=document.createElement("canvas");_.width=64,_.height=32;let y=_.getContext("2d");y.fillStyle="#25474b";for(let m=0;m<64;m+=4)y.fillRect(m,0,1,32);for(let m=0;m<32;m+=4)y.fillRect(0,m,64,1);let b=new ei(_);b.colorSpace=Le,b.magFilter=Zn,s.add(b);let E=l(new jt(3,.195),a(16777215,{map:b,alphaTest:.45,side:Mt}));E.position.y=.903,E.rotation.y=Math.PI/2;let M=new rt;e.add(M),M.visible=!1;let w=l(new ii(L.radius,10,6),a(16775400),M);l(w.geometry,a(4998711,{side:rs}),M).scale.setScalar(1.12);let C=l(new ti(1,18),a(4998711,{transparent:!0,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.visible=!1;let I=l(new lt(.125,.146,24),a(16774361,{transparent:!0,opacity:.85,side:Mt,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.visible=!1;let A=new rt;e.add(A),A.visible=!1;let F=[l(new lt(.186,.21,38),a(16777215,{depthTest:!1,depthWrite:!1}),A),l(new lt(.19,.21,38),a(16777215,{depthTest:!1,depthWrite:!1}),A)];for(let m of F)m.renderOrder=5;let D=l(new lt(.12,.19,5),a(16769945,{transparent:!0,opacity:.72,side:Mt}));D.visible=!1,D.rotation.x=-Math.PI/2;let O=Array.from({length:3},(m,x)=>{let S=l(new jt(2.18,.825),a(16769945,{transparent:!0,depthWrite:!1,opacity:.07}));return S.rotation.x=-Math.PI/2,S.position.set(1.135,.809,(x-1)*.85),S.visible=!1,S}),G=l(new lt(.09,.11,18),a(16768899,{side:Mt,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.visible=!1;let H=new ni(.125,.125,.018,20).rotateX(Math.PI/2).scale(1,1.1,1).translate(0,.145,0),U=H.clone().scale(.96,.96,.6).translate(0,0,-.008),K=new Tn(.038,.11,.032).translate(0,-.006,0),ne=o(11882051),Z=o(3422519);function J(){let m=new rt;return l(H,ne,m),l(U,Z,m),l(K,p,m),m}let j=new lt(.111,.125,20).scale(1,1.1,1).translate(0,.145,0),de=[0,1].map(()=>l(j,a(16768899,{transparent:!0,depthWrite:!1,side:Mt}),r.scene)),le=new jt(.055,.055).rotateZ(Math.PI/4),ie=new Qn(le,a(16768899,{side:Mt,transparent:!0,depthWrite:!1}),4);n.add(le),i.add(ie.material),e.add(ie),ie.visible=!1,ie.frustumCulled=!1;let De=new Re,Pe=new Te(new Float32Array(36),3),$e=new Te(new Float32Array(48),4),Ee=[];for(let m=0;m<5;m++)Ee.push(m*2,m*2+1,m*2+2,m*2+1,m*2+3,m*2+2);De.setAttribute("position",Pe),De.setAttribute("color",$e),De.setIndex(Ee);let Ne=l(De,a(16777215,{transparent:!0,vertexColors:!0,depthWrite:!1,side:Mt,opacity:.63}));Ne.frustumCulled=!1,Ne.visible=!1;let He=new ui,Ke=new Sn(new v(0,1,0),-t-.8),Ie=new v(L.x+1.5,t+.8,L.z),Ge=new ae,Q=new st,sn=new fe,Ve=new fe,je=new fe,Nn=new ee,ye=new ee,St=new ee,Fn=new fe,kt=new v,at=new v,Ht=new v,ut=new hi,Es=new v,We=new v,Xe=new Map,pe=null,ce=null,rn=null,xi=!1,Qe=L.z;function on(m,x){let S=Or(m),R=J(),N=ma({player:m,mobile:r.mobile,avatar:{id:x}},S,"racket",R);return N?{grip:N,model:R,avatar:x,bones:[S.parent,S.parent.parent,S],before:[]}:null}function Gt(m){m?.before.length&&(m.bones.forEach((x,S)=>x.quaternion.copy(m.before[S])),m.before=[])}function _i(m,x,S,R,N,P){if(!m)return;m.before=m.bones.map(q=>q.quaternion.clone());let B=R?Math.max(0,N-P):0,k=R?Math.max(0,1-B/(R.smash?420:310)):S*.68,X=R?.backhand?-1:1;m.bones[0].rotateY(k*X*.56),m.bones[1].rotateX(-.46-k*.45),m.bones[1].rotateZ(.42+k*X*.56),x.getWorldQuaternion(sn),Fn.copy(sn).multiply(en([0,-.3,1],[0,1,.3])).multiply(Ve.setFromAxisAngle(Oa,X*k*.72)),m.grip.update({handOrientation:Fn,rotation:[.25,-X*(.2+k*.88),-.48-k*.22]})}function As(){rn||(rn=r.asset("/assets/avatars-farm/girl.glb").then(m=>{if(xi)return;let x=new rt,S=fa(m.scene);x.add(S),r.scene.add(x),x.visible=!1,x.name="pingpong-computer",x.rotation.y=-Math.PI/2;let R=new ci(S),N=m.animations.find(q=>q.name==="idle"),P=m.animations.find(q=>q.name==="walk"),B=[N&&R.clipAction(N),P&&R.clipAction(P)];B[0]?.play(),R.update(.01),S.traverse(q=>{q.isSkinnedMesh&&q.computeBoundingBox()});let k=new ke().setFromObject(S),X=k.max.y-k.min.y;X>.1&&(S.scale.setScalar(1.75/X),S.position.y=-k.min.y*S.scale.y+.012),ce={actor:x,model:S,mixer:R,actions:B,action:0,arm:on(x,"girl"),tossArm:Or(x,"Left")?.parent?.parent}}).catch(()=>{rn=null}))}function Ts(m,x,S,R,N,P,B){m&&As(),x&&(!pe||pe.avatar!==r.avatar.id)&&(pe?.grip.dispose(),pe=on(r.player,r.avatar.id)),!x&&pe&&(Gt(pe),pe.grip.dispose(),pe=null);let k=P?performance.now()-P.at:1/0,X=Ss[P?.grade]??Ss.Good,q=B.freeze?P?.smash?q3[P.grade]??48:X.freeze:0,$=k<450?P:null;pe&&_i(pe,r.player,N,$,k,q);for(let ht=0;ht<de.length;ht++){let Me=de[ht],Un=P?.smash?80:45;Me.visible=!!pe&&B.ghost&&k>=ht*14&&k<Un&&(ht===0||P?.smash),Me.visible&&((!Me.userData.hit||Me.userData.hit!==P||!Me.userData.captured)&&(pe.model.getWorldPosition(Me.position),pe.model.getWorldQuaternion(Me.quaternion),Me.rotateY(-.18*(ht+1)),Me.userData.hit=P,Me.userData.captured=!0),Me.material.opacity=.43*(1-k/Un))}if(!ce)return;let{actor:Ae,mixer:Fe,actions:qe,arm:et}=ce;if(Ae.visible=!!m,!m)return;Gt(et),ce.tossRest&&(ce.tossArm.quaternion.copy(ce.tossRest),ce.tossRest=null);let Vt=hs(m.cpu,m.shot,S,m.cpuZ),Wt=Qe;Qe+=te(Vt.z-Qe,-R*3.5,R*3.5);let ge=In(2),be=+(Math.abs(Qe-Wt)>.005);ce.action!==be&&qe[be]&&(qe[ce.action]?.fadeOut(.12),qe[be].reset().fadeIn(.12).play(),ce.action=be),Fe.update(R),Ae.position.set(ge.x,r.ground.height(ge.x,Qe)+.024,Qe);let Ue=m.shot?.from===2&&S>=m.shot.time&&S-m.shot.time<350,wt=m.phase==="serve"&&m.serve===2?te(1-(m.deadline-S)/500,0,1):0;wt>0&&ce.tossArm&&(ce.tossRest=ce.tossArm.quaternion.clone(),ce.tossArm.rotateX(-.35-.75*Math.sin(Math.PI*wt))),_i(et,Ae,wt>0?wt:m.cpu?.miss?0:.28,Ue?{smash:m.shot.kind==="smash"}:null,S-(m.shot?.time??0),0)}function Rs(m){if(m>500)return;let x=te(1-m/500,0,1);M.visible=!0,M.position.set(3,1.18+.64*Math.sin(Math.PI*x),Qe-L.z+.16*(1-x)),M.quaternion.identity(),M.scale.setScalar(1)}function Cs(m,x,S,R,N){if(M.visible=C.visible=!!m,I.visible=!!m?.bounces.some(ge=>ge.at>x),Ne.visible=!!m&&R.tail,ie.visible=!1,!m)return;let P=Dt(m,x),B=Dt(m,x-16),k=Dt(m,x+16),X=S?performance.now()-S.at:1/0,q=Ss[S?.grade]||Ss.Good,$=S?.smash,Ae=$?74:q.recover,Fe=R.squash?te(1-X/Ae,0,1):0,qe=(ge,be)=>Math.abs(ge-L.x)<=L.length/2&&Math.abs(be-L.z)<=L.width/2?.805:.022;if(kt.set(P.x-L.x,P.y,P.z-L.z),N){let ge=te(1-(performance.now()-N.at)/150,0,1);kt.addScaledVector(N.delta,ge)}let et=te(r.camera.position.distanceTo(at.set(P.x,P.y+t,P.z))*Math.tan(r.camera.fov*Math.PI/360)*9/(Math.max(1,r.renderer.domElement.clientHeight)*L.radius),1,2.2);M.position.copy(kt),at.set(k.x-B.x,k.y-B.y,k.z-B.z),at.lengthSq()>1e-6&&M.quaternion.setFromUnitVectors(Oa,at.normalize()),M.scale.set(et*(1+Fe*.15),et*(1-Fe*(1-($?.7:q.scale))),et*(1+Fe*.15)),C.position.set(kt.x,qe(P.x,P.z),kt.z);let Vt=te((P.y-C.position.y)*.7,0,1);C.material.opacity=.46-.28*Vt,C.scale.setScalar(.075+.06*Vt);let Wt=m.bounces.find(ge=>ge.at>x);if(Wt&&I.position.set(Wt.x-L.x,.81,Wt.z-L.z),Ne.visible){let ge=m.kind==="smash"?.48:q.tail;Nn.set(m.kind==="smash"?16775400:16773834),ye.set(m.kind==="smash"?14652247:13150585),Ht.set(-(k.z-B.z),0,k.x-B.x).normalize();for(let be=0;be<6;be++){let Ue=be/5,wt=Dt(m,x-ge/m.speed*1e3*Ue),ht=.031*(1-Ue)+.001;St.copy(Nn).lerp(ye,Ue);for(let Me=0;Me<2;Me++){let Un=Me?1:-1,to=be*2+Me;Pe.setXYZ(to,wt.x-L.x+Ht.x*ht*Un,wt.y,wt.z-L.z+Ht.z*ht*Un),$e.setXYZW(to,St.r,St.g,St.b,1-Ue)}}Pe.needsUpdate=!0,$e.needsUpdate=!0}if(R.light&&S?.where&&X<($?110:100)){ie.visible=!0,ie.count=$?2:q.light,ie.material.color.setHex($?14652247:q.color),ie.material.opacity=1-X/($?110:100),r.camera.getWorldQuaternion(je);for(let ge=0;ge<ie.count;ge++){let be=ge*Math.PI*2/ie.count+Math.PI/4,Ue=X/($?110:100)*($?.2:.12);Q.position.set(S.where.x-L.x+Math.cos(be)*Ue,S.where.y+Math.sin(be)*Ue,S.where.z-L.z),Q.quaternion.copy(je),Q.scale.set($?1.75:1,$?.45:1,1),Q.updateMatrix(),ie.setMatrixAt(ge,Q.matrix)}ie.instanceMatrix.needsUpdate=!0}}function an(m,x,S){if(A.visible=!!m&&S,D.visible=!!m&&!S,!m)return;let{arrival:R,arrivesAt:N}=m,P=N-x;A.position.set(R.x-L.x,Math.max(.55,R.y),R.z-L.z),r.camera.getWorldQuaternion(A.quaternion),F[1].scale.setScalar(1+2*te(P/Math.min(800,Math.max(250,N-m.time)),0,1));for(let B of F)B.material.color.setHex(Math.abs(P)<=90?10878928:P<400?16768899:16777215);D.position.set(R.x-L.x,.026,R.z-L.z)}function yi(m){let x=r.scene.getObjectByName("world_other_players"),S=r.camera,R=[M,A].filter(P=>P.visible),N=new Set;if(m&&R.length)for(let P of x?.children??[]){if(!P.visible||!P.isGroup||P.position.distanceToSquared(r.player.position)>81)continue;R.some(k=>(k.getWorldPosition(at),[[0,0],[-.21,0],[.21,0],[0,-.21],[0,.21]].some(([X,q])=>(ut.start.copy(S.position),ut.end.copy(at),ut.end.z+=X,ut.end.y+=q,[1.02,1.52].some($=>{We.copy(P.position),We.y+=$;let Ae=ut.closestPointToPointParameter(We,!0);return Ae>=.985?!1:ut.at(Ae,Es).distanceToSquared(We)<.26**2})))))&&N.add(P)}for(let P of N)if(!Xe.has(P)){let B=Ua(P);B.set(.45),Xe.set(P,B)}for(let[P,B]of Xe)N.has(P)||(B.dispose(),Xe.delete(P))}function Ps(m,x){let S=r.renderer.domElement.getBoundingClientRect();return Ge.set((m-S.left)/S.width*2-1,1-(x-S.top)/S.height*2),He.setFromCamera(Ge,r.camera),He.ray.intersectPlane(Ke,Ie)?Ie.z>L.z+.425?1:Ie.z<L.z-.425?-1:0:0}function vi(m,x,S){for(let[R,N]of O.entries())N.visible=x,N.material.opacity=m===R-1?.29:.08;G.visible=x,G.position.set(S?te(Ie.x-L.x,.07,2.18):1.5,.812,S?te(Ie.z-L.z,-1.2,1.2):m*.825)}return{root:e,base:t,updateActors:Ts,drawBall:Cs,drawServeToss:Rs,drawTarget:an,aimAt:Ps,aim:vi,fadeOccluders:yi,restorePlayer:()=>Gt(pe),dispose(){yi(!1),xi=!0,Gt(pe),pe?.grip.dispose(),ce?.arm?.grip.dispose(),ce&&(ce.mixer.stopAllAction(),ce.mixer.uncacheRoot(ce.model),ce.model.traverse(m=>{m.isSkinnedMesh&&m.skeleton.dispose()}),ce.actor.removeFromParent()),e.removeFromParent();for(let m of de)m.removeFromParent();ie.dispose();for(let m of n)m.dispose();for(let m of i)m.dispose();for(let m of s)m.dispose()}}}var ka={freeze:"\uB77C\uCF13 \uBA48\uCDA4",squash:"\uACF5 \uBCC0\uD615",ghost:"\uB77C\uCF13 \uC794\uC0C1",tail:"\uACF5 \uAF2C\uB9AC",light:"\uD0C0\uACA9 \uD6A8\uACFC",camera:"\uCE74\uBA54\uB77C \uD6A8\uACFC",beats:"\uD0C0\uC774\uBC0D \uC18C\uB9AC",sound:"\uD0C0\uACA9\uC74C",buzz:"\uC9C4\uB3D9"};function Ha(r){let e=Object.fromEntries(Object.keys(ka).map(o=>[o,!0])),t=document.createElement("section"),n=document.createElement("style");t.id="pingpong-hud",t.ariaLabel="\uD0C1\uAD6C",t.hidden=!0,t.classList.toggle("pingpong-touch",r.mobile),t.innerHTML=`
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
   ${Object.entries(ka).map(([o,a])=>`<label><input type="checkbox" data-effect="${o}" checked>${a}</label>`).join("")}
   <label><input type="checkbox" data-diagnostic-toggle>\uD0C0\uACA9 \uC9C4\uB2E8</label>
  </div></details>`,n.textContent=`
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
 `,document.head.append(n),document.body.append(t);let i=new Map,s=o=>(i.has(o)||i.set(o,t.querySelector(`[data-${o}]`)),i.get(o));return t.addEventListener("change",o=>{o.target.dataset.effect in e&&(e[o.target.dataset.effect]=o.target.checked)}),s("diagnostic-toggle").onchange=o=>{e.diagnostic=o.target.checked},{ui:t,by:s,settings:e,dispose(){t.remove(),n.remove()}}}var Y3=Object.freeze({ko:"\uCF69\uCF69\uD325\uD325",en:"\uCF69\uCF69\uD325\uD325"});var Z3="dr_farm_options_v1",$6=Object.freeze({quality:"auto",music:65,effects:80,vibration:!0,musicMuted:!1,effectsMuted:!1,sensitivity:1,view:"follow",textSize:"normal",reducedMotion:!1,realClock:!1,miniMap:!0,practiceInvites:!0,timedActivities:!0,horseFollow:!0}),Qr=(r,e,t,n)=>Number.isFinite(r)?Math.max(e,Math.min(t,r)):n;function Wa(r={}){return{quality:["auto","high","normal"].includes(r.quality)?r.quality:"auto",music:Qr(r.music,0,100,65),effects:Qr(r.effects,0,100,80),vibration:r.vibration!==!1,musicMuted:r.musicMuted===!0,effectsMuted:r.effectsMuted===!0,sensitivity:Qr(r.sensitivity,.4,2,1),view:["follow","overhead"].includes(r.view)?r.view:"follow",textSize:r.textSize==="large"?"large":"normal",reducedMotion:r.reducedMotion===!0,realClock:r.realClock===!0,miniMap:r.miniMap!==!1,practiceInvites:r.practiceInvites!==!1,timedActivities:r.timedActivities!==!1,horseFollow:r.horseFollow!==!1}}function Xa(r){let e="auto";try{r??=globalThis.localStorage,e=r?.getItem("dr_quality")||"auto";let t=r?.getItem(Z3),n=t?JSON.parse(t):{};return Wa({...n,quality:e})}catch{return Wa({quality:e})}}var qa=-1/0,Ya=0;function eo(r=12){let e=globalThis.navigator,t=performance.now(),n=Array.isArray(r)?r.reduce((i,s,o)=>i+(o%2===0?s:0),0):r;if(typeof e?.vibrate!="function"||t-qa<100&&n<=Ya||!Xa().vibration)return!1;try{if(e.vibrate(r)!==!1)return qa=t,Ya=n,!0}catch{}return!1}function Za(r){return document.body.classList.contains("pc-frame")?r?.isContentEditable||r?.closest?.("textarea,input:not([type=button],[type=checkbox],[type=color],[type=file],[type=image],[type=radio],[type=range],[type=reset],[type=submit])"):r?.closest?.("input,textarea,select,[contenteditable]")}var Ja=4;var $3=20;var s8=[{id:"kickboard",name:"\uD0A5\uBCF4\uB4DC",icon:"\u{1F6F4}",speed:14},{id:"bike",name:"\uC790\uC804\uAC70",icon:"\u{1F6B2}",speed:17,x:nn.x+5,z:nn.z+8},{id:"moto",name:"\uC624\uD1A0\uBC14\uC774",icon:"\u{1F3CD}\uFE0F",speed:21,x:nn.x+8,z:nn.z+6},{id:"horse",name:"\uB0B4 \uB9D0",icon:"\u{1F3C7}",speed:$3}];function $a(r,e,t,n,{radius:i=.23,body:s,yaw:o=0}={}){if(!s)return ua(r,e,t,n,i);let{front:a,back:l,side:c=0,radius:u}=s.shape,h=s.root.scale.x,d=Math.cos(o),f=Math.sin(o),p=(_,y)=>{let b=1/0;for(let E=0;E<=5;E++){let M=l+(a-l)*E/5;b=Math.min(b,ds(r,_+(d*c+f*M)*h,y+(-f*c+d*M)*h,(u+.02)*h))}return b},g=p(e,t);return g<0&&(!n||g<p(n.x,n.z)-1e-4)}var K3={Perfect:420,Good:320,Bad:300,\uB193\uCE68:300},j3={Perfect:"\u2726 Perfect",Good:"\u2713 Good",Bad:"\u27CB Bad",\uB193\uCE68:"\uB193\uCE68"},Ka={early:"\uB108\uBB34 \uC77C\uCC0D \uB20C\uB800\uC2B5\uB2C8\uB2E4",miss:"\uB2A6\uAC8C \uB20C\uB800\uC2B5\uB2C8\uB2E4",future:"\uC11C\uBC84\uBCF4\uB2E4 \uC55E\uC120 \uC2DC\uAC01",late:"\uC11C\uBC84\uC5D0 \uB2A6\uAC8C \uB3C4\uCC29",reach:"\uACF5\uC774 \uB2FF\uB294 \uBC94\uC704 \uBC16",position:"\uC11C\uBC84 \uC704\uCE58\uC640 \uCC28\uC774",turn:"\uBC1B\uC744 \uACF5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",input:"\uC774\uC804 \uACF5 \uB610\uB294 \uC798\uBABB\uB41C \uC785\uB825",send:"\uC804\uC1A1\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",timeout:"\uC11C\uBC84 \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"},ja={ready:[[520,520,0,.045,.035]],turn:[[520,520,0,.045,.035],[690,690,.05,.045,.04]],beat1:[[420,420,0,.025,.035]],beat2:[[540,540,0,.025,.035]],Perfect:[[1120,550,0,.072,.16,"triangle"],[1680,1510,.007,.042,.026]],Good:[[840,410,0,.055,.14,"triangle"],[1200,1200,0,.005,.035,"sine",!0]],Bad:[[480,250,0,.04,.09,"triangle"]],bounce:[[1e3,640,0,.036,.08],[1350,1350,0,.004,.025,"sine",!0]],net:[[650,650,0,.042,.07,"sine",!0]],out:[[240,175,0,.085,.08,"triangle"]],point:[[660,660,0,.07,.12],[880,880,.07,.09,.095]],win:[[523,523,0,.12,.12],[659,659,.12,.12,.1],[784,784,.24,.12,.1]]};function f8(r){let e=Ba(r),{ui:t,by:n,settings:i,dispose:s}=Ha(r),o=r.player,a=r.renderer.domElement,l=n("hit"),c=new v,u=new v,h=new v,d=new v,f=null,p=!1,g=!1,_=!1,y=!1,b=0,E=0,M=0,w=0,T=null,C=null,I=null,A=null,F=0,D=null,O=0,G=0,H=!1,U=null,K=null,ne=null,Z=null,J=null,j=0,de=-1/0,le=null,ie=null,De=[],Pe=0,$e=0,Ee=null,Ne=performance.now(),He=-1/0,Ke=!1,Ie=la(),Ge=null,Q=null,sn=(m=performance.now())=>Ie.now(m,r.serverNow()),Ve=(m,x)=>r.presence?.pingpong(m,x),je=(m,x=1)=>{!i.sound&&m!=="beat1"&&m!=="beat2"||!ja[m]||r.audio?.pingpongTone(...ja[m].map(([S,R,N,P,B,...k])=>[S,R,N,P,B*x,...k]))},Nn=[];function ye(m,x,S,R){m.addEventListener(x,S,R),Nn.push(()=>m.removeEventListener(x,S,R))}function St(){return r.jumpAt||r.fishing||r.pendingFishing||r.inWorldActing||r.actionBusy||r.uiBlocked||r.forest?.active||r.splash?.active||r.rhythm?.playing||r.shoe?.playing||r.trainingActive||r.isBroadcasting||r.homeEditing}function Fn(){let m=Math.floor(performance.now());Ve("ping",m)&&(C={token:m,at:m},M=performance.now()+1300)}function kt(){if(!(p||_||St()||!Ln(o.position))){if(!r.presence.rhythmReady){r.notify("\uD0C1\uAD6C \uC5F0\uACB0\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC2ED\uC2DC\uC624.");return}r.stop(),_=!0,y=!1,b=performance.now(),T===null?C||Fn():at()}}function at(){y||(y=Ve("join","single"))}function Ht(m){o.position.set(m.x,r.ground.height(m.x,m.z),m.z)}function ut(){r.input.clear(),r.emit("pingpong:clear-joystick")}function Es(m){if(St()||!Ln(o.position))return Ve("leave"),!1;let x=r.districts.get("village");if(r.stop(),ut(),r.emotes?.cancel(),o.position.z<197.5){let S=r.ground.placePerson(L.x,198.3);S&&Ht(S)}return Ke=r.avatar.rideCode===Ja,r.avatar.setRiding(!1),x?.parkHorseForPingpong(Lr.map(S=>({...S,z:200.15}))),p=!0,I=r.cameraController.captureView(),o.userData.contactRadius=.45,H=!1,O=0,D=null,F=0,Ht(m.entry??In(0)),o.rotation.y=Math.PI/2,t.hidden=!1,document.body.classList.add("pingpong-playing"),a.focus({preventScroll:!0}),!0}function We(){A=null,l.removeAttribute("data-held")}function Xe(m=!0){if(m&&(g=!0,He=performance.now(),Ve("leave")),_=!1,We(),U=null,K=null,ne=null,Z=null,Ee=null,Ge=null,Q=null,!p)return;p=!1,t.hidden=!0,document.body.classList.remove("pingpong-playing"),o.userData.contactRadius=.23,t.querySelector("details").open=!1,I?.(),I=null,r.stop(),ut();let x=r.presence.mapPlayers?.().filter(S=>!S.own)||[];for(let S of zr){let R=r.ground.placePerson(S.x,S.z);if(!(!R||!oa(R)||x.some(N=>Math.hypot(N.x-R.x,N.z-R.z)<.55))){Ht(R),o.rotation.y=0;break}}Ke&&r.districts.get("village")?.resumeHorseAfterPingpong(),Ke=!1}function pe(m,x){Z={value:m,where:x,at:performance.now()},m==="Perfect"?j++:j=0}function ce(m,x){let S=m.judgment??"Good",R=m.kind==="smash",N=x?1:.7;je(S,N*(R?.65:1)),R&&i.sound&&r.audio?.pingpongTone([220,105,0,.085,.075*N,"triangle"],[1600,1600,0,.012,.015*N,"sine",!0]),x&&i.buzz&&(R||S==="Perfect")&&!eo(R?[18,18,28]:18)&&(l.setAttribute("data-fallback",""),setTimeout(()=>l.removeAttribute("data-fallback"),70))}function rn(m){if(!p||!f||r.uiBlocked||g)return;if(f.phase==="serve"&&f.serve===0){Ve("serve",m.direction)?ne={at:performance.now(),grade:"Good",smash:!1}:r.notify("\uC5F0\uACB0\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC2DC \uCCD0 \uC8FC\uC2ED\uC2DC\uC624.");return}let x=f.shot,S=m.frame;if(U)return;if(f.phase!=="rally"||!x||x.result!=="in"||x.target!==0||S?.id!==x.id){Q={result:"turn"};return}let R=Math.floor(S.time),N=fi(R-x.arrivesAt);if(Q={id:x.id,local:Math.round(R-x.arrivesAt),result:N},N==="early")return;if(N==="miss"){Z?.shot!==x.id&&(pe("\uB193\uCE68",x.arrival),Z.shot=x.id);return}if(Math.abs(x.arrival.z-S.z)>1.5){Q.result="reach";return}let{direction:P,smash:B}=m,{x:k,z:X}=S;if(!Ve("hit",[x.id,R,P,Number(B),k,X])){Q.result="send";return}Q.result="pending";let q=ca({incoming:x,time:R,direction:P,smash:B,multiplier:f.multiplier,rally:f.rally+1});U={shot:q,source:x.id,at:performance.now()},ne={at:performance.now(),grade:N,smash:B,where:x.arrival,backhand:x.arrival.z<X},pe(N,x.arrival),ce(q,!0)}function xi({kind:m,data:x}){if(m==="idle"){r.notify("\uB450 \uD310 \uB3D9\uC548 \uC870\uC791\uC774 \uC5C6\uC5B4 \uB9C8\uC744\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4.");return}if(m==="closed"){f=null,Ie.reset(),T=null,C=null,_=!1,g=!1,M=0,w=0,Xe(!1);return}if(m==="pong"&&C?.token===x?.[0]){let X=performance.now(),q=X-C.at;q<=5e3&&(T=Math.round(q),Ie.observe(x[2],X),p&&De.push(T),Ve("ack",x[1])),C=null,_&&!p&&b&&at();return}if(m==="error"){_=!1,r.notify(x);return}if((m==="rejected"||m==="impact")&&Q&&Q.id===x?.id&&Object.assign(Q,{server:x.error,grade:x.grade,result:x.result,rejected:m==="rejected"}),m==="rejected"){U?.source===x?.id&&(U=null,K=null,x.result!=="early"&&f?.shot&&pe("\uB193\uCE68",f.shot.arrival));return}if(m!=="state")return;if(E=performance.now(),!x){f=null,g=!1,p&&Xe(!1);return}if(Ie.observe(x.now,E),g&&x.mine||(p&&!x.mine&&Xe(!1),x.mine&&!p&&!Es(x)))return;let S=f,R=!S||S.id!==x.id,N=R||S?.shot?.id!==x.shot?.id;if(R&&p&&(De=[],Pe=0,$e=0,j=0,Q=null,ie=E),_=!1,f=x,S?.phase==="rally"&&x.phase!=="rally"&&We(),N)if(We(),le=null,U){let X=U.shot,q=x.shot;if(p&&q?.from===0&&q.id===X.id){Pe++,X.kind==="corner"&&$e++,q.judgment!==X.judgment&&pe(q.judgment,ne?.where);let $=sn(),Ae=Dt(X,$),Fe=Dt(q,$);d.set(Ae.x-Fe.x,Ae.y-Fe.y,Ae.z-Fe.z),K=d.lengthSq()>1e-6?{delta:d,at:E}:null}U=null}else p&&x.shot&&ce(x.shot,x.shot.from===0);if(!p)return;if(x.phase==="serve"&&(S?.phase!=="serve"||R)&&(S&&S.serve!==x.serve?je("turn"):i.beats&&je("ready"),x.serve===0&&(Ee={at:E,x:o.position.x,z:o.position.z})),(x.phase==="point"||x.phase==="end")&&(S?.since!==x.since||R)){de=E,Ee=null,je(x.phase==="end"&&x.winner===0?"win":"point"),i.buzz&&eo(24);let X=x.pointResult?.reason,q=x.shot;q&&(X==="net"||X==="out")&&(J={reason:X,where:q.drop,at:E},je(X))}let[P,B]=x.score;n("score").dataset.server=String(x.serve),n("score").setAttribute("aria-label",`\uB098 ${P}, \uC0C1\uB300 ${B}, ${x.serve===0?"\uB0B4 \uC11C\uBE0C":"\uC0C1\uB300 \uC11C\uBE0C"}`),n("score-a").textContent=P,n("score-b").textContent=B,n("cpu").textContent="\uCEF4\uD4E8\uD130 "+Dr[x.level];let k=x.pointResult?.rally??x.rally;n("rally").hidden=k<3,n("rally").textContent=k+" \uB7A0\uB9AC",n("result").hidden=x.phase!=="end",x.phase==="end"&&(n("winner").textContent=x.winner===0?"\uB0B4\uAC00 \uC774\uACBC\uC2B5\uB2C8\uB2E4":"\uCEF4\uD4E8\uD130\uAC00 \uC774\uACBC\uC2B5\uB2C8\uB2E4",n("final").textContent=`${P} : ${B}`,n("summary").textContent=`\uCD5C\uC7A5 \uB7A0\uB9AC ${x.longest}\uD68C \xB7 \uB2E4\uC74C ${Dr[x.nextLevel]}`)}function Qe(m,x,S=0,R=0){return!p||A||f?.phase==="end"?!1:(A={type:m,id:x,down:performance.now(),frame:Ge,x:S,y:R,dx:0,swiped:!1,moved:!1},l.setAttribute("data-held",""),!0)}function on(m,x,S,R=0){if(A?.type!==m||A.id!==x)return;let N=A;We();let P=Fr({...N,up:performance.now(),dx:S-N.x,direction:F,moved:N.moved||Math.hypot(S-N.x,R-N.y)>24});rn({...P,frame:P.time===N.down?N.frame:Ge})}let Gt=()=>A?.type==="touch"?Fr({...A,up:performance.now()}).direction:F;ye(l,"pointerdown",m=>{m.button!==0||!Qe(m.pointerType,m.pointerId,m.clientX,m.clientY)||(l.setPointerCapture(m.pointerId),m.preventDefault())}),ye(l,"pointermove",m=>{A?.id===m.pointerId&&(A.dx=m.clientX-A.x,A.swiped||=Math.abs(A.dx)>=24,A.moved||=Math.hypot(A.dx,m.clientY-A.y)>24)}),ye(l,"pointerup",m=>on(m.pointerType,m.pointerId,m.clientX,m.clientY));for(let m of["pointercancel","lostpointercapture"])ye(l,m,x=>{A?.id===x.pointerId&&We()});ye(l,"click",m=>{m.detail===0&&m.pointerType!=="touch"&&rn({direction:0,smash:!1,frame:Ge})}),ye(a,"pointerdown",m=>{!p||m.button!==0||(m.pointerType==="touch"?m.clientX>=a.getBoundingClientRect().left+a.getBoundingClientRect().width/2&&(D={id:m.pointerId,x:m.clientX,yaw:O},a.setPointerCapture(m.pointerId)):(F=e.aimAt(m.clientX,m.clientY),Qe("mouse",m.pointerId,m.clientX)&&a.setPointerCapture(m.pointerId)),m.preventDefault(),m.stopImmediatePropagation())},!0),ye(a,"pointermove",m=>{p&&(m.pointerType!=="touch"&&(F=e.aimAt(m.clientX,m.clientY)),D?.id===m.pointerId&&(O=te(D.yaw+(m.clientX-D.x)*.005,-Math.PI/6,Math.PI/6)))}),ye(a,"pointerup",m=>{p&&(D?.id===m.pointerId?(D=null,G=performance.now()+1500):on("mouse",m.pointerId,m.clientX),m.stopImmediatePropagation())},!0);for(let m of["pointercancel","lostpointercapture"])ye(a,m,x=>{D?.id===x.pointerId&&(D=null,G=performance.now()+1500),A?.id===x.pointerId&&We()});ye(window,"keydown",m=>{!p||m.defaultPrevented||m.isComposing||Za(m.target)||m.ctrlKey||m.altKey||m.metaKey||["KeyF","Escape","KeyC","KeyV","KeyM"].includes(m.code)&&(m.preventDefault(),m.stopImmediatePropagation(),!m.repeat&&(m.code==="Escape"&&Xe(),m.code==="KeyF"&&Qe("key","F")))},!0),ye(window,"keyup",m=>{m.code==="KeyF"&&A?.id==="F"&&(m.preventDefault(),m.stopImmediatePropagation(),on("key","F",0))},!0),ye(window,"blur",()=>{We(),D=null,G=performance.now()+1500}),ye(n("leave"),"click",()=>Xe()),ye(n("again"),"click",()=>Ve("again"));let _i=r.on("pingpong:message",xi),As=r.on("camera:updated",()=>e.fadeOccluders(p)),Ts=r.on("interact:targets",m=>{if(p||g||St()||!Ln(o.position))return;let x={...ls,y:e.base+.78};m({id:"pingpong",point:x,range:3.3,icon:"\u{1F3D3}",label:"\uD0C1\uAD6C \uB2E8\uC2DD",hideRing:!0,touchRelease:!0,objects:[e.root],run:kt})}),Rs=r.ground.addColliders(e.root,[{blocks(m,x,S,R){return $a(ra,m,x,S,R)||!!f&&!p&&$a(ot,m,x,S,R)}}]);function Cs(m,x,S){if(Ee){let R=te((performance.now()-Ee.at)/300,0,1),N=In(0);if(Math.abs(m)+Math.abs(x)>.01)Ee=null;else{let P=ws(Ee.x,N.x,R)-o.position.x,B=ws(Ee.z,N.z,R)-o.position.z;r.ground.move(o.position,P,B,{canOccupy:Nr,manual:!0}),R===1&&(Ee=null)}}(m||x)&&r.ground.move(o.position,m*S*cs,x*S*cs,{canOccupy:Nr,manual:!0}),o.rotation.y=Math.PI/2}function an(m,x,S,R,N=0,P=0){h.set(x,S+e.base,R).project(r.camera);let B=a.getBoundingClientRect();m.style.left=B.left+(h.x+1)*B.width/2+N+"px",m.style.top=B.top+(1-h.y)*B.height/2+P+"px"}function yi(m,x,S){n("rtt").textContent=T===null?"\u2014 ms":T+" ms",n("guide").textContent=f.phase==="rally"&&S?Pe>=3&&$e<2&&r.mobile?"\u2190 \uBC00\uBA74 \uBAA8\uC11C\uB9AC \u2192":$e>=2&&r.mobile?"\uAFB9 = \uC2A4\uB9E4\uC2DC":r.mobile?"\u261D \uC6D0\uC774 \uB9DE\uC744 \uB54C \uD1A1":"\uC6D0\uC774 \uB9DE\uC744 \uB54C \uD074\uB9AD":"";let R=hs(f.cpu,f.shot,m,f.cpuZ);an(n("cpu"),R.x,1.96,R.z);let N=f.phase==="serve",P=N&&f.serve===0,B=f.serve===0?o.position:R,k=n("serve-ball"),X=n("serve-text");k.hidden=X.hidden=!N;let q=innerHeight<=500&&f.serve===2;N&&an(k,B.x,f.serve===0?2.02:q?1.96:2.26,B.z,q?55:0,q?-11:0);let $=P?"\uB0B4 \uC11C\uBE0C":"\uC0C1\uB300 \uC11C\uBE0C";X.textContent!==$&&(X.textContent=$),t.toggleAttribute("data-my-serve",P);let Ae=n("diagnostic");if(Ae.hidden=!i.diagnostic,i.diagnostic){let ge=Ue=>Number.isFinite(Ue)?`${Ue>0?"+":""}${Ue} ms`:"\u2014",be=Q?.grade??(Q?.rejected?"\uAC70\uC808":Q?.result==="pending"?"\uC751\uB2F5 \uB300\uAE30":"\u2014");Ae.textContent=`\uD654\uBA74 \uC624\uCC28 ${ge(Q?.local)} | \uC11C\uBC84 ${be} ${ge(Q?.server)}`+(Ka[Q?.result]?` | ${Ka[Q.result]}`:"")}let Fe=Z?x-Z.at:1/0,qe=n("grade");qe.hidden=!Z?.where||Fe>=K3[Z.value],qe.hidden||(qe.dataset.grade=Z.value,qe.textContent=j3[Z.value]+(Z.value==="Perfect"&&j>=2?" \xD7"+j:""),qe.style.scale=String(Z.value==="Perfect"&&Fe<160?1+.12*Math.sin(Math.PI*Fe/160):1),an(qe,Z.where.x,Z.where.y+.46,Z.where.z));let et=n("mark");et.hidden=!J||x-J.at>(J.reason==="net"?240:1200),et.hidden||(et.textContent=J.reason==="out"?"\xD7 \uC544\uC6C3":"\uFE4F",an(et,J.where.x,J.where.y+.04,J.where.z));let Vt=A?te((x-A.down)/450,0,1):0,Wt=P?te((f.deadline-m)/3e3,0,1):Vt;l.style.setProperty("--charge",Wt*100+"%"),l.toggleAttribute("data-ready",Vt===1),l.dataset.direction=Gt(),l.hidden=f.phase==="end"}let Ps=r.on("update",()=>{let m=performance.now(),x=sn(m),S=te((m-Ne)/1e3,0,.05);Ne=m;let R=aa(o.position);if(r.started&&R&&r.presence.rhythmReady&&((p||Ln(o.position))&&m>=M&&Fn(),!_&&m>=w&&m-E>=5e3&&Ve("sync")&&(w=m+5e3)),_&&(m-b>4e3?(_=!1,r.notify("\uC785\uAD6C\uC5D0\uC11C \uB2E4\uC2DC \uB20C\uB7EC \uC8FC\uC2ED\uC2DC\uC624.")):!y&&(T!==null||m-b>1300)&&at()),p&&(!r.started||m-E>1e4)&&Xe(),g&&m-He>1e3&&(He=m,Ve("leave")),!p&&f&&(!R||m-E>1e4)&&(f=null),e.root.visible=R||Math.hypot(o.position.x-L.x,o.position.z-L.z)<100,!e.root.visible&&!f)return;U&&m-U.at>1050&&(Q?.id===U.source&&Q.result==="pending"&&(Q.result="timeout"),U=null);let N=U?.shot??f?.shot,P=f?.phase==="rally"?N:null,B=p&&!U&&P?.target===0&&P.result==="in"?P:null,k=B&&x<B.arrivesAt+300?B:null;Ge=B?{id:B.id,time:x,x:o.position.x,z:o.position.z}:null;let X=k&&Math.abs(o.position.z-k.arrival.z)<=1.5,q=A?te((m-A.down)/450,0,1):k&&k.arrivesAt-x<400?.5:0;if(e.updateActors(f,p,x,S,q,ne,i),e.drawBall(P,x,ne,i,K),f?.phase==="serve"&&f.serve===2&&e.drawServeToss(f.deadline-x),e.drawTarget(k,x,X),e.aim(Gt(),p&&f?.phase!=="end"&&(!r.mobile||!!A),!r.mobile),!!p){if(P&&le?.id!==P.id&&(le={id:P.id,bounces:0,beats:0}),P){for(;le.bounces<P.bounces.length&&x>=P.bounces[le.bounces].at;){let $=P.bounces[le.bounces++];x-$.at<130&&je("bounce",le.bounces===2?.7:1)}if(i.beats&&k&&X){let $=k.arrivesAt-x;$<=240&&$>120&&le.beats===0&&(le.beats=1,je("beat1")),$<=120&&$>0&&le.beats<2&&(le.beats=2,je("beat2"))}}yi(x,m,k)}}),vi=()=>i.camera&&!r.reducedMotion;return{get active(){return p},get usesSocket(){return p||_||Ln(o.position)},get info(){return{state:f,rtt:T,samples:De.slice(),acceptedHits:Pe,diagnostic:Q,elapsed:ie&&performance.now()-ie,now:sn()}},move:Cs,restorePlayer:e.restorePlayer,cameraShot(m){if(!p)return null;let x=r.mobile&&innerHeight>innerWidth,S=x?7.25:7,R=performance.now(),N=ne?.smash&&vi()?R-ne.at:1/0,P=N<110?.04*(1-N/110):0,B=N<65?.012*Math.sin(N/65*Math.PI*2)*(1-N/65):0;!D&&R>G&&(O*=Math.exp(-m*13));let k=te((o.position.z-L.z)*.5,-.85,.85),X=L.x-Math.cos(O)*(S-P),q=L.z+k+Math.sin(O)*S+B,$=H?1-Math.exp(-m*14):1;return c.set(ws(c.x,X,$),e.base+(x?5.25:4.8),ws(c.z,q,$)),u.set(L.x+.2,e.base+.8,L.z),H=!0,{camera:c,look:u,fov:(x?54:42)-(vi()?te(1-(R-de)/180,0,1):0)}},dispose(){Xe(!1),_i(),As(),Ts(),Ps(),Rs();for(let m of Nn)m();e.dispose(),s()}}}var ws=zt.lerp;export{$a as courtBlocks,f8 as mountPingpong};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
