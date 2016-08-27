'use strict';

const { app, BrowserWindow } = require('electron');

const currentURL = `file://${__dirname}/index.html`;

// メインウィンドウ
let mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', () => {
  // メイン画面のサイズ
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // 起動 url を指定
  mainWindow.loadURL(currentURL);

  // デベロッパーツールを表示
  // 不要であればコメントアウト
  mainWindow.toggleDevTools();

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
