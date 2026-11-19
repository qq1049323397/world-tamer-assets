/* p12-wild-bundle.js — WT-v7 Wild Roguelike & Bond Runtime */
;
(function(){
;
if(window.__p12WildLoaded)return;window.__p12WildLoaded=true;
;
window.P12_WILD_CSS="/* hook/wild/wild.css — WT-v7 晴空测绘沙盘微肉鸽（紧凑流体比例 × 四档视口 0 溢出自适应） */\n.p12-wild-root {\n  --navy: #1b2340;\n  --navy-2: #253056;\n  --ceramic: #ffffff;\n  --ceramic-soft: rgba(255, 255, 255, 0.94);\n  --sun: #ff6b2b;\n  --sky: #0ea5e9;\n  --mint: #10b981;\n  --gold: #f59e0b;\n  --hot: #ff3b5c;\n  --mono: \"Bahnschrift\", \"DIN Alternate\", Consolas, monospace;\n  --sans: \"HarmonyOS Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  --cut: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));\n  --cut-sm: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));\n\n  position: relative;\n  width: 100%;\n  max-width: 1080px;\n  height: clamp(470px, 66vh, 630px);\n  margin: 10px auto;\n  overflow: hidden;\n  border: 2.5px solid var(--navy);\n  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));\n  background: #dcecf8;\n  color: var(--navy);\n  font-family: var(--sans);\n  box-shadow: 0 14px 34px rgba(27, 35, 64, 0.16);\n  container-type: size;\n  user-select: none;\n  box-sizing: border-box;\n}\n.p12-wild-root *, .p12-wild-root *::before, .p12-wild-root *::after { box-sizing: border-box; }\n\n.p12-wild-bg {\n  position: absolute; inset: -8px; width: calc(100% + 16px); height: calc(100% + 16px);\n  object-fit: cover; pointer-events: none;\n  transition: transform .42s cubic-bezier(.22,1,.36,1), filter .7s ease;\n}\n.p12-wild-root.drawer-open .p12-wild-bg { transform: translateX(-16px) scale(1.02); }\n.p12-wild-root.rainy .p12-wild-bg { filter: brightness(.9) saturate(1.12) hue-rotate(8deg); }\n\n.p12-wild-rain {\n  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .5s;\n  background: repeating-linear-gradient(112deg, rgba(14,165,233,.1) 0 1px, transparent 1px 20px);\n}\n.p12-wild-root.rainy .p12-wild-rain { opacity: 1; }\n\n/* 顶栏：紧凑贴边 */\n.p12-wild-top {\n  position: absolute; top: 0; left: 0; right: 0; z-index: 25;\n  padding: 8px 14px 0; display: flex; align-items: center; justify-content: space-between; gap: 8px;\n}\n.p12-w-grp { display: flex; align-items: center; gap: 6px; min-width: 0; }\n.p12-w-btn {\n  height: 34px; padding: 0 10px; background: var(--ceramic-soft);\n  border: 2px solid var(--navy); color: var(--navy); cursor: pointer;\n  font-weight: 900; font-size: 11.5px; display: inline-flex; align-items: center; gap: 5px;\n  clip-path: var(--cut-sm); white-space: nowrap; transition: .15s;\n}\n.p12-w-btn:hover { background: var(--navy); color: #fff; }\n.p12-w-btn.sun { background: var(--sun); color: #fff; }\n\n.p12-w-zone {\n  background: rgba(27,35,64,.94); color: #fff; border: 2px solid var(--navy);\n  border-bottom: 3px solid var(--sun); padding: 4px 14px; text-align: center;\n  clip-path: var(--cut-sm); min-width: 0;\n}\n.p12-w-zone b { display: block; font-size: clamp(12.5px, 1.5cqw, 15px); font-weight: 900; letter-spacing: .06em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.p12-w-zone small { display: block; font: 800 9.5px/1 var(--mono); color: #7dd3fc; margin-top: 2px; }\n\n.p12-w-mut {\n  height: 36px; padding: 0 10px; background: #fff7ed; border: 2px solid var(--sun);\n  display: flex; flex-direction: column; justify-content: center; clip-path: var(--cut-sm);\n  cursor: pointer; max-width: 240px;\n}\n.p12-w-mut b { font-size: 11px; color: #c2410c; font-weight: 900; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.p12-w-mut span { font-size: 10px; color: #7c2d12; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\n/* 右上角行动力仪表环（紧致流体尺寸） */\n.p12-w-ap {\n  position: absolute; top: 52px; right: 16px; z-index: 24;\n  width: clamp(66px, 8.2cqw, 84px); height: clamp(66px, 8.2cqw, 84px); border-radius: 50%;\n  background: radial-gradient(circle at 30% 25%, #fff, #e8f2fc);\n  border: 2.5px solid var(--navy);\n  box-shadow: 0 0 0 3px rgba(255,255,255,.78), 0 8px 18px rgba(27,35,64,.2);\n  display: flex; flex-direction: column; align-items: center; justify-content: center;\n  transition: right .34s cubic-bezier(.22,1,.36,1);\n}\n.p12-w-ap::before {\n  content: \"\"; position: absolute; inset: 3px; border-radius: 50%;\n  border: 1.5px dashed rgba(255,107,43,.55); pointer-events: none;\n}\n.p12-wild-root.drawer-open .p12-w-ap { right: min(410px, 48cqw); }\n.p12-w-ap .ap-l { font-size: 9px; color: #52607a; font-weight: 900; }\n.p12-w-ap .ap-n { font: 900 clamp(22px, 2.8cqw, 28px)/1 var(--mono); color: var(--navy); }\n.p12-w-ap .ap-n.low { color: var(--sun); }\n.p12-w-ap .ap-s { font-size: 8.5px; color: var(--sun); font-weight: 800; }\n\n.p12-w-toast {\n  position: absolute; top: 52px; left: 50%; transform: translateX(-50%); z-index: 22;\n  background: rgba(255,255,255,.95); color: var(--navy);\n  border: 1.5px solid var(--navy); border-left: 4px solid var(--sun);\n  padding: 4px 12px; font-size: 11.5px; font-weight: 800; clip-path: var(--cut-sm);\n  max-width: 68%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n  pointer-events: none; box-shadow: 0 4px 12px rgba(27,35,64,.12);\n}\n\n/* 中央紧凑正交路网（拉大地图有效占比，缩小多余留白！） */\n.p12-w-viewport {\n  position: absolute; top: 56px; bottom: 60px; left: 10px; right: 10px; z-index: 12;\n  display: grid; place-items: center;\n  transition: transform .34s cubic-bezier(.22,1,.36,1);\n}\n.p12-wild-root.drawer-open .p12-w-viewport { transform: translateX(-14cqw); }\n\n.p12-w-board { position: relative; width: 96%; height: 94%; }\n.p12-w-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible; }\n\n.p12-w-dot {\n  position: absolute; transform: translate(-50%, -50%);\n  width: clamp(18px, 2.2cqw, 24px); height: clamp(18px, 2.2cqw, 24px); border-radius: 50%;\n  background: #fff; border: 2.5px solid var(--navy);\n  display: grid; place-items: center; cursor: pointer; z-index: 14;\n  box-shadow: 0 3px 8px rgba(27,35,64,.22); transition: .18s;\n}\n.p12-w-dot::after { content: \"\"; width: 6px; height: 6px; border-radius: 50%; background: var(--navy); }\n.p12-w-dot.reachable { border-color: var(--sun); box-shadow: 0 0 0 4px rgba(255,107,43,.28); transform: translate(-50%,-50%) scale(1.18); }\n.p12-w-dot.reachable::after { background: var(--sun); }\n.p12-w-dot.visited { border-color: var(--sky); background: #e0f2fe; }\n.p12-w-dot.visited::after { background: var(--sky); }\n\n/* 饱满流体圆形节点徽章（解决底图太大、图标太小的问题！） */\n.p12-w-node {\n  position: absolute; transform: translate(-50%, -50%);\n  display: flex; flex-direction: column; align-items: center;\n  cursor: pointer; z-index: 15; transition: left .4s ease, top .4s ease, transform .18s ease;\n}\n.p12-w-node:hover { transform: translate(-50%, -55%) scale(1.08); }\n.p12-w-node.locked { opacity: .8; filter: saturate(.65); }\n.p12-w-node.done .p12-w-orb { filter: saturate(.45) brightness(.92); }\n\n.p12-w-orb {\n  position: relative;\n  width: clamp(48px, 7.6cqw, 74px); height: clamp(48px, 7.6cqw, 74px);\n  border-radius: 50%; padding: 2.5px; background: #fff; border: 2.5px solid var(--navy);\n  display: grid; place-items: center; box-shadow: 0 6px 14px rgba(27,35,64,.24); transition: .2s;\n}\n.p12-w-node.type-boss .p12-w-orb { width: clamp(56px, 8.6cqw, 84px); height: clamp(56px, 8.6cqw, 84px); border-width: 3px; }\n.p12-w-orb img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }\n.p12-w-node.reachable .p12-w-orb {\n  border-color: var(--sun); background: #fff5ef;\n  box-shadow: 0 0 0 4px rgba(255,107,43,.32), 0 8px 18px rgba(255,107,43,.4);\n}\n.p12-w-node.selected .p12-w-orb { border-color: var(--sun); background: var(--sun); transform: scale(1.08); }\n\n.p12-w-chk {\n  position: absolute; bottom: -2px; right: -2px; width: 19px; height: 19px; border-radius: 50%;\n  background: var(--mint); color: #fff; font-size: 11px; font-weight: 900;\n  display: grid; place-items: center; border: 2px solid #fff;\n}\n.p12-w-clue {\n  position: absolute; top: -5px; right: -5px; background: var(--sky); color: #fff;\n  font-size: 9.5px; font-weight: 900; padding: 1px 5px; border-radius: 9px; border: 1.5px solid #fff;\n}\n.p12-w-cap {\n  margin-top: 4px; font-size: clamp(10px, 1.15cqw, 11.5px); font-weight: 900;\n  background: rgba(27,35,64,.92); color: #fff; padding: 1.5px 7px; clip-path: var(--cut-sm);\n  white-space: nowrap;\n}\n.p12-w-node.selected .p12-w-cap { background: var(--sun); }\n\n.p12-w-pin {\n  position: absolute; transform: translate(-50%, -50%); z-index: 22; pointer-events: none;\n  transition: left .34s cubic-bezier(.22,1,.36,1), top .34s cubic-bezier(.22,1,.36,1);\n  display: flex; flex-direction: column; align-items: center;\n}\n.p12-w-pin span {\n  background: var(--sun); color: #fff; font: 900 9px/1 var(--mono); letter-spacing: .1em;\n  padding: 2px 6px; clip-path: var(--cut-sm); margin-bottom: 2px;\n}\n.p12-w-pin svg { width: 20px; height: 26px; filter: drop-shadow(0 2px 5px rgba(27,35,64,.55)); }\n\n/* 底部陶瓷统一栏 */\n.p12-wild-bot {\n  position: absolute; left: 0; right: 0; bottom: 0; height: 58px; z-index: 26;\n  background: rgba(255,255,255,.95); border-top: 2.5px solid var(--navy);\n  padding: 0 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;\n}\n.p12-w-bsec { display: flex; align-items: center; gap: 8px; min-width: 0; }\n.p12-w-meta { display: flex; flex-direction: column; align-items: center; padding-right: 9px; border-right: 2px solid #dbe6f4; flex-shrink: 0; }\n.p12-w-meta b { font: 900 16px/1 var(--mono); color: var(--navy); }\n.p12-w-meta span { font-size: 9.5px; color: #52607a; font-weight: 800; margin-top: 2px; }\n\n.p12-w-loot { display: flex; align-items: center; gap: 6px; overflow-x: auto; max-width: 48cqw; scrollbar-width: none; }\n.p12-w-loot::-webkit-scrollbar { display: none; }\n.p12-w-slot {\n  height: 34px; padding: 0 9px; background: #f4f8ff; border: 1.5px solid var(--navy);\n  color: var(--navy); display: inline-flex; align-items: center; gap: 4px;\n  font-size: 11px; font-weight: 900; cursor: pointer; clip-path: var(--cut-sm); white-space: nowrap; flex-shrink: 0;\n}\n.p12-w-slot.relic { background: #fffbeb; border-color: var(--gold); color: #92400e; }\n.p12-w-slot.craft { background: var(--sun); color: #fff; border-color: var(--navy); }\n\n.p12-w-squad { display: flex; align-items: center; gap: 6px; overflow-x: auto; scrollbar-width: none; }\n.p12-w-sq {\n  padding: 4px 8px; background: #f4f8ff; border: 1.5px solid #cbd8eb;\n  cursor: pointer; min-width: 78px; clip-path: var(--cut-sm); flex-shrink: 0;\n}\n.p12-w-sq.lead { border-color: var(--sun); background: #fff4ed; }\n.p12-w-sq .st { display: flex; justify-content: space-between; font-size: 11px; font-weight: 900; gap: 4px; }\n.p12-w-sq .sh { height: 3.5px; background: #dbe6f4; margin-top: 4px; }\n.p12-w-sq .sh i { display: block; height: 100%; background: var(--mint); transition: width .25s; }\n.p12-w-sq .sh i.low { background: var(--hot); }\n\n/* 右侧透明羽化渐变抽屉（桌面/平板） */\n.p12-w-drawer {\n  position: absolute; top: 0; right: 0; bottom: 58px; width: min(390px, 48cqw); min-width: 310px;\n  z-index: 30; pointer-events: none; color: var(--navy);\n  transform: translateX(100%); opacity: 0;\n  transition: transform .32s cubic-bezier(.22,1,.36,1), opacity .22s ease;\n  background: linear-gradient(90deg, rgba(244,248,255,0) 0%, rgba(244,248,255,.92) 14%, rgba(255,255,255,.98) 28%, #ffffff 100%);\n  padding: 20px 20px 18px 54px; display: flex; flex-direction: column;\n}\n.p12-w-drawer.open { transform: translateX(0); opacity: 1; pointer-events: auto; }\n.p12-w-drhd { display: flex; align-items: center; gap: 10px; }\n.p12-w-drico { width: 48px; height: 48px; border-radius: 50%; border: 2px solid var(--navy); padding: 2px; background: #fff; flex-shrink: 0; }\n.p12-w-drk { font: 900 10px/1 var(--mono); letter-spacing: .14em; color: var(--sun); margin-bottom: 4px; }\n.p12-w-drt { margin: 0; font-size: 18px; font-weight: 900; line-height: 1.2; }\n.p12-w-drx { margin-left: auto; width: 30px; height: 30px; background: #f1f5f9; border: 2px solid var(--navy); color: var(--navy); cursor: pointer; font-weight: 900; clip-path: var(--cut-sm); flex-shrink: 0; }\n.p12-w-drx:hover { background: var(--sun); border-color: var(--sun); color: #fff; }\n.p12-w-drln { height: 2.5px; margin: 12px 0; background: linear-gradient(90deg, var(--sun), var(--navy) 45%, transparent); }\n.p12-w-drbd { flex: 1; overflow-y: auto; padding-right: 2px; }\n.p12-w-drdesc { font-size: 12.5px; line-height: 1.65; color: #334155; font-weight: 600; margin: 0 0 14px; }\n\n.p12-w-btns { display: flex; flex-direction: column; gap: 8px; }\n.p12-w-act {\n  width: 100%; min-height: 44px; text-align: left; padding: 9px 12px; cursor: pointer;\n  background: #f4f8ff; border: 2px solid var(--navy); border-left: 5px solid var(--navy);\n  color: var(--navy); clip-path: var(--cut-sm); transition: .15s;\n}\n.p12-w-act:hover:not(:disabled) { background: #fff4ed; border-color: var(--sun); }\n.p12-w-act.pri { background: var(--sun); color: #fff; text-align: center; font-weight: 900; font-size: 13px; }\n.p12-w-act:disabled { opacity: .42; cursor: not-allowed; }\n.p12-w-act strong { display: block; font-size: 12.5px; font-weight: 900; }\n.p12-w-act span { display: block; font-size: 10.5px; color: #52607a; font-weight: 700; margin-top: 2px; }\n\n.p12-w-meters { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }\n.p12-w-meter { background: #f4f8ff; border: 1.5px solid #cbd8eb; padding: 7px 9px; clip-path: var(--cut-sm); }\n.p12-w-mhd { display: flex; justify-content: space-between; font-size: 11px; font-weight: 900; margin-bottom: 4px; }\n.p12-w-mtr { height: 6px; background: #dbe6f4; }\n.p12-w-mtr i { display: block; height: 100%; transition: width .25s; }\n.p12-w-quote { background: #fffbeb; border-left: 4px solid var(--gold); padding: 8px 10px; font-size: 12px; font-weight: 700; line-height: 1.55; color: #78350f; margin-bottom: 10px; }\n.p12-w-json { background: var(--navy); color: #7dd3fc; padding: 10px; font-size: 10.5px; overflow: auto; max-height: 160px; user-select: text; clip-path: var(--cut-sm); }\n\n/* 手机竖屏 / 窄容器（≤600px）自动折紧凑布局 + 底部上滑抽屉，0 横向溢出！ */\n@container (max-width: 600px) {\n  .p12-wild-top { flex-wrap: wrap; padding: 6px 8px 0; }\n  .p12-w-mut { display: none; }\n  .p12-w-toast { top: 46px; font-size: 10.5px; max-width: 88%; }\n  .p12-w-ap { top: 48px; right: 8px; width: 58px; height: 58px; }\n  .p12-wild-root.drawer-open .p12-w-ap { right: 8px; }\n  .p12-wild-root.drawer-open .p12-w-viewport { transform: none; }\n  .p12-w-viewport { top: 50px; bottom: 56px; left: 4px; right: 4px; }\n  .p12-w-orb { width: 42px; height: 42px; }\n  .p12-w-node.type-boss .p12-w-orb { width: 48px; height: 48px; }\n  .p12-w-cap { font-size: 9.5px; padding: 1px 5px; }\n  .p12-wild-bot { height: 54px; padding: 0 8px; }\n  .p12-w-meta { display: none; }\n  .p12-w-loot { max-width: 52cqw; }\n  .p12-w-sq { min-width: 66px; padding: 3px 6px; }\n  .p12-w-drawer {\n    top: auto; left: 0; right: 0; bottom: 54px; width: 100%; min-width: 0; max-height: 68%;\n    transform: translateY(100%); padding: 16px 14px 14px;\n    background: linear-gradient(180deg, rgba(244,248,255,.94) 0%, #ffffff 18%);\n    border-top: 3px solid var(--sun);\n  }\n  .p12-w-drawer.open { transform: translateY(0); }\n}\n\n@media (max-width: 600px) {\n  .p12-wild-root { height: clamp(500px, 76vh, 640px); border-width: 2px; }\n}\n";
;
// hook/wild/engine.js — WT-v7 野外微肉鸽（随机正交路网 × 4玩法词条）与双轨安抚结契纯函数引擎
(function (root) {
  'use strict';

  var COL_X = [100, 260, 420, 580, 740, 900];
  var ROW_Y = [85, 200, 315, 430];

  var MUTATORS = [
    {
      id: 'track', icon: '🐾', name: '生态追踪',
      short: '集齐 2 枚脚印 → 锁定霸主并大幅降警戒',
      detail: '地图藏有 2 枚发光生态脚印。探索带🐾标记的节点收集脚印，集齐 2 枚后全图霸主自动显形，安抚时初始信任 +25%、警戒 -20%。'
    },
    {
      id: 'rain', icon: '🌧️', name: '晴雨骤变',
      short: '每 2 步切换晴/雨 · 雨天采集 ×2 敌攻 +25%',
      detail: '区域天气多变，每消耗 2 点行动力在「晴朗 ↔ 骤雨」间切换。雨天采集收获翻倍、安抚更易亲近，但遭遇战敌方攻势提升 25%。'
    },
    {
      id: 'greed', icon: '💎', name: '秘宝负重',
      short: '采集额外 +1 珍稀 · 背包 ≥7 件触发警觉博弈',
      detail: '资源异常丰饶，采集与奇遇额外多掉 1 件素材！背包总数 ≥7 件时气味会引来警觉（战斗更猛），安全撤离获得「满载而归」高评价。'
    },
    {
      id: 'migrate', icon: '🦌', name: '兽群迁徙',
      short: '每次移动，野生异兽沿正交路网动态游走！',
      detail: '野生异兽十分活跃：每次消耗行动力移动，未清理的野生偶遇或领地守卫都会沿相邻过道迁徙 1 格，预判路线去围堵它们吧！'
    }
  ];

  var DEFAULT_WILD = [
    { species: '西溪红爪獭', stage: '成长期', types: ['水'], rarity: '常见', trait: '馋嘴亲人', habit: '抱着青螺歪头打量你，对甜味毫无抵抗力' },
    { species: '泥沼刺豚', stage: '成长期', types: ['水', '毒'], rarity: '常见', trait: '暴躁护领地', habit: '鼓起水刺挡在浅滩中央，警惕地低吼' },
    { species: '素纹水游蛇', stage: '成熟期', types: ['水'], rarity: '少见', trait: '警惕胆小', habit: '鳞片折射微光，一有风吹草动便缩回苇丛' },
    { species: '铁钳河蟹', stage: '成长期', types: ['水', '岩石'], rarity: '常见', trait: '傲娇好胜', habit: '挥舞一对硕大螯钳咔嗒作响' },
    { species: '幼年水灵狐', stage: '幼年期', types: ['水', '妖精'], rarity: '罕见', trait: '受伤戒备', habit: '后爪沾着泥草微微发抖，警戒地盯着你的手' }
  ];

  var DEFAULT_LOOT = ['甜水菱角', '荧光芦苇穗', '潮汐石屑'];

  var TRAIT_MODS = {
    '警惕胆小': { calm: [14, -26], partner: [14, -6], food: [22, -12], bait: [45, -25], care: [18, -14], runaway: true },
    '馋嘴亲人': { calm: [10, -18], partner: [20, -8], food: [32, -14], bait: [52, -25], care: [16, -10], runaway: true },
    '傲娇好胜': { calm: [6, -12],  partner: [30, -12], food: [18, -8],  bait: [38, -16], care: [14, -8],  runaway: false },
    '暴躁护领地': { calm: [12, -24], partner: [16, -4], food: [20, -10], bait: [42, -22], care: [14, -10], runaway: false },
    '受伤戒备': { calm: [12, -20], partner: [16, -8], food: [24, -12], bait: [44, -20], care: [36, -24], runaway: true },
    '打服敬畏': { calm: [16, -22], partner: [22, -10], food: [26, -12], bait: [48, -24], care: [24, -16], runaway: false }
  };

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function mkRng(seed) {
    var s = (Number(seed) || (Date.now() ^ (Math.random() * 0x7fffffff))) >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  function shuffle(arr, rnd) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pick(arr, rnd) { return arr[Math.floor(rnd() * arr.length)]; }

  function normSpecies(raw) {
    if (!raw || typeof raw !== 'object') return DEFAULT_WILD[0];
    return {
      species: String(raw['物种'] || raw.species || raw['名称'] || '野生异兽'),
      stage: String(raw['阶段'] || raw.stage || '成长期'),
      types: Array.isArray(raw['属性'] || raw.types) ? (raw['属性'] || raw.types).slice(0, 2) : ['一般'],
      rarity: String(raw['稀有'] || raw.rarity || '常见'),
      trait: String(raw['性情'] || raw.trait || '警惕胆小'),
      habit: String(raw['习性'] || raw.habit || '正警觉地打量四周动静'),
      status: String(raw['状态'] || raw.status || '健康'),
      moves: Array.isArray(raw['招式'] || raw.moves) ? (raw['招式'] || raw.moves) : null
    };
  }

  function passiveOf(types) {
    var t = Array.isArray(types) ? types.join('/') : String(types || '');
    if (/草|虫|水/.test(t)) return { code: 'gather', tag: '采集 ×2' };
    if (/飞行|超能|电/.test(t)) return { code: 'scout', tag: '视野 +1' };
    if (/岩石|钢|地面|火|格斗|龙/.test(t)) return { code: 'guard', tag: '承伤 -25%' };
    return { code: 'calm', tag: '安抚 +10%' };
  }

  function normTeam(team) {
    var list = Array.isArray(team) && team.length ? team : [
      { nick: '搭档异兽', species: '墨竹熊', stage: '成长期', types: ['草', '格斗'], hp: 100, fatigue: 0, bond: 40 }
    ];
    return list.slice(0, 6).map(function (m, i) {
      var types = Array.isArray(m.types) && m.types.length ? m.types : ['一般'];
      var p = passiveOf(types);
      return {
        id: 't_' + i,
        nick: String(m.nick || m['昵称'] || m.species || m['物种'] || ('伙伴' + (i + 1))),
        species: String(m.species || m['物种'] || m.nick || '异兽'),
        stage: String(m.stage || m['阶段'] || '成长期'),
        types: types,
        hp: clamp(Number(m.hp != null ? m.hp : 100), 1, 100),
        fatigue: clamp(Number(m.fatigue != null ? m.fatigue : 0), 0, 100),
        bond: clamp(Number(m.bond != null ? m.bond : 35), 0, 100),
        moves: Array.isArray(m.moves) ? m.moves.slice(0, 4) : [],
        passiveCode: p.code,
        tag: p.tag
      };
    });
  }

  function byId(run, id) {
    for (var i = 0; i < run.nodes.length; i++) if (run.nodes[i].id === id) return run.nodes[i];
    return null;
  }

  function neighbors(run, id) {
    var out = [];
    for (var i = 0; i < run.edges.length; i++) {
      var e = run.edges[i];
      if (e[0] === id) out.push(e[1]);
      else if (e[1] === id) out.push(e[0]);
    }
    return out;
  }

  function revealAround(run, id) {
    var lead = run.team.find(function (m) { return m.id === run.leadId; });
    var wide = lead && lead.passiveCode === 'scout';
    neighbors(run, id).forEach(function (nid) {
      var nb = byId(run, nid);
      if (nb) nb.revealed = true;
      if (wide) {
        neighbors(run, nid).forEach(function (nn) {
          var n2 = byId(run, nn);
          if (n2) n2.revealed = true;
        });
      }
    });
  }

  function bagTotal(run) {
    var s = (run.relics || []).length;
    Object.keys(run.bag || {}).forEach(function (k) { s += Number(run.bag[k] || 0); });
    return s;
  }

  function canCraftBait(run) {
    var a = run.specialties[0], b = run.specialties[1];
    return (run.bag[a] || 0) >= 1 && (run.bag[b] || 0) >= 1;
  }

  // 创建一局全新全随机野外微肉鸽
  function createRun(spec, team, opts) {
    spec = spec && typeof spec === 'object' ? spec : {};
    opts = opts && typeof opts === 'object' ? opts : {};
    var rnd = mkRng(opts.seed);
    var cols = 6, rows = 4;
    var targetCount = 13 + Math.floor(rnd() * 3); // 13~15 格
    var startC = 1 + Math.floor(rnd() * 4);
    var startR = 3;
    var dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    var key = function (c, r) { return c + ',' + r; };

    var used = {};
    var usedList = [];
    var edgeMap = {};
    var addEdge = function (a, b) {
      var k = a < b ? a + '|' + b : b + '|' + a;
      edgeMap[k] = [a, b];
    };

    var startCell = { id: 'n_start', c: startC, r: startR };
    used[key(startC, startR)] = startCell;
    usedList.push(startCell);
    var frontier = [startCell];
    var idx = 1;

    while (usedList.length < targetCount && frontier.length > 0) {
      var fi = Math.floor(rnd() * frontier.length);
      var cur = frontier[fi];
      var cands = shuffle(dirs, rnd).map(function (d) { return [cur.c + d[0], cur.r + d[1]]; })
        .filter(function (p) { return p[0] >= 0 && p[0] < cols && p[1] >= 0 && p[1] < rows && !used[key(p[0], p[1])]; });
      if (!cands.length) { frontier.splice(fi, 1); continue; }
      var nc = cands[0][0], nr = cands[0][1];
      var cell = { id: 'n_' + (idx++), c: nc, r: nr };
      used[key(nc, nr)] = cell;
      usedList.push(cell);
      addEdge(cur.id, cell.id);
      frontier.push(cell);
    }

    // 补 2 条正交环路（依然 0 斜线交叉）
    var extra = 0;
    var shufCells = shuffle(usedList, rnd);
    for (var ci = 0; ci < shufCells.length && extra < 2; ci++) {
      var a = shufCells[ci];
      var sd = shuffle(dirs, rnd);
      for (var di = 0; di < sd.length; di++) {
        var b = used[key(a.c + sd[di][0], a.r + sd[di][1])];
        if (b) {
          var ek = a.id < b.id ? a.id + '|' + b.id : b.id + '|' + a.id;
          if (!edgeMap[ek]) { edgeMap[ek] = [a.id, b.id]; extra++; break; }
        }
      }
    }

    var edges = Object.keys(edgeMap).map(function (k) { return edgeMap[k]; });

    // BFS 算距离，最远点放区域霸主
    var dist = { n_start: 0 };
    var q = ['n_start'];
    while (q.length) {
      var u = q.shift();
      edges.forEach(function (e) {
        var v = e[0] === u ? e[1] : (e[1] === u ? e[0] : null);
        if (v && dist[v] == null) { dist[v] = dist[u] + 1; q.push(v); }
      });
    }
    var sorted = usedList.filter(function (x) { return x.id !== 'n_start'; })
      .sort(function (x, y) { return (dist[y.id] || 0) - (dist[x.id] || 0); });
    var bossCell = sorted[0];

    var poolRaw = Array.isArray(spec['候选'] || spec.pool) && (spec['候选'] || spec.pool).length
      ? (spec['候选'] || spec.pool).map(normSpecies)
      : DEFAULT_WILD.slice();
    var rarePool = poolRaw.filter(function (x) { return x.rarity === '罕见' || x.rarity === '少见'; });
    var bossMon = rarePool.length ? pick(rarePool, rnd) : pick(poolRaw, rnd);

    var specsRaw = Array.isArray(spec['特产'] || spec.specialties) && (spec['特产'] || spec.specialties).length >= 2
      ? (spec['特产'] || spec.specialties).slice(0, 3)
      : DEFAULT_LOOT.slice();

    var mutPool = MUTATORS.filter(function (m) { return m.id !== opts.avoidMutator; });
    var mut = opts.mutatorId
      ? (MUTATORS.find(function (m) { return m.id === opts.mutatorId; }) || pick(mutPool, rnd))
      : pick(mutPool, rnd);

    var roleDeck = shuffle(['gather', 'gather', 'tame', 'tame', 'battle', 'battle', 'event', 'merchant', 'camp', 'dot', 'dot', 'dot', 'dot'], rnd);
    var nodes = usedList.map(function (cell) {
      if (cell.id === 'n_start') {
        return { id: cell.id, c: cell.c, r: cell.r, kind: 'dot', label: '入口营标', revealed: true, clue: false };
      }
      if (cell.id === bossCell.id) {
        return {
          id: cell.id, c: cell.c, r: cell.r, kind: 'icon', type: 'boss', label: '深处霸主',
          title: bossMon.species + '（霸主）',
          desc: '盘踞区域最深处的强悍个体：' + bossMon.habit + '。可硬碰硬打服，也可凭线索安抚结契！',
          mon: bossMon, loot: specsRaw[2] || '霸主稀材', revealed: false, clue: false
        };
      }
      var role = roleDeck.pop() || 'dot';
      var rev = (dist[cell.id] || 1) <= 1;
      if (role === 'dot') return { id: cell.id, c: cell.c, r: cell.r, kind: 'dot', label: '林间小径', revealed: rev, clue: false };
      if (role === 'gather') {
        return {
          id: cell.id, c: cell.c, r: cell.r, kind: 'icon', type: 'gather', label: '生态采集',
          title: '野生资源采集点',
          desc: '发现新鲜的「' + specsRaw[0] + '」与「' + specsRaw[1] + '」，可立刻收入底栏背包并现场调配特制诱饵。',
          revealed: rev, clue: false
        };
      }
      if (role === 'tame') {
        var w = pick(poolRaw, rnd);
        return {
          id: cell.id, c: cell.c, r: cell.r, kind: 'icon', type: 'tame', label: '野生偶遇',
          title: '偶遇 · ' + w.species, desc: w.habit, mon: w, revealed: rev, clue: false
        };
      }
      if (role === 'battle') {
        var f = pick(poolRaw, rnd);
        return {
          id: cell.id, c: cell.c, r: cell.r, kind: 'icon', type: 'battle', label: '领地守卫',
          title: '领地冲突 · ' + f.species, desc: f.habit + '。击败或打服它即可收获素材并顺势结契！',
          mon: f, loot: specsRaw[2] || '野生角鳞', revealed: rev, clue: false
        };
      }
      if (role === 'event') {
        return {
          id: cell.id, c: cell.c, r: cell.r, kind: 'icon', type: 'event', label: '隐蔽林棚',
          title: '前人遗留勘测棚', desc: '角落留着还能亮起的「荧光驱虫灯」与一只补给箱，选一样带走吧。',
          revealed: rev, clue: false
        };
      }
      if (role === 'merchant') {
        return {
          id: cell.id, c: cell.c, r: cell.r, kind: 'icon', type: 'merchant', label: '游走水客',
          title: '野外游走货郎', desc: '戴着斗笠的野外货郎愿意用 1 份「夜光甜果饵」换取你刚采集的「' + specsRaw[0] + '」。',
          revealed: rev, clue: false
        };
      }
      return {
        id: cell.id, c: cell.c, r: cell.r, kind: 'icon', type: 'camp', label: '安全营地',
        title: '背风石坡营地', desc: '干爽隐蔽的临时落脚点，可生火休整全队血量并恢复 2 点行动力！',
        revealed: rev, clue: false
      };
    });

    if (mut.id === 'track') {
      var cluePool = shuffle(nodes.filter(function (n) { return n.id !== 'n_start' && n.type !== 'boss' && n.kind === 'icon'; }), rnd);
      cluePool.slice(0, 2).forEach(function (n) { n.clue = true; });
    }

    var nTeam = normTeam(team);
    var run = {
      version: 1,
      zone: String(spec['区域'] || spec.zone || '野外生态区'),
      terrain: String(spec['地形'] || spec.terrain || 'lake'),
      slot: String(spec['时段'] || spec.slot || '白天'),
      specialties: specsRaw,
      mutator: mut,
      nodes: nodes,
      edges: edges,
      curId: 'n_start',
      ap: clamp(Number(spec['行动力'] || spec['步数'] || 6), 4, 10),
      moves: 0,
      rainy: false,
      clues: 0,
      bossTracked: false,
      team: nTeam,
      leadId: nTeam[0].id,
      bag: { '随身干粮': 2, '回复喷雾': 1 },
      relics: [],
      bonded: [],
      highlights: [],
      visited: ['n_start'],
      cleared: ['n_start'],
      over: false
    };

    revealAround(run, 'n_start');
    return run;
  }

  function setLead(run, teamId) {
    var found = run.team.find(function (m) { return m.id === teamId; });
    if (!found) return { ok: false };
    run.leadId = found.id;
    if (found.passiveCode === 'scout') revealAround(run, run.curId);
    return { ok: true, lead: found };
  }

  function runMigration(run, rnd) {
    if (run.mutator.id !== 'migrate') return null;
    var movers = shuffle(run.nodes.filter(function (n) {
      return run.cleared.indexOf(n.id) < 0 && (n.type === 'tame' || n.type === 'battle') && n.id !== run.curId;
    }), rnd);
    for (var i = 0; i < movers.length; i++) {
      var m = movers[i];
      var dots = neighbors(run, m.id).map(function (id) { return byId(run, id); })
        .filter(function (x) { return x && x.kind === 'dot' && x.id !== run.curId && x.id !== 'n_start'; });
      if (dots.length) {
        var dst = pick(dots, rnd);
        var snap = { kind: m.kind, type: m.type, label: m.label, title: m.title, desc: m.desc, mon: m.mon, loot: m.loot };
        m.kind = 'dot'; delete m.type; m.label = '林间小径'; delete m.title; delete m.desc; delete m.mon; delete m.loot;
        Object.assign(dst, snap);
        dst.revealed = true;
        return snap.title;
      }
    }
    return null;
  }

  function moveTo(run, nodeId, seed) {
    var target = byId(run, nodeId);
    if (!target) return { ok: false, reason: '节点不存在' };
    if (neighbors(run, run.curId).indexOf(nodeId) < 0) return { ok: false, reason: '未与当前位置相连' };
    var isNew = run.visited.indexOf(nodeId) < 0;
    var cost = isNew ? 1 : 0;
    if (run.ap < cost) return { ok: false, reason: '行动力不足' };

    run.ap -= cost;
    run.curId = nodeId;
    var events = [];
    if (isNew) {
      run.visited.push(nodeId);
      run.moves++;
      if (run.mutator.id === 'rain' && run.moves % 2 === 0) {
        run.rainy = !run.rainy;
        events.push(run.rainy ? '骤雨降临：采集 ×2，野生攻势 +25%' : '雨过天晴，视野恢复晴朗');
      }
      var mig = runMigration(run, mkRng(seed));
      if (mig) events.push('兽群迁徙：「' + mig + '」移动到了相邻路径');
    }
    target.revealed = true;
    revealAround(run, nodeId);
    var shouldTrigger = target.kind === 'icon' && run.cleared.indexOf(nodeId) < 0;
    return { ok: true, isNew: isNew, cost: cost, node: target, shouldTrigger: shouldTrigger, events: events };
  }

  function markCleared(run, nodeId) {
    var n = byId(run, nodeId);
    if (run.cleared.indexOf(nodeId) < 0) run.cleared.push(nodeId);
    var note = '';
    if (n && run.mutator.id === 'track' && n.clue) {
      n.clue = false;
      run.clues++;
      if (run.clues >= 2 && !run.bossTracked) {
        run.bossTracked = true;
        var boss = run.nodes.find(function (x) { return x.type === 'boss'; });
        if (boss) boss.revealed = true;
        note = '集齐 2 枚脚印！深处霸主已自动显形，安抚获大幅加成！';
      } else {
        note = '收集到发光脚印（' + run.clues + '/2）';
      }
    }
    return note;
  }

  function resolveGather(run, nodeId) {
    var lead = run.team.find(function (m) { return m.id === run.leadId; });
    var mult = (lead && lead.passiveCode === 'gather' ? 2 : 1) * (run.mutator.id === 'rain' && run.rainy ? 2 : 1);
    var bonus = run.mutator.id === 'greed' ? 1 : 0;
    var qty = mult + bonus;
    var a = run.specialties[0], b = run.specialties[1];
    run.bag[a] = (run.bag[a] || 0) + qty;
    run.bag[b] = (run.bag[b] || 0) + qty;
    run.highlights.push('在野外采集到' + a + '与' + b + '各×' + qty);
    var note = markCleared(run, nodeId);
    return { qty: qty, items: [a, b], note: note };
  }

  function resolveEvent(run, nodeId, choice) {
    if (choice === 'lamp') {
      if (run.relics.indexOf('荧光驱虫灯') < 0) run.relics.push('荧光驱虫灯');
      run.highlights.push('拾得生态藏品「荧光驱虫灯」');
    } else {
      var a = run.specialties[0], b = run.specialties[1];
      run.bag[a] = (run.bag[a] || 0) + 1;
      run.bag[b] = (run.bag[b] || 0) + 1;
      run.bag['回复喷雾'] = (run.bag['回复喷雾'] || 0) + 1;
    }
    return { note: markCleared(run, nodeId) };
  }

  function resolveMerchant(run, nodeId, trade) {
    var a = run.specialties[0];
    if (trade && (run.bag[a] || 0) >= 1) {
      run.bag[a]--;
      run.bag['夜光甜果饵'] = (run.bag['夜光甜果饵'] || 0) + 1;
      run.highlights.push('向游走货郎换得「夜光甜果饵」');
    }
    return { note: markCleared(run, nodeId) };
  }

  function resolveCamp(run, nodeId) {
    run.team.forEach(function (m) {
      m.hp = clamp(m.hp + 30, 1, 100);
      m.fatigue = clamp(m.fatigue - 12, 0, 100);
    });
    run.ap += 2;
    run.highlights.push('在背风营地休整全队并重整补给');
    return { note: markCleared(run, nodeId) };
  }

  function craftBait(run) {
    if (!canCraftBait(run)) return { ok: false };
    run.bag[run.specialties[0]]--;
    run.bag[run.specialties[1]]--;
    run.bag['夜光甜果饵'] = (run.bag['夜光甜果饵'] || 0) + 1;
    run.highlights.push('野外现场调配出「夜光甜果饵」');
    return { ok: true };
  }

  // 把肉鸽节点转成 UI-1 真对战台可消费的标准 [对战建立] JSON
  function buildBattleSetup(run, node) {
    var m = node.mon || DEFAULT_WILD[0];
    var isBoss = node.type === 'boss';
    var baseMoves = m.moves && m.moves.length ? m.moves : [
      { '名': (m.types[0] || '一般') + '突袭', '属性': m.types[0] || '一般', '档': '中' },
      { '名': '领地冲撞', '属性': '一般', '档': isBoss ? '重' : '轻' },
      { '名': '威吓低吼', '属性': m.types[0] || '一般', '档': '状态' }
    ];
    return {
      '名称': run.zone + ' · ' + (isBoss ? '霸主遭遇战' : '野外遭遇战'),
      '场合': '野外',
      '性质': isBoss ? '正式' : '比试',
      '场地': { '名': run.zone, '地形': run.terrain, '标签': m.types.slice(0, 1), '可借': ['湿滑地面', '高大草丛'] },
      '对方': [{
        '驯兽师': '',
        '昵称': isBoss ? (m.species + '（霸主）') : m.species,
        '物种': m.species,
        '阶段': m.stage,
        '属性': m.types,
        '体力': isBoss ? 100 : 85,
        '招式': baseMoves,
        '打法': isBoss ? '抢攻' : '稳守'
      }],
      '规则': { '换兽': true, '道具': true, '对方只数': 1 }
    };
  }

  function applyBattleResult(run, nodeId, result) {
    var n = byId(run, nodeId);
    if (!n) return { ok: false };
    if (result && Array.isArray(result.teamHp)) {
      result.teamHp.forEach(function (h, i) {
        if (run.team[i]) run.team[i].hp = clamp(Number(h), 1, 100);
      });
    }
    var won = result && (result.result === '胜' || result.won);
    if (won) {
      var loot = n.loot || run.specialties[2] || '野生素材';
      run.bag[loot] = (run.bag[loot] || 0) + 1;
      run.highlights.push('在野外击退了「' + (n.mon ? n.mon.species : n.title) + '」');
    }
    return { ok: true, won: !!won, loot: n.loot || run.specialties[2] || '野生素材' };
  }

  // 双轨安抚结契引擎（既可在肉鸽内调用，也可由正文 [安抚建立] 独立启动）
  function createTame(spec, run) {
    var m = normSpecies(spec);
    var fromBattle = !!(spec && (spec.fromBattle || spec['来源'] === '打服'));
    var trait = fromBattle ? '打服敬畏' : (TRAIT_MODS[m.trait] ? m.trait : '警惕胆小');
    var hasLamp = run && run.relics && run.relics.indexOf('荧光驱虫灯') >= 0;
    var tracked = run && run.bossTracked && spec && spec.isBoss;
    var trust = clamp((fromBattle ? 55 : 22) + (tracked ? 25 : 0), 0, 95);
    var alert = clamp((fromBattle ? 30 : 24) - (hasLamp ? 15 : 0) - (tracked ? 20 : 0), 5, 90);
    return {
      species: m.species,
      stage: m.stage,
      types: m.types,
      trait: trait,
      fromBattle: fromBattle,
      status: m.status,
      trust: trust,
      alert: alert,
      round: 1,
      over: false,
      outcome: null,
      usedItems: [],
      log: [],
      mood: fromBattle
        ? '它甩了甩身上的水珠，带着被打服后的敬畏打量你伸出的手。'
        : m.habit
    };
  }

  function stepTame(tame, act, run) {
    if (tame.over) return { ok: false };
    var mod = TRAIT_MODS[tame.trait] || TRAIT_MODS['警惕胆小'];
    var lead = run && run.team ? run.team.find(function (x) { return x.id === run.leadId; }) : null;
    var calmBonus = lead && lead.passiveCode === 'calm' ? 6 : 0;
    var rainBonus = run && run.mutator && run.mutator.id === 'rain' && run.rainy ? 6 : 0;

    if (act === 'bond') {
      if (tame.trust < 70) return { ok: false, reason: '信任未满 70%' };
      var success = tame.trust >= 85 || (tame.trust - tame.alert * 0.35) >= 55;
      if (success) {
        tame.over = true;
        tame.outcome = tame.fromBattle ? '打服结契' : '自愿结契';
        tame.mood = '它轻轻向前一步，把额头抵上了你的掌心——契约共鸣成立！';
        tame.log.push('伸手邀约缔结契约：成功');
        if (run && run.bonded.indexOf(tame.species) < 0) {
          run.bonded.push(tame.species);
          run.highlights.push('通过' + tame.outcome + '与「' + tame.species + '」结契');
        }
        return { ok: true, bonded: true, outcome: tame.outcome };
      } else {
        tame.alert = clamp(tame.alert + 22, 0, 100);
        tame.mood = '它被你的指尖惊了一跳，敏捷地向后跳开半步，戒备心陡增！';
        tame.log.push('贸然伸手试探：被避开');
      }
    } else if (act === 'calm') {
      tame.trust = clamp(tame.trust + mod.calm[0] + calmBonus, 0, 100);
      tame.alert = clamp(tame.alert + mod.calm[1], 0, 100);
      tame.mood = '你放慢呼吸蹲低身子，它紧绷的脊背明显放松了些许。';
      tame.log.push('蹲低收声降温');
    } else if (act === 'partner') {
      var sameType = lead && lead.types.some(function (t) { return tame.types.indexOf(t) >= 0; });
      var dt = mod.partner[0] + (sameType ? 10 : 0);
      tame.trust = clamp(tame.trust + dt, 0, 100);
      tame.alert = clamp(tame.alert + mod.partner[1], 0, 100);
      tame.mood = (lead ? lead.nick : '搭档') + '上前轻声低鸣示好，' + tame.species + (sameType ? '感应到同系气息，好奇地凑近了！' : '歪着头观察起来。');
      tame.log.push('派' + (lead ? lead.nick : '搭档') + '上前搭话');
    } else if (act === 'food') {
      if (run && (run.bag['随身干粮'] || 0) <= 0) return { ok: false, reason: '干粮不足' };
      if (run) run.bag['随身干粮']--;
      tame.usedItems.push('随身干粮');
      tame.trust = clamp(tame.trust + mod.food[0] + rainBonus, 0, 100);
      tame.alert = clamp(tame.alert + mod.food[1], 0, 100);
      tame.mood = '它嗅了嗅抛过去的干粮，三口两口吃下，尾巴轻轻摇了起来。';
      tame.log.push('投喂随身干粮');
    } else if (act === 'bait') {
      if (run && (run.bag['夜光甜果饵'] || 0) <= 0) return { ok: false, reason: '缺少夜光甜果饵' };
      if (run) run.bag['夜光甜果饵']--;
      tame.usedItems.push('夜光甜果饵');
      tame.trust = clamp(tame.trust + mod.bait[0], 0, 100);
      tame.alert = clamp(tame.alert + mod.bait[1], 0, 100);
      tame.mood = '✨ 夜光甜果饵散发奇异甜香！它彻底卸下防备，哒哒小跑过来靠近你的掌心！';
      tame.log.push('投喂特制夜光甜果饵');
    } else if (act === 'care') {
      tame.trust = clamp(tame.trust + mod.care[0], 0, 100);
      tame.alert = clamp(tame.alert + mod.care[1], 0, 100);
      tame.mood = '你轻柔地递出草药安抚照料，它眼神柔和了下来。';
      tame.log.push('轻声照料安抚');
    }

    tame.round++;
    if (tame.alert >= 100) {
      tame.over = true;
      tame.outcome = mod.runaway ? '受惊逃脱' : '激怒转战';
      tame.mood = mod.runaway ? '警戒爆表！它发出一声短促尖叫，瞬间钻入地形深处消失不见。' : '警戒爆表！它彻底翻脸低吼着扑了上来！';
      return { ok: true, ended: true, outcome: tame.outcome };
    }
    return { ok: true, ended: false };
  }

  function buildWildSummary(run) {
    var payload = {
      '区域': run.zone,
      '地形': run.terrain,
      '本局玩法': run.mutator.name,
      '剩余行动力': run.ap,
      '已探格数': run.visited.length,
      '评价': (run.mutator.id === 'greed' && bagTotal(run) >= 7) ? '满载而归' : (run.bonded.length ? '满心羁绊' : '顺利勘测'),
      '新结契': run.bonded.slice(),
      '背包变动': Object.assign({}, run.bag),
      '生态藏品': run.relics.slice(),
      '队伍残余': run.team.map(function (m) { return { '昵称': m.nick, '体力': m.hp, '疲劳': m.fatigue }; }),
      '高光': run.highlights.slice(-3)
    };
    return { payload: payload, capsule: '[野外结算]' + JSON.stringify(payload) + '[/野外结算]' };
  }

  function buildTameSummary(tame) {
    var payload = {
      '物种': tame.species,
      '阶段': tame.stage,
      '属性': tame.types,
      '结果': tame.outcome || '主动放弃',
      '最终信任': tame.trust,
      '最终警戒': tame.alert,
      '消耗物品': tame.usedItems.slice(),
      '关键经过': tame.log.slice(-3)
    };
    return { payload: payload, capsule: '[安抚结算]' + JSON.stringify(payload) + '[/安抚结算]' };
  }

  var api = {
    COL_X: COL_X,
    ROW_Y: ROW_Y,
    MUTATORS: MUTATORS,
    createRun: createRun,
    setLead: setLead,
    moveTo: moveTo,
    markCleared: markCleared,
    resolveGather: resolveGather,
    resolveEvent: resolveEvent,
    resolveMerchant: resolveMerchant,
    resolveCamp: resolveCamp,
    craftBait: craftBait,
    canCraftBait: canCraftBait,
    bagTotal: bagTotal,
    byId: byId,
    neighbors: neighbors,
    buildBattleSetup: buildBattleSetup,
    applyBattleResult: applyBattleResult,
    createTame: createTame,
    stepTame: stepTame,
    buildWildSummary: buildWildSummary,
    buildTameSummary: buildTameSummary
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.P12WildEngine = api;
})(typeof window !== 'undefined' ? window : globalThis);

;
// hook/wild/view.js — WT-v7 晴空测绘沙盘微肉鸽与双轨安抚交互视图（支持四档流体缩放与 UI-1 真对战台联动）
(function (root) {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function ensureStyle() {
    if (document.getElementById('p12-wild-style')) return;
    var css = root.P12_WILD_CSS || '';
    if (!css) return;
    var st = document.createElement('style');
    st.id = 'p12-wild-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  function assetUrl(rel, base) {
    var b = base || root.__P12_WILD_ASSETS__ || (root.__P12_CLOUD_BASE__ ? root.__P12_CLOUD_BASE__ + '/assets-wild' : './assets-wild');
    return b.replace(/\/$/, '') + '/' + rel;
  }

  function mountWild(hostEl, spec, opts) {
    ensureStyle();
    opts = opts || {};
    var E = root.P12WildEngine;
    if (!E) {
      hostEl.innerHTML = '<div style="padding:14px;border:2px solid #1b2340;background:#fff;">野外引擎未就绪</div>';
      return null;
    }

    var saveKey = opts.saveKey || null;
    var run = null;
    if (saveKey) {
      try {
        var raw = localStorage.getItem(saveKey);
        if (raw) run = JSON.parse(raw);
      } catch (e) {}
    }
    if (!run || !Array.isArray(run.nodes)) {
      run = E.createRun(spec, opts.team || [], { seed: opts.seed, mutatorId: opts.mutatorId });
    }

    function persist() {
      if (!saveKey) return;
      try { localStorage.setItem(saveKey, JSON.stringify(run)); } catch (e) {}
    }

    var assetsBase = opts.assetsBase || null;
    var bgSrc = assetUrl('map-bg.jpg', assetsBase);
    var iconSrc = function (k) { return assetUrl((k || 'unknown') + '.png', assetsBase); };

    var selId = null;
    var activeTame = null;
    var activeBattle = null;

    hostEl.innerHTML =
      '<div class="p12-wild-root">' +
        '<img class="p12-wild-bg" src="' + esc(bgSrc) + '" alt="map" />' +
        '<div class="p12-wild-rain"></div>' +
        '<div class="p12-wild-top">' +
          '<div class="p12-w-grp">' +
            '<button type="button" class="p12-w-btn" data-w-exit>⎋ 撤离结算</button>' +
            (opts.allowReroll ? '<button type="button" class="p12-w-btn sun" data-w-reroll>🎲 换新局</button>' : '') +
          '</div>' +
          '<div class="p12-w-grp">' +
            '<div class="p12-w-zone"><b data-w-zname></b><small data-w-zsub></small></div>' +
            '<div class="p12-w-mut" data-w-mut><b data-w-mt></b><span data-w-ms></span></div>' +
          '</div>' +
          '<div class="p12-w-grp"><button type="button" class="p12-w-btn" data-w-craft>🧪 调配</button></div>' +
        '</div>' +
        '<div class="p12-w-ap"><span class="ap-l">行动力</span><span class="ap-n" data-w-ap>6</span><span class="ap-s">折返0耗</span></div>' +
        '<div class="p12-w-toast" data-w-toast>点击相连发光节点自由探索 · 靠近自动显形</div>' +
        '<div class="p12-w-viewport" data-w-vp>' +
          '<div class="p12-w-board" data-w-board>' +
            '<svg class="p12-w-svg" data-w-svg viewBox="0 0 1000 500" preserveAspectRatio="none"></svg>' +
            '<div data-w-nodes></div>' +
            '<div class="p12-w-pin" data-w-pin><span>TAMER</span>' +
              '<svg viewBox="0 0 24 34"><circle cx="12" cy="7" r="4.4" fill="#ff6b2b" stroke="#1b2340" stroke-width="2"/>' +
              '<path d="M7 13h10l2 9h-3l-1-6v15h-2.5v-8h-1v8H9V16l-1 6H5l2-9z" fill="#fff" stroke="#1b2340" stroke-width="1.8" stroke-linejoin="round"/></svg>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="p12-wild-bot">' +
          '<div class="p12-w-bsec"><div class="p12-w-meta"><b data-w-bcnt>0</b><span>收获</span></div><div class="p12-w-loot" data-w-loot></div></div>' +
          '<div class="p12-w-bsec"><div class="p12-w-squad" data-w-squad></div></div>' +
        '</div>' +
        '<aside class="p12-w-drawer" data-w-dr>' +
          '<div class="p12-w-drhd">' +
            '<img class="p12-w-drico" data-w-drico src="' + esc(iconSrc('gather')) + '" alt="" />' +
            '<div><div class="p12-w-drk" data-w-drk></div><h3 class="p12-w-drt" data-w-drt></h3></div>' +
            '<button type="button" class="p12-w-drx" data-w-drx>✕</button>' +
          '</div>' +
          '<div class="p12-w-drln"></div>' +
          '<div class="p12-w-drbd" data-w-drbd></div>' +
        '</aside>' +
      '</div>';

    var box = hostEl.querySelector('.p12-wild-root');
    var q = function (s) { return box.querySelector(s); };

    function setToast(m) { q('[data-w-toast]').textContent = m; }

    function openDrawer(ico, kicker, title, html) {
      var img = q('[data-w-drico]');
      if (ico) { img.src = iconSrc(ico); img.style.display = 'block'; } else { img.style.display = 'none'; }
      q('[data-w-drk]').textContent = kicker;
      q('[data-w-drt]').textContent = title;
      q('[data-w-drbd]').innerHTML = html;
      q('[data-w-dr]').classList.add('open');
      box.classList.add('drawer-open');
    }

    function closeDrawer() {
      selId = null; activeTame = null; activeBattle = null;
      q('[data-w-dr]').classList.remove('open');
      box.classList.remove('drawer-open');
      renderMap();
    }

    function renderHud() {
      box.classList.toggle('rainy', !!run.rainy);
      q('[data-w-zname]').textContent = run.zone;
      q('[data-w-zsub]').textContent = 'TAMER·LINK // ' + run.terrain.toUpperCase() + ' · ' + run.slot;
      q('[data-w-mt]').textContent = run.mutator.icon + ' ' + run.mutator.name;
      if (run.mutator.id === 'track') q('[data-w-ms]').textContent = run.bossTracked ? '✓ 已锁定霸主' : ('脚印 ' + run.clues + '/2');
      else if (run.mutator.id === 'rain') q('[data-w-ms]').textContent = run.rainy ? '🌧️ 骤雨：采集×2' : '☀️ 晴朗';
      else if (run.mutator.id === 'greed') q('[data-w-ms]').textContent = '背包 ' + E.bagTotal(run) + '/7';
      else q('[data-w-ms]').textContent = run.mutator.short;

      var apEl = q('[data-w-ap]');
      apEl.textContent = run.ap;
      apEl.classList.toggle('low', run.ap <= 2);

      var lootHtml = '';
      if (E.canCraftBait(run)) lootHtml += '<div class="p12-w-slot craft" data-w-craft>✨ 可合甜果饵</div>';
      run.relics.forEach(function (r) { lootHtml += '<div class="p12-w-slot relic">🏅 ' + esc(r) + '</div>'; });
      Object.keys(run.bag).forEach(function (k) {
        if (run.bag[k] > 0) lootHtml += '<div class="p12-w-slot" data-w-craft>' + esc(k) + ' ×' + run.bag[k] + '</div>';
      });
      q('[data-w-loot]').innerHTML = lootHtml;
      q('[data-w-bcnt]').textContent = E.bagTotal(run);

      q('[data-w-squad]').innerHTML = run.team.map(function (m) {
        return '<div class="p12-w-sq ' + (m.id === run.leadId ? 'lead' : '') + '" data-w-lead="' + esc(m.id) + '">' +
          '<div class="st"><span>' + esc(m.nick) + '</span><span style="color:var(--sun);font-size:10px">' + (m.id === run.leadId ? '先导' : m.hp + '%') + '</span></div>' +
          '<div class="sh"><i class="' + (m.hp < 45 ? 'low' : '') + '" style="width:' + m.hp + '%"></i></div>' +
        '</div>';
      }).join('');
      persist();
    }

    function renderMap() {
      var adj = E.neighbors(run, run.curId);
      var svg = '';
      run.edges.forEach(function (e) {
        var a = E.byId(run, e[0]), b = E.byId(run, e[1]);
        if (!a || !b) return;
        var x1 = E.COL_X[a.c], y1 = E.ROW_Y[a.r], x2 = E.COL_X[b.c], y2 = E.ROW_Y[b.r];
        var lit = run.visited.indexOf(e[0]) >= 0 && run.visited.indexOf(e[1]) >= 0;
        var near = e[0] === run.curId || e[1] === run.curId;
        svg += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="rgba(27,35,64,0.82)" stroke-width="' + (near || lit ? 8 : 5.5) + '" stroke-linecap="round" />';
        var col = lit ? '#0ea5e9' : (near ? '#ff6b2b' : '#ffffff');
        var dash = (lit || near) ? '' : 'stroke-dasharray="9,6"';
        svg += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + col + '" stroke-width="' + (near || lit ? 3.5 : 2.4) + '" ' + dash + ' stroke-linecap="round" />';
      });
      q('[data-w-svg]').innerHTML = svg;

      var html = '';
      run.nodes.forEach(function (n) {
        var left = (E.COL_X[n.c] / 1000 * 100).toFixed(2) + '%';
        var top = (E.ROW_Y[n.r] / 500 * 100).toFixed(2) + '%';
        var isReach = adj.indexOf(n.id) >= 0;
        var isVis = run.visited.indexOf(n.id) >= 0;
        var isDone = run.cleared.indexOf(n.id) >= 0;
        var isSel = selId === n.id;

        if (n.kind === 'dot') {
          html += '<div class="p12-w-dot ' + (isReach ? 'reachable ' : '') + (isVis ? 'visited' : '') + '" style="left:' + left + ';top:' + top + '" data-w-nid="' + esc(n.id) + '"></div>';
        } else {
          var ik = n.revealed ? n.type : 'unknown';
          var cap = n.revealed ? n.label : '未探明';
          var cls = 'p12-w-node type-' + esc(n.type) + (isReach ? ' reachable' : (!isVis ? ' locked' : '')) + (isDone ? ' done' : '') + (isSel ? ' selected' : '');
          html += '<div class="' + cls + '" style="left:' + left + ';top:' + top + '" data-w-nid="' + esc(n.id) + '">' +
            '<div class="p12-w-orb"><img src="' + esc(iconSrc(ik)) + '" alt="' + esc(cap) + '" />' +
              (n.clue && !isDone ? '<span class="p12-w-clue">🐾</span>' : '') +
              (isDone ? '<span class="p12-w-chk">✓</span>' : '') +
            '</div><div class="p12-w-cap">' + esc(cap) + '</div></div>';
        }
      });
      q('[data-w-nodes]').innerHTML = html;

      var cur = E.byId(run, run.curId);
      if (cur) {
        var pin = q('[data-w-pin]');
        pin.style.left = (E.COL_X[cur.c] / 1000 * 100).toFixed(2) + '%';
        pin.style.top = ((E.ROW_Y[cur.r] - (cur.kind === 'icon' ? 42 : 24)) / 500 * 100).toFixed(2) + '%';
      }
    }

    function checkAutoEnd() {
      if (run.ap <= 0 && !run.over) {
        setToast('行动力耗尽，正在汇总本次探险收获…');
        setTimeout(openSummary, 350);
      }
    }

    function openPreview(n) {
      var isReach = E.neighbors(run, run.curId).indexOf(n.id) >= 0;
      var isVis = run.visited.indexOf(n.id) >= 0;
      var isDone = run.cleared.indexOf(n.id) >= 0;
      var cost = isVis ? 0 : 1;
      if (!n.revealed) {
        openDrawer('unknown', 'SIGNAL // UNCHARTED', '未探明区域',
          '<p class="p12-w-drdesc">前方被地形雾气遮蔽，走到相邻路径时会自动显形。</p>' +
          '<div class="p12-w-btns">' +
            (isReach
              ? '<button type="button" class="p12-w-act pri" ' + (run.ap >= cost ? '' : 'disabled') + ' data-w-go="' + esc(n.id) + '">消耗 ' + cost + ' 行动力踏入探明</button>'
              : '<button type="button" class="p12-w-act" disabled><strong>尚未抵达相邻路径</strong><span>请先沿导航轨推进</span></button>') +
          '</div>');
        return;
      }
      openDrawer(n.type, 'NODE // ' + String(n.type || '').toUpperCase(), n.title || n.label,
        '<p class="p12-w-drdesc">' + esc(n.desc || '') + '</p>' +
        (n.clue && !isDone ? '<div class="p12-w-quote">🐾 发现发光脚印！探索此处可推进「生态追踪」。</div>' : '') +
        '<div class="p12-w-btns">' +
          (isReach
            ? (isDone
                ? '<button type="button" class="p12-w-act" data-w-go="' + esc(n.id) + '"><strong>👣 免费折返（0 行动力）</strong><span>已探明区域可自由折返</span></button>'
                : '<button type="button" class="p12-w-act pri" ' + (run.ap >= cost ? '' : 'disabled') + ' data-w-go="' + esc(n.id) + '">' + (run.ap >= cost ? '✦ 前往并探索（耗 ' + cost + ' 行动力）' : '行动力不足 · 请撤离结算') + '</button>')
            : '<button type="button" class="p12-w-act" disabled><strong>' + (n.id === run.curId ? '当前正位于此' : '未直接相连') + '</strong><span>点击相邻高亮节点推进</span></button>') +
        '</div>');
    }

    function drawTameDrawer(nodeId) {
      var t = activeTame;
      var lead = run.team.find(function (m) { return m.id === run.leadId; });
      var foodN = run.bag['随身干粮'] || 0, baitN = run.bag['夜光甜果饵'] || 0;
      openDrawer('tame', 'BOND // ' + t.trait, t.species + ' · ' + t.stage,
        '<div class="p12-w-meters">' +
          '<div class="p12-w-meter"><div class="p12-w-mhd"><span style="color:var(--sun)">🧡 信任</span><span>' + t.trust + '%</span></div><div class="p12-w-mtr"><i style="width:' + t.trust + '%;background:var(--sun)"></i></div></div>' +
          '<div class="p12-w-meter"><div class="p12-w-mhd"><span style="color:var(--hot)">🔴 警戒</span><span>' + t.alert + '%</span></div><div class="p12-w-mtr"><i style="width:' + t.alert + '%;background:var(--hot)"></i></div></div>' +
        '</div>' +
        '<div class="p12-w-quote">💬 ' + esc(t.mood) + '</div>' +
        (t.over
          ? '<div class="p12-w-btns"><button type="button" class="p12-w-act pri" data-w-tame-done="' + esc(nodeId) + '">✓ 确认结果（' + esc(t.outcome) + '）</button></div>'
          : '<div class="p12-w-btns">' +
              '<button type="button" class="p12-w-act" data-w-tact="calm"><strong>🧎 蹲低收声</strong><span>降低警戒、温和拉近距离</span></button>' +
              '<button type="button" class="p12-w-act" data-w-tact="partner"><strong>🐾 派先导「' + esc(lead ? lead.nick : '搭档') + '」搭话</strong><span>同属性搭档额外加分</span></button>' +
              '<button type="button" class="p12-w-act" ' + (foodN > 0 ? '' : 'disabled') + ' data-w-tact="food"><strong>🍖 投喂随身干粮（剩 ' + foodN + '）</strong><span>稳定拉升信任</span></button>' +
              '<button type="button" class="p12-w-act" ' + (baitN > 0 ? '' : 'disabled') + ' style="border-left-color:var(--sun)" data-w-tact="bait"><strong>✨ 投喂「夜光甜果饵」（剩 ' + baitN + '）</strong><span>现场调配奇效：大幅增信降警</span></button>' +
              '<button type="button" class="p12-w-act pri" ' + (t.trust >= 70 ? '' : 'disabled') + ' data-w-tact="bond">' + (t.trust >= 70 ? '✦ 伸手邀约缔结契约！' : '✦ 信任达 70% 解锁伸手结契') + '</button>' +
            '</div>'));
    }

    function drawFallbackBattle(node) {
      var b = activeBattle;
      var lead = run.team.find(function (m) { return m.id === run.leadId; });
      var pct = Math.max(0, Math.round(b.hp / b.max * 100));
      openDrawer(node.type, 'COMBAT // 野外交锋', b.name,
        '<div class="p12-w-meters">' +
          '<div class="p12-w-meter"><div class="p12-w-mhd"><span>敌方</span><span>' + b.hp + '/' + b.max + '</span></div><div class="p12-w-mtr"><i style="width:' + pct + '%;background:var(--hot)"></i></div></div>' +
          '<div class="p12-w-meter"><div class="p12-w-mhd"><span>' + esc(lead.nick) + '</span><span>' + lead.hp + '/100</span></div><div class="p12-w-mtr"><i style="width:' + lead.hp + '%;background:var(--mint)"></i></div></div>' +
        '</div>' +
        '<div class="p12-w-quote">⚔️ ' + esc(b.msg) + '</div>' +
        '<div class="p12-w-btns">' +
          '<button type="button" class="p12-w-act" data-w-bact="heavy"><strong>⚡ 强攻压制</strong><span>高伤害，承受反击</span></button>' +
          '<button type="button" class="p12-w-act" data-w-bact="safe"><strong>🛡️ 稳守牵制</strong><span>中伤害，轻反击</span></button>' +
          (b.hp <= b.max * 0.45 ? '<button type="button" class="p12-w-act pri" data-w-btotame="' + esc(node.id) + '">🤝 敌方已露怯！顺势伸手缔结契约</button>' : '') +
        '</div>');
    }

    function triggerNode(n) {
      if (n.type === 'gather') {
        openDrawer('gather', 'GATHER // 采集', n.title,
          '<p class="p12-w-drdesc">' + esc(n.desc) + '</p>' +
          '<div class="p12-w-btns"><button type="button" class="p12-w-act pri" data-w-gather="' + esc(n.id) + '">🧺 采摘并收入即时背包</button></div>');
      } else if (n.type === 'event') {
        openDrawer('event', 'ENCOUNTER // 抉择', n.title,
          '<p class="p12-w-drdesc">' + esc(n.desc) + '</p>' +
          '<div class="p12-w-btns">' +
            '<button type="button" class="p12-w-act" data-w-ev="lamp:' + esc(n.id) + '"><strong>🔦 带走「荧光驱虫灯」（藏品）</strong><span>本趟生效：后续安抚初始警戒 -15%</span></button>' +
            '<button type="button" class="p12-w-act" data-w-ev="box:' + esc(n.id) + '"><strong>🎒 翻找补给箱</strong><span>即时获得当地特产与回复喷雾</span></button>' +
          '</div>');
      } else if (n.type === 'merchant') {
        var sp0 = run.specialties[0];
        var ok = (run.bag[sp0] || 0) >= 1;
        openDrawer('merchant', 'MERCHANT // 货郎', n.title,
          '<p class="p12-w-drdesc">' + esc(n.desc) + '</p>' +
          '<div class="p12-w-btns">' +
            '<button type="button" class="p12-w-act pri" ' + (ok ? '' : 'disabled') + ' data-w-shop="1:' + esc(n.id) + '">' + (ok ? '🤝 ' + esc(sp0) + ' ×1 → 换「✨ 夜光甜果饵」' : '缺少 ' + esc(sp0)) + '</button>' +
            '<button type="button" class="p12-w-act" data-w-shop="0:' + esc(n.id) + '"><strong>➡️ 谢绝离开</strong><span>继续探索</span></button>' +
          '</div>');
      } else if (n.type === 'camp') {
        openDrawer('camp', 'CAMP // 休整', n.title,
          '<p class="p12-w-drdesc">' + esc(n.desc) + '</p>' +
          '<div class="p12-w-btns"><button type="button" class="p12-w-act pri" data-w-camp="' + esc(n.id) + '">🔥 全队 HP +30 · 行动力 +2</button></div>');
      } else if (n.type === 'tame') {
        activeTame = E.createTame(Object.assign({ isBoss: false }, n.mon || {}), run);
        drawTameDrawer(n.id);
      } else if (n.type === 'battle' || n.type === 'boss') {
        // 优先无缝拉起外部真实 UI-1 对战台；若无外部回调则平滑回落抽屉迷你交锋
        if (typeof opts.launchBattle === 'function') {
          var bSpec = E.buildBattleSetup(run, n);
          setToast('⚔️ 正在原地拉起 WT-v7 对战台…');
          opts.launchBattle(bSpec, function (res) {
            var ar = E.applyBattleResult(run, n.id, res);
            renderHud();
            if (ar.won) {
              openDrawer(n.type, 'VICTORY // 战果同步', (n.mon ? n.mon.species : n.title) + ' 被打服',
                '<p class="p12-w-drdesc">战斗胜利！战利品「' + esc(ar.loot) + '」已实时入袋。现在可顺势伸手缔结契约，或继续推进地图。</p>' +
                '<div class="p12-w-btns">' +
                  '<button type="button" class="p12-w-act pri" data-w-btotame="' + esc(n.id) + '">🤝 趁它被打服，进入定心结契</button>' +
                  '<button type="button" class="p12-w-act" data-w-clear="' + esc(n.id) + '"><strong>➡️ 收好战利品，继续探索</strong></button>' +
                '</div>');
            } else {
              E.markCleared(run, n.id);
              renderHud(); closeDrawer(); checkAutoEnd();
            }
          });
        } else {
          var isBoss = n.type === 'boss';
          activeBattle = { node: n, name: n.title, hp: isBoss ? 110 : 80, max: isBoss ? 110 : 80, msg: '敌方摆出迎战架势！' };
          drawFallbackBattle(n);
        }
      }
    }

    function openSummary() {
      run.over = true; persist();
      var sum = E.buildWildSummary(run);
      openDrawer('boss', 'SUMMARY // 仅耗 1 轮 AI', '野外探索结算',
        '<p class="p12-w-drdesc">点击下方按钮即可把整趟探险结果填入聊天框，AI 将立刻续写 1000+ 字高光回程剧情：</p>' +
        '<pre class="p12-w-json">' + esc(sum.capsule) + '</pre>' +
        '<div class="p12-w-btns" style="margin-top:10px">' +
          '<button type="button" class="p12-w-act pri" data-w-send>✦ 填入输入框并结束探险</button>' +
        '</div>');
    }

    box.addEventListener('click', function (ev) {
      var el = ev.target.closest('[data-w-nid],[data-w-go],[data-w-lead],[data-w-exit],[data-w-reroll],[data-w-mut],[data-w-craft],[data-w-drx],[data-w-gather],[data-w-ev],[data-w-shop],[data-w-camp],[data-w-tact],[data-w-tame-done],[data-w-bact],[data-w-btotame],[data-w-clear],[data-w-send],[data-w-docraft]');
      if (!el) {
        if (ev.target.closest('[data-w-vp]') && !ev.target.closest('[data-w-nid]')) closeDrawer();
        return;
      }
      if (el.hasAttribute('data-w-drx')) { closeDrawer(); return; }
      if (el.hasAttribute('data-w-exit')) { openSummary(); return; }
      if (el.hasAttribute('data-w-reroll')) {
        run = E.createRun(spec, opts.team || [], { avoidMutator: run.mutator.id });
        closeDrawer(); renderHud(); renderMap();
        setToast('🎲 已重新生成随机路网与玩法：【' + run.mutator.name + '】');
        return;
      }
      if (el.hasAttribute('data-w-mut')) {
        openDrawer('event', 'MUTATOR // 本局规则', run.mutator.icon + ' ' + run.mutator.name,
          '<p class="p12-w-drdesc">' + esc(run.mutator.detail) + '</p>');
        return;
      }
      if (el.hasAttribute('data-w-craft')) {
        var sp = run.specialties;
        var ok = E.canCraftBait(run);
        openDrawer('gather', 'CRAFT // 野外调配', '现场合成诱饵',
          '<div class="p12-w-quote">🧪 配方：<b>' + esc(sp[0]) + ' ×1 + ' + esc(sp[1]) + ' ×1 → ✨ 夜光甜果饵</b></div>' +
          '<div class="p12-w-btns"><button type="button" class="p12-w-act pri" ' + (ok ? '' : 'disabled') + ' data-w-docraft>' + (ok ? '✨ 立即合成「夜光甜果饵」' : '材料不足') + '</button></div>');
        return;
      }
      if (el.hasAttribute('data-w-docraft')) {
        if (E.craftBait(run).ok) { setToast('✨ 合成成功！「夜光甜果饵」已实时入袋！'); renderHud(); closeDrawer(); }
        return;
      }
      if (el.hasAttribute('data-w-lead')) {
        var r = E.setLead(run, el.getAttribute('data-w-lead'));
        if (r.ok) { setToast('切换先导：' + r.lead.nick + '（' + r.lead.tag + '）'); renderHud(); renderMap(); }
        return;
      }
      if (el.hasAttribute('data-w-nid')) {
        var n = E.byId(run, el.getAttribute('data-w-nid'));
        if (!n) return;
        if (n.kind === 'dot') {
          var mv = E.moveTo(run, n.id);
          if (!mv.ok) { setToast(mv.reason); return; }
          if (mv.events.length) setToast(mv.events[0]);
          renderHud(); renderMap(); closeDrawer(); checkAutoEnd();
          return;
        }
        selId = n.id; renderMap(); openPreview(n);
        return;
      }
      if (el.hasAttribute('data-w-go')) {
        var nid = el.getAttribute('data-w-go');
        var mv2 = E.moveTo(run, nid);
        if (!mv2.ok) { setToast(mv2.reason); return; }
        if (mv2.events.length) setToast(mv2.events[0]);
        renderHud(); renderMap();
        if (mv2.shouldTrigger) triggerNode(mv2.node);
        else { closeDrawer(); checkAutoEnd(); }
        return;
      }
      if (el.hasAttribute('data-w-gather')) {
        var gr = E.resolveGather(run, el.getAttribute('data-w-gather'));
        setToast(gr.note || ('🌿 收获 ' + gr.items.join('、') + ' 各×' + gr.qty));
        renderHud(); closeDrawer(); checkAutoEnd();
        return;
      }
      if (el.hasAttribute('data-w-ev')) {
        var parts = el.getAttribute('data-w-ev').split(':');
        var er = E.resolveEvent(run, parts[1], parts[0]);
        setToast(er.note || (parts[0] === 'lamp' ? '🏅 获得生态藏品「荧光驱虫灯」' : '🎒 补给已入账'));
        renderHud(); closeDrawer(); checkAutoEnd();
        return;
      }
      if (el.hasAttribute('data-w-shop')) {
        var sp2 = el.getAttribute('data-w-shop').split(':');
        E.resolveMerchant(run, sp2[1], sp2[0] === '1');
        setToast(sp2[0] === '1' ? '✨ 换得「夜光甜果饵」！' : '已离开水客摊');
        renderHud(); closeDrawer(); checkAutoEnd();
        return;
      }
      if (el.hasAttribute('data-w-camp')) {
        E.resolveCamp(run, el.getAttribute('data-w-camp'));
        setToast('⛺ 休整完成：全队回血 +30，行动力 +2！');
        renderHud(); closeDrawer();
        return;
      }
      if (el.hasAttribute('data-w-bact') && activeBattle) {
        var mode = el.getAttribute('data-w-bact');
        var lead = run.team.find(function (m) { return m.id === run.leadId; });
        var dmg = mode === 'heavy' ? 42 : 26;
        var taken = Math.round((mode === 'heavy' ? 18 : 9) * (lead.passiveCode === 'guard' ? 0.75 : 1) * (run.rainy ? 1.25 : 1));
        activeBattle.hp = Math.max(0, activeBattle.hp - dmg);
        lead.hp = Math.max(10, lead.hp - taken);
        renderHud();
        if (activeBattle.hp <= 0) {
          var ar = E.applyBattleResult(run, activeBattle.node.id, { won: true });
          renderHud();
          openDrawer(activeBattle.node.type, 'VICTORY // 战利品入袋', activeBattle.name + ' 认输',
            '<p class="p12-w-drdesc">战斗收尾！获得「' + esc(ar.loot) + '」。你可以趁它被打服顺势缔结契约，或继续探索。</p>' +
            '<div class="p12-w-btns">' +
              '<button type="button" class="p12-w-act pri" data-w-btotame="' + esc(activeBattle.node.id) + '">🤝 趁它被打服，进入定心结契</button>' +
              '<button type="button" class="p12-w-act" data-w-clear="' + esc(activeBattle.node.id) + '"><strong>➡️ 收好战利品，继续探索</strong></button>' +
            '</div>');
        } else {
          activeBattle.msg = lead.nick + '打出 ' + dmg + ' 伤害，受反击 ' + taken + '。';
          drawFallbackBattle(activeBattle.node);
        }
        return;
      }
      if (el.hasAttribute('data-w-btotame')) {
        var bn = E.byId(run, el.getAttribute('data-w-btotame'));
        activeTame = E.createTame(Object.assign({ fromBattle: true, isBoss: bn.type === 'boss' }, bn.mon || {}), run);
        drawTameDrawer(bn.id);
        return;
      }
      if (el.hasAttribute('data-w-clear')) {
        var cn = E.markCleared(run, el.getAttribute('data-w-clear'));
        if (cn) setToast(cn);
        renderHud(); closeDrawer(); checkAutoEnd();
        return;
      }
      if (el.hasAttribute('data-w-tact') && activeTame) {
        var curN = E.byId(run, run.curId);
        E.stepTame(activeTame, el.getAttribute('data-w-tact'), run);
        renderHud();
        drawTameDrawer(curN ? curN.id : run.curId);
        return;
      }
      if (el.hasAttribute('data-w-tame-done')) {
        var tn = E.markCleared(run, el.getAttribute('data-w-tame-done'));
        if (tn) setToast(tn);
        renderHud(); closeDrawer(); checkAutoEnd();
        return;
      }
      if (el.hasAttribute('data-w-send')) {
        var s = E.buildWildSummary(run);
        if (typeof opts.onFinish === 'function') opts.onFinish(s.capsule, s.payload);
        setToast('✓ 结算胶囊已填入输入框！');
        closeDrawer();
      }
    });

    renderHud(); renderMap();
    return { getRun: function () { return run; }, close: closeDrawer };
  }

  root.P12WildView = { mountWild: mountWild };
})(typeof window !== 'undefined' ? window : globalThis);

;
})();