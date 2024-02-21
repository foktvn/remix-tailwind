import {
  createHotContext
} from "/build/_shared/chunk-T7LDG7OJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/form.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/form.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/form.jsx"
  );
  import.meta.hot.lastModified = "1708511261995.4885";
}
function FormProject() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "flex flex-col items-start gap-y-6", method: "post", action: "/", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-xl", htmlFor: "project_name", children: "Nama Projek : " }, void 0, false, {
        fileName: "app/components/form.jsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "rounded-md bg-transparent border", type: "text", id: "project_name", name: "project_namr" }, void 0, false, {
        fileName: "app/components/form.jsx",
        lineNumber: 25,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/form.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-xl", htmlFor: "project_detail", children: "Detail Projek : " }, void 0, false, {
        fileName: "app/components/form.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "rounded-md bg-transparent border", name: "project_detail", id: "project_detail", cols: "30", rows: "5" }, void 0, false, {
        fileName: "app/components/form.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/form.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex w-[300px] justify-center rounded-md bg-white text-gray-600 font-bold border border-gray-600 p-3", children: "Simpan" }, void 0, false, {
      fileName: "app/components/form.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/form.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = FormProject;
var _c;
$RefreshReg$(_c, "FormProject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/project.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/project.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/project.jsx"
  );
  import.meta.hot.lastModified = "1708510971614.5974";
}
function Poject() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col w-screen h-screen items-center p-6 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Masukan project baru anda" }, void 0, false, {
      fileName: "app/routes/project.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormProject, {}, void 0, false, {
      fileName: "app/routes/project.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-[500px] bg-white rounded-md" }, void 0, false, {
      fileName: "app/routes/project.jsx",
      lineNumber: 27,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/project.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/project.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = Poject;
var _c2;
$RefreshReg$(_c2, "Poject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Poject as default
};
//# sourceMappingURL=/build/routes/project-OZQC5OPC.js.map
