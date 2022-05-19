/**
 * Vue CodeMirror6 Component
 *
 * @license MIT
 * @author Logue {@link logue@hotmail.co.jp}
 * @copyright 2022 Masashi Yoshikawa {@link https://logue.dev/} All rights reserved.
 * @see {@link https://github.com/logue/vue-codemirror6}
 */

import CodeMirror from './components/CodeMirror.vue';
import { install, isVue2, App } from 'vue-demi';

const installCodeMirror = isVue2
  ? (app: App) => {
      app.component('CodeMirror', CodeMirror);
    }
  : install();

export { CodeMirror as default, installCodeMirror as install };
