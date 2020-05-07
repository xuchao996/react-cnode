import React from "react";
import "./index.scss";

export default function Footer(props) {
  return (
    <footer className="footer">
      <a class="dark" href="/#">
        RSS
      </a>
      |
      <a class="dark" href="https://github.com/cnodejs/nodeclub/">
        源码地址
      </a>
      <p>
        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
        的技术研究。
      </p>
    </footer>
  );
}
