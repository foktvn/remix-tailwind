import {
  Link
} from "/build/_shared/chunk-GKXR4ZKQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-T7LDG7OJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1707999082313.257";
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-[url('/bg.jpg')] scroll-x-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-screeen h-screen items-center justify-center gap-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/laptop.png", width: 250, alt: "" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 25,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-400", children: "Fenny Oktaviani" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-lg gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600", to: "/about", children: "Education" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 28,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600", to: "/#", children: "Experience" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600", to: "/#", children: "Project" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-center px-36", children: `"Passionate Junior Software Engineer with a zest for exploring diverse realms in the tech world. Currently immersed in Frontend development and QA, I'm eager to deepen my knowledge and skills further. Ready to embrace challenges, I constantly seek opportunities to learn and grow. \u{1F680}\u{1F4BB} #JuniorDev #WebDevelopmentExplorer #FrontendDev #QAEnthusiast"` }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default
};
//# sourceMappingURL=/build/routes/_index-SUUSH46D.js.map
