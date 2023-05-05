(function(module, exports) {

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

    Abuse_StormCrafter.OnUpdate = () => {
        if (!myHero)
            return;
        if (Bind.IsKeyDown() && Engine.OnceAt(0.135)) {
            let neutralItem = myHero.GetItemByIndex(16);
            if (neutralItem) {
                if (neutralItem.GetName() == 'item_stormcrafter') {
                    EntitySystem.GetLocalPlayer().PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_ITEM, null, null, null, 3, myHero, neutralItem.GetIndex(), false);
                }
            }
            else {
                let hasStormInStash = false;
                for (let i = 6; i < 12; i++) {
                    let item = myHero.GetItemByIndex(i);
                    if (item && item.GetName() === 'item_stormcrafter') {
                        hasStormInStash = true;
                        EntitySystem.GetLocalPlayer().PrepareUnitOrders(Enum.UnitOrder.DOTA_UNIT_ORDER_MOVE_ITEM, null, null, null, 16, myHero, item.GetIndex(), false);
                        break;
                    }
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
