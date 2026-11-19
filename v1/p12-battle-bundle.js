/* p12-battle-bundle.js — WT-v7 Battle Runtime */
;
(function(){
;
if(window.__p12BattleLoaded)return;window.__p12BattleLoaded=true;
;
window.P12_TYPE_CHART={"version":1,"source":"worldbook/2050000-world-attributes.json","note":"攻方对守方的倍率：2 拔群 / 1 一般 / 0.5 不疼 / 0 无效。双属性相乘。","types":["一般","火","水","草","电","冰","格斗","毒","地面","飞行","超能力","虫","岩石","幽灵","龙","恶","钢","妖精","机械","侵蚀","噬血"],"chart":{"一般":{"一般":1,"火":1,"水":1,"草":1,"电":1,"冰":1,"格斗":0.5,"毒":1,"地面":1,"飞行":1,"超能力":1,"虫":1,"岩石":1,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"火":{"一般":1,"火":1,"水":0.5,"草":2,"电":1,"冰":2,"格斗":1,"毒":1,"地面":0.5,"飞行":1,"超能力":1,"虫":2,"岩石":0.5,"幽灵":1,"龙":1,"恶":1,"钢":2,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"水":{"一般":1,"火":2,"水":1,"草":0.5,"电":0.5,"冰":1,"格斗":1,"毒":1,"地面":2,"飞行":1,"超能力":1,"虫":1,"岩石":2,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"草":{"一般":1,"火":0.5,"水":2,"草":1,"电":1,"冰":0.5,"格斗":1,"毒":0.5,"地面":2,"飞行":0.5,"超能力":1,"虫":0.5,"岩石":2,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"电":{"一般":1,"火":1,"水":2,"草":1,"电":1,"冰":1,"格斗":1,"毒":1,"地面":0.5,"飞行":2,"超能力":1,"虫":1,"岩石":1,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"冰":{"一般":1,"火":0.5,"水":1,"草":2,"电":1,"冰":1,"格斗":0.5,"毒":1,"地面":2,"飞行":2,"超能力":1,"虫":1,"岩石":0.5,"幽灵":1,"龙":2,"恶":1,"钢":0.5,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"格斗":{"一般":2,"火":1,"水":1,"草":1,"电":1,"冰":2,"格斗":1,"毒":1,"地面":1,"飞行":0.5,"超能力":0.5,"虫":1,"岩石":2,"幽灵":1,"龙":1,"恶":2,"钢":2,"妖精":0.5,"机械":1,"侵蚀":1,"噬血":1},"毒":{"一般":1,"火":1,"水":1,"草":2,"电":1,"冰":1,"格斗":1,"毒":1,"地面":0.5,"飞行":1,"超能力":0.5,"虫":1,"岩石":1,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":2,"机械":1,"侵蚀":1,"噬血":1},"地面":{"一般":1,"火":2,"水":0.5,"草":0.5,"电":2,"冰":0.5,"格斗":1,"毒":2,"地面":1,"飞行":1,"超能力":1,"虫":1,"岩石":2,"幽灵":1,"龙":1,"恶":1,"钢":2,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"飞行":{"一般":1,"火":1,"水":1,"草":2,"电":0.5,"冰":0.5,"格斗":2,"毒":1,"地面":1,"飞行":1,"超能力":1,"虫":2,"岩石":0.5,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"超能力":{"一般":1,"火":1,"水":1,"草":1,"电":1,"冰":1,"格斗":2,"毒":2,"地面":1,"飞行":1,"超能力":1,"虫":0.5,"岩石":1,"幽灵":0.5,"龙":1,"恶":0.5,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"虫":{"一般":1,"火":0.5,"水":1,"草":2,"电":1,"冰":1,"格斗":1,"毒":1,"地面":1,"飞行":0.5,"超能力":2,"虫":1,"岩石":0.5,"幽灵":1,"龙":1,"恶":2,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"岩石":{"一般":1,"火":2,"水":0.5,"草":0.5,"电":1,"冰":2,"格斗":0.5,"毒":1,"地面":0.5,"飞行":2,"超能力":1,"虫":2,"岩石":1,"幽灵":1,"龙":1,"恶":1,"钢":0.5,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"幽灵":{"一般":1,"火":1,"水":1,"草":1,"电":1,"冰":1,"格斗":1,"毒":1,"地面":1,"飞行":1,"超能力":2,"虫":1,"岩石":1,"幽灵":2,"龙":1,"恶":0.5,"钢":1,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"龙":{"一般":1,"火":1,"水":1,"草":1,"电":1,"冰":0.5,"格斗":1,"毒":1,"地面":1,"飞行":1,"超能力":1,"虫":1,"岩石":1,"幽灵":1,"龙":2,"恶":1,"钢":1,"妖精":0.5,"机械":1,"侵蚀":1,"噬血":1},"恶":{"一般":1,"火":1,"水":1,"草":1,"电":1,"冰":1,"格斗":0.5,"毒":1,"地面":1,"飞行":1,"超能力":2,"虫":0.5,"岩石":1,"幽灵":2,"龙":1,"恶":1,"钢":1,"妖精":0.5,"机械":1,"侵蚀":1,"噬血":1},"钢":{"一般":1,"火":0.5,"水":1,"草":1,"电":1,"冰":2,"格斗":0.5,"毒":1,"地面":0.5,"飞行":1,"超能力":1,"虫":1,"岩石":2,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":2,"机械":1,"侵蚀":1,"噬血":1},"妖精":{"一般":1,"火":1,"水":1,"草":1,"电":1,"冰":1,"格斗":2,"毒":0.5,"地面":1,"飞行":1,"超能力":1,"虫":1,"岩石":1,"幽灵":1,"龙":2,"恶":2,"钢":0.5,"妖精":1,"机械":1,"侵蚀":1,"噬血":1},"机械":{"一般":1,"火":0.5,"水":1,"草":1,"电":0.5,"冰":2,"格斗":1,"毒":1,"地面":0.5,"飞行":1,"超能力":1,"虫":1,"岩石":2,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":2,"机械":1,"侵蚀":1,"噬血":1},"侵蚀":{"一般":2,"火":0.5,"水":1,"草":2,"电":1,"冰":1,"格斗":1,"毒":1,"地面":1,"飞行":1,"超能力":2,"虫":1,"岩石":1,"幽灵":1,"龙":1,"恶":1,"钢":0.5,"妖精":0.5,"机械":1,"侵蚀":1,"噬血":1},"噬血":{"一般":2,"火":0.5,"水":1,"草":1,"电":1,"冰":1,"格斗":2,"毒":1,"地面":1,"飞行":1,"超能力":0.5,"虫":2,"岩石":1,"幽灵":1,"龙":1,"恶":1,"钢":1,"妖精":0.5,"机械":1,"侵蚀":1,"噬血":1}},"gaps":["侵蚀 克 一般，但 一般 的「怕谁」没写 侵蚀","噬血 克 一般，但 一般 的「怕谁」没写 噬血","侵蚀 克 草，但 草 的「怕谁」没写 侵蚀","机械 克 冰，但 冰 的「怕谁」没写 机械","噬血 克 格斗，但 格斗 的「怕谁」没写 噬血","侵蚀 克 超能力，但 超能力 的「怕谁」没写 侵蚀","噬血 克 虫，但 虫 的「怕谁」没写 噬血","机械 克 岩石，但 岩石 的「怕谁」没写 机械","机械 克 妖精，但 妖精 的「怕谁」没写 机械","机械 克 冰，但 冰 的「怕谁」没写 机械","机械 克 岩石，但 岩石 的「怕谁」没写 机械","机械 克 妖精，但 妖精 的「怕谁」没写 机械","侵蚀 克 一般，但 一般 的「怕谁」没写 侵蚀","侵蚀 克 草，但 草 的「怕谁」没写 侵蚀","侵蚀 克 超能力，但 超能力 的「怕谁」没写 侵蚀","噬血 克 一般，但 一般 的「怕谁」没写 噬血","噬血 克 格斗，但 格斗 的「怕谁」没写 噬血","噬血 克 虫，但 虫 的「怕谁」没写 噬血"],"generatedAt":"2026-11-10T08:51:58.481Z"};
;
window.P12_BATTLE_CSS="/* ==========================================================================\n   WT-v7 · 明亮少年漫机能对战台 & 定格结算海报 (Fluid Responsive Edition)\n   架构铁律：向《晓之夜歌》看齐，废除 1280×800 锁死画布与 scale(--k) 硬缩黑框！\n   全程采用 container-type: size + 三层响应式 CSS Grid + clamp() 流体自适应。\n   ========================================================================== */\n#p12battle {\n  --navy: #1b2340;\n  --navy-2: #253056;\n  --ceramic: #ffffff;\n  --ceramic-2: #f1f6fd;\n  --ice-line: #cfe0f5;\n  --sun: #ff6b2b;\n  --sky: #1da1f2;\n  --cyan: #00c2ff;\n  --mint: #10b981;\n  --gold: #ffb800;\n  --hot: #ff3b5c;\n  --ink: #1b2340;\n  --ink2: #52607a;\n  --line: #dbe6f3;\n  --sans: \"HarmonyOS Sans SC\", \"Source Han Sans SC\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  --mono: \"Bahnschrift\", \"DIN Alternate\", \"JetBrains Mono\", Consolas, monospace;\n\n  position: fixed;\n  inset: 0;\n  z-index: 99990;\n  display: none;\n  padding: clamp(6px, 1.4vmin, 18px);\n  box-sizing: border-box;\n  background: rgba(20, 28, 48, 0.46);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  color: var(--ink);\n  font-family: var(--sans);\n  -webkit-font-smoothing: antialiased;\n}\n#p12battle.on {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#p12battle * {\n  box-sizing: border-box;\n}\n\n/* 自适应流体主容器：随页面平滑伸缩，无死宽死高 */\n#p12battle .b-stage {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-width: min(1680px, 100%);\n  max-height: min(1000px, 100%);\n  container-type: size;\n  background: linear-gradient(180deg, #dff0ff 0%, #eef6ff 55%, #f5f9ff 100%);\n  border: 3px solid var(--navy);\n  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px));\n  overflow: hidden;\n  box-shadow: 0 24px 52px rgba(20, 28, 48, 0.32);\n}\n\n#p12battle .b-close {\n  position: absolute;\n  right: clamp(10px, 1.4cqw, 20px);\n  top: clamp(9px, 1.4cqh, 15px);\n  z-index: 40;\n  border: 2px solid var(--navy);\n  background: var(--navy);\n  color: #fff;\n  font: 900 12px/1 var(--sans);\n  padding: 7px 14px;\n  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);\n  cursor: pointer;\n  letter-spacing: 0.06em;\n  transition: transform 0.14s, background 0.14s;\n}\n#p12battle .b-close:hover {\n  background: var(--hot);\n  transform: translateY(-1px);\n}\n\n#p12battle .scene {\n  position: absolute;\n  inset: 0;\n  display: none;\n}\n#p12battle .scene.b-fight.on {\n  display: grid;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  gap: clamp(6px, 1.1cqh, 12px);\n  padding: clamp(10px, 1.6cqh, 16px) clamp(12px, 1.8cqw, 24px);\n}\n#p12battle .scene.b-report.on {\n  display: block;\n}\n\n/* ==========================================================================\n   1. 背景与晴空光照层（保留原地形明快饱和度，绝不压黑雾）\n   ========================================================================== */\n#p12battle .battle-background {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 52%;\n  filter: saturate(1.08) brightness(1.03);\n  z-index: 0;\n  pointer-events: none;\n}\n#p12battle .terrain-shade {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, transparent 24%, transparent 72%, rgba(27, 35, 64, 0.24) 100%);\n}\n#p12battle .default-sky-decor {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  background:\n    radial-gradient(ellipse at 72% 28%, rgba(255, 255, 255, 0.85) 0%, rgba(191, 228, 255, 0.35) 45%, transparent 72%),\n    linear-gradient(180deg, #bfe4ff 0%, #e5f3ff 54%, #dce9f7 54.5%, #eef5fc 100%);\n}\n#p12battle .has-background .default-sky-decor {\n  display: none;\n}\n\n/* ==========================================================================\n   2. 顶部少年漫竞技转播横条（对局标题 + 车轮战队伍小牌 + 地形铭牌）\n   ========================================================================== */\n#p12battle .v7-bs-topbar {\n  position: relative;\n  z-index: 12;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px 12px;\n  padding-right: 76px; /* 为右上角收起按钮留出干净余量 */\n}\n#p12battle .battlehead {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  background: var(--navy);\n  color: #fff;\n  border-left: 5px solid var(--sun);\n  padding: 6px 16px 6px 12px;\n  clip-path: polygon(0 0, 100% 0, calc(100% - 11px) 100%, 0 100%);\n  font-size: clamp(12.5px, 1.25cqw, 14.5px);\n  font-weight: 900;\n  box-shadow: 0 6px 16px rgba(27, 35, 64, 0.2);\n}\n#p12battle .battlehead em {\n  background: var(--sun);\n  color: #fff;\n  padding: 2px 7px;\n  font: 900 11px/1.1 var(--mono);\n  font-style: normal;\n  letter-spacing: 0.06em;\n}\n#p12battle .v7-brawl-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--hot);\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 4px 10px;\n  font: 900 11.5px/1.1 var(--sans);\n  clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%);\n  box-shadow: 3px 3px 0 var(--navy);\n}\n\n#p12battle .battle-teams {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  margin: 0 auto;\n}\n#p12battle .battle-teams-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 6px 10px;\n}\n#p12battle .strip {\n  display: inline-flex;\n  gap: 5px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n#p12battle .chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 2px 9px;\n  border: 2px solid #b9cde5;\n  background: rgba(255, 255, 255, 0.94);\n  color: var(--navy);\n  font: 800 11px/1.5 var(--sans);\n  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);\n  transition: transform 0.12s, border-color 0.12s;\n}\n#p12battle .chip.on {\n  border-color: var(--navy);\n  border-left: 4px solid var(--sun);\n  background: #fff9f0;\n  box-shadow: 2px 2px 0 var(--navy);\n}\n#p12battle .chip.down {\n  background: #eef2f7;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n#p12battle .chip[draggable=\"true\"] {\n  cursor: grab;\n}\n#p12battle .chip small {\n  color: var(--ink2);\n  font: 800 10.5px/1 var(--mono);\n}\n#p12battle .chip em {\n  font: 900 10.5px/1 var(--mono);\n  font-style: normal;\n  color: var(--navy);\n}\n#p12battle .chip em.low {\n  color: var(--hot);\n}\n#p12battle .drag-hint {\n  font: 800 10.5px/1.4 var(--sans);\n  color: var(--navy);\n  background: rgba(255, 255, 255, 0.9);\n  border: 1.5px solid var(--ice-line);\n  padding: 1px 9px;\n  border-radius: 999px;\n}\n\n#p12battle .field.terrain-plate {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.95);\n  border: 2px solid var(--navy);\n  padding: 5px 12px;\n  clip-path: polygon(9px 0, 100% 0, 100% 100%, 0 100%, 0 9px);\n  font-size: clamp(11px, 1.05cqw, 12.5px);\n  font-weight: 900;\n  color: var(--navy);\n  box-shadow: 3px 3px 0 var(--navy);\n}\n#p12battle .field.terrain-plate span.hl {\n  color: #0369a1;\n}\n#p12battle .field.terrain-plate span:not(.hl) {\n  background: #fff3cd;\n  border: 1.5px solid var(--gold);\n  color: #92400e;\n  padding: 1px 6px;\n  font-size: 11px;\n}\n\n/* ==========================================================================\n   3. 中央宝可梦对角战场网格（左上敌牌+战况 / 右上远景圆盘 / 左下近景大圆盘 / 右下我牌+招式）\n   ========================================================================== */\n#p12battle .v7-arena-grid {\n  position: relative;\n  z-index: 6;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(260px, 1fr) clamp(310px, 42cqw, 490px);\n  gap: clamp(10px, 2cqw, 26px);\n  align-items: stretch;\n}\n#p12battle .v7-col-left,\n#p12battle .v7-col-right {\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: clamp(8px, 1.4cqh, 14px);\n}\n\n/* 亮白陶瓷切角机能状态牌 */\n#p12battle .v7-hud-foe {\n  width: min(100%, clamp(260px, 31cqw, 368px));\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n#p12battle .plate {\n  background: rgba(255, 255, 255, 0.96);\n  border: 2.5px solid var(--navy);\n  border-left: 6px solid var(--plate-c, var(--hot));\n  padding: clamp(8px, 1.3cqh, 12px) clamp(11px, 1.4cqw, 16px);\n  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%);\n  box-shadow: 0 10px 24px rgba(27, 35, 64, 0.16), 4px 4px 0 rgba(27, 35, 64, 0.2);\n}\n#p12battle .me .plate {\n  --plate-c: var(--sun);\n}\n#p12battle .v7-tp-row1 {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n#p12battle .v7-type-icons {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n#p12battle .v7-type-ico {\n  width: clamp(19px, 2cqw, 24px);\n  height: clamp(19px, 2cqw, 24px);\n  object-fit: contain;\n  flex: none;\n}\n#p12battle .plate .nm {\n  font-size: clamp(15px, 1.65cqw, 19px);\n  font-weight: 900;\n  color: var(--navy);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  flex: 1;\n  min-width: 0;\n}\n#p12battle .v7-tp-stg {\n  font-size: 10.5px;\n  font-weight: 800;\n  color: var(--ink2);\n  background: var(--ceramic-2);\n  border: 1px solid var(--ice-line);\n  padding: 1px 6px;\n  white-space: nowrap;\n}\n#p12battle .v7-tp-lv {\n  margin-left: auto;\n  background: var(--navy);\n  color: #fff;\n  padding: 3px 8px;\n  font: 900 11.5px/1 var(--mono);\n  clip-path: polygon(6px 0, 100% 0, 100% 100%, 0 100%, 0 6px);\n  white-space: nowrap;\n}\n/* 14 段斜切装甲体力灯槽 */\n#p12battle .v7-tp-hpwrap {\n  margin: clamp(6px, 0.9cqh, 9px) 0 clamp(5px, 0.7cqh, 7px);\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  gap: 3px;\n  height: clamp(8px, 1.2cqh, 11px);\n}\n#p12battle .v7-tp-hpwrap i {\n  display: block;\n  transform: skewX(-20deg);\n  background: #e2ecf9;\n  transition: background 0.22s;\n}\n#p12battle .v7-tp-hpwrap i.full {\n  background: linear-gradient(180deg, #34d399, #10b981);\n}\n#p12battle .v7-tp-hpwrap.warn i.full {\n  background: linear-gradient(180deg, #fcd34d, #f59e0b);\n}\n#p12battle .v7-tp-hpwrap.low i.full {\n  background: linear-gradient(180deg, #ff6b2b, #ff3b5c);\n}\n#p12battle .v7-tp-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  font: 800 11px/1.2 var(--mono);\n  color: var(--ink2);\n}\n#p12battle .v7-balls {\n  display: inline-flex;\n  gap: 4px;\n  align-items: center;\n}\n#p12battle .v7-balls s {\n  width: 8.5px;\n  height: 8.5px;\n  border-radius: 50%;\n  background: #dbe6f5;\n  border: 1.5px solid #94a3b8;\n  display: inline-block;\n  text-decoration: none;\n}\n#p12battle .v7-balls s.alive {\n  background: var(--sun);\n  border-color: var(--navy);\n}\n#p12battle .v7-overdrive-tag {\n  color: var(--hot);\n  font-weight: 900;\n}\n\n/* 少年漫切角战况播报条 */\n#p12battle .battle-log {\n  background: rgba(255, 255, 255, 0.94);\n  border: 2px solid var(--navy);\n  border-left: 5px solid var(--sun);\n  padding: 7px 12px;\n  font: 700 clamp(11.5px, 1.1cqw, 12.5px)/1.55 var(--sans);\n  color: var(--navy);\n  box-shadow: 4px 4px 0 rgba(27, 35, 64, 0.18);\n  max-height: clamp(64px, 12cqh, 108px);\n  overflow-y: auto;\n}\n#p12battle .terrain-mark {\n  display: inline-block;\n  font: 800 11px/1.3 var(--sans);\n  padding: 0 5px;\n  border-radius: 3px;\n  background: #dcfce7;\n  color: #166534;\n}\n#p12battle .terrain-mark.is-weaken {\n  background: #ffedd5;\n  color: #9a3412;\n}\n\n/* ==========================================================================\n   4. 宝可梦经典上下景深透视光环圆盘 + 智能面对面镜像 + 完整全身共斗同盘\n   ========================================================================== */\n#p12battle .pn {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  min-height: 0;\n}\n/* 右上远景敌方圆盘舞台：稳居上半区水岸黄金远景位 */\n#p12battle .pn.foe.v7-pos-foe {\n  flex: 1 1 auto;\n  align-self: center;\n  align-items: center;\n  width: min(100%, clamp(230px, 31cqw, 380px));\n  min-height: clamp(140px, 26cqh, 270px);\n  margin-right: clamp(8px, 3cqw, 48px);\n}\n#p12battle .pn.foe.v7-pos-foe .stage-pair {\n  position: relative;\n  padding-bottom: clamp(16px, 2.6cqh, 26px);\n  margin-bottom: 0;\n}\n#p12battle .pn.foe.v7-pos-foe .v7-disc {\n  bottom: auto;\n  margin-top: clamp(96px, 15.5cqh, 158px);\n}\n#p12battle .pn.foe.v7-pos-foe.is-duo .v7-disc {\n  margin-top: clamp(122px, 19.5cqh, 196px);\n}\n#p12battle .pn.foe.v7-pos-foe .bond-link-tag {\n  bottom: auto;\n  margin-top: clamp(168px, 26cqh, 256px);\n}\n/* 左下近景我方大圆盘舞台 */\n#p12battle .pn.me.v7-pos-me {\n  flex: 1 1 auto;\n  align-self: center;\n  width: min(100%, clamp(260px, 38cqw, 470px));\n  min-height: clamp(165px, 33cqh, 350px);\n  margin-left: clamp(4px, 2cqw, 36px);\n  padding-bottom: 4px;\n}\n\n#p12battle .v7-disc {\n  position: absolute;\n  bottom: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 1;\n}\n#p12battle .v7-disc::before {\n  content: \"\";\n  position: absolute;\n  inset: 15% 11%;\n  border-radius: 50%;\n  border: 2px dashed rgba(27, 35, 64, 0.34);\n}\n#p12battle .v7-disc.foe-disc {\n  width: clamp(185px, 24cqw, 286px);\n  height: clamp(48px, 7.2cqh, 78px);\n  background:\n    radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.62) 0%, rgba(226, 240, 255, 0.78) 54%, rgba(255, 59, 92, 0.88) 69%, #1b2340 74%, transparent 76%);\n  box-shadow: 0 12px 22px rgba(27, 35, 64, 0.34);\n}\n#p12battle .v7-disc.me-disc {\n  width: clamp(230px, 30cqw, 366px);\n  height: clamp(60px, 9.2cqh, 98px);\n  background:\n    radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.68) 0%, rgba(224, 244, 255, 0.82) 54%, #00c2ff 69%, #1b2340 74%, transparent 76%);\n  box-shadow: 0 16px 28px rgba(27, 35, 64, 0.38), 0 0 24px rgba(0, 194, 255, 0.34);\n}\n#p12battle .v7-disc.me-disc.disc-duo {\n  width: clamp(280px, 36cqw, 432px);\n  height: clamp(72px, 10.6cqh, 110px);\n  background:\n    radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.88) 0%, rgba(224, 246, 255, 0.88) 50%, #ffd000 65%, #00c2ff 72%, #1b2340 76%, transparent 78%);\n  box-shadow: 0 18px 34px rgba(27, 35, 64, 0.44), 0 0 30px rgba(255, 208, 0, 0.45);\n}\n#p12battle .v7-disc.foe-disc.disc-duo {\n  width: clamp(235px, 29cqw, 336px);\n  height: clamp(60px, 8.6cqh, 88px);\n  background:\n    radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.78) 0%, rgba(255, 224, 232, 0.86) 52%, #ff3b5c 68%, #1b2340 74%, transparent 77%);\n  box-shadow: 0 14px 26px rgba(27, 35, 64, 0.4);\n}\n#p12battle .v7-disc.disc-overdrive {\n  width: clamp(250px, 32cqw, 386px);\n  height: clamp(66px, 9.8cqh, 104px);\n  background:\n    radial-gradient(ellipse at 50% 45%, #ffffff 0%, #80f3ff 38%, #ff6a00 64%, #ffd000 73%, transparent 77%);\n  box-shadow: 0 0 46px #ff5500, 0 0 76px #00e5ff;\n}\n\n/* 异兽舞台容器与立绘 */\n#p12battle .pn .stage-pair {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  margin-bottom: clamp(16px, 2.8cqh, 28px);\n}\n#p12battle .pn.foe .beast {\n  width: clamp(128px, 16.5cqw, 196px);\n  height: clamp(118px, 20cqh, 192px);\n  animation: p12sway 2.6s ease-in-out infinite;\n}\n#p12battle .pn.me .beast {\n  width: clamp(164px, 22cqw, 258px);\n  height: clamp(148px, 26cqh, 252px);\n  animation: p12sway 2.9s ease-in-out infinite;\n}\n#p12battle .beast {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  border-radius: 50%;\n  background: radial-gradient(circle at 50% 58%, rgba(255, 255, 255, 0.55), rgba(0, 194, 255, 0.16) 58%, transparent 72%);\n}\n#p12battle .beast.has-portrait {\n  background: none;\n  border-radius: 0;\n}\n#p12battle .beast.is-emblem-fallback {\n  width: clamp(96px, 12cqw, 132px) !important;\n  height: clamp(96px, 12cqw, 132px) !important;\n  border-radius: 50%;\n  border: 3px solid var(--navy);\n  background: linear-gradient(145deg, #ffffff, #dbeafe);\n  box-shadow: 0 10px 22px rgba(27, 35, 64, 0.25);\n  align-items: center;\n}\n#p12battle .beast.is-emblem-fallback::after {\n  content: attr(data-emblem-label);\n  font: 900 22px/1 var(--sans);\n  color: var(--navy);\n}\n#p12battle .portrait-image {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center bottom;\n  filter: drop-shadow(0 13px 11px rgba(27, 35, 64, 0.4));\n  transition: transform 0.18s ease;\n}\n#p12battle .portrait-image.is-flipped {\n  transform: scaleX(-1);\n}\n#p12battle .portrait-image.is-overdrive {\n  filter: drop-shadow(0 0 18px #ffffff) drop-shadow(0 0 28px #ffd000);\n}\n#p12battle .portrait-image.is-card {\n  background: #fff;\n  outline: 3.5px solid var(--navy);\n  border-radius: 8px;\n  box-shadow: 6px 6px 0 rgba(27, 35, 64, 0.32);\n}\n\n/* 朝向微调小钮（悬停显现，解决任意自定义生图朝向） */\n#p12battle .flip-btn {\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  z-index: 8;\n  opacity: 0;\n  border: 1.5px solid var(--navy);\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--navy);\n  font: 900 11px/1 var(--mono);\n  padding: 3px 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n#p12battle .pn:hover .flip-btn {\n  opacity: 0.88;\n}\n#p12battle .flip-btn:hover {\n  opacity: 1 !important;\n  background: var(--gold);\n}\n\n/* 100% 完整全身立绘双脚踩盘（人物高挑修长，同盘中小型异兽按阶段收敛体型以突显真实身高差！） */\n#p12battle .tamer-full-spr {\n  position: relative;\n  z-index: 2;\n  width: auto;\n  object-fit: contain;\n  object-position: center bottom;\n  filter: drop-shadow(0 12px 10px rgba(20, 26, 51, 0.5));\n}\n#p12battle .pn.me .tamer-full-spr {\n  height: clamp(205px, 36cqh, 332px);\n  max-width: clamp(145px, 19cqw, 236px);\n  margin-right: -8px;\n}\n#p12battle .pn.foe .tamer-full-spr {\n  height: clamp(162px, 27.5cqh, 248px);\n  max-width: clamp(114px, 15cqw, 176px);\n  margin-right: -6px;\n}\n/* 同盘有人类全身立绘做身高参照时：幼年/成长期收敛至腰胯高度，成熟期到胸肩，完全体/究极体保持巨兽压迫感 */\n#p12battle .pn.me .stage-pair.has-tamer[data-stage-scale=\"xs\"] .beast {\n  width: clamp(98px, 13cqw, 146px);\n  height: clamp(92px, 15cqh, 138px);\n}\n#p12battle .pn.me .stage-pair.has-tamer[data-stage-scale=\"sm\"] .beast {\n  width: clamp(124px, 16.5cqw, 186px);\n  height: clamp(114px, 19cqh, 176px);\n}\n#p12battle .pn.me .stage-pair.has-tamer[data-stage-scale=\"md\"] .beast {\n  width: clamp(152px, 20cqw, 228px);\n  height: clamp(140px, 23.5cqh, 218px);\n}\n#p12battle .pn.foe .stage-pair.has-tamer[data-stage-scale=\"xs\"] .beast {\n  width: clamp(78px, 10cqw, 114px);\n  height: clamp(74px, 12cqh, 108px);\n}\n#p12battle .pn.foe .stage-pair.has-tamer[data-stage-scale=\"sm\"] .beast {\n  width: clamp(96px, 12.8cqw, 142px);\n  height: clamp(90px, 14.5cqh, 134px);\n}\n#p12battle .pn.foe .stage-pair.has-tamer[data-stage-scale=\"md\"] .beast {\n  width: clamp(118px, 15.5cqw, 176px);\n  height: clamp(110px, 18cqh, 168px);\n}\n/* 无全身图时的帅气斜切协战横幅（绝不摆半截身体在圆盘上） */\n#p12battle .tamer-assist-cutin {\n  position: absolute;\n  top: 4px;\n  left: 50%;\n  transform: translateX(-50%) skewX(-10deg);\n  z-index: 7;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: linear-gradient(95deg, var(--navy) 0%, #253668 100%);\n  border: 2px solid var(--gold);\n  color: #fff;\n  padding: 4px 11px;\n  white-space: nowrap;\n  box-shadow: 4px 4px 0 rgba(20, 26, 51, 0.32);\n}\n#p12battle .tamer-assist-cutin img {\n  width: 26px;\n  height: 26px;\n  border-radius: 4px;\n  border: 1.5px solid var(--gold);\n  object-fit: cover;\n  transform: skewX(10deg);\n}\n#p12battle .tamer-assist-cutin span {\n  font: 900 11px/1.1 var(--sans);\n  color: var(--gold);\n  transform: skewX(10deg);\n}\n#p12battle .bond-link-tag {\n  position: absolute;\n  bottom: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 7;\n  background: var(--navy);\n  border: 1.5px solid var(--gold);\n  color: var(--gold);\n  padding: 3px 11px;\n  font: 900 10.5px/1.2 var(--mono);\n  white-space: nowrap;\n  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.3);\n}\n\n/* ==========================================================================\n   5. 右下纵向操控栈（我方陶瓷机能牌 + 驯兽师辅助/异兽 2x2 招式双步无缝切换）\n   ========================================================================== */\n#p12battle .v7-bs-rightstack {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: clamp(6px, 1.1cqh, 10px);\n}\n#p12battle .cmd {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: clamp(6px, 0.9cqw, 9px);\n}\n#p12battle .mvb {\n  position: relative;\n  background: rgba(255, 255, 255, 0.97);\n  border: 2.5px solid var(--navy);\n  border-left: 6px solid var(--mc, var(--cyan));\n  padding: clamp(7px, 1.1cqh, 11px) clamp(9px, 1.1cqw, 13px);\n  clip-path: polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 0 100%);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--navy);\n  text-align: left;\n  box-shadow: 4px 4px 0 rgba(27, 35, 64, 0.22);\n  cursor: pointer;\n  min-width: 0;\n  transition: transform 0.13s, box-shadow 0.13s, background 0.13s;\n}\n#p12battle .mvb:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 var(--navy);\n  background: #ffffff;\n}\n#p12battle .mvb.eff {\n  background: linear-gradient(95deg, #ffffff 0%, #fffbeb 100%);\n}\n#p12battle .mvb .mv-main {\n  flex: 1;\n  min-width: 0;\n}\n#p12battle .mvb b {\n  display: block;\n  font-size: clamp(13.5px, 1.35cqw, 16px);\n  font-weight: 900;\n  color: var(--navy);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n#p12battle .mvb small {\n  display: block;\n  margin-top: 2px;\n  font: 800 10.5px/1.2 var(--mono);\n  color: var(--ink2);\n}\n#p12battle .mvb .eff-chip {\n  margin-left: auto;\n  background: #fff3cd;\n  border: 1.5px solid var(--gold);\n  color: #b45309;\n  padding: 2px 5px;\n  font: 900 9.5px/1 var(--mono);\n  font-style: normal;\n  white-space: nowrap;\n}\n\n/* 驯兽师辅助 Buff 第 1 步面板 + 第 2 步已挂提示条 */\n#p12battle .tamer-step-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  background: var(--navy);\n  color: #fff;\n  border-left: 4px solid var(--gold);\n  padding: 5px 10px;\n  font: 900 11.5px/1.2 var(--sans);\n}\n#p12battle .tamer-step-head button {\n  border: 1px solid rgba(255, 255, 255, 0.45);\n  background: transparent;\n  color: #fde68a;\n  font: 800 11px/1 var(--sans);\n  padding: 3px 8px;\n  cursor: pointer;\n}\n#p12battle .coop-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 7px;\n}\n#p12battle .coop-card {\n  background: rgba(255, 255, 255, 0.97);\n  border: 2.5px solid var(--navy);\n  border-left: 6px solid var(--sun);\n  padding: 8px 11px;\n  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);\n  box-shadow: 4px 4px 0 rgba(20, 26, 51, 0.22);\n  text-align: left;\n  cursor: pointer;\n  transition: transform 0.12s;\n}\n#p12battle .coop-card:hover:not(.locked) {\n  transform: translate(-2px, -2px);\n}\n#p12battle .coop-card.ult {\n  grid-column: 1 / -1;\n  background: linear-gradient(95deg, #fffbeb 0%, #ffedd5 100%);\n  border-left: 7px solid var(--hot);\n}\n#p12battle .coop-card.locked {\n  opacity: 0.58;\n  cursor: not-allowed;\n  filter: grayscale(0.4);\n}\n#p12battle .coop-card b {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--navy);\n  display: block;\n}\n#p12battle .coop-card small {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--ink2);\n  display: block;\n  margin-top: 2px;\n}\n#p12battle .tamer-armed-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  background: linear-gradient(90deg, #fffbeb, #ffedd5);\n  border: 2px solid var(--navy);\n  border-left: 5px solid var(--sun);\n  padding: 5px 10px;\n  font: 900 11.5px/1.2 var(--sans);\n  color: var(--navy);\n}\n#p12battle .tamer-armed-bar button {\n  border: 1.5px solid var(--navy);\n  background: #fff;\n  color: var(--navy);\n  font: 800 10.5px/1 var(--sans);\n  padding: 3px 7px;\n  cursor: pointer;\n}\n\n/* ==========================================================================\n   6. 底部战术副指令船坞 + 常驻 GRIT 气势槽（第 3 行流式并列，零遮挡）\n   ========================================================================== */\n#p12battle .v7-bottom-bar {\n  position: relative;\n  z-index: 12;\n  display: flex;\n  align-items: center;\n  gap: clamp(8px, 1.2cqw, 14px);\n  flex-wrap: wrap;\n}\n#p12battle .side {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n#p12battle .side > div,\n#p12battle .side > button {\n  border: 2px solid var(--navy);\n  background: #ffffff;\n  color: var(--navy);\n  padding: 8px 13px;\n  font: 900 12px/1 var(--sans);\n  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);\n  box-shadow: 3px 3px 0 var(--navy);\n  cursor: pointer;\n  letter-spacing: 0.04em;\n  transition: transform 0.12s;\n}\n#p12battle .side > div:hover,\n#p12battle .side > button:hover {\n  transform: translateY(-1px);\n}\n#p12battle .side > div.sync {\n  background: linear-gradient(135deg, var(--sun), var(--hot));\n  color: #fff;\n}\n#p12battle .side > div.sync.used {\n  background: #e2e8f0;\n  color: #64748b;\n}\n#p12battle .side > button.tamer-join-btn {\n  background: linear-gradient(135deg, #fffbeb, #fde68a);\n  color: var(--navy);\n  border-color: var(--navy);\n}\n#p12battle .side > button.tamer-join-btn.active {\n  background: var(--navy);\n  color: var(--gold);\n}\n#p12battle .v7-formal-lock {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 10px;\n  border: 1.5px dashed #64748b;\n  background: rgba(255, 255, 255, 0.82);\n  color: #475569;\n  font: 800 11px/1 var(--sans);\n}\n\n#p12battle .bottom-grit-bar {\n  flex: 1 1 280px;\n  min-height: 34px;\n  background: rgba(20, 26, 51, 0.95);\n  border: 2px solid #fff;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 14px;\n  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);\n  box-shadow: 0 6px 16px rgba(20, 26, 51, 0.24);\n}\n#p12battle .bottom-grit-bar b {\n  font: 900 11.5px/1 var(--mono);\n  color: var(--gold);\n  letter-spacing: 0.08em;\n  white-space: nowrap;\n}\n#p12battle .grit-track {\n  flex: 1;\n  min-width: 60px;\n  height: 11px;\n  background: rgba(255, 255, 255, 0.16);\n  transform: skewX(-18deg);\n  overflow: hidden;\n}\n#p12battle .grit-track i {\n  display: block;\n  height: 100%;\n  background: linear-gradient(90deg, #00c2ff, #ff6b2b, #ffd000);\n  transition: width 0.25s ease;\n}\n#p12battle .bottom-grit-bar span {\n  font-size: 11px;\n  font-weight: 800;\n  color: #f8fafc;\n  white-space: nowrap;\n}\n\n/* 口令 / 换兽 / 投球 子浮层面板 */\n#p12battle .p12b-sub {\n  position: absolute;\n  left: clamp(14px, 2cqw, 28px);\n  bottom: clamp(58px, 9cqh, 76px);\n  z-index: 32;\n  background: #ffffff;\n  border: 3px solid var(--navy);\n  border-left: 6px solid var(--sun);\n  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);\n  box-shadow: 0 16px 36px rgba(20, 28, 48, 0.28), 6px 6px 0 var(--navy);\n  padding: 12px 16px;\n  font: 700 13px/1.8 var(--sans);\n  max-width: min(440px, calc(100% - 28px));\n  max-height: 68%;\n  overflow-y: auto;\n}\n#p12battle .b-sub-close {\n  float: right;\n  margin-left: 10px;\n  border: 1.5px solid var(--navy);\n  background: var(--navy);\n  color: #fff;\n  font: 800 11px/1 var(--sans);\n  padding: 4px 9px;\n  cursor: pointer;\n}\n\n/* 兼容属性文字胶囊（无图标极端回退用） */\n#p12battle .t {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 800;\n  color: #fff;\n  padding: 2px 8px;\n  transform: skewX(-10deg);\n  background: #64748b;\n}\n#p12battle .t > i {\n  display: inline-block;\n  font-style: normal;\n  transform: skewX(10deg);\n}\n#p12battle .t.ice { background: #06b6d4; }\n#p12battle .t.gnd { background: #d97706; }\n#p12battle .t.wat { background: #2563eb; }\n#p12battle .t.fgt { background: #dc2626; }\n#p12battle .t.fire { background: #ea580c; }\n#p12battle .t.gra { background: #16a34a; }\n#p12battle .t.ele { background: #eab308; color: #1b2340; }\n#p12battle .t.poi { background: #9333ea; }\n#p12battle .t.fly { background: #6366f1; }\n#p12battle .t.psy { background: #ec4899; }\n#p12battle .t.bug { background: #65a30d; }\n#p12battle .t.roc { background: #a16207; }\n#p12battle .t.gho { background: #4f46e5; }\n#p12battle .t.dra { background: #4338ca; }\n#p12battle .t.dar { background: #334155; }\n#p12battle .t.ste { background: #475569; }\n#p12battle .t.fai { background: #f472b6; }\n#p12battle .t.mec { background: #0284c7; }\n#p12battle .t.ero { background: #4d7c0f; }\n#p12battle .t.san { background: #9f1239; }\n\n/* ==========================================================================\n   7. 核爆级【绝境燃魂应援 QTE · 满屏三层咆哮弹幕洪流 × 雷霆苍炎觉醒】\n   ========================================================================== */\n#p12battle .v7-qte-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 35;\n  overflow: hidden;\n  cursor: pointer;\n  user-select: none;\n}\n#p12battle .v7-qte-overlay.pulse {\n  animation: p12qteShake 0.14s ease;\n}\n#p12battle .overdrive-flare {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(circle at 28% 62%, rgba(255, 255, 255, 0.65) 0%, rgba(0, 229, 255, 0.48) 18%, rgba(255, 94, 0, 0.42) 38%, rgba(20, 26, 51, 0.55) 72%),\n    radial-gradient(ellipse at center, transparent 28%, rgba(255, 77, 0, 0.52) 82%, rgba(255, 0, 55, 0.85) 100%);\n  box-shadow: inset 0 0 80px #ff3300, inset 0 0 32px #ffd000;\n  pointer-events: none;\n}\n#p12battle .manga-speedlines {\n  position: absolute;\n  inset: -30%;\n  width: 160%;\n  height: 160%;\n  pointer-events: none;\n  background:\n    repeating-conic-gradient(from 4deg at 29% 63%, rgba(255, 255, 255, 0.85) 0deg 0.5deg, transparent 0.5deg 3.4deg),\n    repeating-conic-gradient(from 0deg at 29% 63%, rgba(255, 208, 0, 0.72) 0deg 0.4deg, transparent 0.4deg 4.9deg);\n  mask-image: radial-gradient(circle at 29% 63%, transparent 0 16%, rgba(0, 0, 0, 0.45) 30%, #000 52%);\n  -webkit-mask-image: radial-gradient(circle at 29% 63%, transparent 0 16%, rgba(0, 0, 0, 0.45) 30%, #000 52%);\n  animation: p12spinSlow 26s linear infinite;\n}\n#p12battle .pillar-outer {\n  position: absolute;\n  left: clamp(5%, 10cqw, 14%);\n  top: 0;\n  bottom: 120px;\n  width: clamp(200px, 28cqw, 340px);\n  background: linear-gradient(90deg, transparent 0%, rgba(0, 229, 255, 0.45) 22%, rgba(255, 255, 255, 0.86) 50%, rgba(255, 145, 0, 0.55) 78%, transparent 100%);\n  filter: blur(10px);\n  pointer-events: none;\n}\n#p12battle .lightning-svg {\n  position: absolute;\n  left: clamp(4%, 9cqw, 12%);\n  top: 0;\n  width: clamp(220px, 32cqw, 390px);\n  height: 82%;\n  pointer-events: none;\n  filter: drop-shadow(0 0 14px #ffd000) drop-shadow(0 0 26px #ff4d00);\n}\n#p12battle .tamer-cutin {\n  position: absolute;\n  left: -6px;\n  top: clamp(12px, 2.2cqh, 22px);\n  width: min(92%, 520px);\n  min-height: 78px;\n  z-index: 4;\n  background: linear-gradient(95deg, #141a33 0%, #ff1e4d 68%, #ffd000 100%);\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  transform: rotate(-1.8deg);\n  clip-path: polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 28px 8px 20px;\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.5);\n}\n#p12battle .tamer-cutin img {\n  width: 66px;\n  height: 66px;\n  border: 2.5px solid #ffd000;\n  background: #fff;\n  object-fit: cover;\n  object-position: center 14%;\n  transform: skewX(-10deg);\n  flex: none;\n}\n#p12battle .tamer-cutin-txt small {\n  display: inline-block;\n  background: #ffd000;\n  color: #141a33;\n  font: 900 10px/1 var(--mono);\n  padding: 2px 7px;\n  letter-spacing: 0.12em;\n}\n#p12battle .tamer-cutin-txt b {\n  display: block;\n  margin-top: 4px;\n  font-size: clamp(15px, 1.8cqw, 20px);\n  font-weight: 900;\n  font-style: italic;\n  color: #fff;\n  text-shadow: 2px 2px 0 #141a33;\n}\n#p12battle .combo-explosion {\n  position: absolute;\n  left: clamp(16px, 2.5cqw, 28px);\n  top: clamp(108px, 19cqh, 168px);\n  z-index: 5;\n  transform: rotate(-6deg);\n  pointer-events: none;\n}\n#p12battle .combo-num {\n  font: 900 clamp(44px, 6.2cqw, 72px)/0.88 var(--mono);\n  font-style: italic;\n  color: #ffd000;\n  text-shadow: -3px -3px 0 #141a33, 3px -3px 0 #141a33, -3px 3px 0 #141a33, 3px 3px 0 #141a33, 5px 5px 0 #ff1e4d, 0 0 24px #ff6a00;\n}\n#p12battle .combo-num small {\n  font-size: clamp(18px, 2.2cqw, 26px);\n  color: #fff;\n  margin-left: 4px;\n}\n#p12battle .combo-sync {\n  margin-top: 4px;\n  display: inline-block;\n  background: linear-gradient(90deg, #ff1e4d, #ff7700);\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 3px 10px;\n  font: 900 12px/1.1 var(--mono);\n  box-shadow: 4px 4px 0 #141a33;\n}\n\n/* 9 轨飞掠弹幕层 */\n#p12battle .danmaku-layer {\n  position: absolute;\n  inset: 0 0 clamp(118px, 20cqh, 142px) 0;\n  z-index: 6;\n  pointer-events: none;\n  overflow: hidden;\n}\n#p12battle .dm {\n  position: absolute;\n  left: 100%;\n  white-space: nowrap;\n  font-weight: 900;\n  font-style: italic;\n  letter-spacing: 0.02em;\n  animation: p12danmakuFly var(--dm-dur, 2.6s) linear forwards;\n}\n#p12battle .dm::after {\n  content: \"\";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 120px;\n  height: 3px;\n  background: linear-gradient(90deg, currentColor, transparent);\n  opacity: 0.65;\n}\n#p12battle .dm.live {\n  font-size: clamp(12.5px, 1.3cqw, 15px);\n  color: #ffffff;\n  background: rgba(20, 26, 51, 0.78);\n  border: 1.5px solid rgba(255, 255, 255, 0.48);\n  border-left: 4px solid #ffd000;\n  padding: 3px 12px;\n  border-radius: 999px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);\n}\n#p12battle .dm.live em {\n  font-style: normal;\n  color: #ffd000;\n  font-family: var(--mono);\n  margin-right: 5px;\n}\n#p12battle .dm.memory {\n  font-size: clamp(15px, 1.7cqw, 19px);\n  color: #e0fbff;\n  text-shadow: -2px -2px 0 #092c4c, 2px -2px 0 #092c4c, -2px 2px 0 #092c4c, 2px 2px 0 #092c4c, 0 0 16px #00e5ff;\n}\n#p12battle .dm.roar {\n  font-size: clamp(20px, 2.5cqw, 30px);\n  color: #fffbe6;\n  text-shadow: -3px -3px 0 #141a33, 3px -3px 0 #141a33, -3px 3px 0 #141a33, 3px 3px 0 #141a33, 5px 5px 0 #ff1e4d, 0 0 24px #ff6a00;\n}\n#p12battle .dm.roar-xl {\n  font-size: clamp(24px, 3.1cqw, 36px);\n  color: #ffd000;\n  text-shadow: -3.5px -3.5px 0 #141a33, 3.5px -3.5px 0 #141a33, -3.5px 3.5px 0 #141a33, 3.5px 3.5px 0 #141a33, 6px 6px 0 #ff0044, 0 0 32px #ffd000;\n}\n\n/* 底部熔岩超载 QTE 操控舱 */\n#p12battle .qte-bottom-rig {\n  position: absolute;\n  left: clamp(10px, 1.6cqw, 20px);\n  right: clamp(10px, 1.6cqw, 20px);\n  bottom: clamp(10px, 1.6cqh, 16px);\n  min-height: 112px;\n  z-index: 10;\n  background: linear-gradient(90deg, rgba(20, 26, 51, 0.97) 0%, rgba(42, 18, 38, 0.97) 65%, rgba(68, 22, 18, 0.97) 100%);\n  border: 3px solid #ffd000;\n  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));\n  box-shadow: 0 0 40px rgba(255, 102, 0, 0.75);\n  display: grid;\n  grid-template-columns: minmax(150px, 210px) minmax(0, 1fr) 150px;\n  align-items: center;\n  gap: clamp(10px, 1.6cqw, 18px);\n  padding: 10px 18px;\n}\n#p12battle .qte-timer-box {\n  border-right: 2px dashed rgba(255, 208, 0, 0.35);\n  padding-right: 12px;\n}\n#p12battle .qte-danger-tag {\n  display: inline-block;\n  background: #ff1e4d;\n  border: 1.5px solid #fff;\n  color: #fff;\n  font: 900 10px/1.1 var(--sans);\n  padding: 2px 7px;\n  margin-bottom: 4px;\n}\n#p12battle .qte-clock {\n  font: 900 clamp(32px, 4cqw, 44px)/0.92 var(--mono);\n  color: #ffd000;\n  text-shadow: 3px 3px 0 #ff1e4d, 0 0 20px #ff8800;\n}\n#p12battle .qte-clock small {\n  font-size: 15px;\n  color: #fff;\n  margin-left: 2px;\n}\n#p12battle .qte-decay-note {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fde68a;\n  margin-top: 3px;\n}\n#p12battle .qte-bar-zone {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n#p12battle .qte-bar-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 8px;\n}\n#p12battle .qte-bar-head b {\n  font-size: clamp(12.5px, 1.35cqw, 15.5px);\n  font-weight: 900;\n  color: #fff;\n  text-shadow: 0 2px 8px #ff4d00;\n}\n#p12battle .qte-bar-head span {\n  font: 900 clamp(20px, 2.4cqw, 26px)/1 var(--mono);\n  color: #ffd000;\n  text-shadow: 2px 2px 0 #ff1e4d;\n}\n#p12battle .qte-mega-track {\n  position: relative;\n  height: 28px;\n  background: #090d1a;\n  border: 2.5px solid #fff;\n  transform: skewX(-16deg);\n  overflow: hidden;\n  box-shadow: 0 0 20px rgba(255, 208, 0, 0.5);\n}\n#p12battle .qte-mega-fill {\n  height: 100%;\n  background: repeating-linear-gradient(-45deg, #00e5ff 0px, #00e5ff 14px, #ff5500 14px, #ffd000 28px);\n  box-shadow: 0 0 26px #ffd000;\n  transition: width 0.06s linear;\n}\n#p12battle .qte-sub-hint {\n  font-size: 11.5px;\n  font-weight: 800;\n  color: #7dd3fc;\n}\n#p12battle .qte-ring-btn {\n  position: relative;\n  height: 92px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#p12battle .ring-shrinking {\n  position: absolute;\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n  border: 3.5px dashed #ffd000;\n  pointer-events: none;\n}\n#p12battle .ring-sweetspot {\n  position: absolute;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  border: 4px solid #00f0ff;\n  box-shadow: 0 0 16px #00f0ff;\n  pointer-events: none;\n}\n#p12battle .ring-core {\n  position: relative;\n  z-index: 2;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: radial-gradient(circle at 35% 30%, #fff7cc, #ff4d00 75%);\n  border: 3px solid #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #141a33;\n  font-weight: 900;\n  box-shadow: 0 0 26px #ffd000;\n}\n#p12battle .ring-core b {\n  font-size: 14px;\n  line-height: 1;\n}\n#p12battle .ring-core small {\n  font-size: 9px;\n  font-family: var(--mono);\n}\n#p12battle .perfect-pop {\n  position: absolute;\n  right: 0;\n  top: -4px;\n  z-index: 5;\n  background: #ffd000;\n  border: 2px solid #141a33;\n  color: #141a33;\n  font: 900 11px/1 var(--mono);\n  padding: 3px 7px;\n  transform: rotate(10deg);\n  box-shadow: 3px 3px 0 #ff1e4d;\n  opacity: 0;\n  transition: opacity 0.12s;\n}\n#p12battle .perfect-pop.on {\n  opacity: 1;\n}\n\n/* ==========================================================================\n   8. 赛后战报：WT-v7 明亮晴空少年漫定格结算海报（无表格 · 双栏流式零挤压）\n   ========================================================================== */\n#p12battle .v7-victory-poster {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: minmax(320px, 53%) minmax(260px, 47%);\n}\n#p12battle .v7-vp-bg {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 64%;\n  height: 100%;\n  object-fit: cover;\n  filter: saturate(1.1) brightness(1.04);\n  pointer-events: none;\n  z-index: 0;\n}\n#p12battle .v7-vp-slash {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(106deg, #ffffff 0%, #f4f9ff 50%, #ff6b2b 50.1%, #ff6b2b 51.3%, rgba(255, 255, 255, 0.14) 51.5%, rgba(223, 240, 255, 0.25) 100%);\n}\n#p12battle .v7-vp-watermark {\n  position: absolute;\n  left: -6px;\n  top: 22px;\n  z-index: 2;\n  font: 900 clamp(72px, 10cqw, 128px)/0.85 var(--mono);\n  color: rgba(29, 161, 242, 0.08);\n  pointer-events: none;\n  user-select: none;\n  white-space: nowrap;\n}\n\n#p12battle .v7-vp-left {\n  position: relative;\n  z-index: 5;\n  padding: clamp(22px, 4cqh, 42px) clamp(20px, 3.2cqw, 42px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: clamp(14px, 2.6cqh, 26px);\n  overflow-y: auto;\n  min-height: 0;\n}\n#p12battle .v7-vp-kicker {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  font: 900 11px/1 var(--mono);\n  letter-spacing: 0.14em;\n  color: var(--sky);\n}\n#p12battle .v7-vp-kicker span {\n  background: var(--sun);\n  color: #fff;\n  padding: 4px 9px;\n  transform: skewX(-12deg);\n}\n#p12battle .win {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n#p12battle .win .ttl {\n  font-size: clamp(44px, 5.8cqw, 68px);\n  font-weight: 900;\n  line-height: 1;\n  color: var(--navy);\n  text-shadow: 4px 4px 0 #ffc93c;\n}\n#p12battle .v7-vp-rounds {\n  border-left: 4px solid var(--sun);\n  padding-left: 12px;\n}\n#p12battle .v7-vp-rounds b {\n  display: block;\n  font: 900 clamp(17px, 2cqw, 22px)/1.1 var(--mono);\n  color: var(--sun);\n}\n#p12battle .v7-vp-rounds small {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--ink2);\n}\n\n/* 决胜镜头明亮切角横幅 */\n#p12battle .v7-highlight-strip {\n  background: var(--navy);\n  color: #fff;\n  border-left: 6px solid var(--gold);\n  padding: 11px 16px;\n  clip-path: polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%);\n  box-shadow: 5px 5px 0 rgba(255, 107, 43, 0.28);\n}\n#p12battle .v7-highlight-strip small {\n  display: block;\n  font: 900 10px/1 var(--mono);\n  letter-spacing: 0.16em;\n  color: var(--gold);\n  margin-bottom: 4px;\n}\n#p12battle .v7-highlight-strip b {\n  font-size: clamp(13px, 1.3cqw, 14.5px);\n  font-weight: 800;\n  line-height: 1.45;\n  display: block;\n}\n\n/* 12 段装甲能量灯槽 */\n#p12battle .v7-armor-hud {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n#p12battle .v7-armor-top {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n#p12battle .v7-armor-top strong {\n  font-size: clamp(16px, 1.7cqw, 20px);\n  font-weight: 900;\n  color: var(--navy);\n}\n#p12battle .v7-chip-sync {\n  margin-left: auto;\n  background: #fff7ed;\n  border: 1.5px solid var(--sun);\n  color: var(--sun);\n  padding: 3px 9px;\n  font: 900 11px/1.1 var(--mono);\n}\n#p12battle .v7-seg-bar {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 5px;\n  height: 13px;\n}\n#p12battle .v7-seg-bar i {\n  display: block;\n  transform: skewX(-18deg);\n  background: #e2ecf9;\n  border: 1.5px solid #cbd5e1;\n}\n#p12battle .v7-seg-bar i.on {\n  background: linear-gradient(180deg, #34d399, #10b981);\n  border-color: var(--navy);\n}\n#p12battle .v7-seg-bar i.lost {\n  background: #ffe4e8;\n  border-color: #fda4af;\n}\n\n/* 亮白陶瓷晋升台 + SVG 双环仪表盘 */\n#p12battle .settle.v7-levelup-rig {\n  background: #ffffff;\n  border: 2.5px solid var(--navy);\n  padding: 11px 16px;\n  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%);\n  box-shadow: 6px 6px 0 #bfe4ff;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n#p12battle .v7-settle-kicker {\n  display: flex;\n  justify-content: space-between;\n  font: 900 10.5px/1 var(--mono);\n  color: var(--ink2);\n  letter-spacing: 0.08em;\n}\n#p12battle .v7-rig-main {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n#p12battle .v7-lv-jump {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n  padding-right: 14px;\n  border-right: 1.5px dashed var(--ice-line);\n}\n#p12battle .v7-lv-upbadge {\n  background: var(--sun);\n  color: #fff;\n  font: 900 10px/1 var(--mono);\n  padding: 3px 6px;\n}\n#p12battle .v7-lv-jump b {\n  font: 900 clamp(26px, 3.2cqw, 36px)/0.95 var(--mono);\n  color: var(--navy);\n}\n#p12battle .v7-gauges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  align-items: center;\n}\n#p12battle .v7-ring-gauge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n#p12battle .v7-ring-gauge svg {\n  width: 42px;\n  height: 42px;\n  transform: rotate(-90deg);\n  flex: none;\n}\n#p12battle .v7-ring-meta b {\n  display: block;\n  font: 900 13.5px/1.1 var(--mono);\n  color: var(--navy);\n}\n#p12battle .v7-ring-meta span {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--ink2);\n}\n#p12battle .v7-sub-settle {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding-top: 6px;\n  border-top: 1px dashed var(--ice-line);\n}\n#p12battle .v7-sub-pill {\n  background: var(--ceramic-2);\n  border: 1px solid var(--ice-line);\n  padding: 3px 8px;\n  font: 800 11px/1.3 var(--sans);\n  color: var(--navy);\n}\n\n/* 战报右栏：右上败方拍立得 + 中间主力搭档大圆盘 + 右下独立发送大按钮 */\n#p12battle .v7-vp-right {\n  position: relative;\n  z-index: 5;\n  padding: clamp(44px, 6cqh, 56px) clamp(16px, 2.5cqw, 28px) clamp(16px, 2.8cqh, 24px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  min-height: 0;\n}\n#p12battle .v7-foe-defeated {\n  position: relative;\n  width: clamp(136px, 16cqw, 174px);\n  min-height: clamp(136px, 22cqh, 186px);\n  background: rgba(255, 255, 255, 0.93);\n  backdrop-filter: blur(8px);\n  border: 2.5px solid var(--navy);\n  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  box-shadow: 6px 6px 0 rgba(27, 35, 64, 0.22);\n}\n#p12battle .v7-foe-defeated .beast {\n  width: clamp(82px, 10cqw, 110px);\n  height: clamp(82px, 12cqh, 110px);\n  filter: grayscale(0.82) opacity(0.72);\n}\n#p12battle .v7-ko-stamp {\n  position: absolute;\n  top: 38%;\n  transform: rotate(-12deg);\n  background: var(--hot);\n  border: 2px solid var(--navy);\n  color: #fff;\n  font: 900 12px/1 var(--mono);\n  letter-spacing: 0.12em;\n  padding: 3px 9px;\n}\n#p12battle .v7-foe-cap {\n  margin-top: 5px;\n  font: 800 11px/1.2 var(--sans);\n  color: var(--ink2);\n  text-align: center;\n}\n\n#p12battle .v7-mvp-stage {\n  position: relative;\n  align-self: center;\n  width: clamp(200px, 28cqw, 330px);\n  flex: 1 1 auto;\n  min-height: 130px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n#p12battle .v7-mvp-disc {\n  position: absolute;\n  bottom: 6px;\n  width: clamp(190px, 26cqw, 296px);\n  height: clamp(50px, 8cqh, 80px);\n  border-radius: 50%;\n  background:\n    radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.82) 0%, rgba(224, 244, 255, 0.88) 55%, #00c2ff 70%, #1b2340 75%, transparent 77%);\n  box-shadow: 0 14px 28px rgba(27, 35, 64, 0.32);\n}\n#p12battle .v7-mvp-stage .beast {\n  position: relative;\n  z-index: 2;\n  width: clamp(150px, 22cqw, 268px);\n  height: clamp(140px, 26cqh, 268px);\n  margin-bottom: 18px;\n}\n\n#p12battle .sendcap {\n  position: relative;\n  z-index: 6;\n  border: 2.5px solid var(--navy);\n  background: linear-gradient(135deg, var(--sun), #ff8533);\n  color: #fff;\n  padding: 12px 24px;\n  font: 900 clamp(13px, 1.35cqw, 15px)/1.1 var(--sans);\n  clip-path: polygon(11px 0, 100% 0, 100% calc(100% - 11px), calc(100% - 11px) 100%, 0 100%, 0 11px);\n  box-shadow: 5px 5px 0 var(--navy);\n  cursor: pointer;\n  transition: transform 0.13s;\n}\n#p12battle .sendcap:hover {\n  transform: translate(-2px, -2px);\n}\n#p12battle .report-action-mobile {\n  display: none;\n}\n\n@keyframes p12sway {\n  50% { transform: translateY(-5px); }\n}\n@keyframes p12spinSlow {\n  to { transform: rotate(360deg); }\n}\n@keyframes p12danmakuFly {\n  from { transform: translateX(0) rotate(-1.5deg); }\n  to { transform: translateX(calc(-100cqw - 140%)) rotate(-1.5deg); }\n}\n@keyframes p12qteShake {\n  25% { transform: translate(-4px, 2px); }\n  75% { transform: translate(4px, -2px); }\n}\n@media (prefers-reduced-motion: reduce) {\n  #p12battle .beast,\n  #p12battle .manga-speedlines { animation: none !important; }\n}\n\n/* ==========================================================================\n   9. 窄屏 / 手机竖屏自适应（<= 760px 自动切竖向对战流，满屏清晰好点）\n   ========================================================================== */\n@media (max-width: 760px) {\n  #p12battle {\n    padding: 0;\n  }\n  #p12battle .b-stage {\n    border: 0;\n    clip-path: none;\n    max-width: none;\n    max-height: none;\n  }\n  #p12battle .scene.b-fight.on {\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n    padding: 8px 10px 12px;\n    gap: 8px;\n  }\n  #p12battle .v7-bs-topbar {\n    padding-right: 62px;\n    gap: 5px;\n  }\n  #p12battle .v7-arena-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    flex: 1 0 auto;\n  }\n  #p12battle .v7-col-left,\n  #p12battle .v7-col-right {\n    display: contents;\n  }\n  #p12battle .v7-hud-foe {\n    order: 1;\n    width: 100%;\n  }\n  #p12battle .pn.foe.v7-pos-foe {\n    order: 2;\n    align-self: flex-end;\n    align-items: flex-end;\n    margin-right: 6px;\n    min-height: 124px;\n    width: 58%;\n  }\n  #p12battle .pn.foe.v7-pos-foe .v7-disc {\n    bottom: 4px;\n    margin-top: 0;\n  }\n  #p12battle .pn.me.v7-pos-me {\n    order: 3;\n    align-self: flex-start;\n    margin-left: 6px;\n    margin-top: -18px;\n    min-height: 138px;\n    width: 64%;\n  }\n  #p12battle .v7-bs-rightstack {\n    order: 4;\n    width: 100%;\n  }\n  #p12battle .mvb {\n    min-height: 48px;\n  }\n  #p12battle .v7-bottom-bar {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 6px;\n  }\n  #p12battle .bottom-grit-bar {\n    flex: none;\n  }\n  #p12battle .side {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 5px;\n  }\n  #p12battle .side > div,\n  #p12battle .side > button {\n    min-height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 6px 4px;\n    text-align: center;\n  }\n  #p12battle .qte-bottom-rig {\n    grid-template-columns: 1fr auto;\n    padding: 10px 12px;\n  }\n  #p12battle .qte-timer-box {\n    grid-column: 1 / -1;\n    border-right: 0;\n    border-bottom: 1px dashed rgba(255, 208, 0, 0.35);\n    padding: 0 0 6px;\n    display: flex;\n    align-items: baseline;\n    justify-content: space-between;\n    gap: 8px;\n  }\n  #p12battle .qte-decay-note {\n    display: none;\n  }\n  #p12battle .v7-victory-poster {\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n  }\n  #p12battle .v7-vp-slash {\n    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(244, 249, 255, 0.92) 68%, rgba(223, 240, 255, 0.86) 100%);\n  }\n  #p12battle .v7-vp-bg {\n    width: 100%;\n    opacity: 0.25;\n  }\n  #p12battle .v7-vp-left {\n    padding: 16px 14px 8px;\n    overflow: visible;\n  }\n  #p12battle .v7-vp-right {\n    padding: 8px 14px 18px;\n    align-items: stretch;\n    gap: 12px;\n  }\n  #p12battle .v7-foe-defeated {\n    display: none;\n  }\n  #p12battle .v7-mvp-stage {\n    min-height: 150px;\n  }\n  #p12battle .sendcap {\n    width: 100%;\n    text-align: center;\n  }\n  #p12battle .report-action-desktop {\n    display: none;\n  }\n  #p12battle .report-action-mobile {\n    display: inline;\n  }\n}\n";
;
// 对战块的读与写：从 AI 回复里取 [对战建立]{json}[/对战建立]，把战报包成 [对战结算]。
// 只做解析和规整，不结算、不碰 DOM。
(function (root) {
  'use strict';
  var OPEN = '[对战建立]', CLOSE = '[/对战建立]';
  var ROPEN = '[对战结算]', RCLOSE = '[/对战结算]';

  var grab = function (text, open, close) {
    var s = String(text == null ? '' : text);
    // 宿主保存的分析块可提及协议标签；只在分析以外定位，偏移和原文字节保持不变。
    var visible = s.replace(/<(cot|think)\b[^>]*>[\s\S]*?(?:<\/\1\s*>|$)/gi, function (part) { return part.replace(/[^\r\n]/g, ' '); });
    var i = visible.indexOf(open);
    if (i < 0) return null;
    var j = visible.indexOf(close, i + open.length);
    var body = j < 0 ? s.slice(i + open.length) : s.slice(i + open.length, j);
    return { body: body.trim(), start: i, end: j < 0 ? s.length : j + close.length, closed: j >= 0 };
  };

  // 有的模型会把 json 包在 ```json … ``` 里，或者前后带说明文字
  var jsonOf = function (body) {
    var t = String(body || '').trim();
    var f = t.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (f) t = f[1].trim();
    var a = t.indexOf('{'), b = t.lastIndexOf('}');
    if (a < 0 || b <= a) return null;
    try { return JSON.parse(t.slice(a, b + 1)); } catch (e) { return null; }
  };

  // 建局块的规整：缺的补默认值，属性去掉「属性」二字，招式补属性/档
  var normBuild = function (o, engine) {
    if (!o || typeof o !== 'object') return null;
    var E = engine || (root.P12BattleEngine);
    var pick = function () { for (var i = 0; i < arguments.length; i++) { var v = arguments[i]; if (v != null && v !== '') return v; } return null; };
    var arr = function (x) { return Array.isArray(x) ? x : (x == null ? [] : [x]); };
    var field = o['场地'] || {};
    var foes = arr(o['对方']).filter(Boolean).map(function (f) {
      return {
        '驯兽师': String(f['驯兽师'] || '对手'),
        '昵称': String(f['昵称'] || ''),
        '物种': String(f['物种'] || ''),
        '阶段': String(f['阶段'] || '成长期'),
        'Lv': f['Lv'] == null ? null : +f['Lv'],
        '经验': f['经验'] == null ? 0 : +f['经验'],
        '成长': f['成长'] == null ? 0 : +f['成长'],
        '疲劳': f['疲劳'] == null ? 0 : +f['疲劳'],
        '伤势': String(f['伤势'] || '无'), '暴走': f['暴走'] === true,
        '属性': arr(f['属性']).map(function (t) { return String(t).replace(/属性$/, ''); }),
        '体力': f['体力'] == null ? 100 : +f['体力'],
        '招式': arr(f['招式']).map(function (m) { return E ? E.normMove(m) : m; }),
        '打法': pick(f['打法'], '稳守')
      };
    });
    return {
      '名称': String(pick(o['名称'], '对战')),
      '场合': pick(o['场合'], '切磋'),
      '性质': pick(o['性质'], '比试'),
      '野生': o['野生'] === true,
      '场地': {
        '名': String(pick(field['名'], '空地')),
        '地形': E && E.terrainOf ? E.terrainOf(field) : String(field['地形'] || ''),
        '标签': arr(field['标签']).map(function (t) { return String(t).replace(/属性$/, ''); }),
        '可借': arr(field['可借']).map(function (x) { return String(x); }),
        '变化': arr(field['变化']).filter(Boolean).map(function (c) {
          return { '回合': +c['回合'] || 1, '事件': String(c['事件'] || '变化'), '效果': String(c['效果'] || '') };
        })
      },
      '对方': foes.length ? foes : [{ '驯兽师': '对手', '物种': '野生异兽', '阶段': '成长期', '属性': [], '体力': 100, '招式': ['冲撞'], '打法': '稳守' }],
      '规则': Object.assign({ '换兽': true, '道具': true, '对方只数': 1 }, o['规则'] || {})
    };
  };

  // 从一条消息里找建局块；返回 {spec, raw, id, closed} 或 null
  var parseBuild = function (text, engine) {
    var g = grab(text, OPEN, CLOSE);
    if (!g) return null;
    var j = jsonOf(g.body);
    if (!j) return null;
    var spec = normBuild(j, engine);
    if (!spec) return null;
    return { spec: spec, raw: g.body, id: null, closed: g.closed };
  };

  var parseReport = function (text) {
    var g = grab(text, ROPEN, RCLOSE);
    if (!g) return null;
    return jsonOf(g.body);
  };

  var toReport = function (obj) { return ROPEN + JSON.stringify(obj) + RCLOSE; };

  // 对局身份：同一条回复里的块只算一次（消息 id 优先，没有 id 就用内容摘要）
  var keyOf = function (msgLike) {
    if (!msgLike) return null;
    if (msgLike.id) return 'm:' + msgLike.id;
    var c = String(msgLike.content || '');
    var h = 5381;
    for (var i = 0; i < c.length; i++) h = ((h << 5) + h + c.charCodeAt(i)) | 0;
    return 'h:' + ((h >>> 0).toString(36)) + ':' + c.length;
  };

  root.P12BattleParse = {
    OPEN: OPEN, CLOSE: CLOSE, ROPEN: ROPEN, RCLOSE: RCLOSE,
    grab: grab, jsonOf: jsonOf, normBuild: normBuild,
    parseBuild: parseBuild, parseReport: parseReport, toReport: toReport, keyOf: keyOf
  };
  if (typeof module === 'object' && module.exports) module.exports = root.P12BattleParse;
})(typeof window !== 'undefined' ? window : globalThis);

;
// 对战引擎（纯函数，不碰 DOM、不读 localStorage）。规则见 review/美化/对战设计稿-v1.md。
// 用法：window.P12BattleEngine = 这套；测试用 node 直接读文件跑。
(function (root) {
  'use strict';

  var PHASE = { '幼年期': 0.6, '成长期': 1.0, '成熟期': 1.5, '完全体': 2.2, '究极体': 3.2 };
  var POWER = { '轻': 7, '中': 12, '重': 18, '绝': 26, '状态': 0, '防守': 0 };
  var COST = { '轻': 5, '中': 9, '重': 14, '绝': 22, '状态': 5, '防守': 6 };
  var MOVES = ['轻', '中', '重', '绝', '状态', '防守'];

  var clamp = function (v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); };
  var int = function (v) { return Math.round(v); };

  // 通用地形 v1（总监2026-11-14）；效果只作用招式属性，不改变体力消耗/命中事件。
  var TERRAIN = {
    arena: { id: 'arena', name: '室内道馆', boost: [], weaken: [] },
    street: { id: 'street', name: '城市街道', boost: ['钢', '机械'], weaken: [] },
    grass: { id: 'grass', name: '草地原野', boost: ['草', '地面'], weaken: [] },
    forest: { id: 'forest', name: '森林', boost: ['草', '虫'], weaken: ['飞行'] },
    lake: { id: 'lake', name: '湖岸河边', boost: ['水', '电'], weaken: ['火'] },
    beach: { id: 'beach', name: '海边沙滩', boost: ['水', '地面'], weaken: ['火'] },
    snow: { id: 'snow', name: '雪原', boost: ['冰'], weaken: ['草', '火'] },
    rock: { id: 'rock', name: '山岩峡谷', boost: ['岩石', '地面'], weaken: [] },
    desert: { id: 'desert', name: '沙漠戈壁', boost: ['地面', '火'], weaken: ['水', '冰'] },
    volcano: { id: 'volcano', name: '火山高温地', boost: ['火'], weaken: ['冰', '草'] },
    night: { id: 'night', name: '夜晚空地', boost: ['恶', '幽灵'], weaken: ['妖精'] },
    underground: { id: 'underground', name: '地下擂台', boost: ['噬血', '格斗'], weaken: [] },
    ruins: { id: 'ruins', name: '废墟工地', boost: ['钢', '机械', '岩石'], weaken: [] },
    sky: { id: 'sky', name: '屋顶高处', boost: ['飞行', '电'], weaken: ['地面'] }
  };
  Object.keys(TERRAIN).forEach(function (id) {
    Object.freeze(TERRAIN[id].boost); Object.freeze(TERRAIN[id].weaken); Object.freeze(TERRAIN[id]);
  });
  Object.freeze(TERRAIN);
  var terrainOf = function (field) {
    var f = field && typeof field === 'object' ? field : {};
    var id = typeof field === 'string' ? field.trim() : String(f.terrain || f['地形'] || '').trim();
    if (Object.prototype.hasOwnProperty.call(TERRAIN, id)) return id;
    var tags = f.types || f['标签'] || f['属性'] || [];
    if (!Array.isArray(tags)) tags = [tags];
    var infer = { '水': 'lake', '草': 'grass', '地面': 'rock', '岩石': 'rock', '冰': 'snow', '火': 'volcano', '夜': 'night', '暗': 'night', '地下': 'underground' };
    // 多标签冲突沿输入顺序选第一个能推断的标签；不凭地点专名另加规则。
    for (var i = 0; i < tags.length; i++) {
      var t = String(tags[i]).trim().replace(/属性$/, '');
      if (Object.prototype.hasOwnProperty.call(infer, t)) return infer[t];
    }
    return 'arena';
  };
  var terrainFactor = function (field, moveType) {
    var t = TERRAIN[terrainOf(field)], type = String(moveType || '').trim().replace(/属性$/, '');
    return t.boost.indexOf(type) >= 0 ? 1.2 : t.weaken.indexOf(type) >= 0 ? 0.8 : 1;
  };
  var terrainLabel = function (field) {
    var t = TERRAIN[terrainOf(field)], effects = [];
    if (t.boost.length) effects.push(t.boost.join('、') + ' +20%');
    if (t.weaken.length) effects.push(t.weaken.join('、') + ' −20%');
    return t.name + '｜' + (effects.join('　') || '标准场地 · 无属性增减');
  };

  // BEGIN GENERATED MOVE INDEX (tools/build-battle-moves.mjs)
  var MOVE_INDEX = Object.freeze({
    "甩尾": {"type":"一般","tier":"轻"},
    "前扑": {"type":"一般","tier":"轻"},
    "亮爪": {"type":"一般","tier":"轻"},
    "咬扯": {"type":"一般","tier":"轻"},
    "乱抓": {"type":"一般","tier":"轻"},
    "蛮力撞": {"type":"一般","tier":"中"},
    "死咬不放": {"type":"一般","tier":"中"},
    "重跺": {"type":"一般","tier":"中"},
    "头槌猛击": {"type":"一般","tier":"中"},
    "回旋扫退": {"type":"一般","tier":"中"},
    "锁喉缠绞": {"type":"一般","tier":"中"},
    "劈面掌": {"type":"一般","tier":"中"},
    "侧撞摔": {"type":"一般","tier":"中"},
    "破空裂爪": {"type":"一般","tier":"中"},
    "连环蹬击": {"type":"一般","tier":"中"},
    "破阵硬冲": {"type":"一般","tier":"重"},
    "暴怒狂踏": {"type":"一般","tier":"重"},
    "裂骨狂撕": {"type":"一般","tier":"重"},
    "舍身巨槌": {"type":"一般","tier":"重"},
    "天崩贯地": {"type":"一般","tier":"重"},
    "佯死闭气": {"type":"一般","tier":"状态"},
    "长嚎": {"type":"一般","tier":"状态"},
    "疾跃": {"type":"一般","tier":"状态"},
    "护卫挡身": {"type":"一般","tier":"状态"},
    "闭目打盹": {"type":"一般","tier":"状态"},
    "舍身决绝击": {"type":"一般","tier":"绝"},
    "火星子": {"type":"火","tier":"轻"},
    "吐火苗": {"type":"火","tier":"轻"},
    "热风拂": {"type":"火","tier":"轻"},
    "灼爪": {"type":"火","tier":"轻"},
    "火星迸溅": {"type":"火","tier":"轻"},
    "火舌": {"type":"火","tier":"中"},
    "烈炎弹": {"type":"火","tier":"中"},
    "焦土踏": {"type":"火","tier":"中"},
    "焰流冲": {"type":"火","tier":"中"},
    "灼齿撕咬": {"type":"火","tier":"中"},
    "连吐火球": {"type":"火","tier":"中"},
    "炽热横扫": {"type":"火","tier":"中"},
    "沸腾热气": {"type":"火","tier":"中"},
    "熔火飞溅": {"type":"火","tier":"中"},
    "怒焰重击": {"type":"火","tier":"中"},
    "烈焰燎原": {"type":"火","tier":"重"},
    "爆裂燃击": {"type":"火","tier":"重"},
    "熔岩踏碎": {"type":"火","tier":"重"},
    "火翼回旋斩": {"type":"火","tier":"重"},
    "炼狱狂炎": {"type":"火","tier":"重"},
    "遮日黑烟": {"type":"火","tier":"状态"},
    "热炉升温": {"type":"火","tier":"状态"},
    "火环护周": {"type":"火","tier":"状态"},
    "蓄火待发": {"type":"火","tier":"状态"},
    "炽热场地": {"type":"火","tier":"状态"},
    "焚天烈烬": {"type":"火","tier":"绝"},
    "水碎弹": {"type":"水","tier":"轻"},
    "水沫黏足": {"type":"水","tier":"轻"},
    "泼水扰眼": {"type":"水","tier":"轻"},
    "湿滑抓": {"type":"水","tier":"轻"},
    "清泉拂面": {"type":"水","tier":"轻"},
    "奔涌激流": {"type":"水","tier":"中"},
    "涡流裹足": {"type":"水","tier":"中"},
    "高压水斩": {"type":"水","tier":"中"},
    "冰冷暗潮": {"type":"水","tier":"中"},
    "连环浪打": {"type":"水","tier":"中"},
    "覆面水牢": {"type":"水","tier":"中"},
    "破浪冲撞": {"type":"水","tier":"中"},
    "水鞭抽打": {"type":"水","tier":"中"},
    "喷水破障": {"type":"水","tier":"中"},
    "回旋潮打": {"type":"水","tier":"中"},
    "惊涛骇浪": {"type":"水","tier":"重"},
    "潮汐连打": {"type":"水","tier":"重"},
    "深渊重涡": {"type":"水","tier":"重"},
    "断流巨刃": {"type":"水","tier":"重"},
    "洪流狂涌": {"type":"水","tier":"重"},
    "水幕遮身": {"type":"水","tier":"状态"},
    "唤雨落空": {"type":"水","tier":"状态"},
    "深潜匿迹": {"type":"水","tier":"状态"},
    "清流洗涤": {"type":"水","tier":"状态"},
    "水雾漫天": {"type":"水","tier":"状态"},
    "翻江倒海啸": {"type":"水","tier":"绝"},
    "飞旋硬叶": {"type":"草","tier":"轻"},
    "寄生草籽": {"type":"草","tier":"轻"},
    "刺藤拂": {"type":"草","tier":"轻"},
    "落花迷乱": {"type":"草","tier":"轻"},
    "硬根挑击": {"type":"草","tier":"轻"},
    "青藤长鞭": {"type":"草","tier":"中"},
    "木桩冲角": {"type":"草","tier":"中"},
    "散乱麻痹粉": {"type":"草","tier":"中"},
    "昏沉孢子云": {"type":"草","tier":"中"},
    "飞叶旋刃": {"type":"草","tier":"中"},
    "破土根穿": {"type":"草","tier":"中"},
    "坚藤绞身": {"type":"草","tier":"中"},
    "吸元蔓藤": {"type":"草","tier":"中"},
    "坚木重锤": {"type":"草","tier":"中"},
    "落英旋风": {"type":"草","tier":"中"},
    "万森狂怒": {"type":"草","tier":"重"},
    "巨藤崩挞": {"type":"草","tier":"重"},
    "枯萎剥离": {"type":"草","tier":"重"},
    "重桩震山": {"type":"草","tier":"重"},
    "狂野荆棘海": {"type":"草","tier":"重"},
    "根须深扎": {"type":"草","tier":"状态"},
    "盘根缠缚": {"type":"草","tier":"状态"},
    "荆棘护身甲": {"type":"草","tier":"状态"},
    "借日舒华": {"type":"草","tier":"状态"},
    "清香抚郁": {"type":"草","tier":"状态"},
    "万木繁生破": {"type":"草","tier":"绝"},
    "碎电打": {"type":"电","tier":"轻"},
    "电花窜跃": {"type":"电","tier":"轻"},
    "带电轻触": {"type":"电","tier":"轻"},
    "刺芒闪": {"type":"电","tier":"轻"},
    "噼啪尾抽": {"type":"电","tier":"轻"},
    "怒电弧": {"type":"电","tier":"中"},
    "奔雷急袭": {"type":"电","tier":"中"},
    "狂乱放电": {"type":"电","tier":"中"},
    "雷鸣爪击": {"type":"电","tier":"中"},
    "电殛撕咬": {"type":"电","tier":"中"},
    "轰雷掌": {"type":"电","tier":"中"},
    "跳跃雷光": {"type":"电","tier":"中"},
    "磁暴冲击": {"type":"电","tier":"中"},
    "雷矢破空": {"type":"电","tier":"中"},
    "疾电连踏": {"type":"电","tier":"中"},
    "万钧落顶": {"type":"电","tier":"重"},
    "暴走超载": {"type":"电","tier":"重"},
    "千雷贯顶": {"type":"电","tier":"重"},
    "雷铠巨冲": {"type":"电","tier":"重"},
    "地脉磁裂": {"type":"电","tier":"重"},
    "蓄势充能": {"type":"电","tier":"状态"},
    "磁场枷锁": {"type":"电","tier":"状态"},
    "震颤麻痹波": {"type":"电","tier":"状态"},
    "唤聚雷云": {"type":"电","tier":"状态"},
    "静电覆身": {"type":"电","tier":"状态"},
    "九天苍雷劫": {"type":"电","tier":"绝"},
    "碎冰屑": {"type":"冰","tier":"轻"},
    "霜寒触": {"type":"冰","tier":"轻"},
    "吐冰棱": {"type":"冰","tier":"轻"},
    "滑冰疾步": {"type":"冰","tier":"轻"},
    "飞霜拂面": {"type":"冰","tier":"轻"},
    "凌空冰锥": {"type":"冰","tier":"中"},
    "刺骨寒气": {"type":"冰","tier":"中"},
    "极霜噬咬": {"type":"冰","tier":"中"},
    "裂冰扫": {"type":"冰","tier":"中"},
    "寒冰突刺": {"type":"冰","tier":"中"},
    "冰环爆裂": {"type":"冰","tier":"中"},
    "极地冰旋": {"type":"冰","tier":"中"},
    "急冻冷风": {"type":"冰","tier":"中"},
    "坚冰重拳": {"type":"冰","tier":"中"},
    "冰雾遮身": {"type":"冰","tier":"中"},
    "狂暴风雪": {"type":"冰","tier":"重"},
    "绝壁雪崩": {"type":"冰","tier":"重"},
    "玄冰重封": {"type":"冰","tier":"重"},
    "巨型冰岩坠": {"type":"冰","tier":"重"},
    "霜牙怒断": {"type":"冰","tier":"重"},
    "凝水成镜": {"type":"冰","tier":"状态"},
    "霜铠覆体": {"type":"冰","tier":"状态"},
    "极寒领域": {"type":"冰","tier":"状态"},
    "滑步冰面": {"type":"冰","tier":"状态"},
    "休眠冰封": {"type":"冰","tier":"状态"},
    "九幽极寒界": {"type":"冰","tier":"绝"},
    "短刺拳": {"type":"格斗","tier":"轻"},
    "低扫腿": {"type":"格斗","tier":"轻"},
    "推掌打": {"type":"格斗","tier":"轻"},
    "截击肘": {"type":"格斗","tier":"轻"},
    "垫步踹": {"type":"格斗","tier":"轻"},
    "借力过肩摔": {"type":"格斗","tier":"中"},
    "连环重踢": {"type":"格斗","tier":"中"},
    "锁喉抱摔": {"type":"格斗","tier":"中"},
    "破防重掌": {"type":"格斗","tier":"中"},
    "引力借势还": {"type":"格斗","tier":"中"},
    "贴身短打": {"type":"格斗","tier":"中"},
    "缠臂反关节": {"type":"格斗","tier":"中"},
    "飞膝迎面击": {"type":"格斗","tier":"中"},
    "沉腰马步冲": {"type":"格斗","tier":"中"},
    "跃空砸肘": {"type":"格斗","tier":"中"},
    "崩山裂石拳": {"type":"格斗","tier":"重"},
    "升龙贯天击": {"type":"格斗","tier":"重"},
    "破甲通背劲": {"type":"格斗","tier":"重"},
    "断角狂摔": {"type":"格斗","tier":"重"},
    "暴风连击踢": {"type":"格斗","tier":"重"},
    "沉稳架势": {"type":"格斗","tier":"状态"},
    "凝神聚气": {"type":"格斗","tier":"状态"},
    "战意爆鸣": {"type":"格斗","tier":"状态"},
    "不动如山": {"type":"格斗","tier":"状态"},
    "以静制动": {"type":"格斗","tier":"状态"},
    "千峰百裂破": {"type":"格斗","tier":"绝"},
    "毒针雨": {"type":"毒","tier":"轻"},
    "腥沫吐": {"type":"毒","tier":"轻"},
    "淬毒尾扫": {"type":"毒","tier":"轻"},
    "紫腺斑": {"type":"毒","tier":"轻"},
    "腐血爪": {"type":"毒","tier":"轻"},
    "浓浊雾": {"type":"毒","tier":"中"},
    "溶甲酸液": {"type":"毒","tier":"中"},
    "蚀骨深噬": {"type":"毒","tier":"中"},
    "污沼伏": {"type":"毒","tier":"中"},
    "秽风扑": {"type":"毒","tier":"中"},
    "化肉利爪": {"type":"毒","tier":"中"},
    "暗绿苔斑": {"type":"毒","tier":"中"},
    "毒腺喷弹": {"type":"毒","tier":"中"},
    "腐质藤绊": {"type":"毒","tier":"中"},
    "刺骨毒针": {"type":"毒","tier":"中"},
    "万毒蚀骨": {"type":"毒","tier":"重"},
    "积毒反噬": {"type":"毒","tier":"重"},
    "毒浪狂涌": {"type":"毒","tier":"重"},
    "黑沼沉沦": {"type":"毒","tier":"重"},
    "腐心重凿": {"type":"毒","tier":"重"},
    "毒沼阵": {"type":"毒","tier":"状态"},
    "枯萎烟": {"type":"毒","tier":"状态"},
    "麻痹剧汁": {"type":"毒","tier":"状态"},
    "毒棘护体": {"type":"毒","tier":"状态"},
    "潜息匿迹": {"type":"毒","tier":"状态"},
    "万毒归元": {"type":"毒","tier":"绝"},
    "掷碎泥": {"type":"地面","tier":"轻"},
    "泥泞溅": {"type":"地面","tier":"轻"},
    "沉重顶": {"type":"地面","tier":"轻"},
    "扫土腿": {"type":"地面","tier":"轻"},
    "石砾甩": {"type":"地面","tier":"轻"},
    "裂土掌": {"type":"地面","tier":"中"},
    "回旋泥沙": {"type":"地面","tier":"中"},
    "地脉突刺": {"type":"地面","tier":"中"},
    "重踏震": {"type":"地面","tier":"中"},
    "翻土倾浪": {"type":"地面","tier":"中"},
    "尘沙卷": {"type":"地面","tier":"中"},
    "崩泥甩击": {"type":"地面","tier":"中"},
    "破土暗袭": {"type":"地面","tier":"中"},
    "震荡波纹": {"type":"地面","tier":"中"},
    "厚土撞": {"type":"地面","tier":"中"},
    "裂谷崩": {"type":"地面","tier":"重"},
    "地脉暴动": {"type":"地面","tier":"重"},
    "崩崖倾轧": {"type":"地面","tier":"重"},
    "碎原践踏": {"type":"地面","tier":"重"},
    "千钧重压": {"type":"地面","tier":"重"},
    "掘地伏击": {"type":"地面","tier":"状态"},
    "陷足泥潭": {"type":"地面","tier":"状态"},
    "漫天风沙": {"type":"地面","tier":"状态"},
    "厚土外甲": {"type":"地面","tier":"状态"},
    "稳固扎根": {"type":"地面","tier":"状态"},
    "崩山绝陆": {"type":"地面","tier":"绝"},
    "尖喙疾点": {"type":"飞行","tier":"轻"},
    "回旋飞掠": {"type":"飞行","tier":"轻"},
    "羽翼刮": {"type":"飞行","tier":"轻"},
    "劲风扑面": {"type":"飞行","tier":"轻"},
    "风爪点": {"type":"飞行","tier":"轻"},
    "强风翼击": {"type":"飞行","tier":"中"},
    "凌空俯冲": {"type":"飞行","tier":"中"},
    "风刃旋舞": {"type":"飞行","tier":"中"},
    "倒卷风": {"type":"飞行","tier":"中"},
    "翎羽齐射": {"type":"飞行","tier":"中"},
    "裂风钩爪": {"type":"飞行","tier":"中"},
    "回旋风兜": {"type":"飞行","tier":"中"},
    "疾速穿云": {"type":"飞行","tier":"中"},
    "狂风扑袭": {"type":"飞行","tier":"中"},
    "落羽飘踪": {"type":"飞行","tier":"中"},
    "气流断空": {"type":"飞行","tier":"重"},
    "飓风暴卷": {"type":"飞行","tier":"重"},
    "苍穹绝掠": {"type":"飞行","tier":"重"},
    "烈风狂啸": {"type":"飞行","tier":"重"},
    "绝顶扑杀": {"type":"飞行","tier":"重"},
    "扶摇直上": {"type":"飞行","tier":"状态"},
    "浩荡顺风": {"type":"飞行","tier":"状态"},
    "长空尖啼": {"type":"飞行","tier":"状态"},
    "风息屏障": {"type":"飞行","tier":"状态"},
    "借风盘旋": {"type":"飞行","tier":"状态"},
    "九霄崩坠": {"type":"飞行","tier":"绝"},
    "念芒刺": {"type":"超能力","tier":"轻"},
    "隔空推": {"type":"超能力","tier":"轻"},
    "扰思微光": {"type":"超能力","tier":"轻"},
    "浮石掷": {"type":"超能力","tier":"轻"},
    "念力虚扼": {"type":"超能力","tier":"轻"},
    "意念重锤": {"type":"超能力","tier":"中"},
    "念力悬空": {"type":"超能力","tier":"中"},
    "精神震波": {"type":"超能力","tier":"中"},
    "念刃飞旋": {"type":"超能力","tier":"中"},
    "意念投掷": {"type":"超能力","tier":"中"},
    "心念牵绊": {"type":"超能力","tier":"中"},
    "思绪绞痛": {"type":"超能力","tier":"中"},
    "念压阻隔": {"type":"超能力","tier":"中"},
    "错觉惑目": {"type":"超能力","tier":"中"},
    "碎心念震": {"type":"超能力","tier":"中"},
    "念潮崩解": {"type":"超能力","tier":"重"},
    "意念狂潮": {"type":"超能力","tier":"重"},
    "心智撕裂": {"type":"超能力","tier":"重"},
    "念力拔山": {"type":"超能力","tier":"重"},
    "湮灭念爆": {"type":"超能力","tier":"重"},
    "心念看破": {"type":"超能力","tier":"状态"},
    "预见灵光": {"type":"超能力","tier":"状态"},
    "安魂幽眠": {"type":"超能力","tier":"状态"},
    "无形晶障": {"type":"超能力","tier":"状态"},
    "颠倒错乱": {"type":"超能力","tier":"状态"},
    "心魂破灭": {"type":"超能力","tier":"绝"},
    "螯牙夹": {"type":"虫","tier":"轻"},
    "毒毛刺": {"type":"虫","tier":"轻"},
    "飞翼擦": {"type":"虫","tier":"轻"},
    "喷吐黏丝": {"type":"虫","tier":"轻"},
    "硬尾蜇": {"type":"虫","tier":"轻"},
    "群螯咬啮": {"type":"虫","tier":"中"},
    "连环毒芒": {"type":"虫","tier":"中"},
    "甲壳铁钳": {"type":"虫","tier":"中"},
    "尖锐振翅": {"type":"虫","tier":"中"},
    "磷粉弥漫": {"type":"虫","tier":"中"},
    "狂暴撕扯": {"type":"虫","tier":"中"},
    "毒刺连钉": {"type":"虫","tier":"中"},
    "酸涎泼洒": {"type":"虫","tier":"中"},
    "蛛网缠裹": {"type":"虫","tier":"中"},
    "粗角突顶": {"type":"虫","tier":"中"},
    "百虫潮涌": {"type":"虫","tier":"重"},
    "双螯绝杀": {"type":"虫","tier":"重"},
    "硬刺暴射": {"type":"虫","tier":"重"},
    "重甲冲撞": {"type":"虫","tier":"重"},
    "旋角穿刺": {"type":"虫","tier":"重"},
    "金蝉蜕壳": {"type":"虫","tier":"状态"},
    "吐丝结茧": {"type":"虫","tier":"状态"},
    "天罗密网": {"type":"虫","tier":"状态"},
    "甲壳硬化": {"type":"虫","tier":"状态"},
    "迷幻微尘": {"type":"虫","tier":"状态"},
    "万虫噬天": {"type":"虫","tier":"绝"},
    "飞石掷": {"type":"岩石","tier":"轻"},
    "碎砾扬": {"type":"岩石","tier":"轻"},
    "石拳轻击": {"type":"岩石","tier":"轻"},
    "坚石抵": {"type":"岩石","tier":"轻"},
    "飞石擦掠": {"type":"岩石","tier":"轻"},
    "乱石崩坠": {"type":"岩石","tier":"中"},
    "凿地成垒": {"type":"岩石","tier":"中"},
    "尖石突顶": {"type":"岩石","tier":"中"},
    "重岩飞投": {"type":"岩石","tier":"中"},
    "砾石风暴": {"type":"岩石","tier":"中"},
    "岩壳冲撞": {"type":"岩石","tier":"中"},
    "裂石重掌": {"type":"岩石","tier":"中"},
    "石矛穿膛": {"type":"岩石","tier":"中"},
    "滚岩追碾": {"type":"岩石","tier":"中"},
    "沙石飞溅": {"type":"岩石","tier":"中"},
    "天外飞陨": {"type":"岩石","tier":"重"},
    "千仞石壁": {"type":"岩石","tier":"重"},
    "碎岳重轰": {"type":"岩石","tier":"重"},
    "巨石狂滚": {"type":"岩石","tier":"重"},
    "地脉穿刺": {"type":"岩石","tier":"重"},
    "坚若磐石": {"type":"岩石","tier":"状态"},
    "岩牢死锁": {"type":"岩石","tier":"状态"},
    "结晶加固": {"type":"岩石","tier":"状态"},
    "飞尘遮蔽": {"type":"岩石","tier":"状态"},
    "重岩壁垒": {"type":"岩石","tier":"状态"},
    "万岳齐崩": {"type":"岩石","tier":"绝"},
    "幽冷烛火": {"type":"幽灵","tier":"轻"},
    "刺骨阴风": {"type":"幽灵","tier":"轻"},
    "虚爪探": {"type":"幽灵","tier":"轻"},
    "森冷逼视": {"type":"幽灵","tier":"轻"},
    "影缝潜蹑": {"type":"幽灵","tier":"轻"},
    "阴魂利爪": {"type":"幽灵","tier":"中"},
    "怨煞还击": {"type":"幽灵","tier":"中"},
    "暗影飞袭": {"type":"幽灵","tier":"中"},
    "惊魂尖啸": {"type":"幽灵","tier":"中"},
    "死气侵染": {"type":"幽灵","tier":"中"},
    "幽冥爪痕": {"type":"幽灵","tier":"中"},
    "附骨阴寒": {"type":"幽灵","tier":"中"},
    "虚妄重影": {"type":"幽灵","tier":"中"},
    "黑煞吸髓": {"type":"幽灵","tier":"中"},
    "冷魂拍击": {"type":"幽灵","tier":"中"},
    "幽冥炼狱": {"type":"幽灵","tier":"重"},
    "噬魂重攫": {"type":"幽灵","tier":"重"},
    "百鬼夜巡": {"type":"幽灵","tier":"重"},
    "深渊影缚": {"type":"幽灵","tier":"重"},
    "阴灵裂帛": {"type":"幽灵","tier":"重"},
    "虚化遁行": {"type":"幽灵","tier":"状态"},
    "刻骨咒言": {"type":"幽灵","tier":"状态"},
    "摄魂附身": {"type":"幽灵","tier":"状态"},
    "绝命同归": {"type":"幽灵","tier":"状态"},
    "冷影匿迹": {"type":"幽灵","tier":"状态"},
    "万魂祭灭": {"type":"幽灵","tier":"绝"},
    "探爪击": {"type":"龙","tier":"轻"},
    "龙牙磕": {"type":"龙","tier":"轻"},
    "甩长尾": {"type":"龙","tier":"轻"},
    "龙须拂": {"type":"龙","tier":"轻"},
    "昂首撞": {"type":"龙","tier":"轻"},
    "裂鳞爪": {"type":"龙","tier":"中"},
    "龙息吐": {"type":"龙","tier":"中"},
    "断骨咬": {"type":"龙","tier":"中"},
    "摆尾抽": {"type":"龙","tier":"中"},
    "踏浪行": {"type":"龙","tier":"中"},
    "鳞角顶": {"type":"龙","tier":"中"},
    "裂空吼": {"type":"龙","tier":"中"},
    "横扫撞": {"type":"龙","tier":"中"},
    "怒爪裂": {"type":"龙","tier":"中"},
    "龙气卷": {"type":"龙","tier":"中"},
    "逆鳞暴": {"type":"龙","tier":"重"},
    "重峦崩": {"type":"龙","tier":"重"},
    "翔龙贯": {"type":"龙","tier":"重"},
    "龙渊怒": {"type":"龙","tier":"重"},
    "轰顶踏": {"type":"龙","tier":"重"},
    "龙威慑": {"type":"龙","tier":"状态"},
    "升腾舞": {"type":"龙","tier":"状态"},
    "坚龙甲": {"type":"龙","tier":"状态"},
    "古龙鸣": {"type":"龙","tier":"状态"},
    "息战凝": {"type":"龙","tier":"状态"},
    "天龙降": {"type":"龙","tier":"绝"},
    "暗影袭": {"type":"恶","tier":"轻"},
    "沙尘扬": {"type":"恶","tier":"轻"},
    "阴险刺": {"type":"恶","tier":"轻"},
    "扫后踵": {"type":"恶","tier":"轻"},
    "假动作": {"type":"恶","tier":"轻"},
    "啮碎咬": {"type":"恶","tier":"中"},
    "暗伏击": {"type":"恶","tier":"中"},
    "趁隙打": {"type":"恶","tier":"中"},
    "暗刃挑": {"type":"恶","tier":"中"},
    "追魂抓": {"type":"恶","tier":"中"},
    "黑雾袭": {"type":"恶","tier":"中"},
    "折指扭": {"type":"恶","tier":"中"},
    "暗咬回": {"type":"恶","tier":"中"},
    "断筋爪": {"type":"恶","tier":"中"},
    "冷眼瞅": {"type":"恶","tier":"中"},
    "影中伏": {"type":"恶","tier":"重"},
    "暗夜突": {"type":"恶","tier":"重"},
    "绝户踢": {"type":"恶","tier":"重"},
    "绞心勒": {"type":"恶","tier":"重"},
    "背身刺": {"type":"恶","tier":"重"},
    "恶言挑": {"type":"恶","tier":"状态"},
    "巧取诈": {"type":"恶","tier":"状态"},
    "阴影匿": {"type":"恶","tier":"状态"},
    "狞笑慑": {"type":"恶","tier":"状态"},
    "布暗阱": {"type":"恶","tier":"状态"},
    "沉渊堕": {"type":"恶","tier":"绝"},
    "刃片刮": {"type":"钢","tier":"轻"},
    "铁肘拐": {"type":"钢","tier":"轻"},
    "金属敲": {"type":"钢","tier":"轻"},
    "铁指弹": {"type":"钢","tier":"轻"},
    "硬骨磕": {"type":"钢","tier":"轻"},
    "铸铁顶": {"type":"钢","tier":"中"},
    "钢刃劈": {"type":"钢","tier":"中"},
    "铁爪抓": {"type":"钢","tier":"中"},
    "旋钢斩": {"type":"钢","tier":"中"},
    "铁脊撞": {"type":"钢","tier":"中"},
    "金钩挂": {"type":"钢","tier":"中"},
    "刺桩扎": {"type":"钢","tier":"中"},
    "精钢盾": {"type":"钢","tier":"中"},
    "链锤甩": {"type":"钢","tier":"中"},
    "钢尾鞭": {"type":"钢","tier":"中"},
    "重钢锤": {"type":"钢","tier":"重"},
    "钢甲冲": {"type":"钢","tier":"重"},
    "断刃斩": {"type":"钢","tier":"重"},
    "巨砧砸": {"type":"钢","tier":"重"},
    "破阵贯": {"type":"钢","tier":"重"},
    "固若壁": {"type":"钢","tier":"状态"},
    "刺耳鸣": {"type":"钢","tier":"状态"},
    "浮游磁": {"type":"钢","tier":"状态"},
    "调齿轮": {"type":"钢","tier":"状态"},
    "映辉镜": {"type":"钢","tier":"状态"},
    "铸心志": {"type":"钢","tier":"绝"},
    "荧粉点": {"type":"妖精","tier":"轻"},
    "轻灵拍": {"type":"妖精","tier":"轻"},
    "柔风抚": {"type":"妖精","tier":"轻"},
    "微光刺": {"type":"妖精","tier":"轻"},
    "戏嬉撞": {"type":"妖精","tier":"轻"},
    "落樱旋": {"type":"妖精","tier":"中"},
    "妖灵风": {"type":"妖精","tier":"中"},
    "幻波闪": {"type":"妖精","tier":"中"},
    "流萤扑": {"type":"妖精","tier":"中"},
    "星芒点": {"type":"妖精","tier":"中"},
    "花蔓缠": {"type":"妖精","tier":"中"},
    "月辉引": {"type":"妖精","tier":"中"},
    "晶莹弹": {"type":"妖精","tier":"中"},
    "仙歌绕": {"type":"妖精","tier":"中"},
    "灵华拂": {"type":"妖精","tier":"中"},
    "月华瀑": {"type":"妖精","tier":"重"},
    "狂澜炫": {"type":"妖精","tier":"重"},
    "幻境破": {"type":"妖精","tier":"重"},
    "星坠击": {"type":"妖精","tier":"重"},
    "极光裁": {"type":"妖精","tier":"重"},
    "沐月华": {"type":"妖精","tier":"状态"},
    "惑心目": {"type":"妖精","tier":"状态"},
    "清灵祝": {"type":"妖精","tier":"状态"},
    "幽馨散": {"type":"妖精","tier":"状态"},
    "幻佑屏": {"type":"妖精","tier":"状态"},
    "如梦令": {"type":"妖精","tier":"绝"},
    "伺服点": {"type":"机械","tier":"轻"},
    "高压喷": {"type":"机械","tier":"轻"},
    "铜缆抽": {"type":"机械","tier":"轻"},
    "焊焰炙": {"type":"机械","tier":"轻"},
    "冲压跺": {"type":"机械","tier":"轻"},
    "液压拳": {"type":"机械","tier":"中"},
    "高能束": {"type":"机械","tier":"中"},
    "过热排": {"type":"机械","tier":"中"},
    "合金钻": {"type":"机械","tier":"中"},
    "电磁击": {"type":"机械","tier":"中"},
    "破甲钉": {"type":"机械","tier":"中"},
    "链带扫": {"type":"机械","tier":"中"},
    "冷硬撞": {"type":"机械","tier":"中"},
    "磁轨弹": {"type":"机械","tier":"中"},
    "气压推": {"type":"机械","tier":"中"},
    "集群导": {"type":"机械","tier":"重"},
    "超限荷": {"type":"机械","tier":"重"},
    "重力夯": {"type":"机械","tier":"重"},
    "涡轮碾": {"type":"机械","tier":"重"},
    "电容倾": {"type":"机械","tier":"重"},
    "准星锁": {"type":"机械","tier":"状态"},
    "磁障壁": {"type":"机械","tier":"状态"},
    "自检修": {"type":"机械","tier":"状态"},
    "超频动": {"type":"机械","tier":"状态"},
    "阻断绝": {"type":"机械","tier":"状态"},
    "总线崩": {"type":"机械","tier":"绝"},
    "残灰沾": {"type":"侵蚀","tier":"轻"},
    "灼热触": {"type":"侵蚀","tier":"轻"},
    "滞涩视": {"type":"侵蚀","tier":"轻"},
    "腐皮剥": {"type":"侵蚀","tier":"轻"},
    "焦泥掷": {"type":"侵蚀","tier":"轻"},
    "焦斑印": {"type":"侵蚀","tier":"中"},
    "衰朽触": {"type":"侵蚀","tier":"中"},
    "废墟尘": {"type":"侵蚀","tier":"中"},
    "灼痕裂": {"type":"侵蚀","tier":"中"},
    "辐光扫": {"type":"侵蚀","tier":"中"},
    "枯木摧": {"type":"侵蚀","tier":"中"},
    "空洞陷": {"type":"侵蚀","tier":"中"},
    "悲鸣振": {"type":"侵蚀","tier":"中"},
    "黑斑蚀": {"type":"侵蚀","tier":"中"},
    "余热炙": {"type":"侵蚀","tier":"中"},
    "大衰败": {"type":"侵蚀","tier":"重"},
    "电离芒": {"type":"侵蚀","tier":"重"},
    "焦土劫": {"type":"侵蚀","tier":"重"},
    "残响爆": {"type":"侵蚀","tier":"重"},
    "死地囚": {"type":"侵蚀","tier":"重"},
    "灾殃场": {"type":"侵蚀","tier":"状态"},
    "噩梦缠": {"type":"侵蚀","tier":"状态"},
    "回音仿": {"type":"侵蚀","tier":"状态"},
    "废土息": {"type":"侵蚀","tier":"状态"},
    "生机绝": {"type":"侵蚀","tier":"状态"},
    "余烬落": {"type":"侵蚀","tier":"绝"},
    "吮血刺": {"type":"噬血","tier":"轻"},
    "抓血痕": {"type":"噬血","tier":"轻"},
    "舔腥唇": {"type":"噬血","tier":"轻"},
    "扑颈截": {"type":"噬血","tier":"轻"},
    "撕创角": {"type":"噬血","tier":"轻"},
    "裂创撕": {"type":"噬血","tier":"中"},
    "嗜血扑": {"type":"噬血","tier":"中"},
    "饮生机": {"type":"噬血","tier":"中"},
    "血爪掠": {"type":"噬血","tier":"中"},
    "绞喉吮": {"type":"噬血","tier":"中"},
    "剔骨抠": {"type":"噬血","tier":"中"},
    "逆血撞": {"type":"噬血","tier":"中"},
    "腥风扫": {"type":"噬血","tier":"中"},
    "夺命衔": {"type":"噬血","tier":"中"},
    "红瞳视": {"type":"噬血","tier":"中"},
    "鲸吞噬": {"type":"噬血","tier":"重"},
    "暴戮宴": {"type":"噬血","tier":"重"},
    "剖心裂": {"type":"噬血","tier":"重"},
    "断喉绝": {"type":"噬血","tier":"重"},
    "渴血冲": {"type":"噬血","tier":"重"},
    "血狂怒": {"type":"噬血","tier":"状态"},
    "燃血契": {"type":"噬血","tier":"状态"},
    "血雾障": {"type":"噬血","tier":"状态"},
    "闻腥燥": {"type":"噬血","tier":"状态"},
    "凝血痂": {"type":"噬血","tier":"状态"},
    "血月屠": {"type":"噬血","tier":"绝"}
  });
  // END GENERATED MOVE INDEX

  var STAGES = ['幼年期', '成长期', '成熟期', '完全体', '究极体'];
  var phaseRank = function (stage) {
    var s = String(stage || '').trim();
    if (/^幼年期(?:Ⅰ|Ⅱ|I|II|1|2|一|二)?$/.test(s)) return 0;
    var rank = STAGES.indexOf(s);
    return rank < 0 ? null : rank;
  };
  var phaseCoef = function (stage) {
    var rank = phaseRank(stage);
    return rank == null ? 1.0 : PHASE[STAGES[rank]];
  };

  var moveName = function (name) {
    return String(name || '').trim().normalize('NFC')
      .replace(/[（(][^()（）]*[·・][^()（）]*[）)]$/, '')
      .replace(/[（(](?:轻|中|重|绝技|绝|状态|防守)(?:[·・]\d+)?[）)]$/, '').trim();
  };
  var validType = function (type) {
    var t = String(type || '').trim().replace(/属性$/, '');
    return Object.prototype.hasOwnProperty.call(TYPE_HINTS_MAP, t) ? t : null;
  };
  var validTier = function (tier) {
    var t = String(tier || '').trim(); if (t === '绝技') t = '绝';
    return MOVES.indexOf(t) >= 0 ? t : null;
  };
  var bracketMove = function (raw) {
    var m = String(raw || '').match(/[（(]\s*([^()（）·・]+?)\s*[·・]\s*([^()（）]+?)\s*[）)]\s*$/);
    if (!m) return null;
    var type = validType(m[1]), tier = validTier(m[2]);
    return type && tier ? { type: type, tier: tier } : null;
  };
  var lookupMove = function (name) {
    var n = moveName(name), hit = Object.prototype.hasOwnProperty.call(MOVE_INDEX, n) && MOVE_INDEX[n];
    return hit ? { name: n, type: hit.type, tier: hit.tier } : null;
  };
  // D3：只在招式谱缺项时按批准字表和原招式栏顺序补值。
  var TYPE_HINTS = [
    ['火', '火焰炎焚烧灼烬'], ['水', '水浪潮涌泡流湍'], ['草', '草叶藤根花木森'],
    ['电', '电雷闪霆'], ['冰', '冰霜雪寒冻凛'], ['格斗', '拳掌踢摔肘膝'],
    ['毒', '毒瘴腐'], ['地面', '地沙土泥掘震'], ['飞行', '翼羽风翔空'],
    ['超能力', '念心神幻'], ['虫', '虫丝蛰'], ['岩石', '岩石崩砾'],
    ['幽灵', '影魂幽鬼'], ['龙', '龙'], ['恶', '暗恶袭'], ['钢', '钢铁金'],
    ['妖精', '星梦甜'], ['机械', '械齿轮炮'], ['侵蚀', '蚀'], ['噬血', '血']
  ];
  var TYPE_HINTS_MAP = { '一般': true };
  TYPE_HINTS.forEach(function (row) { TYPE_HINTS_MAP[row[0]] = true; });
  var inferMoveType = function (name, types) {
    var own = (types || []).map(function (t) { return String(t).replace(/属性$/, ''); });
    var hits = [];
    TYPE_HINTS.forEach(function (row) {
      var at = -1;
      row[1].split('').forEach(function (ch) { var i = name.indexOf(ch); if (i >= 0 && (at < 0 || i < at)) at = i; });
      if (at >= 0) hits.push({ type: row[0], at: at });
    });
    hits.sort(function (a, b) { return a.at - b.at; });
    var mine = hits.filter(function (h) { return own.indexOf(h.type) >= 0; });
    return (mine[0] || hits[0] || {}).type || own[0] || '一般';
  };
  // 名称优先补谱；对手JSON显式给出的属性和档位仍保留。
  // index/types由建局显式传入；缺槽位默认中，缺属性及字表线索才退一般。
  var normMove = function (m, index, types) {
    var rawName = typeof m === 'string' ? m : m && (m.name || m['名']);
    var name = moveName(rawName) || '撞击', annotated = bracketMove(rawName);
    var hit = lookupMove(name);
    var fallbackTier = ['轻', '中', '中', '重'][index] || '中';
    var fallbackType = inferMoveType(name, types);
    var explicitType = typeof m === 'object' && m ? validType(m.type || m['属性']) : null;
    var explicitTier = typeof m === 'object' && m ? validTier(m.tier || m['档']) : null;
    return {
      name: name,
      type: (annotated && annotated.type) || explicitType || (hit && hit.type) || fallbackType,
      tier: (annotated && annotated.tier) || explicitTier || (hit && hit.tier) || fallbackTier
    };
  };

  var noteOnce = function (st, text) {
    if (!Array.isArray(st.notes)) st.notes = [];
    if (st.notes.indexOf(text) < 0) st.notes.push(text);
  };
  var LEVEL_CAPS = [15, 35, 60, 85, 100], EVOLVE_MIN = [10, 20, 40, 65];
  var levelCap = function (stage) { var r = phaseRank(stage); return r == null ? 100 : LEVEL_CAPS[r]; };
  var levelOf = function (v) { return clamp(Math.floor(+v || 1), 1, 100); };
  // 当前等级内经验；瓶颈时继续保留。调用返回副本，不重复改变战斗数据。
  var advanceLevel = function (beast, gain) {
    var cap = levelCap(beast.stage), level = Math.min(levelOf(beast.level == null ? beast.Lv : beast.level), cap);
    var exp = Math.max(0, Math.floor(+beast.exp || 0)) + Math.max(0, Math.floor(+gain || 0));
    while (level < cap && exp >= level * 15) { exp -= level * 15; level++; }
    return { level: level, exp: exp, expNeed: level * 15, bottleneck: level >= cap && level < 100 };
  };
  var evolutionReady = function (beast, conditionMet) {
    var rank = phaseRank(beast.stage);
    return rank != null && EVOLVE_MIN[rank] != null && +beast.growth >= 100 && levelOf(beast.level) >= EVOLVE_MIN[rank] && conditionMet === true;
  };
  var afterEvolution = function (beast, nextStage) {
    var out = Object.assign({}, beast, { stage: nextStage, growth: 0 });
    return Object.assign(out, advanceLevel(out, 0));
  };
  var ensureTeams = function (st) {
    // 旧版存档只有me/foe；JSON持久化后重新绑定当前引用。
    if (!st.meTeam) st.meTeam = [st.me];
    if (!st.foeTeam) st.foeTeam = [st.foe];
    st.meIndex = +st.meIndex || 0; st.foeIndex = +st.foeIndex || 0;
    st.me = st.meTeam[st.meIndex]; st.foe = st.foeTeam[st.foeIndex];
    [st.meTeam, st.foeTeam].forEach(function (team) { team.forEach(function (b) {
      b.level = Math.min(levelOf(b.level), levelCap(b.stage));
      b.exp = Math.max(0, +b.exp || 0); b.growth = clamp(+b.growth || 0, 0, 100);
      if (b.startHp == null) b.startHp = b.hp;
      if (b.startFatigue == null) b.startFatigue = +b.fatigue || 0;
      if (b.startLevel == null) b.startLevel = b.level;
      if (b.startExp == null) b.startExp = b.exp;
      if (b.startGrowth == null) b.startGrowth = b.growth;
      if (!b.faced) b.faced = [];
      if (!b.defeated) b.defeated = [];
    }); });
    if (!st.bag) st.bag = [];
  };
  var markEntered = function (st) {
    st.me.entered = true; st.foe.entered = true;
    if (st.me.faced.indexOf(st.foeIndex) < 0) st.me.faced.push(st.foeIndex);
    if (st.foe.faced.indexOf(st.meIndex) < 0) st.foe.faced.push(st.meIndex);
  };
  var enforceRules = function (st) {
    ensureTeams(st);
    if (st.grit == null) st.grit = 20;
    // 老存档首次继续对战时迁移地形，已有明确ID优先。
    st.field = st.field || { name: '空地', types: st.fieldTypes || [], lend: [], changes: [] };
    st.field.terrain = terrainOf(st.field);
    var rules = st.rules || {};
    if (rules['道具']) noteOnce(st, '本版常规道具未开放，野生对战可投球。');
    st.rules = Object.assign({}, rules, { '换兽': true, '道具': false, '对方只数': st.foeTeam.length });
    var me = phaseRank(st.me.stage), foe = phaseRank(st.foe.stage);
    st.phaseLocked = me != null && foe != null && foe - me >= 2;
    if (st.phaseLocked && !st.foe.down) {
      st.foe.hp = Math.max(1, st.foe.hp);
      noteOnce(st, '当前我方低两阶或以上：对手体力下限为1。');
    }
  };
  var hpFloor = function (st, side) { return side === 'foe' && st.phaseLocked ? 1 : 0; };

  // 克制倍率：双属性相乘后限制0.5～2；免疫仍0，未知属性按1。
  var effOf = function (chart, moveType, defTypes) {
    if (!chart || !chart[moveType]) return 1;
    var row = chart[moveType], out = 1;
    (defTypes || []).forEach(function (t) { var v = row[String(t).replace(/属性$/, '')]; if (typeof v === 'number') out *= v; });
    return out === 0 ? 0 : clamp(out, 0.5, 2);
  };

  var effWord = function (e) {
    if (e === 0) return '没效果';
    if (e >= 2) return '效果拔群';
    if (e > 1) return '有效';
    if (e < 1 && e > 0) return '效果不好';
    return '';
  };

  // 单次伤害：威力 × 攻/守系数 × clamp(克制×地形,0.5,2) × 本属性1.2 × 随机；免疫仍0。
  var damageOf = function (o) {
    var mv = normMove(o.move);
    var power = POWER[mv.tier] || 0;
    var terrain = terrainOf(o.field || { terrain: o.terrain, types: o.fieldTypes || [] });
    if (!power) return { dmg: 0, eff: 0, power: 0, type: mv.type, tier: mv.tier, name: mv.name, terrain: terrain, terrainFactor: 1, terrainApplied: false };
    var base = power * (phaseCoef(o.attackerStage) / phaseCoef(o.defenderStage));
    base *= clamp(1 + (levelOf(o.attackerLevel) - levelOf(o.defenderLevel)) / 100, 0.6, 1.4);
    if (phaseRank(o.attackerStage) != null && phaseRank(o.attackerStage) === phaseRank(o.defenderStage)) base *= 1 + clamp(+o.attackerGrowth || 0, 0, 100) / 500;
    var typeEff = effOf(o.chart, mv.type, o.defenderTypes);
    var terrainMult = terrainFactor(terrain, mv.type);
    var eff = typeEff === 0 ? 0 : clamp(typeEff * terrainMult, 0.5, 2);
    var own = (o.attackerTypes || []).some(function (t) { return String(t).replace(/属性$/, '') === mv.type; }) ? 1.2 : 1;
    var rnd = typeof o.rnd === 'number' ? o.rnd : 0.925;
    var dmg = base * eff * own * (0.85 + 0.15 * clamp(rnd, 0, 1));
    if (o.crit) dmg *= 1.5;
    if (o.guard) dmg *= 0.5;
    if (o.boost) dmg *= o.boost;
    return { dmg: Math.max(eff === 0 ? 0 : 1, int(dmg)), eff: eff, typeEff: typeEff, power: power, type: mv.type, tier: mv.tier, name: mv.name,
      terrain: terrain, terrainFactor: terrainMult, terrainApplied: typeEff !== eff && terrainMult !== 1 };

  };

  // 命中率：基础 95，疲劳 >60 再 -10，场地事件可改（如 "命中-15"），口令干扰 -40
  var hitRate = function (o) {
    var r = 95;
    if ((o.fatigue || 0) > 60) r -= 10;
    if (o.hitMod) r += o.hitMod;
    return clamp(r, 5, 100);
  };

  var misfits = function (bond) {
    var b = +bond || 0;
    if (b < 20) return 0.15;
    if (b < 40) return 0.08;
    return 0.02;
  };

  // 口令成功率：40 + 羁绊/2 + 15（借的东西和自身属性沾边），封顶 90
  var cmdRate = function (bond, sameType) {
    return clamp(40 + (+bond || 0) / 2 + (sameType ? 15 : 0), 0, 90);
  };

  // ---------- 建局 ----------
  // spec：AI 输出的对战建立块（已解析成对象）；myTeam：UI 状态里的 team[]（体力、疲劳、羁绊、招式、属性、阶段）
  var fighter = function (raw, enemy, index) {
    var b = raw || {}, types = enemy ? b['属性'] : b.types;
    types = (types || []).map(function (t) { return String(t).replace(/属性$/, ''); });
    var stage = (enemy ? b['阶段'] : b.stage) || '成长期';
    var hp = enemy ? b['体力'] : b.hp, moves = enemy ? b['招式'] : b.moves;
    var lv = enemy ? b['Lv'] : (b.level == null ? b.Lv : b.level);
    var f = {
      nick: (enemy ? b['昵称'] || b['物种'] : b.nick || b.species) || '搭档',
      species: (enemy ? b['物种'] : b.species || b.nick) || '',
      trainer: enemy ? b['驯兽师'] || '对手' : '', stage: stage, types: types,
      level: Math.min(levelOf(lv), levelCap(stage)), exp: Math.max(0, +(enemy ? b['经验'] : b.exp) || 0),
      growth: clamp(+(enemy ? b['成长'] : b.growth) || 0, 0, 100),
      hp: hp == null ? 100 : clamp(+hp, 0, 100), maxHp: 100,
      injury: (enemy ? b['伤势'] : b.injury) || '无',
      fatigue: clamp(+(enemy ? b['疲劳'] : b.fatigue) || 0, 0, 100),
      bond: clamp(+(enemy ? b['羁绊'] : b.bond) || 0, 0, 100), bondTier: b.bondTier || '',
      moves: (moves && moves.length ? moves : ['撞击', '硬撞', '防守']).map(function (m, i) { return normMove(m, i, types); }),
      storage: (b.storage || []).map(function (m, i) { return normMove(m, i, types); }),
      style: b['打法'] || '稳守', rampaging: !!b['暴走'],
      guard: false, boost: null, sureHit: false, syncHit: false, gritBoost: false, tamerCrit: false,
      reviveCount: 0, lastOverkill: 0, bondBonus: 0, order: 0,
      down: hp != null && +hp <= 0, sourceIndex: index, entered: false, faced: [], defeated: []
    };
    f.startHp = f.hp; f.startFatigue = f.fatigue; f.startLevel = f.level; f.startExp = f.exp; f.startGrowth = f.growth;
    return f;
  };
  var init = function (spec, myTeam, opts) {
    var o = opts || {}, rawFoes = spec['对方'] || [];
    if (!myTeam || !myTeam.length) throw new Error('我方没有可出战的异兽');
    var meTeam = myTeam.slice(0, 3).map(function (b, i) { return fighter(b, false, i); });
    var foeTeam = (rawFoes.length ? rawFoes : [{}]).slice(0, 3).map(function (b, i) { return fighter(b, true, i); });
    var mi = meTeam.findIndex(function (b) { return b.hp > 0; }), fi = foeTeam.findIndex(function (b) { return b.hp > 0; });
    if (mi < 0 || fi < 0) throw new Error('没有体力可用的出战异兽');
    var field = spec['场地'] || {};
    var st = {
      v: 2, name: spec['名称'] || '对战', kind: spec['场合'] || '切磋', mode: spec['性质'] || '比试',
      field: { name: field['名'] || '空地', terrain: terrainOf(field), types: (field['标签'] || []).map(String), lend: field['可借'] || [], changes: field['变化'] || [] },
      rules: Object.assign({}, spec['规则'] || {}), round: 1, over: false, result: null,
      syncUsed: false, cmdLeft: 3, items: [], key: [], log: [],
      grit: 20, gritRevives: 0, gritPending: null, enableGritQte: !!o.enableGritQte,
      tamerIn: false, foeTamerIn: false, tamerStep: 'move', tamerBuff: null, tamerHurt: '无',
      meTeam: meTeam, foeTeam: foeTeam, meIndex: mi, foeIndex: fi, me: meTeam[mi], foe: foeTeam[fi],
      teamSize: myTeam.length,
      wild: spec['野生'] === true || foeTeam.every(function (b) { return b.trainer === '野生'; }),
      bag: (o.bag || []).map(function (b) { return { name: String(b.name || ''), qty: Math.max(0, Math.floor(+b.qty || 0)) }; }),
      hitMod: { me: 0, foe: 0 }, nextFirst: null, rnd: o.rnd || Math.random
    };
    st.fieldTypes = st.field.types;
    enforceRules(st); markEntered(st);
    if (myTeam.length > 3 || rawFoes.length > 3) noteOnce(st, '本场双方最多三只，按顺序取前三只。');
    return st;
  };

  // 赛前排序，不耗回合；交手后顺序固定，主动换兽走act。
  var reorderTeam = function (st, order) {
    if (st.over || st.log.length || !Array.isArray(order) || order.length !== st.meTeam.length || new Set(order).size !== order.length || order.some(function (i) { return !Number.isInteger(i) || i < 0 || i >= st.meTeam.length; })) return false;
    st.meTeam.forEach(function (b) { b.entered = false; b.faced = []; });
    st.foeTeam.forEach(function (b) { b.entered = false; b.faced = []; });
    st.meTeam = order.map(function (i) { return st.meTeam[i]; });
    st.meIndex = st.meTeam.findIndex(function (b) { return b.hp > 0; });
    enforceRules(st); markEntered(st); return true;
  };

  var captureRate = function (o) {
    var name = String(o.ball || ''), base;
    if (!/球/.test(name) || /夺契|长眠/.test(name)) return 0;
    if (/大型/.test(name)) base = 0.7;
    else if (/环境/.test(name)) base = o.environmentMatch ? 0.9 : 0.4;
    else if (/维生/.test(name)) base = o.seriousInjury ? 0.9 : 0.5;
    else if (/镇压/.test(name)) base = o.rampaging ? 0.9 : 0.5;
    else if (/普通|契约球/.test(name)) base = 0.5;
    else return 0;
    var lv = clamp(1 - (levelOf(o.foeLevel) - levelOf(o.myLevel)) / 50, 0.3, 1.2);
    return clamp(base * (1 - clamp(+o.hp || 0, 0, 100) / 100) * lv * (+o.fatigue >= 50 ? 1.2 : 1), 0, 0.95);
  };

  var settleTeams = function (st) {
    var living = function (team) { return team.findIndex(function (b) { return b.hp > 0; }); };
    var mi = living(st.meTeam), fi = living(st.foeTeam);
    if (mi < 0 || fi < 0) { st.over = true; st.result = mi < 0 ? '负' : '胜'; return; }
    if (st.me.hp <= 0) { st.meIndex = mi; st.me = st.meTeam[mi]; st.log.push({ round: st.round, kind: 'switch', text: '我方换上 ' + st.me.nick }); }
    if (st.foe.hp <= 0) { st.foeIndex = fi; st.foe = st.foeTeam[fi]; st.log.push({ round: st.round, kind: 'switch', text: '对方换上 ' + st.foe.nick }); }
    enforceRules(st); markEntered(st);
  };

  // ---------- 场地变化（按回合触发） ----------
  var applyFieldChange = function (st) {
    (st.field.changes || []).forEach(function (c) {
      if (+c['回合'] !== st.round) return;
      var eff = String(c['效果'] || '');
      var m = eff.match(/命中\s*([+-]\d+)/);
      if (m) { st.hitMod.me += +m[1]; st.hitMod.foe += +m[1]; }
      st.log.push({ round: st.round, kind: 'field', text: '场地：' + (c['事件'] || '变化') + (eff ? '（' + eff + '）' : '') });
    });
  };

  var keyOf = function (st, text) { if (st.key.length < 12) st.key.push({ round: st.round, text: text }); };

  // ---------- WT-v7：绝境燃魂应援 QTE 与 非正规局驯兽师辅助共斗 ----------
  var canTamerJoin = function (st) {
    if (!st) return false;
    return st.kind !== '道馆' && st.kind !== '联赛' && st.mode !== '正式';
  };
  var canGritQte = function (st) {
    if (!st || !st.me) return false;
    return st.me.hp <= 0 && (+st.me.bond || 0) >= 35 && (st.me.reviveCount || 0) < 3;
  };
  var gritSpec = function (st) {
    var me = (st && st.me) || {};
    var rev = me.reviveCount || 0;
    var ovk = clamp(me.lastOverkill || 0, 0, 80);
    var sec = Number(clamp(3.2 - rev * 0.72 - ovk * 0.02, 0.95, 3.2).toFixed(2));
    var tap = Number(clamp(7.8 - rev * 1.6 - ovk * 0.035, 3.6, 8.0).toFixed(2));
    return {
      durationMs: Math.round(sec * 1000),
      durationSec: sec,
      startGauge: clamp(Math.round(((st && st.grit) || 0) * 0.35), 0, 35),
      tapGain: tap,
      perfectGain: Number((tap * 1.9).toFixed(2)),
      reviveCount: rev + 1,
      overkill: ovk,
      speedMult: Number((3.2 / sec).toFixed(1))
    };
  };
  var gritRevive = function (st) {
    if (!st || !st.me || st.over) return st;
    st.gritPending = null;
    st.me.reviveCount = (st.me.reviveCount || 0) + 1;
    var lockHp = [25, 15, 5][st.me.reviveCount - 1] || 5;
    st.me.hp = lockHp;
    st.me.down = false;
    var di = (st.foe && st.foe.defeated) ? st.foe.defeated.indexOf(st.meIndex) : -1;
    if (di >= 0) st.foe.defeated.splice(di, 1);
    st.me.gritBoost = true;
    st.me.sureHit = true;
    st.me.bondBonus = (st.me.bondBonus || 0) + 2;
    st.gritRevives = (st.gritRevives || 0) + 1;
    st.grit = 35;
    if (st.tamerIn) st.tamerStep = 'buff';
    st.log.push({ round: st.round, kind: 'grit', text: '🔥 绝境燃魂再起！' + st.me.nick + ' 听见怒吼硬撑站起（体力锁回 ' + lockHp + '%，下一击必中且威力×1.5！）' });
    keyOf(st, '第' + st.round + '回合 绝境燃魂再起（' + st.me.nick + ' 濒死撑住反击）');
    st.round++;
    return st;
  };
  var gritFail = function (st) {
    if (!st || st.over) return st;
    st.gritPending = null;
    settleTeams(st);
    if (!st.over) {
      if (st.tamerIn) st.tamerStep = 'buff';
      st.round++;
    } else {
      if (!st.result) st.result = st.foe.hp <= 0 ? '胜' : '负';
      st.log.push({ round: st.round, kind: 'end', text: '对战结束：' + st.result });
    }
    return st;
  };

  // ---------- 一回合 ----------
  // action：{kind:'move', move:index} | {kind:'guard'} | {kind:'command', cmd:'借地形|遮挡|干扰|佯攻', lend:'松沙', note:'…'} | {kind:'sync'} | {kind:'switch', index} | {kind:'item', name} | {kind:'flee'} | {kind:'tamer_join'} | {kind:'tamer_buff', buff} | {kind:'grit_revive'} | {kind:'grit_fail'}
  var act = function (st, action, rndFn) {
    if (st.over) return st;
    var rnd = rndFn || st.rnd || Math.random;
    var a = action || { kind: 'move', move: 0 };
    enforceRules(st);
    if (a.kind === 'grit_revive') return gritRevive(st);
    if (a.kind === 'grit_fail') return gritFail(st);
    if (st.gritPending && a.kind !== 'surrender') return st;
    if (a.kind === 'surrender' || (a.kind === 'flee' && st.phaseLocked)) {
      st.gritPending = null;
      st.over = true; st.result = '负（认输）';
      st.log.push({ round: st.round, kind: 'end', text: '对战结束：负（认输）' });
      return st;
    }
    if (a.kind === 'tamer_join') {
      if (!canTamerJoin(st)) {
        st.log.push({ round: st.round, kind: 'warn', text: '正规赛事规则严禁驯兽师踏入战圈' });
        return st;
      }
      if (st.tamerIn) return st;
      st.tamerIn = true;
      st.tamerStep = 'buff';
      st.tamerBuff = null;
      if (!st.wild && st.foe.trainer && st.foe.trainer !== '野生' && (st.kind === '地下' || st.mode === '死斗' || st.foe.style === '抢攻' || st.foe.style === '控场')) {
        st.foeTamerIn = true;
      }
      st.log.push({ round: st.round, kind: 'tamer', text: '👊 你翻身踏入战圈站到 ' + st.me.nick + ' 身侧！（每回合先选辅助/捣乱，再选异兽招式）' + (st.foeTamerIn ? ' 对方 ' + st.foe.trainer + ' 也同步压步入场协战！' : '') });
      keyOf(st, '第' + st.round + '回合 驯兽师亲自入场并肩协战');
      return st;
    }
    if (a.kind === 'tamer_buff') {
      if (!st.tamerIn) return st;
      if (a.buff === 'skip') { st.tamerBuff = null; st.tamerStep = 'move'; return st; }
      if (a.buff === 'guard') {
        st.tamerBuff = 'guard'; st.tamerStep = 'move';
        st.grit = clamp((st.grit || 0) + 12, 0, 100);
        st.log.push({ round: st.round, kind: 'tamer', text: '🛡️ 驯兽师辅助：你侧身护在 ' + st.me.nick + ' 前方卸力替挡（本轮受伤减半）' });
        return st;
      }
      if (a.buff === 'disrupt') {
        st.tamerBuff = 'disrupt'; st.tamerStep = 'move'; st.me.tamerCrit = true;
        st.log.push({ round: st.round, kind: 'tamer', text: '👊 驯兽师捣乱：你欺身扬尘掣肘打乱敌势！（敌方降命中破防，' + st.me.nick + ' 本轮必出会心）' });
        keyOf(st, '第' + st.round + '回合 驯兽师近身捣乱制造破绽');
        return st;
      }
      if (a.buff === 'surge') {
        if ((st.grit || 0) < 80) {
          st.log.push({ round: st.round, kind: 'warn', text: '气势不足 80%，暂时无法发动燃魂共鸣' });
          return st;
        }
        st.grit = clamp((st.grit || 0) - 80, 0, 100);
        st.tamerBuff = 'surge'; st.tamerStep = 'move';
        st.me.sureHit = true; st.me.bondBonus = (st.me.bondBonus || 0) + 3;
        st.log.push({ round: st.round, kind: 'tamer', text: '🔥 羁绊燃魂鼓舞！气势全开加持，' + st.me.nick + ' 本轮招式必中且威力×1.5！' });
        keyOf(st, '第' + st.round + '回合 人兽燃魂共鸣强袭');
        return st;
      }
      return st;
    }
    if (a.kind === 'item') {
      st.log.push({ round: st.round, kind: 'warn', text: '本版不开放常规道具，野生战请使用投球' }); return st;
    }
    if (a.kind === 'switch') {
      var index = +a.index, next = st.meTeam[index];
      if (!Number.isInteger(index) || !next || next.hp <= 0 || index === st.meIndex) {
        st.log.push({ round: st.round, kind: 'warn', text: '请选择另一只仍能出战的异兽' }); return st;
      }
      st.meIndex = index; st.me = next; enforceRules(st); markEntered(st);
      st.log.push({ round: st.round, kind: 'switch', text: '我方主动换上 ' + next.nick });
    }
    if (a.kind === 'ball') {
      var ball = st.bag.find(function (b) { return b.name === a.name && b.qty > 0; });
      if (!st.wild || !ball || !/球/.test(ball.name) || /夺契|长眠/.test(ball.name) || !/普通|契约球|大型|环境|维生|镇压/.test(ball.name)) {
        st.log.push({ round: st.round, kind: 'warn', text: '本场无法使用这枚球' }); return st;
      }
      var match = [['水','水'],['火','火'],['寒','冰'],['沙','地面']].some(function (p) { return ball.name.indexOf(p[0]) >= 0 && st.fieldTypes.indexOf(p[1]) >= 0; });
      var rate = captureRate({ ball: ball.name, hp: st.foe.hp, myLevel: st.me.level, foeLevel: st.foe.level, fatigue: st.foe.fatigue, seriousInjury: /重伤|濒死/.test(st.foe.injury) || st.foe.hp < 30, rampaging: st.foe.rampaging, environmentMatch: match });
      ball.qty--; st.items.push(ball.name);
      var success = rnd() < rate;
      st.log.push({ round: st.round, kind: 'ball', text: ball.name + (success ? '：结契成功' : '：对方挣脱，球已损毁') });
      if (success) {
        st.me.fatigue = clamp(st.me.fatigue + 3, 0, 100);
        st.over = true; st.result = '胜（结契）';
        st.capture = { '异兽': st.foe.nick, '物种': st.foe.species, '阶段': st.foe.stage, 'Lv': st.foe.level, '成长': 0, '羁绊': 20, '方式': '投球', '球': ball.name, '去向': st.teamSize >= 6 ? '仓库' : '队伍' };
        st.log.push({ round: st.round, kind: 'end', text: '对战结束：结契成功' }); return st;
      }
    }
    applyFieldChange(st);

    // 同调：只挂状态，下一条指令生效
    if (a.kind === 'sync') {
      if (st.syncUsed) { st.log.push({ round: st.round, kind: 'warn', text: '同调一场只能用一次' }); return st; }
      st.syncUsed = true; st.me.syncHit = true; st.me.sureHit = true;
      st.grit = clamp((st.grit || 0) + 25, 0, 100);
      st.me.fatigue = clamp(st.me.fatigue + 30, 0, 100);
      st.log.push({ round: st.round, kind: 'sync', text: '同调：下一招必中、伤害翻倍（' + st.me.nick + ' 疲劳 +30，驯兽师头痛脱力）' });
      keyOf(st, '同调 · 下一招必中翻倍');
      return st;
    }
    if (a.kind === 'flee') {
      st.over = true; st.result = '逃脱';
      st.log.push({ round: st.round, kind: 'end', text: '你带着 ' + st.me.nick + ' 撤了' });
      return st;
    }

    // 口令
    var cmdPending = null;
    if (a.kind === 'command') {
      if (st.me.bond < 40) { st.log.push({ round: st.round, kind: 'warn', text: '羁绊不到 40，口令使不动' }); return st; }
      if (st.cmdLeft <= 0) { st.log.push({ round: st.round, kind: 'warn', text: '这场的口令用完了' }); return st; }
      st.cmdLeft--;
      var lendInfo = (st.field.lend || []).map(function (x) { return String(x); }).find(function (x) { return x.indexOf(a.lend || '') === 0; }) || '';
      var sameType = st.me.types.some(function (t) { return lendInfo.indexOf(t) >= 0; });
      var rate = cmdRate(st.me.bond, sameType);
      if (rnd() * 100 < rate) {
        cmdPending = a.cmd;
        st.grit = clamp((st.grit || 0) + 15, 0, 100);
        st.log.push({ round: st.round, kind: 'cmd', text: '口令 · ' + a.cmd + ' · ' + (a.lend || '') + ' 成功' + (a.note ? '（' + a.note + '）' : '') });
        keyOf(st, '第' + st.round + '回合 口令·' + a.cmd + '·' + (a.lend || '') + ' 成功');
      } else {
        st.log.push({ round: st.round, kind: 'cmd', text: '口令失败：' + st.me.nick + ' 回头看了你一眼，没动' });
        // 口令失败且双方均未出手，不计一个交手回合。
        st.me.fatigue = clamp(st.me.fatigue + 3, 0, 100);
        return st;
      }
      if (a.cmd === '借地形') st.me.boost = 1.5;
      if (a.cmd === '佯攻') st.nextFirst = 'me';
      if (a.cmd === '遮挡' || a.cmd === '干扰') st.cmdPending = cmdPending;
      if (a.cmd === '遮挡') st.pendingDodge = true;
      if (a.cmd === '干扰') st.hitMod.foe -= 40;
    }

    // 我方这一手
    var myMove = null;
    if (a.kind === 'move' || a.kind === 'guard') {
      myMove = a.kind === 'guard' ? { name: '防守', type: '一般', tier: '防守' } : (st.me.moves[+a.move || 0] || st.me.moves[0]);
      if (myMove.tier === '绝' && st.me.hp < 40 && !st.me.gritBoost && st.tamerBuff !== 'surge') {
        st.log.push({ round: st.round, kind: 'warn', text: '体力不到 40%，用不出绝招，改成了普通出手' });
        myMove = { name: myMove.name, type: myMove.type, tier: '中' };
      }
    }

    // 对手这一手（AI 选招）
    var foeMove = pickFoeMove(st, rnd);

    // 出手顺序：阶段高先，同阶随机；佯攻/下回合先手可翻转
    var meFirst;
    if (st.nextFirst === 'me') { meFirst = true; st.nextFirst = null; }
    else {
      var pm = phaseCoef(st.me.stage), pf = phaseCoef(st.foe.stage);
      meFirst = pm > pf ? true : (pm < pf ? false : rnd() < 0.5);
    }
    var order = meFirst ? ['me', 'foe'] : ['foe', 'me'];
    st.me.guard = !!(myMove && myMove.tier === '防守');
    st.foe.guard = st.tamerBuff === 'disrupt' ? false : !!(foeMove && foeMove.tier === '防守');

    var acted = { me: false, foe: false };
    for (var i = 0; i < order.length && !st.over; i++) {
      var who = order[i];
      if (who === 'me' && myMove) { doSide(st, 'me', myMove, rnd); acted.me = true; }
      if (who === 'me' && !myMove && a.kind === 'command') { // 口令成功但没接招式
        st.log.push({ round: st.round, kind: 'cmd', text: st.me.nick + ' 按口令动了一下' });
      }
      if (who === 'foe') {
        if (st.pendingDodge) {
          st.pendingDodge = false;
          st.log.push({ round: st.round, kind: 'dodge', text: st.foe.nick + ' 这一下被挡住了，落空' });
        } else doSide(st, 'foe', foeMove, rnd);
        acted.foe = true;
      }
      checkDown(st);
      // 倒下的一方本回合不再反击；下一只在回合收尾上场。
      if (st.me.hp <= 0 || st.foe.hp <= 0) break;
    }

    // 收尾：先完成本回合清理，再判终局；只有继续交手才进入下一回合。
    if (!st.over) {
      st.me.fatigue = clamp(st.me.fatigue + 3, 0, 100);
      st.me.guard = false; st.foe.guard = false;
      st.me.sureHit = false; st.me.tamerCrit = false; st.me.gritBoost = false;
      if (st.me.syncHit) st.me.syncHit = false;
    }
    st.tamerBuff = null;
    if (acted.foe) st.foe.fatigue = clamp(st.foe.fatigue + 3, 0, 100);
    checkDown(st);
    if (!st.over && st.enableGritQte && st.me.hp <= 0 && canGritQte(st)) {
      st.gritPending = gritSpec(st);
      return st;
    }
    if (!st.over) settleTeams(st);
    if (!st.over && st.tamerIn) st.tamerStep = 'buff';
    if (!st.over && (acted.me || acted.foe || a.kind === 'switch' || a.kind === 'ball')) st.round++;
    if (st.over && !st.result) st.result = st.foe.hp <= 0 ? '胜' : '负';
    if (st.over) st.log.push({ round: st.round, kind: 'end', text: '对战结束：' + st.result });
    return st;
  };

  var checkDown = function (st) {
    if (st.phaseLocked) { st.foe.hp = Math.max(1, st.foe.hp); st.foe.down = false; }
    if (st.me.hp <= 0 && !st.me.down) {
      st.me.down = true;
      if (st.foe.defeated.indexOf(st.meIndex) < 0) st.foe.defeated.push(st.meIndex);
      st.log.push({ round: st.round, kind: 'down', text: st.me.nick + ' 倒下了' });
    }
    if (st.foe.hp <= 0 && !st.foe.down) {
      st.foe.down = true;
      if (st.me.defeated.indexOf(st.foeIndex) < 0) st.me.defeated.push(st.foeIndex);
      st.log.push({ round: st.round, kind: 'down', text: st.foe.nick + ' 倒下了' });
    }
  };

  // 一侧出手：命中判定 → 伤害 → 状态
  var doSide = function (st, who, mv, rnd) {
    var atk = who === 'me' ? st.me : st.foe;
    var def = who === 'me' ? st.foe : st.me;
    var guardOther = (who === 'me' ? st.foe : st.me).guard;
    // 违令（只查我方，羁绊说话）
    if (who === 'me' && rnd() < misfits(atk.bond)) {
      var roll = rnd();
      if (roll < 0.34) {
        var strong = atk.moves.slice().sort(function (x, y) { return (POWER[y.tier] || 0) - (POWER[x.tier] || 0); })[0];
        st.log.push({ round: st.round, kind: 'disobey', text: '违令：' + atk.nick + ' 没听，自己扑上去用 ' + strong.name });
        keyOf(st, '第' + st.round + '回合 违令：' + atk.nick + ' 自己扑上去用 ' + strong.name);
        mv = strong;
      } else if (roll < 0.67) {
        st.log.push({ round: st.round, kind: 'disobey', text: '违令：' + atk.nick + ' 站在原地没动' });
        keyOf(st, '第' + st.round + '回合 违令：' + atk.nick + ' 原地不动');
        return;
      } else {
        st.log.push({ round: st.round, kind: 'disobey', text: '违令：' + atk.nick + ' 后退了半步' });
        keyOf(st, '第' + st.round + '回合 违令：' + atk.nick + ' 后退半步');
        return;
      }
    }

    var cost = (who === 'me' && atk.gritBoost) ? 0 : (COST[mv.tier] || 5);
    atk.hp = clamp(atk.hp - cost, hpFloor(st, who), 100);

    var hitMod = who === 'me' ? st.hitMod.me : (st.hitMod.foe + (st.tamerBuff === 'disrupt' ? -25 : 0));
    var sure = (who === 'me' && atk.sureHit);
    var rate = sure ? 100 : hitRate({ fatigue: atk.fatigue, hitMod: hitMod });
    if (!(sure || rnd() * 100 < rate)) {
      st.log.push({ round: st.round, kind: 'miss', text: atk.nick + ' 的 ' + mv.name + ' 落空' });
      if (who === 'me') { atk.sureHit = false; atk.gritBoost = false; atk.tamerCrit = false; }
      return;
    }

    var critRoll = rnd();
    var crit = critRoll < 0.06 || (who === 'me' && !!atk.tamerCrit);
    var boost = (who === 'me' && atk.syncHit) ? 2 : (atk.boost || 1);
    if (who === 'me' && atk.gritBoost) boost *= 1.5;
    if (who === 'me' && st.tamerBuff === 'surge') boost *= 1.5;
    if (who === 'me' && st.foeTamerIn && st.round % 2 === 0) boost *= 0.85;
    if (who === 'foe' && st.foeTamerIn && st.round % 2 === 1) boost *= 1.15;
    if (who === 'foe' && st.tamerBuff === 'guard') boost *= 0.5;
    var r = damageOf({
      move: mv, attackerStage: atk.stage, defenderStage: def.stage,
      attackerLevel: atk.level, defenderLevel: def.level, attackerGrowth: atk.growth,
      attackerTypes: atk.types, defenderTypes: def.types, chart: st.chart || (root.P12BattleEngine && root.P12BattleEngine.chart),
      field: st.field, fieldTypes: st.fieldTypes, crit: crit, guard: guardOther, boost: boost, rnd: rnd()
    });
    var beforeHp = def.hp;
    if (beforeHp - r.dmg <= 0) def.lastOverkill = Math.max(0, r.dmg - beforeHp);
    def.hp = clamp(def.hp - r.dmg, hpFloor(st, who === 'me' ? 'foe' : 'me'), 100);
    r.dmg = beforeHp - def.hp;
    if (who === 'me' && r.dmg > 0) st.grit = clamp((st.grit || 0) + 10 + Math.round(r.dmg * 0.2), 0, 100);
    if (who === 'foe' && r.dmg > 0) {
      st.grit = clamp((st.grit || 0) + 14 + Math.round(r.dmg * 0.45), 0, 100);
      if (st.tamerBuff === 'guard' && (!st.tamerHurt || st.tamerHurt === '无')) {
        st.tamerHurt = '轻伤';
        st.log.push({ round: st.round, kind: 'tamer', text: '你替 ' + st.me.nick + ' 卸去大半冲击，手臂擦伤挂彩！' });
        keyOf(st, '第' + st.round + '回合 驯兽师肉身替挡挂彩');
      }
    }
    if (who === 'me' && atk.boost) atk.boost = null; // 借地形的加成只管下一招，用掉就没了
    if (who === 'me' && atk.syncHit) atk.syncHit = false;
    if (who === 'me') { atk.sureHit = false; atk.gritBoost = false; atk.tamerCrit = false; }
    var terrainTag = r.dmg > 0 && r.terrainApplied ? (r.terrainFactor > 1 ? '地形+' : '地形−') : '';
    var damageText = atk.nick + ' 的 ' + mv.name + '：' + def.nick + ' −' + r.dmg + '%';
    var suffix = (crit ? '（会心）' : '') + (r.typeEff >= 2 ? '（' + effWord(r.typeEff) + '）' : (r.typeEff < 1 ? '（' + effWord(r.typeEff) + '）' : ''));
    var txt = damageText + (terrainTag ? '（' + terrainTag + '）' : '') + suffix;
    st.log.push({ round: st.round, kind: 'hit', text: txt, damageText: damageText, suffix: suffix,
      side: who, damage: r.dmg, terrain: r.terrain, terrainFactor: r.terrainFactor, terrainTag: terrainTag });
    if (terrainTag && !st.terrainEvent) {
      st.terrainEvent = { round: st.round, terrain: r.terrain, text: '第' + st.round + '回合 ' + mv.name + ' 受' + TERRAIN[r.terrain].name + (r.terrainFactor > 1 ? '加强' : '削弱') };
      keyOf(st, st.terrainEvent.text);
    }
    if (crit) keyOf(st, '第' + st.round + '回合 ' + mv.name + ' 会心');
    if (r.typeEff >= 2) keyOf(st, '第' + st.round + '回合 ' + mv.name + ' 效果拔群');
    if (def.hp <= 0) keyOf(st, '第' + st.round + '回合 ' + mv.name + ' 收尾');
    if (mv.tier === '绝') atk.fatigue += 8;
    if (mv.tier === '绝') atk.hp = clamp(atk.hp - 0, 0, 100);
  };

  // 对手选招：按打法加权，克制招 70% 优先，血少考虑换兽
  var pickFoeMove = function (st, rnd) {
    var foe = st.foe;
    var scored = foe.moves.map(function (m) {
      var eff = effOf(st.chart || (root.P12BattleEngine && root.P12BattleEngine.chart), m.type, st.me.types);
      var w = 1;
      if (foe.style === '抢攻') w = ({ '轻': 2, '中': 3, '重': 4, '绝': 3, '状态': 1, '防守': 1 })[m.tier] || 1;
      else if (foe.style === '稳守') w = ({ '轻': 2, '中': 2, '重': 2, '绝': 1, '状态': 2, '防守': 5 })[m.tier] || 1;
      else if (foe.style === '消耗') w = ({ '轻': 2, '中': 2, '重': 1, '绝': 1, '状态': 6, '防守': 2 })[m.tier] || 1;
      else if (foe.style === '控场') w = ({ '轻': 2, '中': 2, '重': 1, '绝': 1, '状态': 5, '防守': 3 })[m.tier] || 1;
      if (eff >= 2) w *= 3;
      if (eff === 0) w *= 0.05;
      return { m: m, w: w, eff: eff };
    });
    var best = scored.slice().sort(function (x, y) { return y.eff - x.eff; })[0];
    if (best && best.eff >= 2 && rnd() < 0.7) return best.m;
    var total = scored.reduce(function (s, x) { return s + x.w; }, 0);
    var roll = rnd() * total;
    for (var i = 0; i < scored.length; i++) { roll -= scored[i].w; if (roll <= 0) return scored[i].m; }
    return scored[0].m;
  };

  // ---------- 战报胶囊 ----------
  var report = function (st, before) {
    var prior = before || {}, my = st.meTeam || [st.me], foes = st.foeTeam || [st.foe];
    var key = st.key.slice(-3).map(function (k) { return k.text; });
    if (!key.length) key = st.log.filter(function (x) { return x.kind === 'hit'; }).slice(-1).map(function (x) { return '第' + x.round + '回合 ' + x.text; });
    // 首次地形效果必须出现在战报，仍保持最多3条关键。
    if (st.terrainEvent) key = [st.terrainEvent.text].concat(key.filter(function (x) { return x !== st.terrainEvent.text; }).slice(-2));
    var won = /^胜/.test(st.result || ''), surrendered = /认输/.test(st.result || '');
    function account(b, i, enemy) {
      var entered = b.entered == null ? i === 0 : b.entered, opponents = enemy ? my : foes;
      var victory = enemy ? !won : won;
      var factor = victory ? 15 : (surrendered && !enemy ? 2 : 5);
      var exp = 0, ranks = phaseRank(b.stage), faced = b.faced || [0], defeated = b.defeated || [];
      if (entered && st.over && st.result !== '逃脱') faced.forEach(function (index) {
        var foe = opponents[index]; if (!foe) return;
        var higher = phaseRank(foe.stage), multiplier = ranks != null && higher === ranks + 1 ? 1.5 : 1;
        exp += (levelOf(foe.startLevel == null ? foe.level : foe.startLevel) * factor + (defeated.indexOf(index) >= 0 ? levelOf(foe.startLevel == null ? foe.level : foe.startLevel) * 5 : 0)) * multiplier;
      });
      exp = Math.floor(exp);
      var growth = entered && st.over && st.result !== '逃脱' ? (victory ? 4 : 2) : 0;
      var startGrowth = b.startGrowth == null ? +b.growth || 0 : b.startGrowth;
      var growthEnd = clamp(startGrowth + growth, 0, 100);
      var startLevel = b.startLevel == null ? levelOf(b.level) : b.startLevel;
      var progression = advanceLevel({ stage: b.stage, level: startLevel, exp: b.startExp == null ? b.exp : b.startExp }, exp);
      var hpStart = b.startHp == null ? (enemy ? prior.foeHp : prior.meHp) : b.startHp;
      if (hpStart == null) hpStart = b.maxHp;
      var fatigueStart = b.startFatigue == null ? (!enemy && prior.fatigue != null ? prior.fatigue : 0) : b.startFatigue;
      var injury = b.hp < 30 ? '重伤' : (b.hp < 70 ? '轻伤' : '无');
      var injuries = ['无','轻伤','重伤','濒死'];
      if (injuries.indexOf(b.injury) > injuries.indexOf(injury)) injury = b.injury;
      var bond = (entered && st.over ? (victory ? 2 : 1) : 0) + (!enemy ? (+b.bondBonus || 0) : 0);
      return {
        '队伍位置': b.sourceIndex == null ? i : b.sourceIndex, '昵称': b.nick, '物种': b.species || b.nick, '阶段': b.stage, '出场': entered,
        '体力': hpStart + '→' + b.hp, '伤势': injury, '疲劳': '+' + Math.max(0, b.fatigue - fatigueStart), '疲劳终值': b.fatigue,
        '经验': '+' + exp, '经验增量': exp, '经验当前': progression.exp, '升级所需': progression.expNeed,
        'Lv': progression.level, '战前Lv': startLevel, '瓶颈': progression.bottleneck,
        '成长': '+' + (growthEnd - startGrowth), '成长终值': growthEnd,
        '羁绊': '+' + bond, '羁绊终值': clamp((+b.bond || 0) + bond, 0, 100), '倒下': b.hp <= 0
      };
    }
    var accounts = my.map(function (b, i) { return account(b, i, false); });
    var upgrades = accounts.filter(function (b) { return b['Lv'] > b['战前Lv']; }).map(function (b) { return { '异兽': b['昵称'], '从': b['战前Lv'], '到': b['Lv'] }; });
    var out = {
      '名称': st.name, '结果': st.result || '负', '回合': Math.max(1, st.round - (st.over ? 0 : 1)), '关键': key, '地形': terrainOf(st.field),
      '我方': accounts, '对方': foes.map(function (b, i) { return account(b, i, true); }),
      '同调': !!st.syncUsed, '道具': st.items.slice(), '背包': (st.bag || []).map(function (b) { return { name: b.name, qty: b.qty }; }),
      '升级': upgrades, '升级块': upgrades.map(function (b) { return '[升级]' + JSON.stringify(b) + '[/升级]'; }),
      '结契': st.capture ? '成功' : '无', '新异兽': st.capture ? Object.assign({}, st.capture) : null,
      '备注': (st.notes || []).slice()
    };
    if (st.gritRevives > 0) out['燃魂再起'] = st.gritRevives;
    if (st.tamerIn) out['驯兽师参战'] = { '我方下场': true, '对方下场': !!st.foeTamerIn, '驯兽师挂彩': st.tamerHurt || '无' };
    return out;
  };

  var toBlock = function (obj) { return '[对战结算]' + JSON.stringify(obj) + '[/对战结算]'; };

  var api = {
    PHASE: PHASE, POWER: POWER, COST: COST, MOVES: MOVES,
    TERRAIN: TERRAIN, terrainOf: terrainOf, terrainFactor: terrainFactor, terrainLabel: terrainLabel,
    phaseRank: phaseRank, phaseCoef: phaseCoef, lookupMove: lookupMove, normMove: normMove, effOf: effOf, effWord: effWord,
    damageOf: damageOf, hitRate: hitRate, misfits: misfits, cmdRate: cmdRate,
    init: init, act: act, report: report, toBlock: toBlock,
    canTamerJoin: canTamerJoin, canGritQte: canGritQte, gritSpec: gritSpec, gritRevive: gritRevive, gritFail: gritFail,
    levelCap: levelCap, advanceLevel: advanceLevel, evolutionReady: evolutionReady, afterEvolution: afterEvolution,
    captureRate: captureRate, reorderTeam: reorderTeam,
    chart: null, // 由装载方塞 type-chart
    setChart: function (c) { api.chart = c; }
  };
  root.P12BattleEngine = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);

;
// WT-v7 明亮少年漫机能对战台 & 燃魂弹幕 QTE & 驯兽师辅助共斗 & 定格结算海报（纯 DOM 视图层，计算全在 engine）。
(function (root) {
  'use strict';

  var CLS = {
    '一般': '', '草': 'gra', '火': 'fire', '水': 'wat', '电': 'ele', '冰': 'ice', '格斗': 'fgt', '毒': 'poi',
    '地面': 'gnd', '飞行': 'fly', '超能力': 'psy', '虫': 'bug', '岩石': 'roc', '幽灵': 'gho', '龙': 'dra',
    '恶': 'dar', '钢': 'ste', '妖精': 'fai', '机械': 'mec', '侵蚀': 'ero', '噬血': 'san'
  };
  var TYPE_COLOR = {
    '一般': '#94a3b8', '草': '#16a34a', '火': '#ff6b2b', '水': '#1da1f2', '电': '#f59e0b', '冰': '#00c2ff',
    '格斗': '#e11d48', '毒': '#9333ea', '地面': '#d97706', '飞行': '#6366f1', '超能力': '#ec4899', '虫': '#65a30d',
    '岩石': '#a16207', '幽灵': '#4f46e5', '龙': '#4338ca', '恶': '#334155', '钢': '#64748b', '妖精': '#f472b6',
    '机械': '#0284c7', '侵蚀': '#4d7c0f', '噬血': '#be123c'
  };
  var ICON_KEY = {
    '一般': 'type-normal', '草': 'type-grass', '火': 'type-fire', '水': 'type-water', '电': 'type-electric',
    '冰': 'type-ice', '格斗': 'type-fighting', '毒': 'type-poison', '地面': 'type-ground', '飞行': 'type-flying',
    '超能力': 'type-psychic', '虫': 'type-bug', '岩石': 'type-rock', '幽灵': 'type-ghost', '龙': 'type-dragon',
    '恶': 'type-dark', '钢': 'type-steel', '妖精': 'type-fairy', '机械': 'type-machine', '侵蚀': 'type-erosion',
    '噬血': 'type-blood'
  };

  var ROARS = [
    '「别小看我们的羁绊啊混蛋！！！」',
    '「站起来啊——把那家伙统统撞碎！！」',
    '「给我撑住啊啊啊啊啊！！！」',
    '「这一击，是我们两个人的全力一击！！」',
    '「只要我还没倒下，你也绝不会输！！」',
    '「把极限给我撕碎啊啊啊——！！」'
  ];
  var MEMORIES = [
    '「第一次结契那天……就发过誓要一起走下去吧！！」',
    '「说好要一起去全国大赛看最高处的风景啊——！！」',
    '「听见了……绝不会在这里倒下！！」',
    '「后背交给你了，老伙计！！」'
  ];
  var LIVES = [
    ['[LIVE 9999+]', '卧槽 0 血硬扛下来没倒？！！'],
    ['[场边沸腾]', '快看地面！！它的脚爪死死扣住场地站起来了！！'],
    ['[弹幕助威]', '点爆屏幕啊啊啊！！给我冲！！！'],
    ['[全场起立]', '裁判还没落旗！！气势槽直接爆表了！！'],
    ['[热搜第一]', '燃起来了！！这就是契约之城的羁绊吗！！']
  ];

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  };
  var normType = function (t) { return String(t || '').trim().replace(/属性$/, ''); };
  var iconUrlOf = function (t) {
    var icons = root.P12_UI_ICONS || {};
    var k = ICON_KEY[normType(t)];
    return (k && icons[k]) || '';
  };
  var tag = function (t) {
    var n = normType(t), u = iconUrlOf(n);
    if (u) return '<img class="v7-type-ico" src="' + esc(u) + '" alt="' + esc(n) + '" title="' + esc(n) + '">';
    return '<span class="t ' + (CLS[n] || '') + '"><i>' + esc(n || '一般') + '</i></span>';
  };

  var host = null; // {el, doc, cbs}
  var st = null;
  var opts = { spriteOf: null, artOf: null, tamerArtOf: null, flipOf: null, onFlipToggle: null, bg: null, team: [] };
  var localFlips = {}; // fallback flip map when host doesn't supply flipOf
  var domImgCache = {}; // { key: HTMLImageElement } 跨回合复用已解码立绘，彻底根除闪烁
  var qteRuntime = null; // { raf, startAt, spec, gauge, hits, perfects, trackCursor, done }

  var stopQte = function () {
    if (qteRuntime && qteRuntime.raf) cancelAnimationFrame(qteRuntime.raf);
    qteRuntime = null;
  };

  var ensure = function (doc) {
    if (host && host.el && host.el.isConnected) return host.el;
    var el = doc.createElement('div');
    el.id = 'p12battle';
    el.innerHTML = '<style></style><div class="b-stage"></div>';
    var stl = el.querySelector('style');
    if (stl && root.P12_BATTLE_CSS) stl.textContent = root.P12_BATTLE_CSS;
    doc.body.appendChild(el);
    host = { el: el, doc: doc, cbs: host ? host.cbs : null };
    return el;
  };

  // ---------- 朝向智能校准（左下我方朝右 R，右上敌方朝左 L，对称/正面 N 不翻） ----------
  var userFlipOf = function (species, beast) {
    var key = String((beast && (beast.species || beast.nick)) || species || '').trim();
    if (!key) return false;
    if (opts.flipOf) {
      try { return !!opts.flipOf(key, beast); } catch (e) {}
    }
    return !!localFlips[key];
  };
  var nativeDirOf = function (species, imgEl) {
    var dirs = root.P12_SPRITE_DIRS || {};
    var artKind = imgEl && imgEl.getAttribute ? (imgEl.getAttribute('data-p12-art-kind') || '') : '';
    if (artKind === 'silhouette') {
      var tid = imgEl.getAttribute('data-p12-type-id') || 'normal';
      return dirs['__sil:' + tid] || 'N';
    }
    if (artKind === 'generated' || artKind === 'override') return 'N';
    var k = String(species || '').trim();
    return dirs[k] || 'N';
  };
  var applyFacing = function (imgEl, side, species, beast) {
    if (!imgEl || !imgEl.classList) return;
    if (side !== 'me' && side !== 'foe') {
      imgEl.classList.toggle('is-flipped', userFlipOf(species, beast));
      return;
    }
    var dir = nativeDirOf(species, imgEl);
    var autoFlip = false;
    if (dir === 'L' || dir === 'R') {
      autoFlip = (side === 'me' && dir === 'L') || (side === 'foe' && dir === 'R');
    }
    var manual = userFlipOf(species, beast);
    imgEl.classList.toggle('is-flipped', manual ? !autoFlip : autoFlip);
  };

  // ---------- 立绘生成与跨回合无闪烁缓存键 ----------
  var cacheKeyOf = function (side, beast, name) {
    return side + '::' + String((beast && (beast.species || beast.nick)) || name || '') + '::' + String(beast && beast.sourceIndex != null ? beast.sourceIndex : 0);
  };
  var artOf = function (name, side, beast) {
    var a = null;
    try { a = opts.artOf ? opts.artOf(name, side, beast) : null; } catch (e) {}
    if (!a || !a.url) {
      try {
        var u = opts.spriteOf && opts.spriteOf(name);
        if (u) a = { url: u, mode: 'transparent' };
      } catch (e) {}
    }
    if (!a || !a.url) return '';
    var sp = String((beast && (beast.species || beast.nick)) || name || '');
    var ckey = cacheKeyOf(side, beast, sp);
    var extraCls = (a.mode === 'card' ? ' is-card' : '') + (side === 'me' && beast && beast.gritBoost ? ' is-overdrive' : '');
    return '<img class="portrait-image' + extraCls + '"' +
      (a.candidates && a.candidates.length ? '' : ' src="' + esc(a.url) + '"') +
      ' alt="' + esc((beast && (beast.nick || beast.species)) || name) + '"' +
      ' data-p12-ckey="' + esc(ckey) + '"' +
      ' data-p12-side="' + esc(side) + '"' +
      ' data-p12-species="' + esc(sp) + '"' +
      ' data-creature-chain="' + esc(JSON.stringify(a.candidates || [])) + '"' +
      ' data-portrait-mode="' + (a.mode === 'card' ? 'card' : 'transparent') + '">';
  };

  // 驯兽师参战视觉（铁律：只有 100% 完整全身立绘才允许踩上圆盘；否则走斜切头像横幅，绝不用半身截断图！）
  var tamerVisualHtml = function (side) {
    var joined = side === 'me' ? !!st.tamerIn : !!st.foeTamerIn;
    if (!joined) return { fullImg: '', badge: '' };
    var trainerName = side === 'me' ? (opts.playerName || '我方驯兽师') : (st.foe.trainer || '对方驯兽师');
    var info = null;
    try { info = opts.tamerArtOf ? opts.tamerArtOf(side, trainerName) : null; } catch (e) {}
    var fullUrl = info && info.fullUrl ? String(info.fullUrl) : '';
    var headUrl = info && info.headUrl ? String(info.headUrl) : '';
    if (fullUrl) {
      return {
        fullImg: '<img class="tamer-full-spr" src="' + esc(fullUrl) + '" alt="' + esc(trainerName) + '">',
        badge: side === 'me'
          ? '<span class="bond-link-tag">★ 驯兽师 ＆ ' + esc(st.me.nick) + ' 同盘协战中</span>'
          : '<span class="bond-link-tag">⚠ 敌方驯兽师同盘干扰</span>'
      };
    }
    return {
      fullImg: '',
      badge: '<div class="tamer-assist-cutin">' +
        (headUrl ? '<img src="' + esc(headUrl) + '" alt="">' : '') +
        '<span>' + (side === 'me' ? '★ 驯兽师场内协战掩护中' : '⚠ ' + esc(trainerName) + ' 场内压迫干扰') + '</span></div>'
    };
  };

  // 14 段斜切装甲体力槽
  var hpSegsHtml = function (hp) {
    var pct = Math.max(0, Math.min(100, Math.round(+hp || 0)));
    var lit = pct <= 0 ? 0 : Math.max(1, Math.round(pct / 100 * 14));
    var cls = pct < 30 ? ' low' : (pct < 55 ? ' warn' : '');
    var s = '';
    for (var i = 0; i < 14; i++) s += '<i' + (i < lit ? ' class="full"' : '') + '></i>';
    return '<div class="v7-tp-hpwrap' + cls + '">' + s + '</div>';
  };
  var ballsHtml = function (team) {
    var list = team && team.length ? team : [{}];
    var dots = '';
    for (var i = 0; i < Math.max(3, list.length); i++) {
      var b = list[i];
      var alive = b && (+b.hp > 0 || b.hp == null);
      dots += '<s' + (b && alive ? ' class="alive"' : '') + '></s>';
    }
    return '<span class="v7-balls">' + dots + '</span>';
  };

  var plate = function (side, x) {
    var hp = Math.max(0, Math.round(x.hp == null ? 100 : x.hp));
    var team = side === 'me' ? st.meTeam : st.foeTeam;
    var tamerPrefix = (side === 'me' && st.tamerIn)
      ? '我方驯兽师' + (st.tamerHurt && st.tamerHurt !== '无' ? '（' + st.tamerHurt + '）' : '') + ' ＆ '
      : (side === 'foe' && st.foeTamerIn ? (x.trainer || '对手') + ' ＆ ' : '');
    var rightFoot = side === 'me'
      ? (x.gritBoost ? '<b class="v7-overdrive-tag">🔥 燃魂×1.5必中</b> · ' : '') + '羁绊 ' + esc(x.bondTier || x.bond || '—') + ' ｜ HP ' + hp + '%'
      : 'HP ' + hp + '% · 疲劳 ' + (x.fatigue || 0);
    return '<div class="plate v7-ceramic-plate">' +
      '<div class="v7-tp-row1">' +
        '<span class="v7-type-icons">' + (x.types || []).map(tag).join('') + '</span>' +
        '<div class="nm">' + esc(tamerPrefix + (x.nick || x.species || '对手')) +
          (x.stage ? ' <span class="v7-tp-stg">' + esc(x.stage) + '</span>' : '') +
        '</div>' +
        (x.level == null ? '' : '<small class="v7-tp-lv">Lv ' + esc(x.level) + '</small>') +
      '</div>' +
      hpSegsHtml(hp) +
      '<div class="v7-tp-foot">' + ballsHtml(team) + '<span>' + rightFoot + '</span></div>' +
    '</div>';
  };

  // 车轮战队伍小牌（保持开战前可拖拽排顺序）
  var orderable = function () {
    return !!(st && st.meTeam && st.meTeam.length > 1 && (!st.log || !st.log.length) && (st.round || 1) <= 1);
  };
  var strip = function (side, team, idx) {
    if (!team || team.length <= 1) return '';
    var canDrag = side === 'me' && orderable();
    return '<div class="strip" data-p12strip="' + side + '">' +
      team.map(function (b, i) {
        var hp = Math.max(0, Math.round(b.hp == null ? 100 : b.hp));
        var on = i === idx, down = hp <= 0;
        return '<span class="chip' + (on ? ' on' : '') + (down ? ' down' : '') + '" data-p12chip="' + i + '"' +
          (canDrag ? ' draggable="true"' : '') + '>' +
          esc(b.nick || b.species || '未名') +
          '<small>Lv ' + (b.level == null ? '—' : esc(b.level)) + '</small>' +
          '<em' + (hp < 30 ? ' class="low"' : '') + '>' + hp + '%</em>' +
        '</span>';
      }).join('') + '</div>';
  };

  // 右下指令区：当驯兽师在场且处于 buff 步时先显示 3 项辅助/捣乱芯片，选完立刻无缝切回异兽 4 招！
  var rightCommandHtml = function () {
    var E = root.P12BattleEngine;
    if (st.tamerIn && st.tamerStep === 'buff') {
      var canSurge = (+st.grit || 0) >= 80;
      return '<div class="tamer-step-head"><span>👊 第 1 步：选择本回合驯兽师辅助 / 捣乱（不耗回合，选完异兽出招）</span>' +
        '<button type="button" data-p12tbuff="skip">直接选招 ›</button></div>' +
        '<div class="coop-grid">' +
          '<button type="button" class="coop-card" data-p12tbuff="guard">' +
            '<b>🛡️ 肉身冲前替挡</b>' +
            '<small>' + esc(st.me.nick) + ' 本轮减伤 50% · 气势 +12 · 驯兽师可能擦伤挂彩</small>' +
          '</button>' +
          '<button type="button" class="coop-card" data-p12tbuff="disrupt">' +
            '<b>👊 近身捣乱破防</b>' +
            '<small>破除敌方防守并降命中 25 · ' + esc(st.me.nick) + ' 本轮必出会心！</small>' +
          '</button>' +
          '<button type="button" class="coop-card ult' + (canSurge ? '' : ' locked') + '" data-p12tbuff="surge">' +
            '<b>🔥 羁绊燃魂鼓舞（需 80% 气势 · 当前 ' + Math.round(+st.grit || 0) + '%）</b>' +
            '<small>倾注 80% 气势共鸣！' + esc(st.me.nick) + ' 本轮必中、威力×1.5、无视绝技血线且赛后羁绊大涨！</small>' +
          '</button>' +
        '</div>';
    }
    var armedNote = '';
    if (st.tamerIn) {
      var buffNames = { guard: '🛡️ 肉身冲前替挡（减伤50%）', disrupt: '👊 近身捣乱破防（必出会心）', surge: '🔥 羁绊燃魂鼓舞（必中×1.5）' };
      armedNote = '<div class="tamer-armed-bar"><span>' +
        (st.tamerBuff ? '★ 已就绪：' + buffNames[st.tamerBuff] + ' ▸ 请点选异兽招式' : '★ 第 2 步：指挥 ' + esc(st.me.nick) + ' 施展招式') +
        '</span>' + (!st.tamerBuff ? '<button type="button" data-p12tstep="buff">‹ 返回选辅助</button>' : '') + '</div>';
    }
    var moves = (st.me.moves || []).slice(0, 4);
    var cmd = moves.map(function (m, i) {
      var eff = E ? E.effOf(E.chart, m.type, st.foe.types) : 1;
      var mc = TYPE_COLOR[normType(m.type)] || '#00c2ff';
      var cost = st.me.gritBoost ? 0 : ((E && E.COST[m.tier]) || 5);
      return '<div class="mvb v7-mv-blade' + (eff >= 2 ? ' eff' : '') + '" data-p12mv="' + i + '" style="--mc:' + mc + '">' +
        tag(m.type) +
        '<div class="mv-main"><b>' + esc(m.name) + '</b>' +
        '<small>' + esc(m.tier) + ' · 体力 −' + cost + '</small></div>' +
        (eff >= 2 ? '<em class="eff-chip">▲ 克制!</em>' : '') +
      '</div>';
    }).join('');
    return armedNote + '<div class="cmd">' + cmd + '</div>';
  };

  // 绝境燃魂应援 QTE 满屏三层弹幕叠层 HTML
  var qteOverlayHtml = function () {
    if (!st.gritPending) return '';
    var spec = st.gritPending;
    var info = null;
    try { info = opts.tamerArtOf ? opts.tamerArtOf('me', opts.playerName || '') : null; } catch (e) {}
    var headUrl = info && info.headUrl ? String(info.headUrl) : '';
    var dangerTxt = '⚠ ' + (spec.reviveCount > 1 ? spec.reviveCount + '次濒死 · ' : '绝境濒死 · ') +
      (spec.overkill >= 15 ? '重创流速 ×' + spec.speedMult : '倒计时 ' + spec.durationSec.toFixed(2) + 's');
    return '<div class="v7-qte-overlay" data-p12qte-tap="1">' +
      '<div class="overdrive-flare"></div>' +
      '<div class="manga-speedlines"></div>' +
      '<div class="pillar-outer"></div>' +
      '<svg class="lightning-svg" viewBox="0 0 390 540" fill="none">' +
        '<path d="M185 0 L145 145 L208 162 L132 325 L196 334 L152 485" stroke="#FFD000" stroke-width="8" stroke-linejoin="miter"/>' +
        '<path d="M185 0 L145 145 L208 162 L132 325 L196 334 L152 485" stroke="#FFFFFF" stroke-width="3.5"/>' +
        '<path d="M258 20 L216 178 L266 196 L208 370 L248 470" stroke="#00E5FF" stroke-width="6"/>' +
        '<path d="M98 90 L134 220 L88 248 L142 420" stroke="#FF4D00" stroke-width="5"/>' +
      '</svg>' +
      '<div class="tamer-cutin">' +
        (headUrl ? '<img src="' + esc(headUrl) + '" alt="" onerror="this.style.display=\'none\'">' : '') +
        '<div class="tamer-cutin-txt">' +
          '<small>⚡ BOND OVERDRIVE // 极限同频嘶吼</small>' +
          '<b data-qte-shout="1">别小看我们的羁绊啊混蛋——站起来啊 ' + esc(st.me.nick) + '！！</b>' +
        '</div>' +
      '</div>' +
      '<div class="combo-explosion">' +
        '<div class="combo-num"><span data-qte-hits="1">1</span><small>HITS!!</small></div>' +
        '<div class="combo-sync" data-qte-sync="1">🔥 羁绊同步率 120%!!</div>' +
      '</div>' +
      '<div class="danmaku-layer" data-qte-dm="1"></div>' +
      '<div class="qte-bottom-rig">' +
        '<div class="qte-timer-box">' +
          '<span class="qte-danger-tag">' + esc(dangerTxt) + '</span>' +
          '<div class="qte-clock"><span data-qte-sec="1">' + spec.durationSec.toFixed(2) + '</span><small>s</small></div>' +
          '<div class="qte-decay-note">倒得越惨流速越快！狂点屏幕或按空格炸出弹幕！</div>' +
        '</div>' +
        '<div class="qte-bar-zone">' +
          '<div class="qte-bar-head">' +
            '<b>🔥 疯狂连击屏幕怒吼充能！满槽锁血再起＋下击威力 ×1.5 必中！</b>' +
            '<span data-qte-pct="1">' + spec.startGauge + '%</span>' +
          '</div>' +
          '<div class="qte-mega-track"><div class="qte-mega-fill" data-qte-fill="1" style="width:' + spec.startGauge + '%"></div></div>' +
          '<div class="qte-sub-hint" data-qte-hint="1">⚡ 踩中青色缩圈甜区触发【PERFECT 暴击双倍充能】！</div>' +
        '</div>' +
        '<div class="qte-ring-btn">' +
          '<span class="perfect-pop" data-qte-pop="1">PERFECT!!</span>' +
          '<div class="ring-shrinking" data-qte-ring="1"></div>' +
          '<div class="ring-sweetspot"></div>' +
          '<div class="ring-core"><b>狂点!</b><small>BURST</small></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  };

  var fightHtml = function () {
    var me = st.me, foe = st.foe;
    var E = root.P12BattleEngine;
    var terrainId = E && E.terrainOf ? E.terrainOf(st.field) : 'arena';
    var terrainText = E && E.terrainLabel ? E.terrainLabel(st.field) : '室内道馆｜标准场地 · 无属性增减';
    var canJoin = E && E.canTamerJoin ? E.canTamerJoin(st) : false;
    var rStr = st.round < 10 ? '0' + st.round : String(st.round);

    var head = '<div class="battlehead"><em>ROUND ' + rStr + '</em><span>' + esc(st.name) + ' · 第 ' + st.round + ' 回合</span></div>' +
      (st.tamerIn ? '<span class="v7-brawl-pill">👊 驯兽师已入场共斗</span>' : '');

    var strips = '';
    if ((st.foeTeam && st.foeTeam.length > 1) || (st.meTeam && st.meTeam.length > 1)) {
      var sFoe = strip('foe', st.foeTeam, st.foeIndex);
      var sMe = strip('me', st.meTeam, st.meIndex);
      var hint = orderable() ? '<div class="drag-hint">开战前可拖动我方小牌排出战顺序（不耗回合）</div>' : '';
      strips = '<div class="battle-teams"><div class="battle-teams-row">' + sFoe + sMe + '</div>' + hint + '</div>';
    }

    var field = '<div class="field terrain-plate" data-terrain="' + esc(terrainId) + '">' +
      '<span class="hl">' + esc(terrainText) + '</span>' +
      (st.cmdLeft < 3 ? '<span>口令剩 ' + st.cmdLeft + '</span>' : '') +
      (st.phaseLocked ? '<span>低两阶或以上 · 对手体力最低1 · 可认输</span>' : '') +
    '</div>';

    var last = st.log.slice(-3).map(function (x) {
      if (x.kind === 'hit' && x.terrainTag && x.damageText) {
        return '<div class="terrain-hit">' + esc(x.damageText) +
          ' <small class="terrain-mark ' + (x.terrainFactor > 1 ? 'is-boost' : 'is-weaken') + '" data-terrain-effect="' + (x.terrainFactor > 1 ? 'boost' : 'weaken') + '">' + esc(x.terrainTag) + '</small>' +
          esc(x.suffix || '') + '</div>';
      }
      return '<div>' + esc(x.text) + '</div>';
    }).join('');

    var tMe = tamerVisualHtml('me');
    var tFoe = tamerVisualHtml('foe');
    var meDiscCls = st.me.gritBoost ? 'me-disc disc-overdrive' : (st.tamerIn ? 'me-disc disc-duo' : 'me-disc');
    var foeDiscCls = st.foeTamerIn ? 'foe-disc disc-duo' : 'foe-disc';
    var stageScaleOf = function (stg) {
      var s = String(stg || '');
      if (/幼年/.test(s)) return 'xs';
      if (/成长/.test(s)) return 'sm';
      if (/成熟/.test(s)) return 'md';
      return 'lg';
    };

    var gritVal = Math.max(0, Math.min(100, Math.round(+st.grit || 0)));
    var gritNote = gritVal >= 80
      ? gritVal + '% · 气势充沛！濒死可触发弹幕QTE' + (st.tamerIn ? '｜可放燃魂鼓舞' : '')
      : gritVal + '% · 交锋蓄势中（羁绊≥35濒死触发满屏弹幕应援QTE）';

    var bg = opts.bg
      ? '<img class="battle-background" data-p12-bg="' + esc(opts.bg) + '" src="' + esc(opts.bg) + '" alt=""><div class="terrain-shade" aria-hidden="true"></div>'
      : '<div class="default-sky-decor" aria-hidden="true"></div>';

    return bg +
      '<header class="v7-bs-topbar">' + head + strips + field + '</header>' +
      '<div class="v7-arena-grid">' +
        '<div class="v7-col-left">' +
          '<div class="foe v7-hud-foe">' +
            plate('foe', foe) +
            '<div class="battle-log">' + (last || '第一回合，看你的。') + '</div>' +
          '</div>' +
          '<div class="pn me v7-pos-me' + (tMe.fullImg ? ' is-duo' : '') + '">' +
            tMe.badge +
            '<div class="v7-disc ' + meDiscCls + '"></div>' +
            '<div class="stage-pair' + (tMe.fullImg ? ' has-tamer' : '') + '" data-stage-scale="' + stageScaleOf(me.stage) + '">' +
              tMe.fullImg +
              '<div class="beast" data-emblem-label="' + esc((me.nick || me.species || '我').slice(0, 1)) + '">' + artOf(me.species || me.nick, 'me', me) + '</div>' +
            '</div>' +
            '<button type="button" class="flip-btn" data-p12flip="me" title="左右翻转校准立绘朝向">⇄</button>' +
          '</div>' +
        '</div>' +
        '<div class="v7-col-right">' +
          '<div class="pn foe v7-pos-foe' + (tFoe.fullImg ? ' is-duo' : '') + '">' +
            tFoe.badge +
            '<div class="v7-disc ' + foeDiscCls + '"></div>' +
            '<div class="stage-pair' + (tFoe.fullImg ? ' has-tamer' : '') + '" data-stage-scale="' + stageScaleOf(foe.stage) + '">' +
              tFoe.fullImg +
              '<div class="beast" data-emblem-label="' + esc((foe.species || foe.nick || '敌').slice(0, 1)) + '">' + artOf(foe.species || foe.nick, 'foe', foe) + '</div>' +
            '</div>' +
            '<button type="button" class="flip-btn" data-p12flip="foe" title="左右翻转校准立绘朝向">⇄</button>' +
          '</div>' +
          '<div class="me v7-bs-rightstack">' +
            plate('me', me) +
            rightCommandHtml() +
          '</div>' +
        '</div>' +
      '</div>' +
      '<footer class="v7-bottom-bar">' +
        '<div class="side">' +
          '<div data-p12side="cmd">口令 · ' + st.cmdLeft + '</div>' +
          '<div class="sync' + (st.syncUsed ? ' used' : '') + '" data-p12side="sync">同调 ×' + (st.syncUsed ? 0 : 1) + '</div>' +
          (canJoin
            ? '<button type="button" class="tamer-join-btn' + (st.tamerIn ? ' active' : '') + '" data-p12tamer="join">' + (st.tamerIn ? '★ 共斗中' : '👊 驯兽师上阵') + '</button>'
            : '<span class="v7-formal-lock" title="道馆与联赛等正规赛事严禁驯兽师踏入战圈">⚖ 正规赛禁入场</span>') +
          ((st.meTeam && st.meTeam.length > 1) ? '<button type="button" data-p12side="switch">换兽</button>' : '') +
          (st.wild ? '<button type="button" data-p12side="ball">投球</button>' : '') +
          '<button type="button" data-p12side="surrender">认输</button>' +
        '</div>' +
        '<div class="bottom-grit-bar">' +
          '<b>🔥 GRIT 气势槽</b>' +
          '<div class="grit-track"><i style="width:' + gritVal + '%"></i></div>' +
          '<span>' + esc(gritNote) + '</span>' +
        '</div>' +
      '</footer>' +
      qteOverlayHtml();
  };

  // ---------- 赛后战报：明亮晴空定格结算海报（无表格 + 12段装甲血槽 + 双 SVG 环） ----------
  var ringGaugeHtml = function (pct, stroke, valText, subText) {
    var r = 17, c = 2 * Math.PI * r;
    var offset = Number((c * (1 - Math.max(0, Math.min(1, pct)))).toFixed(1));
    return '<div class="v7-ring-gauge">' +
      '<svg viewBox="0 0 42 42"><circle cx="21" cy="21" r="17" fill="none" stroke="#e2ecf9" stroke-width="5"/>' +
      '<circle cx="21" cy="21" r="17" fill="none" stroke="' + stroke + '" stroke-width="5" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + offset + '" stroke-linecap="round"/></svg>' +
      '<div class="v7-ring-meta"><b>' + esc(valText) + '</b><span>' + esc(subText) + '</span></div>' +
    '</div>';
  };
  var armorBar12 = function (hpTransition) {
    var parts = String(hpTransition || '100→100').split('→');
    var start = Math.max(0, Math.min(100, +parts[0] || 100));
    var end = Math.max(0, Math.min(100, +(parts[1] != null ? parts[1] : start)));
    var onCnt = end <= 0 ? 0 : Math.max(1, Math.round(end / 100 * 12));
    var startCnt = Math.max(onCnt, Math.round(start / 100 * 12));
    var s = '';
    for (var i = 0; i < 12; i++) {
      var cls = i < onCnt ? 'on' : (i < startCnt ? 'lost' : '');
      s += '<i' + (cls ? ' class="' + cls + '"' : '') + '></i>';
    }
    return '<div class="v7-seg-bar">' + s + '</div>';
  };

  var reportHtml = function () {
    var r = st.report || { '结果': st.result || '负', '回合': st.round };
    var res = String(r['结果'] || '');
    var win = /^胜/.test(res);
    var ttl = win ? '胜！' : (res === '负（认输）' ? '认输' : (res === '逃脱' ? '撤了' : '负'));
    var keys = (r['关键'] && r['关键'].length) ? r['关键'] : ['完成本场交锋'];
    var rows = (r['我方'] && r['我方'].length) ? r['我方'] : [{}];
    var me0 = rows[0] || {}, foe0 = ((r['对方'] && r['对方'][0]) || {});
    var lvNow = me0['Lv'] == null ? (st.me.level || 1) : me0['Lv'];
    var lvPre = me0['战前Lv'] == null ? lvNow : me0['战前Lv'];
    var leveled = +lvNow > +lvPre;
    var expCur = +me0['经验当前'] || 0, expNeed = Math.max(1, +me0['升级所需'] || (lvNow * 15));
    var growthEnd = +me0['成长终值'] || 0;

    var extraBadges = [];
    if (r['同调']) extraBadges.push('已用同调');
    if (r['燃魂再起']) extraBadges.push('🔥 燃魂再起 ×' + r['燃魂再起']);
    if (r['驯兽师参战']) extraBadges.push('👊 驯兽师共斗' + (r['驯兽师参战']['驯兽师挂彩'] && r['驯兽师参战']['驯兽师挂彩'] !== '无' ? '·' + r['驯兽师参战']['驯兽师挂彩'] : ''));
    if (r['结契'] === '成功') extraBadges.push('★ 结契成功');

    var subRows = rows.slice(1).map(function (b) {
      var up = (b['Lv'] != null && b['战前Lv'] != null && +b['Lv'] > +b['战前Lv']) ? ' · 升级 Lv ' + b['战前Lv'] + '→' + b['Lv'] : ' · Lv ' + (b['Lv'] == null ? '—' : b['Lv']);
      return '<span class="v7-sub-pill"><b>' + esc(b['昵称'] || '') + '</b> 经验 ' + esc(b['经验'] || '+0') + ' ｜ 成长 ' + esc(b['成长'] || '+0') + esc(up) + '</span>';
    }).join('');

    var bgImg = opts.bg ? '<img class="v7-vp-bg" src="' + esc(opts.bg) + '" alt="">' : '';

    return '<div class="v7-victory-poster">' +
      bgImg +
      '<div class="v7-vp-slash"></div>' +
      '<div class="v7-vp-watermark">' + (win ? 'VICTORY' : 'RESULT') + '</div>' +
      '<div class="v7-vp-left">' +
        '<div>' +
          '<div class="v7-vp-kicker"><span>' + (win ? 'MATCH CLEAR' : 'BATTLE REPORT') + '</span>' + esc((st.field && st.field.name) || '对战舞台') + '</div>' +
          '<div class="win">' +
            '<div class="ttl">' + esc(ttl) + '</div>' +
            '<div class="v7-vp-rounds"><b>ROUND ' + esc(r['回合'] || 1) + '</b><small>' +
              esc((me0['昵称'] || '我方') + ' ' + (win ? '胜' : '对') + ' ' + (foe0['物种'] || '对手') + ' · ' + (r['名称'] || st.name || '对战')) +
            '</small></div>' +
          '</div>' +
        '</div>' +
        '<div class="v7-highlight-strip">' +
          '<small>HIGHLIGHT // 关键一手</small>' +
          '<b>' + esc(keys.join(' ｜ ')) + '</b>' +
        '</div>' +
        '<div class="v7-armor-hud">' +
          '<div class="v7-armor-top">' +
            '<strong>' + esc(me0['昵称'] || st.me.nick || '主力搭档') + '</strong>' +
            '<span style="font:800 12px/1 var(--mono);color:var(--ink2)">体力 ' + esc(me0['体力'] || '—') + ' · 疲劳 ' + esc(me0['疲劳'] || '+0') + '</span>' +
            (extraBadges.length ? '<span class="v7-chip-sync">' + esc(extraBadges.join(' · ')) + '</span>' : '') +
          '</div>' +
          armorBar12(me0['体力']) +
        '</div>' +
        '<div class="settle v7-levelup-rig">' +
          '<div class="v7-settle-kicker"><span>战后结算 · EXP &amp; GROWTH</span><span>' + (me0['瓶颈'] ? '⚠ 阶段等级瓶颈' : '羁绊 ' + esc(me0['羁绊'] || '+0')) + '</span></div>' +
          '<div class="v7-rig-main">' +
            '<div class="v7-lv-jump">' +
              (leveled ? '<span class="v7-lv-upbadge">LEVEL UP!</span><b>Lv ' + esc(lvPre) + '→' + esc(lvNow) + '</b>' : '<b>Lv ' + esc(lvNow) + '</b>') +
            '</div>' +
            '<div class="v7-gauges">' +
              ringGaugeHtml(expCur / expNeed, '#1da1f2', '经验 ' + (me0['经验'] || '+0'), expCur + ' / ' + expNeed) +
              ringGaugeHtml(growthEnd / 100, '#ff6b2b', '成长 ' + (me0['成长'] || '+0'), growthEnd + ' / 100') +
            '</div>' +
          '</div>' +
          (subRows ? '<div class="v7-sub-settle">' + subRows + '</div>' : '') +
        '</div>' +
      '</div>' +
      '<div class="v7-vp-right">' +
        '<div class="v7-foe-defeated">' +
          '<div class="beast" data-emblem-label="' + esc((foe0['物种'] || '敌').slice(0, 1)) + '">' + artOf(st.foe.species || st.foe.nick, 'report-foe', st.foe) + '</div>' +
          '<span class="v7-ko-stamp">' + (win ? 'DEFEATED' : 'OPPONENT') + '</span>' +
          '<div class="v7-foe-cap">' + esc((foe0['物种'] || st.foe.species || '对手') + ' · 体力 ' + (foe0['体力'] || '—')) + '</div>' +
        '</div>' +
        '<div class="v7-mvp-stage">' +
          '<div class="v7-mvp-disc"></div>' +
          '<div class="beast" data-emblem-label="' + esc((st.me.nick || st.me.species || '我').slice(0, 1)) + '">' + artOf(st.me.species || st.me.nick, 'mvp', st.me) + '</div>' +
        '</div>' +
        '<button type="button" class="sendcap" data-p12send="1">' +
          '<span class="report-action-desktop">战报放进输入框 · 按发送继续剧情 ›</span>' +
          '<span class="report-action-mobile">继续 · 放入战报 ›</span>' +
        '</button>' +
      '</div>' +
    '</div>';
  };

  var subPanel = function (kind) {
    var doc = host.doc;
    var old = host.el.querySelector('.p12b-sub');
    if (old) old.remove();
    if (!kind || kind === 'item') return;
    var box = doc.createElement('div');
    box.className = 'p12b-sub';
    var html = '';
    if (kind === 'cmd') {
      var lends = (st.field.lend || []).slice(0, 4);
      html = '<b>口令（羁绊 ' + st.me.bond + '，剩 ' + st.cmdLeft + ' 次）</b>' +
        ['借地形', '遮挡', '干扰', '佯攻'].map(function (c) {
          return '<div style="margin-top:6px">' + c + '：' + (lends.length ? lends.map(function (l) {
            return '<span data-p12cmd="' + c + '|' + esc(l) + '" style="display:inline-block;border:2px solid var(--navy);background:#f8fafc;padding:2px 9px;margin-right:6px;cursor:pointer">' + esc(l) + '</span>';
          }).join('') : '<span style="color:#64748b">场地没写可借的东西</span>') + '</div>';
        }).join('');
    } else if (kind === 'switch') {
      var team = st.meTeam || [st.me];
      var rows = team.map(function (b, i) {
        var hp = Math.max(0, Math.round(b.hp == null ? 100 : b.hp));
        if (i === st.meIndex) return '<div style="margin-top:6px;color:#94a3b8">' + esc(b.nick || b.species) + '（正在场上）</div>';
        return '<div data-p12sw="' + i + '" style="margin-top:6px;padding:4px 8px;border:1.5px solid #cbd5e1;cursor:pointer;' + (hp <= 0 ? 'color:#94a3b8;text-decoration:line-through' : '') + '">' +
          esc(b.nick || b.species) + '（体力 ' + hp + '%' + (hp <= 0 ? ' · 倒下' : '') + '）</div>';
      }).join('');
      html = '<b>换谁上（主动换兽占一回合）</b>' + (rows || '<div>没有替补</div>');
    } else if (kind === 'ball') {
      var balls = (st.bag || []).filter(function (x) { return x && x.name && x.qty > 0; });
      html = '<b>投球（占一回合 · 对方越虚弱越容易）</b>' + (balls.length ? balls.map(function (x) {
        return '<div data-p12ball="' + esc(x.name) + '" style="margin-top:6px;padding:4px 8px;border:1.5px solid #cbd5e1;cursor:pointer">' + esc(x.name) + ' ×' + x.qty + '</div>';
      }).join('') : '<div style="color:#64748b">背包里没有可用的球</div>');
    }
    box.innerHTML = '<button type="button" class="b-sub-close" data-p12subclose="1">返回对战</button>' + html;
    host.el.querySelector('.b-stage').appendChild(box);
  };

  // ---------- 燃魂弹幕 QTE 实时动画引擎 ----------
  var spawnDanmaku = function (layer, kind, customHtml, forcedTrack, startOffsetVw) {
    if (!layer || !host) return;
    var tracks = [8, 18, 28, 38, 48, 58, 68, 78, 86];
    var idx = forcedTrack != null ? (forcedTrack % tracks.length) : (qteRuntime ? (qteRuntime.trackCursor++ % tracks.length) : Math.floor(Math.random() * tracks.length));
    var d = host.doc.createElement('div');
    var cls = kind || 'roar';
    var body = customHtml || '';
    if (!body) {
      var r = Math.random();
      if (r < 0.42) {
        cls = r < 0.14 ? 'roar-xl' : 'roar';
        body = esc(ROARS[Math.floor(Math.random() * ROARS.length)]);
      } else if (r < 0.7) {
        cls = 'memory';
        body = esc(MEMORIES[Math.floor(Math.random() * MEMORIES.length)]);
      } else {
        cls = 'live';
        var lv = LIVES[Math.floor(Math.random() * LIVES.length)];
        body = '<em>' + esc(lv[0]) + '</em> ' + esc(lv[1]);
      }
    }
    d.className = 'dm ' + cls;
    d.style.top = tracks[idx] + '%';
    if (startOffsetVw != null) d.style.left = startOffsetVw + '%';
    d.style.setProperty('--dm-dur', (2.0 + Math.random() * 1.0).toFixed(2) + 's');
    d.innerHTML = body;
    layer.appendChild(d);
    setTimeout(function () { if (d.parentNode) d.remove(); }, 3200);
  };

  var bootQteIfNeeded = function () {
    if (!st || !st.gritPending || !host) { stopQte(); return; }
    var overlay = host.el.querySelector('.v7-qte-overlay');
    if (!overlay) return;
    stopQte();
    var spec = st.gritPending;
    var layer = overlay.querySelector('[data-qte-dm]');
    var secEl = overlay.querySelector('[data-qte-sec]');
    var pctEl = overlay.querySelector('[data-qte-pct]');
    var fillEl = overlay.querySelector('[data-qte-fill]');
    var hitsEl = overlay.querySelector('[data-qte-hits]');
    var syncEl = overlay.querySelector('[data-qte-sync]');
    var ringEl = overlay.querySelector('[data-qte-ring]');
    var popEl = overlay.querySelector('[data-qte-pop]');
    var hintEl = overlay.querySelector('[data-qte-hint]');

    qteRuntime = {
      spec: spec,
      startAt: performance.now(),
      gauge: spec.startGauge,
      hits: 0,
      perfects: 0,
      trackCursor: 0,
      ringPhase: 0,
      done: false,
      raf: 0,
      tap: function () {
        if (!qteRuntime || qteRuntime.done) return;
        qteRuntime.hits++;
        // 缩圈相位 0.52..0.80 落在青色甜区环上 -> PERFECT 双倍暴击充能！
        var sweet = qteRuntime.ringPhase >= 0.50 && qteRuntime.ringPhase <= 0.82;
        if (sweet) qteRuntime.perfects++;
        var gain = sweet ? spec.perfectGain : spec.tapGain;
        qteRuntime.gauge = Math.min(100, Number((qteRuntime.gauge + gain).toFixed(1)));
        if (hitsEl) hitsEl.textContent = String(qteRuntime.hits);
        if (syncEl) syncEl.textContent = '🔥 羁绊同步率 ' + (120 + qteRuntime.hits * 8 + qteRuntime.perfects * 15) + '%!!';
        if (pctEl) pctEl.textContent = Math.round(qteRuntime.gauge) + '%';
        if (fillEl) fillEl.style.width = qteRuntime.gauge + '%';
        if (popEl) {
          popEl.textContent = sweet ? ('PERFECT ×' + qteRuntime.perfects + '!!') : 'BURST!';
          popEl.classList.add('on');
          clearTimeout(qteRuntime.popTimer);
          qteRuntime.popTimer = setTimeout(function () { if (popEl) popEl.classList.remove('on'); }, 260);
        }
        if (sweet && hintEl) hintEl.textContent = '⚡ 踩中缩圈甜区！【PERFECT ×' + qteRuntime.perfects + '】双倍燃魂充能爆发！！';
        overlay.classList.remove('pulse');
        void overlay.offsetWidth;
        overlay.classList.add('pulse');
        spawnDanmaku(layer);
        if (sweet) spawnDanmaku(layer, 'roar-xl');

        if (qteRuntime.gauge >= 100) {
          qteRuntime.done = true;
          if (hintEl) hintEl.textContent = '★ 羁绊突破极限！！锁血燃魂觉醒！！';
          spawnDanmaku(layer, 'roar-xl', '「听见了——我们绝不会在这里倒下！！！」');
          setTimeout(function () {
            var cbs = host && host.cbs;
            stopQte();
            if (cbs && cbs.onAct) cbs.onAct({ kind: 'grit_revive' });
            else if (opts.onAct) opts.onAct({ kind: 'grit_revive' });
          }, 260);
        }
      }
    };

    // 开场即齐射 4 条错轨首发咆哮与直播沸腾弹幕！
    qteRuntime.trackCursor = 4;
    spawnDanmaku(layer, 'roar-xl', esc('「别小看我们的羁绊啊混蛋！！！」'), 2, 68);
    spawnDanmaku(layer, 'live', '<em>[LIVE 9999+]</em> 0 血硬撑还没倒？！！快狂点屏幕应援啊！！', 0, 80);
    spawnDanmaku(layer, 'memory', esc('「说好要一起去全国大赛看最高处的风景啊——！！」'), 5, 74);
    spawnDanmaku(layer, 'roar', esc('「站起来啊 ' + (st.me.nick || '搭档') + '——！！」'), 7, 84);

    var tick = function (now) {
      if (!qteRuntime || qteRuntime.done) return;
      var elapsed = now - qteRuntime.startAt;
      var remainMs = Math.max(0, spec.durationMs - elapsed);
      if (secEl) secEl.textContent = (remainMs / 1000).toFixed(2);
      // 650ms 一周期的动态缩圈环
      qteRuntime.ringPhase = (elapsed % 650) / 650;
      var scale = 1.35 - 0.65 * qteRuntime.ringPhase;
      if (ringEl) ringEl.style.transform = 'scale(' + scale.toFixed(3) + ')';
      if (remainMs <= 0) {
        qteRuntime.done = true;
        var cbs = host && host.cbs;
        stopQte();
        if (cbs && cbs.onAct) cbs.onAct({ kind: 'grit_fail' });
        else if (opts.onAct) opts.onAct({ kind: 'grit_fail' });
        return;
      }
      qteRuntime.raf = requestAnimationFrame(tick);
    };
    qteRuntime.raf = requestAnimationFrame(tick);
  };

  // ---------- 渲染主入口（含已解码立绘 DOM 复用，零闪烁） ----------
  var stashLoadedImages = function (stage) {
    if (!stage) return;
    stage.querySelectorAll('img.portrait-image[data-p12-ckey]').forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        domImgCache[img.getAttribute('data-p12-ckey')] = img;
      }
    });
    stage.querySelectorAll('img.battle-background[data-p12-bg]').forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        domImgCache['bg::' + img.getAttribute('data-p12-bg')] = img;
      }
    });
  };

  var render = function () {
    if (!host || !st) return;
    var stage = host.el.querySelector('.b-stage');
    var stl = host.el.querySelector('style');
    if (stl && root.P12_BATTLE_CSS && !stl.textContent) stl.textContent = root.P12_BATTLE_CSS;

    stashLoadedImages(stage);
    var showReport = st.over && st.report;
    if (showReport) stopQte();

    stage.innerHTML = '<button type="button" class="b-close" data-p12close="1">收起</button>' +
      '<section class="scene b-fight' + (showReport ? '' : ' on') + '">' + (showReport ? '' : fightHtml()) + '</section>' +
      '<section class="scene b-report' + (showReport ? ' on' : '') + '">' + (showReport ? reportHtml() : '') + '</section>';

    // 1) 优先同步复用已解码的背景图与异兽立绘（0ms 零闪烁！）
    stage.querySelectorAll('img.battle-background[data-p12-bg]').forEach(function (bgImg) {
      var bkey = 'bg::' + bgImg.getAttribute('data-p12-bg');
      var cachedBg = domImgCache[bkey];
      var fightSec = stage.querySelector('.b-fight');
      if (cachedBg && cachedBg !== bgImg) {
        bgImg.replaceWith(cachedBg);
        if (fightSec) fightSec.classList.add('has-background');
        return;
      }
      var onBg = function () {
        if (!bgImg.isConnected || !bgImg.naturalWidth) return;
        domImgCache[bkey] = bgImg;
        if (fightSec) fightSec.classList.add('has-background');
      };
      bgImg.addEventListener('load', onBg, { once: true });
      bgImg.addEventListener('error', function () { bgImg.remove(); }, { once: true });
      if (bgImg.complete && bgImg.naturalWidth) onBg();
    });

    stage.querySelectorAll('img.portrait-image').forEach(function (img) {
      var ckey = img.getAttribute('data-p12-ckey') || '';
      var side = img.getAttribute('data-p12-side') || '';
      var sp = img.getAttribute('data-p12-species') || '';
      var beastObj = side === 'me' || side === 'mvp' ? st.me : st.foe;
      var cached = ckey ? domImgCache[ckey] : null;
      if (cached && cached !== img && cached.complete && cached.naturalWidth > 0) {
        cached.className = img.className;
        img.replaceWith(cached);
        if (cached.parentElement) cached.parentElement.classList.add('has-portrait');
        applyFacing(cached, side, sp, beastObj);
        return;
      }
      var chain = [];
      try { chain = JSON.parse(img.getAttribute('data-creature-chain') || '[]'); } catch (e) {}
      if (chain.length && root.P12CreatureArt) {
        root.P12CreatureArt.bind(img, chain, {
          letter: (img.alt || '?').slice(0, 1),
          onAccepted: function () {
            if (ckey) domImgCache[ckey] = img;
            applyFacing(img, side, sp, beastObj);
          }
        });
        applyFacing(img, side, sp, beastObj);
        return;
      }
      var accept = function () {
        if (!img.isConnected || !img.naturalWidth) return;
        if (ckey) domImgCache[ckey] = img;
        if (img.parentElement) img.parentElement.classList.add('has-portrait');
        applyFacing(img, side, sp, beastObj);
      };
      img.addEventListener('load', accept, { once: true });
      img.addEventListener('error', function () {
        var p = img.parentElement;
        img.remove();
        if (p) p.classList.add('is-emblem-fallback');
      }, { once: true });
      applyFacing(img, side, sp, beastObj);
      if (img.complete && img.naturalWidth) accept();
    });

    host.el.classList.add('on');
    bootQteIfNeeded();
  };

  var api = {
    open: function (doc, state, o) {
      ensure(doc);
      st = state;
      opts = Object.assign({ spriteOf: null, artOf: null, tamerArtOf: null, flipOf: null, onFlipToggle: null, playerName: '', bg: null, team: [] }, o || {});
      if (opts.enableGritQte && st) st.enableGritQte = true;
      render();
      return host;
    },
    close: function () {
      stopQte();
      if (host && host.el) host.el.classList.remove('on');
    },
    isOpen: function () { return !!(host && host.el && host.el.classList.contains('on')); },
    rerender: function (s) { if (s) st = s; render(); },
    state: function () { return st; },
    bind: function (doc, callbacks) {
      var el = ensure(doc);
      host.cbs = callbacks || {};
      if (el.dataset.bound === '1') return;
      el.dataset.bound = '1';

      el.addEventListener('pointerdown', function (ev) {
        var qteTap = ev.target && ev.target.closest && ev.target.closest('[data-p12qte-tap]');
        if (qteTap && qteRuntime && !qteRuntime.done) {
          ev.preventDefault();
          qteRuntime.tap();
        }
      });

      el.addEventListener('click', function (ev) {
        var cbs = host.cbs || {};
        var t = ev.target;
        if (!t || !t.closest) return;
        if (t.closest('[data-p12qte-tap]')) return;

        var flip = t.closest('[data-p12flip]');
        if (flip) {
          var fSide = flip.getAttribute('data-p12flip');
          var bObj = fSide === 'me' ? st.me : st.foe;
          var key = String((bObj && (bObj.species || bObj.nick)) || '').trim();
          if (key) {
            if (opts.onFlipToggle) opts.onFlipToggle(key, bObj);
            else localFlips[key] = !localFlips[key];
            var curImg = flip.parentElement && flip.parentElement.querySelector('img.portrait-image');
            if (curImg) applyFacing(curImg, fSide, key, bObj);
          }
          return;
        }

        var subclose = t.closest('[data-p12subclose]');
        if (subclose) { var menu = host.el.querySelector('.p12b-sub'); if (menu) menu.remove(); return; }
        var close = t.closest('[data-p12close]');
        if (close) { api.close(); cbs.onClose && cbs.onClose(st); return; }
        var send = t.closest('[data-p12send]');
        if (send) { cbs.onSend && cbs.onSend(st.report, st); return; }

        var tamerBtn = t.closest('[data-p12tamer]');
        if (tamerBtn) {
          cbs.onAct && cbs.onAct({ kind: 'tamer_join' });
          return;
        }
        var tbuff = t.closest('[data-p12tbuff]');
        if (tbuff) {
          var bf = tbuff.getAttribute('data-p12tbuff');
          if (tbuff.classList.contains('locked')) return;
          cbs.onAct && cbs.onAct({ kind: 'tamer_buff', buff: bf });
          return;
        }
        var tstep = t.closest('[data-p12tstep]');
        if (tstep && st && st.tamerIn) {
          st.tamerStep = 'buff';
          render();
          return;
        }

        var side = t.closest('[data-p12side]');
        if (side) {
          var kind = side.getAttribute('data-p12side');
          if (kind === 'surrender' || kind === 'sync') { cbs.onAct && cbs.onAct({ kind: kind }); return; }
          subPanel(kind);
          return;
        }
        var cmd = t.closest('[data-p12cmd]');
        if (cmd) {
          var p = cmd.getAttribute('data-p12cmd').split('|');
          var box = host.el.querySelector('.p12b-sub'); if (box) box.remove();
          cbs.onAct && cbs.onAct({ kind: 'command', cmd: p[0], lend: p[1] });
          return;
        }
        var sw = t.closest('[data-p12sw]');
        if (sw) {
          var box2 = host.el.querySelector('.p12b-sub'); if (box2) box2.remove();
          cbs.onAct && cbs.onAct({ kind: 'switch', index: +sw.getAttribute('data-p12sw'), team: opts.team || [] });
          return;
        }
        var item = t.closest('[data-p12item]');
        if (item) {
          var box3 = host.el.querySelector('.p12b-sub'); if (box3) box3.remove();
          cbs.onAct && cbs.onAct({ kind: 'item', name: item.getAttribute('data-p12item'), heal: 30 });
          return;
        }
        var ball = t.closest('[data-p12ball]');
        if (ball) {
          var box4 = host.el.querySelector('.p12b-sub'); if (box4) box4.remove();
          cbs.onAct && cbs.onAct({ kind: 'ball', name: ball.getAttribute('data-p12ball') });
          return;
        }
        var mv = t.closest('[data-p12mv]');
        if (mv) { cbs.onAct && cbs.onAct({ kind: 'move', move: +mv.getAttribute('data-p12mv') }); return; }
      });

      // QTE 期间按空格或回车也能狂飙弹幕充能！
      doc.addEventListener('keydown', function (ev) {
        if (!api.isOpen() || !qteRuntime || qteRuntime.done) return;
        if (ev.code === 'Space' || ev.key === ' ' || ev.key === 'Enter') {
          ev.preventDefault();
          qteRuntime.tap();
        }
      });

      // 开战前拖动排我方出战顺序
      var dragFrom = null;
      el.addEventListener('dragstart', function (ev) {
        var chip = ev.target.closest && ev.target.closest('[data-p12chip]');
        if (!chip || !orderable()) return;
        dragFrom = +chip.getAttribute('data-p12chip');
        try { ev.dataTransfer.setData('text/plain', String(dragFrom)); ev.dataTransfer.effectAllowed = 'move'; } catch (e) {}
      });
      el.addEventListener('dragover', function (ev) {
        if (dragFrom == null) return;
        var chip = ev.target.closest && ev.target.closest('[data-p12chip]');
        if (!chip || !chip.closest('[data-p12strip="me"]')) return;
        ev.preventDefault();
        try { ev.dataTransfer.dropEffect = 'move'; } catch (e) {}
      });
      el.addEventListener('drop', function (ev) {
        if (dragFrom == null) return;
        var chip = ev.target.closest && ev.target.closest('[data-p12chip]');
        if (!chip || !chip.closest('[data-p12strip="me"]')) { dragFrom = null; return; }
        ev.preventDefault();
        var to = +chip.getAttribute('data-p12chip');
        var cbs = host.cbs || {};
        if (to !== dragFrom) cbs.onOrder && cbs.onOrder(dragFrom, to);
        dragFrom = null;
      });
    }
  };
  root.P12BattleView = api;
})(typeof window !== 'undefined' ? window : globalThis);

;
})();