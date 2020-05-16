// Node.js APIはすべてプリロードプロセスで使用できます。
// Chrome拡張機能と同じサンドボックスがあります。
const apptitle:string = 'アプリ';

// アロー関数:getelemId(引数1:selector1(文字列))
export const getelemId = (selector1: string) => {
  // 変数:elem1 に 要素取得のオブジェクトを代入(引数1:selectorで選択)
  const elem1:any = document.getElementById(selector1);

  // 変数:elem1がnullか？(要素が取得できたか？) 
  if (elem1) {
      return elem1; // 取得できたら変数:elem1を返す
  }
};

// アロー関数:getelemTag(引数1:selector2(文字列))
export const getelemTag = (selector2: string) => {
  // 変数:elem2 に 要素取得のオブジェクトを代入(引数1:selectorで選択)
  const elem2:any = document.getElementsByTagName(selector2);

  // 変数:elem2がnullか？(要素が取得できたか？) 
  if (elem2) {
      return elem2; // 取得できたら変数:elem1を返す
  }
};

// アロー関数:getelemCls(引数1:selector4(文字列))
export const getelemCls = (selector3: string) => {
  // 変数:elem3 に 要素取得のオブジェクトを代入(引数1:selectorで選択)
  const elem3:any = document.getElementsByClassName(selector3);

  // 変数:elem1がnullか？(要素が取得できたか？) 
  if (elem3) {
      return elem3; // 取得できたら変数:elem1を返す
  }
};

//ウィンドウでDOM要素がすべて読み込みを終えたとき
//window.onloadより先に発生する
window.addEventListener("DOMContentLoaded", () => {

  /* ウィンドウメニュー用 */
  // https://stackoverflow.com/questions/37625194/close-minimize-and-maximize-buttons-on-electron
  // https://stackoverflow.com/a/58350164

  // 閉じるボタン
  getelemId('close-btn').addEventListener("click",function() {
      window.close();
    }, false
  );

  // 最小化ボタン
  const { BrowserWindow } = require('electron').remote;
  getelemId('min-btn').addEventListener("click", function() {
    var window = BrowserWindow.getFocusedWindow();
    window.minimize();
  });

  getelemId('windowicon').insertAdjacentHTML('beforebegin','');
  getelemId('windowtitle').innerText = apptitle;
});