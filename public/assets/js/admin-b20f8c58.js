import{i as t}from"./request-56692d6c.js";import{x as s}from"./index-fee14184.js";const e=o=>t.post(`${s()}/login`,o),a=()=>t.post(`${s()}/logout`),g=o=>t.post(`${s()}/addAccount`,o),d=o=>t.post(`${s()}/getAccountInfo`,o),i=o=>t.post(`${s()}/getAccounts?page=${o.page??1}`,o),p=o=>t.post(`${s()}/switchAccount`,o),f=o=>t.post(`${s()}/deleteAccount`,o),u=o=>t.post(`${s()}/updateAccount`,o),$=()=>t.post(`${s()}/getConfig`),A=()=>t.post(`${s()}/getMailConfig`),C=o=>t.post(`${s()}/changeConfig`,o),h=o=>t.post(`${s()}/changeMailConfig`,o),l=()=>t.post(`${s()}/sendTestMsg`),r=o=>t.post(`${s()}/changeUserInfo`,o);export{a,$ as b,d as c,e as d,C as e,A as f,h as g,l as h,r as i,g as j,p as k,u as l,f as m,i as n};
