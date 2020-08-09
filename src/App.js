import React, { useState, useEffect } from 'react';
import wangeditor from '@wangeditor-team/we-next'

let editor = null
function App() {

  const [content, setContent] = useState('')

  useEffect(() => {
    editor = new wangeditor("#wangeditor")

    editor.config.onchange = (newHtml) => {
      setContent(newHtml)
    }
    /**一定要创建 */
    editor.create()
  }, [])

  // 获取html方法1
  function getHtml() {
    alert(content)
  }

  // 获取html方法2
  function getHtml1() {
    alert(editor.txt.html())
  }

  // 获取text
  function getText() {
    alert(editor.txt.text())
  }

  return (
    <div>
      <div id="wangeditor"></div>

      <button onClick={getHtml}>获取html</button>
      <button onClick={getHtml1}>获取html1</button>
      <button onClick={getText}>获取text</button>
    </div>
  );
}

export default App;
