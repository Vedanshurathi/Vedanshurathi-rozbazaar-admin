
:root{
  --bg:#0B1322; --bg2:#111C30; --bg3:#18263E; --line:#22334F;
  --tx:#E8EEF7; --tx2:#93A4BE; --mut:#64758F;
  --g:#2FA850; --g-lt:#4FD873; --g-s:rgba(47,168,80,.14);
  --or:#F2760D; --or-s:rgba(242,118,13,.14);
  --red:#E5484D; --red-s:rgba(229,72,77,.14);
  --blue:#3E7BFA; --blue-s:rgba(62,123,250,.14);
  --yel:#F5C518; --yel-s:rgba(245,197,24,.14);
  --sh:0 2px 8px rgba(0,0,0,.28); --sh2:0 8px 28px rgba(0,0,0,.4);
  --ui:-apple-system,'Segoe UI',Roboto,'Noto Sans',Arial,sans-serif;
  --disp:'Baloo 2',var(--ui);
  --sp:cubic-bezier(.34,1.56,.64,1); --ez:cubic-bezier(.22,1,.36,1);
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{font-family:var(--ui);background:var(--bg);color:var(--tx);min-height:100vh;
  font-size:14.5px;-webkit-font-smoothing:antialiased}
button,input,select,textarea{font:inherit;color:inherit;border:none;background:none;cursor:pointer}
input,select,textarea{cursor:auto}
::-webkit-scrollbar{width:9px;height:9px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--line);border-radius:9px}
.disp{font-family:var(--disp);font-weight:800;letter-spacing:-.3px}
a{color:inherit;text-decoration:none}

/* ---------- shell ---------- */
.app{display:flex;min-height:100vh}
.side{width:236px;flex-shrink:0;background:var(--bg2);border-right:1px solid var(--line);
  padding:20px 14px;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;gap:5px}
.brand{display:flex;align-items:center;gap:10px;padding:2px 8px 20px}
.brand img{width:34px;height:34px;border-radius:10px;background:#fff;padding:4px}
.brand b{font-family:var(--disp);font-size:17px}
.brand span{display:block;font-size:10.5px;font-weight:800;color:var(--mut);letter-spacing:1.4px}
.nav{display:flex;align-items:center;gap:11px;padding:11px 13px;border-radius:11px;
  font-size:14px;font-weight:700;color:var(--tx2);width:100%;text-align:left;
  transition:background .18s,color .18s}
.nav:hover{background:var(--bg3);color:var(--tx)}
.nav.on{background:var(--g-s);color:var(--g-lt)}
.nav .ic{width:20px;text-align:center;font-size:15px}
.nav .badge{margin-left:auto;background:var(--red);color:#fff;font-size:10.5px;font-weight:800;
  padding:2px 7px;border-radius:20px}
.side-foot{margin-top:auto;padding-top:14px;border-top:1px solid var(--line)}
.main{flex:1;min-width:0}
.top{position:sticky;top:0;z-index:40;background:rgba(11,19,34,.92);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--line);padding:15px 24px;display:flex;align-items:center;gap:14px}
.top h1{font-family:var(--disp);font-size:21px}
.top .sub{font-size:12.5px;color:var(--mut);font-weight:600}
.top .rt{margin-left:auto;display:flex;align-items:center;gap:10px}
.body{padding:22px 24px 60px;max-width:1500px}

.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border-radius:10px;
  padding:10px 16px;font-size:13.5px;font-weight:800;transition:transform .15s var(--sp),background .18s}
