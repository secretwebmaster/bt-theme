// Selector Constants
const HEADER_SELECTOR = '#layout-header > div.flex.flex-wrap.items-center.h-full.pr-6';
const LEFT_MENU_SELECTOR = 'div.n-menu.__menu-dark-bzl0uw-b.n-menu--vertical.sider-menu';
const FOOTER_CONTAINER_ID = '#layout-footer';
const N_POPOVER_CONTENT_SELECTOR = 'div.home-header-box.flex-1.flex.items-center > div';
const FLOAT_BAR_NAV_SELECTOR = '#app > div > div > div > div.float-bar-nav > div:nth-child(2)';
const HEADER_SOU = '#layout-main > section > div.module-ui.home-header.mx-\\[1\\.2rem\\].\\!rounded-\\[1\\.6rem\\] > div.home-header-left > div.flex.items-center.mr-\\[1\\.2rem\\].ltd-theme.el-tooltip__trigger > span.icon-end-time-free.icon-paid-ltd';
let footerAdded = false;
let leftAdded = false;
let topAdded = false;
// Configuration Object
const config = {
    replacements: {
        text: {
            "宝塔Linux面板": "宝塔破解版",
            "联系客服": "Telegram客服",
            "微信扫码": "Telegram",
            "飞书URL": "Telegram URL",
            "飞书": "Telegram",
            "续费": "",
            "download.bt.cn": "wntheme.com",
            "2035-": "2099-",
            "企业版": "破解版",
        },
        href: {
            "www.bt.cn/new/wechat_customer": "wntheme.com",
            "www.bt.cn/bbs/thread-1172-1-1.html": "#",
            "www.bt.cn/bbs/thread-115241-1-1.html": "#",
            "www.bt.cn/bbs/thread-108274-1-1.html": "#",
            "www.bt.cn/new/product/safety_report.html": "wntheme.com",
            "www.bt.cn": "wntheme.com",
            "qm.qq.com/cgi-bin/qm/qr": "wntheme.com",
        },
        src: {
            "feishu.svg": "telegram.svg",
            "feishu-not.svg": "telegram-not.svg",
            "wechat-qrcode.png": "telegram-qrcode.png",
        }
    },
    links: {
        top: [  // Changed from 'support' to 'top'
            {text: '站长资源', url: 'https://3dayseo.com'},
            {text: '文尼模板网', url: 'https://wntheme.com'}
        ],
        left: [
            {
                url: 'https://3dayseo.com',
                text: '站長資源',
                svgPath: `<i role="img" class="n-icon __icon-dark-bzl0uw-d">
                <svg width="16px" height="16px" viewBox="0 -0.46 21.4 21.4" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M10.402 17.267 0.252 11.407C0.116 11.329 0.006 11.412 0.006 11.593v2.717c0 0.126 0.077 0.274 0.172 0.328l9.978 5.761c0.136 0.078 0.246 -0.005 0.246 -0.186V17.267zm10.737 -5.848c0 -0.14 -0.085 -0.205 -0.191 -0.144L10.402 17.363v2.796c0 0.211 0.128 0.307 0.286 0.216l10.284 -5.937c0.092 -0.053 0.167 -0.196 0.167 -0.319V11.419z" fill="#BBC6E6"></path><path d="m10.632 7.989 -8.249 4.763 8.152 4.707 8.25 -4.763L10.632 7.989z" fill="#243462"></path><path d="m9.927 17.338 1.104 -0.085 0.205 2.06 -0.72 0.416s-0.082 0.086 -0.285 -0.032 -0.305 -2.358 -0.305 -2.358z" fill="#BBC6E6"></path><path d="m1.005 12.936 -0.272 -0.157v1.404l0.272 0.157v-1.404zm0.757 0.437 -0.272 -0.157v1.404l0.272 0.157v-1.404zm0.757 0.437 -0.272 -0.157v1.404l0.272 0.157v-1.404zm0.757 0.437 -0.272 -0.157v1.404l0.272 0.157v-1.404zm5.529 3.6c0.163 0.094 0.295 0.323 0.295 0.51s-0.132 0.264 -0.295 0.17c-0.163 -0.094 -0.295 -0.323 -0.295 -0.51s0.132 -0.264 0.295 -0.17z" fill="#637DC6"></path><path d="M10.051 20.338s0.347 0.279 0.707 -0.003c0.36 -0.282 0.016 -1.08 0.016 -1.08l-0.715 0.002 -0.008 1.081z" fill="#BBC6E6"></path><path d="M10.402 17.495s0.099 0.016 0.213 -0.022c0.059 -0.02 0.107 -0.032 0.165 -0.077l0.568 -0.33v1.343l-0.504 0.294v0.835l0.504 -0.287v0.744l-0.619 0.365s-0.064 0.039 -0.127 0.065a0.424 0.424 0 0 1 -0.108 0.029c-0.018 0.002 -0.036 0.005 -0.051 0.006 -0.024 0.001 -0.041 0.001 -0.041 0.001V17.495z" fill="#8EA1D6"></path><path d="M0.022 11.414c0.037 -0.061 0.207 -0.02 0.207 -0.02l9.956 5.748s0.142 0.141 0.396 0.021c0.231 -0.109 8.767 -5.057 10.318 -5.956 0.155 -0.09 0.239 0.115 0.239 0.115l0 0.243L10.789 17.541s-0.298 0.26 -0.825 -0.029C9.437 17.222 0.006 11.762 0.006 11.762s-0.022 -0.286 0.015 -0.348z" fill="#F3F5FB"></path><path d="m10.411 5.512 0.267 -0.109 10.267 5.703 -0.02 0.113 -0.691 0.374 -9.822 -5.674v-0.407z" fill="#F3F5FB"></path><path d="M20.944 11.107s0.209 0.065 0.194 0.228l-0.122 0.048 -0.136 -0.105 -0.022 -0.122 0.086 -0.05zM0.311 11.402l-0.005 -0.309L10.092 5.442l0.319 0.07v0.383L0.609 11.554l-0.298 -0.152z" fill="#F3F5FB"></path><path d="M10.078 5.45s0.249 -0.201 0.599 -0.046l-0.043 0.131 -0.232 0.222 -0.129 -0.035 -0.1 -0.123 -0.094 -0.148z" fill="#F3F5FB"></path><path d="m10.402 5.83 0.043 -0.036 10.123 5.531c0.03 0.016 0.038 0.031 0.039 0.047 0.001 0.016 -0.006 0.035 -0.034 0.051L18.343 12.692 10.395 8.104l0.006 -2.274z" fill="#375198"></path><path d="M10.341 5.806s0.042 -0.031 0.103 -0.012l-0.001 0.024 -0.042 0.034 -0.053 -0.023 -0.008 -0.023z" fill="#375198"></path><path d="M19.852 13.292c0.163 -0.094 0.295 -0.018 0.295 0.17 0 0.188 -0.132 0.417 -0.295 0.511 -0.163 0.094 -0.295 0.018 -0.295 -0.17 0 -0.188 0.132 -0.417 0.295 -0.511zM18.58 14.3c0 -0.225 -0.137 -0.329 -0.306 -0.231L13.266 16.96c-0.169 0.098 -0.306 0.36 -0.306 0.585 0 0.225 0.137 0.329 0.306 0.231l5.008 -2.892c0.169 -0.097 0.306 -0.359 0.306 -0.585z" fill="#637DC6"></path><path d="M0.006 11.61s-0.082 -0.371 0.414 -0.584l-0.103 0.145c0.542 0.581 0.419 0.665 -0.244 0.344L0.006 11.61z" fill="#F3F5FB"></path><path d="m2.482 12.694 7.92 -4.573V5.844s-0.023 -0.061 -0.066 -0.036c-0.778 0.447 -8.207 4.717 -9.753 5.62 -0.035 0.02 -0.082 0.063 -0.071 0.112 0.009 0.041 0.072 0.089 0.1 0.108 0.316 0.211 1.869 1.047 1.869 1.047z" fill="#375198"></path><path d="M10.573 13.099 0.177 7.098V9.127c0 0.084 0.051 0.182 0.115 0.219l10.117 5.841c0.09 0.052 0.164 -0.003 0.164 -0.124V13.099zm10.736 -6.198L10.573 13.099v2.03c0 0.084 0.051 0.123 0.115 0.087l10.507 -6.066c0.063 -0.036 0.115 -0.135 0.115 -0.219V6.901z" fill="#BBC6E6"></path><path d="m10.521 12.118 0.052 0.981 10.736 -6.198 0.004 -0.817L10.521 12.118z" fill="#4867BC"></path><path d="m0.198 6.071 -0.021 1.026L10.573 13.099v-0.95L0.198 6.071z" fill="#4867BC"></path><path d="M11.47 0.172C11.111 -0.036 10.566 -0.058 10.255 0.121L0.405 5.808c-0.311 0.18 -0.272 0.494 0.087 0.701l9.546 5.511c0.359 0.207 0.903 0.23 1.214 0.05l9.85 -5.687c0.311 -0.18 0.272 -0.494 -0.087 -0.701L11.47 0.172z" fill="#375096"></path><path d="m10.098 12.826 1.104 -0.085L11.407 14.8l-0.72 0.416s-0.082 0.086 -0.285 -0.032 -0.305 -2.358 -0.305 -2.358z" fill="#BBC6E6"></path><path d="M0.172 6.867 10.364 12.714s0.199 0.112 0.452 -0.008c0.254 -0.12 10.494 -6.041 10.494 -6.041l-0.001 0.235L10.96 12.876s-0.298 0.26 -0.825 -0.029C9.609 12.557 0.177 7.098 0.177 7.098l-0.005 -0.231z" fill="#F3F5FB"></path><path d="m1.177 8.063 -0.272 -0.157v1.404l0.272 0.157v-1.404zm0.757 0.437 -0.272 -0.157v1.404l0.272 0.157v-1.404zm0.757 0.437 -0.272 -0.157v1.404l0.272 0.157v-1.404zm0.757 0.437 -0.272 -0.157v1.404l0.272 0.157v-1.404zm5.529 3.554c0.163 0.094 0.295 0.323 0.295 0.51s-0.132 0.264 -0.295 0.17c-0.163 -0.094 -0.295 -0.323 -0.295 -0.51s0.132 -0.264 0.295 -0.17zm11.046 -4.589c0.163 -0.094 0.295 -0.018 0.295 0.17s-0.132 0.417 -0.295 0.511c-0.163 0.094 -0.295 0.018 -0.295 -0.17 0 -0.188 0.132 -0.417 0.295 -0.511z" fill="#637DC6"></path><path d="M10.573 12.982s0.108 0.006 0.221 -0.025c0.059 -0.016 0.108 -0.047 0.166 -0.082l0.558 -0.322v1.007l-0.504 0.291v0.662l0.498 -0.288v0.523l-0.843 0.479s-0.009 0.005 -0.02 0.009a0.174 0.174 0 0 1 -0.027 0.006c-0.016 0.003 -0.049 0.001 -0.049 0.001V12.982z" fill="#8EA1D6"></path><path d="M18.751 9.415c0 -0.225 -0.137 -0.329 -0.306 -0.231L13.437 12.075c-0.169 0.098 -0.306 0.36 -0.306 0.585s0.137 0.329 0.306 0.231l5.008 -2.891c0.169 -0.097 0.306 -0.359 0.306 -0.585z" fill="#637DC6"></path><path d="M16.9 5.526v0.537l-0.372 0.172 -0.075 -0.489 0.447 -0.22z" fill="#98AADA"></path><path d="M11.102 2.502c-0.292 -0.169 -0.735 -0.187 -0.988 -0.041L4.409 5.755c-0.253 0.146 -0.221 0.401 0.071 0.57l5.557 3.208c0.292 0.169 0.735 0.187 0.988 0.041L16.73 6.281c0.253 -0.146 0.221 -0.402 -0.071 -0.57L11.102 2.502z" fill="#98A9D9"></path><path d="M4.239 5.451v0.532l0.224 0.197L4.68 5.749l-0.441 -0.299z" fill="#98AADA"></path><path d="M11.102 1.953c-0.292 -0.169 -0.735 -0.187 -0.988 -0.041L4.409 5.206c-0.253 0.146 -0.221 0.401 0.071 0.57l5.557 3.208c0.292 0.169 0.735 0.187 0.988 0.041l5.705 -3.294c0.253 -0.146 0.221 -0.402 -0.071 -0.57L11.102 1.953z" fill="#4463B9"></path><path d="m10.56 3.075 1.281 0.74v0.247l0.947 0.547h0.397l1.468 0.848 -1.172 0.677h-0.406L12.12 6.684v0.296l-1.46 0.843 -1.332 -0.769v-0.239l-0.949 -0.548h-0.447l-1.447 -0.839 1.245 -0.718 0.44 -0.004 0.937 -0.541 -0.001 -0.25 1.455 -0.84z" fill="#3E5AA9"></path><path d="m10.56 2.855 1.281 0.74v0.247l0.947 0.547h0.397l1.468 0.848 -1.172 0.677h-0.406L12.12 6.464v0.295l-1.46 0.843 -1.332 -0.769v-0.239l-0.949 -0.548h-0.447l-1.447 -0.839 1.245 -0.719 0.44 -0.004 0.937 -0.541 -0.001 -0.25 1.455 -0.84z" fill="#637DC6"></path><path d="M9.148 4.74c0.209 -0.121 0.548 -0.121 0.757 0 0.209 0.121 0.209 0.316 0 0.437 -0.209 0.121 -0.548 0.121 -0.757 0 -0.209 -0.121 -0.209 -0.316 0 -0.437z" fill="#D9DFF1"></path><path d="M9.892 4.582c0.149 -0.086 0.391 -0.086 0.54 0 0.149 0.086 0.149 0.226 0 0.311 -0.149 0.086 -0.391 0.086 -0.54 0 -0.149 -0.086 -0.149 -0.226 0 -0.311z" fill="#D9DFF1"></path><path d="M10.26 4.681c0.307 -0.177 0.805 -0.177 1.112 0 0.307 0.177 0.307 0.465 0 0.642 -0.307 0.177 -0.805 0.177 -1.112 0 -0.307 -0.177 -0.307 -0.465 0 -0.642z" fill="#D9DFF1"></path><path d="M10.568 5.41c0.281 -0.162 0.738 -0.162 1.019 0 0.281 0.162 0.281 0.426 0 0.588 -0.281 0.162 -0.737 0.162 -1.019 0 -0.281 -0.162 -0.281 -0.426 0 -0.588z" fill="#D9DFF1"></path><path d="m9.905 4.74 -0.757 0.437 1.421 0.82 0.757 -0.437 -1.421 -0.82z" fill="#D9DFF1"></path></svg>
                </i>`
            },
            {
                url: 'https://wntheme.com',
                text: '文尼模板網',
                svgPath: `<i role="img" class="n-icon __icon-dark-bzl0uw-d">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 476.127 476.127;" xml:space="preserve" width="16" height="16"><g><path style="fill:#2488FF;" d="M8 2.844c-0.425 0 -0.84 0.052 -1.237 0.15 -1.864 0.46 -3.346 1.937 -3.782 3.842C1.293 7.111 0 8.58 0 10.345c0 1.96 1.594 3.554 3.554 3.554h4.446V2.844z"></path><path style="fill:#006DF0;" d="M13.019 6.837c-0.529 -2.311 -2.597 -3.992 -5.019 -3.992v11.054h4.446c1.96 0 3.554 -1.594 3.554 -3.554 0 -0.676 -0.19 -1.309 -0.519 -1.848 -0.53 -0.867 -1.421 -1.491 -2.462 -1.66z"></path></g></svg>
                </i>`
            }
        ],
        footer: [
            { text: "站長資源", href: "https://3dayseo.com" },
            { text: "文尼模板網", href: "https://wntheme.com" }
        ]
    }
};


