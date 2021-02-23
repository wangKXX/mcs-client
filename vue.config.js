const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const isProd = process.env.NODE_ENV === "product";

module.exports = {
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-px2rem')({
                    remUnit: 75
                }), 
        ]
      }
    }
  },
  
  pages: {
    list: {
      entry: "src/pages/list/main.js",
      template: "public/list.html",
      filename: "list.html",
      title: "藏品列表",
      chunks: ["chunk-vendors", "chunk-common", "list"]
    },
    audit: {
      entry: "src/pages/audit/main.js",
      template: "public/index.html",
      filename: "audit.html",
      title: "藏品审核",
      chunks: ["chunk-vendors", "chunk-common", "audit"]
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
   // subpage: "src/pages/error/main.js"
  },
  productionSourceMap: false, // 生产环境禁用sourceMap
  lintOnSave: true,
  publicPath: `/`,
  outputDir: `dist/`,
  devServer: {
    host: "0.0.0.0",
    hotOnly: true,
    open: true,
    port: 8080,
    proxy: {
      "/local": {
        target:"http://127.0.0.1:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/local": ""
        },
        cookiePathRewrite: {
          "/unchanged.path/": "/unchanged.path/",
          "/old.path/": "/new.path/",
          "*": ""
        },
        cookieDomainRewrite: {
          "unchanged.domain": "unchanged.domain",
          "old.domain": "new.domain",
          "*": ""
        }
      }
    }
  }
};