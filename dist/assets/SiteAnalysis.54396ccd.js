import{k as a,bQ as t,r as s,L as i,o as e,q as n,R as r,s as o,Y as b,O as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              */import p from"./VisitAnalysis.f10f0e04.js";import y from"./VisitAnalysisBar.13dffd72.js";import"./useECharts.e663aa6b.js";import"./index.e2f8dfb6.js";import"./props.f48aca0b.js";var d=a({components:{Card:t,VisitAnalysis:p,VisitAnalysisBar:y},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const f={key:0},l={key:1};d.render=function(a,t,s,p,y,d){const m=i("VisitAnalysis"),j=i("VisitAnalysisBar"),u=i("Card");return e(),n(u,c({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(e(),n("p",f,[o(m)])):b("",!0),"tab2"===a.activeKey?(e(),n("p",l,[o(j)])):b("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default d;