function replaceTextInNode(node, replacePairs) {
    if (node.nodeType === Node.TEXT_NODE) {
        let newNodeContent = node.textContent;
        for (const [searchString, replacement] of Object.entries(replacePairs)) {
            if (newNodeContent) {
                if (new RegExp(`${searchString}`).test(newNodeContent)) {
                    const searchRegex = new RegExp(searchString, 'g');
                    newNodeContent = newNodeContent.replace(searchRegex, replacement);
                }
            }
        }
        if (node.textContent !== newNodeContent) {
            node.textContent = newNodeContent;
        }
    } else {
        node.childNodes.forEach(function (childNode) {
            replaceTextInNode(childNode, replacePairs);
        });
    }
}

function replaceHref(rootNode, replacements) {
    if (!rootNode || typeof replacements !== 'object') {
        return;
    }

    const pairs = Object.entries(replacements).map(([search, replace]) => ({search: new RegExp(search, 'g'), replace}));
    if (pairs.length === 0) {
        return;
    }

    function performReplacement(href) {
        let newHref = href;
        pairs.forEach(pair => {
            newHref = newHref.replace(pair.search, pair.replace);
        });
        return newHref !== href ? newHref : null;
    }

    if (rootNode.nodeType === Node.ELEMENT_NODE && rootNode.tagName === 'A') {
        let oldHref = rootNode.getAttribute("href");
        if (oldHref) {
            let newHref = performReplacement(oldHref);
            if (newHref) {
                rootNode.setAttribute("href", newHref);
            }
        }
    } else {
        rootNode.childNodes.forEach(childNode => {
            replaceHref(childNode, replacements);
        });
    }
}

