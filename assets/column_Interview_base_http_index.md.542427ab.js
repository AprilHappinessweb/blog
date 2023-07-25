import{_ as a,a as t,b as l}from"./chunks/image-3.7396ee6f.js";import{_ as e,o as i,c as r,V as o}from"./chunks/framework.5ff5cf85.js";const h="/blog/assets/image-1.5a7ffc6e.png",n="/blog/assets/image-4.6f8321b2.png",s="/blog/assets/image-5.45918a05.png",c="/blog/assets/image-6.08899e41.png",x=JSON.parse('{"title":"浏览器http","description":"","frontmatter":{},"headers":[],"relativePath":"column/Interview/base_http/index.md","filePath":"column/Interview/base_http/index.md"}'),p={name:"column/Interview/base_http/index.md"},d=o('<h1 id="浏览器http" tabindex="-1">浏览器http <a class="header-anchor" href="#浏览器http" aria-label="Permalink to &quot;浏览器http&quot;">​</a></h1><h2 id="http1-1-x-2-3区别" tabindex="-1">http1，1.x, 2, 3区别 <a class="header-anchor" href="#http1-1-x-2-3区别" aria-label="Permalink to &quot;http1，1.x, 2, 3区别&quot;">​</a></h2><h3 id="_1-什么是http" tabindex="-1">1. 什么是HTTP？ <a class="header-anchor" href="#_1-什么是http" aria-label="Permalink to &quot;1. 什么是HTTP？&quot;">​</a></h3><p>HTTP代表超文本传输协议，它是自1989年问世以来用于在万维网上进行通信的应用程序协议。HTTP是互联网上的计算机和服务器用于请求和发送信息的一种方法。本质上，HTTP是允许服务器和计算机相互通信的工具。而HTTP利用一些简单的方法在计算机之间发送和接收信息。</p><h3 id="_2-什么是http-2" tabindex="-1">2. 什么是HTTP/2？ <a class="header-anchor" href="#_2-什么是http-2" aria-label="Permalink to &quot;2. 什么是HTTP/2？&quot;">​</a></h3><p>HTTP/2是HTTP协议的第一个主要修订版，旨在通过实施各种优化技术来减少网页加载延迟。HTTP/2由IETF于2015年5月发布，旨在成为与所有可用Web浏览器兼容的标准通信方法。 值得注意的是，HTTP/2不是代替HTTP/1.1的完整替代品，而是要添加到HTTP原始版本所提供的现有功能中，因此，它支持所有核心概念，例如HTTP状态代码、方法和标头。而且，尽管HTTP/1.1和HTTP/2都共享语义以促进这两个协议之间的通信，但是它们用于传递数据的方法却可能大不相同。</p><h3 id="_3-什么是http-3" tabindex="-1">3. 什么是HTTP/3？ <a class="header-anchor" href="#_3-什么是http-3" aria-label="Permalink to &quot;3. 什么是HTTP/3？&quot;">​</a></h3><p>HTTP/3是基于QUIC网络协议于2020年8月发布的HTTP的新版本。最初是作为通过通过UDP传输加密数据来改进HTTP/2的方法而引入的，此新版本的HTTP旨在对该表进行一些关键的改进。在特定情况下启用HTTP/3时，同样不是为了完全替换HTTP/2，而是要从提高速度中受益，如果HTTP/3不可用，则可以始终使用HTTP/2来回退。</p><h3 id="_4-http-3、http-1和http-2有何不同" tabindex="-1">4. HTTP/3、HTTP/1和HTTP/2有何不同？ <a class="header-anchor" href="#_4-http-3、http-1和http-2有何不同" aria-label="Permalink to &quot;4. HTTP/3、HTTP/1和HTTP/2有何不同？&quot;">​</a></h3><ul><li><strong>网络协议。</strong> HTTP/3与较旧版本之间最明显的区别也许是HTTP/3完全基于QUIC，后者使用UDP。</li><li><strong>标头压缩。</strong> HTTP/3使用QPACK，QPACK是一种压缩格式，用于表示HTTP over QUIC中使用的HTTP标头。虽然QPACK在功能上类似于HTTP/2使用的HPACK，但QPACK打算带来一些改进。</li><li><strong>性能。</strong> 与HTTP版本1和2相比，它还有助于进一步提高性能。</li></ul><h2 id="http状态码" tabindex="-1">http状态码 <a class="header-anchor" href="#http状态码" aria-label="Permalink to &quot;http状态码&quot;">​</a></h2><h3 id="http状态码分类" tabindex="-1">http状态码分类 <a class="header-anchor" href="#http状态码分类" aria-label="Permalink to &quot;http状态码分类&quot;">​</a></h3><ul><li>1xx - 服务器收到请求。</li><li>2xx - 请求成功，如 200。</li><li>3xx - 重定向，如 302。</li><li>4xx - 客户端错误，如 404。</li><li>5xx - 服务端错误，如 500。</li></ul><h3 id="常见的http状态码" tabindex="-1">常见的http状态码 <a class="header-anchor" href="#常见的http状态码" aria-label="Permalink to &quot;常见的http状态码&quot;">​</a></h3><ul><li>200 - 成功。</li><li>301 - 永久重定向（配合 location，浏览器自动处理）。</li><li>302 - 临时重定向（配合 location，浏览器自动处理）。</li><li>304 - 资源未被修改。</li><li>403 - 没权限。</li><li>404 - 资源未找到。</li><li>500 - 服务器错误。</li><li>504 - 网关超时。</li></ul><h2 id="http缓存" tabindex="-1">http缓存 <a class="header-anchor" href="#http缓存" aria-label="Permalink to &quot;http缓存&quot;">​</a></h2><ul><li>关于缓存的介绍</li><li>http缓存策略（强制缓存 + 协商缓存）</li><li>刷新操作方式，对缓存的影响。</li></ul><h3 id="_1-关于缓存" tabindex="-1">1. 关于缓存 <a class="header-anchor" href="#_1-关于缓存" aria-label="Permalink to &quot;1. 关于缓存&quot;">​</a></h3><blockquote><p>什么是缓存？把一些不需要重新获取的内容再重新获取一次 为什么需要缓存？网络请求相比于CUP的计算和页面渲染是非常非常慢的。 哪些资源可以被缓存？静态资源，比如js、css、img。</p></blockquote><h3 id="_2-1-强制缓存" tabindex="-1">2.1 强制缓存 <a class="header-anchor" href="#_2-1-强制缓存" aria-label="Permalink to &quot;2.1 强制缓存&quot;">​</a></h3><p><img src="'+a+'" alt="Alt text"></p><p>Cache-Control：</p><ul><li>在 Response Headers 中。</li><li>控制强制缓存的逻辑。</li><li>例如 Cache-Control: max-age=3153600（单位是秒）</li></ul><p>Cache-Control 有哪些值：</p><ul><li>max-age：缓存最大过期时间。</li><li>no-cache：可以在客户端存储资源，每次都必须去服务端做新鲜度校验，来决定从服务端获取新的资源（200）还是使用客户端缓存（304）。</li><li>no-store：永远都不要在客户端存储资源，永远都去原始服务器去获取资源</li></ul><h3 id="_2-2-协商缓存-对比缓存" tabindex="-1">2.2 协商缓存（对比缓存） <a class="header-anchor" href="#_2-2-协商缓存-对比缓存" aria-label="Permalink to &quot;2.2 协商缓存（对比缓存）&quot;">​</a></h3><ul><li>服务端缓存策略。</li><li>服务端判断客户端资源，是否和服务端资源一样。</li><li>一致则返回 304，否则返回 200 和最新的资源。</li></ul><p><img src="'+h+'" alt="Alt text"></p><p>资源标识：</p><ul><li>在 Response Headers 中，有两种。</li><li>Last-Modified：资源的最后修改时间。</li><li>Etag：资源的唯一标识（一个字符串，类似于人类的指纹）。</li></ul><h4 id="last-modified" tabindex="-1">Last-Modified： <a class="header-anchor" href="#last-modified" aria-label="Permalink to &quot;Last-Modified：&quot;">​</a></h4><p><img src="'+t+'" alt="Alt text"> 服务端拿到 if-Modified-Since 之后拿这个时间去和服务端资源最后修改时间做比较，如果一致则返回 304 ，不一致（也就是资源已经更新了）就返回 200 和新的资源及新的 Last-Modified。</p><h4 id="etag" tabindex="-1">Etag： <a class="header-anchor" href="#etag" aria-label="Permalink to &quot;Etag：&quot;">​</a></h4><p><img src="'+l+'" alt="Alt text"> 其实 Etag 和 Last-Modified 一样的，只不过 Etag 是服务端对资源按照一定方式（比如 contenthash）计算出来的唯一标识，就像人类指纹一样，传给客户端之后，客户端再传过来时候，服务端会将其与现在的资源计算出来的唯一标识做比较，一致则返回 304，不一致就返回 200 和新的资源及新的 Etag。</p><h3 id="_2-3-两者比较" tabindex="-1">2.3 两者比较： <a class="header-anchor" href="#_2-3-两者比较" aria-label="Permalink to &quot;2.3 两者比较：&quot;">​</a></h3><ul><li>优先使用 Etag。</li><li>Last-Modified 只能精确到秒级。</li><li>如果资源被重复生成，而内容不变，则 Etag 更精确。</li></ul><h3 id="_2-4-综述" tabindex="-1">2.4. 综述 <a class="header-anchor" href="#_2-4-综述" aria-label="Permalink to &quot;2.4. 综述&quot;">​</a></h3><p><img src="'+n+'" alt="Alt text"></p><h3 id="_3-三种刷新操作对-http-缓存的影响" tabindex="-1">3. 三种刷新操作对 http 缓存的影响 <a class="header-anchor" href="#_3-三种刷新操作对-http-缓存的影响" aria-label="Permalink to &quot;3. 三种刷新操作对 http 缓存的影响&quot;">​</a></h3><ul><li>正常操作：地址栏输入 url，跳转链接，前进后退等。</li><li>手动刷新：f5，点击刷新按钮，右键菜单刷新。</li><li>强制刷新：ctrl + f5，shift+command+r。</li></ul><p><strong>正常操作：强制缓存有效，协商缓存有效。 手动刷新：强制缓存失效，协商缓存有效。 强制刷新：强制缓存失效，协商缓存失效。</strong></p><h3 id="_4-面试" tabindex="-1">4. 面试 <a class="header-anchor" href="#_4-面试" aria-label="Permalink to &quot;4. 面试&quot;">​</a></h3><p>对于更多面试中可能出现的问题，我还是建议精读这篇三元的文章：<a href="https://juejin.cn/post/6844904100035821575" target="_blank" rel="noreferrer">HTTP 灵魂之问，巩固你的 HTTP 知识体系。</a></p><p>比如会被经常问到的：GET 和 POST 的区别。</p><blockquote><p>从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。 从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。 从参数的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。 从幂等性的角度，GET 是幂等的，而 POST 不是。(幂等表示执行相同的操作，结果也是相同的) 从 TCP 的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)</p></blockquote><p>HTTP/2 有哪些改进？（很大可能问原理）</p><p>头部压缩。 多路复用。 服务器推送。</p><p>关于 HTTPS 的一些原理，可以阅读这篇文章：<a href="https://juejin.cn/post/6844904038509576199" target="_blank" rel="noreferrer">这一次，彻底理解 https 原理。</a>接着你可以观看这个视频进行更进一步的学习：<a href="https://www.bilibili.com/video/BV1XL411b7KZ/?p=1" target="_blank" rel="noreferrer">HTTPS 底层原理，面试官直接下跪，唱征服！</a></p><p>关于跨域问题，大部分文章都是理论性比较强，还不如读这篇文章，聊聊跨域的原理与解决方法，讲的非常清晰，我个人觉得对付面试就是先知道使用流程，把这个流程能自己说出来，然后再讲下原理即可。</p><h2 id="从输入url到页面显示之间究竟发生了什么" tabindex="-1">从输入URL到页面显示之间究竟发生了什么 <a class="header-anchor" href="#从输入url到页面显示之间究竟发生了什么" aria-label="Permalink to &quot;从输入URL到页面显示之间究竟发生了什么&quot;">​</a></h2><ol><li>DNS 解析:将域名解析成 IP 地址</li><li>TCP 连接：TCP 三次握手</li><li>发送 HTTP 请求</li><li>服务器处理请求并返回 HTTP 报文</li><li>浏览器解析渲染页面</li><li>断开连接：TCP 四次挥手 <img src="'+s+'" alt="Alt text"></li></ol><h2 id="浏览器渲染机制简要解析" tabindex="-1">浏览器渲染机制简要解析 <a class="header-anchor" href="#浏览器渲染机制简要解析" aria-label="Permalink to &quot;浏览器渲染机制简要解析&quot;">​</a></h2><p><img src="'+c+'" alt="Alt text"></p><h2 id="重排、重绘、合成" tabindex="-1">重排、重绘、合成 <a class="header-anchor" href="#重排、重绘、合成" aria-label="Permalink to &quot;重排、重绘、合成&quot;">​</a></h2><blockquote><p>简单地总结下两者的概念：</p><ul><li>重排：当修改了元素的宽高、新增或者删除都会触发浏览器重新布局，渲染进程的流水线上的布局之后的东西都要重跑一遍，重拍的开销非常大。</li><li>重绘：没有改变相对位置，而是改变了其他的样式属性，跳过了布局和分层，执行效率会比重排高一些。</li><li>合成：本质上是利用了浏览器的一个分层机制来进行一些处理和变化，类似css的transform，跳过了布局和绘制的阶段，只进行一些栅格化的操作，因为栅格化的操作并不占用主线程，效率比重排和重绘高很多。</li></ul></blockquote><h3 id="如何减少重排和重绘" tabindex="-1">如何减少重排和重绘？ <a class="header-anchor" href="#如何减少重排和重绘" aria-label="Permalink to &quot;如何减少重排和重绘？&quot;">​</a></h3><ul><li>最小化重绘和重排，比如样式集中改变，使用添加新样式类名 .class 或 cssText 。</li><li>批量操作 DOM，比如读取某元素 offsetWidth 属性存到一个临时变量，再去使用，而不是频繁使用这个计算属性；又比如利用 document.createDocumentFragment() 来添加要被添加的节点，处理完之后再插入到实际 DOM 中。</li><li>使用 <strong>absolute</strong> 或 <strong>fixed</strong> 使元素脱离文档流，这在制作复杂的动画时对性能的影响比较明显。</li><li>开启 GPU 加速，利用 css 属性 transform 、will-change 等，比如改变元素位置，我们使用 translate 会比使用绝对定位改变其 left 、top 等来的高效，因为它不会触发重排或重绘，transform 使浏览器为元素创建⼀个 GPU 图层，这使得动画元素在一个独立的层中进行渲染。当元素的内容没有发生改变，就没有必要进行重绘。</li></ul><h2 id="跨域处理" tabindex="-1">跨域处理 <a class="header-anchor" href="#跨域处理" aria-label="Permalink to &quot;跨域处理&quot;">​</a></h2><ul><li>跨域是由浏览器的同源策略造成的，所谓同源，即域名、协议、端口均相同。</li><li>CORS（跨来源资源共享），通过添加HTTP头信息，使浏览器判断是否可以发起跨域访问。</li><li>浏览器将跨域请求分为两类：简单请求和非简单请求。简单请求采取先请求后判断的方式，非简单请求采取预检请求的方式判断是否允许跨域访问。</li><li>解决跨域通常采用服务端代理转发和配置CORS两种方式。</li></ul><h2 id="web存储" tabindex="-1">Web存储 <a class="header-anchor" href="#web存储" aria-label="Permalink to &quot;Web存储&quot;">​</a></h2><h3 id="_1-cookie" tabindex="-1">1. cookie <a class="header-anchor" href="#_1-cookie" aria-label="Permalink to &quot;1. cookie&quot;">​</a></h3><ul><li>本身用于浏览器和 server 通讯。</li><li>被“借用”到本地存储来的。</li><li>可用 document.cookie = &#39;...&#39; 来修改。</li></ul><p>其缺点：</p><ul><li>存储大小限制为 4KB。</li><li>http 请求时需要发送到服务端，增加请求数量。</li><li>只能用 document.cookie = &#39;...&#39; 来修改，太过简陋。</li></ul><h3 id="_2-localstorage-和-sessionstorage" tabindex="-1">2. localStorage 和 sessionStorage <a class="header-anchor" href="#_2-localstorage-和-sessionstorage" aria-label="Permalink to &quot;2. localStorage 和 sessionStorage&quot;">​</a></h3><ul><li>HTML5 专门为存储来设计的，最大可存 5M。</li><li>API 简单易用， setItem getItem。</li><li>不会随着 http 请求被发送到服务端。</li></ul><p>它们的区别：</p><ul><li>localStorage 数据会永久存储，除非代码删除或手动删除。</li><li>sessionStorage 数据只存在于当前会话，浏览器关闭则清空。</li><li>一般用 localStorage 会多一些。</li></ul><h2 id="网络安全" tabindex="-1">网络安全 <a class="header-anchor" href="#网络安全" aria-label="Permalink to &quot;网络安全&quot;">​</a></h2><h3 id="常见的攻击方式" tabindex="-1">常见的攻击方式 <a class="header-anchor" href="#常见的攻击方式" aria-label="Permalink to &quot;常见的攻击方式&quot;">​</a></h3><ol><li>SQL注入（SQL Injection）：攻击者通过在Web应用程序的输入框等地方注入恶意的SQL语句，从而获取、修改、删除数据库中的数据。</li><li>XSS（Cross-Site Scripting）：攻击者通过在Web页面中插入恶意的脚本代码，使得用户在访问页面时执行该恶意脚本，进而窃取用户敏感信息、劫持用户会话等。</li><li>CSRF（Cross-Site Request Forgery）：攻击者通过伪造用户的请求，利用用户的登录状态发起恶意请求，以用户身份执行某些操作，如发表评论、转账等。</li><li>点击劫持（Clickjacking）：攻击者通过透明的覆盖层将合法的点击事件转移到恶意的位置上，诱导用户进行误操作，如点击危险按钮或链接。</li><li>中间人攻击（Man-in-the-Middle Attack）：攻击者在通信的两端之间插入自己的节点，以窃取、篡改或伪造通信内容，获取用户的敏感信息。</li></ol><h3 id="防御措施" tabindex="-1">防御措施 <a class="header-anchor" href="#防御措施" aria-label="Permalink to &quot;防御措施&quot;">​</a></h3><ol><li>防御XSS： <ul><li>输入检查和过滤：对用户输入的数据进行验证和过滤，并对特殊字符进行转义。</li><li>输出编码：将动态生成的内容进行适当的编码，避免脚本注入。</li><li>使用HTTP头设置X-XSS-Protection：启用浏览器内置的XSS过滤功能，限制恶意脚本的执行。</li></ul></li><li>防御CSRF： <ul><li>验证码（CAPTCHA）：使用验证码来验证用户的操作，确保请求是由真实用户发起的。</li><li>同源策略和CSRF令牌：在请求中添加一个随机生成的令牌，在服务器端进行验证，确保请求来自合法的源。</li><li>Referer检查：限制请求来源，只接受特定的Referer头部或同源请求。</li></ul></li><li>防御点击劫持： <ul><li>使用X-Frame-Options头：设置页面不允许被嵌套在iframe中，防止点击劫持攻击。</li><li>JavaScript防御：通过JavaScript代码检测当前页面是否处于顶层窗口，并阻止页面在iframe中展示。</li><li>安全策略：使用Content Security Policy（CSP）来限制资源加载和脚本执行的策略，防止恶意代码的注入。</li></ul></li><li>防御中间人攻击： <ul><li>加密通信：使用HTTPS协议进行加密通信，确保通信内容不被窃听和篡改。</li><li>数字证书：使用受信任的数字证书来验证服务器身份，防止中间人劫持并伪造证书。</li><li>安全通信协议：使用安全的通信协议，如TLS/SSL，确保通信的完整性和机密性。</li></ul></li></ol><p>此内容由“晓”整理。</p><h2 id="推荐文章和视频" tabindex="-1">推荐文章和视频 <a class="header-anchor" href="#推荐文章和视频" aria-label="Permalink to &quot;推荐文章和视频&quot;">​</a></h2><h3 id="_1-30分钟弄懂浏览器历史与渲染基本流程-浏览器工作原理入门教程" tabindex="-1">1. <a href="https://www.bilibili.com/video/BV1tc41157Va/?spm_id_from=333.337.search-card.all.click&amp;vd_source=1a8169a934e13ebae47b8fee74976ed2" target="_blank" rel="noreferrer">30分钟弄懂浏览器历史与渲染基本流程 / 浏览器工作原理入门教程</a> <a class="header-anchor" href="#_1-30分钟弄懂浏览器历史与渲染基本流程-浏览器工作原理入门教程" aria-label="Permalink to &quot;1. [30分钟弄懂浏览器历史与渲染基本流程 / 浏览器工作原理入门教程](https://www.bilibili.com/video/BV1tc41157Va/?spm_id_from=333.337.search-card.all.click&amp;vd_source=1a8169a934e13ebae47b8fee74976ed2)&quot;">​</a></h3><blockquote><p>该视频学习要点笔记：</p><ul><li>0:00~08:00 历史</li><li>08:00 进程</li><li>11:02 网络协议补充</li><li>13:08 http请求流程</li><li>14:17 Chrome工作原理（从输入URL到页面显示之间究竟发生了什么）</li><li>17:51 渲染进程</li><li>21:09 优化：预解析操作</li><li>24:41 重排、重绘、合成</li></ul></blockquote><h3 id="_2-小林coding之http篇" tabindex="-1">2. <a href="https://xiaolincoding.com/network/2_http/http_interview.html#http-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5" target="_blank" rel="noreferrer">小林coding之Http篇</a> <a class="header-anchor" href="#_2-小林coding之http篇" aria-label="Permalink to &quot;2. [小林coding之Http篇](https://xiaolincoding.com/network/2_http/http_interview.html#http-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)&quot;">​</a></h3><h2 id="参考来源" tabindex="-1">参考来源 <a class="header-anchor" href="#参考来源" aria-label="Permalink to &quot;参考来源&quot;">​</a></h2><blockquote><p>来自：vortesnail ——《做了一份前端面试复习计划，保熟～》(稀土掘金)<br> 链接：<a href="https://juejin.cn/post/7061588533214969892" target="_blank" rel="noreferrer">https://juejin.cn/post/7061588533214969892</a></p></blockquote><blockquote><p>来自：williamife ——《从URL输入到页面展现到底发生什么？》(稀土掘金)<br> 链接：<a href="https://juejin.cn/post/6844903784229896199" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903784229896199</a></p></blockquote><blockquote><p>来自：高低肩真的难受 ——《30分钟弄懂浏览器历史与渲染基本流程 / 浏览器工作原理入门教程》(bilibili)<br> 链接：<a href="https://www.bilibili.com/video/BV1tc41157Va/?spm_id_from=333.337.search-card.all.click&amp;vd_source=1a8169a934e13ebae47b8fee74976ed2" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1tc41157Va/?spm_id_from=333.337.search-card.all.click&amp;vd_source=1a8169a934e13ebae47b8fee74976ed2</a></p></blockquote><blockquote><p>来自：WangHaoyu ——《全方位解析浏览器渲染原理》(稀土掘金)<br> 链接：<a href="https://zhuanlan.zhihu.com/p/458664335" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/458664335</a></p></blockquote><blockquote><p>来自：陈纪庚 ——《你真的了解回流和重绘吗》(稀土掘金)<br> 链接：<a href="https://juejin.cn/post/6844903779700047885" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903779700047885</a></p></blockquote><blockquote><p>来自：程序员顺仔 ——《聊聊跨域的原理与解决方法》(稀土掘金)<br> 链接：<a href="https://juejin.cn/post/6844903779700047885" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903779700047885</a></p></blockquote>',85),u=[d];function b(T,P,m,_,f,q){return i(),r("div",null,u)}const H=e(p,[["render",b]]);export{x as __pageData,H as default};
