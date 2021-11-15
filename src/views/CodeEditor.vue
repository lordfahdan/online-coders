<template>
  <div class="header">
    <button id="run-btn" @click.prevent="runProgram">Run</button>
  </div>
  <div class="editor">
    <div class="code">
      <div class="canvas-editor">
        <div class="absolute-top-title">
          <h5>HTML</h5>
        </div>
        <textarea id="html-code"></textarea>
      </div>
      <div class="canvas-editor">
        <div class="absolute-top-title">
          <h5>CSS</h5>
        </div>
        <textarea id="css-code"></textarea>
      </div>
      <div class="canvas-editor">
        <div class="absolute-top-title">
          <h5>Javascript</h5>
        </div>
        <textarea id="js-code"></textarea>
      </div>
    </div>
    <div class="preview">
      <iframe id="preview-window"></iframe>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

// theme;
import 'codemirror/theme/dracula.css';

// lang
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js';

// edit
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/edit/continuelist.js';
import 'codemirror/addon/edit/trailingspace.js';

// hint
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';


import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(){
    const codeHtml = ref()
    const codeCss = ref()
    const codeJS = ref()

    const runProgram = () => {
      let html = codeHtml.value.getValue();
      let css = "<style>" + codeCss.value.getValue() + "</style>"
      let js = "<scri" + "pt>" + codeJS.value.getValue() + "</scri" + "pt>"
      document.getElementById('preview-window').contentWindow.location.reload()
      let previewWindow = document.getElementById('preview-window').contentWindow.document;
      previewWindow.open();
      previewWindow.write(html+css+js);
      previewWindow.close();
    }

    return {
      codeHtml,
      codeCss,
      codeJS,
      runProgram
    }
  },
  mounted(){
    this.codeHtml = CodeMirror.fromTextArea(document.getElementById('html-code'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'xml',
      autoCloseTags: true,
      showHint: true,
      lineWrapping: true,
      extraKeys: {
        "Shift-Space": "autocomplete"
      },
    })
    this.codeCss = CodeMirror.fromTextArea(document.getElementById('css-code'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'css',
      autoCloseTags: true,
      showHint: true,
      lineWrapping: true,
      extraKeys: {
        "Shift-Space": "autocomplete"
      },
    })
    this.codeJS = CodeMirror.fromTextArea(document.getElementById('js-code'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      autoCloseTags: true,
      showHint: true,
      lineWrapping: true,
      extraKeys: {
        "Shift-Space": "autocomplete"
      },
    })
  }

})
</script>