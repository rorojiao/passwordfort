const LANG = {
  en: {
    brand: "PasswordFort",
    nav_home: "Home",
    nav_generator: "Generator",
    nav_strength: "Strength Check",
    lang_btn: "中文",
    hero_title: 'Password<span>Fort</span> 🔐',
    hero_sub: "Generate strong passwords and check their strength — all in your browser, nothing leaves your device.",
    btn_generate: "🎲 Generate Password",
    btn_check: "🛡️ Check Strength",
    feat1_title: "Secure Generation",
    feat1_desc: "Cryptographically random passwords with customizable length and character sets.",
    feat2_title: "Strength Analysis",
    feat2_desc: "Real-time scoring with crack time estimation and common password detection.",
    feat3_title: "100% Client-Side",
    feat3_desc: "Everything runs in your browser. No data is ever sent to any server.",
    gen_title: "Password Generator",
    gen_sub: "Create strong, unique passwords instantly",
    length: "Length",
    uppercase: "Uppercase (A-Z)",
    lowercase: "Lowercase (a-z)",
    digits: "Digits (0-9)",
    symbols: "Symbols (!@#$...)",
    generate: "🎲 Generate",
    batch: "Batch Generate",
    batch_count: "Count",
    copy: "📋",
    copied: "Copied!",
    str_title: "Password Strength Checker",
    str_sub: "Enter a password to analyze its security",
    str_placeholder: "Type or paste a password...",
    str_score: "Score",
    str_length: "Length",
    str_diversity: "Diversity",
    str_crack_time: "Crack Time",
    str_common: "Common Password",
    str_verdict_0: "Very Weak",
    str_verdict_1: "Weak",
    str_verdict_2: "Fair",
    str_verdict_3: "Strong",
    str_verdict_4: "Very Strong",
    str_yes: "Yes ⚠️",
    str_no: "No ✅",
    footer_text: "PasswordFort — Free, open-source, client-side password tools.",
    donate_label: "Support us (ETH/EVM):",
  },
  zh: {
    brand: "PasswordFort",
    nav_home: "首页",
    nav_generator: "密码生成",
    nav_strength: "强度检测",
    lang_btn: "EN",
    hero_title: 'Password<span>Fort</span> 🔐',
    hero_sub: "生成强密码、检测密码强度 —— 全部在浏览器完成，数据绝不离开你的设备。",
    btn_generate: "🎲 生成密码",
    btn_check: "🛡️ 检测强度",
    feat1_title: "安全生成",
    feat1_desc: "使用密码学安全随机数，支持自定义长度和字符集。",
    feat2_title: "强度分析",
    feat2_desc: "实时评分，估算破解时间，检测常见弱密码。",
    feat3_title: "100% 本地运行",
    feat3_desc: "所有计算在浏览器完成，不会向任何服务器发送数据。",
    gen_title: "密码生成器",
    gen_sub: "即时创建强大、唯一的密码",
    length: "长度",
    uppercase: "大写字母 (A-Z)",
    lowercase: "小写字母 (a-z)",
    digits: "数字 (0-9)",
    symbols: "特殊字符 (!@#$...)",
    generate: "🎲 生成",
    batch: "批量生成",
    batch_count: "数量",
    copy: "📋",
    copied: "已复制！",
    str_title: "密码强度检测",
    str_sub: "输入密码以分析其安全性",
    str_placeholder: "输入或粘贴密码...",
    str_score: "评分",
    str_length: "长度",
    str_diversity: "多样性",
    str_crack_time: "破解时间",
    str_common: "常见密码",
    str_verdict_0: "非常弱",
    str_verdict_1: "弱",
    str_verdict_2: "一般",
    str_verdict_3: "强",
    str_verdict_4: "非常强",
    str_yes: "是 ⚠️",
    str_no: "否 ✅",
    footer_text: "PasswordFort — 免费、开源、纯客户端密码工具。",
    donate_label: "打赏支持 (ETH/EVM):",
  }
};

let currentLang = localStorage.getItem('pf-lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('pf-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (LANG[lang][key]) {
      if (el.tagName === 'INPUT' && el.type !== 'checkbox') el.placeholder = LANG[lang][key];
      else el.innerHTML = LANG[lang][key];
    }
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = LANG[lang].lang_btn;
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'zh' : 'en');
}

document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