.btn:active{transform:scale(.96)}
.btn-g{background:var(--g);color:#fff}
.btn-g:hover{background:var(--g-lt)}
.btn-o{border:1.5px solid var(--line);background:var(--bg2);color:var(--tx2)}
.btn-o:hover{border-color:var(--mut);color:var(--tx)}
.btn-r{background:var(--red-s);color:var(--red);border:1.5px solid rgba(229,72,77,.3)}
.btn-sm{padding:7px 12px;font-size:12.5px;border-radius:9px}
.btn:disabled{opacity:.45;pointer-events:none}

/* ---------- cards ---------- */
.grid{display:grid;gap:15px}
.k4{grid-template-columns:repeat(4,1fr)}
.k3{grid-template-columns:repeat(3,1fr)}
.k2{grid-template-columns:repeat(2,1fr)}
.card{background:var(--bg2);border:1px solid var(--line);border-radius:15px;padding:18px;
  box-shadow:var(--sh);position:relative;overflow:hidden}
.kpi .lb{font-size:11.5px;font-weight:800;color:var(--mut);letter-spacing:.9px;text-transform:uppercase}
.kpi .nm{font-family:var(--disp);font-size:34px;margin-top:5px;line-height:1}
.kpi .dt{font-size:12px;font-weight:700;color:var(--tx2);margin-top:5px}
.kpi.warn{border-color:rgba(242,118,13,.4)}
.kpi.warn .nm{color:var(--or)}
.kpi.bad{border-color:rgba(229,72,77,.4)}
.kpi.bad .nm{color:var(--red)}
.kpi.good .nm{color:var(--g-lt)}
.sec{display:flex;align-items:center;gap:10px;margin:26px 0 13px}
.sec h2{font-family:var(--disp);font-size:18px}
.sec .r{margin-left:auto;font-size:12.5px;font-weight:700;color:var(--mut)}

/* ---------- table ---------- */
.tw{overflow-x:auto;border:1px solid var(--line);border-radius:14px;background:var(--bg2)}
table{width:100%;border-collapse:collapse;min-width:640px}
th{text-align:left;font-size:11px;font-weight:800;color:var(--mut);letter-spacing:.9px;
  text-transform:uppercase;padding:12px 14px;border-bottom:1px solid var(--line);white-space:nowrap;
  background:var(--bg3);position:sticky;top:0}
td{padding:13px 14px;border-bottom:1px solid var(--line);font-size:13.5px;vertical-align:middle}
tr:last-child td{border-bottom:none}
tbody tr{transition:background .15s}
tbody tr:hover{background:var(--bg3)}
td b{font-weight:800}
td .mu{color:var(--mut);font-size:12px}
.pill{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:800;
  padding:4px 9px;border-radius:20px;white-space:nowrap}
.p-g{background:var(--g-s);color:var(--g-lt)}
.p-o{background:var(--or-s);color:var(--or)}
.p-r{background:var(--red-s);color:var(--red)}
.p-b{background:var(--blue-s);color:var(--blue)}
.p-y{background:var(--yel-s);color:var(--yel)}
.p-m{background:var(--bg3);color:var(--mut)}

/* ---------- readiness ---------- */
.chk{display:flex;align-items:flex-start;gap:13px;padding:14px 0;border-bottom:1px solid var(--line)}
.chk:last-child{border-bottom:none}
.chk .dot{width:26px;height:26px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;
  justify-content:center;font-size:13px;font-weight:800}
.chk.ok .dot{background:var(--g-s);color:var(--g-lt)}
.chk.no .dot{background:var(--red-s);color:var(--red)}
.chk.wa .dot{background:var(--or-s);color:var(--or)}
.chk b{display:block;font-size:14.5px}
.chk span{font-size:12.5px;color:var(--tx2);line-height:1.5}
.chk .act{margin-left:auto;flex-shrink:0}
.ring{--p:0;width:96px;height:96px;border-radius:50%;flex-shrink:0;
  background:conic-gradient(var(--g-lt) calc(var(--p)*1%), var(--bg3) 0);
  display:flex;align-items:center;justify-content:center;transition:--p .8s var(--ez)}
.ring i{width:76px;height:76px;border-radius:50%;background:var(--bg2);display:flex;
  align-items:center;justify-content:center;font-family:var(--disp);font-size:23px;font-style:normal}

/* ---------- chart ---------- */
.bars{display:flex;align-items:flex-end;gap:7px;height:150px}
.bars .b{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;
  justify-content:flex-end}
.bars .b i{width:100%;border-radius:6px 6px 3px 3px;background:var(--g);min-height:4px;
  transition:height .7s var(--ez);display:block}
.bars .b span{font-size:10.5px;font-weight:700;color:var(--mut)}
.bars .b em{font-size:10.5px;font-weight:800;font-style:normal;color:var(--tx2)}

.empty{text-align:center;padding:44px 20px;color:var(--mut)}
.empty .e{font-size:40px;opacity:.5}
.empty b{display:block;font-family:var(--disp);font-size:16px;color:var(--tx2);margin-top:10px}
.empty p{font-size:13px;margin-top:5px}
.sk{background:linear-gradient(90deg,var(--bg3) 25%,#1E2F4A 37%,var(--bg3) 63%);
  background-size:400% 100%;animation:sh 1.3s infinite;border-radius:8px;height:14px}
@keyframes sh{0%{background-position:100% 0}100%{background-position:-100% 0}}
.fld{width:100%;background:var(--bg3);border:1.5px solid var(--line);border-radius:10px;
  padding:11px 13px;font-size:14px;outline:none;transition:border-color .18s}
.fld:focus{border-color:var(--g)}
.lb{display:block;font-size:11.5px;font-weight:800;color:var(--mut);letter-spacing:.7px;
  text-transform:uppercase;margin-bottom:6px}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.toast{position:fixed;bottom:26px;left:50%;transform:translateX(-50%) translateY(16px);
  background:var(--bg3);border:1px solid var(--line);color:var(--tx);padding:13px 20px;
  border-radius:30px;font-size:13.5px;font-weight:700;opacity:0;transition:all .3s var(--sp);
  z-index:200;pointer-events:none;box-shadow:var(--sh2);max-width:90vw;text-align:center}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.scr{display:none}.scr.on{display:block;animation:in .32s var(--ez)}
@keyframes in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}

/* ---------- login ---------- */
#login{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
.lcard{width:100%;max-width:390px;background:var(--bg2);border:1px solid var(--line);
  border-radius:20px;padding:30px;text-align:center;box-shadow:var(--sh2)}
.lcard img{width:58px;height:58px;border-radius:16px;background:#fff;padding:7px;margin:0 auto 16px}

/* ---------- mobile ---------- */
@media(max-width:900px){
  .side{position:fixed;bottom:0;left:0;right:0;top:auto;width:100%;height:auto;flex-direction:row;
    border-right:none;border-top:1px solid var(--line);padding:8px 6px calc(8px + env(safe-area-inset-bottom));
    z-index:60;overflow-x:auto}
  .brand,.side-foot{display:none}
  .nav{flex-direction:column;gap:4px;font-size:10.5px;padding:7px 6px;min-width:64px;flex:1 0 auto}
  .side{gap:2px;scrollbar-width:none}
  .side::-webkit-scrollbar{display:none}
  .nav .ic{font-size:18px}
  .nav .badge{position:absolute;top:2px;right:10px;margin:0}
  .nav{position:relative}
  .body{padding:16px 14px 110px}
  .top{padding:13px 14px}
  .top h1{font-size:18px}
  .k4,.k3,.k2{grid-template-columns:repeat(2,1fr)}
  .grid{gap:11px}
  .card{padding:15px}
  .kpi .nm{font-size:27px}
  .bars{overflow-x:auto;scrollbar-width:none;padding-bottom:4px}
  .bars::-webkit-scrollbar{display:none}
  .bars .b{flex:0 0 auto;min-width:36px}
}
@media(max-width:420px){.k4,.k3,.k2{grid-template-columns:1fr 1fr}.kpi .nm{font-size:24px}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}

/* server-mode banner */
.mode{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:800;
  padding:4px 10px;border-radius:20px;background:var(--yel-s);color:var(--yel)}
.mode.live{background:var(--g-s);color:var(--g-lt)}
.banner{background:var(--yel-s);border:1px solid rgba(245,197,24,.35);border-radius:13px;
  padding:13px 16px;font-size:13px;color:var(--tx2);line-height:1.55;margin-bottom:16px}
.banner b{color:var(--yel)}