function replaceSrc(rootNode, replacements) {
    if (!rootNode || typeof replacements !== 'object') {
        return;
    }

    const pairs = Object.entries(replacements).map(([search, replace]) => ({search: new RegExp(search, 'g'), replace}));
    if (pairs.length === 0) {
        return;
    }

    function performReplacement(src) {
        let newSrc = src;
        pairs.forEach(pair => {
            newSrc = newSrc.replace(pair.search, pair.replace);
        });
        return newSrc !== src ? newSrc : null;
    }

    if (rootNode.nodeType === Node.ELEMENT_NODE && (rootNode.tagName === 'IMG' || rootNode.tagName === 'VIDEO' || rootNode.tagName === 'AUDIO')) {
        let oldSrc = rootNode.getAttribute("src");
        if (oldSrc) {
            let newSrc = performReplacement(oldSrc);
            if (newSrc) {
                rootNode.setAttribute("src", newSrc);
            }
        }
    } else {
        rootNode.childNodes.forEach(childNode => {
            replaceSrc(childNode, replacements);
        });
    }
}

const styleElement = document.createElement('style');
const cssCode = `
            .kx-alarm-settings {
                width: 36px;
                height: 36px;
                margin-right: 8px;
                background-image: url('/static/images/alarm-settings.svg');
                background-size: contain;
                background-repeat: no-repeat;
            }
        `;
