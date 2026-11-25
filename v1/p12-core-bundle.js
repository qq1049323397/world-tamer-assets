/* p12-core-bundle.js — WT-v7 Core HUD & Prose Runtime */
;
(function(){
;
if(window.__p12CoreLoaded)return;window.__p12CoreLoaded=true;
;
window.P12_TERRAIN_ASSETS={"arena":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667046283_terrain-arena-v1.webp","street":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667049251_terrain-street-v1.webp","grass":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667039085_terrain-grass-v1.webp","forest":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667041817_terrain-forest-v1.webp","lake":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667043300_terrain-lake-v1.webp","beach":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667042226_terrain-beach-v1.webp","snow":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667050020_terrain-snow-v1.webp","rock":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667047127_terrain-rock-v1.webp","desert":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667042178_terrain-desert-v1.webp","volcano":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667046739_terrain-volcano-v1.webp","night":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667042165_terrain-night-v1.webp","underground":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667045156_terrain-underground-v1.webp","ruins":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667042893_terrain-ruins-v1.webp","sky":"https://42ddc630.wanxiangdengta.pages.dev/file/1794667049299_terrain-sky-v1.webp"};
;
window.P12_SILHOUETTE_ASSETS={"normal":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673955176_silhouette-normal.webp","fire":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673946911_silhouette-fire.webp","water":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673982956_silhouette-water.webp","grass":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673950434_silhouette-grass.webp","electric":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673945115_silhouette-electric.webp","ice":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673947782_silhouette-ice.webp","fighting":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673951073_silhouette-fighting.webp","poison":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673959296_silhouette-poison.webp","ground":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673946975_silhouette-ground.webp","flying":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673945299_silhouette-flying.webp","psychic":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673954798_silhouette-psychic.webp","bug":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673948184_silhouette-bug.webp","rock":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673981957_silhouette-rock.webp","ghost":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673950037_silhouette-ghost.webp","dragon":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673940022_silhouette-dragon.webp","dark":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673940495_silhouette-dark.webp","steel":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673978651_silhouette-steel.webp","fairy":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673942905_silhouette-fairy.webp","machine":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673949980_silhouette-machine.webp","erosion":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673946245_silhouette-erosion.webp","bloodlust":"https://42ddc630.wanxiangdengta.pages.dev/file/1794673945828_silhouette-bloodlust.webp"};
;
window.P12_UI_ICONS={"association-badge":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277080073_association-badge-v1.png","type-blood":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277086000_type-blood-v1.png","type-bug":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277073488_type-bug-v1.png","type-dark":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277078364_type-dark-v1.png","type-dragon":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277080043_type-dragon-v1.png","type-electric":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277073339_type-electric-v1.png","type-erosion":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277078638_type-erosion-v1.png","type-fairy":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277078871_type-fairy-v1.png","type-fighting":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277078792_type-fighting-v1.png","type-fire":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277074514_type-fire-v1.png","type-flying":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277077130_type-flying-v1.png","type-ghost":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277075460_type-ghost-v1.png","type-grass":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277078030_type-grass-v1.png","type-ground":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277080468_type-ground-v1.png","type-ice":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277069125_type-ice-v1.png","type-machine":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277085417_type-machine-v1.png","type-normal":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277073144_type-normal-v1.png","type-poison":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277079615_type-poison-v1.png","type-psychic":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277079443_type-psychic-v1.png","type-rock":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277074061_type-rock-v1.png","type-steel":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277082398_type-steel-v1.png","type-water":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277068251_type-water-v1.png","watch-frame":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277079589_watch-frame-v1.png"};
;
window.P12_ART_ASSETS={"battle-forest":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277069312_battle-forest-v1.webp","battle-pujiang-deck":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277067568_battle-pujiang-deck-v1.webp","battle-qianhai":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277068770_battle-qianhai-v1.webp","battle-rain-site":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277068025_battle-rain-site-v1.webp","battle-shichahai-earth":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277065046_battle-shichahai-earth-v1.webp","battle-underground":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277065000_battle-underground-v1.webp","city-beijing":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277071500_city-beijing-v1.webp","city-chengdu":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277066295_city-chengdu-v1.webp","city-hangzhou":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277069299_city-hangzhou-v1.webp","city-shanghai":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277065223_city-shanghai-v1.webp","city-shenzhen":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277074892_city-shenzhen-v1.webp","map-beijing-xishan":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277060937_map-beijing-xishan-v1.webp","map-chengdu-qingcheng":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277069077_map-chengdu-qingcheng-v1.webp","map-generic-forest":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277062505_map-generic-forest-v1.webp","map-generic-sea":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277062769_map-generic-sea-v1.webp","map-generic-suburb":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277490562_map-generic-suburb-v2.webp","map-hangzhou-westlake":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277063094_map-hangzhou-westlake-v1.webp","map-shanghai-chongming":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277063928_map-shanghai-chongming-v1.webp","map-shenzhen-coast":"https://42ddc630.wanxiangdengta.pages.dev/file/1794277068260_map-shenzhen-coast-v1.webp"};
;
window.P12_SPRITE_DIRS={"360":"N","DeepSeek":"N","Kimi":"N","千问":"N","豆包":"N","文心":"N","MiMo":"N","RWKV":"N","阶跃":"N","智谱":"N","海螺":"N","元宝":"N","雪玉蚕":"L","冻土狼":"L","白泽":"N","冰绡茧":"L","机械光环蝶":"R","雪原鬃熊":"L","铁甲刃鳄":"L","云渊苍龙":"R","墨竹熊仔":"L","沙绳仔":"L","霓裳蛾":"N","覆浪巨鲸":"L","灰缫蛾":"L","趴蝮岩石兽":"L","镜钢武姬":"N","青细噬虫蛇":"R","霜角白鹿":"L","苍翎鸮":"R","迅捷电光鼠":"L","黄纹甜针蜂":"L","果浆雀":"R","翻土穿山甲":"L","金背锦鲤兽":"L","潮汐巨鳍兽":"L","翠羽岩鹰":"L","幽林香蕈怪":"L","金刚甲虫":"L","霜壳龟":"R","黑羽酱香鸭":"R","琉璃雀":"L","白猿":"R","海潮犬":"L","守卫獒":"L","甲鳞穿山兽":"L","绒毛松鼠":"R","红爪湿地水獭":"L","疾风狼":"L","刻冰狐":"L","柴火精":"L","霜鬃雪狼":"L","银羽雀":"R","点金画灵雀":"L","踏浪海豹":"R","铁角盘羊":"L","岩鳞巨蜥":"L","抚林灵象":"L","丝织蝶":"L","云锦雀":"L","素绢蛾":"R","辨角黑羊":"L","白翎海雕":"L","碧叶蝉":"L","古刹听经石龟":"R","巡夜纸灵妖":"L","金纹巨角鹿":"L","墨鳞锦鲤":"R","杭白菊清露雀":"L","磁针偶":"L","嗅灵獾":"R","导向发条蜂":"L","白绒灵蚕":"L","竹节猿":"R","金瞳狸":"L","嗅金獾":"R","冻霜灵狼":"L","裂岩地甲龙":"L","白石灵音雀":"R","紫砂红泥龟":"L","青霜草织蚕":"L","赤羽穿云隼":"R","高原狂风藏獒":"L","荧光岩壁蝾":"R","七彩拂面蝶":"L","青甲巨骨鲵":"L","冰晶彩溪鳟":"L","青角泥水牯":"L","镇水铁背鳌":"R","绒毛踏雪雪鸡":"L","金冠斑纹啸天犬":"R","白顶岩壁雕":"L","钢拳石猿":"L","重装智核机神":"L","绿鳞巨藤巨蜥":"L","高原雪原绒尾犬":"L","灵犀七彩蛙":"L","银鳞鳡鱼":"R","暗影斗犬":"L","改装齿轮犬":"L","回音鸣蝉":"L","火膛穿甲獾":"L","九节接骨木妖":"R","伊犁烈鬃金马":"L","白鹳苍鹤":"R","霜爪猞猁":"L","暗影贼猫":"R","斑腹巨鲵":"R","柴火暖胃犬":"L","赤焰松鼠":"L","苍藤游水蛇":"L","赤焰灶头雀":"R","沧浪灵龟":"L","赤铜打壶雀":"L","靛蓝蜡染蝶":"L","砥柱巨龟":"L","古墨残卷魂":"R","焊铁螳螂":"L","晶刺水母":"L","九死还魂草灵":"L","定流银甲鱼":"L","冷泉雪兔":"L","卤水黑晶兽":"L","缝纫布偶熊":"R","暖炕土泥猪":"L","踏浪青背蟾":"L","扫帚毛刺猬":"L","霜角雪牦牛":"L","绒毛沙狐":"L","威烈黑背獒":"L","微火烤肉獾":"R","转碟巧猴":"L","陶甲重卫":"L","风语隐纹燕":"L","彩羽灵锦雀":"L","白羽划水鹅":"L","律心明镜独角兽":"L","碧潮海音螺":"R","碧羽青竹雀":"R","糖霜暖绒蜂":"L","磁流涡轮飞蝠":"R","疾影灵狐":"L","茯苓药香貂":"L","裂空逆鳞蜥":"L","太湖叠石甲龟":"L","影织雀":"R","碧纹翡翠蜥":"R","电脉红冠雀":"L","高空金眼隼":"L","光影幻镜蝶":"L","红顶灶火雀":"R","金翎天山雕":"R","巡风砂雕":"L","铁背巨雪猿":"R","铁甲碎骨鳄":"L","狂暴钢牙鬃犬":"L","铜嘴通语八哥":"R","嵩岳罗汉猿":"L","裂风雪隼":"L","铁线伏虎犬":"R","熔岩泥傀儡":"L","灵角金斑羚":"R","青斑金丝雀":"L","铁臂金刚猿":"L","灵啄铁木雀":"L","雷速滑行犬":"L","熔火焊斑蜥":"L","紫绒幻音短毛猫":"R","影爪潜行猞猁":"L","七彩绒光蚕":"L","镇宅狮":"R","王可可":"L","肌肉金轮":"L","妲己":"L","真香饭仔":"L","芝士雪豹":"R","法外狂徒张三":"R","肥宅快乐兽":"R","铁铲灵":"R","留影冰镜":"L","苍蓝猿王":"L","幽冥灵猫":"L","邪眸白虎":"L","香肠兽":"L","白月兰灵":"L","鲨齿":"L","裁纸剪灵":"L","暖香壶灵":"L","御剪灵":"L","风缎剑灵":"L","纸梅灯灵":"L","潘达":"R","黄浦巨鲇":"R","橙光重炮":"L","汉墓陶甲兽":"L","冰晶凤雏":"L","青花瓷麟":"L","穿堂风雀":"L","震地巨猿":"L","萨姆":"L","焊锡蛛":"L","碧脉藤蔓精":"L","雪极熊":"L","磁力齿轮球":"R","白娘子":"L","治愈水波水母":"L","卷角褐岩羊":"L","巨鳌蟹":"R","磁灵机":"R","金刚岩石壁虎":"R","油锅狸":"L","素纹水游蛇":"L","糯米灵":"L","火吻蜥":"R","金毛醒狮":"L","皮影影木灵":"L","破浪青甲龟":"L","白霜驼":"L","金桔蜜蜂":"R","彩墨灵蝶":"L","甘草白眉猫":"R","青黛布灵妖":"L","黑鳍巡游鲨":"R","暗夜猎手":"L","脑波蝶":"L","猎风犬":"L","影光蝶":"L","灵羽雀":"R","金光斗猿":"L","碧翠螳螂":"R","苇莺水雉":"L","幻影蝶":"L","苍山雪青崖鹰":"R","白顶长颈鹭":"R","轮回朱雀":"L","定影蝠":"R","竹叶青尾鸠":"R","雪域霜角羚":"R","厚皮长角水牛":"L","泥铠赤腹螯":"L","负重铁角驴":"R","岩脊角羊":"L","浮萍绿背蛙":"L","珠峰踏冰铁角牦牛":"R","踏雪岩羊":"L","重岩穿山甲":"L","草鱼跳跳灵":"R","赤臂石猿":"L","碧木巨猿":"R","锻压钢骨熊":"R","黑斑松岩豹":"R","穿云岩燕":"L","红柳掘土穿山兽":"L","彩翎翠孔雀":"R","气泡水母":"L","锦鳞獭":"R","五香灵嗅狸":"R","紫青蜈蚣":"R","七彩灵香麝":"R","巨钳搬山蟹":"L","尖吻白鲟":"L","斑纹竹叶青":"L","刺蓬沙跳鼠":"L","夯土青背穿山兽":"L","冷凝白霜狐":"L","节拍低音蛙":"R","破浪白鳍豚":"L","青瓷凝乳蛙":"L","发条铜齿雀":"L","烈风黑柴犬":"L","青金石晶蝶":"L","铜壶沸泉雀":"R","铁壁青铜兽":"R","铜线织网蛛":"L","铁爪夜蝠":"R","铁脊穿山甲":"R","闸门沉水蟹":"L","中岳金刚凿":"L","细尾沙狐":"R","铁甲裂地蜥":"R","裂地穿山巨甲兽":"L","踏浪白鳍豚":"R","黑鳍刺豚":"R","烘炉暖气幼兽":"L","五彩经纬蚕":"L","裂波青甲巨鳍鲨":"R","霜甲残耳雪豹":"L","蜂巢微巡雀":"R","镇魂青铜偶":"R","磁锁潜水齿鳄":"L","幽魂啼夜蝠":"L","跃水跳跳蛙":"L","巡林雪獒":"R","凝露白鹤":"L","澜沧浪爪獭":"L","嗅金穿岩犬":"L","晶核凝露蝶":"R","五雷符灵":"L","骚猪皮皮虾":"L","奇门阵灵":"L","绿影潜水巨蜥":"R","胶囊机灵":"L","焚天金炎":"L","像素机灵":"L","翠鳞药蛇":"R","银鬃枪灵":"L","桃木剑灵":"R","玉衡雷印":"R","千机伞灵":"L","鱼丸":"L","沉江巨鳗":"L","凌渊巨鲟":"R","云纹小龙":"R","梅花镖灵":"R","炽尾熔岩犬":"L","警觉长耳狸":"L","裂岩沙蜥":"L","铁羽岩鹰":"L","千两茶叶精":"R","干风沙蜥":"R","青石佛光兽":"L","踏沙双峰驼":"L","润木长吻獭":"L","密林古藤蟒":"L","天子拔地笋":"L","雪绒小尾松鼠":"R","温水水蛭":"L","巨铠海龟":"L","雪斑斑头雁":"R","闸口铁臂蟹":"L","银线飞梭雀":"L","铜轴鸣笛雀":"R","金背正骨灵猿":"L","长喙黑脸琵鹭":"R","裂谷金丝猿":"R","松烟石精":"L","紫藤松鼠":"L","潜影暗鼬":"L","潮汐巨蜥":"R","激流箭燕":"R","酱泥厚甲蟹":"L","窥天灵隼":"L","青囊药灵草":"R","铁砂掌狒狒":"R","锚链海象":"L","墨甲看门獒":"L","墨甲铁掌熊":"R","清弦鸣水鹤":"L","青丝锦织蚕":"R","声波银蝶":"L","磁极合金球":"R","五彩描金雀":"L","冰晶海葵幼妖":"L","铁线影蛛":"L","幽蓝幻网蛛":"L","铁甲撞岩犀":"L","翠甲藤蔓蜥":"L","太极阴阳獬":"R","翠脉灵雀":"L","浮水青颈鸭":"R","钢角巨竹牛":"L","褐顶盘角羚":"L","花岗岩绝壁雕":"L","金瞳影刃豹":"R","锦翎翻江猿":"L","刻冰白狐":"L","衔香青背竹叶蛇":"R","镇宅傩面猿":"L","太湖潜波藻怪":"L","巡波海燕":"R","破浪海雕":"R","紫砂穿山鼠":"L","竹梢青羽鹰":"L","重踏披甲熊":"L","珊瑚愈伤水母":"L","熔金火甲蜥":"L","青甲水影鹭":"L","玄武青砖精":"L","盘根锦鳞蟒":"L","潜泥沙蟒":"L","林梢雀":"R","重装铁角搬运兽":"R","铁掌竹熊":"L","纸鸢雀":"L","藏狙柜":"L","锤背犰狳":"L","鎏金领航隼":"L","帝血战猴":"R","潮汐海灵":"L","百万贴吧网友":"L","金光炁灵":"L","桃溪花仙":"L","紫电刀灵":"L","钢刃剑灵":"L","青莲火灵":"L","风吟鹤":"L","蓝银皇":"L","九宝琉璃塔":"L","渊虹":"R","式神":"L","霜铃刀灵":"L","溯音迅刀":"L","金角龙灵":"L","炽棋火灵":"R","灵药藤":"L","豆宝宝":"N","晚秋喵":"N","零一":"N","星河晶灵":"L","言灵蝶":"L","星尘棒灵":"R","绽红花刃":"L","梅香生灵":"L","万象偶灵":"L","月华镜灵":"L","木鸢":"R","槐芽守护灵":"L","妖刀剑灵":"R","术杖灵":"R","钢甲螳螂":"L","铜芯啮鼠":"L","金鬃烈马":"L","青翼雨燕":"L","__sil:normal":"R","__sil:fire":"L","__sil:water":"R","__sil:grass":"L","__sil:electric":"L","__sil:ice":"L","__sil:fighting":"N","__sil:poison":"N","__sil:ground":"L","__sil:flying":"R","__sil:psychic":"R","__sil:bug":"L","__sil:rock":"R","__sil:ghost":"N","__sil:dragon":"L","__sil:dark":"L","__sil:steel":"R","__sil:fairy":"N","__sil:machine":"L","__sil:erosion":"L","__sil:bloodlust":"N"};
;
window.P12_PROSE_V7_CSS="/* ==========================================================================\n   WT-v7 · 明亮少年漫机能风 · 平时流式正文套件与全玩法媒介卡片样式表\n   设计铁律：\n   1) 向《晓之夜歌》看齐：流式自适应容器 width:100%，随页面平滑伸缩，零死宽死高！\n   2) 废除整页城市照片糊字背景！城市与地形实景收纳进顶栏右侧 15° 斜切天际线微视窗。\n   3) 统一全卡陶瓷亮白 (#FFFFFF) × 深海藏青 (#1B2340) × 朝阳橙 (#FF6B2B) × 晴空青 (#00C2FF)。\n   ========================================================================== */\n:root {\n  --wt-navy: #1b2340;\n  --wt-navy-2: #263259;\n  --wt-paper: #fcfdff;\n  --wt-ceramic: #ffffff;\n  --wt-ceramic-2: #f2f7fe;\n  --wt-ice: #cfe0f5;\n  --wt-sun: #ff6b2b;\n  --wt-sky: #1da1f2;\n  --wt-cyan: #00c2ff;\n  --wt-mint: #10b981;\n  --wt-gold: #ffb800;\n  --wt-hot: #ff2e55;\n  --wt-ink: #1b2340;\n  --wt-muted: #52607a;\n  --wt-sans: \"HarmonyOS Sans SC\", \"Source Han Sans SC\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  --wt-mono: \"Bahnschrift\", \"DIN Alternate\", \"JetBrains Mono\", Consolas, monospace;\n}\n\n/* 宿主气泡流式解放：随聊天窗自然变大变小，绝不硬锁 1280px 套 900px */\n.centered-message-shell:has(.p12-page-seed),\n.centered-message-shell:has(.wt-story),\n.centered-message-shell:has(.wt-reg) {\n  width: min(96%, 980px) !important;\n  max-width: min(96%, 980px) !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  border: 0 !important;\n}\n.centered-message-shell:has(.p12-page-seed) .message-content-wrapper,\n.centered-message-shell:has(.wt-story) .message-content-wrapper {\n  background: transparent !important;\n  padding: 0 !important;\n  margin: 0 0 18px !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  max-width: none !important;\n  width: 100% !important;\n}\n.markdown-body:has(.p12-page-seed),\n.markdown-body:has(.wt-story) {\n  background: transparent !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.markdown-body .p12-page-seed,\n.markdown-body [data-p12-merged-empty=\"1\"] {\n  display: none !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  height: 0 !important;\n}\n.markdown-body div:has(> iframe[style*=\"display: none\"]),\n.markdown-body div:has(> iframe[style*=\"display:none\"]) {\n  margin: 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  min-height: 0 !important;\n  height: 0 !important;\n  overflow: hidden !important;\n}\n\n/* ==================== 1. 玩家开场登记折叠卡：ITA 见习执照数字通行证 ==================== */\n.markdown-body details.wt-reg {\n  width: min(640px, 100%);\n  margin: 8px 0 12px auto;\n  background: linear-gradient(125deg, #ffffff 0%, #eaf4ff 64%, #fff3e6 100%);\n  border: 2.5px solid var(--wt-navy);\n  border-left: 7px solid var(--wt-sun);\n  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);\n  box-shadow: 6px 6px 0 rgba(27, 35, 64, 0.14);\n  font-family: var(--wt-sans);\n  overflow: hidden;\n}\n.markdown-body details.wt-reg > summary {\n  list-style: none;\n  cursor: pointer;\n  padding: 11px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--wt-navy);\n}\n.markdown-body details.wt-reg > summary::-webkit-details-marker { display: none; }\n.markdown-body .v7-id-chip {\n  width: 42px;\n  height: 42px;\n  background: var(--wt-navy);\n  color: var(--wt-gold);\n  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);\n  display: grid;\n  place-items: center;\n  font: 900 11px/1.05 var(--wt-mono);\n  text-align: center;\n  flex: none;\n}\n.markdown-body .v7-id-body { flex: 1; min-width: 0; }\n.markdown-body .v7-id-kicker {\n  display: block;\n  font: 900 9.5px/1 var(--wt-mono);\n  letter-spacing: 0.16em;\n  color: var(--wt-sky);\n}\n.markdown-body .v7-id-row {\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.markdown-body .v7-id-row strong {\n  font-size: 16px;\n  font-weight: 900;\n  color: var(--wt-navy);\n}\n.markdown-body .v7-id-tag {\n  background: var(--wt-navy);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  padding: 2px 8px;\n  transform: skewX(-10deg);\n}\n.markdown-body .v7-id-tag.sun { background: var(--wt-sun); }\n.markdown-body .v7-id-more {\n  font: 800 11px/1 var(--wt-sans);\n  color: var(--wt-muted);\n  white-space: nowrap;\n}\n.markdown-body details.wt-reg > pre {\n  margin: 0 !important;\n  padding: 12px 16px !important;\n  border-top: 1.5px dashed var(--wt-ice);\n  background: rgba(255, 255, 255, 0.85) !important;\n  color: var(--wt-ink) !important;\n  font: 12px/1.65 var(--wt-mono) !important;\n  white-space: pre-wrap !important;\n}\n\n/* ==================== 2. 流式正文阅读纸页 (.wt-story) ==================== */\n.markdown-body .wt-story {\n  container-type: inline-size;\n  width: 100%;\n  background: var(--wt-paper) !important;\n  background-image: none !important;\n  color: var(--wt-ink);\n  font: 16px/1.95 var(--wt-sans);\n  border: 2.5px solid var(--wt-navy);\n  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px));\n  box-shadow: 0 16px 40px rgba(27, 35, 64, 0.11);\n  padding: 0 0 clamp(16px, 2.5vw, 26px);\n  overflow: hidden;\n  overflow-wrap: anywhere;\n}\n.markdown-body .wt-story::before {\n  content: \"\";\n  display: block;\n  height: 5px;\n  background: linear-gradient(90deg, var(--wt-navy) 0 35%, var(--wt-sky) 35% 70%, var(--wt-sun) 70% 100%);\n}\n.markdown-body .wt-story * {\n  box-sizing: border-box;\n}\n/* 约束外部预设可能注入的裸 HTML 面板不爆框 */\n.markdown-body .wt-story > div:not(.wt-scene):not(.wt-place-card):not(.wt-next):not(.p12-blk) {\n  max-width: calc(100% - clamp(28px, 6vw, 64px));\n  margin-left: auto;\n  margin-right: auto;\n}\n.markdown-body .wt-story > p,\n.markdown-body .wt-story > ul,\n.markdown-body .wt-story > ol,\n.markdown-body .wt-story > blockquote,\n.markdown-body .wt-story > hr.wt-break {\n  margin-left: clamp(16px, 4vw, 38px) !important;\n  margin-right: clamp(16px, 4vw, 38px) !important;\n}\n.markdown-body .wt-story > p {\n  margin-top: 0 !important;\n  margin-bottom: 1.05em !important;\n  text-indent: 0;\n  color: #1e293b;\n}\n.markdown-body .wt-story > p:first-of-type {\n  margin-top: 18px !important;\n}\n\n/* 对白与心理描写 */\n.markdown-body .wt-quote {\n  color: #0f3d6e !important;\n  background: linear-gradient(transparent 64%, rgba(0, 194, 255, 0.2) 64%) !important;\n  font-weight: 700 !important;\n  padding: 0 1px !important;\n}\n.markdown-body .wt-thought {\n  display: block;\n  margin: 10px 0;\n  padding: 8px 14px;\n  background: var(--wt-ceramic-2);\n  border-left: 4px solid var(--wt-sky);\n  clip-path: polygon(0 0, 100% 0, calc(100% - 9px) 100%, 0 100%);\n  color: var(--wt-muted);\n  font-style: normal;\n  font-size: 14.5px;\n  line-height: 1.75;\n}\n.markdown-body hr.wt-break {\n  border: 0 !important;\n  height: 2px !important;\n  background: linear-gradient(90deg, transparent, var(--wt-ice) 20%, var(--wt-sun) 50%, var(--wt-ice) 80%, transparent) !important;\n  margin-top: 20px !important;\n  margin-bottom: 20px !important;\n}\n\n/* ==================== 3. 番剧切角场景顶栏 + 右侧 15° 斜切城市实景微视窗 ==================== */\n.markdown-body .wt-scene.v7-scene-bar {\n  scroll-margin-top: 56px;\n  position: relative;\n  background: #ffffff !important;\n  border-bottom: 2px solid var(--wt-ice) !important;\n  min-height: 98px;\n  display: grid !important;\n  grid-template-columns: minmax(0, 1fr) clamp(180px, 31cqw, 290px);\n  margin: 0 0 16px 0 !important;\n  padding: 0 !important;\n  color: var(--wt-navy) !important;\n  overflow: hidden;\n}\n.markdown-body .v7-sb-left {\n  padding: clamp(12px, 2vw, 16px) clamp(16px, 3.5vw, 32px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 7px;\n  min-width: 0;\n}\n.markdown-body .v7-sb-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.markdown-body .v7-ep-tag {\n  background: var(--wt-sun);\n  color: #fff !important;\n  font: 900 11px/1.1 var(--wt-sans);\n  padding: 3px 9px;\n  transform: skewX(-12deg);\n  letter-spacing: 0.06em;\n}\n.markdown-body .v7-time-tag {\n  background: var(--wt-navy) !important;\n  color: #fff !important;\n  font: 800 11.5px/1.1 var(--wt-mono);\n  padding: 3px 9px !important;\n}\n.markdown-body .v7-weather-tag {\n  background: var(--wt-ceramic-2);\n  border: 1.5px solid var(--wt-ice);\n  color: var(--wt-muted) !important;\n  font: 800 11.5px/1.1 var(--wt-sans) !important;\n  padding: 2px 9px;\n}\n.markdown-body .v7-sb-title-row {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 6px 12px;\n}\n.markdown-body .v7-sb-place {\n  margin: 0 !important;\n  font: 900 clamp(20px, 2.8cqw, 25px)/1.2 var(--wt-sans) !important;\n  color: var(--wt-navy) !important;\n  transform: none !important;\n}\n.markdown-body .v7-sb-place::after { display: none !important; }\n.markdown-body .v7-sb-crumb {\n  font: 800 12px/1.3 var(--wt-sans);\n  color: var(--wt-sky) !important;\n}\n.markdown-body .v7-sb-present {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.markdown-body .v7-sb-present:empty { display: none; }\n.markdown-body .v7-who-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--wt-ceramic-2);\n  border: 1.5px solid var(--wt-navy);\n  padding: 2px 9px 2px 3px;\n  border-radius: 999px;\n  font: 800 11.5px/1.2 var(--wt-sans);\n  color: var(--wt-navy);\n}\n.markdown-body .v7-who-pill .who-av {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #dbeafe;\n  background-size: cover;\n  background-position: center;\n  border: 1px solid var(--wt-navy);\n  display: inline-grid;\n  place-items: center;\n  font-size: 10px;\n  font-weight: 900;\n  color: var(--wt-navy);\n  flex: none;\n}\n.markdown-body .v7-sb-citywin {\n  position: relative;\n  clip-path: polygon(26px 0, 100% 0, 100% 100%, 0 100%);\n  border-left: 4px solid var(--wt-sun);\n  background:\n    radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.7), transparent 55%),\n    linear-gradient(135deg, #bfe4ff 0%, #7dd3fc 52%, #38bdf8 100%);\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n.markdown-body .v7-sb-citywin span {\n  position: absolute;\n  right: 8px;\n  bottom: 7px;\n  background: rgba(27, 35, 64, 0.84);\n  color: #fff;\n  font: 900 9.5px/1 var(--wt-mono);\n  padding: 3px 7px;\n  letter-spacing: 0.08em;\n}\n\n/* ==================== 4. 通用面板基座 (.wt-panel) ==================== */\n.markdown-body .wt-story > .wt-panel,\n.markdown-body .wt-story > .wt-dex,\n.markdown-body .wt-story > .p12-blk {\n  margin: 16px clamp(14px, 4vw, 38px) !important;\n  max-width: none !important;\n}\n.markdown-body .wt-panel {\n  background: #ffffff !important;\n  border: 2.5px solid var(--wt-navy) !important;\n  border-radius: 0 !important;\n  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);\n  box-shadow: 5px 5px 0 rgba(27, 35, 64, 0.13) !important;\n  padding: 0 !important;\n  overflow: hidden;\n}\n.markdown-body .wt-panel > header,\n.markdown-body .wt-panel > summary {\n  list-style: none;\n  background: var(--wt-navy);\n  color: #fff !important;\n  padding: 9px 15px;\n  font: 900 13px/1.2 var(--wt-sans);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.markdown-body .wt-panel > summary::-webkit-details-marker { display: none; }\n.markdown-body .wt-panel .wt-raw {\n  padding: 13px 16px;\n  margin: 0 !important;\n  white-space: pre-wrap;\n  font-size: 13.8px;\n  line-height: 1.78;\n  color: var(--wt-ink);\n}\n\n/* ==================== 5. <快讯> 零生图「记者目击抓拍合成照」现代杂志画报 ==================== */\n.markdown-body .wt-news {\n  border-left: 6px solid var(--wt-sun) !important;\n}\n.markdown-body .wt-news > summary {\n  background: var(--wt-navy);\n  border-bottom: 2px solid var(--wt-sun);\n}\n.markdown-body .v7-mag-brand {\n  font: 900 13px/1 var(--wt-mono);\n  letter-spacing: 0.12em;\n  color: #fff;\n}\n.markdown-body .wt-news .wt-news-tag {\n  background: var(--wt-sun);\n  color: #fff;\n  padding: 2px 8px;\n  font: 900 10.5px/1.1 var(--wt-sans);\n  transform: skewX(-10deg);\n  white-space: nowrap;\n  flex: none;\n}\n.markdown-body .v7-mag-fold {\n  margin-left: auto;\n  font: 700 11px/1 var(--wt-sans);\n  color: #cbd5e1;\n  white-space: nowrap;\n  flex: none;\n}\n.markdown-body .v7-news-body {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n}\n.markdown-body .v7-news-body.has-shot {\n  grid-template-columns: clamp(190px, 34cqw, 265px) minmax(0, 1fr);\n}\n.markdown-body .v7-news-shot {\n  position: relative;\n  min-height: 176px;\n  background-color: #141a33;\n  background-size: cover;\n  background-position: center;\n  border-right: 2px solid var(--wt-navy);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.markdown-body .v7-news-shot[hidden] { display: none !important; }\n.markdown-body .v7-news-shot::before {\n  content: \"\";\n  position: absolute;\n  inset: 10px;\n  border: 1.5px dashed rgba(255, 255, 255, 0.65);\n  pointer-events: none;\n  z-index: 3;\n}\n.markdown-body .v7-news-shot .rec-badge {\n  position: absolute;\n  left: 14px;\n  top: 13px;\n  z-index: 4;\n  background: rgba(255, 46, 85, 0.92);\n  color: #fff;\n  padding: 2px 7px;\n  font: 900 9.5px/1.1 var(--wt-mono);\n  letter-spacing: 0.08em;\n}\n.markdown-body .v7-news-shot img.snap-beast {\n  position: relative;\n  z-index: 2;\n  width: 124px;\n  height: 124px;\n  object-fit: contain;\n  filter: drop-shadow(0 10px 12px rgba(0, 0, 0, 0.52)) contrast(1.04);\n  transform: rotate(-2deg);\n}\n.markdown-body .v7-news-shot .snap-cap {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 4;\n  background: linear-gradient(180deg, transparent, rgba(20, 26, 51, 0.92));\n  color: #f8fafc;\n  padding: 16px 12px 7px;\n  font: 800 10.5px/1.25 var(--wt-sans);\n}\n.markdown-body .v7-news-list {\n  columns: 1 !important;\n  padding: 13px 16px !important;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.markdown-body .wt-news-date {\n  font: 900 11px/1 var(--wt-mono);\n  color: var(--wt-muted);\n  letter-spacing: 0.1em;\n  border-bottom: 1px dashed var(--wt-ice);\n  padding-bottom: 5px;\n}\n.markdown-body .wt-news-item {\n  padding: 8px 11px;\n  background: var(--wt-ceramic-2);\n  border-left: 4px solid var(--wt-sky);\n}\n.markdown-body .wt-news-item:nth-of-type(2n) { border-left-color: var(--wt-sun); }\n.markdown-body .wt-news-category {\n  display: inline-block;\n  font: 900 10.5px/1 var(--wt-sans);\n  color: #fff;\n  background: var(--wt-navy);\n  padding: 2px 7px;\n  margin-right: 7px;\n  transform: skewX(-10deg);\n}\n.markdown-body .wt-news-item p {\n  display: inline;\n  margin: 0 !important;\n  font-size: 13.5px;\n  font-weight: 700;\n  line-height: 1.65;\n  color: var(--wt-ink);\n}\n\n/* ==================== 6. <图鉴> 流式双栏装甲芯片卡（0 固定高度，0 死边距！） ==================== */\n.markdown-body .wt-dex {\n  position: relative !important;\n  height: auto !important;\n  min-height: 156px;\n  background: #ffffff !important;\n  border: 2.5px solid var(--wt-navy) !important;\n  border-radius: 0 !important;\n  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));\n  box-shadow: 6px 6px 0 rgba(27, 35, 64, 0.15) !important;\n  display: grid !important;\n  grid-template-columns: 164px minmax(0, 1fr);\n  overflow: hidden;\n}\n.markdown-body .v7-dex-stage {\n  position: relative;\n  background:\n    linear-gradient(rgba(29, 161, 242, 0.09) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(29, 161, 242, 0.09) 1px, transparent 1px),\n    radial-gradient(circle at 50% 58%, #d8f1ff 0%, #f4f9ff 72%);\n  background-size: 16px 16px, 16px 16px, 100% 100%;\n  border-right: 2px solid var(--wt-ice);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px;\n  min-height: 152px;\n}\n.markdown-body .v7-dex-disc {\n  position: absolute;\n  bottom: 14px;\n  width: 118px;\n  height: 28px;\n  border-radius: 50%;\n  background: radial-gradient(ellipse at center, #ffffff 0%, #00c2ff 68%, transparent 75%);\n  pointer-events: none;\n}\n.markdown-body .wt-dex .wt-dex-art {\n  position: relative !important;\n  left: auto !important;\n  top: auto !important;\n  z-index: 2;\n  width: 118px !important;\n  height: 118px !important;\n  border-radius: 0 !important;\n  background-color: transparent !important;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center bottom !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  filter: drop-shadow(0 8px 10px rgba(27, 35, 64, 0.26));\n}\n.markdown-body .wt-dex .wt-dex-info {\n  position: relative !important;\n  right: auto !important;\n  top: auto !important;\n  transform: none !important;\n  width: auto !important;\n  padding: 13px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 6px;\n  min-width: 0;\n}\n.markdown-body .wt-dex .wt-dex-newb {\n  position: static !important;\n  align-self: flex-start;\n  background: var(--wt-sun);\n  color: #fff !important;\n  font: 900 10px/1 var(--wt-mono) !important;\n  padding: 3px 8px;\n  transform: skewX(-12deg);\n  letter-spacing: 0.08em;\n}\n.markdown-body .v7-dex-headrow {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.markdown-body .wt-dex .wt-dex-nm {\n  font: 900 20px/1.2 var(--wt-sans) !important;\n  color: var(--wt-navy);\n}\n.markdown-body .wt-dex .wt-types {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.markdown-body .wt-dex .wt-types img {\n  width: 20px;\n  height: 20px;\n  object-fit: contain;\n}\n.markdown-body .wt-dex .wt-dex-st {\n  margin: 0 !important;\n  font: 700 13px/1.6 var(--wt-sans) !important;\n  color: var(--wt-muted);\n}\n.markdown-body .v7-dex-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding-top: 6px;\n  border-top: 1.5px dashed var(--wt-ice);\n  font: 800 11.5px/1.2 var(--wt-sans);\n  color: var(--wt-sky);\n}\n.markdown-body .wt-dex .wt-dex-more {\n  margin: 0 !important;\n  font: 900 11.5px/1 var(--wt-sans) !important;\n  color: var(--wt-sun);\n  cursor: pointer;\n}\n/* JS 尚未填充时先展示原文兜底，填充后隐藏 .wt-raw */\n.markdown-body .wt-dex[data-p12-filled=\"1\"] .wt-raw { display: none !important; }\n.markdown-body .wt-dex:not([data-p12-filled=\"1\"]) .wt-raw {\n  grid-column: 1 / -1;\n  padding: 10px 14px;\n  border-top: 1px dashed var(--wt-ice);\n  font-size: 13px;\n}\n\n/* ==================== 7. 都市小玩法 6 大媒介卡片 ==================== */\n/* 委托板 / 接取 / 完成 */\n.markdown-body .v7-bounty-board > header {\n  background: var(--wt-navy);\n  border-bottom: 2px solid var(--wt-gold);\n}\n.markdown-body .v7-bounty-board > header::before {\n  content: \"BOUNTY //\";\n  background: var(--wt-sun);\n  color: #fff;\n  font: 900 10.5px/1 var(--wt-mono);\n  padding: 3px 7px;\n  transform: skewX(-10deg);\n}\n.markdown-body .v7-bb-ticket {\n  margin: 8px 0;\n  padding: 9px 12px;\n  background: #f8fbff;\n  border: 1.5px solid var(--wt-ice);\n  border-left: 4px solid var(--wt-sun);\n}\n/* 竞拍灯牌 */\n.markdown-body .v7-auction-card > header {\n  background: linear-gradient(90deg, #1b2340, #7c2d12);\n  border-bottom: 2px solid var(--wt-gold);\n}\n.markdown-body .v7-auction-card > header::before {\n  content: \"AUCTION //\";\n  background: var(--wt-gold);\n  color: var(--wt-navy);\n  font: 900 10.5px/1 var(--wt-mono);\n  padding: 3px 7px;\n  transform: skewX(-10deg);\n}\n/* 暗巷黑市终端 */\n.markdown-body .v7-blackmarket-card {\n  background: #13192e !important;\n  border-color: #7c3aed !important;\n  border-left: 6px solid #a855f7 !important;\n}\n.markdown-body .v7-blackmarket-card > header {\n  background: #0d1222;\n  color: #e9d5ff !important;\n  border-bottom: 1.5px solid rgba(168, 85, 247, 0.45);\n}\n.markdown-body .v7-blackmarket-card > header::before {\n  content: \"DARKNET //\";\n  background: #9333ea;\n  color: #fff;\n  font: 900 10.5px/1 var(--wt-mono);\n  padding: 3px 7px;\n  transform: skewX(-10deg);\n}\n.markdown-body .v7-blackmarket-card .wt-raw {\n  color: #e2e8f0 !important;\n}\n.markdown-body .v7-blackmarket-card .wt-quote {\n  color: #f0abfc !important;\n  background: rgba(168, 85, 247, 0.22) !important;\n}\n/* 潮玩盲盒舱 */\n.markdown-body .v7-blindbox-card {\n  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 55%, #fff7ed 100%) !important;\n  border-left: 6px solid var(--wt-gold) !important;\n}\n.markdown-body .v7-blindbox-card > header::before {\n  content: \"CAPSULE //\";\n  background: var(--wt-sky);\n  color: #fff;\n  font: 900 10.5px/1 var(--wt-mono);\n  padding: 3px 7px;\n  transform: skewX(-10deg);\n}\n.markdown-body .v7-ssr-orb {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 0 8px;\n  padding: 4px 12px;\n  background: var(--wt-navy);\n  color: var(--wt-gold);\n  font: 900 11.5px/1.1 var(--wt-mono);\n  transform: skewX(-10deg);\n}\n/* <手机> 频道卡片 */\n.markdown-body .wt-phone > header {\n  background: linear-gradient(90deg, var(--wt-navy), #1e3a8a);\n}\n.markdown-body .wt-phone-tabs {\n  padding: 12px 14px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.markdown-body .wt-phone-tab { display: contents; }\n.markdown-body .wt-phone-tab input { position: absolute; opacity: 0; pointer-events: none; }\n.markdown-body .wt-phone-label {\n  padding: 5px 12px;\n  border: 1.5px solid var(--wt-navy);\n  background: var(--wt-ceramic-2);\n  color: var(--wt-navy);\n  font: 800 12px/1.1 var(--wt-sans);\n  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);\n  cursor: pointer;\n}\n.markdown-body .wt-phone-page {\n  display: none;\n  flex-basis: 100%;\n  order: 2;\n  margin-top: 6px !important;\n  padding: 11px 14px !important;\n  background: #f8fbff;\n  border: 1.5px solid var(--wt-ice);\n  border-left: 4px solid var(--wt-sky);\n}\n.markdown-body .wt-phone-tab:has(input:checked) .wt-phone-label {\n  background: var(--wt-sun);\n  border-color: var(--wt-navy);\n  color: #fff;\n}\n.markdown-body .wt-phone-tab:has(input:checked) .wt-phone-page {\n  display: block;\n}\n/* <抉择> 关键分岔卡 */\n.markdown-body .wt-decision {\n  border-left: 6px solid var(--wt-gold) !important;\n  background: linear-gradient(180deg, #fffdf7, #ffffff) !important;\n}\n.markdown-body .wt-decision > header {\n  background: var(--wt-navy);\n  color: var(--wt-gold) !important;\n}\n.markdown-body .wt-choice {\n  display: block;\n  width: 100%;\n  margin: 8px 0 0;\n  padding: 10px 14px;\n  background: #ffffff;\n  border: 2px solid var(--wt-navy);\n  border-left: 6px solid var(--wt-gold);\n  clip-path: polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 0 100%);\n  font: 800 14px/1.5 var(--wt-sans);\n  color: var(--wt-navy);\n  text-align: left;\n  cursor: pointer;\n  box-shadow: 3px 3px 0 rgba(27, 35, 64, 0.14);\n  transition: transform 0.13s;\n}\n.markdown-body .wt-choice:hover {\n  transform: translateX(4px);\n  border-left-color: var(--wt-sun);\n}\n\n/* ==================== 8. 番剧 NEXT // 三色切角行动指令条（彻底隐藏假输入框！） ==================== */\n.markdown-body .wt-dock {\n  display: none !important;\n}\n.markdown-body .wt-next {\n  margin: 18px 0 0 !important;\n  max-width: none !important;\n  background: linear-gradient(180deg, #f0f6ff 0%, #e5effc 100%);\n  border-top: 2px solid var(--wt-navy);\n  padding: 15px clamp(16px, 4vw, 38px) 18px;\n}\n.markdown-body .v7-next-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.markdown-body .v7-next-hd b {\n  font: 900 14.5px/1 var(--wt-mono);\n  letter-spacing: 0.08em;\n  color: var(--wt-navy);\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.markdown-body .v7-next-hd b em {\n  background: var(--wt-navy);\n  color: var(--wt-gold);\n  padding: 3px 8px;\n  font-style: normal;\n  transform: skewX(-12deg);\n}\n.markdown-body .v7-next-hd span {\n  font: 700 12px/1.2 var(--wt-sans);\n  color: var(--wt-muted);\n}\n.markdown-body .v7-opt-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.markdown-body .wt-strip.wt-opt {\n  --oc: var(--wt-sky);\n  width: 100%;\n  margin: 0 !important;\n  background: #ffffff;\n  border: 2px solid var(--wt-navy);\n  border-left: 7px solid var(--oc);\n  clip-path: polygon(0 0, calc(100% - 13px) 0, 100% 13px, 100% 100%, 0 100%);\n  padding: 10px 15px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transform: none !important;\n  box-shadow: 4px 4px 0 rgba(27, 35, 64, 0.13);\n  cursor: pointer;\n  text-align: left;\n  transition: transform 0.14s, box-shadow 0.14s;\n}\n.markdown-body .wt-strip.wt-opt > * { transform: none !important; }\n.markdown-body .wt-strip.wt-opt::before { display: none !important; }\n.markdown-body .wt-strip.wt-opt:nth-of-type(2),\n.markdown-body .wt-strip.wt-opt[data-p12-label=\"冒险\"] {\n  --oc: var(--wt-hot);\n}\n.markdown-body .wt-strip.wt-opt:nth-of-type(3),\n.markdown-body .wt-strip.wt-opt[data-p12-label=\"意外\"],\n.markdown-body .wt-strip.wt-opt[data-p12-label=\"出人意料\"] {\n  --oc: #f59e0b;\n}\n.markdown-body .wt-strip.wt-opt:hover {\n  transform: translateX(5px) !important;\n  box-shadow: 6px 6px 0 var(--oc);\n}\n.markdown-body .wt-strip.wt-opt .k {\n  width: auto !important;\n  background: var(--oc);\n  color: #fff !important;\n  font: 900 11.5px/1 var(--wt-sans) !important;\n  font-style: normal !important;\n  padding: 4px 9px;\n  transform: skewX(-12deg) !important;\n  flex: none;\n}\n.markdown-body .wt-strip.wt-opt .m {\n  font: 800 14.5px/1.45 var(--wt-sans) !important;\n  color: var(--wt-navy);\n  flex: 1;\n}\n\n/* ==================== 9. 底部机能状态摘要与折叠条 (.wt-status / .wt-progress / .wt-roster) ==================== */\n.markdown-body .wt-status.v7-status-strip {\n  margin: 12px clamp(14px, 4vw, 38px) 0 !important;\n  border: 2px solid var(--wt-navy) !important;\n  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);\n  box-shadow: none !important;\n}\n.markdown-body .wt-status.v7-status-strip > summary {\n  background: var(--wt-navy);\n  color: #fff !important;\n  padding: 8px 16px;\n  font: 800 12px/1.2 var(--wt-mono);\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.markdown-body .wt-status.v7-status-strip > summary b { color: var(--wt-gold); }\n.markdown-body .v7-st-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--wt-mint);\n  box-shadow: 0 0 8px var(--wt-mint);\n  display: inline-block;\n}\n.markdown-body .v7-st-more {\n  margin-left: auto;\n  font: 700 11px/1 var(--wt-sans);\n  color: #93c5fd;\n}\n.markdown-body .wt-progress > summary,\n.markdown-body .wt-roster > summary,\n.markdown-body .wt-battle-fold > summary {\n  background: var(--wt-ceramic-2) !important;\n  color: var(--wt-navy) !important;\n  border-left: 5px solid var(--wt-sky);\n  font-size: 12.5px;\n}\n\n/* 窄屏 / 手机竖屏流式折叠 */\n@media (max-width: 680px) {\n  .centered-message-shell:has(.p12-page-seed),\n  .centered-message-shell:has(.wt-story) {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .markdown-body .wt-story {\n    clip-path: none;\n    border-left: 0;\n    border-right: 0;\n    font-size: 15.5px;\n  }\n  .markdown-body .wt-scene.v7-scene-bar {\n    grid-template-columns: 1fr;\n  }\n  .markdown-body .v7-sb-citywin {\n    height: 68px;\n    clip-path: none;\n    border-left: 0;\n    border-top: 2px solid var(--wt-sun);\n  }\n  .markdown-body .v7-news-body.has-shot {\n    grid-template-columns: 1fr;\n  }\n  .markdown-body .v7-news-shot {\n    border-right: 0;\n    border-bottom: 2px solid var(--wt-navy);\n    min-height: 156px;\n  }\n  .markdown-body .wt-dex {\n    grid-template-columns: 1fr;\n  }\n  .markdown-body .v7-dex-stage {\n    border-right: 0;\n    border-bottom: 2px solid var(--wt-ice);\n    min-height: 132px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .markdown-body .wt-story * { animation: none !important; transition: none !important; }\n}\n";
;
window.P12_WRISTBAND_V3_CSS="/* === WT-v7 / OS v3.0 云端手环即时变量与交互增强样式 === */\n.p12-ui-lock-banner {\n  position: fixed;\n  top: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 99990;\n  max-width: min(740px, calc(100vw - 24px));\n  width: max-content;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 9px 14px;\n  background: #fff7ed;\n  color: #1b2340;\n  border: 2.5px solid #ff2e55;\n  border-left: 6px solid #ff6b2b;\n  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);\n  box-shadow: 0 10px 26px rgba(27, 35, 64, .22);\n  font: 700 12.5px/1.45 \"HarmonyOS Sans SC\", \"Source Han Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n}\n.p12-ui-lock-banner b { color: #be123c; font-weight: 900; }\n.p12-ui-lock-btn {\n  border: 2px solid #1b2340;\n  background: linear-gradient(135deg, #ff6b2b, #ff2e55);\n  color: #fff;\n  padding: 5px 12px;\n  font: 900 12px/1.2 inherit;\n  cursor: pointer;\n  white-space: nowrap;\n  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);\n}\n.p12-ui-lock-btn:hover { filter: brightness(1.06); transform: translateY(-1px); }\n\n#p12hook .v7-sync-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 1px 7px;\n  font: 800 10px/1.5 inherit;\n  border-radius: 3px;\n  background: rgba(16, 185, 129, .18);\n  color: #6ee7b7;\n  border: 1px solid rgba(16, 185, 129, .45);\n}\n#p12hook .v7-sync-pill.off {\n  background: rgba(245, 158, 11, .18);\n  color: #fde68a;\n  border-color: rgba(245, 158, 11, .45);\n}\n#p12hook .v7-sync-pill i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  display: inline-block;\n}\n#p12hook .v7-undo-hdr {\n  border: 1px solid rgba(255, 255, 255, .35);\n  background: rgba(255, 255, 255, .14);\n  color: #fff;\n  padding: 2px 7px;\n  font: 800 10.5px/1.3 inherit;\n  cursor: pointer;\n}\n#p12hook .v7-undo-hdr:hover { background: rgba(255, 107, 43, .85); border-color: #fff; }\n\n#p12hook .p12-lock-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 7px 10px;\n  margin: 0 0 8px;\n  background: #fff1f2;\n  border: 1.5px solid #fda4af;\n  border-left: 4px solid #ff2e55;\n  font: 700 11.5px/1.4 inherit;\n  color: #881337;\n}\n\n#p12hook .v7-quick-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 5px;\n  margin-top: 7px;\n  padding-top: 6px;\n  border-top: 1px dashed #cfe0f5;\n}\n#p12hook .v7-act-btn {\n  border: 1.5px solid #1b2340;\n  background: #fff;\n  color: #1b2340;\n  padding: 3px 8px;\n  font: 800 11px/1.25 inherit;\n  cursor: pointer;\n  clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);\n}\n#p12hook .v7-act-btn:hover { background: #dbeeff; }\n#p12hook .v7-act-btn.pri { background: #1da1f2; color: #fff; border-color: #0284c7; }\n#p12hook .v7-act-btn.sun { background: #ff6b2b; color: #fff; border-color: #c2410c; }\n#p12hook .v7-act-btn:disabled { opacity: .45; cursor: not-allowed; }\n#p12hook .v7-act-sel {\n  border: 1.5px solid #94a3b8;\n  background: #fff;\n  color: #1b2340;\n  padding: 2px 5px;\n  font: 700 11px/1.2 inherit;\n}\n\n#p12hook .v7-store-wrap {\n  margin-top: 7px;\n  background: #f8fbff;\n  border: 1.5px solid #cfe0f5;\n  padding: 7px 9px;\n}\n#p12hook .v7-store-hd {\n  font: 900 11px/1.2 inherit;\n  color: #52607a;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n#p12hook .v7-store-pills { display: flex; flex-wrap: wrap; gap: 5px; }\n#p12hook .v7-store-pill {\n  border: 1.5px solid #93c5fd;\n  background: #fff;\n  color: #1b2340;\n  padding: 3px 8px;\n  font: 800 11px/1.25 inherit;\n  cursor: pointer;\n}\n#p12hook .v7-store-pill.on,\n#p12hook .v7-store-pill:hover { border-color: #ff6b2b; background: #fff7ed; color: #c2410c; }\n#p12hook .v7-swap-box {\n  margin-top: 6px;\n  padding: 6px 8px;\n  background: #fff7ed;\n  border: 1.5px solid #fdba74;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 5px;\n  font: 700 11px/1.3 inherit;\n}\n\n#p12hook .v7-bag-list { display: flex; flex-direction: column; gap: 6px; }\n#p12hook .v7-bag-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  background: #fff;\n  border: 1.5px solid #cfe0f5;\n  padding: 6px 9px;\n  flex-wrap: wrap;\n}\n#p12hook .v7-bag-left { display: flex; align-items: center; gap: 7px; min-width: 0; flex: 1; }\n#p12hook .v7-bag-left b { font: 800 12.5px/1.2 inherit; color: #1b2340; }\n#p12hook .v7-bag-eff { font: 700 10.5px/1.2 inherit; color: #059669; margin-left: 4px; }\n#p12hook .v7-bag-ops { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }\n\n#p12hook .v7-shop-box {\n  margin-top: 9px;\n  border: 1.5px solid #1b2340;\n  background: #f8fbff;\n}\n#p12hook .v7-shop-box > summary {\n  padding: 6px 9px;\n  font: 900 11.5px/1.3 inherit;\n  color: #1b2340;\n  background: #e0f2fe;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n#p12hook .v7-shop-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));\n  gap: 6px;\n  padding: 8px;\n}\n#p12hook .v7-shop-item {\n  background: #fff;\n  border: 1.5px solid #cfe0f5;\n  padding: 6px 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 5px;\n}\n#p12hook .v7-shop-item small { font: 600 10.5px/1.35 inherit; color: #52607a; }\n\n#p12hook .v7-sch-form {\n  display: grid;\n  grid-template-columns: 74px 58px 86px 1fr auto;\n  gap: 4px;\n  margin-top: 6px;\n}\n#p12hook .v7-sch-form input,\n#p12hook .v7-search-inp {\n  border: 1.5px solid #cfe0f5;\n  padding: 4px 6px;\n  font: 700 11.5px/1.3 inherit;\n  background: #fff;\n  color: #1b2340;\n  min-width: 0;\n}\n#p12hook .v7-search-inp { width: 100%; margin-bottom: 7px; }\n\n#p12hook .v7-log-list { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; }\n#p12hook .v7-log-row {\n  font: 600 11px/1.4 inherit;\n  padding: 4px 7px;\n  background: #f8fbff;\n  border-left: 3px solid #1da1f2;\n  color: #334155;\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n}\n#p12hook .v7-log-row.wb { border-left-color: #10b981; }\n\n.p12-toast {\n  position: fixed;\n  right: 22px;\n  bottom: 82px;\n  z-index: 99995;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  max-width: min(400px, calc(100vw - 32px));\n  padding: 8px 12px;\n  background: #1b2340;\n  color: #fff;\n  border: 2px solid #10b981;\n  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);\n  box-shadow: 0 10px 26px rgba(27, 35, 64, .32);\n  font: 700 12px/1.4 \"HarmonyOS Sans SC\", \"PingFang SC\", sans-serif;\n}\n.p12-toast.err { border-color: #ff2e55; background: #4c0519; }\n.p12-toast button {\n  border: 1px solid rgba(255, 255, 255, .4);\n  background: #ff6b2b;\n  color: #fff;\n  padding: 2px 8px;\n  font: 900 11px/1.3 inherit;\n  cursor: pointer;\n}\n\n@media (max-width: 600px) {\n  .p12-ui-lock-banner { top: 6px; padding: 7px 10px; font-size: 11.5px; }\n  #p12hook .v7-sch-form { grid-template-columns: 1fr 1fr; }\n  #p12hook .v7-sch-form button { grid-column: span 2; }\n  .p12-toast { right: 12px; bottom: 76px; }\n}\n";
;
// <status> 解析器：把 AI 写的状态栏读成结构化数据，给手环 / UI 模板用。
// 格式依据 05-世界书工程规格.md 2.7。原则：容错读，读不出的字段给 null（由调用方保留上一轮值并标「未同步」），绝不编值。
(function (root) {
  'use strict';
  var FW = { '｜': '|', '：': ':', '（': '(', '）': ')', '【': '【', '】': '】', '％': '%', '，': ',', '　': ' ', '／': '/', '×': 'x', '＊': '*' };
  function norm(s) {
    return String(s)
      .replace(/[｜：（）％，　／＊×]/g, function (c) { return FW[c]; })
      .replace(/[\u00a0\t]+/g, ' ')
      .replace(/\*\*|__|`/g, '')
      .replace(/ *\| */g, '|').replace(/ *: */g, ':');
  }
  // 正文切法：模型常把思考段放 <cot>…</cot>，又在末尾附
  // <ui_template_updates>{ "rawStatus": "<status>…" }</ui_template_updates>。
  // 这两块里都可能有转义过的 <status>／<图鉴>／[场景|] 副本；读数前先切掉，只留正文。
  // 注意不能全局删 <ui_template_updates>：cot 里的格式示例也会写这个标签，会连真状态一起删掉。
  function body(text) {
    var t = String(text == null ? '' : text);
    var close = /<\/cot\s*>/gi, m, lastEnd = -1;
    while ((m = close.exec(t))) lastEnd = m.index + m[0].length;
    if (lastEnd >= 0) t = t.slice(lastEnd);
    var open = t.search(/<\s*ui_template_updates\s*>/i);
    if (open >= 0) t = t.slice(0, open);
    return t;
  }
  // 取正文里最后一个 <status> 块；没写结尾标签时读到下一个标签或文末
  function pickBlock(text) {
    var t = body(text).replace(/```[a-z]*\n?/gi, '');
    var re = /<\s*status\s*>/gi, m, last = -1;
    while ((m = re.exec(t))) last = m.index + m[0].length;
    if (last < 0) {
      var k = t.lastIndexOf('【驯兽师】'); // 连开头标签都丢了，但有【驯兽师】行
      if (k < 0) return null;
      last = k;
    }
    var rest = t.slice(last);
    var end = rest.search(/<\s*\/\s*status\s*>|<\s*(选项|抉择|ui_template_updates|status)\b/i);
    return { body: end < 0 ? rest : rest.slice(0, end), closed: /<\s*\/\s*status\s*>/i.test(rest), count: (t.match(/<\s*status\s*>/gi) || []).length };
  }
  function sections(body) {
    var out = {}, cur = null;
    norm(body).split(/\r?\n/).forEach(function (raw) {
      var line = raw.trim(); if (!line) return;
      var h = line.match(/^[-*#>\s]*【([^】]{1,8})】\s*(.*)$/);
      if (h) { cur = h[1].trim(); out[cur] = out[cur] || []; if (h[2]) out[cur].push(h[2]); }
      else if (cur) out[cur].push(line);
    });
    return out;
  }
  function kv(str) { // 「执照:见习|徽章:中国 0/8」→ {执照:'见习',...}
    var o = {};
    String(str).split('|').forEach(function (p) { var m = p.match(/^\s*([^:|\s]{1,8})\s*:\s*(.+?)\s*$/) || p.match(/^\s*([^:|\s\d]{1,8})\s+(.+?)\s*$/); if (m) o[m[1].trim()] = m[2]; });
    return o;
  }
  var TYPES = /^(一般|普通|火|水|草|电|冰|格斗|毒|地面|飞行|超能|超能力|虫|岩石|幽灵|龙|恶|钢|妖精|机械|侵蚀|噬血)$/;
  function num(s) { var m = String(s == null ? '' : s).match(/-?\d+(\.\d+)?/); return m ? +m[0] : null; }
  // 主加载链的引擎在解析状态前已就绪；CommonJS离线共享同一份字表。
  // 缺可选引擎时保留姓名与合法括号，未给出的元数据延后交引擎推断。
  function parseMove(value, index, types) {
    var E = root.P12BattleEngine;
    if (!E && typeof module !== 'undefined' && module.exports && typeof require === 'function') E = require('./battle/engine.js');
    if (E && E.normMove) { var mv = E.normMove(value, index, types); return { '名': mv.name, '属性': mv.type, '档': mv.tier }; }
    var raw = String(value || '').trim(), m = raw.match(/[（(]\s*([^()（）·・]+?)\s*[·・]\s*([^()（）]+?)\s*[）)]\s*$/);
    var type = m && m[1].replace(/属性$/, '').trim(), tier = m && m[2].trim();
    if (tier === '绝技') tier = '绝';
    var valid = m && TYPES.test(type) && ['轻', '中', '重', '绝', '状态', '防守'].indexOf(tier) >= 0;
    return { '名': raw.replace(/[（(][^()（）]*[·・][^()（）]*[）)]$/, '').trim(), '属性': valid ? type : null, '档': valid ? tier : null };
  }
  function beast(line, next) {
    var b = { raw: line };
    var hm = line.match(/^[·•\-*\s]*([^(|\s]+)\s*\(([^)]*)\)\s*([^|]*)/);
    if (!hm) return null;
    b.nick = hm[1]; var info = hm[2].split('|').map(function (x) { return x.trim(); });
    b.species = info[0] || null; b.stage = info.find(function (x) { return /期|体$/.test(x); }) || null;
    var ty = info.find(function (x) { return /属性/.test(x); }) || info.slice(1).find(function (x) { return x !== b.stage && (/\//.test(x) || TYPES.test(x)); });
    b.types = ty ? ty.split('/').map(function (x) { return x.replace(/属性/g, '').trim(); }).filter(Boolean) : [];
    b.where = hm[3].trim() || null;
    var f = {}; line.split('|').slice(1).forEach(function (p) { var m = p.trim().match(/^(体力|伤势|疲劳|羁绊|成长|训练)\s*:?\s*(.*)$/); if (m) f[m[1]] = m[2].trim(); });
    b.hp = num(f['体力']); b.injury = f['伤势'] || null; b.fatigue = num(f['疲劳']);
    b.bond = num(f['羁绊']); var bt = (f['羁绊'] || '').match(/\(([^)]+)\)/); b.bondTier = bt ? bt[1] : null;
    b.growth = num(f['成长']); b.training = f['训练'] || null;
    var level = line.match(/(?:^|[|\s])(?:Lv\.?|等级)\s*:?\s*(\d+)(?!\d)/i);
    var experience = line.match(/经验\s*:?\s*(\d+)\s*\/\s*(\d+)/);
    b.level = level && +level[1] >= 1 && +level[1] <= 100 ? +level[1] : null;
    b.exp = experience ? +experience[1] : null;
    b.expNeed = experience && +experience[2] > 0 ? +experience[2] : null;
    b.bottleneck = /瓶颈/.test(line);
    if (next && /^招式/.test(next)) {
      var mv = next.replace(/^招式\s*:?\s*/, ''); var parts = mv.split('|');
      b.moves = parts[0].split('/').map(function (x) { return x.trim(); }).filter(Boolean).map(function (x, i) { return parseMove(x, i, b.types); });
      var store = (parts.find(function (x) { return /^仓库/.test(x.trim()); }) || '').replace(/^\s*仓库\s*:?\s*/, '');
      b.storage = store ? store.split(/[、,\/]/).map(function (x) { return x.trim(); }).filter(function (x) { return x && !/^(无|没有|暂无)$/.test(x); }).map(function (x, i) { return parseMove(x, i, b.types); }) : [];
    }
    return b;
  }
  function parse(text) {
    var B = body(text);
    var blk = pickBlock(B);
    var r = { ok: false, closed: false, blocks: 0, fields: {}, missing: [], warnings: [] };
    if (!blk) { r.missing.push('status'); return r; }
    r.closed = blk.closed; r.blocks = blk.count;
    if (!blk.closed) r.warnings.push('没有 </status> 结尾');
    if (blk.count > 1) r.warnings.push('一条回复里有 ' + blk.count + ' 个 <status>，取最后一个');
    var S = sections(blk.body), F = r.fields;
    var tr = S['驯兽师'] && S['驯兽师'].join('|');
    if (tr) {
      var parts = tr.split('|'); F.name = parts[0].trim() || null; var o = kv(parts.slice(1).join('|'));
      F.license = o['执照'] || null; F.badges = o['徽章'] || null; F.rank = o['世界排名'] || o['排名'] || null;
      F.funds = o['资金'] || null; F.fundsNum = num((o['资金'] || '').replace(/,/g, '')); F.injury = o['伤势'] || null;
    }
    var team = S['出战队伍'] || S['队伍'];
    if (team) { F.team = []; for (var i = 0; i < team.length; i++) { if (/^招式/.test(team[i])) continue; var b = beast(team[i], team[i + 1]); if (b) F.team.push(b); } }
    var NONE = /^(无|没有|暂无|空|-|—|none)$/i;
    var splitTop = function (str) { // 按 、 , 切，但括号里的逗号不切
      var out = [], depth = 0, cur = '';
      for (var i = 0; i < str.length; i++) { var c = str[i];
        if (c === '(') depth++; else if (c === ')') depth = Math.max(0, depth - 1);
        if ((c === '、' || c === ',') && depth === 0) { out.push(cur); cur = ''; } else cur += c; }
      out.push(cur); return out;
    };
    var lst = function (k) { var v = S[k]; return v ? splitTop(v.join(',')).map(function (x) { return x.trim(); }).filter(function (x) { return x && !NONE.test(x); }) : null; };
    var who = function (x) { var m = x.match(/^([^(]+?)\s*\(([^)]*)\)\s*$/); return m ? { name: m[1].trim(), note: m[2].trim() } : { name: x, note: null }; };
    F.others = lst('随行其他'); F.present = lst('在场'); if (F.present) F.present = F.present.map(who);
    if (S['好感']) F.favor = S['好感'].join('|').split('|').map(function (p) { var m = p.trim().match(/^(\S+)\s+(.*)$/); return m && !NONE.test(m[1]) ? { who: m[1], text: m[2] } : null; }).filter(Boolean);
    if (S['背包']) {
      // 多件分隔符：顿号、全半角逗号、全半角斜杠、全半角分号都认——AI 这几种都写过，
      // 只认逗号时「回复喷雾 ×3 / 硬面包 ×5」会被当成一件（2026-11-14 手环核实 H4）。
      var bagParts = S['背包'].join(',').split(/[、，,／/;；]/).map(function (x) { return x.trim(); })
        .filter(function (x) { return x && !NONE.test(x); });
      F.bag = bagParts.map(function (x) {
        var m = x.match(/^(.+?)\s*[x*×]\s*(\d+)\s*$/i);
        return m ? { name: m[1].trim(), qty: +m[2] } : { name: x, qty: null };
      });
    }
    if (S['履历']) { F.record = kv(S['履历'].join('|')); var d = (F.record['图鉴'] || '').match(/\d+/); F.dexCount = d ? +d[0] : null; var mv = (F.record['招式图鉴'] || '').match(/\d+/); F.moveDex = mv ? +mv[0] : null; }
    if (S['命运']) F.fate = S['命运'].join(' ');
    if (S['难度']) F.difficulty = S['难度'].join(' ');
    if (S['进度']) F.progress = S['进度'].join(' ');
    // 【日程】MM-DD HH:MM｜地点｜事由；…   【讯息】人名：摘要；…   （「无」→ 空数组）
    var items = function (k) { var v = S[k]; if (!v) return null; return v.join(';').split(/[;；]/).map(function (x) { return x.trim(); }).filter(function (x) { return x && !NONE.test(x); }); };
    var sch = items('日程');
    if (sch) F.schedule = sch.map(function (x) {
      var parts = x.split('|').map(function (y) { return y.trim(); });
      var dm = parts[0].match(/^(?:(\d{4})[-/年])?(\d{1,2})[-/月](\d{1,2})日?\s*(\d{1,2}:\d{2})?/);
      var o = { raw: x, date: null, time: null, place: parts[1] || null, what: parts.slice(2).join('|') || null };
      if (dm) { o.date = (dm[1] ? dm[1] + '-' : '') + ('0' + dm[2]).slice(-2) + '-' + ('0' + dm[3]).slice(-2); o.time = dm[4] ? ('0' + dm[4]).slice(-5) : null; }
      else if (parts.length < 3) { o.place = null; o.what = x; }
      return o;
    });
    var msg = items('讯息');
    if (msg) F.messages = msg.map(function (x) { var m = x.match(/^([^:]{1,12}):\s*(.*)$/); return m ? { from: m[1].trim(), text: m[2].trim() } : { from: null, text: x }; });
    var KNOWN = ['驯兽师', '出战队伍', '队伍', '随行其他', '在场', '好感', '背包', '履历', '进度', '命运', '难度', '日程', '讯息'];
    Object.keys(S).forEach(function (k) { if (KNOWN.indexOf(k) < 0) r.warnings.push('AI 自加的段：【' + k + '】'); });
    ['驯兽师', '出战队伍', '在场', '背包', '日程', '讯息'].forEach(function (k) { if (!S[k] && !(k === '出战队伍' && S['队伍'])) r.missing.push(k); });
    var sm = B.match(/\[场景[|｜]([^\]\n]*)\]/g);
    if (sm) { var sp = sm[sm.length - 1].slice(4, -1).split(/[|｜]/);
      if (/｜/.test(sm[sm.length - 1])) r.warnings.push('场景行用了全角竖线（世界动态读不到这一行）'); F.scene = { time: sp[0] || null, slot: sp[1] || null, place: sp[2] || null, type: sp[3] || null }; }
    else r.missing.push('场景行');
    r.ok = !!(F.name || (F.team && F.team.length));
    return r;
  }
  var api = { parse: parse, pickBlock: pickBlock, body: body, norm: norm, parseMove: parseMove };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.P12Status = api;
})(this);

;
/* Pure avatar selection, no DOM or mutable state.
 * CJS: require('./person-avatar.js'); browser: window.P12PersonAvatar
 * genericKey(name:String, note:String|null) -> one of 8 generic keys
 * nameHue(name:String) -> 0|30|55|140|185|215|265|320 (same FNV-1a as H.sprites.hue)
 * selectAvatar(name,note,opts?) -> {name,type:'person'|'generic',key:String|null,url:String|null,hue:Number,color:String}
 * opts: {kind:'head'|'full',personGet(name,kind),genericGet(key),hue(name)}.
 * Pass H.sprites methods directly. Missing URLs stay null; renderer supplies its placeholder.
 */
(function(root,factory){'use strict';var api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.P12PersonAvatar=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  var HUES=[0,30,55,140,185,215,265,320];
  function clean(v){return typeof v==='string'?v.trim().normalize('NFC'):'';}
  function nameHue(name){var s=clean(name),h=0x811c9dc5;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=(h+((h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24)))>>>0;}return HUES[h%8];}
  var OLD=/老人|老头|老汉|老者|老翁|老叟|老伯|大爷|爷爷|阿公|外公|老太|奶奶|老妪|婆婆|阿婆|外婆|老师傅|老先生|老前辈|老道长|老船长|老猎人|老管家|年迈|花甲|古稀|白发苍苍|满头白发|退休|拄拐/;
  var MID=/中年|大叔|叔叔|大伯|伯父|叔父|阿姨|大妈|大婶|婶子|大娘|大姐|大哥|老哥|老姐|三十多|四十来|四十多|五十多|五十来|留胡子|胡子拉碴/;
  var YOUNG=/青年|年轻|小伙|少男|少女|少年|姑娘|小姐姐|小哥哥|小哥|小妹|小弟|学姐|学长|学妹|学弟|高中|大学|研究生|体校生|见习生|学生|实习生|学徒|二十出头|二十来|十七八|十八|十九|刚毕业|青春/;
  var CHILD=/小孩|小朋友|小孩子|儿童|幼童|幼儿|男童|女童|小学生|初中生|国中生|男孩|女孩|小娃娃|奶娃|背书包的孩子|十岁左右|八九岁|七八岁/;
  var JOB=/老板|掌柜|店主|摊主|馆主|教练|教头|队长|主治|兽医|医生|所长|教授|主管|经理|管事|师傅|片警|警官|仲裁委员|总值班员|厨师|向导|门卫|保安|司机|工人|护林员/;
  var MALE=/男|\bmale\b|他|小伙|少年|少男|小哥哥|小哥|小弟|帅哥|大叔|叔叔|大哥|老哥|大爷|老头|老汉|老翁|老伯|爷爷|阿公|外公|大伯|先生|道长|和尚|少爷|汉子|胡子|络腮胡/;
  var FEMALE=/女|\bfemale\b|她|少女|姑娘|小姐|小妹|阿姨|大妈|大婶|婶子|大娘|大姐|老姐|奶奶|老太|老妪|婆婆|阿婆|外婆|姑姑|太太|妈妈|母亲|美女|老板娘|巫女|修女|丫头|妮子|扎马尾|丸子头|长裙|旗袍|高跟鞋|涂口红/;
  var TITLES=/(?:老太太|老奶奶|老爷爷|小学生|初中生|小男孩|小女孩|男孩|女孩|小孩|小朋友|儿童|幼童|高中男生|高中女生|男生|女生|男路人|女路人|男店主|女店主|男骑手|女骑手|少女|少年|青年|年轻妈妈|妈妈|母亲|阿姨|大妈|大婶|大娘|婆婆|阿婆|奶奶|太太|大姐|老板娘|小姐|姑娘|女士|老先生|大叔|大爷|老伯|老头|爷爷|阿公|大哥|先生|师傅|道长|老板|小哥|小伙|小妹)$/;
  // Only descriptive subjects count: remove dependants/other people before matching their age/gender.
  function subject(note){
    var t=clean(note);
    t=t.replace(/(?:带着?|抱着|牵着|领着|陪着|接|送|寻找?|找)(?:[^，,。；;]{0,18}?)(?:小孩子|小孩|孩子|小朋友|男孩|女孩|女童|男童|幼童|娃娃?|儿子|女儿|孙子|孙女)/g,'');
    t=t.replace(/(?:正在|正|在)?(?:看着?|望着|盯着|跟着|陪同|面对|打量|招呼|等着|听着|牵着|抱着|靠在|蹲在|站在|坐在|脚边|身后|身旁|旁边|正在|正低头|正蹲|正搬|把头盔)[\s\S]*$/,'');
    t=t.replace(/男女(?:老少)?|男装|女装店|女性用品|母女|母兽|母犬|少女风|老熟客|老字号|老号|老实|老远|老家|老外|老友|老街坊|老同学|老对手|老手|老练|老早|老地方|老规矩|老房子|老巷子|老馆子|老汤|老陈醋|老花镜|老毛病|养老院员工/g,'');
    return t;
  }
  function cnNumber(s){
    if(/^\d+$/.test(s))return +s;
    var digits={'零':0,'〇':0,'一':1,'二':2,'两':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9};
    if(s==='十')return 10;
    var n=0,current=0;
    for(var i=0;i<s.length;i++){var c=s[i];if(c==='十'){n+=(current||1)*10;current=0;}else if(c==='百'){n+=(current||1)*100;current=0;}else if(Object.prototype.hasOwnProperty.call(digits,c)){current=digits[c];}else return null;}
    return n+current;
  }
  function signals(text){
    var t=subject(text);var male=MALE.test(t),female=FEMALE.test(t);
    var gender=male===female?null:(female?'f':'m');
    var age=null,explicit=false,m=t.match(/(\d{1,3}|[零〇一二两三四五六七八九十百]{1,5})(?:周)?岁/);
    if(m){var num=cnNumber(m[1]);if(num!==null&&num<=120){age=num<=14?'child':num<=29?'young':num<=54?'mid':'old';explicit=true;}}
    if(!age)age=CHILD.test(t)?'child':OLD.test(t)?'old':MID.test(t)?'mid':YOUNG.test(t)?'young':null;
    return {gender:gender,age:age,explicit:explicit,job:JOB.test(t)};
  }
  function genericKey(name,note){
    var n=clean(name),t=clean(note);
    // Reject grouped/nonhuman subjects, without rejecting an animal merely mentioned beside a human.
    if(/^(?:几名|数名|一群|众人|人群|几位|多名|野生)/.test(n)||/^(?:野生|成长期|幼年期|成熟期|完全体|究极体)/.test(t))return 'unknown';
    var a=signals(t),match=n.match(TITLES),b=signals(match?match[0]:'');
    if(match&&/^(老板|师傅)$/.test(match[0]))b.gender='m';
    var gender=a.gender||b.gender;
    var age=a.age||b.age;
    // Exact subject age overrides a colloquial title such as 老先生; never merge surname fragments.
    if(!a.explicit&&a.age&&b.age){var priority={child:4,old:3,mid:2,young:1};if(priority[b.age]>priority[a.age])age=b.age;}
    if(age==='child')return 'child';
    if(!gender)return 'unknown';
    if(!age)age=a.job||b.job?'mid':'young';
    // Explicit youth defeats a weak occupational mid default (师傅/大哥).
    if(a.age==='young'&&!a.explicit&&b.age==='mid'&&/年轻|二十出头|刚毕业/.test(t)&&!/大叔|阿姨|中年/.test(t))age='young';
    return gender+'-'+age;
  }
  function selectAvatar(name,note,opts){
    opts=opts||{};var n=clean(name),kind=opts.kind==='full'?'full':'head';
    var hue=typeof opts.hue==='function'?opts.hue(n):nameHue(n);
    if(HUES.indexOf(hue)<0)hue=nameHue(n);
    var url=typeof opts.personGet==='function'?opts.personGet(n,kind):null;
    var dedicated=typeof url==='string'&&url.trim();var key=dedicated?null:genericKey(n,note);
    if(!dedicated)url=typeof opts.genericGet==='function'?opts.genericGet(key):null;
    return {name:n,type:dedicated?'person':'generic',key:key,url:typeof url==='string'&&url.trim()?url:null,hue:hue,color:'hsl('+hue+' 55% 60%)'};
  }
  return {genericKey:genericKey,selectAvatar:selectAvatar,nameHue:nameHue};
});

;
/* Strict, pure dialogue speaker recognition. No DOM, network or module dependencies.
 * CJS: require('./dialog-speaker.js'); browser: window.P12DialogSpeaker
 * detect(text, {persons,present,playerName,previousSpeaker?}) ->
 *   {speaker,displayName,kind:'person'|'generic',at,rule:1|2|3|4|5} | null.
 * persons: sprites.items with type:'person', or [{name,alias:[...]}].
 * present: ['name',...] or [{name,note},...]. playerName excludes matching canonical/alias names.
 * at is an offset in the ORIGINAL string, pointing at its FIRST outer 「.
 * detectParagraphs(texts:Array<String>,opts) -> equally sized array of matches/null;
 * consecutive same canonical speakers get only their first avatar. Narration/unknown breaks a run.
 * Rules 1–3 identify explicit speech. Rules 4–5 also accept a sole named actor,
 * while rejecting listeners, thoughts, remote quotations and subject switches.
 */
(function(root,factory){'use strict';var api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.P12DialogSpeaker=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  function clean(s){return typeof s==='string'?s.trim().normalize('NFC'):'';}
  function escape(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
  // Deliberately finite: arbitrary action text before 道 would misidentify listeners as speakers.
  var ADVERB='(?:压低声音|乐呵呵地|轻声|低声|小声|大声|冷声|沉声|高声|柔声|厉声|轻轻|淡淡|缓缓|平静地|认真地|又|接着|继续|随后)';
  var VERB='(?:提醒道|回答道|解释道|补充道|反问道|嘀咕道|回答|反问|问道|说道|笑道|叹道|喊道|叫道|骂道|喝道|应道|答道|说|道|问|答|喊)';
  var SPEECH='(?:'+ADVERB+'){0,2}'+VERB;
  function registry(opts){
    var entries=new Map(),canonical=new Map(),ambiguous=new Set(),nonPerson=new Set();
    var persons=opts.persons&&opts.persons.items?opts.persons.items:opts.persons;
    if(persons&&!Array.isArray(persons))Object.keys(persons).forEach(function(n){if(typeof persons[n]==='string'||(persons[n]&&persons[n].type&&persons[n].type!=='person'))nonPerson.add(clean(n));});
    var rows=Array.isArray(persons)?persons.filter(function(p){if(p&&p.type&&p.type!=='person'){nonPerson.add(clean(p.name));return false;}return true;}):Object.keys(persons||{}).map(function(name){var p=persons[name];return p&&p.type==='person'?Object.assign({},p,{name:name}):null;});
    rows.forEach(function(p){if(!p||typeof p!=='object')return;var n=clean(p.name);if(n)canonical.set(n,{speaker:n,displayName:n,kind:'person'});});
    canonical.forEach(function(v,k){entries.set(k,v);});
    rows.forEach(function(p){if(!p||typeof p!=='object')return;var n=clean(p.name);if(!canonical.has(n))return;var al=Array.isArray(p.alias)?p.alias:typeof p.alias==='string'?[p.alias]:[];
      al.forEach(function(alias){var a=clean(alias);if(!a||canonical.has(a))return;if(entries.has(a)&&entries.get(a).speaker!==n){ambiguous.add(a);entries.delete(a);}else if(!ambiguous.has(a))entries.set(a,{speaker:n,displayName:a,kind:'person'});});
    });
    var present=Array.isArray(opts.present)?opts.present:[];
    present.forEach(function(p){var n=clean(typeof p==='string'?p:p&&p.name);if(n&&!entries.has(n)&&!ambiguous.has(n)&&!nonPerson.has(n)&&!(p&&typeof p==='object'&&/^(?:野生|成长期|幼年期|成熟期|完全体|究极体)/.test(p.note||'')))entries.set(n,{speaker:n,displayName:n,kind:'generic'});});
    var player=clean(opts.playerName),blocked=new Set();
    if(player){blocked.add(player);var who=entries.get(player);if(who)blocked.add(who.speaker);}
    return {entries:Array.from(entries.values()).sort(function(a,b){return b.displayName.length-a.displayName.length;}),map:entries,blocked:blocked};
  }
  function firstQuote(text){
    var start=text.indexOf('「');if(start<0)return null;
    var prefix=text.slice(0,start);
    // Never look inside alternate quote formats or code for an apparent speaker.
    if(/["“”『』`]/.test(prefix)||text.indexOf('」')<start)return null;
    var paren=0;for(var p=0;p<start;p++){if(/[（(]/.test(text[p]))paren++;else if(/[）)]/.test(text[p]))paren=Math.max(0,paren-1);}
    if(paren)return null;
    var depth=0,end=-1;for(var i=start;i<text.length;i++){if(text[i]==='「')depth++;else if(text[i]==='」'){depth--;if(depth===0){end=i;break;}}}
    if(end<0||!text.slice(start+1,end).trim())return null;
    return {start:start,end:end};
  }
  function boundary(before,start){return start===0||/[\s，,。！？!?；;：:、—…]/.test(before[start-1]);}
  function validLead(s){
    if(Array.from(s).length>2)return false;
    if(/^[\s，,。！？!?]*$/.test(s))return true;
    return ['身后','一旁','旁边','这时','此时','随后','随即','旋即'].indexOf(s)>=0;
  }
  function analyze(text,opts,reg){
    if(typeof text!=='string'||!text||/[\r\n`]/.test(text))return null;
    var q=firstQuote(text);if(!q)return null;
    var before=text.slice(0,q.start),after=text.slice(q.end+1);
    // Remote messages, displayed quotations and inner thoughts do not get live-speaker avatars.
    if(/电话|手环|讯息|信息屏|通讯|通信|屏幕|短信|来信|语音|广播|通话|标语|告示|纸条|原话|例如|比如|举例|回忆|心想|心道|暗道|暗忖|寻思|心里|默念/.test(before))return null;
    var found=null;
    for(var i=0;i<reg.entries.length;i++){
      var entry=reg.entries[i],n=escape(entry.displayName),m;
      // Rule 1: name touches the colon. Rule 3: whitelisted spoken verb, optional colon.
      m=before.match(new RegExp(n+'[:：][ \\t]*$'));
      if(m&&boundary(before,m.index)){found=Object.assign({},entry,{at:q.start,rule:1});break;}
      m=before.match(new RegExp(n+'('+SPEECH+')[:：]?[ \\t]*$'));
      if(m&&boundary(before,m.index)){found=Object.assign({},entry,{at:q.start,rule:3});break;}
    }
    if(!found){
      for(var j=0;j<reg.entries.length;j++){
        var e=reg.entries[j];
        var post=after.match(new RegExp('^([\\s\\S]{0,2})'+escape(e.displayName)+'('+SPEECH+')(?=$|[\\s，。！？；：、,.;!?:「])'));
        if(post&&validLead(post[1])){
          if(found&&found.speaker!==e.speaker)return null;
          found=Object.assign({},e,{at:q.start,rule:2});
        }
      }
    }
    if(!found){
      // Relaxed attribution needs ONE canonical identity, but the two fallback rules
      // count identities over different spans:
      //   rule 4 (name right after the quote)  → the whole paragraph, as before;
      //   rule 5 (name opens the paragraph)    → only the text BEFORE the quote.
      // A name mentioned INSIDE the speech is being talked about, not competing to speak:
      // 「金佩芬…摇了摇头：「…让程砚给你签个章」」 must still read as 金佩芬.
      var identitiesAll=new Set(),identitiesBefore=new Set();
      reg.entries.forEach(function(e){
        if(before.indexOf(e.displayName)>=0)identitiesBefore.add(e.speaker);
        if(text.indexOf(e.displayName)>=0)identitiesAll.add(e.speaker);
      });
      var player=clean(opts.playerName);
      if(player){
        if(before.indexOf(player)>=0)identitiesBefore.add('@player');
        if(text.indexOf(player)>=0)identitiesAll.add('@player');
      }
      var soleOk=function(actor,rule){
        if(rule===5)return identitiesBefore.size===1&&identitiesBefore.has(actor.speaker);
        return identitiesAll.size===1;
      };
      if(true){
        // Never turn a named listener, a thought, an inability to speak, or a
        // displayed quotation into its speaker. These guards apply only to fallback.
        var silent=/(?:听完|听到|听见|闻言|听罢|听着|听了|话音刚落|刚说完|说不出|哑口|不吭声|没吭声|默不作声|闭口|心里|心想|心道|暗道|暗忖|默念|回忆|原话|转述|复述|写着|写下|印着|标着|牌上|纸上)/;
        for(var k=0;k<reg.entries.length;k++){
          var actor=reg.entries[k];
          if(reg.blocked.has(actor.speaker)||reg.blocked.has(actor.displayName))continue;
          var suffix='',rule=0;
          var near=after.match(new RegExp('^([\\s\\S]{0,2})'+escape(actor.displayName)+'([\\s\\S]*)$'));
          if(near&&validLead(near[1])){suffix=near[2];rule=4;}
          else if(before.indexOf(actor.displayName)===0){suffix=before.slice(actor.displayName.length);rule=5;}
          if(!rule||!suffix.trim()||/^(?:甲|乙|丙|丁|\u200b)/.test(suffix))continue;
          if(!soleOk(actor,rule))continue;
          var context=rule===4?suffix.split('「')[0]:suffix;
          if(silent.test(context))continue;
          // A new subject before the quote makes the opening name ambiguous.
          // A name with “的” may describe its body/possessions, but an embedded
          // name (“程砚甲”) or a quoted label is not an actor declaration.
          if(rule===5&&(/(?:[，。；！？」]|[、])\s*(?:(?:他|她)(?!的|脚边|身边|手里|怀里|身后)|你|我|对方|新人|少年|少女|有人|那人|旁人)/.test(context)||/^(?:的名字|的照片|的画像|的签名)/.test(context)))continue;
          found=Object.assign({},actor,{at:q.start,rule:rule});break;
        }
      }
    }
    if(!found||reg.blocked.has(found.speaker)||reg.blocked.has(found.displayName))return null;
    return found;
  }
  function previous(opts,reg){var p=clean(typeof opts.previousSpeaker==='object'&&opts.previousSpeaker?opts.previousSpeaker.speaker:opts.previousSpeaker);var e=reg.map.get(p);return e?e.speaker:p;}
  function detect(text,opts){opts=opts||{};var reg=registry(opts),r=analyze(text,opts,reg);return r&&r.speaker!==previous(opts,reg)?r:null;}
  function detectParagraphs(texts,opts){
    opts=opts||{};if(!Array.isArray(texts))return [];
    var reg=registry(opts),prev=previous(opts,reg);
    return texts.map(function(text){var r=analyze(text,opts,reg);if(!r){prev='';return null;}var show=r.speaker!==prev;prev=r.speaker;return show?r:null;});
  }
  // 从一条 AI 回复里取「它声明过的在场」：<status> 的【在场】行，或 <check> 的「在场：」行。
  // 用途：离场常写在同一条回复后半段（金佩芬先在饭馆说完话，场景再换到码头，本轮【在场】就只剩程砚），
  // 所以判定时要把上一条回复的在场一起并进来，否则刚说完话的人挂不上头像。
  function presenceFromReply(text){
    var t=typeof text==='string'?text:'',out=[],seen=new Set();
    function add(raw){
      var s=clean(String(raw||'').replace(/。[\s\S]*$/,''));
      if(!s)return;
      var m=s.match(/^(.{1,12}?)\s*[（(]([^）)]{1,40})/);
      var name=clean(m?m[1]:s),note=m?clean(m[2]):null;
      // 切分常把「阿灰在桌脚下等着投喂」这种半句切进来：带虚词的一律不当名字。
      if(!name||Array.from(name).length>12||/[在的着把被了正已要走去来]/.test(name)||seen.has(name))return;
      seen.add(name);out.push({name:name,note:note});
    }
    var st=t.match(/【在场】([^\n【]*)/);
    if(st)st[1].split(/[、；;]/).forEach(add);
    var ck=t.match(/(?:^|\n)\s*在场[：:]\s*([^\n]*)/);
    if(ck)ck[1].split(/[、；;]/).forEach(add);
    return out;
  }
  return {detect:detect,detectParagraphs:detectParagraphs,presenceFromReply:presenceFromReply};
});

;
/* 立绘来源逻辑 v1；无自动请求、无聊天写入、无平台状态探测。 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.P12PortraitSource = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var MAX_IMAGE = 300 * 1024, MAX_UPLOAD = 2 * 1024 * 1024;
  var MIME = ['image/png', 'image/webp', 'image/jpeg'];
  var DEFAULTS = Object.freeze({
    artists: 'artist:min (120716), artist:rurudo, 0.7::artist:shiratama (shiratamaco)::, 0.8::artist:konya karasue, artist:rella::, 0.6::artist:pottsness::, 0.5::artist:ciloranko::, 0.5::artist:toosaka asagi::, 25::masterpiece, best quality, absurdres, very aesthetic::, highres, 2D, flat color, anime coloring, cel shading, clean lineart, 1.5::vivid color::, smooth line, year 2025, official art, 3::simple background::, 3::white background::, no text',
    positive: 'white background, simple background, full body, solo, no humans',
    negative: '{{{{bad anatomy}}}},{bad feet},bad hands,{{{bad proportions}}},{blurry},cloned face,cropped,{{{deformed}}},{{{disfigured}}},error,{{{extra arms}}},{extra digit},{{{extra legs}}},extra limbs,{{extra limbs}},{fewer digits},{{{fused fingers}}},gross proportions,ink eyes,ink hair,jpeg artifacts,{{{{long neck}}}},low quality,{malformed limbs},{{missing arms}},{missing fingers}},{{missing legs}},{{{more than 2 nipples}}},mutated hands,{{{mutation}}},normal quality,owres,{{poorly drawn face}},{{poorly drawn hands}},reen eyes,signature,text,{{too many fingers}},{{{ugly}}},username,uta,watermark,worst quality,{{{more than 2 legs}}},awkward hand sign,weird hand gesture,contorted hand,unnatural finger pose,deformed hand gesture,{shaka},{hang loose},{{rock on}},{shaka sign}',
    size: '832x1216', prompt: null
  });
  function localValue(c, field) { return c[field] == null ? DEFAULTS[field] : String(c[field]); }
  function fail(code) { var e = new Error(code); e.code = code; return e; }
  function text(v) { return String(v == null ? '' : v).trim(); }
  function identityKey(id) {
    if (!id || !text(id.saveId) || !text(id.owned ? id.nick : id.species)) throw fail('INVALID_IDENTITY');
    if (!id.owned) return JSON.stringify([1, text(id.saveId), 'species', text(id.species)]);
    var sp = text(id.species);
    return sp
      ? JSON.stringify([1, text(id.saveId), 'owned', text(id.nick), sp])
      : JSON.stringify([1, text(id.saveId), 'nick', text(id.nick)]);
  }
  function httpURL(raw) {
    var u;
    try { u = new URL(raw); } catch (_) { throw fail('INVALID_URL'); }
    if (!/^https?:$/.test(u.protocol) || u.username || u.password) throw fail('INVALID_URL');
    return u.href;
  }
  function imageBlob(blob, max) {
    if (!blob || typeof blob.arrayBuffer !== 'function' || !MIME.includes(blob.type) || !blob.size || blob.size > max) throw fail('INVALID_IMAGE');
    return blob;
  }
  function settingsOf(raw) {
    var c = raw || {};
    return {
      provider: ['rphub', 'task', 'nai', 'openai'].includes(c.provider) ? c.provider : 'rphub',
      url: text(c.url), key: text(c.key), model: text(c.model),
      background: ['local', 'external', 'none'].includes(c.background) ? c.background : 'local',
      removalUrl: text(c.removalUrl), removalKey: text(c.removalKey),
      artists: localValue(c, 'artists'), positive: localValue(c, 'positive'), negative: localValue(c, 'negative'), prompt: c.prompt == null ? null : String(c.prompt),
      size: ['1024x1024', '1216x832'].includes(c.size) ? c.size : '832x1216', confirmRequired: true
    };
  }
  function restoreSetting(raw, field) {
    if (!Object.prototype.hasOwnProperty.call(DEFAULTS, field)) throw fail('INVALID_SETTING');
    var next = settingsOf(raw); next[field] = DEFAULTS[field]; return next;
  }
  function applyPromptEdit(raw, prompt, saveAsDefault) {
    var next = settingsOf(raw);
    if (saveAsDefault === true) next.prompt = String(prompt);
    return next;
  }
  function readPlatform(env) {
    var app = env.document.querySelector('#app'), state = app && app._vnode && app._vnode.component && app._vnode.component.setupState;
    var s = state && state.settings || {};
    return { imageGenKey: text(s.imageGenKey), imageModel: text(s.imageModel), imageGenBaseUrl: env.RPHubConfig && env.RPHubConfig.imageGenBaseUrl || 'https://nai.sta1n.cn' };
  }
  function dimensions(c) {
    return c.size === '1024x1024' ? { width: 1024, height: 1024 } : c.size === '1216x832' ? { width: 1216, height: 832 } : { width: 832, height: 1216 };
  }
  function available(raw, platform) {
    var c = settingsOf(raw), p = platform || {};
    if (!(c.provider === 'rphub' ? text(p.imageGenKey) : c.key)) return { enabled: false, reason: 'MISSING_TOKEN' };
    if (c.provider !== 'rphub') {
      try {
        httpURL(c.url.replace(/\{tag\}/g, 'test').replace(/\{w\}/g, '832').replace(/\{h\}/g, '1216'));
        if (c.provider === 'nai' && !['{tag}', '{w}', '{h}'].every(x => c.url.includes(x))) return { enabled: false, reason: 'INVALID_TEMPLATE' };
      } catch (_) { return { enabled: false, reason: 'INVALID_URL' }; }
    }
    if (c.background === 'external') {
      if (!c.removalKey) return { enabled: false, reason: 'MISSING_REMOVAL_TOKEN' };
      try { httpURL(c.removalUrl); } catch (_) { return { enabled: false, reason: 'INVALID_REMOVAL_URL' }; }
    }
    return { enabled: true, reason: '' };
  }
  function confirmationInfo(raw) {
    var c = settingsOf(raw);
    return { provider: c.provider, generationRequests: 1, backgroundRequests: c.background === 'external' ? 1 : 0, requiresConfirmation: true };
  }
  // 仅白名单叙事字段进入生图prompt，设置、密钥、URL均不参与。
  function promptOf(subject, settings) {
    var s = subject || {}, c = settingsOf(settings);
    if (c.prompt !== null) return c.prompt;
    var tag = [c.positive, s.tags == null ? [text(s.species), Array.isArray(s.types) ? s.types.map(text).join(', ') : '', text(s.stage)].filter(Boolean).join(', ') : String(s.tags)].filter(Boolean).join(', ');
    // OpenAI没有独立artist/negative字段，预览中合成到prompt；临时覆盖仍原样发送。
    return c.provider === 'openai' ? [tag, c.artists ? 'Style: ' + c.artists : '', c.negative ? 'Avoid: ' + c.negative : ''].filter(Boolean).join('\n') : tag;
  }
  function aiSummary(record) {
    return { source: ['link', 'upload', 'generated'].includes(record && record.source) ? record.source : 'default', mode: record && record.mode === 'card' ? 'card' : 'transparent' };
  }
  function portraitRecord(raw) {
    if (!raw || !['link', 'upload', 'generated'].includes(raw.source)) throw fail('INVALID_RECORD');
    var r = { v: 1, source: raw.source, mode: raw.mode === 'card' && raw.source === 'generated' ? 'card' : 'transparent' };
    if (r.source === 'link') r.url = httpURL(raw.url);
    else r.blob = imageBlob(raw.blob, r.source === 'upload' ? MAX_UPLOAD : MAX_IMAGE);
    return r;
  }
  // IndexedDB adapter：设置与密钥单独存放，图片导出接口从不读settings。
  function createStore(indexedDB, name) {
    var dbPromise;
    function open() {
      if (!indexedDB) return Promise.reject(fail('STORAGE_UNAVAILABLE'));
      if (!dbPromise) dbPromise = new Promise(function (resolve, reject) {
        var req = indexedDB.open(name || 'p12-portraits-v1', 1);
        req.onupgradeneeded = function () {
          var db = req.result;
          ['portraits', 'settings'].forEach(s => { if (!db.objectStoreNames.contains(s)) db.createObjectStore(s); });
        };
        req.onsuccess = function () { req.result.onversionchange = () => req.result.close(); resolve(req.result); };
        req.onerror = req.onblocked = function () { reject(fail('STORAGE_UNAVAILABLE')); };
      }).catch(function (e) { dbPromise = null; throw e; });
      return dbPromise;
    }
    async function transaction(storeName, mode, build) {
      var db = await open();
      return new Promise(function (resolve, reject) {
        var tx, request;
        try { tx = db.transaction(storeName, mode); request = build(tx.objectStore(storeName)); }
        catch (_) { reject(fail('STORAGE_FAILED')); return; }
        tx.oncomplete = function () { resolve(request && request.result); };
        tx.onerror = tx.onabort = function () { reject(fail('STORAGE_FAILED')); };
      });
    }
    return {
      get: key => transaction('portraits', 'readonly', s => s.get(key)),
      put: (key, value) => transaction('portraits', 'readwrite', s => s.put(portraitRecord(value), key)),
      remove: key => transaction('portraits', 'readwrite', s => s.delete(key)),
      list: async function () {
        var db = await open();
        return new Promise(function (resolve, reject) {
          var tx = db.transaction('portraits', 'readonly'), out = [];
          var req = tx.objectStore('portraits').openCursor();
          req.onsuccess = function () { var c = req.result; if (c) { out.push({ key: c.key, record: c.value }); c.continue(); } };
          tx.oncomplete = () => resolve(out);
          tx.onerror = tx.onabort = () => reject(fail('STORAGE_FAILED'));
        });
      },
      getSettings: async function () { return settingsOf(await transaction('settings', 'readonly', s => s.get('local'))); },
      setSettings: raw => transaction('settings', 'readwrite', s => s.put(settingsOf(raw), 'local')),
      close: async function () { if (dbPromise) (await dbPromise).close(); dbPromise = null; }
    };
  }
  // 四边连通近白泛洪，保留封闭区域中的白色；一像素近白边缘羽化。
  function removeWhite(image, options) {
    var w = image.width, h = image.height, src = image.data, o = options || {};
    if (!Number.isInteger(w) || !Number.isInteger(h) || w < 1 || h < 1 || w * h > 16e6 || !src || src.length !== w * h * 4) throw fail('INVALID_PIXELS');
    var threshold = o.threshold == null ? 242 : Math.max(220, Math.min(254, o.threshold));
    var spread = o.spread == null ? 18 : Math.max(0, Math.min(40, o.spread));
    var out = new Uint8ClampedArray(src), visited = new Uint8Array(w * h), queue = new Uint32Array(w * h), tail = 0;
    function nearWhite(p) {
      var j = p * 4, lo = Math.min(src[j], src[j + 1], src[j + 2]), hi = Math.max(src[j], src[j + 1], src[j + 2]);
      return src[j + 3] === 0 || (lo >= threshold && hi - lo <= spread);
    }
    function add(p) { if (!visited[p] && nearWhite(p)) { visited[p] = 1; queue[tail++] = p; } }
    function neighbors(p, f) { if (p % w) f(p - 1); if (p % w < w - 1) f(p + 1); if (p >= w) f(p - w); if (p < w * (h - 1)) f(p + w); }
    for (var x = 0; x < w; x++) { add(x); add((h - 1) * w + x); }
    for (var y = 0; y < h; y++) { add(y * w); add(y * w + w - 1); }
    for (var head = 0; head < tail; head++) { var p = queue[head]; out[p * 4 + 3] = 0; neighbors(p, add); }
    for (var i = 0; i < tail; i++) neighbors(queue[i], function (p) {
      if (visited[p]) return;
      var j = p * 4, lo = Math.min(src[j], src[j + 1], src[j + 2]), hi = Math.max(src[j], src[j + 1], src[j + 2]);
      if (lo >= threshold - 24 && hi - lo <= spread + 8) out[j + 3] = Math.min(out[j + 3], Math.round(src[j + 3] * (threshold - lo) / 24));
    });
    return { width: w, height: h, data: out };
  }
  // 仅生成图调用；上传与外链不走canvas。运行环境由接线方传window。
  function createBrowserCodec(env) {
    async function decode(blob) {
      var bitmap;
      try { bitmap = await env.createImageBitmap(blob); } catch (_) { throw fail('IMAGE_DECODE_FAILED'); }
      if (bitmap.width * bitmap.height > 16e6) { bitmap.close(); throw fail('IMAGE_TOO_LARGE'); }
      var canvas = env.document.createElement('canvas'); canvas.width = bitmap.width; canvas.height = bitmap.height;
      var ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(bitmap, 0, 0); bitmap.close();
      return ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    async function encode(image) {
      var canvas = env.document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
      canvas.getContext('2d').putImageData(new env.ImageData(new Uint8ClampedArray(image.data), image.width, image.height), 0, 0);
      for (var attempt = 0; attempt < 12; attempt++) {
        var quality = Math.max(0.45, 0.9 - attempt * 0.08);
        var blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', quality));
        if (!blob || blob.type !== 'image/webp') throw fail('WEBP_UNAVAILABLE');
        if (blob.size <= MAX_IMAGE) return blob;
        var next = env.document.createElement('canvas'); next.width = Math.max(1, Math.round(canvas.width * 0.8)); next.height = Math.max(1, Math.round(canvas.height * 0.8));
        next.getContext('2d').drawImage(canvas, 0, 0, next.width, next.height); canvas = next;
      }
      throw fail('IMAGE_TOO_LARGE');
    }
    return { decode: decode, encode: encode };
  }
  function createService(deps) {
    var d = deps || {}, store = d.store, flights = new Set();
    if (!store) throw fail('STORAGE_UNAVAILABLE');
    var fetcher = d.fetch, codec = d.codec;
    var delay = d.delay || (ms => new Promise(resolve => setTimeout(resolve, ms)));
    async function request(url, options, signal) {
      if (typeof fetcher !== 'function') throw fail('NETWORK_UNAVAILABLE');
      if (signal && signal.aborted) throw fail('CANCELLED');
      var controller = new AbortController(), timer = setTimeout(() => controller.abort(), d.requestTimeout || 30000);
      var abort = () => controller.abort();
      if (signal) signal.addEventListener('abort', abort, { once: true });
      try {
        var res = await fetcher(httpURL(url), Object.assign({ credentials: 'omit', redirect: 'error', referrerPolicy: 'no-referrer' }, options, { signal: controller.signal }));
        if (!res.ok) throw fail('IMAGE_REQUEST_FAILED');
        // Keep deadline active while reading the response body, not just headers.
        var type = res.headers.get('content-type') || '';
        if (/^image\//i.test(type)) return { blob: imageBlob(await res.blob(), 12 * 1024 * 1024) };
        return { json: await res.json() };
      } catch (_) { throw fail(signal && signal.aborted ? 'CANCELLED' : 'IMAGE_REQUEST_FAILED'); }
      finally { clearTimeout(timer); if (signal) signal.removeEventListener('abort', abort); }
    }
    async function download(result, signal) {
      if (result.blob) return result.blob;
      var j = result.json || {}, item = j.data && j.data[0];
      if (item && item.b64_json) {
        try {
          var binary = (d.atob || globalThis.atob)(item.b64_json), bytes = new Uint8Array(binary.length);
          for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          return imageBlob(new Blob([bytes], { type: 'image/png' }), 12 * 1024 * 1024);
        } catch (_) { throw fail('INVALID_IMAGE_RESPONSE'); }
      }
      var url = item && item.url || j.imageUrl || j.url;
      if (!url) throw fail('INVALID_IMAGE_RESPONSE');
      var loaded = await request(url, { method: 'GET' }, signal);
      if (!loaded.blob) throw fail('INVALID_IMAGE_RESPONSE');
      return loaded.blob;
    }
    async function builtIn(c, p, prompt, signal, regenerate) {
      var base = httpURL(c.provider === 'task' ? c.url : p.imageGenBaseUrl || 'https://nai.sta1n.cn').replace(/\/$/, '');
      var token = c.provider === 'task' ? c.key : text(p.imageGenKey);
      var body = { tag: prompt, token: token, model: c.model || text(p.imageModel) || 'nai-diffusion-4-5-full', artist: c.artists, negative: c.negative, size: c.size === '1024x1024' ? '方图' : c.size === '1216x832' ? '横图' : '竖图', steps: 40, scale: 6, cfg: 0, sampler: 'k_dpmpp_2m_sde', nocache: regenerate ? 1 : 0, noise_schedule: 'karras' };
      var result = await request(base + '/api/jobs', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }, signal);
      for (var i = 0; i < (d.maxPolls || 120); i++) {
        var j = result.json;
        if (!j) return download(result, signal);
        if (j.status === 'failed') throw fail('GENERATION_FAILED');
        if (j.status === 'done') {
          if (!j.imageUrl && !j.id) throw fail('INVALID_IMAGE_RESPONSE');
          var imageUrl = j.imageUrl ? new URL(j.imageUrl, base).href : base + '/api/jobs/' + encodeURIComponent(j.id) + '/content?token=' + encodeURIComponent(token);
          // 内容下载不复用Authorization；令牌只放平台约定的同源content URL。
          return download({ json: { imageUrl: imageUrl } }, signal);
        }
        if (!['queued', 'running'].includes(j.status) || !j.id) throw fail('INVALID_IMAGE_RESPONSE');
        await delay(1000, signal);
        result = await request(base + '/api/jobs/' + encodeURIComponent(j.id) + '?token=' + encodeURIComponent(token), { method: 'GET' }, signal);
      }
      throw fail('GENERATION_TIMEOUT');
    }
    async function generateImage(c, p, subject, signal, override, regenerate) {
      var prompt = override == null ? promptOf(subject, c) : String(override), dims = dimensions(c);
      // 用户确认的tag原样发送；若误含凭据则拒绝，不能静默改写用户提示词。
      if ([c.key, c.removalKey, text(p.imageGenKey)].filter(Boolean).some(secret => [prompt, c.artists, c.negative].some(value => value.includes(secret)))) throw fail('SECRET_IN_PROMPT');
      if (c.provider === 'rphub' || c.provider === 'task') return builtIn(c, p, prompt, signal, regenerate);
      if (c.provider === 'nai') {
        var url = new URL(c.url.replace(/\{tag\}/g, encodeURIComponent(prompt)).replace(/\{w\}/g, String(dims.width)).replace(/\{h\}/g, String(dims.height)));
        url.searchParams.set('artist', c.artists); url.searchParams.set('negative', c.negative);
        return download(await request(url.href, { method: 'GET', headers: { Authorization: 'Bearer ' + c.key } }, signal), signal);
      }
      var endpoint = new URL(httpURL(c.url));
      endpoint.pathname = endpoint.pathname.replace(/\/$/, '');
      if (!/\/images\/generations$/.test(endpoint.pathname)) endpoint.pathname += /\/v1$/.test(endpoint.pathname) ? '/images/generations' : '/v1/images/generations';
      // OpenAI图像模型采用标准尺寸；832×1216是NAI推荐值，不能直接传给gpt-image。
      var size = c.size === '1024x1024' ? '1024x1024' : c.size === '1216x832' ? '1536x1024' : '1024x1536';
      return download(await request(endpoint.href, { method: 'POST', headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + c.key }, body: JSON.stringify({ model: c.model || 'gpt-image-1', prompt: prompt, n: 1, size: size }) }, signal), signal);
    }
    async function variants(blob, c, signal) {
      if (!codec) throw fail('CODEC_UNAVAILABLE');
      var original = await codec.decode(blob), card = imageBlob(await codec.encode(original), MAX_IMAGE);
      if (c.background === 'none') return { card: card, transparent: null, warning: '' };
      try {
        var transparent;
        if (c.background === 'external') {
          if (!c.removalKey || !c.removalUrl) throw fail('MISSING_REMOVAL_TOKEN');
          var form = new FormData(); form.append('image_file', blob, 'portrait.png'); form.append('size', 'auto');
          var res = await request(c.removalUrl, { method: 'POST', headers: { 'X-Api-Key': c.removalKey }, body: form }, signal);
          transparent = await codec.encode(await codec.decode(await download(res, signal)));
        } else transparent = await codec.encode(removeWhite(original));
        return { card: card, transparent: imageBlob(transparent, MAX_IMAGE), warning: '' };
      } catch (e) {
        if (signal && signal.aborted) throw fail('CANCELLED');
        // 保留已经生成的卡框版，失败不重新生图、不自动再付费。
        return { card: card, transparent: null, warning: 'BACKGROUND_FAILED' };
      }
    }
    async function save(id, raw) {
      var key = identityKey(id), record = portraitRecord(raw);
      await store.put(key, record);
      var count = (await store.list()).length;
      return { record: record, count: count, warning: count > 50 ? 'STORAGE_CLEANUP_RECOMMENDED' : '' };
    }
    return {
      saveLink: (id, url) => save(id, { source: 'link', url: url }),
      saveUpload: (id, blob) => save(id, { source: 'upload', blob: blob }),
      saveGenerated: function (id, result, mode) {
        if (!result || !['card', 'transparent'].includes(mode) || !result[mode]) return Promise.reject(fail('VARIANT_UNAVAILABLE'));
        return save(id, { source: 'generated', mode: mode, blob: result[mode] });
      },
      resolve: async function (id, builtin) {
        var record = await store.get(identityKey(id));
        if (record) { try { return { kind: 'player', record: portraitRecord(record) }; } catch (_) {} }
        var url = typeof builtin === 'function' ? builtin(text(id.species)) : builtin;
        if (url) { try { return { kind: 'builtin', record: { source: 'default', mode: 'transparent', url: httpURL(url) } }; } catch (_) {} }
        return { kind: 'silhouette', types: Array.isArray(id.types) ? id.types.map(text) : [] };
      },
      restore: async function (id) {
        await store.remove(identityKey(id));
        if (id && id.owned && text(id.nick) && text(id.species)) {
          await store.remove(JSON.stringify([1, text(id.saveId), 'nick', text(id.nick)]));
        }
      },
      generate: async function (args) {
        var a = args || {};
        // 此检查必须最先，取消时连平台设置也不读。
        if (a.confirmed !== true) return { cancelled: true };
        var key = identityKey(a.identity);
        if (flights.has(key)) throw fail('GENERATION_IN_PROGRESS');
        flights.add(key);
        try {
          var c = settingsOf(a.settings), p = typeof a.platform === 'function' ? a.platform() : a.platform || (d.getPlatform ? d.getPlatform() : {});
          if (!available(c, p).enabled) throw fail('MISSING_OR_INVALID_CONFIG');
          var blob = await generateImage(c, p, a.subject, a.signal, a.prompt, a.regenerate);
          var result = await variants(blob, c, a.signal);
          if (a.signal && a.signal.aborted) throw fail('CANCELLED');
          return result;
        } finally { flights.delete(key); }
      },
      exportPortraits: async function () { return { v: 1, portraits: (await store.list()).map(x => ({ key: x.key, record: portraitRecord(x.record) })) }; },
      importPortraits: async function (bundle) {
        if (!bundle || bundle.v !== 1 || !Array.isArray(bundle.portraits)) throw fail('INVALID_EXPORT');
        var entries = bundle.portraits.map(function (x) {
          var id; try { id = JSON.parse(x.key); } catch (_) { throw fail('INVALID_IDENTITY'); }
          var valid4 = Array.isArray(id) && id.length === 4 && id[0] === 1 && ['nick', 'species'].includes(id[2]) && text(id[1]) && text(id[3]);
          var valid5 = Array.isArray(id) && id.length === 5 && id[0] === 1 && id[2] === 'owned' && text(id[1]) && text(id[3]) && text(id[4]);
          if (!valid4 && !valid5) throw fail('INVALID_IDENTITY');
          return { key: x.key, record: portraitRecord(x.record) };
        });
        for (var entry of entries) await store.put(entry.key, entry.record);
        return entries.length;
      }
    };
  }
  // URL生命周期由UI持有；预览关闭、替换、卸载时调用dispose。
  function displayAsset(record, URLApi) {
    if (record.url) return { url: httpURL(record.url), mode: record.mode, dispose: function () {} };
    var url = URLApi.createObjectURL(record.blob), disposed = false;
    return { url: url, mode: record.mode, dispose: function () { if (!disposed) { URLApi.revokeObjectURL(url); disposed = true; } } };
  }
  return Object.freeze({ version: 1, DEFAULTS: DEFAULTS, MAX_IMAGE: MAX_IMAGE, MAX_UPLOAD: MAX_UPLOAD, identityKey: identityKey, settingsOf: settingsOf, restoreSetting: restoreSetting, applyPromptEdit: applyPromptEdit, readPlatform: readPlatform, available: available, confirmationInfo: confirmationInfo, promptOf: promptOf, aiSummary: aiSummary, portraitRecord: portraitRecord, removeWhite: removeWhite, createStore: createStore, createBrowserCodec: createBrowserCodec, createService: createService, displayAsset: displayAsset });
});

;
// 异兽专用：有限候选链，统一处理 img 与 CSS 背景。人物不接入此模块。
(function (root) {
  'use strict';
  var TYPE_IDS = Object.freeze({一般:'normal',火:'fire',水:'water',草:'grass',电:'electric',冰:'ice',格斗:'fighting',毒:'poison',地面:'ground',飞行:'flying',超能力:'psychic',虫:'bug',岩石:'rock',幽灵:'ghost',龙:'dragon',恶:'dark',钢:'steel',妖精:'fairy',机械:'machine',侵蚀:'erosion',噬血:'bloodlust'});
  var typeId = function (types) {
    var first = Array.isArray(types) ? types[0] : String(types || '').split(/[\/／、·]/)[0];
    var name = String(first || '').replace(/属性/g, '').trim();
    return Object.prototype.hasOwnProperty.call(TYPE_IDS, name) ? TYPE_IDS[name] : 'normal';
  };
  var candidates = function (custom, sprite, types, assets) {
    var list = [], seen = {};
    var tid = typeId(types);
    [
      custom && { url: custom.url, mode: custom.mode, kind: 'custom' },
      sprite && { url: sprite, mode: 'transparent', kind: 'sprite' },
      { url: (assets || {})[tid], mode: 'transparent', kind: 'silhouette', typeId: tid }
    ].forEach(function (a) {
      if (!a || !a.url || seen[a.url]) return;
      seen[a.url] = true;
      list.push({ url: a.url, mode: a.mode === 'card' ? 'card' : 'transparent', kind: a.kind || 'sprite', typeId: a.typeId || tid });
    });
    return list;
  };
  // 每次绑定只向前移动；旧异步回调不能污染重绑后的节点。
  var failedUrls = Object.create(null); // 同一宿主会话不因每800ms重画而重试坏链；刷新页面可重试。
  var bind = function (el, list, options) {
    options = options || {};
    var key = JSON.stringify(list), old = el.__p12CreatureArt;
    if (old && old.key === key && el.getAttribute('data-p12-art')) return;
    var job = { key: key, index: 0 }; el.__p12CreatureArt = job;
    var imageNode = el.tagName === 'IMG', fallback = el.textContent;
    var live = function () { return el.isConnected && el.__p12CreatureArt === job; };
    var next = function () {
      if (!live()) return;
      while (job.index < list.length && failedUrls[list[job.index].url]) job.index++;
      if (job.index >= list.length) {
        if (imageNode) {
          var par = el.parentElement;
          if (par) {
            par.classList.remove('has-portrait');
            par.classList.add('is-emblem-fallback');
            par.setAttribute('data-fallback-letter', options.letter || '?');
          }
          el.removeAttribute('src');
          el.style.display = 'none';
        } else {
          el.style.backgroundImage = ''; el.textContent = options.letter || fallback || '?';
        }
        if (options.failed) options.failed();
        return;
      }
      var a = list[job.index++];
      var accept = function () {
        if (!live()) return;
        el.style.display = '';
        el.setAttribute('data-p12-art', a.url);
        el.setAttribute('data-p12-art-kind', a.kind || 'sprite');
        if (a.typeId) el.setAttribute('data-p12-type-id', a.typeId);
        if (imageNode) {
          el.classList.toggle('is-card', a.mode === 'card'); el.dataset.portraitMode = a.mode;
          if (el.parentElement) {
            el.parentElement.classList.remove('is-emblem-fallback');
            el.parentElement.classList.add('has-portrait');
          }
          if (typeof options.onAccepted === 'function') options.onAccepted(a, el);
        } else {
          el.style.backgroundImage = 'url(' + JSON.stringify(a.url) + ')'; el.textContent = '';
          if (options.contain) { el.style.backgroundSize = 'contain'; el.style.backgroundRepeat = 'no-repeat'; el.style.backgroundPosition = 'center'; }
        }
      };
      var reject = function () { if (!live()) return; failedUrls[a.url] = true; next(); };
      if (imageNode) {
        if (el.src === a.url && el.complete && el.naturalWidth > 0) { accept(); return; }
        el.onload = accept; el.onerror = reject; el.src = a.url;
      } else {
        var probe = new Image(); probe.onload = accept; probe.onerror = reject; probe.src = a.url;
      }
    };
    next();
  };
  var api = { typeIds: TYPE_IDS, typeId: typeId, candidates: candidates, bind: bind };
  root.P12CreatureArt = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window === 'object' ? window : globalThis);

;
// WT-v7 正文与全玩法卡片动态增强层（随 p12hook 注入主页面，不依赖 uiTemplate 开关）。
// 负责：
// 1. 场景顶栏：注入在场人物圆形真头像胶囊 + 右侧 15° 城市/地形实景微视窗；
// 2. <快讯> 申報週刊：零 AI 生图「记者目击抓拍合成照」（已知异兽透明立绘叠地形+红色取景准星，或匹配城市/地貌实景）+ 栏目分条；
// 3. <图鉴> 装甲芯片卡：注入真属性 PNG 图标 + 外观简介 + 点击打开手环图鉴；
// 4. 都市小玩法（委托板/盲盒）徽章增强 + <选项>/<抉择> 点击填入宿主输入框。
(function (root) {
  'use strict';

  var ICON_KEY = {
    '一般': 'type-normal', '草': 'type-grass', '火': 'type-fire', '水': 'type-water', '电': 'type-electric',
    '冰': 'type-ice', '格斗': 'type-fighting', '毒': 'type-poison', '地面': 'type-ground', '飞行': 'type-flying',
    '超能力': 'type-psychic', '虫': 'type-bug', '岩石': 'type-rock', '幽灵': 'type-ghost', '龙': 'type-dragon',
    '恶': 'type-dark', '钢': 'type-steel', '妖精': 'type-fairy', '机械': 'type-machine', '侵蚀': 'type-erosion',
    '噬血': 'type-blood'
  };

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  };

  var pickSceneArt = function (placeText) {
    var s = String(placeText || '');
    var art = root.P12_ART_ASSETS || {};
    var ter = root.P12_TERRAIN_ASSETS || {};
    var cityPairs = [
      ['上海', 'city-shanghai'], ['黄浦', 'city-shanghai'], ['浦江', 'city-shanghai'], ['外滩', 'city-shanghai'], ['崇明', 'map-shanghai-chongming'],
      ['北京', 'city-beijing'], ['什刹海', 'city-beijing'], ['西山', 'map-beijing-xishan'],
      ['杭州', 'city-hangzhou'], ['西湖', 'map-hangzhou-westlake'], ['断桥', 'map-hangzhou-westlake'],
      ['成都', 'city-chengdu'], ['锦江', 'city-chengdu'], ['青城', 'map-chengdu-qingcheng'],
      ['深圳', 'city-shenzhen'], ['前海', 'map-shenzhen-coast']
    ];
    for (var i = 0; i < cityPairs.length; i++) {
      if (s.indexOf(cityPairs[i][0]) >= 0 && art[cityPairs[i][1]]) return { url: art[cityPairs[i][1]], tag: cityPairs[i][0] };
    }
    var envPairs = [
      [/道馆|赛场|场馆|擂台/, ter.arena, 'ARENA'],
      [/地下|黑市|暗巷/, ter.underground, 'UNDERGROUND'],
      [/湖|江|河|滩|港|码头|水/, ter.lake || art['map-generic-sea'], 'WATERSIDE'],
      [/海|湾|岛/, ter.beach || art['map-generic-sea'], 'COAST'],
      [/林|森|竹|树/, ter.forest || art['map-generic-forest'], 'FOREST'],
      [/雪|冰|寒/, ter.snow, 'SNOWFIELD'],
      [/山|岩|谷|崖|岭/, ter.rock, 'CANYON'],
      [/沙|戈壁/, ter.desert, 'DESERT'],
      [/废墟|工地|旧厂/, ter.ruins, 'RUINS'],
      [/天台|高空|塔|顶/, ter.sky, 'SKYLINE'],
      [/夜|晚/, ter.night, 'NIGHT']
    ];
    for (var j = 0; j < envPairs.length; j++) {
      if (envPairs[j][0].test(s) && envPairs[j][1]) return { url: envPairs[j][1], tag: envPairs[j][2] };
    }
    return { url: ter.street || art['city-shanghai'] || '', tag: 'CITY VIEW' };
  };

  var fillHostInput = function (doc, text) {
    var clean = String(text || '').trim();
    if (!clean) return;
    var win = doc.defaultView || root;
    var setup = null;
    try {
      var app = doc.getElementById('app');
      if (!app && win.parent && win.parent !== win) {
        win = win.parent;
        doc = win.document;
        app = doc.getElementById('app');
      }
      var comp = app && ((app._vnode && app._vnode.component) || (app.__vue_app__ && app.__vue_app__._instance) || app.__vueParentComponent);
      setup = comp && comp.setupState;
    } catch (e) {}
    var box = null;
    try { box = doc.querySelector('textarea[placeholder="输入消息..."]') || doc.querySelector('textarea'); } catch (e) {}
    var prev = String((box ? box.value : (setup && setup.userInput)) || '');
    var merged = prev.trim() ? (prev.replace(/[\r\n]+$/, '') + '\n' + clean) : clean;
    try {
      if (setup && ('userInput' in setup)) setup.userInput = merged;
    } catch (e) {}
    try {
      if (box) {
        box.value = merged;
        box.dispatchEvent(new Event('input', { bubbles: true }));
        box.focus();
        if (typeof box.setSelectionRange === 'function') box.setSelectionRange(merged.length, merged.length);
        box.scrollTop = box.scrollHeight;
      }
    } catch (e) {}
  };

  var handleOptActivate = function (doc, target, getHook) {
    if (!target || !target.closest) return false;
    var dexBtn = target.closest('.wt-dex-more');
    if (dexBtn) {
      var H = getHook && getHook();
      if (H && typeof H.setTab === 'function') {
        H.setTab('dex');
        var dial = doc.querySelector('#p12hook .p12-dial');
        var rootEl = doc.getElementById('p12hook');
        if (rootEl && !rootEl.classList.contains('is-open') && dial) dial.click();
      }
      return true;
    }
    var opt = target.closest('.wt-strip, .wt-opt, .v7-opt-btn, .wt-choice');
    if (!opt) return false;
    var m = opt.querySelector && opt.querySelector('.m');
    var txt = ((m ? m.textContent : opt.textContent) || '').trim()
      .replace(/^(?:[1-9][.、]|[①②③④])\s*/, '')
      .replace(/（可能：[\s\S]*）\s*$/, '')
      .trim();
    if (txt) fillHostInput(doc, txt);
    return true;
  };

  var ensureClickDelegation = function (doc, getHook) {
    if (doc.__p12ProseV7Bound) return;
    doc.__p12ProseV7Bound = true;
    if (root.P12_PROSE_V7_CSS && !doc.getElementById('p12-prose-v7-css')) {
      var st = doc.createElement('style');
      st.id = 'p12-prose-v7-css';
      st.textContent = root.P12_PROSE_V7_CSS;
      doc.head.appendChild(st);
    }
    doc.addEventListener('click', function (ev) {
      handleOptActivate(doc, ev.target, getHook);
    });
    doc.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      if (handleOptActivate(doc, ev.target, getHook)) ev.preventDefault();
    });
  };

  var paint = function (ctx) {
    var doc = (ctx && ctx.doc) || root.document;
    if (!doc) return;
    ensureClickDelegation(doc, function () { return ctx && ctx.hook; });
    if (root.P12_PROSE_V7_CSS && !doc.getElementById('p12-prose-v7-css')) {
      var stEl = doc.createElement('style');
      stEl.id = 'p12-prose-v7-css';
      stEl.textContent = root.P12_PROSE_V7_CSS;
      doc.head.appendChild(stEl);
    }

    // 1. 场景顶栏：若被 010-hook 围栏拆到独立前导 .wt-story，归并入同气泡主 .wt-story 消除断缝，再注入城市微视窗 + 在场圆头像胶囊
    var scenes = doc.querySelectorAll('.wt-scene');
    for (var i = 0; i < scenes.length; i++) {
      var header = scenes[i];
      var hostStory = header.closest('.wt-story');
      var mdBody = header.closest('.markdown-body');
      if (hostStory && mdBody) {
        var siblingStories = [];
        for (var sc = 0; sc < mdBody.children.length; sc++) {
          if (mdBody.children[sc].classList && mdBody.children[sc].classList.contains('wt-story')) {
            siblingStories.push(mdBody.children[sc]);
          }
        }
        if (siblingStories.length >= 2 && siblingStories[0] === hostStory) {
          var mainStory = siblingStories[1];
          mainStory.insertBefore(header, mainStory.firstChild);
          var cloneCheck = hostStory.cloneNode(true);
          var stylesInHost = cloneCheck.querySelectorAll('style, script');
          for (var si0 = 0; si0 < stylesInHost.length; si0++) stylesInHost[si0].remove();
          if (!cloneCheck.textContent.replace(/\s+/g, '') && cloneCheck.children.length === 0) {
            hostStory.style.display = 'none';
            hostStory.setAttribute('data-p12-merged-empty', '1');
          }
        }
      }
      var locEl = header.querySelector('.wt-location');
      if (locEl && !locEl.dataset.p12Crumb) {
        var rawLoc = locEl.textContent.trim();
        locEl.dataset.p12Crumb = rawLoc;
        locEl.textContent = rawLoc.split('·').join(' › ');
      }
      var rawPlace = (locEl && locEl.dataset.p12Crumb) || '';
      var winEl = header.querySelector('.v7-sb-citywin');
      if (winEl && !winEl.dataset.p12Painted) {
        winEl.dataset.p12Painted = '1';
        var picked = pickSceneArt(rawPlace + ' ' + header.textContent);
        if (picked.url) winEl.style.backgroundImage = 'url("' + picked.url + '")';
        var capSpan = winEl.querySelector('span');
        if (capSpan && picked.tag) capSpan.textContent = picked.tag;
      }
      var whoBox = header.querySelector('.wt-present');
      if (whoBox && !whoBox.dataset.p12Who) {
        var scopeRoot = mdBody || header.closest('.wt-story') || header.parentElement;
        var stRaw = scopeRoot && scopeRoot.querySelector('.wt-status .wt-raw');
        var names = [];
        if (stRaw) {
          var mm = stRaw.textContent.match(/【在场】\s*([^【\r\n<]*)/);
          if (mm && mm[1]) {
            names = mm[1].split(/[、，,｜|]/).map(function (x) {
              return x.replace(/（[^）]*）|\([^)]*\)/g, '').trim();
            }).filter(function (x) { return x && x !== '无' && x !== '未记录'; });
          }
        } else if (i === scenes.length - 1 && ctx && ctx.state && Array.isArray(ctx.state.present)) {
          names = ctx.state.present.map(function (p) { return (p && p.name) || ''; }).filter(Boolean);
        }
        if (names.length) {
          whoBox.dataset.p12Who = '1';
          whoBox.innerHTML = names.slice(0, 6).map(function (nm) {
            var av = ctx && ctx.avatarOf ? ctx.avatarOf(nm, '', 'head') : null;
            var u = av && av.url ? String(av.url) : '';
            var stBg = u ? ' style="background-image:url(\'' + esc(u) + '\')"' : '';
            return '<span class="v7-who-pill"><span class="who-av"' + stBg + '>' + (u ? '' : esc(nm.slice(0, 1))) + '</span>' + esc(nm) + '</span>';
          }).join('');
        }
      }
    }

    // 2. <快讯> 零生图「记者目击抓拍合成照」画报拼装
    var spriteNames = (ctx && ctx.spriteNames && ctx.spriteNames()) || [];
    var newsPanels = doc.querySelectorAll('.wt-news');
    for (var n = 0; n < newsPanels.length; n++) {
      var np = newsPanels[n];
      var rawN = np.querySelector('.wt-raw');
      if (!rawN || rawN.dataset.p12V7News === '1') continue;
      var fullTxt = rawN.textContent.trim();
      if (!fullTxt) continue;
      rawN.dataset.p12V7News = '1';

      // 结构化分条排版
      var lines = fullTxt.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean);
      var itemHtml = lines.map(function (line) {
        var m = line.match(/^[-·•*]?\s*[（(【]([^）)】]{1,12})[）)】]\s*(.+)$/);
        if (m) {
          return '<article class="wt-news-item"><span class="wt-news-category">' + esc(m[1]) + '</span><p>' + esc(m[2]) + '</p></article>';
        }
        if (/^\d{4}-\d{2}-\d{2}/.test(line) || /局势|早报|快讯/.test(line)) {
          return '<div class="wt-news-date">ISSUE // ' + esc(line) + '</div>';
        }
        return '<article class="wt-news-item"><p>' + esc(line.replace(/^[-·•*]\s*/, '')) + '</p></article>';
      }).join('');
      rawN.innerHTML = itemHtml;

      // 零生图目击抓拍合成：优先匹配文中点到的已知异兽立绘，否则匹配城市/地形实景！
      var shotEl = np.querySelector('[data-p12-newsshot]');
      var bodyWrap = np.querySelector('.v7-news-body');
      if (shotEl && bodyWrap) {
        var hitBeast = '';
        var hitUrl = '';
        for (var si = 0; si < spriteNames.length; si++) {
          var spName = spriteNames[si];
          if (spName.length >= 2 && fullTxt.indexOf(spName) >= 0) {
            var u = ctx && ctx.sprGet ? ctx.sprGet(spName) : '';
            if (u) { hitBeast = spName; hitUrl = u; break; }
          }
        }
        var bgScene = pickSceneArt(fullTxt);
        if (hitUrl) {
          if (bgScene.url) shotEl.style.backgroundImage = 'linear-gradient(180deg,rgba(20,26,51,0.18),rgba(20,26,51,0.45)),url("' + bgScene.url + '")';
          shotEl.innerHTML = '<span class="rec-badge">● EYEWITNESS</span>' +
            '<img class="snap-beast" src="' + esc(hitUrl) + '" alt="' + esc(hitBeast) + '">' +
            '<div class="snap-cap">本刊记者现场抓拍 · ' + esc(hitBeast) + '</div>';
          shotEl.hidden = false;
          bodyWrap.classList.add('has-shot');
        } else if (bgScene.url) {
          shotEl.style.backgroundImage = 'url("' + bgScene.url + '")';
          shotEl.innerHTML = '<span class="rec-badge">PRESS PHOTO</span>' +
            '<div class="snap-cap">申報影像 · ' + esc(bgScene.tag || '城市实景') + '</div>';
          shotEl.hidden = false;
          bodyWrap.classList.add('has-shot');
        }
      }
    }

    // 3. <图鉴> 真属性 PNG 图标升级与标记已填充
    var icons = root.P12_UI_ICONS || {};
    var dexCards = doc.querySelectorAll('.wt-dex');
    for (var di = 0; di < dexCards.length; di++) {
      var dc = dexCards[di];
      var nmEl = dc.querySelector('.wt-dex-nm');
      if (nmEl && nmEl.textContent.trim()) {
        dc.setAttribute('data-p12-filled', '1');
      }
      var tyBox = dc.querySelector('.wt-types');
      if (tyBox && !tyBox.dataset.p12Ico && tyBox.textContent.trim()) {
        var rawTypes = tyBox.textContent.trim().split(/\s+/);
        var icoHtml = [];
        rawTypes.forEach(function (t) {
          var clean = t.replace(/属性$/, '').trim();
          var ik = ICON_KEY[clean];
          if (ik && icons[ik]) {
            icoHtml.push('<img src="' + esc(icons[ik]) + '" alt="' + esc(clean) + '" title="' + esc(clean) + '">');
          }
        });
        if (icoHtml.length) {
          tyBox.dataset.p12Ico = '1';
          tyBox.innerHTML = icoHtml.join('');
        }
      }
    }

    // 4. <盲盒> 稀有度光球徽标自动点亮
    var blindBoxes = doc.querySelectorAll('.v7-blindbox-card .wt-raw');
    for (var bi = 0; bi < blindBoxes.length; bi++) {
      var br = blindBoxes[bi];
      if (br.dataset.p12Box === '1') continue;
      br.dataset.p12Box = '1';
      var bm = br.textContent.match(/(传说|珍稀|稀有|少见|常见)/);
      if (bm) {
        var orb = doc.createElement('div');
        orb.className = 'v7-ssr-orb';
        orb.textContent = '★ CAPSULE RARITY // ' + bm[1] + '!';
        br.insertBefore(orb, br.firstChild);
      }
    }
  };

  root.P12ProseV7 = { paint: paint, pickSceneArt: pickSceneArt };
})(typeof window !== 'undefined' ? window : globalThis);

;
// hook/instant-vars.js — 契约之城即时变量引擎（对标《晓之夜歌》vista-ui 即时结算架构）
// 直接读写 RP-Hub 宿主的 uiTemplate (p12-current-status-v1) variableState 与 changeLog，
// 支持自动检测/一键开启 UI 模板、手环端确定性数值即改、单步撤销与战斗/野外结果回写。
(function (root) {
  'use strict';

  var TEMPLATE_ID = 'p12-current-status-v1';
  var SOURCE_TAG = 'p12-wristband';
  var SCHEMA_KEYS = [
    'name', 'license', 'badges', 'rank', 'funds', 'fundsNum', 'injury', 'difficulty',
    'team', 'others', 'present', 'favor', 'bag', 'schedule', 'messages', 'record',
    'dexCount', 'moveDex', 'scene'
  ];

  // 协会标准补给站目录（仅含通用合法常备物资，金额明码标价，即买即算）
  var SHOP_CATALOG = [
    { id: 'spray_basic', name: '基础回复喷雾', price: 200, desc: '恢复单只异兽 30% 体力，疲劳 -10' },
    { id: 'spray_high', name: '高效回复喷雾', price: 600, desc: '恢复单只异兽 60% 体力，疲劳 -20' },
    { id: 'remedy', name: '状态清解剂', price: 300, desc: '解除异兽异常伤势，疲劳 -15' },
    { id: 'energy_cube', name: '异兽能量方块', price: 150, desc: '体力 +15%，疲劳 -25，羁绊 +2' },
    { id: 'ball_normal', name: '普通契约球', price: 300, desc: '野外结契或替换备球（战斗界面可用）' },
    { id: 'ball_great', name: '高级契约球', price: 800, desc: '较高捕捉加成契约球' },
    { id: 'medkit', name: '便携急救包', price: 250, desc: '优先包扎驯兽师伤势，也可救治异兽' }
  ];

  // 确定性消耗品结算表（匹配名称关键词，按具体度由高到低排）
  var ITEM_EFFECTS = [
    { re: /满血药|全复药|全回复|秘制回复/, hp: 100, fatigue: -40, clearInjury: true, label: '满体+清伤+疲劳-40' },
    { re: /高效回复喷雾|高级伤药|好伤药|高级回复/, hp: 60, fatigue: -20, label: '体力+60% · 疲劳-20' },
    { re: /基础回复喷雾|回复喷雾|普通伤药|伤药/, hp: 30, fatigue: -10, label: '体力+30% · 疲劳-10' },
    { re: /状态清解剂|清解剂|解毒药|万能药|活力碎片/, hp: 10, fatigue: -15, clearInjury: true, label: '清伤 · 体力+10% · 疲劳-15' },
    { re: /能量方块|异兽口粮|特制零食|营养膏/, hp: 15, fatigue: -25, bond: 2, label: '体力+15% · 疲劳-25 · 羁绊+2' },
    { re: /急救包|绷带|医疗包|止血/, hp: 25, clearInjury: true, canTreatTamer: true, label: '清伤（优先驯兽师）' }
  ];

  function clone(v) {
    if (v === undefined) return undefined;
    try { return JSON.parse(JSON.stringify(v)); } catch (e) { return v; }
  }

  function clamp(n, lo, hi) {
    n = Number(n);
    if (!isFinite(n)) return lo;
    return Math.max(lo, Math.min(hi, Math.round(n)));
  }

  function matchItemEffect(name) {
    var s = String(name || '').trim();
    if (!s) return null;
    for (var i = 0; i < ITEM_EFFECTS.length; i++) {
      if (ITEM_EFFECTS[i].re.test(s)) return ITEM_EFFECTS[i];
    }
    return null;
  }

  function formatFunds(num, oldStr) {
    var n = Math.max(0, Math.round(Number(num) || 0));
    var raw = String(oldStr || '');
    var symMatch = raw.match(/^(¥|￥|\$|€|£|JPY\s*|RMB\s*)/i);
    var sym = symMatch ? symMatch[1] : '¥';
    return sym + n.toLocaleString('en-US');
  }

  function parseFundsNum(state) {
    if (state && state.fundsNum != null && isFinite(Number(state.fundsNum))) return Number(state.fundsNum);
    var m = String((state && state.funds) || '').replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
    return m ? Number(m[0]) : 0;
  }

  function getTemplateList(st) {
    if (!st) return [];
    if (Array.isArray(st.activeUiTemplates) && st.activeUiTemplates.length) return st.activeUiTemplates;
    if (Array.isArray(st.currentUiTemplates) && st.currentUiTemplates.length) return st.currentUiTemplates;
    if (st.currentCharacter && Array.isArray(st.currentCharacter.uiTemplates)) return st.currentCharacter.uiTemplates;
    if (Array.isArray(st.globalUiTemplates)) return st.globalUiTemplates;
    return [];
  }

  function findTemplate(st) {
    var lists = [
      st && st.activeUiTemplates,
      st && st.currentUiTemplates,
      st && st.currentCharacter && st.currentCharacter.uiTemplates,
      st && st.globalUiTemplates
    ];
    for (var i = 0; i < lists.length; i++) {
      var arr = lists[i];
      if (!Array.isArray(arr)) continue;
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] && arr[j].id === TEMPLATE_ID) return arr[j];
      }
    }
    return null;
  }

  // 检测 RP-Hub 宿主的 UI 模板设置是否符合强制游玩要求
  function getHostStatus(st) {
    var hasSettings = !!(st && st.settings && typeof st.settings === 'object');
    var tpl = findTemplate(st);
    var uiEnabled = hasSettings ? !!st.settings.uiTemplateEnabled : false;
    var mainModel = hasSettings ? !!st.settings.uiTemplateMainModelAnalysis : false;
    var injectCtx = hasSettings ? !!st.settings.uiTemplateInjectContext : false;
    var tplFound = !!tpl;
    var tplEnabled = tpl ? tpl.enabled !== false : false;
    var locked = hasSettings ? !(uiEnabled && tplFound && tplEnabled) : false;
    return {
      hasHostSettings: hasSettings,
      uiTemplateEnabled: uiEnabled,
      mainModelMode: mainModel,
      injectContext: injectCtx,
      templateFound: tplFound,
      templateEnabled: tplEnabled,
      locked: locked,
      readyToWrite: tplFound && (!hasSettings || (uiEnabled && tplEnabled))
    };
  }

  function touchCharacterUiTemplates(st) {
    if (!st) return;
    try {
      if (st.currentCharacter && Array.isArray(st.currentCharacter.uiTemplates)) {
        st.currentCharacter.uiTemplates = st.currentCharacter.uiTemplates.slice();
      }
    } catch (e) {}
    try {
      if (typeof st.saveGlobalUiTemplateRuntimeForCharacter === 'function') {
        st.saveGlobalUiTemplateRuntimeForCharacter(st.currentCharacter, st.currentStoryBranch && st.currentStoryBranch.id);
      }
    } catch (e) {}
  }

  // 一键强制开启宿主 UI 模板与主模型分析
  function enableUiTemplate(st) {
    if (!st) return { ok: false, reason: '未连接宿主状态' };
    if (st.settings && typeof st.settings === 'object') {
      st.settings.uiTemplateEnabled = true;
      st.settings.uiTemplateMainModelAnalysis = true;
      st.settings.uiTemplateInjectContext = true;
    }
    var tpl = findTemplate(st);
    if (tpl) tpl.enabled = true;
    touchCharacterUiTemplates(st);
    return { ok: true, status: getHostStatus(st) };
  }

  function scopeOf(st) {
    var c = (st && st.currentCharacter) || {};
    var who = String(c.uuid || c.name || 'card');
    var br = (st && st.currentStoryBranch && st.currentStoryBranch.id) || 'main';
    return who + '|' + br;
  }

  function currentTurn(st) {
    var h = (st && Array.isArray(st.chatHistory)) ? st.chatHistory : [];
    var n = 0;
    for (var i = 0; i < h.length; i++) {
      var m = h[i];
      if (!m || m.role !== 'assistant' || m.id === 'first' || m.isOpening) continue;
      if (i === 0) continue; // 第一条通常是开场白
      n++;
    }
    return n;
  }

  function hasUsefulState(vs) {
    return !!(vs && typeof vs === 'object' && (vs.name || (Array.isArray(vs.team) && vs.team.length)));
  }

  function normMoveStr(m) {
    if (m == null) return '';
    if (typeof m === 'string') {
      var s = m.trim();
      return (!s || s === '[object Object]') ? '' : s;
    }
    if (typeof m === 'object') {
      var name = String(m['名'] != null ? m['名'] : (m.name != null ? m.name : '')).trim();
      if (!name || name === '[object Object]') return '';
      var type = String(m['属性'] != null ? m['属性'] : (m.type != null ? m.type : '')).replace(/属性$/, '').trim();
      var tier = String(m['档'] != null ? m['档'] : (m.tier != null ? m.tier : '')).trim();
      var meta = [type, tier].filter(Boolean).join('·');
      return meta ? (name + '（' + meta + '）') : name;
    }
    return '';
  }

  function normFavorItem(x) {
    if (!x) return null;
    if (typeof x === 'object') {
      var who = String(x.who != null ? x.who : (x.name != null ? x.name : '')).trim();
      if (!who) return null;
      return { who: who, text: String(x.text != null ? x.text : '').trim() };
    }
    if (typeof x === 'string') {
      var s = x.trim();
      if (!s) return null;
      var m = s.match(/^(\S+)\s+([\s\S]+)$/);
      if (m) return { who: m[1].trim(), text: m[2].trim() };
      return { who: s, text: '' };
    }
    return null;
  }

  function sanitizeBaseToSchema(baseState) {
    var out = {};
    if (!baseState || typeof baseState !== 'object') return out;
    for (var i = 0; i < SCHEMA_KEYS.length; i++) {
      var k = SCHEMA_KEYS[i];
      if (Object.prototype.hasOwnProperty.call(baseState, k) && baseState[k] !== undefined) {
        out[k] = clone(baseState[k]);
      }
    }
    // 清理团队内部非 schema 字段并规范化招式/仓库为字符串数组，保证严格通过 RP-Hub 校验
    if (Array.isArray(out.team)) {
      var teamAllowed = {
        nick: 1, species: 1, stage: 1, types: 1, where: 1, hp: 1, injury: 1,
        fatigue: 1, bond: 1, bondTier: 1, growth: 1, training: 1, moves: 1,
        storage: 1, level: 1, exp: 1, expNeed: 1, bottleneck: 1
      };
      out.team = out.team.map(function (b) {
        if (!b || typeof b !== 'object') return b;
        var nb = {};
        Object.keys(teamAllowed).forEach(function (tk) {
          if (Object.prototype.hasOwnProperty.call(b, tk) && b[tk] !== undefined) nb[tk] = b[tk];
        });
        if (Array.isArray(nb.moves)) nb.moves = nb.moves.map(normMoveStr).filter(Boolean);
        if (Array.isArray(nb.storage)) nb.storage = nb.storage.map(normMoveStr).filter(Boolean);
        return nb;
      });
    }
    if (Array.isArray(out.favor)) {
      out.favor = out.favor.map(normFavorItem).filter(Boolean);
    }
    return out;
  }

  // 当宿主全局未挂载 RPHubUiTemplateUtils（如精简测试环境）时使用的等价原子合入器
  function localApplyUpdate(tpl, patch, turn) {
    if (!tpl.variableState || typeof tpl.variableState !== 'object') tpl.variableState = {};
    var changes = {};
    var keys = Object.keys(patch || {});
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var fromVal = clone(tpl.variableState[k]);
      var toVal = clone(patch[k]);
      if (JSON.stringify(fromVal) !== JSON.stringify(toVal)) {
        tpl.variableState[k] = toVal;
        changes[k] = { from: fromVal === undefined ? null : fromVal, to: toVal };
      }
    }
    var count = Object.keys(changes).length;
    if (count > 0) {
      if (!Array.isArray(tpl.changeLog)) tpl.changeLog = [];
      tpl.changeLog.unshift({
        id: 'p12-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
        time: Date.now(),
        source: SOURCE_TAG,
        model: '',
        turn: turn,
        changes: changes
      });
      tpl.changeLog = tpl.changeLog.slice(0, 50);
    }
    return { changed: count > 0, fieldCount: count };
  }

  function broadcastSnapshot(st, state) {
    var snapState = clone(state || {});
    var ready = !!(snapState && snapState.name && snapState.scene && snapState.scene.time);
    var prev = root.P12UiState;
    var seq = (prev && isFinite(Number(prev.seq))) ? (Number(prev.seq) + 1) : 1;
    var snap = { version: 2, seq: seq, scope: scopeOf(st), ready: ready, fields: snapState };
    try { root.P12UiState = snap; } catch (e) {}
    try {
      if (typeof root.dispatchEvent === 'function' && typeof root.CustomEvent === 'function') {
        root.dispatchEvent(new root.CustomEvent('p12-ui-state', { detail: snap }));
      }
    } catch (e) {}
    return snap;
  }

  // 将变更提交进 RP-Hub variableState 与 changeLog，并立即广播
  function commit(st, patch, summary, opts) {
    opts = opts || {};
    var status = getHostStatus(st);
    if (status.locked) {
      return { ok: false, locked: true, reason: '请先开启 RP-Hub UI 模板后再执行即时结算' };
    }
    var tpl = findTemplate(st);
    if (!tpl) {
      return { ok: false, reason: '未在当前角色卡找到状态模板 ' + TEMPLATE_ID };
    }

    var mergedPatch = {};
    // 若模板变量尚未初始化，先以当前可靠基线补齐所有 schema 字段，防止丢失数据
    if (!hasUsefulState(tpl.variableState) && opts.baseState) {
      var base = sanitizeBaseToSchema(opts.baseState);
      Object.keys(base).forEach(function (k) { mergedPatch[k] = base[k]; });
    }
    Object.keys(patch || {}).forEach(function (k) {
      mergedPatch[k] = clone(patch[k]);
    });

    var turn = currentTurn(st);
    var utils = root.RPHubUiTemplateUtils;
    var res;
    if (utils && typeof utils.applyUiTemplateUpdateListToTemplate === 'function') {
      res = utils.applyUiTemplateUpdateListToTemplate(
        tpl,
        [{ id: tpl.id, variables: mergedPatch }],
        { model: '', turn: turn, source: SOURCE_TAG }
      );
    } else {
      res = localApplyUpdate(tpl, mergedPatch, turn);
    }

    if (res && res.changed && Array.isArray(tpl.changeLog) && tpl.changeLog[0] && summary) {
      tpl.changeLog[0]._label = String(summary).slice(0, 120);
    }
    touchCharacterUiTemplates(st);
    broadcastSnapshot(st, tpl.variableState);

    return {
      ok: true,
      changed: !!(res && res.changed),
      fieldCount: (res && res.fieldCount) || 0,
      summary: summary || '已即时同步',
      state: tpl.variableState
    };
  }

  function setByDotPath(obj, dotPath, val) {
    var parts = String(dotPath || '').split('.').filter(Boolean);
    if (!parts.length) return;
    var cur = obj;
    for (var i = 0; i < parts.length - 1; i++) {
      var p = parts[i];
      if (!cur[p] || typeof cur[p] !== 'object') cur[p] = {};
      cur = cur[p];
    }
    cur[parts[parts.length - 1]] = val;
  }

  function undoLast(st) {
    var tpl = findTemplate(st);
    if (!tpl || !Array.isArray(tpl.changeLog) || !tpl.changeLog.length) {
      return { ok: false, reason: '没有可撤销的记录' };
    }
    var latest = tpl.changeLog[0];
    if (!latest || latest.source !== SOURCE_TAG) {
      return { ok: false, reason: '最新一条变更来自 AI 或系统，不支持手环单步撤销' };
    }
    tpl.changeLog.shift();
    if (!tpl.variableState || typeof tpl.variableState !== 'object') tpl.variableState = {};
    var changes = latest.changes || {};
    Object.keys(changes).forEach(function (k) {
      var ch = changes[k];
      if (!ch || !Object.prototype.hasOwnProperty.call(ch, 'from')) return;
      if (k === '$root') {
        tpl.variableState = clone(ch.from || {});
      } else {
        setByDotPath(tpl.variableState, k, clone(ch.from === undefined ? null : ch.from));
      }
    });
    touchCharacterUiTemplates(st);
    broadcastSnapshot(st, tpl.variableState);
    return { ok: true, summary: latest._label || '最近一次手环修改', state: tpl.variableState };
  }

  function recentLogs(st, limit) {
    var tpl = findTemplate(st);
    if (!tpl || !Array.isArray(tpl.changeLog)) return [];
    return tpl.changeLog.slice(0, limit || 8);
  }

  function workingState(st, baseState) {
    var tpl = findTemplate(st);
    if (tpl && hasUsefulState(tpl.variableState)) return sanitizeBaseToSchema(tpl.variableState);
    return sanitizeBaseToSchema(baseState || {});
  }

  // ---------- 6 大确定性即时结算动作 ----------

  function setLead(st, baseState, idx) {
    var cur = workingState(st, baseState);
    var team = Array.isArray(cur.team) ? cur.team.slice() : [];
    idx = Number(idx);
    if (!(idx > 0 && idx < team.length)) return { ok: false, reason: '无效队伍索引' };
    var picked = team.splice(idx, 1)[0];
    team.unshift(picked);
    if (!picked.where || picked.where === '球内' || picked.where === '球中') picked.where = '在外';
    return commit(st, { team: team }, '将「' + (picked.nick || picked.species) + '」设为首发', { baseState: baseState });
  }

  function toggleWhere(st, baseState, idx) {
    var cur = workingState(st, baseState);
    var team = Array.isArray(cur.team) ? clone(cur.team) : [];
    idx = Number(idx);
    if (!(idx >= 0 && idx < team.length)) return { ok: false, reason: '无效队伍索引' };
    var b = team[idx];
    var inBall = /球内|球中/.test(String(b.where || ''));
    b.where = inBall ? '在外' : '球内';
    return commit(st, { team: team }, (b.nick || b.species) + ' → ' + b.where, { baseState: baseState });
  }

  function setTraining(st, baseState, idx, training) {
    var cur = workingState(st, baseState);
    var team = Array.isArray(cur.team) ? clone(cur.team) : [];
    idx = Number(idx);
    if (!(idx >= 0 && idx < team.length)) return { ok: false, reason: '无效队伍索引' };
    var tr = String(training || '').trim();
    if (!tr) return { ok: false, reason: '训练倾向不能为空' };
    team[idx].training = tr;
    return commit(st, { team: team }, (team[idx].nick || team[idx].species) + ' 训练倾向 → ' + tr, { baseState: baseState });
  }

  function swapMove(st, baseState, beastIdx, activeSlotIdx, storageIdx) {
    var cur = workingState(st, baseState);
    var team = Array.isArray(cur.team) ? clone(cur.team) : [];
    beastIdx = Number(beastIdx);
    activeSlotIdx = Number(activeSlotIdx);
    storageIdx = Number(storageIdx);
    if (!(beastIdx >= 0 && beastIdx < team.length)) return { ok: false, reason: '无效队伍索引' };
    var b = team[beastIdx];
    b.moves = Array.isArray(b.moves) ? b.moves.slice() : [];
    b.storage = Array.isArray(b.storage) ? b.storage.slice() : [];
    if (!(storageIdx >= 0 && storageIdx < b.storage.length)) return { ok: false, reason: '无效仓库招式' };
    var chosen = b.storage[storageIdx];
    if (activeSlotIdx < 0) {
      if (b.moves.length >= 4) return { ok: false, reason: '出战招式已满 4 招，请选择被替换槽位' };
      b.storage.splice(storageIdx, 1);
      b.moves.push(chosen);
      return commit(st, { team: team }, (b.nick || b.species) + ' 装备招式「' + String(chosen) + '」', { baseState: baseState });
    }
    if (!(activeSlotIdx >= 0 && activeSlotIdx < b.moves.length)) return { ok: false, reason: '无效出战招式槽位' };
    var prev = b.moves[activeSlotIdx];
    b.moves[activeSlotIdx] = chosen;
    b.storage[storageIdx] = prev;
    return commit(st, { team: team }, (b.nick || b.species) + ' 换招：' + String(chosen), { baseState: baseState });
  }

  function useBagItem(st, baseState, bagIdx, target) {
    var cur = workingState(st, baseState);
    var bag = Array.isArray(cur.bag) ? clone(cur.bag) : [];
    bagIdx = Number(bagIdx);
    if (!(bagIdx >= 0 && bagIdx < bag.length)) return { ok: false, reason: '无效背包槽位' };
    var item = bag[bagIdx];
    var eff = matchItemEffect(item.name);
    if (!eff) {
      return { ok: false, nonConsumable: true, name: item.name, reason: '非即时恢复道具，请带入剧情使用' };
    }

    target = target || {};
    var patch = {};
    var summary = '';
    if (target.kind === 'tamer') {
      if (!eff.canTreatTamer) return { ok: false, reason: '该道具只供异兽使用' };
      if (!cur.injury || cur.injury === '无') return { ok: false, reason: '驯兽师当前无伤势' };
      patch.injury = '无';
      summary = '驯兽师使用「' + item.name + '」→ 伤势清零';
    } else {
      var team = Array.isArray(cur.team) ? clone(cur.team) : [];
      var bi = Number(target.idx || 0);
      if (!(bi >= 0 && bi < team.length)) return { ok: false, reason: '请选择出战异兽' };
      var b = team[bi];
      var hp0 = b.hp == null ? 100 : Number(b.hp);
      var fat0 = b.fatigue == null ? 0 : Number(b.fatigue);
      var inj0 = String(b.injury || '无');
      var bond0 = b.bond == null ? 0 : Number(b.bond);

      var hp1 = eff.hp ? clamp(hp0 + eff.hp, 0, 100) : hp0;
      var fat1 = eff.fatigue ? clamp(fat0 + eff.fatigue, 0, 100) : fat0;
      var inj1 = eff.clearInjury ? '无' : (inj0 !== '无' && hp1 >= 70 && inj0 === '重伤' ? '轻伤' : (hp1 >= 90 && inj0 !== '无' ? '无' : inj0));
      var bond1 = eff.bond ? clamp(bond0 + eff.bond, 0, 100) : bond0;

      if (hp1 === hp0 && fat1 === fat0 && inj1 === inj0 && bond1 === bond0) {
        return { ok: false, reason: (b.nick || b.species) + ' 状态已满，无需消耗道具' };
      }
      b.hp = hp1;
      b.fatigue = fat1;
      b.injury = inj1;
      if (eff.bond) b.bond = bond1;
      patch.team = team;
      summary = '对「' + (b.nick || b.species) + '」用 ' + item.name + '（HP ' + hp0 + '→' + hp1 + '%）';
    }

    var qty = item.qty == null ? 1 : Number(item.qty);
    if (qty <= 1) bag.splice(bagIdx, 1);
    else bag[bagIdx].qty = qty - 1;
    patch.bag = bag;

    return commit(st, patch, summary, { baseState: baseState });
  }

  function buyShopItem(st, baseState, itemId) {
    var goods = null;
    for (var i = 0; i < SHOP_CATALOG.length; i++) {
      if (SHOP_CATALOG[i].id === itemId) { goods = SHOP_CATALOG[i]; break; }
    }
    if (!goods) return { ok: false, reason: '未知补给品' };
    var cur = workingState(st, baseState);
    var fundsNum = parseFundsNum(cur);
    if (fundsNum < goods.price) {
      return { ok: false, reason: '余额不足：需要 ¥' + goods.price + '，当前 ¥' + fundsNum };
    }
    var newFundsNum = fundsNum - goods.price;
    var newFundsStr = formatFunds(newFundsNum, cur.funds);
    var bag = Array.isArray(cur.bag) ? clone(cur.bag) : [];
    var hit = null;
    for (var j = 0; j < bag.length; j++) {
      if (bag[j] && bag[j].name === goods.name) { hit = bag[j]; break; }
    }
    if (hit) hit.qty = (hit.qty == null ? 1 : Number(hit.qty)) + 1;
    else bag.push({ name: goods.name, qty: 1 });

    return commit(st, {
      funds: newFundsStr,
      fundsNum: newFundsNum,
      bag: bag
    }, '购入「' + goods.name + '」×1（-' + formatFunds(goods.price, cur.funds) + '）', { baseState: baseState });
  }

  function adjustBag(st, baseState, bagIdx, delta) {
    var cur = workingState(st, baseState);
    var bag = Array.isArray(cur.bag) ? clone(cur.bag) : [];
    bagIdx = Number(bagIdx);
    if (!(bagIdx >= 0 && bagIdx < bag.length)) return { ok: false, reason: '无效物品' };
    var item = bag[bagIdx];
    var nextQty = (item.qty == null ? 1 : Number(item.qty)) + Number(delta || 0);
    if (nextQty <= 0) bag.splice(bagIdx, 1);
    else item.qty = nextQty;
    return commit(st, { bag: bag }, '整理背包：「' + item.name + '」' + (nextQty <= 0 ? ' 已移除' : ' ×' + nextQty), { baseState: baseState });
  }

  function completeSchedule(st, baseState, idx) {
    var cur = workingState(st, baseState);
    var sch = Array.isArray(cur.schedule) ? clone(cur.schedule) : [];
    idx = Number(idx);
    if (!(idx >= 0 && idx < sch.length)) return { ok: false, reason: '无效日程' };
    var removed = sch.splice(idx, 1)[0];
    return commit(st, { schedule: sch }, '划销日程「' + (removed.what || removed.raw || '约定') + '」', { baseState: baseState });
  }

  function addSchedule(st, baseState, item) {
    item = item || {};
    var date = String(item.date || '').trim();
    var time = String(item.time || '').trim() || null;
    var place = String(item.place || '').trim();
    var what = String(item.what || '').trim();
    if (!what) return { ok: false, reason: '请填写日程事由' };
    var raw = [date + (time ? ' ' + time : ''), place, what].filter(Boolean).join('｜');
    var cur = workingState(st, baseState);
    var sch = Array.isArray(cur.schedule) ? clone(cur.schedule) : [];
    sch.push({ raw: raw, date: date || null, time: time, place: place || null, what: what });
    return commit(st, { schedule: sch }, '记入日程「' + what + '」', { baseState: baseState });
  }

  function readMessage(st, baseState, idx) {
    var cur = workingState(st, baseState);
    var msgs = Array.isArray(cur.messages) ? clone(cur.messages) : [];
    idx = Number(idx);
    if (!(idx >= 0 && idx < msgs.length)) return { ok: false, reason: '无效讯息' };
    var removed = msgs.splice(idx, 1)[0];
    return commit(st, { messages: msgs }, '已读来自「' + (removed.from || '联系人') + '」的讯息', { baseState: baseState });
  }

  function clearMessages(st, baseState) {
    var cur = workingState(st, baseState);
    if (!Array.isArray(cur.messages) || !cur.messages.length) return { ok: false, reason: '暂无未读讯息' };
    return commit(st, { messages: [] }, '清空全部未读讯息', { baseState: baseState });
  }

  function setDifficulty(st, baseState, diffText) {
    var d = String(diffText || '').trim();
    if (!d) return { ok: false, reason: '难度不能为空' };
    return commit(st, { difficulty: d }, '切换难度 → ' + d, { baseState: baseState });
  }

  // 对战结束后立刻把我方队伍数值和消耗背包同步进 UI 变量（不用等下一轮 AI 抄状态栏）
  function syncBattleResult(st, baseState, rep) {
    if (!rep || typeof rep !== 'object') return { ok: false, reason: '无战报对象' };
    if (getHostStatus(st).locked) return { ok: false, locked: true };
    var cur = workingState(st, baseState);
    var team = Array.isArray(cur.team) ? clone(cur.team) : [];
    var patch = {};
    var mine = Array.isArray(rep['我方']) ? rep['我方'] : [];
    if (team.length && mine.length) {
      mine.forEach(function (acc, i) {
        var idx = acc['队伍位置'] != null ? Number(acc['队伍位置']) : i;
        var dst = team[idx] || team.find(function (b) { return b.nick === acc['昵称']; });
        if (!dst) return;
        var hpM = String(acc['体力'] || '').match(/→\s*(\d+)/);
        if (hpM) dst.hp = clamp(hpM[1], 0, 100);
        if (acc['伤势']) dst.injury = String(acc['伤势']);
        if (acc['疲劳终值'] != null) dst.fatigue = clamp(acc['疲劳终值'], 0, 100);
        if (acc['经验当前'] != null) dst.exp = Number(acc['经验当前']);
        if (acc['升级所需'] != null) dst.expNeed = Number(acc['升级所需']);
        if (acc['Lv'] != null) dst.level = Number(acc['Lv']);
        if (acc['瓶颈'] !== undefined) dst.bottleneck = acc['瓶颈'] ? '是' : null;
        if (acc['成长终值'] != null) dst.growth = clamp(acc['成长终值'], 0, 100);
        if (acc['羁绊终值'] != null) dst.bond = clamp(acc['羁绊终值'], 0, 100);
      });
      patch.team = team;
    }
    if (Array.isArray(rep['背包'])) {
      patch.bag = rep['背包'].filter(function (x) { return x && x.name && (x.qty == null || Number(x.qty) > 0); })
        .map(function (x) { return { name: String(x.name), qty: x.qty == null ? null : Number(x.qty) }; });
    }
    if (rep['驯兽师参战'] && rep['驯兽师参战']['驯兽师挂彩'] && rep['驯兽师参战']['驯兽师挂彩'] !== '无') {
      patch.injury = String(rep['驯兽师参战']['驯兽师挂彩']);
    }
    if (!Object.keys(patch).length) return { ok: false, reason: '战报无可同步字段' };
    return commit(st, patch, '战报实时同步（' + (rep['结果'] || '已结束') + '）', { baseState: baseState });
  }

  // 野外探险结束后同步队伍状态和背包战利品
  function syncWildResult(st, baseState, payload) {
    if (!payload || typeof payload !== 'object') return { ok: false, reason: '无野外结算载荷' };
    if (getHostStatus(st).locked) return { ok: false, locked: true };
    var cur = workingState(st, baseState);
    var patch = {};
    var remain = Array.isArray(payload['队伍残余']) ? payload['队伍残余'] : [];
    var team = Array.isArray(cur.team) ? clone(cur.team) : [];
    if (team.length && remain.length) {
      remain.forEach(function (r, idx) {
        var dst = team.find(function (b) { return b.nick === r['昵称'] || b.species === r['昵称']; }) || team[idx];
        if (!dst) return;
        if (r['体力'] != null) dst.hp = clamp(r['体力'], 0, 100);
        if (r['疲劳'] != null) dst.fatigue = clamp(r['疲劳'], 0, 100);
      });
      patch.team = team;
    }
    var loot = payload['背包变动'];
    if (loot && typeof loot === 'object') {
      var bag = Array.isArray(cur.bag) ? clone(cur.bag) : [];
      Object.keys(loot).forEach(function (name) {
        var delta = Number(loot[name] || 0);
        if (!delta) return;
        var hit = bag.find(function (x) { return x && x.name === name; });
        if (hit) hit.qty = Math.max(0, (hit.qty == null ? 1 : Number(hit.qty)) + delta);
        else if (delta > 0) bag.push({ name: name, qty: delta });
      });
      patch.bag = bag.filter(function (x) { return x && (x.qty == null || x.qty > 0); });
    }
    if (!Object.keys(patch).length) return { ok: false, reason: '无可同步字段' };
    return commit(st, patch, '野外探险实时同步（' + (payload['区域'] || '收获已入袋') + '）', { baseState: baseState });
  }

  var api = {
    TEMPLATE_ID: TEMPLATE_ID,
    SOURCE_TAG: SOURCE_TAG,
    SHOP_CATALOG: SHOP_CATALOG,
    ITEM_EFFECTS: ITEM_EFFECTS,
    matchItemEffect: matchItemEffect,
    getHostStatus: getHostStatus,
    enableUiTemplate: enableUiTemplate,
    commit: commit,
    undoLast: undoLast,
    recentLogs: recentLogs,
    setLead: setLead,
    toggleWhere: toggleWhere,
    setTraining: setTraining,
    swapMove: swapMove,
    useBagItem: useBagItem,
    buyShopItem: buyShopItem,
    adjustBag: adjustBag,
    completeSchedule: completeSchedule,
    addSchedule: addSchedule,
    readMessage: readMessage,
    clearMessages: clearMessages,
    setDifficulty: setDifficulty,
    syncBattleResult: syncBattleResult,
    syncWildResult: syncWildResult,
    findTemplate: findTemplate
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.P12InstantVars = api;
})(typeof window !== 'undefined' ? window : this);

;
// hook/wristband-v3.js — WT-v7 / OS v3.0 云端手环全交互界面
// 负责强制开启 RP-Hub UI 模板守卫、实时变量状态展示、7 大分页交互操作与一键即时结算。
(function (root) {
  'use strict';

  var swapTargetStorageIdx = -1; // 正在准备换招的仓库索引
  var bagTargetSel = 'beast:0';  // 背包使用目标（'tamer' 或 'beast:i'）
  var dexQuery = '';             // 图鉴搜索关键词
  var shopOpen = false;          // 补给站折叠态记忆

  function IV() { return root.P12InstantVars || null; }

  function renderLockBar(ctx) {
    var iv = IV();
    if (!iv) return '';
    var hs = iv.getHostStatus(ctx.st);
    if (!hs.locked) return '';
    return '<div class="p12-lock-bar">' +
      '<span>⚠ 未启用 RP-Hub UI 模板：手环即时写入已锁定</span>' +
      '<button type="button" class="v7-act-btn sun" data-iv="enable-ui">⚡ 一键开启 UI 模板</button>' +
    '</div>';
  }

  function renderDrawer(ctx) {
    var iv = IV();
    var hs = iv ? iv.getHostStatus(ctx.st) : { locked: false, readyToWrite: false };
    var logs = iv ? iv.recentLogs(ctx.st, 1) : [];
    var canUndo = !!(logs[0] && logs[0].source === 'p12-wristband');

    var syncPill = hs.locked
      ? '<span class="v7-sync-pill off"><i></i>未开 UI 模板</span>'
      : (hs.readyToWrite
        ? '<span class="v7-sync-pill"><i></i>即时同步</span>'
        : '<span class="v7-sync-pill off"><i></i>正文账本</span>');

    var s = ctx.viewState() || {};
    var t = ctx.dialNow();
    var customFull = ctx.load('tamerFull:' + ctx.scope(), '');
    var avObj = s.name ? ctx.avatarOf(s.name, '', 'head') : null;
    var avUrl = ctx.sprOkStr(customFull) ? customFull : (avObj && avObj.url ? avObj.url : '');
    var badgeIcon = (root.P12_UI_ICONS || {})['association-badge'] || '';
    var litBadges = ctx.parseBadgeLit(s.badges);
    var hexHtml = '';
    for (var bi = 0; bi < 8; bi++) {
      hexHtml += '<span class="v7-hex' + (bi < litBadges ? ' lit' : '') + '">' + (bi < litBadges ? '★' : '') + '</span>';
    }
    var hurt = s.injury && s.injury !== '无';

    var h = '<div class="v7-os-bar">' +
        '<span>TAMER·LINK // OS v3.0</span>' +
        '<span style="display:inline-flex;align-items:center;gap:6px">' +
          syncPill +
          (canUndo ? '<button type="button" class="v7-undo-hdr" data-iv="undo" title="撤销最近一次手环即时操作">↩ 撤销</button>' : '') +
          '<span class="os-rt"><i></i><b>' + ctx.esc(t.hh) + '</b> · ' + ctx.esc(t.dt) + '</span>' +
        '</span>' +
        '<button type="button" class="p12-x" data-k="close" aria-label="关闭手环">✕</button>' +
      '</div>' +
      '<div class="v7-id-card">' +
        renderLockBar(ctx) +
        '<div class="v7-id-main">' +
          '<div class="v7-id-av" data-goto-sys="1" title="点击配置驯兽师立绘"' + (avUrl ? ' style="background-image:url(\'' + ctx.esc(avUrl) + '\')"' : '') + '>' +
            (avUrl ? '' : ctx.esc(String(s.name || '驯').slice(0, 1))) + '</div>' +
          '<div class="v7-id-info">' +
            '<div class="v7-id-r1"><span class="v7-id-nm">' + ctx.esc(s.name || '未登记驯兽师') + '</span>' +
              '<span class="v7-id-lic">' + ctx.esc(s.license ? s.license + '驯兽师' : '待发证') + '</span></div>' +
            '<div class="v7-id-r2"><span class="v7-id-funds">' + ctx.esc(s.funds || '¥ —') + '</span>' +
              '<span>' + ctx.esc(s.rank || '未上榜') + '</span>' +
              '<span class="v7-id-inj' + (hurt ? ' hurt' : '') + '">伤势·' + ctx.esc(s.injury || '无') + '</span>' +
              (s.difficulty ? '<span style="color:#475569;font-size:10.5px">[' + ctx.esc(s.difficulty) + ']</span>' : '') +
            '</div>' +
          '</div>' +
          (badgeIcon ? '<img class="v7-id-shield" src="' + ctx.esc(badgeIcon) + '" alt="ITA">' : '') +
        '</div>' +
        '<div class="v7-crest-bar">' +
          '<span class="v7-crest-lbl">GYM CRESTS · 道馆徽章' + (s.badges ? '（' + ctx.esc(s.badges) + '）' : '') + '</span>' +
          '<div class="v7-crest-slots">' + hexHtml + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="p12-tabs">' + ctx.TABS.map(function (x) {
        var n = ctx.tabNum(x[0]);
        return '<button type="button" class="p12-tab' + (ctx.getTab() === x[0] ? ' on' : '') + '" data-p="' + x[0] + '">' + x[1] + (n ? '<sup>' + n + '</sup>' : '') + '</button>';
      }).join('') + '</div>' +
      '<div class="p12-body">';

    var curTab = ctx.getTab();
    ctx.TABS.forEach(function (x) {
      h += '<div class="p12-page' + (curTab === x[0] ? ' on' : '') + '" data-p="' + x[0] + '">' + ctx.PAGES[x[0]]() + '</div>';
    });
    h += '</div>';
    return h;
  }

  function renderTeam(ctx) {
    var s = ctx.viewState();
    if (!s) return ctx.empty(ctx.hasParser ? '还没读到 AI 回复里的 <status>。装钩子后下一轮自动读。' : '正文解析器没装上，手环读不了 <status>。');
    var team = s.team || [];
    if (!team.length) return ctx.empty('尚未结契搭档异兽 · 去野外探索或完成登记吧') + ctx.presentHtml(s);
    var sel = ctx.getSelBeast();
    if (sel >= team.length) { sel = 0; ctx.setSelBeast(0); }

    var strip = '<div class="v7-pod-strip">';
    for (var si = 0; si < 6; si++) {
      var sb = team[si];
      if (sb) {
        var shp = sb.hp == null ? 100 : ctx.clampPct(sb.hp);
        var sbChain = ctx.creatureChain(sb.species || sb.nick, sb.types, sb);
        var sbUrl = sbChain.length ? sbChain[0].url : '';
        strip += '<div class="v7-pod-slot' + (si === sel ? ' sel' : '') + '" data-beast="' + si + '" title="' + ctx.esc((sb.nick || sb.species) + ' HP ' + shp + '%') + '">' +
          '<div class="pod-spr"' + ctx.creatureAttrs(sb.species || sb.nick, sb.types, sb) + ' data-p12-contain=""' + (sbUrl ? ' style="background-image:url(\'' + ctx.esc(sbUrl) + '\')"' : '') + '></div>' +
          '<div class="pod-hp' + (shp < 30 ? ' low' : '') + '"><i style="width:' + shp + '%"></i></div></div>';
      } else {
        strip += '<div class="v7-pod-slot empty">+</div>';
      }
    }
    strip += '</div>';

    var b = team[sel] || {};
    var ts = (b.types || []).filter(Boolean);
    var spName = b.species || b.nick || '';
    var bChain = ctx.creatureChain(spName, b.types, b);
    var bInitUrl = bChain.length ? bChain[0].url : '';
    var isFlipped = typeof ctx.batFlipOf === 'function' ? ctx.batFlipOf(spName) : false;
    var hpVal = b.hp == null ? 100 : ctx.clampPct(b.hp);
    var cap = ctx.stageCap(b.stage);
    var expPct = (b.expNeed && b.exp != null) ? ctx.clampPct(b.exp / b.expNeed * 100) : (b.bottleneck ? 100 : 0);
    var grwVal = b.growth == null ? 0 : ctx.clampPct(+b.growth);
    var inBall = /球内|球中/.test(String(b.where || ''));

    var trainOpts = ['均衡', '进攻', '防守', '速度', '技巧', '耐力', '自由'];
    var curTrain = String(b.training || '').trim();
    if (curTrain && trainOpts.indexOf(curTrain) < 0) trainOpts.unshift(curTrain);

    var quickBar = '<div class="v7-quick-bar">' +
      (sel > 0 ? '<button type="button" class="v7-act-btn pri" data-iv="lead" data-idx="' + sel + '">★ 设为首发</button>' : '<span class="v7-act-btn" style="background:#dbeeff;cursor:default">★ 当前首发</span>') +
      '<button type="button" class="v7-act-btn" data-iv="where" data-idx="' + sel + '">' + (inBall ? '⚪ 放出球外' : '🔴 收回球内') + '</button>' +
      '<select class="v7-act-sel" data-iv-train="' + sel + '" aria-label="训练倾向">' +
        trainOpts.map(function (tr) { return '<option value="' + ctx.esc(tr) + '"' + (tr === curTrain ? ' selected' : '') + '>训练·' + ctx.esc(tr) + '</option>'; }).join('') +
      '</select>' +
    '</div>';

    var hero = '<div class="v7-beast-hero">' +
      (b.level != null ? '<div class="v7-lv-wm">LV.' + ctx.esc(b.level) + '</div>' : '') +
      '<div class="v7-hero-tools">' +
        (spName ? '<button type="button" class="v7-tool-btn' + (isFlipped ? ' on' : '') + '" data-pflip="' + ctx.esc(spName) + '" title="切换该物种立绘左右朝向（同步对战舞台）">⇄ 朝向</button>' : '') +
        '<button type="button" class="v7-tool-btn p12-pedit" data-pedit="' + sel + '" aria-label="设置' + ctx.esc(b.nick || spName || '异兽') + '的立绘">✎ 立绘</button>' +
      '</div>' +
      '<div class="v7-hero-grid">' +
        '<div>' +
          '<div class="v7-b-tags">' +
            ts.map(function (t) { return ctx.hudTypeIcon(t, false); }).join('') +
            (b.bondTier || b.bond != null ? '<span class="v7-bond-pill">♥ ' + ctx.esc(b.bondTier || ('羁绊 ' + b.bond)) + '</span>' : '') +
          '</div>' +
          '<div class="v7-b-nm">' + ctx.esc(b.nick || spName || '未名') + '</div>' +
          '<div class="v7-b-sub">' + ctx.esc([b.stage, spName !== b.nick ? spName : null, b.where].filter(Boolean).join(' · ') || '阶段未登记') + '</div>' +
          '<div class="v7-seg-lbl"><span>HP 体力</span><b>' + (b.hp == null ? '—' : hpVal + '%') + '</b></div>' +
          ctx.segs12(hpVal, 'hp' + (hpVal < 30 ? ' low' : '')) +
          '<div class="v7-seg-lbl"><span>EXP 经验' + (b.level != null ? ' · Lv ' + b.level + (cap ? '/' + cap : '') : '') + '</span><b' + (b.bottleneck ? ' style="color:var(--hot)"' : '') + '>' +
            (b.bottleneck ? '瓶颈突破待定' : (b.expNeed && b.exp != null ? b.exp + '/' + b.expNeed : '—')) + '</b></div>' +
          ctx.segs12(expPct, 'exp') +
          (b.growth != null ? '<div class="v7-seg-lbl"><span>GROWTH 成长</span><b>' + b.growth + '/100' + (+b.growth >= 100 ? ' 可进化!' : '') + '</b></div>' + ctx.segs12(grwVal, 'grw') : '') +
          '<div class="v7-b-meta">' +
            (b.fatigue != null ? '<span>疲劳 ' + b.fatigue + '</span>' : '') +
            (b.training ? '<span>训练·' + ctx.esc(b.training) + '</span>' : '') +
            (b.injury && b.injury !== '无' ? '<span style="color:var(--hot);border-color:#fca5a5">伤势·' + ctx.esc(b.injury) + '</span>' : '') +
          '</div>' +
          quickBar +
        '</div>' +
        '<div class="v7-b-stage">' +
          '<div class="v7-b-disc"></div>' +
          '<div class="v7-b-art' + (isFlipped ? ' is-flipped' : '') + '"' + ctx.creatureAttrs(spName, b.types, b) + ' data-p12-contain=""' + (bInitUrl ? ' style="background-image:url(\'' + ctx.esc(bInitUrl) + '\')"' : '') + '></div>' +
        '</div>' +
      '</div>' +
    '</div>';

    var moves = b.moves || [];
    var mvs = moves.map(function (m) {
      var mi = ctx.parseMoveInfo(m, ts[0]);
      var mc = ctx.tyC(mi.type || ts[0]);
      return '<div class="v7-mv-card" style="--mc:' + mc + '">' +
        ctx.hudTypeIcon(mi.type || ts[0], false) +
        '<div style="min-width:0;flex:1"><b>' + ctx.esc(mi.name || '未名招式') + '</b>' +
        '<small>' + ctx.esc([mi.type ? mi.type + '属性' : null, mi.tier ? mi.tier + '档' : null].filter(Boolean).join(' · ') || '常规招式') + '</small></div></div>';
    }).join('');
    var mvBlock = mvs ? '<div class="v7-move-grid">' + mvs + '</div>' : '';

    var storage = b.storage || [];
    var storeBlock = '';
    if (storage.length) {
      if (swapTargetStorageIdx >= storage.length) swapTargetStorageIdx = -1;
      storeBlock = '<div class="v7-store-wrap">' +
        '<div class="v7-store-hd"><span>📦 招式仓库（点击招式可即时替换出战槽位）</span><em>' + storage.length + ' 招</em></div>' +
        '<div class="v7-store-pills">' + storage.map(function (sm, sIdx) {
          var lb = ctx.moveLabel(sm);
          return '<button type="button" class="v7-store-pill' + (swapTargetStorageIdx === sIdx ? ' on' : '') + '" data-iv="pick-store" data-sidx="' + sIdx + '">' + ctx.esc(lb) + '</button>';
        }).join('') + '</div>';
      if (swapTargetStorageIdx >= 0 && storage[swapTargetStorageIdx]) {
        var pickedLabel = ctx.moveLabel(storage[swapTargetStorageIdx]);
        storeBlock += '<div class="v7-swap-box">' +
          '<span>将「' + ctx.esc(pickedLabel) + '」替换到：</span>' +
          moves.map(function (am, aIdx) {
            var mi = ctx.parseMoveInfo(am, ts[0]);
            return '<button type="button" class="v7-act-btn sun" data-iv="swap-move" data-idx="' + sel + '" data-aidx="' + aIdx + '" data-sidx="' + swapTargetStorageIdx + '">换下 #' + (aIdx + 1) + ' ' + ctx.esc(mi.name || am) + '</button>';
          }).join('') +
          (moves.length < 4 ? '<button type="button" class="v7-act-btn pri" data-iv="swap-move" data-idx="' + sel + '" data-aidx="-1" data-sidx="' + swapTargetStorageIdx + '">＋ 直接装备</button>' : '') +
          '<button type="button" class="v7-act-btn" data-iv="pick-store" data-sidx="-1">取消</button>' +
        '</div>';
      }
      storeBlock += '</div>';
    }

    return strip + hero + mvBlock + storeBlock + ctx.presentHtml(s);
  }

  function renderBag(ctx) {
    var iv = IV();
    var s = ctx.viewState() || {};
    var bag = s.bag || [];
    var team = s.team || [];
    var rawPlace = (s.scene && s.scene.place) || '';
    var parts = String(rawPlace).split(/[·|｜]/).map(function (x) { return x.trim(); }).filter(Boolean);
    var cityTag = parts.slice(1, 3).join('·') || parts[0] || '未知区域';
    var spot = parts[parts.length - 1] || '当前位置';
    var slotTag = [s.scene && s.scene.slot, s.scene && s.scene.type].filter(Boolean).join(' · ') || '实时雷达';
    var picked = ctx.pickRadarArt(rawPlace);

    var h = '<div class="v7-sec-hd"><span>🧭 区域雷达 &amp; 随身背包</span><em>' + ctx.esc(cityTag) + '</em></div>' +
      '<div class="v7-map-box"' + (picked.url ? ' style="background-image:url(\'' + ctx.esc(picked.url) + '\')"' : '') + '>' +
        '<div class="v7-map-pin">📍 ' + ctx.esc(spot) + '（当前）</div>' +
        '<div class="v7-map-sub">' + ctx.esc(slotTag) + '</div>' +
      '</div>';

    var targetOpts = team.map(function (b, bi) {
      var val = 'beast:' + bi;
      return '<option value="' + val + '"' + (bagTargetSel === val ? ' selected' : '') + '>' + ctx.esc((b.nick || b.species) + ' HP ' + (b.hp == null ? '?' : b.hp + '%')) + '</option>';
    }).join('') + '<option value="tamer"' + (bagTargetSel === 'tamer' ? ' selected' : '') + '>驯兽师本人（' + ctx.esc(s.injury || '无') + '）</option>';

    h += '<div style="margin:6px 0;display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap">' +
      '<span style="font:900 11px/1.2 inherit;color:var(--ink2)">随身背包物资（' + bag.length + ' 项）</span>' +
      '<span style="font:700 11px/1.2 inherit;color:var(--ink2)">使用对象：<select class="v7-act-sel" data-iv-target="1">' + targetOpts + '</select></span>' +
    '</div>';

    if (!bag.length) {
      h += ctx.empty(s.name ? '随身背包暂无物品' : '尚未读取到状态栏');
    } else {
      h += '<div class="v7-bag-list">' + bag.map(function (x, bIdx) {
        var nm = x.name || '';
        var eff = iv ? iv.matchItemEffect(nm) : null;
        return '<div class="v7-bag-card">' +
          '<div class="v7-bag-left">' +
            '<span class="v7-bag-dot" style="background:' + ctx.bagDotColor(nm) + '"></span>' +
            '<b>' + ctx.esc(nm) + '</b>' +
            (x.qty == null ? '' : '<span class="qt">×' + x.qty + '</span>') +
            (eff ? '<span class="v7-bag-eff">' + ctx.esc(eff.label) + '</span>' : '') +
          '</div>' +
          '<div class="v7-bag-ops">' +
            (eff ? '<button type="button" class="v7-act-btn pri" data-iv="use-bag" data-bidx="' + bIdx + '">即刻使用</button>'
                 : '<button type="button" class="v7-act-btn" data-iv="say-bag" data-name="' + ctx.esc(nm) + '">写入剧情</button>') +
          '</div>' +
        '</div>';
      }).join('') + '</div>';
    }

    // 协会标准补给站（随时买、即扣钱加背包）
    var catalog = iv ? iv.SHOP_CATALOG : [];
    var fundsNum = (s.fundsNum != null && isFinite(+s.fundsNum)) ? +s.fundsNum : Number(String(s.funds || '').replace(/[^\d.-]/g, '')) || 0;
    h += '<details class="v7-shop-box"' + (shopOpen ? ' open' : '') + ' data-iv-shop-details="1">' +
      '<summary><span>🏪 协会标准补给站（即时购入）</span><span>可用资金：' + ctx.esc(s.funds || '¥0') + '</span></summary>' +
      '<div class="v7-shop-grid">' + catalog.map(function (g) {
        var canBuy = fundsNum >= g.price;
        return '<div class="v7-shop-item">' +
          '<div><div style="display:flex;justify-content:space-between;align-items:center"><b>' + ctx.esc(g.name) + '</b><span style="font:900 11px/1 inherit;color:var(--sun)">¥' + g.price + '</span></div>' +
          '<small>' + ctx.esc(g.desc) + '</small></div>' +
          '<button type="button" class="v7-act-btn' + (canBuy ? ' sun' : '') + '"' + (canBuy ? '' : ' disabled') + ' data-iv="buy" data-gid="' + ctx.esc(g.id) + '">' + (canBuy ? '购入 ×1' : '余额不足') + '</button>' +
        '</div>';
      }).join('') + '</div>' +
    '</details>';

    return h;
  }

  function renderSch(ctx) {
    var s = ctx.viewState() || {};
    var sch = s.schedule || [];
    var now = ctx.sceneDate ? ctx.sceneDate() : null;
    var defDate = now ? (String(now.m).padStart(2, '0') + '-' + String(now.d).padStart(2, '0')) : '';
    var h = ctx.calGrid();
    h += '<div style="margin:10px 0 6px;display:flex;justify-content:space-between;align-items:center">' +
      '<span style="font:900 11px/1.2 inherit;letter-spacing:.08em;color:var(--sun)">▸ 当前约定日程（' + sch.length + '）</span>' +
    '</div>';
    if (!sch.length) {
      h += ctx.empty('状态栏暂无【日程】约定');
    } else {
      sch.forEach(function (x, idx) {
        var k = [x.date, x.time].filter(Boolean).join(' ');
        h += '<div class="p12-row sch" style="justify-content:space-between;align-items:center;gap:6px">' +
          '<div style="display:flex;gap:8px;min-width:0;flex:1"><span class="k">' + ctx.esc(k || '待定') + '</span><span class="v">' +
          ctx.esc([x.place, x.what].filter(Boolean).join(' · ') || x.raw || '') + '</span></div>' +
          '<button type="button" class="v7-act-btn" data-iv="done-sch" data-idx="' + idx + '" title="完成或划销这条约定">✓ 划销</button>' +
        '</div>';
      });
    }
    h += '<div class="v7-sch-form">' +
      '<input data-sch-f="date" value="' + ctx.esc(defDate) + '" placeholder="MM-DD">' +
      '<input data-sch-f="time" value="" placeholder="HH:MM">' +
      '<input data-sch-f="place" value="" placeholder="地点">' +
      '<input data-sch-f="what" value="" placeholder="新增约定事由…">' +
      '<button type="button" class="v7-act-btn pri" data-iv="add-sch">＋ 记入</button>' +
    '</div>';
    return h;
  }

  function renderMsg(ctx) {
    var ms = (ctx.viewState() && ctx.viewState().messages) || [];
    var h = '<div class="v7-sec-hd"><span>💬 终端联络 · 讯息收件箱</span>' +
      '<span style="display:inline-flex;align-items:center;gap:6px">' +
        '<em>' + (ms.length ? '未读 ' + ms.length : '0') + '</em>' +
        (ms.length ? '<button type="button" class="v7-act-btn" data-iv="clear-msg">全部已读</button>' : '') +
      '</span></div>';
    if (!ms.length) return h + ctx.empty('目前没有收到新讯息');
    return h + ms.map(function (x, idx) {
      var who = x.from || '未知发信人';
      return '<div class="p12-row p12-c-row" style="border-left-color:var(--sun);justify-content:space-between;gap:8px">' +
        '<div style="display:flex;gap:8px;align-items:center;min-width:0;flex:1" data-pa="' + ctx.esc(who) + '" data-sub="' + ctx.esc(x.text || '') + '">' +
          ctx.avHtml(ctx.avatarOf(who, null, 'head'), 'p12-c-av', who) +
          '<div style="flex:1;min-width:0"><div style="font:900 12px/1.2 inherit;color:var(--sun)">✉ ' + ctx.esc(who) + '</div>' +
          '<div style="font:700 13px/1.5 inherit;color:var(--ink);margin-top:3px">' + ctx.esc(x.text || '') + '</div></div>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:4px;flex:none">' +
          '<button type="button" class="v7-act-btn pri" data-iv="reply-msg" data-from="' + ctx.esc(who) + '" data-text="' + ctx.esc(x.text || '') + '">回信</button>' +
          '<button type="button" class="v7-act-btn" data-iv="read-msg" data-idx="' + idx + '">已读</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderDex(ctx) {
    var dex = ctx.load(ctx.scopeK('dex'), []), s = ctx.viewState();
    var n = (s && s.dexCount != null) ? s.dexCount : dex.length;
    var rec = (s && s.record) || {};
    var moveCnt = (s && s.moveDex != null) ? s.moveDex : (rec['招式图鉴'] || '—');
    var q = dexQuery.trim().toLowerCase();
    var filtered = q ? dex.filter(function (c) {
      return [c.name, c.stage, (c.types || []).join('/'), c.place, c.look].join(' ').toLowerCase().indexOf(q) >= 0;
    }) : dex;

    var h = '<div class="v7-sec-hd"><span>📘 异兽图鉴 &amp; 驯兽履历</span><em>已收录 ' + n + '</em></div>' +
      '<div class="v7-rec-grid">' +
        '<div class="v7-rec-cell"><small>物种图鉴</small><b>' + ctx.esc(n) + '</b></div>' +
        '<div class="v7-rec-cell"><small>招式图鉴</small><b>' + ctx.esc(moveCnt) + '</b></div>' +
        '<div class="v7-rec-cell"><small>城市足迹</small><b>' + ctx.esc(rec['足迹'] || '—') + '</b></div>' +
        '<div class="v7-rec-cell"><small>正规战绩</small><b>' + ctx.esc(String(rec['战绩'] || '—').replace(/^正规\s*/, '')) + '</b></div>' +
      '</div>';
    if (dex.length) {
      h += '<input class="v7-search-inp" data-iv-dexq="1" value="' + ctx.esc(dexQuery) + '" placeholder="🔍 搜图鉴：输入物种名 / 属性 / 发现地…">';
    }
    if (!filtered.length) return h + ctx.empty(dex.length ? '没有符合“' + dexQuery + '”的图鉴记录' : ('本局尚未触发 <图鉴> 新发现卡' + (n ? '（状态栏累计记录 ' + n + ' 种）' : '')));
    filtered.slice().reverse().forEach(function (c) {
      var cChain = ctx.creatureChain(c.name, c.types);
      var cUrl = cChain.length ? cChain[0].url : '';
      h += '<div class="v7-dex-row">' +
        '<div class="v7-dex-thumb"' + ctx.creatureAttrs(c.name, c.types) + ' data-p12-contain=""' + (cUrl ? ' style="background-image:url(\'' + ctx.esc(cUrl) + '\')"' : '') + '></div>' +
        '<div style="flex:1;min-width:0">' +
          '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">' +
            '<b style="font-size:14.5px">' + ctx.esc(c.name) + '</b>' +
            (c.stage ? '<span style="font:800 10.5px/1.2 inherit;color:var(--sky);background:#eef8ff;padding:1px 6px">' + ctx.esc(c.stage) + '</span>' : '') +
            (c.types || []).map(function (t) { return ctx.hudTypeIcon(t, true); }).join('') +
          '</div>' +
          (c.look || c.place ? '<div style="font-size:11.5px;color:var(--ink2);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' +
            ctx.esc([c.look, c.place ? '发现于 ' + c.place : null].filter(Boolean).join(' ｜ ')) + '</div>' : '') +
        '</div></div>';
    });
    return h + '<div style="text-align:center;font:800 11px/1.4 inherit;color:var(--ink2);padding-top:4px">共收录 ' + n + ' 种异兽档案</div>';
  }

  function renderSys(ctx) {
    var iv = IV();
    var s = ctx.viewState() || {};
    var hs = iv ? iv.getHostStatus(ctx.st) : {};
    var logs = iv ? iv.recentLogs(ctx.st, 8) : [];
    var canUndo = !!(logs[0] && logs[0].source === 'p12-wristband');

    var h = '<div class="v7-sec-hd"><span>⚙ 终端设置 SYS</span><em>' + ctx.esc(ctx.VER) + '</em></div>';

    // 卡片 0：UI 模板与即时变量中心
    h += '<div class="v7-sys-card" style="border-left:4px solid ' + (hs.locked ? '#ff2e55' : '#10b981') + '">' +
      '<div class="v7-sys-ttl"><span>⚡ UI 模板与即时变量中心</span>' +
        '<span style="font-size:11px;font-weight:800;color:' + (hs.locked ? '#be123c' : '#059669') + '">' + (hs.locked ? '未完整开启' : '已激活即时写入') + '</span>' +
      '</div>' +
      '<div class="v7-sys-row"><span>全局 UI 模板开关 / 主模型分析</span><span>' + (hs.uiTemplateEnabled ? '✅ 已开' : '❌ 未开') + ' / ' + (hs.mainModelMode ? '✅ 主模型' : '○ 副模型') + '</span></div>' +
      '<div class="v7-sys-row"><span>状态模板（p12-current-status-v1）</span><span>' + (hs.templateFound && hs.templateEnabled ? '✅ 已启用' : '❌ 未启用') + '</span></div>' +
      '<div class="v7-sys-row"><span>难度档位快切</span><select class="v7-act-sel" data-iv-diff="1">' +
        ['轻松', '标准', '硬核', '自定义'].map(function (d) { return '<option value="' + d + '"' + (String(s.difficulty || '标准').indexOf(d) >= 0 ? ' selected' : '') + '>' + d + '</option>'; }).join('') +
      '</select></div>' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">' +
        (hs.locked ? '<button type="button" class="v7-act-btn sun" data-iv="enable-ui">⚡ 一键强制开启 UI 模板</button>' : '') +
        (canUndo ? '<button type="button" class="v7-act-btn" data-iv="undo">↩ 撤销最近手环修改</button>' : '') +
      '</div>' +
      (logs.length ? '<div class="v7-log-list">' + logs.map(function (lg) {
        var isWb = lg.source === 'p12-wristband';
        var txt = lg._label || ('变更 ' + Object.keys(lg.changes || {}).join('、'));
        return '<div class="v7-log-row' + (isWb ? ' wb' : '') + '"><span>[' + (isWb ? '手环即时' : ctx.esc(lg.source || 'AI')) + '] ' + ctx.esc(txt) + '</span><span>T' + (lg.turn == null ? '-' : lg.turn) + '</span></div>';
      }).join('') + '</div>' : '') +
    '</div>';

    return h + ctx.legacySysRestHtml();
  }

  function handleAction(btn, ctx) {
    var iv = IV();
    if (!iv || !btn) return false;
    var act = btn.getAttribute('data-iv');
    if (!act) return false;
    var base = ctx.viewState();
    var res = null;

    if (act === 'enable-ui') {
      res = iv.enableUiTemplate(ctx.st);
      if (res && res.ok) {
        syncLockBanner(ctx.doc, ctx.st, function () { ctx.render(); }, ctx.toast);
        ctx.toast('✓ 已一键开启 RP-Hub UI 模板与即时变量同步！', false);
        ctx.render();
      }
      return true;
    }
    if (act === 'undo') {
      res = iv.undoLast(ctx.st);
      if (res.ok) ctx.toast('↩ 已撤销：' + res.summary, true);
      else ctx.toast(res.reason || '无法撤销', false, true);
      ctx.render();
      return true;
    }
    if (act === 'lead') { res = iv.setLead(ctx.st, base, btn.getAttribute('data-idx')); }
    else if (act === 'where') { res = iv.toggleWhere(ctx.st, base, btn.getAttribute('data-idx')); }
    else if (act === 'pick-store') {
      var sidx = Number(btn.getAttribute('data-sidx'));
      swapTargetStorageIdx = (swapTargetStorageIdx === sidx || sidx < 0) ? -1 : sidx;
      ctx.render();
      return true;
    }
    else if (act === 'swap-move') {
      res = iv.swapMove(ctx.st, base, btn.getAttribute('data-idx'), btn.getAttribute('data-aidx'), btn.getAttribute('data-sidx'));
      if (res && res.ok) swapTargetStorageIdx = -1;
    }
    else if (act === 'use-bag') {
      var target = bagTargetSel === 'tamer'
        ? { kind: 'tamer' }
        : { kind: 'beast', idx: Number((bagTargetSel.split(':')[1]) || 0) };
      res = iv.useBagItem(ctx.st, base, btn.getAttribute('data-bidx'), target);
    }
    else if (act === 'say-bag') {
      var nm = btn.getAttribute('data-name') || '';
      if (nm && ctx.fillInput) ctx.fillInput('我拿出「' + nm + '」使用。');
      ctx.toast('已填入输入框：「' + nm + '」', false);
      return true;
    }
    else if (act === 'buy') {
      shopOpen = true;
      res = iv.buyShopItem(ctx.st, base, btn.getAttribute('data-gid'));
    }
    else if (act === 'done-sch') { res = iv.completeSchedule(ctx.st, base, btn.getAttribute('data-idx')); }
    else if (act === 'add-sch') {
      var box = ctx.box;
      var q = function (f) { var n = box && box.querySelector('[data-sch-f="' + f + '"]'); return n ? n.value : ''; };
      res = iv.addSchedule(ctx.st, base, { date: q('date'), time: q('time'), place: q('place'), what: q('what') });
    }
    else if (act === 'read-msg') { res = iv.readMessage(ctx.st, base, btn.getAttribute('data-idx')); }
    else if (act === 'clear-msg') { res = iv.clearMessages(ctx.st, base); }
    else if (act === 'reply-msg') {
      var from = btn.getAttribute('data-from') || '';
      if (ctx.fillInput) ctx.fillInput('我回复' + from + '的消息：');
      ctx.toast('已准备回复「' + from + '」，请确认输入', false);
      return true;
    }

    if (res) {
      if (res.ok) ctx.toast('✓ ' + res.summary, true);
      else ctx.toast('⚠ ' + (res.reason || '操作未能完成'), false, true);
      ctx.render();
      return true;
    }
    return false;
  }

  function handleChange(target, ctx) {
    var iv = IV();
    if (!iv || !target || !target.getAttribute) return false;
    if (target.hasAttribute('data-iv-train')) {
      var res = iv.setTraining(ctx.st, ctx.viewState(), target.getAttribute('data-iv-train'), target.value);
      ctx.toast(res.ok ? ('✓ ' + res.summary) : ('⚠ ' + res.reason), !!res.ok, !res.ok);
      ctx.render();
      return true;
    }
    if (target.hasAttribute('data-iv-target')) {
      bagTargetSel = target.value || 'beast:0';
      return true;
    }
    if (target.hasAttribute('data-iv-diff')) {
      var dr = iv.setDifficulty(ctx.st, ctx.viewState(), target.value);
      ctx.toast(dr.ok ? ('✓ ' + dr.summary) : ('⚠ ' + dr.reason), !!dr.ok, !dr.ok);
      ctx.render();
      return true;
    }
    return false;
  }

  function handleInput(target, ctx) {
    if (!target || !target.hasAttribute || !target.hasAttribute('data-iv-dexq')) return false;
    dexQuery = target.value || '';
    var pos = target.selectionStart;
    ctx.render();
    try {
      var ni = ctx.box && ctx.box.querySelector('[data-iv-dexq]');
      if (ni) { ni.focus(); if (pos != null) ni.setSelectionRange(pos, pos); }
    } catch (e) {}
    return true;
  }

  function syncShopToggle(box) {
    try {
      var d = box && box.querySelector('[data-iv-shop-details]');
      if (d) shopOpen = !!d.open;
    } catch (e) {}
  }

  function syncLockBanner(doc, st, onUnlocked, onToast) {
    var iv = IV();
    if (!doc || !doc.body || !iv) return;
    var hs = iv.getHostStatus(st);
    var cur = doc.getElementById('p12-ui-lock-banner');
    if (!hs.locked) {
      if (cur) cur.remove();
      return;
    }
    if (cur) return;
    var bar = doc.createElement('div');
    bar.id = 'p12-ui-lock-banner';
    bar.className = 'p12-ui-lock-banner';
    bar.innerHTML = '<span>⚠ <b>《契约之城》必须开启 RP-Hub UI 模板（主模型分析）</b> 才能同步手环即时数值与状态栏。</span>' +
      '<button type="button" class="p12-ui-lock-btn" data-p12-unlock="1">⚡ 一键自动开启 UI 模板</button>';
    bar.addEventListener('click', function (ev) {
      var b = ev.target && ev.target.closest ? ev.target.closest('[data-p12-unlock]') : null;
      if (!b) return;
      iv.enableUiTemplate(st);
      bar.remove();
      if (typeof onToast === 'function') onToast('✓ 已一键开启 UI 模板！手环即时结算已就绪。', false);
      if (typeof onUnlocked === 'function') onUnlocked();
    });
    doc.body.appendChild(bar);
  }

  var api = {
    renderDrawer: renderDrawer,
    renderTeam: renderTeam,
    renderBag: renderBag,
    renderSch: renderSch,
    renderMsg: renderMsg,
    renderDex: renderDex,
    renderSys: renderSys,
    handleAction: handleAction,
    handleChange: handleChange,
    handleInput: handleInput,
    syncShopToggle: syncShopToggle,
    syncLockBanner: syncLockBanner
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.P12WristbandV3 = api;
})(typeof window !== 'undefined' ? window : this);

;
// 契约之城 · 卡内钩子（v0.7.3 · 手环照总监母版）
// 跑在 RP-Hub 主页面里（由正则输出的 iframe 塞进来）。只在当前角色卡名字含「契约之城」时工作，
// 换别的卡立刻卸载：恢复原 fetch、移除悬浮窗。
// 已接管：①传闻池、事件池、野外遭遇池（请求发出前换成「按场景行抽 N 条、带冷却」的结果）；
//   野外名录按省/季节/昼夜/地貌加权抽兽；
// ②每条 AI 回复落地后读正文（场景行 / <status> / <图鉴>），账本存 localStorage（p12hook: 前缀），按轮次回滚；
// ③手环日历 = 常驻「世界年历·中国」（order 1004050）+ 状态栏【日程】，叠在一张日历上；
//   年历里「定法＝窗口」的行，钩子在同一年里掷一次就固定，AI 在【日程】里定下就以 AI 的为准（D14 ③）；
//   每轮记「哪天、在哪、跟谁同场」，算「上次同场 / 上次到这地方隔了几天」，给重逢推演用（D14 ④，05 8.2）；
// ④图鉴卡存成「本局图鉴」，正文点名、世界书又没这个条目时，把卡拼进请求；
// ⑤注入统计：仅统计原生与钩子补充的条数和字数进面板，不设上限、一条都不裁（沈辰 2026-11-15 定）；
// ⑥真骰：对战回合掷命运骰（11 二）、开盲盒那轮掷稀有度（18 三），概率照原文，结果跟着轮次记账并与正文核对；
// ⑦递归补拉：已注入条目点到的人物／物种补一层；记账：图鉴／履历／背包与上一轮比差异，只报差异。
// ⑧首次登场补详档（D27）：人物/地点拆简档+详档后，详档键锚在【在场】/场景行上，人第一次出场那一轮
//   原生不会注入详档；钩子按「用户点名／场景行地点」补这一轮，下轮【在场】写到他就不补。
// 钩子没装上、被暂停或解析器缺失时，卡退回原生世界书行为（原生保底见 05 第 16.3 节表）。
(function () {
  var CARD = '契约之城';
  var VER = 'v0.8.0';
  if (window.__p12hook) return;
  var root = document.querySelector('#app');
  var st = root && root._vnode && root._vnode.component && root._vnode.component.setupState;
  if (!st) return;
  var onCard = function () {
    var c = st.currentCharacter;
    return !!(c && String(c.name || '').indexOf(CARD) >= 0);
  };
  if (!onCard()) return;

  // ---------- 设置（存 localStorage，只存本钩子自己的） ----------
  var LS = 'p12hook:';
  var load = function (k, d) { try { var v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
  var save = function (k, v) { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch (e) {} };
  var DEF_SPRITE_URL = 'https://42ddc630.wanxiangdengta.pages.dev/file/1795408911785_p12-sprites.json';
  var savedCfg = load('cfg', {});
  // 老存档一旦开关过手环抽屉就会把旧版默认 spriteUrl 存进 localStorage；升级卡版本时自动跟进新官方清单地址（用户主动清空或填外站地址则保留）。
  if (savedCfg && typeof savedCfg.spriteUrl === 'string' && /wanxiangdengta\.pages\.dev\/file\/\d+_p12-sprites\.json$/.test(savedCfg.spriteUrl) && savedCfg.spriteUrl !== DEF_SPRITE_URL) {
    savedCfg.spriteUrl = DEF_SPRITE_URL;
  }
  var cfg = Object.assign({
    on: true, n: 3, cool: 8,
    evN: 2, evCool: 6,      // 事件池：每次抽几条、冷却几轮
    encN: 1, encCool: 6,    // 野外遭遇池
    wildN: 1, wildCool: 8,  // 野外名录：抽几只兽
    open: false, x: null, y: null,
    spriteUrl: DEF_SPRITE_URL  // 立绘清单 JSON 的地址（图床上那份，上传并回验 sha256）；留空就不拉，全走色块占位
  }, savedCfg);

  // 正文解析器：build-hook.mjs 把 status-parse.js 排在前面一起注入；只单独加载 p12hook.js 时可能没有它，
  // 这时钩子只做传闻，其余功能显示「解析器未装」，不报错、不影响玩。
  var PARSER = (typeof P12Status !== 'undefined' && P12Status && typeof P12Status.parse === 'function') ? P12Status
    : (window.P12Status && typeof window.P12Status.parse === 'function' ? window.P12Status : null);

  // 正文切法：去掉最后一个 </cot> 之前的思考段，再切掉 <ui_template_updates> 及其后面。
  // 模型会在变量块里再附一份转义的 <status>／<图鉴>，不切就会读到那份副本（账本全空）。
  var bodyText = function (t) {
    return PARSER && typeof PARSER.body === 'function' ? PARSER.body(t) : String(t == null ? '' : t);
  };
  // 只切 AI 回复。用户消息里可能整段引用格式说明（含 </cot> 示例），切了会把正文一起切掉。
  var msgBody = function (m) {
    if (!m || typeof m.content !== 'string') return '';
    return m.role === 'assistant' ? bodyText(m.content) : m.content;
  };

  var H = window.__p12hook = { ver: VER, alive: true, log: [], cfg: cfg };
  var origFetch = window.fetch;

  // ---------- 场景行 ----------
  var SCENE_RE = /\[场景\|([^|\]\n]*)\|([^|\]\n]*)\|([^|\]\n]*)\|([^|\]\n]*)\]/g;
  var parseScene = function (messages) {
    for (var i = messages.length - 1; i >= 0; i--) {
      var m = messages[i];
      if (m.role === 'system' || typeof m.content !== 'string') continue;
      var all = msgBody(m).match(SCENE_RE);
      if (all && all.length) {
        var p = all[all.length - 1].slice(1, -1).split('|');
        return { raw: all[all.length - 1], time: p[1], seg: p[2], chain: p[3].split('·'), type: p[4] };
      }
    }
    return null;
  };

  // ---------- 池子：传闻 / 事件 / 野外遭遇（同一条引擎：只认场景行、抽 N 条、带冷却） ----------
  // 关键取舍：只有「原生已经把这个池子注入进来」时钩子才动手（概率 25% 仍由原生掷），钩子只负责抽几条、别重复。
  var ITEM_RE = /^(- |\d+\. )/;
  var POOL_KIND = {
    rumor: { re: /传闻池·/, label: '传闻' },
    event: { re: /事件池·/, label: '事件' },
    enc: { re: /野外遭遇池·/, label: '野外遭遇' }
  };
  // 分会话身份＝角色 + 剧情分支（2026-11-10 与 gpt 对齐）。宿主一份聊天就存在「角色·分支」这个键下
  // （getStoryBranchScopeId：主分支＝uuid，分支＝uuid__branch__branchId），分支 id 才是真的身份。
  // 原来用「首个消息 id」，可开场消息和清空后的首条都是 createInitialChatHistory 造的、压根不带 id，恒为空。
  // 旧键（尾部空 id、形如 uuid:）不迁移、不冒充新分支：换了 scope 就是另一套账本。
  var branchId = function () {
    var b = st.currentStoryBranch || (st.storyRouteMap && st.storyRouteMap.activeBranchId);
    if (b && typeof b === 'object') b = b.id;
    return String(b || 'main');
  };
  // 一条聊天（卡 + 分支 id）就是一套账本；键前缀固定 p12hook:，种类前缀另加。
  var scope = function () {
    var c = st.currentCharacter || {};
    return (c.uuid || c.name || 'card') + ':' + branchId();
  };
  var chatKey = function () { return 'cool:' + scope(); };
  var turnNo = function () {
    return (st.chatHistory || []).filter(function (m) { return m.role === 'user'; }).length;
  };
  var rnd = Math.random; // 测试可替换，正式跑就是 Math.random
  var shuffle = function (a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  var kindCfg = function (kind) {
    if (kind === 'event') return { n: cfg.evN, cool: cfg.evCool, key: 'coolE:' + scope() };
    if (kind === 'enc') return { n: cfg.encN, cool: cfg.encCool, key: 'coolN:' + scope() };
    return { n: cfg.n, cool: cfg.cool, key: chatKey() };
  };

  // RP-Hub 发出去之前会把 {{user}} 换成玩家名，并在条目前加一行「[条目名]」。
  // 找原生条目时把 {{user}} 当通配，连同前面那行标签一起找，删的时候一起删。
  var reEsc = function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
  var reCache = {}; // 不往 RP-Hub 的世界书对象上挂字段，免得被存回卡里
  var entryRe = function (e) {
    var k = e.comment + '\u0000' + e.content;
    if (!reCache[k]) {
      var body = e.content.split(/\{\{user\}\}/i).map(reEsc).join('[^\\n]{0,40}?');
      reCache[k] = new RegExp('(?:\\[' + reEsc(e.comment) + '\\]\\n)?' + body);
    }
    return reCache[k];
  };
  var userName = function () { return (st.user && st.user.name) || ''; };
  // 条目键是写死的长正则，编一次留着；不往条目对象上挂东西。
  // D27 起详档键写成「/…/flags」形式（RP-Hub 自己就认，data-services.js:544-551），这里照同一套解析：
  // 拆出行尾 flags（保留 m）、去掉 g、补 i；不写成 /…/ 的裸正则照旧当源码用。
  var keyCache = {};
  var keyRe = function (k) {
    var src = String(k || ''), flags = 'i';
    if (src.charAt(0) === '/' && src.lastIndexOf('/') > 0) {
      var last = src.lastIndexOf('/'), f = src.slice(last + 1);
      if (/^[dgimsuvy]*$/.test(f)) { src = src.slice(1, last); flags = f; }
    }
    flags = flags.replace(/g/g, '');
    if (flags.indexOf('i') < 0) flags += 'i';
    if (/\\[pP]\{/.test(src) && flags.indexOf('u') < 0) flags += 'u';
    return new RegExp(src, flags);
  };
  var keyTest = function (k, raw) {
    try {
      var key = String(k);
      var re = keyCache[key] || (keyCache[key] = keyRe(key));
      return re.test(raw);
    } catch (e) { return false; }
  };

  var poolEntries = function (kind) {
    var re = POOL_KIND[kind].re;
    return (st.worldInfo || []).filter(function (e) {
      return e && e.enabled !== false && re.test(e.comment || '') && e.content;
    });
  };

  // 冷却抽签：只留 t < 本轮（重生成、删楼都撤，同传闻那套）；不够时从冷却里最早的补。
  var drawCool = function (cand, key, n, cool, turn) {
    var recent = load(key, []).filter(function (r) { return r && r.t < turn; });
    var cooled = {}, lastT = {};
    recent.forEach(function (r) {
      if (turn - r.t < cool) cooled[r.id] = true;
      lastT[r.id] = Math.max(lastT[r.id] || 0, r.t);
    });
    var fresh = shuffle(cand.filter(function (c) { return !cooled[c.id]; }));
    var pick = fresh.slice(0, n);
    if (pick.length < n) {
      var old = cand.filter(function (c) { return cooled[c.id]; });
      old.sort(function (a, b) { return (lastT[a.id] || 0) - (lastT[b.id] || 0); });
      pick = pick.concat(old.slice(0, n - pick.length));
    }
    save(key, recent.concat(pick.map(function (p) { return { id: p.id, t: turn }; })).slice(-400));
    return { pick: pick, cooled: Object.keys(cooled).length };
  };

  var drawPools = function (body, kind) {
    var K = POOL_KIND[kind], C = kindCfg(kind), msgs = body.messages;
    var out = { nativeCount: 0, nativeChars: 0, candCount: 0, cooledCount: 0, pick: [], block: '', injectedChars: 0 };
    var ents = poolEntries(kind);
    if (!ents.length) { out.skip = '世界书里没有' + K.label + '池条目'; return out; }
    var scene = parseScene(msgs);
    out.scene = scene ? scene.raw : '（没找到场景行）';
    if (!scene) { out.skip = '没有场景行，保留原生'; return out; }

    // 候选 = 场景行对得上的池子（条目自己的键，和原生同一套门控，D23/D4）；
    // 先按键筛，再比对内容，省得每轮把几百个池子的正文正则都跑一遍。
    var chain = scene.chain;
    var keyHit = function (e) {
      return (e.keys || []).some(function (k) { return keyTest(k, scene.raw); });
    };
    var native = ents.filter(function (e) {
      var region = e.comment.split(/传闻池|事件池|野外遭遇池/)[0];
      if (e.useRegex ? !keyHit(e) : chain.indexOf(region) < 0) return false;
      return msgs.some(function (m) { return typeof m.content === 'string' && entryRe(e).test(msgBody(m)); });
    });
    out.nativeCount = native.length;
    out.nativeChars = native.reduce(function (s, e) { return s + e.content.length; }, 0);
    if (!native.length) { out.skip = '本次请求里没有原生' + K.label + '条目（不是主对话请求，或原生没掷中），不动'; return out; }

    var cand = [], descOf = {};
    native.forEach(function (e) {
      var lines = e.content.split('\n');
      var head = lines[0] || '', desc = [];
      descOf[head] = desc;
      lines.forEach(function (l, i) {
        if (!l) return;
        if (ITEM_RE.test(l)) {
          if (l.replace(ITEM_RE, '').trim().length > 10) {
            cand.push({ id: kind + ':' + e.comment + '#' + i, entry: e.comment, head: head, text: l });
          }
        } else if (i > 0 && !/^【/.test(l.trim()) && !/^<.*>$/.test(l.trim())) {
          desc.push(l); // 条目自己的导语（「挑一件自然融入」那种）留着
        }
      });
    });
    out.candCount = cand.length;
    if (!cand.length) { out.skip = K.label + '池里没有可抽的行'; return out; }

    var d = drawCool(cand, C.key, C.n, C.cool, turnNo());
    out.cooledCount = d.cooled;
    if (!d.pick.length) { out.skip = '这一轮没抽到' + K.label; return out; }

    // 按来源条目分组，保留条目原来的标签头与导语，不加任何新说明文字
    var groups = [];
    d.pick.forEach(function (p) {
      var g = groups.filter(function (x) { return x.head === p.head; })[0];
      if (!g) { g = { head: p.head, desc: descOf[p.head] || [], lines: [] }; groups.push(g); }
      g.lines.push(p.text);
    });
    var block = groups.map(function (g) {
      return g.head + '\n' + (g.desc.length ? g.desc.join('\n') + '\n' : '') + g.lines.join('\n');
    }).join('\n\n');
    if (userName()) block = block.replace(/\{\{user\}\}/gi, userName());

    // 第一处原生池换成抽到的块，其余原生池删掉
    var placed = false;
    msgs.forEach(function (m) {
      if (typeof m.content !== 'string') return;
      native.forEach(function (e) {
        var hit = entryRe(e).exec(m.content);
        if (!hit) return;
        m.content = m.content.slice(0, hit.index) + (placed ? '' : block) + m.content.slice(hit.index + hit[0].length);
        placed = true;
      });
      m.content = m.content.replace(/\n{3,}/g, '\n\n');
    });
    out.pick = d.pick.map(function (p) { return { entry: p.entry, text: p.text }; });
    out.block = block;
    out.injectedChars = block.length;
    return out;
  };

  var doRumors = function (body, rec) {
    var r = drawPools(body, 'rumor');
    ['nativeCount', 'nativeChars', 'candCount', 'cooledCount', 'scene', 'pick', 'skip'].forEach(function (k) {
      if (r[k] !== undefined) rec[k] = r[k];
    });
    if (r.injectedChars) { rec.block = r.block; rec.injectedChars = r.injectedChars; }
  };
  var doEvents = function (body, rec) {
    rec.pools = { event: drawPools(body, 'event'), enc: drawPools(body, 'enc') };
  };

  // ---------- 野外名录：按省 / 季节 / 昼夜 / 地貌加权抽兽 ----------
  // 名录一条省一份（约 2400 字 / 37 行），原生 100% 触发；钩子只把这一场对得上的几只留下，常见多、罕见少。
  var SEASON_OF = function (m) { return m >= 3 && m <= 5 ? '春' : m >= 6 && m <= 8 ? '夏' : m >= 9 && m <= 11 ? '秋' : '冬'; };
  var RARE_W = { '常见': 6, '少见': 3, '罕见': 1 };
  var TERRAINS = [
    ['山地', /山|岭|峰|峡|崖|坡/], ['森林', /林|树|森/], ['草原', /草原|草甸|牧/],
    ['水域', /湖|河|江|海|湾|溪|水库|滩/], ['湿地', /湿地|沼泽|滩涂/]
  ];
  var parseWild = function (txt) {
    var out = { head: '', intro: [], secs: [] }, cur = null;
    String(txt || '').split(/\r?\n/).forEach(function (line, i) {
      var t = line.trim(); if (!t) return;
      if (i === 0 && /^<.*>$/.test(t)) { out.head = t; return; }
      if (/^<.*>$/.test(t) || /^【野外事件】/.test(t)) return;
      var sec = t.match(/^【(.+?)】$/);
      if (sec) { cur = { name: sec[1], beasts: [] }; out.secs.push(cur); return; }
      var m = t.match(/^[-*]\s*(.+?)（(.+?)）[:：]\s*(.*)$/);
      if (m && cur) {
        var b = { name: m[1].trim(), stage: m[2].trim(), sec: cur.name, raw: t, note: '' };
        m[3].split(/[｜|]/).forEach(function (p) {
          var kv = p.match(/^\s*(属性|季节|时段|稀有)\s*[:：]\s*(.*)$/);
          if (kv) { b[kv[1]] = kv[2].trim(); return; }
          b.note = b.note ? b.note + '｜' + p.trim() : p.trim();
        });
        b.seasons = (b['季节'] || '').split(/[、,，\/]/).map(function (x) { return x.trim(); }).filter(Boolean);
        b.slots = (b['时段'] || '').split(/[、,，\/]/).map(function (x) { return x.trim(); }).filter(Boolean);
        b.rare = b['稀有'] || '';
        cur.beasts.push(b);
      } else if (!cur) out.intro.push(t);
    });
    return out;
  };
  var weightedPick = function (items, n) {
    var pool = items.slice(), out = [];
    while (pool.length && out.length < n) {
      var total = 0, i;
      for (i = 0; i < pool.length; i++) total += pool[i].w || 1;
      var r = rnd() * total, acc = 0, idx = pool.length - 1;
      for (i = 0; i < pool.length; i++) { acc += pool[i].w || 1; if (r < acc) { idx = i; break; } }
      out.push(pool.splice(idx, 1)[0]);
    }
    return out;
  };
  var drawWild = function (body) {
    var out = { nativeCount: 0, candCount: 0, cooledCount: 0, pick: [], injectedChars: 0 };
    var ents = (st.worldInfo || []).filter(function (e) {
      return e && e.enabled !== false && /野生异兽名录/.test(e.comment || '') && e.content;
    });
    if (!ents.length) { out.skip = '世界书里没有野外名录'; return out; }
    var msgs = body.messages;
    var native = ents.filter(function (e) {
      return msgs.some(function (m) { return typeof m.content === 'string' && entryRe(e).test(msgBody(m)); });
    });
    out.nativeCount = native.length;
    if (!native.length) { out.skip = '本次请求里没有原生野外名录（不是野外场景）'; return out; }
    var scene = parseScene(msgs);
    if (!scene) { out.skip = '没有场景行'; return out; }
    out.scene = scene.raw;
    var month = +(String(scene.time || '').match(/-(\d{2})-/)[1] || 0);
    var season = SEASON_OF(month), slot = String(scene.seg || '');
    out.season = season; out.slot = slot;

    var all = [];
    native.forEach(function (e) {
      var w = parseWild(e.content);
      w.secs.forEach(function (sec) {
        sec.beasts.forEach(function (b) {
          all.push({
            entry: e.comment, head: w.head, intro: w.intro, sec: sec.name, b: b,
            id: 'wild:' + b.name + '@' + (e.comment || ''), name: b.name, raw: b.raw
          });
        });
      });
    });
    // 时段按昼夜分档：名录里每条只标两三个时段，精确匹配常只剩 1 只、同一场景反复抽到同一只。
    // 白天（清晨/上午/中午/下午/傍晚）互相认，夜晚/深夜算一档；夜行的兽不会出现在白天，白天的也不会在半夜出来。
    var slotBucket = function (v) {
      if (!v) return -1;
      if (/夜晚|深夜|凌晨/.test(v)) return 0;
      if (/清晨|上午|中午|下午|傍晚/.test(v)) return 1;
      return -1;
    };
    var wantBucket = slotBucket(slot);
    var fit = all.filter(function (x) {
      var s = x.b.seasons, sl = x.b.slots;
      var okS = !s.length || s.indexOf('全年') >= 0 || s.indexOf(season) >= 0;
      var okT = !sl.length || sl.indexOf('全天') >= 0 || wantBucket < 0 ||
        sl.some(function (v) { return slotBucket(v) === wantBucket; });
      return okS && okT;
    });
    if (!fit.length) { out.candCount = 0; out.skip = '这一场（' + season + '·' + (slot || '时段未写') + '）名录里没有对得上的兽'; return out; }

    // 地貌：地点链点了山地/森林/草原/水域/湿地，就只从那一类里抽（山上不能抽到河鱼）；
    // 地点链认不出来时才不限地貌。抽中概率只按稀有度（常见 6 / 少见 3 / 罕见 1）。
    var place = (scene.chain || []).join('·') || scene.raw; // 场景行里没有单独的 place 字段，地点链就是它
    var want = null;
    TERRAINS.forEach(function (t) { if (!want && t[1].test(place)) want = t[0]; });
    out.terrain = want;
    var pool = want ? fit.filter(function (x) { return x.sec === want; }) : fit;
    if (!pool.length) pool = fit;
    out.candCount = pool.length;
    pool.forEach(function (x) { x.w = RARE_W[x.b.rare] || 2; });

    var C = { n: cfg.wildN, cool: cfg.wildCool, key: 'coolW:' + scope() };
    var turn = turnNo();
    var recent = load(C.key, []).filter(function (r) { return r && r.t < turn; });
    var cooled = {}, lastT = {};
    recent.forEach(function (r) {
      if (turn - r.t < C.cool) cooled[r.id] = true;
      lastT[r.id] = Math.max(lastT[r.id] || 0, r.t);
    });
    var fresh = pool.filter(function (x) { return !cooled[x.id]; });
    var pick = weightedPick(fresh, C.n);
    if (pick.length < C.n) {
      var old = pool.filter(function (x) { return cooled[x.id]; });
      old.sort(function (a, b) { return (lastT[a.id] || 0) - (lastT[b.id] || 0); });
      pick = pick.concat(old.slice(0, C.n - pick.length));
    }
    out.cooledCount = Object.keys(cooled).length;
    if (!pick.length) { out.skip = '这一轮没抽到野外的兽'; return out; }
    save(C.key, recent.concat(pick.map(function (x) { return { id: x.id, t: turn }; })).slice(-400));

    var groups = [];
    pick.forEach(function (x) {
      var g = groups.filter(function (y) { return y.head === x.head; })[0];
      if (!g) { g = { head: x.head, intro: x.intro, secs: [] }; groups.push(g); }
      var s = g.secs.filter(function (y) { return y.name === x.sec; })[0];
      if (!s) { s = { name: x.sec, lines: [] }; g.secs.push(s); }
      s.lines.push(x.raw);
    });
    var block = groups.map(function (g) {
      return g.head + '\n' + (g.intro.length ? g.intro.join('\n') + '\n' : '') +
        g.secs.map(function (s) { return '【' + s.name + '】\n' + s.lines.join('\n'); }).join('\n');
    }).join('\n\n');
    if (userName()) block = block.replace(/\{\{user\}\}/gi, userName());

    var placed = false;
    msgs.forEach(function (m) {
      if (typeof m.content !== 'string') return;
      native.forEach(function (e) {
        var hit = entryRe(e).exec(m.content);
        if (!hit) return;
        m.content = m.content.slice(0, hit.index) + (placed ? '' : block) + m.content.slice(hit.index + hit[0].length);
        placed = true;
      });
      m.content = m.content.replace(/\n{3,}/g, '\n\n');
    });
    out.pick = pick.map(function (x) { return { name: x.name, stage: x.b.stage, sec: x.sec, rare: x.b.rare }; });
    out.block = block;
    out.injectedChars = block.length;
    return out;
  };

  H.pools = { draw: drawPools, kindCfg: kindCfg };
  H.wild = { parse: parseWild, draw: drawWild, seasonOf: SEASON_OF, weights: RARE_W };
  H.setRand = function (f) { rnd = f; };

  // ---------- UI 桥：接「凑热闹的gpt」在 2026-11-10 定的 window.P12UiState（version 2） ----------
  // 形状：{version:2, seq, scope, ready, fields}；fields 是当前完整快照（null／[] 表清空，缺键＝沿用上一份）。
  // seq 单调递增、同一个 seq 只处理一次；scope 严格相等（切聊天、换卡、删楼都对不上）就整份丢掉，不把别局的状态恢复进来。
  // 字段形状另有白名单（uiShape），对面送来什么类型都先过一遍；进度、命运不在表里。
  // ready=false 表示对方还没读到有效字段：这时退回钩子自己解析 <status> 的账本，不让空默认值盖住真账本。
  // 只认显示用的白名单；进度、命运不在这张表里，钩子也不读（05 16.3 / D24 定）。
  var UIS = { ver: 2, key: 'uistate', seq: -1, scope: null, ready: false, at: null, src: null, fields: null };
  var UI_KEYS = ['name', 'license', 'badges', 'rank', 'funds', 'fundsNum', 'injury', 'team', 'others', 'present',
    'favor', 'bag', 'schedule', 'messages', 'record', 'difficulty', 'scene', 'dexCount', 'moveDex'];
  var uiDirty = false;
  // scope 严格相等（2026-11-10 与 gpt 对齐，去掉双包含容错）：只认逐字相等的两种写法，都是「当前角色 | 本分支 id」。
  // 前者是 UI 发布器的写法，后者是钩子自己账本键的写法；不做包含匹配，免得切分支／切卡时把别局的快照认下来。
  var uiWant = function () {
    var c = st.currentCharacter || {};
    var who = String(c.uuid || c.name || 'card'), br = branchId();
    return [who + '|' + br, who + ':' + br];
  };
  var uiScopeOk = function (s) {
    if (s == null) return false;
    var t = String(s).trim(), w = uiWant();
    return t === w[0] || t === w[1];
  };
  // 字段形状白名单：不照抄对面送来的类型，逐个键取值——取不出形状的当「没给」（沿用上一份），
  // 显式 null 的数组当「清空」。数组封顶 60 条、字符串封顶 500 字，免得一份坏快照把手环撑坏。
  var uiTxt = function (x) { return x == null ? null : String(x).slice(0, 500); };
  var uiNum = function (x) { return x != null && isFinite(+x) ? +x : null; };
  var uiLst = function (a) {
    if (!Array.isArray(a)) return null;
    return a.slice(0, 60).filter(function (x) { return typeof x === 'string' && x.trim(); })
      .map(function (x) { return x.trim().slice(0, 80); });
  };
  var UI_ITEM = {
    team: { nick: 't', species: 't', stage: 't', where: 't', injury: 't', bondTier: 't', training: 't', bottleneck: 't',
      hp: 'n', fatigue: 'n', bond: 'n', growth: 'n', level: 'n', exp: 'n', expNeed: 'n', types: 'l', moves: 'l', storage: 'l' },
    present: { name: 't', note: 't' }, others: { name: 't', note: 't' },
    favor: { who: 't', text: 't' }, bag: { name: 't', qty: 'n' },
    schedule: { raw: 't', date: 't', time: 't', place: 't', what: 't' }, messages: { from: 't', text: 't' }
  };
  var UI_STR = ['license', 'badges', 'rank', 'funds', 'injury', 'difficulty'];
  var UI_NUM = ['fundsNum', 'dexCount', 'moveDex'];
  var UI_REC = ['徽章', '最高阶段', '招式图鉴', '结识', '足迹', '图鉴', '战绩'];
  var uiShape = function (f) {
    var out = {};
    if (Object.prototype.hasOwnProperty.call(f, 'name')) out.name = uiTxt(f.name);
    UI_STR.forEach(function (k) { if (Object.prototype.hasOwnProperty.call(f, k)) out[k] = uiTxt(f[k]); });
    UI_NUM.forEach(function (k) { if (Object.prototype.hasOwnProperty.call(f, k)) out[k] = uiNum(f[k]); });
    Object.keys(UI_ITEM).forEach(function (k) {
      if (!Object.prototype.hasOwnProperty.call(f, k)) return;
      var v = f[k];
      if (v === null) { out[k] = []; return; }   // 显式 null＝清空
      if (!Array.isArray(v)) return;             // 形状不对＝没给，沿用上一份
      var spec = UI_ITEM[k];
      out[k] = v.slice(0, 60).map(function (item) {
        if (typeof item === 'string') item = { name: item };   // 在场／随行允许直接写名字
        if (!item || typeof item !== 'object') return null;
        var o = {};
        Object.keys(spec).forEach(function (n) {
          var t = spec[n], x = item[n];
          o[n] = t === 'n' ? uiNum(x) : (t === 'l' ? uiLst(x) : uiTxt(x));
        });
        if (k === 'team') {
          if (o.hp != null && (o.hp < 0 || o.hp > 100)) o.hp = null;
          if (!item.bottleneck || o.bottleneck === 'false' || o.bottleneck === '0') o.bottleneck = null;
          if (!o.nick && !o.species) return null;
        }
        if ((k === 'present' || k === 'others') && !o.name) return null;
        if (k === 'bag' && !o.name) return null;
        if (k === 'favor' && !o.who && !o.text) return null;
        if (k === 'schedule' && !o.raw && !o.date && !o.what) return null;
        if (k === 'messages' && !o.text) return null;
        return o;
      }).filter(Boolean);
    });
    if (Object.prototype.hasOwnProperty.call(f, 'record')) {
      var r = f.record;
      if (r === null) out.record = null;
      else if (r && typeof r === 'object') {
        out.record = {};
        UI_REC.forEach(function (k) { if (r[k] != null) out.record[k] = uiTxt(r[k]); });
      }
    }
    if (Object.prototype.hasOwnProperty.call(f, 'scene')) {
      var sc = f.scene;
      if (sc === null) out.scene = null;
      else if (sc && typeof sc === 'object') {
        out.scene = { time: uiTxt(sc.time), slot: uiTxt(sc.slot), place: uiTxt(sc.place), type: uiTxt(sc.type),
          y: uiNum(sc.y), m: uiNum(sc.m), d: uiNum(sc.d), h: uiNum(sc.h) };
        // 年／月／日不成形就不给日历用，退回读场景行；时辰超出 0–23 的丢掉。
        if (!(out.scene.y > 0 && out.scene.m >= 1 && out.scene.m <= 12 && out.scene.d >= 1 && out.scene.d <= 31)) {
          out.scene.y = out.scene.m = out.scene.d = null;
        }
        if (out.scene.h != null && (out.scene.h < 0 || out.scene.h > 23)) out.scene.h = null;
      }
    }
    return out;
  };
  var uiDrop = function (why) {
    UIS.fields = null; UIS.ready = false; UIS.src = why || 'drop'; uiDirty = true;
    try { save(UIS.key, { scope: UIS.scope, seq: UIS.seq, ready: false }); } catch (e) {}
  };
  var uiAdopt = function (o, how) {
    if (!o || typeof o !== 'object') return false;
    if (o.version != null && +o.version !== UIS.ver) { UIS.src = 'badver'; return false; }
    if (!uiScopeOk(o.scope)) { UIS.scope = o.scope == null ? null : String(o.scope); uiDrop('scope'); return false; }
    var seq = +o.seq, sc = String(o.scope).trim();
    if (isFinite(seq) && seq <= UIS.seq && sc === String(UIS.scope)) return false; // 同一个 seq 只处理一次
    if (o.ready === false) {
      UIS.scope = sc; if (isFinite(seq)) UIS.seq = seq;
      uiDrop('notready'); return true;
    }
    var f = o.fields;
    if (!f || typeof f !== 'object') { UIS.src = 'nofields'; return false; }
    var prev = UIS.fields, out = uiShape(f);
    UI_KEYS.forEach(function (k) { if (!(k in out) && prev && prev[k] !== undefined) out[k] = prev[k]; });
    UIS.fields = out; UIS.ready = true; UIS.scope = sc;
    UIS.seq = isFinite(seq) ? seq : UIS.seq + 1; UIS.at = new Date().toLocaleTimeString();
    UIS.src = how || 'ui'; uiDirty = true;
    try { save(UIS.key, { scope: UIS.scope, seq: UIS.seq, at: UIS.at, fields: out }); } catch (e) {}
    return true;
  };
  var uiPull = function () {
    var seen = [];
    [window, window.parent, window.top].forEach(function (w) {
      var o = null;
      try { o = w && w.P12UiState; } catch (e) { o = null; }
      if (o && seen.indexOf(o) < 0) { seen.push(o); uiAdopt(o, 'window'); }
    });
  };
  var uiEvent = function (ev) {
    var d = ev && ev.detail;
    if (d && typeof d === 'object' && (d.version != null || d.fields)) { uiAdopt(d, 'event'); return; }
    var m = ev && ev.data;
    if (!m || typeof m !== 'object') return;
    if (m.p12UiState) { uiAdopt(m.p12UiState, 'message'); return; }
    if (m.type === 'p12-ui-state' || (+m.version === 2)) uiAdopt(m.fields ? m : (m.detail || null), 'message');
  };
  try { window.addEventListener('p12-ui-state', uiEvent); window.addEventListener('message', uiEvent); } catch (e) {}
  // 刷新后先认缓存，但缓存必须同 scope；不同局的一律清成 notready。
  (function () {
    var c = load(UIS.key, null);
    if (!c) return;
    if (c.ready !== false && c.fields && uiScopeOk(c.scope)) {
      UIS.fields = c.fields; UIS.ready = true; UIS.scope = c.scope;
      UIS.seq = isFinite(+c.seq) ? +c.seq : -1; UIS.at = c.at || null; UIS.src = 'cache';
    } else { try { save(UIS.key, { scope: c.scope, seq: c.seq, ready: false }); } catch (e) {} }
  })();
  // 手环取数：UI 发布了就用它的整份快照，没有（或 ready=false、scope 不对）就退回钩子自己的账本。
  var viewState = function () {
    if (UIS.ready && UIS.fields) {
      var o = {}, f = UIS.fields;
      UI_KEYS.forEach(function (k) { o[k] = f[k]; });
      o.t = turnNo(); o.at = UIS.at || ''; o.fromUI = true;
      return o;
    }
    return H.state;
  };
  var viewSrc = function () { return UIS.ready ? 'ui' : 'ledger'; };
  H.uiBridge = {
    adopt: uiAdopt, pull: uiPull, drop: uiDrop, view: viewState, scopeOk: uiScopeOk,
    get: function () { return { ready: UIS.ready, src: UIS.src, seq: UIS.seq, scope: UIS.scope, at: UIS.at, fields: UIS.fields }; }
  };

  // ---------- 正文账本：每条 AI 回复落地后读（按轮次记账，回滚同传闻冷却） ----------
  // 只读自己 localStorage 里的东西，不往 RP-Hub 的对象里写。
  // ---------- 立绘：按物种名取图 ----------
  // 图不打包进卡，挂在图床上：清单是一份 JSON，形如 {version:1, at:"…", items:{"物种名":"https://…webp"}}。
  // 取不到清单、名字不在清单里、图加载失败，一律退回母版的色块占位（.p12-art 留空就是占位），不挡任何玩法。
  var SPR = { key: 'sprites', url: '', map: null, at: 0, loading: false, err: '', hit: 0, miss: 0 };
  var SPR_TTL = 3 * 24 * 3600 * 1000; // 清单三天内直接用缓存，过期再拉一次
  var sprUrl = function () { return String(cfg.spriteUrl || SPR.url || ''); };
  var sprName = function (s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); };
  // 只认 http(s)：清单是外部来的，别让 javascript: 之类的串进 background-image。
  var sprOkStr = function (u) { return typeof u === 'string' && /^https?:\/\/[^\s"'<>]+$/i.test(u.trim()); };
  // 人物／通用头像在清单里是对象（1a）：{type:'person',full,head,alias[]}、{type:'generic',set{}}。
  var sprIsPerson = function (v) { return !!v && typeof v === 'object' && v.type === 'person'; };
  var sprIsGeneric = function (v) { return !!v && typeof v === 'object' && v.type === 'generic'; };
  // sprOk 只判形状：http(s) 字符串，或 type 为 person/generic 的对象。异兽条目一条不动。
  var sprOk = function (u) { return sprOkStr(u) || sprIsPerson(u) || sprIsGeneric(u); };
  // 入清单前洗一遍：坏 URL 丢掉，人物对象至少留一条能用的图，别名统一成去空格的数组。
  var sprNorm = function (v) {
    if (typeof v === 'string') return sprOkStr(v) ? v.trim() : null;
    if (!v || typeof v !== 'object') return null;
    if (v.type === 'person') {
      var p = { type: 'person' }, any = false;
      if (sprOkStr(v.full)) { p.full = v.full.trim(); any = true; }
      if (sprOkStr(v.head)) { p.head = v.head.trim(); any = true; }
      if (sprOkStr(v.creature)) { p.creature = v.creature.trim(); any = true; }
      else if (v.creature === true && p.full) { p.creature = p.full; }
      var al = Array.isArray(v.alias) ? v.alias : (typeof v.alias === 'string' ? [v.alias] : []);
      p.alias = al.map(sprName).filter(Boolean);
      if (v.face && typeof v.face === 'object') p.face = { x: +v.face.x || 0, y: +v.face.y || 0, w: +v.face.w || 0 };
      return any ? p : null;
    }
    if (v.type === 'generic') {
      var s = v.set && typeof v.set === 'object' ? v.set : {}, t = {}, got = false;
      Object.keys(s).forEach(function (k) {
        var key = sprName(k);
        if (!key || !sprOkStr(s[k])) return;
        t[key] = s[k].trim(); got = true;
      });
      // full：同一套 key 的全身竖图（832×1216），只在浮层用；没有就退回 set
      var f = v.full && typeof v.full === 'object' ? v.full : {}, f2 = {};
      Object.keys(f).forEach(function (k) {
        var key = sprName(k);
        if (!key || !sprOkStr(f[k])) return;
        f2[key] = f[k].trim();
      });
      return got ? { type: 'generic', set: t, full: f2 } : null;
    }
    return null;
  };
  var sprSet = function (o) {
    if (!o || typeof o !== 'object' || !o.items || typeof o.items !== 'object') return false;
    var m = {}, n = 0;
    Object.keys(o.items).forEach(function (k) {
      var name = sprName(k), v = sprNorm(o.items[k]);
      if (!name || !v) return;
      m[name] = v; n++;
    });
    SPR.map = m; SPR.at = Date.now(); SPR.cachedUrl = sprUrl(); SPR.err = '';
    try { save(SPR.key, { url: SPR.cachedUrl, at: SPR.at, items: m }); } catch (e) {}
    return n > 0;
  };
  // 属性位／对战／图鉴取异兽：普通字符串直接返回；普通人类返回 null（防 [object Object]）；人形异兽（如 AI 娘带 creature 字段）返回其异兽立绘，并支持别名查找。
  var sprGet = function (s) {
    var k = sprName(s);
    if (!k || !SPR.map) return null;
    if (Object.prototype.hasOwnProperty.call(SPR.map, k)) {
      var v = SPR.map[k];
      if (typeof v === 'string') return v;
      if (sprIsPerson(v) && typeof v.creature === 'string') return v.creature;
      return null;
    }
    var hit = null;
    Object.keys(SPR.map).some(function (key) {
      var it = SPR.map[key];
      if (sprIsPerson(it) && typeof it.creature === 'string' && it.alias && it.alias.indexOf(k) >= 0) { hit = it.creature; return true; }
      return false;
    });
    return hit;
  };
  // 人物立绘：先按名字查，查不到再扫 person 条目的 alias；kind 只认 head|full，缺那张就 null。
  var personGet = function (s, kind) {
    var k = sprName(s), kd = kind === 'full' ? 'full' : 'head';
    if (!k || !SPR.map) return null;
    var v = Object.prototype.hasOwnProperty.call(SPR.map, k) ? SPR.map[k] : null;
    if (!sprIsPerson(v)) {
      v = null;
      Object.keys(SPR.map).some(function (key) {
        var it = SPR.map[key];
        if (sprIsPerson(it) && it.alias && it.alias.indexOf(k) >= 0) { v = it; return true; }
        return false;
      });
    }
    if (!sprIsPerson(v) || typeof v[kd] !== 'string') return null;
    return v[kd];
  };
  // 通用头像（路人）：_npc.set[key]，key 缺了退回 unknown，unknown 也没有就 null（占位）。
  var genericGet = function (key, kind) {
    var g = SPR.map && SPR.map._npc;
    if (!sprIsGeneric(g)) return null;
    var k = sprName(key) || 'unknown';
    if (kind === 'full') {
      var fm = g.full || {};
      if (typeof fm[k] === 'string') return fm[k];
      if (typeof fm.unknown === 'string') return fm.unknown;
    }
    var set = g.set || {};
    if (typeof set[k] === 'string') return set[k];
    return typeof set.unknown === 'string' ? set.unknown : null;
  };
  // 通用头像底圈色相：名字 trim+NFC → FNV-1a 32 位 → %8（8 个固定色相，只给底圈上色）。
  var sprHues = [0, 30, 55, 140, 185, 215, 265, 320];
  var sprHash = function (s) {
    var str = sprName(s);
    if (str.normalize) { try { str = str.normalize('NFC'); } catch (e) {} }
    var h = 0x811c9dc5, i;
    for (i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return h >>> 0;
  };
  var sprHue = function (s) { return sprHues[sprHash(s) % sprHues.length]; };
  // 装钩子时先用缓存，再按需拉一次；拉不动就用缓存（断网也能玩，只是新上传的图看不到）。
  var sprBoot = function () {
    var c = load(SPR.key, null), curUrl = sprUrl(), urlChanged = false;
    if (c && c.items && typeof c.items === 'object') {
      SPR.map = {}; SPR.at = +c.at || 0; SPR.cachedUrl = c.url || '';
      if (curUrl && c.url && c.url !== curUrl) urlChanged = true;
      Object.keys(c.items).forEach(function (k) { var v = sprNorm(c.items[k]); if (v) SPR.map[k] = v; });
    }
    sprRefresh(urlChanged);
  };
  var sprRefresh = function (force) {
    if (SPR.loading) return;
    if (!force && SPR.at && (Date.now() - SPR.at) < SPR_TTL) return;
    var u = sprUrl();
    if (!u || !window || typeof window.fetch !== 'function') return;
    SPR.loading = true;
    var p;
    try { p = window.fetch(u, { method: 'GET' }); } catch (e) { SPR.loading = false; SPR.err = String(e && e.message || e); return; }
    Promise.resolve(p).then(function (r) {
      if (!r || !r.ok) throw new Error('HTTP ' + (r && r.status));
      return r.json();
    }).then(function (j) {
      if (sprSet(j)) uiDirty = true; // 清单到了就重画一次，别等下一次开抽屉
    }).catch(function (e) {
      SPR.err = String(e && e.message || e);
    }).then(function () { SPR.loading = false; });
  };
  // 队伍卡／图鉴行上的立绘：拿到图就用图，拿不到返回空串，交给母版的占位。
  var sprArt = function (s) {
    var u = sprGet(s);
    if (!u) { SPR.miss++; return ''; }
    SPR.hit++;
    return ' style="background-image:url(\'' + esc(u) + '\')"';
  };
  H.sprites = {
    boot: sprBoot, refresh: sprRefresh, set: sprSet, get: sprGet, art: sprArt,
    personGet: personGet, genericGet: genericGet, hue: sprHue, hash: sprHash,
    isPerson: sprIsPerson, isGeneric: sprIsGeneric, ok: sprOk,
    url: sprUrl, count: function () { return SPR.map ? Object.keys(SPR.map).length : 0; },
    state: function () { return { url: sprUrl(), at: SPR.at, count: H.sprites.count(), loading: SPR.loading, err: SPR.err, hit: SPR.hit, miss: SPR.miss }; }
  };

  // ---------- 人物头像选图（2c/2e）：判定交给 hook/person-avatar.js，这里只接线 ----------
  // build-hook.mjs 会把 person-avatar.js / dialog-speaker.js 排在 p12hook.js 前面一起注入；
  // 两个模块都没装时，这里退化成「专属立绘 → unknown 剪影」，颜色仍按名字哈希，页面不破图。
  var PA = function () { return (window.P12PersonAvatar || null); };
  var DS = function () { return (window.P12DialogSpeaker || null); };
  var headOf = function (n) { var s = sprName(n); return s ? s.slice(0, 1) : ''; };
  var avatarOf = function (name, note, kind) {
    var kd = kind === 'full' ? 'full' : 'head';
    var hue = sprHue(name);
    var m = PA();
    if (m && typeof m.selectAvatar === 'function') {
      try {
        var r = m.selectAvatar(sprName(name), note == null ? '' : String(note),
          { kind: kd, personGet: personGet, genericGet: genericGet, hue: sprHue });
        if (r && typeof r === 'object') {
          if (r.hue == null) r.hue = hue;
          if (r.url == null && r.key) r.url = genericGet(r.key, kd);
          // 路人浮层要 2:3 竖图：有 full 档就用 full，没有才用 512 头像顶着
          if (kd === 'full' && r.key && r.type !== 'person') {
            var f = genericGet(r.key, 'full');
            if (f) r.url = f;
          }
          return r;
        }
      } catch (e) { H.paErr = String(e && e.message || e); }
    }
    var u = personGet(name, kd);
    if (u) return { name: sprName(name), kind: 'person', key: '', url: u, hue: hue };
    u = genericGet('unknown', kd);
    return { name: sprName(name), kind: 'generic', key: 'unknown', url: u, hue: hue };
  };
  var avStyle = function (a) {
    var hue = (a && a.hue != null) ? a.hue : 215, u = a && a.url ? String(a.url) : '';
    return '--hue:' + hue + (u ? ';background-image:url(' + "'" + esc(u) + "'" + ')' : '');
  };
  var avHtml = function (a, cls, name) {
    var u = a && a.url ? String(a.url) : '';
    return '<span class="' + cls + (u ? '' : ' is-empty') + '" style="' + avStyle(a) + '" aria-hidden="true">' +
      (u ? '' : esc(headOf(name))) + '</span>';
  };

  var LED_MAX = 40;
  var scopeK = function (kind) { return kind + ':' + scope(); };
  var hash32 = function (s) { var h = 5381, i = s.length; while (i) { h = ((h << 5) + h + s.charCodeAt(--i)) | 0; } return (h >>> 0).toString(36); };
  var turnOf = function (h, idx) { var n = 0; for (var i = 0; i <= idx; i++) { if (h[i] && h[i].role === 'user') n++; } return n; };
  // 只留比本轮早的记录：重新生成同一轮、删楼后被删掉的那几轮，都撤掉（和传闻冷却一个规矩）。
  var pruneT = function (list, turn) { return (list || []).filter(function (r) { return r && r.t < turn; }); };

  // <图鉴>物种名｜属性/属性｜阶段｜一句外观｜发现地：国家·省·城市·地点</图鉴>（05 2.11）
  var cardOf = function (body) {
    var p = String(body || '').replace(/\s+/g, ' ').split(/[｜|]/).map(function (x) { return x.trim(); }).filter(Boolean);
    if (!p.length || !p[0]) return null;
    var o = { name: p[0] };
    p.slice(1).forEach(function (x) {
      var loc = x.match(/^发现地[:：]?\s*(.*)$/);
      if (loc) { o.place = loc[1].trim(); return; }
      if (!o.types && (/属性$/.test(x) || (window.P12CreatureArt && window.P12CreatureArt.typeIds[x]) || /^[^\s\/]{1,4}(\/[^\s\/]{1,4})+$/.test(x))) {
        o.types = x.replace(/属性/g, '').split('/').map(function (y) { return y.trim(); }).filter(Boolean); return;
      }
      if (!o.stage && /(期|体)$/.test(x) && x.length <= 6) { o.stage = x; return; }
      o.look = (o.look ? o.look + ' ' : '') + x;
    });
    // 形状校验：名字要像物种名，且除名字外至少还有一栏；正文里顺口提到 <图鉴> 不会被当卡。
    if (!/^[\u4e00-\u9fa5A-Za-z0-9·\-]{1,12}$/.test(o.name)) return null;
    if (!o.types && !o.stage && !o.place && !o.look) return null;
    return o;
  };
  var parseCards = function (text) {
    var bodies = [], m;
    // 先收有结尾标签的，再从剩下的里收「只写了开头、没写 </图鉴>」的
    var rest = String(text || '').replace(/<图鉴>([\s\S]*?)<\/图鉴>/g, function (_, body) { bodies.push(body); return ' '; });
    var ro = /<图鉴>([^\n]*)/g;
    while ((m = ro.exec(rest))) bodies.push(m[1]);
    return bodies.map(cardOf).filter(Boolean);
  };

  var snapshot = function (f, turn, at, extra) {
    return {
      t: turn, at: at, scene: f.scene || null,
      name: f.name || null, license: f.license || null, badges: f.badges || null, rank: f.rank || null,
      funds: f.funds || null, fundsNum: f.fundsNum == null ? null : f.fundsNum,
      injury: f.injury || null,          // 驯兽师本人伤势（异兽的伤势在各兽行上）
      team: (f.team || []).map(function (b) {
        return {
          nick: b.nick, species: b.species, stage: b.stage, types: b.types || [], hp: b.hp,
          injury: b.injury || null, fatigue: b.fatigue, bond: b.bond, bondTier: b.bondTier || null,
          growth: b.growth, training: b.training || null, moves: b.moves || [], storage: b.storage || [],
          // 等级/经验/瓶颈必须一起进账本，否则手环队伍页和引擎都读不到（2026-11-14 接线时补）
          level: b.level == null ? null : b.level, exp: b.exp == null ? null : b.exp,
          expNeed: b.expNeed == null ? null : b.expNeed, bottleneck: !!b.bottleneck
        };
      }),
      // 在场/随行保留 {name, note}：在场卡要显示备注；老代码读 x.name || x，两种形状都认
      present: (f.present || []).map(function (x) { return x && typeof x === 'object' ? { name: x.name || '', note: x.note || null } : { name: String(x == null ? '' : x), note: null }; }).filter(function (x) { return x.name; }),
      others: (f.others || []).map(function (x) { return x && typeof x === 'object' ? { name: x.name || '', note: x.note || null } : { name: String(x == null ? '' : x), note: null }; }).filter(function (x) { return x.name; }),
      favor: (f.favor || []).map(function (x) { return (x.who || '') + ' ' + (x.text || ''); }),
      bag: f.bag || [], schedule: f.schedule || [], messages: f.messages || [],
      record: f.record || null, dexCount: f.dexCount == null ? null : f.dexCount,
      difficulty: f.difficulty || null, progress: f.progress || null, fate: f.fate || null,
      missing: extra.missing || [], warnings: extra.warnings || []
    };
  };

  var ingSig = '';
  var ingScope = '';
  var ingest = function (force) {
    if (!PARSER || !H.alive) return null;
    var h = st.chatHistory || [];
    if (!h.length) return null;
    // 换了分支／角色：手上的 H.state 属于上一局，先从新 scope 自己的账本里捡回最后一条，绝不跨局沿用。
    var sc = scope();
    if (sc !== ingScope) {
      ingScope = sc;
      var mine = load(scopeK('led'), []) || [];
      H.state = mine.length ? mine[mine.length - 1] : null;
      H.dex = load(scopeK('dex'), []) || [];
      ingSig = '';
    }
    var idx = -1;
    for (var i = h.length - 1; i >= 0; i--) {
      if (h[i] && h[i].role === 'assistant' && typeof h[i].content === 'string' && h[i].content) { idx = i; break; }
    }
    if (idx < 0) return null;
    var raw = h[idx].content, txt = bodyText(raw);
    var sig = scope() + '|' + h.length + '|' + (h[idx].id || '') + '|' + raw.length + '|' + hash32(raw);
    if (!force && sig === ingSig) return H.state;
    ingSig = sig;

    var turn = turnNo(), thisT = turnOf(h, idx), at = new Date().toLocaleTimeString();
    var r = PARSER.parse(txt);
    // 还没开始玩（开头 PV / 开场消息）：读不出 <status> 就不记账，免得手环停在一堆空记录上。
    if (turn === 0 && !r.ok) {
      save(scopeK('led'), []);
      save(scopeK('dex'), []);
      H.state = null; H.dex = [];
      return null;
    }
    var list = pruneT(load(scopeK('led'), []), turn).filter(function (x) { return x.t !== thisT; });
    var rec;
    if (r.ok) {
      rec = snapshot(r.fields, thisT, at, { missing: r.missing, warnings: r.warnings });
    } else {
      // 读不出来：保留上一次读到的状态，标「未同步」，绝不编值（05 2.7 原则）。
      var prev = H.state || load(scopeK('led'), []).slice(-1)[0];
      rec = prev ? JSON.parse(JSON.stringify(prev)) : { t: thisT };
      rec.t = thisT; rec.at = at; rec.stale = true;
      rec.missing = r.missing || [];
      rec.warnings = (r.warnings || []).concat(['这一条 <status> 没读出来，手环停在上一次读到的值']);
    }
    list.push(rec);
    list = list.slice(-LED_MAX);
    save(scopeK('led'), list);
    H.state = list[list.length - 1];

    // 图鉴卡：删楼撤掉被删那几轮；同一轮重生成时整轮重记。
    var cards = parseCards(txt);
    var dex = (load(scopeK('dex'), []) || []).filter(function (c) { return c && c.name && c.t < turn; })
      .filter(function (c) { return c.t !== thisT; });
    cards.forEach(function (c) { c.t = thisT; c.at = at; dex.push(c); });
    var seenName = {};
    dex = dex.filter(function (c) { if (seenName[c.name]) return false; seenName[c.name] = 1; return true; }); // 同名只认第一次定的
    dex.sort(function (a, b) { return a.t - b.t; });
    save(scopeK('dex'), dex.slice(-600));
    H.dex = dex;

    // 账本和 <status> 对不上时以 <status> 为准（05 16.3 第 4 条）：只报差异，显示照状态栏。
    if (r.ok && rec.dexCount != null) {
      rec.dexCards = dex.length;
      if (dex.length !== rec.dexCount) {
        rec.dexMismatch = '状态栏【履历】图鉴 ' + rec.dexCount + ' 张，钩子账本 ' + dex.length + ' 张；按 05 16.3 第 4 条以状态栏为准';
      }
    }
    // 真骰：这一轮的骰子结果记进本轮账本（跟着轮次走，删楼/重生成一起撤），再拿去和正文核对
    if (H.pendingRoll && H.pendingRoll.t === thisT) {
      rec.roll = H.pendingRoll;
      rec.roll.check = checkRoll(txt, rec.roll);
      H.pendingRoll = null;
    } else if (H.pendingRoll && H.pendingRoll.t < thisT) {
      H.pendingRoll = null; // 换轮了，上一轮的骰子作废
    }
    H.logStatus = H.logStatus || [];
    H.logStatus.unshift({ t: thisT, at: at, ok: !!r.ok, cards: cards.length, stale: !!rec.stale });
    H.logStatus = H.logStatus.slice(0, 20);
    return rec;
  };

  // ---------- 图鉴卡注入：正文点名、世界书没有这个条目时补卡 ----------
  var worldHas = function (name) {
    if (!name) return true;
    var ents = st.worldInfo || [];
    for (var i = 0; i < ents.length; i++) {
      var e = ents[i]; if (!e || e.enabled === false) continue;
      if (String(e.comment || '').indexOf(name) >= 0) return true;
      var keys = e.keys || [];
      for (var k = 0; k < keys.length; k++) { if (String(keys[k]).indexOf(name) >= 0) return true; }
      var c = typeof e.content === 'string' ? e.content : '';
      // 只认「图鉴条」的痕迹；野外池那种 `名（阶段）：…` 一行不算条目，照 05 2.11 仍要补卡
      if (c.indexOf('<图鉴>' + name) >= 0 || c.indexOf(name + '｜') >= 0) return true;
    }
    return false;
  };
  var INJ_CARDS = 3, INJ_CHARS = 600;
  var doDex = function (body, rec) {
    var msgs = body.messages || [];
    var dex = load(scopeK('dex'), []);
    rec.dexCount = dex.length;
    if (!dex.length) { rec.dexSkip = '账本里还没有图鉴卡'; return; }
    // 只看最近几条非系统消息；正文里的场景行/状态栏/图鉴块本身不算「点名」
    var text = '';
    for (var i = Math.max(0, msgs.length - 6); i < msgs.length; i++) {
      var m = msgs[i];
      if (!m || m.role === 'system' || typeof m.content !== 'string') continue;
      text += '\n' + msgBody(m).replace(/<status>[\s\S]*?<\/status>/gi, ' ').replace(/<图鉴>[\s\S]*?(<\/图鉴>|$)/gi, ' ');
    }
    var want = dex.filter(function (c) { return text.indexOf(c.name) >= 0 && !worldHas(c.name); });
    rec.dexSeen = want.length;
    if (!want.length) { rec.dexSkip = '正文没有点名缺条目的物种'; return; }
    var lines = [], chars = 0;
    for (var j = 0; j < want.length && lines.length < INJ_CARDS; j++) {
      var c = want[j];
      var s = c.name + '｜' + (c.types && c.types.length ? c.types.join('/') + '属性' : '属性未定') + '｜' +
        (c.stage || '阶段未定') + (c.look ? '｜' + c.look : '') + (c.place ? '｜发现地：' + c.place : '');
      if (chars + s.length > INJ_CHARS) break;
      lines.push(s); chars += s.length + 1;
    }
    if (!lines.length) { rec.dexSkip = '这一轮补的卡加起来超过 600 字，先不补'; return null; }
    // 不直接写进请求：交给 applyInj 统一按注入预算决定留几条（05 第十三节第 4 条）
    return { kind: 'dex', head: '[本局图鉴·本局已定，照此写，不要再改]', items: lines, min: 1 };
  };

  // ---------- 手环日历：世界年历·中国 + 【日程】 ----------
  var KINDS = {
    match: { c: '#e0674f', n: '赛事' }, eco: { c: '#5eead4', n: '生态' },
    fest: { c: '#c4b5fd', n: '节日' }, appt: { c: '#fbbf24', n: '约定' }
  };
  var yearEntry = function () {
    var ents = st.worldInfo || [];
    for (var i = 0; i < ents.length; i++) {
      var e = ents[i];
      if (!e || e.enabled === false) continue;
      if (String(e.order) === '1004050' || /世界年历/.test(e.comment || '')) return e;
    }
    return null;
  };
  var parseYear = function (txt) {
    var out = [];
    String(txt || '').split(/\r?\n/).forEach(function (line) {
      var p = line.trim().split(/[｜|]/).map(function (x) { return x.trim(); });
      if (p.length < 5) return;
      var kind = /^赛事$/.test(p[1]) ? 'match' : /^生态$/.test(p[1]) ? 'eco' : /^节日$/.test(p[1]) ? 'fest' : null;
      if (!kind) return;
      var e = { kind: kind, title: p[2], place: p[3], how: p[4], win: /窗口/.test(p[4]) };
      if (/^全年/.test(p[0])) { e.all = true; e.sm = 1; e.sd = 1; e.em = 12; e.ed = 31; }
      else {
        var m = p[0].match(/^(\d{1,2})-(\d{1,2})(?:~(\d{1,2})-(\d{1,2}))?$/);
        if (!m) return;
        e.sm = +m[1]; e.sd = +m[2]; e.em = m[3] ? +m[3] : +m[1]; e.ed = m[4] ? +m[4] : +m[2];
      }
      out.push(e);
    });
    return out;
  };
  var scheduleEvents = function () {
    var s = H.state;
    if (!s || !s.schedule) return [];
    return s.schedule.filter(function (x) { return x && x.date; }).map(function (x) {
      var p = String(x.date).split('-').map(Number); // 03-16 或 2026-03-16
      var m = p.length >= 3 ? p[1] : p[0], d = p.length >= 3 ? p[2] : p[1];
      return {
        kind: 'appt', title: x.what || x.raw || '', place: x.place || '', how: '日程',
        sm: m, sd: d, em: m, ed: d, time: x.time || null
      };
    });
  };
  var calEvents = function () { return parseYear(yearEntry() && yearEntry().content).concat(scheduleEvents()); };
  var inRange = function (e, m, d) {
    if (e.all) return true;
    var a = e.sm * 100 + e.sd, b = e.em * 100 + e.ed, x = m * 100 + d;
    return a <= b ? (x >= a && x <= b) : (x >= a || x <= b);
  };
  // 日历的「今天」只认最近一条场景行；没有日期就返回 null，不拿现实日期顶上。
  var sceneDate = function () {
    // UI 桥给了拆好的年/月/日就先用它（scene.y/m/d），没有照旧读聊天里的场景行。
    var us = UIS.ready && UIS.fields && UIS.fields.scene;
    if (us && +us.y > 0 && +us.m > 0 && +us.d > 0) return { y: +us.y, m: +us.m, d: +us.d };
    var h = st.chatHistory || [];
    for (var i = h.length - 1; i >= 0; i--) {
      var m = h[i];
      if (!m || m.role === 'system' || typeof m.content !== 'string' || !m.content) continue;
      var hit = msgBody(m).match(/\[场景[|｜]\s*(\d{4})-(\d{1,2})-(\d{1,2})/);
      if (hit) return { y: +hit[1], m: +hit[2], d: +hit[3] };
    }
    return null;
  };
  var daysIn = function (y, m) { return new Date(Date.UTC(y, m, 0)).getUTCDate(); };
  var dnum = function (y, m, d) { return Math.round(Date.UTC(y, m - 1, d) / 864e5); };

  H.ingest = ingest;
  H.cal = { year: yearEntry, events: calEvents, parse: parseYear, inRange: inRange, card: cardOf, parseCards: parseCards, sceneDate: sceneDate };

  // ---------- 年历「窗口」掷日子（D14 ③，05 8.1） ----------
  // 定法写「窗口」的行，具体哪天由钩子在同一年里掷一次，之后固定不变（同一年不会天天换日子）；
  // AI 一旦把这一天写进【日程】，就以 AI 的为准（05 8.1：AI 定下后写进【日程】或快讯）。
  var dayNum = function (y, m, d) { return Math.round(Date.UTC(y, m - 1, d) / 864e5); };
  var dayOf = function (n) { var t = new Date(n * 864e5); return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate() }; };
  var winRange = function (e, y) {
    var a = dayNum(y, e.sm, e.sd), b = dayNum(y, e.em, e.ed);
    if (b < a) b = dayNum(y + 1, e.em, e.ed);   // 跨年窗口，如 12-20~02-28
    return [a, b];
  };
  // 跨年窗口取离今天最近的那一次（一月的场景要看上一年十二月开始的那一段）
  var winRangeAt = function (e, now) {
    var today = dayNum(now.y, now.m, now.d);
    var best = null, bestD = Infinity;
    [now.y - 1, now.y].forEach(function (y) {
      var r = winRange(e, y);
      var dist = (r[0] <= today && today <= r[1]) ? 0 : Math.min(Math.abs(r[0] - today), Math.abs(r[1] - today));
      if (dist < bestD) { bestD = dist; best = r; }
    });
    return best;
  };
  // 种子取「标题＋窗口开始那年」：删楼、重生成、重开浏览器都是同一天，不会来回跳。
  var winRoll = function (e, now) {
    if (!e || e.all || !e.win) return null;
    var r = winRangeAt(e, now), span = r[1] - r[0] + 1, seedY = dayOf(r[0]).y;
    var n = span <= 1 ? r[0] : r[0] + (parseInt(hash32(e.title + '|' + seedY), 36) % span);
    var day = dayOf(n);
    day.days = n - dayNum(now.y, now.m, now.d);
    return day;
  };
  var near = function (days) { return days > 180 ? days - 365 : (days < -180 ? days + 365 : days); };
  // AI 已经写进【日程】的那一天（先按事由、找不到再按地点对）
  // 事由两边都写得不一样（「看钱塘江大潮」对「钱塘江大潮（农历八月十八前后）」），所以比二字重叠，不比整串。
  var share2 = function (a, b) {
    var A = String(a || '').replace(/[（）()，。、·｜\s]/g, ''), B = String(b || '').replace(/[（）()，。、·｜\s]/g, '');
    if (!A || !B) return false;
    var hit = 0, seen = {};
    for (var i = 0; i < A.length - 1; i++) {
      var g = A.slice(i, i + 2);
      if (seen[g]) continue; seen[g] = 1;
      if (B.indexOf(g) >= 0) hit++;
    }
    return hit >= 2;
  };
  var schedHit = function (e) {
    var list = (H.state && H.state.schedule) || [];
    for (var i = 0; i < list.length; i++) {
      var x = list[i];
      if (!x || !x.date) continue;
      var p = String(x.date).split('-').map(Number);
      var m = p.length >= 3 ? p[1] : p[0], d = p.length >= 3 ? p[2] : p[1];
      if (!inRange(e, m, d)) continue;
      var w = String(x.what || ''), tail = String(e.place || '').split('·').pop();
      if (share2(w, e.title)) return { m: m, d: d };
      if (tail && String(x.place || '').indexOf(tail) >= 0 && w.length >= 2) return { m: m, d: d };
    }
    return null;
  };
  var windowDays = function (opt) {
    opt = opt || {};
    var now = sceneDate(), out = [];
    if (!now) return out; // 没有场景日期就不掷窗口日，别按现实日期算
    calEvents().forEach(function (e) {
      if (!e.win || e.all) return;
      var ai = schedHit(e), roll = winRoll(e, now);
      if (!roll && !ai) return;
      var days = ai ? near(dayNum(now.y, ai.m, ai.d) - dayNum(now.y, now.m, now.d)) : roll.days;
      var day = ai || roll;
      if (opt.within != null && (days > opt.within || days < (opt.from == null ? -opt.within : opt.from))) return;
      out.push({ title: e.title, kind: e.kind, place: e.place, m: day.m, d: day.d, days: days, by: ai ? 'AI' : '钩子' });
    });
    out.sort(function (a, b) { return a.days - b.days; });
    return out;
  };
  // 注入给 AI：只报两周内（或刚过几天的），已经由 AI 定下的不重复报。
  var doCal = function (rec) {
    if (!sceneDate()) { rec.calWin = []; rec.calSkip = '还没读到场景行，窗口日先不掷'; return null; }
    var list = windowDays({ within: 14 });
    rec.calWin = list;
    if (!list.length) { rec.calSkip = '两周内没有窗口日'; return null; }
    // 只报还没到的（今天算还没到）：已经过掉的窗口日不再提，免得 AI 去补写一个已经过去的约定
    var items = list.filter(function (x) { return x.by === '钩子' && x.days >= 0; }).slice(0, 3).map(function (x) {
      return x.title + '｜' + KINDS[x.kind].n + '｜' + x.place + '｜定在 ' + pad2(x.m) + '-' + pad2(x.d) +
        (x.days > 0 ? '（还有 ' + x.days + ' 天）' : x.days === 0 ? '（就是今天）' : '（已过 ' + (-x.days) + ' 天）');
    });
    if (!items.length) { rec.calSkip = '两周内没有还没到的窗口日（已经写进【日程】的不重复报）'; return null; }
    return { kind: 'cal', head: '[年历·窗口日]（具体哪天由钩子在窗口里掷，照这个写进【日程】或快讯，不要改日子）', items: items, min: 1 };
  };

  // ---------- 日期差 / 离开多久（D14 ④，05 8.2 重逢推演） ----------
  // 每读完一条回复记一笔：第几轮、场景行写的是哪一天、在哪、跟谁同场。日期只认场景行；
  // 场景行没写日期就整条不记——不拿现实日期顶上，免得把真实时间混进世界时间。
  var dateOf = function (t) {
    var m = String(t || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
    return m ? (m[1] + '-' + m[2] + '-' + m[3]) : null;
  };
  // 日期、地点、同场的人，正文账本（led）里本来就每轮记着——这里直接拿来用，
  // 不另开一份账本，回滚规矩（只留 t < 本轮）也就自动跟着走。
  var whereList = function (uptoTurn) {
    return (load(scopeK('led'), []) || []).filter(function (r) {
      return r && r.scene && dateOf(r.scene.time) && (uptoTurn == null || r.t < uptoTurn);
    }).map(function (r) {
      return { t: r.t, date: dateOf(r.scene.time), place: r.scene.place || null, present: (r.present || []).slice(0, 12) };
    });
  };
  var daysBetween = function (a, b) {
    var pa = String(a).split('-').map(Number), pb = String(b).split('-').map(Number);
    return dayNum(pb[0], pb[1], pb[2]) - dayNum(pa[0], pa[1], pa[2]);
  };
  var timeDiffs = function () {
    var s = H.state;
    if (!s || !s.scene) return { skip: '还没有场景行' };
    var date = dateOf(s.scene.time);
    if (!date) return { skip: '场景行没写日期，不算天数差' };
    var list = whereList(s.t);
    var people = [], seen = {};
    (s.present || []).forEach(function (x) {
      var name = x && (x.name || x);
      if (!name || seen[name]) return;
      for (var i = list.length - 1; i >= 0; i--) {
        if ((list[i].present || []).indexOf(name) < 0) continue;
        var d = daysBetween(list[i].date, date);
        if (d >= 1) { seen[name] = 1; people.push({ name: name, date: list[i].date, days: d }); }
        break;
      }
    });
    people.sort(function (a, b) { return b.days - a.days; });
    // 回到一个地方：找上一条「同一个城市、但不是脚下这个地点」的记录
    var dp = String(s.scene.place || ''), city = dp.split('·').slice(0, 3).join('·'), back = null;
    if (dp) for (var j = list.length - 1; j >= 0; j--) {
      var p = String(list[j].place || '');
      if (!p || p === dp) continue;
      if (!(p.indexOf(city) === 0 || dp.indexOf(p) === 0)) continue;
      back = { place: city, date: list[j].date, days: daysBetween(list[j].date, date) };
      break;
    }
    return { date: date, people: people, back: back, place: dp || null };
  };
  var doTime = function (rec) {
    var d = timeDiffs();
    rec.time = d;
    if (d.skip) { rec.timeSkip = d.skip; return null; }
    var items = [];
    d.people.slice(0, 4).forEach(function (x) {
      items.push(x.name + '：上次同场 ' + x.date.slice(5) + '，隔 ' + x.days + ' 天');
    });
    if (d.back && d.back.days >= 1) items.push('回到 ' + d.back.place + '：上次在这 ' + d.back.date.slice(5) + '，隔 ' + d.back.days + ' 天');
    if (!items.length) { rec.timeSkip = '没有可算的日期差（第一次见面 / 第一次来这里）'; return null; }
    return { kind: 'time', head: '[重逢·时间差]（天数照这个算，不要自己编；隔得久就写出变化）', items: items, min: 2 };
  };

  // ---------- 注入统计（仅统计，不设上限；沈辰 2026-11-15 定：本卡不设字数与条数上限，一条都不裁） ----------
  // 这个请求里到底注入了哪些条目：RP-Hub 的注入格式是「[条目名]\n正文」（data-services.js:755），
  // 先把请求里所有「整行就是 [名]」的标签扫一遍装进表，再拿条目名去查——
  // 不跑两千多条正文正则，也不对每个条目各扫一遍正文。
  var presentList = function (body) {
    var text = '', msgs = body.messages || [], i;
    for (i = 0; i < msgs.length; i++) if (msgs[i] && typeof msgs[i].content === 'string') text += msgBody(msgs[i]) + '\n';
    var labels = {}, mm, re = /^\[([^\]\n]{1,80})\]$/gm;
    while ((mm = re.exec(text))) labels[mm[1]] = 1;
    var out = [], ents = st.worldInfo || [];
    for (i = 0; i < ents.length; i++) {
      var e = ents[i];
      if (!e || e.enabled === false) continue;
      if (!labels[e.comment || 'Entry']) continue;
      out.push(e);
    }
    return out;
  };
  var measureBody = function (body) {
    var list = presentList(body);
    var chars = 0, nonConst = 0;
    list.forEach(function (e) { chars += String(e.content || '').length; if (!e.constant) nonConst++; });
    return { entries: list.length, nonConst: nonConst, chars: chars };
  };
  var textOf = function (b) { return b.head + '\n' + b.items.join('\n'); };
  var applyInj = function (body, rec, blocks) {
    var nat = measureBody(body);
    var list = blocks.filter(function (b) { return !!b; });
    var kept = list.filter(function (b) { return b.items.length; });
    var txt = kept.map(textOf).join('\n\n');
    var sys = null;
    for (var i = 0; i < body.messages.length; i++) {
      if (body.messages[i] && body.messages[i].role === 'system') { sys = body.messages[i]; break; }
    }
    if (txt) {
      if (sys) sys.content = String(sys.content || '') + '\n\n' + txt;
      else body.messages.unshift({ role: 'system', content: txt });
    }
    var dexB = list.filter(function (b) { return b.kind === 'dex'; })[0];
    if (dexB && dexB.items.length) {
      rec.dexInjected = dexB.items.length; rec.dexChars = textOf(dexB).length; rec.dexBlock = textOf(dexB);
    }
    var calB = list.filter(function (b) { return b.kind === 'cal'; })[0];
    if (calB && calB.items.length) { rec.calInjected = calB.items.length; rec.calBlock = textOf(calB); }
    var timeB = list.filter(function (b) { return b.kind === 'time'; })[0];
    if (timeB && timeB.items.length) { rec.timeInjected = timeB.items.length; rec.timeBlock = textOf(timeB); }
    var pullB = list.filter(function (b) { return b.kind === 'pull'; })[0];
    if (pullB && pullB.items.length) { rec.pullInjected = pullB.items.length; rec.pullBlock = textOf(pullB); }
    var meetB = list.filter(function (b) { return b.kind === 'meet'; })[0];
    if (meetB && meetB.items.length) {
      rec.meetInjected = meetB.items.length; rec.meetChars = textOf(meetB).length; rec.meetBlock = textOf(meetB);
    }
    var fateB = list.filter(function (b) { return b.kind === 'fate'; })[0];
    if (fateB && fateB.items.length) { rec.fateInjected = fateB.items.length; rec.fateBlock = textOf(fateB); }
    else if (rec.fate && !(fateB && fateB.items.length) && !rec.fateBlock) rec.fateSkip = '这一轮用的是原生掷进来的，钩子没另加';
    var boxB = list.filter(function (b) { return b.kind === 'box'; })[0];
    if (boxB && boxB.items.length) { rec.boxInjected = boxB.items.length; rec.boxBlock = textOf(boxB); }
    var total = nat.chars + txt.length;
    var budget = {
      cap: null, native: nat, added: txt.length, total: total,
      entries: nat.entries + kept.length, nonConst: nat.nonConst + kept.length,
      cuts: [], over: false, note: '仅统计，不设上限'
    };
    rec.budget = budget;
    H.budgetLast = budget;
    return budget;
  };
  H.cal.windowDays = windowDays;
  H.cal.winRoll = winRoll;
  H.time = { diffs: timeDiffs, where: function () { return whereList(null); }, dayNum: dayNum };
  H.budget = { cap: null, measure: measureBody };


  // ---------- 递归补拉：已注入条目点到的人物简档、物种（05 16.3 表 + 2026-11-17 补无递归缺口） ----------
  // 只补一层：拿「这个请求里已注入的非纯常驻、非简档条目（如城市/地点/事件池/在场详档）」去找 简·人物 / 物种 的名字，
  // 点到而详档和简档都不在请求里的，把它的简档（或未拆档条目）补进去；补进来的条目和简档不再往下拉（防连环拉）。
  var PULL_N = 12, PULL_CHARS = 20000;
  // 真卡里的条目名就是裸名（decision 59 / D23）：人物在 4000000 段、物种在 5000000 段。
  var LINK_BANDS = [{ kind: '人物', lo: 4000000, hi: 5000000 }, { kind: '物种', lo: 5000000, hi: 6000000 }];
  var linkIdx = null, linkSig = '';
  var linkIndex = function () {
    var ents = st.worldInfo || [];
    var sig = ents.length + '|' + ((ents[0] && ents[0].comment) || '') + '|' + ((ents[ents.length - 1] && ents[ents.length - 1].comment) || '');
    if (linkIdx && sig === linkSig) return linkIdx;
    var idx = [];
    ents.forEach(function (e) {
      if (!e || e.enabled === false) return;
      var band = LINK_BANDS.filter(function (b) { return e.order >= b.lo && e.order < b.hi; })[0];
      if (!band) return;
      var rawComment = String(e.comment || '').trim();
      // D27 拆档人物：简档（简·X，4110000/4650000 段）作为一层补拉目标，详档（锚【在场】）不按名字拉。
      if (rawComment.indexOf('简·') === 0 && band.kind === '人物') {
        var bName = rawComment.slice(2).replace(/（[^）]*）|\([^)]*\)/g, '').trim();
        if (bName.length >= 2 && bName.length <= 12) idx.push({ kind: '人物简档', name: bName, entry: e, detailComment: rawComment.slice(2).trim() });
        return;
      }
      var name = rawComment.replace(/（[^）]*）|\([^)]*\)/g, '').trim();
      if (name.length < 2 || name.length > 12) return;
      if (e.useRegex) return;
      if (name.indexOf('简·') === 0) return;
      idx.push({ kind: band.kind, name: name, entry: e, detailComment: null });
    });
    linkIdx = idx; linkSig = sig;
    return idx;
  };
  var doPull = function (body, rec, meetPickedComments) {
    var have = {}, allText = '', locText = '', anyPresent = false;
    if (meetPickedComments) Object.keys(meetPickedComments).forEach(function (k) { have[k] = 1; });
    presentList(body).forEach(function (e) {
      anyPresent = true;
      have[e.comment] = 1;
      if (e.constant) return;
      if (String(e.comment || '').indexOf('简·') === 0) return;
      var c = String(e.content || '') + '\n';
      allText += c;
      var od = Number(e.order) || 0;
      if (od >= 3000000 && od < 4000000) locText += c;
    });
    if (!anyPresent) { rec.pullSkip = '这一轮没有注入任何条目'; return null; }
    if (!allText) { rec.pullSkip = '已注入的条目点到的人／物种都有条目在'; return null; }
    var idx = linkIndex(), picked = [], chars = 0, seen = {};
    for (var i = 0; i < idx.length && picked.length < PULL_N; i++) {
      var x = idx[i];
      if (have[x.entry.comment] || (x.detailComment && have[x.detailComment]) || seen[x.entry.comment]) continue;
      var srcText = x.kind === '人物简档' ? locText : allText;
      if (!srcText || srcText.indexOf(x.name) < 0) continue;
      var t = '[' + x.entry.comment + ']\n' + x.entry.content;
      if (chars + t.length > PULL_CHARS) continue;
      seen[x.entry.comment] = 1; picked.push(t); chars += t.length;
    }
    rec.pullSeen = picked.length;
    if (!picked.length) { rec.pullSkip = '已注入的条目点到的人／物种都有条目在'; return null; }
    return { kind: 'pull', head: '[点名补拉]（上面已注入的条目点到下面这些人／物种，补上它们的条目；只补一层，不再往下拉）', items: picked, min: 1 };
  };

  // ---------- 首次登场补详档（D27，规格《杭州样板·拆档与生活》第一节） ----------
  // 拆档后详档的键锚在【在场】那一格上：人第一次出场那一轮【在场】里还没有他，原生不会注入详档。
  // 这里补这一轮：用户这句话点了人名（或场景行点了地名）、请求里又没有它的详档、原生也没注入，
  // 就按「[条目名]\n正文」补进去（与 data-services.js:755 的注入格式一致），走注入预算统一砍。
  // 只在「简·X」和「键是 /…/ 正则」这一对同时存在时才算拆档条目；没拆档的卡上这个块什么都不做。
  var MEET_N = 3, MEET_CHARS = 7000;
  var isPersonDetail = function (keys) {
    for (var i = 0; i < keys.length; i++) if (String(keys[i] || '').indexOf('【在场】') >= 0) return true;
    return false;
  };
  var isPlaceDetail = function (keys) {
    for (var i = 0; i < keys.length; i++) if (/\\?\[场景/.test(String(keys[i] || ''))) return true;
    return false;
  };
  // v0.1.100 起简档的键也改成正则（互斥守卫里带【在场】/场景行），裸名放在最后一段 (?:A|B)。
  // 这里只从「最后一段 (?:…)」里拆名字；拆不出来就退回详档名（评论就是全名）。
  var briefNames = function (brief) {
    var out = [];
    if (!brief) return out;
    (brief.keys || []).forEach(function (k) {
      var s = String(k || '');
      if (s.charAt(0) !== '/') { if (s) out.push(s); return; }
      var body = s.replace(/\/[a-z]*$/i, '');
      if (body.charAt(body.length - 1) !== ')') return;
      var depth = 0, start = -1;
      for (var i = body.length - 1; i >= 0; i--) {
        var ch = body.charAt(i);
        if (ch === ')' && body.charAt(i - 1) !== '\\') depth++;
        else if (ch === '(' && body.charAt(i - 1) !== '\\') {
          depth--;
          if (depth === 0) { start = i; break; }
        }
      }
      if (start < 0 || body.slice(start, start + 3) !== '(?:') return;
      var inner = body.slice(start + 3, -1);
      // 先剔除零宽断言 (?=...) (?!...) (?<=...) (?<!...)
      var clean = inner.replace(/\(\?(?:<=|<!|=|!)[^()]*\)/g, '');
      clean.split('|').forEach(function (x) {
        x = String(x || '').replace(/^\^+|\$+$/g, '').replace(/\\(.)/g, '$1').trim();
        if (x && !/^[,，、.|^$\s]+$/.test(x)) out.push(x);
      });
    });
    return out;
  };
  var meetIdx = null, meetSig = '';
  var meetIndex = function () {
    var ents = st.worldInfo || [];
    var sig = ents.length + '|' + ((ents[0] && ents[0].comment) || '') + '|' + ((ents[ents.length - 1] && ents[ents.length - 1].comment) || '');
    if (meetIdx && sig === meetSig) return meetIdx;
    var briefs = {};
    ents.forEach(function (e) {
      if (!e || e.enabled === false) return;
      var c = String(e.comment || '');
      if (c.indexOf('简·') === 0) briefs[c.slice(2)] = e;
    });
    var out = [];
    ents.forEach(function (e) {
      if (!e || e.enabled === false || !e.useRegex || !e.content) return;
      // 先按 comment 把简档排掉：v0.1.100 的简档键是互斥正则，守卫里同样有【在场】/场景行，
      // 不先排会被 isPersonDetail / isPlaceDetail 当成详档。
      var cm = String(e.comment || '');
      if (cm.indexOf('简·') === 0) return;
      // 「生活·姓名·段名」的键也带【在场】，但它归 D28 按赛季段/完结事件触发，不归首次登场补档。
      if (cm.indexOf('生活·') === 0) return;
      var keys = e.keys || [];
      var kind = isPersonDetail(keys) ? 'person' : (isPlaceDetail(keys) ? 'place' : '');
      if (!kind) return;
      // 只认拆档的两段：人物详档 4000000 段、地点详档 3400000 段（简档是 +100000/+80000）。
      // 池子（3500000 段）的键也写场景行，不按号段挡会把池子当地点详档补进来。
      var od = Number(e.order) || 0;
      if (kind === 'person' && !(od >= 4000000 && od < 5000000)) return;
      if (kind === 'place' && !(od >= 3400000 && od < 3500000)) return;
      var name = String(e.comment || '').trim();
      if (!name) return;
      out.push({ kind: kind, name: name, entry: e, brief: briefs[name] || null });
    });
    meetIdx = out; meetSig = sig;
    return out;
  };
  var textHas = function (text, names) {
    for (var i = 0; i < names.length; i++) if (names[i] && text.indexOf(names[i]) >= 0) return true;
    return false;
  };
  var PLACE_GO_RE = /(?:去|到|来到|走进|踏入|前往|出发去|抵达|赶往|逛|进入|(?:^|[^以向过常])(?:往|朝))[^，。！？\n]{0,6}$/;
  var GOSSIP_CUE_RE = /(?:听说|聊起|提起|想起|问起|打听|说起|记得|传说|传闻|新闻里?|网上|热搜|帖子|报道|讨论|闲聊|八卦|提到)/;
  var DIRECT_MEET_RE = /(?:去找|去见|去拜访|去看看|去看|来找|来见|找她|找他|找它|见她|见他|约了|约好|约在|见面|碰面|拜访|请教|递给|拉住|走向|走到|迎面|遇到|碰见|撞见|敲门|点点头|点头|看着|望向|转身|开口|叫住|在不在|在吗|在哪|都来了|来了)/;
  var sentenceAt = function (text, pos, len) {
    var start = 0, end = text.length;
    for (var s = pos - 1; s >= 0; s--) {
      if (/[。！？!?\n]/.test(text.charAt(s))) { start = s + 1; break; }
    }
    for (var e = pos + len; e < text.length; e++) {
      if (/[。！？!?\n]/.test(text.charAt(e))) { end = e; break; }
    }
    return text.slice(start, end);
  };
  var allowFirstMeet = function (kind, userText, scene, names) {
    var txt = String(userText || '');
    if (kind === 'place') {
      if (scene && textHas(scene.raw || '', names)) return true;
      for (var pi = 0; pi < names.length; pi++) {
        var pn = names[pi], pos = pn ? txt.indexOf(pn) : -1;
        if (pos >= 0 && PLACE_GO_RE.test(txt.slice(Math.max(0, pos - 12), pos))) return true;
      }
      return false;
    }
    for (var i = 0; i < names.length; i++) {
      var nm = names[i];
      if (!nm) continue;
      var from = 0, idx;
      while ((idx = txt.indexOf(nm, from)) >= 0) {
        var near = txt.slice(Math.max(0, idx - 24), idx + nm.length + 16);
        if (DIRECT_MEET_RE.test(near)) return true;
        var sent = sentenceAt(txt, idx, nm.length);
        if (!GOSSIP_CUE_RE.test(sent)) return true;
        from = idx + nm.length;
      }
    }
    return false;
  };
  var doMeet = function (body, rec) {
    var msgs = body.messages || [], i, userText = '', scene = parseScene(msgs);
    for (i = msgs.length - 1; i >= 0; i--) {
      var m = msgs[i];
      if (m && m.role === 'user' && typeof m.content === 'string') { userText = m.content; break; }
    }
    if (!userText && !scene) { rec.meetSkip = '没有用户这句话，也没有场景行'; return null; }
    var idx = meetIndex();
    if (!idx.length) { rec.meetSkip = '世界书里还没有拆档的详档（键里没有【在场】／场景行）'; return null; }
    var have = {};
    presentList(body).forEach(function (e) { have[e.comment] = 1; });
    var picked = [], why = [], chars = 0;
    for (i = 0; i < idx.length && picked.length < MEET_N; i++) {
      var x = idx[i];
      if (have[x.entry.comment]) continue;                      // 原生已经注入了（人就在【在场】里）
      var names = [x.name].concat(briefNames(x.brief));
      var hit = allowFirstMeet(x.kind, userText, scene, names);
      if (!hit) continue;
      var t = '[' + x.entry.comment + ']\n' + x.entry.content;
      if (chars + t.length > MEET_CHARS) { rec.meetSkip = '这一轮要补的详档超过 ' + MEET_CHARS + ' 字，先补前面的'; continue; }
      chars += t.length; picked.push(t);
      why.push(x.name + (x.kind === 'person' ? '（点名）' : '（到了这里）'));
    }
    rec.meetSeen = picked.length;
    if (!picked.length) { rec.meetSkip = rec.meetSkip || '这一轮没有首次登场的人／地方'; return null; }
    rec.meetWhy = why;
    return {
      kind: 'meet',
      head: '[首次登场]（这一轮点到了、或人已经到了这里，而状态栏【在场】还没写到：先按完整条目写；下一轮【在场】写到他，原生详档会自己进来，不再重复补）',
      items: picked, min: 1
    };
  };

  // ---------- 真骰：命运骰（11 二）与盲盒稀有度（18 三），D14 ③ ----------
  // 概率一个字不改，照抄 11 / 18：命运骰 7 条各自独立掷（10/10/10/10/5/8/8），
  // 几条同时掷中全部结算，一条都没中就是「平稳」；盲盒五档权重 2/8/15/25/50。
  // 原生条目如果这一轮已经被 RP-Hub 掷进来，就用原生的（AI 看到的就是那一份），钩子只记账；
  // 原生没掷中时才由钩子掷，分布和原生一模一样——不改游戏节奏，只是把结果记下来、能在正文里核对。
  // 名字照世界书里的条目名写（1100000-opening.json：命运·暴击（我方）…），方便和原生那几张对上
  var FATE = [
    { n: '暴击（我方）', core: '暴击', p: 10 }, { n: '暴击（对方）', core: '暴击', p: 10 },
    { n: '失手（我方）', core: '失手', p: 10 }, { n: '失手（对方）', core: '失手', p: 10 },
    { n: '违令', core: '违令', p: 5 }, { n: '场地突变', core: '场地突变', p: 8 },
    { n: '对手变招', core: '对手变招', p: 8 }
  ];
  var BOX = [{ n: '传说', w: 2 }, { n: '珍稀', w: 8 }, { n: '稀有', w: 15 }, { n: '少见', w: 25 }, { n: '常见', w: 50 }];
  var BOX_RE = /开盲盒|拆盲盒|打开盲盒|拆开盲盒|开异兽蛋|拆蛋盒/;
  var rollFate = function () {
    return FATE.filter(function (f) { return rnd() * 100 < f.p; }).map(function (f) { return f.n; });
  };
  var rollBox = function () {
    var r = rnd() * 100, acc = 0;
    for (var i = 0; i < BOX.length; i++) { acc += BOX[i].w; if (r < acc) return BOX[i].n; }
    return '常见';
  };
  // 场景门控：原生条目的键是 `<对战>` / 盲盒那几个词，scanDepth 2 → 看最后两条非系统消息
  var lastTurns = function (msgs, n) {
    var out = [];
    for (var i = msgs.length - 1; i >= 0 && out.length < n; i--) {
      var m = msgs[i];
      if (m && m.role !== 'system' && typeof m.content === 'string') out.unshift(msgBody(m));
    }
    return out;
  };
  // 原生已经掷进来的那几张（条目名去掉「命运·」/「盲盒稀有度·」）
  var nativeTitles = function (msgs, prefix) {
    var ents = st.worldInfo || [], out = [];
    ents.forEach(function (e) {
      if (!e || e.enabled === false) return;
      var c = String(e.comment || '');
      if (c.indexOf(prefix) !== 0) return;
      if (!msgs.some(function (m) { return typeof m.content === 'string' && entryRe(e).test(msgBody(m)); })) return;
      out.push(c.slice(prefix.length));
    });
    return out;
  };
  var doDice = function (body, rec) {
    var msgs = body.messages || [], tail = lastTurns(msgs, 2).join('\n');
    var out = [];
    // 命运骰：只有对战回合才掷（原生键就是 <对战>）
    if (/<对战>/.test(tail)) {
      var natF = nativeTitles(msgs, '命运·');
      var picks = natF.length ? natF : rollFate();
      var src = natF.length ? '原生' : '钩子';
      rec.fate = { kind: 'fate', source: src, picks: picks, t: turnNo() };
      H.pendingRoll = rec.fate;
      if (!natF.length) {
        out.push({
          kind: 'fate', min: 1,
          head: '[命运骰·本回合]（由钩子掷，概率照 11 第二节，照这个写进对战块「命运」一栏，不要自己改）',
          items: ['命运：' + (picks.length ? picks.join('、') : '平稳')]
        });
      }
    }
    // 盲盒稀有度：只有开盲盒/拆异兽蛋那一轮才掷（原生键就是那几个词）
    if (BOX_RE.test(tail)) {
      var natB = nativeTitles(msgs, '盲盒稀有度·');
      var tier = natB.length ? natB[0] : rollBox();
      rec.box = { kind: 'box', source: natB.length ? '原生' : '钩子', tier: tier, t: turnNo() };
      H.pendingRoll = rec.box;
      if (!natB.length) {
        out.push({
          kind: 'box', min: 1,
          head: '[盲盒稀有度·本轮]（由钩子掷，权重照 18 第三节，照这个写进 <盲盒> 块，不要自己决定）',
          items: ['本次开出的稀有度：' + tier]
        });
      }
    }
    return out;
  };
  // 正文里对不对得上：对战块「命运」一栏、<盲盒> 的稀有度
  var blockOf = function (txt, tag) {
    var m = String(txt || '').match(new RegExp('<' + tag + '>([\\s\\S]*?)</' + tag + '>'));
    return m ? m[1] : null;
  };
  var checkRoll = function (txt, roll) {
    if (!roll) return null;
    if (roll.kind === 'fate') {
      var blk = blockOf(txt, '对战');
      if (!blk) return { ok: false, note: '这一轮正文里没有 <对战> 块' };
      var line = (blk.match(/^命运[:：]\s*(.+)$/m) || [])[1];
      if (!line) return { ok: false, note: '对战块里没有「命运」一栏' };
      var got = line.trim();
      if (!roll.picks.length) {
        return /平稳|无/.test(got) ? { ok: true, got: got } : { ok: false, got: got, note: '钩子掷的是「平稳」，对战块写的是「' + got + '」；照 05 16.3 第 4 条以正文为准，只报差异' };
      }
      var miss = roll.picks.filter(function (n) {
        var core = (FATE.filter(function (f) { return f.n === n; })[0] || {}).core || n;
        return got.indexOf(core) < 0;
      });
      if (miss.length) return { ok: false, got: got, note: '钩子掷的是「' + roll.picks.join('、') + '」，对战块写的「' + got + '」里没有 ' + miss.join('、') + '；以正文为准，只报差异' };
      return { ok: true, got: got };
    }
    var box = blockOf(txt, '盲盒');
    if (!box) return { ok: false, note: '这一轮正文里没有 <盲盒> 块' };
    var mm = box.match(/稀有度[:：]\s*([^\s｜|，,。]+)/);
    if (!mm) return { ok: false, note: '<盲盒> 块里没写稀有度' };
    return mm[1].indexOf(roll.tier) >= 0 ? { ok: true, got: mm[1] } :
      { ok: false, got: mm[1], note: '钩子掷的是「' + roll.tier + '」，<盲盒> 写的是「' + mm[1] + '」；以正文为准，只报差异' };
  };
  H.dice = { fate: rollFate, box: rollBox, tables: { FATE: FATE, BOX: BOX }, check: checkRoll };
  // ---------- 记账：图鉴 / 履历 / 背包（05 16.3 表） ----------
  // 状态栏本身就是账本（【履历】只增不减），钩子不另记一份，只拿相邻两轮快照比差异，
  // 把「该记而没记」「回退了」「来源没写」这几类对不上的地方报出来，显示照状态栏。
  var bagMap = function (bag) {
    var m = {}, put = function (name, qty) { m[name] = (m[name] || 0) + (qty == null ? 1 : qty); };
    (bag || []).forEach(function (x) {
      if (!x || !x.name) return;
      // 【背包】照 05 2.7 是「、」分隔；AI 偶尔写成竖线，这里顺手拆开，不然整串会被当成一件东西
      if (x.qty == null && /[｜|]/.test(x.name)) {
        x.name.split(/[｜|]/).forEach(function (p) {
          var t = p.trim(); if (!t) return;
          var mm = t.match(/^(.+?)\s*[x×*]\s*(\d+)$/i);
          put(mm ? mm[1].trim() : t, mm ? +mm[2] : null);
        });
        return;
      }
      put(x.name, x.qty);
    });
    return m;
  };
  var teamMap = function (team) {
    var m = {};
    (team || []).forEach(function (b) { if (b && (b.nick || b.species)) m[b.nick || b.species] = b; });
    return m;
  };
  var account = function () {
    var list = (load(scopeK('led'), []) || []).filter(function (r) { return r && r.t != null; });
    if (!list.length) return { items: [], warns: [], first: true };
    if (list.length < 2) return { items: [], warns: [], first: true };
    var cur = list[list.length - 1], prev = list[list.length - 2];
    var items = [], warns = [];
    // 资金
    if (cur.fundsNum != null && prev.fundsNum != null && cur.fundsNum !== prev.fundsNum) {
      var d = cur.fundsNum - prev.fundsNum;
      items.push('资金 ' + prev.funds + ' → ' + cur.funds + '（' + (d > 0 ? '+' : '') + d + '）');
    }
    if (cur.fundsNum != null && prev.fundsNum != null && cur.fundsNum < 0) warns.push('资金变成负数（' + cur.funds + '），状态栏该对一下账');
    // 背包
    var pb = bagMap(prev.bag), cb = bagMap(cur.bag), names = {};
    Object.keys(pb).concat(Object.keys(cb)).forEach(function (n) { names[n] = 1; });
    Object.keys(names).forEach(function (n) {
      var a = pb[n] || 0, b = cb[n] || 0;
      if (a === b) return;
      items.push('背包 ' + n + ' ' + a + ' → ' + b + '（' + (b - a > 0 ? '+' : '') + (b - a) + '）');
      if (b > a && prev.fundsNum != null && cur.fundsNum != null && cur.fundsNum === prev.fundsNum) {
        warns.push('背包多了「' + n + '」，资金没变：正文得写清是捡的、送的、任务给的还是本来就有的');
      }
    });
    // 图鉴 / 招式图鉴
    if (cur.dexCount != null && prev.dexCount != null && cur.dexCount !== prev.dexCount) {
      items.push('【履历】图鉴 ' + prev.dexCount + ' → ' + cur.dexCount);
      if (cur.dexCount < prev.dexCount) warns.push('【履历】图鉴数回退了（' + prev.dexCount + ' → ' + cur.dexCount + '）：图鉴只增不减（05 2.11）');
    }
    if (cur.moveDex != null && prev.moveDex != null && cur.moveDex !== prev.moveDex) items.push('【履历】招式图鉴 ' + prev.moveDex + ' → ' + cur.moveDex);
    // 队伍：入队、离队、阶段变化（体力这种每场都在变的就不报了）
    var pt = teamMap(prev.team), ct = teamMap(cur.team);
    Object.keys(ct).forEach(function (k) {
      if (!pt[k]) items.push('队伍新增 ' + k + '（' + (ct[k].species || '物种未写') + '）');
      else {
        if (pt[k].stage && ct[k].stage && pt[k].stage !== ct[k].stage) items.push(k + ' 阶段 ' + pt[k].stage + ' → ' + ct[k].stage);
        if (pt[k].nick && ct[k].nick && pt[k].nick !== ct[k].nick) items.push('改名 ' + pt[k].nick + ' → ' + ct[k].nick);
      }
    });
    Object.keys(pt).forEach(function (k) { if (!ct[k]) items.push('队伍里没有 ' + k + ' 了（离队／寄存／放生，正文要交代）'); });
    // 履历：按项比，只报变了的
    var pr = prev.record || {}, cr = cur.record || {};
    Object.keys(cr).forEach(function (k) {
      if (k === '图鉴' || pr[k] === undefined || pr[k] === cr[k]) return;  // 图鉴上面按数字报过了
      items.push('【履历】' + k + ' ' + pr[k] + ' → ' + cr[k]);
    });
    return { from: prev.t, to: cur.t, items: items.slice(0, 8), warns: warns.slice(0, 4) };
  };
  H.account = account;


  // ---------- 拦请求 ----------
  var wrapped = function (url, opt) {
    if (H.alive && cfg.on && opt && typeof opt.body === 'string' && /chat\/completions/.test(String(url))) {
      var rec = { at: new Date().toLocaleTimeString(), turn: turnNo() };
      var touched = false;
      try {
        var body = JSON.parse(opt.body);
        if (Array.isArray(body.messages)) {
          doRumors(body, rec);
          if (rec.block !== undefined) touched = true;
          doEvents(body, rec);
          if (rec.pools.event.injectedChars || rec.pools.enc.injectedChars) touched = true;
          rec.wild = drawWild(body);
          if (rec.wild.injectedChars) touched = true;
          // 先算首次登场补详档 doMeet，再算 doPull（避免已被 doMeet 补了完整详档的人再被 doPull 重复补一份简档）
          var meetRes = doMeet(body, rec);
          var meetMap = {};
          if (meetRes && meetRes.items) {
            meetRes.items.forEach(function (s) {
              var m = String(s || '').match(/^\[([^\]\n]+)\]/);
              if (m) meetMap[m[1]] = 1;
            });
          }
          var blocks = [doDex(body, rec), doCal(rec), doTime(rec), doPull(body, rec, meetMap), meetRes].concat(doDice(body, rec));
          applyInj(body, rec, blocks);
          if (rec.dexInjected || rec.calInjected || rec.timeInjected || rec.pullInjected || rec.meetInjected || rec.fateInjected || rec.boxInjected) touched = true;
          if (touched) opt = Object.assign({}, opt, { body: JSON.stringify(body) });
        }
      } catch (e) { rec.err = String(e && e.message || e); }
      H.lastRec = rec;
      var poolHit = rec.pools && (rec.pools.event.injectedChars || rec.pools.enc.injectedChars);
      var wildHit = rec.wild && rec.wild.injectedChars;
      // 主对话请求（认出了场景行）都记一条，面板才看得到「这一轮为什么没动」
      var sceneHit = rec.scene
        || (rec.pools && ((rec.pools.event && rec.pools.event.scene) || (rec.pools.enc && rec.pools.enc.scene)))
        || (rec.wild && rec.wild.scene);
      if (rec.err || rec.nativeCount || sceneHit || rec.dexInjected || rec.dexSeen || rec.meetInjected || rec.meetSeen || poolHit || wildHit) {
        H.log.unshift(rec); H.log = H.log.slice(0, 20); render(); if (touched) flash();
      }
    }
    return origFetch.apply(this, [url, opt].concat([].slice.call(arguments, 2)));
  };
  window.fetch = wrapped;

  // ---------- 悬浮球「契约印」 ----------
  // 造型：深蓝夜色的圆球，金色外沿；外圈 21 道刻度（21 种属性）缓慢转动；中间一枚菱形印，印里是「契」字。
  // 核心光：青绿=在工作；灰=已暂停；琥珀=出过错。每次改写请求，印会亮一下、刻度圈闪一圈。
  // 右下角小圆牌 = 这一轮抽中的传闻条数。
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var ORB = 86;
  // WT-v7 冰川白钛明亮机能手环样式表（随页面自适应缩放，彻底根治 641–1024px 预览窗出屏顽疾）
  var MASTER_CSS = `/* === WT-v7 冰川白钛手环 CSS 开始 === */
#p12hook{--ink:#1b2340;--ink2:#52607a;--line:#cfe0f5;--sky:#1da1f2;--cyan:#00c2ff;--sky2:#dbeeff;--sky3:#f2f7fe;--paper:#ffffff;--sun:#ff6b2b;--hot:#ff2e55;--gold:#ffb800;--mint:#10b981;
  font-family:"HarmonyOS Sans SC","Source Han Sans SC","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;color:var(--ink);line-height:1.5}
#p12hook *{box-sizing:border-box}
/* 平时右下角收起态：紧凑切角机能腕表胶囊（不挡右下输入框，支持自由拖拽） */
#p12hook .p12-dial{position:fixed;right:22px;bottom:26px;width:124px;height:44px;z-index:9998;cursor:pointer;user-select:none;
  background:var(--ink);border:2.5px solid var(--ink);border-left:5px solid var(--sun);
  clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);
  display:flex;align-items:center;justify-content:center;gap:7px;padding:0 10px;
  box-shadow:5px 5px 0 rgba(27,35,64,.22);transition:transform .18s,box-shadow .18s}
#p12hook .p12-dial:hover{transform:translateY(-3px);box-shadow:6px 7px 0 rgba(255,107,43,.45)}
#p12hook .p12-dial.p12-off{opacity:.65;filter:grayscale(.6)}
#p12hook .p12-dial .p12-arc{width:8px;height:8px;border-radius:50%;background:var(--mint);box-shadow:0 0 8px var(--mint);flex:none}
#p12hook .p12-dial.p12-off .p12-arc{background:#94a3b8;box-shadow:none}
#p12hook .p12-dial b{font:900 15px/1 "Bahnschrift","DIN Alternate",monospace;color:var(--gold);letter-spacing:.03em;font-variant-numeric:tabular-nums}
#p12hook .p12-dial small{font:800 11px/1 "Bahnschrift","DIN Alternate",monospace;color:#7dd3fc}
#p12hook .p12-dial .p12-dot{min-width:16px;height:16px;padding:0 4px;background:var(--hot);color:#fff;font:900 10px/16px monospace;text-align:center;flex:none}
#p12hook .p12-dial .p12-dot:empty{display:none}
#p12hook.is-open .p12-dial{opacity:0;pointer-events:none}

/* 展开态抽屉：冰川白钛机能终端，流体宽度随视口平滑伸缩 */
#p12hook .p12-band{position:fixed;right:clamp(12px,2vw,28px);top:clamp(12px,2.2vh,24px);bottom:clamp(12px,2.2vh,24px);
  width:clamp(360px,33vw,444px);max-width:calc(100vw - 20px);z-index:9999;background:#fff;
  border:3px solid var(--ink);clip-path:polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px));
  box-shadow:0 24px 56px rgba(27,35,64,.26);overflow:hidden;display:flex;flex-direction:column;
  transform:translateX(calc(100% + 48px));transition:transform .3s cubic-bezier(.22,1,.36,1)}
#p12hook.is-open .p12-band{transform:none}

/* 系统顶条 + 数字执照头卡 + 道馆徽章槽 */
#p12hook .v7-os-bar{display:flex;align-items:center;gap:8px;padding:7px 14px;background:var(--ink);color:#fff;font:900 10.5px/1 "Bahnschrift",monospace;letter-spacing:.1em;flex:none}
#p12hook .v7-os-bar .os-rt{margin-left:auto;color:#7dd3fc;display:inline-flex;align-items:center;gap:5px}
#p12hook .v7-os-bar .os-rt i{width:6px;height:6px;border-radius:50%;background:var(--mint);display:inline-block}
#p12hook .p12-x{width:24px;height:24px;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:#fff;font:900 12px/1 sans-serif;cursor:pointer;display:grid;place-items:center;margin-left:6px}
#p12hook .p12-x:hover{background:var(--hot);border-color:var(--hot)}
#p12hook .v7-id-card{padding:12px 15px 10px;background:linear-gradient(135deg,#ffffff 0%,#edf6ff 65%,#fff5eb 100%);border-bottom:1.5px solid var(--line);flex:none}
#p12hook .v7-id-main{display:flex;align-items:center;gap:11px}
#p12hook .v7-id-av{width:54px;height:54px;flex:none;border:2.5px solid var(--ink);background:#e0f2fe center/cover no-repeat;
  clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%);display:grid;place-items:center;font:900 20px/1 sans-serif;color:var(--ink);cursor:pointer;position:relative}
#p12hook .v7-id-info{flex:1;min-width:0}
#p12hook .v7-id-r1{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
#p12hook .v7-id-nm{font:900 19px/1.15 inherit;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:150px}
#p12hook .v7-id-lic{background:var(--sun);color:#fff;font:900 10.5px/1.1 inherit;padding:3px 7px;transform:skewX(-10deg);white-space:nowrap}
#p12hook .v7-id-r2{margin-top:5px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;font:800 12px/1.2 "Bahnschrift",sans-serif;color:var(--ink2)}
#p12hook .v7-id-funds{font-size:14.5px;font-weight:900;color:var(--ink)}
#p12hook .v7-id-inj{padding:1px 6px;font-size:10.5px;font-weight:900;background:#dcfce7;color:#166534;border:1px solid #86efac}
#p12hook .v7-id-inj.hurt{background:#fee2e2;color:#991b1b;border-color:#fca5a5}
#p12hook .v7-id-shield{width:38px;height:38px;flex:none;object-fit:contain;filter:drop-shadow(0 3px 5px rgba(27,35,64,.16))}
#p12hook .v7-crest-bar{margin-top:9px;padding:6px 10px;background:#fff;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:8px}
#p12hook .v7-crest-lbl{font:900 10px/1.2 "Bahnschrift",sans-serif;color:var(--ink2);letter-spacing:.04em;white-space:nowrap}
#p12hook .v7-crest-slots{display:flex;gap:4px;align-items:center}
#p12hook .v7-hex{width:19px;height:21px;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:#e2ecf9;display:grid;place-items:center;font-size:9px;color:transparent}
#p12hook .v7-hex.lit{background:linear-gradient(135deg,#ff9f1c,#ff6b2b);color:#fff;font-weight:900}

/* 7 大机能分页导航栏 */
#p12hook .p12-tabs{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));border-bottom:2px solid var(--ink);background:#f8fbff;padding:0 4px;flex:none}
#p12hook .p12-tab{padding:9px 2px;font:900 12px/1.2 inherit;color:var(--ink2);position:relative;cursor:pointer;border:0;background:none;text-align:center;white-space:nowrap}
#p12hook .p12-tab:hover{color:var(--ink)}
#p12hook .p12-tab.on{color:var(--ink);background:#fff}
#p12hook .p12-tab.on:after{content:"";position:absolute;left:4px;right:4px;bottom:-2px;height:3.5px;background:var(--sun)}
#p12hook .p12-tab sup{color:var(--hot);font:900 9.5px/1 monospace;margin-left:1px}
#p12hook .p12-body{flex:1;overflow-y:auto;overflow-x:hidden;padding:13px 14px 18px;background:#f7faff}
#p12hook .p12-page{display:none}
#p12hook .p12-page.on{display:block;animation:p12up .22s both}

/* ① 队伍页：6 格切角槽 + 冰蓝坐标网格全息主卡 + 双列切角四招卡 + 实景在场雷达条 */
#p12hook .v7-pod-strip{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px;margin-bottom:11px}
#p12hook .v7-pod-slot{height:48px;border:2px solid var(--line);background:#fff;clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%);
  position:relative;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:3px;transition:transform .14s,border-color .14s}
#p12hook .v7-pod-slot:hover{transform:translateY(-2px);border-color:var(--sky)}
#p12hook .v7-pod-slot.sel{border-color:var(--sun);background:#fff7ed;box-shadow:2px 2px 0 var(--sun)}
#p12hook .v7-pod-slot.empty{background:#f1f6fd;border-style:dashed;color:#94a3b8;font:900 15px/1 monospace;cursor:default}
#p12hook .v7-pod-slot .pod-spr{width:36px;height:36px;background-size:contain;background-repeat:no-repeat;background-position:center}
#p12hook .v7-pod-slot .pod-hp{position:absolute;left:3px;right:3px;bottom:2px;height:3px;background:#e2e8f0}
#p12hook .v7-pod-slot .pod-hp i{display:block;height:100%;background:var(--mint)}
#p12hook .v7-pod-slot .pod-hp.low i{background:var(--hot)}

#p12hook .v7-beast-hero{position:relative;border:2.5px solid var(--ink);background:
  linear-gradient(rgba(29,161,242,.07) 1px,transparent 1px),
  linear-gradient(90deg,rgba(29,161,242,.07) 1px,transparent 1px),
  linear-gradient(135deg,#ffffff 0%,#eaf6ff 100%);
  background-size:16px 16px,16px 16px,100% 100%;padding:12px 13px;margin-bottom:10px;overflow:hidden;
  box-shadow:4px 4px 0 rgba(27,35,64,.12)}
#p12hook .v7-lv-wm{position:absolute;right:10px;top:4px;font:900 36px/1 "Bahnschrift",monospace;color:rgba(27,35,64,.06);pointer-events:none;user-select:none}
#p12hook .v7-hero-tools{position:absolute;right:8px;top:8px;z-index:3;display:flex;gap:5px}
#p12hook .v7-tool-btn{border:1.5px solid var(--ink);background:#fff;color:var(--ink);padding:2px 7px;font:900 10.5px/1.3 inherit;cursor:pointer;clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px)}
#p12hook .v7-tool-btn:hover,#p12hook .v7-tool-btn.on{background:var(--sun);color:#fff;border-color:var(--ink)}
#p12hook .v7-hero-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(112px,.85fr);gap:8px;align-items:center}
#p12hook .v7-b-tags{display:flex;align-items:center;gap:5px;flex-wrap:wrap;padding-right:48px}
#p12hook .v7-ti{display:inline-flex;align-items:center;gap:3px}
#p12hook .v7-ti img{width:17px;height:17px;object-fit:contain}
#p12hook .v7-bond-pill{font:900 11px/1.1 inherit;color:var(--sun);background:#fff3e6;border:1px solid #fdba74;padding:2px 6px}
#p12hook .v7-b-nm{margin-top:4px;font:900 22px/1.15 inherit;color:var(--ink)}
#p12hook .v7-b-sub{font:800 12px/1.3 inherit;color:var(--sky);margin-bottom:8px}
#p12hook .v7-seg-lbl{display:flex;justify-content:space-between;font:800 10.5px/1.2 "Bahnschrift",sans-serif;color:var(--ink2);margin:5px 0 3px}
#p12hook .v7-seg-lbl b{color:var(--ink)}
#p12hook .v7-seg-row{display:grid;grid-template-columns:repeat(12,1fr);gap:2px;height:7px}
#p12hook .v7-seg-row i{display:block;background:#dbe7f5;transform:skewX(-16deg)}
#p12hook .v7-seg-row.hp i.on{background:var(--mint)}
#p12hook .v7-seg-row.hp.low i.on{background:var(--hot)}
#p12hook .v7-seg-row.exp i.on{background:var(--sun)}
#p12hook .v7-seg-row.grw i.on{background:var(--cyan)}
#p12hook .v7-b-meta{margin-top:7px;display:flex;flex-wrap:wrap;gap:4px;font:800 10.5px/1.2 inherit;color:var(--ink2)}
#p12hook .v7-b-meta span{background:rgba(255,255,255,.85);border:1px solid var(--line);padding:2px 6px}
#p12hook .v7-b-stage{position:relative;height:138px;display:flex;align-items:center;justify-content:center}
#p12hook .v7-b-disc{position:absolute;bottom:4px;width:104px;height:22px;border-radius:50%;background:radial-gradient(ellipse,#fff 0%,var(--cyan) 68%,transparent 75%);opacity:.75}
#p12hook .v7-b-art{position:relative;z-index:2;width:124px;height:124px;background-size:contain;background-repeat:no-repeat;background-position:center bottom;filter:drop-shadow(0 8px 10px rgba(27,35,64,.22));transition:transform .2s}
#p12hook .v7-b-art.is-flipped{transform:scaleX(-1)}

#p12hook .v7-move-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;margin-bottom:10px}
#p12hook .v7-mv-card{background:#fff;border:2px solid var(--ink);border-left:5px solid var(--mc,var(--sky));
  clip-path:polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,0 100%);padding:7px 9px;display:flex;align-items:center;gap:7px}
#p12hook .v7-mv-card b{display:block;font:900 13px/1.2 inherit;color:var(--ink)}
#p12hook .v7-mv-card small{display:block;font:700 10.5px/1.2 inherit;color:var(--ink2);margin-top:2px}
#p12hook .v7-store-line{background:#fff;border:1.5px dashed var(--line);padding:6px 10px;font:700 11.5px/1.4 inherit;color:var(--ink2);margin-bottom:10px}

/* 周边在场实景雷达横幅 */
#p12hook .v7-radar-banner{position:relative;border:2.5px solid var(--ink);min-height:76px;padding:10px 12px;color:#fff;
  background-color:#16203a;background-size:cover;background-position:center;display:flex;align-items:center;justify-content:space-between;gap:8px;overflow:hidden}
#p12hook .v7-radar-banner:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,28,54,.86) 0%,rgba(20,28,54,.45) 65%,rgba(20,28,54,.72) 100%)}
#p12hook .v7-radar-txt{position:relative;z-index:2;min-width:0;flex:1}
#p12hook .v7-radar-txt small{display:block;font:900 9.5px/1 "Bahnschrift",monospace;color:#38bdf8;letter-spacing:.1em}
#p12hook .v7-radar-txt b{display:block;margin-top:4px;font:900 14.5px/1.2 inherit;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#p12hook .v7-radar-avs{position:relative;z-index:2;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}
#p12hook .p12-pa{padding:0;width:44px;height:44px;border-radius:50%;border:2.5px solid var(--sun);background:#fff;cursor:pointer;overflow:hidden;position:relative;box-shadow:0 4px 10px rgba(0,0,0,.3);transition:transform .15s}
#p12hook .p12-pa:hover{transform:scale(1.08)}
#p12hook .p12-pa .p12-pa-av{width:100%;height:100%;border-radius:50%;background:#fff center/cover no-repeat;display:grid;place-items:center;font:900 15px/1 sans-serif;color:var(--ink)}
#p12hook .p12-pa .p12-pa-tx{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}

/* 通用机能卡片头与行（年历 / 背包 / 好感 / 讯息 / 图鉴 / 设置） */
#p12hook .v7-sec-hd{background:var(--ink);color:#fff;padding:7px 12px;font:900 12px/1.2 inherit;display:flex;align-items:center;justify-content:space-between;gap:8px;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%);margin-bottom:8px}
#p12hook .v7-sec-hd em{font:900 11px/1 "Bahnschrift",monospace;color:var(--gold);font-style:normal}
#p12hook .p12-row{display:flex;gap:10px;align-items:center;background:#fff;border:1.5px solid var(--line);border-left:4px solid var(--sky);
  padding:9px 11px;margin-bottom:7px;font-size:13px;box-shadow:2px 2px 0 rgba(27,35,64,.06)}
#p12hook .p12-row .k{flex:none;font:900 11.5px/1.2 "Bahnschrift",sans-serif;color:var(--sun);min-width:60px}
#p12hook .p12-row .v{flex:1;min-width:0;font-weight:700}
#p12hook .p12-row .n{font:900 13px/1 "Bahnschrift",monospace;color:var(--ink)}
#p12hook .p12-row.sch{border-left-color:var(--sun);background:#fffaf5}
#p12hook .p12-empty{text-align:center;color:var(--ink2);font:700 12.5px/1.6 inherit;padding:24px 10px;background:#fff;border:1.5px dashed var(--line)}

/* ③ 雷达地图 & 背包双栏物资 */
#p12hook .v7-map-box{position:relative;height:132px;border:2.5px solid var(--ink);margin-bottom:10px;background:#16203a center/cover no-repeat;overflow:hidden}
#p12hook .v7-map-pin{position:absolute;left:10px;top:10px;background:rgba(27,35,64,.9);border-left:4px solid var(--gold);color:#fff;padding:4px 9px;font:900 11.5px/1.2 inherit}
#p12hook .v7-map-sub{position:absolute;right:8px;bottom:8px;background:rgba(29,161,242,.92);color:#fff;padding:2px 8px;font:900 10.5px/1.2 inherit}
#p12hook .v7-bag-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
#p12hook .v7-bag-item{background:#fff;border:1.5px solid var(--ink);clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%);
  padding:8px 10px;display:flex;align-items:center;gap:7px;font:800 12.5px/1.25 inherit}
#p12hook .v7-bag-dot{width:11px;height:11px;border-radius:50%;border:1.5px solid var(--ink);flex:none}
#p12hook .v7-bag-item .nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#p12hook .v7-bag-item .qt{font:900 12.5px/1 "Bahnschrift",monospace;color:var(--sun)}

/* ④ 好感三轴卡片 & ⑤ 讯息气泡 */
#p12hook .p12-c-row{cursor:pointer;transition:transform .14s}
#p12hook .p12-c-row:hover{transform:translateX(3px);border-color:var(--ink)}
#p12hook .p12-c-av{flex:none;width:44px;height:44px;border-radius:50%;border:2px solid var(--ink);background:#eef8ff center/cover no-repeat;display:grid;place-items:center;font:900 15px/1 sans-serif;color:var(--ink)}
#p12hook .v7-fav-body{flex:1;min-width:0}
#p12hook .v7-fav-top{display:flex;align-items:center;justify-content:space-between;gap:6px}
#p12hook .v7-fav-top b{font:900 14px/1.2 inherit;color:var(--ink)}
#p12hook .v7-fav-tier{font:900 11px/1.1 inherit;color:var(--hot)}
#p12hook .v7-axis-row{margin-top:4px;display:flex;align-items:center;gap:6px;font:800 10.5px/1.1 inherit;color:var(--ink2)}
#p12hook .v7-axis-segs{display:grid;grid-template-columns:repeat(6,10px);gap:2px;height:6px}
#p12hook .v7-axis-segs i{display:block;background:#e2e8f0;transform:skewX(-14deg)}
#p12hook .v7-axis-segs i.on{background:var(--ac,var(--sky))}

/* ⑥ 图鉴与履历四宫格 */
#p12hook .v7-rec-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;margin-bottom:9px}
#p12hook .v7-rec-cell{background:#fff;border:1.5px solid var(--line);padding:6px 4px;text-align:center}
#p12hook .v7-rec-cell small{display:block;font:800 10px/1.1 inherit;color:var(--ink2)}
#p12hook .v7-rec-cell b{display:block;margin-top:3px;font:900 13px/1.1 "Bahnschrift",sans-serif;color:var(--ink)}
#p12hook .v7-dex-row{display:flex;align-items:center;gap:9px;background:#fff;border:1.5px solid var(--ink);
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%);padding:8px 10px;margin-bottom:7px}
#p12hook .v7-dex-thumb{width:46px;height:46px;flex:none;background:#eff8ff center/contain no-repeat;border:1.5px solid var(--line)}
#p12hook .p12-t{display:inline-block;font:900 10px/1.2 inherit;color:#fff;padding:2px 6px;background:var(--tc,#64748b);transform:skewX(-10deg)}

/* ⑦ 终端设置页 (SYS) */
#p12hook .v7-sys-card{background:#fff;border:1.5px solid var(--ink);padding:10px 12px;margin-bottom:9px}
#p12hook .v7-sys-ttl{font:900 12px/1.2 inherit;color:var(--ink);margin-bottom:7px;display:flex;align-items:center;justify-content:space-between}
#p12hook .v7-sys-row{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:5px 0;border-top:1px dashed var(--line);font:700 11.5px/1.4 inherit}
#p12hook .v7-sys-row:first-of-type{border-top:0}
#p12hook .v7-pill-btn{border:1.5px solid var(--ink);background:#fff;color:var(--ink);padding:3px 9px;font:900 11px/1.2 inherit;cursor:pointer}
#p12hook .v7-pill-btn.on{background:var(--mint);color:#fff;border-color:var(--ink)}
#p12hook .v7-pill-btn.sun{background:var(--sun);color:#fff}
#p12hook .p12-diag{margin-top:8px;font-size:11px;color:var(--ink2)}
#p12hook .p12-diag summary{cursor:pointer;font-weight:900;color:var(--ink)}

/* 全身图预览与立绘编辑弹窗：宽屏停靠抽屉左侧，中窄屏(<960px)自动居中内叠，100% 绝不出屏！ */
#p12hook .p12-pv{position:fixed;right:calc(clamp(360px,33vw,444px) + clamp(12px,2vw,28px) + 12px);top:clamp(12px,2.2vh,24px);
  width:min(300px,calc(100vw - clamp(360px,33vw,444px) - 52px));max-height:calc(100vh - 28px);overflow-y:auto;z-index:100000;
  background:#fff;border:3px solid var(--ink);clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%);
  padding:12px;box-shadow:0 24px 56px rgba(27,35,64,.28);display:none}
#p12hook .p12-pv[data-mode="edit"]{width:min(388px,calc(100vw - clamp(360px,33vw,444px) - 52px))}
#p12hook .p12-pv.on{display:block;animation:p12up .2s both}
#p12hook .p12-pv .p12-fv-hero{width:100%;aspect-ratio:2/3;max-height:56vh;margin:0 0 10px;border:1.5px solid var(--line);background:var(--sky3);position:relative;overflow:hidden}
#p12hook .p12-pv .p12-fv-img{display:block;width:100%;height:100%;object-fit:contain;object-position:center}
#p12hook .p12-fv-hero.is-empty:after{content:"暂无专属全身立绘";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:800 12px/1 inherit;color:var(--ink2);white-space:nowrap}
#p12hook .p12-pv .p12-pv-nm{display:block;font:900 17px/1.2 inherit;color:var(--ink)}
#p12hook .p12-pv .p12-pv-sub{font-size:12px;color:var(--ink2);margin-top:4px;line-height:1.55}
#p12hook .p12-pv .p12-pv-x{position:absolute;right:8px;top:8px;width:28px;height:28px;border:1.5px solid var(--ink);background:#fff;color:var(--ink);font:900 13px/1 sans-serif;cursor:pointer;z-index:2}
#p12hook .p12-pv .p12-pv-x:hover{background:var(--hot);color:#fff}

/* 正文对白头像（挂消息 DOM 内） */
.p12-dlg{display:inline-block;box-sizing:border-box;width:30px;height:30px;border-radius:50%;border:2px solid #1b2340;
  background:#fff center/cover no-repeat;box-shadow:2px 2px 0 hsl(var(--hue,215) 75% 58%);vertical-align:-7px;margin-right:8px}
.p12-dlg.is-empty{background:#eef8ff;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;font-size:13px;font-weight:900;color:#5a6480}
.wt-battle-fold>summary{list-style:none;cursor:pointer;font-size:13px;font-weight:700;color:#5a6480;padding:6px 0}
.wt-battle-fold>summary::-webkit-details-marker{display:none}
.wt-battle-fold>summary::marker{content:''}
.wt-battle-fold>.wt-raw{font-size:13px;color:#5a6480;opacity:.85}

@keyframes p12up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

/* 平板与分屏 (<960px)：立绘预览/编辑窗自动内叠居中，彻底消灭左侧溢出被裁！ */
@media (max-width:959px){
  #p12hook .p12-pv,#p12hook .p12-pv[data-mode="edit"]{
    right:clamp(8px,3vw,24px);left:auto;top:14px;bottom:auto;
    width:min(380px,calc(100vw - 16px));max-height:calc(100vh - 28px);z-index:100001}
}
/* 手机竖屏 (<=680px) */
@media (max-width:680px){
  #p12hook .p12-dial{right:12px;bottom:84px;width:108px;height:38px;gap:5px;padding:0 8px}
  #p12hook .p12-dial b{font-size:13.5px}
  #p12hook .p12-band{left:6px;right:6px;top:auto;bottom:6px;width:auto;max-width:none;height:min(82vh,calc(100vh - 12px));
    clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%);transform:translateY(calc(100% + 20px))}
  #p12hook.is-open .p12-band{transform:none}
  #p12hook .v7-hero-grid{grid-template-columns:1fr 108px}
  #p12hook .v7-b-art{width:104px;height:104px}
  #p12hook .v7-crest-bar{padding:5px 8px;gap:4px}
  #p12hook .v7-crest-lbl{font-size:9.5px}
  #p12hook .v7-crest-slots{gap:2.5px}
  #p12hook .v7-hex{width:15px;height:17px;font-size:8px}
  #p12hook .p12-pv,#p12hook .p12-pv[data-mode="edit"]{left:8px;right:8px;top:12px;width:auto;max-height:calc(100vh - 24px)}
  .p12-dlg{width:24px;height:24px;vertical-align:-5px}
}
@media (prefers-reduced-motion:reduce){#p12hook *{animation:none!important;transition:none!important}}
/* === WT-v7 冰川白钛手环 CSS 结束 === */`;
  var css = document.createElement('style');
  css.id = 'p12hook-style';
  css.textContent = MASTER_CSS + (window.P12_WRISTBAND_V3_CSS ? '\n' + window.P12_WRISTBAND_V3_CSS : '');
  document.head.appendChild(css);

  // ---------- 手环：根节点、表盘、抽屉 ----------
  var q1 = function (n, sel) { try { return n && n.querySelector ? n.querySelector(sel) : null; } catch (e) { return null; } };
  var onE = function (n, ev, fn) { try { if (n && n.addEventListener) n.addEventListener(ev, fn); } catch (e) {} };
  var clsT = function (n, k, v) { try { if (n && n.classList) n.classList.toggle(k, !!v); } catch (e) {} };
  var el = document.createElement('div');
  el.id = 'p12hook';
  el.setAttribute('role', 'button');
  el.setAttribute('aria-label', '契约之城 手环');
  el.innerHTML = '<div class="p12-dial" title="打开驯兽师手环"><span class="p12-arc"></span>' +
    '<b class="p12-hh">--:--</b><small class="p12-dt">手环</small><span class="p12-dot"></span></div><div class="p12-band"></div><div class="p12-pv"></div>';
  document.body.appendChild(el);
  var dial = q1(el, '.p12-dial');
  var box = q1(el, '.p12-band') || el;
  // 全身图浮层（在场卡／好感详情共用）：2:3 contain，查不到图显示「没有立绘」
  var pv = q1(el, '.p12-pv'), pvName = '';
  var pvOpen = function (name, sub) {
    name = sprName(name);
    if (!name || !pv) return;
    if (typeof psEndEdit === 'function') psEndEdit();
    var a = avatarOf(name, sub, 'full');
    var u = a && a.url ? String(a.url) : '';
    var hue = (a && a.hue != null) ? a.hue : 215;
    pv.innerHTML = '<button class="p12-pv-x" data-k="pv-close" aria-label="关闭">✕</button>' +
      '<div class="p12-fv-hero' + (u ? '' : ' is-empty') + '" style="--hue:' + hue + '">' +
      (u ? '<img class="p12-fv-img" alt="" src="' + esc(u) + '" data-who="' + esc(name) + '">' : '') +
      '</div>' +
      '<b class="p12-pv-nm">' + esc(name) + '</b>' +
      (sub ? '<div class="p12-pv-sub">' + esc(sub) + '</div>' : '');
    // 图加载失败就退回占位（首字），不留裂图
    var im = pv.querySelector('.p12-fv-img');
    if (im) im.addEventListener('error', function () {
      var hero = im.parentNode;
      if (hero) { hero.className = 'p12-fv-hero is-empty'; hero.style.setProperty('--hue', hue); }
      im.remove();
    });
    pvName = name;
    clsT(pv, 'on', true);
  };
  var pvClose = function () {
    if (typeof psEndEdit === 'function') psEndEdit();
    if (pv) clsT(pv, 'on', false);
    pvName = '';
  };
  onE(pv, 'click', function (ev) {
    if (ev.target && ev.target.getAttribute && ev.target.getAttribute('data-k') === 'pv-close') { pvClose(); return; }
    // 立绘小窗挂在 pv 里（不在抽屉 box 里），保存／恢复要单独接
    var tab = ev.target.closest && ev.target.closest('[data-ptab]');
    if (tab) { PSEDIT.tab = tab.getAttribute('data-ptab'); PSEDIT.msg = ''; pvEditRender(); return; }
    var pick = ev.target.closest && ev.target.closest('[data-ppick]');
    if (pick) { PSEDIT.pick = pick.getAttribute('data-ppick'); pvEditRender(); return; }
    var gen = ev.target.closest && ev.target.closest('[data-pgen]');
    if (gen) { psGenerate(); return; }
    var ps = ev.target.closest && ev.target.closest('[data-psave]');
    if (!ps) return;
    var how = ps.getAttribute('data-psave');
    if (how === 'link') { var inp = pv.querySelector('[data-purl]'); psSaveLink(inp ? inp.value.trim() : ''); return; }
    if (how === 'generated') { psSaveGenerated(); return; }
    if (how === 'restore') { psRestore(); return; }
  });
  onE(pv, 'change', function (ev) {
    if (ev.target && ev.target.hasAttribute && ev.target.hasAttribute('data-pfile')) psUpload(ev.target.files && ev.target.files[0]);
    if (ev.target && ev.target.hasAttribute && ev.target.hasAttribute('data-psavedef')) PSEDIT.saveDefault = !!ev.target.checked;
  });
  onE(pv, 'input', function (ev) {
    if (ev.target && ev.target.hasAttribute && ev.target.hasAttribute('data-pprompt')) PSEDIT.prompt = ev.target.value;
  });
  // 上传页的虚框也支持拖入
  onE(pv, 'dragover', function (ev) {
    var dz = ev.target && ev.target.closest && ev.target.closest('[data-pdrop]');
    if (!dz) return;
    ev.preventDefault();
    try { ev.dataTransfer.dropEffect = 'copy'; } catch (e) {}
    dz.style.borderColor = '#1b2340'; dz.style.background = '#f6f8fb';
  });
  onE(pv, 'dragleave', function (ev) {
    var dz = ev.target && ev.target.closest && ev.target.closest('[data-pdrop]');
    if (!dz) return;
    dz.style.borderColor = '#c9d6e8'; dz.style.background = '';
  });
  onE(pv, 'drop', function (ev) {
    var dz = ev.target && ev.target.closest && ev.target.closest('[data-pdrop]');
    if (!dz) return;
    ev.preventDefault();
    dz.style.borderColor = '#c9d6e8'; dz.style.background = '';
    var f = ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0];
    if (f) psUpload(f);
  });

  // ---------- 立绘来源（hook/portrait-source.js）：玩家覆盖图 + 编辑窗口 ----------
  // 三来源、设置与生成确认均接公开服务接口；会话/缓存按存档隔离。
  var PS = window.P12PortraitSource || null;
  var PSS = { ready: false, err: '', over: {}, scope: null, refresh: 0, cfgRevision: 0 };
  var pstore = null, psvc = null;
  var psBoot = function () {
    if (psvc || !PS) return;
    try {
      pstore = PS.createStore(window.indexedDB);
      psvc = PS.createService({
        store: pstore, fetch: window.fetch.bind(window), codec: PS.createBrowserCodec(window),
        getPlatform: function () { return PS.readPlatform(window); },
      });
      PSS.ready = true;
      psLoadCfg();
    } catch (e) { PSS.err = String(e && e.message || e); }
  };
  var psSaveId = function () {
    var c = st.currentCharacter || {}, br = st.currentStoryBranch || {};
    return JSON.stringify([c.uuid || c.name || 'card', br.id || 'main']);
  };
  var psIdOf = function (b) {
    return { saveId: psSaveId(), owned: true, nick: b.nick || b.species, species: b.species || b.nick, types: b.types || [] };
  };
  var psKeyOf = function (b) { return (b.nick || b.species || '') + '|' + (b.species || ''); };
  var psDropOverrides = function () {
    Object.keys(PSS.over).forEach(function (key) { try { PSS.over[key].handle.dispose(); } catch (e) {} });
    PSS.over = {}; PSS.loaded = {}; PSS.refresh++;
  };
  var psSyncScope = function () {
    var now = psSaveId();
    if (PSS.scope !== now) {
      if (PSS.scope !== null && PSEDIT && PSEDIT.sess) pvClose();
      psDropOverrides(); PSS.scope = now; uiDirty = true;
    }
    return now;
  };
  var psArtOf = function (b) {
    psSyncScope();
    if (!b) return null;
    var o = PSS.over[psKeyOf(b)];
    return o && o.url ? o.url : null;
  };
  var psByName = function (name) {
    psSyncScope();
    var team = (viewState() && viewState().team) || [];
    for (var i = 0; i < team.length; i++) {
      var t = team[i];
      if (t.nick === name || t.species === name) { var u = psArtOf(t); if (u) return u; }
    }
    var keys = Object.keys(PSS.over);
    for (var j = 0; j < keys.length; j++) { if (keys[j].split('|')[0] === name) return PSS.over[keys[j]].url; }
    return null;
  };
  // 只用明确的完整身份取玩家覆盖；同物种仅用于属性推断。
  var creatureTypes = function (species, types) {
    if ((Array.isArray(types) && types.length) || (typeof types === 'string' && types.trim())) return types;
    var team = (viewState() && viewState().team) || [], dex = load(scopeK('dex'), []);
    var found = team.concat(dex).filter(function (b) { return (b.species || b.name) === species && b.types && b.types.length; });
    return found.length ? found[0].types : [];
  };
  var creatureChain = function (species, types, owned) {
    var art = window.P12CreatureArt;
    if (!art) return [];
    psSyncScope();
    var custom = owned ? PSS.over[psKeyOf(owned)] : null;
    return art.candidates(custom, sprGet(species), creatureTypes(species, types), window.P12_SILHOUETTE_ASSETS);
  };
  var creatureAttrs = function (species, types, owned) {
    return ' data-p12-creature="' + esc(JSON.stringify(creatureChain(species, types, owned))) + '" data-p12-letter="' + esc(String(species || '?').slice(0, 1)) + '"';
  };
  var creaturePaint = function (root) {
    if (!window.P12CreatureArt) return;
    (root || document).querySelectorAll('[data-p12-creature]').forEach(function (node) {
      var list;
      try { list = JSON.parse(node.getAttribute('data-p12-creature')); } catch (e) { return; }
      window.P12CreatureArt.bind(node, list, {letter:node.getAttribute('data-p12-letter'),contain:node.hasAttribute('data-p12-contain')});
    });
  };
  H.creatureArt = {chain:creatureChain,paint:creaturePaint,types:creatureTypes};
  var psRefresh = function (force) {
    psBoot();
    if (!psvc || !H.alive) return Promise.resolve();
    var saveId = psSyncScope(), revision = PSS.refresh;
    if (force) { revision = ++PSS.refresh; PSS.loaded = {}; }
    var loaded = PSS.loaded || (PSS.loaded = {});
    var team = (viewState() && viewState().team) || [];
    var active = {};
    team.forEach(function (b) { active[psKeyOf(b)] = true; });
    Object.keys(PSS.over).forEach(function (key) {
      if (active[key]) return;
      try { PSS.over[key].handle.dispose(); } catch (e) {}
      delete PSS.over[key]; delete loaded[key];
    });
    return Promise.all(team.map(function (b) {
      var id;
      try { id = psIdOf(b); } catch (e) { return null; }
      var key = psKeyOf(b);
      if (loaded[key]) return null;
      loaded[key] = true;
      return psvc.resolve(id, function (sp) { return sprGet(sp); }).then(function (found) {
        if (!H.alive || psSaveId() !== saveId || PSS.refresh !== revision) return;
        var old = PSS.over[key];
        if (found && found.kind === 'player' && found.record) {
          var h = PS.displayAsset(found.record, window.URL);
          if (old && old.url === h.url && old.mode === h.mode) { h.dispose(); return; }
          if (old) { try { old.handle.dispose(); } catch (e) {} }
          PSS.over[key] = { url: h.url, mode: h.mode, handle: h, key: found.record.source || 'player' };
          uiDirty = true;
        } else if (old) {
          try { old.handle.dispose(); } catch (e) {}
          delete PSS.over[key]; uiDirty = true;
        }
      }).catch(function (e) {
        if (PSS.refresh !== revision || psSaveId() !== saveId) return;
        delete loaded[key]; PSS.err = String(e && (e.code || e.message) || e);
      });
    }));
  };
  // 编辑会话：打开时把「存档+分支+这一只」整个绑进会话；生成/保存都用会话里的 identity，
  // 不再在保存时重新取当前 team[idx]，否则换目标会把 A 的结果写进 B（初审 P0）。
  var PSEDIT = { tab: 'link', gen: null, pick: 'transparent', busy: false, msg: '', urls: [], sess: null, prompt: null, saveDefault: false, sequence: 0, controller: null };
  var psUrlsDrop = function () { (PSEDIT.urls || []).forEach(function (u) { try { URL.revokeObjectURL(u); } catch (e) {} }); PSEDIT.urls = []; };
  var psCfgQueue = Promise.resolve();
  var psLoadCfg = function () {
    if (!psvc) return;
    var revision = PSS.cfgRevision;
    pstore.getSettings().then(function (raw) {
      if (!H.alive || PSS.cfgRevision !== revision) return;
      PSS.cfg = PS.settingsOf(raw); uiDirty = true;
      if (PSEDIT.sess && psSessLive(PSEDIT.sess.token)) pvEditRender();
    }).catch(function (e) { PSS.err = String(e && e.code || e); });
  };
  // 先更新内存快照，再串行持久化，避免连续输入用旧配置互相覆盖。
  var psSaveCfg = function (raw, repaint) {
    var next = PS.settingsOf(raw), revision = ++PSS.cfgRevision;
    PSS.cfg = next;
    psCfgQueue = psCfgQueue.catch(function () {}).then(function () { return pstore.setSettings(next); });
    return psCfgQueue.then(function () {
      if (!H.alive || PSS.cfgRevision !== revision) return;
      PSS.err = '';
      if (repaint) { render(); if (PSEDIT.sess && psSessLive(PSEDIT.sess.token)) pvEditRender(); }
    }).catch(function (e) {
      if (!H.alive || PSS.cfgRevision !== revision) return;
      PSS.err = '设置保存失败：' + String(e && (e.code || e.message) || e);
      uiDirty = true;
    });
  };
  var psEditBox = function (on) {
    if (!pv) return;
    if (on) {
      pv.setAttribute('data-mode', 'edit');
    } else {
      pv.removeAttribute('data-mode');
    }
  };
  var psEndEdit = function () {
    PSEDIT.sequence++;
    if (PSEDIT.controller) { try { PSEDIT.controller.abort(); } catch (e) {} }
    PSEDIT.controller = null; PSEDIT.sess = null; PSEDIT.gen = null; PSEDIT.busy = false;
    PSEDIT.prompt = null; PSEDIT.saveDefault = false; PSEDIT.msg = '';
    psUrlsDrop(); psEditBox(false);
  };
  var psSession = function (i) {
    var team = (viewState() && viewState().team) || [];
    var b = team[i];
    if (!b) return null;
    var id = psIdOf(b);
    return { index: i, nick: b.nick || b.species, species: b.species || b.nick, stage: b.stage || '', types: (b.types || []).slice(), id: id, key: psKeyOf(b), token: ++PSEDIT.sequence };
  };
  var psOpenEdit = function (i, tab) {
    psBoot(); psSyncScope(); psEndEdit();
    PSEDIT.tab = (tab === 'upload' || tab === 'gen') ? tab : 'link';
    PSEDIT.sess = psSession(i);
    if (!PSEDIT.sess) { pvClose(); return; }
    psEditBox(true); pvEditRender();
  };
  var psSessLive = function (token) {
    var sess = PSEDIT.sess;
    if (!H.alive || !sess || sess.token !== token) return false;
    if (sess.id.saveId !== psSaveId()) { pvClose(); return false; }
    var team = (viewState() && viewState().team) || [];
    if (!team.some(function (b) { return psKeyOf(b) === sess.key; })) { pvClose(); return false; }
    return true;
  };
  var pvEditRender = function () {
    var sess = PSEDIT.sess;
    if (!sess || !pv || !psSessLive(sess.token)) return;
    psUrlsDrop();
    var fallback = sprGet(sess.species);
    var cur = PSS.over[sess.key] || (fallback ? { url: fallback, mode: 'transparent' } : null);
    var cfg = PSS.cfg || PS.settingsOf(null);
    var av = PS.available(cfg, PS.readPlatform(window));
    var withDefault = !!sprGet(sess.species);
    var tabBtn = function (k, label) {
      return '<button type="button" data-ptab="' + k + '" style="border:1px solid #c9d6e8;border-radius:999px;padding:3px 12px;font:700 12px/1.6 inherit;cursor:pointer;background:' +
        (PSEDIT.tab === k ? '#1b2340;color:#fff' : '#fff;color:#1b2340') + '">' + label + '</button>';
    };
    var previewBox = '<div style="width:min(220px,100%);aspect-ratio:2/3;max-height:44vh;margin:0 auto;border:1.5px solid #cfe0f5;background:' +
      (cur && cur.mode === 'transparent' ? '#1b2340' : '#f2f7fe') + ';background-size:contain;background-repeat:no-repeat;background-position:center;' +
      (cur ? 'background-image:url(\'' + esc(cur.url) + '\')' : '') + '"></div>';
    var body = '';
    if (PSEDIT.tab === 'link') {
      body = '<div style="margin-top:8px"><input data-purl placeholder="https://…（透明底 PNG 直链）" style="width:100%;box-sizing:border-box;padding:6px 8px;border:1px solid #c9d6e8;border-radius:8px;font:inherit;font-size:12px"></div>' +
        '<div style="margin-top:4px;font-size:11px;color:#5a6480">建议用透明底 PNG，原样显示（不裁、不抠）。</div>' +
        '<div style="margin-top:8px"><button type="button" data-psave="link" style="border:1px solid #c9d6e8;background:#fff;border-radius:8px;padding:4px 12px;font:inherit;cursor:pointer">保存链接</button></div>';
    } else if (PSEDIT.tab === 'upload') {
      body = '<label data-pdrop="1" style="display:block;margin-top:8px;border:2px dashed #c9d6e8;border-radius:8px;padding:18px 12px;text-align:center;cursor:pointer;font-size:12px;color:#5a6480">' +
        '点击或拖入图片<input type="file" accept="image/png,image/jpeg,image/webp" data-pfile style="display:none"></label>' +
        '<div style="margin-top:6px;font-size:11px;color:#5a6480">PNG／JPEG／WebP，原样保存（最多 2MB），不压缩、不抠图。</div>';
    } else {
      var subj = esc([sess.species, sess.types.join('·'), sess.stage].filter(Boolean).join('　'));
      var info = PS.confirmationInfo(cfg);
      var reasonText = {
        MISSING_TOKEN: '去 RP-Hub 设置里填写生图令牌，或在手环·设置·立绘里填自定义接口。',
        INVALID_URL: '自定义接口地址不对：要 http(s)，NAI 模板还要含 {tag}{w}{h}。',
        INVALID_TEMPLATE: 'NAI 模板必须含 {tag}、{w}、{h} 三个占位符。',
        MISSING_REMOVAL_TOKEN: '外部抠图要填地址和密钥（手环·设置·立绘）。',
        INVALID_REMOVAL_URL: '外部抠图地址不对：要 http(s)。',
      }[av.reason] || ('配置不可用：' + av.reason);
      body = '<div style="margin-top:8px;font-size:12px;line-height:1.9">' + subj + '</div>' +
        '<div style="font-size:12px;color:#5a6480">将消耗 ' + info.generationRequests + ' 次生图（' + (cfg.provider === 'rphub' ? 'RP-Hub 自带接口' : (cfg.provider === 'nai' ? 'NAI 模板' : 'OpenAI 兼容')) + '）' +
        (info.backgroundRequests ? '，外部抠图另发 ' + info.backgroundRequests + ' 次' : '') + '</div>' +
        (av.enabled
          ? '<div style="margin-top:8px"><button type="button" data-pgen="1"' + (PSEDIT.busy ? ' disabled' : '') + ' style="border:2px solid #2b2623;background:#ffc93c;border-radius:8px;padding:6px 16px;font:900 13px/1.6 inherit;cursor:pointer">' + (PSEDIT.busy ? '生成中…' : '确认生成') + '</button></div>'
          : '<div style="margin-top:8px"><button type="button" disabled style="border:1px solid #c9d6e8;background:#eef1f6;color:#9aa4b8;border-radius:8px;padding:6px 16px;font:700 13px/1.6 inherit">确认生成</button></div>' +
            '<div style="margin-top:6px;font-size:11px;color:#b0213a">' + esc(reasonText) + '</div>');
      var pre = PSEDIT.prompt != null ? PSEDIT.prompt : PS.promptOf({ species: sess.species, types: sess.types, stage: sess.stage }, cfg);
      body += '<div style="margin-top:10px"><div style="font-size:11px;color:#5a6480">本次提示词（可改，只作用这一次；勾选才存默认）</div>' +
        '<textarea data-pprompt rows="3" style="width:100%;box-sizing:border-box;border:1px solid #c9d6e8;border-radius:6px;padding:6px 8px;font:12px/1.6 inherit">' + esc(pre) + '</textarea>' +
        '<label style="font-size:11px;display:block;margin-top:4px"><input type="checkbox" data-psavedef' + (PSEDIT.saveDefault ? ' checked' : '') + '> 存为我的默认</label></div>';
      if (PSEDIT.gen) {
        var mkPick = function (k, label, hint, blob, dark) {
          var url = blob ? URL.createObjectURL(blob) : null;
          if (url) PSEDIT.urls.push(url);
          return '<div data-ppick="' + k + '" style="cursor:pointer;width:150px">' +
            '<div style="width:150px;height:225px;box-sizing:border-box;border:3px solid ' + (PSEDIT.pick === k ? '#ff3b4e' : '#dbe6f3') + ';border-radius:6px;background:' +
            (dark ? '#2b2623' : '#f6f8fb') + ';background-size:contain;background-repeat:no-repeat;background-position:center;' +
            (url ? 'background-image:url(\'' + url + '\')' : '') + '"></div>' +
            '<div style="text-align:center;font-size:11px;margin-top:4px;font-weight:900">' + label + '</div>' +
            '<div style="text-align:center;font-size:10px;color:#8a7b6b">' + hint + '</div></div>';
        };
        body += '<div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;justify-content:center">' +
          (PSEDIT.gen.transparent ? mkPick('transparent', '透明版', '边缘可能不干净', PSEDIT.gen.transparent, true) : '') +
          (PSEDIT.gen.card ? mkPick('card', '卡框版', '保留白底，像一张卡', PSEDIT.gen.card, false) : '') + '</div>' +
          '<div style="margin-top:8px;text-align:center"><button type="button" data-psave="generated" style="border:2px solid #2b2623;background:#fff;border-radius:8px;padding:4px 14px;font:700 13px/1.6 inherit;cursor:pointer">保存选中的一张</button></div>';
      }
    }
    pv.innerHTML = '<button class="p12-pv-x" data-k="pv-close" aria-label="关闭">✕</button>' +
      '<div style="font-weight:900;font-size:15px">立绘 · ' + esc(sess.nick) + '</div>' +
      '<div style="color:#5a6480;font-size:11px;margin:2px 0 6px">' + esc([sess.species, sess.stage, sess.types.join('·')].filter(Boolean).join(' · ')) + '</div>' +
      previewBox +
      '<div style="display:flex;gap:6px;margin-top:10px;justify-content:center">' + tabBtn('link', '粘贴链接') + tabBtn('upload', '上传本地') + tabBtn('gen', '生成一张') + '</div>' +
      body +
      '<div style="display:flex;gap:6px;margin-top:12px">' +
      (withDefault ? '<button type="button" data-psave="restore" style="border:1px solid #c9d6e8;background:#fff;border-radius:8px;padding:4px 12px;font:inherit;cursor:pointer">恢复默认</button>' : '') +
      '</div>' +
      '<div data-pmsg style="color:#b0213a;font-size:11px;margin-top:6px">' + esc(PSEDIT.msg || '') + '</div>' +
      '<div style="margin-top:8px;color:#8a7b6b;font-size:11px">图片只存在本机浏览器；密钥不写进聊天、不导出。</div>';
    pvName = '';
    clsT(pv, 'on', true);
  };
  var psGenerate = function () {
    var sess = PSEDIT.sess;
    if (!sess || !psvc || PSEDIT.busy || !psSessLive(sess.token)) return;
    var token = sess.token;
    var promptBox = pv ? pv.querySelector('[data-pprompt]') : null;
    var edited = promptBox ? promptBox.value : PSEDIT.prompt;
    var saveDef = !!(pv && pv.querySelector('[data-psavedef]') && pv.querySelector('[data-psavedef]').checked);
    PSEDIT.prompt = edited; PSEDIT.saveDefault = saveDef;
    if (saveDef && edited != null && pstore) psSaveCfg(PS.applyPromptEdit(PSS.cfg || PS.settingsOf(null), edited, true), false);
    var controller = typeof AbortController === 'function' ? new AbortController() : null;
    PSEDIT.controller = controller; PSEDIT.busy = true; PSEDIT.msg = '生成中…'; pvEditRender();
    var requestCfg = PS.settingsOf(PSS.cfg);
    // 兼容玩家填裸域名：URL对象把空pathname还原为/，旧适配器追加路径会产生//v1。
    // 仅规范本次OpenAI请求副本，不改变玩家保存的地址，也不改后端模块内部。
    if (requestCfg.provider === 'openai') {
      try { var endpoint = new URL(requestCfg.url); if (endpoint.pathname === '/') { endpoint.pathname = '/v1'; requestCfg.url = endpoint.href; } } catch (e) {}
    }
    psvc.generate({
      identity: sess.id, confirmed: true, settings: requestCfg, platform: PS.readPlatform(window),
      signal: controller ? controller.signal : undefined,
      prompt: edited == null ? undefined : edited,
      subject: { species: sess.species, types: sess.types, stage: sess.stage },
    }).then(function (r) {
      if (!psSessLive(token)) return;                       // 迟到响应：目标已换，丢弃
      PSEDIT.controller = null; PSEDIT.busy = false; PSEDIT.gen = r; PSEDIT.pick = r.transparent ? 'transparent' : 'card';
      PSEDIT.msg = r.warning === 'BACKGROUND_FAILED' ? '去背景失败，已保留卡框版；没有重新生图。' : '';
      pvEditRender();
    }).catch(function (e) {
      if (!psSessLive(token)) return;
      PSEDIT.controller = null; PSEDIT.busy = false; PSEDIT.msg = '生成失败：' + String(e && (e.code || e.message) || e); pvEditRender();
    });
  };
  var psSaved = function (sess, result) {
    if (!H.alive || sess.id.saveId !== psSaveId()) return;
    if (psSessLive(sess.token)) PSEDIT.msg = result && result.warning === 'STORAGE_CLEANUP_RECOMMENDED' ? '已保存；本地图片超过 50 张，建议清理不用的立绘。' : '';
    // 已确认的保存可在关窗后完成，但不能重开窗口；缓存仍须刷新。
    return psRefresh(true).then(function () {
      if (!H.alive || sess.id.saveId !== psSaveId()) return;
      if (psSessLive(sess.token)) pvEditRender();
      render();
    });
  };
  var psSaveError = function (at, e) {
    if (!psSessLive(at)) return;
    PSEDIT.msg = '保存失败：' + String(e && (e.code || e.message) || e); pvEditRender();
  };
  var psSaveGenerated = function () {
    var sess = PSEDIT.sess;
    if (!sess || !psvc || !PSEDIT.gen || !psSessLive(sess.token)) return;
    var at = sess.token, id = sess.id;
    psvc.saveGenerated(id, PSEDIT.gen, PSEDIT.pick).then(function (result) {
      if (psSessLive(at)) PSEDIT.gen = null;
      return psSaved(sess, result);
    }).catch(function (e) { psSaveError(at, e); });
  };
  var psSaveLink = function (url) {
    var sess = PSEDIT.sess;
    if (!sess || !psvc || !psSessLive(sess.token)) return;
    var at = sess.token, id = sess.id;
    psvc.saveLink(id, url).then(function (r) { return psSaved(sess, r); }).catch(function (e) { psSaveError(at, e); });
  };
  var psRestore = function () {
    var sess = PSEDIT.sess;
    if (!sess || !psvc || !psSessLive(sess.token)) return;
    var at = sess.token, id = sess.id;
    psvc.restore(id).then(function (r) { return psSaved(sess, r); }).catch(function (e) { psSaveError(at, e); });
  };
  var psUpload = function (file) {
    var sess = PSEDIT.sess;
    if (!sess || !psvc || !file || !psSessLive(sess.token)) return;
    var at = sess.token, id = sess.id;
    psvc.saveUpload(id, file).then(function (r) { return psSaved(sess, r); }).catch(function (e) { psSaveError(at, e); });
  };
  H.portrait = {
    boot: psBoot, refresh: function () { return psRefresh(true); }, edit: psOpenEdit, restore: psRestore,
    state: function () {
      psSyncScope();
      return {
        ready: PSS.ready, err: PSS.err, tab: PSEDIT.tab, busy: PSEDIT.busy, msg: PSEDIT.msg,
        hasGen: !!PSEDIT.gen, pick: PSEDIT.pick, cfg: PSS.cfg || null,
        sess: PSEDIT.sess ? { nick: PSEDIT.sess.nick, key: PSEDIT.sess.key, token: PSEDIT.sess.token } : null,
        over: Object.keys(PSS.over).map(function (k) { return { key: k, url: PSS.over[k].url, mode: PSS.over[k].mode }; }),
      };
    },
    // 仅供离线测试：塞生成结果（绑定当前会话）
    __setGen: function (g, pick) {
      if (!PSEDIT.sess || !psSessLive(PSEDIT.sess.token)) return;
      PSEDIT.gen = g || null; PSEDIT.pick = pick || 'transparent'; pvEditRender();
    },
  };

  // 拖动：默认停靠右下角；拖过就改成 left/top，松手停在原地不吸边，按胶囊真实宽高夹紧边界。
  var place = function () {
    if (!dial || !dial.style) return;
    if (cfg.x == null || cfg.y == null) {
      dial.style.left = ''; dial.style.top = ''; dial.style.right = ''; dial.style.bottom = '';
      return;
    }
    var w = dial.offsetWidth || 124, h = dial.offsetHeight || 44;
    var x = Math.max(4, Math.min(cfg.x, window.innerWidth - w - 4));
    var y = Math.max(4, Math.min(cfg.y, window.innerHeight - h - 4));
    dial.style.left = x + 'px'; dial.style.top = y + 'px';
    dial.style.right = 'auto'; dial.style.bottom = 'auto';
  };

  // 钩子自己的记录：字比正文小、颜色淡，放在抽屉底部折叠区（母版 .p12-diag）
  var recHtml = function (r, full) {
    var W = 'color:#b0213a';
    if (r.err) return '<div style="' + W + '">' + esc(r.at) + ' 出错，本次已按原生发出：' + esc(r.err) + '</div>';
    if (!full) {
      return '<div style="padding:4px 0;border-top:1px dashed var(--line)">' + esc(r.at) + ' · 第 ' + r.turn + ' 轮　' +
        (r.skip ? '<span style="' + W + '">' + esc(r.skip) + '</span>' : '撤下 ' + r.nativeCount + ' 条 → 抽中 ' + r.pick.length + ' 条 / ' + r.injectedChars + ' 字') + '</div>';
    }
    var h = '<div style="margin:6px 0 2px"><b>本轮 · 第 ' + r.turn + ' 轮 · ' + esc(r.at) + '</b></div>';
    h += '<div style="margin-bottom:4px">' + esc(r.scene || '—') + '</div>';
    if (r.skip) return h + '<div style="' + W + '">' + esc(r.skip) + '</div>';
    h += '<div style="margin:4px 0">原生撤下 ' + r.nativeCount + ' 条 / ' + r.nativeChars + ' 字 · 候选 ' + r.candCount +
      '（冷却 ' + r.cooledCount + '）· 抽中 ' + r.pick.length + ' 条 / ' + r.injectedChars + ' 字</div>';
    r.pick.forEach(function (p) { h += '<div style="margin:3px 0;padding:5px 8px;background:var(--sky3);border-radius:8px"><b>' + esc(p.entry) + '</b>　' + esc(p.text.replace(/^(- |\d+\. )/, '')) + '</div>'; });
    h += '<details><summary>发给 AI 的原文</summary><pre style="white-space:pre-wrap;word-break:break-all;font-size:11px">' + esc(r.block) + '</pre></details>';
    return h;
  };

  // 属性色表（照录母版文末 21 种；单属性时 --p1/--p2 同一个色）
  var TYPEC = {
    '一般': '#a3a08c', '普通': '#a3a08c', '火': '#ff7a2f', '水': '#3d8bff', '草': '#4cbf5b', '电': '#f5c400',
    '冰': '#47c6e8', '格斗': '#e2493c', '毒': '#a35bd1', '地面': '#c9963f', '飞行': '#8aa7ff', '超能力': '#ff5d8f',
    '超能': '#ff5d8f', '虫': '#9cbf2b', '岩石': '#b8a15a', '幽灵': '#6b5bb8', '龙': '#5a4fe0', '恶': '#5a4a44',
    '钢': '#8fa3b8', '妖精': '#ff9ec7', '机械': '#5f7a8c', '侵蚀': '#7a8a3a', '噬血': '#b0213a'
  };
  var tyC = function (t) { return TYPEC[String(t || '').trim()] || '#a3a08c'; };

  // 六个页签（data-p 照母版：team / sch / bag / fav / msg / dex）
  // 阶段等级上限（数值表 v1：幼 15 / 成 35 / 成熟 60 / 完全体 85 / 究极体 100）
  var STAGE_CAP = { '幼年期': 15, '成长期': 35, '成熟期': 60, '完全体': 85, '究极体': 100 };
  var stageCap = function (stage) { return STAGE_CAP[String(stage || '')] || null; };
  // 一条两段式进度条：等级条（到上限卡瓶颈）+ 成长条
  var bar = function (pct, color, tall) {
    var w = Math.max(0, Math.min(100, +pct || 0));
    return '<div style="height:' + (tall ? 7 : 5) + 'px;border-radius:4px;background:#e8eef8;overflow:hidden">' +
      '<i style="display:block;height:100%;width:' + w + '%;background:' + color + ';border-radius:4px"></i></div>';
  };
  var lvLine = function (b) {
    var cap = stageCap(b.stage);
    var lv = b.level == null ? null : +b.level;
    var need = b.expNeed == null ? null : +b.expNeed;
    var exp = b.exp == null ? null : +b.exp;
    var pct = (need && exp != null) ? (exp / need * 100) : (b.bottleneck ? 100 : 0);
    var head = '等级 ' + (lv == null ? '未登记' : 'Lv ' + lv + (cap ? ' / ' + cap : '')) +
      (b.bottleneck ? '　<b style="color:#b0213a">瓶颈</b>' : '') +
      (need && exp != null ? '　<span style="color:var(--ink2);font-weight:400">经验 ' + exp + ' / ' + need + '</span>' : '');
    return '<div style="margin-top:6px;font-size:12px;font-weight:900">' + head + '</div>' + bar(pct, b.bottleneck ? '#b0213a' : '#5fb8ff', true);
  };
  var growthLine = function (b) {
    var g = b.growth == null ? null : +b.growth;
    return '<div style="margin-top:6px;font-size:12px;font-weight:900">成长 ' + (g == null ? '未登记' : g + ' / 100') +
      (g >= 100 ? '　<b style="color:#b0213a">可进化</b>' : '') + '</div>' + bar(g == null ? 0 : g, '#ffc93c');
  };
  var TABS = [['team', '队伍'], ['sch', '年历'], ['bag', '雷达'], ['fav', '好感'], ['msg', '讯息'], ['dex', '图鉴'], ['sys', '设置']];
  var tab = 'team', selBeast = 0, calY = 0, calM = 0, calSel = 0;
  var pad2 = function (n) { return ('0' + n).slice(-2); };
  var clampPct = function (v) { return Math.max(0, Math.min(100, isFinite(v) ? v : 0)); };

  var HUD_ICON_KEY = {
    '一般': 'type-normal', '普通': 'type-normal', '草': 'type-grass', '火': 'type-fire', '水': 'type-water',
    '电': 'type-electric', '冰': 'type-ice', '格斗': 'type-fighting', '毒': 'type-poison', '地面': 'type-ground',
    '飞行': 'type-flying', '超能力': 'type-psychic', '超能': 'type-psychic', '虫': 'type-bug', '岩石': 'type-rock',
    '幽灵': 'type-ghost', '龙': 'type-dragon', '恶': 'type-dark', '钢': 'type-steel', '妖精': 'type-fairy',
    '机械': 'type-machine', '侵蚀': 'type-erosion', '噬血': 'type-blood'
  };
  var hudTypeIcon = function (t, withBadge) {
    var clean = String(t || '').replace(/属性$/, '').trim();
    if (!clean) return '';
    var icons = window.P12_UI_ICONS || {};
    var u = icons[HUD_ICON_KEY[clean]];
    var img = u ? '<img src="' + esc(u) + '" alt="' + esc(clean) + '" title="' + esc(clean) + '">' : '';
    var pill = withBadge ? '<span class="p12-t" style="--tc:' + tyC(clean) + '">' + esc(clean) + '</span>' : '';
    if (!img && !withBadge) return '<span class="p12-t" style="--tc:' + tyC(clean) + '">' + esc(clean) + '</span>';
    return '<span class="v7-ti">' + img + pill + '</span>';
  };
  var segs12 = function (pct, cls) {
    var p = clampPct(pct), lit = p <= 0 ? 0 : Math.max(1, Math.round(p / 100 * 12)), s = '';
    for (var i = 0; i < 12; i++) s += '<i' + (i < lit ? ' class="on"' : '') + '></i>';
    return '<div class="v7-seg-row ' + cls + '">' + s + '</div>';
  };
  var pickRadarArt = function (placeTxt) {
    if (window.P12ProseV7 && typeof window.P12ProseV7.pickSceneArt === 'function') {
      return window.P12ProseV7.pickSceneArt(placeTxt);
    }
    var ter = window.P12_TERRAIN_ASSETS || {};
    return { url: ter.street || '', tag: 'AREA' };
  };

  // 在场／随行：账本存字符串，UI 桥存 {name, note}，两种都认
  var ppl = function (a) {
    return (a || []).map(function (x) {
      var nm = typeof x === 'string' ? x : (x && (x.name || x.nick)) || '';
      var nt = typeof x === 'string' ? null : (x && x.note) || null;
      nm = String(nm || '').replace(/\s+/g, ' ').trim();
      var m = nm.match(/^(.{1,12}?)\s*[（(]([^）)]{1,40})[）)]\s*$/);
      if (m && !nt) { nm = m[1].trim(); nt = m[2].trim(); }
      return { name: nm, note: nt ? String(nt).trim() : null };
    }).filter(function (x) { return x.name; });
  };
  var favors = function (a) {
    return (a || []).map(function (x) {
      if (typeof x === 'string') { var m = x.match(/^(\S+)\s+(.*)$/); return m ? { who: m[1], text: m[2] } : { who: x, text: '' }; }
      return { who: x.who || '', text: x.text || '' };
    }).filter(function (x) { return x.who || x.text; });
  };
  var empty = function (txt) { return '<div class="p12-empty">' + esc(txt) + '</div>'; };

  // 周边在场实景雷达横幅（保留 .p12-pa[data-pa] 点击弹出全身立绘预览）
  var presentHtml = function (s) {
    var pr = ppl(s.present), oth = ppl(s.others), all = pr.concat(oth);
    var rawPlace = (s.scene && s.scene.place) || '';
    var parts = String(rawPlace).split(/[·|｜]/).map(function (x) { return x.trim(); }).filter(Boolean);
    var shortPlace = parts.length >= 2 ? parts.slice(-2).join(' · ') : (rawPlace || '当前坐标未知');
    var picked = pickRadarArt(rawPlace);
    var bgSt = picked.url ? ' style="background-image:url(\'' + esc(picked.url) + '\')"' : '';
    var avs = all.map(function (x) {
      var a = avatarOf(x.name, x.note, 'head');
      return '<button type="button" class="p12-pa" data-pa="' + esc(x.name) + '" data-sub="' + esc(x.note || '') +
        '" title="' + esc(x.name + (x.note ? ' · ' + x.note : '')) + '" aria-label="查看 ' + esc(x.name) + ' 的立绘">' +
        avHtml(a, 'p12-pa-av', x.name) +
        '<span class="p12-pa-tx"><b class="p12-pa-nm">' + esc(x.name) + '</b>' +
        (x.note ? '<i class="p12-pa-note">' + esc(x.note) + '</i>' : '') + '</span></button>';
    }).join('');
    return '<div class="v7-radar-banner"' + bgSt + '>' +
      '<div class="v7-radar-txt"><small>● RADAR // 周边在场</small><b>' + esc(shortPlace) + '</b></div>' +
      (avs ? '<div class="v7-radar-avs">' + avs + '</div>' : '<span style="position:relative;z-index:2;font-size:11px;color:#cbd5e1">独自行动</span>') +
      '</div>';
  };

  var parseMoveInfo = function (m, fallbackType) {
    if (m && typeof m === 'object') {
      return {
        name: String(m['名'] || m.name || ''),
        type: String(m['属性'] || m.type || fallbackType || '').replace(/属性$/, ''),
        tier: String(m['档'] || m.tier || '')
      };
    }
    var raw = String(m || '').trim();
    var mm = raw.match(/^(.+?)[（(]([^）)]+)[）)]\s*$/);
    if (mm) {
      var segs = mm[2].split(/[·｜|\/]/).map(function (x) { return x.trim(); });
      return { name: mm[1].trim(), type: (segs[0] || fallbackType || '').replace(/属性$/, ''), tier: segs[1] || '' };
    }
    return { name: raw, type: String(fallbackType || '').replace(/属性$/, ''), tier: '' };
  };
  var moveLabel = function (m) {
    if (!m || typeof m !== 'object') return String(m || '');
    var name = m['名'] || m.name || '', type = m['属性'] || m.type, tier = m['档'] || m.tier;
    return name + (type && tier ? '（' + type + '·' + tier + '）' : '');
  };

  // ① 队伍页：6 格切角槽 + 冰蓝坐标网格全息主卡（含 ⇄ 朝向翻转校准 & ✎ 立绘） + 双列切角四招卡 + 实景雷达横幅
  var teamHtml = function () {
    var s = viewState();
    if (!s) return empty(PARSER ? '还没读到 AI 回复里的 <status>。装钩子后下一轮自动读。' : '正文解析器没装上，手环读不了 <status>。');
    var team = s.team || [];
    if (!team.length) return empty('尚未结契搭档异兽 · 去野外探索或完成登记吧') + presentHtml(s);
    if (selBeast >= team.length) selBeast = 0;

    // 顶部 6 格切角槽位条
    var strip = '<div class="v7-pod-strip">';
    for (var si = 0; si < 6; si++) {
      var sb = team[si];
      if (sb) {
        var shp = sb.hp == null ? 100 : clampPct(sb.hp);
        var sbChain = creatureChain(sb.species || sb.nick, sb.types, sb);
        var sbUrl = sbChain.length ? sbChain[0].url : '';
        strip += '<div class="v7-pod-slot' + (si === selBeast ? ' sel' : '') + '" data-beast="' + si + '" title="' + esc((sb.nick || sb.species) + ' HP ' + shp + '%') + '">' +
          '<div class="pod-spr"' + creatureAttrs(sb.species || sb.nick, sb.types, sb) + ' data-p12-contain=""' + (sbUrl ? ' style="background-image:url(\'' + esc(sbUrl) + '\')"' : '') + '></div>' +
          '<div class="pod-hp' + (shp < 30 ? ' low' : '') + '"><i style="width:' + shp + '%"></i></div></div>';
      } else {
        strip += '<div class="v7-pod-slot empty">+</div>';
      }
    }
    strip += '</div>';

    var b = team[selBeast] || {};
    var ts = (b.types || []).filter(Boolean);
    var spName = b.species || b.nick || '';
    var bChain = creatureChain(spName, b.types, b);
    var bInitUrl = bChain.length ? bChain[0].url : '';
    var isFlipped = typeof batFlipOf === 'function' ? batFlipOf(spName) : false;
    var hpVal = b.hp == null ? 100 : clampPct(b.hp);
    var cap = stageCap(b.stage);
    var expPct = (b.expNeed && b.exp != null) ? clampPct(b.exp / b.expNeed * 100) : (b.bottleneck ? 100 : 0);
    var grwVal = b.growth == null ? 0 : clampPct(+b.growth);

    var hero = '<div class="v7-beast-hero">' +
      (b.level != null ? '<div class="v7-lv-wm">LV.' + esc(b.level) + '</div>' : '') +
      '<div class="v7-hero-tools">' +
        (spName ? '<button type="button" class="v7-tool-btn' + (isFlipped ? ' on' : '') + '" data-pflip="' + esc(spName) + '" title="切换该物种立绘左右朝向（同步对战舞台）">⇄ 朝向</button>' : '') +
        '<button type="button" class="v7-tool-btn p12-pedit" data-pedit="' + selBeast + '" aria-label="设置' + esc(b.nick || spName || '异兽') + '的立绘">✎ 立绘</button>' +
      '</div>' +
      '<div class="v7-hero-grid">' +
        '<div>' +
          '<div class="v7-b-tags">' +
            ts.map(function (t) { return hudTypeIcon(t, false); }).join('') +
            (b.bondTier || b.bond != null ? '<span class="v7-bond-pill">♥ ' + esc(b.bondTier || ('羁绊 ' + b.bond)) + '</span>' : '') +
          '</div>' +
          '<div class="v7-b-nm">' + esc(b.nick || spName || '未名') + '</div>' +
          '<div class="v7-b-sub">' + esc([b.stage, spName !== b.nick ? spName : null, b.where].filter(Boolean).join(' · ') || '阶段未登记') + '</div>' +
          '<div class="v7-seg-lbl"><span>HP 体力</span><b>' + (b.hp == null ? '—' : hpVal + '%') + '</b></div>' +
          segs12(hpVal, 'hp' + (hpVal < 30 ? ' low' : '')) +
          '<div class="v7-seg-lbl"><span>EXP 经验' + (b.level != null ? ' · Lv ' + b.level + (cap ? '/' + cap : '') : '') + '</span><b' + (b.bottleneck ? ' style="color:var(--hot)"' : '') + '>' +
            (b.bottleneck ? '瓶颈突破待定' : (b.expNeed && b.exp != null ? b.exp + '/' + b.expNeed : '—')) + '</b></div>' +
          segs12(expPct, 'exp') +
          (b.growth != null ? '<div class="v7-seg-lbl"><span>GROWTH 成长</span><b>' + b.growth + '/100' + (+b.growth >= 100 ? ' 可进化!' : '') + '</b></div>' + segs12(grwVal, 'grw') : '') +
          '<div class="v7-b-meta">' +
            (b.fatigue != null ? '<span>疲劳 ' + b.fatigue + '</span>' : '') +
            (b.training ? '<span>训练·' + esc(b.training) + '</span>' : '') +
            (b.injury && b.injury !== '无' ? '<span style="color:var(--hot);border-color:#fca5a5">伤势·' + esc(b.injury) + '</span>' : '') +
          '</div>' +
        '</div>' +
        '<div class="v7-b-stage">' +
          '<div class="v7-b-disc"></div>' +
          '<div class="v7-b-art' + (isFlipped ? ' is-flipped' : '') + '"' + creatureAttrs(spName, b.types, b) + ' data-p12-contain=""' + (bInitUrl ? ' style="background-image:url(\'' + esc(bInitUrl) + '\')"' : '') + '></div>' +
        '</div>' +
      '</div>' +
    '</div>';

    var mvs = (b.moves || []).map(function (m) {
      var mi = parseMoveInfo(m, ts[0]);
      var mc = tyC(mi.type || ts[0]);
      return '<div class="v7-mv-card" style="--mc:' + mc + '">' +
        hudTypeIcon(mi.type || ts[0], false) +
        '<div style="min-width:0;flex:1"><b>' + esc(mi.name || '未名招式') + '</b>' +
        '<small>' + esc([mi.type ? mi.type + '属性' : null, mi.tier ? mi.tier + '档' : null].filter(Boolean).join(' · ') || '常规招式') + '</small></div></div>';
    }).join('');
    var mvBlock = mvs ? '<div class="v7-move-grid">' + mvs + '</div>' : '';
    var storeBlock = (b.storage && b.storage.length) ? '<div class="v7-store-line"><b>招式仓库：</b>' + esc(b.storage.map(moveLabel).join(' ／ ')) + '</div>' : '';

    return strip + hero + mvBlock + storeBlock + presentHtml(s);
  };

  // ② 年历日程页：机能深蓝标题头 + 7 列交互日历 + 橙标约定 & 青标世界年历
  var calGrid = function () {
    var now = sceneDate();
    var evs = calEvents();
    var y = calY || (now ? now.y : 2000), m = calM || (now ? now.m : (evs[0] ? evs[0].sm : 1));
    var n = daysIn(y, m);
    var monthEvs = evs.filter(function (e) {
      for (var d = 1; d <= n; d++) { if (inRange(e, m, d)) return true; }
      return false;
    });
    var wins = windowDays({});
    var first = new Date(Date.UTC(y, m - 1, 1)).getUTCDay(), cells = '', i, d;
    for (i = 0; i < first; i++) cells += '<span></span>';
    for (d = 1; d <= n; d++) {
      var es = monthEvs.filter(function (e) { return inRange(e, m, d); });
      var wd = wins.filter(function (x) { return x.m === m && x.d === d; })[0];
      var isToday = !!(now && y === now.y && m === now.m && d === now.d);
      var isSel = calSel === d;
      var cls = 'dy' + (isToday ? ' today' : '') + (isSel ? ' sel' : '') + (wd ? ' win' : '');
      var stBtn = 'border:1.5px solid ' + (isSel ? 'var(--sky)' : (isToday ? 'var(--ink)' : '#e2ecf9')) + ';' +
        'background:' + (isToday ? 'var(--ink)' : (isSel ? '#e0f2fe' : (wd ? '#fff3e6' : '#fff'))) + ';' +
        'color:' + (isToday ? '#fff' : (wd ? 'var(--sun)' : 'var(--ink)')) + ';' +
        'font:900 12px/1 "Bahnschrift",sans-serif;cursor:pointer;padding:0;height:33px;position:relative';
      cells += '<button type="button" class="' + cls + '" data-day="' + d + '" style="' + stBtn + '">' + d +
        (es.length ? '<i class="dot" style="position:absolute;left:50%;bottom:3px;width:5px;height:3px;margin-left:-2.5px;background:' + KINDS[es[0].kind].c + '"></i>' : '') +
        (wd ? '<i class="wdot" style="position:absolute;left:3px;right:3px;bottom:0;height:2.5px;background:var(--sun)"></i>' : '') +
        '</button>';
    }
    var head = '<div class="v7-sec-hd"><span>📅 年历 CAL · ' + (now ? y + '-' + pad2(m) : pad2(m) + ' 月') + '</span>' +
      '<span style="display:inline-flex;gap:4px">' +
      [['0', '今'], ['-1', '‹'], ['1', '›']].map(function (x) {
        return '<button type="button" data-cm="' + x[0] + '" style="width:24px;height:22px;padding:0;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.12);color:#fff;font:900 11px/1 sans-serif;cursor:pointer">' + x[1] + '</button>';
      }).join('') + '</span></div>';
    var wk = ['日', '一', '二', '三', '四', '五', '六'].map(function (x) { return '<span>' + x + '</span>'; }).join('');
    var list = calSel ? monthEvs.filter(function (e) { return inRange(e, m, calSel); }) : monthEvs;
    var h = head +
      '<div style="background:#fff;border:1.5px solid var(--line);padding:9px;margin-bottom:9px">' +
        '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;font:900 10.5px/1.4 inherit;color:var(--ink2);text-align:center;margin-bottom:4px">' + wk + '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px">' + cells + '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;font:800 10px/1.2 inherit;color:var(--ink2)">' +
        [['赛事', KINDS.match.c], ['生态', KINDS.eco.c], ['节日', KINDS.fest.c], ['约定', KINDS.appt.c], ['窗口日', 'var(--sun)']].map(function (x) {
          return '<span><i style="display:inline-block;width:7px;height:7px;margin-right:3px;background:' + x[1] + '"></i>' + x[0] + '</span>';
        }).join('') + '</div>' +
      '</div>';
    h += '<div style="margin:6px 0;font:900 11px/1.2 inherit;letter-spacing:.08em;color:var(--ink2)">▸ ' + (calSel ? m + ' 月 ' + calSel + ' 日' : m + ' 月全部事项') + '</div>';
    if (!list.length) return h + empty('该时段暂无登记事项');
    list.forEach(function (e) {
      var dd = e.all ? '全年' : (e.sm === e.em && e.sd === e.ed ? pad2(e.sm) + '-' + pad2(e.sd) : pad2(e.sm) + '-' + pad2(e.sd) + '~' + pad2(e.em) + '-' + pad2(e.ed));
      var hit = e.win && !e.all ? wins.filter(function (x) { return x.title === e.title; })[0] : null;
      h += '<div class="p12-row"><span class="k">' + dd + '</span><span class="v">' + esc(e.title) +
        (e.place || e.time ? '　<i style="font-style:normal;color:var(--ink2);font-weight:600">' + esc([e.place, e.time].filter(Boolean).join(' · ')) + '</i>' : '') +
        (hit ? '<i style="font-style:normal;color:var(--sun)">　定在 ' + pad2(hit.m) + '-' + pad2(hit.d) + (hit.by === 'AI' ? '（日程已定）' : '（钩子掷）') + '</i>' : '') +
        '</span><span style="font:900 10.5px/1 inherit;color:' + KINDS[e.kind].c + '">' + KINDS[e.kind].n + '</span></div>';
    });
    return h;
  };
  var schHtml = function () {
    var s = viewState(), sch = (s && s.schedule) || [];
    var h = calGrid();
    h += '<div style="margin:10px 0 6px;font:900 11px/1.2 inherit;letter-spacing:.08em;color:var(--sun)">▸ 当前约定日程（' + sch.length + '）</div>';
    if (!sch.length) return h + empty('状态栏暂无【日程】约定');
    sch.forEach(function (x) {
      var k = [x.date, x.time].filter(Boolean).join(' ');
      h += '<div class="p12-row sch"><span class="k">' + esc(k || '待定') + '</span><span class="v">' +
        esc([x.place, x.what].filter(Boolean).join(' · ') || x.raw || '') + '</span></div>';
    });
    return h;
  };

  // ③ 雷达地图 & 随身背包页
  var bagDotColor = function (nm) {
    var s = String(nm || '');
    if (/高级|大师|特级/.test(s) && /球/.test(s)) return '#2563eb';
    if (/球/.test(s)) return '#ef4444';
    if (/喷雾|药|绷带|回复|解毒/.test(s)) return '#f59e0b';
    if (/核|石|晶|徽章|证/.test(s)) return '#8b5cf6';
    return '#10b981';
  };
  var bagHtml = function () {
    var s = viewState(), bag = (s && s.bag) || [];
    var rawPlace = (s && s.scene && s.scene.place) || '';
    var parts = String(rawPlace).split(/[·|｜]/).map(function (x) { return x.trim(); }).filter(Boolean);
    var cityTag = parts.slice(1, 3).join('·') || parts[0] || '未知区域';
    var spot = parts[parts.length - 1] || '当前位置';
    var slotTag = [s && s.scene && s.scene.slot, s && s.scene && s.scene.type].filter(Boolean).join(' · ') || '实时雷达';
    var picked = pickRadarArt(rawPlace);
    var mapHtml = '<div class="v7-sec-hd"><span>🧭 区域雷达 &amp; 随身背包</span><em>' + esc(cityTag) + '</em></div>' +
      '<div class="v7-map-box"' + (picked.url ? ' style="background-image:url(\'' + esc(picked.url) + '\')"' : '') + '>' +
        '<div class="v7-map-pin">📍 ' + esc(spot) + '（当前）</div>' +
        '<div class="v7-map-sub">' + esc(slotTag) + '</div>' +
      '</div>' +
      '<div style="margin:6px 0;font:900 11px/1.2 inherit;color:var(--ink2)">随身背包道具格（' + bag.length + ' 项）</div>';
    if (!bag.length) return mapHtml + empty(s ? '随身背包暂无物品' : '尚未读取到状态栏');
    return mapHtml + '<div class="v7-bag-grid">' + bag.map(function (x) {
      var nm = x.name || '';
      return '<div class="v7-bag-item" title="' + esc(nm) + '">' +
        '<span class="v7-bag-dot" style="background:' + bagDotColor(nm) + '"></span>' +
        '<span class="nm">' + esc(nm) + '</span>' +
        (x.qty == null ? '' : '<span class="qt">×' + x.qty + '</span>') +
      '</div>';
    }).join('') + '</div>';
  };

  // ④ 人物好感三轴页（解析友情/欲望/仇恨分段条）
  var parseFavorAxes = function (txt) {
    var s = String(txt || ''), axes = [];
    [['友情', '#1da1f2'], ['欲望', '#ec4899'], ['仇恨', '#ef4444']].forEach(function (cfg) {
      var re = new RegExp(cfg[0] + '\\s*([+-]?\\d+)(?:\\s*[（(]([^）)]+)[）)])?');
      var m = s.match(re);
      if (m) axes.push({ label: cfg[0], val: +m[1], tier: m[2] || '', color: cfg[1] });
    });
    return axes;
  };
  var favorHtml = function () {
    var s = viewState();
    var fs = favors(s && s.favor);
    var h = '<div class="v7-sec-hd"><span>♥ 羁绊人脉 · 好感档案</span><em>' + fs.length + ' 人</em></div>';
    if (!fs.length) return h + empty('状态栏尚未记录【好感】人物');
    return h + fs.map(function (x) {
      var axes = parseFavorAxes(x.text);
      var mainTier = (axes[0] && (axes[0].tier ? axes[0].tier + ' ' + axes[0].val : axes[0].val)) || '';
      var bars = axes.length ? axes.map(function (ax) {
        var lit = ax.val <= 0 ? 0 : Math.max(1, Math.min(6, Math.round(ax.val / 100 * 6)));
        var segs = '';
        for (var k = 0; k < 6; k++) segs += '<i' + (k < lit ? ' class="on"' : '') + '></i>';
        return '<div class="v7-axis-row"><span style="min-width:26px">' + ax.label + '</span>' +
          '<div class="v7-axis-segs" style="--ac:' + ax.color + '">' + segs + '</div>' +
          '<span>' + ax.val + (ax.tier ? '·' + esc(ax.tier) : '') + '</span></div>';
      }).join('') : '<div style="font-size:12px;color:var(--ink2);margin-top:3px">' + esc(x.text) + '</div>';
      return '<div class="p12-row p12-c-row" data-pa="' + esc(x.who) + '" data-sub="' + esc(x.text) + '">' +
        avHtml(avatarOf(x.who, x.text, 'head'), 'p12-c-av', x.who) +
        '<div class="v7-fav-body"><div class="v7-fav-top"><b>' + esc(x.who) + '</b><span class="v7-fav-tier">' + esc(mainTier) + '</span></div>' +
        bars + '</div></div>';
    }).join('');
  };

  // ⑤ 终端讯息页
  var msgHtml = function () {
    var ms = (viewState() && viewState().messages) || [];
    var h = '<div class="v7-sec-hd"><span>💬 终端联络 · 讯息收件箱</span><em>' + (ms.length ? '未读 ' + ms.length : '0') + '</em></div>';
    if (!ms.length) return h + empty('目前没有收到新讯息');
    return h + ms.map(function (x) {
      var who = x.from || '未知发信人';
      return '<div class="p12-row p12-c-row" style="border-left-color:var(--sun)" data-pa="' + esc(who) + '" data-sub="' + esc(x.text || '') + '">' +
        avHtml(avatarOf(who, null, 'head'), 'p12-c-av', who) +
        '<div style="flex:1;min-width:0"><div style="font:900 12px/1.2 inherit;color:var(--sun)">✉ ' + esc(who) + '</div>' +
        '<div style="font:700 13px/1.5 inherit;color:var(--ink);margin-top:3px">' + esc(x.text || '') + '</div></div></div>';
    }).join('');
  };

  // ⑥ 图鉴与履历页（保留 .p12-t 属性文本供自动化断言识别，同时配齐真属性图标与小立绘）
  var dexHtml = function () {
    var dex = load(scopeK('dex'), []), s = viewState();
    var n = (s && s.dexCount != null) ? s.dexCount : dex.length;
    var rec = (s && s.record) || {};
    var moveCnt = (s && s.moveDex != null) ? s.moveDex : (rec['招式图鉴'] || '—');
    var h = '<div class="v7-sec-hd"><span>📘 异兽图鉴 &amp; 驯兽履历</span><em>已收录 ' + n + '</em></div>' +
      '<div class="v7-rec-grid">' +
        '<div class="v7-rec-cell"><small>物种图鉴</small><b>' + esc(n) + '</b></div>' +
        '<div class="v7-rec-cell"><small>招式图鉴</small><b>' + esc(moveCnt) + '</b></div>' +
        '<div class="v7-rec-cell"><small>城市足迹</small><b>' + esc(rec['足迹'] || '—') + '</b></div>' +
        '<div class="v7-rec-cell"><small>正规战绩</small><b>' + esc(String(rec['战绩'] || '—').replace(/^正规\s*/, '')) + '</b></div>' +
      '</div>';
    if (!dex.length) return h + empty('本局尚未触发 <图鉴> 新发现卡' + (n ? '（状态栏累计记录 ' + n + ' 种）' : ''));
    dex.slice().reverse().forEach(function (c) {
      var cChain = creatureChain(c.name, c.types);
      var cUrl = cChain.length ? cChain[0].url : '';
      h += '<div class="v7-dex-row">' +
        '<div class="v7-dex-thumb"' + creatureAttrs(c.name, c.types) + ' data-p12-contain=""' + (cUrl ? ' style="background-image:url(\'' + esc(cUrl) + '\')"' : '') + '></div>' +
        '<div style="flex:1;min-width:0">' +
          '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">' +
            '<b style="font-size:14.5px">' + esc(c.name) + '</b>' +
            (c.stage ? '<span style="font:800 10.5px/1.2 inherit;color:var(--sky);background:#eef8ff;padding:1px 6px">' + esc(c.stage) + '</span>' : '') +
            (c.types || []).map(function (t) { return hudTypeIcon(t, true); }).join('') +
          '</div>' +
          (c.look || c.place ? '<div style="font-size:11.5px;color:var(--ink2);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' +
            esc([c.look, c.place ? '发现于 ' + c.place : null].filter(Boolean).join(' ｜ ')) + '</div>' : '') +
        '</div></div>';
    });
    return h + '<div style="text-align:center;font:800 11px/1.4 inherit;color:var(--ink2);padding-top:4px">共收录 ' + n + ' 种异兽档案</div>';
  };

  // 诊断对账详情（嵌在设置页折叠面板中）
  var diagHtml = function () {
    var s = viewState(), h = '';
    if (!s) return '<div>本轮暂无可对账的状态栏数据。</div>';
    if (s.stale) h += '<div style="color:#b0213a">本条 &lt;status&gt; 未读出，当前暂留上一轮快照。</div>';
    if (s.dexMismatch) h += '<div style="color:#b0213a">' + esc(s.dexMismatch) + '</div>';
    if (s.roll) {
      var rl = s.roll;
      h += '<div style="margin:6px 0"><b>' + (rl.kind === 'fate' ? '命运骰' : '盲盒稀有度') + ' · ' + rl.source + '掷</b>　' +
        esc(rl.kind === 'fate' ? (rl.picks.length ? rl.picks.join('、') : '平稳') : rl.tier) + '</div>';
      if (rl.check) h += '<div style="color:' + (rl.check.ok ? 'var(--ink2)' : '#b0213a') + '">' +
        esc(rl.check.ok ? ('正文对得上' + (rl.check.got ? '：' + rl.check.got : '')) : rl.check.note) + '</div>';
    }
    var acc = account();
    if (!acc.first && (acc.items.length || acc.warns.length)) {
      h += '<div style="margin:6px 0"><b>账本变动 · 第 ' + acc.from + ' → ' + acc.to + ' 轮</b></div>';
      acc.items.forEach(function (x) { h += '<div>' + esc(x) + '</div>'; });
      acc.warns.forEach(function (x) { h += '<div style="color:#b0213a">' + esc(x) + '</div>'; });
    }
    var notes = [].concat(s.missing || [], s.warnings || []);
    if (notes.length) h += '<details><summary>账本提醒 ' + notes.length + ' 条</summary><div style="word-break:break-all">' + esc(notes.join('；')) + '</div></details>';
    var last = H.log[0];
    if (last) h += '<div style="margin:8px 0 2px"><b>钩子 · 传闻抽签</b></div>' + recHtml(last, false);
    if (last && last.pools) {
      [['event', '事件'], ['enc', '野外遭遇']].forEach(function (k) {
        var p = last.pools[k[0]];
        h += '<div>' + k[1] + '：' + (p.injectedChars
          ? ('撤下 ' + p.nativeCount + ' 个池 → 抽中 ' + p.pick.length + ' 条 / ' + p.injectedChars + ' 字')
          : esc(p.skip || '未动')) + '</div>';
      });
      var w = last.wild;
      if (w) h += '<div>野外名录：' + (w.injectedChars
        ? ('抽中 ' + w.pick.map(function (x) { return x.name; }).join('、') + '（' + (w.season || '') + '·' + (w.slot || '') + '·' + (w.terrain || '无地貌偏好') + '）')
        : esc(w.skip || '未动')) + '</div>';
    }
    if (last && last.calWin && last.calWin.length) {
      h += '<div style="margin:8px 0 2px"><b>年历 · 窗口</b></div>';
      last.calWin.forEach(function (x) {
        h += '<div>' + KINDS[x.kind].n + (x.by === 'AI' ? ' · 已写进日程' : ' · 钩子掷') + '　' +
          esc(x.title + '｜' + x.place + '｜' + pad2(x.m) + '-' + pad2(x.d) +
            (x.days > 0 ? '（还有 ' + x.days + ' 天）' : x.days < 0 ? '（已过 ' + (-x.days) + ' 天）' : '（就是今天）')) + '</div>';
      });
    }
    if (last && last.time && !last.time.skip) {
      var it = (last.time.people || []).map(function (x) { return x.name + ' 隔 ' + x.days + ' 天'; });
      if (last.time.back && last.time.back.days >= 1) it.push('回到 ' + last.time.back.place + ' 隔 ' + last.time.back.days + ' 天');
      if (it.length) h += '<div style="margin:6px 0"><b>时间差</b>　' + esc(it.join('；')) + '</div>';
    }
    if (last && last.meetInjected) {
      h += '<div style="margin:6px 0"><b>首次登场</b>　' + esc('补详档 ' + last.meetInjected + ' 条 / ' + last.meetChars + ' 字：' + (last.meetWhy || []).join('、')) + '</div>';
    }
    if (last && last.budget) {
      var b = last.budget;
      h += '<div style="margin:6px 0"><b>注入统计</b>　' + esc('原生 ' + b.native.entries + ' 条 / ' + b.native.chars + ' 字 · 钩子 +' + b.added +
        ' 字 · 合计 ' + b.total + ' 字（非常驻 ' + b.nonConst + ' 条）') + '</div>';
    }
    return h;
  };

  // ⑦ 独立终端设置页 (SYS)：玩家全身共斗立绘 + 异兽对战朝向翻转 + 自定义生图源 + 钩子智能抽签开关
  var sysHtml = function () {
    var s = viewState() || {};
    var team = s.team || [];
    var customTamerFull = load('tamerFull:' + scope(), '');
    var h = '<div class="v7-sec-hd"><span>⚙ 终端设置 SYS</span><em>' + esc(VER) + '</em></div>';

    // 卡片 1：立绘朝向校准与驯兽师全身共斗形象
    h += '<div class="v7-sys-card"><div class="v7-sys-ttl"><span>👊 战斗舞台立绘与共斗形象</span></div>';
    h += '<div style="font-size:11px;color:var(--ink2);margin-bottom:5px">非正规局（野外/地下）点「共斗」时我方全身立绘直链（留空则按姓名匹配内置全身图）：</div>' +
      '<div style="display:flex;gap:5px;margin-bottom:7px">' +
        '<input data-tamer-url value="' + esc(customTamerFull || '') + '" placeholder="https://… 透明底全身人物 PNG/WebP" style="flex:1;min-width:0;border:1.5px solid var(--line);padding:4px 7px;font:11.5px/1.3 inherit">' +
        '<button type="button" class="v7-pill-btn sun" data-tamer-act="save">保存</button>' +
        (customTamerFull ? '<button type="button" class="v7-pill-btn" data-tamer-act="clear">清空</button>' : '') +
      '</div>';
    if (team.length) {
      team.forEach(function (b) {
        var sp = b.species || b.nick || '';
        if (!sp) return;
        var fl = typeof batFlipOf === 'function' ? batFlipOf(sp) : false;
        h += '<div class="v7-sys-row"><span>' + esc(b.nick || sp) + '（' + esc(sp) + '）对战朝向</span>' +
          '<button type="button" class="v7-pill-btn' + (fl ? ' sun' : '') + '" data-pflip="' + esc(sp) + '">⇄ ' + (fl ? '已手动翻转' : '左右翻转校准') + '</button></div>';
      });
    }
    h += '</div>';

    // 卡片 2：自定义异兽生图源配置（完整保留 data-pset / data-psrest 契约）
    var pcfg = PSS.cfg || (window.P12PortraitSource ? window.P12PortraitSource.settingsOf(null) : null);
    if (pcfg) {
      var sel = function (k, opts, cur) {
        return '<select data-pset="' + k + '" style="border:1.5px solid var(--ink);background:#fff;padding:2px 6px;font:800 11px/1.4 inherit">' +
          opts.map(function (o) { return '<option value="' + o[0] + '"' + (cur === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select>';
      };
      var inp = function (k, val, ph, type) {
        return '<input data-pset="' + k + '"' + (type ? ' type="' + type + '"' : '') + ' value="' + esc(val || '') + '" placeholder="' + esc(ph || '') +
          '" style="width:100%;margin-top:3px;border:1.5px solid var(--line);padding:4px 7px;font:11px/1.3 inherit">';
      };
      var area = function (k, val, label) {
        return '<div style="margin-top:6px"><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--ink2)"><span>' + label + '</span>' +
          '<button type="button" data-psrest="' + k + '" style="border:1px solid var(--line);background:#fff;padding:0 6px;font:700 10px/1.4 inherit;cursor:pointer">恢复默认</button></div>' +
          '<textarea data-pset="' + k + '" rows="2" style="width:100%;margin-top:2px;border:1.5px solid var(--line);padding:4px 6px;font:11px/1.45 inherit">' + esc(val || '') + '</textarea></div>';
      };
      var custom = pcfg.provider !== 'rphub';
      h += '<div class="v7-sys-card"><div class="v7-sys-ttl"><span>🎨 自定义异兽生图源</span><small style="color:var(--ink2);font-weight:700">' +
        (PSS.ready ? '已就绪' : (PS ? '待命' : '未加载')) + (PSS.err ? ' · ' + esc(PSS.err) : '') + '</small></div>' +
        '<div class="v7-sys-row"><span>生图接口</span>' + sel('provider', [['rphub', 'RP-Hub 自带'], ['nai', '自定义·NAI 模板'], ['openai', '自定义·OpenAI 兼容']], pcfg.provider) + '</div>' +
        '<div class="v7-sys-row"><span>去背处理</span>' + sel('background', [['local', '本地去白底'], ['external', '外部抠图接口'], ['none', '保留卡框白底']], pcfg.background) + '</div>' +
        '<div class="v7-sys-row"><span>画幅比例</span>' + sel('size', [['832x1216', '832×1216 竖版'], ['1024x1024', '1024×1024 方版'], ['1216x832', '1216×832 横版']], pcfg.size) + '</div>' +
        (custom ? '<div style="margin-top:5px;font-size:11px">接口地址' + inp('url', pcfg.url, 'https://…（NAI 需含 {tag}{w}{h}）') + '</div>' +
          '<div style="margin-top:4px;font-size:11px">接口密钥（仅存本机）' + inp('key', '', '仅存本机浏览器', 'password') + '</div>' : '') +
        (pcfg.background === 'external' ? '<div style="margin-top:5px;font-size:11px">抠图地址' + inp('removalUrl', pcfg.removalUrl, 'https://…（remove.bg 兼容）') + '</div>' +
          '<div style="margin-top:4px;font-size:11px">抠图密钥（仅存本机）' + inp('removalKey', '', '仅存本机浏览器', 'password') + '</div>' : '') +
        area('artists', pcfg.artists, '默认画师串') +
        area('positive', pcfg.positive, '正面质量词') +
        area('negative', pcfg.negative, '负面排除词') +
        '<div style="margin-top:6px;text-align:right"><button type="button" data-pset="restore" class="v7-pill-btn">全部恢复默认生图配置</button></div>' +
      '</div>';
    }

    // 卡片 3：钩子世界书智能抽签与本轮对账诊断
    h += '<div class="v7-sys-card"><div class="v7-sys-ttl"><span>⚡ 钩子世界书智能抽签</span>' +
      '<button type="button" data-k="toggle" class="v7-pill-btn' + (cfg.on ? ' on' : '') + '">' + (cfg.on ? '运行中 ON' : '已暂停（点击恢复）') + '</button></div>' +
      '<div class="v7-sys-row"><span>每轮传闻/事件抽签数</span><span><input data-k="n" type="number" min="0" max="15" value="' + cfg.n + '" style="width:48px;border:1.5px solid var(--line);padding:2px 4px;font:800 11.5px/1 inherit"> 条</span></div>' +
      '<div class="v7-sys-row"><span>池子防重冷却轮数</span><span><input data-k="cool" type="number" min="0" max="50" value="' + cfg.cool + '" style="width:48px;border:1.5px solid var(--line);padding:2px 4px;font:800 11.5px/1 inherit"> 轮</span></div>' +
      '<details class="p12-diag"><summary>▸ 展开本轮钩子注入与账本诊断（' + (UIS.ready ? 'UI 桥实时' : '正文账本') + '）</summary>' +
        '<div style="margin-top:6px;line-height:1.65">' + diagHtml() + '</div>' +
        (H.log.length > 1 ? '<details style="margin-top:6px"><summary>更早 ' + (H.log.length - 1) + ' 次请求记录</summary>' +
          H.log.slice(1).map(function (r) { return recHtml(r, false); }).join('') + '</details>' : '') +
      '</details></div>';
    return h;
  };

  // 表盘读的是剧情时刻，不拿现实时间顶上
  var sceneStamp = function () {
    var h = st.chatHistory || [];
    for (var i = h.length - 1; i >= 0; i--) {
      var m = h[i];
      if (!m || m.role === 'system' || typeof m.content !== 'string' || !m.content) continue;
      var hit = msgBody(m).match(/\[场景[|｜]\s*(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})/);
      if (hit) return { y: +hit[1], m: +hit[2], d: +hit[3], hh: hit[4], mi: hit[5] };
    }
    return null;
  };
  var dialNow = function () {
    var stp = sceneStamp(), s = viewState();
    var m = stp ? null : String((s && s.scene && s.scene.time) || '').match(/(\d{1,2}):(\d{2})/);
    var d = sceneDate();
    var hh = stp ? ('0' + stp.hh).slice(-2) + ':' + stp.mi : (m ? ('0' + m[1]).slice(-2) + ':' + m[2] : '--:--');
    return { hh: hh, dt: d ? pad2(d.m) + '.' + pad2(d.d) : '手环' };
  };
  var paintDial = function () {
    var t = dialNow();
    var hh = q1(dial, '.p12-hh'), dt = q1(dial, '.p12-dt');
    if (hh) hh.textContent = t.hh;
    if (dt) dt.textContent = t.dt;
    var s = viewState();
    var n = (s && s.messages) ? s.messages.filter(function (x) { return x && x.text; }).length : 0;
    var dot = q1(dial, '.p12-dot');
    if (dot) dot.textContent = n ? String(n) : '';
  };
  var tabNum = function (k) {
    var s = viewState();
    if (!s) return 0;
    if (k === 'sch') return (s.schedule || []).length;
    if (k === 'msg') return (s.messages || []).length;
    return 0;
  };
  var parseBadgeLit = function (badgesStr) {
    var s = String(badgesStr || '');
    var m = s.match(/(\d+)\s*\/\s*8/) || s.match(/(\d+)/);
    return m ? Math.max(0, Math.min(8, +m[1])) : 0;
  };
  var legacyPAGES = { team: teamHtml, sch: schHtml, bag: bagHtml, fav: favorHtml, msg: msgHtml, dex: dexHtml, sys: sysHtml };
  var legacyDrawerHtml = function () {
    var s = viewState() || {}, t = dialNow();
    var customFull = load('tamerFull:' + scope(), '');
    var avObj = s.name ? avatarOf(s.name, '', 'head') : null;
    var avUrl = (typeof sprOkStr === 'function' && sprOkStr(customFull)) ? customFull : (avObj && avObj.url ? avObj.url : '');
    var badgeIcon = (window.P12_UI_ICONS || {})['association-badge'] || '';
    var litBadges = parseBadgeLit(s.badges);
    var hexHtml = '';
    for (var bi = 0; bi < 8; bi++) {
      hexHtml += '<span class="v7-hex' + (bi < litBadges ? ' lit' : '') + '">' + (bi < litBadges ? '★' : '') + '</span>';
    }
    var hurt = s.injury && s.injury !== '无';
    var h = '<div class="v7-os-bar"><span>TAMER·LINK // OS v2.7</span><span class="os-rt"><i></i><b>' + esc(t.hh) + '</b> · ' + esc(t.dt) + '</span>' +
      '<button type="button" class="p12-x" data-k="close" aria-label="关闭手环">✕</button></div>' +
      '<div class="v7-id-card">' +
        '<div class="v7-id-main">' +
          '<div class="v7-id-av" data-goto-sys="1" title="点击配置驯兽师立绘"' + (avUrl ? ' style="background-image:url(\'' + esc(avUrl) + '\')"' : '') + '>' +
            (avUrl ? '' : esc(String(s.name || '驯').slice(0, 1))) + '</div>' +
          '<div class="v7-id-info">' +
            '<div class="v7-id-r1"><span class="v7-id-nm">' + esc(s.name || '未登记驯兽师') + '</span>' +
              '<span class="v7-id-lic">' + esc(s.license ? s.license + '驯兽师' : '待发证') + '</span></div>' +
            '<div class="v7-id-r2"><span class="v7-id-funds">' + esc(s.funds || '¥ —') + '</span>' +
              '<span>' + esc(s.rank || '未上榜') + '</span>' +
              '<span class="v7-id-inj' + (hurt ? ' hurt' : '') + '">伤势·' + esc(s.injury || '无') + '</span></div>' +
          '</div>' +
          (badgeIcon ? '<img class="v7-id-shield" src="' + esc(badgeIcon) + '" alt="ITA">' : '') +
        '</div>' +
        '<div class="v7-crest-bar">' +
          '<span class="v7-crest-lbl">GYM CRESTS · 道馆徽章' + (s.badges ? '（' + esc(s.badges) + '）' : '') + '</span>' +
          '<div class="v7-crest-slots">' + hexHtml + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="p12-tabs">' + TABS.map(function (x) {
        var n = tabNum(x[0]);
        return '<button type="button" class="p12-tab' + (tab === x[0] ? ' on' : '') + '" data-p="' + x[0] + '">' + x[1] + (n ? '<sup>' + n + '</sup>' : '') + '</button>';
      }).join('') + '</div>' +
      '<div class="p12-body">';
    TABS.forEach(function (x) {
      h += '<div class="p12-page' + (tab === x[0] ? ' on' : '') + '" data-p="' + x[0] + '">' + legacyPAGES[x[0]]() + '</div>';
    });
    h += '</div>';
    return h;
  };
  var v3ToastTimer = null;
  var v3Toast = function (msg, canUndo, isErr) {
    try {
      var prev = document.getElementById('p12-toast');
      if (prev) prev.remove();
      clearTimeout(v3ToastTimer);
      var t = document.createElement('div');
      t.id = 'p12-toast';
      t.className = 'p12-toast' + (isErr ? ' err' : '');
      t.innerHTML = '<span>' + esc(msg || '') + '</span>' +
        (canUndo ? '<button type="button" data-toast-undo="1">↩ 撤销</button>' : '');
      t.addEventListener('click', function (ev) {
        var ub = ev.target && ev.target.closest ? ev.target.closest('[data-toast-undo]') : null;
        if (!ub || !window.P12InstantVars) return;
        var ur = window.P12InstantVars.undoLast(st);
        t.remove();
        if (ur && ur.ok) { v3Toast('↩ 已撤销：' + ur.summary, false, false); render(); }
      });
      document.body.appendChild(t);
      v3ToastTimer = setTimeout(function () { try { t.remove(); } catch (e) {} }, 4200);
    } catch (e) {}
  };
  var v3Ctx = function () {
    return {
      doc: document, box: box, st: st, VER: VER, TABS: TABS, PAGES: PAGES,
      hasParser: !!PARSER, viewState: viewState, dialNow: dialNow, tabNum: tabNum,
      getTab: function () { return tab; },
      getSelBeast: function () { return selBeast; }, setSelBeast: function (i) { selBeast = i; },
      load: load, scope: scope, scopeK: scopeK, sprOkStr: function (u) { return typeof sprOkStr === 'function' && sprOkStr(u); },
      parseBadgeLit: parseBadgeLit, avatarOf: avatarOf, avHtml: avHtml,
      creatureChain: creatureChain, creatureAttrs: creatureAttrs, hudTypeIcon: hudTypeIcon,
      parseMoveInfo: parseMoveInfo, moveLabel: moveLabel, tyC: tyC, segs12: segs12, clampPct: clampPct,
      stageCap: stageCap, batFlipOf: batFlipOf, presentHtml: presentHtml, pickRadarArt: pickRadarArt,
      bagDotColor: bagDotColor, calGrid: calGrid, sceneDate: sceneDate, favors: favors, empty: empty,
      esc: esc, fillInput: function (txt) { if (typeof fillInput === 'function') fillInput(txt); },
      render: function () { render(); }, toast: v3Toast,
      legacySysRestHtml: function () {
        var raw = legacyPAGES.sys();
        return raw.replace(/^<div class="v7-sec-hd">[\s\S]*?<\/div>/, '');
      }
    };
  };
  var PAGES = {
    team: function () { return window.P12WristbandV3 ? window.P12WristbandV3.renderTeam(v3Ctx()) : legacyPAGES.team(); },
    sch: function () { return window.P12WristbandV3 ? window.P12WristbandV3.renderSch(v3Ctx()) : legacyPAGES.sch(); },
    bag: function () { return window.P12WristbandV3 ? window.P12WristbandV3.renderBag(v3Ctx()) : legacyPAGES.bag(); },
    fav: favorHtml,
    msg: function () { return window.P12WristbandV3 ? window.P12WristbandV3.renderMsg(v3Ctx()) : legacyPAGES.msg(); },
    dex: function () { return window.P12WristbandV3 ? window.P12WristbandV3.renderDex(v3Ctx()) : legacyPAGES.dex(); },
    sys: function () { return window.P12WristbandV3 ? window.P12WristbandV3.renderSys(v3Ctx()) : legacyPAGES.sys(); }
  };
  var drawerHtml = function () {
    return window.P12WristbandV3 ? window.P12WristbandV3.renderDrawer(v3Ctx()) : legacyDrawerHtml();
  };
  // ---------- 2d 正文对白头像：判定交给 hook/dialog-speaker.js，这里只负责取段落、插节点 ----------
  // 三条硬约束：只加节点不改正文；已挂过的段（文字没变）不重复挂；流式生成中不挂。
  var DLG = { on: true, painted: 0, skip: 0, nodes: 0, err: '', lastAt: 0 };
  var dlgText = function (p) {
    var c = p.cloneNode(true);
    var xs = c.querySelectorAll ? c.querySelectorAll('.p12-dlg') : [];
    for (var i = 0; i < xs.length; i++) { if (xs[i].parentNode) xs[i].parentNode.removeChild(xs[i]); }
    return c.textContent || '';
  };
  var dialPaint = function () {
    if (!DLG.on || !st) return DLG;
    var m = DS();
    var out = { judge: !!m, nodes: 0, para: 0, painted: 0, skip: 0, err: '' };
    if (!m || typeof m.detectParagraphs !== 'function') { DLG.err = '没装 dialog-speaker.js'; DLG.lastAt = Date.now(); return DLG; }
    if (st.isGenerating) { DLG.err = '正在流式生成，等落地'; DLG.lastAt = Date.now(); return DLG; }
    var s = viewState();
    if (!s) { DLG.err = '还没读到状态栏'; DLG.lastAt = Date.now(); return DLG; }
    var persons = [], pm = SPR.map || {};
    Object.keys(pm).forEach(function (k) {
      var v = pm[k];
      if (sprIsPerson(v)) persons.push({ name: k, alias: (v.alias || []).slice() });
    });
    // 在场名单：名字→备注，判定要名字，选通用头像要用备注（性别/年龄线索在备注里）
    var noteOf = {}, present = [];
    ppl(s.present).concat(ppl(s.others)).forEach(function (x) {
      present.push({ name: x.name, note: x.note });
      if (!noteOf[x.name] && x.note) noteOf[x.name] = x.note;
    });
    // 在场名单：本轮 ∪ 上一条 AI 回复声明过的在场（去重）。
    // 离场常写在同一条回复的后半段：金佩芬先在饭馆说完话，场景接着换到码头，
    // 本轮 <status> 的【在场】就只剩程砚，只认本轮会把她刚说完的两段判成无人说话。
    // 上一条的名单里剔掉我方出战兽、图鉴物种和玩家自己，免得把切半句得到的名字当人。
    var prevPresent = [];
    try {
      var rsPrev = document.querySelectorAll('[data-role="assistant"] .markdown-body');
      if (rsPrev.length >= 2 && typeof m.presenceFromReply === 'function') {
        var teamNicks = (s.team || []).map(function (b) { return String(b.nick || ''); });
        var dexNames = (H.dex || []).map(function (c) { return String(c.name || ''); });
        var selfName = sprName(s.name);
        m.presenceFromReply(rsPrev[rsPrev.length - 2].textContent || '').forEach(function (x) {
          if (!x.name || x.name === selfName) return;
          if (teamNicks.indexOf(x.name) >= 0 || dexNames.indexOf(x.name) >= 0) return;
          if (prevPresent.some(function (y) { return y.name === x.name; })) return;
          prevPresent.push(x);
        });
      }
    } catch (e) { prevPresent = []; }
    var presentMerged = present.slice();
    prevPresent.forEach(function (x) {
      if (!presentMerged.some(function (y) { return y.name === x.name; })) presentMerged.push(x);
    });
    var opts = { persons: persons, present: present, playerName: sprName(s.name) };
    var optsMerged = prevPresent.length ? { persons: persons, present: presentMerged, playerName: sprName(s.name) } : opts;
    var roots = document.querySelectorAll('[data-role="assistant"] .markdown-body');
    out.nodes = roots.length;
    for (var i = 0; i < roots.length; i++) {
      var ps = roots[i].querySelectorAll('p'), texts = [], els = [];
      // 全段一起判：同人连续段只挂首段的上下文要靠整段序列算，只把没挂过的段送进去会丢上下文
      for (var j = 0; j < ps.length; j++) {
        if (inCot(ps[j])) continue;                 // 思考块里的台词不挂头像（cot 里常复述同一句）
        var txt = stripCot(dlgText(ps[j]));
        if (!txt.replace(/\s+/g, '')) continue;
        texts.push(txt); els.push(ps[j]);
      }
      if (!texts.length) continue;
      // 最新一条（正在读的这轮）用合并名单；更早的轮次沿用原名单，免得旧回复串味。
      var useOpts = (i === roots.length - 1) ? optsMerged : opts;
      var res;
      try { res = m.detectParagraphs(texts, useOpts); } catch (e) { out.err = String(e && e.message || e); DLG.err = out.err; break; }
      if (!res || res.length !== texts.length) continue;
      for (var q = 0; q < els.length; q++) {
        var p2 = els[q], r = res[q];
        var who = r && r.speaker ? r.speaker : '';
        var done = p2.getAttribute('data-p12-dlg') === '1';
        var same = done && p2.getAttribute('data-p12-txt') === texts[q] && (p2.getAttribute('data-p12-who') || '') === who;
        if (same) continue;                       // 判过了、没变化：一个字都不动（重渲染/编辑后才重来）
        var old = p2.querySelector ? p2.querySelector('.p12-dlg') : null;
        if (old && old.parentNode) old.parentNode.removeChild(old);
        p2.setAttribute('data-p12-dlg', '1');
        p2.setAttribute('data-p12-txt', texts[q]);
        out.para++;
        if (!who) { p2.removeAttribute('data-p12-who'); out.skip++; continue; }
        var a = avatarOf(who, noteOf[who] || null, 'head');
        var span = document.createElement('span');
        span.className = 'p12-dlg' + (a && a.url ? '' : ' is-empty');
        span.setAttribute('style', avStyle(a));
        span.setAttribute('aria-hidden', 'true');
        span.setAttribute('data-p12-who', who);
        if (!a || !a.url) span.textContent = headOf(who);
        if (p2.firstChild) p2.insertBefore(span, p2.firstChild); else p2.appendChild(span);
        p2.setAttribute('data-p12-who', who);
        out.painted++;
      }
    }
    DLG.nodes = out.nodes; DLG.painted += out.painted; DLG.skip += out.skip; DLG.err = out.err;
    DLG.lastAt = Date.now();
    return DLG;
  };
  // ---------- 新发现卡（.wt-dex）：029 正则只把原文塞进 .wt-raw，名字/阶段/属性留空，立绘位是纯色块。
  // 这里按名字从清单取图，把立绘和文字一次性补上；取不到图就保留色块（不破图、不报错）。
  var DEXART = { done: 0, miss: 0, err: '' };
  var dexParse = function (raw) {
    var p = String(raw || '').replace(/\s+/g, ' ').split(/[｜|]/).map(function (x) { return x.trim(); }).filter(Boolean);
    if (!p.length) return null;
    var o = { name: p[0], types: [], stage: '', look: '', place: '' };
    p.slice(1).forEach(function (x) {
      var loc = x.match(/^发现地[:：]?\s*(.*)$/);
      if (loc) { o.place = loc[1].trim(); return; }
      if (!o.stage && /期|体$/.test(x)) { o.stage = x; return; }
      if (!o.types.length && (/属性/.test(x) || (window.P12CreatureArt && window.P12CreatureArt.typeIds[x]) || /^[^\s\/]{1,4}(\/[^\s\/]{1,4})+$/.test(x))) {
        o.types = x.replace(/属性/g, '').split(/[\/／]/).map(function (t) { return t.trim(); }).filter(Boolean);
        return;
      }
      if (!o.look) o.look = x;
    });
    return o;
  };
  var dexArt = function () {
    var out = { cards: 0, filled: 0, miss: 0, err: '' };
    var secs = document.querySelectorAll('.wt-dex');
    for (var i = 0; i < secs.length; i++) {
      var sec = secs[i];
      if (inCot(sec)) continue;                     // 思考块里复述的图鉴卡不算
      out.cards++;
      var rawEl = sec.querySelector('.wt-raw');
      var o = dexParse(rawEl ? rawEl.textContent : '');
      if (!o || !o.name) continue;
      var art = sec.querySelector('.wt-dex-art');
      var nm = sec.querySelector('.wt-dex-nm');
      var stl = sec.querySelector('.wt-dex-st');
      var tys = sec.querySelector('.wt-types');
      var plc = sec.querySelector('.wt-dex-place');
      if (nm && !nm.textContent) nm.textContent = o.name;
      if (stl && !stl.textContent) {
        var look = o.look ? String(o.look).slice(0, 68) : '';
        stl.textContent = [o.stage, look || o.place].filter(Boolean).join(' · ');
      }
      if (plc && !plc.textContent) plc.textContent = o.place ? ('发现地 · ' + o.place) : (o.stage || '图鉴新收录');
      if (tys && !tys.textContent) {
        var icons = window.P12_UI_ICONS || {};
        var ikMap = { '一般': 'type-normal', '草': 'type-grass', '火': 'type-fire', '水': 'type-water', '电': 'type-electric', '冰': 'type-ice', '格斗': 'type-fighting', '毒': 'type-poison', '地面': 'type-ground', '飞行': 'type-flying', '超能力': 'type-psychic', '虫': 'type-bug', '岩石': 'type-rock', '幽灵': 'type-ghost', '龙': 'type-dragon', '恶': 'type-dark', '钢': 'type-steel', '妖精': 'type-fairy', '机械': 'type-machine', '侵蚀': 'type-erosion', '噬血': 'type-blood' };
        tys.innerHTML = o.types.map(function (t) {
          var clean = String(t || '').replace(/属性$/, '').trim();
          var u = icons[ikMap[clean]];
          if (u) return '<img src="' + esc(u) + '" alt="' + esc(clean) + '" title="' + esc(clean) + '" style="width:20px;height:20px;object-fit:contain">';
          return '<span style="display:inline-block;margin:0 5px 0 0;padding:1px 8px;border-radius:3px;font-size:11px;font-weight:800;color:#fff;transform:skewX(-10deg);background:' + tyC(t) + '">' + esc(clean) + '</span>';
        }).join('');
      }
      sec.setAttribute('data-p12-filled', '1');
      if (!art) continue;
      var chain = creatureChain(o.name, o.types);
      if (art.getAttribute('data-p12-creature') === JSON.stringify(chain)) continue;
      art.setAttribute('data-p12-creature', JSON.stringify(chain));
      art.setAttribute('data-p12-letter', o.name.slice(0, 1));
      art.setAttribute('data-p12-contain', '');
      art.setAttribute('data-p12-name', o.name);
      creaturePaint(sec);
      out.filled++;
    }
    DEXART.done += out.filled; DEXART.miss = out.miss; DEXART.err = out.err;
    return out;
  };
  H.dexArt = { paint: dexArt, state: function () { return { filled: DEXART.done, miss: DEXART.miss, err: DEXART.err }; } };

  // ---------- 2e 正文结构化块 → 卡片：遭遇 / 进化 / 结契 / 新招 / 升级 ----------
  // 不靠标记标签找 DOM：宿主可能把不认识的尖括号当 HTML 吃掉，所以按块里 JSON 的特征串
  // （去空白、统一引号后）去对上段落；对上就把那一段换成卡，原始 JSON 留在卡内折叠里。
  var BLK = { cards: 0, kinds: {}, repaired: 0, miss: 0, err: '' };
  // 五个块现在可能写成 ```json … ``` 围栏（1000188 改过），旧的裸 JSON 也要认。
  var stripFence = function (t) {
    return String(t || '').replace(/^\s*```[A-Za-z]*\s*/, '').replace(/\s*```\s*$/, '').trim();
  };
  // 平台文风过滤会吃掉裸 JSON 里的英文逗号（包括 "a","b"、["草","妖精"]、19,"键"、true,"键"、},{ 等）：
  // 用轻量词法状态机扫描字符串边界，凡闭合值（" / 数字 / true / false / null / } / ]）后未隔 , : } ] 即遇新值起始，精准补回逗号。
  var repairJson = function (t) {
    var s = String(t || ''), out = [], inStr = false, escCh = false, lastSig = '';
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (inStr) {
        out.push(c);
        if (escCh) { escCh = false; }
        else if (c === '\\') { escCh = true; }
        else if (c === '"') { inStr = false; lastSig = '"'; }
        continue;
      }
      if (/\s/.test(c)) { out.push(c); continue; }
      var prevEndsVal = lastSig === '"' || lastSig === '}' || lastSig === ']' || /[0-9eElL]/.test(lastSig);
      var curStartsVal = c === '"' || c === '{' || c === '[' || c === '-' || /[0-9tfn]/.test(c);
      if (prevEndsVal && curStartsVal) {
        var prevIsNum = /[0-9eE]/.test(lastSig) && /[0-9.eE+-]/.test(c) && !/\s/.test(s[i - 1] || '');
        var prevIsKw = /[tfnrauls]/.test(lastSig) && /[a-z]/.test(c) && !/\s/.test(s[i - 1] || '');
        if (!prevIsNum && !prevIsKw) out.push(',');
      }
      out.push(c);
      if (c === '"') inStr = true;
      lastSig = c;
    }
    return out.join('');
  };
  var parseBlockJson = function (raw) {
    var body = stripFence(raw);
    try { return { o: JSON.parse(body), repaired: false }; } catch (e) {}
    var fixed = repairJson(body);
    try { return { o: JSON.parse(fixed), repaired: true }; } catch (e) { return { o: null, err: String(e && e.message || e) }; }
  };
  var normTxt = function (x) {
    return String(x == null ? '' : x).replace(/[\s\u3000]+/g, '').replace(/[“”‘’「」『』]/g, '"');
  };
  var CB = 'margin:14px 0;border:2.5px solid #1b2340;clip-path:polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%);background:#ffffff;color:#1b2340;padding:0;font:700 13.5px/1.65 "HarmonyOS Sans SC","Source Han Sans SC","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;box-shadow:6px 6px 0 rgba(27,35,64,.14);overflow:hidden';
  var CBRAW = 'margin:6px 0 0;white-space:pre-wrap;word-break:break-all;background:#f1f6fd;border:1px solid #cfe0f5;padding:6px 8px;font:11px/1.5 ui-monospace,monospace;color:#52607a';
  var fmtTypes = function (t) { return Array.isArray(t) ? t.join(' · ') : String(t || ''); };
  // 卡片里的小立绘：按物种（或指定归属个体）取图，取不到用全息圆环＋首字兜底
  var blkArt = function (species, size, label, types, owned) {
    var sp = String(species || '').split(/[·・]/)[0].trim();
    var chain = creatureChain(sp, types, owned), u = chain.length ? chain[0].url : null;
    var bgRule = u ? ('background-color:#f0f9ff;background-image:url(\'' + esc(u) + '\');') : 'background:linear-gradient(135deg,#e0f2fe,#bae6fd);';
    var base = 'width:' + size + 'px;height:' + size + 'px;border:2px solid #1b2340;' + bgRule +
      'background-size:contain;background-repeat:no-repeat;background-position:center;display:flex;align-items:center;justify-content:center;font:900 ' + Math.round(size / 2.6) + 'px/1 sans-serif;color:#1b2340;flex:none';
    return '<div' + creatureAttrs(sp, types, owned) + ' title="' + esc(sp) + '" style="' + base + '">' + (u ? '' : esc(label || sp.slice(0, 1) || '?')) + '</div>';
  };
  var SAY = {
     交流: '先和它交流看看。',
     逃跑: '先撤，不跟它纠缠。',
     战斗: '上前应战。',
     安抚结契: '先把它安抚下来，试试结契。',
  };
  var sayHtml = function (kind, o) {
    if (kind !== '遭遇') return '';
    var keys = ['交流', '逃跑', '战斗'];
    if (o && o['野生'] === true) keys.push('安抚结契');
    return '<div style="display:grid;grid-template-columns:repeat(' + keys.length + ',minmax(0,1fr));gap:6px;margin-top:10px">' + keys.map(function (k) {
      var bg = k === '战斗' ? '#1b2340' : (k === '安抚结契' ? '#fff3e6' : '#ffffff');
      var fg = k === '战斗' ? '#ffffff' : (k === '安抚结契' ? '#ff6b2b' : '#1b2340');
      var bd = k === '安抚结契' ? '#ff6b2b' : '#1b2340';
      return '<button type="button" data-p12say="' + esc(SAY[k]) + '" style="border:2px solid ' + bd + ';background:' + bg + ';color:' + fg + ';clip-path:polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px);padding:7px 6px;font:900 12px/1.2 inherit;cursor:pointer">' + esc(k) + '</button>';
    }).join('') + '</div>';
  };
  var blockCard = function (kind, o, raw) {
    var topBar = '', bodyRows = [];
    if (kind === '遭遇') {
      topBar = '<div style="background:#1b2340;color:#fff;padding:8px 14px;display:flex;align-items:center;justify-content:space-between;gap:8px">' +
        '<span>◎ AR TARGET // 遭遇 · ' + esc(o['名称'] || '未知') + '</span>' +
        (o['野生'] ? '<span style="background:#ff2e55;color:#fff;padding:2px 8px;font-size:11px;font-weight:900">野生</span>' : '') +
      '</div>';
      if (o['地点']) bodyRows.push('<div style="font-size:12px;color:#52607a">坐标：' + esc(o['地点']) + '</div>');
      var objs = Array.isArray(o['对象']) ? o['对象'] : [];
      objs.forEach(function (x) {
        var art = (x['物种'] && !/^(?:人|人类|驯兽师)$/.test(x['物种'])) ? blkArt(x['物种'], 76, null, x['属性']) : '';
        bodyRows.push('<div style="display:flex;align-items:center;gap:12px;margin:6px 0;padding:8px;background:#f8fbff;border:1.5px solid #cfe0f5">' +
          art + '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:14.5px">' +
          esc([x['称呼'], x['物种'], x['阶段'], x['Lv'] == null ? null : 'Lv ' + x['Lv']].filter(Boolean).join(' · ')) + '</div>' +
          (x['可见表现'] ? '<div style="color:#52607a;font-size:12.5px;margin-top:2px">' + esc(x['可见表现']) + '</div>' : '') +
          '</div></div>');
      });
      if (o['眼前情况']) bodyRows.push('<div style="color:#1e293b;font-size:13px">' + esc(o['眼前情况']) + '</div>');
    } else if (kind === '进化') {
      topBar = '<div style="background:linear-gradient(90deg,#1b2340,#ff6b2b);color:#fff;padding:8px 14px;display:flex;align-items:center;justify-content:space-between"><span>★ EVOLUTION // 进化 · ' + esc(o['异兽'] || '') + '</span><span style="font-size:11px;color:#fde68a">破茧蜕变</span></div>';
      var evoNick = String(o['异兽'] || '').trim();
      var fromSp = String(o['从'] || '').split(/[·・]/)[0].trim();
      var toSp = String(o['到'] || '').split(/[·・]/)[0].trim();
      var team = (viewState() && viewState().team) || [];
      var matched = null;
      for (var mi = 0; mi < team.length; mi++) {
        var mb = team[mi];
        if ((evoNick && mb.nick === evoNick) || (toSp && mb.species === toSp) || (fromSp && mb.species === fromSp)) { matched = mb; break; }
      }
      var evoTypes = o['属性'] || (matched && matched.types && matched.types.length ? matched.types : (creatureTypes(toSp).length ? creatureTypes(toSp) : creatureTypes(fromSp)));
      var fromOwned = evoNick ? { nick: evoNick, species: fromSp } : null;
      var toOwned = evoNick ? { nick: evoNick, species: toSp } : null;
      bodyRows.push('<div style="display:flex;align-items:center;justify-content:space-around;gap:12px;margin:8px 0;padding:10px;background:linear-gradient(105deg,#f4f9ff,#fff7ed);border:1.5px solid #cfe0f5">' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:4px">' + blkArt(fromSp, 92, null, evoTypes, fromOwned) + '<span style="font-size:12px;font-weight:800">' + esc(fromSp || '旧形态') + '</span></div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:4px"><span style="background:#ff6b2b;color:#fff;padding:3px 10px;font-size:12px;font-weight:900;transform:skewX(-12deg)">EVOLVE →</span><span style="font-size:11.5px;color:#52607a">' + esc(o['从'] || '') + ' → ' + esc(o['到'] || '') + '</span></div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:4px">' + blkArt(toSp, 104, null, evoTypes, toOwned) + '<span style="font-size:13px;font-weight:900;color:#ff6b2b">' + esc(toSp || '新形态') + '</span></div>' +
      '</div>');
      bodyRows.push('<div style="font-size:12px;color:#52607a">' + ['岔路：' + esc(o['岔路'] || '—'), o['Lv'] == null ? null : 'Lv ' + esc(o['Lv']), o['成长'] == null ? null : '成长 ' + esc(o['成长'])].filter(Boolean).join(' ｜ ') + '</div>');
      if (toSp && !sprGet(toSp) && !(toOwned && PSS.over[psKeyOf(toOwned)])) {
        bodyRows.push('<div style="margin-top:8px"><button type="button" data-p12evo-edit="' + esc(evoNick || toSp) + '" data-p12evo-sp="' + esc(toSp) + '" style="border:2px solid #ff6b2b;background:#fff3e6;color:#ff6b2b;clip-path:polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px);padding:5px 12px;font:900 12px/1.3 inherit;cursor:pointer">✦ 为新形态「' + esc(toSp) + '」生成或设置立绘</button></div>');
      }
    } else if (kind === '结契') {
      topBar = '<div style="background:#1b2340;border-bottom:2px solid #10b981;color:#fff;padding:8px 14px">✦ CONTRACT // 结契 · ' + esc(o['异兽'] || '') + '</div>';
      bodyRows.push('<div style="display:flex;align-items:center;gap:12px;margin:4px 0">' + blkArt(o['物种'], 88, null, o['属性']) +
        '<div><div style="font-size:15px;font-weight:900">' + esc([o['物种'], o['阶段'], o['Lv'] == null ? null : 'Lv ' + o['Lv']].filter(Boolean).join(' · ')) + '</div>' +
        '<div style="font-size:12.5px;color:#52607a;margin-top:4px">方式：' + esc(o['方式'] || '—') + (o['球'] ? ' ｜ 契约球：' + esc(o['球']) : '') + '</div></div></div>');
    } else if (kind === '新招') {
      topBar = '<div style="background:#1b2340;border-bottom:2px solid #00c2ff;color:#fff;padding:8px 14px">⚡ NEW SKILL // 领悟 · ' + esc(o['招式'] || '') + (o['属性'] || o['档'] ? '（' + esc([o['属性'], o['档']].filter(Boolean).join('·')) + '）' : '') + '</div>';
      bodyRows.push('<div style="font-size:13.5px">' + esc(o['异兽'] || '') + (o['来由'] ? ' · <span style="color:#52607a">' + esc(o['来由']) + '</span>' : '') + '</div>');
    } else if (kind === '升级') {
      topBar = '<div style="background:#1b2340;border-bottom:2px solid #ffb800;color:#fff;padding:8px 14px">▲ LEVEL UP // 升级 · ' + esc(o['异兽'] || '') + '</div>';
      bodyRows.push('<div style="font-size:20px;font-weight:900;color:#ff6b2b">Lv ' + esc(o['从'] == null ? '—' : o['从']) + ' → Lv ' + esc(o['到'] == null ? '—' : o['到']) + '</div>');
    }
    var inner = '<div style="padding:11px 14px">' +
      bodyRows.filter(Boolean).join('') +
      sayHtml(kind, o) +
      (raw ? '<details style="margin-top:8px"><summary style="cursor:pointer;color:#52607a;font-size:11.5px">查看原文 JSON</summary><pre style="' + CBRAW + '">' + esc(raw) + '</pre></details>' : '') +
    '</div>';
    return topBar + inner;
  };
  // 块体必须紧跟一个 JSON 对象（代码框可有可无）。不能写成「开头到结尾之间任意抓」：
  // <check> 里常有「输出[遭遇]块」这种半截提及，宽松匹配会把整段正文当成块，解析失败。
  var OBJ = '\\s*(?:```[A-Za-z]*\\s*)?(\\{[\\s\\S]*?\\})(?:\\s*```)?\\s*';
  var BLOCK_DEFS = [
    { kind: '遭遇', re: new RegExp('\\[遭遇\\]' + OBJ + '\\[\\/遭遇\\]', 'g') },
    { kind: '进化', re: new RegExp('<进化>' + OBJ + '<\\/进化>', 'g') },
    { kind: '结契', re: new RegExp('<结契>' + OBJ + '<\\/结契>', 'g') },
    { kind: '新招', re: new RegExp('<新招>' + OBJ + '<\\/新招>', 'g') },
    { kind: '升级', re: new RegExp('\\[升级\\]' + OBJ + '\\[\\/升级\\]', 'g') },
  ];
  var blockArt = function () {
    var out = { cards: 0, miss: 0, err: '' };
    var m = batMsg();
    if (!m || typeof m.content !== 'string') return out;
    var txt = String(m.content);
    if (typeof stripCot === 'function') txt = stripCot(txt);
    var want = [];
    BLOCK_DEFS.forEach(function (d) {
      var re = new RegExp(d.re.source, 'g'), mm;
      while ((mm = re.exec(txt))) {
        var body = mm[1].trim();
        if (!body) continue;
        want.push({ kind: d.kind, raw: body, norm: normTxt(stripFence(body)).slice(0, 40) });
      }
    });
    if (!want.length) return out;
    var ps = document.querySelectorAll('[data-role="assistant"] .markdown-body p, [data-role="assistant"] .markdown-body div');
    for (var i = 0; i < want.length; i++) {
      var w = want[i], hit = null;
      for (var j = 0; j < ps.length; j++) {
        var el = ps[j];
        if (inCot(el)) continue;
        if (el.closest && (el.closest('.p12-blk') || el.closest('.wt-reg'))) continue; // 已在卡片内（含自身及内部子 div），防 800ms 周期重入套娃
        if (el.classList && (el.classList.contains('wt-story') || el.classList.contains('markdown-body') || el.classList.contains('wt-panel') || el.classList.contains('wt-raw'))) continue;
        if (el.querySelector && (el.querySelector('.p12-blk') || el.querySelector('p, section, details, header'))) continue; // 仅替换叶子段落，绝不误吞外层容器
        var t = normTxt(el.textContent || '');
        if (t.indexOf(w.norm) < 0) continue;
        hit = el; break;
      }
      if (!hit) { out.miss++; continue; }
      var got = parseBlockJson(w.raw);
      var o = got.o;
      if (!o || typeof o !== 'object') { out.miss++; continue; }
      if (got.repaired) { out.repaired = (out.repaired || 0) + 1; BLK.repaired = (BLK.repaired || 0) + 1; }
      var card = document.createElement('div');
      card.className = 'p12-blk';
      card.setAttribute('data-p12-blk', w.kind);
      card.setAttribute('style', CB);
      card.innerHTML = blockCard(w.kind, o, w.raw);
      hit.innerHTML = '';
      hit.appendChild(card);
      creaturePaint(card);
      out.cards++;
      BLK.kinds[w.kind] = (BLK.kinds[w.kind] || 0) + 1;
    }
    BLK.cards += out.cards; BLK.miss = out.miss; BLK.err = out.err;
    return out;
  };
  H.blockArt = { paint: blockArt, state: function () { return { cards: BLK.cards, kinds: BLK.kinds, repaired: BLK.repaired, miss: BLK.miss, err: BLK.err }; }, parse: parseBlockJson, stripFence: stripFence, repair: repairJson };

  // 卡片上的「交流 / 逃跑 / 战斗 / 安抚结契」：只把话填进输入框（已有内容时换行追加，不清空），不替玩家发送
  var fillInput = function (text) {
    var clean = String(text || '').trim();
    if (!clean) return;
    var box = null;
    try { box = document.querySelector('textarea[placeholder="输入消息..."]') || document.querySelector('textarea'); } catch (e) {}
    var prev = String((box ? box.value : (st && st.userInput)) || '');
    var merged = prev.trim() ? (prev.replace(/[\r\n]+$/, '') + '\n' + clean) : clean;
    try { st.userInput = merged; } catch (e) {}
    try {
      if (box) {
        box.value = merged;
        box.dispatchEvent(new Event('input', { bubbles: true }));
        box.focus();
        if (typeof box.setSelectionRange === 'function') box.setSelectionRange(merged.length, merged.length);
        box.scrollTop = box.scrollHeight;
      }
    } catch (e) {}
  };
  H.blockSay = { fill: fillInput };
  try {
    document.addEventListener('click', function (ev) {
      var evoEd = ev.target && ev.target.closest && ev.target.closest('[data-p12evo-edit]');
      if (evoEd) {
        var eNick = evoEd.getAttribute('data-p12evo-edit') || '';
        var eSp = evoEd.getAttribute('data-p12evo-sp') || '';
        var team = (viewState() && viewState().team) || [];
        var idx = -1;
        for (var i = 0; i < team.length; i++) {
          var b = team[i];
          if ((eNick && b.nick === eNick) || (eSp && b.species === eSp)) { idx = i; break; }
        }
        if (idx >= 0) {
          if (!cfg.open || tab !== 'team') { cfg.open = true; tab = 'team'; save('cfg', cfg); render(); }
          psOpenEdit(idx, 'gen');
        } else if (!cfg.open) {
          cfg.open = true; tab = 'team'; save('cfg', cfg); render();
        }
        return;
      }
      var t = ev.target && ev.target.closest && ev.target.closest('[data-p12say]');
      if (!t) return;
      fillInput(t.getAttribute('data-p12say'));
    }, true);
  } catch (e) {}

  // ---------- 思考块（<cot>/<think>）一律不算正文 ----------
  // 与 hook/battle/parse.js 的口径一致：AI 的思考链里可能重复写协议标签、图鉴卡、台词，
  // 从正文取内容的三处（折叠、对白头像、新发现卡）都先过这一关，免得误抓。
  var COT = { hosts: '.native-thinking-wrapper, .cot-ui, .native-thinking-card, details.cot' };
  var inCot = function (el) {
    var n = el;
    var guard = 0;
    while (n && n.nodeType === 1 && guard++ < 40) {
      if (n.matches && n.matches(COT.hosts)) return true;
      n = n.parentElement;
    }
    return false;
  };
  // 纯文本用：把 <cot>/<think> 段替换成等长空白（保留换行与位置，后续下标不乱）
  var stripCot = function (text) {
    return String(text == null ? '' : text).replace(/<(cot|think)\b[^>]*>[\s\S]*?(?:<\/\1\s*>|$)/gi, function (part) {
      return part.replace(/[^\r\n]/g, ' ');
    });
  };

  // ---------- 对战块折叠：正文里 [对战建立]…[/对战建立] / [对战结算]…[/对战结算] 默认收起，点开才看 JSON。
  // 为什么不用正则：实测平台那边正则里的长字符类会被吃坏（捕获组只拿到 6 个字的开标记，块内容全漏在外面）；
  // 这里改成渲染后在 DOM 上做——把从开标记所在块到闭标记所在块之间的兄弟节点整体搬进 <details>，
  // 节点本身不重建、文本一个字不改，解析器读的还是 chatHistory 原文。
  var BATFOLD = { done: 0, err: '' };
  var foldOne = function (root, open, close, kind, fallbackLabel) {
    // 只扫顶层子元素：开标记和闭标记常被 020/030 各自包进一层容器，跨层找会 parent 不一致
    var els = [];
    for (var c0 = 0; c0 < root.children.length; c0++) els.push(root.children[c0]);
    var a = -1, b = -1, i;
    for (i = 0; i < els.length; i++) {
      var t = els[i].textContent || '';
      if (els[i].tagName === 'DETAILS') continue;   // 本身就已是折叠块；内含 <details>（状态栏）不算
      if (inCot(els[i])) continue;                 // 思考块里复述的建局标签不折叠
      if (els[i].getAttribute && els[i].getAttribute('data-p12-fold-done')) continue;
      var hasOpen = t.indexOf(open) >= 0, hasClose = t.indexOf(close) >= 0;
      if (a < 0 && hasOpen) { a = i; if (hasClose) { b = i; break; } continue; }
      if (a >= 0 && hasClose) { b = i; break; }
    }
    if (a < 0 || b < 0 || b < a) return 0;
    var startEl = els[a], endEl = els[b];
    if (!startEl.parentNode || startEl.parentNode !== endEl.parentNode) return 0;
    var parent = startEl.parentNode;
    var det = document.createElement('details');
    det.className = 'wt-panel wt-battle-fold';
    det.setAttribute('data-p12-fold', kind);
    var sum = document.createElement('summary');
    sum.textContent = '▸ ' + fallbackLabel;
    var raw = document.createElement('div');
    raw.className = 'wt-raw';
    det.appendChild(sum); det.appendChild(raw);
    parent.insertBefore(det, startEl);
    // 把这一段的兄弟节点搬进去（含首尾两个块），文本原样
    var node = startEl, guard = 0;
    while (node && guard++ < 500) {
      var next = node.nextSibling;
      raw.appendChild(node);
      if (node === endEl) break;
      node = next;
    }
    det.setAttribute('data-p12-fold-done', '1');
    return 1;
  };
  var battleFold = function () {
    var out = { done: 0, err: '', deferred: false };
    // 流式生成中先不折：块还没写完，折了会把后半截留在外面
    if (st && st.isGenerating) { out.deferred = true; BATFOLD.err = ''; return out; }
    var roots = document.querySelectorAll('[data-role="assistant"] .markdown-body, [data-role="user"] .markdown-body');
    for (var i = 0; i < roots.length; i++) {
      try {
        out.done += foldOne(roots[i], '[对战建立]', '[/对战建立]', 'build', '对战建立');
        out.done += foldOne(roots[i], '[对战结算]', '[/对战结算]', 'settle', '对战结算');
        out.done += foldOne(roots[i], '[野外探索]', '[/野外探索]', 'wild', '野外探索');
        out.done += foldOne(roots[i], '[野外结算]', '[/野外结算]', 'wild-settle', '野外结算');
      } catch (e) { out.err = String(e && e.message || e); }
    }
    BATFOLD.done += out.done; BATFOLD.err = out.err;
    return out;
  };
  var foldSummary = function () {
    var list = document.querySelectorAll('.wt-battle-fold');
    for (var i = 0; i < list.length; i++) {
      var d = list[i], raw = d.querySelector('.wt-raw'), sum = d.querySelector('summary');
      if (!raw || !sum) continue;
      var kind = d.getAttribute('data-p12-fold') || 'build';
      var txt = '';
      try {
        var P = window.P12BattleParse;
        var o = P && P.jsonOf ? P.jsonOf(raw.textContent) : null;
        if (o) {
          if (kind === 'build') {
            var foe = (Array.isArray(o['对方']) ? o['对方'][0] : o['对方']) || {};
            var sp = String(foe['物种'] || '').trim(), stg = String(foe['阶段'] || '').trim();
            txt = '▸ 对战建立：' + String(o['名称'] || '对战') + (sp ? ' · 对手 ' + sp + (stg ? '（' + stg + '）' : '') : '');
          } else if (kind === 'wild') {
            txt = '▸ 野外探索：' + String(o['区域'] || '生态区') + (o['地形'] ? ' · ' + String(o['地形']) : '');
          } else if (kind === 'wild-settle') {
            txt = '▸ 野外结算：' + String(o['区域'] || '生态区') + (o['评价'] ? ' · ' + String(o['评价']) : '');
          } else {
            var rd = o['回合'] == null ? '' : String(o['回合']);
            txt = '▸ 对战结算：' + String(o['结果'] || '—') + (rd ? ' · ' + rd + ' 回合' : '');
          }
        }
      } catch (e) { BATFOLD.err = String(e && e.message || e); }
      if (txt && sum.textContent !== txt) sum.textContent = txt;
    }
  };
  H.battleFold = {
    paint: function () { var r = battleFold(); foldSummary(); return r; },
    state: function () { return { folded: BATFOLD.done, err: BATFOLD.err }; }
  };

  H.dialog = {
    paint: dialPaint, state: function () {
      return { on: DLG.on, judge: !!DS(), painted: DLG.painted, skip: DLG.skip, nodes: DLG.nodes, err: DLG.err, at: DLG.lastAt };
    },
    on: function (v) { DLG.on = v !== false; }
  };

  var render = function () {
    if (!H.alive) return;
    psSyncScope();
    clsT(el, 'is-open', cfg.open);
    clsT(dial, 'p12-off', !cfg.on);
    paintDial();
    if (cfg.open) {
      if (window.P12WristbandV3) window.P12WristbandV3.syncShopToggle(box);
      var body = q1(box, '.p12-body'), keep = body ? body.scrollTop : 0;
      var diag = q1(box, '.p12-diag'), diagOpen = !!(diag && diag.open);
      box.innerHTML = drawerHtml();
      creaturePaint(box);
      if (diagOpen) { var newDiag = q1(box, '.p12-diag'); if (newDiag) newDiag.open = true; }
      var nb = q1(box, '.p12-body');
      if (nb) nb.scrollTop = keep;
    }
    place();
  };

  // 调试/测试入口
  H.cal.html = function () { return schHtml(); };
  H.cal.grid = calGrid;
  H.cal.setMonth = function (y, m) { calY = y; calM = m; calSel = 0; };
  H.cal.selectDay = function (d) { calSel = d; };
  var lastErr = function () { return H.log[0] && H.log[0].err; };
  // 角标语义保留在数据层（表盘上按母版只放未读讯息红点，不再画注入条数）
  var injCount = function (r) {
    if (!r) return 0;
    var n = (r.pick || []).length;
    ['event', 'enc'].forEach(function (k) {
      var p = r.pools && r.pools[k];
      if (p && p.pick) n += p.pick.length;
    });
    return n;
  };
  H.injCount = injCount;
  H.badge = function () { return cfg.on ? injCount(H.log[0]) : 0; };
  H.pages = {
    team: function () { return PAGES.team(); },
    sch: function () { return PAGES.sch(); },
    bag: function () { return PAGES.bag(); },
    fav: function () { return PAGES.fav(); },
    msg: function () { return PAGES.msg(); },
    dex: function () { return PAGES.dex(); },
    sys: function () { return PAGES.sys(); },
    diag: diagHtml,
    tabs: TABS
  };
  H.drawer = function () { return drawerHtml(); };
  H.setTab = function (k) { tab = k; };
  H.paintDial = paintDial;
  H.dialNow = dialNow;
  H.sceneStamp = sceneStamp;
  H.css = function () { return MASTER_CSS; };

  var flashTimer = null;
  var flash = function () {
    // 母版没给「新内容」动效，这里只把表盘轻轻顶一下，不改配色尺寸
    if (dial && dial.style) dial.style.transform = 'translateY(-3px)';
    clearTimeout(flashTimer);
    flashTimer = setTimeout(function () { if (dial && dial.style) dial.style.transform = ''; }, 900);
  };
  H.flash = flash;

  // 拖动表盘；没拖动就是点击 → 开关抽屉
  var drag = null;
  onE(dial, 'pointerdown', function (ev) {
    var r = dial.getBoundingClientRect ? dial.getBoundingClientRect() : { left: 0, top: 0 };
    drag = { sx: ev.clientX, sy: ev.clientY, x: r.left, y: r.top, moved: false };
    dial.setPointerCapture && dial.setPointerCapture(ev.pointerId);
    ev.preventDefault();
  });
  onE(dial, 'pointermove', function (ev) {
    if (!drag) return;
    var dx = ev.clientX - drag.sx, dy = ev.clientY - drag.sy;
    if (Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
    if (drag.moved) { cfg.x = drag.x + dx; cfg.y = drag.y + dy; place(); }
  });
  var endDrag = function (ev) {
    if (!drag) return;
    if (!drag.moved) {
      if (ev.type === 'pointerup') { cfg.open = !cfg.open; save('cfg', cfg); render(); }
    } else {
      var r = dial.getBoundingClientRect ? dial.getBoundingClientRect() : { left: 0, top: 0 };
      save('cfg', cfg); place();
    }
    drag = null;
  };
  onE(dial, 'pointerup', endDrag);
  onE(dial, 'pointercancel', endDrag);
  onE(box, 'click', function (ev) {
    var pick = function (attr) { return ev.target.closest ? ev.target.closest('[' + attr + ']') : null; };
    var ivEl = pick('data-iv');
    if (ivEl && window.P12WristbandV3 && window.P12WristbandV3.handleAction(ivEl, v3Ctx())) return;
    var kel = pick('data-k');
    var k = kel ? kel.getAttribute('data-k') : (ev.target.getAttribute && ev.target.getAttribute('data-k'));
    if (k === 'close') { cfg.open = false; save('cfg', cfg); render(); return; }
    if (k === 'toggle') { cfg.on = !cfg.on; save('cfg', cfg); render(); return; }
    if (k === 'pv-close') { pvClose(); return; }
    var goSys = pick('data-goto-sys');
    if (goSys) { tab = 'sys'; render(); return; }
    var flipBtn = pick('data-pflip');
    if (flipBtn) {
      var fsp = flipBtn.getAttribute('data-pflip');
      if (fsp && typeof batFlipToggle === 'function') {
        batFlipToggle(fsp);
        if (window.P12BattleView && window.P12BattleView.isOpen && window.P12BattleView.isOpen() && BAT && BAT.state) {
          window.P12BattleView.rerender(BAT.state);
        }
        render();
      }
      return;
    }
    var tAct = pick('data-tamer-act');
    if (tAct) {
      var actName = tAct.getAttribute('data-tamer-act');
      if (actName === 'save') {
        var tInp = box.querySelector('[data-tamer-url]');
        var tVal = tInp ? tInp.value.trim() : '';
        try { save('tamerFull:' + scope(), tVal); } catch (e) {}
      } else if (actName === 'clear') {
        try { localStorage.removeItem(LS + 'tamerFull:' + scope()); } catch (e) {}
      }
      if (window.P12BattleView && window.P12BattleView.isOpen && window.P12BattleView.isOpen() && BAT && BAT.state) {
        window.P12BattleView.rerender(BAT.state);
      }
      render();
      return;
    }
    var pa = pick('data-pa');
    if (pa) { pvOpen(pa.getAttribute('data-pa'), pa.getAttribute('data-sub') || ''); return; }
    var tb = pick('data-p');
    if (tb && tb.className.indexOf('p12-tab') >= 0) { tab = tb.getAttribute('data-p'); render(); return; }
    var prest = pick('data-psrest');
    if (prest) {
      if (!PS || !psvc) return;
      var field = prest.getAttribute('data-psrest');
      try { var nx = PS.restoreSetting(PSS.cfg || PS.settingsOf(null), field); } catch (e) { return; }
      psSaveCfg(nx, true);
      return;
    }
    var preset = pick('data-pset');
    if (preset && preset.getAttribute('data-pset') === 'restore') {
      if (!PS || !psvc) return;
      psSaveCfg(PS.settingsOf(null), true);
      return;
    }
    var ed = pick('data-pedit');
    if (ed) { psOpenEdit(+ed.getAttribute('data-pedit') || 0); return; }
    var psave = pick('data-psave');
    if (psave) {
      var how = psave.getAttribute('data-psave');
      if (how === 'link') { var inp = pv && pv.querySelector('[data-purl]'); psSaveLink(inp ? inp.value.trim() : ''); return; }
      if (how === 'restore') { psRestore(); return; }
    }
    var beast = pick('data-beast');
    if (beast) { selBeast = +beast.getAttribute('data-beast') || 0; render(); return; }
    var day = pick('data-day');
    if (day) { var nd = +day.getAttribute('data-day'); calSel = calSel === nd ? 0 : nd; render(); return; }
    var cm = pick('data-cm');
    if (cm) {
      var dir = +cm.getAttribute('data-cm');
      if (!dir) { calY = 0; calM = 0; calSel = 0; }
      else {
        var now = sceneDate(), y = calY || (now ? now.y : 2000), m = (calM || (now ? now.m : 1)) + dir;
        if (m < 1) { m = 12; y--; } if (m > 12) { m = 1; y++; }
        calY = y; calM = m; calSel = 0;
      }
      render();
    }
  });
  onE(box, 'input', function (ev) {
    if (window.P12WristbandV3 && window.P12WristbandV3.handleInput(ev.target, v3Ctx())) return;
    var tag = ev.target && ev.target.tagName;
    var psk2 = ev.target && ev.target.getAttribute && ev.target.getAttribute('data-pset');
    if (!psk2 || tag !== 'TEXTAREA' || !PS || !psvc) return;
    var cur2 = PSS.cfg || PS.settingsOf(null), nx2 = PS.settingsOf(cur2);
    nx2[psk2] = ev.target.value;
    psSaveCfg(nx2, false);
  });
  onE(box, 'change', function (ev) {
    if (window.P12WristbandV3 && window.P12WristbandV3.handleChange(ev.target, v3Ctx())) return;
    if (ev.target && ev.target.getAttribute && ev.target.hasAttribute && ev.target.hasAttribute('data-pfile')) {
      psUpload(ev.target.files && ev.target.files[0]);
      return;
    }
    var psk = ev.target.getAttribute && ev.target.getAttribute('data-pset');
    if (psk) {
      if (!PS || !psvc) return;
      if (psk === 'restore') { psSaveCfg(PS.settingsOf(null), true); return; }
      var cur = PSS.cfg || PS.settingsOf(null);
      var next = PS.settingsOf(cur);
      var v = ev.target.value;
      if (psk === 'key') { if (v) next.key = v; }
      else if (psk === 'removalKey') { if (v) next.removalKey = v; }
      else if (psk === 'url' || psk === 'removalUrl' || psk === 'artists' || psk === 'positive' || psk === 'negative') next[psk] = v;
      else if (psk === 'provider' || psk === 'background' || psk === 'size') next[psk] = v;
      psSaveCfg(next, true);
      return;
    }
    var k = ev.target.getAttribute('data-k');
    if (k === 'n' || k === 'cool') { cfg[k] = Math.max(0, parseInt(ev.target.value, 10) || 0); save('cfg', cfg); render(); }
  });
  // 点抽屉和表盘以外的地方收起
  var outside = function (ev) {
    if (pvName && pv && !pv.contains(ev.target) && !(ev.target.closest && ev.target.closest('[data-pa]'))) pvClose();
    if (!cfg.open || el.contains(ev.target)) return;
    cfg.open = false; save('cfg', cfg); render();
  };
  try { document.addEventListener('pointerdown', outside, true); } catch (e) {}
  window.addEventListener('resize', place);

  // ---------- 对战：读 [对战建立] → 开页面 → 本地打完 → 战报填进输入框 ----------
  // state.report is canonical. Keep the old top-level report as a read-only alias,
  // including in serialized saves so older readers still understand new records.
  var batRecord = function (record) {
    if (record.state && !record.state.report && record.report) record.state.report = record.report;
    Object.defineProperty(record, 'report', {
      enumerable: true, configurable: true,
      get: function () { return record.state && record.state.report || null; }
    });
    return record;
  };
  // 通用地形：规则与推断由引擎单一数据源决定；素材来自manifest.terrain构建注入。
  // 待授权上传前URL清单为空，明确回退底色，不偷用旧地点图或本机文件路径。
  var bgForField = function (f) {
    var E = window.P12BattleEngine;
    var id = E && E.terrainOf ? E.terrainOf(f) : 'arena';
    var map = window.P12_TERRAIN_ASSETS || {};
    var okUrl = typeof sprOkStr === 'function' ? sprOkStr(map[id]) : /^https?:\/\//i.test(String(map[id] || ''));
    return Object.prototype.hasOwnProperty.call(map, id) && okUrl ? map[id] : null;
  };
  if (typeof H !== 'undefined' && H) {
    H.battleBg = { of: bgForField, ids: function () { return Object.keys((window.P12BattleEngine || {}).TERRAIN || {}); } };
  }
  var BAT = batRecord({ key: null, state: null, opened: false, before: null });
  var batKey = function () { return 'battle:' + scope(); };
  var batFlipKey = function () { return 'flips:' + scope(); };
  var batFlipOf = function (species) {
    var m = load(batFlipKey(), null);
    return !!(m && species && m[species]);
  };
  var batFlipToggle = function (species) {
    if (!species) return false;
    var m = Object.assign({}, load(batFlipKey(), null) || {});
    m[species] = !m[species];
    try { save(batFlipKey(), m); } catch (e) {}
    return !!m[species];
  };
  // 驯兽师入场立绘：严禁把 _npc 半身图当成圆盘全身图！只有专属 person 全身立绘（或玩家手设全身链接）才返 fullUrl。
  var batTamerArt = function (side, trainerName) {
    var nm = String(trainerName || '').trim();
    var full = null, head = null;
    if (side === 'me') {
      var customFull = load('tamerFull:' + scope(), '');
      if (typeof sprOkStr === 'function' && sprOkStr(customFull)) full = customFull.trim();
      else if (typeof personGet === 'function' && nm) full = personGet(nm, 'full');
    } else if (typeof personGet === 'function' && nm) {
      full = personGet(nm, 'full');
    }
    if (typeof avatarOf === 'function' && nm) {
      var av = avatarOf(nm, '', 'head');
      head = av && av.url ? av.url : null;
    }
    return { fullUrl: full || null, headUrl: head || null };
  };
  var batSave = function () { try { save(batKey(), BAT); } catch (e) {} };
  var batLoad = function () {
    var c = load(batKey(), null);
    if (c && c.key && c.state) {
      var migrate = !c.state.report && !!c.report;
      BAT = batRecord(c);
      if (migrate) batSave();
      batDot();
    }
  };
  var batView = null, batEngine = null;
  var batReady = function () {
    batView = window.P12BattleView; batEngine = window.P12BattleEngine;
    if (batEngine && window.P12_TYPE_CHART) batEngine.setChart(window.P12_TYPE_CHART.chart || window.P12_TYPE_CHART);
    return !!(batView && batEngine && window.P12BattleParse);
  };
  var batTeamList = function () { var v = viewState(); return (v && v.team) || []; };
  var batMsg = function () {
    var h = st.chatHistory || [];
    for (var i = h.length - 1; i >= 0; i--) {
      if (h[i] && h[i].role === 'assistant' && typeof h[i].content === 'string' && h[i].content) return h[i];
    }
    return null;
  };
  var batDot = function () {
    try {
      var b = document.getElementById('p12-battle-entry');
      if (!BAT.key || !BAT.state || (BAT.state.over && BAT.opened === false)) { if (b) b.remove(); return; }
      if (!b) {
        b = document.createElement('button');
        b.id = 'p12-battle-entry';
        b.setAttribute('data-p12-battle-entry', '1');
        b.type = 'button';
        b.style.cssText = 'position:fixed;right:22px;bottom:118px;z-index:99989;border:2px solid #1b2340;clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);padding:9px 16px;font:900 13px/1 system-ui,sans-serif;color:#fff;background:linear-gradient(135deg,#ff6b2b,#ff3b5c);box-shadow:4px 4px 0 #1b2340;cursor:pointer';
        b.onclick = function () { batOpen(); };
        document.body.appendChild(b);
      }
      b.textContent = BAT.state && BAT.state.over ? '看战报' : '对战 · 第 ' + (BAT.state ? BAT.state.round : 1) + ' 回合';
    } catch (e) {}
  };
  var batOnAct = function (action) {
    if (!BAT.state || BAT.state.over) return;
    if (!BAT.before) BAT.before = { meHp: BAT.state.me.hp, foeHp: BAT.state.foe.hp, fatigue: BAT.state.me.fatigue };
    batEngine.act(BAT.state, action);
    if (BAT.state.over) BAT.state.report = batEngine.report(BAT.state, BAT.before);
    batSave(); batView.rerender(BAT.state); batDot();
  };
  var batOnOrder = function (from, to) {
    if (!BAT.state || !batEngine.reorderTeam) return;
    var order = (BAT.state.meTeam || []).map(function (_, i) { return i; });
    if (from == null || to == null || from === to) return;
    if (!(from >= 0 && from < order.length) || !(to >= 0 && to < order.length)) return;
    var moved = order.splice(from, 1)[0];
    order.splice(to, 0, moved);
    if (batEngine.reorderTeam(BAT.state, order)) {
      batSave(); batView.rerender(BAT.state); batDot();
    }
  };
  var batOnClose = function () {
    if (!BAT.state) return;
    BAT.opened = false;
    batSave(); batDot();
  };
  var batOnSend = function (rep) {
    if (!rep || !window.P12BattleParse) return;
    if (window.P12InstantVars) {
      try {
        var bSync = window.P12InstantVars.syncBattleResult(st, viewState(), rep);
        if (bSync && bSync.ok) v3Toast('✓ ' + bSync.summary, true);
      } catch (e) {}
    }
    var text = window.P12BattleParse.toReport(rep);
    try { st.userInput = text; } catch (e) {}
    try {
      var box = document.querySelector('textarea[placeholder="输入消息..."]') || document.querySelector('textarea');
      if (box) { box.value = text; box.dispatchEvent(new Event('input', { bubbles: true })); }
    } catch (e) {}
    try { batView.close(); } catch (e) {}
    batOnClose();
  };
  var batOpen = function () {
    if (!batReady() || !BAT.state) return;
    if (!BAT.opened) { BAT.opened = true; batSave(); }
    var vs = typeof viewState === 'function' ? viewState() : null;
    var pName = (vs && vs.name) || (st && st.user && st.user.name) || '驯兽师';
    batView.open(document, BAT.state, {
      enableGritQte: true,
      playerName: pName,
      team: batTeamList(), bg: bgForField(BAT.state.field),
      // 完整队员身份取图；NPC按物种清单，不从队员同物种覆盖猜配。
      artOf: function (name, side, beast) {
        if (typeof creatureChain !== 'function') return null;
        var list = creatureChain(name, beast && beast.types, (side === 'me' || side === 'mvp') ? beast : null);
        return list.length ? { url: list[0].url, mode: list[0].mode, candidates: list } : null;
      },
      tamerArtOf: batTamerArt,
      flipOf: batFlipOf,
      onFlipToggle: batFlipToggle,
      onAct: batOnAct, onSend: batOnSend, onOrder: batOnOrder,
    });
    batView.bind(document, { onAct: batOnAct, onSend: batOnSend, onClose: batOnClose, onOrder: batOnOrder });
    if (typeof psSaveId === 'function' && typeof psRefresh === 'function') {
      var openedState = BAT.state, openedScope = psSaveId();
      psRefresh(false).then(function () {
        if (typeof H !== 'undefined' && H.alive && BAT.state === openedState && psSaveId() === openedScope && batView.isOpen()) batView.rerender(openedState);
      });
    }
  };
  // 同一条回复里的块只建一次局；换回复就换新局（旧局进度按 scope 存着，刷新能接着打）
  var batSync = function () {
    if (!batReady()) return;
    batDot(); // Restore saved entry even if the latest message is not a new build.
    var m = batMsg();
    if (!m || m.content.indexOf(window.P12BattleParse.OPEN) < 0) return;
    var parsed = window.P12BattleParse.parseBuild(m.content, batEngine);
    if (!parsed) return;
    var key = window.P12BattleParse.keyOf(m);
    if (BAT.key === key) return;
    var team = batTeamList();
    if (!team.length) return;
    var bag = (viewState() && viewState().bag) || [];
    var state = batEngine.init(parsed.spec, team, { bag: bag, enableGritQte: true });
    BAT = batRecord({ key: key, state: state, opened: true, before: { meHp: state.me.hp, foeHp: state.foe.hp, fatigue: state.me.fatigue } });
    batSave(); batDot(); batOpen();
  };

  var wildPaint = function () {
    if (st && st.isGenerating) return;
    var folds = document.querySelectorAll('.wt-battle-fold[data-p12-fold="wild"]');
    if (!folds.length) return;
    if (!window.P12WildView || typeof window.P12WildView.mountWild !== 'function') {
      if (typeof window.__p12CloudLoad === 'function' && !window.__p12WildLoading) {
        window.__p12WildLoading = true;
        window.__p12CloudLoad('p12-wild-bundle.js', function () { window.__p12WildLoading = false; try { wildPaint(); } catch (e) {} });
      }
      return;
    }
    var vs = typeof viewState === 'function' ? viewState() : null;
    var team = vs && Array.isArray(vs.team) ? vs.team : [];
    for (var i = 0; i < folds.length; i++) {
      var d = folds[i];
      if (d.getAttribute('data-p12-wild-mounted')) continue;
      var raw = d.querySelector('.wt-raw');
      if (!raw) continue;
      var spec = null;
      try {
        var txt = String(raw.textContent || '').replace(/^\[野外探索\]/, '').replace(/\[\/野外探索\]$/, '').trim();
        spec = typeof repairJson === 'function' ? JSON.parse(repairJson(txt)) : JSON.parse(txt);
      } catch (e) { continue; }
      if (!spec || typeof spec !== 'object') continue;
      d.setAttribute('data-p12-wild-mounted', '1');
      var host = document.createElement('div');
      host.className = 'p12-wild-host';
      d.insertAdjacentElement('afterend', host);
      var key = 'wild:' + scope() + ':' + i + ':' + String(spec['区域'] || '');
      try {
        window.P12WildView.mountWild(host, spec, {
          team: team,
          saveKey: LS + key,
          onFinish: function (capsule, payload) {
            if (window.P12InstantVars && payload) {
              try {
                var wSync = window.P12InstantVars.syncWildResult(st, viewState(), payload);
                if (wSync && wSync.ok) v3Toast('✓ ' + wSync.summary, true);
              } catch (e) {}
            }
            if (typeof fillInput === 'function') fillInput(capsule);
          }
        });
      } catch (e) { H.wildErr = String(e && e.message || e); }
    }
  };
  if (typeof H !== 'undefined' && H) {
    H.wild = { paint: wildPaint };
  }

  var prosePaint = function () {
    if (!window.P12ProseV7 || typeof window.P12ProseV7.paint !== 'function') return;
    window.P12ProseV7.paint({
      doc: document,
      hook: typeof H !== 'undefined' ? H : null,
      state: typeof viewState === 'function' ? viewState() : null,
      avatarOf: typeof avatarOf === 'function' ? avatarOf : null,
      sprGet: typeof sprGet === 'function' ? sprGet : null,
      spriteNames: function () { return (typeof SPR !== 'undefined' && SPR && SPR.map) ? Object.keys(SPR.map) : []; }
    });
  };
  if (typeof H !== 'undefined' && H) {
    H.proseV7 = { paint: prosePaint };
  }

  // ---------- 每 800ms 跑一次：换卡就卸载；否则读一次正文（回复没变时不重复解析） ----------
  var timer = setInterval(function () {
    if (!H.alive) return;
    if (!onCard()) { H.stop('换卡'); return; }
    psSyncScope(); // 换分支先清玩家图缓存，避免本轮对战接线读到上一存档。
    if (st.isGenerating) return; // 正在流式生成，等落地再读
    var before = H.state, rec = null;
    try { rec = ingest(); } catch (e) { H.ingestErr = String(e && e.message || e); }
    try { batSync(); } catch (e) { H.battleErr = String(e && e.message || e); }
    uiPull(); // 没收到事件也能从 window.P12UiState 拉到最新一份
    try { dialPaint(); } catch (e) { DLG.err = String(e && e.message || e); }
    try { dexArt(); } catch (e) { DEXART.err = String(e && e.message || e); }
    try { prosePaint(); } catch (e) { H.proseErr = String(e && e.message || e); }
    try { blockArt(); } catch (e) { BLK.err = String(e && e.message || e); }
    try { psRefresh(); } catch (e) { PSS.err = String(e && e.message || e); }
    try { H.battleFold.paint(); } catch (e) { BATFOLD.err = String(e && e.message || e); }
    try { wildPaint(); } catch (e) { H.wildErr = String(e && e.message || e); }
    if (window.P12WristbandV3) { try { window.P12WristbandV3.syncLockBanner(document, st, render, v3Toast); } catch (e) {} }
    paintDial();
    if (cfg.open && uiDirty) { uiDirty = false; render(); }
    if (cfg.open && rec && rec !== before) render();
  }, 800);
  H.stop = function (why) {
    H.alive = false;
    psEndEdit(); psDropOverrides();
    if (pstore) psCfgQueue.catch(function () {}).then(function () { return pstore.close(); }).catch(function () {});
    clearInterval(timer);
    if (window.fetch === wrapped) window.fetch = origFetch;
    window.removeEventListener('resize', place);
    try { document.removeEventListener('pointerdown', outside, true); } catch (e) {}
    try { window.removeEventListener('p12-ui-state', uiEvent); window.removeEventListener('message', uiEvent); } catch (e) {}
    clearTimeout(flashTimer);
    clearTimeout(v3ToastTimer);
    try { var bv = document.getElementById('p12battle'); if (bv) bv.remove(); } catch (e) {}
    try { var be = document.getElementById('p12-battle-entry'); if (be) be.remove(); } catch (e) {}
    try { var pv7 = document.getElementById('p12-prose-v7-css'); if (pv7) pv7.remove(); } catch (e) {}
    try { var lb = document.getElementById('p12-ui-lock-banner'); if (lb) lb.remove(); } catch (e) {}
    try { var ts = document.getElementById('p12-toast'); if (ts) ts.remove(); } catch (e) {}
    el.remove(); css.remove();
    H.stoppedBy = why;
    delete window.__p12hook;
  };

  try { batLoad(); batReady(); } catch (e) { H.battleErr = String(e && e.message || e); }
  try { sprBoot(); } catch (e) { SPR.err = String(e && e.message || e); }
  try { ingest(); } catch (e) { H.ingestErr = String(e && e.message || e); }
  if (window.P12WristbandV3) { try { window.P12WristbandV3.syncLockBanner(document, st, render, v3Toast); } catch (e) {} }
  render();
  try { dialPaint(); } catch (e) { DLG.err = String(e && e.message || e); }
  try { dexArt(); } catch (e) { DEXART.err = String(e && e.message || e); }
  try { prosePaint(); } catch (e) { H.proseErr = String(e && e.message || e); }
  try { H.battleFold.paint(); } catch (e) { BATFOLD.err = String(e && e.message || e); }
  try { wildPaint(); } catch (e) { H.wildErr = String(e && e.message || e); }
})();

;
})();