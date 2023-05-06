/***/ "./src/Abuse_StormCrafter.ts":
/*!***********************************!*\
  !*** ./src/Abuse_StormCrafter.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let Abuse_StormCrafter = {};
var abuse_stormCrafter;
(function (abuse_stormCrafter) {
    const PATH = ['Custom Scripts', 'Abuse', 'StromCrafter'];
    let myHero, myPlayer;
    let ENABLE = Menu.AddToggle(PATH, 'Enable', false)
        .SetNameLocale('ru', 'Включить')
        .OnChange(state => ENABLE = state.newValue)
        .GetValue();
    let Bind = Menu.AddKeyBind(PATH, 'Bind', Enum.ButtonCode.KEY_NONE);
    Menu.GetFolder(PATH).SetImage('panorama/images/items/stormcrafter_png.vtex_c');
    Menu.GetFolder(['Custom Scripts', 'Abuse']).SetImage('~/menu/40x40/abuse.png');
    function Dist2D(vec1, vec2) {
        if (vec1 && vec2) {
            let pos1 = (vec1.x ? (vec1) : (vec1.GetAbsOrigin ? (vec1.GetAbsOrigin()) : (0)));
            let pos2 = (vec2.x ? (vec2) : (vec2.GetAbsOrigin ? (vec2.GetAbsOrigin()) : (0)));
            return pos1 && pos2 && pos1.sub(pos2).Length2D();
        }
        return -1;
    }
    function PickItem(self, item, ex) {
        EntitySystem.GetLocalPlayer().PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_PICKUP_ITEM, item, null, null, 3, self, ex || false, false);
    }
    Abuse_StormCrafter.OnUpdate = () => {
        if (!myHero)
            return;
        if (Bind.IsKeyDown() && Engine.OnceAt(0.135)) {
            let neutralItem = myHero.GetItemByIndex(16);
            if (neutralItem) {
                if (neutralItem.GetName() == 'item_stormcrafter') {
                    EntitySystem.GetLocalPlayer().PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_DROP_ITEM, null, myHero.GetAbsOrigin(), neutralItem, 3, myHero);
                }
            }
            else {
                let hasDropStorm = EntitySystem.GetPhysicalItemsList()
                    .filter(x => x.IsExist() && Dist2D(myHero, x) <= 150 && x.GetItem() && x.GetItem().GetName() == 'item_stormcrafter')[0];
                if (hasDropStorm) {
                    PickItem(myHero, hasDropStorm);
                }
            }
        }
    };
    Abuse_StormCrafter.OnScriptLoad = Abuse_StormCrafter.OnGameStart = () => {
        myHero = EntitySystem.GetLocalHero();
        if (myHero)
            myPlayer = EntitySystem.GetLocalPlayer();
    };
    RegisterScript(Abuse_StormCrafter);
})(abuse_stormCrafter || (abuse_stormCrafter = {}));


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/Abuse_StormCrafter.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/Abuse_StormCrafter.ts */"./src/Abuse_StormCrafter.ts");


/***/ })

/******/ });
