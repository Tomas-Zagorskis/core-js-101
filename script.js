eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '!1h(e){1O s={};1h a(t){1X(s[t])1q s[t].1P;1O c=s[t]={i:t,l:!1,1P:{}};1q e[t].2n(c.1P,c,c.1P,a),c.l=!0,c.1P}a.m=e,a.c=s,a.d=1h(e,s,t){a.o(e,s)||1Q.22(e,s,{2o:!0,2O:t})},a.r=1h(e){"2P"!=2b 2c&&2c.2p&&1Q.22(e,2c.2p,{1y:"2Q"}),1Q.22(e,"2d",{1y:!0})},a.t=1h(e,s){1X(1&s&&(e=a(e)),8&s)1q e;1X(4&s&&"2R"==2b e&&e&&e.2d)1q e;1O t=1Q.2S(1m);1X(a.r(t),1Q.22(t,"2q",{2o:!0,1y:e}),2&s&&"2T"!=2b e)1Y(1O c 2U e)a.d(t,c,1h(s){1q e[s]}.1z(1m,c));1q t},a.n=1h(e){1O s=e&&e.2d?1h(){1q e.2q}:1h(){1q e};1q a.d(s,"a",s),s},a.o=1h(e,s){1q 1Q.2V.2W.2n(e,s)},a.p="",a(a.s=0)}([1h(e,s,a){a(1),e.1P=a(2)},1h(e,s,a){"2r 2s";a.r(s);a(3)},1h(e,s,a){"2r 2s";a.r(s);1g t=[];1O c={2t:["1H","1I","1J","1n","1A","1B","2u","2v","2w","2x","2e","2f"],2y:t};t[0]=[{15:"2X",13:{16:"`",11:"`",12:"~",17:"~"},14:{16:"Ё",11:"ё",12:"Ё",17:"ё"}},{15:"2Y",13:{16:"1",11:"1",12:"!",17:"!"},14:{16:"1",11:"1",12:"!",17:"!"}},{15:"2Z",13:{16:"2",11:"2",12:"@",17:"@"},14:{16:"2",11:"2",12:\'"\',17:\'"\'}},{15:"30",13:{16:"3",11:"3",12:"#",17:"#"},14:{16:"3",11:"3",12:"№",17:"№"}},{15:"31",13:{16:"4",11:"4",12:"$",17:"$"},14:{16:"4",11:"4",12:";",17:";"}},{15:"32",13:{16:"5",11:"5",12:"%",17:"%"},14:{16:"5",11:"5",12:"%",17:"%"}},{15:"33",13:{16:"6",11:"6",12:"^",17:"^"},14:{16:"6",11:"6",12:":",17:":"}},{15:"34",13:{16:"7",11:"7",12:"&",17:"&"},14:{16:"7",11:"7",12:"?",17:"?"}},{15:"35",13:{16:"8",11:"8",12:"*",17:"*"},14:{16:"8",11:"8",12:"*",17:"*"}},{15:"36",13:{16:"9",11:"9",12:"(",17:"("},14:{16:"9",11:"9",12:"(",17:"("}},{15:"37",13:{16:"0",11:"0",12:")",17:")"},14:{16:"0",11:"0",12:")",17:")"}},{15:"38",13:{16:"-",11:"-",12:"23",17:"23"},14:{16:"-",11:"-",12:"23",17:"23"}},{15:"39",13:{16:"=",11:"=",12:"+",17:"+"},14:{16:"=",11:"=",12:"+",17:"+"}},{15:"1H",13:{11:"1H",12:"1H"},14:{11:"1H",12:"1H"}}],t[1]=[{15:"1I",13:{11:"1I",12:"1I"},14:{11:"1I",12:"1I"}},{15:"3a",13:{11:"q",12:"Q"},14:{11:"й",12:"Й"}},{15:"3b",13:{11:"w",12:"W"},14:{11:"ц",12:"Ц"}},{15:"3c",13:{11:"e",12:"E"},14:{11:"у",12:"У"}},{15:"3d",13:{11:"r",12:"R"},14:{11:"к",12:"К"}},{15:"3e",13:{11:"t",12:"T"},14:{11:"е",12:"Е"}},{15:"3f",13:{11:"y",12:"Y"},14:{11:"н",12:"Н"}},{15:"3g",13:{11:"u",12:"U"},14:{11:"г",12:"Г"}},{15:"3h",13:{11:"i",12:"I"},14:{11:"ш",12:"Ш"}},{15:"3i",13:{11:"o",12:"O"},14:{11:"щ",12:"Щ"}},{15:"3j",13:{11:"p",12:"P"},14:{11:"з",12:"З"}},{15:"3k",13:{16:"[",11:"[",12:"{",17:"{"},14:{16:"Х",11:"х",12:"Х",17:"х"}},{15:"3l",13:{16:"]",11:"]",12:"}",17:"}"},14:{16:"Ъ",11:"ъ",12:"Ъ",17:"ъ"}},{15:"3m",13:{16:"\\\\",11:"\\\\",12:"|",17:"|"},14:{16:"\\\\",11:"\\\\",12:"/",17:"/"}},{15:"2f",13:{11:"24",12:"24"},14:{11:"24",12:"24"}}],t[2]=[{15:"1n",13:{11:"1n",12:"1n"},14:{11:"1n",12:"1n"}},{15:"3n",13:{11:"a",12:"A"},14:{11:"ф",12:"Ф"}},{15:"3o",13:{11:"s",12:"S"},14:{11:"ы",12:"Ы"}},{15:"3p",13:{11:"d",12:"D"},14:{11:"в",12:"В"}},{15:"3q",13:{11:"f",12:"F"},14:{11:"а",12:"А"}},{15:"3r",13:{11:"g",12:"G"},14:{11:"п",12:"П"}},{15:"3s",13:{11:"h",12:"H"},14:{11:"р",12:"Р"}},{15:"3t",13:{11:"j",12:"J"},14:{11:"о",12:"О"}},{15:"3u",13:{11:"k",12:"K"},14:{11:"л",12:"Л"}},{15:"3v",13:{11:"l",12:"L"},14:{11:"д",12:"Д"}},{15:"3w",13:{16:";",11:";",12:":",17:":"},14:{16:"Ж",11:"ж",12:"Ж",17:"ж"}},{15:"3x",13:{16:"\'",11:"\'",12:\'"\',17:\'"\'},14:{16:"Э",11:"э",12:"Э",17:"э"}},{15:"1J",13:{11:"1J",12:"1J"},14:{11:"1J",12:"1J"}}],t[3]=[{15:"1A",13:{11:"1C",12:"1C"},14:{11:"1C",12:"1C"}},{15:"3y",13:{11:"z",12:"Z"},14:{11:"я",12:"Я"}},{15:"3z",13:{11:"x",12:"X"},14:{11:"ч",12:"Ч"}},{15:"3A",13:{11:"c",12:"C"},14:{11:"с",12:"С"}},{15:"3B",13:{11:"v",12:"V"},14:{11:"м",12:"М"}},{15:"3C",13:{11:"b",12:"B"},14:{11:"и",12:"И"}},{15:"3D",13:{11:"n",12:"N"},14:{11:"т",12:"Т"}},{15:"3E",13:{11:"m",12:"M"},14:{11:"ь",12:"Ь"}},{15:"3F",13:{16:",",11:",",12:"<",17:"<"},14:{16:"Б",11:"б",12:"Б",17:"б"}},{15:"3G",13:{16:".",11:".",12:">",17:">"},14:{16:"Ю",11:"ю",12:"Ю",17:"ю"}},{15:"3H",13:{16:"/",11:"/",12:"?",17:"?"},14:{16:".",11:".",12:",",17:","}},{15:"3I",13:{11:"▲",12:"▲"},14:{11:"▲",12:"▲"}},{15:"1B",13:{11:"1C",12:"1C"},14:{11:"1C",12:"1C"}}],t[4]=[{15:"2w",13:{11:"1D",12:"1D"},14:{11:"1D",12:"1D"}},{15:"2e",13:{11:"25",12:"25"},14:{11:"25",12:"25"}},{15:"2u",13:{11:"1E",12:"1E"},14:{11:"1E",12:"1E"}},{15:"3J",13:{11:" ",12:" "},14:{11:" ",12:" "}},{15:"2v",13:{11:"1E",12:"1E"},14:{11:"1E",12:"1E"}},{15:"3K",13:{11:"◄",12:"◄"},14:{11:"◄",12:"◄"}},{15:"3L",13:{11:"▼",12:"▼"},14:{11:"▼",12:"▼"}},{15:"3M",13:{11:"►",12:"►"},14:{11:"►",12:"►"}},{15:"2x",13:{11:"1D",12:"1D"},14:{11:"1D",12:"1D"}}];(3N 1t{3O(){10.1c=1m,10.1f=1m,10.19={1u:!1,1v:!1,1R:!1,1l:"11",1w:"13"},10.18={1c:1m,1e:1m,1F:1m,1r:1m},10.1K={1c:1m,1e:1m,1F:1m,1r:1m}}2z(e){1i.1Z.1a.1j("1Z");1g s=1i.1s("1x");s.1a.1j("3P");1g a=1i.1s("p");a.2g="3Q Виртуальная клавиатура",a.1a.1j("3R"),s.1p(a);1g t=1i.1s("1f");t.1a.1j("1Z--1f","1f"),t.26("2A","1f"),t.26("3S","5"),t.26("3T","3U"),10.1f=t,s.1p(10.1f),10.1c=1i.1s("1x"),10.1c.1a.1j("1Z--20","20"),10.1c.26("2A","20");1g c=1i.3V();1Y(21 s=0;s<e.1o;s+=1){1g a=1i.1s("1x");a.1a.1j("20--2B","2B");1Y(21 t=0;t<e[s].1o;t+=1){1g c=1i.1s("1x");c.1a.1j("20--2h","2h",e[s][t].15);1g n=1i.1s("1b");n.1a.1j("14","1d"),n.1G("2C",`<1b 1t="11 1d">${e[s][t].14.11}</1b>`),n.1G("1S",`<1b 1t="12 1d">${e[s][t].14.12}</1b>`),n.1G("1S",`<1b 1t="16 1d">${e[s][t].14.16||e[s][t].14.12}</1b>`),n.1G("1S",`<1b 1t="17 1d">${e[s][t].14.17||e[s][t].14.11}</1b>`),c.1p(n);1g i=1i.1s("1b");i.1a.1j("13"),i.1G("2C",`<1b 1t="11">${e[s][t].13.11}</1b>`),i.1G("1S",`<1b 1t="12 1d">${e[s][t].13.12}</1b>`),i.1G("1S",`<1b 1t="16 1d">${e[s][t].13.16||e[s][t].13.12}</1b>`),i.1G("1S",`<1b 1t="17 1d">${e[s][t].13.17||e[s][t].13.11}</1b>`),c.1p(i),a.1p(c)}c.1p(a)}10.1c.1p(c),s.1p(10.1c);1g n=1i.1s("p");n.2g="Клавиатура создана в операционной системе 3W",n.1a.1j("3X"),s.1p(n);1g i=1i.1s("p");i.2g="Для переключения языка комбинация: левыe 3Y + 3Z",i.1a.1j("40"),s.1p(i),1i.1Z.1p(s)}1L(){10.18.1c.1a.1j("27")}1M(){10.18.1c&&(10.1K.1c&&10.1K.1c.1a.1T("27")&&(["1n","1A","1B"].2i(10.1K.1e)||10.1K.1c.1a.1U("27")),10.18.1c.1a.1U("27"))}1N(){1g e=10.1c.1k(`1x>.${10.19.1w}`);1Y(21 s=0;s<e.1o;s+=1)e[s].1k("1b")[0].1a.1T("1d")||e[s].1k("1b")[0].1a.1j("1d"),e[s].1k("1b")[1].1a.1T("1d")||e[s].1k("1b")[1].1a.1j("1d"),e[s].1k("1b")[2].1a.1T("1d")||e[s].1k("1b")[2].1a.1j("1d"),e[s].1k("1b")[3].1a.1T("1d")||e[s].1k("1b")[3].1a.1j("1d"),(10.19.1u||10.19.1v)&&10.19.1R?(e[s].1k("1b")[3].1a.1U("1d"),10.19.1l="17"):10.19.1R?(e[s].1k("1b")[2].1a.1U("1d"),10.19.1l="16"):10.19.1u||10.19.1v?(e[s].1k("1b")[1].1a.1U("1d"),10.19.1l="12"):(e[s].1k("1b")[0].1a.1U("1d"),10.19.1l="11")}2j(){1g e=1h(){1g e=10.1c.1k(`1x>.${10.19.1w}`);1Y(21 s=0;s<e.1o;s+=1)e[s].1a.2D("1d"),e[s].1k(`1b.${10.19.1l}`)[0].1a.2D("1d")}.1z(10);e(),"13"===10.19.1w?10.19.1w="14":10.19.1w="13",2E.41("1w",10.19.1w),e()}2k(){21 e=10.1f.1y;1g s=10.1f.28;1g a=1h(){s>=0&&s<=e.1o?(10.1f.1y=e.1V(0,s)+10.18.1r+e.1V(s,e.1o),10.1f.28=s+10.18.1r.1o,10.1f.2l=s+10.18.1r.1o):10.1f.1y+=10.18.1r}.1z(10);1X(c.2t.2i(10.18.1e))42(10.18.1e){1l"1H":s>0&&s<=e.1o&&(e=e.1V(0,s-1)+e.1V(s,e.1o),10.1f.1y=e,10.1f.28=s-1,10.1f.2l=s-1);1W;1l"2f":s>=0&&s<=e.1o-1&&(e=e.1V(0,s)+e.1V(s+1,e.1o),10.1f.1y=e,10.1f.28=s,10.1f.2l=s);1W;1l"1I":10.18.1r="    ",a();1W;1l"1J":10.18.1r="\\n",a();1W;1l"1n":10.19.1R&&!10.18.1F.43?(10.1M(),10.19.1R=!1):(10.1L(),10.19.1R=!0),10.1N();1W;1l"1A":10.19.1u||10.19.1v||(10.1L(),10.19.1u=!0,10.1N());1W;1l"1B":10.19.1v||10.19.1u||(10.1L(),10.19.1v=!0,10.1N())}44 a();10.18.1F.45&&10.18.1F.46&&10.2j()}2F(e){e.2G(),10.18.1F=e,10.18.1e=e.1e,[10.18.1c]=10.1c.2H(e.1e),10.18.1c&&(10.18.1r=10.18.1c.1k(":47(.1d)")[1].2I,10.2k(),"2e"===10.18.1e?(10.1L(),48(10.1M.1z(10),49)):["1n","1A","1B"].2i(10.18.1e)||10.1L())}2J(e){1g s=10.1c.2H(e.1e)[0];s&&(10.18.1c=s.2m("1x"),"1n"!==e.1e&&10.1M(),"1A"!==e.1e&&"1B"!==e.1e||("1A"===e.1e?(10.19.1u=!1,10.1M()):"1B"===e.1e&&(10.19.1v=!1,10.1M()),10.1N()))}2K(e){"4a"===e.29.4b&&(10.18.1F=e,10.18.1c=e.29.2m("1x"),[,,10.18.1e]=10.18.1c.1a,10.18.1r=e.29.2I,10.2k(),"1n"!==10.18.1e&&10.1L(),10.1K={...10.18},e.2G())}2L(e){10.18.1F=e,10.18.1c=e.29.2m("1x"),10.18.1c&&(10.18.1c.1a.1T("2h")?[,,10.18.1e]=10.18.1c.1a:10.18={...10.1K},"1n"!==10.18.1e&&(10.1M(),10.19.1u&&"1A"===10.18.1e&&(10.19.1u=!1,10.1N()),10.19.1v&&"1B"===10.18.1e&&(10.19.1v=!1,10.1N())))}2M(){"14"===2E.1w&&10.2j()}2N(e){10.2z(e),10.2M(),1i.2a("4c",10.2J.1z(10)),1i.2a("4d",10.2F.1z(10)),1i.2a("4e",10.2L.1z(10)),10.1c.2a("4f",10.2K.1z(10))}}).2N(c.2y)},1h(e,s){}]);',
    62,
    264,
    "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|caseDown|caseUp|eng|rus|className|caps|shiftCaps|current|state|classList|span|element|hidden|code|textarea|const|function|document|add|querySelectorAll|case|null|CapsLock|length|appendChild|return|char|createElement|class|isShiftLeftPressed|isShiftRightPressed|lang|div|value|bind|ShiftLeft|ShiftRight|Shift|Ctrl|Alt|event|insertAdjacentHTML|Backspace|Tab|Enter|previous|addActiveState|removeActiveState|toggleCase|var|exports|Object|isCapsLockPressed|beforeEnd|contains|remove|slice|break|if|for|body|keyboard|let|defineProperty|_|Del|Win|setAttribute|active|selectionStart|target|addEventListener|typeof|Symbol|__esModule|MetaLeft|Delete|innerText|key|includes|toggleLang|implementKeyFunction|selectionEnd|closest|call|enumerable|toStringTag|default|use|strict|SPECIALS|AltLeft|AltRight|ControlLeft|ControlRight|ROWS|initDomStructure|id|row|afterBegin|toggle|localStorage|keyDownHandler|preventDefault|getElementsByClassName|textContent|keyUpHandler|mouseDownHandler|mouseUpHandler|initLanguage|initKeyboard|get|undefined|Module|object|create|string|in|prototype|hasOwnProperty|Backquote|Digit1|Digit2|Digit3|Digit4|Digit5|Digit6|Digit7|Digit8|Digit9|Digit0|Minus|Equal|KeyQ|KeyW|KeyE|KeyR|KeyT|KeyY|KeyU|KeyI|KeyO|KeyP|BracketLeft|BracketRight|Backslash|KeyA|KeyS|KeyD|KeyF|KeyG|KeyH|KeyJ|KeyK|KeyL|Semicolon|Quote|KeyZ|KeyX|KeyC|KeyV|KeyB|KeyN|KeyM|Comma|Period|Slash|ArrowUp|Space|ArrowLeft|ArrowDown|ArrowRight|new|constructor|centralizer|RSS|title|rows|cols|50|createDocumentFragment|Windows|description|ctrl|alt|language|setItem|switch|repeat|else|ctrlKey|altKey|not|setTimeout|300|SPAN|tagName|keyup|keydown|mouseup|mousedown".split(
      "|"
    ),
    0,
    {}
  )
);