styleElement.textContent = cssCode;
document.head.appendChild(styleElement);

function DeleteElement(ElementId) {
    const secondElement = document.querySelector(ElementId);
    if (secondElement) {
        secondElement.remove();
    }
}

function injectFooter(containerId, footerData) {
    if (footerAdded) return;

    const container = document.querySelector(containerId);
    if (!container) {
        return;
    }

    container.innerHTML = '';

    footerData.forEach(function (data) {
        const button = document.createElement('a');


        button.target = "_blank";
        button.href = data.href;

        const span = document.createElement('span');
        span.className = "ml-8 el-link el-link--primary";
        span.style = "font-size: 1.2rem;"
        span.textContent = data.text;

        button.appendChild(span);

        container.appendChild(button);
    });

    footerAdded = true;
}

function AddLeft(menuSelector, items) {
    if (leftAdded) { // Check if items should be added
        return; // If not, exit the function
    }

    const menu = document.querySelector(menuSelector); // Use querySelector for flexibility
    if (menu) {
        items.forEach(item => {
            const listItem = `
                <li data-v-5d8b732a="" class="menu-item menu-soft">
                    <a data-v-5d8b732a="" href="${item.url}" target="_blank" class="flex justify-start !p-[1.4rem] !pl-[1.6rem]">
                                  ${item.svgPath}
                        <span style="color:#feeb00;font-size:13px" class="ml-[1rem]">${item.text}</span>
                        
                    </a>
                </li>`;
            addObj(menu, 'li', listItem);
        });
        leftAdded = true;
    }


}

