var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 113,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

// app/styles/global.css
var global_default = "/build/_assets/global-5JT2EH6W.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        Meta,
        {
          title: "My Remix App",
          description: "Welcome to my Remix app."
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 14,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-gray-400 text-white w-screen h-full", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/experience.jsx
var experience_exports = {};
__export(experience_exports, {
  default: () => Experience
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Experience() {
  return /* @__PURE__ */ jsxDEV3("h1", { children: "Ini Halaaman Experience" }, void 0, !1, {
    fileName: "app/routes/experience.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/education.jsx
var education_exports = {};
__export(education_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV4("h1", { children: "Ini halaman about" }, void 0, !1, {
    fileName: "app/routes/education.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/routes/project.jsx
var project_exports = {};
__export(project_exports, {
  default: () => Poject
});

// app/components/form.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function FormProject() {
  return /* @__PURE__ */ jsxDEV5("form", { className: "flex flex-col items-start gap-y-6", method: "post", action: "/", children: [
    /* @__PURE__ */ jsxDEV5("p", { className: "flex justify-center gap-4", children: [
      /* @__PURE__ */ jsxDEV5("label", { className: "text-xl", htmlFor: "project_name", children: "Nama Projek : " }, void 0, !1, {
        fileName: "app/components/form.jsx",
        lineNumber: 5,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { className: "rounded-md bg-transparent border", type: "text", id: "project_name", name: "project_namr" }, void 0, !1, {
        fileName: "app/components/form.jsx",
        lineNumber: 6,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/form.jsx",
      lineNumber: 4,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { className: "flex justify-center gap-4", children: [
      /* @__PURE__ */ jsxDEV5("label", { className: "text-xl", htmlFor: "project_detail", children: "Detail Projek : " }, void 0, !1, {
        fileName: "app/components/form.jsx",
        lineNumber: 9,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5("textarea", { className: "rounded-md bg-transparent border", name: "project_detail", id: "project_detail", cols: "30", rows: "5" }, void 0, !1, {
        fileName: "app/components/form.jsx",
        lineNumber: 10,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/form.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("button", { className: "flex w-[300px] justify-center rounded-md bg-white text-gray-600 font-bold border border-gray-600 p-3", children: "Simpan" }, void 0, !1, {
      fileName: "app/components/form.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/form.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/project.jsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Poject() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col w-screen h-screen items-center p-6 gap-y-8", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl font-bold", children: "Masukan project baru anda" }, void 0, !1, {
      fileName: "app/routes/project.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6(FormProject, {}, void 0, !1, {
      fileName: "app/routes/project.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-cols-3", children: /* @__PURE__ */ jsxDEV6("div", { className: "w-full h-[500px] bg-white rounded-md" }, void 0, !1, {
      fileName: "app/routes/project.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/project.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/project.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Home
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Home() {
  return /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col bg-[url('/bg.jpg')] w-screen overflow-x-hidden", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col w-full h-screen items-center justify-center gap-y-6", children: [
    /* @__PURE__ */ jsxDEV7("img", { src: "/laptop.png", width: 250, alt: "" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 7,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ jsxDEV7("h1", { className: "text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-400", children: "Fenny Oktaviani" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "flex text-lg gap-x-4", children: [
      /* @__PURE__ */ jsxDEV7(Link, { className: "border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600", to: `/education
                    `, children: "Education" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 10,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV7(Link, { className: "border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600", to: "/experience", children: "Experience" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 12,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV7(Link, { className: "border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600", to: "/project", children: "Project" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 13,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "font-bold text-center px-36", children: `"Passionate Junior Software Engineer with a zest for exploring diverse realms in the tech world. Currently immersed in Frontend development and QA, I'm eager to deepen my knowledge and skills further. Ready to embrace challenges, I constantly seek opportunities to learn and grow. \u{1F680}\u{1F4BB} #JuniorDev #WebDevelopmentExplorer #FrontendDev #QAEnthusiast"` }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 15,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-77JTSYED.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-7RZFFSMX.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-T7LDG7OJ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XSWXSGDC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JYOPGX6W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/education": { id: "routes/education", parentId: "root", path: "education", index: void 0, caseSensitive: void 0, module: "/build/routes/education-DYHLUSB2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/experience": { id: "routes/experience", parentId: "root", path: "experience", index: void 0, caseSensitive: void 0, module: "/build/routes/experience-BVETSITF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/project": { id: "routes/project", parentId: "root", path: "project", index: void 0, caseSensitive: void 0, module: "/build/routes/project-OZQC5OPC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "c64f6331", hmr: { runtime: "/build/_shared/chunk-T7LDG7OJ.js", timestamp: 1708511262467 }, url: "/build/manifest-C64F6331.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/experience": {
    id: "routes/experience",
    parentId: "root",
    path: "experience",
    index: void 0,
    caseSensitive: void 0,
    module: experience_exports
  },
  "routes/education": {
    id: "routes/education",
    parentId: "root",
    path: "education",
    index: void 0,
    caseSensitive: void 0,
    module: education_exports
  },
  "routes/project": {
    id: "routes/project",
    parentId: "root",
    path: "project",
    index: void 0,
    caseSensitive: void 0,
    module: project_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
