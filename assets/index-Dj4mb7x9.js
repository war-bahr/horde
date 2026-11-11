(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Horde`,t=`horde-save-v3`,n=`horde-coach-v3`,r=[`hamlet`,`town`,`city`,`largecity`,`metropolis`,`megacity`],i={hamlet:{id:`hamlet`,name:`Hamlet`,pri:1,labelSize:9,marker:.58,maxAlt:1.45,wall:18,civ:4,armed:1,police:0,army:0,growWall:.45,growArmy:.25,policeAt:220,armyAt:9999,strength0:.45,captureBrains:6,capturePoints:20,spawnMul:.55,capMul:.5,strikeMul:.35,stages:1,buildings:3,towers:0,density:.4,arena:[32,24],icon:`•`},town:{id:`town`,name:`Town`,pri:2,labelSize:10,marker:.78,maxAlt:2.25,wall:40,civ:8,armed:3,police:0,army:0,growWall:.7,growArmy:.55,policeAt:140,armyAt:240,strength0:.7,captureBrains:12,capturePoints:40,spawnMul:.75,capMul:.75,strikeMul:.6,stages:1,buildings:5,towers:0,density:.6,arena:[34,26],icon:`▹`},city:{id:`city`,name:`City`,pri:3,labelSize:11.5,marker:1,maxAlt:3.5,wall:70,civ:12,armed:5,police:1,army:0,growWall:1,growArmy:1,policeAt:80,armyAt:160,strength0:1,captureBrains:25,capturePoints:100,spawnMul:1,capMul:1,strikeMul:1,stages:1,buildings:8,towers:1,density:.85,arena:[36,28],icon:`◆`},largecity:{id:`largecity`,name:`Large City`,pri:4,labelSize:12.5,marker:1.28,maxAlt:4.8,wall:120,civ:20,armed:9,police:3,army:2,growWall:1.15,growArmy:1.15,policeAt:40,armyAt:90,strength0:1.55,captureBrains:45,capturePoints:180,spawnMul:1.2,capMul:1.25,strikeMul:1.45,stages:1,buildings:12,towers:3,density:1.1,arena:[38,30],icon:`◆`},metropolis:{id:`metropolis`,name:`Metropolis`,pri:5,labelSize:14,marker:1.6,maxAlt:6.5,wall:175,civ:30,armed:14,police:6,army:5,growWall:1.3,growArmy:1.25,policeAt:0,armyAt:50,strength0:2.15,captureBrains:80,capturePoints:320,spawnMul:1.4,capMul:1.5,strikeMul:2,stages:2,buildings:18,towers:6,density:1.35,arena:[40,32],icon:`★`},megacity:{id:`megacity`,name:`Megacity`,pri:6,labelSize:16,marker:2.05,maxAlt:99,wall:260,civ:48,armed:22,police:12,army:14,growWall:1.45,growArmy:1.35,policeAt:0,armyAt:0,strength0:3.2,captureBrains:150,capturePoints:650,spawnMul:1.7,capMul:1.9,strikeMul:3,stages:3,buildings:28,towers:12,density:1.75,arena:[44,34],icon:`✸`}},a={min:70,max:96,aim:84},o=[`Veyrasund`,`Aurelith`,`Thalassene`,`Orasthene`],s=[`Highcrown`,`Port Sovereign`,`Iskarra Major`,`Osthaven Reach`,`New Calrow`,`Kessara`],c=`Ashford.Riverton.Valemont.Port Sable.Highmere.Darnwick.Solace.Cape Wren.Iskarra.Osthaven.Brindleford.Mossbottom.Cinderwell.Hartleight.Dunhollow.Elderfen.Pellemire.Yarrowick.Thornvale.Redhallow.Glimmerwick.Bexford.Mallowby.Cranmere.Witherow.Saltfen.Larkshead.Nettlebridge.Ormswell.Greyhaven.Velridge.Quenholm.Barleywick.Fallowmere.Sootford.Wendlemarsh.Palewick.Harrowfen.Millgully.Torven.Westbramble.Eelstead.Copperlode.Finchbury.Droswell.Maplewick.Ulfhaven.Brineport.Candlewick.Rookhaven.Silverpith.Holmlea.Tallowby.Irongate.Nestwick.Proudfen.Larkhall.Coldbarrow.Merrowton.Ashenford.Pellwater.Vossmere.Dunwick.Heartholm.Sableford.Wrenvale.Kettlemire.Old Graston.Port Elles.Highcinders.Dalemoor.Brightfen.Norwick.Selwick.Anvilreach.Fogbarrow.Ivoryreach.Stormglass.Southmere.Little Ost.Upper Darn.Low Valem.East Solace.Gannet Shore.Caer Lumen.Redhollow.Calrow Minor.The Spit.Amberwick.Hollowmere.Pinecroft.Grimfen.Sailward.Mossgate.Brambleport.Winterow.Goldmere.Nesswick.Far Hallow.Shearwater.Oxenford.Duskfen.Lantern Bay.Rowanwick.Chalkhaven.Mudlark.Swiftford.Barleypit.Cinderport.Greenlow.Hartsholm`.split(`.`),l=[{id:`nexus24`,name:`NEXUS 24`,tag:`NX24`,color:`#ffcc33`},{id:`aurorawire`,name:`AURORA WIRE`,tag:`AUR`,color:`#7fd0ff`},{id:`continental`,name:`CONTINENTAL HOUR`,tag:`CH`,color:`#f5cf6b`},{id:`pacificdesk`,name:`PACIFIC DESK`,tag:`PD`,color:`#9ee08a`},{id:`worldledger`,name:`WORLDLEDGER`,tag:`WL`,color:`#ff9a7a`},{id:`northstar9`,name:`NORTHSTAR 9`,tag:`NS9`,color:`#e8e8ff`}],u=[{id:`graveyard`,name:`Graveyard`,desc:`Old soil, shallow graves. The dead rise a little faster.`,spawnMul:1.28,capMul:1,marchMul:1,unlock:null},{id:`sinkhole`,name:`Sinkhole`,desc:`A wound in the earth. More of the horde can gather here.`,spawnMul:1,capMul:1.45,marchMul:1,unlock:null},{id:`lab`,name:`Crashed Lab`,desc:`Something escaped the wreck. You start with Runners.`,spawnMul:1,capMul:1,marchMul:1,unlock:`runners`},{id:`sewer`,name:`Sewer`,desc:`The tunnels run far. Raiding parties march quicker.`,spawnMul:1.05,capMul:1.1,marchMul:1.3,unlock:null}],d={shambler:{side:`zombie`,speed:3.6,hp:16,dmg:5,melee:.85,cd:.7,wall:1,radius:.38,power:1},runner:{side:`zombie`,speed:7.2,hp:8,dmg:4,melee:.8,cd:.55,wall:.7,radius:.34,power:1.15},brute:{side:`zombie`,speed:2.55,hp:46,dmg:12,melee:1.15,cd:.9,wall:4.2,radius:.55,power:3.5},civilian:{side:`human`,speed:4.4,hp:8,dmg:0,range:0,cd:0,radius:.36,power:.22},armed:{side:`human`,speed:3.3,hp:12,dmg:2.5,range:8,cd:1.35,radius:.38,power:1.15},police:{side:`human`,speed:4.1,hp:18,dmg:6.5,range:11,cd:.85,radius:.4,power:1.9},army:{side:`human`,speed:3.6,hp:24,dmg:8,range:12,cd:.75,radius:.42,power:2.6},armor:{side:`human`,speed:2.4,hp:70,dmg:14,range:14,cd:1.1,radius:.7,power:6.5},screamer:{side:`zombie`,speed:4.2,hp:14,dmg:3,melee:.9,cd:.8,wall:.6,radius:.42,power:1.6,aura:5},spitter:{side:`zombie`,speed:3.3,hp:12,dmg:7,melee:.7,range:7.5,cd:1.15,wall:3.4,radius:.38,power:1.8},abomination:{side:`zombie`,speed:2.15,hp:120,dmg:22,melee:1.85,cd:1.05,wall:9,radius:.95,power:8.5},zero:{side:`zombie`,speed:4.4,hp:38,dmg:9,melee:1.05,cd:.6,wall:2.2,radius:.46,power:5,hero:!0},armored:{side:`zombie`,speed:2.6,hp:56,dmg:9,melee:1,cd:.85,wall:3.2,radius:.5,power:3.8}},f=[{id:`hp`,name:`Health`,max:5,baseCost:8,growth:1.6,step:{shambler:4,runner:2,brute:10,screamer:3,spitter:3,abomination:18,armored:12},unit:`hp`,desc:`How much punishment they can take.`},{id:`dmg`,name:`Damage`,max:5,baseCost:10,growth:1.6,step:{shambler:1.2,runner:1,brute:2.5,screamer:.8,spitter:1.6,abomination:4,armored:2.2},unit:`dmg`,desc:`Fists, jaws, and wrecking weight.`},{id:`speed`,name:`Speed`,max:4,baseCost:12,growth:1.65,step:{shambler:.45,runner:.55,brute:.28,screamer:.35,spitter:.25,abomination:.18,armored:.2},unit:`spd`,desc:`How quickly they close the gap.`},{id:`bite`,name:`Bite`,max:5,baseCost:14,growth:1.6,step:{shambler:.12,runner:.12,brute:.1,screamer:.1,spitter:.08,abomination:.08,armored:.09},unit:`bite`,desc:`Infection — faster conversion of the living.`}],p=[`shambler`,`runner`,`brute`,`screamer`,`spitter`,`abomination`,`armored`],m=[`shambler`,`runner`,`brute`,`screamer`,`spitter`,`abomination`,`armored`];function h(){return{shambler:{},runner:{},brute:{},screamer:{},spitter:{},abomination:{},armored:{}}}function g(e,t,n=0){let r=f.find(e=>e.id===t);if(!r)return 0;let i=e===`abomination`?1.7:e===`brute`?1.35:e===`armored`?1.4:e===`spitter`?1.25:e===`screamer`?1.2:e===`runner`?1.15:1;return Math.round(r.baseCost*i*r.growth**n)}function _(e,t={}){let n=d[e];if(!n)return d.shambler;let r=t[e]||{},i={...n};n.side===`zombie`&&(i.bite=.5);for(let t of f){let n=r[t.id]||0;if(!n)continue;let a=t.step[e]||0;t.id===`bite`?i.bite=(i.bite??.5)+a*n:i[t.id]=(i[t.id]||0)+a*n}if(n.side===`zombie`){let e=i.hp/n.hp,t=i.dmg/(n.dmg||1);i.power=n.power*(.3+.35*e+.35*t)}return i}function v(e,t,n={}){let r=f.find(e=>e.id===t),i=n[e]&&n[e][t]||0,a=_(e,n),o=_(e,{...n,[e]:{...n[e]||{},[t]:i+1}}),s=t===`bite`?`bite`:t,c=e=>t===`bite`?`${Math.round((e??.5)*100)}%`:t===`speed`||t===`dmg`?(e??0).toFixed(1):String(Math.round(e??0));return{id:t,name:r.name,desc:r.desc,lv:i,max:r.max,maxed:i>=r.max,cur:c(a[s]),next:i>=r.max?null:c(o[s]),cost:i>=r.max?0:g(e,t,i)}}var y=[{id:`runners`,name:`Runners`,desc:`Unlock fast, fragile dead that close the gap.`,cost:28,once:!0},{id:`brutes`,name:`Brutes`,desc:`Unlock hulking smashers that tear down walls.`,cost:48,once:!0},{id:`raidcap`,name:`Greater Host`,desc:`Raise the size of a raid party.`,cost:22,once:!1,max:4},{id:`march`,name:`Relentless March`,desc:`Raiding parties cross the world faster.`,cost:20,once:!1,max:3},{id:`pit`,name:`Deeper Pit`,desc:`Home grounds raise the dead more often.`,cost:18,once:!1,max:4},{id:`yard`,name:`Bigger Yard`,desc:`More of the horde can gather at a base.`,cost:18,once:!1,max:4},{id:`screamers`,name:`Screamers`,desc:`Unlock howling dead that stir the host around them.`,cost:36,once:!0},{id:`spitters`,name:`Spitters`,desc:`Unlock ranged acid-spitters that eat walls and flesh.`,cost:42,once:!0},{id:`abominations`,name:`Abominations`,desc:`Unlock a rare giant that wrecks buildings and walls.`,cost:70,once:!0},{id:`armored`,name:`Armored Dead`,desc:`Unlock plated dead looted from a military base. Slow, hard to put down.`,cost:55,once:!0}],b={brainPerConvert:1,pointsPerConvert:2,captureBrains:25,capturePoints:100,failPointsPerBrain:2,failFloor:3,failFloorPerHead:.25,wallScrapChance:.28},x={baseCap:24,baseSpawn:9,raidCap:16,marchBase:7,marchPerRad:22},S={wallPerSec:.35,armyPerSec:.04,policeAtAge:80,armyAtAge:160,strikeInterval:28,weakGarrison:6},C=[1,2,4];function w(e){return i[e]||i.city}function T(e={}){return(e.civilian||0)*d.civilian.power+(e.armed||0)*d.armed.power+(e.police||0)*d.police.power+(e.army||0)*d.army.power+(e.armor||0)*d.armor.power+(e.wallHp||0)*.035}function E(e){return e<.5?{kind:`bad`,text:`Badly outmatched — expect to be wiped at the walls.`}:e<.8?{kind:`poor`,text:`An uphill fight. The living have the edge.`}:e<1.2?{kind:`even`,text:`Even odds. The city may hold, or it may fall.`}:e<1.8?{kind:`good`,text:`The host looks strong enough to take this place.`}:{kind:`great`,text:`The city should fall.`}}var D={hamlet:1,town:5,city:20,largecity:50,metropolis:200,megacity:800},O={hamlet:`police`,town:`swat`,city:`army`,largecity:`army`,metropolis:`army`,megacity:`nuke`},k={stages:[{id:`unknown`,at:0,name:`Unknown illness`},{id:`outbreak`,at:2.5,name:`Outbreak`},{id:`quarantine`,at:8,name:`Quarantine`},{id:`confirmed`,at:16,name:`Zombies confirmed`}],capByTier:{hamlet:2,town:6.5,city:100,largecity:100,metropolis:100,megacity:100},captureHeat:{hamlet:.05,town:.2,city:.45,largecity:.8,metropolis:1.2,megacity:1},raidHeat:.03,regionSwatAt:2};k.stages,k.captureHeat,k.raidHeat;function A(e){return D[e]||8}function j(e){return O[e]||`police`}function M(e){return!!e&&![`hamlet`,`town`].includes(e)}function N(e){return e===`megacity`}function ee(e=0){let t=k.stages[0];for(let n of k.stages)e>=n.at&&(t=n);return t}function P(e=0){return ee(e)}var F={assault:{id:`assault`,name:`Assault`,desc:`A direct charge on the walls. Fast and simple.`,trade:`No special bonus — and no extra cost.`},night:{id:`night`,name:`Night Attack`,desc:`Strike in the dark. Humans shoot poorly; the host is harder to spot.`,trade:`Only at night, or wait until the target falls into darkness. Slightly slower march.`,marchMul:.88,humanDmg:.62,humanCd:1.35},siege:{id:`siege`,name:`Siege`,desc:`Surround the place and starve the walls down. The host takes fewer losses.`,trade:`The fight runs long. Walls crumble slowly even without a breach.`,wallDrain:2.4,incoming:.68,marchMul:.8},infiltrate:{id:`infiltrate`,name:`Infiltration`,desc:`Runners slip inside first and turn people before the main host arrives.`,trade:`Needs at least two Runners. The opening is weaker if you send too few.`,needRunners:2,convertPer:1}},te={name:`Patient Zero`,cooldown:48,xpTo:e=>Math.round(8*e*(e+1)*.5),maxLevel:8,perks:[{at:2,id:`virulent`,name:`Virulent`,desc:`Bite converts faster.`},{at:3,id:`tough`,name:`Tough`,desc:`More flesh to burn through.`},{at:4,id:`swift`,name:`Swift`,desc:`Closes faster on the living.`},{at:5,id:`dread`,name:`Dread`,desc:`Nearby humans hesitate.`},{at:6,id:`unending`,name:`Unending`,desc:`Returns from death sooner.`},{at:8,id:`prime`,name:`Patient Prime`,desc:`Apex of the strain.`}]},ne={ratePerLab:.042,setback:.42,setbackFlat:12,distributeDur:9,alarmAfter:16,immuneDur:55,rateMulPerCure:.18,rateMulCap:.7};function re(){return{shambler:0,runner:0,brute:0,screamer:0,spitter:0,abomination:0,armored:0}}var ie={earlyN:5,earlyBrainMul:2.25,earlyHamletWall:.4,earlyNearby:.42,earlySpawnMul:1.4,startShamblers:10,dayLen:80,milestones:[{at:5,brains:40,unlock:`runners`,label:`The first towns fall`},{at:10,brains:80,unlock:`brutes`,label:`A region goes dark`},{at:25,brains:160,unlock:`screamers`,label:`The world starts to notice`}]},ae={stadium:{id:`stadium`,name:`Stadium crush`,desc:`A packed stadium. A huge crowd, if you reach them in time.`,dur:95,brainsMul:3.2,civBonus:36,armed:4,police:2,army:0,walls:8,news:`Crowds are packed into the stadium — officials urge calm`},convoy:{id:`convoy`,name:`Refugee convoy`,desc:`A column of evacuees moving between cities. Catch it on the road.`,dur:75,brainsMul:2.3,civBonus:18,armed:3,police:1,army:0,walls:0,moving:!0,news:`A refugee convoy is on the move — intercept it before it reaches safety`},milbase:{id:`milbase`,name:`Military base`,desc:`Raid the depot and loot the gear. Unlock the Armored Dead.`,dur:110,brainsMul:1.6,brains:50,civBonus:4,armed:4,police:2,army:6,armor:1,walls:70,unlock:`armored`,news:`A military base is exposed — armor and munitions are on the grounds`},festival:{id:`festival`,name:`Night festival`,desc:`Lanterns, music, and a dense crowd in the streets. Time-limited.`,dur:85,brainsMul:2.6,civBonus:28,armed:2,police:1,army:0,walls:6,news:`A night festival is underway — streets packed, few guards`},evac:{id:`evac`,name:`Evacuation`,desc:`A flight or ship is loading. Hit the dock or runway before they leave.`,dur:70,brainsMul:2.4,civBonus:16,armed:3,police:1,army:2,walls:12,news:`An evacuation is loading — a ship or flight may still be caught`}};function oe(e){return ae[e]||ae.stadium}function se(e){let t=1/(1+Math.exp(-3.2*((Number(e)||0)-.82)));return Math.max(.05,Math.min(.96,t))}function ce(e){let t=(1+Math.sqrt(5))/2,n=[[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]].map(e=>{let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]}),r=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];for(let t=0;t<e;t++){let e=new Map,t=(t,r)=>{let i=t<r?t*1e6+r:r*1e6+t,a=e.get(i);if(a!==void 0)return a;let o=n[t],s=n[r],c=[o[0]+s[0],o[1]+s[1],o[2]+s[2]],l=Math.hypot(...c);return n.push([c[0]/l,c[1]/l,c[2]/l]),a=n.length-1,e.set(i,a),a},i=[];for(let[e,n,a]of r){let r=t(e,n),o=t(n,a),s=t(a,e);i.push([e,r,s],[n,o,r],[a,s,o],[r,o,s])}r=i}let i=n.length,a=new Float32Array(i*3);n.forEach((e,t)=>{a[t*3]=e[0],a[t*3+1]=e[1],a[t*3+2]=e[2]});let o=r.length,s=new Uint32Array(o*3);r.forEach((e,t)=>{s[t*3]=e[0],s[t*3+1]=e[1],s[t*3+2]=e[2]});let c=Array.from({length:i},()=>new Set),l=Array.from({length:i},()=>[]);for(let e=0;e<o;e++){let t=s[e*3],n=s[e*3+1],r=s[e*3+2];c[t].add(n),c[t].add(r),c[n].add(t),c[n].add(r),c[r].add(t),c[r].add(n),l[t].push(e),l[n].push(e),l[r].push(e)}let u=new Uint32Array(i+1),d=new Uint32Array(i+1),f=0,p=0;for(let e=0;e<i;e++)u[e]=f,f+=c[e].size,d[e]=p,p+=l[e].length;u[i]=f,d[i]=p;let m=new Uint32Array(f),h=new Uint32Array(p);for(let e=0;e<i;e++){let t=u[e];for(let n of c[e])m[t++]=n;let n=d[e];for(let t of l[e])h[n++]=t}return{N:i,F:o,pos:a,idx:s,nb:m,nbStart:u,vf:h,vfStart:d}}function le(e){let t=e>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var ue=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function de(e=1){let t=le(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512),i=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255],i[e]=r[e]%12;let a=1/6;return function(e,t,n){let o,s,c,l,u=(e+t+n)*.3333333333333333,d=Math.floor(e+u),f=Math.floor(t+u),p=Math.floor(n+u),m=(d+f+p)*a,h=e-(d-m),g=t-(f-m),_=n-(p-m),v,y,b,x,S,C;h>=g?g>=_?(v=1,y=0,b=0,x=1,S=1,C=0):h>=_?(v=1,y=0,b=0,x=1,S=0,C=1):(v=0,y=0,b=1,x=1,S=0,C=1):g<_?(v=0,y=0,b=1,x=0,S=1,C=1):h<_?(v=0,y=1,b=0,x=0,S=1,C=1):(v=0,y=1,b=0,x=1,S=1,C=0);let w=h-v+a,T=g-y+a,E=_-b+a,D=h-x+2*a,O=g-S+2*a,k=_-C+2*a,A=h-1+3*a,j=g-1+3*a,M=_-1+3*a,N=d&255,ee=f&255,P=p&255,F=.6-h*h-g*g-_*_;if(F<0)o=0;else{let e=ue[i[N+r[ee+r[P]]]];F*=F,o=F*F*(e[0]*h+e[1]*g+e[2]*_)}let te=.6-w*w-T*T-E*E;if(te<0)s=0;else{let e=ue[i[N+v+r[ee+y+r[P+b]]]];te*=te,s=te*te*(e[0]*w+e[1]*T+e[2]*E)}let ne=.6-D*D-O*O-k*k;if(ne<0)c=0;else{let e=ue[i[N+x+r[ee+S+r[P+C]]]];ne*=ne,c=ne*ne*(e[0]*D+e[1]*O+e[2]*k)}let re=.6-A*A-j*j-M*M;if(re<0)l=0;else{let e=ue[i[N+1+r[ee+1+r[P+1]]]];re*=re,l=re*re*(e[0]*A+e[1]*j+e[2]*M)}return 32*(o+s+c+l)}}function fe(e){let t=Math.imul(e^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296}var pe=.05,me={DEEP:0,SEA:1,BEACH:2,GRASS:3,FOREST:4,JUNGLE:5,DESERT:6,TUNDRA:7,SNOW:8,MOUNTAIN:9,ICE:10},he=[`#1b4f8f`,`#2fa3c4`,`#ecd8a4`,`#95c45c`,`#4a9a4c`,`#2b8a55`,`#e3c07e`,`#a9b48f`,`#f2f6fb`,`#8f857b`,`#dff0fa`],ge=[0,0,.55,1,.72,.55,.18,.26,0,.1,0],I=128,_e=64,ve=class{constructor(e=6){let t=ce(e);Object.assign(this,t);let n=this.N;this.height=new Float32Array(n),this.temp=new Float32Array(n),this.moist=new Float32Array(n),this.biome=new Uint8Array(n),this.coastal=new Uint8Array(n),this.flora=new Float32Array(n),this.fauna=new Float32Array(n),this.fert=new Float32Array(n),this.lift=new Float32Array(n),this.owner=new Int8Array(n).fill(-1),this.lat=new Float32Array(n),this.lon=new Float32Array(n),this.params={tilt:23,dist:1,atmo:.55},this.adapt=new Float32Array(11);for(let e=0;e<n;e++){let t=this.pos[e*3+1];this.lat[e]=Math.asin(Math.max(-1,Math.min(1,t))),this.lon[e]=Math.atan2(this.pos[e*3+2],this.pos[e*3])}this.bucketStart=new Uint32Array(8193);let r=new Uint32Array(n),i=new Uint32Array(8192);for(let e=0;e<n;e++){let t=this.cellIndex(this.lat[e],this.lon[e]);r[e]=t,i[t]++}let a=0;for(let e=0;e<8192;e++)this.bucketStart[e]=a,a+=i[e];this.bucketStart[8192]=a,this.bucket=new Uint32Array(n);let o=this.bucketStart.slice(0,8192);for(let e=0;e<n;e++)this.bucket[o[r[e]]++]=e;this.gridV=new Uint32Array(8192);for(let e=0;e<_e;e++)for(let t=0;t<I;t++){let n=((e+.5)/_e-.5)*Math.PI,r=(t+.5)/I*Math.PI*2-Math.PI;this.gridV[e*I+t]=this.nearest(Math.cos(n)*Math.cos(r),Math.sin(n),Math.cos(n)*Math.sin(r))}this.gridM=new Float32Array(8192)}cellIndex(e,t){let n=Math.floor((e/Math.PI+.5)*_e);n=Math.max(0,Math.min(63,n));let r=Math.floor((t+Math.PI)/(Math.PI*2)*I);return r=(r%I+I)%I,n*I+r}nearest(e,t,n){let r=Math.hypot(e,t,n)||1;e/=r,t/=r,n/=r;let i=Math.asin(Math.max(-1,Math.min(1,t))),a=Math.atan2(n,e),o=Math.floor((i/Math.PI+.5)*_e);o=Math.max(0,Math.min(63,o));let s=Math.floor((a+Math.PI)/(Math.PI*2)*I),c=-1,l=-2,u=this.pos;for(let r=Math.max(0,o-1);r<=Math.min(63,o+1);r++){let i=Math.min(Math.abs((r/_e-.5)*Math.PI),Math.abs(((r+1)/_e-.5)*Math.PI)),a=Math.min(I/2,Math.ceil(1.2/Math.max(Math.cos(i),.01))+1);for(let i=-a;i<=a;i++){let o=((s+i)%I+I)%I,d=r*I+o;for(let r=this.bucketStart[d];r<this.bucketStart[d+1];r++){let i=this.bucket[r],a=u[i*3]*e+u[i*3+1]*t+u[i*3+2]*n;a>l&&(l=a,c=i)}if(a>=I/2&&i>-a+I-1)break}}return c}radiusAt(e){return 1+this.height[e]*pe+this.lift[e]}surfaceR(e){return 1+Math.max(0,this.height[e])*pe+this.lift[e]}region(e,t){let n=[],r=[],i=Math.cos(t),a=this.pos,o=a[e*3],s=a[e*3+1],c=a[e*3+2],l=new Set([e]),u=[e];for(;u.length;){let e=u.pop(),d=a[e*3]*o+a[e*3+1]*s+a[e*3+2]*c;if(!(d<i)){n.push(e),r.push(Math.acos(Math.min(1,d))/t);for(let t=this.nbStart[e];t<this.nbStart[e+1];t++){let e=this.nb[t];l.has(e)||(l.add(e),u.push(e))}}}return[n,r]}generate(e=1234){let t=de(e),n=de(e+17),r=de(e+41),i=this.N,a=this.pos,o=this.height,s=new Float32Array(i);for(let e=0;e<i;e++){let i=a[e*3],o=a[e*3+1],c=a[e*3+2],l=r(i*1.3+5,o*1.3,c*1.3)*.35,u=r(i*1.3,o*1.3+9,c*1.3)*.35,d=0,f=1,p=1.15,m=0;for(let e=0;e<5;e++)d+=f*t((i+l)*p,(o+u)*p,c*p),m+=f,f*=.5,p*=2.05;d/=m;let h=0;f=1,p=2.2,m=0;for(let e=0;e<3;e++)h+=f*(1-Math.abs(n(i*p,o*p,c*p))),m+=f,f*=.5,p*=2.1;h/=m,s[e]=d+Math.max(0,d+.05)*h**3*.9}let c=Float32Array.from(s).sort(),l=c[Math.floor(i*.63)],u=c[0],d=c[i-1];for(let e=0;e<i;e++){let t=s[e]-l;t<0?o[e]=-((-t/(l-u))**.6)*.95:o[e]=(t/(d-l))**1.05*.95+.02}this.flora.fill(0),this.fauna.fill(0),this.fert.fill(0),this.owner.fill(-1),this.adapt.fill(0),this.lift.fill(0),this.seed=e}computeClimate(){let{tilt:e,dist:t,atmo:n}=this.params,r=this.N,i=this.height,a=14+(1-t)*85+(n-.5)*18,o=a+13,s=60-e*.75;this.globalTemp=a;for(let e=0;e<r;e++){let t=0;if(i[e]>=0){for(let n=this.nbStart[e];n<this.nbStart[e+1];n++)if(i[this.nb[n]]<0){t=1;break}}this.coastal[e]=t}let c=this.gridM,l=new Float32Array(I);for(let e=0;e<_e;e++){let t=((e+.5)/_e-.5)*180,r=Math.abs(t),a=r<30?-1:r<60?1:-1,o=.8+.5*Math.exp(-((t/11)**2))-.5*Math.exp(-(((r-27)/9)**2))+.18*Math.exp(-(((r-55)/10)**2))-.25*be(62,90,r),s=.6;for(let t=0;t<2;t++){let t=0;for(let n=0;n<I;n++){let r=a>0?n:127-n,o=i[this.gridV[e*I+r]],c;if(o<0)s+=(1-s)*.3,c=s,t=0;else{let e=o,n=Math.max(0,e-t),r=Math.min(.6,n*2.5);c=s*(1+r*1.5),s*=.97-r*.55-(e>.45?.1:0),s=Math.max(.02,s),t=e}l[r]=c}}for(let t=0;t<I;t++)c[e*I+t]=Math.min(1.2,l[t]*o*(.45+n*1.1))}for(let e=0;e<r;e++){let t=this.lat[e],n=Math.abs(Math.sin(t)),r=i[e],a=o-s*n*n-30*Math.max(0,r)+(this.anomTemp||0);this.temp[e]=a;let l=(t/Math.PI+.5)*_e-.5,u=(this.lon[e]+Math.PI)/(Math.PI*2)*I-.5,d=Math.max(0,Math.min(63,Math.floor(l))),f=Math.min(63,d+1),p=Math.max(0,Math.min(1,l-d)),m=Math.floor(u),h=u-m,g=(m%I+I)%I,_=(g+1)%I,v=(c[d*I+g]*(1-h)+c[d*I+_]*h)*(1-p)+(c[f*I+g]*(1-h)+c[f*I+_]*h)*p;this.moist[e]=Math.min(1,Math.max(0,v+(this.coastal[e]?.12:0)+this.fert[e]*.25+(this.anomMoist||0))),this.biome[e]=ye(r,a,this.moist[e],this.coastal[e])}}stats(){let e=Array(11).fill(0),t=0,n=0,r=0,i=0;for(let a=0;a<this.N;a++)e[this.biome[a]]++,this.height[a]>=0&&(t++,n+=this.flora[a],r+=this.fauna[a]),i+=this.temp[a];return{counts:e,land:t,floraCover:t?n/t:0,faunaCover:t?r/t:0,avgTemp:i/this.N}}};function ye(e,t,n,r){return e<0?t<-9?me.ICE:e<-.32?me.DEEP:me.SEA:t<-9?me.SNOW:e>.55?t<2?me.SNOW:me.MOUNTAIN:e<.05&&r&&t>-2?me.BEACH:t<1?me.TUNDRA:n<.24?t>7?me.DESERT:me.TUNDRA:n<.32&&t>26?me.DESERT:n<.46?me.GRASS:t>20&&n>.6?me.JUNGLE:me.FOREST}function be(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}function xe(e,t,n){let r=e.pos,i=r[t*3]*r[n*3]+r[t*3+1]*r[n*3+1]+r[t*3+2]*r[n*3+2];return Math.acos(Math.max(-1,Math.min(1,i)))}function L(e,t,n){if(t===n)return[t];let r=e.N,i=new Float32Array(r).fill(1/0),a=new Int32Array(r).fill(-1),o=new Float32Array(r).fill(1/0),s=new Uint8Array(r);i[t]=0,o[t]=xe(e,t,n);let c=[t],l=(e,t)=>o[c[e]]<o[c[t]],u=(e,t)=>{let n=c[e];c[e]=c[t],c[t]=n},d=e=>{for(;e>0;){let t=e-1>>1;if(!l(e,t))break;u(e,t),e=t}},f=e=>{let t=c.length;for(;;){let n=e,r=e*2+1,i=r+1;if(r<t&&l(r,n)&&(n=r),i<t&&l(i,n)&&(n=i),n===e)break;u(e,n),e=n}};s[t]=1;let p=!1,m=0;for(;c.length&&m++<r*2;){let t=c[0],r=c.pop();if(c.length&&(c[0]=r,f(0)),s[t]=0,t===n){p=!0;break}for(let r=e.nbStart[t];r<e.nbStart[t+1];r++){let l=e.nb[r],u=e.height[l]<0&&e.height[t]<0?1.12:e.height[l]<0?1.3:1,f=i[t]+xe(e,t,l)*u;if(f<i[l]){if(i[l]=f,a[l]=t,o[l]=f+xe(e,l,n),!s[l])c.push(l),d(c.length-1),s[l]=1;else{let e=c.indexOf(l);e>=0&&d(e)}}}}if(!p||a[n]<0)return Se(e,t,n);let h=[];for(let e=n;e>=0;e=a[e])h.push(e);return h.reverse(),h}function Se(e,t,n){let r=[t],i=t,a=0;for(;i!==n&&a++<4e3;){let t=i,a=xe(e,i,n);for(let r=e.nbStart[i];r<e.nbStart[i+1];r++){let i=e.nb[r],o=xe(e,i,n);o<a&&(a=o,t=i)}if(t===i)break;r.push(t),i=t}return r[r.length-1]!==n&&r.push(n),r}function Ce(e,t,n){if(!t.length)return{x:1,y:0,z:0,v:0};if(n<=0){let n=t[0];return{x:e.pos[n*3],y:e.pos[n*3+1],z:e.pos[n*3+2],v:n}}if(n>=1){let n=t[t.length-1];return{x:e.pos[n*3],y:e.pos[n*3+1],z:e.pos[n*3+2],v:n}}let r=t.length-1,i=n*r,a=Math.min(r-1,Math.floor(i)),o=i-a,s=t[a],c=t[a+1],l=e.pos[s*3],u=e.pos[s*3+1],d=e.pos[s*3+2],f=e.pos[c*3],p=e.pos[c*3+1],m=e.pos[c*3+2],h=l*f+u*p+d*m;h=Math.max(-1,Math.min(1,h));let g=Math.acos(h);if(g<1e-5)return{x:l,y:u,z:d,v:s};let _=Math.sin(g),v=Math.sin((1-o)*g)/_,y=Math.sin(o*g)/_,b=l*v+f*y,x=u*v+p*y,S=d*v+m*y,C=Math.hypot(b,x,S)||1;return{x:b/C,y:x/C,z:S/C,v:o<.5?s:c}}var we=class{constructor(e=1,t=6){this.planet=new ve(t),this.seed=e|0||1,this.planet.generate(this.seed),this.planet.computeClimate();for(let e of[`N`,`F`,`pos`,`idx`,`nb`,`nbStart`,`vf`,`vfStart`,`height`,`temp`,`moist`,`biome`,`coastal`,`lat`,`lon`,`lift`,`flora`,`fauna`,`fert`,`params`])this[e]=this.planet[e];this.nearest=(...e)=>this.planet.nearest(...e),this.radiusAt=e=>this.planet.radiusAt(e),this.surfaceR=e=>this.planet.surfaceR(e),this.region=(e,t)=>this.planet.region(e,t),this.landmasses=this._findLandmasses(),this.cities=this._placeCities(),this.routes=[]}_findLandmasses(){let e=this.planet,t=e.N,n=new Int32Array(t).fill(-1),r=[],i=t=>e.height[t]>=.03;for(let a=0;a<t;a++){if(!i(a)||n[a]>=0)continue;let t=[],o=[a];for(n[a]=r.length;o.length;){let r=o.pop();t.push(r);for(let t=e.nbStart[r];t<e.nbStart[r+1];t++){let r=e.nb[t];n[r]<0&&i(r)&&(n[r]=n[a],o.push(r))}}let s=0;for(let n of t)s+=e.lat[n];r.push({id:r.length,verts:t,size:t.length,midLat:s/t.length})}return r.sort((e,t)=>t.size-e.size),this.landId=n,r}_placeCities(){let e=this.planet,t=le(this.seed^2654435769),n=this.landmasses.filter(e=>e.size>=28),r=n.reduce((e,t)=>e+t.size,0)||1,i=a.aim,l=n.map(e=>{let t;return t=e.size>=1800?Math.max(14,Math.round(i*e.size/r)):e.size>=400?Math.max(5,Math.round(i*e.size/r)):e.size>=120?Math.max(3,Math.round(i*e.size/r)):e.size>=50?Math.max(2,Math.min(4,Math.round(i*e.size/r))):1,{mass:e,n:t}}),u=l.reduce((e,t)=>e+t.n,0);if(u>a.max){let e=u-a.max;for(let t=0;t<l.length&&e>0;t++){let n=l[t].mass.size>=50?2:1,r=Math.min(e,Math.max(0,l[t].n-n));l[t].n-=r,e-=r}}else if(u<a.min){let e=a.min-u;for(let t=0;t<l.length&&e>0;t++){let n=l[t].mass.size>=400?28:l[t].mass.size>=120?10:5,r=Math.min(e,Math.max(0,n-l[t].n));l[t].n+=r,e-=r}}u=l.reduce((e,t)=>e+t.n,0);let d=u>=80?3:2,f=u>=80?5:4,p=Math.max(7,Math.round(u*.1)),m=Math.max(12,Math.round(u*.18)),h=Math.max(18,Math.round(u*.28)),g=u-d-f-p-m-h;g<12&&(g=12);let _=[],v=(e,t)=>{for(let n=0;n<t;n++)_.push(e)};v(`megacity`,d),v(`metropolis`,f),v(`largecity`,p),v(`city`,m),v(`town`,h),v(`hamlet`,Math.max(0,u-_.length));let y={megacity:.7,metropolis:.38,largecity:.26,city:.18,town:.13,hamlet:.095},b=[],x=(t,n)=>{let r=y[n]||.12;for(let i of b){let a=Math.min(r,y[i.tier]||.12)*(i.tier===`megacity`||n===`megacity`?1.15:1);if(xe(e,i.v,t)<a*.85)return!0}return!1},S=(n,r)=>{let i=e.biome[n];if(i===me.SNOW||i===me.ICE||i===me.MOUNTAIN||e.height[n]<.05)return 0;let a=ge[i]||0;if(!(a<.12&&i!==me.BEACH&&r===`hamlet`)&&a<.16&&r!==`hamlet`)return 0;let o=Math.abs(e.lat[n]),s=1-o/(Math.PI/2)*(r===`megacity`||r===`metropolis`?.7:.45);if(r===`megacity`&&o>1.05)return 0;let c=e.coastal[n]?r===`hamlet`?1.05:1.2:1;return a<(r===`megacity`?.4:r===`metropolis`?.28:.12)&&i!==me.BEACH?a*.15:(a+.15)*s*c*(.75+t()*.5)};new Map(n.map(e=>[e.id,e]));let C=new Map(l.map(e=>[e.mass.id,e.n])),w=[...l].sort((e,t)=>t.mass.size-e.mass.size),T=(e,t,n)=>{let r=t;for(let{mass:t}of n){if(r<=0)break;let n=C.get(t.id)||0;if(n<=0)continue;let i=[];for(let n of t.verts){let t=S(n,e);t>0&&i.push({v:n,score:t})}i.sort((e,t)=>t.score-e.score);let a=0,o=e===`megacity`?1:Math.min(n,r,e===`metropolis`?2:n);for(let s of i){if(a>=o)break;x(s.v,e)||(b.push({v:s.v,score:s.score,mass:t.id,massSize:t.size,tier:e}),C.set(t.id,n-a-1),a++,r--)}a&&C.set(t.id,C.get(t.id)||0)}return r},E=d;E=T(`megacity`,E,w.slice(0,Math.max(d,3))),E&&T(`megacity`,E,w);let D=f;D=T(`metropolis`,D,w);let O=p;O=T(`largecity`,O,w);let k=m;k=T(`city`,k,w);let A=h;A=T(`town`,A,w),T(`hamlet`,Math.max(0,u-b.length),w),b.length<a.min&&T(`hamlet`,a.min-b.length,w);let j=new Set,M=e=>{for(let t of e)if(!j.has(t))return j.add(t),t;return null},N=c.slice();for(let e=N.length-1;e>0;e--){let n=Math.floor(t()*(e+1)),r=N[e];N[e]=N[n],N[n]=r}let ee={megacity:0,metropolis:1,largecity:2,city:3,town:4,hamlet:5};return b.sort((e,t)=>ee[e.tier]-ee[t.tier]||t.score-e.score),b.map((t,n)=>{let r=null;return t.tier===`megacity`?r=M(o):t.tier===`metropolis`&&(r=M(s)),r||(r=M(N)||`Hold ${n+1}`),{id:`c`+n,name:r,v:t.v,lat:e.lat[t.v],lon:e.lon[t.v],tier:t.tier,landmass:t.mass,landmassSize:t.massSize}})}cityById(e){return this.cities.find(t=>t.id===e)||null}settlementReport(){let e={},t={};for(let t of r)e[t]=0;for(let n of this.cities){e[n.tier]=(e[n.tier]||0)+1;let r=`m`+n.landmass;t[r]||(t[r]={id:n.landmass,size:n.landmassSize,n:0,tiers:{}}),t[r].n++,t[r].tiers[n.tier]=(t[r].tiers[n.tier]||0)+1}let n=Object.values(t).sort((e,t)=>t.size-e.size),i=this.landmasses.filter(e=>e.size>=28&&!n.some(t=>t.id===e.id)).map(e=>({id:e.id,size:e.size,n:0}));return{total:this.cities.length,byTier:e,byMass:n,decentMasses:this.landmasses.filter(e=>e.size>=28).length,uninhabited:i}}landAt(e,t,n,r=!1){let i=this.nearest(e,t,n);if(i<0)return-1;if(!r&&this.height[i]<.02){let r=-1,a=-2,o=i=>{if(this.height[i]<.02)return;let o=this.pos[i*3]*e+this.pos[i*3+1]*t+this.pos[i*3+2]*n;o>a&&(a=o,r=i)};o(i);for(let e=this.nbStart[i];e<this.nbStart[i+1];e++){let t=this.nb[e];o(t);for(let e=this.nbStart[t];e<this.nbStart[t+1];e++)o(this.nb[e])}return r}return i}openOceanVert(){let e=-1,t=-1;for(let n=0;n<this.N;n++){if(this.height[n]>-.25)continue;let r=Math.abs(this.lat[n]);if(r>.9)continue;let i=!1;for(let e of this.cities)if(this.pos[n*3]*this.pos[e.v*3]+this.pos[n*3+1]*this.pos[e.v*3+1]+this.pos[n*3+2]*this.pos[e.v*3+2]>.72){i=!0;break}if(i)continue;let a=-this.height[n]*(1.1-r);a>t&&(t=a,e=n)}if(e<0){for(let e=0;e<this.N;e++)if(this.height[e]<-.3)return e}return e}},R=[{id:`stealth`,name:`Stealth`,hue:`#8ad4e8`,blurb:`Quieter spread. The world notices later.`},{id:`brute`,name:`Brute`,hue:`#e0a07a`,blurb:`Harder flesh, heavier blows, stronger sieges.`},{id:`virulent`,name:`Virulent`,hue:`#9ee08a`,blurb:`Faster infection. The labs work in a fog.`}],Te=[{id:`st1`,branch:`stealth`,tier:1,name:`Silent Stir`,cost:22,req:[],desc:`The living grow uneasy more slowly. Alarm rises 22% slower.`,fx:{alarmGrowth:.78}},{id:`st2`,branch:`stealth`,tier:2,name:`Night Eyes`,cost:30,req:[`st1`],desc:`Night raids hit 20% harder. Waiting for darkness is worth it.`,fx:{nightPower:1.2}},{id:`st3`,branch:`stealth`,tier:2,name:`Soft Footfalls`,cost:34,req:[`st1`],desc:`Infiltration is sharper, and a single Runner can lead the slip-in.`,fx:{infiltratePower:1.22,infiltrateNeed:-1}},{id:`st4`,branch:`stealth`,tier:3,name:`Hush`,cost:48,req:[`st2`,`st3`],desc:`Captures and marching hosts barely register. Alarm bumps fall 30%.`,fx:{alarmCapture:.7,alarmRaid:.7}},{id:`st5`,branch:`stealth`,tier:4,name:`Phantom Host`,cost:70,req:[`st4`],desc:`Night and infiltration grow another 18%. Alarm itself fades into the background.`,fx:{nightPower:1.18,infiltratePower:1.18,alarmGrowth:.85}},{id:`br1`,branch:`brute`,tier:1,name:`Iron Jaw`,cost:24,req:[],desc:`All the dead gain 14% more flesh to burn through.`,fx:{hp:1.14}},{id:`br2`,branch:`brute`,tier:2,name:`Heavy Hands`,cost:32,req:[`br1`],desc:`The host hits 14% harder. A direct assault carries 12% more weight.`,fx:{dmg:1.14,assaultPower:1.12}},{id:`br3`,branch:`brute`,tier:2,name:`Wallbreakers`,cost:36,req:[`br1`],desc:`Siege work tears walls 25% faster, and the host shrugs off more incoming fire.`,fx:{siegePower:1.15,siegeWall:1.25,siegeIncoming:.88}},{id:`br4`,branch:`brute`,tier:3,name:`Abomination Blood`,cost:55,req:[`br2`],desc:`Abominations swell: +35% health and damage. Brutes toughen too.`,fx:{abomHp:1.35,abomDmg:1.35,bruteHp:1.12,bruteDmg:1.12}},{id:`br5`,branch:`brute`,tier:4,name:`Titan's Due`,cost:80,req:[`br3`,`br4`],desc:`Assault and siege gain another 20%. Brutes and abominations grow still heavier.`,fx:{assaultPower:1.2,siegePower:1.2,bruteHp:1.18,bruteDmg:1.18,abomHp:1.18,abomDmg:1.18}},{id:`vi1`,branch:`virulent`,tier:1,name:`Weeping Sores`,cost:24,req:[],desc:`Bites convert 25% faster. The blight crawls farther, sooner.`,fx:{bite:1.25,blightAge:1.35}},{id:`vi2`,branch:`virulent`,tier:2,name:`Fever Pitch`,cost:32,req:[`vi1`],desc:`The dead gather at a base 22% faster. Infection on the globe thickens quicker.`,fx:{spawn:1.22,blightAge:1.2}},{id:`vi3`,branch:`virulent`,tier:2,name:`Feral Bite`,cost:36,req:[`vi1`],desc:`Another 20% conversion. Infiltration turns more of the living in the opening.`,fx:{bite:1.2,infiltrateConvert:1.4}},{id:`vi4`,branch:`virulent`,tier:3,name:`Lab Fog`,cost:50,req:[`vi2`,`vi3`],desc:`Cure research crawls. The laboratories lose 28% of their pace.`,fx:{cureRate:.72}},{id:`vi5`,branch:`virulent`,tier:4,name:`Pandemic`,cost:80,req:[`vi4`],desc:`Conversion and blight surge again. The cure slows another 18%.`,fx:{bite:1.18,blightAge:1.25,cureRate:.82}}],z=Object.fromEntries(Te.map(e=>[e.id,e])),B=[{id:`startHorde`,name:`Deep Brood`,desc:`+4 shamblers at the nest now, and +4 after every future cure.`,applyNow:(e,t=1)=>{e.home&&(e.home.stock.shambler=(e.home.stock.shambler||0)+4*t)},onCure:(e,t)=>{e.home&&(e.home.stock.shambler=(e.home.stock.shambler||0)+4*t)},startHorde:4},{id:`cheapRaids`,name:`Thrift of the Grave`,desc:`Mutation and upgrade costs fall 8% (stacks).`,fx:{upgradeCost:.92}},{id:`pzFast`,name:`Quickening`,desc:`Patient Zero learns 30% faster.`,fx:{pzXp:1.3}},{id:`immunePierce`,name:`Old Strain`,desc:`Freshly cured towns resist 40% less. The immunity window weakens.`,fx:{immune:.6}},{id:`startBrains`,name:`Cached Brains`,desc:`Gain 20 brains now, and 20 more after every future cure.`,applyNow:(e,t=1)=>{e.brains+=20*t},onCure:(e,t)=>{e.brains+=20*t}},{id:`quietWorld`,name:`Forgotten Nest`,desc:`Alarm grows 10% more slowly, permanently.`,fx:{alarmGrowth:.9}},{id:`deepRoots`,name:`Deep Roots`,desc:`The nest gathers the dead 12% faster and holds 10% more.`,fx:{spawn:1.12,cap:1.1}},{id:`warhost`,name:`Warhost`,desc:`Raid parties may take 2 more of the dead (stacks).`,raidCap:2},{id:`labBane`,name:`Lab Bane`,desc:`The cure race runs 10% slower, permanently.`,fx:{cureRate:.9}},{id:`nightBorn`,name:`Night-Born`,desc:`Night raids carry a permanent 10% edge.`,fx:{nightPower:1.1}}],Ee=Object.fromEntries(B.map(e=>[e.id,e])),De=[`raidcap`,`march`,`pit`,`yard`],Oe=[`runners`,`brutes`,`screamers`,`spitters`,`abominations`,`armored`];function ke(){return{alarmGrowth:1,alarmCapture:1,alarmRaid:1,nightPower:1,infiltratePower:1,infiltrateNeed:0,infiltrateConvert:1,assaultPower:1,siegePower:1,siegeWall:1,siegeIncoming:1,hp:1,dmg:1,abomHp:1,abomDmg:1,bruteHp:1,bruteDmg:1,bite:1,blightAge:1,spawn:1,cap:1,cureRate:1,upgradeCost:1,pzXp:1,immune:1,raidCapBonus:0,startHorde:0}}function Ae(e={},t={stacks:{}}){let n=ke(),r=(e,t)=>{t!=null&&(n[e]=(n[e]||1)*t)};for(let t of Te)if(e[t.id]&&t.fx)for(let[e,i]of Object.entries(t.fx))e===`infiltrateNeed`?n.infiltrateNeed+=i:r(e,i);let i=t&&t.stacks||{};for(let e of B){let t=i[e.id]||0;if(t){if(e.fx)for(let[n,i]of Object.entries(e.fx)){let e=1;for(let n=0;n<t;n++)e*=i;r(n,e)}e.raidCap&&(n.raidCapBonus+=e.raidCap*t),e.startHorde&&(n.startHorde+=e.startHorde*t)}}return n}function je(e,t,n){if(!e||!n||e.side===`human`)return e;let r={...e};r.hp*=n.hp||1,r.dmg*=n.dmg||1,t===`abomination`&&(r.hp*=n.abomHp||1,r.dmg*=n.abomDmg||1),t===`brute`&&(r.hp*=n.bruteHp||1,r.dmg*=n.bruteDmg||1),r.bite!=null&&(r.bite*=n.bite||1);let i=d[t]||d.shambler;if(i.side===`zombie`){let e=r.hp/(i.hp||1),t=r.dmg/(i.dmg||1);r.power=i.power*(.3+.35*e+.35*t)}return r}function Me(e,t,n){return je(_(e,t),e,n)}function Ne(e,t,n,r){let i=0;for(let n of m){let a=Me(n,t,r);i+=(e[n]||0)*a.power}if(n){let e=Me(`zero`,t,r);i+=e.power*(1+.12*((n.level||1)-1))}return i}function Pe(e){return z[e]||null}function Fe(e,t){return!!(e&&e[t])}function Ie(e,t){let n=z[t];return!n||e&&e[t]?!1:(n.req||[]).every(t=>e&&e[t])}function Le(e,t={}){let n=z[e];return n?Math.max(1,Math.round(n.cost*(t.upgradeCost||1))):0}function Re(e=Math.random,t=[]){let n=B.filter(e=>!t.includes(e.id)),r=(n.length>=3?n:B.slice()).slice();for(let t=r.length-1;t>0;t--){let n=Math.floor(e()*(t+1));[r[t],r[n]]=[r[n],r[t]]}return r.slice(0,3).map(e=>e.id)}function ze(e={}){let t=0,n={};for(let r of De){let i=y.find(e=>e.id===r);if(!i)continue;let a=e[r],o=i.once?+!!a:a||0,s=0;for(let e=0;e<o;e++)s+=i.cost+e*Math.round(i.cost*.6);t+=s,s&&(n[r]=o)}return{refund:t,spent:n}}var Be=1,Ve=()=>Be++;function He(e){let t=e|0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ue=class{constructor(e){if(e&&e.restore){this._restore(e.restore);return}this.seed=e.seed||1,this.rng=He(this.seed),this.name=e.name||`City`,this.tier=e.tier||`city`,this.invert=!!e.invert,this.typeLv=e.typeLv||{},this.mods=e.mods||null,this.wallX=11,this._stall=0,this._stallN=0,this._prog=``,this._armedGoneT=0,this.time=0,this.done=!1,this.result=null,this.brains=0,this.eaten=0,this.wallScrap=0,this.fx=[];let t=w(this.tier),n=t.arena||[36,28];this.w=e.w||n[0],this.d=e.d||n[1],this.wallHp=e.walls??(e.defend&&e.defend.wallHp)??t.wall,this.wallMax=e.wallMax??(e.defend&&e.defend.wallMax)??t.wall,this.stages=e.stages??t.stages??1,this.stage=1,this.units=[],this.tactic=e.tactic||`assault`,this.heroSpec=e.hero||null,this.heroDead=!1,this.eventKind=e.eventKind||null,this.buildings=this._buildings(),this._spawn(e),this.counts={shambler:0,runner:0,brute:0,screamer:0,spitter:0,abomination:0,armored:0,zero:0,civilian:0,armed:0,police:0,army:0,armor:0},this._tally(),this._optsDefend=e.defend||null,this._applyTacticStart()}_stats(e){return je(this._stats(e),e,this.mods)}_buildings(){let e=this.rng,t=[],n=w(this.tier),r=n.buildings||8,i=n.towers||0,a=n.density||1,o=[`house`,`house`,`stonehouse`,`shop`,`block`,`hall`,`tower`,`shack`],s=this.w/2,c=this.d/2;for(let n=0;n<r;n++){let l=n/r*Math.PI*2+e()*.25,u=(3.2+n%5*1.6)*(.7+a*.35),d=n<i||o[n%o.length]===`tower`,f=d?e()<.45?`tower`:`block`:o[n%o.length],p=(d?1.15+e()*.7*a:.8+e()*.25)*(.85+a*.15);t.push({kind:f,x:s+Math.cos(l)*u,z:c+Math.sin(l)*u,rot:l+Math.PI/2,scale:p,hp:30,maxHp:30,fire:0,collapsed:!1,tall:d})}if(i>=6)for(let n=0;n<Math.min(10,i);n++){let r=n/10*Math.PI*2+.2,i=2.2+e()*1.4;t.push({kind:`tower`,x:s+Math.cos(r)*i,z:c+Math.sin(r)*i,rot:r,scale:1.4+e()*.8*a,hp:40,maxHp:40,fire:0,collapsed:!1,tall:!0})}let l=this.eventKind;if(l===`stadium`)for(let e=0;e<4;e++){let n=e/4*Math.PI*2+.2;t.push({kind:`bleacher`,x:s+Math.cos(n)*9,z:c+Math.sin(n)*7,rot:n+Math.PI/2,scale:1.2,hp:50,maxHp:50,fire:0,collapsed:!1,prop:!0})}else if(l===`convoy`){t.length=Math.min(t.length,3);for(let e=0;e<4;e++)t.push({kind:`truck`,x:8+e*4,z:c-2+e%2*3,rot:0,scale:1,hp:22,maxHp:22,fire:0,collapsed:!1,prop:!0})}else if(l===`milbase`)t.push({kind:`hangar`,x:s+4,z:c-5,rot:.2,scale:1.1,hp:60,maxHp:60,fire:0,collapsed:!1,prop:!0,tall:!0}),t.push({kind:`crate`,x:s-3,z:c+2,rot:0,scale:1,hp:16,maxHp:16,fire:0,collapsed:!1,prop:!0});else if(l===`festival`)for(let e=0;e<5;e++)t.push({kind:`banner`,x:6+e*3.2,z:4+e%2*8,rot:0,scale:1,hp:10,maxHp:10,fire:0,collapsed:!1,prop:!0});else l===`evac`&&(t.push({kind:`ship`,x:s+6,z:c,rot:.4,scale:1.15,hp:80,maxHp:80,fire:0,collapsed:!1,prop:!0,tall:!0}),t.push({kind:`plane`,x:s-5,z:c+6,rot:-.3,scale:1.1,hp:50,maxHp:50,fire:0,collapsed:!1,prop:!0}));return t}_spawn(e){let t=this.w/2,n=this.d/2,r=(e,t,n,r,i,a)=>{for(let o=0;o<t;o++){let t=this.rng()*Math.PI*2,o=Math.sqrt(this.rng())*a,s=this._stats(e);this.units.push({id:Ve(),type:e,side:n||s.side,x:r+Math.cos(t)*o,z:i+Math.sin(t)*o,vx:0,vz:0,rot:t,hp:s.hp,maxHp:s.hp,cd:this.rng()*.4,convert:0,state:`idle`})}};if(this._add=r,this.invert){let i=e.garrison||{};r(`shambler`,i.shambler||0,`zombie`,t,n,5),r(`runner`,i.runner||0,`zombie`,t+1,n,4),r(`brute`,i.brute||0,`zombie`,t,n+1,3),r(`screamer`,i.screamer||0,`zombie`,t,n-2,3),r(`spitter`,i.spitter||0,`zombie`,t+2,n,3),r(`abomination`,i.abomination||0,`zombie`,t,n,2),r(`armored`,i.armored||0,`zombie`,t+1,n-1,2);let a=e.defend||{};r(`armed`,a.armed||0,`human`,4,n,2.4),r(`police`,a.police||0,`human`,3.5,n+2,2),r(`army`,a.army||0,`human`,5,n-2,2),r(`armor`,a.armor||0,`human`,5.5,n,1.4)}else{let t=e.attack||{};r(`shambler`,t.shambler||0,`zombie`,4,n,2.5),r(`runner`,t.runner||0,`zombie`,3.2,n+1.5,2.2),r(`brute`,t.brute||0,`zombie`,5,n-1.2,1.8),r(`screamer`,t.screamer||0,`zombie`,4.4,n-2,1.6),r(`spitter`,t.spitter||0,`zombie`,3.8,n+2.2,1.6),r(`abomination`,t.abomination||0,`zombie`,5.2,n,1.2),r(`armored`,t.armored||0,`zombie`,4.8,n+1.4,1.4),this.heroSpec&&this._spawnHero(4.6,n),this._spawnDefenders(e.defend||{})}}_spawnDefenders(e,t=1){let n=this.w/2,r=this.d/2,i=this._add;i&&(i(`civilian`,Math.round((e.civilian||0)*t),`human`,n,r,6),i(`armed`,Math.round((e.armed||0)*t),`human`,n+2,r,5),i(`police`,Math.round((e.police||0)*t),`human`,n,r-2,4),i(`army`,Math.round((e.army||0)*t),`human`,n-1,r+2,4),i(`armor`,Math.round((e.armor||0)*t),`human`,n+3,r-1,2.2))}zombieCount(){return this.units.filter(e=>e.side===`zombie`).length}humanCount(){return this.units.filter(e=>e.side===`human`).length}swing(){let e=0,t=0;for(let n of this.units)n.side===`zombie`?e+=n.hp:t+=n.hp*(n.type===`civilian`?.35:1);this.wallHp>0&&!this.invert&&(t+=this.wallHp*.25);let n=e+t||1;return(e-t)/n}step(e){if(!this.done){this.time+=e,this._hash=this._buildHash();for(let t of this.units)this._stepUnit(t,e);this._resolve(),this._tally(),this._tickTown(e),this.fxSeen||(this.fxSeen=new Set);for(let e of this.fx)e&&e.k&&this.fxSeen.add(e.k);this.fx=this.fx.filter(t=>(t.t+=e)<t.life),this._watchdog(e),this._checkDone()}}_tally(){let e=this.counts;for(let t of Object.keys(e))e[t]=0;for(let t of this.units)e[t.type]!=null&&e[t.type]++}_buildHash(){let e=new Map,t=(e,t)=>`${Math.floor(e/3)},${Math.floor(t/3)}`;for(let n of this.units){let r=t(n.x,n.z),i=e.get(r);i||(i=[],e.set(r,i)),i.push(n)}return{near:(t,n,r)=>{let i=[],a=r*r,o=Math.floor((t-r)/3),s=Math.floor((t+r)/3),c=Math.floor((n-r)/3),l=Math.floor((n+r)/3);for(let r=o;r<=s;r++)for(let o=c;o<=l;o++){let s=e.get(`${r},${o}`);if(s)for(let e of s){let r=e.x-t,o=e.z-n;r*r+o*o<=a&&i.push(e)}}return i}}}_closest(e,t,n=80){let r=null,i=n,a=n<=14&&this._hash?this._hash.near(e.x,e.z,n):this.units;for(let n of a){if(n===e||n.side!==t)continue;let a=Math.hypot(n.x-e.x,n.z-e.z);a<i&&(i=a,r=n)}return r}_spawnHero(e,t){let n=this.heroSpec,r=this._stats(`zero`),i=n&&n.level||1,a=n&&n.perks||[],o=r.hp*(1+.12*(i-1));(a.includes(`tough`)||a.includes(`prime`))&&(o*=1.25),this.units.push({id:Ve(),type:`zero`,side:`zombie`,hero:!0,x:e,z:t,vx:0,vz:0,rot:0,hp:o,maxHp:o,cd:0,convert:0,state:`idle`,level:i,perks:a})}_applyTacticStart(){let e=F[this.tactic]||F.assault;if(this.tactic===`infiltrate`){let t=this.units.filter(e=>e.type===`runner`).length,n=Math.max(1,(e.needRunners||2)+(this.mods&&this.mods.infiltrateNeed||0)),r=this.mods&&this.mods.infiltrateConvert||1,i=Math.max(1,Math.floor(t/n*r)),a=this.units.filter(e=>e.side===`human`&&e.x>(this.wallX||11));a.sort((e,t)=>e.hp-t.hp);for(let e=0;e<Math.min(i,a.length);e++)a[e]._convert=!0,this.fx.push({k:`convert`,x:a[e].x,z:a[e].z,t:0,life:.5})}}_heroStats(e,t){let n={...t},r=e.perks||[],i=e.level||1;return n.dmg*=1+.1*(i-1),n.speed*=1+.06*(i-1),(r.includes(`virulent`)||r.includes(`prime`))&&(n.bite=(n.bite||.5)+.2),(r.includes(`swift`)||r.includes(`prime`))&&(n.speed*=1.15),n}_stepUnit(e,t){Number.isFinite(e.x)||(e.x=this.w/2,e.z=this.d/2,e.vx=0,e.vz=0),e.cd=Math.max(0,e.cd-t);let n=this._stats(e.type);if(e.type===`zero`&&(n=this._heroStats(e,n)),this.tactic===`night`&&e.side===`human`&&(n={...n,dmg:n.dmg*(F.night.humanDmg||.62),cd:n.cd*(F.night.humanCd||1.35),range:(n.range||0)*.85}),e.side===`zombie`&&this.mods){let e=this.mods;this.tactic===`night`&&(n={...n,dmg:n.dmg*(e.nightPower||1)}),this.tactic===`assault`&&(n={...n,dmg:n.dmg*(e.assaultPower||1)}),this.tactic===`siege`&&(n={...n,dmg:n.dmg*(e.siegePower||1),wall:(n.wall||1)*(e.siegeWall||1)}),this.tactic===`infiltrate`&&(n={...n,dmg:n.dmg*(e.infiltratePower||1)})}e.side===`zombie`?(e.type===`spitter`&&n.range?this._spitter(e,t,n):this._zombie(e,t,n),e.type===`screamer`&&this._screamAura(e)):this._human(e,t,n),this._integrate(e,t)}_steer(e,t,n,r,i,a={}){if(!Number.isFinite(t)||!Number.isFinite(n))return;e&&e._boost&&(r*=e._boost);let o=Math.hypot(t,n)||1,s=t/o,c=n/o,l=this._hash?this._hash.near(e.x,e.z,1.15):[],u=0,d=0;for(let t of l){if(t===e||t.side!==e.side)continue;let n=e.x-t.x,r=e.z-t.z,i=Math.hypot(n,r)||.01,a=Math.max(0,.92-i)/i;u+=n*a,d+=r*a}let f=a.melee?.25:.42;s+=u*f,c+=d*f;let p=Math.hypot(s,c)||1,m=Math.min(1,7*i);e.vx+=(s/p*r-e.vx)*m,e.vz+=(c/p*r-e.vz)*m,Math.hypot(e.vx,e.vz)>.2&&(e.rot=Math.atan2(e.vx,e.vz))}_integrate(e,t){let n=e.x+e.vx*t,r=e.z+e.vz*t,i=this.wallX||11;e._blocked=!1,!this.invert&&this.wallHp>0&&e.side===`zombie`&&n>i-.4&&(n=i-.4,e.vx=Math.min(0,e.vx),e._blocked=!0),n=Math.max(.6,Math.min(this.w-.6,n)),r=Math.max(.6,Math.min(this.d-.6,r)),Number.isFinite(n)&&(e.x=n,e.z=r,e.vx*=.88,e.vz*=.88)}_zombie(e,t,n){let r=this.wallX||11;if(!this.invert&&this.wallHp>0&&(e._blocked||e.x>=r-1.15)){e.state=`fight`,this._hitWall(e,n);let i=this._closest(e,`human`,80),a=i?(i.z-e.z)*.35:this.d/2-e.z;this._steer(e,r-e.x+.8,a,n.speed*.85,t);return}let i=this._closest(e,`human`,80);i?Math.hypot(i.x-e.x,i.z-e.z)<=(n.melee||.85)+.35?(e.state=`fight`,this._steer(e,i.x-e.x,i.z-e.z,n.speed*.45,t,{melee:!0}),this._melee(e,i,n)):(e.state=`move`,this._steer(e,i.x-e.x,i.z-e.z,n.speed*1.12,t)):(this._steer(e,this.w/2-e.x,this.d/2-e.z,n.speed*.7,t),e.state=`move`)}_human(e,t,n){let r=this._closest(e,`zombie`,n.range?n.range+6:14);if(!r){this._steer(e,this.w/2-e.x+(this.rng()-.5),this.d/2-e.z,n.speed*.3,t),e.state=`idle`;return}let i=Math.hypot(r.x-e.x,r.z-e.z),a=this._hash.near(e.x,e.z,1.5).filter(e=>e.side===`zombie`).length,o=e.x<1.4||e.x>this.w-1.4||e.z<1.4||e.z>this.d-1.4,s=this.units.some(t=>t.type===`zero`&&(t.perks||[]).includes(`dread`)&&Math.hypot(t.x-e.x,t.z-e.z)<8),c=n.speed*(e.type===`civilian`?.78:.85)*(o?.45:1)*(s?.8:1);n.range>0&&a>=2?(this._steer(e,e.x-r.x,e.z-r.z,c,t),i<=n.range+.4&&this._shoot(e,r,n),e.state=`flee`):n.range>0?(i<3?this._steer(e,e.x-r.x,e.z-r.z,c,t):(e.vx*=.6,e.vz*=.6),i<=n.range+.4&&this._shoot(e,r,n),e.state=`fight`):(this._steer(e,e.x-r.x,e.z-r.z,c,t),e.state=`flee`)}_spitter(e,t,n){let r=this.wallX||11,i=this._closest(e,`human`,80);i&&Math.hypot(i.x-e.x,i.z-e.z)<=n.range+.4?(this._acid(e,i,n),e.state=`fight`):!this.invert&&this.wallHp>0?(this._acidWall(e,n),this._steer(e,r-e.x,0,n.speed*.7,t),e.state=`fight`):i?(this._steer(e,i.x-e.x,i.z-e.z,n.speed,t),e.state=`move`):this._zombie(e,t,n)}_acid(e,t,n){e.cd>0||(e.cd=n.cd,t.hp-=n.dmg,t.hp<=0&&(t._dead=!0),this.fx.push({k:`acid`,x:e.x,z:e.z,t:0,life:.4,tx:t.x,tz:t.z}),e.rot=Math.atan2(t.x-e.x,t.z-e.z),e.state=`shoot`)}_acidWall(e,t){e.cd>0||this.wallHp<=0||(e.cd=t.cd,this.wallHp=Math.max(0,this.wallHp-(t.wall||3)*3.4),this.fx.push({k:`acid`,x:e.x,z:e.z,t:0,life:.4,tx:this.wallX||11,tz:e.z}))}_screamAura(e){if(this._hash)for(let t of this._hash.near(e.x,e.z,5.5))t.side===`zombie`&&t!==e&&(t._boost=1.18)}_melee(e,t,n){e.cd>0||(e.cd=n.cd,t.convert=(t.convert||0)+(n.bite??.5),t.hp-=n.dmg*.4,this.fx.push({k:`bite`,x:t.x,z:t.z,t:0,life:.25}),(t.hp<=0||t.convert>=1)&&(t._convert=!0))}_shoot(e,t,n){if(!(e.cd>0)){if(e.cd=n.cd*(.85+this.rng()*.3),this.rng()<.7){let e=n.dmg;t.side===`zombie`&&this.tactic===`siege`&&(e*=(F.siege.incoming||.68)*(this.mods&&this.mods.siegeIncoming||1)),t.type===`zero`&&(t.perks||[]).includes(`dread`),t.hp-=e,t.hp<=0&&(t._dead=!0)}this.fx.push({k:`gun`,x:e.x,z:e.z,t:0,life:.12,tx:t.x,tz:t.z}),e.rot=Math.atan2(t.x-e.x,t.z-e.z),e.state=`shoot`}}_hitWall(e,t){e.cd>0||this.wallHp<=0||(e.cd=t.cd*.85,this.wallHp=Math.max(0,this.wallHp-t.wall*4.2),this.fx.push({k:`smash`,x:11,z:e.z,t:0,life:.2}),this.rng()<(b.wallScrapChance||.28)&&(this.brains+=1,this.eaten+=1,this.wallScrap+=1,this.fx.push({k:`convert`,x:11.2,z:e.z,t:0,life:.35})))}_resolve(){let e=[],t=[];for(let n of this.units)if(n.side===`human`&&(n._convert||n.hp<=0)){this.eaten++,this.brains+=1;let t=this._stats(`shambler`);e.push({id:Ve(),type:`shambler`,side:`zombie`,x:n.x,z:n.z,vx:0,vz:0,rot:n.rot,hp:t.hp,maxHp:t.hp,cd:.2,convert:0,state:`idle`}),this.fx.push({k:`convert`,x:n.x,z:n.z,t:0,life:.5})}else n.side===`zombie`&&(n._dead||n.hp<=0)?(this.fx.push({k:`dust`,x:n.x,z:n.z,t:0,life:.35}),n.type===`zero`&&(this.heroDead=!0)):t.push(n);this.units=t.concat(e)}_tickTown(e){if(this.tactic===`siege`&&this.wallHp>0&&(this.wallHp=Math.max(0,this.wallHp-(F.siege.wallDrain||2.4)*(this.mods&&this.mods.siegeWall||1)*e)),!this.buildings||!this.buildings.length)return;let t=this.swing(),n=this.wallHp<=0,r=this.stage>0||n;for(let i of this.buildings){if(i.maxHp=i.maxHp||30,i.hp??(i.hp=i.maxHp),i.collapsed){i.fire=Math.max(0,(i.fire||0)-e*.12);continue}let a=0;if(this.time>5&&(a+=.35*e),t>-.05&&(a+=(.4+Math.max(0,t)*1.6)*e),n&&(a+=2.4*e),r&&(a+=.9*e),this._hash){let t=this._hash.near(i.x,i.z,2.2).filter(e=>e.side===`zombie`).length;t&&(a+=Math.min(4,t)*.7*e);let n=this._hash.near(i.x,i.z,2.6).filter(e=>e.type===`abomination`).length;n&&(a+=n*8*e)}i.hp=Math.max(0,i.hp-a);let o=i.hp/Math.max(1,i.maxHp);o<.7&&(i.fire=Math.max(i.fire||0,.35+(1-o)*.8)),i.hp<=0&&(i.collapsed=!0,i.fire=1,this.fx.push({k:`collapse`,x:i.x,z:i.z,t:0,life:.8}))}}forceTownFall(){for(let e of this.buildings||[])e.maxHp=e.maxHp||30,e.hp=0,e.fire=1,e.collapsed=!0,this.fx.push({k:`collapse`,x:e.x,z:e.z,t:0,life:.8});return this.buildings.length}_advanceStage(){if(this.stage>=this.stages)return!1;this.stage+=1,this.stageUp=this.stage;let e=w(this.tier),t=.55+this.stage*.12;this.wallMax=Math.round(e.wall*t),this.wallHp=this.wallMax;let n=.7+this.stage*.08;return this._spawnDefenders({civilian:Math.round(e.civ*.45),armed:Math.round(e.armed*n),police:Math.round(e.police*n),army:Math.round(e.army*n)}),this._tally(),!0}_checkDone(){let e=this.zombieCount(),t=this.units.filter(e=>e.side===`human`&&e.type!==`civilian`).length,n=this.units.filter(e=>e.type===`civilian`).length;if(e<=0){this.done=!0,this.result=`lose`;return}if(!this.invert){if(t<=0&&this.wallHp<=0){this._armedGoneT||(this._armedGoneT=this.time);let t=this.time-this._armedGoneT;if(n<=0||e>=6||t>=8||n<=2&&t>=3){if(this._advanceStage()){this._armedGoneT=0;return}this.done=!0,this.result=`win`;return}}}else if(this.humanCount()<=0){this.done=!0,this.result=`win`;return}let r=70+(this.stages-1)*30;this.time>r&&(this.done=!0,this.result=!this.invert&&t<=1&&e>t||this.invert&&e>this.humanCount()?`win`:`lose`)}serialize(){return{seed:this.seed,name:this.name,tier:this.tier,invert:this.invert,typeLv:this.typeLv||{},mods:this.mods||null,time:this.time,done:this.done,result:this.result,brains:this.brains,eaten:this.eaten,wallScrap:this.wallScrap,w:this.w,d:this.d,wallHp:this.wallHp,wallMax:this.wallMax,stages:this.stages,stage:this.stage,tactic:this.tactic,heroSpec:this.heroSpec,heroDead:this.heroDead,buildings:this.buildings,units:this.units.map(e=>({id:e.id,type:e.type,side:e.side,x:e.x,z:e.z,vx:e.vx,vz:e.vz,rot:e.rot,hp:e.hp,maxHp:e.maxHp,cd:e.cd,convert:e.convert||0,state:e.state}))}}_restore(e){this.seed=e.seed||1,this.rng=He(this.seed+(e.time*1e3|0)),this.name=e.name||`City`,this.tier=e.tier||`city`,this.invert=!!e.invert,this.typeLv=e.typeLv||{},this.mods=e.mods||null,this.tactic=e.tactic||`assault`,this.heroSpec=e.heroSpec||null,this.heroDead=!!e.heroDead,this.wallX=11,this._stall=0,this._stallN=0,this._prog=``,this._armedGoneT=0,this.time=e.time||0,this.done=!!e.done,this.result=e.result||null,this.brains=e.brains||0,this.eaten=e.eaten||0,this.wallScrap=e.wallScrap||0,this.fx=[],this.w=e.w||36,this.d=e.d||28,this.wallHp=e.wallHp??70,this.wallMax=e.wallMax??70,this.stages=e.stages||1,this.stage=e.stage||1,this.buildings=e.buildings||this._buildings?.()||[];for(let e of this.buildings)e.maxHp=e.maxHp||e.hp||30,e.fire=e.fire||0,e.collapsed=!!e.collapsed;this.units=(e.units||[]).map(e=>({id:e.id,type:e.type,side:e.side,x:e.x,z:e.z,vx:e.vx||0,vz:e.vz||0,rot:e.rot||0,hp:e.hp,maxHp:e.maxHp||e.hp,cd:e.cd||0,convert:e.convert||0,state:e.state||`idle`}));let t=1;for(let e of this.units)e.id>t&&(t=e.id);Be=Math.max(Be,t+1),this.counts={shambler:0,runner:0,brute:0,civilian:0,armed:0,police:0,army:0},this._tally(),this.time>6&&!this.done&&(this._pendingUnstick=!0),this._add=(e,t,n,r,i,a)=>{for(let o=0;o<t;o++){let t=this.rng()*Math.PI*2,o=Math.sqrt(this.rng())*a,s=this._stats(e);this.units.push({id:Ve(),type:e,side:n||s.side,x:r+Math.cos(t)*o,z:i+Math.sin(t)*o,vx:0,vz:0,rot:t,hp:s.hp,maxHp:s.hp,cd:this.rng()*.4,convert:0,state:`idle`})}}}reinforce(e={}){let t=this.d/2,n=this._add;n&&(n(`shambler`,e.shambler||0,`zombie`,4,t,2.5),n(`runner`,e.runner||0,`zombie`,3.2,t+1.5,2.2),n(`brute`,e.brute||0,`zombie`,5,t-1.2,1.8),n(`screamer`,e.screamer||0,`zombie`,4.4,t-2,1.6),n(`spitter`,e.spitter||0,`zombie`,3.8,t+2.2,1.6),n(`abomination`,e.abomination||0,`zombie`,5.2,t,1.2),n(`armored`,e.armored||0,`zombie`,4.8,t+1.4,1.4),this._tally(),this._stall=0)}reinforceUnits(e=[]){for(let t of e)t.side===`zombie`&&(t.x=3.2+Math.random()*1.6,t.z=this.d/2+(Math.random()-.5)*4,t.vx=0,t.vz=0,t._blocked=!1,this.units.push(t));this._tally(),this._stall=0}_watchdog(e){this._pendingUnstick&&(this._unstick(),this._pendingUnstick=!1);let t=`${this.wallHp|0}:${this.brains}:${this.eaten}:${this.zombieCount()}:${this.humanCount()}:${this.stage}`;t===this._prog?this._stall+=e:(this._prog=t,this._stall=0),this._stall>=8&&(this._unstick(),this._stall=0,this._stallN=(this._stallN||0)+1),this._stallN>=3&&!this.done&&this._forceResolve()}_unstick(){let e=this.wallX||11,t=this.units.filter(e=>e.side===`zombie`);if(!t.length)return;if(!this.invert&&this.wallHp>0){let n=t.reduce((e,t)=>e+(this._stats(t.type).wall||1),0)*6;this.wallHp=Math.max(0,this.wallHp-n),this.fx.push({k:`smash`,x:e,z:this.d/2,t:0,life:.3})}let n=this.units.find(e=>e.side===`human`)||null;for(let r of t){if(r.vx=0,r.vz=0,!this.invert&&this.wallHp>0)r.x=Math.min(r.x,e-.45);else if(n){let e=Math.hypot(n.x-r.x,n.z-r.z)||1;r.x+=(n.x-r.x)/e*1.6,r.z+=(n.z-r.z)/e*1.6}else r.x+=1.2;r.x=Math.max(.6,Math.min(this.w-.6,r.x)),r.z=Math.max(.6,Math.min(this.d-.6,r.z))}if(n){let e=null,r=4.5;for(let i of t){let t=Math.hypot(n.x-i.x,n.z-i.z);t<r&&(r=t,e=i)}if(e){let t=this._stats(e.type);e.cd=0,this._melee(e,n,t)}}}_forceResolve(){if(this.done)return;let e=this.zombieCount(),t=this.units.filter(e=>e.side===`human`&&e.type!==`civilian`).length,n=this.units.filter(e=>e.type===`civilian`).length,r;r=this.invert?e>this.humanCount():e<=0?!1:this.wallHp<=0&&t<=0||this.swing()>=-.08||e>t+n*.25,this.done=!0,this.result=r?`win`:`lose`}};function We(e){return(e.worldEvents||e.eventsLive||[]).filter(e=>e.state===`live`).map(e=>({id:e.id,kind:e.kind,name:e.name,t:e.t,dur:e.dur,left:Math.max(0,(e.dur||0)-(e.t||0))}))}function Ge(e,t={x:1,y:.22,z:0}){let n=(e||0)*.018;t.x=Math.cos(n),t.y=.22,t.z=Math.sin(n);let r=Math.hypot(t.x,t.y,t.z)||1;return t.x/=r,t.y/=r,t.z/=r,t}function Ke(e,t,n,r=.08){if(!e||t==null||t<0)return!1;let i=Ge(n);return-(e.pos[t*3]*i.x+e.pos[t*3+1]*i.y+e.pos[t*3+2]*i.z)>r}function qe(e){let t=e.recentFalls||[];return{list:t,week:t.filter(t=>(e.time||0)-t.t<180),n:(e.cities||[]).filter(e=>e.owner===`horde`).length}}function Je(e,t=`hold`){let n=[],{list:r,week:i,n:a}=qe(e);(e.cities||[]).filter(e=>e.owner===`human`).length;let o=r[r.length-1];(e.cities||[]).length;let s=P(e.alarm||0),c=e.newsEvents||[],l=s.id;if(l===`unknown`||a===0?(o?(n.push(`Residents of ${o.name} fall sick — wear a mask if visiting`),n.push(`Clinic reports unusual fevers in ${o.name}`)):n.push(`Officials urge calm as isolated incidents are contained`),n.push(`Health officials: a seasonal illness, nothing to panic about`),n.push(`Travelers are advised to wear a mask if visiting the smaller towns`)):l===`outbreak`?(o&&n.push(`Outbreak declared after reports from ${o.name}`),n.push(`Hospitals fill as the illness spreads`),n.push(`Authorities close schools in several districts`),i.length>=2&&n.push(`${i.length} towns reporting clusters this week`)):l===`quarantine`?(o&&n.push(`${o.name} has gone dark`),n.push(`Army checkpoints go up on the main roads`),n.push(`Quarantine announced — rings go up around threatened regions`)):(o&&n.push(`${o.name} has gone dark`),i.length>=2&&n.push(`${i.length} cities lost this week`),n.push(`${a} settlement${a===1?``:`s`} confirmed overrun`),n.push(`Officials confirm the dead are walking`)),(e.quarantines||[]).some(e=>!e.broken)&&(l===`quarantine`||l===`confirmed`)){let t=(e.quarantines||[]).find(e=>!e.broken);n.push(t&&t.name?`Quarantine announced around ${t.name}`:`Quarantine announced — rings go up around threatened regions`)}if(c.some(e=>e.k===`nuke`)||(e.bombs||[]).some(e=>e.kind===`nuke`)){let e=c.filter(e=>e.k===`nuke`).pop();n.push(e&&e.name?`Nuclear strike reported on ${e.name}`:`A nuclear strike has been authorized`)}else if((e.bombs||[]).length||c.some(e=>e.k===`bomb`)){let e=c.filter(e=>e.k===`bomb`).pop();n.push(e&&e.name?`Air strike reported near ${e.name}`:`Bombing runs underway against the moving dead`)}if(e.distribution)n.push(`Cure distributed worldwide`),n.push(`Healing shipments leave the research cities`),n.push(`Officials: inoculation is underway — overrun settlements may recover`);else if(l===`confirmed`){let t=(e.cities||[]).filter(e=>e.research&&e.owner===`human`).length,r=Math.round(e.cure||0);t?n.push(`Cure progress ${r}% — ${t} research cit${t===1?`y`:`ies`} still working`):n.push(`Cure program faltering as laboratories go dark`),n.push(r>=80?`Government statement: the cure is close`:`Government statement: a cure is in development`)}else e.stats&&e.stats.curesSurvived||c.some(e=>e.k===`curedist`||e.k===`curedone`)?n.push(`Officials declare the last outbreak contained — isolated nests may remain`):l===`unknown`?n.push(`Government statement: the situation remains under review`):l===`outbreak`?n.push(`Government statement: an outbreak is being contained`):n.push(`Government statement: state of emergency declared`);let u=(e.worldEvents||[]).filter(e=>e.state===`live`);for(let e of u){let t=e.news||(e.name?`${e.name} underway`:null);t&&!n.includes(t)&&n.push(t)}for(let e of c.slice(-4))e.text&&!n.includes(e.text)&&n.push(e.text);(t===`panic`||a>=2)&&l!==`unknown`&&(n.push(`Communications failing in the outer districts`),n.push(`Unconfirmed footage leaks from the interior`)),e.home&&n.push(`The nesting ground has not been located`),n.push(`Stay with us for continuing coverage`);let d=n.join(`  •  `)+`  •  `;return d+d}function Ye(e,t,n,r){let i=e.toName||`the city`,a=t&&t.shot||`heli`,o=ee(r&&r.alarm||0).id===`unknown`;return e.result===`win`?o?`Live pictures from ${i} — the clinic is overrun`:`Live pictures from ${i} — the city has fallen`:e.result===`lose`?o?`Local police hold the line in ${i}`:`The living hold the line in ${i}`:a===`fire`?o?`A fire at the clinic in ${i}`:`Buildings burn in ${i}`:a===`reporter`?o?`Our correspondent in ${i}, reporting on the illness`:n>.12?`Our correspondent flees ${i}`:`Our correspondent in ${i}`:a===`street`?o?`Street-level in ${i} — residents are told to wear a mask`:n>.1?`Street-level chaos in ${i}`:`Street-level in ${i}`:a===`heli`?`Aerial over ${i}`:n<-.12?o?`Local police hold the line in ${i}`:`The living hold the line in ${i}`:n>.18?o?`The illness inside the walls of ${i}`:`Outbreak inside the walls of ${i}`:o?`Residents of ${i} fall sick`:`Unrest in ${i}`}function Xe(e){let{list:t,week:n,n:r}=qe(e),i=(e.cities||[]).filter(e=>e.owner===`human`).length,a=(e.cities||[]).filter(e=>e.research&&e.owner===`human`);return{stage:3,captured:r,human:i,weekLost:n.length,lastFall:t.length?t[t.length-1]:null,ticker:Je(e),alarm:e.alarm||0,alarmStage:P(e.alarm||0),awareness:e.awarenessInfo?e.awarenessInfo():{awareness:e.alarm||0,stage:P(e.alarm||0).id,name:P(e.alarm||0).name},cure:e.cure||0,labs:a.map(e=>e.name),quarantines:(e.quarantines||[]).map(e=>({id:e.id,broken:!!e.broken,hp:e.hp,name:e.name})),bombs:(e.bombs||[]).length,events:We(e),future:We(e)}}var Ze=`horde-settings-v1`,Qe=`horde-tutorial-v6`;function $e(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function et(){return{sound:!0,haptics:!0,quality:`auto`,musicVol:.42,sfxVol:.7}}var tt={...et(),...$e(`horde-settings-v1`,{})||{}};function nt(){return{...tt}}function rt(e){tt={...tt,...e};try{localStorage.setItem(Ze,JSON.stringify(tt))}catch{}return nt()}function it(){try{return localStorage.getItem(Qe)}catch{return null}}function at(e){try{e==null?localStorage.removeItem(Qe):localStorage.setItem(Qe,e)}catch{}}var ot=[];function st(){ot.length=0}var ct={bite:[18],capture:[40,50,90],bomb:[25,30,25,30,90],loss:[80,40,110],ui:[12],milestone:[30,40,60]};function lt(e=`ui`){if(!tt.haptics)return!1;let t=ct[e]||ct.ui;ot.push({kind:e,pattern:t,t:Date.now()});try{typeof navigator<`u`&&typeof navigator.vibrate==`function`&&navigator.vibrate(t)}catch{}return!0}var ut=1,dt=()=>ut++,ft=class{constructor(e){this.world=e,this.reset()}reset(){ut=1,this.time=0,this.brains=0,this.points=0,this.speed=1,this.paused=!1,this.outcome=null,this.phase=`pick`,this.upgrades={},this.typeLv=h(),this.recentFalls=[],this.home=null,this.bases=[],this.cities=this.world.cities.map(e=>this._freshCity(e)),this.cById=Object.fromEntries(this.cities.map(e=>[e.id,e])),this.raids=[],this.events=[],this.strikeTimer=S.strikeInterval*.7,this.stats={eaten:0,captured:0,failed:0,retaken:0,raidsWon:0,raidsLost:0,biggestHorde:0,megacities:0,eventsWon:{},curesSurvived:0},this.worldEvents=[],this.eventTimer=18,this.milestones={},this.alarm=0,this.stageFlags={},this.cure=0,this.quarantines=[],this.bombs=[],this.bombTimer=18,this.newsEvents=[],this.hero={name:te.name,alive:!0,xp:0,level:1,cooldown:0,perks:[]},this.loseReason=null,this.distribution=null,this.tree={},this.prestige={picks:[],stacks:{}},this.prestigeOffer=null,this.v7=1,this.v71=1,this.awarenessHeat=0,this._awareOverride=null,this._migratedUtility=null,this._migratedAwareness=null}mods(){return Ae(this.tree||{},this.prestige||{stacks:{}})}infiltrateNeed(){let e=(F.infiltrate.needRunners||2)+(this.mods().infiltrateNeed||0);return Math.max(1,e)}worldPop(){return(this.cities||[]).reduce((e,t)=>e+A(t.tier),0)||1}turnedPop(){return(this.cities||[]).reduce((e,t)=>e+(t.owner===`horde`?A(t.tier):0),0)}popShare(){return this.turnedPop()/this.worldPop()}awareness(){return this.alarm||0}awareStage(){return ee(this.alarm||0)}highestTouchedTier(){let e=null,t=0,n=new Set((this.raids||[]).filter(e=>e.kind===`raid`&&e.state!==`done`&&e.state!==`joined`).map(e=>e.toId));for(let r of this.cities||[]){if(r.owner!==`horde`&&!n.has(r.id))continue;let i=w(r.tier)&&w(r.tier).pri||0;i>t&&(t=i,e=r.tier)}return e||`hamlet`}awarenessCap(){let e=this.highestTouchedTier();return(k.capByTier&&k.capByTier[e])??2}regionPressure(e){if(e==null)return 0;let t=0;for(let n of this.cities||[])n.landmass===e&&n.owner===`horde`&&t++;for(let n of this.recentFalls||[]){let r=this.cById&&this.cById[n.id];r&&r.landmass===e&&(t+=.25)}for(let n of this.raids||[]){if(n.kind!==`raid`||n.state===`done`)continue;let r=this.cById&&this.cById[n.toId];r&&r.landmass===e&&(t+=.5)}return t}canBombTarget(e){if(!e)return!1;if(e.kind===`raid`){let t=this.raid(e.id)||(this.raids||[]).find(t=>t.id===e.id),n=t&&this.cById[t.toId];return!!(n&&M(n.tier))}if(e.kind===`home`||e.id===`home`)return this.awareStage().id===`confirmed`;let t=this.cById[e.id]||e;return!!(t&&M(t.tier))}canNukeTarget(e){let t=e&&(this.cById[e.id]||e);return!!(t&&N(t.tier)&&t.owner===`horde`)}_addAwarenessHeat(e){let t=this.awarenessCap();this.awarenessHeat=Math.min(t,(this.awarenessHeat||0)+Math.max(0,e))}_syncAwareness(){if(this._awareOverride!=null)return this.alarm=Math.max(0,Math.min(100,this._awareOverride)),this.awareStage();let e=this.mods(),t=this.popShare()*100*(e.alarmGrowth||1),n=(this.awarenessHeat||0)*(e.alarmGrowth||1),r=this.awarenessCap();return this.alarm=Math.max(0,Math.min(r,t+n)),this.awareStage()}awarenessInfo(){let e=this.awareStage(),t=this.awarenessCap();return{awareness:this.alarm||0,stage:e.id,name:e.name,popShare:this.popShare(),turnedPop:this.turnedPop(),worldPop:this.worldPop(),heat:this.awarenessHeat||0,cap:t,highestTier:this.highestTouchedTier(),cureOpen:e.id===`confirmed`||!!(this.stageFlags&&this.stageFlags.confirmed),flags:{...this.stageFlags||{}}}}forceAwareness(e){let t=k.stages;if(typeof e==`string`){let n=t.find(t=>t.id===e);this._awareOverride=n?n.at+(n.id===`unknown`?0:.05):0}else this._awareOverride=e==null?null:Math.max(0,Math.min(100,+e));return this._updateEscalation(0),this.awarenessInfo()}_freshCity(e){let t=w(e.tier||`city`);return{id:e.id,name:e.name,v:e.v,tier:e.tier||`city`,landmass:e.landmass,owner:`human`,age:0,wallHp:t.wall,wallMax:t.wall,army:0,garrison:0,spawnT:x.baseSpawn,strength:t.strength0,capturedAt:0}}cityPower(e,t=null){return T(this._cityDefenders(e))}oddsFor(e,t,n={}){let r=e&&(e.eventKind||e.kind===`event`)?e:n.eventId&&this.eventById(n.eventId),i=n.hero?this.hero:null,a=this.mods(),o=Ne(t,this.typeLv,i,a),s=n.tactic;s===`night`?o*=a.nightPower||1:s===`infiltrate`?o*=a.infiltratePower||1:s===`assault`?o*=a.assaultPower||1:s===`siege`&&(o*=a.siegePower||1);let c,l,u;if(r&&(r.eventKind||r.kind===`event`||r.kind&&ae[r.kind])){let e=oe(r.eventKind||r.kind),t={civilian:e.civBonus||0,armed:e.armed||0,police:e.police||0,army:e.army||0,armor:e.armor||0};c=Math.max(.01,T(t));let n=(this.stats.captured||0)<ie.earlyN?ie.earlyBrainMul:1;l=Math.round(((e.brains||20)+(e.civBonus||0)*.4)*(e.brainsMul||1)*(r.kind,1)),e.brains||(l=Math.round(18*(e.brainsMul||1)*n)),u=Math.round((e.civBonus||8)*.5)}else{c=Math.max(.01,this.cityPower(e));let t=w(e?e.tier:`city`),n=(this.stats.captured||0)<ie.earlyN?ie.earlyBrainMul:1,r=e?this._cityDefenders(e):{};l=Math.round((t.captureBrains||25)*n),u=Math.round(((r.civilian||0)+(r.armed||0))*.45)}let d=o/c,f=se(d),p=m.reduce((e,n)=>e+(t&&t[n]||0),0)||1,h=Math.max(b.failFloor||3,Math.ceil(p*(b.failFloorPerHead||.25))),g=l+u,_=Math.max(h,Math.round(u*.4));return{host:o,city:c,ratio:d,winPct:Math.round(f*100),expWin:g,expFail:_,winChance:f}}baseType(e){return u.find(t=>t.id===e)}canUnlock(e){return e===`shambler`?!0:e===`runner`?!!this.upgrades.runners||this.home&&this.home.type===`lab`:e===`brute`?!!this.upgrades.brutes:e===`screamer`?!!this.upgrades.screamers:e===`spitter`?!!this.upgrades.spitters:e===`abomination`?!!this.upgrades.abominations:e===`armored`&&!!this.upgrades.armored}raidCap(){return x.raidCap+(this.upgrades.raidcap||0)*8+(this.mods().raidCapBonus||0)}marchMul(){let e=this.home&&this.home.type===`sewer`?this.baseType(`sewer`).marchMul:1,t=this.typeLv||{},n=Math.max(t.shambler?.speed||0,t.runner?.speed||0,t.brute?.speed||0);return e*(1+.22*(this.upgrades.march||0))*(1+n*.06)}spawnInterval(e){let t=this.baseType(e.type),n=t&&t.spawnMul||1,r=e.id&&this.cById[e.id],i=r&&w(r.tier).spawnMul||1,a=(this.stats.captured||0)<ie.earlyN?ie.earlySpawnMul:1;return x.baseSpawn/(n*i*(1+.22*(this.upgrades.pit||0))*a*(this.mods().spawn||1))}capacity(e){let t=this.baseType(e.type),n=t&&t.capMul||1,r=e.id&&this.cById[e.id],i=r&&w(r.tier).capMul||1;return Math.round(x.baseCap*n*i*(1+.25*(this.upgrades.yard||0))*(this.mods().cap||1))}pickBase(e,t){if(this.phase!==`pick`||e<0||this.world.height[e]<.02)return!1;let n=this.baseType(t);if(!n)return!1;if(this.cities.some(t=>t.v===e)){let t=-1;for(let n=this.world.nbStart[e];n<this.world.nbStart[e+1];n++){let e=this.world.nb[n];if(this.world.height[e]>=.02){t=e;break}}t>=0&&(e=t)}return this.home={id:`home`,name:n.name,v:e,type:n.id,stock:{...re(),shambler:ie.startShamblers+(this.mods().startHorde||0),runner:n.unlock===`runners`?2:0},spawnT:1.2,hp:100},n.unlock&&(this.upgrades[n.unlock]=!0),this.bases=[this.home],this.phase=`play`,this._pickResearchCities(),this.hero={name:te.name,alive:!0,xp:0,level:1,cooldown:0,perks:[]},this.loseReason=null,this.distribution=null,this._softenNearby(e),this._toast(`life`,`The ${n.name} opens. The dead begin to gather.`),!0}_softenNearby(e){for(let t of this.cities)t.owner!==`human`||t.tier!==`hamlet`&&t.tier!==`town`||xe(this.world,e,t.v)>ie.earlyNearby||(t.wallHp=Math.max(4,Math.round(t.wallHp*ie.earlyHamletWall)),t.wallMax=t.wallHp,t.army=0,t.age=0,t.strength=w(t.tier).strength0*.55,t._early=!0)}totalStock(e){let t=e.stock||{},n=0;for(let e of m)n+=t[e]||0;return n}step(e){if(this.outcome||this.paused||this.phase!==`play`)return;let t=e*this.speed;if(this.time+=t,this.distribution){this._stepDistribution(t);return}this._growCities(t),this._spawnBases(t),this._stepHero(t),this._updateEscalation(t),this._stepMarches(t),this._stepBattles(t),this._updateStrikes(t),this._stepBombs(t),this._stepCure(t),this._stepEvents(t);let n=this.bases.reduce((e,t)=>e+this.totalStock(t),0);n>(this.stats.biggestHorde||0)&&(this.stats.biggestHorde=n),this._checkEnd()}_growCities(e){for(let t of this.cities){if(t.owner!==`human`)continue;t.age+=e;let n=w(t.tier);t.wallMax=Math.min(n.wall*2.4,n.wall+t.age*.12*n.growWall),t.wallHp=Math.min(t.wallMax,t.wallHp+S.wallPerSec*n.growWall*e),t.army=Math.min(1,t.army+S.armyPerSec*n.growArmy*e*(t.age>40?1:.4)),t.strength=n.strength0+t.army*1.4+Math.min(1,t.age/200)}}_spawnBases(e){for(let t of this.bases){let n=this.capacity(t);if(!(this.totalStock(t)>=n)&&(t.spawnT-=e,t.spawnT<=0)){t.spawnT+=this.spawnInterval(t);let e=`shambler`,n=Math.random();this.canUnlock(`abomination`)&&n<.03?e=`abomination`:this.canUnlock(`armored`)&&n<.07?e=`armored`:this.canUnlock(`spitter`)&&n<.11?e=`spitter`:this.canUnlock(`screamer`)&&n<.1?e=`screamer`:this.canUnlock(`brute`)&&n<.16?e=`brute`:this.canUnlock(`runner`)&&n<.36&&(e=`runner`),t.stock[e]=(t.stock[e]||0)+1}}}launchRaid(e,t,n,r={}){if(this.outcome||this.distribution||this.prestigeOffer)return null;let i=this.eventById(t)||r.eventId&&this.eventById(r.eventId);if(i&&i.state===`live`)return this._launchEventRaid(e,i,n,r);let a=this.bases.find(t=>t.id===e)||this.home,o=this.cById[t];if(!a||!o||o.owner!==`human`)return null;let s=F[r.tactic]?r.tactic:`assault`,c={},u=0;for(let e of m){let t=Math.max(0,Math.floor(n[e]||0));t&&!this.canUnlock(e)&&e!==`shambler`?c[e]=0:(c[e]=t,u+=t)}if(s===`infiltrate`&&(c.runner||0)<this.infiltrateNeed()||u<1||u>this.raidCap())return null;for(let e of m)if((a.stock[e]||0)<c[e])return null;for(let e of m)a.stock[e]=(a.stock[e]||0)-c[e];let d=!!(r.hero&&this.hero&&this.hero.alive&&this.hero.cooldown<=0);d&&(this.hero.alive=!1);let f=L(this.world,a.v,o.v),p=xe(this.world,a.v,o.v),h=F[s].marchMul||1,g=(x.marchBase+p*x.marchPerRad)/(this.marchMul()*h),_=l[Math.abs(dt())%l.length],v=Ke(this.world,o.v,this.time),y=s===`night`&&(r.waitNight||!v)&&!v,b={id:dt(),kind:`raid`,fromId:a.id,toId:o.id,toName:o.name,comp:c,tactic:s,hero:d,path:f,progress:0,dur:g,state:y?`wait`:`march`,battle:null,brains:0,points:0,channel:_,result:null};this.raids.push(b),this._addAwarenessHeat((k.raidHeat||.03)*(this.mods().alarmRaid||1)),this._syncAwareness();let S=s===`assault`?``:` (${F[s].name})`;return this._toast(`life`,y?`The host waits for night before marching on ${o.name}${S}.`:`A host of ${u} marches on ${o.name}${S}.`),b}_launchEventRaid(e,t,n,r={}){let i=this.bases.find(t=>t.id===e)||this.home;if(!i||!t)return null;let a=F[r.tactic]?r.tactic:`assault`,o={},s=0;for(let e of m){let t=Math.max(0,Math.floor(n[e]||0));t&&!this.canUnlock(e)&&e!==`shambler`?o[e]=0:(o[e]=t,s+=t)}if(a===`infiltrate`&&(o.runner||0)<this.infiltrateNeed()||s<1||s>this.raidCap())return null;for(let e of m)if((i.stock[e]||0)<o[e])return null;for(let e of m)i.stock[e]=(i.stock[e]||0)-o[e];let c=!!(r.hero&&this.hero&&this.hero.alive&&this.hero.cooldown<=0);c&&(this.hero.alive=!1);let u=this._eventVert(t),d=L(this.world,i.v,u),f=xe(this.world,i.v,u),p=F[a].marchMul||1,h=(x.marchBase+f*x.marchPerRad)/(this.marchMul()*p),g=l[Math.abs(dt())%l.length],_={id:dt(),kind:`event`,fromId:i.id,toId:t.id,toName:t.name,eventKind:t.kind,eventId:t.id,comp:o,tactic:a,hero:c,path:d,progress:0,dur:h,state:`march`,battle:null,brains:0,points:0,channel:g,result:null};return t.raidId=_.id,this.raids.push(_),this._toast(`life`,`A host of ${s} marches on the ${t.name}.`),_}_eventVert(e){if(!e)return 0;if(e.kind===`convoy`&&e.path&&e.path.length){let t=Math.min(e.path.length-1,Math.floor((e.progress||0)*(e.path.length-1)));return e.path[t]}return e.v}eventById(e){return(this.worldEvents||[]).find(t=>t.id===e)||null}liveEvents(){return(this.worldEvents||[]).filter(e=>e.state===`live`)}_stepMarches(e){for(let t of this.raids){if(t.state===`wait`){let e=this.cById[t.toId];e&&Ke(this.world,e.v,this.time)&&(t.state=`march`,this._toast(`life`,`Night falls over ${t.toName}. The host moves.`));continue}if(t.state!==`march`)continue;if(t.kind===`event`){let e=this.eventById(t.eventId||t.toId);if(!e||e.state!==`live`){this._refundRaid(t,`The opportunity slipped away.`);continue}e.kind===`convoy`&&(t.toName=e.name)}let n=this._quarantineSlow(t),r=e/Math.max(.4,t.dur*(n?2.6:1));n&&this._pressureQuarantine(t,e),t.progress=Math.min(1,t.progress+r),t.progress>=1&&this._beginBattle(t)}}_cityDefenders(e){let t=w(e.tier);if(e.owner!==`human`)return{civilian:0,armed:0,police:0,army:0,wallHp:e.wallHp,wallMax:e.wallMax};let n=t.civ+Math.round(e.strength*2),r=t.armed+Math.round(e.army*t.armed*.5+(e.strength-t.strength0)*2),i=t.police,a=t.army;e.age>=(t.policeAt??S.policeAtAge)&&t.police===0&&(i=Math.round(e.army*3)),e.age>=(t.armyAt??S.armyAtAge)&&t.army===0&&(a=Math.round(e.army*4)),i+=Math.round(e.army*t.police*.4),a+=Math.round(e.army*t.army*.4);let o=j(e.tier),s=this.awareStage().id,c=this.regionPressure(e.landmass)>=(k.regionSwatAt||2);(s===`outbreak`||s===`quarantine`||s===`confirmed`||c)&&(o===`police`?(i=Math.max(i,c?2:1),r+=s===`unknown`?0:1):o===`swat`?(i=Math.max(i,2+(c?2:0)+(s===`unknown`?0:2)),r+=1):(i=Math.max(i,1+(t.police||0)),r+=1)),(s===`quarantine`||s===`confirmed`)&&(o===`army`||o===`nuke`)?a+=2+Math.round((t.army||0)*.6+e.army*3):s===`outbreak`&&(o===`army`||o===`nuke`)&&(t.army||0)>0&&(a+=Math.round((t.army||0)*.35));let l=0;if(s!==`quarantine`&&s!==`confirmed`||o!==`army`&&o!==`nuke`||![`largecity`,`metropolis`,`megacity`].includes(e.tier)||(l=e.tier===`megacity`||e.tier===`metropolis`?2:1),o===`police`?(a=0,l=0,i=Math.min(i,3)):o===`swat`&&(a=0,l=0),(e.immuneUntil||0)>(this.time||0)){let o=e.immuneUntil-this.time,s=Math.min(1,o/Math.max(8,ne.immuneDur*.35)),c=this.mods().immune??1;r+=Math.round((2+s*2)*c),i+=Math.round((2+s*2)*c),a+=Math.round((1+s*2)*c);let u=n+Math.round(s*4*c),d=Math.round((e.wallMax||t.wall||20)*.35*s*c);return{civilian:u,armed:r,police:i,army:a,armor:l,wallHp:(e.wallHp||0)+d,wallMax:(e.wallMax||t.wall)+d,immune:!0}}return{civilian:n,armed:r,police:i,army:a,armor:l,wallHp:e.wallHp,wallMax:e.wallMax}}_beginBattle(e){let t=this.raids.find(t=>t!==e&&t.toId===e.toId&&t.kind===e.kind&&t.state===`battle`&&t.battle&&!t.battle.done);if(t&&e.kind===`raid`){if(t.battle.typeLv=this.typeLv||t.battle.typeLv,t.battle.reinforce(e.comp||{}),t.comp&&e.comp){for(let n of m)t.comp[n]=(t.comp[n]||0)+(e.comp[n]||0);e.hero&&(t.hero=!0)}return e.state=`joined`,e.joinedTo=t.id,e.progress=1,e.battle=null,this._toast(`life`,`Reinforcements join the fight at ${t.toName}.`),t}if(t&&e.kind===`strike`){let n=e.force||{};return t.battle._add&&(t.battle._add(`armed`,n.armed||0,`human`,4,t.battle.d/2,2.4),t.battle._add(`police`,n.police||0,`human`,3.5,t.battle.d/2+2,2),t.battle._add(`army`,n.army||0,`human`,5,t.battle.d/2-2,2),t.battle._tally()),e.state=`joined`,e.joinedTo=t.id,e.progress=1,e.battle=null,t}if(e.state=`battle`,e.progress=1,e.kind===`raid`){let t=this.cById[e.toId];e.battle=new Ue({seed:this.world.seed+e.id*17|0,name:t.name,tier:t.tier||`city`,attack:{...e.comp},defend:this._cityDefenders(t),walls:t.wallHp,wallMax:t.wallMax,stages:w(t.tier).stages,typeLv:this.typeLv,mods:this.mods(),tactic:e.tactic||`assault`,hero:e.hero?this.hero:null})}else if(e.kind===`event`){let t=this.eventById(e.eventId||e.toId),n=oe(t&&t.kind||e.eventKind);e.battle=new Ue({seed:this.world.seed+e.id*19|0,name:e.toName||n.name,tier:`city`,eventKind:n.id,attack:{...e.comp},defend:{civilian:n.civBonus||0,armed:n.armed||0,police:n.police||0,army:n.army||0,armor:n.armor||0,wallHp:n.walls||0,wallMax:n.walls||1},walls:n.walls||0,wallMax:Math.max(1,n.walls||1),stages:1,typeLv:this.typeLv,mods:this.mods(),tactic:e.tactic||`assault`,hero:e.hero?this.hero:null})}else if(e.kind===`strike`){let t=e.toId===`home`?null:this.cById[e.toId],n=e.toId===`home`?this.home.stock:{shambler:t.garrison,runner:0,brute:0};e.battle=new Ue({seed:this.world.seed+e.id*31|0,name:e.toName,attack:{shambler:0,runner:0,brute:0},defend:{civilian:0,armed:e.force.armed,police:e.force.police,army:e.force.army,wallHp:0,wallMax:1},walls:0,wallMax:1,invert:!0,garrison:n,typeLv:this.typeLv,mods:this.mods()})}}_stepBattles(e){for(let t of this.raids)t.state===`battle`&&t.battle&&!t.battle.done&&(t.battle.step(e),t.brains=t.battle.brains,t.battle.done&&this._resolveBattle(t))}_resolveBattle(e){if(e.state=`done`,e.result=e.battle.result,e.brains=e.battle.brains,e.kind===`raid`){if(e.result===`win`){let t=this.cById[e.toId];t.owner=`horde`,t.capturedAt=this.time,t.wallHp=0,this.recentFalls=(this.recentFalls||[]).concat([{id:t.id,name:t.name,tier:t.tier,t:this.time}]).slice(-12);let n=e.battle.zombieCount();t.garrison=Math.max(2,n),t.spawnT=x.baseSpawn;let r=this.home.type,i={id:t.id,name:t.name,v:t.v,type:r,stock:{...re(),shambler:t.garrison},spawnT:this.spawnInterval({id:t.id,type:r}),hp:80};this.bases.push(i);let a=w(t.tier),o=(this.stats.captured||0)<ie.earlyN?ie.earlyBrainMul:1,s=Math.round((a.captureBrains+e.brains)*o),c=Math.round((a.capturePoints+e.brains*b.pointsPerConvert)*o);this.brains+=s,this.points+=c,e.brainsAward=s,e.pointsAward=c,this.stats.captured++,this.stats.raidsWon=(this.stats.raidsWon||0)+1,this.stats.eaten+=e.battle.eaten,t.tier===`megacity`&&(this.stats.megacities=(this.stats.megacities||0)+1),this._addAwarenessHeat((k.captureHeat[t.tier]||.2)*(this.mods().alarmCapture||1)),this._syncAwareness(),t.research&&this._cureSetback(t),this._toast(`life`,`${t.name} has fallen to the horde.`),lt(`capture`),this._claimMilestones()}else{let t=e.comp?m.reduce((t,n)=>t+(e.comp[n]||0),0):1,n=Math.max(b.failFloor||3,Math.ceil(t*(b.failFloorPerHead||.25))),r=Math.max(n,e.brains||0),i=r*b.failPointsPerBrain;this.brains+=r,this.points+=i,e.brainsAward=r,e.pointsAward=i,this.stats.failed++,this.stats.raidsLost=(this.stats.raidsLost||0)+1,this.stats.eaten+=e.battle.eaten,lt(`loss`);let a=this.cById[e.toId];if(a&&a.owner===`human`&&(a.army=Math.min(1,a.army+.12),a.age+=20),e.tactic===`siege`&&this.home){let n=Math.max(1,Math.floor(t*.28));this.home.stock.shambler=(this.home.stock.shambler||0)+n,this._toast(`warn`,`${e.toName} repels the outbreak. ${n} slip back from the siege.`)}else this._toast(`warn`,`${e.toName} repels the outbreak.`)}this._resolveHero(e)}else if(e.kind===`event`)this._resolveEventRaid(e),this._resolveHero(e);else if(e.kind===`strike`){if(e.result===`lose`){if(e.toId===`home`)this.outcome=`lose`,this._toast(`warn`,`The nesting ground has been burned out.`),lt(`loss`);else{let t=this.cById[e.toId];t&&(t.owner=`human`,t.capturedAt=0,t.wallHp=t.wallMax*.6,t.garrison=0,t.army=Math.max(t.army,.3)),this.bases=this.bases.filter(t=>t.id!==e.toId),this.stats.retaken++,this._toast(`warn`,`${e.toName} has been reclaimed by the living.`)}}else{if(e.toId!==`home`){let t=this.cById[e.toId],n=this.bases.find(t=>t.id===e.toId);t&&(t.garrison=e.battle.zombieCount()),n&&(n.stock.shambler=e.battle.counts.shambler,n.stock.runner=e.battle.counts.runner,n.stock.brute=e.battle.counts.brute)}else if(this.home){let t=e.battle.counts;this.home.stock.shambler=t.shambler,this.home.stock.runner=t.runner,this.home.stock.brute=t.brute}this._toast(`life`,`The dead hold ${e.toName}.`)}}e.doneAt=this.time}_updateStrikes(e){if(this.strikeTimer-=e,this.strikeTimer>0)return;this.strikeTimer=S.strikeInterval;let t=this.cities.filter(e=>e.owner===`human`);if(!t.length)return;let n=this.cities.filter(e=>e.owner===`horde`),r=null,i=1/0;for(let e of n){let t=this.bases.find(t=>t.id===e.id),n=t?this.totalStock(t):e.garrison;n<=S.weakGarrison&&n<i&&(i=n,r={kind:`city`,c:e,garr:n})}let a=this.home?this.totalStock(this.home):0;if(a<=4&&a<=i&&(r={kind:`home`,garr:a}),!r)return;let o=r.kind===`home`?this.home.v:r.c.v;t.sort((e,t)=>xe(this.world,e.v,o)-xe(this.world,t.v,o));let s=t[0],c=r.kind===`home`?null:r.c&&r.c.tier,u=c?j(c):this.awareStage().id===`confirmed`||this.awareStage().id===`quarantine`?`army`:`swat`,d=Math.min(w(s.tier).strikeMul,c?w(c).strikeMul||1:.6),f={armed:Math.round((5+Math.round(s.strength*3))*d),police:Math.round((2+Math.round(s.army*3))*d),army:0};u===`police`?(f.police=Math.min(f.police,4),f.armed=Math.min(f.armed,6)):u===`swat`?f.police=Math.max(f.police,4):f.army=Math.round((2+Math.round(s.army*4))*d);let p=r.kind===`home`?`home`:r.c.id,m=r.kind===`home`?this.home.name||`the nesting ground`:r.c.name,h=L(this.world,s.v,o),g=xe(this.world,s.v,o),_=(x.marchBase+g*x.marchPerRad)/1.05,v=l[(s.name.length+this.raids.length)%l.length],y={id:dt(),kind:`strike`,fromId:s.id,toId:p,toName:m,force:f,path:h,progress:0,dur:_,state:`march`,battle:null,brains:0,channel:v,result:null};this.raids.push(y),this._toast(`warn`,`A strike force marches on ${m}.`)}_checkEnd(){this.outcome||((this.cure||0)>=100&&!this.distribution?this._beginDistribution():this.distribution||this.cities.every(e=>e.owner===`horde`)&&(this.outcome=`win`,this._toast(`life`,`Every city belongs to the dead.`)))}_beginDistribution(e={}){if(this.distribution)return this.distribution;let t=this.cities.filter(e=>e.research),n=(t.length?t:this.cities.filter(e=>[`megacity`,`metropolis`,`largecity`].includes(e.tier))).slice(0,6),r=n.length?n:this.cities.slice(0,3),i=this.cities.filter(e=>e.owner===`horde`),a=ne.distributeDur||9,o=[];for(let e of i){let t=r[0],n=1/0;for(let i of r){let r=xe(this.world,i.v,e.v);r<n&&(n=r,t=i)}let i=L(this.world,t.v,e.v),s=Math.max(2.4,Math.min(a-.4,2.2+n*2.4));o.push({id:`cs`+dt(),from:t.v,to:e.v,cityId:e.id,name:e.name,path:i,t:0,dur:s,arrived:!1})}return this.distribution={t:0,dur:a,origins:r.map(e=>({v:e.v,id:e.id,name:e.name})),shipments:o,counted:!1},this.cure=100,this._cancelFieldHordes(),this._toast(`warn`,`The cure is complete. Distribution begins.`),this.newsEvents=(this.newsEvents||[]).concat([{k:`curedist`,text:`Cure distributed worldwide`,t:this.time}]).slice(-8),lt(`milestone`),e.instant&&this._finishDistribution(),this.distribution}_cancelFieldHordes(){for(let e of this.raids)e.state!==`done`&&e.state!==`joined`&&(e.state=`done`,e.result=e.kind===`strike`?`win`:`lose`,e.doneAt=this.time,e.battle&&!e.battle.done&&(e.battle.done=!0,e.battle.result=e.result),(e.kind===`raid`||e.kind===`event`)&&(this.stats.raidsLost=(this.stats.raidsLost||0)+1),this._resolveHero(e));this.hero&&(this.hero.alive=!0,this.hero.cooldown=Math.max(0,Math.min(this.hero.cooldown||0,8))),this.bombs=[],this.quarantines=[];for(let e of this.liveEvents())this._expireEvent(e)}_healCity(e){if(!e||e.owner!==`horde`)return!1;e.owner=`human`,e.capturedAt=0,e.garrison=0;let t=w(e.tier);return e.wallMax=Math.max(e.wallMax||t.wall,t.wall),e.wallHp=e.wallMax,e.army=Math.max(e.army||0,.25),e.age=Math.max(e.age||0,12),e.immuneUntil=(this.time||0)+(ne.immuneDur||55),this.bases=this.bases.filter(t=>t.id!==e.id),!0}_stepDistribution(e){let t=this.distribution;if(!t)return;t.t=(t.t||0)+e;let n=Math.min(Math.PI,t.t/Math.max(.2,t.dur)*Math.PI);for(let n of t.shipments||[])if(n.t=(n.t||0)+e,!n.arrived&&n.t>=n.dur){n.arrived=!0;let e=this.cById[n.cityId];this._healCity(e)}for(let e of this.cities)if(e.owner===`horde`){for(let r of t.origins||[])if(xe(this.world,r.v,e.v)<=n+.02){this._healCity(e);break}}t.t>=t.dur&&this._finishDistribution()}_finishDistribution(){let e=this.distribution;if(!e)return null;for(let e of this.cities)this._healCity(e);let t=this.home?this.home.id:`home`;this.bases=this.bases.filter(e=>e===this.home||e.id===t),this.home&&!this.bases.includes(this.home)&&this.bases.unshift(this.home),this.home&&(this.home.hp=Math.max(this.home.hp||0,80)),this.cure=0,this.stageFlags={},this._awareOverride=null,this.awarenessHeat=0,this._syncAwareness(),this.bombs=[],this.quarantines=[],this.hero&&(this.hero.alive=!0,this.hero.cooldown=Math.min(this.hero.cooldown||0,8)),e.counted||(this.stats.curesSurvived=(this.stats.curesSurvived||0)+1,e.counted=!0),this.distribution=null,this.loseReason=this.loseReason===`cure`?null:this.loseReason,this.outcome===`lose`&&!this.loseReason&&(this.outcome=null);let n=this.prestige&&this.prestige.stacks||{};for(let e of B){let t=n[e.id]||0;t&&e.onCure&&e.onCure(this,t)}return this.prestigeOffer=Re(),this._toast(`life`,`The world is inoculated — but the nest still lives. A mutation offers itself.`),this.newsEvents=(this.newsEvents||[]).concat([{k:`curedone`,text:`Officials declare the outbreak contained. Isolated nests may remain`,t:this.time}]).slice(-8),{curesSurvived:this.stats.curesSurvived,alarm:this.alarm,home:this.home&&{id:this.home.id,stock:{...this.home.stock}},prestigeOffer:this.prestigeOffer.slice()}}_applyPostCureState({count:e=!0}={}){return this.distribution=this.distribution||{t:ne.distributeDur,dur:ne.distributeDur,origins:[],shipments:[],counted:!e},this._cancelFieldHordes(),this._finishDistribution()}distributionInfo(){let e=this.distribution,t=this.cities.filter(e=>(e.immuneUntil||0)>(this.time||0)).map(e=>({id:e.id,name:e.name,left:e.immuneUntil-this.time}));return{active:!!e,t:e&&e.t||0,dur:e&&e.dur||0,origins:e?e.origins:[],shipments:e?(e.shipments||[]).map(e=>({id:e.id,name:e.name,t:e.t,dur:e.dur,arrived:!!e.arrived})):[],healed:this.cities.filter(e=>e.owner===`human`).length,hordeCities:this.cities.filter(e=>e.owner===`horde`).length,immune:t,curesSurvived:this.stats.curesSurvived||0,alarm:this.alarm,cure:this.cure,outcome:this.outcome,loseReason:this.loseReason}}forceCure(){return this.stageFlags.cure=this.stageFlags.cure||this.time,this.alarm=Math.max(this.alarm||0,78),this.cure=100,this._beginDistribution()}_pickResearchCities(e=!1){let t=this.cities.filter(e=>e.research).length;if(e&&t||t>=3)return;let n=[`megacity`,`metropolis`,`largecity`,`city`],r=[],i=new Set;for(let e of n)for(let t of this.cities.filter(t=>t.tier===e&&t.owner===`human`))if(t.research)r.push(t),i.add(t.landmass);else{if(r.length>=4)break;i.has(t.landmass)&&r.length<3||(t.research=!0,r.push(t),i.add(t.landmass))}if(r.length<3){for(let e of this.cities)if(!e.research&&(e.research=!0,r.push(e),r.length>=4))break}}_stepHero(e){this.hero&&this.hero.cooldown>0&&(this.hero.cooldown=Math.max(0,this.hero.cooldown-e),this.hero.cooldown<=0&&!this.hero.alive&&(this.hero.alive=!0,this._toast(`life`,`${this.hero.name} stirs again at the nesting ground.`)))}_heroXp(e){if(this.hero)for(this.hero.xp=(this.hero.xp||0)+e*(this.mods().pzXp||1);this.hero.level<te.maxLevel&&this.hero.xp>=te.xpTo(this.hero.level);){this.hero.level+=1;let e=te.perks.find(e=>e.at===this.hero.level);e&&!(this.hero.perks||[]).includes(e.id)?(this.hero.perks=(this.hero.perks||[]).concat([e.id]),this._toast(`life`,`${this.hero.name} reaches level ${this.hero.level}: ${e.name}.`)):this._toast(`life`,`${this.hero.name} reaches level ${this.hero.level}.`)}}_resolveHero(e){if(!e.hero||!this.hero)return;let t=e.battle&&!e.battle.heroDead&&e.battle.units&&e.battle.units.some(e=>e.type===`zero`&&e.hp>0);if(e.result===`win`?this._heroXp(6+(e.battle&&e.battle.eaten?Math.min(8,e.battle.eaten):0)):this._heroXp(Math.min(4,e.battle&&e.battle.eaten||0)),t)this.hero.alive=!0,this.hero.cooldown=0;else{this.hero.alive=!1;let e=(this.hero.perks||[]).includes(`unending`)?.6:1;this.hero.cooldown=te.cooldown*e,this._toast(`warn`,`${this.hero.name} has fallen, and will return.`)}}_updateEscalation(e){e>0&&(this.awarenessHeat=Math.max(0,(this.awarenessHeat||0)*.985**e));let t=this._syncAwareness();if(!this.stageFlags[t.id]&&t.id!==`unknown`){this.stageFlags[t.id]=this.time;let e={outbreak:`An outbreak is declared. Officials ask the public to remain calm.`,quarantine:`A quarantine is announced. Rings go up around threatened regions.`,confirmed:`Officials confirm the dead are walking. Laboratories begin work on a cure.`}[t.id];e&&(this._toast(`warn`,e),this.newsEvents=(this.newsEvents||[]).concat([{k:t.id,text:e,t:this.time}]).slice(-8)),(t.id===`quarantine`||t.id===`confirmed`)&&this._seedQuarantines()}(this.stageFlags.quarantine||this.stageFlags.confirmed)&&!(this._qTick=(this._qTick||0)-e)&&(this._qTick=20,this._seedQuarantines())}_seedQuarantines(){if(this.awareStage().id!==`quarantine`&&this.awareStage().id!==`confirmed`&&!this.stageFlags.quarantine&&!this.stageFlags.confirmed)return;let e=this.cities.filter(e=>e.owner===`horde`),t=this.cities.filter(e=>e.owner===`human`),n=e.length?e:this.home?[this.home]:[];if(!n.length||!t.length)return;let r=[];for(let e of t){let t=!1;for(let r of n)if(xe(this.world,e.v,r.v)<.7){t=!0;break}t&&r.push(e)}let i=r.filter(e=>M(e.tier)),a=i.length?i:[];if(!a.length||(r.length=0,r.push(...a),!r.length))return;let o=r.filter(e=>!(this.quarantines||[]).some(t=>!t.broken&&(t.cities||[]).includes(e.id)));if(o.length<2)return;let s=o[0],c=o.filter(e=>xe(this.world,e.v,s.v)<.42);c.length<2&&c.push(o[1]||s);let l=.12;for(let e of c)l=Math.max(l,xe(this.world,s.v,e.v)+.08);l=Math.min(.32,l);let u={id:dt(),v:s.v,rad:l,hp:90,maxHp:90,broken:!1,name:s.name,cities:c.map(e=>e.id)};this.quarantines=(this.quarantines||[]).concat([u]).slice(-5),this._toast(`warn`,`Quarantine ring raised around ${s.name}.`),this.newsEvents=(this.newsEvents||[]).concat([{k:`quarantine`,text:`Quarantine announced around ${s.name}`,t:this.time,name:s.name}]).slice(-8)}_quarantineFor(e){if(e.kind!==`raid`||!(this.quarantines||[]).length)return null;let t=e.path||[];for(let e of this.quarantines){if(e.broken||e.hp<=0)continue;let n=0,r=0,i=!1;for(let a of t){let t=xe(this.world,a,e.v);t<=e.rad?n++:r++,Math.abs(t-e.rad)<.06&&(i=!0)}if(i||n&&r)return e}return null}_quarantineSlow(e){let t=this._quarantineFor(e);return!!(t&&!t.broken&&t.hp>0)}_pressureQuarantine(e,t){let n=this._quarantineFor(e);if(!n||n.broken)return;let r=e.comp||{},i=(1+(r.brute||0)*.8+(r.abomination||0)*2.2)*5.5*t;n.hp=Math.max(0,n.hp-i),n.hp<=0&&!n.broken&&(n.broken=!0,n.hp=0,this._toast(`life`,`The quarantine around ${n.name} has been broken.`),this.newsEvents=(this.newsEvents||[]).concat([{k:`qbreak`,text:`Quarantine ring around ${n.name} has collapsed`,t:this.time,name:n.name}]).slice(-8))}_stepBombs(e){let t=this.awareStage().id;if(t!==`quarantine`&&t!==`confirmed`){this.bombs=(this.bombs||[]).filter(t=>(t.t+=e)<t.dur+2.8);return}this.bombTimer=(this.bombTimer??16)-e,this.bombTimer<=0&&(this.bombTimer=16+Math.random()*10,this._launchBomb());let n=[];for(let t of this.bombs||[])t.t=(t.t||0)+e,!t.hit&&t.t>=t.dur&&(t.hit=!0,this._bombImpact(t)),t.t<t.dur+2.8&&n.push(t);this.bombs=n}_launchBomb(e={}){let t=!!e.nuke,n=this.raids.filter(e=>e.kind===`raid`&&e.state===`march`&&e.path&&e.path.length).filter(e=>this.cById[e.toId]&&M(this.cById[e.toId].tier)),r=this.cities.filter(e=>e.owner===`horde`&&M(e.tier)),i=r.filter(e=>N(e.tier)),a=null,o=`bomb`;if(t||this.awareStage().id===`confirmed`&&i.length&&Math.random()<.22){let e=i[Math.floor(Math.random()*i.length)];e&&(a={kind:`city`,id:e.id,name:e.name,v:e.v},o=`nuke`)}if(!a){if(n.length&&Math.random()<.55){let e=n[Math.floor(Math.random()*n.length)];a={kind:`raid`,id:e.id,name:e.toName,v:e.path[Math.min(e.path.length-1,Math.floor(e.progress*(e.path.length-1)))]}}else if(r.length){let e=r[Math.floor(Math.random()*r.length)];a={kind:`city`,id:e.id,name:e.name,v:e.v}}}if(!a||!this.canBombTarget(a))return null;o===`nuke`&&!this.canNukeTarget(a)&&(o=`bomb`);let s=this.cities.filter(e=>e.owner===`human`);if(!s.length)return null;s.sort((e,t)=>xe(this.world,e.v,a.v)-xe(this.world,t.v,a.v));let c=s[0],l=L(this.world,c.v,a.v),u=o===`nuke`?Math.max(5.6,5+xe(this.world,c.v,a.v)*3.2):Math.max(4.8,4.2+xe(this.world,c.v,a.v)*3.2),d={id:dt(),from:c.v,to:a.v,path:l,t:0,dur:u,hit:!1,target:a,kind:o};return this.bombs.push(d),this._toast(`warn`,o===`nuke`?`A nuclear strike is launched at ${a.name}.`:`Jets scramble toward ${a.name}.`),lt(`bomb`),d}_bombImpact(e){let t=e.target||{},n=e.kind===`nuke`,r=n?.22:.65,i=n?.7:.3;if(t.kind===`raid`){let e=this.raid(t.id);if(e&&e.comp&&e.state===`march`){let t=0;for(let n of m){let r=e.comp[n]||0,a=Math.ceil(r*i);e.comp[n]=Math.max(0,r-a),t+=r-e.comp[n]}let r=m.reduce((t,n)=>t+(e.comp[n]||0),0);this._toast(`warn`,n?`A nuclear burst incinerates the host bound for ${e.toName}. ${t} of the dead are gone.`:`A bombing run hits the host bound for ${e.toName}. ${t} of the dead are burned.`),lt(`bomb`),this.newsEvents=(this.newsEvents||[]).concat([{k:n?`nuke`:`bomb`,text:n?`Nuclear strike reported near ${e.toName}`:`Air strike reported near ${e.toName}`,t:this.time,name:e.toName}]).slice(-8),r<=0&&(e.state=`done`,e.result=`lose`,e.doneAt=this.time,this._resolveHero(e))}}else if(t.kind===`city`){let e=this.cById[t.id];if(e&&!M(e.tier))return;let i=this.bases.find(e=>e.id===t.id);if(i)for(let e of m)i.stock[e]=Math.max(0,Math.floor((i.stock[e]||0)*r));e&&(e.garrison=Math.max(0,Math.floor((e.garrison||0)*r))),this._toast(`warn`,n?`A nuclear strike flattens ${t.name}.`:`Bombs fall on ${t.name}.`),lt(`bomb`),this.newsEvents=(this.newsEvents||[]).concat([{k:n?`nuke`:`bomb`,text:n?`Nuclear strike reported on ${t.name}`:`Air strike reported on ${t.name}`,t:this.time,name:t.name}]).slice(-8)}}_stepCure(e){if(this.distribution)return;if(!(this.awareStage().id===`confirmed`||this.stageFlags&&this.stageFlags.confirmed)){(this.cure||0)>0&&!this.stats.curesSurvived&&(this.cure=0);return}let t=this.cities.filter(e=>e.research&&e.owner===`human`);if(!t.length)return;let n=this.stats.curesSurvived||0,r=1+Math.min(ne.rateMulCap||.7,n*(ne.rateMulPerCure||.18)),i=1+Math.max(0,(this.alarm||0)-16)*.008,a=ne.ratePerLab*t.length*i*r*(this.mods().cureRate||1);this.cure=Math.min(100,(this.cure||0)+a*e)}_cureSetback(e){let t=this.cure||0;t<=0||(this.cure=Math.max(0,t*(1-ne.setback)-ne.setbackFlat),this._toast(`life`,`${e.name}'s laboratory is lost. The cure is set back (${Math.round(t)}% → ${Math.round(this.cure)}%).`),this.newsEvents=(this.newsEvents||[]).concat([{k:`cureback`,text:`Research at ${e.name} has gone dark — cure set back`,t:this.time,name:e.name}]).slice(-8))}buyUpgrade(e){let t=y.find(t=>t.id===e);if(!t)return!1;let n=this.upgradeCost(e);if(t.once)return this.upgrades[e]||this.brains<n?!1:(this.brains-=n,this.upgrades[e]=!0,this._toast(`life`,`Unlocked ${t.name}.`),!0);let r=this.upgrades[e]||0;return r>=(t.max||1)||this.brains<n?!1:(this.brains-=n,this.upgrades[e]=r+1,this._toast(`life`,`${t.name} improved.`),!0)}upgradeCost(e){let t=y.find(t=>t.id===e);if(!t)return 0;let n=t.once?t.cost:t.cost+(this.upgrades[e]||0)*Math.round(t.cost*.6);return Math.max(1,Math.round(n*(this.mods().upgradeCost||1)))}buyTree(e){if(!Ie(this.tree,e))return!1;let t=Le(e,this.mods());if(this.brains<t)return!1;this.brains-=t,this.tree[e]=1;let n=Pe(e);return this._toast(`life`,n?`The strain takes ${n.name}.`:`A mutation takes hold.`),!0}pickPrestige(e){if(!this.prestigeOffer||!this.prestigeOffer.includes(e))return!1;let t=Ee[e];return t?(this.prestige||(this.prestige={picks:[],stacks:{}}),this.prestige.picks=(this.prestige.picks||[]).concat([e]),this.prestige.stacks[e]=(this.prestige.stacks[e]||0)+1,t.applyNow&&t.applyNow(this,1),this.prestigeOffer=null,this._toast(`life`,`A permanent mutation settles in: ${t.name}.`),!0):!1}forcePrestige(e){return this.prestigeOffer=Array.isArray(e)&&e.length?e.slice(0,3):Re(),this.prestigeOffer.slice()}prestigeState(){return{offer:this.prestigeOffer?this.prestigeOffer.slice():null,picks:this.prestige&&this.prestige.picks?this.prestige.picks.slice():[],stacks:{...this.prestige&&this.prestige.stacks||{}}}}_toast(e,t){this.events.push({t:this.time,kind:e,text:t,id:dt()}),this.events.length>24&&this.events.shift()}buyTypeUpgrade(e,t){let n=f.find(e=>e.id===t);if(!n||!m.includes(e)||e!==`shambler`&&!this.canUnlock(e))return!1;this.typeLv||(this.typeLv=h()),this.typeLv[e]||(this.typeLv[e]={});let r=this.typeLv[e][t]||0;if(r>=n.max)return!1;let i=this.typeUpgradeCostOf(e,t);return this.brains<i?!1:(this.brains-=i,this.typeLv[e][t]=r+1,this._toast(`life`,`${e[0].toUpperCase()+e.slice(1)} ${n.name} improved.`),!0)}typeUpgradeCostOf(e,t){let n=this.typeLv&&this.typeLv[e]&&this.typeLv[e][t]||0;return Math.max(1,Math.round(g(e,t,n)*(this.mods().upgradeCost||1)))}activeRaids(){return this.raids.filter(e=>e.state===`march`||e.state===`battle`||e.state===`wait`)}raid(e){return this.raids.find(t=>t.id===e)||null}addBrains(e){this.brains+=e}addStock(e,t,n){let r=this.bases.find(t=>t.id===e)||this.home;r&&(r.stock[t]=(r.stock[t]||0)+n)}skipMarch(e){let t=this.raid(e);t&&(t.state===`march`||t.state===`wait`)&&(t.progress=1,this._beginBattle(t))}weakenCity(e){let t=this.cById[e];if(!t)return;let n=w(t.tier);t.wallHp=Math.max(8,Math.round(n.wall*.2)),t.wallMax=t.wallHp,t.army=0,t.age=0,t.strength=n.strength0*.5}fortifyCity(e){let t=this.cById[e];if(!t)return;let n=w(t.tier);t.wallHp=Math.round(n.wall*1.8),t.wallMax=t.wallHp,t.army=1,t.age=240,t.strength=n.strength0+1.4}forceStrike(e){if(this.phase!==`play`||!this.home)return null;let t=this.cities.filter(e=>e.owner===`human`);if(!t.length)return null;let n=e,r,i;if(!n){let e=this.cities.find(e=>e.owner===`horde`);n=e?e.id:`home`}if(n===`home`)r=this.home.v,i=this.home.name||`the nesting ground`;else{let e=this.cById[n];if(!e)return null;r=e.v,i=e.name}t.sort((e,t)=>xe(this.world,e.v,r)-xe(this.world,t.v,r));let a=t[0],o=w(a.tier).strikeMul,s={armed:Math.round((5+Math.round(a.strength*3))*o),police:a.age>=(w(a.tier).policeAt??S.policeAtAge)?Math.round((2+Math.round(a.army*3))*o):0,army:a.age>=(w(a.tier).armyAt??S.armyAtAge)?Math.round((2+Math.round(a.army*4))*o):0},c=L(this.world,a.v,r),u=xe(this.world,a.v,r),d=(x.marchBase+u*x.marchPerRad)/1.05,f=l[(a.name.length+this.raids.length)%l.length],p={id:dt(),kind:`strike`,fromId:a.id,toId:n,toName:i,force:s,path:c,progress:0,dur:d,state:`march`,battle:null,brains:0,channel:f,result:null};return this.raids.push(p),this.strikeTimer=S.strikeInterval,this._toast(`warn`,`A strike force marches on ${i}.`),p}_refundRaid(e,t){if(!e||e.state===`done`)return;let n=this.bases.find(t=>t.id===e.fromId)||this.home;if(n&&e.comp)for(let t of m)n.stock[t]=(n.stock[t]||0)+(e.comp[t]||0);e.hero&&this.hero&&(this.hero.alive=!0,this.hero.cooldown=0),e.state=`done`,e.result=`expire`,e.doneAt=this.time,t&&this._toast(`warn`,t)}_claimMilestones(){this.milestones=this.milestones||{};for(let e of ie.milestones){if((this.stats.captured||0)<e.at||this.milestones[e.at])continue;this.milestones[e.at]=this.time,this.brains+=e.brains;let t=``;e.unlock&&!this.upgrades[e.unlock]?(this.upgrades[e.unlock]=!0,t=` ${e.unlock[0].toUpperCase()+e.unlock.slice(1)} unlocked.`):this.brains+=Math.round(e.brains*.3),this._toast(`life`,`${e.label}: +${e.brains} brains.${t}`),this.newsEvents=(this.newsEvents||[]).concat([{k:`milestone`,text:`${e.label} — the horde is rewarded`,t:this.time,at:e.at}]).slice(-8),lt(`milestone`)}}_resolveEventRaid(e){let t=this.eventById(e.eventId||e.toId),n=oe(e.eventKind||t&&t.kind),r=e.battle?e.battle.eaten:0;if(this.stats.eaten=(this.stats.eaten||0)+r,e.result===`win`){let i=(this.stats.captured||0)<ie.earlyN?ie.earlyBrainMul:1,a=n.brains||Math.round(22*(n.brainsMul||1)),o=Math.round((a+r)*(n.brainsMul?Math.max(1,n.brainsMul*.35+.8):1)*i),s=o*2;this.brains+=o,this.points+=s,e.brainsAward=o,e.pointsAward=s,this.stats.raidsWon=(this.stats.raidsWon||0)+1,this.stats.eventsWon=this.stats.eventsWon||{},this.stats.eventsWon[n.id]=(this.stats.eventsWon[n.id]||0)+1,n.unlock?(this.upgrades[n.unlock]=!0,this.home&&(this.home.stock.armored=(this.home.stock.armored||0)+2),this._toast(`life`,`The ${n.name} is overrun. Armored Dead unlocked.`)):this._toast(`life`,`The ${n.name} is overrun. +${o} brains.`),t&&(t.state=`raided`),lt(`capture`)}else{let t=e.comp?m.reduce((t,n)=>t+(e.comp[n]||0),0):1,r=Math.max(b.failFloor||3,Math.ceil(t*(b.failFloorPerHead||.25))),i=Math.max(r,e.brains||0);this.brains+=i,this.points+=i*b.failPointsPerBrain,e.brainsAward=i,e.pointsAward=i*b.failPointsPerBrain,this.stats.raidsLost=(this.stats.raidsLost||0)+1,this.stats.failed=(this.stats.failed||0)+1,this._toast(`warn`,`The ${n.name} holds.`),lt(`loss`)}}_stepEvents(e){if(this.phase!==`play`||this.outcome)return;for(let t of this.worldEvents||[])t.state===`live`&&(t.t=(t.t||0)+e,t.kind===`convoy`&&t.path&&(t.progress=Math.min(1,t.t/Math.max(1,t.dur)),t.v=t.path[Math.min(t.path.length-1,Math.floor(t.progress*(t.path.length-1)))]),t.t>=t.dur&&this._expireEvent(t));this.eventTimer=(this.eventTimer??22)-e;let t=this.liveEvents();this.eventTimer<=0&&t.length<2&&(this.stats.captured||0)>=2&&(this.eventTimer=26+Math.random()*18,this._spawnEvent())}_spawnEvent(e,t={}){let n=this.liveEvents().map(e=>e.kind),r=Object.keys(ae).filter(e=>!n.includes(e));if(e&&ae[e]||(e=(this.stats.captured||0)<4?r.filter(e=>e!==`milbase`)[0]||r[0]:r[Math.floor(Math.random()*r.length)]),!e||!ae[e]||this.liveEvents().some(t=>t.kind===e)&&!t.force)return null;let i=oe(e),a=this.cities.filter(e=>e.owner===`human`);if(!a.length)return null;let o;if(e===`convoy`){if(a.length<2)return null;let t=a[Math.floor(Math.random()*a.length)];a.sort((e,n)=>xe(this.world,n.v,t.v)-xe(this.world,e.v,t.v));let n=a[0].id===t.id?a[1]:a[0],r=L(this.world,t.v,n.v);o={id:`e`+dt(),kind:e,name:i.name,news:i.news,v:t.v,fromV:t.v,toV:n.v,fromName:t.name,toName:n.name,path:r,progress:0,t:0,dur:i.dur,state:`live`}}else{let t=e===`stadium`||e===`festival`?a.filter(e=>[`city`,`largecity`,`metropolis`,`megacity`].includes(e.tier)):e===`milbase`?a.filter(e=>[`largecity`,`metropolis`,`megacity`].includes(e.tier)):a.filter(e=>e.tier!==`hamlet`);(t.length?t:a)[Math.floor(Math.random()*(t.length||a.length)%Math.max(1,t.length||a.length))];let n=t.length?t[Math.floor(Math.random()*t.length)]:a[Math.floor(Math.random()*a.length)];o={id:`e`+dt(),kind:e,name:i.name,news:i.news,v:n.v,cityId:n.id,cityName:n.name,t:0,dur:i.dur,state:`live`}}return this.worldEvents=(this.worldEvents||[]).concat([o]).slice(-8),this._toast(`warn`,i.news||`${i.name} is underway.`),this.newsEvents=(this.newsEvents||[]).concat([{k:e,text:i.news||i.name,t:this.time,name:o.cityName||o.name}]).slice(-8),o}_expireEvent(e){if(!e||e.state!==`live`)return e;e.state=`expired`,e.t=e.dur,this._toast(`warn`,`The ${e.name} has ended.`);for(let t of this.raids)t.kind===`event`&&(t.eventId===e.id||t.toId===e.id)&&t.state===`march`&&this._refundRaid(t,`The ${e.name} slipped away. The host turns back.`);return e}forceEvent(e,t={}){t={force:!0,...t};for(let t of this.liveEvents())t.kind===e&&this._expireEvent(t);return this._spawnEvent(e,t)}expireEvent(e){let t=this.eventById(e)||this.liveEvents()[0];return t?this._expireEvent(t):null}statsReport(){return{eaten:this.stats.eaten||0,captured:this.stats.captured||0,failed:this.stats.failed||0,retaken:this.stats.retaken||0,raidsWon:this.stats.raidsWon||0,raidsLost:this.stats.raidsLost||0,biggestHorde:this.stats.biggestHorde||0,megacities:this.stats.megacities||0,time:this.time||0,days:(this.time||0)/ie.dayLen,pzLevel:this.hero?this.hero.level:1,eventsWon:{...this.stats.eventsWon||{}},curesSurvived:this.stats.curesSurvived||0,milestones:{...this.milestones||{}},tree:{...this.tree||{}},prestige:this.prestigeState(),migratedUtility:this._migratedUtility||null,v7:this.v7||0,v71:this.v71||0,awareness:this.awarenessInfo?this.awarenessInfo():null}}trialBattles(e,t,n=24,r={}){let i=this.oddsFor(e,t,r),a=0,o=0,s=0,c=e&&(e.eventKind||e.kind===`event`||e.kind&&ae[e.kind]);for(let i=0;i<n;i++){let n;if(c){let a=oe(e.eventKind||e.kind);n=new Ue({seed:this.world.seed+i*97|0,name:a.name,tier:`city`,eventKind:a.id,attack:{...t},defend:{civilian:a.civBonus||0,armed:a.armed||0,police:a.police||0,army:a.army||0,armor:a.armor||0,wallHp:a.walls||0,wallMax:a.walls||1},walls:a.walls||0,wallMax:Math.max(1,a.walls||1),stages:1,typeLv:this.typeLv,mods:this.mods(),tactic:r.tactic||`assault`,hero:r.hero?this.hero:null})}else{let a=typeof e==`string`?this.cById[e]:e,o=this._cityDefenders(a);n=new Ue({seed:this.world.seed+(a?.id||0)+i*91|0,name:a.name,tier:a.tier,attack:{...t},defend:o,walls:a.wallHp,wallMax:a.wallMax,stages:w(a.tier).stages,typeLv:this.typeLv,mods:this.mods(),tactic:r.tactic||`assault`,hero:r.hero?this.hero:null})}let l=0;for(;!n.done&&l++<800;)n.step(.25);n.done||(n.done=!0,n.result=n.result||`lose`),n.result===`win`?a++:o++,s+=n.eaten||0}return{n,win:a,lose:o,actual:a/n,expected:i.winChance,winPct:i.winPct,expWin:i.expWin,expFail:i.expFail,eatenAvg:s/n,host:i.host,city:i.city,ratio:i.ratio}}setAlarm(e){return this._awareOverride=Math.max(0,Math.min(100,e)),this._updateEscalation(0),this.alarm}setCure(e){return this.cure=Math.max(0,Math.min(100,e)),this.cure>=100?this._checkEnd():this.cure>0&&(this.stageFlags.confirmed=this.stageFlags.confirmed||this.time),this.cure}forceQuarantine(){return this.forceAwareness(`quarantine`),this.stageFlags.quarantine=this.stageFlags.quarantine||this.time,this._seedQuarantines(),this.quarantines}breakQuarantine(e){let t=(this.quarantines||[]).find(t=>e==null||t.id===e);return t?(t.hp=0,t.broken=!0,t):null}forceBomb(e,t={}){if(e){let n=this.raid(e)||this.raids.find(t=>t.toId===e&&t.state===`march`),r=this.cById[e],i=n?{kind:`raid`,id:n.id,name:n.toName,v:n.path&&n.path[0]||r&&r.v}:r?{kind:`city`,id:r.id,name:r.name,v:r.v,tier:r.tier}:null;if(!i||!this.canBombTarget(i))return null;let a=!!(t.nuke&&this.canNukeTarget(i)),o=this.cities.filter(e=>e.owner===`human`)[0];if(o){let e=L(this.world,o.v,i.v),t={id:dt(),from:o.v,to:i.v,path:e,t:0,dur:a?5.6:4.2,hit:!1,target:i,kind:a?`nuke`:`bomb`};return this.bombs.push(t),lt(`bomb`),t}}return this._launchBomb(t)||null}forceNuke(e){return this.forceBomb(e,{nuke:!0})}researchCities(){return this.cities.filter(e=>e.research).map(e=>({id:e.id,name:e.name,owner:e.owner,tier:e.tier}))}qaCapture(e){let t=this.cById[e];if(!t)return null;let n=t.owner===`human`,r=!!t.research,i=this.cure;return t.owner=`horde`,t.capturedAt=this.time,t.wallHp=0,this.recentFalls=(this.recentFalls||[]).concat([{id:t.id,name:t.name,tier:t.tier,t:this.time}]).slice(-12),this.bases.find(e=>e.id===t.id)||this.bases.push({id:t.id,name:t.name,v:t.v,type:this.home?this.home.type:`graveyard`,stock:{...re(),shambler:Math.max(2,t.garrison||4)},spawnT:8,hp:80}),this._addAwarenessHeat((k.captureHeat[t.tier]||.2)*(this.mods().alarmCapture||1)),this._syncAwareness(),n&&(this.stats.captured=(this.stats.captured||0)+1,t.tier===`megacity`&&(this.stats.megacities=(this.stats.megacities||0)+1),this._claimMilestones()),n&&r&&this._cureSetback(t),{id:t.id,name:t.name,research:r,cureBefore:i,cure:this.cure,alarm:this.alarm}}heroState(){return this.hero?{...this.hero,perks:[...this.hero.perks||[]]}:null}serialize(){return{v:3,seed:this.world.seed,time:this.time,brains:this.brains,points:this.points,speed:this.speed,outcome:this.outcome,phase:this.phase,upgrades:{...this.upgrades},typeLv:JSON.parse(JSON.stringify(this.typeLv||h())),recentFalls:(this.recentFalls||[]).slice(-12),alarm:this.alarm||0,worldEvents:(this.worldEvents||[]).map(e=>({...e})),eventTimer:this.eventTimer,milestones:{...this.milestones||{}},stageFlags:{...this.stageFlags||{}},cure:this.cure||0,quarantines:(this.quarantines||[]).map(e=>({...e,cities:[...e.cities||[]]})),bombs:(this.bombs||[]).map(e=>({...e})),bombTimer:this.bombTimer,newsEvents:(this.newsEvents||[]).slice(-8),hero:this.hero?{...this.hero,perks:[...this.hero.perks||[]]}:null,loseReason:this.loseReason||null,v7:1,v71:1,awarenessHeat:this.awarenessHeat||0,tree:{...this.tree||{}},prestige:{picks:this.prestige&&this.prestige.picks?this.prestige.picks.slice():[],stacks:{...this.prestige&&this.prestige.stacks||{}}},prestigeOffer:this.prestigeOffer?this.prestigeOffer.slice():null,distribution:this.distribution?{t:this.distribution.t,dur:this.distribution.dur,counted:!!this.distribution.counted,origins:(this.distribution.origins||[]).map(e=>({...e})),shipments:(this.distribution.shipments||[]).map(e=>({...e,path:e.path?e.path.slice():[]}))}:null,stats:{...this.stats},home:this.home&&{...this.home,stock:{...this.home.stock}},bases:this.bases.map(e=>({...e,stock:{...e.stock}})),cities:this.cities.map(e=>({...e})),raids:this.raids.filter(e=>e.state!==`done`&&e.state!==`joined`).map(e=>({id:e.id,kind:e.kind,fromId:e.fromId,toId:e.toId,toName:e.toName,comp:e.comp,force:e.force,path:e.path,progress:e.progress,dur:e.dur,state:e.state,pipMode:e.pipMode||null,tactic:e.tactic||`assault`,hero:!!e.hero,channel:e.channel,brains:e.brains,battle:e.state===`battle`&&e.battle&&!e.battle.done?e.battle.serialize():null})),strikeTimer:this.strikeTimer,nextId:ut}}deserialize(e){if(!e||e.v!==3)throw Error(`bad save`);this.reset(),this.time=e.time||0,this.brains=e.brains||0,this.points=e.points||0,this.speed=e.speed||1,this.outcome=e.outcome||null,this.phase=e.phase||`pick`,this.upgrades={...e.upgrades||{}},this._migrateV7(e),this.typeLv={...h(),...e.typeLv||{}};for(let e of m)this.typeLv[e]={...this.typeLv[e]||{}};if(this.stats={eaten:0,captured:0,failed:0,retaken:0,...e.stats||{}},this.bases=(e.bases||[]).map(e=>({...e,stock:{...re(),...e.stock}})),e.home){let t=e.home.id||`home`,n=this.bases.findIndex(e=>e.id===t);if(n<0)this.home={...e.home,stock:{...re(),...e.home.stock}},this.bases.unshift(this.home);else{let t=this.bases[n];t.stock={...re(),...e.home.stock||{},...t.stock||{}},this.home=t}}else this.home=this.bases.find(e=>e.id===`home`)||this.bases[0]||null;let t=Object.fromEntries((e.cities||[]).map(e=>[e.id,e]));for(let e of this.cities){let n=t[e.id];n&&Object.assign(e,n)}this.recentFalls=Array.isArray(e.recentFalls)?e.recentFalls.slice(-12):[];for(let e of this.cities)e.owner===`horde`?(e.capturedAt||(e.capturedAt=Math.max(0,(this.time||0)-90)),this.recentFalls.some(t=>t.id===e.id)||this.recentFalls.push({id:e.id,name:e.name,tier:e.tier,t:e.capturedAt})):e.capturedAt=e.capturedAt||0;this.raids=(e.raids||[]).map(e=>{let t={...e,battle:null,result:e.result||null,path:e.path||[],pipMode:e.pipMode||`news`};if(e.state===`battle`&&e.battle)try{t.battle=new Ue({restore:e.battle})}catch{t.battle=null,t.state=`march`,t.progress=1}else e.state===`battle`&&!e.battle&&(t.state=`march`,t.progress=1);return t}),this.alarm=e.alarm||0,this.stageFlags={...e.stageFlags||{}},this.cure=e.cure||0,this.quarantines=Array.isArray(e.quarantines)?e.quarantines.map(e=>({...e})):[],this.bombs=Array.isArray(e.bombs)?e.bombs.map(e=>({...e})):[],this.bombTimer=e.bombTimer??18,this.newsEvents=Array.isArray(e.newsEvents)?e.newsEvents.slice(-8):[],this.hero=e.hero?{name:te.name,alive:!0,xp:0,level:1,cooldown:0,perks:[],...e.hero}:{name:te.name,alive:!0,xp:0,level:1,cooldown:0,perks:[]},this.loseReason=e.loseReason||null,this.worldEvents=Array.isArray(e.worldEvents)?e.worldEvents.map(e=>({...e})):[],this.eventTimer=e.eventTimer??18,this.milestones=e.milestones||{},this.stats&&(this.stats.raidsWon=this.stats.raidsWon||0,this.stats.raidsLost=this.stats.raidsLost||0,this.stats.biggestHorde=this.stats.biggestHorde||0,this.stats.megacities=this.stats.megacities||0,this.stats.eventsWon=this.stats.eventsWon||{},this.stats.curesSurvived=this.stats.curesSurvived||0);for(let e of this.bases)e.stock={...re(),...e.stock||{}};this.distribution=e.distribution?{t:e.distribution.t||0,dur:e.distribution.dur||ne.distributeDur,counted:!!e.distribution.counted,origins:(e.distribution.origins||[]).map(e=>({...e})),shipments:(e.distribution.shipments||[]).map(e=>({...e,path:e.path?e.path.slice():[]}))}:null,this.phase===`play`&&this._pickResearchCities(!0),this.strikeTimer=e.strikeTimer??S.strikeInterval,ut=e.nextId||1e3;for(let e of this.raids)e.battle&&(e.battle.typeLv=this.typeLv,e.battle.mods=this.mods());this._mergeOpenBattles(),this.awarenessHeat=e.awarenessHeat||0,this._migrateCureLossSave(),this._migrateV71(e)}_migrateV7(e){this.tree={...e&&e.tree||{}};let t=e&&e.prestige||{};if(this.prestige={picks:Array.isArray(t.picks)?t.picks.slice():[],stacks:{...t.stacks||{}}},this.prestigeOffer=Array.isArray(e&&e.prestigeOffer)?e.prestigeOffer.slice():null,e&&e.v7){this.v7=1,this._migratedUtility=null;return}let{refund:n,spent:r}=ze(this.upgrades);for(let e of De)delete this.upgrades[e];n&&(this.brains+=n),this._migratedUtility=n?{refund:n,spent:r}:{refund:0,spent:{}},this.v7=1,n&&this._toast(`life`,`Old biomass works were refunded as ${n} brains. Spend them on the mutation tree.`)}_migrateCureLossSave(){this.outcome===`lose`&&this.loseReason===`cure`?(this.outcome=null,this.loseReason=null,this._applyPostCureState({count:!(this.stats&&this.stats.curesSurvived)})):this.phase===`play`&&!this.outcome&&(this.cure||0)>=100&&!this.distribution&&this._beginDistribution()}_migrateV71(e){let t={alarm:this.alarm,flags:{...this.stageFlags||{}},cure:this.cure,bombs:(this.bombs||[]).length};if(this._awareOverride=null,!(e&&e.v71)){this.awarenessHeat=0;let e=(this.cities||[]).filter(e=>e.owner===`horde`&&e.tier===`hamlet`).length,t=(this.cities||[]).filter(e=>e.owner===`horde`&&e.tier===`town`).length;(this.cities||[]).filter(e=>e.owner===`horde`&&M(e.tier)).length===0&&(this.awarenessHeat=Math.min(this.awarenessCap(),e*.05+t*.2));for(let e of[`militia`,`police`,`army`,`bombing`,`cure`])delete this.stageFlags[e]}let n=this._syncAwareness();n.id!==`quarantine`&&n.id!==`confirmed`?(delete this.stageFlags.quarantine,delete this.stageFlags.confirmed,delete this.stageFlags.bombing,delete this.stageFlags.cure,this.quarantines=[],!this.distribution&&n.id!==`confirmed`&&(this.cure=0)):n.id===`quarantine`&&(delete this.stageFlags.confirmed,delete this.stageFlags.cure,this.distribution||(this.cure=0)),this.stageFlags[n.id]=this.stageFlags[n.id]||this.time||1,n.id===`unknown`&&delete this.stageFlags.unknown,this.bombs=(this.bombs||[]).filter(e=>this.canBombTarget(e.target||{kind:`city`,id:e.target&&e.target.id})),this.v71=1,this._migratedAwareness={before:t,after:this.awarenessInfo()}}_mergeOpenBattles(){let e=new Map;for(let t of this.raids){if(t.state!==`battle`||!t.battle||t.battle.done)continue;let n=`${t.kind}:${t.toId}`;if(!e.has(n)){e.set(n,t);continue}let r=e.get(n);if(r.battle.brains+=t.battle.brains||0,r.battle.eaten+=t.battle.eaten||0,r.battle.reinforceUnits(t.battle.units||[]),r.comp&&t.comp)for(let e of[`shambler`,`runner`,`brute`])r.comp[e]=(r.comp[e]||0)+(t.comp[e]||0);t.state=`joined`,t.joinedTo=r.id,t.battle=null}}},pt,mt,ht,gt,_t,vt,yt,bt,xt,St=1e3,Ct=1001,wt=1002,Tt=1003,Et=1004,Dt=1005,Ot=1006,kt=1007,At=1008,jt=1009,Mt=1010,Nt=1011,Pt=1012,Ft=1013,It=1014,Lt=1015,Rt=1016,zt=1017,Bt=1018,Vt=1020,Ht=35902,Ut=35899,Wt=1021,Gt=1022,Kt=1023,qt=1026,Jt=1027,Yt=1028,Xt=1029,Zt=1030,Qt=1031,$t=1033,en=33776,tn=33777,nn=33778,rn=33779,an=35840,on=35841,sn=35842,cn=35843,ln=36196,un=37492,dn=37496,fn=37488,pn=37489,mn=37490,hn=37491,gn=37808,_n=37809,vn=37810,yn=37811,bn=37812,xn=37813,Sn=37814,Cn=37815,wn=37816,Tn=37817,En=37818,Dn=37819,On=37820,kn=37821,An=36492,jn=36494,Mn=36495,Nn=36283,Pn=36284,Fn=36285,In=36286,Ln=2300,Rn=2301,zn=2302,Bn=2303,Vn=2400,Hn=2401,Un=2402,Wn=3200,Gn=`srgb`,Kn=`srgb-linear`,qn=`linear`,Jn=`srgb`,Yn=7680,Xn=35044,Zn=35048,Qn=2e3;function $n(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function er(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function nr(){let e=tr(`canvas`);return e.style.display=`block`,e}var rr={};function ir(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ar(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=ar(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function H(...e){e=ar(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function or(...e){let t=e.join(` `);t in rr||(rr[t]=!0,V(...e))}function sr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var cr={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ur=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),dr=1234567,fr=Math.PI/180,pr=180/Math.PI;function mr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ur[e&255]+ur[e>>8&255]+ur[e>>16&255]+ur[e>>24&255]+`-`+ur[t&255]+ur[t>>8&255]+`-`+ur[t>>16&15|64]+ur[t>>24&255]+`-`+ur[n&63|128]+ur[n>>8&255]+`-`+ur[n>>16&255]+ur[n>>24&255]+ur[r&255]+ur[r>>8&255]+ur[r>>16&255]+ur[r>>24&255]).toLowerCase()}function hr(e,t,n){return Math.max(t,Math.min(n,e))}function gr(e,t){return(e%t+t)%t}function _r(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function vr(e,t,n){return e===t?0:(n-e)/(t-e)}function yr(e,t,n){return(1-n)*e+n*t}function br(e,t,n,r){return yr(e,t,1-Math.exp(-n*r))}function xr(e,t=1){return t-Math.abs(gr(e,t*2)-t)}function Sr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Cr(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function wr(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Tr(e,t){return e+Math.random()*(t-e)}function Er(e){return e*(.5-Math.random())}function Dr(e){e!==void 0&&(dr=e);let t=dr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Or(e){return e*fr}function kr(e){return e*pr}function Ar(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function jr(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Mr(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Nr(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:V(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Pr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fr(e,t){if(t.constructor===Float32Array)return e;let n=Pr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ir(e,t){if(t.constructor===Float32Array)return e;let n=Pr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Lr={DEG2RAD:fr,RAD2DEG:pr,generateUUID:mr,clamp:hr,euclideanModulo:gr,mapLinear:_r,inverseLerp:vr,lerp:yr,damp:br,pingpong:xr,smoothstep:Sr,smootherstep:Cr,randInt:wr,randFloat:Tr,randFloatSpread:Er,seededRandom:Dr,degToRad:Or,radToDeg:kr,isPowerOfTwo:Ar,ceilPowerOfTwo:jr,floorPowerOfTwo:Mr,setQuaternionFromProperEuler:Nr,normalize:Ir,denormalize:Fr};yt=Symbol.iterator;var U=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=hr(this.x,e.x,t.x),this.y=hr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=hr(this.x,e,t),this.y=hr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(hr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[yt](){yield this.x,yield this.y}};pt=U,pt.prototype.isVector2=!0;var Rr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};bt=Symbol.iterator;var W=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Br.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Br.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=hr(this.x,e.x,t.x),this.y=hr(this.y,e.y,t.y),this.z=hr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=hr(this.x,e,t),this.y=hr(this.y,e,t),this.z=hr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(hr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[bt](){yield this.x,yield this.y,yield this.z}};mt=W,mt.prototype.isVector3=!0;var zr=new W,Br=new Rr,G=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return or(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return or(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return or(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ht=G,ht.prototype.isMatrix3=!0;var Vr=new G,Hr=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ur=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wr(){let e={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Kr(e.r),e.g=Kr(e.g),e.b=Kr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qr(e.r),e.g=qr(e.g),e.b=qr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?qn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Kn]:{primaries:t,whitePoint:r,transfer:qn,toXYZ:Hr,fromXYZ:Ur,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:r,transfer:Jn,toXYZ:Hr,fromXYZ:Ur,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),e}var Gr=Wr();function Kr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jr,Yr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=tr(`canvas`)),Jr.width=e.width,Jr.height=e.height;let t=Jr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=tr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kr(t[e]/255)*255):t[e]=Kr(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xr=0,Zr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xr++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qr(r[t].image)):e.push(Qr(r[t]))}else e=Qr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var $r=0,ei=new W,ti=class e extends lr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ct,i=Ct,a=Ot,o=At,s=Kt,c=jt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=mr(),this.name=``,this.source=new Zr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ei).x}get height(){return this.source.getSize(ei).y}get depth(){return this.source.getSize(ei).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case St:e.x-=Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case wt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case St:e.y-=Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case wt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null,ti.DEFAULT_MAPPING=300,ti.DEFAULT_ANISOTROPY=1,xt=Symbol.iterator;var ni=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=hr(this.x,e.x,t.x),this.y=hr(this.y,e.y,t.y),this.z=hr(this.z,e.z,t.z),this.w=hr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=hr(this.x,e,t),this.y=hr(this.y,e,t),this.z=hr(this.z,e,t),this.w=hr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(hr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[xt](){yield this.x,yield this.y,yield this.z,yield this.w}};gt=ni,gt.prototype.isVector4=!0;var ri=class extends lr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ni(0,0,e,t),this.scissorTest=!1,this.viewport=new ni(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new ti({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},ii=class extends ri{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ai=class extends ti{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},oi=class extends ti{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},si=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),i=1/ci.setFromMatrixColumn(e,1).length(),a=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ui,e,di)}lookAt(e,t,n){let r=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),fi.crossVectors(n,mi),fi.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),fi.crossVectors(n,mi)),fi.normalize(),pi.crossVectors(mi,fi),r[0]=fi.x,r[4]=pi.x,r[8]=mi.x,r[1]=fi.y,r[5]=pi.y,r[9]=mi.y,r[2]=fi.z,r[6]=pi.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ci.set(r[0],r[1],r[2]).length(),o=ci.set(r[4],r[5],r[6]).length(),s=ci.set(r[8],r[9],r[10]).length();i<0&&(a=-a),li.copy(this);let c=1/a,l=1/o,u=1/s;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=l,li.elements[5]*=l,li.elements[6]*=l,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Qn,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Qn,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_t=si,_t.prototype.isMatrix4=!0;var ci=new W,li=new si,ui=new W(0,0,0),di=new W(1,1,1),fi=new W,pi=new W,mi=new W,hi=new si,gi=new Rr,_i=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(hr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-hr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(hr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-hr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(hr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-hr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gi.setFromEuler(this),this.setFromQuaternion(gi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER=`XYZ`;var vi=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},yi=0,bi=new W,xi=new Rr,Si=new si,Ci=new W,wi=new W,Ti=new W,Ei=new Rr,Di=new W(1,0,0),Oi=new W(0,1,0),ki=new W(0,0,1),Ai={type:`added`},ji={type:`removed`},Mi={type:`childadded`,child:null},Ni={type:`childremoved`,child:null},Pi=class e extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yi++}),this.uuid=mr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new _i,r=new Rr,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new si},normalMatrix:{value:new G}}),this.matrix=new si,this.matrixWorld=new si,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Di,e)}rotateY(e){return this.rotateOnAxis(Oi,e)}rotateZ(e){return this.rotateOnAxis(ki,e)}translateOnAxis(e,t){return bi.copy(e).applyQuaternion(this.quaternion),this.position.add(bi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Di,e)}translateY(e){return this.translateOnAxis(Oi,e)}translateZ(e){return this.translateOnAxis(ki,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ci.copy(e):Ci.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(wi,Ci,this.up):Si.lookAt(Ci,wi,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(Si),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(H(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ai),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):H(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ji),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ai),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Ti),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Ei,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Pi.DEFAULT_UP=new W(0,1,0),Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fi=class extends Pi{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ii={type:`move`},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ii)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ri={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Vi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Gr.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Gr.workingColorSpace){if(e=gr(e,1),t=hr(t,0,1),n=hr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Vi(i,r,e+1/3),this.g=Vi(i,r,e),this.b=Vi(i,r,e-1/3)}return Gr.colorSpaceToWorking(this,r),this}setStyle(e,t=Gn){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){let n=Ri[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Gr.workingToColorSpace(Hi.copy(this),e),Math.round(hr(Hi.r*255,0,255))*65536+Math.round(hr(Hi.g*255,0,255))*256+Math.round(hr(Hi.b*255,0,255))}getHexString(e=Gn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gr.workingColorSpace){Gr.workingToColorSpace(Hi.copy(this),t);let n=Hi.r,r=Hi.g,i=Hi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Gr.workingColorSpace){return Gr.workingToColorSpace(Hi.copy(this),t),e.r=Hi.r,e.g=Hi.g,e.b=Hi.b,e}getStyle(e=Gn){Gr.workingToColorSpace(Hi.copy(this),e);let t=Hi.r,n=Hi.g,r=Hi.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Bi);let n=yr(zi.h,Bi.h,t),r=yr(zi.s,Bi.s,t),i=yr(zi.l,Bi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hi=new K;K.NAMES=Ri;var Ui=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new K(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wi=class extends Pi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gi=new W,Ki=new W,qi=new W,Ji=new W,Yi=new W,Xi=new W,Zi=new W,Qi=new W,$i=new W,ea=new W,ta=new ni,na=new ni,ra=new ni,ia=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gi.subVectors(e,t),r.cross(Gi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Gi.subVectors(r,t),Ki.subVectors(n,t),qi.subVectors(e,t);let a=Gi.dot(Gi),o=Gi.dot(Ki),s=Gi.dot(qi),c=Ki.dot(Ki),l=Ki.dot(qi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ji)!==null&&Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ji)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ji.x),s.addScaledVector(a,Ji.y),s.addScaledVector(o,Ji.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ta.setScalar(0),na.setScalar(0),ra.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ra.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ta,i.x),a.addScaledVector(na,i.y),a.addScaledVector(ra,i.z),a}static isFrontFacing(e,t,n,r){return Gi.subVectors(n,t),Ki.subVectors(e,t),Gi.cross(Ki).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Gi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Yi.subVectors(r,n),Xi.subVectors(i,n),Qi.subVectors(e,n);let s=Yi.dot(Qi),c=Xi.dot(Qi);if(s<=0&&c<=0)return t.copy(n);$i.subVectors(e,r);let l=Yi.dot($i),u=Xi.dot($i);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Yi,a);ea.subVectors(e,i);let f=Yi.dot(ea),p=Xi.dot(ea);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xi,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Zi.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Zi,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Yi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},aa=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sa.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sa.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,sa):sa.fromBufferAttribute(r,t),sa.applyMatrix4(e.matrixWorld),this.expandByPoint(sa);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sa),sa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),ga.subVectors(this.max,ha),la.subVectors(e.a,ha),ua.subVectors(e.b,ha),da.subVectors(e.c,ha),fa.subVectors(ua,la),pa.subVectors(da,ua),ma.subVectors(la,da);let t=[0,-fa.z,fa.y,0,-pa.z,pa.y,0,-ma.z,ma.y,fa.z,0,-fa.x,pa.z,0,-pa.x,ma.z,0,-ma.x,-fa.y,fa.x,0,-pa.y,pa.x,0,-ma.y,ma.x,0];return!ya(t,la,ua,da,ga)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,la,ua,da,ga))?!1:(_a.crossVectors(fa,pa),t=[_a.x,_a.y,_a.z],ya(t,la,ua,da,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oa=[new W,new W,new W,new W,new W,new W,new W,new W],sa=new W,ca=new aa,la=new W,ua=new W,da=new W,fa=new W,pa=new W,ma=new W,ha=new W,ga=new W,_a=new W,va=new W;function ya(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){va.fromArray(e,a);let o=i.x*Math.abs(va.x)+i.y*Math.abs(va.y)+i.z*Math.abs(va.z),s=t.dot(va),c=n.dot(va),l=r.dot(va);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ba=new W,xa=new U,Sa=0,Ca=class extends lr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sa++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Xn,this.updateRanges=[],this.gpuType=Lt,this.version=0,this._normalizationScale=e===void 0?void 0:Pr(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXYZ(t,ba.x,ba.y,ba.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix4(e),this.setXYZ(t,ba.x,ba.y,ba.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ba.fromBufferAttribute(this,t),ba.applyNormalMatrix(e),this.setXYZ(t,ba.x,ba.y,ba.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ba.fromBufferAttribute(this,t),ba.transformDirection(e),this.setXYZ(t,ba.x,ba.y,ba.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Fr(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ir(e,this.array):Math.round(e*t)}},wa=class extends Ca{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ta=class extends Ca{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ea=class extends Ca{constructor(e,t,n){super(new Float32Array(e),t,n)}},Da=new aa,Oa=new W,ka=new W,Aa=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Da.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);let t=Oa.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Oa,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(ka)),this.expandByPoint(Oa.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ja=0,Ma=new si,Na=new Pi,Pa=new W,Fa=new aa,Ia=new aa,La=new W,Ra=class e extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ja++}),this.uuid=mr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new($n(e)?Ta:wa)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ma.makeRotationFromQuaternion(e),this.applyMatrix4(Ma),this}rotateX(e){return Ma.makeRotationX(e),this.applyMatrix4(Ma),this}rotateY(e){return Ma.makeRotationY(e),this.applyMatrix4(Ma),this}rotateZ(e){return Ma.makeRotationZ(e),this.applyMatrix4(Ma),this}translate(e,t,n){return Ma.makeTranslation(e,t,n),this.applyMatrix4(Ma),this}scale(e,t,n){return Ma.makeScale(e,t,n),this.applyMatrix4(Ma),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pa).negate(),this.translate(Pa.x,Pa.y,Pa.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ea(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fa.setFromBufferAttribute(n),this.morphTargetsRelative?(La.addVectors(this.boundingBox.min,Fa.min),this.boundingBox.expandByPoint(La),La.addVectors(this.boundingBox.max,Fa.max),this.boundingBox.expandByPoint(La)):(this.boundingBox.expandByPoint(Fa.min),this.boundingBox.expandByPoint(Fa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&H(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(Fa.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ia.setFromBufferAttribute(n),this.morphTargetsRelative?(La.addVectors(Fa.min,Ia.min),Fa.expandByPoint(La),La.addVectors(Fa.max,Ia.max),Fa.expandByPoint(La)):(Fa.expandByPoint(Ia.min),Fa.expandByPoint(Ia.max))}Fa.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)La.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(La));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)La.fromBufferAttribute(a,t),o&&(Pa.fromBufferAttribute(e,t),La.add(Pa)),r=Math.max(r,n.distanceToSquared(La))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&H(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){H(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ca(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let l=new W,u=new W,d=new W,f=new U,p=new U,m=new U,h=new W,g=new W;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new W,b=new W,x=new W,S=new W;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ca(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)La.fromBufferAttribute(e,t),La.normalize(),e.setXYZ(t,La.x,La.y,La.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ca(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},za=new W,Ba=new W,Va=new G,Ha=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=za.subVectors(n,t).cross(Ba.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(za),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Va.getNormalMatrix(e),r=this.coplanarPoint(za).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ua=0,Wa=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ua++}),this.uuid=mr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ha().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ga=new W,Ka=new W,qa=new W,Ja=new W,Ya=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ga)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ga.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ga.copy(this.origin).addScaledVector(this.direction,t),Ga.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ka.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ja.copy(this.origin).sub(Ka);let i=e.distanceTo(t)*.5,a=-this.direction.dot(qa),o=Ja.dot(this.direction),s=-Ja.dot(qa),c=Ja.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ka).addScaledVector(qa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ga.subVectors(e.center,this.origin);let n=Ga.dot(this.direction),r=Ga.dot(Ga)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ga)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,F=1/w,te=T-ee*D,ne=E-P*D,re=O-ee*A,ie=k-P*A,ae=j-ee*N,oe=M-P*N,se=ae*ie-oe*re,ce=te*oe-ne*ae,le=re*ne-ie*te;if(r){if(se<0||ce<0||le<0)return null}else if((se<0||ce<0||le<0)&&(se>0||ce>0||le>0))return null;let ue=se+ce+le;if(ue===0)return null;let de=F*(se*D+ce*A+le*N);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xa=class extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Za=new si,Qa=new Ya,$a=new Aa,eo=new W,to=new W,no=new W,ro=new W,io=new W,ao=new W,oo=new W,so=new W,co=class extends Pi{constructor(e=new Ra,t=new Xa){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ao.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(io.fromBufferAttribute(s,e),a?ao.addScaledVector(io,r):ao.addScaledVector(io.sub(t),r))}t.add(ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),Qa.copy(e.ray).recast(e.near),$a.containsPoint(Qa.origin)===!1&&(Qa.intersectSphere($a,eo)===null||Qa.origin.distanceToSquared(eo)>(e.far-e.near)**2)||(Za.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(Za),(n.boundingBox===null||Qa.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qa)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=uo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=uo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=uo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=uo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function lo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;so.copy(s),so.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(so);return l<n.near||l>n.far?null:{distance:l,point:so.clone(),object:e}}function uo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,to),e.getVertexPosition(c,no),e.getVertexPosition(l,ro);let u=lo(e,t,n,r,to,no,ro,oo);if(u){let e=new W;ia.getBarycoord(oo,to,no,ro,e),i&&(u.uv=ia.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=ia.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=ia.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};ia.getNormal(to,no,ro,t.normal),u.face=t,u.barycoord=e}return u}var fo=class extends ti{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Tt,l=Tt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},po=class extends Ca{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mo=new si,ho=new si,go=[],_o=new aa,vo=new si,yo=new co,bo=new Aa,xo=class extends co{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,vo)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new aa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mo),_o.copy(e.boundingBox).applyMatrix4(mo),this.boundingBox.union(_o)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Aa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mo),bo.copy(e.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,mo),ho.multiplyMatrices(n,mo),yo.matrixWorld=ho,yo.raycast(e,go);for(let e=0,n=go.length;e<n;e++){let n=go[e];n.instanceId=i,n.object=this,t.push(n)}go.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fo(new Float32Array(r*this.count),r,this.count,Yt,Lt));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},So=new Aa,Co=new U(.5,.5),wo=new W,To=class{constructor(e=new Ha,t=new Ha,n=new Ha,r=new Ha,i=new Ha,a=new Ha){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),So.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),So.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(So)}intersectsSprite(e){return So.center.set(0,0,0),So.radius=.7071067811865476+Co.distanceTo(e.center),So.applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eo=new si,Do=class e{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Eo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new To),n[e].setFromProjectionMatrix(Eo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new To),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Oo=class extends Wa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ko=new W,Ao=new W,jo=new si,Mo=new Ya,No=new Aa,Po=new W,Fo=new W,Io=class extends Pi{constructor(e=new Ra,t=new Oo){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ko.fromBufferAttribute(t,e-1),Ao.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ko.distanceTo(Ao);e.setAttribute(`lineDistance`,new Ea(n,1))}else V(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),No.radius+=i,e.ray.intersectsSphere(No)===!1)return;jo.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(jo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Lo(this,e,Mo,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Lo(this,e,Mo,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Lo(this,e,Mo,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Lo(this,e,Mo,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Lo(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ko.fromBufferAttribute(s,i),Ao.fromBufferAttribute(s,a),n.distanceSqToSegment(ko,Ao,Po,Fo)>r)return;Po.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Po);if(!(c<t.near||c>t.far))return{distance:c,point:Fo.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ro=class extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zo=new si,Bo=new Ya,Vo=new Aa,Ho=new W,Uo=class extends Pi{constructor(e=new Ra,t=new Ro){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),Vo.radius+=i,e.ray.intersectsSphere(Vo)===!1)return;zo.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(zo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ho.fromBufferAttribute(l,n),Wo(Ho,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ho.fromBufferAttribute(l,a),Wo(Ho,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Wo(e,t,n,r,i,a,o){let s=Bo.distanceSqToPoint(e);if(s<n){let n=new W;Bo.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Go=class extends ti{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ko=class extends ti{constructor(e,t,n=It,r,i,a,o=Tt,s=Tt,c,l=qt,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qo=class extends Ko{constructor(e,t=It,n=301,r,i,a=Tt,o=Tt,s,c=qt){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jo=class extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},q=class e extends Ra{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ea(c,3)),this.setAttribute(`normal`,new Ea(l,3)),this.setAttribute(`uv`,new Ea(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Yo=class e extends Ra{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ea(a,3)),this.setAttribute(`normal`,new Ea(o,3)),this.setAttribute(`uv`,new Ea(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xo=class e extends Ra{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ea(u,3)),this.setAttribute(`normal`,new Ea(d,3)),this.setAttribute(`uv`,new Ea(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zo=class e extends Xo{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qo=class e extends Ra{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Ea(i,3)),this.setAttribute(`normal`,new Ea(i.slice(),3)),this.setAttribute(`uv`,new Ea(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},$o=class e extends Qo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},es=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){V(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,r=[],i=[],a=[],o=new W,s=new si;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(hr(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(hr(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ts=class extends es{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ns=class extends ts{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function rs(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var is=new W,as=new W,os=new rs,ss=new rs,cs=new rs,ls=class extends es{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(as.subVectors(r[0],r[1]).add(r[0]),c=as);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(is.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=is),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),os.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ss.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),cs.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(os.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ss.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),cs.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(os.calc(s),ss.calc(s),cs.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function us(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ds(e,t){let n=1-e;return n*n*t}function fs(e,t){return 2*(1-e)*e*t}function ps(e,t){return e*e*t}function ms(e,t,n,r){return ds(e,t)+fs(e,n)+ps(e,r)}function hs(e,t){let n=1-e;return n*n*n*t}function gs(e,t){let n=1-e;return 3*n*n*e*t}function _s(e,t){return 3*(1-e)*e*e*t}function vs(e,t){return e*e*e*t}function ys(e,t,n,r,i){return hs(e,t)+gs(e,n)+_s(e,r)+vs(e,i)}var bs=class extends es{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ys(e,r.x,i.x,a.x,o.x),ys(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xs=class extends es{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ys(e,r.x,i.x,a.x,o.x),ys(e,r.y,i.y,a.y,o.y),ys(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ss=class extends es{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cs=class extends es{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ws=class extends es{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ms(e,r.x,i.x,a.x),ms(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ts=class extends es{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ms(e,r.x,i.x,a.x),ms(e,r.y,i.y,a.y),ms(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Es=class extends es{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(us(o,s.x,c.x,l.x,u.x),us(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},Ds=Object.freeze({__proto__:null,ArcCurve:ns,CatmullRomCurve3:ls,CubicBezierCurve:bs,CubicBezierCurve3:xs,EllipseCurve:ts,LineCurve:Ss,LineCurve3:Cs,QuadraticBezierCurve:ws,QuadraticBezierCurve3:Ts,SplineCurve:Es}),Os=class extends es{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ds[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ds[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ks=class extends Os{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ss(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ws(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new bs(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Es([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ts(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},As=class extends ks{constructor(e){super(e),this.uuid=mr(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ks().fromJSON(n))}return this}};function js(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ms(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=zs(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ps(a,o,n,s,c,l,0),o}function Ms(e,t,n,r,i){let a;if(i===lc(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=oc(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=oc(i/r|0,e[i],e[i+1],a);return a&&Qs(a,a.next)&&(sc(a),a=a.next),a}function Ns(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(Qs(n,n.next)||Zs(n.prev,n,n.next)===0)){if(sc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ps(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ws(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Is(e,r,i,a):Fs(e))t.push(c.i,e.i,l.i),sc(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ls(Ns(e),t),Ps(e,t,n,r,i,a,2)):o===2&&Rs(e,t,n,r,i,a):Ps(Ns(e),t,n,r,i,a,1);break}}}function Fs(e){let t=e.prev,n=e,r=e.next;if(Zs(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ys(i,s,a,c,o,l,m.x,m.y)&&Zs(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Is(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Zs(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ks(p,m,t,n,r),v=Ks(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ys(s,u,c,d,l,f,y.x,y.y)&&Zs(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ys(s,u,c,d,l,f,b.x,b.y)&&Zs(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ys(s,u,c,d,l,f,y.x,y.y)&&Zs(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ys(s,u,c,d,l,f,b.x,b.y)&&Zs(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ls(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Qs(r,i)&&$s(r,n,n.next,i)&&rc(r,i)&&rc(i,r)&&(t.push(r.i,n.i,i.i),sc(n),sc(n.next),n=e=i),n=n.next}while(n!==e);return Ns(n)}function Rs(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Xs(o,e)){let s=ac(o,e);o=Ns(o,o.next),s=Ns(s,s.next),Ps(o,t,n,r,i,a,0),Ps(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function zs(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ms(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(qs(o))}i.sort(Bs);for(let e=0;e<i.length;e++)n=Vs(i[e],n);return n}function Bs(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Vs(e,t){let n=Hs(e,t);if(!n)return t;let r=ac(n,e);return Ns(r,r.next),Ns(n,n.next)}function Hs(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Qs(e,n))return n;do{if(Qs(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Js(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);rc(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Us(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Us(e,t){return Zs(e.prev,e,t.prev)<0&&Zs(t.next,e,e.next)<0}function Ws(e,t,n,r){let i=e;do i.z===0&&(i.z=Ks(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Gs(i)}function Gs(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ks(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function qs(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Js(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ys(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Js(e,t,n,r,i,a,o,s)}function Xs(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!nc(e,t)&&(rc(e,t)&&rc(t,e)&&ic(e,t)&&(Zs(e.prev,e,t.prev)||Zs(e,t.prev,t))||Qs(e,t)&&Zs(e.prev,e,e.next)>0&&Zs(t.prev,t,t.next)>0)}function Zs(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Qs(e,t){return e.x===t.x&&e.y===t.y}function $s(e,t,n,r){let i=tc(Zs(e,t,n)),a=tc(Zs(e,t,r)),o=tc(Zs(n,r,e)),s=tc(Zs(n,r,t));return!!(i!==a&&o!==s||i===0&&ec(e,n,t)||a===0&&ec(e,r,t)||o===0&&ec(n,e,r)||s===0&&ec(n,t,r))}function ec(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function tc(e){return e>0?1:e<0?-1:0}function nc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&$s(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function rc(e,t){return Zs(e.prev,e,e.next)<0?Zs(e,t,e.next)>=0&&Zs(e,e.prev,t)>=0:Zs(e,t,e.prev)<0||Zs(e,e.next,t)<0}function ic(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ac(e,t){let n=cc(e.i,e.x,e.y),r=cc(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function oc(e,t,n,r){let i=cc(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function sc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function cc(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var uc=class{static triangulate(e,t,n=2){return js(e,t,n)}},dc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];fc(e),pc(n,e);let a=e.length;t.forEach(fc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,pc(n,t[e]);let o=uc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function fc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function pc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var mc=class e extends Ra{constructor(e=new As([new U(.5,.5),new U(-.5,.5),new U(-.5,-.5),new U(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Ea(r,3)),this.setAttribute(`uv`,new Ea(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?hc:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new W,b=new W,x=new W}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!dc.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];dc.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||H(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new U(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new U(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let P;if(p===0)P=dc.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ae(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ae(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=dc.triangulateShape(e,t)}let F=P.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=P[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=P[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=P[e];oe(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=P[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){ce(e),ce(t),ce(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function se(e,t,i,a){ce(e),ce(t),ce(a),ce(t),ce(i),ce(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function ce(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ds[i.type]().fromJSON(i)),new e(r,t.options)}},hc={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new U(a,o),new U(s,c),new U(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new U(o,1-c),new U(l,1-d),new U(f,1-m),new U(h,1-_)]:[new U(s,1-c),new U(u,1-d),new U(p,1-m),new U(g,1-_)]}};function gc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var _c=class e extends Qo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},vc=class e extends Qo{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},yc=class e extends Ra{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ea(p,3)),this.setAttribute(`normal`,new Ea(m,3)),this.setAttribute(`uv`,new Ea(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},bc=class e extends Ra{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ea(s,3)),this.setAttribute(`normal`,new Ea(c,3)),this.setAttribute(`uv`,new Ea(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xc=class e extends Ra{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ea(p,3)),this.setAttribute(`normal`,new Ea(m,3)),this.setAttribute(`uv`,new Ea(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Sc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(wc(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(wc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Cc(e){let t={};for(let n=0;n<e.length;n++){let r=Sc(e[n]);for(let e in r)t[e]=r[e]}return t}function wc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Tc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ec(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gr.workingColorSpace}var Dc={clone:Sc,merge:Cc},Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ac=class extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sc(e.uniforms),this.uniformsGroups=Tc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ni().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new si().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jc=class extends Ac{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Mc=class extends Wa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nc=class extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Wn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ic(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Lc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Rc=class extends Lc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vn,endingEnd:Vn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hn:i=e,o=2*t-n;break;case Un:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Hn:a=e,s=2*n-t;break;case Un:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},zc=class extends Lc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Bc=class extends Lc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vc=class extends Lc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Wc(n,t,g,y,r);i[p]=Hc(x,o,_,b,m)}return i}};function Hc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Uc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Wc(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Hc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Uc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Gc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Fc(t,this.TimeBufferType),this.values=Fc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fc(e.times,Array),values:Fc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ic(e.settings)&&(n.settings={inTangents:Fc(e.settings.inTangents,Array),outTangents:Fc(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ln:t=this.InterpolantFactoryMethodDiscrete;break;case Rn:t=this.InterpolantFactoryMethodLinear;break;case zn:t=this.InterpolantFactoryMethodSmooth;break;case Bn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ln;case this.InterpolantFactoryMethodLinear:return Rn;case this.InterpolantFactoryMethodSmooth:return zn;case this.InterpolantFactoryMethodBezier:return Bn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ic(this.settings)&&(Kc(this.settings.inTangents,e),Kc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ic(this.settings)&&(qc(this.settings.inTangents,e),qc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(H(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(H(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){H(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){H(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&er(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){H(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===zn,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ic(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Kc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function qc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Gc.prototype.ValueTypeName=``,Gc.prototype.TimeBufferType=Float32Array,Gc.prototype.ValueBufferType=Float32Array,Gc.prototype.DefaultInterpolation=Rn;var Jc=class extends Gc{constructor(e,t,n){super(e,t,n)}};Jc.prototype.ValueTypeName=`bool`,Jc.prototype.ValueBufferType=Array,Jc.prototype.DefaultInterpolation=Ln,Jc.prototype.InterpolantFactoryMethodLinear=void 0,Jc.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends Gc{constructor(e,t,n,r){super(e,t,n,r)}};Yc.prototype.ValueTypeName=`color`;var Xc=class extends Gc{constructor(e,t,n,r){super(e,t,n,r)}};Xc.prototype.ValueTypeName=`number`;var Zc=class extends Lc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rr.slerpFlat(i,0,a,c-o,a,c,s);return i}},Qc=class extends Gc{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}};Qc.prototype.ValueTypeName=`quaternion`,Qc.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends Gc{constructor(e,t,n){super(e,t,n)}};$c.prototype.ValueTypeName=`string`,$c.prototype.ValueBufferType=Array,$c.prototype.DefaultInterpolation=Ln,$c.prototype.InterpolantFactoryMethodLinear=void 0,$c.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Gc{constructor(e,t,n,r){super(e,t,n,r)}};el.prototype.ValueTypeName=`vector`;var tl=class extends Pi{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nl=new si,rl=new W,il=new W,al=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new si,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new ni(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(rl),il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(il),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ol=new W,sl=new Rr,cl=new W,ll=class extends Pi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new si,this.projectionMatrix=new si,this.projectionMatrixInverse=new si,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ol,sl,cl),cl.x===1&&cl.y===1&&cl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,sl,cl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ol,sl,cl),cl.x===1&&cl.y===1&&cl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,sl,cl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ul=new W,dl=new U,fl=new U,pl=class extends ll{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ul.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ul.x,ul.y).multiplyScalar(-e/ul.z),ul.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ul.x,ul.y).multiplyScalar(-e/ul.z)}getViewSize(e,t){return this.getViewBounds(e,dl,fl),t.subVectors(fl,dl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ml=class extends al{constructor(){super(new pl(90,1,.5,500)),this.isPointLightShadow=!0}},hl=class extends tl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gl=class extends ll{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_l=class extends al{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vl=class extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Pi.DEFAULT_UP),this.updateMatrix(),this.target=new Pi,this.shadow=new _l}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},yl=class extends tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},bl=-90,xl=1,Sl=class extends Pi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new pl(bl,xl,e,t);r.layers=this.layers,this.add(r);let i=new pl(bl,xl,e,t);i.layers=this.layers,this.add(i);let a=new pl(bl,xl,e,t);a.layers=this.layers,this.add(a);let o=new pl(bl,xl,e,t);o.layers=this.layers,this.add(o);let s=new pl(bl,xl,e,t);s.layers=this.layers,this.add(s);let c=new pl(bl,xl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cl=class extends pl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},wl=`\\[\\]\\.:\\/`,Tl=RegExp(`[\\[\\]\\.:\\/]`,`g`),El=`[^\\[\\]\\.:\\/]`,Dl=`[^`+wl.replace(`\\.`,``)+`]`,Ol=`((?:WC+[\\/:])*)`.replace(`WC`,El),kl=`(WCOD+)?`.replace(`WCOD`,Dl),Al=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,El),jl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,El),Ml=RegExp(`^`+Ol+kl+Al+jl+`$`),Nl=[`material`,`materials`,`bones`,`map`],Pl=class{constructor(e,t,n){let r=n||Fl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Fl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Tl,``)}static parseTrackName(e){let t=Ml.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Nl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){H(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){H(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){H(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){H(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){H(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;H(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fl.Composite=Pl,Fl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Fl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Fl.prototype.GetterByBindingType=[Fl.prototype._getValue_direct,Fl.prototype._getValue_array,Fl.prototype._getValue_arrayElement,Fl.prototype._getValue_toArray],Fl.prototype.SetterByBindingTypeAndVersioning=[[Fl.prototype._setValue_direct,Fl.prototype._setValue_direct_setNeedsUpdate,Fl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fl.prototype._setValue_array,Fl.prototype._setValue_array_setNeedsUpdate,Fl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fl.prototype._setValue_arrayElement,Fl.prototype._setValue_arrayElement_setNeedsUpdate,Fl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fl.prototype._setValue_fromArray,Fl.prototype._setValue_fromArray_setNeedsUpdate,Fl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Il=new si,Ll=class{constructor(e,t,n=0,r=1/0){this.ray=new Ya(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new vi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):H(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Il.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(Rl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)zl(e[r],this,n,t);return n.sort(Rl),n}};function Rl(e,t){return e.distance-t.distance}function zl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)zl(r[e],t,n,!0)}}vt=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},vt.prototype.isMatrix2=!0;function Bl(e,t,n,r){let i=Vl(r);switch(n){case Wt:return e*t;case Yt:return e*t/i.components*i.byteLength;case Xt:return e*t/i.components*i.byteLength;case Zt:return e*t*2/i.components*i.byteLength;case Qt:return e*t*2/i.components*i.byteLength;case Gt:return e*t*3/i.components*i.byteLength;case Kt:return e*t*4/i.components*i.byteLength;case $t:return e*t*4/i.components*i.byteLength;case en:case tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nn:case rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case on:case cn:return Math.max(e,16)*Math.max(t,8)/4;case an:case sn:return Math.max(e,8)*Math.max(t,8)/2;case ln:case un:case fn:case pn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case dn:case mn:case hn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _n:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case vn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case yn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case bn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Sn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Cn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Tn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case En:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case On:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case kn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case An:case jn:case Mn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Nn:case Pn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fn:case In:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Vl(e){switch(e){case jt:case Mt:return{byteLength:1,components:1};case Pt:case Nt:case Rt:return{byteLength:2,components:1};case zt:case Bt:return{byteLength:2,components:4};case It:case Ft:case Lt:return{byteLength:4,components:1};case Ht:case Ut:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Hl(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ul(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Wl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
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
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},J={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Gl={basic:{uniforms:Cc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Wl.meshbasic_vert,fragmentShader:Wl.meshbasic_frag},lambert:{uniforms:Cc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Wl.meshlambert_vert,fragmentShader:Wl.meshlambert_frag},phong:{uniforms:Cc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wl.meshphong_vert,fragmentShader:Wl.meshphong_frag},standard:{uniforms:Cc([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wl.meshphysical_vert,fragmentShader:Wl.meshphysical_frag},toon:{uniforms:Cc([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new K(0)}}]),vertexShader:Wl.meshtoon_vert,fragmentShader:Wl.meshtoon_frag},matcap:{uniforms:Cc([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Wl.meshmatcap_vert,fragmentShader:Wl.meshmatcap_frag},points:{uniforms:Cc([J.points,J.fog]),vertexShader:Wl.points_vert,fragmentShader:Wl.points_frag},dashed:{uniforms:Cc([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wl.linedashed_vert,fragmentShader:Wl.linedashed_frag},depth:{uniforms:Cc([J.common,J.displacementmap]),vertexShader:Wl.depth_vert,fragmentShader:Wl.depth_frag},normal:{uniforms:Cc([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Wl.meshnormal_vert,fragmentShader:Wl.meshnormal_frag},sprite:{uniforms:Cc([J.sprite,J.fog]),vertexShader:Wl.sprite_vert,fragmentShader:Wl.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wl.background_vert,fragmentShader:Wl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Wl.backgroundCube_vert,fragmentShader:Wl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wl.cube_vert,fragmentShader:Wl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wl.equirect_vert,fragmentShader:Wl.equirect_frag},distance:{uniforms:Cc([J.common,J.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wl.distance_vert,fragmentShader:Wl.distance_frag},shadow:{uniforms:Cc([J.lights,J.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Wl.shadow_vert,fragmentShader:Wl.shadow_frag}};Gl.physical={uniforms:Cc([Gl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Wl.meshphysical_vert,fragmentShader:Wl.meshphysical_frag};var Kl={r:0,b:0,g:0},ql=new si,Jl=new G;Jl.set(-1,0,0,0,1,0,0,0,1);function Yl(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new co(new q(1,1,1),new Ac({name:`BackgroundCubeMaterial`,uniforms:Sc(Gl.backgroundCube.uniforms),vertexShader:Gl.backgroundCube.vertexShader,fragmentShader:Gl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ql.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jl),l.material.toneMapped=Gr.getTransfer(i.colorSpace)!==Jn,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new co(new yc(2,2),new Ac({name:`BackgroundMaterial`,uniforms:Sc(Gl.background.uniforms),vertexShader:Gl.background.vertexShader,fragmentShader:Gl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Gr.getTransfer(i.colorSpace)!==Jn,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Kl,Ec(e)),n.buffers.color.setClear(Kl.r,Kl.g,Kl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Xl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Zl(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ql(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&V(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function $l(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ha,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var eu=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Go(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new q(5,5,5),i=new Ac({name:`CubemapFromEquirect`,uniforms:Sc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new co(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ot),new Sl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},tu=256,nu=3,ru=20,iu=256,au=16,ou=3,su=new W,cu=new K,lu=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sl(1,10,null),this._boxMesh=new co(new q(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=su}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(cu));let h=new Sl(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(tu,Mr(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?tu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=uu(e,!1,!1),n=Math.log2(e)-nu;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=uu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=fu(),this._integrationMaterial=pu());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/au);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-ou)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(iu*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=mu());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function uu(e,t,n){return new eu(e,{minFilter:At,generateMipmaps:t,type:Rt,colorSpace:Kn,depthBuffer:n})}function du(e,t,n){return new Ac({name:e,uniforms:t,vertexShader:Wl.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function fu(){return du(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${iu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pu(){return du(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:au}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mu(){return du(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ru}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function hu(){return du(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function gu(){return du(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _u(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new eu(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new lu(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new lu(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function vu(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&or(`WebGLRenderer: `+e+` extension not supported.`),t}}}function yu(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Ta:wa)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function bu(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function xu(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:H(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Su(e,t,n){let r=new WeakMap,i=new ni;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ai(h,p,m,u);g.type=Lt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new U(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Cu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var wu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Tu(e,t,n,r,i,a){let o=new ii(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Ra;u.setAttribute(`position`,new Ea([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Ea([0,2,0,0,2,0],2));let d=new jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new co(u,d),p=new gl(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new ii(t,n,{type:Rt,depthBuffer:!1,stencilBuffer:!1}),c=new ii(t,n,{type:Rt,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ko(t,n),a===!0&&(l.format=Jt,l.type=Vt)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Gr.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=wu[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Eu=new ti,Du=new Ko(1,1),Ou=new qo(1),ku=new ai,Au=new oi,ju=new Go,Mu=[],Nu=[],Pu=new Float32Array(16),Fu=new Float32Array(9),Iu=new Float32Array(4);function Lu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Mu[i];if(a===void 0&&(a=new Float32Array(i),Mu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ru(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function zu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Bu(e,t){let n=Nu[t];n===void 0&&(n=new Int32Array(t),Nu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Vu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Hu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ru(n,t))return;e.uniform2fv(this.addr,t),zu(n,t)}}function Uu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ru(n,t))return;e.uniform3fv(this.addr,t),zu(n,t)}}function Wu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ru(n,t))return;e.uniform4fv(this.addr,t),zu(n,t)}}function Gu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ru(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),zu(n,t)}else{if(Ru(n,r))return;Iu.set(r),e.uniformMatrix2fv(this.addr,!1,Iu),zu(n,r)}}function Ku(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ru(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),zu(n,t)}else{if(Ru(n,r))return;Fu.set(r),e.uniformMatrix3fv(this.addr,!1,Fu),zu(n,r)}}function qu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ru(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),zu(n,t)}else{if(Ru(n,r))return;Pu.set(r),e.uniformMatrix4fv(this.addr,!1,Pu),zu(n,r)}}function Ju(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Yu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ru(n,t))return;e.uniform2iv(this.addr,t),zu(n,t)}}function Xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ru(n,t))return;e.uniform3iv(this.addr,t),zu(n,t)}}function Zu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ru(n,t))return;e.uniform4iv(this.addr,t),zu(n,t)}}function Qu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $u(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ru(n,t))return;e.uniform2uiv(this.addr,t),zu(n,t)}}function ed(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ru(n,t))return;e.uniform3uiv(this.addr,t),zu(n,t)}}function td(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ru(n,t))return;e.uniform4uiv(this.addr,t),zu(n,t)}}function nd(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function rd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?nd(Du):Eu,n.setTexture2D(t||a,i)}function id(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Au,i)}function ad(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?nd(Ou):ju,n.setTextureCube(t||a,i)}function od(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ku,i)}function sd(e){switch(e){case 5126:return Vu;case 35664:return Hu;case 35665:return Uu;case 35666:return Wu;case 35674:return Gu;case 35675:return Ku;case 35676:return qu;case 5124:case 35670:return Ju;case 35667:case 35671:return Yu;case 35668:case 35672:return Xu;case 35669:case 35673:return Zu;case 5125:return Qu;case 36294:return $u;case 36295:return ed;case 36296:return td;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return id;case 35680:case 36300:case 36308:case 36293:return ad;case 36289:case 36303:case 36311:case 36292:return od}}function cd(e,t){e.uniform1fv(this.addr,t)}function ld(e,t){let n=Lu(t,this.size,2);e.uniform2fv(this.addr,n)}function ud(e,t){let n=Lu(t,this.size,3);e.uniform3fv(this.addr,n)}function dd(e,t){let n=Lu(t,this.size,4);e.uniform4fv(this.addr,n)}function fd(e,t){let n=Lu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function pd(e,t){let n=Lu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function md(e,t){let n=Lu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function hd(e,t){e.uniform1iv(this.addr,t)}function gd(e,t){e.uniform2iv(this.addr,t)}function _d(e,t){e.uniform3iv(this.addr,t)}function vd(e,t){e.uniform4iv(this.addr,t)}function yd(e,t){e.uniform1uiv(this.addr,t)}function bd(e,t){e.uniform2uiv(this.addr,t)}function xd(e,t){e.uniform3uiv(this.addr,t)}function Sd(e,t){e.uniform4uiv(this.addr,t)}function Cd(e,t,n){let r=this.cache,i=t.length,a=Bu(n,i);Ru(r,a)||(e.uniform1iv(this.addr,a),zu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?nd(Du):Eu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function wd(e,t,n){let r=this.cache,i=t.length,a=Bu(n,i);Ru(r,a)||(e.uniform1iv(this.addr,a),zu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Au,a[e])}function Td(e,t,n){let r=this.cache,i=t.length,a=Bu(n,i);Ru(r,a)||(e.uniform1iv(this.addr,a),zu(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?nd(Ou):ju;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Ed(e,t,n){let r=this.cache,i=t.length,a=Bu(n,i);Ru(r,a)||(e.uniform1iv(this.addr,a),zu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ku,a[e])}function Dd(e){switch(e){case 5126:return cd;case 35664:return ld;case 35665:return ud;case 35666:return dd;case 35674:return fd;case 35675:return pd;case 35676:return md;case 5124:case 35670:return hd;case 35667:case 35671:return gd;case 35668:case 35672:return _d;case 35669:case 35673:return vd;case 5125:return yd;case 36294:return bd;case 36295:return xd;case 36296:return Sd;case 35678:case 36198:case 36298:case 36306:case 35682:return Cd;case 35679:case 36299:case 36307:return wd;case 35680:case 36300:case 36308:case 36293:return Td;case 36289:case 36303:case 36311:case 36292:return Ed}}var Od=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sd(t.type)}},kd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dd(t.type)}},Ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},jd=/(\w+)(\])?(\[|\.)?/g;function Md(e,t){e.seq.push(t),e.map[t.id]=t}function Nd(e,t,n){let r=e.name,i=r.length;for(jd.lastIndex=0;;){let a=jd.exec(r),o=jd.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Md(n,l===void 0?new Od(s,e,t):new kd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ad(s),Md(n,e)),n=e}}}var Pd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Nd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Fd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Id=37297,Ld=0;function Rd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var zd=new G;function Bd(e){Gr._getMatrix(zd,Gr.workingColorSpace,e);let t=`mat3( ${zd.elements.map(e=>e.toFixed(4))} )`;switch(Gr.getTransfer(e)){case qn:return[t,`LinearTransferOETF`];case Jn:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Vd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Rd(e.getShaderSource(t),r)}return i}function Hd(e,t){let n=Bd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Ud={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Wd(e,t){let n=Ud[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Gd=new W;function Kd(){return Gr.getLuminanceCoefficients(Gd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Gd.x.toFixed(4)}, ${Gd.y.toFixed(4)}, ${Gd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function qd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Xd).join(`
`)}function Jd(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Yd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Xd(e){return e!==``}function Zd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Qd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $d=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(e){return e.replace($d,tf)}function tf(e,t){let n=Wl[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ef(n)}var nf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(e){return e.replace(nf,af)}function af(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function of(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var sf={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function cf(e){return sf[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var lf={302:`ENVMAP_MODE_REFRACTION`};function uf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:lf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var df={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ff(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:df[e.combine]||`ENVMAP_BLENDING_NONE`}function pf(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=cf(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=uf(n),d=ff(n),f=qd(n),p=Jd(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Xd).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Xd).join(`
`),g.length>0&&(g+=`
`)):(h=[of(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Xd).join(`
`),g=[of(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Wl.tonemapping_pars_fragment,n.toneMapping===0?``:Wd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Wl.colorspace_pars_fragment,Hd(`linearToOutputTexel`,n.outputColorSpace),Kd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Xd).join(`
`)),o=ef(o),o=Zd(o,n),o=Qd(o,n),s=ef(s),s=Zd(s,n),s=Qd(s,n),o=rf(o),s=rf(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Fd(i,i.VERTEX_SHADER,v),x=Fd(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Vd(i,b,`vertex`),n=Vd(i,x,`fragment`);H(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Pd(i,m),w=Yd(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Id)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ld++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var mf=0,hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gf(e),t.set(e,n)),n}},gf=class{constructor(e){this.id=mf++,this.code=e,this.usedTimes=0}};function _f(e){return e===1030||e===37490||e===36285}function vf(e,t,n,r,i,a){let o=new vi,s=new hf,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Gl[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,ee=!!i.map,P=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,ce=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,I=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=fe&&!!i.diffuseRoughnessMap,L=he&&!!i.iridescenceMap,Se=he&&!!i.iridescenceThicknessMap,Ce=ge&&!!i.sheenColorMap,we=ge&&!!i.sheenRoughnessMap,R=!!i.specularMap,Te=!!i.specularColorMap,z=!!i.specularIntensityMap,B=I&&!!i.transmissionMap,Ee=I&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,Ae=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Pe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Gr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:P,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?Ne.length-1:null,envMapSize:te?Ne[0].width:null,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&_f(i.normalMap.format),metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,diffuseRoughness:fe,diffuseRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:L,iridescenceThicknessMap:Se,sheen:ge,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:R,specularColorMap:Te,specularIntensityMap:z,transmission:I,transmissionMap:B,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:i.combine,mapUv:ee&&p(i.map.channel),aoMapUv:ne&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:ie&&p(i.bumpMap.channel),normalMapUv:ae&&p(i.normalMap.channel),displacementMapUv:oe&&p(i.displacementMap.channel),emissiveMapUv:se&&p(i.emissiveMap.channel),metalnessMapUv:ce&&p(i.metalnessMap.channel),roughnessMapUv:le&&p(i.roughnessMap.channel),anisotropyMapUv:_e&&p(i.anisotropyMap.channel),clearcoatMapUv:ve&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:L&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(i.sheenRoughnessMap.channel),specularMapUv:R&&p(i.specularMap.channel),specularColorMapUv:Te&&p(i.specularColorMap.channel),specularIntensityMapUv:z&&p(i.specularIntensityMap.channel),transmissionMapUv:B&&p(i.transmissionMap.channel),thicknessMapUv:Ee&&p(i.thicknessMap.channel),alphaMapUv:Oe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||ue),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ee||Oe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Gr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Gr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Gl[t];n=Dc.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new pf(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function yf(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function bf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function xf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sf(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||bf),r.length>1&&r.sort(t||xf),i.length>1&&i.sort(t||xf)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Cf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Sf,e.set(t,[i])):n>=r.length?(i=new Sf,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function wf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new K};break;case`SpotLight`:n={position:new W,direction:new W,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Tf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ef=0;function Df(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Of(e){let t=new wf,n=Tf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new si,o=new si;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Df);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ef++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function kf(e){let t=new Of(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Af(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new kf(e),t.set(n,[a])):r>=i.length?(a=new kf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nf=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Pf=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Ff=new si,If=new W,Lf=new W;function Rf(e,t,n){let r=new To,i=new U,a=new U,o=new ni,s=new Nc,c=new Pc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ac({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:jf,fragmentShader:Mf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ra;m.setAttribute(`position`,new Ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new co(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){V(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ii(i.x,i.y,{format:Zt,type:Rt,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ko(i.x,i.y,Lt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=qt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Tt,d.map.depthTexture.magFilter=Tt}else l.isPointLight?(d.map=new eu(i.x),d.map.depthTexture=new qo(i.x,It)):(d.map=new ii(i.x,i.y),d.map.depthTexture=new Ko(i.x,i.y,It)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=qt,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ot,d.map.depthTexture.magFilter=Ot):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Tt,d.map.depthTexture.magFilter=Tt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),If.setFromMatrixPosition(l.matrixWorld),e.position.copy(If),Lf.copy(e.position),Lf.add(Nf[t]),e.up.copy(Pf[t]),e.lookAt(Lf),e.updateMatrixWorld(),n.makeTranslation(-If.x,-If.y,-If.z),Ff.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ff,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new ii(i.x,i.y,{format:Zt,type:Rt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function zf(e,t){function n(){let t=!1,n=new ni,r=null,i=new ni(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=cr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new ni().fromArray(ne),ae=new ni().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),I(!1),_e(1),ce(e.CULL_FACE),he(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(ce(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:H(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:H(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:H(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:H(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),I(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function I(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function be(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function L(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Se(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function R(){try{e.texSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function B(){try{e.compressedTexSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Ne(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:I,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:L,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:Oe,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:De,texSubImage2D:R,texSubImage3D:Te,compressedTexSubImage2D:z,compressedTexSubImage3D:B,scissor:Me,viewport:Ne,reset:Ie}}function Bf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new U,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):tr(`canvas`)}function v(e,t,n){let r=1,i=Ee(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?qn:Gr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),ee(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let P=0;function F(){P=0}function te(){return P}function ne(e){P=e}function re(){let e=P;return e>=i.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),P+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ae(t,i){let a=r.get(t);if(t.isVideoTexture&&z(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ge(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function se(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ge(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?I(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let le={[St]:e.REPEAT,[Ct]:e.CLAMP_TO_EDGE,[wt]:e.MIRRORED_REPEAT},ue={[Tt]:e.NEAREST,[Et]:e.NEAREST_MIPMAP_NEAREST,[Dt]:e.NEAREST_MIPMAP_LINEAR,[Ot]:e.LINEAR,[kt]:e.LINEAR_MIPMAP_NEAREST,[At]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ie(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=pe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Gr.getPrimaries(Gr.workingColorSpace),r=o.colorSpace===``?null:Gr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=B(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);fe(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Jt,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&he(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Bl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Bl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Ee(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Ee(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function I(t,o,s){if(o.image.length!==6)return;let c=pe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Gr.getPrimaries(Gr.workingColorSpace),r=o.colorSpace===``?null:Gr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=B(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);fe(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Jt,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Ee(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,R(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,R(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,R(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,R(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,R(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ce(i.depthTexture,0):ae(i.depthTexture,0);let u=c.__webglTexture,d=R(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function L(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Te(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=R(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),fe(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),fe(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&be(t)}function Se(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ce=[];function we(t){if(t.samples>0){if(Te(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ce.length=0,Ce.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ce.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function R(e){return Math.min(i.maxSamples,e.samples)}function Te(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function z(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function B(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Gr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):H(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ee(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=F,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=xe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Te,this.dispose=j}function Vf(e,t){function n(n,r=``){let i,a=Gr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Hf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ac({vertexShader:Hf,fragmentShader:Uf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new co(new yc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gf=class extends lr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Wf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new U,C=null,w=null,T=new pl;T.viewport=new ni;let E=new pl;E.viewport=new ni;let D=[T,E],O=new Cl,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Li,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Li,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Li,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Jt:qt,a=_.stencil?Vt:It);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ii(d.textureWidth,d.textureHeight,{format:Kt,type:jt,depthTexture:new Ko(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ii(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ee(O,i);for(let e=0;e<a.length;e++)ee(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),P(e,O,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=pr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let F=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new pl,o.layers.enable(n),o.viewport=new ni,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Jo,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new Hl;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},Kf=new si,qf=new G;qf.set(-1,0,0,0,1,0,0,0,1);function Jf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ec(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(qf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Yf(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Xf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zf=null;function Qf(){return Zf===null&&(Zf=new fo(Xf,16,16,Zt,Rt),Zf.name=`DFG_LUT`,Zf.minFilter=Ot,Zf.magFilter=Ot,Zf.wrapS=Ct,Zf.wrapT=Ct,Zf.generateMipmaps=!1,Zf.needsUpdate=!0),Zf}var $f=class{constructor(e={}){let{canvas:t=nr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=jt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([$t,Qt,Xt]),g=new Set([jt,It,Pt,Vt,zt,Bt]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Gn;let j=0,M=0,N=null,ee=-1,P=null,F=new ni,te=new ni,ne=null,re=new K(0),ie=0,ae=t.width,oe=t.height,se=1,ce=null,le=null,ue=new ni(0,0,ae,oe),de=new ni(0,0,ae,oe),fe=!1,pe=new To,me=new Do,he=!1,ge=!1,I=new si,_e=new W,ve=new ni,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function xe(){return N===null?se:1}let L=n;function Se(e,n){return t.getContext(e,n)}let Ce,we,R,Te,z,B,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Ge,!1),t.addEventListener(`webglcontextrestored`,Ke,!1),t.addEventListener(`webglcontextcreationerror`,qe,!1),L===null){let t=`webgl2`;if(L=Se(t,e),L===null)throw Se(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ue()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ge,!1),t.removeEventListener(`webglcontextrestored`,Ke,!1),t.removeEventListener(`webglcontextcreationerror`,qe,!1),H(`WebGLRenderer: `+e.message),e}function Ue(){Ce=new vu(L),Ce.init(),Be=new Vf(L,Ce),we=new Ql(L,Ce,e,Be),R=new zf(L,Ce),we.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),O=L.createFramebuffer(),k=L.createFramebuffer(),A=L.createFramebuffer(),Te=new xu(L),z=new yf,B=new Bf(L,Ce,R,z,we,Be,Te),Ee=new _u(T),De=new Ul(L),Ve=new Xl(L,De),Oe=new yu(L,De,Te,Ve),ke=new Cu(L,Oe,De,Ve,Te),Le=new Su(L,we,B),Pe=new $l(z),Ae=new vf(T,Ee,Ce,we,Ve,Pe),je=new Jf(T,z),Me=new Cf,Ne=new Af(Ce),Ie=new Yl(T,Ee,R,ke,p,s),Fe=new Rf(T,ke,we),He=new Yf(L,Te,we,R),Re=new Zl(L,Ce,Te),ze=new bu(L,Ce,Te),Te.programs=Ae.programs,T.capabilities=we,T.extensions=Ce,T.properties=z,T.renderLists=Me,T.shadowMap=Fe,T.state=R,T.info=Te}m!==1009&&(w=new Tu(m,t.width,t.height,o,r,i));let We=new Gf(T,L);this.xr=We,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ce.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ce.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(e){e!==void 0&&(se=e,this.setSize(ae,oe,!1))},this.getSize=function(e){return e.set(ae,oe)},this.setSize=function(e,n,r=!0){We.isPresenting?V(`WebGLRenderer: Can't change size while VR device is presenting.`):(ae=e,oe=n,t.width=Math.floor(e*se),t.height=Math.floor(n*se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ae*se,oe*se).floor()},this.setDrawingBufferSize=function(e,n,r){ae=e,oe=n,se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)H(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(F)},this.getViewport=function(e){return e.copy(ue)},this.setViewport=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),R.viewport(F.copy(ue).multiplyScalar(xe()).round())},this.getScissor=function(e){return e.copy(de)},this.setScissor=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),R.scissor(te.copy(de).multiplyScalar(xe()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(e){R.setScissorTest(fe=e)},this.setOpaqueSort=function(e){ce=e},this.setTransparentSort=function(e){le=e},this.getClearColor=function(e){return e.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ie.getClearColor(),r=Ie.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,L.clearBufferiv(L.COLOR,0,v))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ge,!1),t.removeEventListener(`webglcontextrestored`,Ke,!1),t.removeEventListener(`webglcontextcreationerror`,qe,!1),Ie.dispose(),Me.dispose(),Ne.dispose(),B.dispose(),z.dispose(),Ee.dispose(),ke.dispose(),Oe.dispose(),Ve.dispose(),He.dispose(),Ae.dispose(),We.dispose(),We.removeEventListener(`sessionstart`,et),We.removeEventListener(`sessionend`,tt),nt.stop()};function Ge(e){e.preventDefault(),ir(`WebGLRenderer: Context Lost.`),E=!0}function Ke(){ir(`WebGLRenderer: Context Restored.`),E=!1;let e=Te.autoReset,t=Fe.enabled,n=Fe.autoUpdate,r=Fe.needsUpdate,i=Fe.type;Ue(),Te.autoReset=e,Fe.enabled=t,Fe.autoUpdate=n,Fe.needsUpdate=r,Fe.type=i}function qe(e){H(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Je(e){let t=e.target;t.removeEventListener(`dispose`,Je),Ye(t)}function Ye(e){Xe(e),z.remove(e)}function Xe(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){Ae.releaseProgram(e)}),e.isShaderMaterial&&Ae.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ye);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=pt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Oe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ve.setup(i,r,s,n,c);let h,g=Re;if(c!==null&&(h=De.get(c),g=ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*xe()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*xe()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ce.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?De.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ze(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),he===!0&&Pe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,lt(e,t,r),e.side=0,e.needsUpdate=!0,lt(e,t,r),e.side=2):lt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ne.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ge=this.localClippingEnabled,he=Pe.init(this.clippingPlanes,ge),he===!0&&Pe.setGlobalState(this.clippingPlanes,t),D!==null&&Fe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ze(o,n,t,e),r.add(o)}else Ze(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ce.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Qe=null;function $e(e){Qe&&Qe(e)}function et(){nt.stop()}function tt(){nt.start()}let nt=new Hl;nt.setAnimationLoop($e),typeof self<`u`&&nt.setContext(self),this.setAnimationLoop=function(e){Qe=e,We.setAnimationLoop(e),e===null?nt.stop():nt.start()},We.addEventListener(`sessionstart`,et),We.addEventListener(`sessionend`,tt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){H(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=We.enabled===!0&&We.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(t),t=We.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ne.get(e,C.length),x.init(t),x.state.textureUnits=B.getTextureUnits(),C.push(x),I.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?me.setFromArrayCamera(t):pe.setFromProjectionMatrix(I,Qn,t.reversedDepth),ge=this.localClippingEnabled,he=Pe.init(this.clippingPlanes,ge),b=Me.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,We.enabled===!0&&We.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&rt(e,t,-1/0,T.sortObjects)}rt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ce,le),be=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,be&&Ie.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),he===!0&&Pe.beginShadows();let i=x.state.shadowsArray;if(Fe.render(i,e,t),he===!0&&Pe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];at(n,r,e,a)}be&&Ie.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];it(b,e,n,n.viewport)}}else r.length>0&&at(n,r,e,t),be&&Ie.render(e),it(b,e,t)}N!==null&&M===0&&(B.updateMultisampleRenderTarget(N),B.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ve.resetDefaultState(),ee=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],B.setTextureUnits(x.state.textureUnits),he===!0&&Pe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function rt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?me:pe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&ve.setFromMatrixPosition(e.matrixWorld).applyMatrix4(I);let i=ke.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ve.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?me:pe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ve.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ve.copy(e.boundingSphere.center)),ve.applyMatrix4(e.matrixWorld).applyMatrix4(I)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ve.z,s,t)}}else a.visible&&b.push(e,i,a,n,ve.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)rt(i[e],t,n,r)}function it(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),he===!0&&Pe.setGlobalState(T.clippingPlanes,n),r&&R.viewport(F.copy(r)),i.length>0&&ot(i,t,n),a.length>0&&ot(a,t,n),o.length>0&&ot(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function at(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ce.has(`EXT_color_buffer_half_float`)||Ce.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new ii(1,1,{generateMipmaps:!0,type:e?Rt:jt,minFilter:At,samples:Math.max(4,we.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||F;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(re),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),be&&Ie.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),he===!0&&Pe.setGlobalState(T.clippingPlanes,r),ot(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),Ce.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,st(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(re,ie),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&st(o,t,n,s,l,c)}}function st(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ct(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function lt(e,t,n){t.isScene!==!0&&(t=ye);let r=z.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ae.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ae.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ee.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Je),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ft(e,s),d}else s.uniforms=Ae.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ae.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Pe.uniform),ft(e,s),r.needsLights=ht(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=ct(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function ut(e,t,n,r,i){let a=z.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=lt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Pd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ft(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function pt(e,t,n,r,i){t.isScene!==!0&&(t=ye),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Gr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ee.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),b=x.state.lights;if(he===!0&&(ge===!0||e!==P)){let t=e===P&&r.id===ee;Pe.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Pe.numPlanes||v.numIntersection!==Pe.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===ct(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?ut(r,t,i,s,h):lt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(R.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==ee&&(ee=r.id,O=!0),E||P!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(L,`projectionMatrix`,e.projectionMatrix),A.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(L,_e.setFromMatrixPosition(e.matrixWorld)),we.logarithmicDepthBuffer&&A.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(L,`sunShadowMap`,b.state.sunShadowMap,B),b.state.directionalShadowMap.length>0&&A.setValue(L,`directionalShadowMap`,b.state.directionalShadowMap,B),b.state.spotShadowMap.length>0&&A.setValue(L,`spotShadowMap`,b.state.spotShadowMap,B),b.state.pointShadowMap.length>0&&A.setValue(L,`pointShadowMap`,b.state.pointShadowMap,B)),i.isSkinnedMesh){A.setOptional(L,i,`bindMatrix`),A.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(L,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(A.setOptional(L,i,`batchingTexture`),A.setValue(L,`batchingTexture`,i._matricesTexture,B),A.setOptional(L,i,`batchingIdTexture`),A.setValue(L,`batchingIdTexture`,i._indirectTexture,B),A.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(L,`batchingColorTexture`,i._colorsTexture,B));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Le.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=Qf()),O){if(A.setValue(L,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&mt(j,k),a&&r.fog===!0&&je.refreshFogUniforms(j,a),je.refreshMaterialUniforms(j,r,se,oe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Pd.upload(L,dt(v),j,B)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Pd.upload(L,dt(v),j,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(L,`center`,i.center),A.setValue(L,`modelViewMatrix`,i.modelViewMatrix),A.setValue(L,`normalMatrix`,i.normalMatrix),A.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];He.update(n,w),He.bind(n,w)}}return w}function mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ht(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest,R.viewport(F),R.scissor(te),R.setScissorTest(ne),ee=-1;return}if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest}else F.copy(ue).multiplyScalar(se).floor(),te.copy(de).multiplyScalar(se).floor(),ne=fe;if(n!==0&&(r=O),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(F),R.scissor(te),R.setScissorTest(ne),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function gt(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=we.textureFormatReadable(e.format),t.__typeReadable=we.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=gt(o);if(u.__formatReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,Be.convert(c),Be.convert(l),a)}finally{let e=N===null?null:z.get(N).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=gt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,Be.convert(l),Be.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=N===null?null:z.get(N).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sr(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Be.convert(t.format),_=Be.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,k),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,R.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gr._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gr._getUnpackColorSpace()}},ep=new K;function tp(e){let t=new K(e);return[t.r,t.g,t.b]}var np=he.map(tp),rp=tp(`#5fd0c4`);tp(`#0b2a63`);var ip=tp(`#a59a8f`),ap={[me.GRASS]:tp(`#a38c6c`),[me.FOREST]:tp(`#8a765f`),[me.JUNGLE]:tp(`#7c6a55`),[me.TUNDRA]:tp(`#9a9388`)},op={[me.GRASS]:tp(`#7cb44c`),[me.FOREST]:tp(`#33803d`),[me.JUNGLE]:tp(`#1f7346`),[me.TUNDRA]:tp(`#8fa67c`)},sp=tp(`#2b2622`),cp=tp(`#a88814`),lp=tp(`#5a2e08`),up=tp(`#3a2808`),dp=tp(`#8f8c88`),fp=class{constructor(e,t){this.camera=e,this.world=t,this.lat=.35,this.lon=.6,this.alt=4.4,this.targetAlt=4.4,this.vLat=0,this.vLon=0,this.ground=0,this.shakeT=0,this.minAlt=.08,this.maxAlt=7,this.fly=null,this.visFrac=1}fitAlt(){let e=this.camera,t=Lr.degToRad(e.fov)/2,n=Math.atan(Math.tan(t)*e.aspect),r=Math.atan(Math.tan(t)*(this.visFrac||1));return 1.16/Math.sin(Math.min(r,n))-1}k(){return .00105*this.alt+3e-5}rotateBy(e,t){let n=this.k();this.lon+=e*n/Math.max(.35,Math.cos(this.lat)),this.lat+=t*n,this.clamp(),this.fly=null}fling(e,t){let n=this.k();this.vLon=e*n/Math.max(.35,Math.cos(this.lat)),this.vLat=t*n}zoomBy(e){this.targetAlt=Lr.clamp(this.targetAlt*e,this.minAlt,this.maxAlt),this.fly=null}clamp(){this.lat=Lr.clamp(this.lat,-1.35,1.35)}flyToVert(e,t){this.fly={lat:this.world.lat[e],lon:this.world.lon[e],alt:t??this.targetAlt,t:0,from:{lat:this.lat,lon:this.lon,alt:this.alt}},this.vLat=this.vLon=0}lookVert(e,t){this.lat=this.world.lat[e],this.lon=this.world.lon[e],t!=null&&(this.alt=this.targetAlt=t),this.fly=null}pitch(){return 1.05*(1-Lr.smoothstep(this.alt,.06,1.3))}update(e){if(this.fly){let t=this.fly;t.t=Math.min(1,t.t+e/1.4);let n=t.t<.5?4*t.t**3:1-(-2*t.t+2)**3/2,r=t.lon-t.from.lon;r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI),this.lat=t.from.lat+(t.lat-t.from.lat)*n,this.lon=t.from.lon+r*n;let i=Math.max(.05,t.from.alt),a=Math.max(.05,t.alt);this.alt=Math.exp(Math.log(i)+(Math.log(a)-Math.log(i))*n),this.targetAlt=this.alt,t.t>=1&&(this.fly=null)}else{this.lat+=this.vLat,this.lon+=this.vLon,this.clamp();let t=.0025**e;this.vLat*=t,this.vLon*=t,this.alt+=(this.targetAlt-this.alt)*(1-5e-4**e)}let t=Math.cos(this.lat),n=Math.sin(this.lat),r=Math.cos(this.lon),i=Math.sin(this.lon),a=new W(t*r,n,t*i),o=new W(-n*r,t,-n*i),s=this.world.nearest(a.x,a.y,a.z),c=Math.max(0,this.world.height[s])*pe*Lr.smoothstep(1.2,.2,this.alt);this.ground+=(c-this.ground)*Math.min(1,e*4);let l=this.pitch(),u=a.clone().multiplyScalar(1+this.ground),d=a.clone().multiplyScalar(Math.cos(l)).addScaledVector(o,-Math.sin(l)),f=this.camera;f.position.copy(u).addScaledVector(d,this.alt);let p=f.position,m=p.length(),h=this.world.nearest(p.x,p.y,p.z),g=this.world.surfaceR(h)+.012;m<g&&p.multiplyScalar(g/m),f.up.copy(o).multiplyScalar(Math.cos(l)).addScaledVector(a,Math.sin(l)).normalize(),f.lookAt(u),f.near=Math.max(.002,this.alt*.08),f.far=80,f.updateProjectionMatrix(),this.dir=a,this.target=u}},pp=class{constructor(e,t,n){this.canvas=e,this.world=t,this.game=n;let r=this.renderer=new $f({canvas:e,antialias:!1,powerPreference:`high-performance`,alpha:!1,stencil:!1});r.toneMapping=0,r.autoClear=!0,this.maxDpr=Math.min(window.devicePixelRatio||1,2),this.dpr=this.maxDpr,this.scene=new Wi,this.spaceColor=new K(`#05081a`),this.skyColor=new K(`#9fd3ff`),this.scene.background=this.spaceColor.clone(),this.camera=new pl(40,1,.01,80),this.rig=new fp(this.camera,t),this.planet=new Fi,this.scene.add(this.planet),this.time=0,this.frameTimes=[],this.fps=60,this._v=new W,this._v2=new W,this._m=new si,this._q=new Rr,this._s=new W,this._e=new _i,this.setupLights(),this.buildTerrain(),this.buildOcean(),this.buildAtmosphere(),this.buildStars(),this.buildClouds(),this.buildMarkers(),this.resize(),this.rig.alt=this.rig.targetAlt=this.rig.fitAlt(),window.addEventListener(`resize`,()=>this.resize())}setupLights(){this.sun=new vl(`#fff1da`,2.5),this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new vl(`#9fc4ff`,.55),this.scene.add(this.fill),this.amb=new yl(`#c9dcff`,.75),this.scene.add(this.amb)}buildTerrain(){let e=this.world.F,t=new Ra;this.tPos=new Float32Array(e*9),this.tCol=new Float32Array(e*9),t.setAttribute(`position`,new Ca(this.tPos,3).setUsage(Zn)),t.setAttribute(`color`,new Ca(this.tCol,3).setUsage(Zn)),this.faceJit=new Float32Array(e);for(let t=0;t<e;t++)this.faceJit[t]=(fe(t*7+3)-.5)*.06;let n=new Mc({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0});this.terrain=new co(t,n),this.planet.add(this.terrain),this.terrainGeo=t,this._paintAll(),t.boundingSphere=new Aa(new W,1.15)}_rebuildTint(){let e=this.world,t=this.game,n=e.N,r=this._tintK=new Float32Array(n),i=this._tintKind=new Uint8Array(n),a=(t,n,a,o,s=1)=>{let[c,l]=e.region(t,n);for(let e=0;e<c.length;e++){let t=c[e],n=o*Math.max(0,1-l[e])**+s;n>r[t]&&(r[t]=n,i[t]=a)}};if(t&&t.cities){let e=t.time||0;for(let n of t.cities){let r=n.tier===`megacity`?.07:n.tier===`metropolis`?.055:n.tier===`largecity`?.048:n.tier===`hamlet`?.028:.04;if(n.owner===`horde`){let i=Math.max(0,e-(n.capturedAt||e)),o=t.mods&&t.mods().blightAge||1,s=Math.max(.16,r*4.8),c=Math.min(s,Math.max(.07,r+.045+i*85e-5*o));a(n.v,c,2,1,.42),a(n.v,Math.max(r*1.4,c*.55),4,1,.5),a(n.v,c*1.05,5,.55,.25)}else a(n.v,r,1,.5)}}t&&t.home&&a(t.home.v,.035,3,.7)}_paintAll(){this._rebuildTint();for(let e=0;e<this.world.F;e++)this._writeFace(e);this.terrainGeo.attributes.position.needsUpdate=!0,this.terrainGeo.attributes.color.needsUpdate=!0,this._ownKey=this._ownerKey()}_ownerKey(){let e=this.game;if(!e||!e.cities)return``;let t=Math.floor((e.time||0)/4);return e.cities.map(e=>e.owner).join(``)+(e.home?e.home.v:``)+`:`+t}_writeFace(e){let t=this.world,n=t.idx,r=t.pos,i=t.height,a=e*9,o=[n[e*3],n[e*3+1],n[e*3+2]];for(let e=0;e<3;e++){let t=o[e],n=i[t]<0?.991:1+i[t]*pe;this.tPos[a+e*3]=r[t*3]*n,this.tPos[a+e*3+1]=r[t*3+1]*n,this.tPos[a+e*3+2]=r[t*3+2]*n}let s=o[0],c=o[1],l=o[2],u=(i[s]+i[c]+i[l])/3,d=ye(u,(t.temp[s]+t.temp[c]+t.temp[l])/3,(t.moist[s]+t.moist[c]+t.moist[l])/3,t.coastal[s]|t.coastal[c]|t.coastal[l]|+(Math.min(i[s],i[c],i[l])<0)),f,p=u<0&&d!==me.ICE,m=p?1:1+this.faceJit[e];if(p){let e=Math.max(0,1-Math.min(1,-u/.1)**1.15),t=tp(`#1468a4`);f=[t[0]+(rp[0]-t[0])*e*.55,t[1]+(rp[1]-t[1])*e*.55,t[2]+(rp[2]-t[2])*e*.55]}else if(f=np[d].slice(),ap[d]){let e=ap[d],t=op[d],n=.050000000000000044/.4;f=[e[0]+(f[0]-e[0])*1+(t[0]-f[0])*n*.6,e[1]+(f[1]-e[1])*1+(t[1]-f[1])*n*.6,e[2]+(f[2]-e[2])*1+(t[2]-f[2])*n*.6]}else if(d===me.MOUNTAIN){let e=Math.min(1,(u-.55)/.3);f=[f[0]+(ip[0]-f[0])*e,f[1]+(ip[1]-f[1])*e,f[2]+(ip[2]-f[2])*e]}if(u>=0&&this._tintK){let e=Math.max(this._tintK[s],this._tintK[c],this._tintK[l]),t=this._tintKind[s]||this._tintKind[c]||this._tintKind[l];if(e>0&&t){let n=t===5?up:t===4?lp:t===2?cp:t===3?sp:dp;f=[f[0]*(1-e)+n[0]*e,f[1]*(1-e)+n[1]*e,f[2]*(1-e)+n[2]*e]}}for(let e=0;e<3;e++)this.tCol[a+e*3]=f[0]*m,this.tCol[a+e*3+1]=f[1]*m,this.tCol[a+e*3+2]=f[2]*m}buildOcean(){let e=new _c(1,24);this.oceanBase=Float32Array.from(e.attributes.position.array);let t=this.oceanBase.length/3;this.oceanPhase=new Float32Array(t);for(let e=0;e<t;e++){let t=this.oceanBase[e*3],n=this.oceanBase[e*3+1],r=this.oceanBase[e*3+2];this.oceanPhase[e]=t*37.1+n*53.7+r*21.3}let n=new Mc({color:`#1e8fd6`,transparent:!0,opacity:.92,roughness:.48,metalness:.04,flatShading:!1,depthWrite:!1});this.ocean=new co(e,n),this.ocean.renderOrder=2,this.planet.add(this.ocean)}animateOcean(e){let t=this.ocean.geometry.attributes.position,n=this.oceanBase,r=this.oceanPhase,i=t.array;for(let t=0;t<r.length;t++){let a=1.0005+Math.sin(e*1.3+r[t])*7e-4;i[t*3]=n[t*3]*a,i[t*3+1]=n[t*3+1]*a,i[t*3+2]=n[t*3+2]*a}t.needsUpdate=!0}buildAtmosphere(){let e=(e,t,n,r,i)=>new co(new xc(e,64,48),new Ac({uniforms:{uColor:{value:new K(i)},uPower:{value:n},uInt:{value:r},uFade:{value:1}},vertexShader:`varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:t===1?`uniform vec3 uColor; uniform float uPower; uniform float uInt; uniform float uFade; varying vec3 vN; varying vec3 vV; void main(){ float d = dot(vN, vV); float i = pow(clamp(0.62 + d, 0.0, 1.0), uPower) * uInt * uFade; gl_FragColor = vec4(uColor * i, i); }`:`uniform vec3 uColor; uniform float uPower; uniform float uInt; uniform float uFade; varying vec3 vN; varying vec3 vV; void main(){ float f = 1.0 - clamp(dot(vN, vV), 0.0, 1.0); float i = pow(f, uPower) * uInt * uFade; gl_FragColor = vec4(uColor * i, i); }`,side:t,transparent:!0,depthWrite:!1,blending:2}));this.atmoOuter=e(1.16,1,5,1.6,`#5fb2ff`),this.atmoInner=e(1.075,0,2.6,.9,`#7cc4ff`),this.atmoInner.renderOrder=5,this.scene.add(this.atmoOuter,this.atmoInner)}buildStars(){let e=1400,t=new Float32Array(e*3),n=new Float32Array(e*3);for(let r=0;r<e;r++){let e=Math.random()*2-1,i=Math.random()*Math.PI*2,a=Math.sqrt(1-e*e);t[r*3]=Math.cos(i)*a*40,t[r*3+1]=e*40,t[r*3+2]=Math.sin(i)*a*40,ep.setHSL(.55+Math.random()*.15,.6,.6+Math.random()*.4);let o=.4+Math.random()*.8;n[r*3]=ep.r*o,n[r*3+1]=ep.g*o,n[r*3+2]=ep.b*o}let r=new Ra;r.setAttribute(`position`,new Ca(t,3)),r.setAttribute(`color`,new Ca(n,3)),this.stars=new Uo(r,new Ro({size:1.6,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1})),this.scene.add(this.stars)}buildClouds(){let e=new _c(1,1),t=new Mc({color:`#ffffff`,roughness:1,flatShading:!0,transparent:!0,opacity:.94,emissive:`#8a9ab8`,emissiveIntensity:.45});this.clouds=new xo(e,t,280),this.clouds.renderOrder=3,this.cloudGroup=new Fi,this.cloudGroup.add(this.clouds),this.scene.add(this.cloudGroup),this.cloudData=[];let n=new W(0,1,0),r=0,i=0;for(;r<280;){let e=Math.random()*1.7-.85,t=Math.random()*Math.PI*2,a=Math.sqrt(1-e*e),o=new W(Math.cos(t)*a,e,Math.sin(t)*a),s=new W().crossVectors(o,n).normalize(),c=new W().crossVectors(o,s),l=4+Math.floor(Math.random()*5);for(let e=0;e<l&&r<280;e++,r++){let t=(e-l/2)*.028+(Math.random()-.5)*.012,n=o.clone().addScaledVector(s,t).addScaledVector(c,(Math.random()-.5)*.02).normalize().multiplyScalar(1.1+Math.random()*.008),r=.016+Math.random()*.02*(1-Math.abs(e-l/2)/l);this.cloudData.push({p:n,sc:r,cluster:i})}i++}this.cloudClusters=i,this.setCloudCover(this.world.params.atmo)}setCloudCover(e){let t=this._m,n=this._s,r=this._q,i=Math.round(this.cloudClusters*Math.min(1,.1+e*.95)),a=0;for(let e of this.cloudData)e.cluster>=i||(n.set(e.sc*1.25,e.sc*.75,e.sc),r.setFromUnitVectors(new W(0,1,0),e.p.clone().normalize()),t.compose(e.p,r,n),this.clouds.setMatrixAt(a++,t));this.clouds.count=a,this.clouds.instanceMatrix.needsUpdate=!0}buildMarkers(){let e=new Zo(.012,.028,5);e.rotateX(Math.PI),this.cityMesh=new xo(e,new Mc({vertexColors:!1,flatShading:!0,color:`#e8e0c8`,roughness:.7,emissive:`#f5cf6b`,emissiveIntensity:.08}),128),this.cityMesh.instanceMatrix.setUsage(Zn),this.cityMesh.frustumCulled=!1,this.planet.add(this.cityMesh),this.cityMesh.instanceColor=new po(new Float32Array(384),3);let t=new vc(.016,0);this.baseMesh=new co(t,new Mc({color:`#8ee08a`,flatShading:!0,emissive:`#3a8a3a`,emissiveIntensity:.5})),this.baseMesh.visible=!1,this.planet.add(this.baseMesh),this.pickMesh=this.baseMesh.clone(),this.pickMesh.material=new Mc({color:`#ffe7a3`,flatShading:!0,emissive:`#f5cf6b`,emissiveIntensity:.6}),this.pickMesh.visible=!1,this.planet.add(this.pickMesh);let n=new xc(.01,6,5);this.marchMesh=new xo(n,new Mc({color:`#8ee08a`,flatShading:!0,emissive:`#5a8a3a`,emissiveIntensity:.45}),32),this.marchMesh.instanceMatrix.setUsage(Zn),this.marchMesh.instanceColor=new po(new Float32Array(96),3),this.marchMesh.frustumCulled=!1,this.planet.add(this.marchMesh),this.routeGroup=new Fi,this.planet.add(this.routeGroup),this._routeKey=``,this.previewPath=null,this._buildInfectionFx()}_buildInfectionFx(){let e=new _c(1,0);this.smokeMesh=new xo(e,new Xa({color:`#3a382c`,transparent:!0,opacity:.55,depthWrite:!1}),384),this.smokeMesh.instanceMatrix.setUsage(Zn),this.smokeMesh.frustumCulled=!1,this.smokeMesh.renderOrder=4,this.planet.add(this.smokeMesh);let t=new xc(1,8,6);this.glowMesh=new xo(t,new Xa({color:`#8cff4a`,transparent:!0,opacity:.38,depthWrite:!1}),128),this.glowMesh.instanceMatrix.setUsage(Zn),this.glowMesh.frustumCulled=!1,this.glowMesh.renderOrder=3,this.planet.add(this.glowMesh);let n=new xc(1,6,5);this.lightMesh=new xo(n,new Xa({color:`#ffe9a8`,transparent:!0,opacity:1,depthWrite:!1}),128),this.lightMesh.instanceMatrix.setUsage(Zn),this.lightMesh.frustumCulled=!1,this.lightMesh.renderOrder=5,this.planet.add(this.lightMesh),this._worldSun=new W(1,.25,0).normalize()}setPreviewPath(e){this.previewPath=e||null}_syncRoutes(){let e=[];this.previewPath&&this.previewPath.length>1&&e.push({path:this.previewPath,color:`#f5cf6b`,opacity:.55});for(let t of this.game.raids||[])t.state===`done`||!t.path||t.path.length<2||e.push({path:t.path,color:t.kind===`strike`?`#e8e0c8`:`#8ee08a`,opacity:.7});let t=e.map(e=>e.path[0]+`-`+e.path[e.path.length-1]+e.color+e.path.length).join(`|`);if(t!==this._routeKey){for(this._routeKey=t;this.routeGroup.children.length;){let e=this.routeGroup.children[0];this.routeGroup.remove(e),e.geometry?.dispose?.(),e.material?.dispose?.()}for(let t of e){let e=t.path.map(e=>{let t=this.world.surfaceR(e)+.006;return new W(this.world.pos[e*3]*t,this.world.pos[e*3+1]*t,this.world.pos[e*3+2]*t)}),n=new Io(new Ra().setFromPoints(e),new Oo({color:t.color,transparent:!0,opacity:t.opacity,depthWrite:!1}));this.routeGroup.add(n)}}}_placeOnVert(e,t,n=1,r=.02){let i=this.world.surfaceR(t)+r,a=this.world.pos[t*3],o=this.world.pos[t*3+1],s=this.world.pos[t*3+2];e.position.set(a*i,o*i,s*i),e.quaternion.setFromUnitVectors(new W(0,1,0),new W(a,o,s).normalize()),e.scale.setScalar(n)}setPickVert(e){e==null||e<0?(this.pickMesh.visible=!1,this.pickV=-1):(this.pickV=e,this.pickMesh.visible=!0,this._placeOnVert(this.pickMesh,e,1.15,.018))}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.width=e,this.height=t,this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix();let n=this.rig.fitAlt();this.rig.maxAlt=n*1.5}pick(e,t){let n=this.canvas.getBoundingClientRect(),r=new U((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),i=new Ll;i.setFromCamera(r,this.camera);let a=i.ray.origin,o=i.ray.direction,s=1.01,c=null,l=-1;for(let e=0;e<3;e++){let t=a.dot(o),n=a.lengthSq()-s*s,r=t*t-n;if(r<0){if(e===0)return null;break}let i=-t-Math.sqrt(r);if(i<0)return null;c=a.clone().addScaledVector(o,i),l=this.world.nearest(c.x,c.y,c.z),s=this.world.surfaceR(l)}return c?{v:l,point:c,land:this.world.height[l]>=.02}:null}projectVert(e,t){let n=this.world.surfaceR(e)+.03;this._v.set(this.world.pos[e*3]*n,this.world.pos[e*3+1]*n,this.world.pos[e*3+2]*n),this._v.project(this.camera),t.x=(this._v.x*.5+.5)*this.width,t.y=(-this._v.y*.5+.5)*this.height;let r=1;return this.rig.dir&&(r=this.world.pos[e*3]*this.rig.dir.x+this.world.pos[e*3+1]*this.rig.dir.y+this.world.pos[e*3+2]*this.rig.dir.z),t.dot=r,t.visible=this._v.z>-1&&this._v.z<1&&r>=.16,t}projectDir(e,t,n,r){let i=1.03;this._v.set(e*i,t*i,n*i).project(this.camera),r.x=(this._v.x*.5+.5)*this.width,r.y=(-this._v.y*.5+.5)*this.height;let a=1;return this.rig.dir&&(a=e*this.rig.dir.x+t*this.rig.dir.y+n*this.rig.dir.z),r.dot=a,r.visible=this._v.z>-1&&this._v.z<1&&a>=.16,r}update(e){this.time+=e,this.rig.update(e),this._ownerKey()!==this._ownKey&&this._paintAll();let t=this.camera,n=new W;t.getWorldDirection(n);let r=new W().crossVectors(n,t.up).normalize(),i=new W().copy(n).multiplyScalar(-.55).addScaledVector(t.up,.65).addScaledVector(r,-.55).normalize();this.sun.position.copy(i).multiplyScalar(10),this.fill.position.copy(n).multiplyScalar(-.6).addScaledVector(r,.7).addScaledVector(t.up,-.2).multiplyScalar(10),this.animateOcean(this.time),this.cloudGroup.rotation.y+=e*.012;let a=this.rig.alt,o=Lr.smoothstep(a,.12,.9);this.clouds.material.opacity=.95*Lr.smoothstep(a,.9,1.7),this.clouds.visible=this.clouds.material.opacity>.02,this.scene.background.copy(this.skyColor).lerp(this.spaceColor,o),this.stars.material.opacity=o,this.atmoOuter.material.uniforms.uFade.value=o,this.atmoInner.material.uniforms.uFade.value=.35+o*.65,this._updateMarkers(),this._syncRoutes(),this.renderer.render(this.scene,this.camera),this.frameTimes.push(e),this.frameTimes.length>40&&this.frameTimes.shift();let s=this.frameTimes.reduce((e,t)=>e+t,0)/this.frameTimes.length;this.fps=s>0?1/s:60}_updateMarkers(){let e=this.game,t=this.world,n=this._m,r=this._q,i=this._v,a=this._s,o=0;new K(`#f5cf6b`);let s=new K(`#8ee08a`),c=new K(`#2a3318`),l=new K(`#c8c0b0`);for(let s of t.cities){let u=e.cById[s.id],d=s.v,f=t.surfaceR(d)+.02;i.set(t.pos[d*3]*f,t.pos[d*3+1]*f,t.pos[d*3+2]*f),r.setFromUnitVectors(new W(0,1,0),new W(t.pos[d*3],t.pos[d*3+1],t.pos[d*3+2]).normalize());let p=u&&u.tier===`megacity`?2.05:u&&u.tier===`metropolis`?1.6:u&&u.tier===`largecity`?1.28:u&&u.tier===`town`?.78:u&&u.tier===`hamlet`?.58:1;a.set(p,p,p),n.compose(i,r,a),this.cityMesh.setMatrixAt(o,n);let m=u&&u.owner===`horde`?c:l;this.cityMesh.setColorAt(o,m),o++}this.cityMesh.count=o,this.cityMesh.instanceMatrix.needsUpdate=!0,this.cityMesh.instanceColor&&(this.cityMesh.instanceColor.needsUpdate=!0),this._updateInfectionFx(),e.home?(this.baseMesh.visible=!0,this._placeOnVert(this.baseMesh,e.home.v,1.2,.02)):this.baseMesh.visible=!1;let u=0;for(let o of e.raids||[]){if(o.state===`done`||!o.path||!o.path.length)continue;let e=o.state===`battle`?1:o.progress,c=Ce(t,o.path,e),d=1.02;i.set(c.x*d,c.y*d,c.z*d),r.identity(),a.set(o.kind===`strike`?1.1:1.3,1.1,1.1),n.compose(i,r,a),this.marchMesh.setMatrixAt(u,n),this.marchMesh.setColorAt?.(u,o.kind===`strike`?l:s),u++}this.marchMesh.count=u,this.marchMesh.instanceMatrix.needsUpdate=!0,this.marchMesh.instanceColor&&(this.marchMesh.instanceColor.needsUpdate=!0)}_updateInfectionFx(){let e=this.game,t=this.world,n=this._m,r=this._q,i=this._v,a=this._s;if(!this.smokeMesh)return;let o=this._worldSun,s=Ge(e&&e.time||this.time);o.set(s.x,s.y,s.z);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=e&&e.time||0;for(let s of e&&e.cities||[]){let g=s.v,_=t.pos[g*3],v=t.pos[g*3+1],y=t.pos[g*3+2],b=this._v2.set(_,v,y).normalize(),x=t.surfaceR(g);r.setFromUnitVectors(new W(0,1,0),b);let S=Math.max(0,-b.dot(o));if(s.owner===`horde`){p++,f++;let t=Math.max(0,h-(s.capturedAt||h)),o=e.mods&&e.mods().blightAge||1,u=s.tier===`megacity`?.07:s.tier===`metropolis`?.055:.04;m=Math.max(m,Math.min(Math.max(.16,u*4.8),Math.max(.07,u+.045+t*85e-5*o)));let d=.9+Math.sin(this.time*1.4+s.id)*.2,g=this.rig&&this.rig.alt||1,_=Math.min(1,Math.max(0,(g-.35)/2)),v=1+_*2.8;i.copy(b).multiplyScalar(x+.024),a.setScalar(.13*d*(s.tier===`megacity`?2.2:s.tier===`hamlet`?1.25:1.6)*(1+_*1.2)),n.compose(i,r,a),this.glowMesh.setMatrixAt(l++,n);let y=4+(s.tier===`megacity`?2:0);for(let e=0;e<y&&c<360;e++){let t=(.02+(this.time*.16+s.id*.2+e*.35)%.12)*(1+_*2);i.copy(b).multiplyScalar(x+.025+t);let o=(.04+e*.014+Math.sin(this.time*2+e)*.008)*v;a.set(o*1.3,o*2.2,o*1.3),n.compose(i,r,a),this.smokeMesh.setMatrixAt(c++,n)}}else if(S>.08){d++,i.copy(b).multiplyScalar(x+.028);let e=.012*(s.tier===`megacity`?1.15:s.tier===`metropolis`?1.1:s.tier===`hamlet`?.8:1.15)*(.55+S);a.setScalar(e),n.compose(i,r,a),this.lightMesh.setMatrixAt(u++,n)}else f++}this.smokeMesh.count=c,this.glowMesh.count=l,this.lightMesh.count=u,this.smokeMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0,this.lightMesh.instanceMatrix.needsUpdate=!0,this._infectStats={captured:p,lightsOn:d,lightsOff:f,smoke:c,glow:l,maxRad:m,nightSun:{x:o.x,y:o.y,z:o.z}},this._updateEscalationFx()}infectionInfo(){return this._infectStats||{captured:0,lightsOn:0,lightsOff:0,smoke:0,glow:0,maxRad:0}}_updateEscalationFx(){this._syncLabMarkers(),this._syncQuarantineRings(),this._syncBombs(),this._syncEvents(),this._syncCureWave()}_syncLabMarkers(){if(!this.labMesh){let e=new vc(.014,0);this.labMesh=new xo(e,new Mc({color:`#7de0ff`,flatShading:!0,emissive:`#3aa0c8`,emissiveIntensity:.7}),16),this.labMesh.instanceMatrix.setUsage(Zn),this.labMesh.frustumCulled=!1,this.planet.add(this.labMesh)}let e=this.game,t=this.world,n=this._m,r=this._q,i=this._v,a=this._s,o=0;for(let s of e&&e.cities||[]){if(!s.research||s.owner!==`human`)continue;let e=s.v,c=t.surfaceR(e)+.03;i.set(t.pos[e*3]*c,t.pos[e*3+1]*c,t.pos[e*3+2]*c),r.setFromUnitVectors(new W(0,1,0),new W(t.pos[e*3],t.pos[e*3+1],t.pos[e*3+2]).normalize()),a.setScalar(s.tier===`megacity`?1.6:1.25),n.compose(i,r,a),this.labMesh.setMatrixAt(o++,n)}this.labMesh.count=o,this.labMesh.instanceMatrix.needsUpdate=!0}_syncQuarantineRings(){this.qGroup||(this.qGroup=new Fi,this.planet.add(this.qGroup),this._qKey=``);let e=this.game&&this.game.quarantines||[],t=this.rig&&this.rig.alt||1,n=e.map(e=>e.id+`:`+(e.broken?0:e.hp|0)+`:`+e.rad).join(`|`)+`|a`+Math.round(t*4);if(n===this._qKey)return;for(this._qKey=n;this.qGroup.children.length;){let e=this.qGroup.children[0];this.qGroup.remove(e),e.geometry?.dispose?.(),e.material?.dispose?.()}let r=this.world,i=.012+Math.min(1,Math.max(0,(t-.35)/2))*.028;for(let t of e){if(t.broken)continue;let e=r.pos[t.v*3],n=r.pos[t.v*3+1],a=r.pos[t.v*3+2],o=new W(e,n,a).normalize(),s=new W().crossVectors(o,Math.abs(o.y)<.9?new W(0,1,0):new W(1,0,0)).normalize(),c=new W().crossVectors(o,s),l=t.rad||.16,u=[],d=(e,t,n)=>{let r=l+t;return o.clone().multiplyScalar(Math.cos(r)).addScaledVector(s,Math.sin(r)*Math.cos(e)).addScaledVector(c,Math.sin(r)*Math.sin(e)).normalize().multiplyScalar(1.012+n)};for(let e=0;e<64;e++){let t=e/64*Math.PI*2,n=(e+1)/64*Math.PI*2,r=d(t,-i,0),a=d(t,i,.006),o=d(n,-i,0),s=d(n,i,.006);for(let e of[r,a,o,a,s,o])u.push(e.x,e.y,e.z)}let f=new Ra;f.setAttribute(`position`,new Ea(u,3)),f.computeVertexNormals();let p=t.hp/Math.max(1,t.maxHp||90)>.4?`#f0d878`:`#e07058`,m=new Xa({color:p,transparent:!0,opacity:.82,depthWrite:!1,side:2});this.qGroup.add(new co(f,m));let h=[];for(let e=0;e<64;e++){let t=e/64*Math.PI*2,n=(e+1)/64*Math.PI*2,r=d(t,-i*1.7,.002),a=d(t,i*1.7,.01),o=d(n,-i*1.7,.002),s=d(n,i*1.7,.01);for(let e of[r,a,o,a,s,o])h.push(e.x,e.y,e.z)}let g=new Ra;g.setAttribute(`position`,new Ea(h,3));let _=new Xa({color:p,transparent:!0,opacity:.35,depthWrite:!1,side:2});this.qGroup.add(new co(g,_))}}_syncBombs(){this.bombGroup||(this.bombGroup=new Fi,this.planet.add(this.bombGroup),this._bombJetGeo=new Zo(.028,.11,6),this._bombJetMat=new Xa({color:`#e8eef4`}),this._bombTrailGeo=new Zo(.018,.16,5),this._bombTrailMat=new Xa({color:`#9ad4ff`,transparent:!0,opacity:.7,depthWrite:!1}),this._bombBurstGeo=new xc(.07,10,8),this._bombBurstMat=new Xa({color:`#ff8844`,transparent:!0,opacity:.9,depthWrite:!1}),this._bombRingGeo=new bc(.05,.1,16),this._bombRingMat=new Xa({color:`#ffcc66`,transparent:!0,opacity:.7,depthWrite:!1,side:2}),this._bombPool=[]);let e=this.game&&this.game.bombs||[],t=this.world,n=this.rig&&this.rig.alt||1,r=1+Math.min(1,Math.max(0,(n-.35)/2))*2.4,i=0,a=()=>{let e=this._bombPool[i];return e||(e={jet:new co(this._bombJetGeo,this._bombJetMat),trail:new co(this._bombTrailGeo,this._bombTrailMat.clone()),burst:new co(this._bombBurstGeo,this._bombBurstMat.clone()),ring:new co(this._bombRingGeo,this._bombRingMat.clone())},this.bombGroup.add(e.jet,e.trail,e.burst,e.ring),this._bombPool[i]=e),e};for(let n of e){let e=n.path&&n.path.length>1?n.path:[n.from,n.to],o=Math.min(1,(n.t||0)/Math.max(.2,n.dur||1)),s=Ce(t,e,Math.min(1,o)),c=1.05,l=a();l.jet.visible=!n.hit,l.trail.visible=!n.hit,l.burst.visible=!!n.hit,l.ring.visible=!!n.hit;let u=n.kind===`nuke`,d=u?2.6:1;u?(l.burst.material.color.set(`#fff4c8`),l.ring.material.color.set(`#ffb24a`),l.trail.material.color.set(`#ffe7a0`)):(l.burst.material.color.set(`#ff8844`),l.ring.material.color.set(`#ffcc66`),l.trail.material.color.set(`#9ad4ff`));let f=s.x*c,p=s.y*c,m=s.z*c;if(!n.hit)l.jet.position.set(f,p,m),l.jet.scale.setScalar(r*(u?1.6:1)),l.jet.lookAt(0,0,0),l.jet.rotateX(Math.PI),l.trail.position.set(f,p,m),l.trail.scale.setScalar(r*1.1*(u?1.5:1)),l.trail.lookAt(0,0,0),l.trail.rotateX(0),l.trail.material.opacity=.55+.25*Math.sin((n.t||0)*10);else{let e=Math.max(0,n.t-n.dur);l.burst.position.set(f,p,m),l.burst.scale.setScalar((1.4+e*3.2)*r*d),l.burst.material.opacity=Math.max(0,.95-e*(u?.18:.32)),l.ring.position.set(f,p,m),l.ring.lookAt(0,0,0),l.ring.scale.setScalar((1.2+e*4.5)*r*d),l.ring.material.opacity=Math.max(0,.75-e*(u?.16:.28))}i++}for(;i<this._bombPool.length;i++){let e=this._bombPool[i];e.jet.visible=e.trail.visible=e.burst.visible=e.ring.visible=!1}}_syncEvents(){this.evGroup||(this.evGroup=new Fi,this.planet.add(this.evGroup),this._evPool=[]);let e=(this.game&&this.game.worldEvents||[]).filter(e=>e.state===`live`),t=this.world,n=this.rig&&this.rig.alt||1,r=1+Math.min(1,Math.max(0,(n-.35)/2))*1.6,i={stadium:`#f0c14a`,convoy:`#7ec8ff`,milbase:`#9aaa6a`,festival:`#f08ad0`,evac:`#d8e8ff`},a=0;for(let n of e){let e=this._evPool[a];e||(e=new co(new vc(.02,0),new Xa({color:`#fff`})),this.evGroup.add(e),this._evPool[a]=e),e.visible=!0,e.material.color.set(i[n.kind]||`#fff`),e.scale.setScalar(r);let o,s,c;if(n.kind===`convoy`&&n.path&&n.path.length){let e=Ce(t,n.path,n.progress||0),r=1.038;o=e.x*r,s=e.y*r,c=e.z*r}else if(n.v!=null){let e=1.034;o=t.pos[n.v*3]*e,s=t.pos[n.v*3+1]*e,c=t.pos[n.v*3+2]*e}else continue;e.position.set(o,s,c),e.lookAt(0,0,0),a++}for(;a<this._evPool.length;a++)this._evPool[a].visible=!1}_syncCureWave(){this.cureGroup||(this.cureGroup=new Fi,this.planet.add(this.cureGroup),this._cureJetGeo=new Zo(.026,.12,6),this._cureJetMat=new Xa({color:`#c8fff8`}),this._cureTrailGeo=new Zo(.016,.18,5),this._cureTrailMat=new Xa({color:`#5ad8ff`,transparent:!0,opacity:.75,depthWrite:!1}),this._cureBurstGeo=new xc(.055,10,8),this._cureBurstMat=new Xa({color:`#9ef7ff`,transparent:!0,opacity:.9,depthWrite:!1}),this._cureRingGeo=new bc(.92,1,48),this._cureRingMat=new Xa({color:`#7de0ff`,transparent:!0,opacity:.55,depthWrite:!1,side:2}),this._cureShipPool=[],this._cureRingPool=[],this._cureBurstPool=[]);let e=this.game&&this.game.distribution,t=this.world,n=this.rig&&this.rig.alt||1,r=1+Math.min(1,Math.max(0,(n-.35)/2))*2.2;if(!e){for(let e of this._cureShipPool)e.jet.visible=e.trail.visible=e.burst.visible=!1;for(let e of this._cureRingPool)e.visible=!1;for(let e of this._cureBurstPool)e.visible=!1;return}let i=Math.min(1,(e.t||0)/Math.max(.2,e.dur||9)),a=i*Math.PI,o=0,s=()=>{let e=this._cureRingPool[o];return e||(e=new co(this._cureRingGeo,this._cureRingMat.clone()),this.cureGroup.add(e),this._cureRingPool[o]=e),e};for(let n of e.origins||[]){let e=new W(t.pos[n.v*3],t.pos[n.v*3+1],t.pos[n.v*3+2]).normalize();for(let t of[1,.62]){let n=Math.max(.04,a*t),c=s();c.visible=n>.05&&n<Math.PI-.05;let l=Math.sin(n)*1.025;c.position.copy(e).multiplyScalar(Math.cos(n)*1.02),c.lookAt(0,0,0),c.scale.setScalar(Math.max(.08,l)*r),c.material.opacity=Math.max(0,.62-i*.25)*(t===1?1:.55),o++}}for(;o<this._cureRingPool.length;o++)this._cureRingPool[o].visible=!1;let c=0,l=()=>{let e=this._cureShipPool[c];return e||(e={jet:new co(this._cureJetGeo,this._cureJetMat),trail:new co(this._cureTrailGeo,this._cureTrailMat.clone()),burst:new co(this._cureBurstGeo,this._cureBurstMat.clone())},this.cureGroup.add(e.jet,e.trail,e.burst),this._cureShipPool[c]=e),e};for(let n of e.shipments||[]){let e=n.path&&n.path.length>1?n.path:[n.from,n.to],i=Math.min(1,(n.t||0)/Math.max(.2,n.dur||1)),a=Ce(t,e,Math.min(1,i)),o=l(),s=1.055,u=a.x*s,d=a.y*s,f=a.z*s;if(o.jet.visible=!n.arrived,o.trail.visible=!n.arrived,o.burst.visible=!!n.arrived,!n.arrived)o.jet.position.set(u,d,f),o.jet.scale.setScalar(r*1.15),o.jet.lookAt(0,0,0),o.jet.rotateX(Math.PI),o.trail.position.set(u,d,f),o.trail.scale.setScalar(r*1.25),o.trail.lookAt(0,0,0),o.trail.material.opacity=.5+.3*Math.sin((n.t||0)*8);else{let e=Math.max(0,(n.t||0)-(n.dur||0));o.burst.position.set(u,d,f),o.burst.scale.setScalar((1.2+e*2.8)*r),o.burst.material.opacity=Math.max(0,.9-e*.45)}c++}for(;c<this._cureShipPool.length;c++){let e=this._cureShipPool[c];e.jet.visible=e.trail.visible=e.burst.visible=!1}}cureWaveInfo(){return{ships:(this._cureShipPool||[]).filter(e=>e.jet.visible||e.burst.visible).length,rings:(this._cureRingPool||[]).filter(e=>e.visible).length,group:!!(this.cureGroup&&this.cureGroup.parent)}}adaptQuality(){let e=this.fps;e<28&&this.dpr>1?(this.dpr=1,this.resize()):e>50&&this.dpr<this.maxDpr&&(this.dpr=this.maxDpr,this.resize())}},Y,mp,hp,gp,_p,vp,yp=!1,bp=.42,xp=.7,Sp=!1,Cp=null,wp=0,Tp=null,Ep=null,Dp=0,Op=0,kp=!1,Ap=[];function jp(){return Ap.slice()}function Mp(){Ap.length=0}function Np(e,t){Ap.push({ev:e,t:Date.now(),...t||{}}),Ap.length>40&&Ap.shift()}function Pp(e){yp=!!e,Bp()}function Fp(){return yp}function Ip(e){bp=Math.max(0,Math.min(1,Number(e)||0)),Bp()}function Lp(e){xp=Math.max(0,Math.min(1,Number(e)||0)),Bp()}function Rp(){let e=Vp();return e&&e.state===`suspended`&&e.resume().catch(()=>{}),e&&e.state===`running`&&(Sp||(Sp=!0,Np(`unlock`)),Bp(),Kp()),e}function zp(){return{unlocked:Sp,muted:yp,musicVol:bp,sfxVol:xp,ctx:!!(Y&&Y.state),ctxState:Y&&Y.state,music:!!Cp,siren:!!Tp,cure:!!Ep,lastStock:Dp,lastAlarm:Op}}function Bp(){let e=!yp&&Sp;mp&&(mp.gain.value=+!!e),hp&&(hp.gain.value=xp*.85),gp&&(gp.gain.value=bp*.55),_p&&(_p.gain.value=xp*.7),vp&&(vp.gain.value=xp*.55)}function Vp(){if(Y)return Y;try{Y=new(window.AudioContext||window.webkitAudioContext)}catch{return null}return mp=Y.createGain(),mp.gain.value=0,mp.connect(Y.destination),hp=Y.createGain(),hp.gain.value=xp*.85,hp.connect(mp),gp=Y.createGain(),gp.gain.value=bp*.55,gp.connect(mp),_p=Y.createGain(),_p.gain.value=xp*.7,_p.connect(mp),vp=Y.createGain(),vp.gain.value=xp*.55,vp.connect(mp),Bp(),Y}function Hp(e,t,n,r,i){let a=Y.createGain();return a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(i,t+n),a.gain.exponentialRampToValueAtTime(1e-4,t+n+r),a.connect(e||hp),a}function Up(e,t,n,r,i,a=.005,o=null){if(!Y)return;let s=Y.createOscillator();s.type=e,typeof t==`function`?t(s,n):s.frequency.setValueAtTime(t,n),s.connect(Hp(o||hp,n,a,r,i)),s.start(n),s.stop(n+r+.05)}function Wp(e,t,n,r,i=`bandpass`,a=null){if(!Y)return;let o=Math.floor(Y.sampleRate*Math.max(t,.08)),s=Y.createBuffer(1,o,Y.sampleRate),c=s.getChannelData(0);for(let e=0;e<o;e++)c[e]=Math.random()*2-1;let l=Y.createBufferSource();l.buffer=s;let u=Y.createBiquadFilter();u.type=i,u.frequency.setValueAtTime(r,e),l.connect(u),u.connect(Hp(a||hp,e,.001,t,n)),l.start(e),l.stop(e+t+.02)}function Gp(e){if(yp)return;let t=Rp();if(!t)return;let n=t.currentTime+.001;switch(Np(`sfx`,{name:e}),e){case`select`:Up(`sine`,520,n,.06,.07),Up(`sine`,780,n+.04,.07,.05);break;case`command`:Up(`triangle`,240,n,.1,.09),Up(`sine`,360,n+.05,.1,.05);break;case`bite`:Wp(n,.08,.16,400),Up(`sawtooth`,e=>{e.frequency.setValueAtTime(140,n),e.frequency.exponentialRampToValueAtTime(60,n+.12)},n,.12,.1);break;case`groan`:Up(`sawtooth`,e=>{e.frequency.setValueAtTime(86,n),e.frequency.linearRampToValueAtTime(62,n+.4)},n,.4,.055,.05,_p),Up(`triangle`,e=>{e.frequency.setValueAtTime(110,n+.05),e.frequency.linearRampToValueAtTime(80,n+.45)},n+.04,.42,.03,.06,_p);break;case`smash`:Wp(n,.16,.24,180,`lowpass`),Up(`square`,70,n,.12,.1);break;case`gun`:Wp(n,.07,.22,1600,`highpass`),Wp(n,.04,.12,400,`lowpass`),Up(`square`,e=>{e.frequency.setValueAtTime(420,n),e.frequency.exponentialRampToValueAtTime(70,n+.08)},n,.08,.08);break;case`scream`:Up(`sawtooth`,e=>{e.frequency.setValueAtTime(520,n),e.frequency.exponentialRampToValueAtTime(220,n+.35)},n,.38,.08,.02),Up(`square`,e=>{e.frequency.setValueAtTime(700,n+.04),e.frequency.linearRampToValueAtTime(180,n+.4)},n+.02,.36,.05,.01),Wp(n,.2,.06,900,`bandpass`);break;case`infect`:Up(`sine`,220,n,.2,.08),Up(`sine`,330,n+.12,.25,.08),Up(`triangle`,440,n+.28,.35,.07);break;case`reclaim`:Up(`square`,180,n,.15,.08),Up(`square`,160,n+.16,.15,.07),Up(`triangle`,500,n+.3,.2,.06);break;case`upgrade`:Up(`sine`,392,n,.12,.08),Up(`sine`,523,n+.1,.14,.08),Up(`sine`,784,n+.22,.2,.08);break;case`win`:[392,494,587,784].forEach((e,t)=>Up(`triangle`,e,n+t*.16,.3,.1));break;case`lose`:Up(`sawtooth`,e=>{e.frequency.setValueAtTime(200,n),e.frequency.exponentialRampToValueAtTime(50,n+.8)},n,.8,.12,.02);break;case`ui`:Up(`sine`,640,n,.04,.04);break;case`news`:Up(`triangle`,196,n,.18,.08),Up(`triangle`,247,n+.12,.2,.08),Up(`triangle`,330,n+.26,.28,.1),Wp(n+.05,.08,.05,400,`bandpass`);break;case`static`:Wp(n,.18,.22,1800,`highpass`),Wp(n+.05,.22,.16,900,`bandpass`),Up(`sawtooth`,e=>{e.frequency.setValueAtTime(80,n),e.frequency.exponentialRampToValueAtTime(40,n+.2)},n,.2,.06);break;case`glitch`:Wp(n,.12,.26,2200,`highpass`),Up(`square`,90,n,.08,.08),Up(`square`,140,n+.06,.08,.06),Wp(n+.1,.15,.18,600,`bandpass`);break;case`spawn`:Up(`triangle`,110,n,.18,.06),Wp(n,.1,.06,200,`lowpass`);break;case`curewave`:Up(`sine`,174,n,1.2,.07,.08),Up(`sine`,220,n+.15,1.4,.06,.1),Up(`triangle`,329,n+.4,1.6,.05,.12),Up(`sine`,392,n+.7,1.8,.04,.15),Wp(n,.6,.05,700,`bandpass`);break;case`prestige`:[261,329,392,523].forEach((e,t)=>Up(`sine`,e,n+t*.12,.35,.07,.04))}}function Kp(){if(yp||!Y||Cp)return;Np(`music-start`);let e=()=>{if(!Y||yp)return;let t=Y.currentTime+.02,n=[55,49,61.7,46.2],r=n[Math.floor(Math.random()*n.length)],i=r*1.5;for(let[e,n]of[[r,0],[r,.7],[i,.4]]){let r=Y.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(e+n,t);let i=Y.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(420,t);let a=Y.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.045,t+1.6),a.gain.linearRampToValueAtTime(.03,t+5),a.gain.exponentialRampToValueAtTime(1e-4,t+9.2),r.connect(i),i.connect(a),a.connect(gp),r.start(t),r.stop(t+9.4)}Up(`triangle`,r*2,t+2.2,.8,.012,.2,gp),Cp=setTimeout(e,7800)};e()}function qp(){Cp&&(clearTimeout(Cp),Cp=null)}function Jp(e){if(!Y||yp){if(Tp){try{Tp.stop()}catch{}Tp=null}return}if(!(e>=8)){if(Tp){let e=Y.currentTime;try{Tp.g.gain.exponentialRampToValueAtTime(1e-4,e+.6)}catch{}setTimeout(()=>{if(Tp){try{Tp.o.stop(),Tp.lfo.stop()}catch{}Tp=null}},700)}return}let t=e<8?0:e<16?.016:.03;if(!Tp){let t=Y.createOscillator();t.type=`sine`;let n=Y.createOscillator();n.type=`sine`,n.frequency.value=.28;let r=Y.createGain();r.gain.value=70,n.connect(r),t.frequency.value=430,r.connect(t.frequency);let i=Y.createGain();i.gain.value=0,t.connect(i),i.connect(vp),t.start(),n.start(),Tp={o:t,lfo:n,g:i,stop(){try{t.stop(),n.stop()}catch{}}},Np(`siren-start`,{alarm:e})}Tp.g.gain.linearRampToValueAtTime(t,Y.currentTime+.5)}function Yp(e){if(!Y)return;if(!e){if(Ep){let e=Y.currentTime;try{Ep.g.gain.exponentialRampToValueAtTime(1e-4,e+.8)}catch{}setTimeout(()=>{if(Ep){try{Ep.oscs.forEach(e=>e.stop())}catch{}Ep=null}},900)}return}if(Ep)return;let t=Y.currentTime,n=Y.createGain();n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.04,t+.8),n.connect(hp),Ep={g:n,oscs:[196,247,311].map(e=>{let t=Y.createOscillator();return t.type=`sine`,t.frequency.value=e,t.connect(n),t.start(),t})},Np(`cure-bed`)}function Xp(e,t=.016){if(!e||(Dp=(e.bases||[]).reduce((t,n)=>t+(e.totalStock?e.totalStock(n):0),0),Op=e.alarm||0,!Sp||yp||!Y)||Y.state===`suspended`)return;wp-=t;let n=Math.max(0,Dp),r=n<4?7.5:Math.max(1.4,6.2-Math.log2(1+n)*.85);wp<=0&&(wp=r*(.75+Math.random()*.5),n>=2&&Gp(`groan`)),Jp(Op);let i=!!e.distribution;i&&!kp?(kp=!0,Gp(`curewave`),Yp(!0)):!i&&kp&&(kp=!1,Yp(!1)),Cp||Kp()}function Zp(e={}){e.sound===!1?Pp(!0):e.sound===!0&&Pp(!1),e.musicVol!=null&&Ip(e.musicVol),e.sfxVol!=null&&Lp(e.sfxVol),!yp&&Sp&&Kp(),yp&&(qp(),Jp(0),Yp(!1),kp=!1)}function Qp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ra;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=$p(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=$p(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function $p(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Ca(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function X(e,t,n){let r=e.index?e.toNonIndexed():e.clone();n&&r.applyMatrix4(n);let i=new K(t),a=r.attributes.position.count,o=new Float32Array(a*3);for(let e=0;e<a;e++)o[e*3]=i.r,o[e*3+1]=i.g,o[e*3+2]=i.b;r.setAttribute(`color`,new Ca(o,3));for(let e of Object.keys(r.attributes))[`position`,`color`,`normal`].includes(e)||r.deleteAttribute(e);return r.attributes.normal||r.computeVertexNormals(),r}var Z=(e=0,t=0,n=0,r=0,i=0,a=0,o=1,s=1,c=1)=>new si().compose(new W(e,t,n),new Rr().setFromEuler(new _i(r,i,a)),new W(o,s,c)),em=e=>Qp(e,!1),tm=()=>{let e=new As;e.moveTo(-.5,0),e.lineTo(.5,0),e.lineTo(0,.5),e.closePath();let t=new mc(e,{depth:1,bevelEnabled:!1});return t.translate(0,0,-.5),t.rotateY(Math.PI/2),t};function nm(){let e=`#ffffff`;return{shack:em([X(new q(1.6,1.1,1.3),`#8a7358`,Z(0,.55)),X(tm(),`#6a4a30`,Z(0,1.1,0,0,0,0,1.7,1.3,1.5))]),house:em([X(new q(2.2,1.6,1.7),`#dcc79e`,Z(0,.8)),X(tm(),e,Z(0,1.6,0,0,0,0,2.3,1.5,1.9)),X(new q(.4,.7,.12),`#5a3a28`,Z(0,.4,.86)),X(new q(.4,.4,.08),`#7fa6c9`,Z(-.55,1,.86))]),stonehouse:em([X(new q(2.3,2,1.8),`#cfc6b6`,Z(0,1)),X(tm(),e,Z(0,2,0,0,0,0,2.4,1.5,2)),X(new q(.45,.9,.12),`#4a3a2a`,Z(0,.5,.91))]),barn:em([X(new q(3.2,2.2,2),`#a44a32`,Z(0,1.1)),X(tm(),`#7a3220`,Z(0,2.2,0,0,0,0,3.3,1.8,2.2)),X(new q(.7,1.3,.1),`#5a2a18`,Z(0,.65,1.01))]),hall:em([X(new q(3,2.4,2.4),`#ece3d0`,Z(0,1.2)),X(new xc(.9,8,5,0,Math.PI*2,0,Math.PI/2),e,Z(0,2.4)),X(new Xo(.08,.08,.8,4),`#f2c14e`,Z(0,3.4)),X(new q(.6,1.4,.14),`#4a3a28`,Z(0,.7,1.21))]),shop:em([X(new q(2.4,1.8,1.8),`#d8c4a0`,Z(0,.9)),X(new q(2.55,.2,1.95),`#b5523a`,Z(0,1.9)),X(new q(1,.8,.1),`#7fa6c9`,Z(0,.9,.91))]),tower:em([X(new Xo(.7,.8,3.4,8),`#bdb3a2`,Z(0,1.7)),X(new Zo(1,1.2,8),`#4d6c9e`,Z(0,4))]),block:em([X(new q(2.4,4.2,2.2),`#d8d4cc`,Z(0,2.1)),X(new q(2.5,.16,2.3),e,Z(0,4.26)),...[1,2,3].map(e=>X(new q(2.42,.22,2.22),`#7fa6c9`,Z(0,e)))]),silo:em([X(new Xo(.7,.75,3.2,8),`#c8c0b0`,Z(0,1.6)),X(new Zo(.78,.6,8),`#a44a32`,Z(0,3.5))]),rubble:em([X(new q(1.4,.5,1.1),`#7b7268`,Z(0,.2,0,.2,.3,.1)),X(new q(.8,1.1,.6),`#8b8177`,Z(.5,.4,.25,0,.5,.2)),X(new q(.5,.35,1.3),`#6a625a`,Z(-.45,.15,-.2))]),fence:em([X(new q(2.2,.85,.12),`#a79d8e`,Z(0,.42)),X(new q(.16,1.1,.16),`#8a8070`,Z(-1,.55)),X(new q(.16,1.1,.16),`#8a8070`,Z(1,.55))]),ruinedFence:em([X(new q(1.1,.5,.12),`#7a7268`,Z(-.4,.2,0,0,0,.5)),X(new q(.16,.7,.16),`#6a6258`,Z(.8,.3,0,.3))])}}function rm(){let e=`#7a5236`;return{conifer:em([X(new Xo(.12,.18,.7,5),e,Z(0,.35)),X(new Zo(.85,1.3,7),`#2f7d4a`,Z(0,1.15)),X(new Zo(.62,1.05,7),`#3a9257`,Z(0,1.85)),X(new Zo(.38,.75,7),`#47a564`,Z(0,2.45))]),broad:em([X(new Xo(.12,.18,1,5),e,Z(0,.5)),X(new _c(.85,0),`#4caf3c`,Z(0,1.45,0,.3,.2,0)),X(new _c(.5,0),`#5fc24a`,Z(.35,1.9,.15,.1,.5,.2))]),rock:em([X(new $o(.7,0),`#9a8f86`,Z(0,.28,0,0,0,0,1,.6,1.1))]),stump:em([X(new Xo(.22,.26,.35,6),`#6a4a30`,Z(0,.18))])}}function im(){let e=new Yo(1,20);return e.rotateX(-Math.PI/2),e}function am({body:e,skin:t,s:n=1,lean:r=.12,armL:i=[.45,0,0],armR:a=[-.2,0,0],legL:o=[.25,0,0],legR:s=[-.2,0,0],torso:c=[.36,.42,.24],head:l=[.22,.2,.2],eye:u=`#3a2a2a`,hat:d,gun:f,gunUp:p,reach:m=.08}){let[h,g,_]=c,v=[X(new q(h*n,g*n,_*n),e,Z(0,.52*n,m,r)),X(new q(l[0]*n,l[1]*n,l[2]*n),t,Z(0,.84*n,m+.06,r*.8)),X(new q(.07*n,.07*n,.05*n),u,Z(.06*n,.86*n,m+.16*n)),X(new q(.07*n,.07*n,.05*n),u,Z(-.06*n,.86*n,m+.16*n)),X(new q(.11*n,.32*n,.11*n),e,Z(-.14*n,.2*n,o[2]||0,o[0],0,o[1])),X(new q(.11*n,.32*n,.11*n),e,Z(.14*n,.2*n,s[2]||0,s[0],0,s[1])),X(new q(.1*n,.34*n,.1*n),e,Z(-.24*n,.52*n,m,i[0],i[1],i[2])),X(new q(.1*n,.34*n,.1*n),e,Z(.24*n,.52*n,m,a[0],a[1],a[2]))];if(d&&v.push(X(new q(.24*n,.08*n,.22*n),d,Z(0,1.02*n,m))),f){let e=p?.62*n:.5*n,t=p?.28*n:.16*n,r=p?-.5:0;v.push(X(new q(.05*n,.05*n,.44*n),f,Z(.26*n,e,t+m,r)))}return em(v)}function om(e,t,n){return[e(t),e(n)]}function sm(){let e=(e,t)=>am({body:e,skin:`#8aa56a`,lean:.2,reach:.12,eye:`#2a1a18`,armL:t===2?[1.1,.2,.2]:[.55,.15,t?.2:-.1],armR:t===2?[1,-.2,-.2]:[.35,-.1,t?-.15:.2],legL:[t?.45:-.15,0,t?.08:-.04],legR:[t?-.2:.4,0,t?-.04:.08]}),t=(e,t)=>am({body:e,skin:`#9a6a4a`,lean:.28,reach:.14,eye:`#2a1a18`,torso:[.26,.4,.18],head:[.18,.18,.16],s:.96,armL:[.9,.1,t?.4:-.5],armR:[.9,-.1,t?-.5:.4],legL:[t?.7:-.45,0,t?.1:-.06],legR:[t?-.45:.7,0,t?-.06:.1]}),n=(e,t)=>am({body:e,skin:`#7a9a5a`,lean:.08,reach:.04,eye:`#2a2010`,s:1.45,torso:[.5,.55,.36],head:[.22,.2,.22],armL:[.35,.1,t?.25:-.15],armR:[.2,-.1,t?-.1:.2],legL:[t?.35:-.15,0,0],legR:[t?-.15:.35,0,0]}),r=(e,t,n)=>am({body:e,skin:`#e8c4a0`,lean:n?.22:.08,reach:n?.06:0,eye:`#3a2a28`,armL:n?[1,.2,.3]:[t?.5:-.4,0,0],armR:n?[1.05,-.2,-.25]:[t?-.4:.5,0,0],legL:[t?.55:-.35,0,t?.06:-.04],legR:[t?-.35:.55,0,t?-.04:.06]}),i=(e,t,n,r,i)=>am({body:e,skin:t,lean:r?.05:.1,reach:.02,eye:`#3a2a28`,hat:i,gun:`#2a2a2a`,gunUp:!!r,armL:r?[.2,.3,.4]:[n?.45:-.3,0,0],armR:r?[-.4,0,.15]:[n?-.3:.45,0,0],legL:[n?.45:-.25,0,0],legR:[n?-.25:.45,0,0]});return{shambler:[om(t=>e(`#4f7a3a`,t),0,1).concat([e(`#4f7a3a`,2)]),om(t=>e(`#5a6a2e`,t),0,1).concat([e(`#5a6a2e`,2)]),om(t=>e(`#3d5c38`,t),0,1).concat([e(`#3d5c38`,2)])],runner:[om(e=>t(`#6a3a32`,e),0,1),om(e=>t(`#5a4030`,e),0,1),om(e=>t(`#4a2824`,e),0,1)],brute:[om(e=>n(`#3a5a32`,e),0,1),om(e=>n(`#2f4a28`,e),0,1)],civilian:[om(e=>r(`#c45c4a`,e,0),0,1).concat([r(`#c45c4a`,1,1)]),om(e=>r(`#4a6a8a`,e,0),0,1).concat([r(`#4a6a8a`,1,1)]),om(e=>r(`#c4a04a`,e,0),0,1).concat([r(`#c4a04a`,1,1)])],armed:[om(e=>i(`#5a6a4a`,`#e0b890`,e,0),0,1).concat([i(`#5a6a4a`,`#e0b890`,0,1)]),om(e=>i(`#4a5440`,`#e0b890`,e,0),0,1).concat([i(`#4a5440`,`#e0b890`,0,1)])],police:[om(e=>i(`#2a3a62`,`#e0b890`,e,0,`#1a2448`),0,1).concat([i(`#2a3a62`,`#e0b890`,0,1,`#1a2448`)])],army:[om(e=>i(`#3a4a32`,`#d0b080`,e,0,`#2a3a28`),0,1).concat([i(`#3a4a32`,`#d0b080`,0,1,`#2a3a28`)])],armor:[om(e=>pm(),0,1)],screamer:[om(e=>cm(`#6a4a2a`,e),0,1),om(e=>cm(`#5a3a28`,e),0,1)],spitter:[om(e=>lm(`#4a6a32`,e),0,1),om(e=>lm(`#3a5a28`,e),0,1)],abomination:[om(e=>um(`#2f4a24`,e),0,1)],zero:[om(e=>dm(e),0,1).concat([dm(1)])],armored:[om(e=>fm(`#3a4a32`,e),0,1),om(e=>fm(`#2f3a28`,e),0,1)]}}function cm(e,t){return am({body:e,skin:`#9aaa6a`,lean:.25,reach:.16,eye:`#2a1010`,s:1.08,torso:[.32,.4,.22],head:[.26,.22,.28],armL:[1.15,.35,t?.3:-.2],armR:[1.15,-.35,t?-.2:.3],legL:[t?.4:-.2,0,0],legR:[t?-.2:.4,0,0]})}function lm(e,t){return am({body:e,skin:`#7a9a4a`,lean:.45,reach:.2,eye:`#1a2a10`,s:1,torso:[.4,.34,.3],head:[.2,.16,.22],armL:[.7,.2,.4],armR:[.7,-.2,.4],legL:[t?.35:-.15,0,0],legR:[t?-.15:.35,0,0]})}function um(e,t){return em([am({body:e,skin:`#8aaa5a`,lean:.08,reach:.06,eye:`#1a1008`,s:1.85,torso:[.58,.5,.42],head:[.28,.22,.28],armL:[.5,.2,t?.3:-.15],armR:[.35,-.15,t?-.1:.25],legL:[t?.3:-.12,0,0],legR:[t?-.12:.3,0,0]}),X(new q(.22,.7,.18),e,Z(-.7,1.1,.1,.4)),X(new q(.22,.7,.18),e,Z(.7,1.1,.1,.3))])}function dm(e){return am({body:`#3a4a28`,skin:`#c8d090`,lean:.1,reach:.08,eye:`#2a1808`,s:1.12,hat:`#1a1a14`,armL:[.55,.1,e?.35:-.2],armR:[.4,-.1,e?-.2:.35],legL:[e?.5:-.25,0,0],legR:[e?-.25:.5,0,0]})}function fm(e,t){return em([am({body:e,skin:`#8aaa6a`,lean:.06,reach:.04,eye:`#1a1810`,s:1.18,torso:[.42,.44,.32],head:[.2,.18,.2],hat:`#2a2a22`,armL:[.35,.1,t?.2:-.12],armR:[.25,-.1,t?-.1:.2],legL:[t?.35:-.15,0,0],legR:[t?-.15:.35,0,0]}),X(new q(.5,.22,.4),`#5a5a48`,Z(0,.95,.05)),X(new q(.18,.4,.22),`#4a4a3a`,Z(-.38,.85,0)),X(new q(.18,.4,.22),`#4a4a3a`,Z(.38,.85,0))])}function pm(){return em([X(new q(1.9,.7,1.15),`#4a5a3a`,Z(0,.55)),X(new q(.9,.4,.95),`#3a4a32`,Z(-.2,1.05)),X(new q(.35,.18,.55),`#2a2a22`,Z(.7,.85,0)),X(new q(.28,.28,.14),`#222`,Z(.55,.28,.55)),X(new q(.28,.28,.14),`#222`,Z(-.55,.28,.55)),X(new q(.28,.28,.14),`#222`,Z(.55,.28,-.55)),X(new q(.28,.28,.14),`#222`,Z(-.55,.28,-.55)),X(new q(.12,.12,.8),`#2a2a22`,Z(.85,.85,.3))])}function mm(){let e=(e,t)=>em([X(new q(1.7,.45,.9),e,Z(0,.38)),X(new q(.9,.38,.84),t,Z(-.1,.72)),X(new q(.22,.22,.12),`#222`,Z(.55,.22,.46)),X(new q(.22,.22,.12),`#222`,Z(-.5,.22,.46)),X(new q(.22,.22,.12),`#222`,Z(.55,.22,-.46)),X(new q(.22,.22,.12),`#222`,Z(-.5,.22,-.46))]),t=em([X(new Xo(.06,.08,2.4,5),`#4a4a4a`,Z(0,1.2)),X(new q(.28,.12,.28),`#f2e0a0`,Z(0,2.45))]),n=em([X(new q(2.4,1.15,1.15),`#d8d4c8`,Z(0,.7)),X(new q(.7,.55,1.05),`#8ab0d0`,Z(.7,1.15)),X(new q(.5,.15,.5),`#889`,Z(-.3,1.4)),X(new Xo(.18,.18,.08,6),`#889`,Z(-.3,1.52,0,0,0,1.2))]),r=em([am({body:`#cfc8b8`,skin:`#e0b890`,lean:.05,hat:`#2a2a2a`,armL:[.2,0,.6],armR:[-.15,0,0],legL:[.1,0,0],legR:[-.05,0,0]}),X(new q(.08,.18,.08),`#222`,Z(.28,.7,.22))]),i=em([X(new q(.7,.55,.7),`#8a6a40`,Z(0,.28))]),a=em([X(new Xo(.12,.14,.5,6),`#c43a2a`,Z(0,.25)),X(new q(.28,.08,.08),`#c43a2a`,Z(0,.38))]),o=em([X(new q(.08,1.4,.08),`#6a6a6a`,Z(0,.7)),X(new q(.9,.4,.06),`#2a5a9a`,Z(0,1.4))]),s=em([X(new q(2.6,1.2,1.2),`#c4122f`,Z(0,.75)),X(new q(.8,.5,1.1),`#88b4d8`,Z(.7,1.2)),X(new q(.16,.9,.16),`#333`,Z(-.5,1.6)),X(new q(.7,.08,.5),`#ddd`,Z(-.5,2.05))]);return{jet:em([X(new q(.28,.12,1.4),`#8a9298`,Z(0,0,0)),X(new q(1.3,.04,.28),`#6a7278`,Z(0,0,.1)),X(new q(.06,.22,.22),`#c4122f`,Z(0,.12,-.55))]),carRed:e(`#a43a2a`,`#88a8c4`),carBlue:e(`#2a4a8a`,`#c8d4e0`),carTan:e(`#b08a4a`,`#d8e0e8`),van:n,lamp:t,crate:i,hydrant:a,sign:o,newsVan:s,reporter:r,bleacher:em([X(new q(3.6,.18,1.4),`#6a6a68`,Z(0,.2)),X(new q(3.6,.18,1.1),`#7a7a76`,Z(0,.5,-.2)),X(new q(3.6,.18,.8),`#8a8a86`,Z(0,.8,-.4))]),truck:em([X(new q(2.6,1.1,1.2),`#6a6e52`,Z(0,.7)),X(new q(.9,.7,1.15),`#88a0b0`,Z(1,1.15)),X(new q(.28,.28,.14),`#222`,Z(.8,.28,.6)),X(new q(.28,.28,.14),`#222`,Z(-.8,.28,.6))]),ship:em([X(new q(3.4,.55,1.1),`#5a6a78`,Z(0,.4)),X(new q(1.6,.7,.8),`#d8d4c8`,Z(-.3,.95)),X(new q(.12,1.1,.12),`#ccc`,Z(.6,1.3))]),plane:em([X(new q(.45,.35,2.8),`#c8c8c4`,Z(0,.4)),X(new q(2.4,.08,.4),`#b0b0ac`,Z(0,.4,.1)),X(new q(.12,.4,.5),`#aaa`,Z(0,.7,-1.1))]),banner:em([X(new q(.08,1.8,.08),`#5a4a3a`,Z(0,.9)),X(new q(1.1,.7,.04),`#c43a2a`,Z(.55,1.4))]),hangar:em([X(new q(3.2,1.6,2.2),`#6a7068`,Z(0,.8)),X(new q(1.2,1.1,.08),`#3a3a32`,Z(0,.55,1.12))])}}function hm(){let e=new Zo(.28,.7,5);e.translate(0,.35,0);let t=new _c(.45,0),n=new Yo(.35,7);n.rotateX(-Math.PI/2);let r=new q(.04,.04,1);r.translate(0,0,.5);let i=new Yo(.18,6),a=new Yo(1,10);return a.rotateX(-Math.PI/2),{flame:e,smoke:t,blood:n,tracer:r,muzzle:i,glow:a}}var gm=()=>new Mc({vertexColors:!0,flatShading:!0,roughness:.86}),_m=class{constructor(e,t,n,r){this.mesh=new xo(t,n,r),this.mesh.instanceMatrix.setUsage(Zn),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,e.add(this.mesh),this.cap=r,this.items=[],this._m=new si,this._q=new Rr,this._p=new W,this._s=new W,this._e=new _i}spawn(e){return this.items.length>=this.cap&&this.items.shift(),this.items.push(e),e}tick(e){let t=[],n=this._m,r=this._q,i=this._p,a=this._s,o=this._e,s=0;for(let c of this.items){if(c.t=(c.t||0)+e,c.t>=c.life)continue;let l=c.t/c.life;c.x+=(c.vx||0)*e,c.y+=(c.vy||0)*e,c.z+=(c.vz||0)*e,c.ay&&(c.vy=(c.vy||0)+c.ay*e);let u=(c.s0||1)*(1+(c.sgrow||0)*l);i.set(c.x,c.y,c.z),o.set(c.rx||0,c.ry||0,c.rz||0),r.setFromEuler(o),a.set(c.sx||u,c.sy||u,(c.sz||u)*(c.szMul||1)),n.compose(i,r,a),s<this.cap&&this.mesh.setMatrixAt(s++,n),t.push(c)}this.items=t,this.mesh.count=s,this.mesh.instanceMatrix.needsUpdate=!0}},vm=class{constructor(){this.el=document.createElement(`canvas`),this.renderer=new $f({canvas:this.el,antialias:!1,alpha:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!0}),this.renderer.toneMapping=0,this.renderer.setClearColor(`#102030`,1),this.views=[],this.frame=0,this.dprCap=Math.min(window.devicePixelRatio||1,1.5),this.quality=2}add(e){this.views.includes(e)||this.views.push(e)}remove(e){this.views=this.views.filter(t=>t!==e)}adapt(e){this.lockQuality||(e<26&&this.dprCap>1?this.dprCap=1:e>50&&(this.dprCap=Math.min(1.5,window.devicePixelRatio||1)),this.quality=e<24?0:e<38?1:2)}setQualityMode(e){e===`low`?(this.lockQuality=!0,this.quality=0,this.dprCap=1):e===`med`?(this.lockQuality=!0,this.quality=1):e===`high`?(this.lockQuality=!0,this.quality=2):this.lockQuality=!1}update(e){this.frame++;let t=this.views.filter(e=>!e.minimized&&e.canvas),n=t.find(e=>e.full)||t[0];for(let r=0;r<t.length;r++){let i=t[r],a=i===n;if(!a&&(this.frame+r)%3!=0){i.tick(e,!1);continue}i.tick(e,!0);let o=Math.min(this.dprCap,a?i.mode===`leaked`?1.2:1.5:1),s=Math.max(4,i.width|0),c=Math.max(4,i.height|0);this.renderer.setPixelRatio(o),this.renderer.setSize(s,c,!1),this.renderer.render(i.scene,i.camera);let l=i.canvas,u=Math.max(1,Math.round(s*o)),d=Math.max(1,Math.round(c*o));l.width!==u&&(l.width=u),l.height!==d&&(l.height=d);let f=l.getContext(`2d`);f&&(f.globalCompositeOperation=`copy`,f.drawImage(this.el,0,0,l.width,l.height))}}},ym=null;function bm(){return ym||(ym=new vm)}var xm=class{constructor(e){this.canvas=e,this.scene=new Wi,this.scene.background=new K(`#6aa0c8`),this.scene.fog=new Ui(6987976,28,70),this.camera=new pl(42,1,.2,80),this.mode=`news`,this.shake=0,this.time=0,this.battle=null,this.minimized=!1,this.full=!1,this.width=320,this.height=180,this.shot=`heli`,this.shotT=0,this.shotDur=5.5,this.reporterState=`stand`,this.lockFollow=!1,this._v=new W,this._m=new si,this._q=new Rr,this._s=new W,this._e=new _i,this._camTarget=new W,this._camPos=new W,this._sfxGun=0,this._sfxScream=0,this._seenFx=0,this._setup(),bm().add(this)}_setup(){this.sun=new vl(`#fff1da`,2.2),this.sun.position.set(-20,30,16),this.scene.add(this.sun),this.scene.add(new vl(`#9fc4ff`,.5).translateX(20).translateY(10)),this.scene.add(new yl(`#c9dcff`,.75)),this.fireLight=new hl(`#ff8844`,0,18),this.fireLight.position.set(18,3,14),this.scene.add(this.fireLight),this.ground=new co(new yc(80,60,16,12),new Mc({color:`#5a9a3e`,flatShading:!0,roughness:.95})),this.ground.rotation.x=-Math.PI/2,this.scene.add(this.ground),this.roadGroup=new Fi,this.scene.add(this.roadGroup),this.bldgGroup=new Fi,this.scene.add(this.bldgGroup),this.bldgGeos=nm(),this.propGeos=mm(),this.treeGeos=rm(),this.propGroup=new Fi,this.scene.add(this.propGroup),this.kits=sm(),this.unitCaps={shambler:300,runner:120,brute:60,screamer:40,spitter:40,abomination:12,armored:40,zero:4,civilian:80,armed:80,police:40,army:40,armor:16},this.unitMeshes={};for(let e of Object.keys(this.unitCaps)){let t=this.kits[e]||this.kits.armed;this.unitMeshes[e]=t.map(t=>t.map(t=>{let n=new xo(t,gm(),this.unitCaps[e]);return n.instanceMatrix.setUsage(Zn),n.count=0,n.frustumCulled=!1,this.scene.add(n),n}))}let e=im();this.shadows=new xo(e,new Xa({color:`#000`,transparent:!0,opacity:.28,depthWrite:!1}),500),this.shadows.instanceMatrix.setUsage(Zn),this.shadows.count=0,this.shadows.frustumCulled=!1,this.scene.add(this.shadows),this.wall=new co(new q(.35,1.3,28),new Mc({color:`#a79d8e`,flatShading:!0,roughness:.9})),this.wall.position.set(10,.65,14),this.scene.add(this.wall);let t=hm();this.flames=new _m(this.scene,t.flame,new Xa({color:`#ff8a22`,transparent:!0,opacity:.85,depthWrite:!1,side:2}),90),this.smoke=new _m(this.scene,t.smoke,new Xa({color:`#6a6458`,transparent:!0,opacity:.45,depthWrite:!1}),120),this.blood=new _m(this.scene,t.blood,new Xa({color:`#6a1818`,transparent:!0,opacity:.7,depthWrite:!1}),80),this.tracers=new _m(this.scene,t.tracer,new Xa({color:`#ffe7a0`,transparent:!0,opacity:.9,depthWrite:!1}),40),this.acidBolts=new _m(this.scene,t.tracer,new Xa({color:`#7dff4a`,transparent:!0,opacity:.95,depthWrite:!1}),32),this.muzzles=new _m(this.scene,t.muzzle,new Xa({color:`#fff3c0`,transparent:!0,opacity:.95,depthWrite:!1,side:2}),24),this.reporter=new co(this.propGeos.reporter,gm()),this.reporter.visible=!1,this.scene.add(this.reporter),this._repPos={x:8,z:22,rot:0}}attach(e){this.battle=e,this.mode=`news`,this.shake=0,this.time=0,this.shot=`heli`,this.shotT=0,this.shotDur=this._featureUnit()?2.2:5.2,this._didFeatureOpen=!1,this.reporterState=`stand`,this.lockFollow=!1,this._seenFx=0,this._rebuildBuildings(),this._dressTown(),this._follow={x:e&&e.w*.35||12,z:e&&e.d/2||14},this._repPos={x:(e.w||36)*.28,z:(e.d||28)*.82,rot:0},this.scene.background.set(`#6aa0c8`),this.scene.fog&&this.scene.fog.color.set(`#6aa0c8`),this.camera.fov=42,this.camera.updateProjectionMatrix();for(let e of[this.flames,this.smoke,this.blood,this.tracers,this.acidBolts,this.muzzles])e.items=[]}detach(){this.battle=null}dispose(){this.battle=null,bm().remove(this)}setMode(e){this.mode!==e&&(this.mode=e,e===`leaked`?(this.shake=1,this.scene.background.set(`#5a6a4a`),this.scene.fog.color.set(`#5a6a4a`),this.camera.fov=58,this.reporterState===`stand`&&(this.reporterState=`flee`)):(this.shake=.08,this.scene.background.set(`#6aa0c8`),this.scene.fog.color.set(`#6aa0c8`),this.camera.fov=42),this.camera.updateProjectionMatrix())}setShot(e){if(e){if(this.shot=e,this.shotT=0,this.shotDur=e===`fire`?8:6,e===`fire`){this.lockFollow=!0;let e=this.battle&&this.battle.buildings&&this.battle.buildings.find(e=>e.collapsed||(e.fire||0)>.15);e&&(this._follow.x=e.x,this._follow.z=e.z)}else if(e===`special`||e===`hero`){let e=this._featureUnit();e&&this._cutToSpecial(e)}else this.shot!==`fire`&&(this.lockFollow=!1)}}_rebuildBuildings(){for(;this.bldgGroup.children.length;){let e=this.bldgGroup.children[0];this.bldgGroup.remove(e),e.material?.dispose?.()}if(this.bldgMeshes=[],this.battle)for(let e of this.battle.buildings){let t=new co(this.bldgGeos[e.kind]||this.propGeos[e.kind]||this.bldgGeos.house,new Mc({vertexColors:!0,flatShading:!0,roughness:.88}));t.position.set(e.x,0,e.z),t.rotation.y=e.rot,t.scale.setScalar(e.scale||1),e.tall&&(t.scale.y*=1.35),t.userData.baseY=t.scale.y,t.userData.src=e,this.bldgGroup.add(t),this.bldgMeshes.push(t)}}_dressTown(){for(;this.propGroup.children.length;){let e=this.propGroup.children[0];this.propGroup.remove(e)}for(;this.roadGroup.children.length;){let e=this.roadGroup.children[0];this.roadGroup.remove(e),e.material?.dispose?.()}let e=this.battle;if(!e)return;let t=e.tier||`city`,n=t===`megacity`?1.4:t===`metropolis`?1.2:t===`largecity`?1.05:t===`hamlet`?.45:t===`town`?.7:.9,r=e.w||36,i=e.d||28,a=new Mc({color:n>.9?`#4a4a48`:`#6a5840`,flatShading:!0,roughness:1}),o=new co(new q(r+20,.05,n>.8?3.6:2.8),a);if(o.position.set(r*.45,.03,i*.5),this.roadGroup.add(o),n>.6){let e=new co(new q(2.6,.05,i+8),a);e.position.set(r*.55,.025,i*.5),this.roadGroup.add(e)}if(n>1){let e=new co(new q(r*.6,.05,2.2),a);e.position.set(r*.62,.02,i*.28),this.roadGroup.add(e)}let s=t=>{let n=Math.sin((e.seed+t)*12.9898)*43758.5453;return n-Math.floor(n)},c=(e,t,n,r,i=1)=>{let a=new co(e,gm());return a.position.set(t,0,n),a.rotation.y=r,a.scale.setScalar(i),this.propGroup.add(a),a},l=[this.propGeos.carRed,this.propGeos.carBlue,this.propGeos.carTan,this.propGeos.van],u=Math.round((t===`hamlet`?1:t===`town`?3:5)*n);for(let e=0;e<u;e++){let t=4+s(e)*(r-8),n=(s(e+9)<.5?-1:1)*(1.8+s(e+3));c(l[e%l.length],t,i*.5+n,s(e+2)<.5?0:Math.PI,.85+s(e)*.2)}let d=Math.round((t===`hamlet`?2:6)*n);for(let e=0;e<d;e++)c(this.propGeos.lamp,5+r/Math.max(2,d)*e,i*.5+(e%2?2.2:-2.2),0,1);let f=Math.round((t===`megacity`?4:8)*(1.2-n*.4));for(let e=0;e<f;e++)c(s(e+40)<.5?this.treeGeos.conifer:this.treeGeos.broad,2+s(e+41)*8,2+s(e+42)*(i-4),s(e+43)*6,.7+s(e+44)*.5);let p=n<.8?4:2;for(let e=0;e<p;e++)c(this.bldgGeos.fence,12+s(e+60)*10,3+s(e+61)*(i-6),Math.PI/2,.9);if(n>.7){c(this.propGeos.newsVan,r*.22,i*.78,.4,1);for(let e=0;e<3;e++)c(this.propGeos.crate,r*.58+e*.9,i*.36,.2*e,1);c(this.propGeos.sign,r*.4,i*.5+3.2,0,1),c(this.propGeos.hydrant,r*.5,i*.5+2,0,1)}}resize(e,t){this.width=Math.max(4,e|0),this.height=Math.max(4,t|0),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}_syncBuildings(e){if(!this.bldgMeshes)return;let t=0,n=0,r=bm().quality;for(let e of this.bldgMeshes){let i=e.userData.src;if(!i)continue;if(i.collapsed)n++,e.userData.kind!==`rubble`&&(e.geometry=this.bldgGeos.rubble,e.userData.kind=`rubble`,e.rotation.z=i.x*.2%.3-.15,e.scale.y=(e.userData.baseY||1)*.55,this._cutToFire(i));else if((i.fire||0)>.2){let t=Math.min(.25,(1-i.hp/Math.max(1,i.maxHp||30))*.3);e.rotation.z=t,e.scale.y=(e.userData.baseY||1)*(.75+.25*(i.hp/Math.max(1,i.maxHp||30)))}let a=i.fire||0;a>.15&&(t++,!i._cutFire&&a>.35&&(i._cutFire=!0,this._cutToFire(i)),Math.random()<(r===2?.7:r===1?.4:.22)*Math.min(1,a)&&(this.flames.spawn({x:i.x+(Math.random()-.5)*1.2,y:.4+Math.random()*1.6,z:i.z+(Math.random()-.5),vy:1.4+Math.random(),vx:(Math.random()-.5)*.3,vz:(Math.random()-.5)*.3,life:.45+Math.random()*.35,t:0,s0:1.1+Math.random()*.9,sgrow:-.3,ry:Math.random()*6}),this.smoke.spawn({x:i.x+(Math.random()-.5),y:1.2,z:i.z,vy:1.1,vx:(Math.random()-.5)*.4,vz:(Math.random()-.5)*.4,life:1.2+Math.random(),t:0,s0:.8,sgrow:1.6})))}this.fireCount=t,this.collapsedCount=n,this.fireLight.intensity=Math.min(4,t*.7)}_eatFx(e){let t=this.battle;if(!t||!t.fx)return;let n=bm().quality;this._sfxGun=Math.max(0,this._sfxGun-e),this._sfxScream=Math.max(0,this._sfxScream-e);for(let e of t.fx)if(!e._vis){if(e._vis=!0,e.k===`gun`){let t=(e.tx??e.x+2)-e.x,n=(e.tz??e.z)-e.z,r=Math.max(.4,Math.hypot(t,n)),i=Math.atan2(t,n);this.tracers.spawn({x:e.x,y:.7,z:e.z,life:.08,t:0,s0:1,sx:1,sy:1,sz:r,ry:i}),this.muzzles.spawn({x:e.x,y:.72,z:e.z,life:.07,t:0,s0:.8,ry:0,rx:-.4}),this._sfxGun<=0&&(Gp(`gun`),this._sfxGun=.09)}else if(e.k===`bite`||e.k===`convert`)this.blood.spawn({x:e.x+(Math.random()-.5)*.3,y:.03,z:e.z+(Math.random()-.5)*.3,life:14,t:0,s0:.45+Math.random()*.5,ry:Math.random()*6}),e.k===`convert`&&this._sfxScream<=0?(Gp(`scream`),this._sfxScream=.5,lt(`bite`)):e.k===`bite`&&(Math.random()<.3&&Gp(`bite`),lt(`bite`));else if(e.k===`acid`){let t=(e.tx??e.x+2)-e.x,n=(e.tz??e.z)-e.z,r=Math.max(.4,Math.hypot(t,n)),i=Math.atan2(t,n);this.acidBolts.spawn({x:e.x,y:.6,z:e.z,life:.22,t:0,s0:1,sx:1.4,sy:1.4,sz:r,ry:i})}else if(e.k===`smash`||e.k===`collapse`||e.k===`dust`){for(let t=0;t<(n?3:1);t++)this.smoke.spawn({x:e.x+(Math.random()-.5),y:.4,z:e.z,vy:.8,life:.7,t:0,s0:.7,sgrow:1.2});(e.k===`smash`||e.k===`collapse`)&&Gp(`smash`)}}}_animPose(e){let t=e.state===`move`||e.state===`flee`||e.state===`chase`||Math.hypot(e.vx||0,e.vz||0)>.4,n=e.state===`shoot`||e.state===`aim`||e.side===`human`&&e.type!==`civilian`&&e.cd>.05&&e.cd<.45,r=this.unitMeshes[e.type];if(!r)return null;let i=r[Math.abs(e.id|0)%r.length];if(n&&i.length>2)return i[i.length-1];if(e.state===`flee`&&e.type===`civilian`&&i.length>2||e.type===`shambler`&&!t&&i.length>2&&(this.time+e.id)%5<.4)return i[2];let a=e.type===`runner`?10:e.type===`brute`?5:7,o=t?this.time*a+e.id:e.id;return i[+(Math.sin(o)>0)%i.length]}_tickReporter(e,t){let n=this.battle;if(!n)return;(t>.1||this.mode===`leaked`||n.result===`win`)&&(this.reporterState=`flee`);let r=this._repPos;if(this.reporterState===`flee`)r.x-=3.2*e,r.z+=2.4*e,r.rot=Math.atan2(-3.2,2.4);else{let e=this._follow.x,t=this._follow.z;r.rot=Math.atan2(e-r.x,t-r.z)}this.reporter.visible=this.mode===`news`||this.shot===`reporter`,this.reporter.position.set(r.x,0,r.z),this.reporter.rotation.y=r.rot;let i=this.reporterState===`flee`?Math.abs(Math.sin(this.time*10))*.08:0;this.reporter.position.y=i}_featureUnit(){let e=this.battle;if(!e||!e.units)return null;let t=(t,n)=>e.units.find(e=>e.type===t&&e.hp>0&&(!n||n(e))),n=t(`zero`);if(n)return{kind:`hero`,u:n};let r=t(`abomination`);if(r)return{kind:`special`,u:r};let i=t(`spitter`,e=>e.state===`shoot`||e.state===`fight`)||t(`spitter`);if(i)return{kind:`special`,u:i};let a=t(`screamer`);if(a)return{kind:`special`,u:a};let o=t(`armored`);return o?{kind:`special`,u:o}:null}_cutToSpecial(e){e&&e.u&&(this.shot=e.kind===`hero`?`hero`:`special`,this.shotT=0,this.shotDur=3.8,this.lockFollow=!0,this._follow.x=e.u.x,this._follow.z=e.u.z)}_cutToFire(e){if(this.mode===`leaked`||this.shot===`fire`&&this.shotT<2.2)return;if((this.shot===`special`||this.shot===`hero`)&&this.shotT<3.4){this._queuedFire=e;return}let t=this._featureUnit();t&&this.shot!==`fire`&&this.shot!==`special`&&this.shot!==`hero`?(this._queuedFire=e,this._cutToSpecial(t)):(this.shot=`fire`,this.shotT=0,this.shotDur=3.4,this.lockFollow=!0,this._follow.x=e.x,this._follow.z=e.z)}_cutCamera(e){if(this.mode!==`leaked`){if(this.shotT+=e,(this.shot===`special`||this.shot===`hero`)&&this._featureUnit()){let t=this._featureUnit().u;this._follow.x+=(t.x-this._follow.x)*Math.min(1,e*3),this._follow.z+=(t.z-this._follow.z)*Math.min(1,e*3)}if(this.shotT>=this.shotDur){if((this.shot===`fire`||this.shot===`special`||this.shot===`hero`)&&(this.lockFollow=!1),this._queuedFire){let e=this._queuedFire;this._queuedFire=null,this._cutToFire(e);return}let e=this._featureUnit();if(e&&this.shot!==`special`&&this.shot!==`hero`&&(this.shot===`heli`||!this._didFeatureOpen||Math.random()<.72)){this._didFeatureOpen=!0,this._cutToSpecial(e);return}let t=[`heli`,`street`,`reporter`],n=t[(t.indexOf(this.shot)+1)%t.length]||`heli`;this.shot=n,this.shotT=0,this.shotDur=5+Math.random()*2}}}tick(e,t){this.time+=e;let n=this.battle;if(!n)return;this.wall&&(this.wall.visible=!n.invert&&n.wallHp>0,this.wall.scale.y=Math.max(.15,n.wallHp/Math.max(1,n.wallMax)),this.wall.position.y=.65*this.wall.scale.y),this._eatFx(e),this._syncBuildings(e),this.flames.tick(e),this.smoke.tick(e),this.blood.tick(e),this.tracers.tick(e),this.acidBolts&&this.acidBolts.tick(e),this.muzzles.tick(e);let r={},i=this._m,a=this._q,o=this._e,s=this._v,c=this._s,l=0,u=0,f=0,p=0,m=new Set;for(let e of n.units){if(!this.unitMeshes[e.type])continue;let t=this._animPose(e);if(!t)continue;let n=t.uuid,h=r[n]=r[n]||0;if(r[n]++,m.add(t),h>=this.unitCaps[e.type])continue;let g=e.type===`shambler`?.035:.05,_=e.state===`move`||e.state===`flee`||Math.hypot(e.vx||0,e.vz||0)>.3?Math.abs(Math.sin(this.time*(e.type===`shambler`?6:8)+e.id))*g:0,v=e.type===`shambler`?.12:0;if(s.set(e.x,_,e.z),o.set(v,e.rot,0),a.setFromEuler(o),c.set(1,1,1),i.compose(s,a,c),t.setMatrixAt(h,i),l<500){s.set(e.x,.04,e.z),a.identity();let t=(d[e.type]?.radius||.4)*1.6;c.set(t,1,t),i.compose(s,a,c),this.shadows.setMatrixAt(l++,i)}(e.side===`zombie`||this.mode===`news`&&e.side===`human`&&e.type!==`civilian`)&&(u+=e.x,f+=e.z,p++)}for(let e of Object.keys(this.unitMeshes))for(let t of this.unitMeshes[e])for(let e of t)e.count=m.has(e)&&r[e.uuid]||0,e.instanceMatrix.needsUpdate=!0;this.shadows.count=l,this.shadows.instanceMatrix.needsUpdate=!0,p&&!this.lockFollow&&(this._follow.x+=(u/p-this._follow.x)*Math.min(1,e*2.2),this._follow.z+=(f/p-this._follow.z)*Math.min(1,e*2.2));let h=n.swing();if(this._tickReporter(e,h),this._cutCamera(e),!t)return;let g=n.tier||`city`,_=g===`megacity`?1.9:g===`metropolis`?1.5:g===`largecity`?1.2:g===`hamlet`?.78:g===`town`?.9:1,v=this._follow.x,y=this._follow.z;if(this.mode===`leaked`){let e=this.time;this._camPos.set(v+Math.sin(e*1.3)*.8-2.5*_,(3.6+Math.sin(e*2.2)*.25)*_,y+6.5*_+Math.cos(e*.9)*.9),this._camTarget.set(v+Math.sin(e*3)*.3,.6,y),this.shake=.55+Math.min(.5,Math.max(0,h)*.4)}else if(this.shot===`fire`)this._camPos.set(v-2.2*_,7.5*_,y+9*_),this._camTarget.set(v,1.2,y),this.shake=.12;else if(this.shot===`special`||this.shot===`hero`)this._camPos.set(v-1.4*_,4.6*_,y+6.2*_),this._camTarget.set(v,1.3,y),this.shake=this.shot===`hero`?.1:.08;else if(this.shot===`street`)this._camPos.set(v-3.2*_,2.1*_,y+5.4*_),this._camTarget.set(v+1.2,.7,y),this.shake=.08;else if(this.shot===`reporter`){let e=this._repPos;this._camPos.set(e.x-1.6,1.7,e.z+2.2),this._camTarget.set(v,.9,y),this.shake=this.reporterState===`flee`?.28:.1}else{let e=this.time*.12;this._camPos.set(v+Math.cos(e)*2.2*_,18*_,y+20*_+Math.sin(e*.7)*1.2),this._camTarget.set(v,.8*_,y),this.shake=.04}let b=this.shake;this._camPos.x+=(Math.random()-.5)*b*.35,this._camPos.y+=(Math.random()-.5)*b*.2,this._camPos.z+=(Math.random()-.5)*b*.35,this.camera.position.copy(this._camPos),this.camera.lookAt(this._camTarget)}visuals(){return{shot:this.shot,mode:this.mode,reporter:this.reporterState,fire:this.fireCount||0,collapsed:this.collapsedCount||0,particles:{flame:this.flames.items.length,smoke:this.smoke.items.length,blood:this.blood.items.length,tracer:this.tracers.items.length,acid:this.acidBolts?this.acidBolts.items.length:0,muzzle:this.muzzles.items.length},props:this.propGroup?this.propGroup.children.length:0,quality:bm().quality}}update(e){this.tick(e,!0)}},Sm={skull:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="6"/><path d="M9 10h.01M15 10h.01M9 14c1 1.4 5 1.4 6 0M8 20h8"/></svg>`,bio:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.9 6.5l3.5 2M15.6 15.5l3.5 2M4.9 17.5l3.5-2M15.6 8.5l3.5-2"/></svg>`,town:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10l4-3 4 3v10M12 20V8l4-3 4 3v12M4 20h16"/></svg>`,pause:`<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>`,play:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l12 7-12 7V5z"/></svg>`,mute:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10v4h4l5 4V6L8 10H4zM19 9l-6 6M13 9l6 6"/></svg>`,sound:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10v4h4l5 4V6L8 10H4zM16 9c1.2 1 1.8 2.4 1.8 3s-.6 2-1.8 3"/></svg>`,shop:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8h16l-1.5 11h-13L4 8zM8 8V6a4 4 0 018 0v2"/></svg>`,help:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 114 2c-.8.6-1.5 1.2-1.5 2.5M12 17h.01"/></svg>`,close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>`,gear:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.2a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.2a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.2a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 110 4h-.2a1.7 1.7 0 00-1.4 1z"/></svg>`};function Cm(e=new Date){let t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}var wm=class{constructor(e){this.app=e,this.root=document.getElementById(`ui`),this.labels=document.getElementById(`labels`),this.seen=new Set,this.shopOpen=!1,this.shopTab=`host`,this.pausedMenu=!1,this.coach=!1,this.raidCity=null,this.raidEvent=null,this.settingsOpen=!1,this.statsOpen=!1,this.tutorStep=null,this.tutorEl=null,this.baseType=`graveyard`,this.pickReady=!1,this.pips=new Map,this.activeFull=null,this._lab={},this._tmp={x:0,y:0,visible:!1},this.build()}build(){this.root.innerHTML=`
      <div class="hud">
        <div class="hud-top">
          <button class="icon-btn" id="btn-pause" title="Pause">${Sm.pause}</button>
          <div class="hud-title">
            <div class="epithet">${e}</div>
            <div class="yearline" id="statusline">The world turns</div>
          </div>
          <button class="icon-btn" id="btn-help">${Sm.help}</button>
          <button class="icon-btn" id="btn-shop">${Sm.shop}</button>
          <button class="icon-btn" id="btn-settings" title="Settings">${Sm.gear}</button>
          <button class="icon-btn" id="btn-mute">${Sm.sound}</button>
        </div>
        <div class="hud-stats">
          <div class="chip horde" id="chip-horde">${Sm.skull}<span>0</span></div>
          <div class="chip bio" id="chip-bio">${Sm.bio}<span>0</span></div>
          <div class="chip towns" id="chip-towns">${Sm.town}<span>0</span></div>
          <div class="speed" id="speeds">${C.map(e=>`<button data-sp="${e}" class="${e===1?`on`:``}">${e}×</button>`).join(``)}</div>
        </div>
        <div class="hud-escalation">
          <div class="chip alarm" id="chip-alarm"><span class="alm-lab">AWARE</span><span class="alm-name">Unknown illness</span><span class="alm-n"></span></div>
          <div class="curebar" id="curebar" hidden>
            <span class="cure-lab">CURE</span>
            <div class="cure-track"><i id="cure-fill"></i></div>
            <span id="cure-n">0%</span>
          </div>
        </div>
      </div>
      <div id="toasts"></div>
      <div id="pips"></div>
      <div class="hint" id="hint" hidden></div>
      <div class="tutor" id="tutor" hidden></div>
      <div class="curewave-banner" id="curewave" hidden></div>
    `,this.toasts=this.root.querySelector(`#toasts`),this.pipsEl=this.root.querySelector(`#pips`),this.hint=this.root.querySelector(`#hint`),this.statusline=this.root.querySelector(`#statusline`),this.root.querySelector(`#btn-pause`).addEventListener(`click`,()=>this.togglePause()),this.root.querySelector(`#btn-help`).addEventListener(`click`,()=>this.showCoach()),this.root.querySelector(`#btn-shop`).addEventListener(`click`,()=>this.toggleShop()),this.root.querySelector(`#btn-settings`).addEventListener(`click`,()=>this.toggleSettings()),this.tutorEl=this.root.querySelector(`#tutor`),this.applySettings(),this.root.querySelector(`#btn-mute`).addEventListener(`click`,()=>{rt({sound:Fp()}),this.applySettings(),Fp()||Gp(`ui`)}),this.root.querySelector(`#speeds`).addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&(this.app.game.speed=+t.dataset.sp,Gp(`ui`),this.syncSpeed())})}syncSpeed(){for(let e of this.root.querySelectorAll(`#speeds button`))e.classList.toggle(`on`,+e.dataset.sp===this.app.game.speed)}hintFlash(e){this.hint.hidden=!1,this.hint.innerHTML=e,clearTimeout(this._ht),this._ht=setTimeout(()=>{this.hint.hidden=!0},3200)}toast(e,t){let n=document.createElement(`div`);for(n.className=`toast `+(e||``),n.textContent=t,this.toasts.appendChild(n);this.toasts.children.length>3;)this.toasts.firstElementChild.remove();setTimeout(()=>{n.classList.add(`out`),setTimeout(()=>n.remove(),400)},3200),e===`life`&&/fallen|belongs|hold/.test(t)?Gp(`infect`):e===`warn`&&/reclaim|repel|burned/.test(t)&&Gp(`reclaim`)}drainEvents(){for(let e of this.app.game.events)this.seen.has(e.id)||(this.seen.add(e.id),this.toast(e.kind,e.text))}togglePause(){if(this.app.game.outcome)return this.renderMenus();this.pausedMenu=!this.pausedMenu,this.app.game.paused=this.pausedMenu,Gp(`ui`),this.renderMenus()}toggleShop(){this.shopOpen=!this.shopOpen,this.pausedMenu=!1,this.settingsOpen=!1,this.statsOpen=!1,Gp(`ui`),this.shopOpen&&this._tutorMaybe(`shop`),this.renderMenus()}toggleSettings(){this.settingsOpen=!this.settingsOpen,this.statsOpen=!1,this.shopOpen=!1,this.pausedMenu=!1,Gp(`ui`),this.renderMenus()}toggleStats(){this.statsOpen=!this.statsOpen,this.settingsOpen=!1,this.shopOpen=!1,this.pausedMenu=!1,Gp(`ui`),this.renderMenus()}applySettings(){let e=nt();Zp(e);let t=this.root.querySelector(`#btn-mute`);t&&(t.innerHTML=Fp()?Sm.mute:Sm.sound);try{bm().setQualityMode(e.quality||`auto`)}catch{}this.app.globe&&e.quality===`low`&&(this.app.globe.dpr=1)}showCoach(){this.coach=!0,Gp(`ui`),this.renderMenus()}hideCoach(){this.coach=!1,this.renderMenus()}renderMenus(){this.root.querySelectorAll(`.sheet,.coach,.menu,.pick-banner`).forEach(e=>e.remove());let t=this.app.game;if(this.coach){let t=document.createElement(`div`);t.className=`coach`,t.innerHTML=`<div class="coach-card">
        <h3>How to play ${e}</h3>
        <ol>
          <li>Spin the world and plant a nesting ground — a graveyard, sinkhole, crashed lab, or sewer.</li>
          <li>The dead gather there. Spend them on a raid: pick a city and a host, then watch them march.</li>
          <li>A live window follows the fight. If the living hold, it stays a newscast. If the city falls, the signal glitches into leaked footage.</li>
          <li>Captures become new bases. Spend brains on the mutation tree — Stealth, Brute, or Virulent — and on deadlier strains. The living do not start a cure until they confirm the dead are walking. If they later finish a cure, it is distributed worldwide and taken cities recover — your nest and its mutations remain, and you pick a permanent mutation before the hunt starts again. You only lose if the nest itself is burned. Win when every city falls.</li>
        </ol>
        <button class="bigbtn" id="coach-go">Begin the hunt</button>
      </div>`,this.root.appendChild(t),t.querySelector(`#coach-go`).addEventListener(`click`,()=>{Gp(`ui`),Rp(),this.hideCoach(),this.startTutorial(),this.app.onCoachDone?.()})}else if(t.outcome){let e=t.outcome===`win`,n=document.createElement(`div`);n.className=`menu`,n.innerHTML=`<div class="menu-card">
        <h2>${e?`The world is ours`:`The nest is broken`}</h2>
        <p>${e?`Every city belongs to the dead.`:`The living burned out your nesting ground.`}</p>
        ${this._statsHtml(t.statsReport?t.statsReport():t.stats)}
        <div class="row"><button class="bigbtn pri" id="newgame">New hunt</button></div>
      </div>`,this.root.appendChild(n),n.querySelector(`#newgame`).addEventListener(`click`,()=>this.app.newGame())}else if(this.pausedMenu){let e=document.createElement(`div`);e.className=`menu`,e.innerHTML=`<div class="menu-card"><h2>Paused</h2><p>The world can wait.</p>
        <div class="row">
          <button class="bigbtn pri" id="resume">Resume</button>
          <button class="bigbtn" id="stats">Stats</button>
          <button class="bigbtn" id="settings">Settings</button>
          <button class="bigbtn" id="howto">How to play</button>
          <button class="bigbtn warn" id="newgame">New hunt</button>
        </div></div>`,this.root.appendChild(e),e.querySelector(`#resume`).addEventListener(`click`,()=>this.togglePause()),e.querySelector(`#stats`).addEventListener(`click`,()=>{this.pausedMenu=!1,this.toggleStats()}),e.querySelector(`#settings`).addEventListener(`click`,()=>{this.pausedMenu=!1,this.toggleSettings()}),e.querySelector(`#howto`).addEventListener(`click`,()=>{this.pausedMenu=!1,t.paused=!1,this.showCoach()}),e.querySelector(`#newgame`).addEventListener(`click`,()=>this.app.newGame())}else t.phase===`pick`&&this.pickReady?this._baseTypeSheet():t.phase===`pick`&&this._pickBanner(),t.prestigeOffer&&t.prestigeOffer.length&&!t.outcome&&!t.distribution&&this._prestigeSheet(),this.shopOpen&&this._shopSheet(),this.settingsOpen&&this._settingsSheet(),this.statsOpen&&this._statsSheet(),this.raidEvent?this._eventSheet():this.raidCity&&this._raidSheet(),this._renderTutorial()}_pickBanner(){let e=document.createElement(`div`);e.className=`pick-banner`,e.innerHTML=`<h3>Choose your nesting ground</h3><p>Spin the world, then tap a patch of <b>land</b>.</p>`,this.root.appendChild(e)}_nearestBase(e){let t=this.app.game,n=t.home,r=1/0;for(let i of t.bases){if(!i||t.totalStock(i)<1)continue;let a=xe(this.app.world,i.v,e.v);a<r&&(r=a,n=i)}return n||t.home}_baseTypeSheet(){let e=document.createElement(`div`);e.className=`sheet`,e.innerHTML=`<div class="sheet-card">
      <div class="sheet-head"><h2>Nesting ground</h2><button class="x" id="cx">${Sm.close}</button></div>
      <p class="muted">The site is marked. Choose what the dead crawl out of.</p>
      <div class="bases">${u.map(e=>`<button class="basepick ${this.baseType===e.id?`on`:``}" data-bt="${e.id}">
        <div class="bn">${e.name}</div><div class="bd">${e.desc}</div></button>`).join(``)}</div>
      <div class="row" style="margin-top:12px"><button class="bigbtn pri" id="plant">Plant the nest</button></div>
    </div>`,this.root.appendChild(e),e.querySelector(`#cx`).addEventListener(`click`,()=>{this.pickReady=!1,this.app.globe.setPickVert(-1),this.renderMenus()}),e.querySelectorAll(`[data-bt]`).forEach(e=>e.addEventListener(`click`,()=>{this.baseType=e.dataset.bt,Gp(`ui`),this.renderMenus()})),e.querySelector(`#plant`).addEventListener(`click`,()=>{let e=this.app.globe.pickV;this.app.game.pickBase(e,this.baseType)&&(Gp(`infect`),this.pickReady=!1,this.app.globe.setPickVert(-1),this.app.globe.rig.flyToVert(e,1.6),this._tutorMaybe(`pick`),this.renderMenus())})}_shopSheet(){let e=this.app.game,t=this.shopTab===`upgrades`?`upgrades`:this.shopTab===`tree`?`tree`:`host`,n=y.filter(e=>Oe.includes(e.id)).map(t=>{let n=t.once&&!!e.upgrades[t.id],r=t.once?0:e.upgrades[t.id]||0,i=!t.once&&r>=(t.max||1),a=e.upgradeCost(t.id),o=!n&&!i&&e.brains>=a,s=n?`Owned`:i?`Max`:a+` br`;return`<div class="upg ${n||i?`owned`:``}">
        <div class="u-body"><div class="u-name">${t.name}${r?` · `+r:``}</div><div class="u-desc">${t.desc}</div></div>
        <button data-upg="${t.id}" ${o?``:`disabled`}>${s}</button>
      </div>`}).join(``),r={shambler:`Shamblers`,runner:`Runners`,brute:`Brutes`,screamer:`Screamers`,spitter:`Spitters`,abomination:`Abominations`,armored:`Armored Dead`},i={shambler:`The rank and file. Always unlocked.`,runner:`Fast and fragile. Unlock Runners first.`,brute:`Wall-breakers. Unlock Brutes first.`,screamer:`Howling dead that stir and draw the host around them.`,spitter:`Ranged acid against walls and defenders.`,abomination:`A rare giant that wrecks buildings.`,armored:`Plated dead looted from a military base. Slow and hard to put down.`},a=p.map(t=>{let n=t===`shambler`||e.canUnlock(t),a=f.map(r=>{let i=v(t,r.id,e.typeLv||{}),a=n&&!i.maxed&&e.brains>=i.cost,o=i.maxed?i.cur:`${i.cur} → ${i.next}`,s=n?i.maxed?`Max`:i.cost+` br`:`Locked`;return`<div class="tstat">
          <div class="ts-meta"><div class="ts-name">${i.name} <span class="ts-lv">${i.lv}/${i.max}</span></div>
            <div class="ts-val">${o}</div></div>
          <button data-t="${t}" data-s="${r.id}" ${a?``:`disabled`}>${s}</button>
        </div>`}).join(``);return`<div class="strain ${n?``:`locked`}">
        <div class="strain-h">${r[t]}</div>
        <div class="u-desc">${i[t]}</div>
        ${a}
      </div>`}).join(``),o=document.createElement(`div`);o.className=`sheet`,o.innerHTML=`<div class="sheet-card shop-card">
      <div class="sheet-head"><h2>Brains</h2><button class="x" id="shop-x">${Sm.close}</button></div>
      <div class="yearline" style="margin-bottom:8px">You have <b>${e.brains}</b> brains · <b>${e.points}</b> points</div>
      <div class="shop-tabs">
        <button data-tab="host" class="${t===`host`?`on`:``}">Host</button>
        <button data-tab="tree" class="${t===`tree`?`on`:``}">Mutations</button>
        <button data-tab="upgrades" class="${t===`upgrades`?`on`:``}">Strains</button>
      </div>
      ${t===`host`?`<div class="shop-grid">${n}</div>`:t===`tree`?this._treeHtml(e):`<div class="strain-list">${a}</div>`}
    </div>`,this.root.appendChild(o),o.querySelector(`#shop-x`).addEventListener(`click`,()=>this.toggleShop()),o.addEventListener(`click`,e=>{e.target===o&&this.toggleShop()}),o.querySelectorAll(`[data-tab]`).forEach(e=>e.addEventListener(`click`,()=>{this.shopTab=e.dataset.tab,Gp(`ui`),this.renderMenus()})),o.querySelectorAll(`[data-upg]`).forEach(e=>e.addEventListener(`click`,()=>{this.app.game.buyUpgrade(e.dataset.upg)&&(Gp(`upgrade`),this.renderMenus())})),o.querySelectorAll(`[data-t][data-s]`).forEach(e=>e.addEventListener(`click`,()=>{this.app.game.buyTypeUpgrade(e.dataset.t,e.dataset.s)&&(Gp(`upgrade`),this.renderMenus())})),o.querySelectorAll(`[data-tree]`).forEach(e=>e.addEventListener(`click`,()=>{this.app.game.buyTree(e.dataset.tree)&&(Gp(`upgrade`),this.renderMenus())}))}_treeHtml(e){let t=e.mods();return`<div class="tree-wrap">${R.map(n=>{let r=Te.filter(e=>e.branch===n.id).sort((e,t)=>e.tier-t.tier||e.id.localeCompare(t.id)).map(n=>{let r=Fe(e.tree,n.id),i=Ie(e.tree,n.id),a=Le(n.id,t),o=!r&&!i,s=(n.req||[]).map(e=>z[e]?.name||e).join(`, `),c=r?`Taken`:o?s?`Needs `+s:`Locked`:a+` br`;return`<button type="button" class="tnode ${r?`owned`:i&&e.brains>=a?`can`:`locked`}" data-tree="${n.id}" ${r||!i||e.brains<a?`disabled`:``}>
          <div class="tn-tier">Tier ${n.tier}</div>
          <div class="tn-name">${n.name}</div>
          <div class="tn-desc">${n.desc}</div>
          <div class="tn-cost">${c}</div>
        </button>`}).join(``);return`<div class="tcol" style="--hue:${n.hue}">
        <div class="tcol-h">${n.name}</div>
        <div class="tcol-b">${n.blurb}</div>
        ${r}
      </div>`}).join(``)}</div>`}_raidSheet(){let e=this.app.game,t=e.cById[this.raidCity];if(!t){this.raidCity=null;return}if(t.owner===`horde`){let n=e.bases.find(e=>e.id===t.id),r=document.createElement(`div`);r.className=`sheet`,r.innerHTML=`<div class="sheet-card">
        <div class="sheet-head"><h2>${t.name}</h2><button class="x" id="cx">${Sm.close}</button></div>
        <p class="muted">Ours. Garrison ${n?e.totalStock(n):t.garrison}. Raids can launch from here.</p>
        <button class="bigbtn pri" id="ok">Done</button>
      </div>`,this.root.appendChild(r);let i=()=>{this.raidCity=null,this.renderMenus()};r.querySelector(`#cx`).addEventListener(`click`,i),r.querySelector(`#ok`).addEventListener(`click`,i);return}let n=this._nearestBase(t),r=e.raidCap(),i=e.canUnlock(`runner`),a=e.canUnlock(`brute`),o=e.canUnlock(`screamer`),s=e.canUnlock(`spitter`),c=e.canUnlock(`abomination`),l=w(t.tier),u=Ke(this.app.world,t.v,e.time),d=!!(e.hero&&e.hero.alive&&e.hero.cooldown<=0);try{this.app.globe.setPreviewPath(L(this.app.world,n.v,t.v))}catch{}let f=Object.values(F).map(e=>`<button type="button" class="tactic${e.id===`assault`?` on`:``}" data-tac="${e.id}">
        <div class="tn">${e.name}</div>
        <div class="td">${e.desc}</div>
        <div class="tr">${e.trade}</div>
      </button>`).join(``),p=document.createElement(`div`);p.className=`sheet`,p.innerHTML=`<div class="sheet-card raidplan">
      <div class="sheet-head"><h2>Raid ${t.name}</h2><button class="x" id="cx">${Sm.close}</button></div>
      <p class="muted"><span class="tier-tag t-${t.tier}">${l.icon} ${l.name}</span> · Walls ${Math.round(t.wallHp)} · cap ${r}. From ${n.name}: ${e.totalStock(n)}${t.research?` · Research lab`:``}</p>
      <div class="odds" id="odds"></div>
      <div class="slats">
        ${(()=>{let t=r,l=e=>{let n=Math.max(0,Math.min(e,t));return t-=n,n};return[this._slat(`shambler`,`Shamblers`,n.stock.shambler||0,l(n.stock.shambler||0)),i?this._slat(`runner`,`Runners`,n.stock.runner||0,l(n.stock.runner||0)):``,a?this._slat(`brute`,`Brutes`,n.stock.brute||0,l(n.stock.brute||0)):``,o&&n.stock.screamer?this._slat(`screamer`,`Screamers`,n.stock.screamer||0,l(n.stock.screamer||0)):``,s&&n.stock.spitter?this._slat(`spitter`,`Spitters`,n.stock.spitter||0,l(n.stock.spitter||0)):``,c&&n.stock.abomination?this._slat(`abomination`,`Abominations`,n.stock.abomination||0,l(n.stock.abomination||0)):``,e.canUnlock(`armored`)&&n.stock.armored?this._slat(`armored`,`Armored`,n.stock.armored||0,l(n.stock.armored||0)):``].join(``)})()}
      </div>
      <div class="muted" id="raid-n">0 of ${r}</div>
      <div class="tactics" id="tactics">${f}</div>
      <label class="wait-night" id="wait-row" ${u?`hidden`:``}><input type="checkbox" id="waitNight"> Wait until ${t.name} is on the night side</label>
      <div class="muted" id="night-hint">${u?`Night already covers this city.`:``}</div>
      ${d?`<label class="hero-row"><input type="checkbox" id="takeHero" checked> Send ${e.hero.name} (Lv ${e.hero.level})</label>`:e.hero&&e.hero.cooldown>0?`<div class="muted">${e.hero.name} returns in ${Math.ceil(e.hero.cooldown)}s</div>`:``}
      <button class="bigbtn pri" id="launch">Launch the host</button>
    </div>`,this.root.appendChild(p);let h=`assault`,g=()=>h;p.querySelectorAll(`[data-tac]`).forEach(e=>e.addEventListener(`click`,()=>{h=e.dataset.tac,p.querySelectorAll(`[data-tac]`).forEach(t=>t.classList.toggle(`on`,t===e));let t=h===`night`&&!u,n=p.querySelector(`#wait-row`);n&&(n.hidden=!t),_(),Gp(`ui`)}));let _=()=>{let n=this._compFromSheet(p),i=m.reduce((e,t)=>e+(n[t]||0),0);p.querySelector(`#raid-n`).textContent=`${i} of ${r}`;let a=h===`infiltrate`&&(n.runner||0)<(e.infiltrateNeed?e.infiltrateNeed():F.infiltrate.needRunners||2);p.querySelector(`#launch`).disabled=i<1||i>r||a;let o=e.oddsFor(t,n),s=E(i<1?0:o.ratio),c=p.querySelector(`#odds`),u=F[h];c.className=`odds `+s.kind;let d=i<1?0:o.winPct??Math.round((o.winChance||0)*100);c.innerHTML=`<div class="odds-bar"><i style="width:${d}%"></i></div>
        <div class="odds-meta"><b>${d}% win</b> · Host ${o.host.toFixed(1)} vs ${l.name} ${o.city.toFixed(1)} · ${u.name}</div>
        <div class="odds-expect">Expected brains: <b>${o.expWin??`—`} on a win</b> · ${o.expFail??`—`} if it fails</div>
        <div class="odds-txt">${s.text}${a?` · Infiltration needs at least two Runners.`:``}${t.immuneUntil&&t.immuneUntil>e.time?` · Freshly cured — they resist the dead for now.`:``}</div>`};p.querySelectorAll(`input[data-k]`).forEach(e=>e.addEventListener(`input`,()=>{let t=p.querySelector(`#n-`+e.dataset.k);t&&(t.textContent=e.value),_()})),_(),p.querySelector(`#cx`).addEventListener(`click`,()=>{this.raidCity=null,this.app.globe.setPreviewPath(null),this.renderMenus()}),p.querySelector(`#launch`).addEventListener(`click`,()=>{let r=e.launchRaid(n.id,t.id,this._compFromSheet(p),{tactic:g(),waitNight:!!(p.querySelector(`#waitNight`)&&p.querySelector(`#waitNight`).checked)||h===`night`,hero:!!(p.querySelector(`#takeHero`)&&p.querySelector(`#takeHero`).checked)});r&&(Gp(`command`),this.app.globe.rig.flyToVert(n.v,2.2),this.raidCity=null,this.raidEvent=null,this.app.globe.setPreviewPath(null),this.renderMenus(),this._tutorMaybe(`raid`),this.hintFlash(r.state===`wait`?`The host waits for night before marching on <b>${t.name}</b>.`:`The host is on the march to <b>${t.name}</b>.`))})}_slat(e,t,n,r){let i=Math.min(r,n);return`<div class="slat"><span>${t}</span><input data-k="${e}" type="range" min="0" max="${n}" value="${i}"><span id="n-${e}">${i}</span></div>`}_compFromSheet(e){let t=t=>+(e.querySelector(`input[data-k="${t}"]`)?.value||0),n={};for(let e of m)n[e]=t(e);return n}_statsHtml(e={}){let t=e.days==null?(e.time||0)/(ie.dayLen||80):e.days,n=e.eventsWon||{},r=Object.entries(n).map(([e,t])=>`${ae[e]?.name||e} ×${t}`).join(`, `)||`none`;return`<div class="stats-grid">
      <div><b>${e.eaten||0}</b><span>Brains eaten</span></div>
      <div><b>${e.captured||0}</b><span>Cities fallen</span></div>
      <div><b>${t.toFixed(1)}</b><span>Days survived</span></div>
      <div><b>${e.biggestHorde||0}</b><span>Biggest horde</span></div>
      <div><b>${e.raidsWon||0} / ${e.raidsLost||0}</b><span>Raids won / lost</span></div>
      <div><b>${e.pzLevel||1}</b><span>Patient Zero</span></div>
      <div><b>${e.megacities||0}</b><span>Megacities taken</span></div>
      <div><b>${e.curesSurvived||0}</b><span>Cures survived</span></div>
      <div class="wide"><b>${r}</b><span>Events won</span></div>
      <div class="wide"><b>${this._prestigeList(e)}</b><span>Permanent mutations</span></div>
    </div>`}_prestigeList(e={}){let t=e.prestige&&e.prestige.stacks||{},n=Object.entries(t).filter(([,e])=>e>0).map(([e,t])=>{let n=Ee[e];return`${n?n.name:e}${t>1?` ×`+t:``}`});return n.length?n.join(`, `):`none yet`}_settingsSheet(){let t=nt(),n=document.createElement(`div`);n.className=`sheet`;let r=t.musicVol==null?.42:t.musicVol,i=t.sfxVol==null?.7:t.sfxVol,a=this.app.game,o=a&&a.prestigeState?this._prestigeList(a.statsReport()):`none yet`;n.innerHTML=`<div class="sheet-card">
      <div class="sheet-head"><h2>Settings</h2><button class="x" id="cx">${Sm.close}</button></div>
      <label class="set-row"><input type="checkbox" id="set-sound" ${t.sound?`checked`:``}> Sound</label>
      <div class="set-row vol-row"><span>Music</span>
        <input type="range" id="set-music" min="0" max="100" value="${Math.round(r*100)}" ${t.sound?``:`disabled`}>
        <b id="music-lab">${Math.round(r*100)}%</b>
      </div>
      <div class="set-row vol-row"><span>Effects</span>
        <input type="range" id="set-sfx" min="0" max="100" value="${Math.round(i*100)}" ${t.sound?``:`disabled`}>
        <b id="sfx-lab">${Math.round(i*100)}%</b>
      </div>
      <label class="set-row"><input type="checkbox" id="set-haptics" ${t.haptics?`checked`:``}> Haptics</label>
      <div class="set-row">Quality
        <select id="set-quality">
          <option value="auto" ${t.quality===`auto`?`selected`:``}>Auto</option>
          <option value="low" ${t.quality===`low`?`selected`:``}>Low</option>
          <option value="med" ${t.quality===`med`?`selected`:``}>Medium</option>
          <option value="high" ${t.quality===`high`?`selected`:``}>High</option>
        </select>
      </div>
      <p class="muted set-note">Permanent mutations: <b>${o}</b></p>
      <p class="muted set-ver">${e} v7.1</p>
    </div>`,this.root.appendChild(n);let s=()=>{this.settingsOpen=!1,this.renderMenus()};n.querySelector(`#cx`).addEventListener(`click`,s),n.addEventListener(`click`,e=>{e.target===n&&s()});let c=e=>{rt({sound:n.querySelector(`#set-sound`).checked,haptics:n.querySelector(`#set-haptics`).checked,quality:n.querySelector(`#set-quality`).value,musicVol:n.querySelector(`#set-music`).value/100,sfxVol:n.querySelector(`#set-sfx`).value/100}),n.querySelector(`#music-lab`).textContent=n.querySelector(`#set-music`).value+`%`,n.querySelector(`#sfx-lab`).textContent=n.querySelector(`#set-sfx`).value+`%`;let t=n.querySelector(`#set-sound`).checked;n.querySelector(`#set-music`).disabled=!t,n.querySelector(`#set-sfx`).disabled=!t,this.applySettings(),e!==!1&&Gp(`ui`)};n.querySelector(`#set-sound`).addEventListener(`change`,()=>{Rp(),c()}),n.querySelector(`#set-haptics`).addEventListener(`change`,()=>c()),n.querySelector(`#set-quality`).addEventListener(`change`,()=>c()),n.querySelector(`#set-music`).addEventListener(`input`,()=>c(!1)),n.querySelector(`#set-sfx`).addEventListener(`input`,()=>c(!1))}_prestigeSheet(){let e=this.app.game,t=e.prestigeOffer||[],n=document.createElement(`div`);n.className=`sheet prestige-sheet`,n.innerHTML=`<div class="sheet-card prestige-card">
      <div class="sheet-head"><h2>The strain remembers</h2></div>
      <p class="muted">The cure has passed. Choose one mutation that will stay with the nest forever.</p>
      <div class="pr-list">${t.map(t=>{let n=Ee[t];if(!n)return``;let r=e.prestige&&e.prestige.stacks&&e.prestige.stacks[t]||0,i=r?`<div class="pr-stack">Already held ×${r}</div>`:``;return`<button type="button" class="pr-card" data-pr="${t}">
        <div class="pr-kicker">Permanent mutation</div>
        <div class="pr-name">${n.name}</div>
        <div class="pr-desc">${n.desc}</div>
        ${i}
      </button>`}).join(``)}</div>
    </div>`,this.root.appendChild(n),n.querySelectorAll(`[data-pr]`).forEach(t=>t.addEventListener(`click`,()=>{e.pickPrestige(t.dataset.pr)&&(Gp(`prestige`),this.renderMenus())}))}_statsSheet(){let e=this.app.game,t=e.statsReport?e.statsReport():e.stats,n=document.createElement(`div`);n.className=`sheet`,n.innerHTML=`<div class="sheet-card">
      <div class="sheet-head"><h2>Stats</h2><button class="x" id="cx">${Sm.close}</button></div>
      ${this._statsHtml(t)}
    </div>`,this.root.appendChild(n);let r=()=>{this.statsOpen=!1,this.renderMenus()};n.querySelector(`#cx`).addEventListener(`click`,r),n.addEventListener(`click`,e=>{e.target===n&&r()})}_eventSheet(){let e=this.app.game,t=e.eventById&&e.eventById(this.raidEvent);if(!t||t.state!==`live`){this.raidEvent=null;return}let n=oe(t.kind),r=this._nearestBase({v:t.v}),i=e.raidCap(),a=e.canUnlock(`runner`),o=e.canUnlock(`brute`),s=e.canUnlock(`screamer`),c=e.canUnlock(`spitter`),l=e.canUnlock(`abomination`),u=e.canUnlock(`armored`),d=Math.max(0,Math.ceil((t.dur||0)-(t.t||0)));try{this.app.globe.setPreviewPath(L(this.app.world,r.v,t.v))}catch{}let f=document.createElement(`div`);f.className=`sheet`;let p=i,h=e=>{let t=Math.max(0,Math.min(e,p));return p-=t,t};f.innerHTML=`<div class="sheet-card raidplan">
      <div class="sheet-head"><h2>${n.name}</h2><button class="x" id="cx">${Sm.close}</button></div>
      <p class="muted">${n.desc} · ${d}s left${t.cityName?` near `+t.cityName:t.toName?` toward `+t.toName:``} · cap ${i}</p>
      <div class="odds" id="odds"></div>
      <div class="slats">
        ${this._slat(`shambler`,`Shamblers`,r.stock.shambler||0,h(r.stock.shambler||0))}
        ${a?this._slat(`runner`,`Runners`,r.stock.runner||0,h(r.stock.runner||0)):``}
        ${o?this._slat(`brute`,`Brutes`,r.stock.brute||0,h(r.stock.brute||0)):``}
        ${s&&r.stock.screamer?this._slat(`screamer`,`Screamers`,r.stock.screamer||0,h(r.stock.screamer||0)):``}
        ${c&&r.stock.spitter?this._slat(`spitter`,`Spitters`,r.stock.spitter||0,h(r.stock.spitter||0)):``}
        ${l&&r.stock.abomination?this._slat(`abomination`,`Abominations`,r.stock.abomination||0,h(r.stock.abomination||0)):``}
        ${u&&r.stock.armored?this._slat(`armored`,`Armored`,r.stock.armored||0,h(r.stock.armored||0)):``}
      </div>
      <div class="muted" id="raid-n">0 of ${i}</div>
      <button class="bigbtn pri" id="launch">Launch the host</button>
    </div>`,this.root.appendChild(f);let g=()=>{let n=this._compFromSheet(f),r=m.reduce((e,t)=>e+(n[t]||0),0);f.querySelector(`#raid-n`).textContent=`${r} of ${i}`,f.querySelector(`#launch`).disabled=r<1||r>i;let a=e.oddsFor({...t,eventKind:t.kind,kind:`event`},n),o=f.querySelector(`#odds`);o.className=`odds `+(a.winPct>=55?`good`:a.winPct>=40?`even`:`poor`),o.innerHTML=`<div class="odds-bar"><i style="width:${a.winPct||0}%"></i></div>
        <div class="odds-meta"><b>${a.winPct||0}% win</b> · Host ${a.host.toFixed(1)} vs event ${a.city.toFixed(1)}</div>
        <div class="odds-expect">Expected brains: <b>${a.expWin} on a win</b> · ${a.expFail} if it fails</div>`};f.querySelectorAll(`input[data-k]`).forEach(e=>e.addEventListener(`input`,()=>{let t=f.querySelector(`#n-`+e.dataset.k);t&&(t.textContent=e.value),g()})),g(),f.querySelector(`#cx`).addEventListener(`click`,()=>{this.raidEvent=null,this.app.globe.setPreviewPath(null),this.renderMenus()}),f.querySelector(`#launch`).addEventListener(`click`,()=>{e.launchRaid(r.id,t.id,this._compFromSheet(f),{eventId:t.id})&&(Gp(`command`),this.raidEvent=null,this.app.globe.setPreviewPath(null),this.renderMenus(),this.hintFlash(`The host is on the march to the <b>${n.name}</b>.`))})}startTutorial(e=!1){if(!e&&(it()===`done`||it()===`skipped`)){this.tutorStep=null;return}let t=this.app.game;this.tutorStep=t.phase===`pick`?`pick`:`raid`,this._renderTutorial()}skipTutorial(){at(`skipped`),this.tutorStep=null,this._renderTutorial()}_tutorMaybe(e){let t=[`pick`,`raid`,`watch`,`shop`,`done`];if(!this.tutorStep)return;let n=t.indexOf(e);if(n!==t.indexOf(this.tutorStep))return;let r=t[n+1];this.tutorStep=r===`done`?`done`:r,this.tutorStep===`done`&&at(`done`),this._renderTutorial()}_renderTutorial(){let e=this.tutorEl||this.root.querySelector(`#tutor`);if(!e)return;let t={pick:`Plant a nesting ground on <b>land</b>. Spin the globe, then tap a patch of earth.`,raid:`Tap a nearby hamlet and send a host. Early towns fall quickly and pay well.`,watch:`Watch the live window. The fight plays out in the streets.`,shop:`Spend brains in the shop — grow the mutation tree, unlock strains, or harden the ones you have.`};!this.tutorStep||this.tutorStep===`done`||!t[this.tutorStep]?(e.hidden=!0,e.innerHTML=``):(e.hidden=!1,e.innerHTML=`<div class="tutor-card"><div class="tutor-step">Tutorial · ${this.tutorStep}</div>
      <p>${t[this.tutorStep]}</p>
      <button class="textbtn" id="tutor-skip">Skip</button></div>`,e.querySelector(`#tutor-skip`).onclick=()=>this.skipTutorial())}onTapGlobe(e){let t=this.app.game;if(Rp(),t.phase===`pick`){if(!e||!e.land){this.hintFlash(`Plant the nest on <b>land</b>.`);return}this.app.globe.setPickVert(e.v),this.pickReady=!0,Gp(`select`),this.renderMenus();return}if(t.phase!==`play`||t.outcome||!e)return;let n=null,r=.1;for(let i of t.liveEvents?t.liveEvents():[]){let t=i.v;if(i.kind===`convoy`&&i.path&&(t=i.path[Math.min(i.path.length-1,Math.floor((i.progress||0)*(i.path.length-1)))]),t==null)continue;let a=Math.acos(Math.max(-1,Math.min(1,this.app.world.pos[t*3]*this.app.world.pos[e.v*3]+this.app.world.pos[t*3+1]*this.app.world.pos[e.v*3+1]+this.app.world.pos[t*3+2]*this.app.world.pos[e.v*3+2])));a<r&&(r=a,n=i)}if(n){this.raidEvent=n.id,this.raidCity=null,this.shopOpen=!1,Gp(`select`),this.app.globe.rig.flyToVert(n.v,1.4),this.renderMenus();return}let i=null,a=.08;for(let n of t.cities){let t=Math.acos(Math.max(-1,Math.min(1,this.app.world.pos[n.v*3]*this.app.world.pos[e.v*3]+this.app.world.pos[n.v*3+1]*this.app.world.pos[e.v*3+1]+this.app.world.pos[n.v*3+2]*this.app.world.pos[e.v*3+2])));t<a&&(a=t,i=n)}i&&(this.raidCity=i.id,this.raidEvent=null,this.shopOpen=!1,this.shopTab=`host`,Gp(`select`),this.app.globe.rig.flyToVert(i.v,1.4),this.renderMenus())}syncPips(){let e=this.app.game,t=e.raids.filter(t=>t.state===`battle`||t.state===`done`&&e.time-(t.doneAt||e.time)<8),n=new Set(t.map(e=>e.id));for(let[e,t]of this.pips)!n.has(e)&&!t.pinned&&this._closePip(e);for(let e of t)e.state===`battle`&&!this.pips.has(e.id)&&this._openPip(e),this.pips.has(e.id)&&this._updatePip(e)}_openPip(e){let t=document.createElement(`div`);t.className=`pip news`,t.dataset.id=e.id;let n=e.channel||{name:`NEXUS 24`,tag:`NX24`};t.innerHTML=`
      <div class="pip-bar"><div class="pt">${n.name} · ${e.toName}</div>
        <button data-act="min">–</button><button data-act="full">⛶</button><button data-act="close">×</button></div>
      <div class="pip-stage">
        <canvas class="pip-gl"></canvas>
        <div class="news-chrome">
          <div class="breaking"><span class="live">BREAKING</span><span class="ch-logo">${n.name}</span></div>
          <div class="lower3"><div class="l-kicker">LIVE</div><div class="l-title" data-lt>Outbreak reported in ${e.toName}</div></div>
          <div class="ticker"><div class="ticker-track" data-tk>${Je(this.app.game,`hold`)}</div></div>
        </div>
        <div class="leaked-chrome">
          <div class="rec"><i></i> REC</div>
          <div class="ts" data-ts></div>
          <div class="grain"></div><div class="scan"></div>
        </div>
        <div class="glitch"></div>
        <div class="end-card"><h4 data-eh></h4><p data-ep></p></div>
      </div>`,this.pipsEl.appendChild(t);let r=new xm(t.querySelector(`.pip-gl`));e.battle&&r.attach(e.battle);let i={el:t,view:r,mode:`news`,glitched:!1,pinned:!1,minimized:!1};if(this.pips.set(e.id,i),window.innerHeight>window.innerWidth&&this.pips.size>1)for(let[t,n]of this.pips)t!==e.id&&(n.minimized=!0,n.el.classList.add(`minimized`),n.el.classList.remove(`full`),n.view.minimized=!0,n.view.full=!1);e.pipMode===`leaked`&&(i.mode=`leaked`,i.glitched=!0,i.el.classList.add(`leaked`),i.view.setMode(`leaked`)),this._layoutPip(i),Gp(e.pipMode===`leaked`?`static`:`news`),t.querySelector(`.pip-bar`).addEventListener(`click`,n=>{let r=n.target.dataset.act;r===`min`&&(i.minimized=!i.minimized,t.classList.toggle(`minimized`,i.minimized),t.classList.remove(`full`)),r===`full`&&this._toggleFull(e.id),r===`close`&&(i.pinned=!1,this._closePip(e.id))}),t.querySelector(`.pip-stage`).addEventListener(`click`,()=>this._toggleFull(e.id))}_toggleFull(e){let t=this.pips.get(e);if(!t)return;let n=!t.el.classList.contains(`full`);for(let e of this.pips.values())e.el.classList.remove(`full`);n?(t.el.classList.add(`full`),t.el.classList.remove(`minimized`),t.minimized=!1,this.activeFull=e):this.activeFull=null,this._layoutPip(t),Gp(`ui`)}_layoutPip(e){let t=e.el.querySelector(`.pip-stage`),n=e.el.classList.contains(`full`)?t.clientWidth||800:280,r=e.el.classList.contains(`full`)?t.clientHeight||400:158;e.view.resize(n,r)}_pipNews(e,t,n){let r=this.app.game,i=e.mode===`leaked`||t.result===`win`||n>.12?`panic`:`hold`,a=e.el.querySelector(`[data-lt]`);a&&(a.textContent=Ye(t,e.view,n,r));let o=e.el.querySelector(`[data-tk]`);if(o){let t=typeof performance<`u`?performance.now():0;(o.dataset.mood!==i||e._tickAt==null||t-e._tickAt>7e3)&&(o.textContent=Je(r,i),o.dataset.mood=i,e._tickAt=t)}}campaignTick(){return Xe(this.app.game)}_updatePip(e){let t=this.pips.get(e.id);if(!t)return;e.battle&&t.view.battle!==e.battle&&t.view.attach(e.battle);let n=e.battle?e.battle.swing():-.3,r=e.kind===`raid`&&(e.result===`win`||n>.18),i=e.kind===`raid`&&(e.result===`lose`||!e.result&&n<=.18);r&&t.mode!==`leaked`&&!t.glitched&&this._doGlitch(t,e),this._pipNews(t,e,n),i&&t.mode;let a=t.el.querySelector(`[data-ts]`);a&&(a.textContent=Cm()),e.state===`done`&&this._showEnd(t,e)}_doGlitch(e,t){e.glitched=!0,e.el.querySelector(`.glitch`).classList.add(`on`),Gp(`glitch`),Gp(`static`),setTimeout(()=>{e.el.querySelector(`.glitch`).classList.remove(`on`),e.mode=`leaked`,e.el.classList.add(`leaked`),e.view.setMode(`leaked`),t.pipMode=`leaked`},420)}_showEnd(e,t){if(e.ended)return;e.ended=!0,e.el.classList.add(`end`);let n=t.result===`win`,r=e.el.querySelector(`[data-eh]`),i=e.el.querySelector(`[data-ep]`);t.kind===`raid`?(r.textContent=n?`${t.toName.toUpperCase()} FALLS`:`${t.toName.toUpperCase()} REPELS OUTBREAK`,i.textContent=`${t.brainsAward??t.brains??0} brains  ·  ${t.pointsAward??0} points`):(r.textContent=n?`THE DEAD HOLD ${t.toName.toUpperCase()}`:`${t.toName.toUpperCase()} LIBERATED`,i.textContent=n?`The garrison holds.`:`The living have retaken the city.`)}_closePip(e){let t=this.pips.get(e);t&&(t.view.detach(),t.view.dispose?.(),t.el.remove(),this.pips.delete(e))}updatePips(e){for(let e of this.pips.values())e.view.minimized=!!e.minimized,e.view.full=e.el.classList.contains(`full`);bm().update(e);let t=this.app.globe&&this.app.globe.fps;t&&bm().adapt(t)}update(){let e=this.app.game,t=e.bases.reduce((t,n)=>t+e.totalStock(n),0),n=e.cities.filter(e=>e.owner===`horde`).length;this.root.querySelector(`#chip-horde span`).textContent=t,this.root.querySelector(`#chip-bio span`).textContent=e.brains,this.root.querySelector(`#chip-towns span`).textContent=`${n} / ${e.cities.length}`;let r=e.awareStage&&e.awareStage()||P(e.alarm||0),i=this.root.querySelector(`#chip-alarm`);if(i){let t=i.querySelector(`.alm-lab`);t&&(t.textContent=`AWARE`),i.querySelector(`.alm-name`).textContent=r.name;let n=e.popShare?e.popShare()*100:e.alarm||0,a=i.querySelector(`.alm-n`);a&&(a.textContent=n>=.5?Math.round(n)+`%`:``),i.dataset.stage=r.id,i.setAttribute(`aria-label`,`AWARE: ${r.name}`)}let a=this.root.querySelector(`#curebar`);if(a){a.hidden=!((r.id===`confirmed`||e.stageFlags&&e.stageFlags.confirmed)&&(e.cure||0)>.05);let t=Math.max(0,Math.min(100,e.cure||0)),n=this.root.querySelector(`#cure-fill`);n&&(n.style.width=t+`%`);let i=this.root.querySelector(`#cure-n`);i&&(i.textContent=Math.round(t)+`%`);let o=a.querySelector(`.cure-lab`);o&&(o.textContent=`CURE`)}this.statusline.textContent=e.outcome?e.outcome===`win`?`The world is ours`:`The nest is broken`:e.distribution?`Cure distributed worldwide`:e.phase===`pick`?`Choose a nesting ground`:`${e.points} points · ${e.activeRaids().length} in the field · ${r.name}`,this.syncSpeed(),this.root.querySelector(`#btn-pause`).innerHTML=e.paused?Sm.play:Sm.pause,this.drainEvents(),this.syncPips(),this.updateLabels(),this.tutorStep===`raid`&&e.raids.some(e=>e.state===`march`||e.state===`wait`||e.state===`battle`||e.state===`done`)&&this._tutorMaybe(`raid`),this.tutorStep===`watch`&&e.raids.some(e=>e.state===`done`)&&this._tutorMaybe(`watch`),this._renderTutorial(),this._syncCureBanner(),e.prestigeOffer&&e.prestigeOffer.length&&!e.distribution?this._prestigeShown||(this._prestigeShown=!0,this.shopOpen=!1,this.settingsOpen=!1,this.statsOpen=!1,this.raidCity=null,this.raidEvent=null,this.pausedMenu=!1,Gp(`prestige`),this.renderMenus()):this._prestigeShown=!1}_syncCureBanner(){let e=this.root.querySelector(`#curewave`);if(!e)return;let t=this.app.game;if(!t.distribution){e.hidden=!0,e.innerHTML=``;return}if(this.raidCity||this.raidEvent||this.shopOpen){this.raidCity=null,this.raidEvent=null,this.shopOpen=!1;try{this.app.globe.setPreviewPath(null)}catch{}this.renderMenus()}let n=Math.max(0,Math.ceil((t.distribution.dur||0)-(t.distribution.t||0)));e.hidden=!1,e.innerHTML=`<div class="cw-kicker">Worldwide bulletin</div>
      <div class="cw-title">Cure distributed worldwide</div>
      <div class="cw-sub">Healing flights leave the laboratories. Taken cities recover. The nest still lives.${n?` · `+n+`s`:``}</div>`}_labelChrome(){let e=window.innerWidth,t=window.innerHeight,n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--sal`))||0,r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--sar`))||0,i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--sat`))||0,a=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--sab`))||0,o=8+n,s=e-8-r,c=8+i,l=t-8-a,u=this.root.querySelector(`.hud`);u&&(c=Math.max(c,u.getBoundingClientRect().bottom+6));let d=[],f=(n,r)=>{if(!n||n.hidden)return;let i=getComputedStyle(n);if(i.display===`none`||i.visibility===`hidden`)return;let a=n.getBoundingClientRect();a.width<4||a.height<4||(r&&a.width>e*.4&&(a.top<t*.35&&(c=Math.max(c,a.bottom+6)),a.bottom>t*.55&&a.top>t*.35&&(l=Math.min(l,a.top-6))),d.push({l:a.left,t:a.top,r:a.right,b:a.bottom}))};this.root.querySelectorAll(`.pick-banner, .sheet-card, .coach-card, .menu-card, .migrate-note, .toast`).forEach(e=>f(e,!0));let p=this.hint;return p&&!p.hidden&&f(p,!0),this.root.querySelectorAll(`.pip`).forEach(e=>{e.classList.contains(`minimized`),f(e,!1)}),l-c<80&&(l=Math.min(t-8-a,c+80)),s-o<80&&(s=Math.min(e-8-r,o+80)),{W:e,H:t,left:o,right:s,top:c,bottom:l,obs:d,width:s-o,height:l-c}}_limbFade(e){let t=.18;if(e<=t)return 0;if(e>=.42)return 1;let n=(e-t)/.24;return n*n*(3-2*n)}_overlap(e,t,n=3){return e.l<t.r+n&&e.r>t.l-n&&e.t<t.b+n&&e.b>t.t-n}_placeBox(e,t,n,r,i){let{left:a,right:o,top:s,bottom:c,obs:l}=i,u=i=>{let u,d;i===`above`?(u=e-n/2,d=t-r-8):i===`below`?(u=e-n/2,d=t+8):i===`right`?(u=e+8,d=t-r/2):(u=e-n-8,d=t-r/2),u=Math.min(o-n,Math.max(a,u)),d=Math.min(c-r,Math.max(s,d));let f={l:u,t:d,r:u+n,b:d+r};if(f.r>o+.5||f.l<a-.5||f.b>c+.5||f.t<s-.5)return null;for(let e of l)if(this._overlap(f,e,4))return null;let p=i===`above`||i===`below`?e-n/2:i===`right`?e+8:e-n-8,m=i===`left`||i===`right`?t-r/2:i===`above`?t-r-8:t+8,h=Math.hypot(u-p,d-m);return{x:u,y:d,side:i,shift:h,box:f}},d=[],f=e-a<56,p=o-e<56,m=t-s<48,h=c-t<48;f?d.push(`right`,`above`,`below`,`left`):p?d.push(`left`,`above`,`below`,`right`):m?d.push(`below`,`right`,`left`,`above`):h?d.push(`above`,`right`,`left`,`below`):d.push(`above`,`below`,`right`,`left`);let g=null;for(let e of d){let t=u(e);if(t&&((!g||t.shift<g.shift-1)&&(g=t),t.shift<6))break}return g}updateLabels(){let e=this.app.globe,t=new Set,n=[],r=e.rig?e.rig.alt:4,i=this._labelChrome(),a=(e,r,a,o,s,c,l,u,d=1)=>{let f=this._lab[e];f||(f=document.createElement(`div`),f.className=`wlab`,this.labels.appendChild(f),this._lab[e]=f),t.add(e);let p=this._limbFade(d),m=r>=0&&r<=i.W&&a>=0&&a<=i.H,h=r>=i.left-4&&r<=i.right+4&&a>=i.top-4&&a<=i.bottom+4;if(!o||p<.12||!m||!h){f.style.display=`none`,f.style.opacity=`0`;return}for(let e of i.obs)if(r>=e.l&&r<=e.r&&a>=e.t&&a<=e.b){f.style.display=`none`,f.style.opacity=`0`;return}f.style.visibility=`hidden`,f.style.display=`block`,f.style.transform=`none`,f.style.left=`0px`,f.style.top=`0px`,f.style.fontSize=u+`px`,f.style.whiteSpace=`nowrap`,f.style.maxWidth=`none`,f.className=`wlab `+(c||``),f._html!==s&&(f.innerHTML=s,f._html=s);let g=Math.ceil(f.offsetWidth)||40,_=Math.ceil(f.offsetHeight)||20;g>i.width&&(f.style.whiteSpace=`normal`,f.style.maxWidth=Math.max(40,i.width)+`px`,g=Math.min(i.width,Math.ceil(f.offsetWidth)||i.width),_=Math.ceil(f.offsetHeight)||20);let v=this._placeBox(r,a,g,_,i);if(!v)f.style.display=`none`,f.style.opacity=`0`;else{for(let e of n)if(this._overlap(v.box,e.box,3)){if(l<=e.pri){f.style.display=`none`,f.style.opacity=`0`;return}e.el.style.display=`none`,e.el.style.opacity=`0`,e.box={l:-999,t:-999,r:-999,b:-999}}f.style.left=v.x+`px`,f.style.top=v.y+`px`,f.style.visibility=`visible`,f.style.display=`block`,f.style.opacity=String(p),f.className=`wlab `+(c||``)+` side-`+v.side,n.push({box:v.box,pri:l,el:f,id:e,ax:r,ay:a,fade:p,side:v.side})}},o=(t,n,r,i,o,s)=>{e.projectVert(n,this._tmp),a(t,this._tmp.x,this._tmp.y,this._tmp.visible,r,i,o,s,this._tmp.dot??1)};if(this.app.game.home){let e=this.app.game.home;o(`home`,e.v,`<div class="nm">⌂ ${e.name}</div><div class="meta">${this.app.game.totalStock(e)} gathered</div>`,`home`,8,12)}let s=this.app.game.cities.slice().sort((e,t)=>w(t.tier).pri-w(e.tier).pri);for(let e of s){let t=w(e.tier);if(r>t.maxAlt)continue;let n=e.research&&e.owner===`human`?` · Lab`:``,i=(e.owner===`horde`?`${e.garrison} dead`:`${t.name}`)+n,a=(e.owner===`horde`?`inf `:``)+`t-`+e.tier+(n?` lab`:``);o(`c`+e.id,e.v,`<div class="nm">${t.icon} ${e.name}</div><div class="meta">${i}</div>`,a,3+t.pri+ +(e.owner===`horde`),t.labelSize)}for(let t of this.app.game.liveEvents?this.app.game.liveEvents():[]){let n=Math.max(0,Math.ceil((t.dur||0)-(t.t||0))),r=t.kind===`convoy`&&t.path?null:t.v,i=`<div class="nm">${ae[t.kind]?.name||t.name}</div><div class="meta">${n}s left${t.cityName?` · `+t.cityName:``}</div>`;if(t.kind===`convoy`&&t.path){let n=Ce(this.app.world,t.path,t.progress||0);e.projectDir(n.x,n.y,n.z,this._tmp),a(`ev`+t.id,this._tmp.x,this._tmp.y,this._tmp.visible,i,`event`,7,11,this._tmp.dot??1)}else r!=null&&o(`ev`+t.id,r,i,`event`,7,11)}for(let t of this.app.game.activeRaids()){if(!t.path)continue;let n=t.state===`battle`?1:t.progress;if(n<.16||n>.9)continue;let r=Ce(this.app.world,t.path,n);e.projectDir(r.x,r.y,r.z,this._tmp),a(`r`+t.id,this._tmp.x,this._tmp.y,this._tmp.visible,`<div class="nm">${t.kind===`strike`?`Strike`:`Host`}</div><div class="meta">${t.toName}</div>`,``,2,10,this._tmp.dot??1)}for(let e of Object.keys(this._lab))t.has(e)||(this._lab[e].remove(),delete this._lab[e]);this._labelPlaced=n.filter(e=>e.el.style.display!==`none`)}labelReport(){let e=this._labelChrome(),t=[],n=0,r=0,i=0,a=[];for(let[o,s]of Object.entries(this._lab)){if(s.style.display===`none`||s.style.visibility===`hidden`)continue;let c=s.getBoundingClientRect();if(c.width<1||c.height<1)continue;let l={id:o,text:(s.textContent||``).replace(/\s+/g,` `).trim(),left:c.left,top:c.top,right:c.right,bottom:c.bottom,opacity:parseFloat(s.style.opacity||`1`)},u=.6;(c.left<e.left-u||c.right>e.right+u||c.top<e.top-u||c.bottom>e.bottom+u)&&(l.clipped=!0,n++),(c.left<-.6||c.right>e.W+u||c.top<-.6||c.bottom>e.H+u)&&(l.offscreen=!0,i++);for(let t of e.obs)this._overlap({l:c.left,t:c.top,r:c.right,b:c.bottom},t,1)&&(l.overChrome=!0,n++);for(let e of a)this._overlap({l:c.left,t:c.top,r:c.right,b:c.bottom},e,1)&&(l.overlapped=!0,r++);a.push({l:c.left,t:c.top,r:c.right,b:c.bottom}),t.push(l)}return{n:t.length,clipped:n,overlapped:r,off:i,safe:{left:e.left,top:e.top,right:e.right,bottom:e.bottom,W:e.W,H:e.H},items:t}}};document.title=e+` v7.1`;var Tm=document.getElementById(`gl`),Em=new URLSearchParams(location.search),Dm=Em.get(`qa`)||null,Om=Em.has(`seed`)?parseInt(Em.get(`seed`),10)||1:null,km,Q,Am={state:{spinning:!1},simInLoop:!0};window.__horde=Am;function jm(e){return new we(e|0||1)}function Mm(){if(Em.has(`fresh`)||Dm===`fresh`)return!1;let e=null;try{e=JSON.parse(localStorage.getItem(`horde-save-v3`)||`null`)}catch{e=null}if(!e){try{(localStorage.getItem(`horde-save-v2`)||localStorage.getItem(`horde-save-v1`))&&(Am.resetNote=`A new hunt begins — the world has grown. Previous progress was reset.`)}catch{}return!1}try{return km=jm(e.seed),Q=new ft(km),Q.deserialize(e),!0}catch(e){console.warn(`save load failed`,e);try{localStorage.removeItem(t)}catch{}return!1}}var Nm=performance.now(),Pm=Mm();Pm||(km=jm(Om||Date.now()^Math.random()*2147483647||1),Q=new ft(km)),console.info(`world ready`,km.seed,km.N,`verts`,km.cities.length,`cities`,Math.round(performance.now()-Nm),`ms`),Am.world=km,Am.game=Q;var Fm=new pp(Tm,km,Q);Am.globe=Fm,Am.renderer=Fm;var $=new wm(Am);if(Am.ui=$,Am.resetNote&&!Dm){let e=document.createElement(`div`);e.className=`migrate-note`,e.innerHTML=`<b>New world.</b> ${Am.resetNote}`,$.root.appendChild(e),setTimeout(()=>e.remove(),7e3)}function Im(){if(Q.home){Fm.rig.lookVert(Q.home.v,1.85);return}let e=km.cities[0];e&&Fm.rig.lookVert(e.v,Fm.rig.fitAlt())}Im();function Lm(){if(!window.__noSave)try{let e=Q.serialize();e.savedAt=Date.now(),localStorage.setItem(t,JSON.stringify(e))}catch(e){console.warn(`save failed`,e)}}Am.save=Lm,setInterval(Lm,12e3),window.addEventListener(`pagehide`,Lm),document.addEventListener(`visibilitychange`,()=>{document.hidden&&Lm()}),Am.newGame=()=>{try{localStorage.removeItem(t)}catch{}let e=new URL(location.href);e.search=``,location.assign(e.href)},Am.onCoachDone=()=>{try{localStorage.setItem(n,`1`)}catch{}Q.phase===`pick`&&$.hintFlash(`Spin the world, then tap <b>land</b> to plant your nest.`)};var Rm=new Map,zm=!1,Bm=null,Vm={t:0,x:0,y:0,vx:0,vy:0};function Hm(e){return e.pointerId}Tm.addEventListener(`pointerdown`,e=>{if(Rp(),Tm.setPointerCapture(e.pointerId),Rm.set(Hm(e),{x:e.clientX,y:e.clientY}),Fm.rig.vLat=0,Fm.rig.vLon=0,Fm.rig.fly=null,zm=!1,Vm={t:performance.now(),x:e.clientX,y:e.clientY,vx:0,vy:0},Rm.size===2){let[e,t]=[...Rm.values()];Bm={d:Math.hypot(e.x-t.x,e.y-t.y),mx:(e.x+t.x)/2,my:(e.y+t.y)/2},zm=!0}}),Tm.addEventListener(`pointermove`,e=>{if(!Rm.has(Hm(e)))return;let t=Rm.get(Hm(e)),n=e.clientX-t.x,r=e.clientY-t.y;if(Rm.set(Hm(e),{x:e.clientX,y:e.clientY}),Rm.size===2&&Bm){let[e,t]=[...Rm.values()],n=Math.hypot(e.x-t.x,e.y-t.y),r=(e.x+t.x)/2,i=(e.y+t.y)/2;n>10&&Bm.d>10&&Fm.rig.zoomBy(Bm.d/n),Fm.rig.rotateBy(r-Bm.mx,i-Bm.my),Bm={d:n,mx:r,my:i},zm=!0}else if(Rm.size===1){Math.hypot(n,r)>2&&(zm=!0),Fm.rig.rotateBy(n,r);let t=performance.now(),i=Math.max(1,t-Vm.t);Vm={t,x:e.clientX,y:e.clientY,vx:Vm.vx*.6+n/i*16*.4,vy:Vm.vy*.6+r/i*16*.4}}});function Um(e){if(Rm.has(Hm(e))){if(Rm.delete(Hm(e)),Rm.size<2&&(Bm=null),Rm.size===0)zm?Math.hypot(Vm.vx,Vm.vy)>.4&&performance.now()-Vm.t<80&&Fm.rig.fling(Vm.vx,Vm.vy):Wm(e),Bm=null;else if(Rm.size===1){let[e]=[...Rm.values()];Vm={t:performance.now(),x:e.x,y:e.y,vx:0,vy:0}}}}Tm.addEventListener(`pointerup`,Um),Tm.addEventListener(`pointercancel`,Um),Tm.addEventListener(`wheel`,e=>{e.preventDefault();let t=Math.exp(e.deltaY*.0016);Fm.rig.zoomBy(t)},{passive:!1});function Wm(e){let t=Fm.pick(e.clientX,e.clientY);$.onTapGlobe(t)}var Gm=performance.now(),Km=0,qm=1/30,Jm=!1,Ym=[];window.addEventListener(`error`,e=>Ym.push(String(e.message||e))),window.addEventListener(`unhandledrejection`,e=>Ym.push(String(e.reason||e)));function Xm(e){let t=Math.min(.05,(e-Gm)/1e3);if(Gm=e,Km+=t,Am.simInLoop)for(;Km>=qm;)Q.step(qm),Km-=qm;else Km=0;Fm.update(t),$.updatePips(t),$.update();try{Xp(Q,t)}catch{}!Jm&&e>700&&(document.getElementById(`boot`).classList.add(`hide`),Jm=!0),(e|0)%2e3<20&&Fm.adaptQuality(),requestAnimationFrame(Xm)}requestAnimationFrame(Xm),Dm||(!Pm&&!localStorage.getItem(`horde-coach-v3`)?$.showCoach():!Pm&&Q.phase===`pick`?($.hintFlash(`Spin the world, then tap <b>land</b> to plant your nest.`),$.startTutorial()):Dm||$.startTutorial()),`serviceWorker`in navigator&&location.protocol!==`file:`&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(()=>{}));function Zm(){let e=new Set(km.cities.map(e=>e.v)),t=-1,n=-1;for(let r=0;r<km.N;r++){if(km.height[r]<.08||e.has(r))continue;let i=Math.abs(km.lat[r]);if(i>1.1)continue;let a=!0;for(let e of km.cities)if(km.pos[r*3]*km.pos[e.v*3]+km.pos[r*3+1]*km.pos[e.v*3+1]+km.pos[r*3+2]*km.pos[e.v*3+2]>.96){a=!1;break}if(!a)continue;let o=km.height[r]*(1.2-i);o>n&&(n=o,t=r)}if(t<0){for(let e=0;e<km.N;e++)if(km.height[e]>=.06)return e}return t}Object.assign(Am,{TITLE:e,SAVE_KEY:t,save:Lm,sfx:Gp,setMuted:Pp,isMuted:Fp,resumeAudio:Rp,tickAudio:Xp,audioState:zp,getAudioLog:jp,clearAudioLog:Mp,errors:Ym,fps:()=>Fm.fps,stats:()=>({fps:Math.round(Fm.fps),phase:Q.phase,brains:Q.brains,points:Q.points,stock:Q.home?Q.totalStock(Q.home):0,captured:Q.cities.filter(e=>e.owner===`horde`).map(e=>e.id),outcome:Q.outcome,upgrades:{...Q.upgrades},time:Q.time,raids:Q.raids.map(e=>({id:e.id,kind:e.kind,state:e.state,result:e.result,to:e.toName,brains:e.brainsAward??e.brains,points:e.pointsAward??0})),home:Q.home&&{v:Q.home.v,type:Q.home.type,stock:{...Q.home.stock}},cities:Q.cities.map(e=>({id:e.id,name:e.name,owner:e.owner,tier:e.tier,wallHp:e.wallHp,garrison:e.garrison}))}),setSpeed:e=>{Q.speed=e},setSimInLoop:e=>{Am.simInLoop=!!e},pause:e=>{Q.paused=!!e,$.pausedMenu=!1},skipHowTo:()=>{$.hideCoach();try{localStorage.setItem(n,`1`)}catch{}},showHowTo:()=>$.showCoach(),pickLand:()=>Zm(),pickBase:(e,t)=>{let n=typeof e==`number`&&e>=0?e:Zm(),r=typeof e==`string`?e:t||`graveyard`,i=Q.pickBase(n,r);return i&&($.pickReady=!1,Fm.setPickVert(-1),Fm.rig.lookVert(Q.home.v,1.85),$._tutorMaybe&&$._tutorMaybe(`pick`),$.renderMenus()),i?Q.home:null},addBrains:e=>Q.addBrains(e),addStock:(e,t,n)=>Q.addStock(e||`home`,t||`shambler`,n),launchRaid:(e,t,n,r)=>Q.launchRaid(e||`home`,t,n||{shambler:8,runner:0,brute:0},r||{}),skipMarch:e=>{let t=e||Q.activeRaids()[0]&&Q.activeRaids()[0].id;t&&Q.skipMarch(t);let n=Q.raid(t);return n&&n.toId&&Q.cById[n.toId]&&Fm.rig.lookVert(Q.cById[n.toId].v,1.4),n},weakenCity:e=>Q.weakenCity(e),fortifyCity:e=>Q.fortifyCity(e),forceStrike:e=>Q.forceStrike(e||`home`),buyUpgrade:e=>Q.buyUpgrade(e),serialize:()=>Q.serialize(),deserialize:e=>(Q.deserialize(e),Q.statsReport()),lookCity:(e,t)=>{let n=km.cityById(e)||Q.cById[e];n&&Fm.rig.lookVert(n.v,t??1.5)},flyCity:(e,t)=>{let n=km.cityById(e)||Q.cById[e];n&&Fm.rig.flyToVert(n.v,t??1.5)},lookHome:e=>{Q.home&&Fm.rig.lookVert(Q.home.v,e??1.85)},openShop:()=>{$.shopOpen=!0,$.raidCity=null,$.renderMenus()},openRaid:e=>{$.raidCity=e,$.shopOpen=!1,$.renderMenus()},closeSheets:()=>{$.shopOpen=!1,$.coach=!1,$.pausedMenu=!1,$.raidCity=null,$.raidEvent=null,$.settingsOpen=!1,$.statsOpen=!1,$.pickReady=!1,$.renderMenus()},pipInfo:()=>[...$.pips.entries()].map(([e,t])=>{let n=Q.raid(+e)||Q.raids.find(t=>t.id===+e);return{id:e,mode:t.mode,glitched:t.glitched,ended:!!t.ended,minimized:t.minimized,full:t.el.classList.contains(`full`),leaked:t.el.classList.contains(`leaked`),end:t.el.classList.contains(`end`),headline:t.el.querySelector(`[data-eh]`)?.textContent||``,sub:t.el.querySelector(`[data-ep]`)?.textContent||``,channel:n?.channel?.name||t.el.querySelector(`.ch-logo`)?.textContent||``,result:n?.result,kind:n?.kind,to:n?.toName}}),pipToggleFull:e=>{let t=e||$.pips.keys().next().value;t!=null&&$._toggleFull(+t)},settlementReport:()=>km.settlementReport(),findByTier:e=>Q.cities.filter(t=>t.tier===e),oddsFor:(e,t)=>Q.oddsFor(Q.cById[e],t||{shambler:4,runner:0,brute:0}),lookOcean:e=>{let t=km.openOceanVert();return t>=0&&Fm.rig.lookVert(t,e??Fm.rig.fitAlt()),Fm.setPreviewPath(null),t},localStamp:()=>{let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`},fillBattle:e=>{let t=Q.raids.find(e=>e.state===`battle`&&e.battle);if(!t)return 0;let n=t.battle,r={hp:16};for(let t=0;t<e;t++)n.units.push({id:9e4+t,type:`shambler`,side:`zombie`,x:4+Math.random()*6,z:6+Math.random()*16,vx:0,vz:0,rot:0,hp:r.hp,maxHp:r.hp,cd:0,convert:0,state:`idle`});return n._tally(),n.zombieCount()},buyTypeUpgrade:(e,t)=>Q.buyTypeUpgrade(e,t),battleVisuals:()=>[...$.pips.values()].map(e=>e.view&&e.view.visuals?e.view.visuals():null).filter(Boolean),setMode:(e,t)=>{let n=t==null?[...$.pips.values()][0]:$.pips.get(+t);return n&&n.view&&n.view.setMode(e),n&&n.view?n.view.mode:null},setShot:(e,t)=>{let n=t==null?[...$.pips.values()][0]:$.pips.get(+t);return n&&n.view&&n.view.setShot(e),n&&n.view?n.view.shot:null},forceTownFall:e=>{let t=e==null?Q.raids.find(e=>e.state===`battle`&&e.battle):Q.raid(+e);return t&&t.battle&&t.battle.forceTownFall?t.battle.forceTownFall():0},infectionInfo:()=>Fm.infectionInfo(),newsHeadlines:()=>$.campaignTick(),advanceTime:e=>(Q.time+=e,Fm._paintAll(),Q.time),captureCity:e=>{let t=Q.cById[e];return t?(t.owner=`horde`,t.capturedAt=Q.time,t.wallHp=0,Q.recentFalls=(Q.recentFalls||[]).concat([{id:t.id,name:t.name,tier:t.tier,t:Q.time}]).slice(-12),Fm._paintAll(),{id:t.id,name:t.name,tier:t.tier,capturedAt:t.capturedAt}):null},tickerText:()=>{let e=[...$.pips.values()][0];return e?e.el.querySelector(`[data-tk]`)?.textContent||``:$.campaignTick()&&$.campaignTick().ticker},typeLevels:()=>JSON.parse(JSON.stringify(Q.typeLv||{})),typeStat:e=>_(e||`shambler`,Q.typeLv),labelBoxes:()=>$.labelReport(),placeCityAtEdge:(e,t,n)=>{let r=km.cityById(e)||Q.cById[e];if(!r)return null;let i=Fm.rig;i.fly=null,i.vLat=0,i.vLon=0;let a=n??1.45;i.lookVert(r.v,a);let o={x:0,y:0,visible:!1,dot:1},s=()=>{i.update(0),Fm.projectVert(r.v,o)};s();let c=$._labelChrome(),l=t===`left`?c.left+44:t===`right`?c.right-44:(c.left+c.right)/2,u=t===`top`?c.top+44:t===`bottom`?c.bottom-44:(c.top+c.bottom)/2,d=t===`left`||t===`right`,f=i.lon,p=i.lat,m=()=>!o.visible||o.dot<.4||o.x<-8||o.x>c.W+8||o.y<-8||o.y>c.H+8?1/0:Math.abs(d?o.x-l:o.y-u)+(o.dot<.5?(.5-o.dot)*80:0),h=e=>{i.lon=f,i.lat=p,d?i.lon=f+e:(i.lat=p+e,i.clamp()),s()},g=0,_=1/0,v=(e,t,n)=>{for(let r=0;r<=n;r++){let i=e+(t-e)*(r/n);h(i);let a=m();a<_&&(_=a,g=i)}};return v(-.7,.7,56),v(g-.04,g+.04,16),h(g),$.updateLabels(),s(),{id:r.id,name:r.name,tier:r.tier,side:t,alt:i.alt,x:o.x,y:o.y,visible:o.visible,dot:o.dot,target:{x:l,y:u},offset:g,score:_,safe:{left:c.left,top:c.top,right:c.right,bottom:c.bottom,W:c.W,H:c.H},labels:$.labelReport()}},isNightAt:e=>{let t=Q.cById[e];return t?Ke(km,t.v,Q.time):!1},setGameTime:e=>(Q.time=e,Q.time),setAlarm:e=>Q.setAlarm(e),setCure:e=>Q.setCure(e),forceAwareness:e=>Q.forceAwareness(e),awarenessInfo:()=>Q.awarenessInfo(),popShare:()=>Q.popShare(),defendersOf:e=>{let t=Q.cById[e];return t?Q._cityDefenders(t):null},forceCure:()=>Q.forceCure(),completeDistribution:()=>Q._finishDistribution(),distributionInfo:()=>Q.distributionInfo(),cureWaveInfo:()=>Fm.cureWaveInfo?Fm.cureWaveInfo():null,forceQuarantine:()=>Q.forceQuarantine(),breakQuarantine:e=>Q.breakQuarantine(e),forceBomb:(e,t)=>Q.forceBomb(e,t||{}),forceNuke:e=>Q.forceNuke(e),canBomb:e=>{let t=Q.cById[e];return t?Q.canBombTarget({kind:`city`,id:t.id,tier:t.tier}):!1},canNuke:e=>{let t=Q.cById[e];return t?Q.canNukeTarget(t):!1},awarenessMigrate:()=>Q._migratedAwareness||null,researchCities:()=>Q.researchCities(),heroState:()=>Q.heroState(),qaCapture:e=>Q.qaCapture(e),alarmInfo:()=>({alarm:Q.alarm,stage:Q.stageFlags&&Object.keys(Q.stageFlags)||[],flags:{...Q.stageFlags},cure:Q.cure,loseReason:Q.loseReason,outcome:Q.outcome,quarantines:(Q.quarantines||[]).map(e=>({id:e.id,hp:e.hp,broken:!!e.broken,rad:e.rad})),bombs:(Q.bombs||[]).map(e=>({id:e.id,t:e.t,dur:e.dur,hit:!!e.hit,target:e.target&&e.target.name}))}),grantSpecials:()=>{Q.upgrades.runners=!0,Q.upgrades.brutes=!0,Q.upgrades.screamers=!0,Q.upgrades.spitters=!0,Q.upgrades.abominations=!0;let e=Q.home&&Q.home.id||`home`;Q.addStock(e,`screamer`,4),Q.addStock(e,`spitter`,4),Q.addStock(e,`abomination`,2),Q.addStock(e,`runner`,8),Q.addStock(e,`brute`,4),Q.addStock(e,`shambler`,40);let t=Q.bases.find(t=>t.id===e)||Q.home;return{upgrades:{...Q.upgrades},stock:t&&{...t.stock}}},setHero:e=>Q.hero?(Object.assign(Q.hero,e||{}),Q.heroState()):null,openRaidPlanner:e=>($.raidCity=e,$.renderMenus(),!!$.root.querySelector(`.raidplan`)),forceEvent:(e,t)=>Q.forceEvent(e,t||{}),expireEvent:e=>Q.expireEvent(e),liveEvents:()=>(Q.liveEvents?Q.liveEvents():[]).map(e=>({...e,path:e.path?e.path.slice():null})),eventById:e=>Q.eventById(e),statsReport:()=>Q.statsReport(),oddsFor:(e,t,n)=>{let r=Q.eventById(e)||Q.cById[e]||e;return Q.oddsFor(r,t||{shambler:8},n||{})},trialBattles:(e,t,n,r)=>{let i=Q.eventById(e)||Q.cById[e]||e;return Q.trialBattles(i,t||{shambler:8},n||24,r||{})},grantArmored:()=>{Q.upgrades.armored=!0;let e=Q.home&&Q.home.id||`home`;Q.addStock(e,`armored`,4);let t=Q.bases.find(t=>t.id===e)||Q.home;return{upgrades:{...Q.upgrades},stock:t&&{...t.stock}}},lookEvent:(e,t)=>{let n=Q.eventById(e)||Q.liveEvents()[0];return n&&Fm.rig.lookVert(n.v,t??1.45),n},openEventPlanner:e=>{let t=e?Q.eventById(e):Q.liveEvents()[0];return t?($.raidEvent=t.id,$.raidCity=null,$.renderMenus(),!!$.root.querySelector(`.raidplan`)):!1},openSettings:()=>{$.settingsOpen=!0,$.statsOpen=!1,$.shopOpen=!1,$.renderMenus()},openStats:()=>{$.statsOpen=!0,$.settingsOpen=!1,$.shopOpen=!1,$.renderMenus()},startTutorial:e=>$.startTutorial(!!e),skipTutorial:()=>$.skipTutorial(),tutorialState:()=>({step:$.tutorStep,flag:it(),visible:!(!$.tutorEl||$.tutorEl.hidden)}),getSettings:()=>nt(),setSettings:e=>{let t=rt(e||{});return $.applySettings(),t},vibrateLog:()=>ot.slice(),clearVibrateLog:()=>(st(),[]),setTutorialFlag:e=>(at(e),it()),openTree:()=>($.shopOpen=!0,$.shopTab=`tree`,$.settingsOpen=!1,$.statsOpen=!1,$.renderMenus(),!!$.root.querySelector(`.tree-wrap`)),buyTree:e=>Q.buyTree(e),treeState:()=>({owned:{...Q.tree||{}},brains:Q.brains,mods:Q.mods()}),mods:()=>Q.mods(),forcePrestige:e=>{let t=Q.forcePrestige(e);return $.renderMenus(),t},pickPrestige:e=>{let t=Q.pickPrestige(e);return $.renderMenus(),t},prestigeState:()=>Q.prestigeState(),migrateInfo:()=>Q._migratedUtility||null}),Object.defineProperty(Am,"game",{get:()=>Q,configurable:!0}),Object.defineProperty(Am,"world",{get:()=>km,configurable:!0}),Object.defineProperty(Am,"globe",{get:()=>Fm,configurable:!0}),Object.defineProperty(Am,"ui",{get:()=>$,configurable:!0});