function addObj(obj, type, html) {
    var newa = document.createElement(type);
    newa.innerHTML = html
    obj.append(newa)
}

function AddTopJson(jsonData) {
    console.error("2222")
    if (topAdded) {
        return;
    }
    const container = document.getElementsByClassName("home-header-box flex-1");  // Select the container once
    console.error("111111")
    console.error(container)
    if (!container) {
        return;
    }
    if (!jsonData || jsonData.length < 1) {
        return;
    }
    // Loop through each item in the JSON array
    for (let i = 0; i < jsonData.length; i++) {
        const item = jsonData[i];

        const htmlContent = `
          <div data-v-bc70eb09="" class="el-badge ml-16x">
              <a  data-v-bc70eb09="" href="${item.url}" target="_blank" rel="noreferrer noopener" class="el-link el-link--primary" style="color:#4883ff;font-size: 1.2rem;">
                  ${item.text}
              </a>
              <sup class="el-badge__content is-fixed is-dot" style="display: none;"></sup>
          </div>`;

        // Use the container's innerHTML to add the structured HTML
        container.innerHTML += htmlContent;
        topAdded = true
    }
}

setInterval(function () {
    DeleteElement('#layout-body > div > a')
    DeleteElement('div > div > div.mr-16x.el-popover__reference')
    DeleteElement(FLOAT_BAR_NAV_SELECTOR)
    const secondElement2 = document.querySelector(HEADER_SOU);
    if (secondElement2) {
        secondElement2.style.cssText = "pointer-events: none;";
    }

    var icon = document.querySelector('.icon.feishu');
    if (icon) {
        icon.className = 'kx-alarm-settings';
    }
    injectFooter(FOOTER_CONTAINER_ID, config.links.footer);
    AddLeft('div.el-scrollbar__wrap > div > ul', config.links.left)
    // AddTopJson(config.links.top)
    //#layout-body > div > a
    replaceHref(document.body, config.replacements.href);
    replaceTextInNode(document.body, config.replacements.text);
    replaceSrc(document.body, config.replacements.src);
    const textarea = document.querySelector('.el-textarea__inner');
    if (textarea && textarea.placeholder === '请输入飞书机器人URL') {
        textarea.placeholder = '请输入Telegram机器人URL';
    }
}, 10);
