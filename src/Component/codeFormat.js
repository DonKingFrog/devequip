const hljs = require('highlight.js');

// Define Lua syntax highlighting
hljs.registerLanguage('lua', function(hljs) {
  return {
    // Lua Keywords
    keywords: {
      keyword: 'function local if then else end for in do while repeat until return require',
      built_in: 'print gsub match find char len rep sub upper lower concat insert remove sort concat'
    },
    contains: [
      hljs.COMMENT('--(?!\\[\\[)[^\\n]*'), // Single line comments
      {
        className: 'string',
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /`/, end: /`/ }
        ]
      },
      {
        className: 'number',
        variants: [
          { begin: hljs.C_NUMBER_RE },
          { begin: '\\b(true|false)\\b' } // Booleans
        ]
      }
    ]
  };
});

document.querySelectorAll('pre').forEach((pre) => {
  pre.classList.add("line-numbers");

  if (pre.querySelector("code")) {
    pre.querySelector("code").classList.add("language-lua");
    hljs.highlightBlock(pre.querySelector("code"));
  }
})