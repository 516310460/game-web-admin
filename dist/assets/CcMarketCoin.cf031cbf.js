import{aA as e}from"./index.02e800e3.js";var a,r;(r=a||(a={})).CcMarketCoinList="/admin/game/findAll",r.GetMarketCoin="/Manager/CcMarketCoin/GetMarketCoin",r.AddMarketCoin="/admin/game/addGame",r.UpdateMarketCoin="/admin/game/updGame",r.DeleteMarketCoin="/Manager/CcMarketCoin/DeleteMarketCoin",r.finish="/admin/game/finish";const o=r=>e.post({url:a.CcMarketCoinList});function t(r,o="modal"){return e.post({url:a.AddMarketCoin,params:r},{errorMessageMode:o})}function n(r,o="modal"){return e.post({url:a.UpdateMarketCoin,params:r},{errorMessageMode:o})}function i(r,o="modal"){return e.post({url:a.DeleteMarketCoin,params:r},{errorMessageMode:o})}function s(r,o="modal"){return e.post({url:a.finish,params:r},{errorMessageMode:o})}export{t as A,o as C,i as D,n as U,s as f};
