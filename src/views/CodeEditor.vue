<template>
  <div class="header">
    <button id="run-btn" @click.prevent="">Run</button>
  </div>
  <div class="editor">
    <div class="code">
      <textarea id="js-code" v-model="content"></textarea>
    </div>
    <div class="preview">
      <iframe id="preview-window"></iframe>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css'
// theme;
import 'codemirror/theme/dracula.css';

// lang
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlembedded/htmlembedded.js';

// edit
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/edit/continuelist.js';
import 'codemirror/addon/edit/trailingspace.js';

// hint
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';


import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(){
    const content = ref()
    const cm = ref()
    return {
      content,
      cm,
    }
  },
  mounted(){
    this.cm = CodeMirror.fromTextArea(document.getElementById('js-code'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      tabSize: 4,
      autoCloseTags: true,
      showHint: true,
      lineWrapping: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete"
      },
    })
  }

})
</script>